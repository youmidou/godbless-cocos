import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIWindow} from "db://assets/Hotfix/pkg/UI/UIWindow";
import {UILayer} from "db://assets/Hotfix/pkg/UI/Component/UILayer";
import {GConfig} from "db://assets/Hotfix/Global/GConfig";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Node, Vec2, find, Camera,
    Prefab,instantiate
} from 'cc';
import {GameObject} from "db://assets/Scripts/GameEngine/GameObject";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {GameObjectPool} from "db://assets/Hotfix/pkg/Resource/GameObjectPool";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
import {SYSUtil} from "db://assets/Hotfix/pkg/utils/SYSUtil";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {DownloadManager} from "db://assets/Hotfix/pkg/Manager/DownloadManager";
import { PopupData } from "../utils/PopUpQueueStack";
import {Dictionary} from "db://assets/Hotfix/pkg/utils/Dictionary";
import { LobbyManager } from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import { ThemeDataManager } from "../../ThemeGameEngine/ThemeDataManager";
import { ResolutionAdapter } from "../../../Scripts/XTudouFramework/UI/ResolutionAdapter";
import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";

/**
 *
 * added by yh @ 2024/06/04 16:15
 * 注意:
 * OpenWindow //打开窗口
 * DestroyWindow //销毁窗口
 *
 * OpenWindowDirectly :下载完后直接打开
 *
 * */
export class UIManager implements IHolder { //extends SingleT<UIManager>
    private static instance: UIManager;
    public transform: Node;

    private __enable_record: boolean;
    private camera_go: Node;
    private UICamera: Camera;
    private popupList: any;

    private allowPopup:boolean =false
    private not_check_yet: boolean;

    public static get Instance(): UIManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    private screen_width: number = 1280;
    private screen_height: number = 720;
    //-- UIRoot路径
    private UIRootPath: string = "UIRoot";
    private UILayersRootPath: string = "UIRoot/Layers";
    //-- UICamera路径
    private UICameraPath: string = "UIRoot/UICamera";
    // -- 分辨率
    private Resolution: Vec2 = new Vec2(1280, 720)
    //-- 窗口最大可使用的相对order_in_layer
    public MaxOderPerWindow: number = 10;

    private UIWaitingPrefabPath: string = "UI/Gameloading/prefab/loading.prefab";
    private UIWaitingPrefabPortraitPath: string = "UI/Gameloading/prefab/loading_vertical.prefab";

    // 所有存活的窗体
    private _windows: Dictionary<string, UIWindow>;
    //-- 所有可用的层级
    private layers: Map<string, UILayer>;

    //-- 记录当前弹窗Type
    private overlapWindow:any=null //重叠窗口
    private popupWindow:any=null //弹出窗口
    private popupSmallWindow:any=null //弹出小窗口
    private popupData:PopupData     = null;//弹出窗口数据
    private popupSmallData:PopupData   = null;//弹出小窗口数据

    //分辨率重置
    private resolution_reset:ResolutionAdapter;

    private portrait: boolean = true; //true:竖版;false:横版;
    private root_transform: Node;

    constructor() {
        //-- 所有存活的窗体
        this._windows = new Dictionary<string, UIWindow>();
        //-- 所有可用的层级
        this.layers = new Map<string, UILayer>();

        //-- 窗口记录队列
        //this.__window_stack = new List<Type>();
        //-- 是否启用记录
        this.__enable_record = true;

        //初始化组件
        this.root_transform = GameObject.Find(this.UIRootPath)
        this.transform = GameObject.Find(this.UILayersRootPath)
        UIUtil.Assert(this.transform != null,"获取UIManager节点失败")
        this.camera_go = GameObject.Find(this.UICameraPath);
        this.UICamera = this.camera_go.getComponent(Camera);
        GameObject.DontDestroyOnLoad(this.root_transform)

        //适配器
        this.resolution_reset = this.root_transform.getComponent(ResolutionAdapter)

        UIUtil.Assert(!UIUtil.IsNull(this.transform), "transform is null");
        UIUtil.Assert(!UIUtil.IsNull(this.UICamera), "UICamera is null");
        //-- 初始化层级
        this.InitLayer(UILayers.CacheLayer);
        this.InitLayer(UILayers.BackgroundLayer);
        this.InitLayer(UILayers.JustAboveAllBoardLayer);
        this.InitLayer(UILayers.AboveAllBoardLayer);

        this.InitLayer(UILayers.FooterLayer);
        this.InitLayer(UILayers.HeaderLayer);
        this.InitLayer(UILayers.NormalLayer);
        this.InitLayer(UILayers.WaitingLayer);
        this.InitLayer(UILayers.TopLayer);
        this.InitLayer(UILayers.TipLayer);
        this.InitLayer(UILayers.LaunchLayer);
        this.InitLayer(UILayers.AlertTipLayer);

    }

