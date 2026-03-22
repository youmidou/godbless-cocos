import {LaunchUI} from "db://assets/Scripts/GameLaunch/LaunchUI";
import {XAssetBundleManager} from "db://assets/Scripts/XTudouFramework/AssetBundle/XAssetBundleManager";
import {SDKManager} from "db://assets/Scripts/XTudouFramework/SDK/SDKManager";
//import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {Application} from "db://assets/Scripts/GameEngine/Application";
import {_decorator, Component, director, find, Node} from 'cc';
import {GameObject} from "db://assets/Scripts/GameEngine/GameObject";
import {AssetBundleUpdater} from "db://assets/Scripts/GameLaunch/AssetBundleUpdater";
import {Logger} from "db://assets/Scripts/Common/Logger/Logger";
const { ccclass, property } = _decorator;
declare const CC_EDITOR: boolean;
@ccclass('GameLaunch')
export class GameLaunch extends Component {
    private UIRoot: Node;
   async start() {
        /*
       import("$lib/main").then((obj) => {
           console.log("-----Start---------");
           const main = new obj.Main();
           main.Start();
       });
       */

       Application.targetFrameRate = 60;
       // 将节点添加到持久层
       //director.addPersistRootNode(this.node)
       GameObject.DontDestroyOnLoad(this.node);

       await Application.WaitForFrames_(1)

       let UIRoot:Node = GameObject.Find("UIRoot");
       GameObject.DontDestroyOnLoad(UIRoot)
       //AudioController.Play("app_loading");
       XAssetBundleManager.Instance.SetRuntimeMode();
       await this.InitAppVersion();
       await XAssetBundleManager.Instance.Initialize();
       //Logger.Log("XAssetBundleManager Initialize use {0}ms", (DateTime.Now - start).Milliseconds));

       AssetBundleUpdater.Instance.Startup();
       LaunchUI.Instance.SetProgress(1/100);
        // 初始化渠道
       await this.InitChannel();
       //Logger.Log(string.Format("InitChannel use {0}ms", (DateTime.Now - start).Milliseconds));

       LaunchUI.Instance.SetProgress(2 / 100);
       //启动SDK模块
       SDKManager.Instance.Startup();

       LaunchUI.Instance.SetProgress(5/ 100);
       // 开始更新
       AssetBundleUpdater.Instance.StartCheckUpdate();

       /*
       console.log('Show image {image(https://forum.cocos.org/images/logo.png)}');
       console.log("这是一个普通日志");
       console.debug("这是一个普通日志");
       console.warn("发生碰撞");
       */
        //console.error("ssss")
        //this.node
        this.UIRoot = find("UIRoot")
        //this.UIRoot.active =false
        //let s = UIUtil.FindTrans(this.UIRoot2,"Layers/LaunchLayer")
        //s.active =false


       //this._text()
    }
    private async InitAppVersion(){

    }
    /*
    public _text(){

        async function _er(signal: AbortSignal) {
            console.log("1111")
            //await SYSCoroutineUtil.waitForFrames(1,signal);
            console.log("222222")
            await SYSCoroutineUtil.WaitForSeconds(2,signal);
            //SYSCoroutineUtil.StopCoroutine("theme10001");
            signal.aborted
            await SYSCoroutineUtil.WaitForSeconds(2,signal);
            signal.aborted
            await SYSCoroutineUtil.WaitForSeconds(5,signal);
            signal.aborted
            console.log("3333333")
            //SYSCoroutineUtil.StopCoroutine("theme10001");
            await SYSCoroutineUtil.WaitUntil(() => {
                return true;
            },signal);
            await SYSCoroutineUtil.WaitWhile(() => {
                return false;
            },signal);

            console.log("4444")
            await SYSCoroutineUtil.WaitForSeconds(3,signal);
            console.log("55555")
            await SYSCoroutineUtil.WaitForSeconds(5,signal);
            console.log("9999999")
        }
        SYSCoroutineUtil.StartCoroutine("theme10001", "11", _er);

        async function _er2(signal: AbortSignal) {
            await SYSCoroutineUtil.WaitForSeconds(1,signal);
            SYSCoroutineUtil.StopCoroutine("theme10001");
        }
        SYSCoroutineUtil.StartCoroutine("theme10002", "", _er2);

    }
    */
    update(deltaTime: number) {
        
    }
    /*
    loadPrefab() {

        // 3. 动态加载预制体
        resources.load("path/to/your/prefab", cc.Prefab, (err, prefab) => {
            if (err) {
                console.error(err);
                return;
            }

            // 4. 实例化预制体
            let newNode = cc.instantiate(prefab);

            // 5. 将实例化的预制体添加到当前节点或指定节点
            this.node.addChild(newNode);

            // 6. 你可以对新节点进行进一步的操作，比如设置位置等
            newNode.setPosition(cc.v2(0, 0));
        });
    }
    */

    private async InitChannel() {

    }
}


