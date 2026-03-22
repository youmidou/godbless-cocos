/**
 * 弹出配置
 * PopupConfig popup_config new PopupConfig()
 * UIManager.Instance.OpenPopupUI(popup_config)
 */
export class PopupConfig{
    public path:string;
    public type:PopUIType
    public board:Node
    //自定义初始化函数
    public custom_init_func:(obj:object)=>void
    //自定义点击函数
    public custom_clicked_func:()=>void
    //自定义初始化数据
    public custom_init_data:object
    //显示金币数
    public win_coin:number

    //确认延迟
    public confirm_delay:number  = 0.0;

}

export enum PopUIType
{
    ConfirmUI = 0,
    GetCoinTip = 1,
    TwoButtonChoice = 2,
    FourButtonChoice = 3,
};