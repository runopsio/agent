goog.provide('webapp.tasks.views.new_task.panel');
var module$node_modules$$codemirror$basic_setup$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$basic_setup$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_javascript$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_javascript$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_sql$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_sql$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_python$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_python$dist$index_cjs", {});
var module$node_modules$$codemirror$stream_parser$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$stream_parser$dist$index_cjs", {});
var module$node_modules$$codemirror$legacy_modes$mode$shell=shadow.js.require("module$node_modules$$codemirror$legacy_modes$mode$shell", {});
var module$node_modules$$codemirror$legacy_modes$mode$ruby=shadow.js.require("module$node_modules$$codemirror$legacy_modes$mode$ruby", {});
var module$node_modules$$codemirror$legacy_modes$mode$clojure=shadow.js.require("module$node_modules$$codemirror$legacy_modes$mode$clojure", {});
webapp.tasks.views.new_task.panel.get_code_from_localstorage = (function webapp$tasks$views$new_task$panel$get_code_from_localstorage(){
var item = localStorage.getItem(new cljs.core.Keyword(null,"code-tmp-db","code-tmp-db",-1479326031));
var object = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(item));
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(object,"code");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
});
webapp.tasks.views.new_task.panel.timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
webapp.tasks.views.new_task.panel.task_description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
webapp.tasks.views.new_task.panel.task_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
webapp.tasks.views.new_task.panel.code_saved_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"saved","saved",288760660));
webapp.tasks.views.new_task.panel.language_parser_map = new cljs.core.PersistentArrayMap(null, 8, ["SQL",module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,"JavaScript",module$node_modules$$codemirror$lang_javascript$dist$index_cjs.javascript,"Python",module$node_modules$$codemirror$lang_python$dist$index_cjs.python,"Shell",(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),"Ruby",(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$ruby.ruby);
}),"Clojure",(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$clojure.clojure);
}),"",(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),null,(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null);
webapp.tasks.views.new_task.panel.type_language_map = cljs.core.PersistentHashMap.fromArrays([null,"","mysql","rails-console","k8s","bash","sql-server","postgres-csv","mongodb","k8s-exec","postgres","hashicorp-vault","rails-console-k8s","ecs-exec","mysql-csv","aws-ecs-exec","python","rails-console-ecs","k8s-apply","rails","node"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"SQL",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"SQL",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"SQL",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"JavaScript",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_javascript$dist$index_cjs.javascript], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"SQL",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"SQL",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Python",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_python$dist$index_cjs.python], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Shell",new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"JavaScript",new cljs.core.Keyword(null,"parser","parser",-1543495310),module$node_modules$$codemirror$lang_javascript$dist$index_cjs.javascript], null)]);
webapp.tasks.views.new_task.panel.manage_language_switch = (function webapp$tasks$views$new_task$panel$manage_language_switch(value,view,language_compartment){
var selected_language = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,value));
var language_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,"");
cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_type,value);

return view.dispatch(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effects","effects",-282369292),language_compartment.reconfigure((((selected_language == null))?(language_default.cljs$core$IFn$_invoke$arity$0 ? language_default.cljs$core$IFn$_invoke$arity$0() : language_default.call(null)):(selected_language.cljs$core$IFn$_invoke$arity$0 ? selected_language.cljs$core$IFn$_invoke$arity$0() : selected_language.call(null))))], null)));
});
webapp.tasks.views.new_task.panel.save_to_localstorage = (function webapp$tasks$views$new_task$panel$save_to_localstorage(code_string){
var code_tmp_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),Date.now(),new cljs.core.Keyword(null,"code","code",1586293142),code_string], null);
var code_tmp_db_json = JSON.stringify(cljs.core.clj__GT_js(code_tmp_db));
localStorage.setItem(new cljs.core.Keyword(null,"code-tmp-db","code-tmp-db",-1479326031),code_tmp_db_json);

