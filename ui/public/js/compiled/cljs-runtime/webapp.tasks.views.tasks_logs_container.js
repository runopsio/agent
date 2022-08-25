goog.provide('webapp.tasks.views.tasks_logs_container');
webapp.tasks.views.tasks_logs_container.log_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Table");
webapp.tasks.views.tasks_logs_container.transform_logs__GT_matrix = (function webapp$tasks$views$tasks_logs_container$transform_logs__GT_matrix(task_logs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31465_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__31465_SHARP_,/\t/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(task_logs,/\n/));
});
webapp.tasks.views.tasks_logs_container.transform_logs__GT_csv = (function webapp$tasks$views$tasks_logs_container$transform_logs__GT_csv(task_logs){
return clojure.string.replace(task_logs,/\t/,",");
});
webapp.tasks.views.tasks_logs_container.open_logs = (function webapp$tasks$views$tasks_logs_container$open_logs(task_id){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.tasks.events","get-task-logs-url","webapp.tasks.events/get-task-logs-url",1590084246),task_id,(function (p1__31473_SHARP_){
return window.open(new cljs.core.Keyword(null,"logs_url","logs_url",-1232520878).cljs$core$IFn$_invoke$arity$1(p1__31473_SHARP_),"_blank").focus();
})], null));
});
webapp.tasks.views.tasks_logs_container.item_dropdown = (function webapp$tasks$views$tasks_logs_container$item_dropdown(id,logs,target_type){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b py-small px-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.tasks.views.tasks_logs_container.open_logs(id);
}),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Open logs in a new tab"], null)], null),(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([target_type]),cljs.core.list("mysql","postgres","sql-server")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-small px-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.utilities.download_string_as_csv(webapp.tasks.views.tasks_logs_container.transform_logs__GT_csv(logs),"download");
})], null),"Download logs in CSV"], null)], null):null)], null);
});
webapp.tasks.views.tasks_logs_container.tab_container = (function webapp$tasks$views$tasks_logs_container$tab_container(p__31475,p__31476){
var map__31477 = p__31475;
var map__31477__$1 = cljs.core.__destructure_map(map__31477);
var task_logs_heads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31477__$1,new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895));
var task_logs_body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31477__$1,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303));
var map__31478 = p__31476;
var map__31478__$1 = cljs.core.__destructure_map(map__31478);
var fixed_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"logs","logs",1068148008));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31474_SHARP_){
return cljs.core.reset_BANG_(webapp.tasks.views.tasks_logs_container.log_view,p1__31474_SHARP_);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Plain text"], null)], null)], null),(function (){var G__31479 = cljs.core.deref(webapp.tasks.views.tasks_logs_container.log_view);
switch (G__31479) {
case "Table":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.data_grid_table.main,task_logs_heads,task_logs_body], null)], null);

break;
case "Plain text":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.logs_container.container,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31479)].join('')));

}
})()], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.tasks_logs_container !== 'undefined') && (typeof webapp.tasks.views.tasks_logs_container.logs_view !== 'undefined')){
} else {
webapp.tasks.views.tasks_logs_container.logs_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31480 = cljs.core.get_global_hierarchy;
return (fexpr__31480.cljs$core$IFn$_invoke$arity$0 ? fexpr__31480.cljs$core$IFn$_invoke$arity$0() : fexpr__31480.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.tasks-logs-container","logs-view"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.tasks_logs_container.logs_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sql","sql",1251448786),(function (_,p__31481,popover_state){
var map__31482 = p__31481;
var map__31482__$1 = cljs.core.__destructure_map(map__31482);
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var task_logs_heads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895));
var task_logs_body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303));
var logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"logs","logs",1068148008));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"target","target",253001721));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var fixed_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-0 top-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(popover_state,true);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(popover_state),new cljs.core.Keyword(null,"component","component",1555936782),webapp.tasks.views.tasks_logs_container.item_dropdown(task_id,logs,target),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.reset_BANG_(popover_state,false);
})], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.tab_container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895),task_logs_heads,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303),task_logs_body], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null)], null)], null);
}));
webapp.tasks.views.tasks_logs_container.logs_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-sql","not-sql",480161609),(function (_,p__31489,popover_state){
var map__31490 = p__31489;
var map__31490__$1 = cljs.core.__destructure_map(map__31490);
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"logs","logs",1068148008));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"target","target",253001721));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var fixed_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative pt-7"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-0 top-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(popover_state,true);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(popover_state),new cljs.core.Keyword(null,"component","component",1555936782),webapp.tasks.views.tasks_logs_container.item_dropdown(task_id,logs,target),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.reset_BANG_(popover_state,false);
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.logs_container.container,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null)], null)], null);
}));
webapp.tasks.views.tasks_logs_container.main = (function webapp$tasks$views$tasks_logs_container$main(_){
var popover_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__31500){
var map__31501 = p__31500;
var map__31501__$1 = cljs.core.__destructure_map(map__31501);
var logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"logs","logs",1068148008));
var log_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"log-status","log-status",1744062288));
var task_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"task-status","task-status",1198461430));
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"target","target",253001721));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var fixed_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31501__$1,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849));
var task_logs_transformed = webapp.tasks.views.tasks_logs_container.transform_logs__GT_matrix(logs);
var task_logs_heads = cljs.core.first(task_logs_transformed);
var task_logs_body = cljs.core.next(task_logs_transformed);
cljs.core.reset_BANG_(webapp.tasks.views.tasks_logs_container.log_view,"Table");

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_status,"success")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(log_status,new cljs.core.Keyword(null,"success","success",1890645906))))){
var G__31510 = target;
switch (G__31510) {
case "mysql":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.logs_view,new cljs.core.Keyword(null,"sql","sql",1251448786),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895),task_logs_heads,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303),task_logs_body,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),log_status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),popover_state], null);

break;
case "postgres":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.logs_view,new cljs.core.Keyword(null,"sql","sql",1251448786),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895),task_logs_heads,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303),task_logs_body,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),log_status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),popover_state], null);

break;
case "sql-server":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.logs_view,new cljs.core.Keyword(null,"sql","sql",1251448786),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"task-logs-heads","task-logs-heads",807760895),task_logs_heads,new cljs.core.Keyword(null,"task-logs-body","task-logs-body",-1611332303),task_logs_body,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),log_status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),popover_state], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.logs_view,new cljs.core.Keyword(null,"not-sql","not-sql",480161609),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),log_status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),popover_state], null);

}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.logs_view,new cljs.core.Keyword(null,"not-sql","not-sql",480161609),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),fixed_height_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),log_status,new cljs.core.Keyword(null,"logs","logs",1068148008),logs,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null),popover_state], null);
}
});
});

//# sourceMappingURL=webapp.tasks.views.tasks_logs_container.js.map
