goog.provide('webapp.quickstarts.views.main');
webapp.quickstarts.views.main.manage__GT_main_area = (function webapp$quickstarts$views$main$manage__GT_main_area(p__30289){
var map__30290 = p__30289;
var map__30290__$1 = cljs.core.__destructure_map(map__30290);
var fx_get_current_step_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420));
var secret_path_env_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"secret-path-env-atom","secret-path-env-atom",798984286));
var config_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"config-atom","config-atom",2036561794));
var agent_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"agent-token","agent-token",1061166627));
var fx_request_agent_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"fx-request-agent-list","fx-request-agent-list",993975620));
var current_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"current-step","current-step",-2023410137));
var secrets_host_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"secrets-host-atom","secrets-host-atom",-1071078453));
var fx_change_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886));
var connection_name_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"connection-name-atom","connection-name-atom",1382945459));
var agent_tag_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"agent-tag-atom","agent-tag-atom",888822359));
var connection_type_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"connection-type-atom","connection-type-atom",1224958263));
var G__30298 = current_step;
var G__30298__$1 = (((G__30298 instanceof cljs.core.Keyword))?G__30298.fqn:null);
switch (G__30298__$1) {
case "agent":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.environment_step.main,webapp.quickstarts.views.configration_inputs.main(config_atom),fx_request_agent_list,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"config-values","config-values",2047413646),cljs.core.deref(config_atom),new cljs.core.Keyword(null,"secret-path-env","secret-path-env",-813489479),secret_path_env_atom,new cljs.core.Keyword(null,"agent-tag","agent-tag",-1544913180),agent_tag_atom,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),connection_name_atom,new cljs.core.Keyword(null,"connection-type","connection-type",1962139891),connection_type_atom,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),fx_get_current_step_infos,new cljs.core.Keyword(null,"agent-token","agent-token",1061166627),agent_token,new cljs.core.Keyword(null,"secrets-host","secrets-host",-1988222534),secrets_host_atom], null)], null);

break;
case "task":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.task_step.main,fx_change_step,cljs.core.deref(connection_name_atom)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30298__$1)].join('')));

}
});
webapp.quickstarts.views.main.main = (function webapp$quickstarts$views$main$main(){
var steppers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"current",new cljs.core.Keyword(null,"title","title",636505583),"Environment's configuration",new cljs.core.Keyword(null,"text","text",-1790561697),"It will set up your environment with your connection."], null),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"upcoming",new cljs.core.Keyword(null,"title","title",636505583),"Task",new cljs.core.Keyword(null,"text","text",-1790561697),"It will test your environment with a task"], null)], null));
var current_step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"agent","agent",-766455027));
var connection_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_img = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var secret_path_env = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("ENV_CONFIG");
var configs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.quickstarts.utilities.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))));
var agent_tag = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var selects_disabled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var agent_token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var secrets_host = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("runops");
var agent_filtered = (function (current_agent,agents){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30302_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p1__30302_SHARP_),current_agent);
}),agents),(0),false);
});
var get_current_step_infos = (function (){
var G__30306 = cljs.core.deref(steppers);
var fexpr__30305 = cljs.core.deref(current_step);
return (fexpr__30305.cljs$core$IFn$_invoke$arity$1 ? fexpr__30305.cljs$core$IFn$_invoke$arity$1(G__30306) : fexpr__30305.call(null,G__30306));
});
var get_index = (function (){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.deref(steppers)),cljs.core.deref(current_step));
});
var get_step = (function (direction){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(cljs.core.deref(steppers)),(function (){var G__30307 = direction;
switch (G__30307) {
case "next":
return (get_index() + (1));

break;
case "back":
return (get_index() - (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30307)].join('')));

}
})(),false);
});
var go_next_step = (function (){
return cljs.core.reset_BANG_(current_step,(cljs.core.truth_(get_step("next"))?get_step("next"):cljs.core.deref(current_step)));
});
var go_back_step = (function (){
return cljs.core.reset_BANG_(current_step,(cljs.core.truth_(get_step("back"))?get_step("back"):cljs.core.deref(current_step)));
});
var change_step = (function (step,new_status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(steppers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [step], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),new_status], 0));
});
var create_connection_request = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets",new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(connection_name),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(connection_type),new cljs.core.Keyword(null,"groups","groups",-136896102),null], null),(function (){var G__30308 = cljs.core.deref(secrets_host);
switch (G__30308) {
case "runops":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"tags","tags",1771418977),"test",new cljs.core.Keyword(null,"config","config",994861415),webapp.quickstarts.utilities.config__GT_json_stringify(cljs.core.deref(configs))], null);

