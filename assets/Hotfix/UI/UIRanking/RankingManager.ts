

export class RankingManager{
    private static instance: RankingManager;
    public static Instance() :RankingManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {

    }
}