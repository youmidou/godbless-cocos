
/**
 *  版本管理器
 * -- added by yh @ 2024-11-25
 * -- 注意：
 *
 * **/
export class VersionManager{

    private static instance: VersionManager;
    public static get Instance() :VersionManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }
    //-- 在versionconfig里配置版本，如果没有配置version，所有版本都生效
    public IsVersionAvailable(abDownload:string):boolean{
        return true
    }
}
