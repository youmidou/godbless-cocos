import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {SocketStatus, YmdNetworkBase} from "db://assets/Hotfix/pkg/Socket/YmdNetworkBase";
import {MessageQueue} from "db://assets/Hotfix/pkg/Socket/MessageQueue";
import {Message, MessageCodec, PBHelper} from "db://assets/Hotfix/pkg/Socket/codec/MessageCodec";
import {ByteBuffer} from "db://assets/Hotfix/pkg/Socket/ByteBuffer";
import {Packet, PacketCodec, PacketType} from "db://assets/Hotfix/pkg/Socket/codec/PacketCodec";
/**
 * 对应 Go 的 HandshakeClientData 结构体
 * 客户端握手时携带的基础信息（JSON 字段首字母大写，与 Go tag 严格对齐）
 */
export class HandshakeClientData {
    // 字段名与 Go 的 JSON tag 完全一致（首字母大写）
    Platform: string ="web";          // 平台标识（如 web/ios/android）
    LibVersion: string ="1.0.1";      // 客户端 SDK 版本
    ClientVersion: string ="1.0.1";   // 客户端版本
    ClientBuildNumber: string ="1";   // 客户资源版本号
}

/**
 * 对应 Go 的 HandshakeData 结构体
 * 客户端握手的完整数据结构
 * - Sys: 应用无关的系统级信息（JSON tag 首字母大写）
 * - User: 应用自定义的用户信息（可选，对应 Go 的 omitempty）
 */
export class HandshakeDataReq {
    Sys: HandshakeClientData = new HandshakeClientData();
    // 对应 Go 的 map[string]interface{}，? 表示可选（omitempty）
    User?: Record<string, any>;
}
// 握手服务器数据
export class HandshakeServerData{
    Heartbeat:number             //心跳间隔
    Dict:Record<string, number>; //消息字典
    Serializer :string;          //序列化器
}
export class HandshakeDataRet{
    Code :number;                //200:成功 400:失败
    Sys  :HandshakeServerData;
}

export class YmdWSClient {
    public OnConnect:(sender: object, result: number, msg: string) => void;
    public OnClosed:(sender: object, result: number, msg: string) => void;
    public OnPoorNetWarning:(sender: object, result: number, msg: string) => void;
    public ReceivePkgHandle:(msgId:number,receive_bytes: Uint8Array) => void;

    private handshakeData: HandshakeDataReq;//链接游戏服务器的握手结构
    private ws: WebSocket | null = null;
    private connectionTimeout:number =30;//链接超时
    private IpAddress: string;
    private byteSendBuffer: Uint8Array;//发送
    private byteReceiveBuffer: Uint8Array;//接收
    private maxBytesOnceSent: number = 1024 * 1024 * 2;//最大发送
    private maxReceiveBuffer: number = 1024 * 1024 * 10;//最大接收
    private mIp: string;
    private mPort: number;
    private messageQueue: MessageQueue<Uint8Array>;

    constructor(connectionTimeout:number=30) {
        this.connectionTimeout = connectionTimeout;
        //this.packetCodec =
        this.messageQueue = new MessageQueue();

        this.handshakeData = new HandshakeDataReq();

    }
    public SetIpAddress(ipAddress: string){
        this.IpAddress = ipAddress;
    }
    public SetHandshakeData(handshakeData:HandshakeDataReq) {
        this.handshakeData = handshakeData
    }

    public Connect():void{
        //IpAddress:string
        //this.IpAddress = IpAddress
        console.log("开始连接服务器: " + this.IpAddress);
        //const url = "ws://localhost:8080";  //ws://localhost:8080 替换为你的服务器地址和端口
        let url = UIUtil.Format("ws://%s",this.IpAddress)
        this.ws = new WebSocket(url);
        this.ws.binaryType = "arraybuffer";

        this.byteSendBuffer = new Uint8Array(this.maxBytesOnceSent)
        this.byteReceiveBuffer = new Uint8Array(this.maxReceiveBuffer)

        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        return null
    }

