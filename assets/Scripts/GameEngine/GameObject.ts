import { _decorator, Component, Node, find, game, director, resources, Prefab, instantiate } from "cc";
const { ccclass, property } = _decorator;

export class GameObject {
    public static DontDestroyOnLoad(node: Node) {
        // 将当前节点设为常驻节点
        director.addPersistRootNode(node);
    }

    public static Find(UIRootPath: string): Node {
        return find(UIRootPath);
    }
    public static GetSceneRoot(UIRootPath: string): Node {
        const rootNode = director.getScene();
        return rootNode.parent;
    }

    //实列对象
    public static Instantiate(prefab: Prefab | Node, parent: Node = null): Node {
        let go = <Node>instantiate(prefab);
        if (parent) {
            parent.addChild(go);
        }
        return go;
    }

    public static Destroy(child: Node) {
        child.destroy();
    }
    //获取根节点
    public static GetScene(): Node {
        // 获取场景的根节点
        const rootNode: Node = director.getScene();
        return rootNode;
    }
}
