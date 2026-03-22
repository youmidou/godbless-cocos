import {GameObject} from "db://assets/Scripts/GameEngine/GameObject";
import { _decorator, Component,Asset,Node ,find,game,director,resources,Prefab} from 'cc';
import {UIUtil} from "db://assets/Hotfix/pkg/UI/UIUtil";
import {Log4} from "db://assets/Hotfix/pkg/Log4/Log4";
import {ResourcesManager} from "db://assets/Hotfix/pkg/Resource/ResourcesManager";

export class InstCache{
    public cache: Node[] = []; //

    // 添加节点，防止重复
    public Add(go: Node): boolean {
        if (this.cache.indexOf(go) === -1) { // 检查是否已经存在
            this.cache.push(go); // 如果不存在，添加到数组
            return true; // 添加成功
        }
        return false; // 添加失败（已存在）
    }
    //删除第一个 返回
    public RemoveFirst():Node{
        return this.cache.shift(); // 移除并返回第一个元素
    }
    public Remove(go:Node):boolean {
        const index = this.cache.indexOf(go); // 查找节点的索引
        if (index !== -1) {
            this.cache.splice(index, 1); // 从数组中移除该节点
            return true; // 删除成功
        }
        return false; // 节点不存在
    }
}

/**
 *
 -- added by yh @ 2024-11-18
 -- GameObject缓存池
 -- 注意：
 -- 1、所有需要预设都从这里加载，不要直接到ResourcesManager去加载，由这里统一做缓存管理
 -- 2、缓存分为两部分：从资源层加载的原始GameObject(Asset)，从GameObject实例化出来的多个Inst
 */
export class GameObjectPool{
    private static instance: GameObjectPool;
    private __cacheTransRoot:Node;
    private __instCache:Map<string,InstCache> = new Map<string, InstCache>();
    private __goPool: Map<string,Prefab> = new Map<string, Prefab>(); //缓存清理掉掉预制体对象
    public static get Instance() :GameObjectPool{
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance
    }
    constructor() {
        this.__Init();
    }

    private __Init() {
         let go:Node = GameObject.Find("UIRoot/Layers/CacheLayer");
         if(go == null){
             go = new Node("CacheLayer");
             GameObject.DontDestroyOnLoad(go)
         }
        let cacheRoot:Node = GameObject.Find("GameObjectPoolRoot");
        if(cacheRoot==null){
            cacheRoot = new Node("GameObjectPoolRoot");
            go.addChild(cacheRoot)
        }
        this.__cacheTransRoot = cacheRoot
    }
    //-- 初始化inst
    private InitInst(inst:Node){
        if (!UIUtil.IsNull(inst))
        {
            inst.active = true;
        }
    }
    //=================================================================================================
    //-- 缓存并实例化GameObject-------
    private CacheAndInstGameObject(path:string,go:Prefab,inst_count:number):void{
        UIUtil.Assert(!UIUtil.IsNull(go));
        UIUtil.Assert(inst_count >= 0);
        this.__goPool[path] = go as Prefab;
        if (inst_count >= 0){
            let cachedInst:InstCache = this.__instCache[path]
            if(cachedInst==null){
                cachedInst = new InstCache();
            }
            //实列化数量
            for (let i:number = 0; i < inst_count; i++) {
                let inst:Node = GameObject.Instantiate(go,this.__cacheTransRoot)
                inst.active=false
                cachedInst.Add(inst)
                //let node = instantiate(prefab);
            }
            this.__instCache[path] = cachedInst;
        }

    }
    private TryGetFromCache(path:string):Node{
        if(!this.CheckHasCached(path)){
            return null
        }

        let cachedInst:InstCache = this.__instCache[path];
        if(cachedInst != null&& cachedInst.cache.length > 0){
            let inst:Node = cachedInst.RemoveFirst();
            UIUtil.Assert(!UIUtil.IsNull(inst),"Something wrong, there gameObject instance in cache is null!");
            return inst;
        }

        let pooledGo:Prefab = this.__goPool[path];
        if (!UIUtil.IsNull(pooledGo))
        {
            let inst:Node = GameObject.Instantiate(pooledGo);
            return inst;
        }

        return null;
    }

