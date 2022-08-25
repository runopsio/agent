goog.provide('webapp.dashboard.queries.running');
webapp.dashboard.queries.running.queries_list_empty = (function webapp$dashboard$queries$running$queries_list_empty(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-grow items-center justify-center h-full ","text-xs text-gray-500 font-italic"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"No tasks running at the moment"], null)], null);
});
webapp.dashboard.queries.running.query_item = (function webapp$dashboard$queries$running$query_item(item){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex gap-small items-center p-small border-b border-gray-200 text-xs ","hover:bg-gray-50 cursor-pointer"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-task-by-id","get-task-by-id",1555438274),item], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.task_details.main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy-to-new-script?","copy-to-new-script?",-392082),true], null)], null),new cljs.core.Keyword(null,"large","large",-196820544)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xxs font-bold text-gray-500"], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700"], null),new cljs.core.Keyword(null,"user_email","user_email",-926613652).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center text-gray-800"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold"], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-0.5 text-gray-700"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)),")"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xxs text-gray-500 flex-grow text-right"], null),["Since ",webapp.formatters.time_ago(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)], null);
});
webapp.dashboard.queries.running.queries_list = (function webapp$dashboard$queries$running$queries_list(queries){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4652__auto__ = (function webapp$dashboard$queries$running$queries_list_$_iter__31073(s__31074){
return (new cljs.core.LazySeq(null,(function (){
var s__31074__$1 = s__31074;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31074__$1);
if(temp__5753__auto__){
var s__31074__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31074__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31074__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31076 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31075 = (0);
while(true){
if((i__31075 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__31075);
cljs.core.chunk_append(b__31076,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.running.query_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__31102 = (i__31075 + (1));
i__31075 = G__31102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31076),webapp$dashboard$queries$running$queries_list_$_iter__31073(cljs.core.chunk_rest(s__31074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31076),null);
}
} else {
var item = cljs.core.first(s__31074__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.running.query_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),webapp$dashboard$queries$running$queries_list_$_iter__31073(cljs.core.rest(s__31074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(queries));
})()], null);
});
webapp.dashboard.queries.running.main = (function webapp$dashboard$queries$running$main(){
var running_queries = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->running-queries","dashboard->running-queries",-1231969861)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->get-running-queries","dashboard->get-running-queries",-885349052)], null));
var interval = window.setInterval((function (){
if(cljs.core.not(document.hidden)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->get-running-queries","dashboard->get-running-queries",-885349052)], null));
} else {
return null;
}
}),(10000));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"running-tasks/main",new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.clearInterval(interval);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Running now",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-shrink text-xs px-1.5 pt-0.5 font-bold text-center ","text-white h-5 rounded-full bg-gray-900"].join('')], null),cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(running_queries))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.card.main,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inner-space?","inner-space?",1349450580),false,new cljs.core.Keyword(null,"class","class",-2030961996),"h-56",new cljs.core.Keyword(null,"children","children",-940561982),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(running_queries)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.running.queries_list_empty], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.running.queries_list,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(running_queries)),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(running_queries))], null))], null)], null)], null);
})], null));
});

//# sourceMappingURL=webapp.dashboard.queries.running.js.map
