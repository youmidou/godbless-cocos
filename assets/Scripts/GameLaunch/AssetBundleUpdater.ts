import {Logger} from "db://assets/Scripts/Common/Logger/Logger";
import {LaunchUI} from "db://assets/Scripts/GameLaunch/LaunchUI";
import {_decorator, Component, director,game,assetManager} from 'cc';
import {Application} from "db://assets/Scripts/GameEngine/Application";

/**
 * 资源包更新器
 * added by yh @ 2017.12.29
 * **/
export class AssetBundleUpdater {

    private static instance: AssetBundleUpdater;
    private checking: boolean;
    private clientResVersion: string;
    private hotUpdateDebugString: string;
    private clientAppVersion: string;
    private serverAppVersion: string;
    private serverResVersion: string;
    private needDownloadGame: boolean;
    private needUpdateGame: boolean;

    public static get Instance(): AssetBundleUpdater {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {
    }

    public Startup() {

    }

    public StartCheckUpdate() {
        this.CheckUpdateOrDownloadGame().catch(error => {
        })
    }

    private async CheckUpdateOrDownloadGame():Promise<void> {
        if (this.checking) {
            return
        }
        this.checking = true
        Logger.Log("Update--Start update===========================");
        this.ResetUpdater()
        // 初始化本地版本信息
        let start = new Date();
        await this.InitLocalVersion()
        this.hotUpdateDebugString += " res_v=" + this.clientResVersion;
        LaunchUI.Instance.SetProgress(6 / 100);

        LaunchUI.Instance.SetGameAbnormalStatus(0);
        // 获取服务器地址，并检测大版本更新、资源更新
        this.serverAppVersion = this.clientAppVersion;
        this.serverResVersion = this.clientResVersion;
        await this.GetUrlListAndCheckUpdate();
        LaunchUI.Instance.SetProgress(10 / 100);

        // 需要升级大包
        if (this.needDownloadGame) {
            await this.InitUpdateAppConfirmPrefab();
            return
        }
        this.hotUpdateDebugString += " 3";

        // 需要热更
        if (this.needUpdateGame) {
            await this.CheckGameUpdate();
            LaunchUI.Instance.SetProgress(40 / 100);
            this.hotUpdateDebugString += " 27";
            await this.StartGame();
        } else {

            console.log('----xxx-开始更新代码----');
            assetManager.loadBundle("Hotfix", (err, bundle) => {
                console.log('----xxx-更新代码成功----');

                console.log('----xxx-开始更新资源----');
                assetManager.loadBundle('AssetsPackage', (err, bundle) => {
                    console.log('----xxx-更新资源成功----');
                    this.StartGame().catch(()=>{});
                });
            });

            //this.StartGame().catch(()=>{});
        }
        return;

    }

    private async StartGame() {
        //--------加载资源--------------
        //ChannelManager.instance.resVersion = serverResVersion;

        this.checking = false;
        Logger.clientVerstion = this.clientAppVersion;
        this.hotUpdateDebugString += " 28";
        await Application.WaitForFrames_(2)
        // @ts-ignore
        import("db://assets/Hotfix/HotfixMain").then((obj) => {
            console.log("-----Start---------");
            try {
                const main = new obj.HotfixMain();
                main.StartGame();
            } catch (e) {
                console.error("Hotfix.dll.bytes => Error " + e.Message + " 堆栈 " + e.StackTrace)
                console.log("xxxx " + this.hotUpdateDebugString);
                return
            }

        }).catch((error) => {
            console.error("Error loading HotfixMain 更新库代码报错::", error);
        });


    }

    private ResetUpdater() {

    }

    private async InitLocalVersion() {

    }

    private async GetUrlListAndCheckUpdate() {

    }

    private async InitUpdateAppConfirmPrefab() {

    }

    private async CheckGameUpdate() {

    }


}