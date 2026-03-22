/**
 * Cocos Creator HTTP 请求工具类
 * 支持 GET/POST 请求，JSON 格式参数，超时控制，错误处理
 */
export default class HttpUtil {
    /**
     * HTTP GET 请求
     * @param url 请求地址
     * @param params URL 参数（键值对）
     * @param timeout 超时时间（毫秒，默认 10000）
     * @returns Promise 对象，成功返回响应数据，失败返回错误信息
     */
    public static get(
        url: string,
        params: Record<string, any> = {},
        timeout: number = 10000
    ): Promise<any> {
        // 拼接 GET 参数到 URL
        const queryString = this.buildQueryString(params);
        const fullUrl = queryString ? `${url}?${queryString}` : url;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', fullUrl, true);
            xhr.timeout = timeout;

            // 设置请求头（默认 JSON）
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            // 响应处理
            xhr.onload = () => {
                this.handleResponse(xhr, resolve, reject);
            };

            // 错误处理
            xhr.onerror = () => {
                reject(new Error(`GET 请求失败：网络错误，URL=${fullUrl}`));
            };

            // 超时处理
            xhr.ontimeout = () => {
                reject(new Error(`GET 请求超时：超时时间=${timeout}ms，URL=${fullUrl}`));
            };

            xhr.send();
        });
    }

    /**
     * HTTP POST 请求
     * @param url 请求地址
     * @param data 请求体数据（JSON 对象）
     * @param timeout 超时时间（毫秒，默认 10000）
     * @returns Promise 对象，成功返回响应数据，失败返回错误信息
     *     try {
     *         const url = 'https://api.example.com/login';
     *         const data = { username: 'admin', password: '123456' };
     *         const response = await HttpUtil.post(url, data);
     *         console.log('POST 请求成功：', response);
     *     } catch (error) {
     *         console.error('POST 请求失败：', error.message);
     *     }
     */
    public static post(
        url: string,
        data: Record<string, any> = {},
        timeout: number = 10000
    ): Promise<any> {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.timeout = timeout;
            // 设置请求头（JSON 格式）
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            // 响应处理
            xhr.onload = () => {
                this.handleResponse(xhr, resolve, reject);
            };

            // 错误处理
            xhr.onerror = () => {
                reject(new Error(`POST 请求失败：网络错误，URL=${url}`));
            };

            // 超时处理
            xhr.ontimeout = () => {
                reject(new Error(`POST 请求超时：超时时间=${timeout}ms，URL=${url}`));
            };

            // 发送 JSON 数据
            xhr.send(JSON.stringify(data));
        });
    }

    /**
     * 处理响应结果
     * @private
     */
    private static handleResponse(
        xhr: XMLHttpRequest,
        resolve: (value: any) => void,
        reject: (reason: Error) => void
    ) {
        // 状态码 200-299 视为成功
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                // 尝试解析 JSON 响应
                const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
                resolve(response);
            } catch (e) {
                // 非 JSON 响应直接返回文本
                resolve(xhr.responseText);
            }
        } else {
            reject(new Error(`请求失败：状态码=${xhr.status}，响应=${xhr.responseText}`));
        }
    }

    /**
     * 构建 URL 查询字符串
     * @private
     */
    private static buildQueryString(params: Record<string, any>): string {
        const query: string[] = [];
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const value = params[key];
                if (value !== undefined && value !== null) {
                    query.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
            }
        }
        return query.join('&');
    }
}