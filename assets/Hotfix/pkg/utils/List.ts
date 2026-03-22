/**
 *    List 数组
 * added by yh @ 2024/12/01 18:16
 *
 * **/
export class List<T> {
    private items: Array<T> = new Array<T>();

    // 添加元素
    public Add(item: T): void {
        this.items.push(item);
    }

    // 批量添加元素
    public AddRange(items: T[]): void {
        this.items.push(...items);
    }

    // 移除指定元素
    public Remove(item: T): boolean {
        const index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    // 根据索引移除元素
    public RemoveAt(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        } else {
            throw new Error("Index out of range");
        }
    }

    // 查找第一个匹配元素
    public Find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    // 查找所有匹配元素
    public FindAll(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    // 根据索引获取元素
    public Get(index: number): T {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        //throw new Error("Index out of range");
        return null
    }

    // 获取列表长度
    public get Count(): number {
        return this.items.length;
    }

    // 清空列表
    public Clear(): void {
        this.items = [];
    }

    // 转换为数组
    public ToArray(): T[] {
        return [...this.items];
    }

    // 对每个元素执行操作
    public ForEach(callback: (item: T, index: number) => void): void {
        for (let i = 0; i < this.items.length; i++) {
            callback(this.items[i], i);
        }
    }
}
