using System;
using System.IO;
using System.Text;

public class ByteBuffer : IDisposable
{
    private MemoryStream stream;
    private BinaryReader reader;
    private BinaryWriter writer;
    private bool isBigEndian = true;

    public ByteBuffer(byte[] data = null)
    {
        stream = new MemoryStream();
        writer = new BinaryWriter(stream);
        reader = new BinaryReader(stream);
        if (data != null)
        {
            writer.Write(data);
            stream.Position = 0;
        }
    }

    public void SetEndian(bool bigEndian)
    {
        isBigEndian = bigEndian;
    }

    public void SetData(byte[] data)
    {
        stream.SetLength(0);
        writer.Write(data);
        stream.Position = 0;
    }

    public void Clear()
    {
        stream.SetLength(0);
        stream.Position = 0;
    }

    public byte[] ToBytes()
    {
        return stream.ToArray();
    }

    public void WriteByte(byte v)
    {
        writer.Write(v);
    }

    public byte ReadByte()
    {
        return reader.ReadByte();
    }

    public void WriteUint16(ushort v)
    {
        var bytes = BitConverter.GetBytes(v);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        writer.Write(bytes);
    }

    public ushort ReadUint16()
    {
        var bytes = reader.ReadBytes(2);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        return BitConverter.ToUInt16(bytes, 0);
    }

    public void WriteUint32(uint v)
    {
        var bytes = BitConverter.GetBytes(v);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        writer.Write(bytes);
    }

    public uint ReadUint32()
    {
        var bytes = reader.ReadBytes(4);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        return BitConverter.ToUInt32(bytes, 0);
    }

    public void WriteInt32(int v)
    {
        var bytes = BitConverter.GetBytes(v);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        writer.Write(bytes);
    }

    public int ReadInt32()
    {
        var bytes = reader.ReadBytes(4);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        return BitConverter.ToInt32(bytes, 0);
    }

    public void WriteInt64(long v)
    {
        var bytes = BitConverter.GetBytes(v);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        writer.Write(bytes);
    }

    public long ReadInt64()
    {
        var bytes = reader.ReadBytes(8);
        if (BitConverter.IsLittleEndian != !isBigEndian)
            Array.Reverse(bytes);
        return BitConverter.ToInt64(bytes, 0);
    }

    // 写入带uint16长度前缀的字符串
    public void WriteString(string s)
    {
        var bytes = Encoding.UTF8.GetBytes(s);
        WriteUint16((ushort)bytes.Length);
        writer.Write(bytes);
    }

    // 读取带uint16长度前缀的字符串
    public string ReadString()
    {
        ushort len = ReadUint16();
        var bytes = reader.ReadBytes(len);
        return Encoding.UTF8.GetString(bytes);
    }

    public void WriteBytes(byte[] data)
    {
        writer.Write(data);
    }

    public byte[] ReadBytes(int length)
    {
        return reader.ReadBytes(length);
    }

    public int Remaining()
    {
        return (int)(stream.Length - stream.Position);
    }

    public void Dispose()
    {
        reader?.Dispose();
        writer?.Dispose();
        stream?.Dispose();
    }
} 