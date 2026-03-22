import {UILayer} from "db://assets/Hotfix/pkg/UI/Component/UILayer";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
/**
 *
 *
 * added by yh @ 2024/06/13 15:15
 * 注意:
 *
 * */
export class UIWindow{
    //-- 窗口名字
    public Name: string;
    //窗口类型
    public NameType:string;
    //-- Layer层级
    public uiLayer:UILayer;
    //-- Layer名称
    public Layer:UILayers = UILayers.NormalLayer
    //-- Model实例
    Model:any;// Model:UIBaseModel
    //-- View实例
    public View:UIBaseView =null;
    //-- 是否激活
    public Active:boolean =false;
    //-- 预设路径
    public PrefabPath:string = "";
    //-- 是否正在加载
    public IsLoading: boolean =false;
    //UI配置
    public config:UIConfig =null;


}