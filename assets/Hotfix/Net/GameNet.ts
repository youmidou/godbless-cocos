

import { UIUtil } from "db://assets/Hotfix/pkg/UI/UIUtil";
import { Dictionary } from "db://assets/Hotfix/pkg/utils/Dictionary";
import { Log4 } from "db://assets/Hotfix/pkg/Log4/Log4";
import { GConfig } from "db://assets/Hotfix/Global/GConfig";
import { NetworkManager } from "db://assets/Hotfix/Modules/Connector/NetworkManager";
import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
import {MessageCodec, PBHelper} from "db://assets/Hotfix/pkg/Socket/codec/MessageCodec";
import {YmdTcpNetwork} from "db://assets/Hotfix/pkg/Socket/YmdTcpNetwork";
import {PacketCodec} from "db://assets/Hotfix/pkg/Socket/codec/PacketCodec";
import {YmdWSClient} from "db://assets/Hotfix/pkg/Socket/YmdWSClient";
/**
 * author yh
 * */
export class GameNet {
    private static instance: GameNet;
    private hallSocket: YmdWSClient;
    //监听消息
    private protocol_handler_register: Dictionary<number,(data: MsgPendingData)=>void> = new Dictionary<number,(data: MsgPendingData) => void>();
    private pending_message: Array<MsgPendingData> = [];
    public static get Instance(): GameNet {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance;
    }
    constructor() {}
    //注册协议消息
    public RegisterProtocolHandler(cmd: number, fun: (data: MsgPendingData) => void, self: object = null): void {
        //UIUtil.Assert(cmd !=0,"cmd need to pass value!");
        UIUtil.Assert(fun != null, "fun need to pass value!");
        UIUtil.Assert(self != null, "fun self is nil");
        if (self != null) {
            fun = fun.bind(self);
        } else {
        }
        if (!this.protocol_handler_register.Get(cmd)) {
            this.protocol_handler_register.Add(cmd, fun);
        } else {
            UIUtil.Assert(false, "cmd:" + cmd + " fun:" + fun.toString());
        }
    }
    //卸载协议消息
    public UnRegisterProtocolHandler(cmd: number, fun: (data: MsgPendingData) => void): void {
        if (this.protocol_handler_register.Get(cmd) != null) {
            this.protocol_handler_register.Remove(cmd);
        }
    }
    //-- 重新发送pending协议
    public ReSendPendingRequestToServer(): void {
        this.pending_message.forEach((data) => {
            GameNet.Instance.Send(data.MsgId, data.MsgData);
        });
    }
    //--心跳包
    public SetSocketOpt(): void {
        //--设置心跳最大次数 param1 单次计时 单位毫秒param2
        this.hallSocket.SetTickParam(4, 3000);
    }
    //host_ip: string,host_port: number,
    public Connect(
        ipAddress:string,
        on_connect: (sender: object, result: number, msg: string) => void,
        on_close: (sender: object, result: number, msg: string) => void
    ) {
        if (this.hallSocket == null) {
            this.hallSocket = new YmdWSClient(); //YmdTcpNetwork();
            this.hallSocket.ReceivePkgHandle = this.OnReceivePackage.bind(this);
        }
        this.hallSocket.OnConnect = on_connect;
        this.hallSocket.OnClosed = on_close;
        this.hallSocket.SetIpAddress(ipAddress);
        this.hallSocket.Connect(); //"localhost:8080"
        Log4.Log("Connect to " + ipAddress);
        this.SetSocketOpt();
        return this.hallSocket;
    }
    //byte[]
    public OnReceivePackage(msgId: number, receive_bytes: Uint8Array): void {
        try {
            let recv_length: number = receive_bytes.length;
            if (GConfig.Debug && GConfig.Debug_Protocol) {
                //Log4.Log("OnReceivePackage " + recv_length);
            }
            //--------------------------------------------------
            let msgMsg:MsgPendingData = new MsgPendingData()
            msgMsg.MsgId = msgId
            msgMsg.MsgData = PBHelper.Decode(msgId,receive_bytes)
            //--------------------------------------------------

            this.CompletePendingMessage(msgMsg.MsgId);
            Log4.Log("xxx net response protocal:" + pb.pb.Cmd[msgMsg.MsgId] + "  "+msgMsg.MsgId);
            let status: boolean = NetworkManager.Instance.HandleCsError(msgMsg);
            if (status) {
                try {
                    let handler_table = this.protocol_handler_register.Get(msgMsg.MsgId);
                    if (handler_table != null) {
                        handler_table(msgMsg);
                    } else {
                        Log4.LogError("收到一个未注册的消息 " + msgMsg.MsgId);
                    }
                } catch (e) {
                    Log4.LogError("处理%d消息->逻辑->报错 %s %s", msgMsg.MsgId, e.Message, e.stack);
                }
            }
        } catch (e) {
            Log4.LogError("GameNet.OnReceivePackage 接收消息报错 :" + e.Message);
        }
    }

    public OnAppPause(pause: boolean): void {
        // body
        this.hallSocket.SetGamePaused(pause);
    }
    public CompletePendingMessage(msgId: number): void {
        this.pending_message.forEach((data, index) => {
            if (data.MsgId == msgId) {
                this.pending_message.splice(index, 1); //删除
                return;
            }
        });
    }
    public GetPendingMessage(): Array<MsgPendingData> {
        return this.pending_message;
    }
    public ClearAllPendingMessage(): void {
        this.pending_message = null;
    }
    private OnPendingMessageTimeout(): void {
        this.ClearAllPendingMessage();
        /*if (UIManager.Instance.GetWindow(typeof(UITipLostConnect)) == null)
        {
            UIManager.Instance.OpenWindow(typeof(UITipLostConnect));
        }
        */
    }

    //is_resend:重新发送
    //发送消息 cmd:pb.Cmd.Login_Login
    public Send(msgId: number, msgData: any, savePending: boolean = false, is_resend: boolean = false): void {
        try {
            if (!NetworkManager.Instance.IsRelaunch()) {
                let pendingData: MsgPendingData = new MsgPendingData();
                pendingData.MsgId = msgId;
                pendingData.MsgData = msgData;
                NetworkManager.Instance.UpdateSendCount(msgId, pendingData, savePending, is_resend);
                if (savePending && !is_resend) {
                    this.pending_message.push(pendingData);
                }
                if (msgId !== 0) Log4.Log("xxx net send protocal:" + pb.pb.Cmd[msgId] + "  " + msgId);

                if (
                    NetworkManager.Instance.IsConnected() ||
                    (NetworkManager.Instance.IsReConnecting() && msgId == pb.pb.Cmd.Login_Login)
                ) {
                    //let msg_bytes: ArrayBuffer = MessageCodec.Encode(msgId, msgData);
                    this.hallSocket.SendMessage(msgId,msgData);

                    //this.globalSeq = this.globalSeq + 1;
                }
            }
        } catch (e) {
            Log4.LogError("GameNet.Send 发送消息报错 :" + e);
        }
    }
    //断开
    public Disconnect(): void {
        if (this.hallSocket != null) {
            this.hallSocket.Dispose();
        }
    }
    public Dispose() {
        this.Disconnect();
    }
}
//------------------------------------------------------------------

//待处理消息数据
export class MsgPendingData {
    public MsgId: number;
    public MsgData: any;
}