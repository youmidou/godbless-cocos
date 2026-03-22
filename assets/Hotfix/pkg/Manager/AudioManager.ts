import {GameUtilsManager} from "db://assets/Hotfix/pkg/Manager/GameUtilsManager";
export enum Setting
{
    KEY_SOUND = 1, //-- 音效
    KEY_MUSIC = 2,   //-- 背景音乐
}

export class AudioManager{
    private static instance: AudioManager;
    public static get Instance() :AudioManager{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }

    constructor() {
    }
    private SetSettingIntValueStatus(key:string, value:number):void{
        GameUtilsManager.Instance.SetIntegerByKeyForAllUsers(key, value);
        if (key == Setting.KEY_SOUND.toString())
        {
            /*
            var category = AudioController.GetCategory("music");
            if (value == 1)
            {
                //-- 打开音效
                // AudioController.MuteSound(false);
                category.Volume = 1;
            }
            else
            {
                //-- 关闭音效
                //AudioController.StopCategory("sfx_noduckmusic");
                //AudioController.StopCategory("sfx_duckmusic");
                //AudioController.StopCategory("winsound");
                // AudioController.MuteSound(true);
                category.Volume = 0;
            }
            */
        }
    }
    //播放音效
    public Play(sound_name :string){

    }
    //停止音效
    public Stop(sound_name :string){

    }
    //-- 返回背景音乐状态
    public GetBackGroundMusicState():boolean
    {
        //int value = GameUtilsManager.Instance.GetIntegerByKeyForAllUsers(Setting.KEY_MUSIC.ToString(), 1);
        //return (value == 1);
        return false
    }
    //-- 打开背景音乐
    public TurnOnBackGroundMusic():void
    {
        //SetSettingIntValueStatus(Setting.KEY_MUSIC.ToString(), 1);
    }
    //-- 关闭背景音乐
    public TurnOffBackGroundMusic():void
    {
        //SetSettingIntValueStatus(Setting.KEY_MUSIC.ToString(), 0);
    }

    //-- 播放背景音乐
    public PlayBackgroundMusic(name:string,additional:boolean=false):void
    {
        /*

        AudioController.PlayMusic(name);

        if (this.currentMusic == null)
        {
            this.currentMusic = name;
        }

        if (additional==true)
        {
            additionalMusicList.Add(name);
        }
        else
        {
            this.additionalMusicList.Clear();
        }
*/
        //this.Broadcast("Play_Background_Music", name);
    }

    //-- 停止背景音乐
    public StopBackgroundMusic(fadeout:number = 0):void{

    }
    //-- 返回当前背景音乐名
    public GetBackgroundMusicName():string{
        /*
        return (this.additionalMusicList.Count > 0
            ? this.additionalMusicList[this.additionalMusicList.Count-1]
            : this.currentMusic);
        */
        return ""
    }

    //-- 设置当前背景音乐音量 float 0-1
    public SetMusicVolume(volume:number =1):void
    {
        /*
        let music = AudioController.GetCurrentMusic();
        if (music)
        {
            music.volumeItem = volume;
        }
        */
    }

    public Startup():void
    {

    }

    public Dispose():void
    {

    }
}