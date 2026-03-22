import {ByteBuffer} from "db://assets/Hotfix/pkg/Socket/ByteBuffer";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {Message, PBHelper} from "db://assets/Hotfix/pkg/Socket/codec/MessageCodec";

export class constants {

    public static ErrPacketSizeExcced:string = "codec: packet size exceed"

}
export enum PacketType {
    Ide=0,         //默认为 0
    Handshake=1,   //握手 Handshake represents a handshake: request(client) <====> handshake response(server)
    HandshakeAck=2,//握手确认 HandshakeAck represents a handshake ack from client to server
    Heartbeat=3,   //心跳 Heartbeat represents a heartbeat
    Data=4,        //数据 Data represents a common data packet
    Kick=5,        //踢掉  disconnect message from server
}

export class Packet{
    public Type:number;//包类型
    public Length:number = 0;//长度
    public Data:Uint8Array//内容
}
export class PacketCodec{
    //Codec constants.
    public static HeadLength:number =4;// 消息头长度：4字节（1字节包类型 + 3字节包长度）
    public static MaxPacketSize:number =1 << 24;// 最大包大小：1 << 24 = 2^24 = 16777216 字节（16MB）

    private static MaxReceiveBuffer: number = 1024 * 1024 * 10;//最大接收
    //封装消息包 长度内容 msg_bytes
    public static Encode(packetType:PacketType,msg_bytes:Uint8Array):Uint8Array{
        try
        {
            let p:Packet = new Packet()
            p.Type = packetType
            p.Length = msg_bytes.length
            p.Data = msg_bytes
            //封装头部
            let header_bytes:Uint8Array = PacketCodec.HeaderEncode(p.Type,p.Length)
            let buff:ByteBuffer = new ByteBuffer()
            buff.WriteBytes(header_bytes) //buff.WriteInt32(p.Length) //长度内容
            buff.WriteBytes(p.Data)
            return buff.ToBytes()
        }
        catch (e)
        {
            Log4.LogError("PacketCodec->Encode 封装消息失败  :" + e);
        }
    }
    public static Decode(packet_bytes:Uint8Array):Packet{
        let header_bytes:Uint8Array = packet_bytes.slice(0,4)
       let header= PacketCodec.HeaderDecode(header_bytes)
        let p:Packet = new Packet()
        p.Type = header.type
        p.Length = header.len
        p.Data = packet_bytes.slice(4,packet_bytes.length);

        return p
    }

    /**
     * 创建4字节消息头 Uint8Array
     * @param type 包类型（0~255）
     * @param length 包体长度（0~16777215）最大包大小：1 << 24 = 2^24 = 16777216 字节（16MB）
     * @returns 4字节消息头（大端序）
     */
    public static HeaderEncode(type: number, len: number): Uint8Array {
        // 1. 参数校验
        if (type<PacketType.Ide ||type > PacketType.Kick) {
            throw new Error(`包类型非法：${type}，必须是0~255的整数`);
        }
        if(len > PacketCodec.MaxPacketSize) throw new Error(`包长度非法：${len}，必须是0~16777215的整数`);

        // 2. 创建4字节Uint8Array
        const header = new Uint8Array(4);

        // 3. 写入第1字节：包类型（uint8）
        header[0] = type;

        // 4. 写入后3字节：包长度（uint24，大端序）
        // 大端序规则：高位字节在前，低位字节在后
        header[1] = (len >> 16) & 0xff; // 长度的高8位
        header[2] = (len >> 8) & 0xff;  // 长度的中8位
        header[3] = len & 0xff;         // 长度的低8位

        return header;
    }
    /**
     * 解析4字节消息头 Uint8Array
     * @param header 4字节消息头
     * @returns { type: 包类型, length: 包长度 }
     */
    public static HeaderDecode(header:Uint8Array): { type: PacketType; len: number } {
        // 校验消息头长度
        if (header.length !== PacketCodec.HeadLength) {
            throw new Error(`消息头长度非法：${header.length}，必须是4字节`);
        }

        // 1. 解析包类型（第1字节）
        const type:PacketType = header[0] as PacketType;

        // 2. 解析包长度（后3字节，大端序uint24）
        const len:number = ((header[1] << 16) | (header[2] << 8) | header[3]);

        // 二次校验（防止手动篡改字节导致的非法值）
        //if(type == PacketType.Ide) throw new Error(`解析出非法包类型：${type}`);
        if(len > PacketCodec.MaxPacketSize) throw new Error(`解析出非法包长度：${len}`);

        return { type, len };
    }

}