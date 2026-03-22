import {LoadABItem, ThemeConfig} from "db://assets/Hotfix/ThemeGameEngine/ThemeConfig";
import {List} from "db://assets/Hotfix/pkg/utils/List";
import {Theme10001} from "db://assets/Hotfix/Themes/Theme10001/Theme10001";
/**
 * 主题进入加载配置
 --added by yh @ 2024-12-14 16:10
 */
export class ThemeConfig10001 extends ThemeConfig{

    constructor() {
        super();
        //------基础配置-------------------------------------
        this.ThemeId =10001
        this.ThemeName = "ThemeConfig10001";
        this.MainClassName = Theme10001
        this.IsPortrait = false //横版

        //-------------------------------------------------

        //TODO：本主题需要加载的UI面板
        this.UIConfig = new List<any>()
        this.UIConfig.Add(typeof(Theme10001))

        //TODO：本主题需要预先加载的UI预制体资源
        //TODO：主题内不在popsui里的弹窗, 需要在loading预加载（需要测试loading时间）
        this.UIPreloadListOnLoading = new List<string>()
        this.UIPreloadListOnLoading.Add("Themes/Theme10001/prefab/theme_10001.prefab")

        //-- 主题内不在popsui里的弹窗, 不需要在loading预加载
        this.UIPreloadList = [
            //"Themes/Theme10001/prefab/theme10001_wheel1.prefab",
        ];

        //TODO：-- 进入主题前下载配置，至少需要配上主题的ab path, 总占比50%
        this.UIDownloadList = new List<LoadABItem>();
        this.UIDownloadList.Add(new LoadABItem("themes/theme10001.assetbundle", 0.5))

    }

}