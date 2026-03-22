import {Dictionary} from "db://assets/Hotfix/pkg/utils/Dictionary";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Sprite,Button,Prefab} from "cc"
import {ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
import {GameObjectPool} from "db://assets/Hotfix/pkg/Resource/GameObjectPool";
import {IUILoadingView} from "db://assets/Hotfix/pkg/Scene/IUILoadingView";
import {UIWindow} from "db://assets/Hotfix/pkg/UI/UIWindow";
import {IUILoadingModel} from "db://assets/Hotfix/pkg/Scene/IUILoadingModel";
/**
 --[[
 -- added by yh @ 2024-11-18
 注意:
 1:预加载资源
 --]]
 */
export class BaseScene{


    private preload_resources:Dictionary<string, any>;
    private preload_prefab:Dictionary<string, any>;
    private theme_config: ThemeConfig;
    protected loadingUI: UIWindow;
    protected model: IUILoadingModel;
    
    constructor() {
        this.preload_resources = new Dictionary<string, any>();
        this.preload_prefab = new Dictionary<string, any>();

        this.OnCreate()
    }

    //-- 创建：初始化一些需要全局保存的状态
    public OnCreate():void{

    }
    //1:打开加载进度条面板
    public async OpenLoading(){
        //this.loadingUI = UIManager.Instance.OpenWindow(UILoadingView)
        //this.model = this.loadingUI.Model as IUILoadingModel
    }
    //关闭进度条
    public async CloseLoading() {
        this.UpdateProgress( 1.0);

        //await SYSCoroutineUtil.WaitForSeconds(0.5)
        //UIManager.Instance.DestroyWindow(UILoadingView)
    }

    public UpdateProgress(value: number) {
        if (this.model != null)
        {
            this.model.SetValue(value);
        }
    }

    //2:下载载主题，主题占50%进度
    public async DownloadSceneAssets(progress_callback:(progress:number)=>void){

        progress_callback(1)
    }

    public ClearPreloadList():void{
        this.preload_resources.Clear();
        this.preload_prefab.Clear();
    }
    //-- 添加-预加载资源
    //-- 注意：只有prefab类型才需要填inst_count，用于指定初始实例化个数
    public AddPreloadResource(path:string,res_type:any,inst_count:number=0):void{
        //-- Log4.Log("AddPreloadResource " .. path)
        UIUtil.Assert(res_type != null);
        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path));

        if (res_type == typeof(Prefab))
        {
            this.preload_prefab.Add(path,inst_count);
        }
        else
        {
            this.preload_prefab.Add(path,res_type);
        }
    }

    //-- 加载前的初始化
    public OnEnter():void{

    }

    //-- 场景加载结束：后续资源准备（预加载等）
    //-- 注意：这里使用协程，子类别重写了，需要加载的资源添加到列表就可以了
    public async CoOnPrepare(progress_callback:(progress:number)=>void){

        let res_count:number = this.preload_resources.Count;
        let prefab_count:number = this.preload_prefab.Count;
        let total_count:number = res_count + prefab_count;
        if (total_count <= 0)
        {
            return;
        }

        //-- 进度条切片，已加载数目
        //-- 注意：这里的进度被归一化，所有预加载资源占场景加载百分比由SceneManager决定
        let progress_slice:number = 1.0 / total_count;
        let finish_count:number = 0;

        function _ProgressCallback(progress:number){
            UIUtil.Assert(progress <= 1.0, "What's the fuck!!!");

            if (progress_callback != null)
            {
                progress_callback((finish_count + progress) * progress_slice);
            }
        }

        let res_path:string = null;
        let res_type:any  = null;

        for (const [key, value] of this.preload_resources.GetMap()) {
            res_path = key;
            res_type = value;
           await ResourcesManager.Instance.CoLoadAsync(res_path, res_type,null,_ProgressCallback);
            finish_count = finish_count + 1;
            if (progress_callback != null)
            {
                progress_callback(finish_count * progress_slice);
            }
        }

        let inst_count:number = 0;
        for (const [key, value] of this.preload_prefab.GetMap()) {
            res_path = key;
            inst_count = value;
            await GameObjectPool.Instance.CoPreLoadGameObjectAsync(res_path, inst_count, null, _ProgressCallback);
            finish_count = finish_count + 1;
            if (progress_callback != null)
            {
                progress_callback(finish_count * progress_slice);
            }
        }

        return
    }


    //-- 场景加载完毕
    public OnComplete():void
    {

    }
    //-- 离开场景：清理场景资源
    public OnLeave():void
    {

    }
    //-- 销毁：释放全局保存的状态
    public OnDestroy():void
    {
        //this.scene_config = null;
        this.preload_resources = null;
    }

    public SetThemeConfig(theme_config:ThemeConfig)
    {
        this.theme_config = theme_config;
    }
    public GetThemeConfig():ThemeConfig
    {
       return this.theme_config;
    }

}

