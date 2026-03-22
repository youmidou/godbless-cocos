/**
 *
 * */
export class Purchaser{
    private static instance: Purchaser;
    public static Instance() :Purchaser{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {
    }
}