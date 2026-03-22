import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import {UILobbyHeaderView} from "db://assets/Hotfix/UI/UILobbyHeader/UILobbyHeaderView";

/**
 * 主题下边烂
 --added by yh @ 2024-12-22 14:47
 注意：
 */
export class UIThemeFooterView extends UIBaseView{
    public static GetUIConfig(): UIConfig {
        let config: UIConfig = new UIConfig();
        config.Name = typeof UIThemeFooterView.name;
        config.Layer = UILayers.FooterLayer;
        config.PrefabPath = "UI/HeaderAndFooter/prefab/UIThemeFooter.prefab";
        //_portrait
        return config;
    }
    constructor(holder: IHolder, var_arg: string, model: UIBaseModel) {
        super(holder, var_arg, model);
    }

    public OnCreate(args: object = null): void {
        super.OnCreate(args);
    }

    public OnEnable(): void {
        super.OnEnable();
    }

    public OnDestroy(): void {
        super.OnDestroy();
    }
}