    public IsConnected():boolean {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            return true;
        }
        return false;
    }

    // 处理连接打开事件
    private onOpen(event: Event) {
        console.log("Connected to server");
        //this.SendHandshake() //发送握手消息
        if(this.OnConnect!=undefined ){
            this.OnConnect(this,SocketStatus.SocketOk,"Connection successful")
        }

    }
    // 处理收到消息事件
    private onMessage(event: MessageEvent):void{
        let bytes:Uint8Array = new Uint8Array(event.data);
        if(bytes.length==0){
            Log4.LogError("Net收到空长度消息 错误....")
            return
        }
        if (bytes.length < 4) {
            Log4.LogError("包数据长度不足");
            return;
        }

        try {
            let packets:Packet = PacketCodec.Decode(bytes) //packetData
            this.ProcessPacket(packets);
        } catch (error) {
            Log4.LogError("onMessage->处理包数据错误=>" + error);
        }
    }
    //处理包
    private ProcessPacket(p:Packet): void {
        switch(p.Type) {
            case PacketType.Handshake://握手
                try {
                    let ret = this.JsonBinaryToStruct<HandshakeDataRet>(p.Data)
                    if(ret.Code ==200){//成功
                        //this.SendHandshakeAck() //握手确认
                    }else if(ret.Code==400){
                        //握手失败
                    }

                } catch (error) {
                    Log4.LogError("ProcessHandshake 失败=>" + error);
                }
                break;
            case PacketType.Data:
                let m:Message = MessageCodec.Decode(p.Data)
                this.processMessage(m)
                break;
            case PacketType.Heartbeat:
                Log4.Log("服务器返回-->心跳返回");
                break;
            case PacketType.Kick:
                Log4.Log("被服务器主动->断开");
                break;

        }
        /*
        // 读取消息ID（4字节）
        let msgId = packetData[0] << 24 |
            packetData[1] << 16 |
            packetData[2] << 8 |
            packetData[3];
        // 消息内容（剩余字节）
        let msgDataBytes = packetData.slice(4);
        var data:Message = new Message();
        data.MsgId = msgId
        try {
            this.ReceivePkgHandle(msgId, msgDataBytes);
        } catch (error) {
            Log4.LogError("onMessage->ReceivePkgHandle 消息逻辑处理错误=>" + error);
        }
        */
    }
    //处理消息
    private processMessage(m:Message):void{
        this.ReceivePkgHandle(m.MsgId, m.MsgData)
        //let msgData = PBHelper.Decode(m.MsgId,m.MsgData)
        //console.log("msgData s% ",msgData)
    }
    // 处理错误事件
    private onError(event: Event) {
        console.error("tcp连接错误:%s %s",this.IpAddress,event);
        this.OnClosed(this,SocketStatus.SocketErrorNormal,"Connection fail")
    }

    // 处理连接关闭事件 RiceBeanTCPClient
    private onClose(event: CloseEvent) {
        console.log("Connection closed %s %s",this.IpAddress,event);
        this.OnClosed(this,SocketStatus.SocketErrorNormal,"Connection fail")
    }
    //--------------------------------------------------------------------------
    //-------握手验证------------------------------------------------------
    //发送握手
    private SendHandshake(){
        //let msg_bytes:Uint8Array = new Uint8Array(0);
        let msg_bytes:Uint8Array = this.StructToJsonBinary(this.handshakeData)
        let packet_bytes:Uint8Array = PacketCodec.Encode(PacketType.Handshake,msg_bytes)
        this.Send(packet_bytes)

    }
    //发送握手确认
    private SendHandshakeAck(){
        let msg_bytes:Uint8Array = new Uint8Array(0);
        let packet_bytes:Uint8Array = PacketCodec.Encode(PacketType.HandshakeAck,msg_bytes)
        this.Send(packet_bytes)
    }
    //发送心跳
    private SendHeartbeat(){
        let msg_bytes:Uint8Array = new Uint8Array(0);
        let packet_bytes:Uint8Array = PacketCodec.Encode(PacketType.Heartbeat,msg_bytes)
        this.Send(packet_bytes)
    }
//--------------------------------------------------------------------------
    // 发送消息
    public SendMessage(msgId:number,msgData:any):void {
        let msg_bytes: Uint8Array = MessageCodec.Encode(msgId, msgData);
        let packet_bytes:Uint8Array = PacketCodec.Encode(PacketType.Data,msg_bytes)

        this.Send(packet_bytes)
    }
    // 发送消息
    private Send(message: ArrayBuffer):void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
        }
    }


    public SetGamePaused(pause: boolean):void {

    }

    public Dispose():void {

    }

    public SetTickParam(number: number, number2: number) {

    }
    public StructToJsonBinary(struct: any) :Uint8Array{
        const jsonStr:string = JSON.stringify(struct);
        // 原生 TextEncoder 实例（默认 UTF-8）
        const encoder = new TextEncoder();
        let msg_bytes:Uint8Array  = encoder.encode(jsonStr);
        // 3. 反序列化（接收 Go 服务端返回的 JSON）
        //const receivedData: HandshakeData = JSON.parse(jsonStr);
        return msg_bytes
    }
    public JsonBinaryToStruct<T>(buffer: Uint8Array) :T{
        try {
            // 1. Uint8Array → UTF-8 解码 JSON 字符串
            const decoder = new TextDecoder();
            const jsonStr = decoder.decode(buffer);
            // 2. JSON 字符串 → 原始对象
            const rawData = JSON.parse(jsonStr);
            return rawData as T;
        } catch (err) {
            throw new Error(`JSON 二进制转结构体失败：${(err as Error).message}`);
        }
    }
    /**
     * 字符串转 Uint8Array（UTF-8 编码，跨端通用）
     * @param str 待转换的字符串
     * @returns UTF-8 编码的 Uint8Array
     */
    public StringToUint8Array(str: string): Uint8Array {
        // 原生 TextEncoder 实例（默认 UTF-8）
        const encoder = new TextEncoder();
        return encoder.encode(str);
    }
    /*
    private ReadInt32(bytes: Uint8Array, rpos: number): number {
        return ((bytes[rpos + 3] & 0xFF)) + ((bytes[rpos + 2] & 0xFF) << 8) + ((bytes[rpos + 1] & 0xFF) << 16) + ((bytes[rpos] & 0xFF) << 24);
    }
    private WriteInt32(bytes: Uint8Array, wpos: number, value: number): void {
        bytes[wpos] = value >> 24;
        bytes[wpos + 1] = value >> 16;
        bytes[wpos + 2] = value >> 8;
        bytes[wpos + 3] = value;
    }*/
}