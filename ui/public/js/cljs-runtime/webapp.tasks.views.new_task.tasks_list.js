goog.provide('webapp.tasks.views.new_task.tasks_list');
webapp.tasks.views.new_task.tasks_list.open_modal = (function webapp$tasks$views$new_task$tasks_list$open_modal(task){
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-task-by-id","get-task-by-id",1555438274),task], null));
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.task_details.main], null),new cljs.core.Keyword(null,"large","large",-196820544)], null));
return null;
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.new_task !== 'undefined') && (typeof webapp.tasks.views.new_task.tasks_list !== 'undefined') && (typeof webapp.tasks.views.new_task.tasks_list.refresh_tasks !== 'undefined')){
} else {
webapp.tasks.views.new_task.tasks_list.refresh_tasks = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31155 = cljs.core.get_global_hierarchy;
return (fexpr__31155.cljs$core$IFn$_invoke$arity$0 ? fexpr__31155.cljs$core$IFn$_invoke$arity$0() : fexpr__31155.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.new-task.tasks-list","refresh-tasks"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.new_task.tasks_list.refresh_tasks.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.text-xs.flex-grow.items-center.justify-end","div.flex.text-xs.flex-grow.items-center.justify-end",-1008934080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-4","figure.w-4",-291729794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.animate-spin","img.animate-spin",-1697433641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-refresh.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"loading"], null)], null)], null);
}));
webapp.tasks.views.new_task.tasks_list.refresh_tasks.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.text-xs.cursor-pointer.flex-grow.items-center.justify-end","div.flex.text-xs.cursor-pointer.flex-grow.items-center.justify-end",1727388463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->get-history","new-task->get-history",-1688382200)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-4","figure.w-4",-291729794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-refresh-blue.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-blue-500","span.text-blue-500",2081995468),"refresh"], null)], null);
}));
webapp.tasks.views.new_task.tasks_list.main = (function webapp$tasks$views$new_task$tasks_list$main(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->connection-history","new-task->connection-history",1597795125)], null));
var interval = window.setInterval((function (){
if(cljs.core.not(document.hidden)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->get-history","new-task->get-history",-1688382200)], null));
} else {
return null;
}
}),(5000));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"queries-history",new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.clearInterval(interval);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-regular.mb-x-large","div.pb-regular.mb-x-large",-1421790438),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex.mb-small.px-small","header.flex.mb-small.px-small",-780612945),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.tasks_list.refresh_tasks,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$tasks_list$main_$_iter__31165(s__31166){
return (new cljs.core.LazySeq(null,(function (){
var s__31166__$1 = s__31166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31166__$1);
if(temp__5753__auto__){
var s__31166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31166__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31166__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31168 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31167 = (0);
while(true){
if((i__31167 < size__4651__auto__)){
var task = cljs.core._nth(c__4650__auto__,i__31167);
cljs.core.chunk_append(b__31168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-b.hover:bg-gray-100.p-small.cursor-pointer","div.border-b.hover:bg-gray-100.p-small.cursor-pointer",1985790700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31167,task,c__4650__auto__,size__4651__auto__,b__31168,s__31166__$2,temp__5753__auto__,tasks,interval){
return (function (){
return webapp.tasks.views.new_task.tasks_list.open_modal(task);
});})(i__31167,task,c__4650__auto__,size__4651__auto__,b__31168,s__31166__$2,temp__5753__auto__,tasks,interval))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex","header.flex",-821005013),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-500","div.text-xs.text-gray-500",1569373991),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-900.truncate.overflow-hidden.flex-grow.text-right.italic","div.text-xs.text-gray-900.truncate.overflow-hidden.flex-grow.text-right.italic",1059363183),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500"], null),webapp.formatters.time_ago(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-900 font-bold truncate overflow-hidden"], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500 font-light truncate overflow-hidden"], null),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__31203 = (i__31167 + (1));
i__31167 = G__31203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31168),webapp$tasks$views$new_task$tasks_list$main_$_iter__31165(cljs.core.chunk_rest(s__31166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31168),null);
}
} else {
var task = cljs.core.first(s__31166__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-b.hover:bg-gray-100.p-small.cursor-pointer","div.border-b.hover:bg-gray-100.p-small.cursor-pointer",1985790700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (task,s__31166__$2,temp__5753__auto__,tasks,interval){
return (function (){
return webapp.tasks.views.new_task.tasks_list.open_modal(task);
});})(task,s__31166__$2,temp__5753__auto__,tasks,interval))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex","header.flex",-821005013),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-500","div.text-xs.text-gray-500",1569373991),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-900.truncate.overflow-hidden.flex-grow.text-right.italic","div.text-xs.text-gray-900.truncate.overflow-hidden.flex-grow.text-right.italic",1059363183),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500"], null),webapp.formatters.time_ago(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(task))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-900 font-bold truncate overflow-hidden"], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(task)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500 font-light truncate overflow-hidden"], null),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),webapp$tasks$views$new_task$tasks_list$main_$_iter__31165(cljs.core.rest(s__31166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.px-small.py-regular.text-sm.text-blue-500.cursor-pointer","footer.px-small.py-regular.text-sm.text-blue-500.cursor-pointer",-529987800),"Load more"], null)], null);
})], null));
});

//# sourceMappingURL=webapp.tasks.views.new_task.tasks_list.js.map
