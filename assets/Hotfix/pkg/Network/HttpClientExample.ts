import { HttpClient } from "db://assets/Hotfix/pkg/Network/HttpClient";
import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";

/**
 * HTTP客户端使用示例
 * 展示实例化使用和同步异步两种调用方式
 * 
 * @author yh
 * @date 2024/12/27
 */
export class HttpClientExample {
    
    /**
     * 异步请求示例
     */
    public static async asyncRequestExample(): Promise<void> {
        Log4.Log("=== 异步请求示例 ===");
        
        try {
            // 创建HttpClient实例
            const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
            
            // 异步GET请求
            const getResponse = await httpClient.CoGet("/posts/1");
            
            if (getResponse.success) {
                Log4.Log("异步GET请求成功:", getResponse.data);
            } else {
                Log4.LogError("异步GET请求失败:", getResponse.error);
            }

            // 异步POST请求
            const postData = {
                title: "测试标题",
                body: "测试内容",
                userId: 1
            };
            
            const postResponse = await httpClient.CoPost("/posts", postData);
            
            if (postResponse.success) {
                Log4.Log("异步POST请求成功:", postResponse.data);
            } else {
                Log4.LogError("异步POST请求失败:", postResponse.error);
            }

        } catch (error) {
            Log4.LogError("异步请求异常:", error);
        }
    }

    /**
     * 同步请求示例
     */
    public static CoSyncRequestExample(): void {
        Log4.Log("=== 同步请求示例 ===");
        
        try {
            // 创建HttpClient实例
            const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
            
            // 同步GET请求
            const getResponse = httpClient.get("/posts/1");
            
            if (getResponse.success) {
                Log4.Log("同步GET请求成功:", getResponse.data);
            } else {
                Log4.LogError("同步GET请求失败:", getResponse.error);
            }

            // 同步POST请求
            const postData = {
                title: "测试标题",
                body: "测试内容",
                userId: 1
            };
            
            const postResponse = httpClient.post("/posts", postData);
            
            if (postResponse.success) {
                Log4.Log("同步POST请求成功:", postResponse.data);
            } else {
                Log4.LogError("同步POST请求失败:", postResponse.error);
            }

        } catch (error) {
            Log4.LogError("同步请求异常:", error);
        }
    }

    /**
     * 带参数的请求示例
     */
    public static async parameterRequestExample(): Promise<void> {
        Log4.Log("=== 带参数请求示例 ===");
        
        try {
            // 创建HttpClient实例
            const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
            
            // GET请求带查询参数
            const params = {
                userId: 1,
                _limit: 5
            };
            
            const response = await httpClient.CoGet("/posts", params);
            
            if (response.success) {
                Log4.Log("带参数GET请求成功:", response.data);
            } else {
                Log4.LogError("带参数GET请求失败:", response.error);
            }

        } catch (error) {
            Log4.LogError("带参数请求异常:", error);
        }
    }

    /**
     * 自定义配置请求示例
     */
    public static async customConfigExample(): Promise<void> {
        Log4.Log("=== 自定义配置请求示例 ===");
        
        try {
            const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
            // 设置自定义请求头
            httpClient.addDefaultHeader("Authorization", "Bearer your-token");
            httpClient.addDefaultHeader("X-Custom-Header", "custom-value");
            
            // 设置超时时间
            httpClient.setDefaultTimeout(5000);
            
            const response = await httpClient.CoGet(
                "https://jsonplaceholder.typicode.com/posts/1",
                undefined,
                {
                    headers: {
                        "X-Request-ID": "12345"
                    }
                }
            );
            
            if (response.success) {
                Log4.Log("自定义配置请求成功:", response.data);
            } else {
                Log4.LogError("自定义配置请求失败:", response.error);
            }

        } catch (error) {
            Log4.LogError("自定义配置请求异常:", error);
        }
    }

    /**
     * 错误处理示例
     */
    public static async errorHandlingExample(): Promise<void> {
        Log4.Log("=== 错误处理示例 ===");
        
        try {
            const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

            // 请求不存在的URL
            const response = await httpClient.CoGet(
                "https://httpstat.us/404"
            );
            
            if (response.success) {
                Log4.Log("请求成功:", response.data);
            } else {
                Log4.LogError("请求失败 - 状态码:", response.statusCode, "错误信息:", response.error);
            }

            // 请求超时URL
            const timeoutResponse = await httpClient.CoGet(
                "https://httpstat.us/200?sleep=15000",
                undefined,
                { timeout: 3000 }
            );
            
            if (timeoutResponse.success) {
                Log4.Log("超时请求成功:", timeoutResponse.data);
            } else {
                Log4.LogError("超时请求失败:", timeoutResponse.error);
            }

        } catch (error) {
            Log4.LogError("错误处理示例异常:", error);
        }
    }

    /**
     * 运行所有示例
     */
    public static async runAllExamples(): Promise<void> {
        Log4.Log("开始运行HTTP客户端示例...");
        
        // 异步示例
        await this.asyncRequestExample();
        
        // 同步示例
        this.CoSyncRequestExample();
        
        // 带参数示例
        await this.parameterRequestExample();
        
        // 自定义配置示例
        await this.customConfigExample();
        
        // 错误处理示例
        await this.errorHandlingExample();
        
        Log4.Log("HTTP客户端示例运行完成!");
    }
}
