import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";
import {Dictionary} from "db://assets/Hotfix/pkg/utils/Dictionary";
import {UIWindow} from "db://assets/Hotfix/pkg/UI/UIWindow";
import {IUILoadingModel} from "db://assets/Hotfix/pkg/Scene/IUILoadingModel";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {SceneConfig, SceneItemConfig} from "db://assets/Hotfix/Scenes/Config/SceneConfig";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {List} from "db://assets/Hotfix/pkg/utils/List";
import {LoadABItem, ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {ThemeManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeManager";
import {SYSUtil} from "db://assets/Hotfix/pkg/utils/SYSUtil";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {DLAB, DownloadManager} from "db://assets/Hotfix/pkg/Manager/DownloadManager";
import {IUILoadingView} from "db://assets/Hotfix/pkg/Scene/IUILoadingView";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UITipsManager} from "db://assets/Hotfix/pkg/Manager/UITipsManager";
import {UserManager} from "db://assets/Hotfix/Modules/Connector/UserManager";
import {TimerManager} from "db://assets/Hotfix/pkg/Updater/TimerManager";
import {EffectsManager} from "db://assets/Hotfix/pkg/Effect/EffectsManager";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import {ThemeBase} from "db://assets/Hotfix/ThemeGameEngine/ThemeBase";
import {LoadingTipsManager} from "db://assets/Hotfix/Modules/Lobby/LoadingTipsManager";
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {ThemeConfig10001} from "db://assets/Hotfix/Themes/Theme10001/ThemeConfig10001";
import {ThemeConfigMap} from "db://assets/Hotfix/Themes/ThemeConfigMap";

import * as cc from "cc"
import {ThemeDataManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeDataManager";

/**
 * 场景管理器
 *  -- added by yh @ 2024-11-19
 *  注意:
 * */
export class SceneManager{
    //当前场景
    private current_scene:BaseScene;
    //-- 是否忙
    private busing:boolean;
    //-- 是否需要中断
    private need_abort:boolean;
    //场景对象
    private m_scenes:Dictionary<string, BaseScene> ;
    //加载进度条接口
    private loadingui:UIWindow ;

    private currentProgress:number;
    private isDownloading:boolean;
    private downloadPercent:number;

    private static instance: SceneManager;
    public static get Instance() :SceneManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
        //-- 成员变量
        //-- 当前场景
        this.current_scene = null;
        //-- 是否忙
        this.busing = false;
        //-- 是否需要中断
        this.need_abort = false;
        //-- 场景对象
        this.m_scenes = new Dictionary<string, BaseScene>();
    }

    public Startup() {

    }

    //场景切换
    public SwitchScene(scene_config:SceneItemConfig,loadingui:UIWindow=null) :boolean{
        UIUtil.Assert(scene_config!= SceneConfig.LaunchScene &&scene_config!=SceneConfig.LoadingScene);
        UIUtil.Assert(scene_config.ClassType!=null,"scene_config.TypeName is null");
        if (this.busing)
        {
            return false;
        }
        /*
        if (loadingui!=null)
        {
            this.loadingui = loadingui;
        }
        */
        this.busing = true;
        this.need_abort = false;
        let _er = this.CoInnerSwitchScene(scene_config);
        SYSCoroutineUtil.M_startCoroutine(()=>_er);
        return true
    }
    //-- 切换场景：内部使用协程
    private async CoInnerSwitchScene(scene_config:SceneItemConfig){
        Log4.Log("CoInnerSwitchScene 1")
        UIUtil.Assert(scene_config!=null, "scene_config is null");
        //-- 初始化目标场景
        let logic_scene:BaseScene = this.m_scenes.Get(scene_config.Name)
        if (logic_scene == null){
            logic_scene = new scene_config.ClassType() as BaseScene;
            this.m_scenes.Add(scene_config.Name,logic_scene)
        }
        UIUtil.Assert(logic_scene!=null,"logic_scene is null");
        //打开进度条---------------------------------------------
        await logic_scene.OpenLoading()

        await SYSCoroutineUtil.WaitForFrames(2) //等待一针

        this.currentProgress = 0;
        logic_scene.UpdateProgress(0.0);
        this.isDownloading = false;
        this.downloadPercent = 0;

        Log4.Log("CoInnerSwitchScene 2")
        //下载主题资源，主题占50%进度------------------------------
        let download_callback = function(progress:number){
            UIUtil.Assert(progress <= 1.0, "Progress should be normalized value!!!");
            this.currentProgress = this.currentProgress + (0.5 * progress);
            logic_scene.UpdateProgress(this.currentProgress);
        }
        await logic_scene.DownloadSceneAssets(download_callback.bind(this))
        //=========================================

        //=======================================================================================================
        //-- 50%
        this.currentProgress = 0.5;
        logic_scene.UpdateProgress(this.currentProgress);
        await SYSCoroutineUtil.WaitForFrames(1)

        let IsProsessRunning:boolean  = false;
        //-- 等待资源管理器加载任务结束，否则很多版本在切场景时会有异常，甚至在真机上crash
        await SYSCoroutineUtil.WaitWhile(()=>{
            IsProsessRunning = ResourcesManager.Instance.IsProsessRunning();
            return IsProsessRunning;
        })
        Log4.Log("CoInnerSwitchScene 3")
        EffectsManager.Instance.RemoveAllEffects();
        UIManager.Instance.DestroyAllPopupUI();
        Log4.Log("CoInnerSwitchScene 4")
        //-- 清理旧场景
        if (this.current_scene!=null)
        {
            this.current_scene.OnLeave();
        }
        Log4.Log("CoInnerSwitchScene 5")

        //-- 50.5%
        this.currentProgress = this.currentProgress + 0.005;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(1)

        //-- 清理UI
        UIManager.Instance.DestroyWindowExceptLayer(UILayers.TipLayer);
        //-- 清除下载回调
        DownloadManager.Instance.ClearAllDownloadCallbacks();

        //-- 清理UI PopupList
        UIManager.Instance.ClearOrderList();
        UITipsManager.Instance.ClearAll();
        UserManager.Instance.ClearLevelUpDataQueue();
        //-- 清理UI倒计时
        TimerManager.Instance.RemoveCountdown();

        Log4.Log("CoInnerSwitchScene 6")
        //-- 51%
        this.currentProgress = this.currentProgress + 0.005;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(1) //等待一针
        ResourcesManager.Instance.Cleanup();

        //-- 52%
        this.currentProgress = this.currentProgress + 0.005;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(1) //等待一针

        //-- 同步加载loading场景
        //-- 52.5%
        this.currentProgress = this.currentProgress + 0.005;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(2) //等待一针
        //  -- GC：交替重复2次，清干净一点
        //global.gc();
        await SYSCoroutineUtil.WaitForFrames(2) //等待一针
        /*
        let request:AsyncOperation  = Resources.UnloadUnusedAssets();
        let isboo:boolean = false;
        await SYSCoroutineUtil.WaitUntil(()=>{
            if (request.progress >= 1)
            {
                isboo = true;
            }
            UIUtil.Assert( request.progress <= 1.0, "What's the funck!!!");
            this.UpdateProgress(model, this.currentProgress+ (0.005 * request.progress));
            return isboo;
        })
        */

        //-- 53%
        this.currentProgress = this.currentProgress + 0.005;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(3) //等待一针

        if (scene_config.Name == SceneConfig.LobbyScene.Name)
        {

        }
        /*
        //-- 异步加载theme config
        if (scene_config.Name == SceneConfig.ThemeScene.Name)
        {
            //ResourcesManager.SetAssetBundleResident("themes/theme" .. tostring(res_tid), true);
            //List<string> ab_list = new List<string>();
            ab_list.ForEach((ab_path:string,k)=>{
                ResourcesManager.Instance.AddToUnloadList(ab_path);
            })
        }
        */

        //-- 54%
        this.currentProgress = this.currentProgress + 0.01;
        logic_scene.UpdateProgress(this.currentProgress);

        //-- enter theme
        if (scene_config.Name == SceneConfig.ThemeScene.Name)
        {
            ThemeManager.Instance.SendEnterTheme();
        }

        await SYSCoroutineUtil.WaitForFrames(2) //等待一针

        //加载如 公用的2D 上边栏下边栏啥的
        logic_scene.OnEnter();

        //-- 59%
        this.currentProgress = this.currentProgress + 0.05;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(1) //等待一针

        //#region 加载场景 异步加载目标场景(总占30%) :切换空场景占10% ,主题添加3D场景主预制体资源占20%
        //---todo----切换场景....
        let _progress:number =0
        let isboo2:boolean =false
        function onProgress(progress: number){
            _progress = progress;
        }
        function onComplete(){
            _progress =1
        }
        //---加载场景----
        SceneManager.Instance.LoadSceneAsync(scene_config.Name,onProgress,onComplete)
        await SYSCoroutineUtil.WaitUntil(()=>{
            if (_progress >= 1)
            {
                isboo2 = true;
            }
            UIUtil.Assert( _progress <= 1.0, "What's the funck!!!");
            logic_scene.UpdateProgress(this.currentProgress+ (0.10 * _progress));
            return isboo2
        });

        await SYSCoroutineUtil.WaitForFrames(2) //等待一针

        //#endregion

        //-- 89%
        this.currentProgress = this.currentProgress + 0.3;
        logic_scene.UpdateProgress(this.currentProgress);

        await SYSCoroutineUtil.WaitForFrames(1) //等待一针

        if (scene_config.Name == SceneConfig.LobbyScene.Name)
        {
            SplunkManager.Instance.SendRecordDirectly(11014, "Load Lobby Scene");
            GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 7);
        }

        //-- 同步加载主题Config，占2%
        if (scene_config.Name == SceneConfig.ThemeScene.Name){
            //let res_path:string = "Themes/Theme"+ String(res_tid)+ "/"+ themeMgrInstance.GetThemeName()+".asset"
            //SplunkManager.Instance.SendRecordDirectly(12011, "CoInnerSwitchScene:Load Theme Config:" + res_path+", NeedDownload="String(test_need_download))
            ThemeManager.Instance.LoadThemeConfig()
            await SYSCoroutineUtil.WaitForFrames(2)

            //-- 预加载主题ui(需要卡进度)
            ThemeDataManager.Instance.PreloadPopupOnLoading(logic_scene)
        }

        //-- 91%
        this.currentProgress = this.currentProgress + 0.02;
        logic_scene.UpdateProgress(this.currentProgress);

        //-- 准备工作：异步预加载资源
        //-- 说明：现在的做法是不热更场景（都是空场景），所以主要的加载时间会放在场景资源的prefab上，这里给的进度时间
        function progress_callback(progress:number)
        {
            UIUtil.Assert(progress <= 1.0, "Progress should be normalized value!!!");
            this.currentProgress = this.currentProgress + (0.05 * progress);
            logic_scene.UpdateProgress(this.currentProgress);
        }
        //准备
        await logic_scene.CoOnPrepare(progress_callback.bind(this));

        //-- 预加载占5%
        //-- 96%
        this.currentProgress = this.currentProgress + 0.05;
        logic_scene.UpdateProgress(this.currentProgress);

        if (scene_config.Name == SceneConfig.LobbyScene.Name)
        {
            SplunkManager.Instance.SendRecordDirectly(11015, "Lobby Scene On Prepare");
            GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 8);

        }

        await SYSCoroutineUtil.WaitForFrames(2) //等待一针

        logic_scene.OnComplete();
        //-- 启动下载开关
        DownloadManager.Instance.EnableDownload();

        Log4.Log("CoInnerSwitchScene 8")
        /*
        if (loadingui!=null)
        {
            LoadingTipsManager.Instance.UnBindLoadTips(loadingui.View, 1);
        }
        */

        //----关闭进度---
        await logic_scene.CloseLoading()
        /*
        if (scene_config.Name == SceneConfig.ThemeScene.Name)
        {
            this.UpdateProgress(model, 1.0);
        }
        else
        {
            SplunkManager.Instance.SendRecordDirectly(12013, "CoInnerSwitchScene:SwitchSceneComplete");
        }

        if (scene_config.Name == SceneConfig.LobbyScene.Name)
        {
            this.UpdateProgress(model, 1.0);
            LobbyManager.Instance.SwitchLobbySceneSuccess(true);
            SplunkManager.Instance.SendRecordDirectly(11016, "SwitchLobbySceneSuccess");
            GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 9);
        }*/

        await SYSCoroutineUtil.WaitForFrames(3) //等待一针

        Log4.Log("CoInnerSwitchScene 9")

        this.current_scene = logic_scene;
        this.busing = false;

    }


    public GetIsLoading():boolean{
        return this.loadingui != null;
    }
    public GetLoadingUI():IUILoadingModel{
        return this.loadingui.Model as IUILoadingModel;
    }
    public AbortLoading():void{
        this.need_abort = true;
    }
    //切换场景
    public LoadSceneAsync(sceneName: string,
                          onProgress?: (progress: number) => void,
                          onComplete?: () => void
                          ) {
        console.log(`开始加载场景: ${sceneName}`);
        // 使用 Cocos 的加载场景 API
        this.PreLoadScene(
            sceneName,
            (completedCount, totalCount) => {
                const progress = completedCount / totalCount;
                if (onProgress) {
                    onProgress(progress); // 触发进度回调
                }
            },
            (error) => {
                if (error) {
                    console.error(`加载场景 ${sceneName} 失败:`, error);
                    return;
                }
                console.log(`场景 ${sceneName} 加载完成`);
                if (onComplete) {
                    onComplete(); // 触发完成回调
                }
            }
        );

    }

    /**
     * * @param sceneName 场景名称。
     * @param onProgress 加载进度回调。
     * @param onLoaded 加载回调。
     */
    private PreLoadScene(sceneName: string, onProgress: cc.Director.OnLoadSceneProgress, onLoaded: cc.Director.OnSceneLoaded) {
        cc.director.preloadScene(sceneName, onProgress, onLoaded);
    }
    /**
     * 异步加载场景
     * @param sceneName 场景名称
     * @param onProgress 加载进度回调 (可选)
     * @param onComplete 加载完成回调 (可选)
     */
    public async CoLoadSceneAsync(
        sceneName: string,
        onProgress?: (progress: number) => void,
        onComplete?: () => void
    ): Promise<void> {


    }
}
