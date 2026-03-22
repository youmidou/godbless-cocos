import { _decorator, Component, Node,Canvas } from 'cc';
const { ccclass, property } = _decorator;
import * as cc from "cc";
//屏幕类型
export enum ScreenType {
    HorizontalScreen = 0, //横屏
    VerticalScreen = 1 //竖屏
}
declare const CC_EDITOR: boolean;
/**
 * 功能描述：分辨率适配器
 * author:yh 2024-12-19 13:21
 */

@ccclass('ResolutionAdapter')
export class ResolutionAdapter extends Component {
    private static instance: ResolutionAdapter;

    private standard_width:number = 1280;       //初始宽度
    private standard_height:number = 720;       //初始高度

    private scaler: Canvas;
    private origin_device_width: number;
    private origin_device_height: number;
    private portraitMode: boolean;
    private scaleCoef: number =1;
    public static get Instance() :ResolutionAdapter{
        return this.instance
    }
   public start():void {
       ResolutionAdapter.instance = this

       this.scaler = this.getComponent(Canvas)
       //获取设备宽高
       this.origin_device_width = cc.screen.windowSize.width
       this.origin_device_height = cc.screen.windowSize.height

       this.ResetResolution()

       if (CC_EDITOR) {
           if (!this.IsLandscape())
           {
               //GameViewUtils.switchOrientation();
           }
       }
    }

    public IsLandscape():boolean
    {
        return !this.portraitMode;
    }

    //重置分辨率
    private ResetResolution(){

        if(!this.scaler)
        {
            return;
        }
        if (CC_EDITOR) {

        }

        let device_width:number = 0;                //当前设备宽度
        let device_height:number = 0;               //当前设备高度
        //横版适配
        if (this.IsLandscape()){
            device_width = this.origin_device_width;
            device_height = this.origin_device_height;
            console.log("ResetResolution  get screen width " + device_width + " height: " + device_height );

            //计算宽高比例
            let device_aspect:number = device_width / device_height;
            //this.scaler.referenceResolution = new cc.Vec2(this.standard_width, this.standard_height);
            cc.view.setDesignResolutionSize(this.standard_width, this.standard_height, !this.IsLandscape() ? 4 : 5); // 4: Fit Height, 5: Fit Width

            let standard_aspect = this.standard_width / this.standard_height;
            if (device_aspect > standard_aspect)
            {
                //this.scaler.matchWidthOrHeight = 1;
            }
            else
            {
                //this.scaler.matchWidthOrHeight = 0;
            }

            // 更新缩放系数
            this.scaleCoef = device_aspect / standard_aspect;
        }else{
            //竖版适配
            device_width = this.origin_device_height;
            device_height = this.origin_device_width;
            console.log("ResetResolution portrait  get screen width " + device_width + " height: " + device_height );

            //计算宽高比例
            let device_aspect = device_width / device_height;
            //this.scaler.referenceResolution = new cc.Vec2(this.standard_height, this.standard_width);
            cc.view.setDesignResolutionSize(this.standard_width, this.standard_height, !this.IsLandscape() ? 4 : 5); // 4: Fit Height, 5: Fit Width


            let standard_aspect = this.standard_height / this.standard_width;
            if (device_aspect > standard_aspect)
            {
                //this.scaler.matchWidthOrHeight = 1;
            }
            else
            {
                //this.scaler.matchWidthOrHeight = 0;
            }

            // 更新缩放系数
            this.scaleCoef = device_aspect / standard_aspect;
        }


    }

    public update(deltaTime: number):void {

        // 设备水平方向，home键在手机左侧

    }

