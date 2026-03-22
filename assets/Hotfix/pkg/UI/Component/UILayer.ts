import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Canvas} from "cc";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
export class UILayer extends UIBaseView {
    private top_window_order: number;
    private min_window_order: number;
    private unity_canvas: Canvas;
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel=null) {
        super(holder,var_arg,model);
    }

    public override OnCreate(args:object = null):void
    {
        super.OnCreate(args);
        let OrderInLayer:number = args as unknown as number;
        //-- cocos侧原生组件
        this.unity_canvas = null;

        //-- ui layer
        this.transform.layer = 5;

        //-- canvas
        this.unity_canvas = UIUtil.FindComponent(this.transform, typeof(Canvas)) as Canvas;
        if (UIUtil.IsNull(this.unity_canvas)){

        }
        //-- raycaster

        //-- window order
        this.top_window_order = OrderInLayer;
        this.min_window_order = OrderInLayer;
        
    }

    //-- pop window order
   public PopWindowOder():number {
       var cur = this.top_window_order;
       this.top_window_order = this.top_window_order + UIManager.Instance.MaxOderPerWindow;
       return cur;
    }

    //-- push window order
    public PushWindowOrder():void
    {
        UIUtil.Assert(this.top_window_order > this.min_window_order);
        this.top_window_order = this.top_window_order - UIManager.Instance.MaxOderPerWindow;
    }

    public SetRaycasterEnable(enable:boolean):void
    {
        //(this.unity_graphic_raycaster as UnityEngine.UI.GraphicRaycaster).enabled = enable;
    }

    //--销毁
    public OnDestroy():void
    {
        this.unity_canvas = null;
        //this.unity_canvas_scaler = null;
        //this.unity_graphic_raycaster = null;
        super.OnDestroy();
    }

}
