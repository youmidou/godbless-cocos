/**
 *   UIBase容器
 *
 * added by yh @ 2024/11/19 16:15
 * 注意:
 *
 * */
import {UIBaseComponent} from "db://assets/Hotfix/pkg/UI/Base/UIBaseComponent";
import {UIManager} from "db://assets/Hotfix/pkg/UI/UIManager";
import {_decorator, Component, director, find, Node} from 'cc';
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";
const { ccclass, property } = _decorator;
export class UIBaseContainer extends UIBaseComponent{
    constructor(holder:IHolder, var_arg:string) {
        super(holder,var_arg);
    }
    public OnCreate(args:any = null){
        super.OnCreate(args);
    }
}