import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";
import {ThemeManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeManager";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {LoadABItem, ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {UIThemeLoadingGameView} from "db://assets/Hotfix/UI/UIThemeLoadingGame/UIThemeLoadingGameView";
import {UILoadingView} from "db://assets/Hotfix/UI/UILoading/UILoadingView";
import {List} from "db://assets/Hotfix/pkg/utils/List";
import {SceneConfig} from "db://assets/Hotfix/Scenes/Config/SceneConfig";
import {ThemeConfigMap} from "db://assets/Hotfix/Themes/ThemeConfigMap";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {DLAB, DownloadManager} from "db://assets/Hotfix/pkg/Manager/DownloadManager";
import {IUILoadingView} from "db://assets/Hotfix/pkg/Scene/IUILoadingView";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {UIThemeFooterView} from "db://assets/Hotfix/UI/UIThemeFooter/UIThemeFooterView";
import {UIThemeHeaderView} from "db://assets/Hotfix/UI/UIThemeHeader/UIThemeHeaderView";
import {LoadingTipsManager} from "db://assets/Hotfix/Modules/Lobby/LoadingTipsManager";

/**
 * 主题场景
 --added by yh @ 2024-12-15 16:15
 注意：1:预加载资源
 */
export class ThemeScene extends BaseScene{
    private need_abort: boolean;
    constructor() {
        super()
    }
    //-- 创建：初始化一些需要全局保存的状态
    public override OnCreate():void{
        super.OnCreate()

    }

    //1:打开加载进度条面板
    public override async OpenLoading(){
        this.loadingUI = UIManager.Instance.OpenWindow(UIThemeLoadingGameView)
        this.model = this.loadingUI.Model
        ThemeManager.Instance.SetSwitchSceneSuccess(false)
        //-- 等待loading界面打开
        await SYSCoroutineUtil.WaitUntil(()=>{
            return UIManager.Instance.GetWindow(UIThemeLoadingGameView).View !=null
        })

    }

    //2: -- 在此下载主题，主题占50%进度
    public async DownloadSceneAssets(progress_callback:(progress:number)=>void){
        //progress_callback(1)

        let tid = Math.floor(ThemeManager.Instance.GetThemeId())
        let ab_list:List<string> = new List<string>();
        //-- 在此下载主题，主题占50%进度
        let test_need_download:boolean = false;
        let theme_config:ThemeConfig = ThemeConfigMap.Instance.GetThemeConfigById(tid);
        UIUtil.Assert(theme_config != null,"new config_name is null  "+tid);
        this.SetThemeConfig(theme_config)
        let download_list:List<LoadABItem> = theme_config.UIDownloadList;
        if (download_list.Count == 0){
            Log4.LogError("CoInnerSwitchScene: " + tid + ": Download List doesn't exist!");
            return
        }

        //-- 20%
        progress_callback(0.1);
        SplunkManager.Instance.SendRecordDirectly(12006, "CoInnerSwitchScene:pre-downloading");

        let ab_path,ratio:string;
        let total_size:number=0
        let need_download_list:List<DLAB> = new List<DLAB>();
        for (let i:number = 0; i < download_list.Count; i++){
            ab_path = download_list.Get(i).Path;
            if(DownloadManager.Instance.NeedDownload(ab_path)){
                total_size = total_size + DownloadManager.Instance.GetAssetBundleSize(ab_path);
                let dlab:DLAB= new DLAB();
                dlab.ab_path = ab_path;
                dlab.is_large = true;
                need_download_list.Add(dlab);
            }
        }

        //this.model.totalSize = Math.floor(total_size / 1000);
        if (need_download_list.Count > 0){
            //-- 显示close按钮
            if (this.loadingUI != null && this.loadingUI.View!=null)
            {
                //(this.loadingUI.View as unknown as IUILoadingView).ShowCloseButton(true);
            }

            //如果需要下载，绑定tips
            LoadingTipsManager.Instance.BindLoadTips(this.loadingUI.View, 1);
            Log4.Log("need_download_list 开始下载 Count="+need_download_list.Count);
            //....
            let multi_download_config:[] = [];
            await DownloadManager.Instance.CoDownloadMultiAssetBundles(multi_download_config)
        }
        /*
        //-- 中断协程
        if(this.need_abort){
            this.ReturnFromThemeLoading()
            LoadingTipsManager.Instance.UnBindLoadTips(this.loadingUI.View, 1)
            return
        }
        */
        progress_callback(1);
    }

    //最后结束关闭进度条面板
    public async CloseLoading() {
        this.UpdateProgress( 1.0);
        ThemeManager.Instance.SetSwitchSceneSuccess(true)

        await SYSCoroutineUtil.WaitForSeconds(0.5)
        UIManager.Instance.DestroyWindow(UIThemeLoadingGameView)
        SplunkManager.Instance.SendRecordDirectly(12013, "CoInnerSwitchScene:SwitchSceneComplete");
    }

    //设置主题配置
   public SetThemeConfig(theme_config: ThemeConfig) {
       super.SetThemeConfig(theme_config);

       ThemeManager.Instance.SetThemeConfig(theme_config);
   }

    //进入场景
    public override OnEnter():void{
        super.OnEnter()
        if(this.GetThemeConfig().IsPortrait){
            UIManager.Instance.SwitchToPortrait()
        }else {
            UIManager.Instance.SwitchToLandscape()
        }

        //UIManager.Instance.OpenLandscapeOrPortraitWindow(typeof(UIThemeMainFooter));
        UIManager.Instance.OpenWindow(UIThemeHeaderView);
        UIManager.Instance.OpenWindow(UIThemeFooterView);

        Log4.Log("xxxxx 加载下边栏完成。。。")
        //UIManager.Instance.OpenLandscapeOrPortraitWindow(typeof(UIActivityThemeNode));
        //战斗场景摇杆
        //UIManager.Instance.OpenWindow(typeof(UIBattleMainView));

        var tid:number = ThemeManager.Instance.GetThemeId();
        super.ClearPreloadList();
        //预加载预制体
        //this.AddPreloadResource("Themes/Theme10001/prefab/theme_10001.prefab", typeof(UnityEngine.GameObject), 1);
        //UIManager.Instance.PreloadUIPrefab(typeof(UILobbyMainView),this);

        //预加载 场景UIPrefab
        //UIManager.Instance.PreloadUIPrefab(typeof(UILobbyHeaderView), this);

        SplunkManager.Instance.SendRecordDirectly(12010, "ThemeGameScene:OnEnter");
    }

    //-- 准备工作
    public override OnComplete():void
    {
        super.OnComplete();
        //切换场景完成
        ThemeManager.Instance.OnSwitchSceneComplete();
        ThemeManager.Instance.OpenCurrentTheme(this);

    }


    //-- 离开场景
    public override OnLeave():void
    {
        //UIManager.Instance.DestroyWindow(typeof(UIThemeMainFooter));
        UIManager.Instance.DestroyWindow(UIThemeHeaderView);
        UIManager.Instance.DestroyWindow(UIThemeFooterView);
        //UIManager.Instance.DestroyWindow(typeof(UIActivityThemeNode));

        ThemeManager.Instance.CloseCurrentTheme()
        super.OnLeave();
    }

    public OnDestroy(){
        super.OnDestroy()

    }
}