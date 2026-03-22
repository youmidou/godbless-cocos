import { UIBaseView } from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
import { UIConfig } from "db://assets/Hotfix/pkg/UI/Base/UIConfig";
import { UILayers } from "db://assets/Hotfix/pkg/UI/UILayers";
import { IHolder } from "db://assets/Hotfix/pkg/Common/IHolder";
import { UIManager } from "db://assets/Hotfix/pkg/UI/UIManager";
import { UIUtil } from "db://assets/Hotfix/pkg/UI/UIUtil";
import { UIBaseModel } from "db://assets/Hotfix/pkg/UI/Base/UIBaseModel";
import { ThemeManager } from "db://assets/Hotfix/ThemeGameEngine/ThemeManager";
import { ThemeConfig } from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";
import * as cc from "cc";
import { ThemeConfig10001 } from "db://assets/Hotfix/Themes/Theme10001/ThemeConfig10001";

export class UILobbyMainView extends UIBaseView {
    private btn_create: cc.Button;
    private btn_club: cc.Button;
    private btn_join: cc.Button;
    private btn_setup: cc.Button;
    private btn_my: cc.Button;
    private btn_share: cc.Button;
    private btn_give_gift: cc.Button;
    private btn_shop: cc.Button;
    private btn_sign_in: cc.Button;
    private btn_activity: cc.Button;
    private btn_club_more: cc.Button;
    public static GetUIConfig(): UIConfig {
        let config: UIConfig = new UIConfig();
        config.Name = typeof UILobbyMainView.name;
        config.Layer = UILayers.BackgroundLayer;
        config.PrefabPath = "UI/LobbyMain/prefab/UILobbyMain.prefab";
        return config;
    }
    constructor(holder: IHolder, var_arg: string, model: UIBaseModel) {
        super(holder, var_arg, model);
    }

    public OnCreate(args: object = null): void {
        super.OnCreate(args);
        //--------menu-----------------------------------------------------
        this.btn_create = UIUtil.FindButton(this.transform, "menu/btn_create");
        this.btn_club = UIUtil.FindButton(this.transform, "menu/btn_club");
        this.btn_join = UIUtil.FindButton(this.transform, "menu/btn_join");
        this.btn_club_more = UIUtil.FindButton(this.transform, "menu/btn_club_more");
        UIUtil.RegisterExtraButtons(this.btn_create, this.OnBtnCreateEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_club, this.OnBtnClubEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_join, this.OnBtnJoinEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_club_more, this.OnBtnClubMoreEvent, this);
        //-------------------------------------------------------------

        this.btn_setup = UIUtil.FindButton(this.transform, "footer/btn_setup");
        this.btn_my = UIUtil.FindButton(this.transform, "footer/btn_my");
        this.btn_share = UIUtil.FindButton(this.transform, "footer/btn_share");
        this.btn_give_gift = UIUtil.FindButton(this.transform, "footer/btn_give_gift");
        UIUtil.RegisterExtraButtons(this.btn_setup, this.OnBtnSetupEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_my, this.OnBtnMyEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_share, this.OnBtnShareEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_give_gift, this.OnBtnGiveGiftEvent, this);
        //---------let----------------------------------------------------
        this.btn_shop = UIUtil.FindButton(this.transform, "left/btn_shop");
        this.btn_sign_in = UIUtil.FindButton(this.transform, "left/btn_sign_in");
        this.btn_activity = UIUtil.FindButton(this.transform, "left/btn_activity");
        UIUtil.RegisterExtraButtons(this.btn_shop, this.OnBtnShopEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_sign_in, this.OnBtnSignInEvent, this);
        UIUtil.RegisterExtraButtons(this.btn_activity, this.OnBtnActivityEvent, this);

        /*
        let tt:GTimer = TimerManager.Instance.GetTimer(2, () => {
            Log4.Log("开始进入主题游戏...")
            this.LoadThemeCallback()
        },true);
        tt.Start()
        */
    }

    //#region ===start==menu====================================================
    private OnBtnCreateEvent() {
        console.log("创建房间...！");
    }
    private OnBtnClubEvent() {
        console.log("朋友圈...！");

    }
    private OnBtnClubMoreEvent() {
        console.log("更多朋友圈...！");
    }
    private OnBtnJoinEvent() {
        console.log("加入房间...！");
        Log4.Log("开始进入主题游戏...");
        this.LoadThemeCallback();
    }
    //#endregion ====end======================================================

    //#region ===start==let====================================================

    private OnBtnShopEvent() {
        console.log("创建房间...！");
    }
    private OnBtnSignInEvent() {
        console.log("签到...！");
    }
    private OnBtnActivityEvent() {
        console.log("加入房间...！");
    }

    //#endregion ====end======================================================

    //#region ===start======================================================
    private OnBtnSetupEvent() {
        console.log("加入房间...！");
    }
    private OnBtnMyEvent() {
        console.log("加入房间...！");
    }
    private OnBtnShareEvent() {
        console.log("加入房间...！");
    }
    private OnBtnGiveGiftEvent() {
        console.log("加入房间...！");
    }
    //#endregion ====end======================================================

    /*
    private onTestClubBtn() {
        const node = new cc.Node("TestClubEnter");
        node.parent = this.transform;
        node.layer = cc.Layers.Enum.UI_2D;
        node.position = cc.v3(4, -478, 0);
        const ts_copy = node.addComponent(cc.UITransform);
        ts_copy.setContentSize(cc.size(266, 266));
        ts_copy.setAnchorPoint(cc.v2(0.5, 0.5));

        const bnt = node.addComponent(cc.Button);
        const mianCallback = (btn: cc.Button) => {
            console.log("TestClubEnter按钮被点击了！");

        };
        node.on(cc.Button.EventType.CLICK, mianCallback, this);

        const more = new cc.Node("TestClubMore");
        more.layer = cc.Layers.Enum.UI_2D;
        more.parent = this.transform;
        more.position = cc.v3(80, -222, 0);
        const more_ts = more.addComponent(cc.UITransform);
        more_ts.setContentSize(cc.size(75, 110));
        more_ts.setAnchorPoint(cc.v2(0.5, 0.5));
        more.addComponent(cc.Button);
        more.addComponent(cc.BlockInputEvents);
        const callback = (btn: cc.Button) => {
            console.log("TestClubMore按钮被点击了！");
        };
        more.on(cc.Button.EventType.CLICK, callback, this);
    }
*/

    //#region ----start---主题部分------------------------------------------------

    //下载主题
    private ConfigThemeItem() {}
    //加载主题
    private LoadThemeCallback() {
        //---进入主题--------------------------
        ThemeManager.Instance.EnterTheme(10001);
    }

    //#endregion ---end------------------------------------------------------

    public OnEnable(): void {
        super.OnEnable();
    }

    public OnDestroy(): void {
        super.OnDestroy();
    }
}
