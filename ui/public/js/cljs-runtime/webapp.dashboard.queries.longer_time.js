goog.provide('webapp.dashboard.queries.longer_time');
webapp.dashboard.queries.longer_time.queries_list_empty = (function webapp$dashboard$queries$longer_time$queries_list_empty(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-grow items-center justify-center h-full ","text-xs text-gray-500 font-italic"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"No tasks for the selected date"], null)], null);
});
webapp.dashboard.queries.longer_time.query_item = (function webapp$dashboard$queries$longer_time$query_item(item){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex gap-small items-center p-small border-b border-gray-200 text-xs ","hover:bg-gray-50 cursor-pointer"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-task-by-id","get-task-by-id",1555438274),item], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.task_details.main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy-to-new-script?","copy-to-new-script?",-392082),true], null)], null),new cljs.core.Keyword(null,"large","large",-196820544)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xxs font-bold text-gray-500"], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700"], null),new cljs.core.Keyword(null,"user_email","user_email",-926613652).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center text-gray-800"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold"], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-0.5 text-gray-700"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)),")"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xxs text-gray-500 flex-grow text-right"], null),["Took ",webapp.formatters.time_elapsed(new cljs.core.Keyword(null,"elapsed_time_ms","elapsed_time_ms",-1144123113).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)], null);
});
webapp.dashboard.queries.longer_time.queries_list = (function webapp$dashboard$queries$longer_time$queries_list(queries){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-auto h-56"], null),(function (){var iter__4652__auto__ = (function webapp$dashboard$queries$longer_time$queries_list_$_iter__31065(s__31066){
return (new cljs.core.LazySeq(null,(function (){
var s__31066__$1 = s__31066;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31066__$1);
if(temp__5753__auto__){
var s__31066__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31066__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31066__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31068 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31067 = (0);
while(true){
if((i__31067 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__31067);
cljs.core.chunk_append(b__31068,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.longer_time.query_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__31099 = (i__31067 + (1));
i__31067 = G__31099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31068),webapp$dashboard$queries$longer_time$queries_list_$_iter__31065(cljs.core.chunk_rest(s__31066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31068),null);
}
} else {
var item = cljs.core.first(s__31066__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.longer_time.query_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),webapp$dashboard$queries$longer_time$queries_list_$_iter__31065(cljs.core.rest(s__31066__$2)));
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
webapp.dashboard.queries.longer_time.main = (function webapp$dashboard$queries$longer_time$main(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->slower-queries","dashboard->slower-queries",-12811494)], null));
var dates_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["30 days","15 days","7 days","Today"], null);
var switch_dates = (function (date){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->get-slower-queries","dashboard->get-slower-queries",-1459084730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-x-days","last-x-days",-1608055052),date], null)], null));
});
var _ = switch_dates("7 days");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"loading","loading",-737050189)))?"opacity-50 pointer-events-none ":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small items-center mb-small px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Slower queries",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex gap-regular flex-shrink ","text-xs text-gray-600 "].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$dashboard$queries$longer_time$main_$_iter__31095(s__31096){
return (new cljs.core.LazySeq(null,(function (){
var s__31096__$1 = s__31096;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31096__$1);
if(temp__5753__auto__){
var s__31096__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31096__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31096__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31098 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31097 = (0);
while(true){
if((i__31097 < size__4651__auto__)){
var date = cljs.core._nth(c__4650__auto__,i__31097);
cljs.core.chunk_append(b__31098,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer hover:text-blue-500 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,new cljs.core.Keyword(null,"selected-days","selected-days",614652841).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"text-blue-500":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31097,date,c__4650__auto__,size__4651__auto__,b__31098,s__31096__$2,temp__5753__auto__,state,dates_options,switch_dates,_){
return (function (){
return switch_dates(date);
});})(i__31097,date,c__4650__auto__,size__4651__auto__,b__31098,s__31096__$2,temp__5753__auto__,state,dates_options,switch_dates,_))
], null),date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)));

var G__31100 = (i__31097 + (1));
i__31097 = G__31100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31098),webapp$dashboard$queries$longer_time$main_$_iter__31095(cljs.core.chunk_rest(s__31096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31098),null);
}
} else {
var date = cljs.core.first(s__31096__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer hover:text-blue-500 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,new cljs.core.Keyword(null,"selected-days","selected-days",614652841).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"text-blue-500":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date,s__31096__$2,temp__5753__auto__,state,dates_options,switch_dates,_){
return (function (){
return switch_dates(date);
});})(date,s__31096__$2,temp__5753__auto__,state,dates_options,switch_dates,_))
], null),date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)),webapp$dashboard$queries$longer_time$main_$_iter__31095(cljs.core.rest(s__31096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(dates_options);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.longer_time.queries_list_empty], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.longer_time.queries_list,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null))], null)], null);
});
});

//# sourceMappingURL=webapp.dashboard.queries.longer_time.js.map
