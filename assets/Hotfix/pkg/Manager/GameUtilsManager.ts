/**
 *  参数缓存管理器
 * -- added by yh @ 2024-11-25
 * -- 注意：
 *
 * **/
export class GameUtilsManager{


    private static instance: GameUtilsManager;
    public static get Instance() :GameUtilsManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }

    public GetStringByKeyForAllUsers(debugIp: string, s: string="") {
        return "";
    }

    public SetIntegerByKeyForUser(arg0: string, arg1: number) {

    }

    public SetIntegerByKeyForAllUsers(toString: any, value: number) {
        
    }
}

