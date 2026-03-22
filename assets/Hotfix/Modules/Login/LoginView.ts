import * as cc from "cc";
import {LaunchUI} from "db://assets/Scripts/GameLaunch/LaunchUI";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import {VersionManager} from "db://assets/Hotfix/pkg/Manager/VersionManager";
import {ConnectorManager} from "db://assets/Hotfix/Modules/Connector/ConnectorManager";
import {GameNet} from "db://assets/Hotfix/Net/GameNet";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {HttpClient} from "db://assets/Hotfix/pkg/Network/HttpClient";
import {PlatformManager} from "db://assets/Hotfix/Modules/Connector/PlatformManager";
import HttpUtil from "db://assets/Hotfix/pkg/utils/HttpUtil";
import {NetworkManager} from "db://assets/Hotfix/Modules/Connector/NetworkManager";

export class LoginView{
    private isLaunchUIShowing: boolean;
    private isClickingLaunchBtn: boolean;

    private login_root: cc.Node;
    private btn_visitor: cc.Button;//游客登录
    private btn_weixin: cc.Button;//微信
    //授权状态 0:; 1:授权中；2:;
    private IsAuthState:boolean=false
    constructor() {
        this.login_root = LaunchUI.Instance.GetLoginRoot();
        this.login_root.active = false;
        this.isLaunchUIShowing = true;
        //游客
        this.btn_visitor = UIUtil.FindButton(this.login_root, "btn_visitor");
        this.btn_weixin = UIUtil.FindButton(this.login_root, "btn_weixin");
        UIUtil.RegisterExtraButtons(this.btn_visitor, this.OnBtnVisitorEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_weixin, this.OnBtnWeiXinEvent, this);
    }
    //重置
    public async Reset(): Promise<void> {
        this.IsAuthState = false;

    }
    //初始化登录
    public Show():void {
        this.login_root.active = true;
    }
    //游客登录
    private OnBtnVisitorEvent(): void {
        Log4.Log("xxx游客登录...");
        if(this.IsAuthState ==true){
            return
        }
        let data = new pb.pb.Net_Auth_LoginReq()
        data.DeviceId = PlatformManager.Instance.GetDeviceId()
        this.LoginAuth(data)
    }
    //微信登录
    private OnBtnWeiXinEvent(): void {
        if(this.IsAuthState ==true){
            return
        }
        Log4.Log("xxx微信登录...");
        let data = new pb.pb.Net_Auth_LoginReq()
        data.DeviceId = PlatformManager.Instance.GetDeviceId()
        this.LoginAuth(data)
    }
    //登录授权
    private LoginAuth(data:any){
        async function _er(){
            this.IsAuthState = true;
            let httpClient:HttpClient = new HttpClient("http://127.0.0.1:8888");
            let response = await httpClient.CoPost("/api/login",data);
            if (response.success) {
                Log4.Log("AuthLogin请求 成功:", response.data);
                let ret:pb.pb.Net_Auth_LoginRet = response.data;
                this.IsAuthState = false;
                if (ret.Ret!=undefined){
                    //处理异常xxx
                    return
                }
                ConnectorManager.Instance.SetAuthToken(ret.AuthToken,ret.GameServerAddress)
                //开始进入游戏
                await this.EnterGame();

            } else {
                Log4.LogError("AuthLogin请求 失败 error:",response.error);
                this.IsAuthState = false;
                //await SYSCoroutineUtil.WaitForSeconds(3) //等待3秒
                //await this.LoginAuth()
            }

        }
        SYSCoroutineUtil.M_startCoroutine(_er.bind(this))
    }
    public async EnterGame():Promise<void> {
        //检查是否登录授权
        SplunkManager.Instance.SendRecordDirectly(10003, "EnterGame");
        LaunchUI.Instance.SetProgress(91 / 100);
        ConnectorManager.Instance.ConnectServer()

    }
    //#region ==start==处理登录界面==========================================
    //处理LaunchUI
    private DisposeLaunchUI(): void {
        if (!this.isLaunchUIShowing) {
            return;
        }
        SplunkManager.Instance.SendRecordDirectly(11004, "DisposeLaunchUI");
        //----初始化资源状态----

        SplunkManager.Instance.SendRecordDirectly(11005, "DisposeLaunchUI");

        async function _er() {
            await SYSCoroutineUtil.WaitForFrames(2);
            //是否准备进大厅
            await SYSCoroutineUtil.WaitUntil(() => {
                return LobbyManager.Instance.IsReadyToLobby();
            });
            //LoadingUI 是否准备好
            await SYSCoroutineUtil.WaitUntil(() => {
                return UIManager.Instance.IsLoadingUIReady();
            });
            //播放加载介绍
            // UIManager.Instance.PlayLoadingIntro();

            SplunkManager.Instance.SendRecordDirectly(11007, "DisposeLaunchUI");

            //LoadingUI 是否显示
            await SYSCoroutineUtil.WaitWhile(() => {
                return UIManager.Instance.IsLoadingUIShowing();
            });

            SplunkManager.Instance.SendRecordDirectly(11008, "DisposeLaunchUI");
            //await SYSCoroutineUtil.WaitForFrames(1);
            Log4.Log("xxx LobbyManager.Instance.SwitchLobbyScene()");
            await SYSCoroutineUtil.WaitForFrames(1);
            //-- 直接进入
            LaunchUI.Instance.Dispose();
            this.isLaunchUIShowing = false;
            await SYSCoroutineUtil.WaitForSeconds(1);

            //-- 进入大厅场景
            LobbyManager.Instance.SwitchLobbyScene();

            /*
            // 打开大厅后再关闭加载界面
            await SYSCoroutineUtil.WaitUntil(() =>
            {
                return UIManager.Instance.IsLoadingUIReady();
            });
            */
        }
        SYSCoroutineUtil.M_startCoroutine(() => _er());
    }

