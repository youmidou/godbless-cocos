export interface IUILoadingView{
    //进度条值
    SetValue(value:number):void;
    totalSize:number;
    ShowCloseButton(b:boolean):void;
}