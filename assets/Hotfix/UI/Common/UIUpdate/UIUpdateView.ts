import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";

export class UIUpdateView extends UIBaseView{
    public static GetUIConfig(){
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UIUpdateView).name
        config.Layer = UILayers.TopLayer;
        config.PrefabPath = "UI/system_interface/prefab/UIUpdate.prefab"
        return config
    }

    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }
}