
/*
 * --[[
-- added by yh @ 2023-02-08
-- UI模型层基类：该界面相关数据，同时负责消息定制
-- 注意：
-- 1、数据大体分为两类：游戏逻辑数据、界面控制数据
-- 2、游戏逻辑数据：从游戏数据中心取数据，这里不做为数据源，只做中转和必要处理（如排序）---游戏中心数据改动以后在这里监听变化
-- 3、界面控制数据：一般会影响到多个界面展示的控制数据，登陆界面显示当前服务器，当受到选服界面操作的影响
-- 4、界面Model层对View层是只读不写的，一定不要在View层写Model
-- 5、界面Model层不依赖Ctrl层和View层，意思是说拿掉这这两层代码，Model依旧能完好运行
-- 6、界面Model层数据只影响UI，不影响游戏逻辑，游戏逻辑不能从Model层取数据，意思是没有界面，游戏依旧能跑
--]]
 */
export class UIBaseModel{
    private __ui_name: string;
    constructor(ui_name:string) {
        this.__ui_name = ui_name
        this.OnCreate();
    }
    //virtual override
    //-- 创建：变量定义，初始化，消息注册
    //-- 注意：窗口生命周期内保持的成员变量放这
    public OnCreate(){

    }
    //virtual override
    //-- 打开：刷新数据模型
    //-- 注意：窗口关闭时可以清理的成员变量放这
    public OnEnable(_params:object =null):void
    {
    }
    //-- 关闭
    //-- 注意：必须清理OnEnable中声明的变量
    public OnDisable():void
    {
    }
    //-- 销毁
    //-- 注意：必须清理OnCreate中声明的变量
    public OnDestroy():void
    {
    }
    //-- 注册消息
    public OnAddListener():void
    {
    }
    //-- 注销消息
    public OnRemoveListener():void
    {
    }
    //--激活：给UIManager用，别重写
    public Activate(args:object):void
    {
        this.OnAddListener();
        this.OnEnable(args);
    }
    //-- 反激活：给UIManager用，别重写
    public Deactivate():void
    {
        this.OnRemoveListener();
        this.OnDisable();

    }

}