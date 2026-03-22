import {TimerManager} from "db://assets/Hotfix/pkg/Updater/TimerManager";
import {List} from "db://assets/Hotfix/pkg/utils/List";

export class UpdateManager{
    private static instance: UpdateManager;
    private m_timerManager: TimerManager;
    private UpdateMsglist: List<()=>void>;
    private LateUpdateMsglist: List<() => void>;
    private FixedUpdateMsglist: List<() => void>;
    public static get Instance() :UpdateManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {
        this.m_timerManager = TimerManager.Instance
    }
    public Startup():void {
        this.Dispose();
        this.UpdateMsglist = new List<()=>void>()
        this.LateUpdateMsglist = new List<()=>void>()
        this.FixedUpdateMsglist = new List<()=>void>()

        this.m_timerManager.UpdateHandle()
    }

    public Dispose():void {
        if (this.UpdateMsglist != null)
        {
            this.UpdateMsglist.Clear();
        }
        if (this.LateUpdateMsglist != null)
        {
            this.LateUpdateMsglist.Clear();
        }
        if (this.FixedUpdateMsglist != null)
        {
            this.FixedUpdateMsglist.Clear();
        }

        this.UpdateMsglist = null;
        this.LateUpdateMsglist = null;
        this.FixedUpdateMsglist = null;
    }

    public Update(deltaTime:any,unscaledDeltaTime:any):void{
        this.m_timerManager.UpdateHandle();
        if (this.UpdateMsglist != null && this.UpdateMsglist.Count >0)
        {
            this.UpdateMsglist.ForEach((callback) =>
            {
                if (callback != null)
                {
                    callback();
                }
            });
        }
    }
    //延迟更新
    public LateUpdate():void {
        this.m_timerManager.UpdateHandle();
        if (this.LateUpdateMsglist != null && this.LateUpdateMsglist.Count >0)
        {
            this.LateUpdateMsglist.ForEach((callback) =>
            {
                if (callback != null)
                {
                    callback();
                }
            });
        }
    }

    public FixedUpdate():void{
        this.m_timerManager.UpdateHandle();
        if (this.FixedUpdateMsglist != null && this.FixedUpdateMsglist.Count >0)
        {
            this.FixedUpdateMsglist.ForEach((callback) =>
            {
                if (callback != null)
                {
                    callback();
                }
            });
        }
    }

    //-- 添加Update更新
    public AddUpdate(e_listener:()=>void){
        this.UpdateMsglist.Add(e_listener);
    }
    //-- 添加LateUpdate更新
    public AddLateUpdate(e_listener:()=>void){
        this.LateUpdateMsglist.Add(e_listener);
    }
    //-- 添加FixedUpdate更新
    public AddFixedUpdate(e_listener:()=>void){
        this.FixedUpdateMsglist.Add(e_listener);
    }

    //-- 移除Update更新
    public RemoveUpdate(e_listener:()=>void){
        this.UpdateMsglist.Remove(e_listener);
    }
    //-- 移除LateUpdate更新
    public RemoveLateUpdate(e_listener:()=>void){
        this.LateUpdateMsglist.Remove(e_listener);
    }
    //-- 移除FixedUpdate更新
    public RemoveFixedUpdate(e_listener:()=>void){
        this.FixedUpdateMsglist.Remove(e_listener);
    }

}