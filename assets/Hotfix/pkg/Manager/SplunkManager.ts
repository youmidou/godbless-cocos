/**
 * 红点系统
 * -- added by yh @ 2024-11-25
 *  -- 注意：
 * **/
export class SplunkManager{
    constructor() {
    }

    private static instance: SplunkManager;
    public static get Instance() :SplunkManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    public SendRecordDirectly(number: number, enterGame: string) {
        
    }

    public SendRecord(app_background: any) {
        
    }
}