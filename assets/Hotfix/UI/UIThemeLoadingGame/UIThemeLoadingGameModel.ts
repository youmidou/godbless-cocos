import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {IUILoadingModel} from "db://assets/Hotfix/pkg/Scene/IUILoadingModel";
import {UIThemeLoadingGameView} from "db://assets/Hotfix/UI/UIThemeLoadingGame/UIThemeLoadingGameView";

export class UIThemeLoadingGameModel extends UIBaseModel implements IUILoadingModel{
    private view: UIThemeLoadingGameView;
    private value: number=0;
    constructor() {
        super("");
    }
    public SetView(view: UIThemeLoadingGameView) {
        this.view = view
        this.view.SetValue(this.value)
    }
    public totalSize: number;

    public SetValue(value: number): void {
        this.value = value
        if(this.view!=null){
           this.view.SetValue(value)
        }
    }



}