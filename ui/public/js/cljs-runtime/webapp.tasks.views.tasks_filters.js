goog.provide('webapp.tasks.views.tasks_filters');
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.tasks_filters !== 'undefined') && (typeof webapp.tasks.views.tasks_filters.status_options !== 'undefined')){
} else {
webapp.tasks.views.tasks_filters.status_options = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"text","text",-1790561697),"All"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"created",new cljs.core.Keyword(null,"text","text",-1790561697),"created"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"pending-review",new cljs.core.Keyword(null,"text","text",-1790561697),"pending-review"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"approved",new cljs.core.Keyword(null,"text","text",-1790561697),"approved"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rejected",new cljs.core.Keyword(null,"text","text",-1790561697),"rejected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ready",new cljs.core.Keyword(null,"text","text",-1790561697),"ready"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"running",new cljs.core.Keyword(null,"text","text",-1790561697),"running"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"success",new cljs.core.Keyword(null,"text","text",-1790561697),"success"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"failure",new cljs.core.Keyword(null,"text","text",-1790561697),"failure"], null)], null);
}
webapp.tasks.views.tasks_filters.form = (function webapp$tasks$views$tasks_filters$form(_){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null));
var users = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null));
var all_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_combobox_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (connections){
cljs.core.reset_BANG_(all_connections,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30293_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30293_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30293_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30293_SHARP_)),")"].join('')], null));
}),connections));

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var set_connections_error = (function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get all connections",e], 0));

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var get_all_connections = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets?limit=2000&status=active",new cljs.core.Keyword(null,"on-success","on-success",1786904109),set_connections,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),set_connections_error], null));
});
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings->get-users","settings->get-users",1542304376)], null));
return (function (filters){
var users_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30296_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__30296_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__30296_SHARP_))], null));
}),cljs.core.deref(users));
var admin_QMARK_ = cljs.core.some((function (p1__30299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",p1__30299_SHARP_);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
var end_date = webapp.formatters.remove_time_from_date(webapp.formatters.convert_query_params__GT_datetime((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"end-date");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
var start_date = webapp.formatters.remove_time_from_date(webapp.formatters.convert_query_params__GT_datetime((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"start-date");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
var convert_date__GT_number = (function (date){
return parseInt(clojure.string.replace(date,"-",""));
});
var dispatch_date = (function (filter_date,other_date,filter_date_string,condition_bigger_than_QMARK_){
if(cljs.core.truth_((function (){var or__4253__auto__ = clojure.string.blank_QMARK_(other_date);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return condition_bigger_than_QMARK_;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 2, ["end-date",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_date)," 23:59:59"].join(''),"start-date",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_date)," 00:00:00"].join('')], null)], null));
} else {
if(clojure.string.blank_QMARK_(filter_date)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 2, ["start-date",filter_date,"end-date",filter_date], null)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),cljs.core.PersistentArrayMap.createAsIfByAssoc([filter_date_string,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_date)," 00:00:00"].join('')])], null));

}
}
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col sm:flex-row gap-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular"], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),users_options,new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"user-email");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),"User email",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"user@company.com",new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),"min-w-64",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30302_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 1, ["user-email",p1__30302_SHARP_], null)], null));
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-user-email"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"clear?","clear?",1363344639)],["min-w-64",(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"target");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),"Select a connection",(function (){
get_all_connections();

return cljs.core.reset_BANG_(connections_combobox_status,new cljs.core.Keyword(null,"loading","loading",-737050189));
}),"select-connection",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_combobox_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),"Select a connection","Connection",cljs.core.deref(all_connections),(function (p1__30303_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 1, ["target",p1__30303_SHARP_], null)], null));
}),true])], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow gap-regular items-stretch"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Task type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30304_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 1, ["type",p1__30304_SHARP_.target.value], null)], null));
}),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"text","text",-1790561697),"All"], null)], null),webapp.connections.constants.connections_types_list))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Status",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30305_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),new cljs.core.PersistentArrayMap(null, 1, ["status",p1__30305_SHARP_.target.value], null)], null));
}),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"status");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),webapp.tasks.views.tasks_filters.status_options], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow gap-regular items-scretch"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Start date",new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"value","value",305978217),start_date,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30306_SHARP_){
return dispatch_date(p1__30306_SHARP_.target.value,end_date,"start-date",(convert_date__GT_number(end_date) <= convert_date__GT_number(p1__30306_SHARP_.target.value)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"End date",new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.Keyword(null,"value","value",305978217),end_date,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30307_SHARP_){
return dispatch_date(p1__30307_SHARP_.target.value,start_date,"end-date",(convert_date__GT_number(p1__30307_SHARP_.target.value) <= convert_date__GT_number(start_date)));
})], null)], null)], null)], null);
});
});
webapp.tasks.views.tasks_filters.tasks_filters = (function webapp$tasks$views$tasks_filters$tasks_filters(_){
return (function (filters){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full relative flex gap-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_filters.form,filters], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.tasks_filters.js.map