    //----登录按钮------------------------------
    private OnClickPlayBtn() {
        if (this.isClickingLaunchBtn) {
            return;
        }
        this.isClickingLaunchBtn = false;
        /*
        if(PactsafeManager.Instance.NeedAgree()){
            SplunkManager.Instance.SendRecord(SplunkConfig.PID.ui_pactsafe, SplunkConfig.BID.main, {btn_type = "Play"})
        }*/
        this.DisposeLaunchUI();
    }
    //无需重新登录即可启动 UI
    private DisposeLaunchUIWithoutRelogin(): void {
        this.isClickingLaunchBtn = true;
        this.DisposeLaunchUI();
    }
    //下载 强制下载 包里 includedInInstallPackage 切大于1的列表
    private async StartDownloading() {
        Log4.Log("xxxxx StartDownloading ....");
        async function _er() {
            await SYSCoroutineUtil.WaitForFrames(1);
            await this.UpdateLaunchUI();
        }
        SYSCoroutineUtil.M_startCoroutine(_er.bind(this));
    }


    //更新启动界面
    public async UpdateLaunchUI(): Promise<void> {
        this.isLaunchUIShowing = true;
        GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 1);
        LaunchUI.Instance.SetProgress(100.0 / 100.0);
        if (VersionManager.Instance.IsVersionAvailable("launch_loading_text")) {
            //LoadingTipsManager.Instance.UnBindLoadTips(AssetBundles.LaunchUI.instance, 2);
        }
        await SYSCoroutineUtil.WaitForSeconds(1);
        //-- 返回LoginRoot transform
        let login_root: cc.Node = LaunchUI.Instance.GetLoginRoot();
        if (login_root != null) {
            //----------游客登录-------------------
            let show_visitor: boolean = false;
            this.btn_visitor = UIUtil.FindButton(login_root, "btn_visitor");
            if (this.btn_visitor != null) {
                show_visitor = true;
                UIUtil.ShowNode(this.btn_visitor.node, show_visitor);
                UIUtil.RegisterExtraButtons(this.btn_visitor, this.OnBtnVisitorEvent, this);
            }
            //----------微信-------------------
            this.btn_weixin = UIUtil.FindButton(login_root, "btn_weixin");
            if (this.btn_weixin != null) {
                UIUtil.ShowNode(this.btn_weixin.node, show_visitor);
                UIUtil.RegisterExtraButtons(this.btn_weixin, this.OnBtnWeiXinEvent, this);
            }
            //login_root.active = true;
        } else {
            Log4.Log("sssss");
        }
    }

    //#endregion==end===处理登录界面==========================================

}