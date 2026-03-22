export class GConfig{
    //-- 调试模式：真机出包时关闭

    // 日志输出总开关
    public static Debug:boolean = true;
    //--系统功能相关日志
    public static Debug_System:boolean = false;
    //-- 协议相关日志
    public static Debug_Protocol:boolean = false;
    //-- 广告相关日志
    public static Debug_Ads:boolean = false;
    //调试 基础 主题
    static Debug_Theme_Basic: boolean=false;

    //--账号调试模式，true，则以Debug_Account_Value为账号username；false则使用Androidid等设备信息
    public static Debug_Account:boolean=false;
    //--新手引导开关
    public static Enable_Guide:boolean=false;//-- 开启新手引导，默认关闭

    //-- 正式服 1247 47.108.249.0 9000  ws://47.108.249.0:9000  //s10.v100.vip16865
    public static serverIp:string = "127.0.0.1";//"47.108.249.0";
    public static serverPort:number = 1251;//9000;
    //模拟登录凭证 非必要不要修改
    public static credential:string = null;




}