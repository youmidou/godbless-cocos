import {LoginView} from "db://assets/Hotfix/Modules/Login/LoginView";

export class LoginManager{
    private loginToken: string; //登录令牌

    private static instance: LoginManager;
    private loginView: LoginView;
    public static get Instance(): LoginManager {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance;
    }
    constructor(){
        this.loginView = new LoginView();
    }

    public Startup() {

    }
    public Start():void{
        this.loginView.Show()
    }
    public async UpdateLaunchUI(): Promise<void> {
        await this.loginView.UpdateLaunchUI()
    }
    public SetLoginToken(loginToken: string) {
        this.loginToken = loginToken;
    }
    //登录令牌
    public GetLoginToken(): string {
        return this.loginToken;
    }
}