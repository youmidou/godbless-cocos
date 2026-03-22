import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";

/**
 * HTTP请求响应接口
 */
export interface HttpResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode: number;
    headers?: Record<string, string>;
}

/**
 * HTTP请求配置接口
 */
export interface HttpRequestConfig {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
    params?: Record<string, any>;
}

/**
 * HTTP请求客户端
 * 支持同步和异步两种调用方式
 * 异步方法统一以Co前缀命名
 * 
 * @author yh
 * @date 2024/12/27
 */
export class HttpClient {
    private baseUrl: string = "";
    private defaultTimeout: number = 10000; // 默认10秒超时
    private defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    constructor(baseUrl?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }
    /**
     * 设置基础URL
     * @param baseUrl 服务器基础地址
     */
    public setBaseUrl(baseUrl: string): void {
        this.baseUrl = baseUrl;
        console.log("HttpClient 基础URL已设置:", baseUrl);
    }

    /**
     * 获取基础URL
     */
    public getBaseUrl(): string {
        return this.baseUrl;
    }

    /**
     * 构建完整URL
     * @param path 路径
     * @returns 完整URL
     */
    private buildUrl(path: string): string {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return this.baseUrl + (path.startsWith('/') ? path : '/' + path);
    }
    /**
     * 异步GET请求 (带Co前缀)
     * @param url 请求URL
     * @param params 查询参数
     * @param config 请求配置
     * @returns Promise<HttpResponse<T>>
     */
    public async CoGet<T = any>(
        path: string,
        data?: any,
        config?: Partial<HttpRequestConfig>
    ): Promise<HttpResponse<T>> {
        try {
            let params = this.pbToRecordForTsProto(data)
            const requestConfig: HttpRequestConfig = {
                url: this.buildUrl(path),
                method: 'GET',
                params:params,
                ...config
            };
            return await this.request<T>(requestConfig);
        } catch (error) {
            Log4.LogError("HTTP CoGet请求失败:", error);
            return {
                success: false,
                error: error instanceof Error ? error.message : String(error),
                statusCode: 0
            };
        }
    }
    /**
     * 适配 ts-proto 生成的 PB 对象（无 toObject 方法）
     */
    private pbToRecordForTsProto(pbObj: any): Record<string, any> {
        const result: Record<string, any> = {};
        if (!pbObj || typeof pbObj !== 'object') return result;

        // 直接遍历自身可枚举属性，过滤方法和内部属性
        // @ts-ignore
        Object.entries(pbObj).forEach(([key, value]) => {
            if (
                typeof value === 'function' ||
                key.startsWith('_') || // ts-proto 内部属性通常以 _ 开头
                value === null ||
                value === undefined
            ) {
                return;
            }
            // 基本类型直接保留，数组转逗号分隔字符串
            // @ts-ignore
            if (['string', 'number', 'boolean'].includes(typeof value)) {
                result[key] = value;
            } else if (Array.isArray(value)) {
                result[key] = value.join(',');
            }
        });
        return result;
    }
    /**
     * 异步POST请求 (带Co前缀)
     * @param url 请求URL
     * @param data 请求数据
     * @param config 请求配置
     * @returns Promise<HttpResponse<T>>
     */
    public async CoPost<T = any>(
        path: string, 
        data?: any, 
        config?: Partial<HttpRequestConfig>
    ): Promise<HttpResponse<T>> {
        try {
            const requestConfig: HttpRequestConfig = {
                url: this.buildUrl(path),
                method: 'POST',
                data,
                ...config
            };
            return await this.request<T>(requestConfig);
        } catch (error) {
            Log4.LogError("HTTP CoPost请求失败:", error);
            return {
                success: false,
                error: error instanceof Error ? error.message : String(error),
                statusCode: 0
            };
        }
    }
    /**
     * 核心异步请求方法
     * @param config 请求配置
     * @returns Promise<HttpResponse<T>>
     */
    private async request<T>(config: HttpRequestConfig): Promise<HttpResponse<T>> {
        return new Promise((resolve) => {
            try {
                // 构建完整URL
                let fullUrl = config.url;
                if (config.params) {
                    const searchParams = new URLSearchParams();
                    Object.keys(config.params).forEach(key => {
                        if (config.params![key] !== undefined && config.params![key] !== null) {
                            searchParams.append(key, String(config.params![key]));
                        }
                    });
                    const queryString = searchParams.toString();
                    if (queryString) {
                        fullUrl += (fullUrl.includes('?') ? '&' : '?') + queryString;
                    }
                }

                // 准备请求数据
                let requestBody: string | undefined;
                if (config.data && (config.method === 'POST' || config.method === 'PUT')) {
                    if (typeof config.data === 'string') {
                        requestBody = config.data;
                    } else {
                        requestBody = JSON.stringify(config.data);
                    }
                }

                // 合并请求头
                const headers = {
                    ...this.defaultHeaders,
                    ...config.headers
                };

                // 创建XMLHttpRequest
                const xhr = new XMLHttpRequest();
                xhr.timeout = config.timeout || this.defaultTimeout;

                // 设置响应处理
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        const response: HttpResponse<T> = {
                            success: xhr.status >= 200 && xhr.status < 300,
                            statusCode: xhr.status,
                            headers: this.parseHeaders(xhr.getAllResponseHeaders())
                        };

                        if (response.success) {
                            try {
                                const responseText = xhr.responseText;
                                if (responseText) {
                                    // 尝试解析JSON
                                    response.data = JSON.parse(responseText);
                                }
                            } catch (parseError) {
                                // 如果不是JSON，直接返回文本
                                response.data = xhr.responseText as any;
                            }
                        } else {
                            response.error = xhr.statusText || '请求失败';
                        }

                        resolve(response);
                    }
                };

                // 设置错误处理
                xhr.onerror = () => {
                    resolve({
                        success: false,
                        error: '网络请求失败',
                        statusCode: 0
                    });
                };

                xhr.ontimeout = () => {
                    Log4.LogError("请求超时:", {
                        url: fullUrl,
                        timeout: xhr.timeout,
                        method: config.method
                    });
                    resolve({
                        success: false,
                        error: `请求超时 (${xhr.timeout}ms)`,
                        statusCode: 408
                    });
                };

                // 发送请求
                xhr.open(config.method || 'GET', fullUrl, true);
                
                // 设置请求头
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });

                xhr.send(requestBody);

            } catch (error) {
                resolve({
                    success: false,
                    error: error instanceof Error ? error.message : String(error),
                    statusCode: 0
                });
            }
        });
    }

    /**
     * 解析响应头
     * @param headerString 响应头字符串
     * @returns 解析后的请求头对象
     */
    private parseHeaders(headerString: string): Record<string, string> {
        const headers: Record<string, string> = {};
        if (headerString) {
            headerString.split('\r\n').forEach(line => {
                const parts = line.split(': ');
                if (parts.length === 2) {
                    headers[parts[0].toLowerCase()] = parts[1];
                }
            });
        }
        return headers;
    }

    /**
     * 设置默认超时时间
     * @param timeout 超时时间(毫秒)
     */
    public setDefaultTimeout(timeout: number): void {
        this.defaultTimeout = timeout;
    }

    /**
     * 设置默认请求头
     * @param headers 请求头对象
     */
    public setDefaultHeaders(headers: Record<string, string>): void {
        this.defaultHeaders = { ...this.defaultHeaders, ...headers };
    }

    /**
     * 添加默认请求头
     * @param key 请求头键
     * @param value 请求头值
     */
    public addDefaultHeader(key: string, value: string): void {
        this.defaultHeaders[key] = value;
    }
}
