goog.provide('webapp.tasks.views.new_task.target_information_tree');
webapp.tasks.views.new_task.target_information_tree.get_schema_query = "SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, DATA_TYPE, IS_NULLABLE\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_SCHEMA NOT IN ('information_schema', 'performance_schema', 'mysql', 'pg_catalog')\nORDER BY TABLE_SCHEMA, TABLE_NAME, ORDINAL_POSITION;";
webapp.tasks.views.new_task.target_information_tree.field_type_tree = (function webapp$tasks$views$new_task$target_information_tree$field_type_tree(type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-regular italic text-gray-600"], null),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),")"].join('')], null);
});
webapp.tasks.views.new_task.target_information_tree.fields_tree = (function webapp$tasks$views$new_task$target_information_tree$fields_tree(fields){
var dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-small"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$target_information_tree$fields_tree_$_iter__30863(s__30864){
return (new cljs.core.LazySeq(null,(function (){
var s__30864__$1 = s__30864;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30864__$1);
if(temp__5753__auto__){
var s__30864__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30864__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30864__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30866 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30865 = (0);
while(true){
if((i__30865 < size__4651__auto__)){
var vec__30867 = cljs.core._nth(c__4650__auto__,i__30865);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30867,(0),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30867,(1),null);
cljs.core.chunk_append(b__30866,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-field-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30865,vec__30867,field,field_type,c__4650__auto__,size__4651__auto__,b__30866,s__30864__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(i__30865,vec__30867,field,field_type,c__4650__auto__,size__4651__auto__,b__30866,s__30864__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.field_type_tree,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,field_type))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null)));

var G__30908 = (i__30865 + (1));
i__30865 = G__30908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30866),webapp$tasks$views$new_task$target_information_tree$fields_tree_$_iter__30863(cljs.core.chunk_rest(s__30864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30866),null);
}
} else {
var vec__30870 = cljs.core.first(s__30864__$2);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30870,(0),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30870,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-field-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30870,field,field_type,s__30864__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(vec__30870,field,field_type,s__30864__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),field], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),field),new cljs.core.Keyword(null,"open","open",-1763596448)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.field_type_tree,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,field_type))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null)),webapp$tasks$views$new_task$target_information_tree$fields_tree_$_iter__30863(cljs.core.rest(s__30864__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(fields);
})())], null);
});
});
webapp.tasks.views.new_task.target_information_tree.tables_tree = (function webapp$tasks$views$new_task$target_information_tree$tables_tree(){
var dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (tables){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-small"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$target_information_tree$tables_tree_$_iter__30873(s__30874){
return (new cljs.core.LazySeq(null,(function (){
var s__30874__$1 = s__30874;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30874__$1);
if(temp__5753__auto__){
var s__30874__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30874__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30874__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30876 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30875 = (0);
while(true){
if((i__30875 < size__4651__auto__)){
var vec__30878 = cljs.core._nth(c__4650__auto__,i__30875);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(0),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(1),null);
cljs.core.chunk_append(b__30876,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-folder-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30875,vec__30878,table,fields,c__4650__auto__,size__4651__auto__,b__30876,s__30874__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(i__30875,vec__30878,table,fields,c__4650__auto__,size__4651__auto__,b__30876,s__30874__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),table], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.fields_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),fields)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)));

var G__30909 = (i__30875 + (1));
i__30875 = G__30909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30876),webapp$tasks$views$new_task$target_information_tree$tables_tree_$_iter__30873(cljs.core.chunk_rest(s__30874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30876),null);
}
} else {
var vec__30881 = cljs.core.first(s__30874__$2);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30881,(0),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30881,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-folder-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30881,table,fields,s__30874__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.Keyword(null,"closed","closed",-919675359):new cljs.core.Keyword(null,"open","open",-1763596448)));
});})(vec__30881,table,fields,s__30874__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),table], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),table),new cljs.core.Keyword(null,"open","open",-1763596448)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.fields_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),fields)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)),webapp$tasks$views$new_task$target_information_tree$tables_tree_$_iter__30873(cljs.core.rest(s__30874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tables);
})())], null);
});
});
webapp.tasks.views.new_task.target_information_tree.databases_tree = (function webapp$tasks$views$new_task$target_information_tree$databases_tree(_){
var dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs","div.text-xs",978150553),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$target_information_tree$databases_tree_$_iter__30884(s__30885){
return (new cljs.core.LazySeq(null,(function (){
var s__30885__$1 = s__30885;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30885__$1);
if(temp__5753__auto__){
var s__30885__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30885__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30885__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30887 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30886 = (0);
while(true){
if((i__30886 < size__4651__auto__)){
var vec__30897 = cljs.core._nth(c__4650__auto__,i__30886);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30897,(0),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30897,(1),null);
cljs.core.chunk_append(b__30887,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-layers-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30886,vec__30897,db,tables,c__4650__auto__,size__4651__auto__,b__30887,s__30885__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)));
});})(i__30886,vec__30897,db,tables,c__4650__auto__,size__4651__auto__,b__30887,s__30885__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.tables_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),tables)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),db], null)));