    private InitLayer(Layer: UILayers) {
        let LayerName = UILayers[Layer]
        let transform = GameObject.Find(this.UILayersRootPath + "/" + LayerName)
        let layer_root = new UILayer(this, LayerName)
        layer_root.__Awake(transform);
        let OrderInLayer:number = Layer as number;
        layer_root.OnCreate(OrderInLayer as any);
        this.layers[LayerName] = layer_root;

    }

    private GetUIConfigByName(window_name: any): UIConfig {
        UIUtil.Assert(window_name != null, "window_name is null");
        let config: UIConfig = window_name.GetUIConfig()
        return config
    }

    public GetWindow(ui_name: any, active: boolean = false, view_active: boolean = false) :UIWindow{
        let name = ui_name.name
        let target: UIWindow = this._windows.Get(name)
        if (target == null) {
            return null;
        }
        if (active == true && target.Active != active)
        {
            return null;
        }
        if (view_active == true && target.View.GetActive() != view_active)
        {
            return null;
        }
        return target;
    }
    //初始化窗口
    private InitWindow(ui_type: any, window: UIWindow, prefab: string) {
       let config:UIConfig = this.GetUIConfigByName(ui_type);
        UIUtil.Assert(config!=null,"No window named : "+ui_type.name+".You should add it to UIConfig first!");
        let layer:UILayer = this.layers[UILayers[config.Layer]] ;
        UIUtil.Assert(config!=null,"No layer named : "+config.Layer.toString()+".You should create it first!");
        //----------------------------------
        window.Name = ui_type.name
        window.NameType = ui_type;
        window.config = config;
        //=================================================================================================
        if (config.Model != null)
        {
            window.Model = config.Model
        }
        //=================================================================================================
        let portrait:boolean = true;
        let holder:IHolder = layer;
        // 定义对象数组 args 并初始化值
        /*
        let args: object[] = [
            holder,
            window.Name,
            //window.Model,
            //window.Ctrl,
            //portrait,
            //true
        ];
        */
        let args: any[] = [
            holder,
            window.Name,
            window.Model,
            portrait

        ];
        let view:UIBaseView = SYSUtil.CreateInstance(ui_type,...args) as UIBaseView
        window.View = view;
        //==========================================================-
        window.Active = false;
        window.uiLayer = layer;
        window.Layer = config.Layer;
        if (!UIUtil.IsNullOrEmpty(prefab))
        {
            window.PrefabPath = prefab;
        }
        else
        {
            window.PrefabPath = config.PrefabPath;
        }
        return window;
    }
// 定义一个泛型方法，用于接收任意类并创建其实例
    public createInstance<T>(ClassType: new (...args: any[]) => T, ...args: any[]): T {
        // 使用 new 创建传入类的实例
        return new ClassType(...args);
    }