return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.code_saved_status,new cljs.core.Keyword(null,"saved","saved",288760660));
});
webapp.tasks.views.new_task.panel.auto_save = (function webapp$tasks$views$new_task$panel$auto_save(view_update,script){
if(cljs.core.truth_(view_update.docChanged)){
cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.code_saved_status,new cljs.core.Keyword(null,"edited","edited",-262616624));

var code_string = view_update.view.state.doc.toString();
if(cljs.core.truth_(cljs.core.deref(webapp.tasks.views.new_task.panel.timer))){
clearTimeout(cljs.core.deref(webapp.tasks.views.new_task.panel.timer));
} else {
}

cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.timer,setTimeout((function (){
return webapp.tasks.views.new_task.panel.save_to_localstorage(code_string);
}),(1000)));

return cljs.core.reset_BANG_(script,code_string);
} else {
return null;
}
});
webapp.tasks.views.new_task.panel.set_type_from_connection = (function webapp$tasks$views$new_task$panel$set_type_from_connection(selected_connection_name,view,language_compartment){
var success = (function (target){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(target),"none")) && (cljs.core.seq(target)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"text","text",-1790561697),["This connection requires review. ","Your task won't run until it gets reviewed"].join('')], null)], null));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->get-connection","new-task->get-connection",1822151519),selected_connection_name], null));

return webapp.tasks.views.new_task.panel.manage_language_switch((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),view,language_compartment);
});
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),["/v1/targets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_connection_name)].join(''),new cljs.core.Keyword(null,"on-success","on-success",1786904109),success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get connection"], 0));
})], null));
});
webapp.tasks.views.new_task.panel.submit_task = (function webapp$tasks$views$new_task$panel$submit_task(e,script){
if(cljs.core.truth_(e.preventDefault)){
e.preventDefault();
} else {
}

var selected_connection = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->selected-connection","new-task->selected-connection",811490686)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(selected_connection),"")){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"text","text",-1790561697),"You must choose a connection"], null)], null));
} else {
var __30385 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-new-task","create-new-task",494722089),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(webapp.tasks.views.new_task.panel.task_type),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(webapp.tasks.views.new_task.panel.task_description),new cljs.core.Keyword(null,"script","script",-1304443801),cljs.core.deref(script)], null)], null));
var __30386__$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
var __30387__$2 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Task created!"], null)], null));
}

return true;
});
webapp.tasks.views.new_task.panel.task_advanced_fields = (function webapp$tasks$views$new_task$panel$task_advanced_fields(editor_view,language_compartment,script){
var all_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_combobox_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (connections){
cljs.core.reset_BANG_(all_connections,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30353_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30353_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30353_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30353_SHARP_)),")"].join('')], null));
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
var selected_connection = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->selected-connection","new-task->selected-connection",811490686)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__30354_SHARP_){
return webapp.tasks.views.new_task.panel.submit_task(p1__30354_SHARP_,script);
})], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Create your task",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Connection name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),"Get the name for your connection"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),cljs.core.deref(all_connections),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)),new cljs.core.Keyword(null,"default-value","default-value",232220170),"Select a connection",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your-connection-name* (required)",new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_combobox_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
get_all_connections();

