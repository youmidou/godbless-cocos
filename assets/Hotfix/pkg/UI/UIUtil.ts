// import { _decorator, Component, Node, find } from "cc";
import * as cc from "cc";

export class UIUtil {
    //定义宏 assert(true,"message")
    public static Assert(isbool: boolean, message: string = ""): void {
        if (isbool == false) {
            console.error(...("宏定义报错=>" + message));
        }
    }
    //
    public static FindTrans(node: cc.Node, path: string): cc.Node {
        // 通过路径查找子节点
        const targetNode: cc.Node | null = cc.find(path, node);
        return targetNode;
    }

    //
    public static FindSprite(trans: cc.Node, path: string): cc.Sprite {
        // 根据路径找到子节点
        const targetNode = trans.getChildByPath(path);
        if (!targetNode) {
            console.warn(`Node at path "${path}" not found under parent ${trans.name}`);
            return null;
        }
        // 获取 Label 组件
        const labelComponent = targetNode.getComponent(cc.Sprite);
        if (!labelComponent) {
            console.warn(`Label component not found on node "${path}"`);
            return null;
        }
        return labelComponent;
    }

    /**
     * 在指定节点上查找路径对应的 cc.Label 组件
     * @param trans 父节点
     * @param path 节点路径
     * @returns 找到的 cc.Label 组件
     */
    public static FindText(trans: cc.Node, path: string): cc.Label {
        // 根据路径找到子节点
        const targetNode:cc.Node = trans.getChildByPath(path);
        if (!targetNode) {
            console.warn(`Node at path "${path}" not found under parent ${trans.name}`);
            return null;
        }
        // 获取 Label 组件
        const labelComponent:cc.Label = targetNode.getComponent(cc.Label);
        if (!labelComponent) {
            console.warn(`Label component not found on node "${path}"`);
            return null;
        }
        return labelComponent;
    }

    /*
    使用列子
        this.unity_canvas = UIUtil.FindComponent(this.transform, typeof(Canvas));
     */
    public static FindComponent(trans: cc.Node, type: any, path: string = ""): cc.Component {
        UIUtil.Assert(trans != null, "FindComponent->trans is nil");
        UIUtil.Assert(type != null, "FindComponent->trans is type");
        // by liu 2024/12/18 不传路径则意味着 应该找自身节点
        let targetTrans: cc.Node = trans;
        if (!UIUtil.IsNullOrEmpty(path)) {
            targetTrans = UIUtil.FindTrans(trans, path);
        }
        if (targetTrans == null) {
            return null;
        }
        let cmp: cc.Component = targetTrans.getComponent(type);
        if (cmp != null) {
            return cmp;
        }

        return targetTrans.getComponentInChildren(type);
    }
    public static ShowNode(node: cc.Node, is_show: boolean = false): void {
        if (node != null) {
            node.active = is_show;
        }
    }
    public static GetChild(trans: cc.Node, index: number): cc.Node {
        return trans.children[index];
    }

    static IsNull(object: any) {
        if (object == null) {
            return true;
        }
        if (object as string) {
            return UIUtil.IsNullOrEmpty(object as string);
        }
        return false;
    }
    // 在 String 构造函数上定义方法
    static IsNullOrEmpty = function (value: string | null | undefined): boolean {
        return value === null || value === undefined || value === "";
    };

    public static Format(format: string, ...args: any[]): string {
        let argIndex = 0;
        return format.replace(/%([sd])/g, (match, specifier) => {
            if (argIndex >= args.length) {
                //console.warn("Insufficient arguments provided for format string");
            }
            const value = args[argIndex++];
            if (specifier === "s") {
                return String(value); // 转换为字符串
            } else if (specifier === "d") {
                if (typeof value !== "number") {
                    console.warn(`Expected number for %d but got ${typeof value}`);
                }
                return String(value); // 转换数字为字符串
            } else {
                //console.warn(`Unsupported format specifier: %${specifier}`);
            }
        });
    }

