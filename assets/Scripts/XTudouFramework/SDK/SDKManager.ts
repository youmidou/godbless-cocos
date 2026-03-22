/**
 *
 * */
export class SDKManager{

    constructor() {
    }

    private static instance: SDKManager;
    public static get Instance() :SDKManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    public Startup() {

    }

    public ReGetDeeplink() {

    }

    public HSRefreshUnreadMessagesCount() {

    }
}