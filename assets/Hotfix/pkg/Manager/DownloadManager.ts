
export class DLAB{
    public ab_path:string ="";
    public is_in_package:boolean=false; //-- nil按不在大包处理
    public is_large:boolean = true; //--默认按large 大文件处理处理
    public need_wait:boolean = true;//-- 是否需要卡进度，如果不需要，下载失败可以跳过
}
/**
 * DownloadManager 上层逻辑->下载管理器
 -- added by yh @ 2024-11-15
 -- 注意：
 */
export class DownloadManager{

    private static instance: DownloadManager;
    private disableDownload: boolean;
    public static get Instance() :DownloadManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }
    public NeedDownload(ab_path:string):boolean{

        return true;
    }

    public GetAssetBundleSize(ab_path) {
        return 0;
    }

    public ClearAllDownloadCallbacks():void {

    }
    //-- 启动下载开关
    public EnableDownload() {
        this.disableDownload = false;
    }

    public async CoDownloadMultiAssetBundles(multi_download_config:[]) {

    }
}