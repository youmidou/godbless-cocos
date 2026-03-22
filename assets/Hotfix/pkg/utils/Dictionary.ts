/**
	Dictionary 字典map
added by yh @ 2024/11/18 16:11
列子:
*/
export class Dictionary<K, V> {
    private map: Map<K, V> = new Map<K, V>();
    //[K]:V; // 使用索引签名
    constructor() {

    }
    // 添加一个键值对
    public Add(key: K, value: V): void {
        this.map.set(key, value);
    }

    // 获取值
    public Get(key: K): V | undefined {
        return this.map.get(key);
    }

    // 检查是否包含键
    public ContainsKey(key: K): boolean {
        return this.map.has(key);
    }

    // 移除键值对
    public Remove(key: K): boolean {
        return this.map.delete(key);
    }

    // 获取所有键
    public Keys(): K[] {
        return Array.from(this.map.keys());
    }

    // 获取所有值
    public Values(): V[] {
        return Array.from(this.map.values());
    }

    // 清空字典
    public Clear(): void {
        this.map.clear();
    }

    // 获取字典大小
    public Size(): number {
        return this.map.size;
    }
    public get Count():number{
        return this.Size()
    }
    /*
    for (const [key, value] of myMap) {
        console.log(`Key: ${key}, Value: ${value}`);
    }
    * */
    // 获取Map值
    public GetMap(): Map<K, V> {
        return this.map
    }
    //遍历
    public forEach(callback: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any):void{
        this.map.forEach(callback)
    }
}