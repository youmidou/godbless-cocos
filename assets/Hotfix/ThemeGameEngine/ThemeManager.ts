import {ThemeBase} from "db://assets/Hotfix/ThemeGameEngine/ThemeBase";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {GConfig} from "db://assets/Hotfix/Global/GConfig";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {Table} from "db://assets/Hotfix/pkg/utils/Table";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {SceneManager} from "db://assets/Hotfix/pkg/Scene/SceneManager";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {ThemeDataManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeDataManager";
import {ConnectorManager} from "db://assets/Hotfix/Modules/Connector/ConnectorManager";
import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";
import {SceneConfig} from "db://assets/Hotfix/Scenes/Config/SceneConfig";
import {ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {DownloadManager} from "db://assets/Hotfix/pkg/Manager/DownloadManager";
import {PlatformManager} from "db://assets/Hotfix/Modules/Connector/PlatformManager";
import {UIThemeLoadingGameView} from "db://assets/Hotfix/UI/UIThemeLoadingGame/UIThemeLoadingGameView";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
import {ThemeScene} from "db://assets/Hotfix/Scenes/ThemeScene";
import {BaseThemeView} from "db://assets/Hotfix/ThemeGameEngine/BaseThemeView";
import {UIThemeHeaderView} from "db://assets/Hotfix/UI/UIThemeHeader/UIThemeHeaderView";
import {GameNet, MsgPendingData} from "db://assets/Hotfix/Net/GameNet";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {GlobalSettingManager} from "db://assets/Hotfix/pkg/Manager/GlobalSettingManager";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";

/**
 * 主题管理器
 -- added by yh @ 2024-12-14 16:53
 --
 -- 注意:
    EnterTheme(
 */
export class ThemeManager{
    private static instance: ThemeManager;
    private current_theme_id: number;    //当前主题Id
    private previous_theme_id: number;    //上一次主题Id
    //当前主题
    private currentTheme:BaseThemeView;
    private busing: boolean;
    private need_abort: boolean;
    //private scenes: {};
    private readyEnterTheme: boolean;
    private enterThemeData: object=null;
    private loadingscene_success: boolean;

    private isExitingTheme: boolean;
    private theme_data: null;
    private theme_config: ThemeConfig;//当前主题配置



    public static get Instance() :ThemeManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {

        //-- 当前场景
        this.currentTheme = null;
        //-- 是否忙
        this.busing = false;
        //-- 是否需要中断
        this.need_abort = false
        //-- 场景对象
        //this.scenes = {}

        this.RegisterProtocolHandler()
    }
    private RegisterProtocolHandler(){

        //GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Room_JoinRoom,this.Protocol_Enter_Theme_Handler,this)
    }
    private Protocol_Enter_Theme_Handler(data: MsgPendingData):void
    {
        ConnectorManager.Instance.SetReconnectTimes(-1);
        this.enterThemeData = data.MsgData;
        this.HandleEnterThemeData();
    }

//#region ===start======================================================
    public EnterThemeById(themeId:number):void
    {
        if(this.current_theme_id == themeId){
            return
        }

        //	-- 如果在主题里，关闭场景
        if(this.current_theme_id >0){
            this.ExitCurrentTheme(true)
        }

        //-- 打开主题
        this.EnterTheme(themeId)
    }
    public ExitCurrentTheme(is_theme:boolean,is_high:boolean = false):void{
        if(this.current_theme_id > 0 && !this.isExitingTheme){
            this.isExitingTheme = true

            //-- 停掉声音
            GlobalSettingManager.Instance.StopBackgroundMusic(1)
            ThemeDataManager.Instance.FreezeAutoSpin(true)

            this.previous_theme_id = this.current_theme_id;

            //-- 禁止弹窗
            UIManager.Instance.DisablePopup()

            UIManager.Instance.ClearWindowStack()

            //-- 如果返回大厅，显示loading
            if(!is_theme){
                LobbyManager.Instance.SendEnterLobby()
            }
        }

    }


//#endregion ====end======================================================

    public SetThemeId(themeId:number):void
    {
        this.current_theme_id = themeId;
    }

    public GetThemeId():number
    {
        return this.current_theme_id;
    }
/*
    //返回当前主题
    public GetCurrentTheme():BaseThemeView
    {
        return this.currentTheme;
    }
    */
    //切换很竖版
    public SwitchToPortrait():void
    {
        UIManager.Instance.SwitchToPortrait();
    }
    private SwitchToPortraitForIOS(isSwitch:boolean):void
    {
        UIManager.Instance.SwitchToPortraitForIOS(isSwitch);
    }
    public SwitchToLandscape():void
    {
        UIManager.Instance.SwitchToLandscape();
    }
    //-- 发送enter theme协议
    public SendEnterTheme():void
    {
        //enter_theme
        //object data = new object();
        //data.theme_id = this.current_theme_id;
        //data.normal_quest =
        //GameNet.Instance.Send("enter_theme",data);
    }
    private HandleEnterThemeData():void
    {
        if (this.enterThemeData != null && this.readyEnterTheme)
        {
            this.readyEnterTheme = false;
            LobbyManager.Instance.EnterTheme();

            let dofun = async function()
            {
                if (GConfig.Debug && GConfig.Debug_Theme_Basic)
                {
                    Log4.Print("Protocol_Enter_Theme_Handler_data", Table.Dump(this.enterThemeData));
                }
                await SYSCoroutineUtil.WaitUntil(() =>
                {
                    return ThemeManager.Instance.GetSwitchSceneSuccess();
                });
                //-- 收到enter_theme协议，将进度条设为100%
                let loadingui = SceneManager.Instance.GetLoadingUI();
                if (loadingui != null)
                {
                    loadingui.SetValue(1.0)
                }

                SplunkManager.Instance.SendRecordDirectly(12014, "HandleEnterThemeData");

                ThemeDataManager.Instance.InitDataFromServer(this.enterThemeData);
            }
            SYSCoroutineUtil.M_startCoroutine(dofun.bind(this));

        }
    }


    /*
        //预加载主题通用prefab
        public PreloadCommonPopup(scene:ThemeScene):void
        {
            List<string> popups = ThemeGlobalConfig.Preload_List;
            for (int i = 0; i < popups.Count; i++)
            {
                GameObjectPool.Instance.PreLoadGameObjectAsync(UIManager.Instance.GetFinalPrefabByPath(popups[i]), 1);
            }
        }
        */

    //#region 主题进入接口=========================================================

    //进入主题操作
    public EnterTheme(themeId:number){
        SplunkManager.Instance.SendRecordDirectly(12002, "EnterTheme:" + themeId)
        this.current_theme_id = themeId;
        //-- 禁止弹窗
        UIManager.Instance.DisablePopup()

        //-- 资源下载
        //if(theme_config.theme_id && DownloadManager.Instance.NeedDownload("ThemeLogo/theme"+this.GetThemeResId(theme_config.theme_id)+".assetbundle") ){
        //this.is_quest_theme = theme_config.is_quest_theme or false
        //this.is_quest_normal_theme = theme_config.is_quest_normal_theme or false
        ThemeManager.Instance.SetThemeId(themeId)
        SceneManager.Instance.SwitchScene(SceneConfig.ThemeScene);
        //}
    }
    /*
    private OpenLoadingUI(themeId:number) {
       async function _er(){

        SplunkManager.Instance.SendRecordDirectly(12004, "OpenLoadingUI:Open");
        /*
        UIManager.Instance.OpenLandscapeOrPortraitWindow(UIThemeLoadingGameView,"",themeId);
        this.SetSwitchSceneSuccess(false)
        //-- 等待loading界面打开
        await SYSCoroutineUtil.WaitUntil(()=>{
            return UIManager.Instance.GetWindow(UIThemeLoadingGameView).View !=null
        });

        ResourcesManager.Instance.SetBundleResident("themelogo/theme"+ Math.floor(themeId), true)
        SplunkManager.Instance.SendRecordDirectly(12005, "OpenLoadingUI:SwitchScene:Theme")
           //UIManager.Instance.GetWindow(UIThemeLoadingGameView)
        //场景切换
        SceneManager.Instance.SwitchScene(SceneConfig.ThemeScene);

       }

       SYSCoroutineUtil.M_startCoroutine(_er.bind(this))
    }
    */

    public SetSwitchSceneSuccess(loading:boolean){
        this.loadingscene_success = loading
    }
    public GetSwitchSceneSuccess():boolean{
        return this.loadingscene_success
    }
    //切换场景完成
    public OnSwitchSceneComplete() {
        ThemeManager.Instance.SetSwitchSceneSuccess(true);
        //DataManager.Instance.OnSwitchSceneComplete();
        //ThemeFeatureManager.Instance.OnSwitchSceneComplete();
    }
    //加载主题
    public LoadThemeConfig(){

    }
    //-- 打开当前主题
    public OpenCurrentTheme(scene:ThemeScene):void{
        //-- 预加载主题ui(不需要卡进度)
        ThemeDataManager.Instance.PreloadPopup(scene);

        //	-- 预加载通用ui
        this.PreloadCommonPopup(scene);

        //--测试先开主题---
        let mainClass = this.theme_config.MainClassName
        UIManager.Instance.OpenWindow(mainClass)
        Log4.Log("加载主题完成.....%s",this.theme_config.ThemeName)
        //this.currentTheme = UIManager.Instance.GetWindow(mainClass);

        //-- 发送enter_theme协议，占5%，正常情况下，此时能得到entertheme数据
        this.readyEnterTheme = true;
        if(ThemeManager.Instance.current_theme_id !=0){
            this.HandleEnterThemeData();
        }

    }

    //-- 关闭当前主题
    public CloseCurrentTheme():void{
        //ResourcesManager.Instance.SetAssetBundleResident("themes/theme" + this.GetThemeResId(this.previous_theme_id), false);
        let mainClass = this.theme_config.MainClassName
        UIManager.Instance.DestroyWindow(mainClass);

        ThemeDataManager.Instance.OnDestroy();
        UIManager.Instance.ExitLowerResolution();

        //this.previous_theme_id = 0;
        //this.previous_quest = false;
        //this.previous_quest_normal = false;
        this.theme_data = null;
        this.readyEnterTheme = false;
        this.enterThemeData = null;
        this.isExitingTheme = false;

    }

    //判断主题是否可以玩
    public IsPlayableTheme(themeId:number):boolean
    {
        let is_playable:boolean = false;
        //bool isLevelLock = this.IsLockTheme(theme_id);
        is_playable = true;

        return is_playable;
    }

    //#endregion ====================================================================

    private PreloadCommonPopup(scene: ThemeScene) {
        
    }

    public SetThemeConfig(theme_config: ThemeConfig) {
        this.theme_config = theme_config
    }

    public SetEnterLobbyData(data: MsgPendingData) {

    }
}