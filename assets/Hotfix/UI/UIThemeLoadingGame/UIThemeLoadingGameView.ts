import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {UIThemeLoadingGameModel} from "db://assets/Hotfix/UI/UIThemeLoadingGame/UIThemeLoadingGameModel";
import {IUILoadingView} from "db://assets/Hotfix/pkg/Scene/IUILoadingView";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import * as cc from 'cc';

export class UIThemeLoadingGameView extends UIBaseView implements IUILoadingView{
    private model:UIThemeLoadingGameModel;
    private progressLayout: cc.Node;
    private progress: cc.Sprite;
    private progressPercentText: cc.Label;
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(UIThemeLoadingGameView).name
        config.Layer = UILayers.TipLayer;
        config.Model = new UIThemeLoadingGameModel()
        config.PrefabPath = "ThemeLogo/common/prefab/common_loading2_portrait.prefab"
        config.ABPath = "themelogo/common.assetbundle";

        config.DownloadType = 1;
        config.DisplayType = 1;
        config.AllowOverlap = false;
        config.AllowDuplicate = false;
        config.KeepInList = false;

        return config
    }
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);

    }

    public SetValue(value: number): void {
        this.progressPercentText.string = Math.floor(value*100)+"%"
    }
    public totalSize: number;
    public ShowCloseButton(b: boolean): void {

    }

    public OnCreate(args:object=null):void{
        super.OnCreate(args);
        this.model = this.GetModel<UIThemeLoadingGameModel>()
        //this.progressLayout = UIUtil.FindTrans(this.transform, "layout");
        this.progress = UIUtil.FindSprite(this.transform, "progress")
        this.progressPercentText = UIUtil.FindText(this.transform,"Text_progress_percent");
        this.progress.fillRange =0
        this.progressPercentText.string = "0%"

    }

    public OnEnable():void{
        super.OnEnable()
        this.model.SetView(this)
    }

    public OnDestroy():void{
        super.OnDestroy();

    }
}