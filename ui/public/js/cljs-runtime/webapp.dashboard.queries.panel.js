goog.provide('webapp.dashboard.queries.panel');
webapp.dashboard.queries.panel.dashboard_connection_filter = (function webapp$dashboard$queries$panel$dashboard_connection_filter(){
var url_params_map = webapp.utilities.get_url_params();
var selected_connection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"connection");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var selected_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"user-email");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var users = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings->get-users","settings->get-users",1542304376)], null));
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
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-3 gap-regular mb-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"display-key","display-key",-1366785151),new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293),new cljs.core.Keyword(null,"on-select-result","on-select-result",742011127),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826),new cljs.core.Keyword(null,"clear?","clear?",1363344639)],[new cljs.core.Keyword(null,"name","name",1843675177),"min-w-96",cljs.core.deref(selected_connection),"Show data for a specific connection",(function (){
cljs.core.reset_BANG_(connections_search_status,new cljs.core.Keyword(null,"loading","loading",-737050189));

return get_all_connections();
}),"connection-search",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_search_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"review_type","review_type",743039553),new cljs.core.Keyword(null,"redact","redact",591770150),new cljs.core.Keyword(null,"type","type",1174270348)], null),(function (item){
cljs.core.reset_BANG_(selected_connection,item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->filter","dashboard->filter",1322922476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null));
}),cljs.core.deref(all_connections),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),true])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30314_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__30314_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__30314_SHARP_))], null));
}),cljs.core.deref(users)),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_user),new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Show by user email",new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),"min-w-64",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (u){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->filter","dashboard->filter",1322922476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),u], null)], null));

return cljs.core.reset_BANG_(selected_user,u);
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-user-email"], null)], null)], null)], null);
});
});
webapp.dashboard.queries.panel.panel = (function webapp$dashboard$queries$panel$panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-large"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.panel.dashboard_connection_filter], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-5 gap-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 grid grid-rows gap-regular"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.running.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.waiting_review.main], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-rows gap-regular col-span-3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.status_overview.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.longer_time.main], null)], null)], null)], null);
});

//# sourceMappingURL=webapp.dashboard.queries.panel.js.map
