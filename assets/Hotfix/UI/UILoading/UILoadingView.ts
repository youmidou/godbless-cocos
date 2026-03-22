import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UILoadingModel} from "db://assets/Hotfix/UI/UILoading/UILoadingModel";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {IUILoadingView} from "db://assets/Hotfix/pkg/Scene/IUILoadingView";
/**
 * 默认加载进度条
 *
 * */
export class UILoadingView extends UIBaseView implements IUILoadingView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UILoadingView).name
        config.Layer = UILayers.BackgroundLayer;
        config.Model = new UILoadingModel(config.Name)
        config.PrefabPath = "UI/Gameloading/prefab/UILoading.prefab"
        config.ABPath = "ui/gameloading.assetbundle";
        config.ABResident = "ui/gameloading";
        return config
    }
    private model:UILoadingModel;
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }

    public OnCreate(args:object=null):void{
        super.OnCreate(args);
        this.model = this.GetModel<UILoadingModel>()

    }
    public OnEnable():void{
        super.OnEnable()
        this.model.SetView(this)
    }

    public OnDestroy():void{
        super.OnDestroy();

    }

    public totalSize: number;

    public SetValue(value: number): void {
    }

    public ShowCloseButton(b: boolean): void {
    }
}