export class EffectsManager{
    private static instance: EffectsManager;
    public static get Instance() :EffectsManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
    }

    public RemoveAllEffects():void {

    }
}