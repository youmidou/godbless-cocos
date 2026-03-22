/**
 *--行为树
 *--author: yh @ 2023-02-14
 使用列子
 bt= BT.Root();
 bt.OpenBranch(
 //每个分支key不能重名
 BT.Board("main").OpenBranch(
 BT.Call("t1",MsgProcessor_t1),
 BT.Call("t2",MsgProcessor_t2),
 BT.Selector("selector_respin_or_freespin",this.MsgSelector_MapPickSelector,yes:"do_respin",no:"do_freespin"),
 BT.Call("do_respin",MsgProcessor_do_respin),
 BT.Waitforframes("dengdai1",1),
 BT.Call("t3",MsgProcessor_t3),
 BT.Call("do_freespin",MsgProcessor_do_freespin),
 BT.Call("t4",MsgProcessor_t4)
 ),
 BT.Board("freespin").OpenBranch(
 BT.Call("t1",Msg_t1),
 BT.Call("t2",Msg_t2),
 BT.Call("t3",Msg_t3),
 BT.Call("t4",Msg_t4)
 ),
 BT.Board("respin").OpenBranch(
 BT.Call("t1",Msg_t1),
 BT.Call("t2",Msg_t2),
 BT.Call("t3",Msg_t3),
 BT.Call("t4",Msg_t4)
 )
 );
 bt.ResetBoardRunningStack("main","t1");
 */
export class BT{

}

//==================================================================
export class Root{

}