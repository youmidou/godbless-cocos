/*
* 消息包
* */

import {ByteBuffer} from "db://assets/Hotfix/pkg/Socket/ByteBuffer";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {MsgPendingData} from "db://assets/Hotfix/Net/GameNet";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";

/*
* 消息
* author yh
* */
export class Message{
    public MsgId: number;
    public MsgData: Uint8Array;
}

export class MessageCodec {
    //封装消息包 长度内容
    public static Encode(msgId:number,msgData:any):Uint8Array{
        try
        {
            let m:Message = new Message()
            m.MsgId = msgId
            m.MsgData = PBHelper.Encode(msgData)

            let buff:ByteBuffer = new ByteBuffer()
            buff.WriteInt32(msgId)
            buff.WriteBytes(m.MsgData)
            return buff.ToBytes()
        }
        catch (e)
        {
            Log4.LogError("MessageCodec->Encode 封装消息失败  :" + e);
        }
        return null
    }
    //解
    public static Decode(msg_Bytes:Uint8Array):Message{
        try {
            let buff:ByteBuffer = new ByteBuffer(msg_Bytes)
            let m:Message = new Message()
            m.MsgId = buff.ReadInt32()
            m.MsgData = buff.ToBytes()
            return m;
        } catch (error) {
            Log4.LogError("MessageCodec->Decode(msgDataBytes:Uint8Array) 处理失败=>" + error);
        }

    }
}
export class PBHelper {
    /**
     * 将 PB 对象编码为二进制数据
     * @param pbObject 传入的 PB 对象
     * @returns Uint8Array 编码后的二进制数据
     */
    public static Encode<T>(pbObject: T): Uint8Array {
        try {
            if (!pbObject || !pbObject.constructor || !pbObject.constructor["encode"]) {
                throw new Error("Invalid PB object: Ensure the object has an 'encode' method.");
            }
            return pbObject.constructor["encode"](pbObject).finish();
        }catch (e){
            Log4.LogError("PBHelper.Encode 编码类型失败 %s err:%s",pbObject.constructor.name,e.Message) //e.stack
        }
    }

    /**
     * 将二进制数据解码为 PB 对象
     * @param binaryData Uint8Array 的二进制数据
     * @param pbClass PB 类（例如 pb.pb.Login）
     * @returns 解码后的 PB 对象
     */
    public static Decode<T>(msgId:number,msgData: Uint8Array): T {
        let className:string =""
        let pbClass:any
        try {
            let cmdName:string = pb.pb.Cmd[msgId]
            className ="Net_"+cmdName+"Ret" //"pb.pb.Net_"+cmdName+"Ret"
            pbClass = pb.pb[className];  //eval(className); // 动态获取类引用
            //const instance = new pbClass(); // 实例化类
            if (!pbClass || !pbClass.decode) {
                throw new Error("Invalid PB class: Ensure the class has a 'decode' method.");
            }
            return pbClass.decode(msgData);
        }catch (e){
            const err = e as Error;
            Log4.LogError("PBHelper.Decode 解码类型失败 %d %s err:%s stack=>%s", msgId, className, err?.message ?? String(e), err?.stack);
        }
    }




}