var G__30911 = (i__30886 + (1));
i__30886 = G__30911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30887),webapp$tasks$views$new_task$target_information_tree$databases_tree_$_iter__30884(cljs.core.chunk_rest(s__30885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30887),null);
}
} else {
var vec__30900 = cljs.core.first(s__30885__$2);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30900,(0),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30900,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-layers-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["hover:text-blue-500 hover:underline cursor-pointer ","flex items-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30900,db,tables,s__30885__$2,temp__5753__auto__,dropdown_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dropdown_status,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)));
});})(vec__30900,db,tables,s__30885__$2,temp__5753__auto__,dropdown_status))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 flex-shrink-0 opacity-30"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"/icons/icon-cheveron-up.svg":"/icons/icon-cheveron-down.svg")], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dropdown_status),db),new cljs.core.Keyword(null,"closed","closed",-919675359)))?"h-0 overflow-hidden":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.tables_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),tables)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),db], null)),webapp$tasks$views$new_task$target_information_tree$databases_tree_$_iter__30884(cljs.core.rest(s__30885__$2)));
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
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.new_task !== 'undefined') && (typeof webapp.tasks.views.new_task.target_information_tree !== 'undefined') && (typeof webapp.tasks.views.new_task.target_information_tree.tree_view_status !== 'undefined')){
} else {
webapp.tasks.views.new_task.target_information_tree.tree_view_status = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30903 = cljs.core.get_global_hierarchy;
return (fexpr__30903.cljs$core$IFn$_invoke$arity$0 ? fexpr__30903.cljs$core$IFn$_invoke$arity$0() : fexpr__30903.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.new-task.target-information-tree","tree-view-status"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.new_task.target_information_tree.tree_view_status.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small items-center py-regular text-xs text-gray-600"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"italic"], null),"Loading schema"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 flex-shrink-0 animate-spin opacity-60"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle.svg"], null)], null)], null)], null);
}));
webapp.tasks.views.new_task.target_information_tree.tree_view_status.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,tree){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.databases_tree,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),tree)], null);
}));
webapp.tasks.views.new_task.target_information_tree.main = (function webapp$tasks$views$new_task$target_information_tree$main(target){
var database_schema = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","database-schema","webapp.subs/database-schema",470509894)], null));
var local_target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(target);
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-database-schema","get-database-schema",385125737),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),webapp.tasks.views.new_task.target_information_tree.get_schema_query], null));
return (function (target__$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_target),target__$1)){
var __30913__$1 = cljs.core.reset_BANG_(local_target,target__$1);
var __30914__$2 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-database-schema","get-database-schema",385125737),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target__$1),webapp.tasks.views.new_task.target_information_tree.get_schema_query], null));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm font-bold mb-small"], null),"Tables"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-x-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.tree_view_status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(database_schema)),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(database_schema))], null)], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.new_task.target_information_tree.js.map
