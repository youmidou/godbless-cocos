import * as cc from 'cc';
export class GPSManager {

    /*
    // 获取位置信息
    public static GetLocation(): Promise<{ latitude: number; longitude: number }> {
        return new Promise((resolve, reject) => {
            if (cc.sys.os === cc.sys.OS.ANDROID) {
                console.log("调用 Android 原生 GPS");

                if (window["jsb"] && jsb.reflection) {
                    try {
                        const location = jsb.reflection.callStaticMethod(
                            "com/yourcompany/YourGPSHelper", // 替换为你的 Java 类路径
                            "getLocation",
                            "()Ljava/lang/String;"
                        );
                        const { latitude, longitude } = JSON.parse(location);
                        resolve({ latitude, longitude });
                    } catch (err) {
                        reject(err);
                    }
                } else {
                    reject("Android 不支持 jsb.reflection");
                }
            } else if (cc.sys.os === cc.sys.OS.IOS) {
                console.log("调用 iOS 原生 GPS");
                if (window["jsb"] && jsb.reflection) {
                    try {
                        const location = jsb.reflection.callStaticMethod(
                            "YourGPSHelper", // 替换为你的 Objective-C 类名
                            "getLocation"
                        );
                        const { latitude, longitude } = JSON.parse(location);
                        resolve({ latitude, longitude });
                    } catch (err) {
                        reject(err);
                    }
                } else {
                    reject("iOS 不支持 jsb.reflection");
                }
            } else {
                reject("当前平台不支持 GPS 定位");
            }
        });
    }
    */
}
