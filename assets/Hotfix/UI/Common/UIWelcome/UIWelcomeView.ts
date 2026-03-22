import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";

export class UIWelcomeView extends UIBaseView{
    public static GetUIConfig(){
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UIWelcomeView).name
        config.Layer = UILayers.AlertTipLayer;
        config.PrefabPath = "UI/Gameloading/prefab/UIWelcome.prefab"
        return config
    }

    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }


    public OnCreate(args:object=null){
        super.OnCreate(args);

    }
    public OnEnable(){
        super.OnEnable()
    }

    public OnDestroy():void{
        super.OnDestroy();

    }
}