goog.provide('webapp.connections.views.connection_form_modal');
webapp.connections.views.connection_form_modal.connection_creation = (function webapp$connections$views$connection_form_modal$connection_creation(component__GT_config_inputs){
var script_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Kubernetes - Helm");
var agents_options__GT_get_selected = (function (agents,selected){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30243_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30243_SHARP_),selected);
}),agents));
});
return (function (_,p__30245){
var map__30246 = p__30245;
var map__30246__$1 = cljs.core.__destructure_map(map__30246);
var config_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"config-values","config-values",2047413646));
var secret_path_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"secret-path-env","secret-path-env",-813489479));
var secret_provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"secret-provider","secret-provider",1024312241));
var agent_tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"agent-tag","agent-tag",-1544913180));
var connection_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275));
var connection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"connection-type","connection-type",1962139891));
var agent_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"agent-token","agent-token",1061166627));
var agents_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"agents-options","agents-options",560960112));
var agent_selected_status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(agents_options__GT_get_selected(agents_options,cljs.core.deref(agent_tag)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Give a nickname for your connection",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"my-mysql-test",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(connection_name,webapp.formatters.replace_empty_space__GT_dash(v.target.value));

return cljs.core.reset_BANG_(secret_path_env,clojure.string.upper_case(webapp.formatters.replace_dash__GT_underline(v.target.value)));
}),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(connection_name)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700 mb-1"], null),"Choose an Agent for your connection:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"options","options",99638489),agents_options,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type",new cljs.core.Keyword(null,"name","name",1843675177),"connection-type",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"required?","required?",-872514462),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(agent_tag),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
return cljs.core.reset_BANG_(agent_tag,v);
})], null)], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(agent_tag)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["block p-1 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(agent_selected_status,"UP"))?"text-green-500":"text-red-500")].join('')], null),["This agent is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_selected_status)].join('')], null):null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(agent_tag),(function (){var or__4253__auto__ = "runops-hosted";
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "test";
}
})()))?((cljs.core.seq((component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0 ? component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0() : component__GT_config_inputs.call(null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Configurations of your connection:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-700"], null),"For more details about this connection's configurations access "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-magenta underline",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var fexpr__30257 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type));
return (fexpr__30257.cljs$core$IFn$_invoke$arity$1 ? fexpr__30257.cljs$core$IFn$_invoke$arity$1(webapp.connections.constants.connection_config_help_link) : fexpr__30257.call(null,webapp.connections.constants.connection_config_help_link));
})(),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),"this link."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),(component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0 ? component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0() : component__GT_config_inputs.call(null))], null)], null):null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Update your Agent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block mb-regular text-gray-600"], null),"Here's everything you need to get the environment (Agent) update and running."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Secret provider type",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),secret_provider], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Secret path",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_path_env)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30244_SHARP_){
return cljs.core.reset_BANG_(script_view,p1__30244_SHARP_);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kubernetes - Helm","Kubernetes - Bash","Localhost - Docker/Bash"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.agent_scripts_tab_view.main,cljs.core.deref(script_view),config_values,cljs.core.deref(secret_path_env),cljs.core.deref(agent_tag),agent_token], null)], null)], null))], null);
});
});
webapp.connections.views.connection_form_modal.form = (function webapp$connections$views$connection_form_modal$form(){
var agents = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"agents","agents",-1112413700)], null));
var agents_options = (function (agents__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30261){
var map__30262 = p__30261;
var map__30262__$1 = cljs.core.__destructure_map(map__30262);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),((clojure.string.blank_QMARK_(tags))?"unnamed":tags),new cljs.core.Keyword(null,"text","text",-1790561697),((clojure.string.blank_QMARK_(tags))?"unnamed":tags),new cljs.core.Keyword(null,"status","status",-1997798413),status], null);
}),agents__$1);
});
var agent_default = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30258_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p1__30258_SHARP_),(function (){var or__4253__auto__ = "runops-hosted";
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "test";
}
})());
}),cljs.core.deref(agents)));
var connection_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_img = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var agent_tag = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(agent_default);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(agents))))){
return "unnamed";
} else {
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(agents)));
}
}
})());
var secret_provider = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("env-var");
var secret_path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var configs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.connections.utilities.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))));
var agent_token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var create_connection_request = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets",new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(connection_name),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(connection_type),new cljs.core.Keyword(null,"groups","groups",-136896102),null,new cljs.core.Keyword(null,"tags","tags",1771418977),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(agent_tag),"unnamed"))?null:cljs.core.deref(agent_tag))], null),(function (){var G__30264 = cljs.core.deref(agent_tag);
switch (G__30264) {
case "runops-hosted":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"config","config",994861415),webapp.connections.utilities.config__GT_json_stringify(cljs.core.deref(configs))], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),cljs.core.deref(secret_provider),new cljs.core.Keyword(null,"secret_path","secret_path",-725814244),cljs.core.deref(secret_path),new cljs.core.Keyword(null,"config","config",994861415),null], null);

}
})()], 0)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return webapp.connections.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"failure","failure",720415879));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
return webapp.connections.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"success","success",1890645906));
})], null));
});
return (function (){
webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return cljs.core.reset_BANG_(agent_token,"");
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(agent_token,new cljs.core.Keyword(null,"agents_token","agents_token",-706846737).cljs$core$IFn$_invoke$arity$1(res));
})], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Create a new connection",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 col-span-2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid justify-end my-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 text-sm",new cljs.core.Keyword(null,"href","href",-793805698),"/connections/new",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null),"Advanced configurations \u2192"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mb-regular","form.mb-regular",-864175662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

create_connection_request();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));

return setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-connections","get-connections",742236564)], null));
}),(1500));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((clojure.string.blank_QMARK_(cljs.core.deref(connection_type)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-large"], null),"What would you like to connect?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"list",new cljs.core.Keyword(null,"class","class",-2030961996),"grid gap-8 grid-cols-3 xl:grid-cols-4"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30259_SHARP_){
return webapp.connections.views.connection_card.main(p1__30259_SHARP_,connection_type,connection_img,configs);
}),webapp.connections.constants.connections_types_list)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-4 px-8 mb-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(connection_type,"");

return cljs.core.reset_BANG_(connection_img,"");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-left-blue.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(connection_img),new cljs.core.Keyword(null,"alt","alt",-3214426),["logo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl px-8 grid gap-16"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form_modal.connection_creation,webapp.connections.views.configration_inputs.main(configs),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"config-values","config-values",2047413646),cljs.core.deref(configs),new cljs.core.Keyword(null,"secret-path-env","secret-path-env",-813489479),secret_path,new cljs.core.Keyword(null,"secret-provider","secret-provider",1024312241),cljs.core.deref(secret_provider),new cljs.core.Keyword(null,"agent-tag","agent-tag",-1544913180),agent_tag,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),connection_name,new cljs.core.Keyword(null,"connection-type","connection-type",1962139891),connection_type,new cljs.core.Keyword(null,"agent-token","agent-token",1061166627),cljs.core.deref(agent_token),new cljs.core.Keyword(null,"agents-options","agents-options",560960112),agents_options(cljs.core.deref(agents))], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null)], null)], null)], null))], null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.connections.views.connection_form_modal.js.map
