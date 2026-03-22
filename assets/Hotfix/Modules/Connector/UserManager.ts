import { GameNet } from "db://assets/Hotfix/Net/GameNet";
import pb from "db://assets/Hotfix/Net/Protocal/pb";
/**
 * 用户数据管理器
 * added by yh @ 2024-11-19
 */
export class UserManager {
    private static instance: UserManager;
    private connectIp: string;
    private userId: string;
    private gold: number;
    private coin: number;


    public static get Instance(): UserManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance;
    }

    constructor() {
        this.connectIp = "";
        this.RegisterProtocolHandler();
    }

    private RegisterProtocolHandler(): void {
        //GameNet.Instance.RegisterProtocolHandler(Cmd.Player_UpdateMoneyInfo, UpdateMoneyInfoHandler);
        //GameNet.Instance.RegisterProtocolHandler(Cmd.Player_PlayerUpdatesInfo, PlayerUpdatesInfoHandler);
        //GameNet.Instance.RegisterProtocolHandler(pb.pb.Cmd.Login_PlayerInfo, this.SetLoginData.bind(this),this);
    }
    //处理login数据 Base_User_UserInfo
    public SetLoginData(data: pb.pb.Base_User_GameUserInfo) {
        //this.data = data;

        //this.userId = data.UserId;
        //this.gold = data.Gold;
        //this.coin = data.Coin;
    }


    public GetGold(): number {
        return this.gold;
    }
    public GetCoin(): number {
        return this.coin;
    }

    public SetConnectIp(server_ip: string) {
        this.connectIp = server_ip;
    }

    //#region ==========other======================================================

    //获取服务器时间戳
    public GetServerTimeStamp(): void {}

    //获取登录计数
    public GetLoginCount(): void {}

    //-- 返回首次登陆的时间戳
    public GetFirstLoginTime(): void {}

    //#endregion ====================================================================


    public ClearLevelUpDataQueue(): void {}

    //#region 获取个人信息
    public GetNickName(): string {
       // const roleData = this.data ? this.data.roleData : null;
        //return roleData ? roleData.nickName : "";
        return ""
    }
    //#endregion

}

//UserManager