return cljs.core.reset_BANG_(connections_combobox_status,new cljs.core.Keyword(null,"loading","loading",-737050189));
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30356_SHARP_){
return webapp.tasks.views.new_task.panel.set_type_from_connection(p1__30356_SHARP_,editor_view,language_compartment);
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-connection"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Task type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),(cljs.core.truth_(new cljs.core.Keyword(null,"override_type","override_type",-2009577183).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)))?"Leave it blank for using the default for the connection or select a different one if your connection allows it":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-red-600"], null),"It's not possible to override the type for this connection"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30357_SHARP_){
return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_type,p1__30357_SHARP_.target.value);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(new cljs.core.Keyword(null,"override_type","override_type",-2009577183).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection))),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.deref(webapp.tasks.views.new_task.panel.task_type);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),webapp.connections.constants.connections_types_list], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Task description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),"Optional field for adding a description so your peers can get a better understanding of what you're doing"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add your description here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30359_SHARP_){
return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_description,p1__30359_SHARP_.target.value);
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(webapp.tasks.views.new_task.panel.task_description),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),""], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.grid.grid-cols-2.gap-small","footer.grid.grid-cols-2.gap-small",1073765889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.secondary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create task",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)),null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)),"")))], null)], null)], null)], null)], null)], null);
});
});
webapp.tasks.views.new_task.panel.advanced_task_creation = (function webapp$tasks$views$new_task$panel$advanced_task_creation(view,language_compartment,script){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.task_advanced_fields,view,language_compartment,script], null)], null));
});
webapp.tasks.views.new_task.panel.keymap_mod_enter = (function webapp$tasks$views$new_task$panel$keymap_mod_enter(view,language_compartment,script){
webapp.tasks.views.new_task.panel.advanced_task_creation(view,language_compartment,script);

return true;
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.new_task !== 'undefined') && (typeof webapp.tasks.views.new_task.panel !== 'undefined') && (typeof webapp.tasks.views.new_task.panel.saved_status_el !== 'undefined')){
} else {
webapp.tasks.views.new_task.panel.saved_status_el = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30362 = cljs.core.get_global_hierarchy;
return (fexpr__30362.cljs$core$IFn$_invoke$arity$0 ? fexpr__30362.cljs$core$IFn$_invoke$arity$0() : fexpr__30362.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.new-task.panel","saved-status-el"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.new_task.panel.saved_status_el.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"saved","saved",288760660),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row-reverse","div.flex.flex-row-reverse",633101428),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-5","figure.w-5",622946640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-check-green.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Saved!"], null)], null)], null);
}));
webapp.tasks.views.new_task.panel.saved_status_el.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edited","edited",-262616624),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row-reverse","div.flex.flex-row-reverse",633101428),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-small","div.flex.items-center.gap-small",-709592445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-3","figure.w-3",-791010974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500.italic","span.text-xs.text-gray-500.italic",-11761398),"Edited"], null)], null)], null);
}));
webapp.tasks.views.new_task.panel.change_language_select = (function webapp$tasks$views$new_task$panel$change_language_select(){
var editor_language = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->editor-language","new-task->editor-language",1531336618)], null));
return (function (selected_language,switch_language_fn){
var languages = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SQL","JavaScript","Python","Shell","Ruby","Clojure"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative cursor-pointer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"change-language-select"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center cursor-pointer ","text-gray-600 text-xs hover:underline "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((cljs.core.not(selected_language)) || (cljs.core.empty_QMARK_(selected_language))))?"Loading editor...":cljs.core.deref(editor_language))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.icon.regular,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"cheveron-down"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute w-full inset-0 opacity-0 cursor-pointer",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30366_SHARP_){
var G__30367 = p1__30366_SHARP_.target.value;
var G__30368 = false;
return (switch_language_fn.cljs$core$IFn$_invoke$arity$2 ? switch_language_fn.cljs$core$IFn$_invoke$arity$2(G__30367,G__30368) : switch_language_fn.call(null,G__30367,G__30368));
}),new cljs.core.Keyword(null,"name","name",1843675177),"change-language-select",new cljs.core.Keyword(null,"id","id",-1388402092),"change-language-select",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = cljs.core.deref(editor_language);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),"Choose a syntax for the editor"], null)], null),(function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$panel$change_language_select_$_iter__30370(s__30371){
return (new cljs.core.LazySeq(null,(function (){
var s__30371__$1 = s__30371;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30371__$1);
if(temp__5753__auto__){
var s__30371__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30371__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30371__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30373 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30372 = (0);
while(true){
if((i__30372 < size__4651__auto__)){
var option = cljs.core._nth(c__4650__auto__,i__30372);
cljs.core.chunk_append(b__30373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),option], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)));

var G__30388 = (i__30372 + (1));
i__30372 = G__30388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30373),webapp$tasks$views$new_task$panel$change_language_select_$_iter__30370(cljs.core.chunk_rest(s__30371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30373),null);
}
} else {
var option = cljs.core.first(s__30371__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),option], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)),webapp$tasks$views$new_task$panel$change_language_select_$_iter__30370(cljs.core.rest(s__30371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(languages);
})()], null)], null);
});
});
webapp.tasks.views.new_task.panel.editor_footer = (function webapp$tasks$views$new_task$panel$editor_footer(){
return (function (editor_view,language_compartment,script,selected_language,switch_language_fn){
var is_mac_QMARK_ = (navigator.platform.toUpperCase().indexOf("MAC") >= (0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex p-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.saved_status_el,cljs.core.deref(webapp.tasks.views.new_task.panel.code_saved_status)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular flex-grow justify-end"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.change_language_select,selected_language,switch_language_fn], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center cursor-pointer ","text-gray-800 hover:underline "].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.tasks.views.new_task.panel.advanced_task_creation(editor_view,language_compartment,script);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-plus-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),["Advanced fields ",((is_mac_QMARK_)?"(Shift+Cmd+Enter)":"(Shift+Ctrl+Enter)")].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center cursor-pointer ","text-blue-700 hover:underline"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__30374_SHARP_){
return webapp.tasks.views.new_task.panel.submit_task(p1__30374_SHARP_,script);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-play-blue.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),["Create ",((is_mac_QMARK_)?"(Cmd+Enter)":"(Ctrl+Enter)")].join('')], null)], null)], null)], null);
});
});
webapp.tasks.views.new_task.panel.logs_area = (function webapp$tasks$views$new_task$panel$logs_area(){
var new_task = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","new-task","webapp.subs/new-task",1755247024)], null));
return (function (){
var task_logs = new cljs.core.Keyword(null,"task-logs","task-logs",-274919405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.main,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"logs","logs",1068148008),new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"log-status","log-status",1744062288),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"elapsed-time","elapsed-time",1836330392),new cljs.core.Keyword(null,"elapsed_time_ms","elapsed_time_ms",-1144123113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task))),new cljs.core.Keyword(null,"task-status","task-status",1198461430),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task))),new cljs.core.Keyword(null,"classes","classes",2037804510),"h-full",new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),true,new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task))),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task)))], null),"new-task-logs-container"], null)], null);
});
});
webapp.tasks.views.new_task.panel.editor = (function webapp$tasks$views$new_task$panel$editor(){
var theme = module$node_modules$$codemirror$basic_setup$dist$index_cjs.EditorView.theme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["&",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"15px",new cljs.core.Keyword(null,"height","height",1025178622),"calc(60vh - 90px)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null),".cm-gutters",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"color","color",1011675173),"rgb(107, 114, 128)"], null)], null)));
var script = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.tasks.views.new_task.panel.get_code_from_localstorage());
var language_compartment = (new module$node_modules$$codemirror$state$dist$index_cjs.Compartment());
var selected_connection = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->selected-connection","new-task->selected-connection",811490686)], null));
var connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_combobox_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (res){
cljs.core.reset_BANG_(connections,res);

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var set_connections_error = (function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get all connections",e], 0));

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var get_all_connections = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets?limit=2000&status=active",new cljs.core.Keyword(null,"on-success","on-success",1786904109),set_connections,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),set_connections_error], null));
});
var keymap = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Shift-Mod-Enter",new cljs.core.Keyword(null,"run","run",-1821166653),(function (p1__30375_SHARP_){
return webapp.tasks.views.new_task.panel.keymap_mod_enter(p1__30375_SHARP_,language_compartment,script);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Mod-Enter",new cljs.core.Keyword(null,"run","run",-1821166653),(function (){
return webapp.tasks.views.new_task.panel.submit_task(cljs.core.PersistentArrayMap.EMPTY,script);
})], null)], null);
var selected_language = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,cljs.core.deref(webapp.tasks.views.new_task.panel.task_type)));
var extensions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(cljs.core.clj__GT_js(keymap)),module$node_modules$$codemirror$basic_setup$dist$index_cjs.basicSetup,module$node_modules$$codemirror$basic_setup$dist$index_cjs.EditorView.updateListener.of((function (p1__30376_SHARP_){
return webapp.tasks.views.new_task.panel.auto_save(p1__30376_SHARP_,script);
})),theme], null);
var codemirror_editor = webapp.components.codemirror_editor.editor(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref(script),new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [language_compartment.of((selected_language.cljs$core$IFn$_invoke$arity$0 ? selected_language.cljs$core$IFn$_invoke$arity$0() : selected_language.call(null)))], null),extensions)], null)));
})], null));
var editor_comp = new cljs.core.Keyword(null,"editor-component","editor-component",-449297328).cljs$core$IFn$_invoke$arity$1(codemirror_editor);
var editor_view = new cljs.core.Keyword(null,"editor-view","editor-view",-1778268605).cljs$core$IFn$_invoke$arity$1(codemirror_editor);
var switch_editor_language = (function (value){
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.language_parser_map,value);
var language_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.language_parser_map,"");
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->set-editor-language","new-task->set-editor-language",848178344),value], null));

