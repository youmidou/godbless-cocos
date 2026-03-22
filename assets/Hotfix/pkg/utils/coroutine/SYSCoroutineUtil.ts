/*
 -- added by yh @ 2024-11-13
 -- SYSCoroutineUtil：重写 携程 SYS开头好记点
 -- 注意：
 -- 1、携程模块管理 如一个子游戏 的所有携程进行 统一删除停止 最下面列子
    async function _er(signal: AbortSignal) {
        console.log("1111")
        await SYSCoroutineUtil.waitForFrames(1,signal);
        SYSCoroutineUtil.StopCoroutine("theme10001");
        signal.aborted
        await SYSCoroutineUtil.WaitForSeconds(2,signal);
        console.log("3333333")
        await SYSCoroutineUtil.WaitUntil(() => {
            return true;
        },signal);
        await SYSCoroutineUtil.WaitWhile(() => {
            return false;
        },signal);
        console.log("4444")
        await SYSCoroutineUtil.waitForSeconds(3,signal);
        console.log("55555")
    }
    SYSCoroutineUtil.StartCoroutine("theme10001", "11", _er);

 -- 2、场景loading的UI窗口这里统一管理，由于这个窗口很简单，更新进度数据时直接写Model层

  */
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";

export class SYSCoroutineUtil{
    //模块携程栈
    private static module_stack_list: Map<string, Map<string, { promise: Promise<any>, controller: AbortController }>> =
        new Map<string, Map<string, {promise: Promise<any>; controller: AbortController}>>()

    private static indexNum:number = 0
    constructor() {

    }
    /*
    async function _er(){
    }
    SYSCoroutineUtil.M_startCoroutine(_er.bind(this))
    * */
    public static M_startCoroutine<T>( _er: (signal: AbortSignal|null) => Promise<T>,self:object=null){
        if(_er ==null)return
        if(self!=null){
            _er = _er.bind(self)
        }
        //AbortController 是一个内置的 Web API，主要用于中止 fetch 请求，但也可以用来中止其他异步操作。
        const controller = new AbortController();
        _er(controller.signal).catch(e => {
            Log4.LogError("M_startCoroutine error:%s %s",e.Message,e.stack)
        });
    }
    /**
     * 启动协程
     * 功能描述：目的是解决模块携程的 整体 干掉
     * 注意: 使用StartCoroutine 必须要与StopCoroutine 成对 否则导致一直被引用
     * @param module_name 模块名
     * @param key 协程键值
     * @param _er 协程Promise
     */
    public static StartCoroutine<T>(module_name: string, key: string, asyncFunction: (signal: AbortSignal) => Promise<T>) {
        UIUtil.Assert(this.isNullOrEmpty(module_name), "StartCoroutine module_name is null");

        let module_stack = this.module_stack_list.get(module_name);
        if (!module_stack) {
            module_stack = new Map();
            this.module_stack_list.set(module_name, module_stack);
        }

        if (this.isNullOrEmpty(key)) {
            key = "Default_"+module_name+"_"+ this.indexNum;
            this.indexNum++;
        }

        if (module_stack.has(key)) {
            console.error(`StartCoroutine module_name=${module_name} key=${key} repeat !!! 已经有一个一样的`);
            return;
        }
        //AbortController 是一个内置的 Web API，主要用于中止 fetch 请求，但也可以用来中止其他异步操作。
        const controller = new AbortController();
        const { signal } = controller;
        const promise = asyncFunction(signal).catch(error => {
            if (error.name === 'AbortError') {
                console.log(`Coroutine aborted: module_name=${module_name} key=${key}`);
            } else {
                console.error(`Coroutine error in module_name=${module_name} key=${key}:`, error);
            }
            SYSCoroutineUtil.StopCoroutine(module_name,key)
        });
        module_stack.set(key, { promise, controller });

    }

    /**
     * 停止协程
     * @param module_name 模块名
     * @param key 协程键值（可选）
     */
    public static StopCoroutine(module_name: string, key: string = "") {
        UIUtil.Assert(!this.isNullOrEmpty(module_name), "StopCoroutine module_name is null");

        let module_stack = this.module_stack_list.get(module_name);
        if (module_stack) {
            if (!this.isNullOrEmpty(key)) {
                const entry = module_stack.get(key);
                if (entry) {
                    entry.controller.abort();
                    module_stack.delete(key);
                }
            } else {
                // 全部删除
                for (const entry of module_stack.values()) {
                    entry.controller.abort();
                }
               let xxx = module_stack.get(module_name)
                
                this.module_stack_list.delete(module_name);
            }
        }
    }

    private static isNullOrEmpty(str: string | null | undefined): boolean {
        return !str || str.trim().length === 0;
    }

    // 等待指定的帧数 await SYSCoroutineUtil.WaitForFrames(2) //等待一针
    public static async WaitForFrames(frames: number,signal: AbortSignal=null): Promise<void> {
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

    // 等待指定的秒数
    public static async WaitForSeconds(seconds: number,signal: AbortSignal=null): Promise<void> {
        return new Promise((resolve,reject) =>{
            const timeout = setTimeout(resolve, seconds * 1000);
            if(signal && signal.aborted){
                clearTimeout(timeout);
                reject(new DOMException('Operation was aborted', 'AbortError'));
            }
        });

    }

    // 等待直到条件为真
    public static async WaitUntil(condition: () => boolean,signal: AbortSignal=null): Promise<void> {
        return new Promise((resolve,reject) => {
            function checkCondition() {
                if(signal && signal.aborted){
                    reject(new DOMException('Operation was aborted', 'AbortError'));
                }
                if (condition()) {
                    resolve();
                } else {
                    requestAnimationFrame(checkCondition);
                }
            }
            requestAnimationFrame(checkCondition);
        });
    }

    // 等待直到条件为假
    public static async WaitWhile(condition: () => boolean,signal: AbortSignal=null): Promise<void> {
        return new Promise((resolve,reject) => {
            function checkCondition() {
                if(signal && signal.aborted){
                    reject(new DOMException('Operation was aborted', 'AbortError'));
                }
                if (!condition()) {
                    resolve();
                } else {
                    requestAnimationFrame(checkCondition);
                }
            }
            requestAnimationFrame(checkCondition);
        });
    }

}