

/*
	日志

added by yh @ 2024/06/04 16:15
注意:
*/
 export class Log4{
     public static OpenLog:boolean = true
     //限制日志
    public static Log(...data: any[]):void{
         if(this.OpenLog){
             console.log(...data);
         }
    }
     //必须打印 用于 重要日志
     static Print(...data: any[]):void {
         console.log(...data);
     }
    public static LogError(...data: any[]):void{
        console.error(...data);
    }

     static LogWarn(...data: any[]) {
         console.warn(...data);
     }
 }