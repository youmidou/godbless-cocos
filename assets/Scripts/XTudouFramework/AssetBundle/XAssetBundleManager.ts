import {__private, _decorator, Asset,Prefab, AssetManager, assetManager, instantiate, SpriteAtlas,} from 'cc';
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";

const {ccclass, property} = _decorator;
declare const CC_EDITOR: boolean;

/**
 *
 * added by yh @ 2024-07-15  Technical Support:408309839@qq.com
 * 功能：assetbundle管理类，为外部提供统一的资源加载界面、协调Assetbundle各个子系统的运行
 * 注意：
 *
 * */
export class XAssetBundleManager {
    private static instance: XAssetBundleManager;
    private bundle: AssetManager.Bundle;

    public static get Instance(): XAssetBundleManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {

        //设置重试下载的最大次数，默认 3 次
        assetManager.downloader.maxRetryCount = 3;
        //用于设置重试下载的间隔时间，默认 2000 ms
        assetManager.downloader.retryInterval = 4000;
        //用于设置下载的最大并发连接数，若当前连接数超过限制，将会进入等待队列。
        assetManager.downloader.maxConcurrency = 10;
        //用于设置每帧发起的最大请求数，从而均摊发起请求的 CPU 开销，避免单帧过于卡顿。如果此帧发起的连接数已经达到上限，将延迟到下一帧发起请求。
        assetManager.downloader.maxRequestsPerFrame = 6;
    }

    //设置运行时模式
    public SetRuntimeMode():void {
        /*
        if (CC_EDITOR) {
            this.setupEditorMode();
        } else {
            this.setupRuntimeMode();
        }
        */
    }

    public async Initialize() {
        if (CC_EDITOR) {
            // 仅在编辑器模式下执行的代码
            return
        }
        /*
        // 加载预制体资源
        assetManager.loadBundle("AssetsPackage", (err, bundle) => {
            if (err) {
                console.log("加载资源包失败:", err);
                return;
            }
            this.bundle = bundle
            const prefabPath = "UI/LobbyMain/prefab/UILobbyMain";
            bundle.load(prefabPath, Prefab, (err, prefab) => {
                if (err) {
                    console.log("加载预制体失败:", err);
                    return;
                }
                // 实例化预制体
                const newNode = instantiate(prefab);

                // 将实例化的预制体添加到场景中
                //this.parentNode!.addChild(newNode);

                console.log("预制体已成功添加到场景中");
            });

        });

        await SYSCoroutineUtil.WaitUntil(() => {
            if (this.bundle != null) {
                return true
            }
            return false
        });
        */

    }
       public async loadBundleWithProgress(bundleName: string): Promise<{ bundle: AssetManager.Bundle | null; progress: number }> {
        return new Promise((resolve, reject) => {
            let currentProgress = 0;

            // 调用 assetManager.loadBundle 方法加载资源包
            assetManager.loadBundle(
                bundleName,
                (finished: number, total: number) => {
                    // 更新加载进度
                    currentProgress = total > 0 ? finished / total : 0;
                    console.log(`Loading progress: ${(currentProgress * 100).toFixed(2)}%`);
                },
                (err, bundle) => {
                    if (err) {
                        console.error(`Failed to load bundle: ${bundleName}`, err);
                        reject(err);
                    } else {
                        console.log(`Bundle "${bundleName}" loaded successfully.`);
                        resolve({ bundle, progress: currentProgress });
                    }
                }
            );
        });
    }

    public GetBundle():AssetManager.Bundle{
        return this.bundle
    }

//load<T extends Asset>(paths: string, type: __private.__types_globals__Constructor<T> | null, onComplete?: ((err: Error | null, data: T) => void) | null): void;
    public LoadAssetAsync<T extends Asset>(paths: string, type: __private.__types_globals__Constructor<T> | null, onComplete?: ((err: Error | null, data: T) => void) | null) {
        if (CC_EDITOR) {
            // 仅在编辑器模式下执行的代码
        }

        this.bundle.load(paths,type,onComplete);
        /*
        this.bundle.load(paths, SpriteAtlas, (err, prefab) => {
            if (err) {
                console.log("加载预制体失败:", err);
                return;
            }
            // 实例化预制体
            const newNode = instantiate(prefab);
            // 将实例化的预制体添加到场景中
            //this.parentNode!.addChild(newNode);
            console.log("预制体已成功添加到场景中");
        });
        */

        /*
        // 加载 Prefab
        resources.load(path, Prefab, (err, prefab) => {
            const newNode = instantiate(prefab);
            this.node.addChild(newNode);
        });
        */

    }
}