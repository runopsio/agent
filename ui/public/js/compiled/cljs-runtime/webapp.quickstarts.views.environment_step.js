goog.provide('webapp.quickstarts.views.environment_step');
webapp.quickstarts.views.environment_step.tab_view = (function webapp$quickstarts$views$environment_step$tab_view(tab,configs,secret_path_env,agent_tag,agent_token){
var G__36212 = tab;
switch (G__36212) {
case "Kubernets - Bash":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.logs_container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"logs","logs",1068148008),webapp.utilities.script_agent.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"kubernets-bash","kubernets-bash",733395401),configs,secret_path_env,agent_tag,agent_token)], null),""], null)], null);

break;
case "Kubernets - Helm":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.logs_container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"logs","logs",1068148008),webapp.utilities.script_agent.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"kubernets-heml","kubernets-heml",1666306045),configs,secret_path_env,agent_tag,agent_token)], null),""], null)], null);

break;
case "Localhost - Docker/Bash":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.logs_container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"logs","logs",1068148008),webapp.utilities.script_agent.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"localhost-docker-bash","localhost-docker-bash",-742759428),configs,secret_path_env,agent_tag,agent_token)], null),""], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36212)].join('')));

}
});
webapp.quickstarts.views.environment_step.main = (function webapp$quickstarts$views$environment_step$main(component__GT_config_inputs,request_agent_list){
var script_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Kubernets - Helm");
return (function (_,___$1,p__36227){
var map__36228 = p__36227;
var map__36228__$1 = cljs.core.__destructure_map(map__36228);
var config_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"config-values","config-values",2047413646));
var secret_path_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"secret-path-env","secret-path-env",-813489479));
var agent_tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"agent-tag","agent-tag",-1544913180));
var target_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"target-name","target-name",-1836829889));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
var fx_get_current_step_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420));
var agent_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"agent-token","agent-token",1061166627));
var secrets_host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36228__$1,new cljs.core.Keyword(null,"secrets-host","secrets-host",-1988222534));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return (request_agent_list.cljs$core$IFn$_invoke$arity$0 ? request_agent_list.cljs$core$IFn$_invoke$arity$0() : request_agent_list.call(null));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Give a nickname for your connection",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"my-mysql-test",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36217_SHARP_){
return cljs.core.reset_BANG_(target_name,webapp.formatters.replace_empty_space__GT_dash(p1__36217_SHARP_.target.value));
}),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(target_name)], null)], null)], null),((cljs.core.seq((component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0 ? component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0() : component__GT_config_inputs.call(null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700"], null),"Complete the configurations of your connection:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-700"], null),"For more details about this connection's configurations access "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-700 underline",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var fexpr__36230 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(target_type));
return (fexpr__36230.cljs$core$IFn$_invoke$arity$1 ? fexpr__36230.cljs$core$IFn$_invoke$arity$1(webapp.targets.constants.target_config_help_link) : fexpr__36230.call(null,webapp.targets.constants.target_config_help_link));
})(),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),"this link."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),(component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0 ? component__GT_config_inputs.cljs$core$IFn$_invoke$arity$0() : component__GT_config_inputs.call(null))], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small block text-sm font-medium text-gray-700"], null),"Who will be the host of your configurations?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-regular mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.radio_button.main,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"runops-hosted",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hosted","hosted",-956146407),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"runops","runops",-2046158892),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36218_SHARP_){
return cljs.core.reset_BANG_(secrets_host,p1__36218_SHARP_.target.value);
}),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secrets_host),"runops")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.radio_button.main,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"self-hosted",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hosted","hosted",-956146407),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36219_SHARP_){
return cljs.core.reset_BANG_(secrets_host,p1__36219_SHARP_.target.value);
}),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secrets_host),"self")], null)], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secrets_host),"self"))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Environment's configurations"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block mb-regular text-gray-600"], null),"Here we will configure the environment which will run your connection. We named this environment Agent."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Environment variable for your connection",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36220_SHARP_){
return cljs.core.reset_BANG_(secret_path_env,p1__36220_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_path_env)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Agent nickname",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"(empty allowed)",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36221_SHARP_){
return cljs.core.reset_BANG_(agent_tag,p1__36221_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(agent_tag)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Run Script"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-gray-600"], null),"Here's everything you need to get the environment (Agent) up and running."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36222_SHARP_){
return cljs.core.reset_BANG_(script_view,p1__36222_SHARP_);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kubernets - Helm","Kubernets - Bash","Localhost - Docker/Bash"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.environment_step.tab_view,cljs.core.deref(script_view),config_values,cljs.core.deref(secret_path_env),cljs.core.deref(agent_tag),agent_token], null)], null)], null):null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-regular items-center my-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-gray-600"], null),"After configuring your agent, verify here if everything is ok and go to the next step. If everything is ok it will create your connection (target) too!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-1","div.col-span-1",1379827151),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Verify and Create",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1((fx_get_current_step_infos.cljs$core$IFn$_invoke$arity$0 ? fx_get_current_step_infos.cljs$core$IFn$_invoke$arity$0() : fx_get_current_step_infos.call(null))),"complete"),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null)], null)], null);
});
});

//# sourceMappingURL=webapp.quickstarts.views.environment_step.js.map
