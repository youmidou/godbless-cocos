import {UIBaseView} from "db://assets/Hotfix/pkg/UI/Base/UIBaseView";
/**
 *
 * added by yh @ 2024-12-17
 */
export class LoadingTipsManager{
    private static instance: LoadingTipsManager;
    public static get Instance() :LoadingTipsManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }
    public BindLoadTips(View:UIBaseView, number: number) {

    }
    public UnBindLoadTips(View: UIBaseView, number: number) {
        
    }


}