    /**
     * 根据路径查找按钮组件
     * @param root 根节点
     * @param path 字符串路径，用 `/` 分隔
     * @returns Button 组件
     */
    public static FindButton(root: cc.Node, path: string): cc.Button {
        if (!root) {
            console.error("Root node is null!");
            return null;
        }

        const targetNode = UIUtil.FindTrans(root, path);
        if (!targetNode) {
            console.error(`Node not found at path: ${path}`);
            return null;
        }

        const button: cc.Button = targetNode.getComponent(cc.Button);
        if (!button) {
            console.error(`No Button component found on node: ${path}`);
            return null;
        }
        return button;
    }
    /**
     * 根据路径查找组件
     * @param root 根节点
     * @param path 字符串路径，用 `/` 分隔
     * @param type 泛型组件类型
     * @returns 组件实例，或 null 如果未找到
     */
    /*
    public static FindComponent<T>(root: Node, path: string): T | null {
        const targetNode = UIUtil.FindNode(root, path);
        if (!targetNode) {
            console.error(`Node not found at path: ${path}`);
            return null;
        }

        const component:T = targetNode.getComponent(); // 类型断言
        if (!component) {
            console.error(`Component of specified type not found on node: ${path}`);
            return null;
        }

        return component;
    }
    */

    /**
     * 根据路径查找节点
     * @param root 根节点
     * @param path 字符串路径，用 `/` 分隔
     * @returns 子节点
     */
    public static FindNode(root: cc.Node, path: string): cc.Node {
        const parts = path.split("/");
        let currentNode: cc.Node | null = root;

        for (const part of parts) {
            if (!currentNode) return null;
            currentNode = currentNode.getChildByName(part);
        }

        return currentNode;
    }
    /**
     * 给按钮绑定点击事件
     * @param button
     * @param callback 点击事件回调
     * @param context 回调函数的上下文（通常是脚本的 `this`）
     */
    public static RegisterExtraButtons(button: cc.Button, callback: () => void, context?: any): void {
        if (!button) {
            console.error("Button node is null or undefined.");
            return;
        }
        button.node.on(cc.Button.EventType.CLICK, callback, context);
    }
    /**
     * 移除按钮绑定的点击事件
     * @param button
     * @param callback 点击事件回调
     * @param context 回调函数的上下文
     */
    public static UnRegisterExtraButtons(button: cc.Button, callback: () => void, context?: any): void {
        if (!button) {
            console.error("Button node is null or undefined.");
            return;
        }
        button.node.off(cc.Button.EventType.CLICK, callback, context);
    }

    /**
     * 给滚动视图绑定 滚动监听 事件
     * @param scrollView 滚动视图
     * @param callback 点击事件回调
     * @param context 回调函数的上下文（通常是脚本的 `this`）
     */
    public static BindScrollEvent(scrollView: cc.ScrollView, callback: () => void, context?: any): void {
        if (!scrollView) {
            console.error("ScrollView is null or undefined.");
            return;
        }
        scrollView.node.on(cc.ScrollView.EventType.SCROLLING, callback, context);
    }

    /**
     * 移除滚动视图 滚动监听 事件
     * @param scrollView 滚动视图
     * @param callback 点击事件回调
     * @param context 回调函数的上下文
     */
    public static UnBindScrollEvent(scrollView: cc.ScrollView, callback: () => void, context?: any): void {
        if (!scrollView) {
            console.error("ScrollView is null or undefined.");
            return;
        }
        scrollView.node.off(cc.ScrollView.EventType.SCROLLING, callback, context);
    }

    /**
     * 给编辑框 添加 离开编辑状态 监听 事件
     * @param editor 编辑框
     * @param callback 点击事件回调
     * @param context 回调函数的上下文（通常是脚本的 `this`）
     */
    public static BindEditorEndEvent(editor: cc.EditBox, callback: () => void, context?: any): void {
        if (!editor) {
            console.error("EditBox is null or undefined.");
            return;
        }
        editor.node.on(cc.EditBox.EventType.EDITING_DID_ENDED, callback, context);
    }

    /**
     * 移除编辑框 离开编辑状态 监听 事件
     * @param editor 编辑框
     * @param callback 点击事件回调
     * @param context 回调函数的上下文
     */
    public static UnEditorEndEvent(editor: cc.EditBox, callback: () => void, context?: any): void {
        if (!editor) {
            console.error("EditBox is null or undefined.");
            return;
        }
        editor.node.off(cc.EditBox.EventType.EDITING_DID_ENDED, callback, context);
    }
}
