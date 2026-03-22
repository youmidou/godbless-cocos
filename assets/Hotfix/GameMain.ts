import {_decorator, Component, director,game,assetManager} from 'cc';
import {UpdateManager} from "db://assets/Hotfix/pkg/Updater/UpdateManager";
import {GTimer, TimerManager} from "db://assets/Hotfix/pkg/Updater/TimerManager";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {GlobalSettingManager} from "db://assets/Hotfix/pkg/Manager/GlobalSettingManager";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {LaunchUI} from "db://assets/Scripts/GameLaunch/LaunchUI";
import {NetworkManager} from "db://assets/Hotfix/Modules/Connector/NetworkManager";
import {GameNet} from "db://assets/Hotfix/Net/GameNet";
import {UILobbyMainView} from "db://assets/Hotfix/UI/UILobbyMain/UILobbyMainView";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {GameObject} from "db://assets/Scripts/GameEngine/GameObject";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {ConnectorManager} from "db://assets/Hotfix/Modules/Connector/ConnectorManager";
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {SceneManager} from "db://assets/Hotfix/pkg/Scene/SceneManager";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {ResolutionAdapter} from "db://assets/Scripts/XTudouFramework/UI/ResolutionAdapter";
import {PlatformManager} from "db://assets/Hotfix/Modules/Connector/PlatformManager";
import {HttpClient} from "db://assets/Hotfix/pkg/Network/HttpClient";
import {LoginManager} from "db://assets/Hotfix/Modules/Login/LoginManager";
const { ccclass, property } = _decorator;

/**
 * 热更游戏入口-挂件
 * added by yh @ 2024/12/12 09:39
 * 注意:
 *
 * */
@ccclass('GameMain')
export class GameMain extends Component{
    private m_updateManager: UpdateManager = null;

   protected onLoad():void {
        // 检查 assetManager 是否已初始化
        if (assetManager && assetManager.cacheManager) {
            //Log4.Log("cacheManager 已初始化:", assetManager.cacheManager);
            // 这里可以使用 cacheManager 的方法，例如清理缓存
            //assetManager.cacheManager.clearCache();
        } else {
            //Log4.Log("cacheManager 未初始化或 assetManager 未正确加载");
        }

    }

    async start() {
        // 将节点添加到持久层
        GameObject.DontDestroyOnLoad(this.node)
        //GameUtilsManager.Instance.SetIntegerByKeyForAllUsers("is_use_xasset",GConfig.Enable_XAsset);
        //-- startup
        let root = GameObject.Find("UIRoot")
        UIUtil.Assert(root!=null,"获取UIRoot根节点错误")

        UpdateManager.Instance.Startup();
        TimerManager.Instance.Startup();
        UIManager.Instance.Startup();
        GlobalSettingManager.Instance.Startup();
        PlatformManager.Instance.Startup();

        this.m_updateManager = UpdateManager.Instance;
        await this.Initilize();

        LoginManager.Instance.Start()
    }
    private async Initilize():Promise<void> {
        LoginManager.Instance.Startup()
        ConnectorManager.Instance.Startup()
        LobbyManager.Instance.Startup()
        SceneManager.Instance.Startup()
    }

