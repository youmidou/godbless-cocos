/**
 *  全局设置
 * -- added by yh @ 2024-11-25
 * -- 注意：
 *
 * **/
export class GlobalSettingManager{
    constructor() {
    }
    private static instance: GlobalSettingManager;
    public static get Instance() :GlobalSettingManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    Startup() {

    }

    Dispose() {

    }

    public StopBackgroundMusic(number: number) {
        
    }
}