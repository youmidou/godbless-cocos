import {GameNet, MsgPendingData} from "db://assets/Hotfix/Net/GameNet";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {GConfig} from "db://assets/Hotfix/Global/GConfig";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {UserManager} from "db://assets/Hotfix/Modules/Connector/UserManager";
import {GTimer, TimerManager} from "db://assets/Hotfix/pkg/Updater/TimerManager";
import {ConnectorManager} from "db://assets/Hotfix/Modules/Connector/ConnectorManager";
import {ClientDataKeys} from "db://assets/Hotfix/StaticData/StaticDataManager";
import {SDKManager} from "db://assets/Scripts/XTudouFramework/SDK/SDKManager";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {UITipLostConnectView} from "db://assets/Hotfix/UI/UITipLostConnect/UITipLostConnectView";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {LoginManager} from "db://assets/Hotfix/Modules/Login/LoginManager";

export enum NetStatus
{
    init = 0,//初始化
    Connecting = 1, //连接中
    Reconnecting = 2, //重新连接
    Connected = 3,//连接的
    Closed = 4,//关闭中的
}
/**
 *
 -- Game网络连接器
 -- added by yh @ 2024-07-15
 -- 注意：
 */
export class NetworkManager{
    //重新连接间隔
    private RECONNECT_INTERVAL:number = 3;
    //重新连接 UI 时间
    private RECONNECT_UI_TIMES:number = 10;

    //在后台
    private inBackground:boolean =false;
    private m_status: NetStatus;
    private m_isRelaunch: boolean;
    private pendingMsgCountList:Map<string, number> = new Map();

