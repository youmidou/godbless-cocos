import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {ThemeDataManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeDataManager";
import {GConfig} from "db://assets/Hotfix/Global/GConfig";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {Table} from "db://assets/Hotfix/pkg/utils/Table";
/**
 * 基础主题视图
 --added by yh @ 2024-12-14 16:10
 -- Technical Support QQ:408309839
 -- 注意：辉哥提醒
 1:这个用于2d游戏基类 3d游戏场景上的2d面板 在这基础上控制3d场景;
 2:提供行为数;
 3:提供特效播放;
 4:断线重连;

 */

export class BaseThemeView extends UIBaseView{
    public static GetUIConfig():UIConfig{
        let config:UIConfig = new UIConfig();
        config.Name = typeof(BaseThemeView).name
        config.Layer = UILayers.BackgroundLayer;
        config.PrefabPath = "UI/LobbyMain/prefab/UILobbyMain.prefab"
        return config
    }
    constructor(holder:IHolder, var_arg:string,model:UIBaseModel) {
        super(holder,var_arg,model);
    }

    public OnCreate(args:object=null):void{
        super.OnCreate(args);
    }
    //--断线重连 virtual override
    public ResumeByStorageData(data:object){
        var storage_flowdata = ThemeDataManager.Instance.LoadThemeStorageData();
        var storage_recvdata = ThemeDataManager.Instance.GetRecoverRecvData();
        if (storage_flowdata!=null)
        {
            ThemeDataManager.Instance.ResumeThemeData(storage_flowdata);
        }

        if (GConfig.Debug && GConfig.Debug_Theme_Basic)
        {
            Log4.Print("ResumeByStorageData_data",Table.Dump(data));
        }

    }
}