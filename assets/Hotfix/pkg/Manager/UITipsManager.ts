/**
 *
 * -- added by yh @ 2024-11-25
 * -- 注意：
 *
 * **/
export class UITipsManager{

    private static instance: UITipsManager;
    public static get Instance() :UITipsManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }

    public ClearAll():void {

    }
}
