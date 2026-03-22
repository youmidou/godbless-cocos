import { _decorator, Component, Node,find,game,sys,director,resources,Prefab} from 'cc';
const { ccclass, property } = _decorator;
export class Application{
    static targetFrameRate: number;
    private static OperatingSystem: any;
    private static platform: any;
    

    constructor() {
        Application.OperatingSystem = sys.os
        Application.platform = sys.platform
    }
    //获取总帧数
    public static GetTotalFrames():number{
        return director.getTotalFrames()
    }

    // 等待指定的帧数
    public static async WaitForFrames_(frames: number,signal: AbortSignal=null): Promise<void> {
        return new Promise((resolve,reject) => {
            if(signal && signal.aborted){
                reject(new DOMException('Operation was aborted', 'AbortError'));
            }
            let count = 0;
            function onFrame() {
                count++;
                if (count >= frames) {
                    resolve();
                } else {
                    requestAnimationFrame(onFrame);
                }
            }
            requestAnimationFrame(onFrame);
        });
    }
}