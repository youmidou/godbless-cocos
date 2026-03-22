import { director, game, PhysicsSystem } from 'cc';
/**
 *
    cocos引擎时间调度 仿unity  UnityEngine.Time 功能
 -- added by yh @ 2024-12-05
 -- 注意：
 */
export class Time {
    /** 当前帧的时间（秒） */
    public static get time(): number {
        return game.totalTime / 1000; // game.totalTime 是毫秒
    }
    //帧数
    public static get frameCount(): number {
        return game.deltaTime;
    }

    /** 从上一帧到当前帧的时间（秒） */
    public static get deltaTime(): number {
        return game.deltaTime;
    }

    /** 当前帧的未缩放时间间隔（秒） */
    public static get unscaledDeltaTime(): number {
        return game.deltaTime;
    }

    /** 游戏运行以来的未缩放时间（秒） */
    public static get unscaledTime(): number {
        return game.totalTime / 1000; // 未受时间缩放影响
    }

    /** 游戏运行以来的总时间（秒） */
    public static get timeSinceLevelLoad(): number {
        return game.totalTime / 1000; // Cocos 没有关卡系统，用 totalTime 替代
    }

    /** 物理步长时间（秒） */
    public static get fixedDeltaTime(): number {
        return PhysicsSystem.instance.fixedTimeStep;
    }

    /** 时间缩放系数 */
    private static _timeScale: number = 1;
    public static get timeScale(): number {
        return this._timeScale;
    }
    public static set timeScale(value: number) {
        this._timeScale = value;
        //director.root?.scheduler.setTimeScale(value); // 修改全局时间缩放
    }

    /** 每秒帧数 */
    public static get frameRate(): number {
        return Number(game.frameRate);
    }
    public static set frameRate(value: number) {
        game.frameRate = value;
    }
}
