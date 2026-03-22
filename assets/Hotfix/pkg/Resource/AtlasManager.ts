import * as cc from "cc";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";
/**
 -- added by yh @ 2024-11-18
 -- 图集管理：为逻辑层透明化图集路径和图集资源加载等底层操作
 -- 注意：
 -- 1、只提供异步操作，为的是不需要逻辑层取操心图集AB是否已经加载的问题
 -- 2、图集管理器不做资源缓存
 -- 3、图片名称带后缀
 */
export class AtlasManager{
    constructor() {
    }

    //如 AtlasManager.Instance.LoadImageAsync("UI/LobbyMain/image/launch_bg.jpg",__callback);
    //-- 从图集异步加载图片：回调方式
    public LoadImageAsync(image_path:string,callback:(a:cc.SpriteFrame,obj:object)=>void,obj:object=null){
        UIUtil.Assert(!UIUtil.IsNullOrEmpty(image_path),"image_path is null");
        function __callback(data:cc.Asset ){
            let sprite:cc.SpriteFrame  = data as cc.SpriteFrame;
            if (callback!=null)
            {
                callback(sprite,obj);
            }
        }
        ResourcesManager.Instance.LoadAsync(image_path,cc.SpriteFrame,__callback,null);
    }
}