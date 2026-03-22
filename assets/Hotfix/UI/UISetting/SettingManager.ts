export class SettingManager{
    private static instance: SettingManager;
    public static Instance() :SettingManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

}