    // 切换到竖屏
    public SwitchToPortrait(): void {
        console.log("SwitchToPortrait enter");
        this.portraitMode = true;

        if (CC_EDITOR) {
            // 编辑器模式
            let v: cc.Size = new cc.Size();
            v.width = this.standard_width;
            v.height = this.standard_height;
            cc.screen.windowSize = v;
            this.ResetResolution();
        } else if (cc.sys.isBrowser) {
            // H5模式
            if (cc.sys.os === cc.sys.OS.IOS || cc.sys.os === cc.sys.OS.ANDROID) {
                // 移动端浏览器
                if (window.screen && window.screen.orientation) {
                    console.log("SwitchToPortrait enter 移动端浏览器");
                    /*
                    // @ts-ignore
                    window.screen.orientation.lock('portrait').catch(err => {
                        console.warn('Failed to lock orientation:', err);
                    });
                    */
                }
            }
            // 设置视图大小
            let v: cc.Size = new cc.Size();
            v.width = this.standard_height;
            v.height = this.standard_width;
            cc.screen.windowSize = v;
            this.ResetResolution();
        } else if (cc.sys.os === cc.sys.OS.IOS || cc.sys.os === cc.sys.OS.ANDROID) {
            // 原生平台
            if (cc.sys.os === cc.sys.OS.IOS) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("AppController", "setScreenPortrait:");
            } else {
                // @ts-ignore
                jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "setScreenPortrait",
                    "()V"
                );
            }
            this.ResetResolution();
        }
    }

    // 切换到横屏
    public SwitchToLandscape(): void {
        console.log("SwitchToLandscape enter");
        this.portraitMode = false;

        if (CC_EDITOR) {
            // 编辑器模式
            let v: cc.Size = new cc.Size();
            v.width = this.standard_width;
            v.height = this.standard_height;
            cc.screen.windowSize = v;
            this.ResetResolution();
        } else if (cc.sys.isBrowser) {
            // H5模式
            if (cc.sys.os === cc.sys.OS.IOS || cc.sys.os === cc.sys.OS.ANDROID) {
                // 移动端浏览器
                if (window.screen && window.screen.orientation) {
                    console.log("SwitchToLandscape enter 移动端浏览器");
                    /*
                    // @ts-ignore
                    window.screen.orientation.lock('landscape').catch(err => {
                        console.warn('Failed to lock orientation:', err);
                    });
                    */
                }
            }
            // 设置视图大小
            let v: cc.Size = new cc.Size();
            v.width = this.standard_width;
            v.height = this.standard_height;
            cc.screen.windowSize = v;
            this.ResetResolution();
        } else if (cc.sys.os === cc.sys.OS.IOS || cc.sys.os === cc.sys.OS.ANDROID) {
            // 原生平台
            if (cc.sys.os === cc.sys.OS.IOS) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("AppController", "setScreenLandscape:");
            } else {
                // @ts-ignore
                jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "setScreenLandscape",
                    "()V"
                );
            }
            this.ResetResolution();
        }
    }


    // 编辑器模式下调整设计分辨率
    private setEditorDesignResolution(isPortrait: boolean): void {
       /*
        if (this.canvas) {
            const designResolution = isPortrait
                ? new cc.Size(720, 1280) // 竖屏设计分辨率
                : new cc.Size(1280, 720); // 横屏设计分辨率

            this.canvas.designResolution = designResolution;
            this.canvas.alignWithScreen = true;

            console.log(
                `编辑器模式: 已设置设计分辨率为 ${
                    isPortrait ? "竖屏" : "横屏"
                }，宽: ${designResolution.width}, 高: ${designResolution.height}`
            );
        } else {
            console.warn("未找到 Canvas 组件，无法调整设计分辨率");
        }
        */
    }

    // H5 平台切换方向
    private setH5Orientation(orientation: "portrait" | "landscape"): void {
        console.log(`H5 平台切换到${orientation === "portrait" ? "竖屏" : "横屏"}`);
        const metaTag = document.querySelector('meta[name="viewport"]');
        if (metaTag) {
            // 更新 meta viewport 属性
            metaTag.setAttribute(
                "content",
                `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, ${
                    orientation === "portrait" ? "height=device-height" : "width=device-height"
                }`
            );
        } else {
            console.warn("未找到 viewport meta 标签，无法调整 H5 横竖屏");
        }

        // 通过样式修改容器的旋转效果
        const container = document.getElementById("GameDiv"); // 默认容器 ID
        if (container) {
            container.style.transform =
                orientation === "portrait" ? "rotate(0deg)" : "rotate(90deg)";
            container.style.transformOrigin = "center";
        }
    }

    // Native 平台切换方向
    private setNativeOrientation(orientation: "portrait" | "landscape"): void {
        console.log(`Native 平台切换到${orientation === "portrait" ? "竖屏" : "横屏"}`);
        // 注意：此处需要配合原生平台开发，如通过 C++/Java/Kotlin 实现横竖屏切换
        console.warn("Native 平台切换方向的逻辑需要在原生层实现");
    }

    // 原生平台切换到竖屏
    private SwitchToPortraitNative(): void {
/*
        if (cc.jsb && cc.jsb.reflection) {
            if (cc.sys.os === cc.sys.OS.IOS) {
                console.log("调用 iOS 的竖屏切换接口");
                cc.jsb.reflection.callStaticMethod(
                    "AppController", // iOS 主类名
                    "switchToPortrait"
                );
            } else if (cc.sys.os === cc.sys.OS.ANDROID) {
                console.log("调用 Android 的竖屏切换接口");
                cc.jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity", // Android 主类名
                    "switchToPortrait", "()V"
                );
            }
        } else {
            console.warn("Native 平台未启用 jsb.reflection 或不支持此平台");
        }
        */
    }

    // 原生平台切换到横屏
    private SwitchToLandscapeNative(): void {
        /*
        if (cc.jsb && cc.jsb.reflection) {
            if (cc.sys.os === cc.sys.OS.IOS) {
                console.log("调用 iOS 的横屏切换接口");
                cc.jsb.reflection.callStaticMethod(
                    "AppController", // iOS 主类名
                    "switchToLandscape"
                );
            } else if (cc.sys.os === cc.sys.OS.ANDROID) {
                console.log("调用 Android 的横屏切换接口");
                cc.jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity", // Android 主类名
                    "switchToLandscape", "()V"
                );
            }
        } else {
            console.warn("Native 平台未启用 jsb.reflection 或不支持此平台");
        }
        */
    }
    //进入 低分辨率
    public EnterLowerResolution() {

    }

    //检查较低分辨率
    public CheckLowerResolution() {

    }


    /*

public adaptResolution() {
   const canvas:Canvas = this.node.getComponent(Canvas);
   if (!canvas) {
       console.warn("Canvas component not found!");
       return;
   }

   const frameSize = cc.view.getFrameSize(); // 获取设备屏幕分辨率
   const designResolution = cc.view.getDesignResolutionSize(); // 获取设计分辨率

   // 计算宽高比
   const screenRatio = frameSize.width / frameSize.height;
   const designRatio = designResolution.width / designResolution.height;

   if (screenRatio > designRatio) {
       // 如果屏幕更宽，则适配高度
       canvas.fitHeight = true;
       canvas.fitWidth = false;
   } else {
       // 如果屏幕更高，则适配宽度
       canvas.fitWidth = true;
       canvas.fitHeight = false;
   }
}


private defaultResolution = { width: 720, height: 1280 }; // 默认竖屏分辨率

onLoad() {
   // 初始化时根据当前屏幕状态设置分辨率
   const isPortrait = this.isPortrait();
   this.setResolution(isPortrait);
}

// 切换到竖屏
public SwitchToPortrait() {
   console.log('切换到竖屏');
   this.setResolution(true);
}

// 切换到横屏
public SwitchToLandscape() {
   console.log('切换到横屏');
   this.setResolution(false);
}

// 判断是否是竖屏
private isPortrait(): boolean {
   const canvasSize = cc.view.getCanvasSize();
   return canvasSize.height > canvasSize.width;
}

// 设置设计分辨率
private setResolution(isPortrait: boolean) {
   const width = isPortrait
       ? this.defaultResolution.width
       : this.defaultResolution.height;
   const height = isPortrait
       ? this.defaultResolution.height
       : this.defaultResolution.width;

   // 设置设计分辨率和适配模式
   cc.view.setDesignResolutionSize(width, height, isPortrait ? 4 : 5); // 4: Fit Height, 5: Fit Width
   console.log(`设计分辨率设置为: ${width}x${height}`);
}

*/


}

