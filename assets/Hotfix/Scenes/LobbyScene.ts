import {BaseScene} from "db://assets/Hotfix/pkg/Scene/BaseScene";
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {UILobbyMainView} from "db://assets/Hotfix/UI/UILobbyMain/UILobbyMainView";
import {LaunchUI} from "db://assets/Scripts/GameLaunch/LaunchUI";
import {UILobbyHeaderView} from "db://assets/Hotfix/UI/UILobbyHeader/UILobbyHeaderView";
import {UILobbyFooterView} from "db://assets/Hotfix/UI/UILobbyFooter/UILobbyFooterView";
/*
--[[
 --added by yh @ 2024-12-15 14:16
-- 大厅场景
--]]
 */
export class LobbyScene extends BaseScene{

    constructor() {
        super();
    }
    //加载场景前 进入场景
    public override OnEnter():void
    {
        super.OnEnter();
        super.ClearPreloadList();
        //竖版大厅
        UIManager.Instance.SwitchToPortrait()
        UIManager.Instance.OpenWindow(UILobbyMainView);
        //上边栏
        UIManager.Instance.OpenWindow(UILobbyHeaderView);
        //下边栏
        UIManager.Instance.OpenWindow(UILobbyFooterView);
//_portrait
        super.ClearPreloadList()

        LobbyManager.Instance.PreloadUI();
        SplunkManager.Instance.SendRecordDirectly(11013, "LobbyScene:OnEnter");
        GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 6);
    }
    //-- 场景加载完成后 准备工作
    public override OnComplete():void
    {
        super.OnComplete();

        LaunchUI.Instance.Dispose()
    }
    //
    public async CloseLoading() {
        await super.CloseLoading()

        LobbyManager.Instance.SwitchLobbySceneSuccess(true);
        SplunkManager.Instance.SendRecordDirectly(11016, "SwitchLobbySceneSuccess");
        GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 9);
    }
    //-- 离开场景
    public override OnLeave():void
    {
        UIManager.Instance.DestroyWindow(UILobbyMainView);
        UIManager.Instance.DestroyWindow(UILobbyHeaderView);
        UIManager.Instance.DestroyWindow(UILobbyFooterView);

        super.OnLeave();
    }

}