/**
 * Hotfix热更新管理类
 * added by Mr.YangHui @ 2024.11.20 21:51
 * 注意：
 * 1:
 *
 * **/
export class HotfixManager{
    private static instance: HotfixManager;
    public static get Instance(): HotfixManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    //更新源码资源
    public HotfixCodeAssetBundleAssetName:string="Hotfix"

    constructor() {
    }


}