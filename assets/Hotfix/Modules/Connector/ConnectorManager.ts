import {GameNet, MsgPendingData} from "db://assets/Hotfix/Net/GameNet";
import { GTimer, TimerManager } from "db://assets/Hotfix/pkg/Updater/TimerManager";
import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";
import { Long } from "protobufjs";
import { SplunkManager } from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import { LaunchUI } from "db://assets/Scripts/GameLaunch/LaunchUI";
import { LobbyManager } from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import { UserManager } from "db://assets/Hotfix/Modules/Connector/UserManager";
import { RedPointManager } from "db://assets/Hotfix/Modules/Connector/RedPointManager";
import { SYSCoroutineUtil } from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import { UIManager } from "db://assets/Hotfix/pkg/UI/UIManager";
import { GameUtilsManager } from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import { VersionManager } from "db://assets/Hotfix/pkg/Manager/VersionManager";
import { UIUtil } from "db://assets/Hotfix/pkg/UI/UIUtil";
import * as cc from "cc";
import { SceneManager } from "db://assets/Hotfix/pkg/Scene/SceneManager";
import { SceneConfig } from "db://assets/Hotfix/Scenes/Config/SceneConfig";
import { UILobbyMainView } from "db://assets/Hotfix/UI/UILobbyMain/UILobbyMainView";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {LoginView} from "db://assets/Hotfix/Modules/Login/LoginView";
import {NetworkManager} from "db://assets/Hotfix/Modules/Connector/NetworkManager";
/**
 * 游戏服务器-->登录管理器(Connect管理器)
 * 规则
 * 1:cs服务器的游戏服务器登录入口；
 * 2:集群cs服务器的游戏服务器登录入口；
 *
 * added by yh @ 2024-12-17
 */
export class ConnectorManager {
    private static instance: ConnectorManager;
    private keepalive_timer: GTimer;

    private reconnect_times: number;

    private ServerTime: number | Long;
    private delayTimeout: GTimer = null;
    private btn_visitor: cc.Button;
    private btn_weixin: cc.Button;


    private authToken: string;
    private gameServerAddress: string;

    public static get Instance(): ConnectorManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance;
    }
    constructor() {

        this.reconnect_times = 3;//重新连接时间

        this.RegisterProtocolHandler();
    }
    public SetAuthToken(AuthToken: string, GameServerAddress: string) {
        this.authToken = AuthToken
        this.gameServerAddress = GameServerAddress
    }
    public ConnectServer() {
        NetworkManager.Instance.ConnectServer();
    }
    public GetAuthToken(): string {
        return this.authToken;
    }
    public GetGameServerAddress():string{
        return this.gameServerAddress;
    }
    //#region ==start===注册消息处理消息=======================================

    private RegisterProtocolHandler(): void {
        //登录成功
        GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_Login, this.Login_LoginHandler, this);
        GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_KeepAlive, this.KeepAliveHandler, this);
        GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_Reconnect, this.ReconnectHandler, this);
        GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_MultiUserLogin,this.MultiUserLoginHandler,this);
        //收到角色信息
        //GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_PlayerInfo, this.ProtocolPlayerInfoHandler, this);

    }
    //游戏服务器请求登录授权
    public GameLinkAuthorization():void{
        let data = new pb.pb.Net_Login_LoginReq();
        data.AuthToken =this.authToken
        //data.DeviceId="ssss" //设备Id
        GameNet.Instance.Send(pb.pb.Cmd.Login_Login, data);

    }
    private Login_LoginHandler(msg_data:MsgPendingData): void {
        let data: pb.pb.Net_Login_LoginRet = msg_data.MsgData as pb.pb.Net_Login_LoginRet;
        Log4.Log("登录成功 ProtocolLogin_LoginHandler " + JSON.stringify(data));
        SplunkManager.Instance.SendRecordDirectly(10012, "Protocol_Login_Handler");
        if(data.Ret!=0){
            Log4.Log("---Game授权失败--Ret="+data.Ret)
            return
        }
        if (this.delayTimeout != null) {
            this.delayTimeout.Stop();
            this.delayTimeout = null;
            LaunchUI.Instance.SetGameAbnormalStatus(0);
        }
        //设置登录状态
        //LobbyManager.Instance.Login();
        this.SetUpKeepAlive();
        this.ServerTime = data.ServerTime
        this.ProtocolGameUserInfoHandler(data.GameUserInfo as pb.pb.Base_User_GameUserInfo);
    }
    //多用户登录处理程序
    private MultiUserLoginHandler(msg_data: MsgPendingData): void {
        let data: pb.pb.Net_Login_MultiUserLoginRet = msg_data.MsgData as pb.pb.Net_Login_MultiUserLoginRet;
    }

    //#endregion ==end====注册消息处理消息======================================


    public Startup() {}

    public ReLaunch(): void {}
    private KeepAliveHandler(msg_data: MsgPendingData): void {
        let ret: pb.pb.Net_Login_KeepAliveRet = msg_data.MsgData as pb.pb.Net_Login_KeepAliveRet;
        //this.ServerTime = ret.CurrentServerTime;
    }
    private ReconnectHandler(msg_data: MsgPendingData): void {
        let ret: pb.pb.Net_Login_ReconnectRet = msg_data.MsgData as pb.pb.Net_Login_ReconnectRet;
        //this.ServerTime = ret.CurrentServerTime;
    }

    //#region ==start==心跳==========================================

    private SendKeepAlive(): void {
        //keepalive HeartBeat
        let data: pb.pb.Net_Login_KeepAliveReq = new pb.pb.Net_Login_KeepAliveReq();
        //GameNet.Instance.Send(pb.pb.Cmd.Login_KeepAlive, data);
        Log4.Log("SendKeepAlive");
    }
    public SetUpKeepAlive(): void {
        if (this.keepalive_timer == null) {
            this.keepalive_timer = TimerManager.Instance.GetTimer(5, this.SendKeepAlive, false);
            this.keepalive_timer.Start();
            Log4.Log("SendKeepAlive Timer Setup")
        }
    }
    public DestroyKeepAliveTimer(): void {
        if (this.keepalive_timer != null) {
            this.keepalive_timer.Stop();
            this.keepalive_timer = null;
            //--Logger.Log("DestroyKeepAliveTimer")
        }
    }

    //#endregion==end===心跳==========================================

    private ProtocolGameUserInfoHandler(data: pb.pb.Base_User_GameUserInfo) {

        Log4.Log("ProtocolPlayerInfoHandler " + JSON.stringify(data));

        //红点数据一定在所有接口都处理完之前
        RedPointManager.Instance.SetLoginData();
        UserManager.Instance.SetLoginData(data);

        //-------登录成功进入大厅-------------------
        //-- 进入大厅场景
        LobbyManager.Instance.SwitchLobbyScene();

        //UIManager.Instance.OpenWindow(UILobbyMainView)
        //LaunchUI.Instance.Dispose()
        //SceneManager.Instance.SwitchScene(SceneConfig.LobbyScene)
        /*
        try
        {
            //-- 处理下载逻辑
            this.StartDownloading().catch(()=>{});
        }
        catch (e)
        {
            Log4.LogError(e.stack);
        }
*/
    }

    public SetReconnectTimes(number: number) {}

    public IsLaunchUIShowing() {
        return false;
    }



}
