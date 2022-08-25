goog.provide('webapp.tasks.views.new_task.mongodb_schema');
webapp.tasks.views.new_task.mongodb_schema.collections_tree = (function webapp$tasks$views$new_task$mongodb_schema$collections_tree(){
var dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (collections){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-small"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$mongodb_schema$collections_tree_$_iter__51533(s__51534){
return (new cljs.core.LazySeq(null,(function (){
var s__51534__$1 = s__51534;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51534__$1);
if(temp__5753__auto__){
var s__51534__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51534__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51534__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51536 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51535 = (0);
while(true){
if((i__51535 < size__4651__auto__)){
var vec__51537 = cljs.core._nth(c__4650__auto__,i__51535);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51537,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51537,(1),null);
cljs.core.chunk_append(b__51536,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-table.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51535,vec__51537,collection,_,c__4650__auto__,size__4651__auto__,b__51536,s__51534__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),collection),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(i__51535,vec__51537,collection,_,c__4650__auto__,size__4651__auto__,b__51536,s__51534__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),collection], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),collection], null)));

var G__51555 = (i__51535 + (1));
i__51535 = G__51555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51536),webapp$tasks$views$new_task$mongodb_schema$collections_tree_$_iter__51533(cljs.core.chunk_rest(s__51534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51536),null);
}
} else {
var vec__51540 = cljs.core.first(s__51534__$2);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-table.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__51540,collection,_,s__51534__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),collection),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(vec__51540,collection,_,s__51534__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),collection], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),collection], null)),webapp$tasks$views$new_task$mongodb_schema$collections_tree_$_iter__51533(cljs.core.rest(s__51534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(collections);
})())], null);
});
});
webapp.tasks.views.new_task.mongodb_schema.main = (function webapp$tasks$views$new_task$mongodb_schema$main(_){
var dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs","div.text-xs",978150553),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$mongodb_schema$main_$_iter__51543(s__51544){
return (new cljs.core.LazySeq(null,(function (){
var s__51544__$1 = s__51544;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51544__$1);
if(temp__5753__auto__){
var s__51544__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51544__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51544__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51546 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51545 = (0);
while(true){
if((i__51545 < size__4651__auto__)){
var vec__51547 = cljs.core._nth(c__4650__auto__,i__51545);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51547,(0),null);
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51547,(1),null);
cljs.core.chunk_append(b__51546,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-layers-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51545,vec__51547,db,collections,c__4650__auto__,size__4651__auto__,b__51546,s__51544__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)));
});})(i__51545,vec__51547,db,collections,c__4650__auto__,size__4651__auto__,b__51546,s__51544__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.mongodb_schema.collections_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),collections)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),db], null)));

var G__51556 = (i__51545 + (1));
i__51545 = G__51556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51546),webapp$tasks$views$new_task$mongodb_schema$main_$_iter__51543(cljs.core.chunk_rest(s__51544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51546),null);
}
} else {
var vec__51552 = cljs.core.first(s__51544__$2);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(0),null);
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-layers-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__51552,db,collections,s__51544__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)));
});})(vec__51552,db,collections,s__51544__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.mongodb_schema.collections_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),collections)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),db], null)),webapp$tasks$views$new_task$mongodb_schema$main_$_iter__51543(cljs.core.rest(s__51544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(schema);
})())], null);
});
});

//# sourceMappingURL=webapp.tasks.views.new_task.mongodb_schema.js.map