    /*
    private async LoginAuth():Promise<void> {

        let httpClient: HttpClient = new HttpClient("http://127.0.0.1:8888");
        let str:string = await PlatformManager.Instance.GetDeviceId()
        let data = new pb.pb.Net_Auth_LoginReq()
        data.DeviceId = str
        // 异步GET请求
        let getResponse = await httpClient.CoPost("/api/login",data);
        if (getResponse.success) {
            Log4.Log("AuthLogin请求 成功:", getResponse.data);
            let ret:pb.pb.Net_Auth_LoginRet = getResponse.data  ;
            if (ret.Ret==0|| ret.Ret==undefined){
                ConnectorManager.Instance.SetAuthToken(ret.AuthToken,ret.GameServerAddress)
                await this.EnterGame();
                return
            }
            //处理异常xxx

        } else {
            Log4.LogError("AuthLogin请求 失败 error:",getResponse.error);
            await SYSCoroutineUtil.WaitForSeconds(3) //等待3秒
            await this.LoginAuth()
        }
    }
    */
    private async EnterGame():Promise<void> {
       //检查是否登录授权
        SplunkManager.Instance.SendRecordDirectly(10003, "EnterGame");
        LaunchUI.Instance.SetProgress(91 / 100);
        NetworkManager.Instance.ConnectServer();

        await SYSCoroutineUtil.WaitForFrames(1)
        /*
        let tt:GTimer = TimerManager.Instance.GetTimer(3, () => {
            Log4.Log("sssss")
        });
        tt.Start()
        */

        //await SYSCoroutineUtil.WaitForSeconds(1)
        //ResolutionAdapter.Instance.SwitchToLandscape()//横屏
        //await SYSCoroutineUtil.WaitForSeconds(2)
        //ResolutionAdapter.Instance.SwitchToPortrait()//竖屏

        //UIManager.Instance.OpenWindow(LoginView)
        //"db://assets/AssetsPackage/UI/LobbyMain/prefab/UILobbyMain"
        //ResourcesManager.Instance.LoadAsync5("UI/LobbyMain/prefab/UILobbyMain")

        //UIManager.Instance.OpenWindow(UILobbyMainView) //Ope2nWindow(LoginView)
        //await SYSCoroutineUtil.WaitForSeconds(3)
        //UIManager.Instance.DestroyWindow(UILobbyMainView)
        //await SYSCoroutineUtil.WaitForSeconds(3)
        //UIManager.Instance.OpenWindow(UILobbyMainView)
        //await SYSCoroutineUtil.WaitForSeconds(3)
        //UIManager.Instance.DestroyWindow(UILobbyMainView)
        //let login:pb.Net_Login_LoginReq = new pb.Net_Login_LoginReq();
        //Log4.Log("生成协议...%s",login)
        //Base_Login_LoginInfo
        //GameNet.Instance.Send(pb.Cmd_Login_Login,pb.Net_Login_LoginReq)
        //pb.Net_Login_LoginRet
        //GameNet.Instance.RegisterProtocolHandler(pb.Cmd_Login_Login,function ())
    }

    public update(deltaTime: number):void {
        try
        {
            if(this.m_updateManager != null)
            {
                //this.m_updateManager.Update(Time.deltaTime, Time.unscaledDeltaTime);
                this.m_updateManager.Update(null, null);
            }
        }
        catch (ex) //Exception
        {
            Log4.LogError("Update err : " + ex.Message + "\n" + ex.StackTrace);
        }
    }
    public lateUpdate(deltaTime: number):void {
       /*
        try
        {
            if (this.m_updateManager!=null)
            {
                this.m_updateManager.LateUpdate();
            }
        }
        catch (ex:any)
        {
            Log4.LogError("LateUpdate err : " + ex.Message + "\n" + ex.StackTrace);
        }
        */
    }
    public fixedUpdate(deltaTime: number):void {
        try
        {
            if (this.m_updateManager!=null)
            {
                //this.m_updateManager.FixedUpdate(Time.fixedDeltaTime);
            }
        }
        catch (ex) //Exception
        {
            Log4.LogError("FixedUpdate err : " + ex.Message + "\n" + ex.StackTrace);
        }
    }
    //============================================================
    //游戏进入后台时执行该方法 pause为true 切换回前台时pause为false
    public OnApplicationPause(){
        //NetworkManager.Instance.OnApplicationPause(pause);
    }
    //当应用程序退出时调用，用于执行清理操作。
    public OnApplicationQuit(){
        UpdateManager.Instance.Dispose();
        TimerManager.Instance.Dispose();
        GlobalSettingManager.Instance.Dispose();
        GameNet.Instance.Dispose();
    }
    //============================================================

    public OnDispose():void{
       this.m_updateManager = null;
    }

}