    private InnerOpenWindow(target: UIWindow, args: any) {
        UIUtil.Assert(target.Active == false, "You should close window before open again!");

        target.Active = true;
        let has_view: boolean = target.View != null;
        let has_prefab_res: boolean = target.PrefabPath != null || target.PrefabPath != "";
        let has_loaded: boolean = target.View != null && target.View.transform != null;
        let need_load: boolean = has_view && has_prefab_res && has_loaded;
        if (need_load) {
            this.ActivateWindow(target, args);
        } else if (!target.IsLoading) {
            //加载
            target.IsLoading = true;
            //-- 设置resident ui
           let config:UIConfig  = target.config;
           if(config != null && !UIUtil.IsNullOrEmpty(config.ABResident)){
               ResourcesManager.Instance.SetAssetBundleResident(config.ABResident, true);
           }
            //开启遮罩文件
            this.ShowHideOpenWaitingUI(target.NameType, true);
            GameObjectPool.Instance.GetGameObjectAsync(target.PrefabPath,(go,target1)=>{
                if(UIUtil.IsNull(go)){
                    let ui_name = target.NameType;
                    let path = target.PrefabPath;
                    var has_res:boolean = ResourcesManager.Instance.MapAssetPathExist(path);
                    Log4.LogError("InnerOpenWindow: gameobject is null. ui_name: " + ui_name + ", path: " + path +
                        ", prefab exist: " + has_res);

                    if(ui_name ==this.popupWindow ||ui_name ==this.overlapWindow ){
                        UIManager.Instance.DestroyOrderWindow(ui_name);
                    }else if (ui_name == this.popupSmallWindow){
                        UIManager.Instance.DestroyOrderSmallWindow(ui_name);
                    } else
                    {
                        UIManager.Instance.DestroyWindow(ui_name);
                    }
                    target.IsLoading = false;
                    this.ShowHideOpenWaitingUI(target.NameType, false);
                    return;
                }

                let trans:Node = go
                //trans.setParent(target.uiLayer.transform)
                trans.name = target.Name;
                target.uiLayer.transform.addChild(trans)
                Log4.Log("xxxxx添加到层级...%s",trans)
                target.IsLoading = false;
                this.ShowHideOpenWaitingUI(target.NameType, false);

                //-- 卸载AB资源
                let config:UIConfig  = target.config;
                if (config!=null&&config.UnloadAB && !UIUtil.IsNullOrEmpty(config.ABPath))
                {
                    ResourcesManager.Instance.AddToUnloadList(config.ABPath);
                }
                //OnCreate 基类会拿到 trans
                target.View.OnCreate(args);

                if(target.Active)
                {
                    this.ActivateWindow(target,args);
                }
            })

        }

    }

    //-- 关闭窗口：私有
    private InnerCloseWindow(target: UIWindow) {
        if (target.Active) {
            this.Deactivate(target)
            target.Active = false;
        }
    }

    private GetFinalPrefabByPath(prefab: string, is_portrait: boolean): string {
        if (is_portrait == null) {
            is_portrait = this.portrait
        }

        if (is_portrait) {

        }
        return prefab;
    }

    private GetFinalPrefab(target: any, prefab: string, is_portrait: boolean = false) {
        if (UIUtil.IsNullOrEmpty(prefab)) {
            let config: UIConfig = this.GetUIConfigByName(target);
            prefab = config.PrefabPath;
        }
        return this.GetFinalPrefabByPath(prefab, is_portrait);
    }
    public GetCurrentWindowCount() :number{
        return this._windows.Size()
    }
    //打开窗口
    public OpenWindow(ui_name: any, prefab: string = null, args: any=null): UIWindow {
        if (GConfig.Debug && GConfig.Debug_System) {
            Log4.Log("OpenWindow " + ui_name);
        }
        //-- 得到正确的prefab
        let final_prefab: string = this.GetFinalPrefab(ui_name, prefab);
        let target: UIWindow = this.GetWindow(ui_name);
        if (target == null) {

            let window:UIWindow = new UIWindow();
            this._windows.Add(ui_name.name,window);
            target = this.InitWindow(ui_name, window, final_prefab);
        }

        if (GConfig.Debug && GConfig.Debug_System) {
            Log4.Log("*************OpenWindow : ui_name = " + target.Name + "  PrefabPath = " + target.PrefabPath);
        }

        if (target.IsLoading) {
            return target;
        }

        //-- 先关闭
        this.InnerCloseWindow(target);
        this.InnerOpenWindow(target, args);

        return target;

    }
    //#region ==========添加到队列弹窗列表======================================================
    //#endregion ====================================================================
    //#region ==========SysBaseWindow======================================================
    //=====================================================================
    //-- 打开窗口（系统）：公有  本地没有就下载在打开
    //-- from_lobby: 传入参数是为了处理下载，避免某些窗口跨场景popup
    //-- show_circle : 是否loading 阻塞，等待下载完成弹出界面
    public OpenWindowDirectly(ui_name:any, prefab:string, path: string=null,show_circle:boolean=false,param:object=null):void {
        if(GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Print("OpenWindowDirectly " + ui_name+" / "+prefab+" / "+path);
        }
        let config:UIConfig  = this.GetUIConfigByName(ui_name);
        UIUtil.Assert(config!=null,"OpenWindowDirectly: No window named : "+ui_name.ToString()+".You should add it to UIConfig first!");

        if (show_circle)
        {
            this.ShowWaitingUI(true);
        }
        function __openWindow():void{
            if (show_circle)
            {
                this.ShowWaitingUI(false);
            }
            if(GConfig.Debug && GConfig.Debug_System)
            {
                Log4.Print("OpenWindowDirectly: OpenWindow! ", ui_name, prefab);
            }

            this.OpenWindow(ui_name, prefab, param);
        }
        //-- 下载处理，如果当前有需要下载的资源，且支持下载，则下载资源；否则，返回；
        let ab_path:string = !UIUtil.IsNullOrEmpty(path) ? path : config.ABPath;
        if(ab_path != null && DownloadManager.Instance.NeedDownload(ab_path)){
            //-- 下载资源
            if (config.DownloadType == 1){
                if (GConfig.Debug && GConfig.Debug_System)
                {
                    Log4.Print("OpenWindowDirectly: Download " + ui_name.ToString());
                }

                //.....
            }
        }

    }
    /**
     * *--订单窗口队列排序打开 用于活动弹窗队列开启
     * 注意:窗口关闭必须用 DestroyOrderWindow 进行关闭
     * add_front：是否添加在队列最前面
     * from_lobby: 传入参数是为了处理下载，避免某些窗口跨场景popup
     */
    //
    public OpenOrderWindow(ui_name:any,prefab:string=null,path:string=null,add_front:boolean =false,from_lobby:boolean=false,param:object = null):void{
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Print("OpenOrderWindow " + ui_name, prefab, path, add_front, from_lobby);
        }