    //-- 预加载：可提供初始实例化个数
    private PreLoadGameObjectAsync(path: string, inst_count: number,
                                   callback: (ob) => void =null,
                                   progress_callback:(progress:number)=>void =null,
                                   args:any=null

    ) {
        UIUtil.Assert(inst_count>0,"inst_count > 0");
        if(this.CheckHasCached(path)){
            if(callback!=null){
                callback(args)
            }
            return;
        }
        function __progress_callback(progress:number){
            if(progress_callback){
                progress_callback(progress)
            }
        }

        ResourcesManager.Instance.LoadAsync<Prefab>(path,Prefab, (go:Asset)=>{
            if (!UIUtil.IsNull(go)){
                this.CacheAndInstGameObject(path, go as Prefab, inst_count);//loader
            }
            if (callback!=null)
            {
                callback(args);
            }

        },__progress_callback)

    }
    //-- 预加载：协程形式
    public async CoPreLoadGameObjectAsync(path:string ,inst_count:number,
                                          callback: (ob:object) => void =null,
                                          progress_callback: (progress:number) => void =null,
                                          ):Promise<void>{
        if (this.CheckHasCached(path))
        {
            return; // 提前退出，等效于 C# 的 `yield break`
        }
        function _callback(asset:object){
           let go:Node = asset as Node
            if (!UIUtil.IsNull(go))
            {
                this.CacheAndInstGameObject(path, go, inst_count);//loader
            }
            if (callback != null)
            {
                callback(go);
            }
        }

        await ResourcesManager.Instance.CoLoadAsync(path,typeof(Prefab),_callback,progress_callback)
    }
    //-- 异步获取：必要时加载
    public GetGameObjectAsync(path:string,callback:any,args:object =null):void{
        let inst:Node = this.TryGetFromCache(path);
        if (!UIUtil.IsNull(inst))
        {
            this.InitInst(inst);
            callback(inst,args);
            return;
        }
        this.PreLoadGameObjectAsync(path,1,(ob)=>{
            let inst:Node = this.TryGetFromCache(path);
            this.InitInst(inst);
            callback(inst,args);
        })
    }
    //-- 异步获取：协程形式
    public async CoGetGameObjectAsync(path:string,
                                      progress_callback: (progress:number) => void =null,
                                      callback: (go:Node) => void =null,
                                      ):Promise<void>{
        let inst:Node  = this.TryGetFromCache(path);
        if (!UIUtil.IsNull(inst))
        {
            this.InitInst(inst);
            callback(inst);
            return
        }
        await this.CoPreLoadGameObjectAsync(path,1,null,progress_callback)
        inst = this.TryGetFromCache(path);
        if (!UIUtil.IsNull(inst))
        {
            this.InitInst(inst);
        }
        callback(inst);
    }

    //-- 检测是否已经被缓存
    private CheckHasCached(path: string):boolean {
        if (UIUtil.IsNullOrEmpty(path)){
            Log4.LogError("path err: "+path);
            UIUtil.Assert(UIUtil.IsNullOrEmpty(path), "path err : "+path);
        }
        UIUtil.Assert(path.endsWith(".prefab"), "GameObject must be prefab : " + path);

        let cachedInst:InstCache = this.__instCache[path]
        if (cachedInst != null && cachedInst.cache.length >0 )
        {
            return true;
        }
        let pooledGo:Prefab = this.__goPool[path];
        return !UIUtil.IsNull(pooledGo);
    }
    //-- 确保缓存节点下所有gameobject都删除了
    public Cleanup(includePooledGo:boolean = false):void{
        this.__instCache.clear();
        if (this.__cacheTransRoot !=null){
            let child:Node;
            for (let i:number = 0; i < this.__cacheTransRoot.children.length; i++)
            {
                let child:Node = UIUtil.GetChild(this.__cacheTransRoot, i);
                if (!UIUtil.IsNull(child))
                {
                    GameObject.Destroy(child);
                }

            }
            if(includePooledGo){
                this.__goPool.clear();
            }
        }
    }
    //-- 回收
    public RecycleGameObject(path:string,inst:Node,worldPositionStays:boolean=true){
        UIUtil.Assert(!UIUtil.IsNull(inst));
        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path),"path err : "+path);
        UIUtil.Assert(path.endsWith(".prefab"),"GameObject must be prefab : "+path);
        inst.setParent(this.__cacheTransRoot, worldPositionStays);
        inst.active = false;

        let cachedInst:InstCache = this.__instCache[path];
        if(cachedInst ==null){
            cachedInst = new InstCache();
            this.__instCache[path] = cachedInst;
        }
        cachedInst.Add(inst);
    }
    //-- 回收
    public DestroyDirectGameObject(path:string,inst:Node){
        UIUtil.Assert(!UIUtil.IsNull(inst));
        UIUtil.Assert(!UIUtil.IsNullOrEmpty(path),"path err : "+path);
        UIUtil.Assert(path.endsWith(".prefab"),"GameObject must be prefab : "+path);
        if (!UIUtil.IsNull(inst))
        {
            GameObject.Destroy(inst);
        }
        let cachedInst:InstCache = this.__instCache[path];
        if (cachedInst != null && cachedInst.cache.length>0)
        {
            cachedInst.Remove(inst);
        }
    }
}