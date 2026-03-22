/**
 *
 * added by yh @ 2024-12-17
 */
export class VIPManager{
    private static instance: VIPManager;
    public static get Instance() :VIPManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }
}