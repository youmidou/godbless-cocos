import * as cc from "cc";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";

/**
 * 平台管理器
 * added by yh @ 2024-12-23
 */
export class PlatformManager{
    private static instance: PlatformManager;

    private readonly CurrentSystem: cc.__private._pal_system_info_enum_type_operating_system__OS;
    private readonly isH5:boolean = false;
    private readonly isAndroid:boolean = false;
    private readonly isIOS:boolean = false;
    private readonly isMac:boolean = false;

    public static get Instance() :PlatformManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
        this.CurrentSystem = cc.sys.os
        this.isH5 = cc.sys.isBrowser; //h5
        this.isAndroid = (cc.sys.os === cc.sys.OS.ANDROID)
        this.isIOS = (cc.sys.os === cc.sys.OS.IOS)
        this.isMac = (cc.sys.os === cc.sys.OS.OSX)

        Log4.Log("xxx CurrentSystem "+ this.CurrentSystem)
    }
    public IsH5():boolean{
        return cc.sys.isBrowser;
    }
    // 是否在浏览器中运行
    public IsBrowser(): boolean {
        return cc.sys.isBrowser;
    }
    public IsAndroid():boolean{
        return this.isAndroid
    }
    public IsIOS():boolean{
        return this.isIOS
    }
    public GetSystemInfo():string{
        return UIUtil.Format("----sys=%s isH5=%d-------------- ",cc.sys.os,cc.sys.isBrowser)
    }

    /**
     * 获取设备唯一标识符
     * 根据不同平台采用不同的获取方式
     * @returns Promise<string> 设备ID
     */
    public GetDeviceId(): string {
        try {
            if (this.isH5) {
                return this.GetH5DeviceId();
            } else if (this.isAndroid) {
                return this.GetAndroidDeviceId();
            } else if (this.isIOS) {
                return this.GetIOSDeviceId();
            } else {
                // 其他平台使用通用方法
                return this.GetGenericDeviceId();
            }
        } catch (error) {
            Log4.LogError("获取设备ID失败:", error);
            return this.GetFallbackDeviceId();
        }
    }
    /**
     * H5平台获取设备ID
     * 使用localStorage存储生成的UUID
     */
    private GetH5DeviceId(): string{
        const STORAGE_KEY = "device_id";
        
        try {
            // 尝试从localStorage获取已存储的设备ID
            let deviceId = localStorage.getItem(STORAGE_KEY);
            
            if (!deviceId) {
                // 如果没有存储的设备ID，生成一个新的
                deviceId = this.GenerateUUID();
                localStorage.setItem(STORAGE_KEY, deviceId);
                Log4.Log("H5平台生成新设备ID:", deviceId);
            } else {
                Log4.Log("H5平台获取已存储设备ID:", deviceId);
            }
            
            return deviceId;
        } catch (error) {
            Log4.LogError("H5平台获取设备ID失败:", error);
            return this.GenerateUUID();
        }
    }

    /**
     * Android平台获取设备ID
     * 通过原生代码获取ANDROID_ID
     */
    private GetAndroidDeviceId():string {
        try {
            // @ts-ignore
            if (typeof jsb !== 'undefined' && jsb.reflection) {
                // @ts-ignore
                const deviceId = jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "getDeviceId",
                    "()Ljava/lang/String;"
                );
                
                if (deviceId && deviceId !== "null" && deviceId !== "") {
                    Log4.Log("Android平台获取设备ID成功:", deviceId);
                    return deviceId;
                }
            }
            
            Log4.LogWarn("Android平台无法获取原生设备ID，使用备用方案");
            return this.GetFallbackDeviceId();
        } catch (error) {
            Log4.LogError("Android平台获取设备ID失败:", error);
            return this.GetFallbackDeviceId();
        }
    }

    /**
     * iOS平台获取设备ID
     * 通过原生代码获取identifierForVendor
     */
    private GetIOSDeviceId(): string {
        try {
            // @ts-ignore
            if (typeof jsb !== 'undefined' && jsb.reflection) {
                // @ts-ignore
                const deviceId = jsb.reflection.callStaticMethod(
                    "AppController",
                    "getDeviceId"
                );
                
                if (deviceId && deviceId !== "null" && deviceId !== "") {
                    Log4.Log("iOS平台获取设备ID成功:", deviceId);
                    return deviceId;
                }
            }
            
            Log4.LogWarn("iOS平台无法获取原生设备ID，使用备用方案");
            return this.GetFallbackDeviceId();
        } catch (error) {
            Log4.LogError("iOS平台获取设备ID失败:", error);
            return this.GetFallbackDeviceId();
        }
    }

    /**
     * 通用平台获取设备ID
     * 使用系统信息生成唯一标识
     */
    private GetGenericDeviceId(): string {
        try {
            // 使用系统信息组合生成设备ID
            const systemInfo = {
                platform: cc.sys.platform,
                os: cc.sys.os,
                browserType: cc.sys.browserType,
                browserVersion: cc.sys.browserVersion,
                language: cc.sys.language,
                pixelRatio: cc.sys.Platform
            };
            
            const deviceId = this.GenerateUUIDFromSystemInfo(systemInfo);
            Log4.Log("通用平台生成设备ID:", deviceId);
            return deviceId;
        } catch (error) {
            Log4.LogError("通用平台获取设备ID失败:", error);
            return this.GetFallbackDeviceId();
        }
    }

    /**
     * 备用设备ID获取方案
     * 当所有其他方法都失败时使用
     */
    private GetFallbackDeviceId(): string {
        const fallbackId = this.GenerateUUID();
        Log4.LogWarn("使用备用设备ID:", fallbackId);
        return fallbackId;
    }

    /**
     * 生成UUID
     * 使用标准UUID v4格式
     */
    private GenerateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * 基于系统信息生成UUID
     * 确保相同设备生成相同的ID
     */
    private GenerateUUIDFromSystemInfo(systemInfo: any): string {
        const infoString = JSON.stringify(systemInfo);
        let hash = 0;
        
        for (let i = 0; i < infoString.length; i++) {
            const char = infoString.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        
        // 转换为UUID格式
        const hex = Math.abs(hash).toString(16);
        const paddedHex = ('00000000' + hex).slice(-8);
        return `${paddedHex.substring(0, 8)}-${paddedHex.substring(0, 4)}-4${paddedHex.substring(1, 4)}-${paddedHex.substring(0, 4)}-${paddedHex.substring(0, 12)}`;
    }

    /**
     * 获取设备ID (同步版本)
     * 优先使用缓存的设备ID
     */
    public GetDeviceIdSync(): string {
        const STORAGE_KEY = "cached_device_id";
        
        try {
            if (this.isH5) {
                // H5平台从localStorage获取
                const cachedId = localStorage.getItem(STORAGE_KEY);
                if (cachedId) {
                    return cachedId;
                }
            }
            
            // 其他平台或H5平台无缓存时，生成新的
            const deviceId = this.GenerateUUID();
            
            if (this.isH5) {
                localStorage.setItem(STORAGE_KEY, deviceId);
            }
            
            return deviceId;
        } catch (error) {
            Log4.LogError("同步获取设备ID失败:", error);
            return this.GenerateUUID();
        }
    }

    /**
     * 清除设备ID缓存
     * 主要用于测试或重置设备标识
     */
    public ClearDeviceIdCache(): void {
        try {
            if (this.isH5) {
                localStorage.removeItem("device_id");
                localStorage.removeItem("cached_device_id");
                Log4.Log("H5平台设备ID缓存已清除");
            }
        } catch (error) {
            Log4.LogError("清除设备ID缓存失败:", error);
        }
    }
    /**
     * 获取设备操作系统信息
     * @returns 操作系统详细信息
     */
    public GetDeviceOS(): any {
        return {
            platform: cc.sys.platform,
            os: cc.sys.os,
            osName: this.GetOSName(),
            browserType: cc.sys.browserType,
            browserVersion: cc.sys.browserVersion,
            language: cc.sys.language,
            isBrowser: cc.sys.isBrowser,
            isNative: cc.sys.isNative,
            isMobile: cc.sys.isMobile
        };
    }

    /**
     * 获取操作系统名称
     */
    public GetOSName(): string {
        switch (cc.sys.os) {
            case cc.sys.OS.ANDROID:
                return "Android";
            case cc.sys.OS.IOS:
                return "iOS";
            case cc.sys.OS.OSX:
                return "macOS";
            case cc.sys.OS.WINDOWS:
                return "Windows";
            case cc.sys.OS.LINUX:
                return "Linux";
            default:
                return "Unknown";
        }
    }

    /**
     * 获取设备信息摘要
     * 用于调试和日志记录
     */
    public GetDeviceInfoSummary(): string {
        const os = this.GetDeviceOS();
        return `平台: ${os.platform}, 系统: ${os.osName}, 浏览器: ${os.browserType || 'N/A'}, 语言: ${os.language}`;
    }


    public Startup() {

        Log4.Log("xxx 获取系统信息 "+this.GetSystemInfo())


    }
}