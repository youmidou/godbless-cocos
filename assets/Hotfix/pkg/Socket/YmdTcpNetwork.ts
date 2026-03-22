import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {SocketStatus, YmdNetworkBase} from "db://assets/Hotfix/pkg/Socket/YmdNetworkBase";
import {MessageQueue} from "db://assets/Hotfix/pkg/Socket/MessageQueue";
import {Message} from "db://assets/Hotfix/pkg/Socket/codec/MessageCodec";



export class YmdTcpNetwork extends YmdNetworkBase{
    private ws: WebSocket | null = null;
    private IpAddress: string;
    private byteSendBuffer: Uint8Array;//发送
    private byteReceiveBuffer: Uint8Array;//接收
    private receiveBuffer: Uint8Array | null = null; // 接收缓冲区
    private maxBytesOnceSent: number = 1024 * 1024 * 2;//最大发送
    private maxReceiveBuffer: number = 1024 * 1024 * 10;//最大接收
    private mIp: string;
    private mPort: number;
    private messageQueue: MessageQueue<Uint8Array>;

    constructor() {
        super()
        //this.packetCodec =
        this.messageQueue = new MessageQueue();
    }
    public SetHostPort(ip: string, port: number) {
        this.mIp = ip;
        this.mPort = port;
    }

    public Connect():void{ //IpAddress:string
        //this.IpAddress = IpAddress
        this.IpAddress = UIUtil.Format("ws://%s:%s",this.mIp,this.mPort)
        console.log("开始连接服务器: " + this.IpAddress);
        //const url = "ws://localhost:8080";  //ws://localhost:8080 替换为你的服务器地址和端口
        this.ws = new WebSocket(this.IpAddress);
        this.ws.binaryType = "arraybuffer";

        this.byteSendBuffer = new Uint8Array(this.maxBytesOnceSent)
        this.byteReceiveBuffer = new Uint8Array(this.maxReceiveBuffer)
//
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClose.bind(this);
    }

    public IsConnected():boolean {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            return true;
        }
        return false;
    }
//--------------------------------------------------------------------------
    // 处理连接打开事件
    private onOpen(event: Event) {
        console.log("Connected to server");
        //this.SendMessage("Hello from Cocos Creator");
        this.OnConnect(this,SocketStatus.SocketOk,"Connection successful")
    }
    // 处理收到消息事件
    private onMessage(event: MessageEvent):void{
        let bytes:Uint8Array = new Uint8Array(event.data);
        if(bytes.length==0){
            Log4.LogError("Net收到空长度消息 错误....")
            return
        }

        // 将新数据添加到接收缓冲区
        this.AppendToReceiveBuffer(bytes);
        
        // 处理缓冲区中的完整包
        this.ProcessReceiveBuffer();
    }

    private AppendToReceiveBuffer(newBytes: Uint8Array): void {
        if (!this.receiveBuffer) {
            this.receiveBuffer = new Uint8Array(0);
        }
        
        // 合并新数据到缓冲区
        let combined = new Uint8Array(this.receiveBuffer.length + newBytes.length);
        combined.set(this.receiveBuffer);
        combined.set(newBytes, this.receiveBuffer.length);
        this.receiveBuffer = combined;
    }

    private ProcessReceiveBuffer(): void {
        if (!this.receiveBuffer || this.receiveBuffer.length < 4) {
            return; // 至少需要4字节的长度信息
        }

        let offset = 0;
        
        while (offset < this.receiveBuffer.length) {
            // 读取包长度（4字节）
            if (offset + 4 > this.receiveBuffer.length) {
                break; // 长度信息不完整，等待更多数据
            }

            let packetLength:number = this.receiveBuffer[offset] << 24 |
                             this.receiveBuffer[offset + 1] << 16 |
                             this.receiveBuffer[offset + 2] << 8 |
                             this.receiveBuffer[offset + 3];

            // 检查包是否完整
            if (offset + 4 + packetLength > this.receiveBuffer.length) {
                break; // 包不完整，等待更多数据
            }

            // 提取包内容
            let packetData:Uint8Array = this.receiveBuffer.slice(offset + 4, offset + 4 + packetLength);
            
            try {
                this.ProcessPacket(packetData);
            } catch (error) {
                Log4.LogError("处理包数据错误=>" + error);
            }

            offset += 4 + packetLength;
        }

        // 保留未处理的数据
        if (offset < this.receiveBuffer.length) {
            this.receiveBuffer = this.receiveBuffer.slice(offset);
        } else {
            this.receiveBuffer = new Uint8Array(0);
        }
    }

    private ProcessPacket(packetData: Uint8Array): void {
        if (packetData.length < 4) {
            Log4.LogError("包数据长度不足");
            return;
        }


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

    // 发送消息
    public SendMessage(message: ArrayBuffer):void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
        }
    }
    // 发送消息
    public Send(message: ArrayBuffer):void {
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