
import {UIBaseContainer} from "db://assets/Hotfix/pkg/UI/Base/UIBaseContainer";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {UILayer} from "db://assets/Hotfix/pkg/UI/Component/UILayer";
/**
 *   面板窗口基类
 *
 * added by yh @ 2024/11/19 16:15
 *注意 继承常用参数
 *      * 1,OnCreate:初始化
 *      * 2,OnEnable:打开：窗口显示
 *      * 3,OnDisable:关闭：窗口隐藏
 *      * 4,OnDestroy:销毁的时候
 * */
export class UIBaseView extends UIBaseContainer {


    public config:UIConfig;
    private play_open_and_close_anim:boolean = false;
    private openclose_animation:any;//OpenCloseAnimation
    public disableCloseAnimation:boolean = false

    private _model: UIBaseModel;
    private CloseAnimationPlayed: boolean=false;
    private base_order: number;

    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg);

        this._model = model
    }
    public OnCreate(args:any = null){
        super.OnCreate(args)

    }
    public GetModel<T>(): T {
        return this._model as T;
    }
    // 打开：窗口显示 virtual override
    public override OnEnable():void
    {
        this.base_order = (this.holder as UILayer).PopWindowOder();
        super.OnEnable();
        this.OnAddListener();
        if (this.play_open_and_close_anim && this.openclose_animation != null &&
            !this.disableCloseAnimation)
        {
            this.openclose_animation.PlayOpenAnimation();

            //-- 播放打开声音
            if (this.openclose_animation.openAudioName != "")
            {
                //AudioController.Play(this.openclose_animation.openAudioName);
            }

        }
        this.CloseAnimationPlayed = false;
    }
    //-- 关闭：窗口隐藏
    public override OnDisable():void
    {
        this.OnRemoveListener();
        super.OnDisable();
        (this.holder as UILayer).PushWindowOrder();
    }


    //播放关闭动画
    public PlayCloseAnimation(callback:()=>void) {
        if (this.CloseAnimationPlayed) //--加一个标志位，防止快速点击按钮关闭窗口时的重复播放动画问题
        {
            return;
        }

        this.CloseAnimationPlayed = true;
        //....哇啦哇啦.动画..

        callback();
    }

    //注册消息 virtual 消息必须放这里便于
    public OnAddListener():void
    {

    }

    //-- 注销消息
    public OnRemoveListener():void
    {

    }

    //-- 销毁：窗口销毁
    public override OnDestroy():void
    {
        /*
        if (this.__ui_callback != null)
        {
            foreach (var i in __ui_callback)
            {
                RemoveUIListener(i.Key,i.Value);
            }
        }
        */

        if (this._model != null)
        {
            this._model.OnDestroy();
        }
        this._model = null;
        //this._ctrl = null;
        //__ui_callback = null;
        super.OnDestroy();

    }
}

