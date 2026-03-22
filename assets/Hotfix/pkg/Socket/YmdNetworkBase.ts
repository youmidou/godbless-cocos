import {MessageQueue} from "db://assets/Hotfix/pkg/Socket/MessageQueue";
import {List} from "db://assets/Hotfix/pkg/utils/List";
export enum SOCKSTAT{
    CLOSED = 0,
    READYFORCONNECT,//准备连接
    CONNECTING,//连接
    CONNECTED,//
    OUTOFTIMECLOSED,//超出时间关闭
}
//SocketStatus
export enum SocketStatus
{
    SocketWriteException_1 = -1,//套接字写入异常
    SocketWriteException_2 = -2,//套接字写入异常
    SocketReadErrorExcept_3 = -3,//套接字写入异常
    SocketReadErrorExcept_4 = -4,//套接字写入异常
    SocketErrorNormal = -5,//套接字错误正常

    SocketSelectError = -6,//套接字选择错误
    SocketNULLPointError = -7,//套接字 NULL 点错误
    SocketWriteErrorCode = -8,//套接字写入错误代码
    SocketIsNoConnected = -9,//套接字未连接
    SocketConnecting = -10,//套接字连接
    SocketConnectOutOfTime = -11,//套接字连接超时
    SocketOk = 0,//套接字Ok
}
/**
 *
 * author yh 2024.12.02
 * */
export class YmdNetworkBase {
    public OnConnect: (sender: object, result: number, msg: string) => void;
    public OnClosed: (sender: object, result: number, msg: string) => void;
    public OnPoorNetWarning:(sender: object, result: number, msg: string) => void;
    public ReceivePkgHandle: (msgId:number,receive_bytes: Uint8Array) => void;

    private mStatus: SOCKSTAT;
    private mMaxBytesOnceSent: number;
    private mMaxReceiveBuffer: number;
    private mTempMsgList: List<Uint8Array>;

    constructor(maxBytesOnceSent:number = 1024 * 512,maxReceiveBuffer:number = 1024 * 1024 * 2) {
        this.mStatus = SOCKSTAT.CLOSED

        this.mMaxBytesOnceSent = maxBytesOnceSent;
        this.mMaxReceiveBuffer = maxReceiveBuffer;
        this.mTempMsgList = new List<Uint8Array>();

    }
}