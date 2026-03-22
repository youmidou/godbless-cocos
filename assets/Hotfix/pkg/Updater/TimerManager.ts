import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Application} from "db://assets/Scripts/GameEngine/Application";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {List} from "db://assets/Hotfix/pkg/utils/List";
import * as cc from 'cc';
import {Time} from "db://assets/Hotfix/pkg/utils/Time";
/**
 *
 -- 定时管理器
 -- added by yh @ 2024-12-02 11:13
 -- 注意：辉哥提醒这里负责管理 上层逻辑 所有 定时 延迟
 --稳定可靠不要动
 */
export class TimerManager{
    private static instance: TimerManager;
    //-- 定时器列表
    private __update_timer: List<GTimer>;
    private __update_toadd:List<GTimer>;
    private __lateupdate_toadd: List<GTimer>;
    private __fixedupdate_toadd: List<GTimer>;

    //-- 定时器缓存
    private __pool: List<GTimer>;

    //-- 全局秒表


    public static get Instance() :TimerManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {
        this.__update_timer = new List<GTimer>();
        this.__update_toadd = new List<GTimer>();
        this.__lateupdate_toadd = new List<GTimer>();
        this.__fixedupdate_toadd =new List<GTimer>();

        this.__pool = new List<GTimer>();
    }
    //-- 延后回收定时器，必须全部更新完毕再回收，否则会有问题
    private DelayRecycle(timers:List<GTimer>):void{
        let timer:GTimer  = null;
        for (let i:number = 0; i < timers.Count; i++)
        {
            timer = timers.Get(i);
            if (timer.IsOver())
            {
                timer.Stop();
                //this.__pool.Add(timer);
                timers.Remove(timer);
            }
        }
    }
    //-- Update回调
    public UpdateHandle():void {
        let timer:GTimer ;
        //-- 更新定时器
        for (let i:number = 0; i < this.__update_toadd.Count; i++)
        {
            timer = this.__update_toadd.Get(i);
            this.__update_timer.Add(timer);
            this.__update_toadd.Remove(timer);
        }

        for (let i:number = 0; i < this.__update_timer.Count; i++)
        {
            timer = this.__update_timer.Get(i);
            if(timer !=null){
                timer.Update(false);
            }
        }

        this.DelayRecycle(this.__update_timer);
    }
    //-- LateUpdate回调 延迟更新
    public LateUpdateHandle(){
        //回头实现。。。。
    }
    public Dispose() {

    }
    private InnerGetTimer(delay:number,func:()=>void|null,one_shot:boolean = false,use_frame:boolean = false,unscaled:boolean = false):GTimer{
        let timer:GTimer = new GTimer(delay, func,one_shot, use_frame, unscaled)
        return timer
    }
    /*
        获取Update定时器
     * delay:延迟时间 s秒;
     * func:回调函数;obj:回传对象;
     * one_shot:默认false无限次数，true只执行一次;
     * use_frame:默认false为秒定时器，true是帧定时器;
     * unscaled:默认false 使用deltaTime计时，true:采用unscaledDeltaTime计时;
     列子:
        let tt:GTimer = TimerManager.Instance.GetTimer(3, () => {
            Log4.Log("sssss")
        });
        tt.Start()
     * */
    public GetTimer(delay:number,func:()=>void|null,one_shot:boolean = false,use_frame:boolean = false,unscaled:boolean = false):GTimer {
        let timer:GTimer = this.InnerGetTimer(delay, func, one_shot, use_frame, unscaled);
        this.__update_toadd.Add(timer);
        return timer
    }


    public Startup():void {

    }

    public RemoveCountdown():void {

    }
}

//=================================================================================================================================
//=================================================================================================================================

/**
 --[[
 -- 定时器
 -- added by yh @ 2023-1-28
 -- 注意：
 -- 1、定时器需要暂停使用pause、恢复使用resume
 -- 2、定时器使用stop停止，一旦停止逻辑层脚本就应该将引用置空，因为它随后会被管理类回收，引用已经不再正确
 --]]
 */
export class GTimer{
    private delay:number;
    private func:()=>void;
    private obj:object;
    private one_shot:boolean;
    private use_frame:boolean;
    private unscaled:boolean;
    private started:boolean=false;
    private left:number;
    private over:boolean=false;
    private obj_not_nil:boolean;
    private start_frame_count:number;
    // 构造函数
    constructor(delay:number,func:()=>void,one_shot:boolean,use_frame:boolean,unscaled:boolean) {
        this.Init(delay, func, one_shot, use_frame, unscaled);
    }