return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_view)).dispatch(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effects","effects",-282369292),language_compartment.reconfigure((((parser == null))?(language_default.cljs$core$IFn$_invoke$arity$0 ? language_default.cljs$core$IFn$_invoke$arity$0() : language_default.call(null)):(parser.cljs$core$IFn$_invoke$arity$0 ? parser.cljs$core$IFn$_invoke$arity$0() : parser.call(null))))], null)));
});
window.setTimeout((function (){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection));
var lang = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,type));
cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_type,type);

return switch_editor_language(lang);
}),(500));

return (function (){
var connections_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30377_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30377_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30377_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30377_SHARP_)),")"].join('')], null));
}),cljs.core.deref(connections));
var connection_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection));
var show_tree_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)),"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"mysql")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"mongodb")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"postgres")))))));
var supported_sql_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"mysql")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"mongodb")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connection_type,"postgres")))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1 h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular px-small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],["min-w-64",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_connection)),"Select a connection",(function (){
get_all_connections();

return cljs.core.reset_BANG_(connections_combobox_status,new cljs.core.Keyword(null,"loading","loading",-737050189));
}),"select-connection",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_combobox_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),(function (){
return cljs.core.reset_BANG_(connections,null);
}),new cljs.core.Keyword(null,"small","small",2133478704),connections_options,(function (value){
webapp.tasks.views.new_task.panel.set_type_from_connection(value,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_view)),language_compartment);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-task-with-connection","new-task-with-connection",1515363341),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),value], null));
})])], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-small overflow-auto h-new-task__tree-container"], null),(((((!(supported_sql_QMARK_))) && ((!(show_tree_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-small text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displaying schemas are only supported on MySQL, Postgres and MongoDB"], null)], null):null),((((supported_sql_QMARK_) && ((!(show_tree_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-small text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Schema not available when the connection requires review."], null)], null):null),((show_tree_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.connection_information_tree.main,cljs.core.deref(selected_connection)], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col justify-items-start col-span-6"," pl-small h-new-task__screen-container"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-3/5"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editor_comp], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.editor_footer,editor_view,language_compartment,script,cljs.core.deref(webapp.tasks.views.new_task.panel.task_type),switch_editor_language], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2/5"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.logs_area], null)], null)], null)], null);
});
});
webapp.tasks.views.new_task.panel.select_connection_modal = (function webapp$tasks$views$new_task$panel$select_connection_modal(){
var all_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_search_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189));
var searched_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (connections){
cljs.core.reset_BANG_(all_connections,connections);

return cljs.core.reset_BANG_(connections_search_status,null);
});
var set_connections_error = (function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get all connections",e], 0));

return cljs.core.reset_BANG_(connections_search_status,null);
});
webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets?limit=2000&status=active",new cljs.core.Keyword(null,"on-success","on-success",1786904109),set_connections,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),set_connections_error], null));

