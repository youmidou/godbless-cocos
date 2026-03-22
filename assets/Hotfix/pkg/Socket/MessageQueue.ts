import {List} from "db://assets/Hotfix/pkg/utils/List";

export class MessageQueue<T> {
    private items: T[] = [];
    constructor(){

    }
    // 入队
    public Enqueue(item: T): void {
        this.items.push(item);
    }

    // 出队（返回队首元素并移除）
    public Dequeue(): T | undefined {
        return this.items.shift();
    }

    // 查看队首元素（不移除）
    public Peek(): T | undefined {
        return this.items[0];
    }

    // 队列长度
    public Size(): number {
        return this.items.length;
    }

    // 判断队列是否为空
    public IsEmpty(): boolean {
        return this.items.length === 0;
    }

    // 清空队列
    public Clear(): void {
        this.items = [];
    }
}

/*
export class MessageQueue implements IMessageQueue{
    //let List mMessageList
    private mMessageList: List<Uint8Array>;
    constructor(capacity:number =10) {
        this.mMessageList = new List<Uint8Array>()
    }
    public GetMsgList(): List<Uint8Array> {
        return this.mMessageList;
    }
    public Add(o:Uint8Array):void{
        this.mMessageList.Add(o);
    }
    public MoveTo(bytesList: List<Uint8Array>): void {
        bytesList.AddRange(this.mMessageList.ToArray());
        this.mMessageList.Clear();
    }
    public Empty(): boolean {
        return this.mMessageList.Count <= 0;
    }

    public Dispose(){
        this.mMessageList.Clear()
        this.mMessageList=null
    }
}
*/