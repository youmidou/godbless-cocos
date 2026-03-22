/**
 * author yh
 * */
export class ByteBuffer {
	private buffer: Uint8Array;
	private view: DataView;
	private position: number = 0;
	private length: number = 0;
	private isBigEndian: boolean = true;

	constructor(data: Uint8Array = null) {
		const initialCapacity = data ? Math.max(data.byteLength, 64) : 64;
		this.buffer = new Uint8Array(initialCapacity);
		this.view = new DataView(this.buffer.buffer);
		if (data) {
			this.buffer.set(data, 0);
			this.length = data.byteLength;
			this.position = 0;
		}
	}

	public SetEndian(bigEndian: boolean): void {
		this.isBigEndian = bigEndian;
	}

	public SetData(data: Uint8Array): void {
		this.ensureCapacity(data.byteLength);
		this.buffer.set(data, 0);
		this.length = data.byteLength;
		this.position = 0;
	}

	public Clear(): void {
		this.position = 0;
		this.length = 0;
	}

	public ToBytes(): Uint8Array {
		return this.buffer.slice(0, this.length);
	}
	public WriteBytes(data: Uint8Array): void {
		this.writeBytesRaw(data);
	}
	public WriteInt32(v: number): void {
		this.ensureCapacity(4);
		this.view.setInt32(this.position, v | 0, !this.isBigEndian);
		this.position += 4;
		if (this.position > this.length) this.length = this.position;
	}

	public ReadInt32(): number {
		const v = this.view.getInt32(this.position, !this.isBigEndian);
		this.position += 4;
		this.discardRead();
		return v | 0;
	}

	public WriteByte(v: number): void {
		this.ensureCapacity(1);
		this.view.setUint8(this.position, v & 0xff);
		this.position += 1;
		if (this.position > this.length) this.length = this.position;
	}

	public ReadByte(): number {
		const v = this.view.getUint8(this.position);
		this.position += 1;
		this.discardRead()
		return v;
	}
	//确保容量
	private ensureCapacity(additionalBytes: number): void {
		const needed = this.position + additionalBytes;
		if (needed <= this.buffer.byteLength) return;
		let newCapacity = this.buffer.byteLength;
		while (newCapacity < needed) newCapacity = newCapacity * 2;
		const newBuf = new Uint8Array(newCapacity);
		newBuf.set(this.buffer, 0);
		this.buffer = newBuf;
		this.view = new DataView(this.buffer.buffer);
	}
	/** 丢弃读取 读取后把已读字节从缓冲区扣除，使 ToBytes() 只返回剩余部分 */
	private discardRead(): void {
		if (this.position <= 0) return;
		const remaining = this.length - this.position;
		if (remaining <= 0) {
			this.length = 0;
			this.position = 0;
			return;
		}
		const newBuf = new Uint8Array(remaining);
		newBuf.set(this.buffer.subarray(this.position, this.length));
		this.buffer = newBuf;
		this.view = new DataView(this.buffer.buffer);
		this.length = remaining;
		this.position = 0;
	}
	private writeBytesRaw(bytes: Uint8Array): void {
		this.ensureCapacity(bytes.byteLength);
		this.buffer.set(bytes, this.position);
		this.position += bytes.byteLength;
		if (this.position > this.length) this.length = this.position;
	}

	public WriteUint16(v: number): void {
		this.ensureCapacity(2);
		this.view.setUint16(this.position, v >>> 0, !this.isBigEndian);
		this.position += 2;
		if (this.position > this.length) this.length = this.position;
	}

	public ReadUint16(): number {
		const v = this.view.getUint16(this.position, !this.isBigEndian);
		this.position += 2;
		this.discardRead()
		return v;
	}



}
