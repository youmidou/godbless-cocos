import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {UILoadingModel} from "db://assets/Hotfix/UI/UILoading/UILoadingModel";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
/*

 --added by yh @ 2024-12-17 16:30
 */
export class UIExitGame extends UIBaseView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UIExitGame).name
        config.Layer = UILayers.BackgroundLayer;
        config.Model = new UILoadingModel(config.Name)
        config.PrefabPath = "UI/system_interface/prefab/UIQuitGame.prefab";

        return config
    }
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }

    public OnCreate(args:object=null):void{
        super.OnCreate(args);

    }

    public override OnDestroy():void
    {

        this.OnDestroy();
    }
}