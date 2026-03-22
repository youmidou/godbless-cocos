import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {UILobbyHeaderView} from "db://assets/Hotfix/UI/UILobbyHeader/UILobbyHeaderView";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import * as cc from "cc"
import {LobbyManager} from "db://assets/Hotfix/Modules/Lobby/LobbyManager";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
/**
 * 主题上边烂
 --added by yh @ 2024-12-22 14:47
 注意：
 */
export class UIThemeHeaderView extends UIBaseView{
    private btn_callback: cc.Button;
    public static GetUIConfig(): UIConfig {
        let config: UIConfig = new UIConfig();
        config.Name = typeof UIThemeHeaderView.name;
        config.Layer = UILayers.HeaderLayer;
        config.PrefabPath = "UI/HeaderAndFooter/prefab/UIThemeHeader.prefab";
        return config;
    }
    constructor(holder: IHolder, var_arg: string, model: UIBaseModel) {
        super(holder, var_arg, model);
    }

    public OnCreate(args: object = null): void {
        super.OnCreate(args);
        this.btn_callback =  UIUtil.FindButton(this.transform,"header/btn_callback")
        UIUtil.RegisterExtraButtons(this.btn_callback,this.OnReturnToLobby,this)

    }
    //返回大厅
    private OnReturnToLobby(){
        Log4.Log("返回大厅...")
        LobbyManager.Instance.SwitchLobbyScene()
    }

    public OnEnable(): void {
        super.OnEnable();
    }

    public OnDestroy(): void {
        super.OnDestroy();
    }
}