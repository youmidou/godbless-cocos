/**
 * 红点数据管理器
 * added by yh @ 2024-12-11
 * */
export class RedPointManager{
    private static instance: RedPointManager;
    public static get Instance() :RedPointManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }

    public SetLoginData() {

    }
}