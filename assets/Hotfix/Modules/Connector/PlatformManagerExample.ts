import { PlatformManager } from "db://assets/Hotfix/Modules/Connector/PlatformManager";
import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";

/**
 * PlatformManager 使用示例
 * 展示如何获取设备ID和系统信息
 * 
 * @author yh
 * @date 2024/12/27
 */
export class PlatformManagerExample {
    
    /**
     * 基本设备ID获取示例
     */
    public static async basicDeviceIdExample(): Promise<void> {
        Log4.Log("=== 基本设备ID获取示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 异步获取设备ID
            const deviceId = await platformManager.GetDeviceId();
            Log4.Log("异步获取设备ID:", deviceId);
            
            // 同步获取设备ID (优先使用缓存)
            const syncDeviceId = platformManager.GetDeviceIdSync();
            Log4.Log("同步获取设备ID:", syncDeviceId);
            
            // 获取设备信息摘要
            const deviceInfo = platformManager.GetDeviceInfoSummary();
            Log4.Log("设备信息:", deviceInfo);
            
        } catch (error) {
            Log4.LogError("基本设备ID获取示例异常:", error);
        }
    }

    /**
     * 平台检测示例
     */
    public static platformDetectionExample(): void {
        Log4.Log("=== 平台检测示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 检测平台类型
            Log4.Log("是否为H5平台:", platformManager.IsH5());
            Log4.Log("是否为浏览器:", platformManager.IsBrowser());
            Log4.Log("是否为Android:", platformManager.IsAndroid());
            Log4.Log("是否为iOS:", platformManager.IsIOS());
            
            // 获取系统信息
            const systemInfo = platformManager.GetSystemInfo();
            Log4.Log("系统信息:", systemInfo);
            
            // 获取详细操作系统信息
            const osInfo = platformManager.GetDeviceOS();
            Log4.Log("操作系统详细信息:", osInfo);
            
        } catch (error) {
            Log4.LogError("平台检测示例异常:", error);
        }
    }

    /**
     * 设备ID缓存管理示例
     */
    public static async deviceIdCacheExample(): Promise<void> {
        Log4.Log("=== 设备ID缓存管理示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 获取设备ID
            const deviceId1 = await platformManager.GetDeviceId();
            Log4.Log("第一次获取设备ID:", deviceId1);
            
            // 再次获取设备ID (应该相同)
            const deviceId2 = await platformManager.GetDeviceId();
            Log4.Log("第二次获取设备ID:", deviceId2);
            
            // 验证设备ID是否一致
            if (deviceId1 === deviceId2) {
                Log4.Log("✓ 设备ID保持一致");
            } else {
                Log4.LogError("✗ 设备ID不一致");
            }
            
            // 清除缓存 (仅H5平台有效)
            if (platformManager.IsH5()) {
                platformManager.ClearDeviceIdCache();
                Log4.Log("设备ID缓存已清除");
                
                // 重新获取设备ID
                const newDeviceId = await platformManager.GetDeviceId();
                Log4.Log("清除缓存后获取设备ID:", newDeviceId);
            }
            
        } catch (error) {
            Log4.LogError("设备ID缓存管理示例异常:", error);
        }
    }

    /**
     * 跨平台兼容性测试示例
     */
    public static async crossPlatformCompatibilityExample(): Promise<void> {
        Log4.Log("=== 跨平台兼容性测试示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 测试不同平台的设备ID获取
            const deviceId = await platformManager.GetDeviceId();
            
            if (platformManager.IsH5()) {
                Log4.Log("H5平台设备ID:", deviceId);
                Log4.Log("说明: H5平台使用localStorage存储生成的UUID");
            } else if (platformManager.IsAndroid()) {
                Log4.Log("Android平台设备ID:", deviceId);
                Log4.Log("说明: Android平台尝试获取原生ANDROID_ID，失败则使用备用方案");
            } else if (platformManager.IsIOS()) {
                Log4.Log("iOS平台设备ID:", deviceId);
                Log4.Log("说明: iOS平台尝试获取原生identifierForVendor，失败则使用备用方案");
            } else {
                Log4.Log("其他平台设备ID:", deviceId);
                Log4.Log("说明: 其他平台使用系统信息生成唯一标识");
            }
            
            // 验证设备ID格式
            const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(deviceId);
            if (isValidUUID) {
                Log4.Log("✓ 设备ID格式正确 (UUID v4)");
            } else {
                Log4.LogWarn("⚠ 设备ID格式异常:", deviceId);
            }
            
        } catch (error) {
            Log4.LogError("跨平台兼容性测试示例异常:", error);
        }
    }

    /**
     * 错误处理示例
     */
    public static async errorHandlingExample(): Promise<void> {
        Log4.Log("=== 错误处理示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 模拟错误情况下的设备ID获取
            try {
                const deviceId = await platformManager.GetDeviceId();
                Log4.Log("设备ID获取成功:", deviceId);
            } catch (error) {
                Log4.LogError("设备ID获取失败:", error);
                
                // 使用同步方法作为备用
                const fallbackId = platformManager.GetDeviceIdSync();
                Log4.Log("使用备用方案获取设备ID:", fallbackId);
            }
            
        } catch (error) {
            Log4.LogError("错误处理示例异常:", error);
        }
    }

    /**
     * 性能测试示例
     */
    public static async performanceTestExample(): Promise<void> {
        Log4.Log("=== 性能测试示例 ===");
        
        try {
            const platformManager = PlatformManager.Instance;
            
            // 测试异步获取性能
            const startTime1 = Date.now();
            const deviceId1 = await platformManager.GetDeviceId();
            const endTime1 = Date.now();
            Log4.Log(`异步获取设备ID耗时: ${endTime1 - startTime1}ms`);
            
            // 测试同步获取性能
            const startTime2 = Date.now();
            const deviceId2 = platformManager.GetDeviceIdSync();
            const endTime2 = Date.now();
            Log4.Log(`同步获取设备ID耗时: ${endTime2 - startTime2}ms`);
            
            // 多次获取测试 (测试缓存效果)
            const startTime3 = Date.now();
            for (let i = 0; i < 10; i++) {
                await platformManager.GetDeviceId();
            }
            const endTime3 = Date.now();
            Log4.Log(`10次异步获取平均耗时: ${(endTime3 - startTime3) / 10}ms`);
            
        } catch (error) {
            Log4.LogError("性能测试示例异常:", error);
        }
    }

    /**
     * 运行所有示例
     */
    public static async runAllExamples(): Promise<void> {
        Log4.Log("开始运行PlatformManager示例...");
        
        // 基本设备ID获取示例
        await this.basicDeviceIdExample();
        
        // 平台检测示例
        this.platformDetectionExample();
        
        // 设备ID缓存管理示例
        await this.deviceIdCacheExample();
        
        // 跨平台兼容性测试示例
        await this.crossPlatformCompatibilityExample();
        
        // 错误处理示例
        await this.errorHandlingExample();
        
        // 性能测试示例
        await this.performanceTestExample();
        
        Log4.Log("所有PlatformManager示例运行完成!");
    }
}
