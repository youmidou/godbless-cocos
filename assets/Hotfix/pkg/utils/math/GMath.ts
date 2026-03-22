export class GMath{

    public static M_random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //将小数四舍五入取整数
    public static ceil(num: number): number {
        return Math.round(num);
    }
}