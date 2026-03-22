import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";

export class UIConfig{
    public Name:string;
    public Layer:UILayers = UILayers.NormalLayer
    public Model:UIBaseModel //

    //预制体路径 如 "UI/LobbyMain/prefab/UILobbyMain.prefab",
    public PrefabPath:string=""
    //如果需要卸载 设置true
    public UnloadAB:boolean=false;
    //ad地址 "ui/lobbymain.assetbundle"
    public ABPath:string="";
    //长期持有 ui/lobbymain
    public ABResident:string;
    //是否是 下载资源 true:远端检查下载;false:默认不下载;
    public DownloadType:number;
    //显示等待圈
    public ShowWaitingCircle:boolean=false;
    //允许重叠
    public AllowOverlap:boolean;
    //白名单
    public WhiteList: string[]
    //黑名单
    public Blacklist: string[]
    //保留列表 //-- 关键弹窗加入队列，等资源下载完毕再弹
    public KeepInList:boolean=false;
    //允许重复
    public AllowDuplicate:boolean =false;
    //暂停游戏
    public PauseGame:number=0; //是否需要暂停游戏 0:不需要；1:需要；
    //显示类型 1:在竖版里打开当前面板切换成横向面板
    public DisplayType:number=0;

    //是否摧毁预制件 false:默认销毁;true:缓存不销毁 用于频繁修改 的预制体
    public DestroyPrefab:boolean=false;

    constructor() {
    }

}