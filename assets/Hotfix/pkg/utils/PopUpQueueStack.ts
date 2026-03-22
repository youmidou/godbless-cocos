/**
 * 弹窗队列栈
 * 专门针对 活动弹窗 关一个接着队列打开下一个弹窗
 * 窗口前后添加队列 链表
* added by yh @ 2023-02-09
* 队列栈
*/
export class PopUpQueueStack {

    //-- 入队（加到最前）
    public AddFront(data:PopupData):void{
        //this.deque.AddFirst(data);
    }
    //-- 入队（加到尾部）
    public EnQueue(data:PopupData):void{
        //this.deque.AddLast(data);
    }
    //-- 出队（头部数据）
    public DeQueue():PopupData{

        return null
    }
}

//弹窗数据
export class PopupData{
    ui_name: any;
    prefab: string;
    path: string;
    add_front: boolean; //添加到前面
    from_lobby: any;
    model_data: any;

}