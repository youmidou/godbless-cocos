import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UILoadingModel} from "db://assets/Hotfix/UI/UILoading/UILoadingModel";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";

export class UIErrorView extends UIBaseView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UIErrorView).name
        config.Layer = UILayers.AlertTipLayer;
        config.Model = new UILoadingModel(config.Name)
        config.PrefabPath = "UI/system_interface/prefab/UIErrorGUI.prefab"
        config.ABPath = "ui/gameloading.assetbundle";
        config.ABResident = "ui/gameloading";
        return config
    }
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }
}