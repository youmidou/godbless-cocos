export class Network2Manager{
    private static instance: Network2Manager;
    public static Instance() :Network2Manager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {

    }

}