import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Sprite,Button} from "cc"
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
export class UISettingView extends UIBaseView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UISettingView).name
        config.Layer = UILayers.BackgroundLayer;
        config.PrefabPath = "UI/LobbyMain/prefab/UILobbyMain.prefab"
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