return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Choose a connection"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"display-key","display-key",-1366785151),new cljs.core.Keyword(null,"on-change-results-cb","on-change-results-cb",-909078750),new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293),new cljs.core.Keyword(null,"hide-results-list","hide-results-list",1113706229),new cljs.core.Keyword(null,"on-select-result","on-select-result",742011127),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826),new cljs.core.Keyword(null,"clear?","clear?",1363344639)],[new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__30378_SHARP_){
return cljs.core.reset_BANG_(searched_connections,p1__30378_SHARP_);
}),"min-w-96","","Type \"/\" to search and go to your connection","connection-search",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_search_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"review_type","review_type",743039553),new cljs.core.Keyword(null,"redact","redact",591770150),new cljs.core.Keyword(null,"type","type",1174270348)], null),true,(function (clicked){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-query-with-connection","new-query-with-connection",102562431),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(clicked)], null));
}),cljs.core.deref(all_connections),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),true])], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-96 overflow-auto relative"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_search_status),new cljs.core.Keyword(null,"loading","loading",-737050189)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center pt-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-5 h-5 inset-y-4 right-10"," opacity-50 animate-spin origin-center"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.icon.regular,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"loader-circle"], null)], null)], null)], null):null),(function (){var iter__4652__auto__ = (function webapp$tasks$views$new_task$panel$select_connection_modal_$_iter__30379(s__30380){
return (new cljs.core.LazySeq(null,(function (){
var s__30380__$1 = s__30380;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30380__$1);
if(temp__5753__auto__){
var s__30380__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30380__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30380__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30382 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30381 = (0);
while(true){
if((i__30381 < size__4651__auto__)){
var connection = cljs.core._nth(c__4650__auto__,i__30381);
cljs.core.chunk_append(b__30382,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-small py-regular border-b border-gray-100 ","transition hover:bg-gray-50 bg-white ","cursor-pointer text-gray-800 text-sm"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30381,connection,c__4650__auto__,size__4651__auto__,b__30382,s__30380__$2,temp__5753__auto__,all_connections,connections_search_status,searched_connections,set_connections,set_connections_error){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-query-with-connection","new-query-with-connection",102562431),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null));
});})(i__30381,connection,c__4650__auto__,size__4651__auto__,b__30382,s__30380__$2,temp__5753__auto__,all_connections,connections_search_status,searched_connections,set_connections,set_connections_error))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection)),")"].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null)));

