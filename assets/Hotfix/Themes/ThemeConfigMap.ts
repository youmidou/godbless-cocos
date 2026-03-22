import {ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {ThemeConfig10001} from "db://assets/Hotfix/Themes/Theme10001/ThemeConfig10001";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";

export class ThemeConfigMap{
    private static instance: ThemeConfigMap;
    public static get Instance() :ThemeConfigMap{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    private cfg:Map<number,typeof ThemeConfig> = new Map<number,typeof ThemeConfig>()
    constructor() {
        this.cfg.set(10001,ThemeConfig10001)
    }

    public GetThemeConfigById(themeId:number):ThemeConfig{
        let className = this.cfg.get(themeId)
        UIUtil.Assert(className !=null,"className is null themeId="+themeId);
        return new className()
    }


}