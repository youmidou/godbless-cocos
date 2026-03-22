import {List} from "db://assets/Hotfix/pkg/utils/List";
import {BaseThemeView} from "db://assets/Hotfix/ThemeGameEngine/BaseThemeView";
export class LoadABItem{
    public Path:string
    public Ratio:number
    constructor(path: string = "", ratio: number = 0) {
        this.Path = path;
        this.Ratio = ratio;
    }
}
/**
 * 主题进入加载配置
 --added by yh @ 2024-12-14 16:15
 */
export class ThemeConfig{
    //主题Id
    public ThemeId:number =-1;
    //主题名字
    public ThemeName:string;
    //主题类
    public MainClassName:typeof BaseThemeView
    //是否是竖版 true:竖版;false:横版;
    public IsPortrait: boolean = false;

    public show_close = false
    //TODO：本主题需要加载的UI面板
    public UIConfig:List<any> = new List<any>()
    //TODO：本主题需要预先加载的UI预制体资源
    //TODO：主题内不在popsui里的弹窗, 需要在loading预加载（需要测试loading时间）
    public UIPreloadListOnLoading:List<string> = new List<string>()
    //-- 主题内不在popsui里的弹窗, 不需要在loading预加载
    public UIPreloadList: string[];
    //-- TODO：本主题需要加载的UI面板 必须继承UIBaseView UI面板
    public UIDownloadList: List<LoadABItem> = new List<LoadABItem>();

    constructor() {

        this.UIDownloadList = new List<LoadABItem>();

        this.UIDownloadList.Add({
            Path:"themes/theme10050.assetbundle",
            Ratio:0.5,
        });


    }
}