    private Init(delay: number, func: () => void, one_shot: boolean, use_frame: boolean, unscaled: boolean) {
        UIUtil.Assert( delay >= 0,"delay must >=0");
        UIUtil.Assert( func!=null,"need a func");
        //-- 时长，秒或者帧
        this.delay = delay;
        //-- 回调函数
        this.func = func;
        //-- 回传对象，一般作为回调函数第一个this参数
        //this.obj = obj;
        //-- 是否是一次性计时
        this.one_shot = one_shot;
        //-- 是否是帧定时器，否则为秒定时器
        this.use_frame = use_frame;
        //-- 使用deltaTime计时，还是采用unscaledDeltaTime计时
        this.unscaled = unscaled;
        //-- 是否已经启用
        this.started = false;
        //-- 倒计时
        this.left = delay;
        //-- 是否已经结束
        this.over = false;
        //-- 传入对象是否为空
        this.obj_not_nil = this.obj != null ? true : false;
        //--Logger.Log("Timer add obj_not_nil " .. tostring(this.obj_not_nil))
        //-- 启动定时器时的帧数
        this.start_frame_count = Time.frameCount //UnityEngine.Time.frameCount;
    }

    public Update(is_fixed:boolean){
        if (!this.started || this.over)
        {
            return;
        }
        let timeup:boolean = false;
        if (this.use_frame)
        {
            //-- TODO：这里有个经常会落后一帧的问题，一般出现在协程当中--当协程启用另外的协程时
            //-- 协程不做精确定时，一般用于异步等待或者分帧操作，所以这里暂时没有什么影响，后面看是否需要修改
            timeup = (Time.frameCount >= this.start_frame_count + this.delay);
        }
        else
        {
            let delta:number;
            if (is_fixed)
            {
                delta = Time.fixedDeltaTime;
            }
            else
            {
               delta = !this.unscaled ? Time.deltaTime : Time.unscaledDeltaTime;
            }

            this.left = this.left - delta;
            timeup = (this.left <= 0);
        }

        if (timeup){
            if (this.func != null){
                if (!this.one_shot)
                {
                    if (!this.use_frame)
                    {
                        //-- 说明：必须把上次计时“欠下”的时间考虑进来，否则会有误差
                        this.left = this.delay + this.left;
                    }
                    this.start_frame_count = Time.frameCount;
                }
                else
                {
                    this.over = true;
                }

                //Log4.Log("Timer up callback obj " + table.dump(self.target.obj, nil, 10) + " " + self.delay);
                try
                {
                    if (this.obj_not_nil)
                    {
                        this.func();
                    }
                    else
                    {
                        this.func();
                    }
                }
                catch (e) //Exception
                {
                   let err = e.Message;
                    this.over = true;

                    Log4.LogError(err+  " "+this.func.toString()+" e.StackTrace=>"+e.StackTrace);
                }

            }
        }

    }
    //-- 启动计时
    public Start(){
        if (this.over)
        {
            Log4.LogError("You can't start a overed timer, try add a new one!");
        }
        if (!this.started)
        {
            this.left = this.delay;
            this.started = true;
            this.start_frame_count = Time.frameCount;
        }
    }

    //-- 暂停计时
    public Pause():void
    {
        this.started = false;
    }
    //-- 恢复计时
    public Resume():void
    {
        this.started = true;
    }
    //-- 停止计时
    public Stop():void
    {
        this.left = 0;
        this.one_shot = false;
        this.func = null;
        this.obj = null;
        this.use_frame = false;
        this.unscaled = false;
        this.started = false;
        this.over = true;
    }

    //-- 复位：如果计时器是启动的，并不会停止，只是刷新倒计时
    public Reset(interval:number):void
    {
        if (interval != null)
        {
            this.delay = interval;
            this.left = this.delay;
        }
        else
        {
            this.left = this.delay;
        }

        //this.start_frame_count = UnityEngine.Time.frameCount;
    }

    //-- 是否已经完成计时
    public IsOver():boolean
    {
        if (this.func == null)
        {
            return true;
        }

        if (this.obj_not_nil && this.func == null)
        {
            return true;
        }
        return this.over;
    }


}