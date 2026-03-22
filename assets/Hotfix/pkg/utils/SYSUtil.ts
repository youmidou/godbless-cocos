import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";

export class SYSUtil{

    public static NewObjByName(className:string,args:object[] = null):object{
        const pbClass = eval(className); // 动态获取类引用
        // 使用 new 创建传入类的实例
       // return new ClassType(...args);
        return pbClass
        /*
        try {
            const pbClass = eval(className); // 动态获取类引用
            //const instance = new pbClass(); // 实例化类
            if (!pbClass || !pbClass.decode) {
                throw new Error("Invalid PB class: Ensure the class has a 'decode' method.");
            }
            return pbClass.decode(msgData);
        }catch (error){
            Log4.LogError("PBHelper.Decode 解码类型失败 %s",className)
        }
        */
    }
    /**
     * 根据资源路径动态加载模块，并创建对象
     * @param resourcePath db:// 开头的完整资源路径
     */
    public static async NewObjByResourcePath(resourcePath: string): Promise<any> {
        try {
            // @ts-ignore
            // 动态加载模块
            const module = await import(resourcePath);

            // 假设模块默认导出类，直接实例化
            if (module && module.default) {
                return new module.default();
            }

            // 如果没有默认导出，则尝试按命名导出处理
            const className = resourcePath.split("/").pop(); // 获取最后的类名
            if (className && module[className]) {
                return new module[className]();
            }

            throw new Error(`Class not found in module at ${resourcePath}`);
        } catch (error) {
            console.error(`Failed to load module at ${resourcePath}: ${error.message}`);
            return null;
        }
    }

    /*
        // @ts-ignore
        import("db://assets/Hotfix/Net/pb.js").then((obj) => {
            console.log("-----Start---------");
            try {
                // @ts-ignore
                let pb = obj.default.pb
                let main = new pb.Net_Login_LoginReq();
                main.DeviceId ="sss"

                this.EnterGame().catch(()=>{});
            } catch (e) {
                console.error("加载pb => Error " + e.Message + " 堆栈 " + e.StackTrace)
                return
            }

        }).catch((error) => {
            console.error("Error loading HotfixMain 热更新代码库里报错::", error);
        });

        * */

    /**
     * 动态加载模块并实例化指定的类
     * @param modulePath 模块路径，类似 "db://assets/Hotfix/Themes/Theme10001/ThemeConfig10001"
     * @param className 类名，例如 "ThemeConfig10001"
     */
    /*
    static async GetClassInstance(modulePath: string, className: string): Promise<any> {
        try {
            // 动态导入模块
            const module = await import(modulePath);

            // 从模块中找到对应的类
            const TargetClass = module[className];
            if (!TargetClass) {
                throw new Error(`Class "${className}" not found in module: ${modulePath}`);
            }

            // 实例化类
            return new TargetClass();
        } catch (error) {
            console.error(`Error loading module or creating instance: ${error.message}`);
            return null;
        }
    }
    */
    // 定义一个泛型方法，用于接收任意类并创建其实例
    public static CreateInstance<T>(ClassType: new (...args: any[]) => T, ...args: any[]): T {
        // 使用 new 创建传入类的实例
        return new ClassType(...args);
    }
}