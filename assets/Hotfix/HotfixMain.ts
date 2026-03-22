import {_decorator, director, Node} from 'cc';
import {GameMain} from "db://assets/Hotfix/GameMain";
const { ccclass, property } = _decorator;

/**
 * 热更游戏入口-映射入口
 * added by yh @ 2024/12/12 09:39
 * 注意:
 *
 * */
export class HotfixMain{
    constructor() {
    }
    //====================================
    //开发逻辑入口 GameStart 上层逻辑->入口
    //====================================
    public StartGame(){

        try{
            // 创建一个新的节点
            const HotfixMain = new Node("HotfixMain");
            // 挂载脚本
            HotfixMain.addComponent(GameMain); // 确保 "MyScriptName" 是你要挂载的脚本名

            // 将节点添加到持久层
            director.addPersistRootNode(HotfixMain)
            //game.addPersistRootNode(newNode);
            // 将节点添加到场景
            director.getScene().addChild(HotfixMain);
        }catch (e){
            console.error("HotfixMain logic error: "+e)
        }


    }

    public async Start(){


    }
}