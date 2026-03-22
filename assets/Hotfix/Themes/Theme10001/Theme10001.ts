import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {BaseThemeView} from "db://assets/Hotfix/ThemeGameEngine/BaseThemeView";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";

export class Theme10001 extends BaseThemeView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(Theme10001).name
        config.Layer = UILayers.BackgroundLayer;
        config.PrefabPath = "Themes/Theme10001/prefab/Theme10001.prefab"
        return config
    }
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }

    public OnCreate(args:object=null):void{
        super.OnCreate(args);

        /*
            let img_wawa:Sprite = UIUtil.FindTrans(this.transform, "root/img_wawa").getComponent(Sprite);
            let but_ok:Button = UIUtil.FindTrans(this.transform, "root/but_ok").getComponent(Button);
            but_ok.node.on('click', this.onButtonClick, this);
            // UIManager.Instance.OpenWindow(typeof(UILobbyMainView))
            // UIManager.Instance.DestroyWindow(typeof(UILobbyMainView))
        */

    }
    //断线重连-按存储数据恢复
    public ResumeByStorageData(data:object){
        super.ResumeByStorageData(data)

    }
    private onButtonClick(){
        console.log("按钮被点击了！");
    }
    public OnEnable():void{
        super.OnEnable()
    }

    public OnDestroy():void{
        super.OnDestroy();

    }
}