goog.provide('webapp.utilities');
webapp.utilities.empty_config_QMARK_ = (function webapp$utilities$empty_config_QMARK_(configs){
return cljs.core.empty_QMARK_(configs);
});
webapp.utilities.empty_agent_tag_QMARK_ = (function webapp$utilities$empty_agent_tag_QMARK_(agent_tag){
return clojure.string.blank_QMARK_(agent_tag);
});
webapp.utilities.empty_agent_token_QMARK_ = (function webapp$utilities$empty_agent_token_QMARK_(agent_token){
return (agent_token == null);
});
webapp.utilities.agent_token__GT_script = (function webapp$utilities$agent_token__GT_script(agent_token){
if(webapp.utilities.empty_agent_token_QMARK_(agent_token)){
return "export AGENT_TOKEN=$(runops agents create-token -f)\n";
} else {
return ["export AGENT_TOKEN=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_token),"\n"].join('');
}
});
if((typeof webapp !== 'undefined') && (typeof webapp.utilities !== 'undefined') && (typeof webapp.utilities.script_agent !== 'undefined')){
} else {
webapp.utilities.script_agent = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30622 = cljs.core.get_global_hierarchy;
return (fexpr__30622.cljs$core$IFn$_invoke$arity$0 ? fexpr__30622.cljs$core$IFn$_invoke$arity$0() : fexpr__30622.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.utilities","script-agent"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"kubernets-bash","kubernets-bash",733395401),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["export AGENT_TAG=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag),"\n"].join(''));
var export_config__GT_text = ((webapp.utilities.empty_config_QMARK_(configs))?"":["export ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path),"=$(cat - <<EOF\n","{\n",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30623_SHARP_){
return ["  \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30623_SHARP_)),"\": ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30623_SHARP_)),"\"\n"].join('');
}),configs)),"}\n","EOF\n)\n"].join(''));
return [webapp.utilities.agent_token__GT_script(agent_token),agent_tag__GT_text,export_config__GT_text,"curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/k8s.sh | bash"].join('');
}));
webapp.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"kubernets-heml","kubernets-heml",1666306045),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["\t--set config.tags=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag)," \\\n"].join(''));
var env__GT_string_helm = ((webapp.utilities.empty_config_QMARK_(configs))?"":clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30624_SHARP_){
return ["\t--set env_var[0].vars.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30624_SHARP_)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30624_SHARP_))," \\\n"].join('');
}),configs)));
return [webapp.utilities.agent_token__GT_script(agent_token),"helm upgrade --install agent https://github.com/runopsio/agent/releases/download/0.14.3/agent-0.14.3.tgz \\\n","\t--set config.token=$AGENT_TOKEN \\\n",agent_tag__GT_text,"\t--set env_var[0].env=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path)," \\\n",env__GT_string_helm,"\t--namespace runops"].join('');
}));
webapp.utilities.script_agent.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"localhost-docker-bash","localhost-docker-bash",-742759428),(function (_,configs,secret_path,agent_tag,agent_token){
var agent_tag__GT_text = ((webapp.utilities.empty_agent_tag_QMARK_(agent_tag))?"":["\t--tags ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_tag)," \\\n"].join(''));
var env_string_docker_local = ((webapp.utilities.empty_config_QMARK_(configs))?"":clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30625_SHARP_){
return ["\t--ev ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30625_SHARP_)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30625_SHARP_))," \\\n"].join('');
}),configs)));
return [webapp.utilities.agent_token__GT_script(agent_token),"runops agents docker-run \\\n",agent_tag__GT_text,"\t--token $AGENT_TOKEN \\\n","\t--envvar ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secret_path)," \\\n",env_string_docker_local,"\t--name agent --rm"].join('');
}));
webapp.utilities.download_string_as_csv = (function webapp$utilities$download_string_as_csv(string,export_name){
var data_blob = (new Blob([string],({"type": "text/csv;charset=utf-8;"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});

//# sourceMappingURL=webapp.utilities.js.map
