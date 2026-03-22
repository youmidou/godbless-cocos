import {LobbyScene} from "db://assets/Hotfix/Scenes/LobbyScene";
import {ThemeScene} from "db://assets/Hotfix/Scenes/ThemeScene";

export class SceneItemConfig{
   public Level:number
   public Name:string;
   public ClassType:any;//场景类型
   public Progress:boolean;
}

export class SceneConfig{
   //-- 启动场景
   public static LaunchScene: SceneItemConfig = {
      // level、name对应于BuildSetting中添加的场景
      Level: 1,
      Name: "LaunchScene",
      ClassType:null,
      Progress: true,
   }
   //-- 加载场景
   public static LoadingScene: SceneItemConfig = {
      Level: 1,
      Name: "LoadingScene",
      ClassType:null,
      Progress: true,
   }
   //-- lobby场景 大厅
   public static LobbyScene: SceneItemConfig = {
      Level: 2,
      Name: "LobbyScene",
      ClassType:LobbyScene,
      Progress: true,
   }
   //主题场景
   public static ThemeScene: SceneItemConfig = {
      Level: 3,
      Name: "ThemeScene",
      ClassType:ThemeScene,
      Progress: true,
   }
   //运行时更新场景
   public static RuntimeUpdaterScene: SceneItemConfig = {
      Level: 4,
      Name: "RuntimeUpdater",
      ClassType:null,
      Progress: true,
   }
}