    constructor() {
        this.m_status = NetStatus.Closed;
        this.RegisterProtocolHandler()
    }
    private static instance: NetworkManager;
    public static get Instance() :NetworkManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    private RegisterProtocolHandler(){
        //"reconnect"
        GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_Reconnect, this.ProtocolReconnectHandler,this);
    }
    private ProtocolReconnectHandler(msg_data:MsgPendingData){
        let data:pb.pb.Net_Login_ReconnectRet = msg_data.MsgData as pb.pb.Net_Login_ReconnectRet
        /*-- 满足以下条件，强制relaunch
        -- 1）后端关闭reconnect功能
        -- 2）跨天
        -- 3）用户不同设备更新
        */
        /*
        //if (data.Disabled == 1 || data.CrossDay == 1 || data.MultiUser == 1)
        //0:成功;1:凭据错误;2:重新链接失败;3:跨日;
        if(data.Ret == 1 || data.Ret == 2 || data.Ret == 3)
        {
            NetworkManager.Instance.SetLoginStatus(true);
            ConnectorManager.Instance.ReLaunch();
            return;
        }
        */

        this.m_status = NetStatus.Connected;
        //-- 恢复心跳
        ConnectorManager.Instance.SetUpKeepAlive();

        //ConnectorManager.Instance.ProtocolPlayerInfoHandler(data.UserData);
        //-- 重新发送pending协议
        GameNet.Instance.ReSendPendingRequestToServer();

    }

    //------------- private ---------------
    private OnConnect(sender:object,result:number,msg:string):void
    {
        Log4.Print("OnConnect " + msg + " " + result);
        SplunkManager.Instance.SendRecordDirectly(10005, "msg=[OnConnect: " + result + "(" + msg + ")]");
        if (result < 0)
        {
            ConnectorManager.Instance.DestroyKeepAliveTimer();
            this.m_status = NetStatus.Closed;

            if (!this.inBackground)
            {
                this.ReconnectServer();
            }
            return;
        }

        this.reconnectTimes = 0;
        if (this.retryTimer != null)
        {
            this.retryTimer.Stop();
            this.retryTimer = null;
        }

        this.SetRelaunchStatus(false);

        UIManager.Instance.DestroyWindow(typeof(UITipLostConnectView));

        Log4.Print("Connected to server successfully. ");

        if (this.needLogin)
        {
            this.m_status = NetStatus.Connected;
            ConnectorManager.Instance.GameLinkAuthorization();
            //LoginManager.Instance.UpdateLaunchUI().catch((e)=>{})
            this.pendingMsgCountList.clear();
        }
        else
        {
            this.m_status = NetStatus.Reconnecting;
            this.SendReconnect();
        }

    }

    private OnClose(sender:object,result:number,msg:string):void
    {
        Log4.Print("OnClose " + msg + " " + result);
        SplunkManager.Instance.SendRecordDirectly(10006, "msg=[OnClose: " + result + "(" + msg + ")]");

        if (result < 0)
        {
            this.m_status = NetStatus.Closed;
            ConnectorManager.Instance.DestroyKeepAliveTimer();
        }

        if (!this.inBackground)
        {
            this.ReconnectServer();
        }
    }

    private DoConnectRetry(){
        //-- socket关闭掉时候才需要重连
        if (this.IsClosed())
        {
            if (this.retryTimer != null)
            {
                this.retryTimer.Stop();
                this.retryTimer = null;
            }
        }
        async function CoDofunc()
        {
            await SYSCoroutineUtil.WaitForFrames(2);
            GameNet.Instance.Disconnect();
            await SYSCoroutineUtil.WaitForFrames(1);

            if (this.IsClosed())
            {
                this.ConnectServer();
            }
        }
        SYSCoroutineUtil.M_startCoroutine(CoDofunc.bind(this));
    }
    //----连接GameServer----------------------------------------------
    public ConnectServer():void {
        this.m_status = NetStatus.Connecting;
        /*
        //-- Pheonix
        let server_ip:string = GameUtilsManager.Instance.GetStringByKeyForAllUsers("debug_ip", "");
        Log4.Print("server_ip ="+server_ip);
        if (server_ip == "")
        {
            server_ip = GConfig.serverIp;
        }
        let server_port:string = GameUtilsManager.Instance.GetStringByKeyForAllUsers("debug_port", "");

        Log4.Log("server_port ="+server_port);
        if (server_port == "")
        {
            server_port = GConfig.serverPort+"";
        }
        Log4.Print("ConnectServer: ", server_ip, server_port);
        let server_port2:number = Number(server_port);

        UserManager.Instance.SetConnectIp(server_ip);
        SplunkManager.Instance.SendRecordDirectly(10004, "ConnectServer: " + server_ip + ", " + server_port);
        */
        let gameServerAddress:string = ConnectorManager.Instance.GetGameServerAddress()
        GameNet.Instance.Connect(gameServerAddress,this.OnConnect.bind(this),this.OnClose.bind(this));
    }

    private reconnectTimes:number = 0;
    private autoConnect:boolean = true;
    private retryTimer:GTimer = null;
    private needLogin:boolean=true;

    private ReconnectServer():void{
        //SplunkManager.Instance.SendRecordDirectly(10008, "ReconnectServer: " + this.reconnectTimes);
        if(this.autoConnect){
            this.reconnectTimes = this.reconnectTimes + 1;
            let delay:number = this.reconnectTimes > 1 ? this.RECONNECT_INTERVAL : 0;
            if (delay > 0)
            {
                this.retryTimer = TimerManager.Instance.GetTimer(delay, () => {
                    this.DoConnectRetry();
                },true);
                this.retryTimer.Start();
            }
            else
            {
                this.DoConnectRetry();
            }

            //-- 弹断线弹窗
            if (this.reconnectTimes == this.RECONNECT_UI_TIMES)
            {
                let auto_connect:boolean;
              let args = {
                    auto_connect:true,
                };
                //{auto_connect = true}
                this.OpenReconnectWindow(args);

            }
        }else {
            let auto_connect:boolean;
            let args= {
                auto_connect:false,
            };
            //-- 弹断线弹窗
            this.OpenReconnectWindow(args);
        }
    }

    public Reconnect(auto_connect:boolean):void{
        this.reconnectTimes = 1;
        if (auto_connect)
        {
            this.DoConnectRetry();
        }
        else
        {
            ConnectorManager.Instance.ReLaunch();
        }
    }

    //连接中...
    public IsConnecting():boolean
    {
        return this.m_status == NetStatus.Connecting;
    }
    //重新连接...
    public IsReConnecting():boolean
    {
        return this.m_status == NetStatus.Reconnecting;
    }
    //连接的...
    public IsConnected():boolean
    {
        return this.m_status == NetStatus.Connected;
    }

    public IsClosed():boolean
    {
        return this.m_status == NetStatus.Closed;
    }
    //设置登录状态
    public SetLoginStatus(status:boolean):void
    {
        this.needLogin = status;
    }
    //自动连接
    public  ShouldAutoConnect(status:boolean)
    {
        this.autoConnect = status;
    }
    //设置重启状态
    public SetRelaunchStatus(status:boolean):void
    {
        this.m_isRelaunch = status;
    }
    public IsRelaunch():boolean
    {
        return this.m_isRelaunch;
    }

    //发送重新连接
    private SendReconnect():void{
        let key:string = GameUtilsManager.Instance.GetStringByKeyForAllUsers(ClientDataKeys.LoginUserDefaultKey);
        /*
        let data:Net_Login_ReconnectReq  = new Net_Login_ReconnectReq();
        let login:Net_Login_LoginReq  = new Net_Login_LoginReq();
        login.Package = GConfig.package;
        login.Credential = key;
        //包版本
        login.Version = VersionManager.Instance.GetClientAppVersion();
        //热更新版本
        login.HotVersion = GConfig.HotVersion; //or "no hot version";
        //设备型号
        login.DeviceModel = PlatformManager.Instance.GetDeviceMode();
        //系统版本
        login.SysVersion = PlatformManager.Instance.GetDeviceOS();
        //设备Id
        login.DeviceId = PlatformManager.Instance.GetUUID();
        login.AdId = PlatformManager.Instance.GetADID();
        login.FacebookId = PlatformManager.Instance.GetUserFacebookID();
        login.AppleId = PlatformManager.Instance.GetAppleID();
        login.HmsId = FmsManager.Instance.GetPlayerId();

        data.Login = login;
        data.ThemeId = ThemeManager.Instance.GetCurrentThemeId();
        data.Quest = ThemeManager.Instance.IsQuestTheme();
        data.NormalQuest = ThemeManager.Instance.IsQuestNormalTheme();
        */
        //"reconnect"
        //GameNet.Instance.Send(Cmd.Login_Reconnect,data);
    }

    public UpdateSendCount(msg_id:number, data:MsgPendingData,need_pending:boolean,is_resend:boolean):void{
        try
        {
            if (need_pending)
            {
                if (!is_resend)
                {
                    let index:number = 0;
                    if (this.pendingMsgCountList[msg_id] == null)
                    {
                        this.pendingMsgCountList[msg_id] = 0;
                    }

                    this.pendingMsgCountList[msg_id] =this.pendingMsgCountList[msg_id]  + 1;

                }
                else
                {   //重新发送
                    //data.resend = 1;
                }
                //Log4.Print("UpdateSendCount: ", msg_id, table.dump(data));
            }
        }
        catch (e) //Exception
        {
            Log4.LogError("UpdateSendCount :" + e.Message);
        }
    }

    public HandleCsError(data:MsgPendingData):boolean
    {
        let cs_data = data;
        /* if (cs_data !=null && cs_data.cs_error == 1)
         {
             if (msg_id == "batch_xxx")
             {
                 //-- 直接返回大厅
                 ThemeManager.Instance.ExitCurrentTheme();
                 return false;
             }
         }*/

        return true;
    }

    public OnApplicationPause(pause:boolean):void{
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Log("OnApplicationPause : "+pause);
        }
        this.inBackground = pause;
        if (pause)
        {
            ConnectorManager.Instance.DestroyKeepAliveTimer();

            //SplunkManager.Instance.SendRecord(SplunkConfig.PID.app_background);
        }else {
            if (this.m_status == NetStatus.Connected)
            {
                Log4.Print("OnApplicationPause: false: Connected");
                ConnectorManager.Instance.SetUpKeepAlive();
                //-- when resume , do GetAppLink in c# again
                SDKManager.Instance.ReGetDeeplink();
                //ShareManager.Instance.DelayCheckShareState();
                //IDFAManager.Instance.BackStageToGame();
                SDKManager.Instance.HSRefreshUnreadMessagesCount();
            }
        }
    }

    private OpenReconnectWindow(data:object):void{
       /*
        if (UIManager.Instance.GetWindow(typeof(UITipLostConnectView)) == null)
        {
            UIManager.Instance.OpenWindow(typeof(UITipLostConnectView),null,data);
        }
        */
    }

    public OnDestroy(){

    }
}