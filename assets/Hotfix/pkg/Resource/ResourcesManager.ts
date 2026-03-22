import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {SYSCoroutineUtil} from "db://assets/Hotfix/pkg/utils/coroutine/SYSCoroutineUtil";
import {XAssetBundleManager} from "db://assets/Scripts/XTudouFramework/AssetBundle/XAssetBundleManager";
import {assetManager,_decorator, Component, Node,find,
    resources,
    Prefab,Sprite,SpriteFrame,SpriteAtlas,Texture2D,AnimationClip,
    Mesh,Material,Skeleton,
    instantiate,__private,
    Asset,AssetManager,
    } from 'cc';

/**
 * 资源管理器
 * added by yh @ 2024-11-16
 * https://docs.cocos.com/creator/3.8/manual/zh/asset/downloader-parser.html
 *
 * */
export class ResourcesManager{
    /*
-- 设置常驻包
-- 注意：
-- 1、公共包（被2个或者2个其它AB包所依赖的包）底层会自动设置常驻包
-- 2、任何情况下不想被卸载的非公共包（如Lua脚本）需要手动设置常驻包
*/
    public SetAssetBundleResident(path: string, resident: boolean):void {

    }
    public AddToUnloadList(ABPath: string) {

    }

    private static instance: ResourcesManager;
    public static get Instance() :ResourcesManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    //
    constructor() {
    }
    public getBundle():AssetManager.Bundle{
        let bundle = assetManager.getBundle('AssetsPackage');
        return bundle
    }
    public MapAssetPathExist(path: string): boolean {
        return false
    }

    public LoadPrefab(){

    }
    public preload(){
        resources.preload('images/background/spriteFrame', SpriteFrame);

        // 加载 Prefab
        resources.load("test_assets/prefab", Prefab, (err, prefab) => {
            const newNode = instantiate(prefab);
            //this.node.addChild(newNode);
        });

        // 加载 AnimationClip
        resources.load("test_assets/anim", AnimationClip, (err, clip) => {
            //this.node.getComponent(Animation).addClip(clip, "anim");
        });
        // 加载 texture
        resources.load("test_assets/image/texture", Texture2D, (err: any, texture: Texture2D) => {
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            //this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        });
        // 加载 SpriteAtlas（图集），并且获取其中的一个 SpriteFrame
        // 注意 atlas 资源文件（plist）通常会和一个同名的图片文件（png）放在一个目录下, 所以需要在第二个参数指定资源类型
        resources.load("test_assets/sheep", SpriteAtlas, (err, atlas) => {
            const frame = atlas.getSpriteFrame('sheep_down_0');
            //sprite.spriteFrame = frame;
        });
        // 加载模型中的网格资源
        resources.load("Monster/monster", Mesh, (err, mesh) => {
            //this.node.getComponent(MeshRenderer).mesh = mesh;
        });
        // 加载模型中的材质资源
        resources.load("Monster/monster-effect", Material, (err, material) => {
            //this.node.getComponent(MeshRenderer).material = material;
        });
        // 加载模型中的骨骼
        resources.load("Monster/Armature", Skeleton, (err, skeleton) => {
            //this.node.getComponent(SkinnedMeshRenderer).skeleton = skeleton;
        });
        // 加载 test_assets 目录下所有资源
        resources.loadDir("test_assets", function (err, assets) {
            // ...
        });

        // 加载 test_assets 目录下所有 SpriteFrame，并且获取它们的路径
        resources.loadDir("test_assets", SpriteFrame, function (err, assets) {
            // ...
        });
        resources.preload('test_assets/image/spriteFrame', SpriteFrame);
        // wait for while
        resources.load('test_assets/image/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            //this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        });

    }
    //-- 异步加载Asset：回调形式
    public LoadAsync<T extends Asset>(path: string,
                                      res_type:any,
                                      callback: ((data: Asset | null) => void)| null,
                                      progress_callback: ((progress: number) => void) | null,
                                      ): void{

        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path),"path err : "+path);
        UIUtil.Assert(callback != null, "Need to provide a function as callback");

       let _er:Promise<void> = this.CoLoadAsync(path,res_type,callback,progress_callback)
        SYSCoroutineUtil.M_startCoroutine(()=>_er);

        let bundle = assetManager.getBundle('AssetsPackage');
        // 去掉路径的文件后缀
        path = path.replace(/\.\w+$/, ''); // 移除后缀名
        // 加载 Prefab 资源


    }
    //-- 异步加载Asset：协程形式
    public async CoLoadAsync<T>(path:string,
                                res_type: any,
                                callback: ((data: Asset | null) => void)| null,
                                progress_callback: ((progress: number) => void) | null,
    ):Promise<void>{

        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path), "path err : " + path);
        //let loader:AssetRequest  = XAssetBundleManager.Instance.LoadAssetAsync(path, res_type);
        //XAssetBundleManager.Instance.LoadAssetAsync(path,Prefab)

        path = path.replace(/\.\w+$/, ''); // 移除后缀名
        //------暂时这样直接掉用--------
        let bundle = assetManager.getBundle('AssetsPackage');
        //path = "UI/LobbyMain/prefab/UILobbyMain.prefab"
        bundle.load(path, Prefab, (finished: number, total: number) => {
                // 进度回调
                //console.log(`Loading progress: ${(finished / total) * 100}%`);
                if(progress_callback!=null){
                    progress_callback(finished / total)
                }
            },
            (err, prefab: Prefab) => {
                if (err!=null) {
                    //处理----
                    return;
                }
                if(callback!=null){
                    if(progress_callback!=null){
                        progress_callback(1)
                    }
                    callback(prefab)
                }
                //console.error('xxxxxx: %s', err.message);
                //console.log('Prefab loaded successfully:', prefab);
                // 使用 prefab，例如实例化
                //let node = instantiate(prefab);
                //director.getScene().addChild(node);
            });

