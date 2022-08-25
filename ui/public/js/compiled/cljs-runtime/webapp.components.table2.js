goog.provide('webapp.components.table2');
webapp.components.table2.th_mapped = (function webapp$components$table2$th_mapped(head){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),head], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),head], null));
});
webapp.components.table2.thead = (function webapp$components$table2$thead(heads){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(webapp.components.table2.th_mapped,heads)], null)], null);
});
webapp.components.table2.td_mapped = (function webapp$components$table2$td_mapped(item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap border-b border-gray-200 py-4 pl-4 text-sm font-medium text-gray-500"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null));
});
webapp.components.table2.tbody = (function webapp$components$table2$tbody(body){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4652__auto__ = (function webapp$components$table2$tbody_$_iter__31905(s__31906){
return (new cljs.core.LazySeq(null,(function (){
var s__31906__$1 = s__31906;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31906__$1);
if(temp__5753__auto__){
var s__31906__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31906__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31906__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31908 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31907 = (0);
while(true){
if((i__31907 < size__4651__auto__)){
var items = cljs.core._nth(c__4650__auto__,i__31907);
cljs.core.chunk_append(b__31908,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(webapp.components.table2.td_mapped,items)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),items], null)));

var G__31909 = (i__31907 + (1));
i__31907 = G__31909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31908),webapp$components$table2$tbody_$_iter__31905(cljs.core.chunk_rest(s__31906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31908),null);
}
} else {
var items = cljs.core.first(s__31906__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2(webapp.components.table2.td_mapped,items)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),items], null)),webapp$components$table2$tbody_$_iter__31905(cljs.core.rest(s__31906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(body);
})()], null);
});
webapp.components.table2.main = (function webapp$components$table2$main(heads,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-8 flex flex-col"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-my-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block min-w-full py-2 align-middle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow-sm ring-1 ring-black ring-opacity-5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-w-full border-separate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.table2.thead,heads], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.table2.tbody,body], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=webapp.components.table2.js.map
