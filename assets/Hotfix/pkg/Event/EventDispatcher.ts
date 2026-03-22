import {Dictionary} from "db://assets/Hotfix/pkg/utils/Dictionary";
import {ECmdEvent} from "db://assets/Hotfix/pkg/Event/ECmdEvent";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {List} from "db://assets/Hotfix/pkg/utils/List";
/**
 *
 -- 事件派发
 -- added by yh @ 2024-12-24
 -- 注意：局部事件派发
 */
export class EventDispatcher{
    private cache_events: Dictionary<ECmdEvent,List<(data:any)=>void>> = new Dictionary<ECmdEvent,List<(data:any)=>void>>();
    constructor() {
    }
    //添加事件
    public AddListener(cmd:ECmdEvent,fun:((data: any | null) => void),self:any):void{
        UIUtil.Assert(!UIUtil.IsNullOrEmpty(cmd.toString()),"cmd need to pass value!");
        UIUtil.Assert(fun != null,"fun need to pass value!");
        if(self!=null){
            fun.bind(self)
        }
        let list_events = this.cache_events.Get(cmd)
        if(list_events!=null){
            list_events = new List<(data:any)=>void>();
            this.cache_events.Add(cmd,list_events)
            list_events.Add(fun);
        }else{
            list_events.Add(fun);
        }
    }
    //--派发
    public Broadcast(cmd:ECmdEvent,args:object=null):void{
            //一对多
        let list_events:List<(data:any)=>void> = this.cache_events.Get(cmd)
        if(list_events!=null){
            list_events.ForEach((_fun)=>{
                _fun(args);
            })
        }

    }
    //卸载指定事件
    public RemoveListener(cmd:ECmdEvent,e_listener:((data: any | null) => void)=null,self:any=null):void{
        let list_events:List<(data:any)=>void> = this.cache_events.Get(cmd)
        if(self!=null){
            e_listener.bind(self)
        }
        if(list_events==null){
            return
        }
        //卸载指定
        list_events.ForEach((item)=>{
            if(item === e_listener){
                list_events.Remove(item);
            }
        })
        if(list_events.Count <=0){
            this.cache_events.Remove(cmd)
        }


    }
    //卸载类型所有事件
    public RemoveListenerAll(cmd:ECmdEvent){
        let list_events:List<(data:any)=>void> = this.cache_events.Get(cmd)
        if(list_events==null){
            return
        }
        //卸载所有
        list_events.Clear()
        this.cache_events.Remove(cmd)
    }

    public Delete(){
        if (this.cache_events != null)
        {
            this.cache_events.Clear();
            this.cache_events = null;
        }
    }
}