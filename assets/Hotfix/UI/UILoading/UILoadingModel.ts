import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {IUILoadingModel} from "db://assets/Hotfix/pkg/Scene/IUILoadingModel";
import {UIThemeLoadingGameView} from "db://assets/Hotfix/UI/UIThemeLoadingGame/UIThemeLoadingGameView";
import {UILoadingView} from "db://assets/Hotfix/UI/UILoading/UILoadingView";
/**
 *
 * */
export class UILoadingModel extends UIBaseModel implements IUILoadingModel{
    private view: UILoadingView;
    private value: number;

    constructor(ui_name:string) {
        super(ui_name);
    }

    public OnCreate():void{

    }

    public SetView(view: UILoadingView) {
        this.view = view
        this.view.SetValue(this.value)
    }
    //-- 销毁
    //-- 注意：必须清理OnCreate中声明的变量
    public OnDestroy():void
    {
    }

    public totalSize: number;

    public SetValue(value: number): void {
        this.value = value
        if(this.view!=null){
            this.view.SetValue(value)
        }
    }
}