var G__30389 = (i__30381 + (1));
i__30381 = G__30389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30382),webapp$tasks$views$new_task$panel$select_connection_modal_$_iter__30379(cljs.core.chunk_rest(s__30380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30382),null);
}
} else {
var connection = cljs.core.first(s__30380__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-small py-regular border-b border-gray-100 ","transition hover:bg-gray-50 bg-white ","cursor-pointer text-gray-800 text-sm"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (connection,s__30380__$2,temp__5753__auto__,all_connections,connections_search_status,searched_connections,set_connections,set_connections_error){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-query-with-connection","new-query-with-connection",102562431),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"connection-name","connection-name",1782409275),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null));
});})(connection,s__30380__$2,temp__5753__auto__,all_connections,connections_search_status,searched_connections,set_connections,set_connections_error))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection)),")"].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null)),webapp$tasks$views$new_task$panel$select_connection_modal_$_iter__30379(cljs.core.rest(s__30380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var or__4253__auto__ = cljs.core.deref(searched_connections);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.deref(all_connections);
}
})());
})()], null)], null);
});
});
webapp.tasks.views.new_task.panel.main = (function webapp$tasks$views$new_task$panel$main(){
var selected_connection = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-task->selected-connection","new-task->selected-connection",811490686)], null));
return (function (p__30383){
var map__30384 = p__30383;
var map__30384__$1 = cljs.core.__destructure_map(map__30384);
var choose_connection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30384__$1,new cljs.core.Keyword(null,"choose-connection?","choose-connection?",-346741087));
if(cljs.core.truth_(choose_connection_QMARK_)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.select_connection_modal], null),new cljs.core.Keyword(null,"small","small",2133478704),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null));
} else {
}

if(cljs.core.truth_(cljs.core.deref(selected_connection))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-8 box-border h-new-task__screen-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-rows-1 col-span-7"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.editor], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-new-task__screen-container col-span-1 overflow-auto"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.tasks_list.main], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small items-center justify-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-5 h-5 inset-y-4 right-10"," opacity-70 animate-spin origin-center"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.icon.regular,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"loader-circle"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm"], null),"Loading the editor..."], null)], null);
}
});
});

//# sourceMappingURL=webapp.tasks.views.new_task.panel.js.map