        let config:UIConfig  = this.GetUIConfigByName(ui_name);
        UIUtil.Assert(config != null, "OpenOrderWindow: No window named : "+ui_name.ToString()+" .You should add it to UIConfig first!");

    }


    //-- 销毁窗口
    public DestroyWindow(ui_name: any,callback:()=>void =null) {
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Log("DestroyWindow" + ui_name.ToString());
        }
        let target:UIWindow  = this.GetWindow(ui_name);
        if (target == null)
        {
            return;
        }
        // target.View.PlayCloseAnimation(() =>{}
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Log("DestroyWindow" + ui_name.ToString()+ " PlayCloseAnimation callback");
        }

        if (callback!=null)
        {
            callback();
        }
        this.InnerCloseWindow(target);
        this.InnerDestroyWindow(ui_name, target);//include_keep_model

    }
    //销毁订单窗口
    public DestroyOrderWindow(ui_name:any,callback:()=>void=null){
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Log("DestroyOrderWindow" + ui_name.ToString());
        }

        let target:UIWindow  = this.GetWindow(ui_name);
        if (target == null)
        {
            return;
        }
        let cfg:UIConfig  = this.GetUIConfigByName(ui_name);
        if (cfg == null)
        {
            Log4.LogError("Safe Error :: try to destroy window without config " + ui_name);
            return;
        }
        //--------------------------------
        function close_callback(ui_name:any,callback:()=>void){
            if (GConfig.Debug && GConfig.Debug_System)
            {
                Log4.Log("DestroyOrderWindow " + ui_name + " PlayCloseAnimation callback");
            }

            if (callback != null)
            {
                callback();
            }

            let config:UIConfig  = this.GetUIConfigByName(ui_name);
            //config.PauseGame = config.PauseGame or 1

            //-- 处理锁主题
            if (LobbyManager.Instance.IsInTheme() && config.PauseGame == 1)
            {
                this.pauseThemeCount = this.pauseThemeCount - 1;
                if (this.pauseThemeCount <= 0)
                {
                    ThemeDataManager.Instance.ResumeGame();
                    this.pauseThemeCount = 0;
                }
            }

        }
    }
    //销毁订单小窗口
    public DestroyOrderSmallWindow(ui_name:any,callback:()=>void=null):void{
        if (GConfig.Debug && GConfig.Debug_System)
        {
            Log4.Log("DestroyOrderSmallWindow ", ui_name);
        }

        let target:UIWindow = this.GetWindow(ui_name);
        if (target != null)
        {
            return;
        }

        target.View.PlayCloseAnimation(()=>{

            if (GConfig.Debug && GConfig.Debug_System)
            {
                Log4.Log("DestroyOrderSmallWindow " + ui_name + " PlayCloseAnimation callback");
            }

            if (callback != null)
            {
                callback();
            }

            let config:UIConfig  = this.GetUIConfigByName(ui_name);

            //-- 处理弹窗名
            this.popupSmallWindow = null;
            this.popupSmallData = null;

            //-- 关闭并销毁window
            this.InnerCloseWindow(target);
            this.InnerDestroyWindow(ui_name, target);

            //-- 弹后续list
            this.OpenNextOrderSmallWindow();
        });

    }
    private InnerDestroyWindow(ui_name:any,target:UIWindow){
        //-- 说明：一律缓存，如果要真的清理，那是清理缓存时需要管理的功能
        let config:UIConfig = this.GetUIConfigByName(ui_name);
        if (config == null)
        {
            Log4.LogError("InnerDestroyWindow: config doesn't exist. ui_name: " + ui_name);
            return;
        }

        //-- 设置resident ui
        if (!UIUtil.IsNullOrEmpty(config.ABResident) && !UIUtil.IsNullOrEmpty(config.ABPath))
        {
            ResourcesManager.Instance.SetAssetBundleResident(config.ABResident, false);
            ResourcesManager.Instance.AddToUnloadList(config.ABPath);
        }


        if (target.View.transform!=null)
        {
            if (config.DestroyPrefab == true)
            {
                if (target.View != null && target.View.transform != null)
                {
                    GameObjectPool.Instance.RecycleGameObject(target.PrefabPath,
                        target.View.transform);
                }
            }
            else
            {
                //默认销毁预制体不缓存
                GameObjectPool.Instance.DestroyDirectGameObject(target.PrefabPath,
                    target.View.transform);
            }
        }

        if (target.Model != null)
        {
            target.Model.OnDestroy();
        }
        //if (target.Ctrl != null)
        //{
        //    target.Ctrl.OnDestroy();
        //}
        if (target.View != null)
        {
            target.View.OnDestroy();
        }
        this._windows.Remove(ui_name.name)


    }
    //-------------------------------------------------
    //-- 激活窗口
    private ActivateWindow(target: UIWindow, args: any) {
        UIUtil.Assert(target != null);
        UIUtil.Assert(target.IsLoading == false, "You can only activate window after prefab locaded!");
        if (target.Model != null) {
            //target.Model.Activate(args);
        }
        target.View.SetActive(true);
    }

    //-- 反激活窗口
    private Deactivate(target: UIWindow) {
        if (target.Model != null) {
            target.Model.Deactivate();
        }
        target.View.SetActive(false);
        /*
        if (target.View.GetComponents() == null) {
            if (!target.IsLoading) {
                Log4.LogError("Deactivate: self.components is nil : " + target.Name);
            }
        }
        */
    }


    //#region ==========添加到队列弹窗列表======================================================
    public CombinePopupData(ui_name:any,prefab:string,path:string,add_front:boolean,from_lobby:boolean,model_data:object):PopupData{
        let data:PopupData = new PopupData();
        data.ui_name = ui_name
        data.prefab = prefab
        data.path = path
        data.add_front = add_front
        data.from_lobby = from_lobby
        data.model_data = model_data
        return data
    }
    //===添加到弹出列表====================================================
    //添加到弹出列表 add_front:添加到前面; popup_data:弹出数据
    public AddToPopupList(add_front:boolean,ui_name:any,popup_data:PopupData):void{
        if (add_front)
        { // 添加前面
            if (GConfig.Debug && GConfig.Debug_System)
            {
                Log4.Print("AddToPopupList: Add Front! " + ui_name);
            }
            this.popupList.AddFront(popup_data);
        }
        else
        {
            if (GConfig.Debug && GConfig.Debug_System)
            {
                Log4.Print("AddToPopupList: Add Back! " + ui_name);
            }
            //添加后面
            this.popupList.EnQueue(popup_data);
        }
    }
    /*
            let bundle = assetManager.getBundle('AssetsPackage');
        bundle.load(path, Prefab,(finished: number, total: number, item)=>{
            let progress = finished/total
            if(progress_callback){
                progress_callback(progress)
            }
        }, (err, prefab) => {
            if (err) {
                console.log("加载预制体失败:", err);
                return;
            }
            if(callback){
               // callback()
            }
        });
        */
    Startup() {

    }
    //切换到竖版
    public SwitchToPortrait() {
        if (this.portrait ==false)
        {
            if (this.resolution_reset!=null)
            {
                this.resolution_reset.SwitchToPortrait();
            }
            this.portrait = true;
        }
    }
    //切换横版
    public SwitchToLandscape() {
        if (this.portrait ==true)
        {
            if (this.resolution_reset!=null)
            {
                this.resolution_reset.SwitchToLandscape();
            }
            this.portrait = false;
        }
    }
    // 类型保护，确保 view 是继承自 UIBaseView 的
    private isUIBaseView(view: any): view is typeof UIBaseView {
        return view.prototype instanceof UIBaseView;
    }

    private ShowHideOpenWaitingUI(target: any, show: boolean) {
        let config:UIConfig = this.GetUIConfigByName(target);
        if(config.ShowWaitingCircle){
            this.ShowWaitingUI(show)
        }
    }

    private ShowWaitingUI(show: boolean) {
        if (show)
        {
            if (this.portrait)
            {
                UIUtil.ShowNode(this.UILoadingWaitingPortrait, true);
            }
            else
            {
                UIUtil.ShowNode(this.UILoadingWaiting, true);
            }
        }
        else
        {
            UIUtil.ShowNode(this.UILoadingWaitingPortrait, false);
            UIUtil.ShowNode(this.UILoadingWaiting, false);
        }
    }

    private UILoadingWaiting:Node;
    private UILoadingWaitingPortrait:Node;
    public CreateLoadingWaitingUI(){
        if(this.UILoadingWaiting ==null){
            ResourcesManager.Instance.LoadAsync(this.UIWaitingPrefabPath,Prefab,
                (prefab)=>{
                    let parent = UIManager.Instance.GetLayer(UILayers.WaitingLayer).transform;
                    let go:Node = GameObject.Instantiate(prefab as Prefab,parent)
                    this.UILoadingWaiting = go;
                    UIUtil.ShowNode(this.UILoadingWaiting,false);
                },null,

            )
        }
        if(this.UILoadingWaitingPortrait){
            ResourcesManager.Instance.LoadAsync(this.UIWaitingPrefabPortraitPath,Prefab,
                (prefab)=>{
                    let parent = UIManager.Instance.GetLayer(UILayers.WaitingLayer).transform;
                    let go:Node = GameObject.Instantiate(prefab as Prefab,parent)
                    this.UILoadingWaitingPortrait = go;
                    UIUtil.ShowNode(this.UILoadingWaitingPortrait,false);
                },null

            )
        }


    }

    //获取层级
    private GetLayer(Layer: UILayers):UILayer {
       let uiLayer = this.layers.get(Layer.toString())
        return uiLayer
    }

    //打开下一个订单小窗口
    private OpenNextOrderSmallWindow():void
    {
        /*
        //-- 如果有popup window，不用弹
        if( this.popupWindow != null || this.overlapWindow != null || this.popupSmallWindow!= null ||
            this.popupSmallList.IsEmpty())
        {
            return;
        }

        let popup_data:PopupData  = this.popupSmallList.DeQueue() as PopupData;
        this.OpenOrderSmallWindow(popup_data.ui_name, popup_data.prefab, popup_data.path,
            popup_data.add_front, popup_data.from_lobby, popup_data.model_data);
        */
    }
    //是否允许弹窗
    public AllowPopup():boolean
    {
        return this.allowPopup;
    }
    public IsLoadingUIReady(): boolean {
        return true;
    }

    public IsLoadingUIShowing() {
        return true;
    }

    public ClearOrderList():void {

    }

    public DestroyWindowExceptLayer(TipLayer: UILayers):void {

    }

    public DestroyAllPopupUI():void {

    }

    //-- 禁止弹窗
    public DisablePopup() {

    }

    public OpenLandscapeOrPortraitWindow(target:any, prefab:string=null,args:any=null):void {
        let final_prefab:string  = this.GetFinalPrefab(target, prefab);
        this.OpenWindow(target,final_prefab, args);
    }
    //进入 低分辨率
    public EnterLowerResolution():void
    {
        if (this.resolution_reset!=null)
        {
            this.resolution_reset.EnterLowerResolution();
        }
    }
    //退出 低分辨率
    public ExitLowerResolution() {
        if (this.resolution_reset!=null && this.not_check_yet)
        {
            this.resolution_reset.CheckLowerResolution();
            this.not_check_yet = false;
        }
    }

    public SwitchToPortraitForIOS(isSwitch: boolean) {

    }

    public ClearWindowStack() {

    }

    public SyncCoins(coins: number) {
        
    }

    public SyncChips(coins: number) {
        
    }
}

