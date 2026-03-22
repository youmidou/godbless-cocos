import { _decorator, Component, Node ,find,resources,Prefab} from 'cc';
import {Logger} from "db://assets/Scripts/Common/Logger/Logger";
import {GameObject} from "db://assets/Scripts/GameEngine/GameObject";
const { ccclass, property } = _decorator;
import * as cc from "cc";
/**
 * 登录 加载入口
 * added by yh @ 2024/12/12 09:39
 * 注意:
 *
 * */
@ccclass('LaunchUI')
export class LaunchUI extends Component {
    private static instance: LaunchUI;

    private launchPath:string  = "UIRoot/Layers/LaunchLayer";
    private loginRootPath:string  = "UIRoot/Layers/LaunchLayer/UILaunch/board/login_root";

    private loadingPath:string  = "UIRoot/Layers/LaunchLayer/UILaunch/board/loading";
    private sliderPath:string  = "UIRoot/Layers/LaunchLayer/UILaunch/board/loading/ProgressBar";
    private txt_loadingPath:string= "UIRoot/Layers/LaunchLayer/UILaunch/board/loading/txt_value";
    private textPath:string  = "UIRoot/Layers/LaunchLayer/UILaunch/board/loading/launchText";
    private m_ProgressPath:string = "UIRoot/Layers/LaunchLayer/UILaunch/board/loading/text";
    private logOpenBtnPath:string = "UIRoot/Layers/LaunchLayer/UILaunch/board/SecretLogOpen";
    private logPath:string = "UIRoot/DebugLog/IngameDebugConsole";


    private launchUIRoot: Node;
    private m_isLoadingDone: boolean;
    private m_total_size: number;

    private loadingObject: Node;
    private loginRootObject: Node;//登录节点
    private slideObject: Node;
    private textObject: Node;
    private slider:cc.ProgressBar;//进度条
    private txt_loading:cc.Label;//

    private text_progress: number=0;
    private text_start_progress: number=0;
    private check_game_resource: boolean=false;
    private abnormal_status: number=0; // 0 - 正常，1 - 无法连接网络，2 - 无法login
    private loading_prefix_text: string="";
    private launchText: cc.Label;
    

    public static get Instance() :LaunchUI{
        return this.instance
    }
    start() {
        LaunchUI.instance = this

        this.launchUIRoot = GameObject.Find(this.launchPath)
        this.launchUIRoot.active = true
        this.loadingObject = GameObject.Find(this.loadingPath)
        this.loginRootObject = GameObject.Find(this.loginRootPath);
        this.slideObject = GameObject.Find(this.sliderPath);
        this.textObject = GameObject.Find(this.textPath);
        this.slider = this.slideObject.getComponent(cc.ProgressBar);
        this.txt_loading = GameObject.Find(this.txt_loadingPath).getComponent(cc.Label);
        this.launchText = this.textObject.getComponent(cc.Label);

        //this.UIRoot = find("UIRoot")
        this.m_isLoadingDone = false
        this.check_game_resource =false;
        this.m_total_size =0;
        this.text_start_progress =0;
        this.ShowLoading()
        this.slider.progress = 0 //this.slider.ResetValue();
        this.launchText.string = "Check Game Resource";
        this.txt_loading.string = "0%";
        this.loading_prefix_text = "";
        this.abnormal_status = 0;
        Logger.LogToServer("LaunchInit");
    }

    public SetTotalABSize(size:number){

        if (size > 1000)
        {
            this.m_total_size = size / 1000;
            this.text_start_progress = this.text_progress;
            this.launchText.string = "Check Game Resource (0/" + this.m_total_size + "KB)";
        }
        else
        {
            this.m_total_size = 0;
            this.CheckGameResource(false);
        }

    }
    public CheckGameResource(is_check:boolean){
        this.check_game_resource = is_check;
    }

    // 0 - 正常, 1 - 没有网络信号, 2 - login失败
    public SetGameAbnormalStatus(status: number):void {
        this.abnormal_status = status;

        // 处理异常
        if (this.abnormal_status == 1)
        {
            this.launchText.string = "Please Check Your Network Connection";
        }
        else if (this.abnormal_status == 2)
        {
            this.launchText.string = "Oops! Something went wrong. Please restart the game";
        }

    }
    public SetLoadingPrefixText(text:string):void{
        this.loading_prefix_text = text;
    }
    public UpdateTextProgress(progress:number):void{
        this.text_progress = progress;
        // 当前progress<0.1，不处理
        if (progress < 0.1)
        {
            return;
        }
        // 处理异常
        if (this.abnormal_status == 1)
        {
            this.launchText.string = "Please Check Your Network Connection";
            return;
        }
        else if (this.abnormal_status == 2)
        {
            this.launchText.string = "Oops! Something went wrong. Please restart the game.";
            return;
        }

        // 0.47 ~ 0.97是预留给下载的
        if (this.m_total_size <= 0)
        {
            if (this.check_game_resource)
            {
                this.launchText.string = "Check Game Resource";
            }
            else
            {
                this.launchText.string = "WELCOME TO Crazy Parkour";
            }
        }
        else if (progress <= 0.97)
        {
            this.launchText.string = this.loading_prefix_text + "Check Game Resource (" + Math.floor((progress - this.text_start_progress) / (0.97 - this.text_start_progress) * this.m_total_size) + "/" + this.m_total_size + "KB)";
        }
        else
        {
            this.launchText.string = "WELCOME TO Crazy Parkour";
        }

        var p = Math.round(this.text_progress * 100);
        this.txt_loading.string = p + "%";
    }
    public SetLoadingDone():void
    {
        this.m_isLoadingDone = true;
        this.abnormal_status = 0;
    }
    public IsLoadingDone():boolean
    {
        return this.m_isLoadingDone;
    }
    public SetProgress(progress:number):void
    {
        this.slider.progress = progress;
        this.UpdateTextProgress(progress)
    }
    public update(deltaTime: number):void {

    }
    //获取登录节点
    public GetLoginRoot():Node
    {
        return this.loginRootObject;
    }
    //显示加载界面
    private ShowLoading() {
        this.loadingObject.active = true;
        this.loginRootObject.active =false;
    }
    //显示登录界面
    public ShowLogin():void
    {
        this.loadingObject.active = false;
        this.loginRootObject.active =true;
    }

//打开隐藏日志
    public OnButSecretLogOpenClick():void{

    }


    public Dispose():void {
        if (this.launchUIRoot !=null)
        {
            Logger.Log("xxxx close launchUIRoot true");
            this.launchUIRoot.active = false
            //this.launchUIRoot.SetActive(false);
        }
        else
        {
            Logger.Log("xxxx close launchUIRoot false");
        }
    }

    Startup() {

    }
}
