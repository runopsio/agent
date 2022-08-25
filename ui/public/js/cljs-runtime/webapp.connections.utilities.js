goog.provide('webapp.connections.utilities');
webapp.connections.utilities.get_config_keys = (function webapp$connections$utilities$get_config_keys(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.connections.constants.connection_configs_required,key);
});
webapp.connections.utilities.config__GT_json_stringify = (function webapp$connections$utilities$config__GT_json_stringify(configs){
return JSON.stringify(cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30819){
var map__30820 = p__30819;
var map__30820__$1 = cljs.core.__destructure_map(map__30820);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30820__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30820__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30821){
var map__30822 = p__30821;
var map__30822__$1 = cljs.core.__destructure_map(map__30822);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30822__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30822__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)))));
});
webapp.connections.utilities.agent_url = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
webapp.connections.utilities.empty_config_QMARK_ = (function webapp$connections$utilities$empty_config_QMARK_(configs){
return cljs.core.empty_QMARK_(configs);
});
webapp.connections.utilities.empty_agent_tag_QMARK_ = (function webapp$connections$utilities$empty_agent_tag_QMARK_(agent_tag){
return clojure.string.blank_QMARK_(agent_tag);
});
webapp.connections.utilities.empty_agent_token_QMARK_ = (function webapp$connections$utilities$empty_agent_token_QMARK_(agent_token){
return (agent_token == null);
});
webapp.connections.utilities.agent_token__GT_script = (function webapp$connections$utilities$agent_token__GT_script(agent_token){
if(webapp.connections.utilities.empty_agent_token_QMARK_(agent_token)){
return "export AGENT_TOKEN=$(runops agents create-token -f)\n";
} else {
return ["export AGENT_TOKEN=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_token),"\n"].join('');
}
});
webapp.connections.utilities.format_configs__GT_exports = (function webapp$connections$utilities$format_configs__GT_exports(configs){
if((!(webapp.connections.utilities.empty_config_QMARK_(configs)))){
return ["# Connection's configurations. \n",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30824_SHARP_){
return ["export ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30824_SHARP_)),"= \n"].join('');
}),configs)),"\n"].join('');
} else {
return null;
}
});
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.utilities !== 'undefined') && (typeof webapp.connections.utilities.script_agent !== 'undefined')){
} else {
webapp.connections.utilities.script_agent = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30825 = cljs.core.get_global_hierarchy;
return (fexpr__30825.cljs$core$IFn$_invoke$arity$0 ? fexpr__30825.cljs$core$IFn$_invoke$arity$0() : fexpr__30825.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.utilities","script-agent"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"kubernetes-bash","kubernetes-bash",-2125704237),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.connections.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["export AGENT_TAG=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag),"\n"].join(''));
var export_config__GT_text = ((webapp.connections.utilities.empty_config_QMARK_(configs))?"":["export ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path),"=$(cat - <<EOF\n","{\n",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30826_SHARP_){
return ["  \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30826_SHARP_)),"\": $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30826_SHARP_)),"\n"].join('');
}),configs)),"}\n","EOF\n)\n"].join(''));
return ["# Agent's configurations \n",webapp.connections.utilities.agent_token__GT_script(agent_token),agent_tag__GT_text,"\n",webapp.connections.utilities.format_configs__GT_exports(configs),"# Script to update the agent \n",export_config__GT_text,"curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/k8s.sh | bash"].join('');
}));
webapp.connections.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"kubernetes-heml","kubernetes-heml",1741563627),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.connections.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["\t--set config.tags=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag)," \\\n"].join(''));
var env__GT_string_helm = ((webapp.connections.utilities.empty_config_QMARK_(configs))?"":clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30827_SHARP_){
return ["\t--set env_var[0].vars.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30827_SHARP_)),"=$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30827_SHARP_))," \\\n"].join('');
}),configs)));
webapp.http.request.request(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"url","url",276297046),"https://api.github.com/repos/runopsio/agent/releases/latest",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept","accept",1874130431),"application/json","Content-Type","application/json"], null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
var parse_res = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(res));
return cljs.core.reset_BANG_(webapp.connections.utilities.agent_url,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parse_res,"assets")),"browser_download_url"));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return cljs.core.reset_BANG_(webapp.connections.utilities.agent_url,"https://github.com/runopsio/agent/releases/download/0.15.1/agent-0.15.1.tgz");
})], null));

return ["# Agent's configurations \n",webapp.connections.utilities.agent_token__GT_script(agent_token),"\n",webapp.connections.utilities.format_configs__GT_exports(configs),"# Script to update the agent\n","helm upgrade --install agent ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webapp.connections.utilities.agent_url))," \\\n","\t--set config.token=$AGENT_TOKEN \\\n",agent_tag__GT_text,"\t--set env_var[0].env=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path)," \\\n",env__GT_string_helm,"\t--create-namespace \\\n","\t--namespace runops"].join('');
}));
webapp.connections.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"localhost-docker-bash","localhost-docker-bash",-742759428),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.connections.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["\t--tags ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag)," \\\n"].join(''));
var env_string_docker_local = ((webapp.connections.utilities.empty_config_QMARK_(configs))?"":clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30834_SHARP_){
return ["\t--ev ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30834_SHARP_)),"=$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30834_SHARP_))," \\\n"].join('');
}),configs)));
return ["# Agent's configurations \n",webapp.connections.utilities.agent_token__GT_script(agent_token),"\n",webapp.connections.utilities.format_configs__GT_exports(configs),"# Script to update the agent\n","runops agents docker-run \\\n",agent_tag__GT_text,"\t--token $AGENT_TOKEN \\\n","\t--envvar ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path)," \\\n",env_string_docker_local,"\t--name agent --rm"].join('');
}));

//# sourceMappingURL=webapp.connections.utilities.js.map
