goog.provide('webapp.connections.views.connections_filter');
webapp.connections.views.connections_filter.main = (function webapp$connections$views$connections_filter$main(searched_connections_atom){
var all_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_search_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (connections){
cljs.core.reset_BANG_(all_connections,connections);

return cljs.core.reset_BANG_(connections_search_status,null);
});
var set_connections_error = (function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get all connections",e], 0));

return cljs.core.reset_BANG_(connections_search_status,null);
});
var get_all_connections = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets?limit=2000&status=active",new cljs.core.Keyword(null,"on-success","on-success",1786904109),set_connections,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),set_connections_error], null));
});
var search = window.location.search;
var url_search_params = (new URLSearchParams(search));
var url_params_list = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$connections$views$connections_filter$main_$_iter__30216(s__30217){
return (new cljs.core.LazySeq(null,(function (){
var s__30217__$1 = s__30217;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30217__$1);
if(temp__5753__auto__){
var s__30217__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30217__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30217__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30219 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30218 = (0);
while(true){
if((i__30218 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__30218);
cljs.core.chunk_append(b__30219,q);

var G__30248 = (i__30218 + (1));
i__30218 = G__30248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30219),webapp$connections$views$connections_filter$main_$_iter__30216(cljs.core.chunk_rest(s__30217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30219),null);
}
} else {
var q = cljs.core.first(s__30217__$2);
return cljs.core.cons(q,webapp$connections$views$connections_filter$main_$_iter__30216(cljs.core.rest(s__30217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(url_search_params);
})());
var url_params_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),url_params_list);
var selected_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var selected_review = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"review_type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var selected_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"status");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var focus_on_search = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(191))){
var element = document.getElementById("connection-search");
if((!((element == null)))){
return element.focus();
} else {
return null;
}
} else {
return null;
}
});
var _ = document.addEventListener("keyup",focus_on_search);
return (function (){
var connections_types = webapp.connections.constants.connections_types_list;
var status = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["all","active","inactive"], null);
var status_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30212_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),p1__30212_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p1__30212_SHARP_], null));
}),status);
var reviews = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["none","anyone","team"], null);
var reviews_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30213_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),p1__30213_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p1__30213_SHARP_], null));
}),reviews);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-5 gap-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"display-key","display-key",-1366785151),new cljs.core.Keyword(null,"on-change-results-cb","on-change-results-cb",-909078750),new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293),new cljs.core.Keyword(null,"hide-results-list","hide-results-list",1113706229),new cljs.core.Keyword(null,"on-select-result","on-select-result",742011127),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826),new cljs.core.Keyword(null,"clear?","clear?",1363344639)],[new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__30214_SHARP_){
return cljs.core.reset_BANG_(searched_connections_atom,p1__30214_SHARP_);
}),"min-w-96",cljs.core.deref(selected_type),"Type \"/\" to search and go to your connection",(function (){
cljs.core.reset_BANG_(connections_search_status,new cljs.core.Keyword(null,"loading","loading",-737050189));

return get_all_connections();
}),"connection-search",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_search_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"review_type","review_type",743039553),new cljs.core.Keyword(null,"redact","redact",591770150),new cljs.core.Keyword(null,"type","type",1174270348)], null),true,(function (p1__30215_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-query-with-connection","new-query-with-connection",102562431),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30215_SHARP_)], null));
}),cljs.core.deref(all_connections),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),true])], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 flex gap-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),connections_types,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type",new cljs.core.Keyword(null,"name","name",1843675177),"connection-type",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(selected_type,v);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-connections","filter-connections",1401070195),"type",v], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),reviews_types,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_review),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Review type",new cljs.core.Keyword(null,"name","name",1843675177),"connection-review",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(selected_review,v);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-connections","filter-connections",1401070195),"review_type",v], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"options","options",99638489),status_options,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_status),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Status",new cljs.core.Keyword(null,"name","name",1843675177),"connection-status",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(selected_status,v);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-connections","filter-connections",1401070195),"status",v], null));
})], null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.connections.views.connections_filter.js.map
