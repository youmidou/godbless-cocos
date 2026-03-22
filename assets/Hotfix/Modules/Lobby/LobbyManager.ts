//在游戏中状态
import {ThemeManager} from "db://assets/Hotfix/ThemeGameEngine/ThemeManager";
import {SceneManager} from "db://assets/Hotfix/pkg/Scene/SceneManager";
import {SceneConfig} from "db://assets/Hotfix/Scenes/Config/SceneConfig";
import {SplunkManager} from "db://assets/Hotfix/pkg/Manager/SplunkManager";
import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
import {GameNet, MsgPendingData} from "db://assets/Hotfix/Net/GameNet";
//import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {GConfig} from "db://assets/Hotfix/Global/GConfig";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {Table} from "db://assets/Hotfix/pkg/utils/Table";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {ConnectorManager} from "db://assets/Hotfix/Modules/Connector/ConnectorManager";

export enum InGameState
{   //未登录
    not_Login = 0,
    //在登录
    in_Login = 1,
    //在大厅
    lobby = 2,
    //进入主题
    enter_theme = 3,
    //在主题
    in_theme = 4,
    //进入大厅
    enter_lobby = 5,

}
export enum THEME_ACTION
{
    NONE  = 0,
    THEME = 1,
    OPEN_QUEST = 2,
    QUEST_COMPLETE = 3,
    OPEN_PICK_PARTY = 4,
    OPEN_QUEST_NORMAL = 5,
    OPEN_ROCKEY = 6,
    // TEST = 99,					//-- 测试
}

/**
 * 大厅管理器
 * added by yh @ 2024-12-17
 */
export class LobbyManager{
    private static instance: LobbyManager;
    public static get Instance() :LobbyManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    //当前状态
    private ingame_state:InGameState;
    private showLoginAds:boolean = false;

    constructor() {
        this.RegisterProtocolHandler();

    }
    private RegisterProtocolHandler():void {
        //GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Room_QuitRoom, this.ProtocolEnterLobbyHandler,this);
        //GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Player_QueryPlayerInfo, UpdateMoneyInfoHandler);
        //GameNet.Instance.RegisterProtocolHandler(Cmd.Player_PlayerUpdatesInfo, PlayerUpdatesInfoHandler);
    }

    private ProtocolEnterLobbyHandler(msg_data: MsgPendingData){
        let data  = msg_data.MsgData
        SplunkManager.Instance.SendRecordDirectly(11010, "ProtocolEnterLobbyHandler")
        GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 3)

        if(GConfig.Debug && GConfig.Debug_Protocol ){
            Log4.Log("Protocol_Enter_Lobby_Handler"+Table.Dump(msg_data))
        }
        ThemeManager.Instance.SetEnterLobbyData(msg_data.MsgData)

        //-- 同步前后端金币
        if(data.coins){
            UIManager.Instance.SyncCoins(data.coins)
        }
        //-- 同步前后端宝石
        if(data.chips){
            UIManager.Instance.SyncChips(data.coins)
        }

        this.EnterLobby()

        if(!ConnectorManager.Instance.IsLaunchUIShowing()){
            this.SwitchLobbyScene()
        }


    }
    public Startup() {

    }

    public Login() {
        if (this.ingame_state != InGameState.in_theme &&
            this.ingame_state != InGameState.enter_theme &&
            this.ingame_state != InGameState.enter_lobby &&
            this.ingame_state != InGameState.lobby)
        {
            this.ingame_state = InGameState.in_Login;
        }

        this.showLoginAds = true;
        //-- login时重置theme action
        this.SetThemeActionData(THEME_ACTION.NONE);
    }
    private SetThemeActionData(action_type:THEME_ACTION,data:object=null):void
    {
        //推送主题动作数据
        //PushThemeActionData(action_type, data);
        //-- 设置好数据后返回大厅
        if (this.IsInTheme())
        {
            //ThemeManager.Instance.ExitCurrentTheme();
        }

    }
    //获取游戏状态
    public GetGameState():InGameState{
        return this.ingame_state
    }
    //准备进入大厅
    public IsInTheme():boolean{
       return this.GetGameState() == InGameState.in_theme
    }
    public IsInLobby():boolean{
        return this.GetGameState() == InGameState.lobby
    }
    public IsReadyToTheme():boolean{
        return this.GetGameState() == InGameState.enter_theme
    }
    public IsReadyToLobby():boolean{
        return this.GetGameState() == InGameState.enter_lobby
    }
    //返回大厅
    public ReturnToLobby():void{
        this.ingame_state = InGameState.lobby
    }
    //进入大厅
    public EnterLobby():void{
        this.ingame_state = InGameState.enter_lobby
    }
    //进入主题
    public EnterTheme():void{
        this.ingame_state = InGameState.in_theme
    }


    //-- 进入大厅场景
    public SwitchLobbyScene() :void{
        SceneManager.Instance.SwitchScene(SceneConfig.LobbyScene);
        this.ReturnToLobby()
    }
    public SendEnterLobby():void{

        SplunkManager.Instance.SendRecordDirectly(11009, "SendEnterLobby")
        GameUtilsManager.Instance.SetIntegerByKeyForUser("Last_Lobby_Debug_Index", 2)
        //SplunkManager.Instance.SendRecord(SplunkConfig.PID.enter_lobby, SplunkConfig.BID.enter)
        //GameNet.Instance.Send("enter_lobby", params, true)
    }

    public SwitchLobbySceneSuccess(b: boolean) {
        
    }

    public PreloadUI():void {

    }
}