break;
case "self":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"env-var",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.deref(agent_tag),new cljs.core.Keyword(null,"secret_path","secret_path",-725814244),cljs.core.deref(secret_path_env),new cljs.core.Keyword(null,"config","config",994861415),null], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30308)].join('')));

}
})()], 0)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"connection-failure","connection-failure",-893938674));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
change_step(new cljs.core.Keyword(null,"agent","agent",-766455027),"complete");

change_step(new cljs.core.Keyword(null,"task","task",-1476607993),"current");

cljs.core.reset_BANG_(selects_disabled_QMARK_,true);

return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"verified","verified",1807036606));
})], null));
});
var request_agent_list = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/agents",new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"agent-failure","agent-failure",891834568));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
var current_agent_tag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secrets_host),"runops"))?"test":cljs.core.deref(agent_tag));
var agent = agent_filtered(current_agent_tag,res);
if(agent === false){
return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-exist","not-exist",-1832922632));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(agent),"DOWN")){
return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-up","not-up",-1655597142));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(agent),"UP")){
return create_connection_request();
} else {
return null;
}
}
}
})], null));
});
return (function (){
webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return cljs.core.reset_BANG_(agent_token,"");
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(agent_token,new cljs.core.Keyword(null,"agents_token","agents_token",-706846737).cljs$core$IFn$_invoke$arity$1(res));
})], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 items-center mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Quickstarts"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-6"], null),((clojure.string.blank_QMARK_(cljs.core.deref(connection_type)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-large"], null),"What would you like to connect?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"list",new cljs.core.Keyword(null,"class","class",-2030961996),"grid gap-6 grid-cols-4 xl:grid-cols-6"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30303_SHARP_){
return webapp.quickstarts.views.connection_card.main(p1__30303_SHARP_,connection_type,connection_img,configs);
}),webapp.connections.constants.connections_types_list)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-4 px-8 mb-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(connection_type,"");

return cljs.core.reset_BANG_(connection_img,"");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-left-blue.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(connection_img),new cljs.core.Keyword(null,"alt","alt",-3214426),["logo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl px-8 grid grid-cols-12 gap-16"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sticky top-6 divide-y divide-gray-300"], null),webapp.components.stepper.main(cljs.core.deref(steppers))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main.manage__GT_main_area,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"config-atom","config-atom",2036561794),new cljs.core.Keyword(null,"agent-token","agent-token",1061166627),new cljs.core.Keyword(null,"fx-request-agent-list","fx-request-agent-list",993975620),new cljs.core.Keyword(null,"current-step","current-step",-2023410137),new cljs.core.Keyword(null,"secrets-host-atom","secrets-host-atom",-1071078453),new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886),new cljs.core.Keyword(null,"connection-name-atom","connection-name-atom",1382945459),new cljs.core.Keyword(null,"connection-type-atom","connection-type-atom",1224958263),new cljs.core.Keyword(null,"agent-tag-atom","agent-tag-atom",888822359),new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),new cljs.core.Keyword(null,"secret-path-env-atom","secret-path-env-atom",798984286)],[configs,cljs.core.deref(agent_token),request_agent_list,cljs.core.deref(current_step),secrets_host,change_step,connection_name,connection_type,agent_tag,get_current_step_infos,secret_path_env])], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-x-large"], null),(cljs.core.truth_(get_step("back"))?webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_back_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null)),(cljs.core.truth_((function (){var and__4251__auto__ = get_step("next");
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete");
} else {
return and__4251__auto__;
}
})())?webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_next_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null))], null)], null)], null)], null))], null)], null);
});
});

//# sourceMappingURL=webapp.quickstarts.views.main.js.map
