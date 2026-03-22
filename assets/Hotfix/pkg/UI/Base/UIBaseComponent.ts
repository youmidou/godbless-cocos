import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import * as cc from 'cc';
import {UILayer} from "db://assets/Hotfix/pkg/UI/Component/UILayer";
/**
 *
 * added by yh @ 2024/11/19 16:15
 * 注意:
 * 
 * */
export class UIBaseComponent implements IHolder {
    protected holder: IHolder;
    public transform: cc.Node;
    public gameObject: cc.Node;
    private __name: string;
    private __bind_data: object;
    private view: any;
    private __var_arg: string;

    constructor(holder:IHolder, var_arg:string) {
        UIUtil.Assert(holder != null, "Err : holder null!");
        UIUtil.Assert(holder.transform != null, "Err : holder tansform null!");
        UIUtil.Assert(var_arg!=null, "Err: var_arg null!");
        //-- 窗口view层脚本
        this.view = null;
        //-- 持有者
        this.holder = holder;
        //-- 脚本绑定的transform
        this.transform = null;
        //-- 可变类型参数，用于重载
        this.__var_arg = var_arg;
        // -- 这里一定要等资源异步加载完毕才启用Update
        this.EnableUpdate(false);
    }
    //私有注入
    public __Awake(trans:cc.Node ){
        this.gameObject = trans
        this.transform = trans //trans.getComponent(cc.UITransform)

        UIUtil.Assert(this.transform != null,"transform is null");
    }
    public OnCreate(args:any = null){
        UIUtil.Assert(!UIUtil.IsNull(this.holder), "Err : holder nil!");
        UIUtil.Assert(!UIUtil.IsNull(this.holder.transform), "Err : holder tansform nil!");
        //-- 初始化view
        /*
        if(this.GetType() == typeof(UILayer)){
            this.view =null;
        }
        */

        //-- 与持有者的相对路径
        this.transform = UIUtil.FindTrans(this.holder.transform, this.__var_arg);
        this.__name = this.transform.name

    }

    //-- 获取激活状态
    public GetActive():boolean
    {
        if (UIUtil.IsNull(this.transform))
        {
            return false;
        }
        return this.transform.active;
    }

    //-- 激活、反激活
    public SetActive(active:boolean){
        if(UIUtil.IsNull(this.transform)){
            return
        }
        if(active){
            this.transform.active = active
            this.OnEnable();
        }else {
            this.OnDisable();
            this.transform.active = active
        }
    }
    //-- 打开
    public OnEnable(){
        //-- 启用更新函数
        this.EnableUpdate(true);
    }
    //-- 关闭
    public OnDisable() {
        //-- 禁用更新函数
        this.EnableUpdate(false);
    }
    //-- 销毁
    public OnDestroy():void{
        this.holder = null;
        this.transform = null;
        this.__name = null;
        this.__bind_data = null;
    }

    private EnableUpdate(enable: boolean) {
        this.RemoveUpdate();
        if(enable){
            //this.AddUpdate()
        }
    }

    private GetType() {

    }

    private RemoveUpdate() {

    }


}