import {BaseThemeView} from "db://assets/Hotfix/ThemeGameEngine/BaseThemeView";
import {ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";

/**
 * 当前 主题基础类
 -- added by yh @ 2023-11-21 14:28
 --
 -- 注意：这里部分3d 2dUI
 */
export class ThemeBase{
    public themeId:number;
    public themeConfig:ThemeConfig //
    public ThemeView:BaseThemeView //
    constructor() {
    }

    public async OnComplete() {

    }
}