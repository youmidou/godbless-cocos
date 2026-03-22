/*
    大厅下边栏
 --added by yh @ 2024-12-15 16:16
 */
import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import {UIConfig} from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import {UILayers} from "db://assets/Hotfix/pkg/UI/UILayers";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
import {UIBaseModel} from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
/**
 * 大厅上边烂
 --added by yh @ 2024-12-22 14:47
 注意：1:预加载资源
 */
export class UILobbyHeaderView  extends UIBaseView{
    public static GetUIConfig(): UIConfig {
        let config: UIConfig = new UIConfig();
        config.Name = typeof UILobbyHeaderView.name;
        config.Layer = UILayers.HeaderLayer;
        config.PrefabPath = "UI/HeaderAndFooter/prefab/UILobbyHeader.prefab";
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