goog.provide('webapp.shared_ui.agent_scripts_tab_view');
/**
 * This shared component is one for the agent scripts (you can found an example inside of create a connection)
 * which show up for the users the scripts to start their agent in your environment.
 * 
 * parameters:
 * tab (Enum: 'Kubernets - Bash', 'Kubernets - Helm', 'Localhost - Docker/Bash') -> it defines which tab is;
 * configs (hashmap: {:key 'key' :value 'value'}) -> It's a mirror of the values from config to show up inside the script;
 * secret-path-env (string) -> It's a mirror of what the user choose in the input of the same name to show up inside the script;
 * agent-tag (string) -> It's a mirror of what the user choose in the input of the same name to show up inside the script;
 * agent-token (string) -> It's a mirror of what is the user agent token to show up inside the script;
 */
webapp.shared_ui.agent_scripts_tab_view.main = (function webapp$shared_ui$agent_scripts_tab_view$main(tab,configs,secret_path_env,agent_tag,agent_token){
var G__30868 = tab;
switch (G__30868) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30868)].join('')));

}
});

//# sourceMappingURL=webapp.shared_ui.agent_scripts_tab_view.js.map