        //this.LoadAsync5("UI/LobbyMain/prefab/UILobbyMain",Prefab,null,(e,ob)=>{})
    }

    public LoadAsync444(path: string,
                        type: any,
                        callback: (er, go) => void,
                        progress_callback:(progress:number)=>void =null ) {
        let bundle = assetManager.getBundle('AssetsPackage');
        bundle.load(path, type,(finished: number, total: number, item)=>{
            let progress = finished/total
            if(progress_callback){
                progress_callback(progress)
            }
        }, (err, prefab) => {
            if (err) {
                console.log("加载预制体失败:", err);
                return;
            }
            if(callback){
                callback(err,prefab)
            }
        });
    }
    public LoadA33sync(path: string,
                       callback: (go) => void,
                       progress_callback:(progress:number)=>void ) {

        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path),"path err : "+path);
        UIUtil.Assert(callback != null, "Need to provide a function as callback");
        async function _er() {
            await this.CoLoadAsync(path,callback,progress_callback);
        }
        SYSCoroutineUtil.M_startCoroutine(_er);
    }

    //"db://assets/AssetsPackage/UI/LobbyMain/prefab/UILobbyMain"
    //onProgress: ((finished: number, total: number, item: AssetManager.RequestItem) => void) | null,
    public LoadAsync5<T>(path: string,
                         type: __private.__types_globals__Constructor<T> | null,
                         progress_callback:(progress:number)=>void,
                         onComplete: ((err: Error | null, data: T) => void) | null,
                          ){
        // 预制体资源的路径
        //const prefabPath = "UI/LobbyMain/prefab/UILobbyMain";
        let bundle = assetManager.getBundle('AssetsPackage');
        bundle.load(path, Prefab,(finished: number, total: number, item)=>{
            let progress = finished/total
            if(progress_callback){
                progress_callback(progress)
            }
        }, (err, prefab) => {
            if (err) {
                console.log("加载预制体失败:", err);
                return;
            }

        });

        /*
        bundle.load(path, Prefab,onProgress, (err, prefab) => {
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

    }

    /*

        // 资源未缓存，下载资源
        assetManager.loadBundle(remoteUrl, (err:Error,imageAsset) => {
            if (err) {
                console.error('下载资源失败:', err);
                return;
            }
            console.log('资源下载成功');
            // 使用下载的资源
            //const spriteFrame = new SpriteFrame(imageAsset);
            const spriteNode = new Node();
            const sprite = spriteNode.addComponent(Sprite);
            //sprite.spriteFrame = spriteFrame;
            //director.getScene().addChild(spriteNode);
        });
    */
        /*
      // 获取缓存的资源路径
     let x = assetManager.cacheManager
      let cachedPath = assetManager.cacheManager.cachedFiles.get(remoteUrl);

      if (!cachedPath) {

      } else {
          console.log('资源已缓存，路径:', cachedPath);

          // 使用缓存的资源路径
          assetManager.loadRemote(cachedPath, (err, imageAsset) => {
              if (err) {
                  console.error('加载缓存资源失败:', err);
                  return;
              }
              console.log('资源加载成功');
              const spriteFrame = new cc.SpriteFrame(imageAsset);
              const spriteNode = new cc.Node();
              const sprite = spriteNode.addComponent(cc.Sprite);
              sprite.spriteFrame = spriteFrame;
              cc.director.getScene().addChild(spriteNode);

          });
        }
    } */
    public LoadAsync2(path:string){
        const cachedPath = assetManager.cacheManager.cachedFiles.get(path);
        if (cachedPath) {
            console.log('资源已下载并缓存:', cachedPath);
        } else {
            console.log('资源未下载');
        }

        assetManager.loadRemote(path,
            (completedCount, totalCount, item) => {
                let percent = completedCount / totalCount;
                console.log('下载进度:', percent);
            },
            (err, asset) => {
                if (err) {
                    console.error('下载 prefab 失败:', err);
                    return;
                }
                console.log('下载 prefab 成功:', asset);
                // 将下载的 asset 保存到本地
                //sassetManager.cacheManager.saveCache(asset);
            }
        );

    }

    public LoadAsync333(){

        //assetManager.loadBundle()
        //assetManager.loadRemote()
        const remoteUrl = 'http://example.com/remoteImage.png';
        function progress_callback(progress:number) {
            
        }
        //远端下载-
        assetManager.loadRemote(remoteUrl, {
            onFileProgress: (completedCount, totalCount, item) => {
                let percent = (completedCount / totalCount * 100).toFixed(2);
                console.log(`下载进度: ${percent}%`);
            }
        }, (err, imageAsset) => {
            if (err) {
                console.error(err);
                return;
            }
            // 使用下载的资源
        });

        //释放资源
        //assetManager.releaseAsset(asset);


    }

   public IsProsessRunning() :boolean{
        return false;
    }

   public Cleanup():void {

    }

    public SetBundleResident(s: string, b: boolean) {
        
    }
}