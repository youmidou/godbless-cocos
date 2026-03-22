export enum UILayers
{   //缓存层不要用
    CacheLayer =0,
    //背景层
    BackgroundLayer=1,
    //背景层之上1
    JustAboveAllBoardLayer=2,
    //背景层之上2
    AboveAllBoardLayer=3,

    //下边栏
    FooterLayer=4,
    //上边栏
    HeaderLayer=5,
    //默认层
    NormalLayer=6,
    //顶层
    TopLayer=7,
    //遮罩等待层
    WaitingLayer=8,
    //提示层
    TipLayer=9,
    //加载层
    LaunchLayer=10,
    //强更新提示层
    AlertTipLayer=11,
}