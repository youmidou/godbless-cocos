import {ThemeBase} from "db://assets/Hotfix/ThemeGameEngine/ThemeBase";
import {ThemeScene} from "db://assets/Hotfix/Scenes/ThemeScene";
import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";


/**
 *  主题数据管理
 * added by yh @ 2024/11/19 21:39
 * 注意:当前主题管理器
 * */
export class ThemeDataManager{

    private static instance: ThemeDataManager;
    public static get Instance(): ThemeDataManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }


    //恢复游戏
    public ResumeGame():void {

    }

   public LoadThemeStorageData():object {
        return null
    }

    public GetRecoverRecvData():void {

    }

    public ResumeThemeData(storage_flowdata: object) {
        
    }

    public InitDataFromServer(enterThemeData: any):void {
        
    }

    public PreloadPopup(scene: ThemeScene) {
        
    }

    public OnDestroy() {

    }

    public PreloadPopupOnLoading(logic_scene: BaseScene) {

    }

    public FreezeAutoSpin(b: boolean) {
        
    }
}