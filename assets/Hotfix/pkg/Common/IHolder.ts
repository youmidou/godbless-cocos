import {_decorator, Component, director, find, Node} from 'cc';
const { ccclass, property } = _decorator;
// 定义接口 IHolder
export interface IHolder {
    //节点
    transform:Node
}