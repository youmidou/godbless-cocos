export class Utils{
    constructor() {
    }

    /**
     * int32转Uint8Array
     * @param n
     * @returns
     */
    public static Int32ToBytes(value: number): Uint8Array {
        const buffer:ArrayBuffer = new ArrayBuffer(4);
        const view:DataView = new DataView(buffer);
        view.setInt32(0, value, true); // 第二个参数表示是否使用小端序（true表示使用小端序）

        // 将 DataView 中的数据转换为 Uint8Array
        const bytes = new Uint8Array(buffer);

        return bytes;
    }
    /**
     * Uint8Array转int32
     * @param n
     * @returns
     */
    public static Uint8ArrayToInt32(uint8Array: Uint8Array) {
        if (uint8Array.length !== 4) {
            throw new Error('Uint8Array with 4 elements expected');
        }

        // 创建一个新的DataView来读取int32
        const dataView:DataView = new DataView(uint8Array.buffer);
        // 从uint8Array的buffer的0位置开始读取int32
        return dataView.getInt32(0, true);  // true 表示使用小端字节序
    }

    public static RandomFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }
    public static RandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    public static Rate(r: number): boolean {
        return this.RandomInt(0, 10000) <= r * 10000
    }
    public static RandomIndex<T>(list: T[]): number {
        return list.length > 0 ? this.RandomInt(0, list.length - 1) : -1
    }
    public static randomOne<T>(list: T[]): T {
        let index = this.RandomIndex(list)
        return index >= 0 ? list[index] : null
    }
    public static FixedRange(value: number, min: number, max: number): number {
        return Math.max(Math.min(value, max), min)
    }
    public static Last<T>(list: T[]): T {
        return list.length > 0 ? list[list.length - 1] : null
    }
    public static RemoveOne<T>(list: T[], item: T): T {
        return (list.length > 0) ? list.splice(list.lastIndexOf(item), 1)[0] : null
    }
    // 获取字符串逻辑长度
    public static GetStringLogicWidth(str: string): number {
        let width = 0;
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode <= 0x0080) {
                width += 1;
            } else {
                width += 2;
            }
        }
        return width;
    }
    // 截取字符串 默认4个字符
    public static CutString(str: string, length: number = 4): string {
        if (str == null || str.length <= 0) {
            return '';
        }
        if (Utils.GetStringLogicWidth(str) <= 8) {
            return str;
        }
        return str.substring(0, length)+"...";
    }
}