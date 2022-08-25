goog.provide('webapp.tasks.views.new_task.panel');
var module$node_modules$$codemirror$basic_setup$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$basic_setup$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_javascript$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_javascript$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_sql$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_sql$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_python$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_python$dist$index_cjs", {});
var module$node_modules$$codemirror$stream_parser$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$stream_parser$dist$index_cjs", {});
var module$node_modules$$codemirror$legacy_modes$mode$shell=shadow.js.require("module$node_modules$$codemirror$legacy_modes$mode$shell", {});
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
webapp.tasks.views.new_task.panel.code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.tasks.views.new_task.panel.get_code_from_localstorage());
webapp.tasks.views.new_task.panel.target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
webapp.tasks.views.new_task.panel.task_description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
webapp.tasks.views.new_task.panel.task_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
webapp.tasks.views.new_task.panel.code_saved_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"saved","saved",288760660));
webapp.tasks.views.new_task.panel.type_language_map = cljs.core.PersistentHashMap.fromArrays([null,"","mysql","rails-console","k8s","bash","sql-server","postgres-csv","mongodb","k8s-exec","postgres","hashicorp-vault","rails-console-k8s","mysql-csv","python","rails-console-ecs","k8s-apply","rails","node"],[(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,module$node_modules$$codemirror$lang_javascript$dist$index_cjs.javascript,(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),module$node_modules$$codemirror$lang_sql$dist$index_cjs.sql,module$node_modules$$codemirror$lang_python$dist$index_cjs.python,(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),(function (){
return module$node_modules$$codemirror$stream_parser$dist$index_cjs.StreamLanguage.define(module$node_modules$$codemirror$legacy_modes$mode$shell.shell);
}),module$node_modules$$codemirror$lang_javascript$dist$index_cjs.javascript]);
webapp.tasks.views.new_task.panel.manage_language_switch = (function webapp$tasks$views$new_task$panel$manage_language_switch(value,view,language){
var selected_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,value);
var language_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,"");
cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_type,value);

return view.dispatch(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effects","effects",-282369292),language.reconfigure((((selected_language == null))?(language_default.cljs$core$IFn$_invoke$arity$0 ? language_default.cljs$core$IFn$_invoke$arity$0() : language_default.call(null)):(selected_language.cljs$core$IFn$_invoke$arity$0 ? selected_language.cljs$core$IFn$_invoke$arity$0() : selected_language.call(null))))], null)));
});
webapp.tasks.views.new_task.panel.save_to_localstorage = (function webapp$tasks$views$new_task$panel$save_to_localstorage(code_string){
var code_tmp_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),Date.now(),new cljs.core.Keyword(null,"code","code",1586293142),code_string], null);
var code_tmp_db_json = JSON.stringify(cljs.core.clj__GT_js(code_tmp_db));
localStorage.setItem(new cljs.core.Keyword(null,"code-tmp-db","code-tmp-db",-1479326031),code_tmp_db_json);

return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.code_saved_status,new cljs.core.Keyword(null,"saved","saved",288760660));
});
webapp.tasks.views.new_task.panel.auto_save = (function webapp$tasks$views$new_task$panel$auto_save(view_update){
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

return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.code,code_string);
} else {
return null;
}
});
webapp.tasks.views.new_task.panel.set_type_from_target = (function webapp$tasks$views$new_task$panel$set_type_from_target(targets,selected_target_name,view,language){
var selected_target = cljs.core.filterv((function (p1__31075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31075_SHARP_),selected_target_name);
}),targets);
var item = (function (){var or__4253__auto__ = cljs.core.first(selected_target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(item),"none")) && ((!(cljs.core.empty_QMARK_(item)))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"text","text",-1790561697),["This target requires review. ","Your task won't run until it gets reviewed"].join('')], null)], null));
} else {
}

cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.target,selected_target_name);

return webapp.tasks.views.new_task.panel.manage_language_switch((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),view,language);
});
webapp.tasks.views.new_task.panel.submit_task = (function webapp$tasks$views$new_task$panel$submit_task(e){
if(cljs.core.truth_(e.preventDefault)){
e.preventDefault();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.tasks.views.new_task.panel.target),"")){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"text","text",-1790561697),"You must choose a target"], null)], null));
} else {
var __31135 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-new-task","create-new-task",494722089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(webapp.tasks.views.new_task.panel.task_type),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(webapp.tasks.views.new_task.panel.task_description),new cljs.core.Keyword(null,"script","script",-1304443801),cljs.core.deref(webapp.tasks.views.new_task.panel.code),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.deref(webapp.tasks.views.new_task.panel.target)], null)], null));
var __31136__$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
var __31137__$2 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Task created!"], null)], null));
}

return true;
});
webapp.tasks.views.new_task.panel.task_advanced_fields = (function webapp$tasks$views$new_task$panel$task_advanced_fields(editor_view,language){
var targets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","all-targets","webapp.subs/all-targets",1519043201)], null));
return (function (){
var targets_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31076_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31076_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31076_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31076_SHARP_)),")"].join('')], null));
}),cljs.core.deref(targets));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__31077_SHARP_){
return webapp.tasks.views.new_task.panel.submit_task(p1__31077_SHARP_);
})], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Create your task",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Target name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),"Get the name for your target"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),targets_options,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(webapp.tasks.views.new_task.panel.target),new cljs.core.Keyword(null,"default-value","default-value",232220170),"Select a target",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your-target-name* (required)",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31078_SHARP_){
return webapp.tasks.views.new_task.panel.set_type_from_target(cljs.core.deref(targets),p1__31078_SHARP_,editor_view,language);
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-target"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Task type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),"Leave it blank for using the default for the target or select a different one if your target allows it"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31079_SHARP_){
return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_type,p1__31079_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.deref(webapp.tasks.views.new_task.panel.task_type);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),webapp.targets.constants.targets_types_list], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-small","header.mb-small",-1446617392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Task description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-small"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.text-xs.text-gray-500","footer.text-xs.text-gray-500",-975778770),"Optional field for adding a description so your peers can get a better understanding of what you're doing"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add your description here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31081_SHARP_){
return cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.task_description,p1__31081_SHARP_.target.value);
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(webapp.tasks.views.new_task.panel.task_description),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),""], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.grid.grid-cols-2.gap-small","footer.grid.grid-cols-2.gap-small",1073765889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.secondary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create task",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.tasks.views.new_task.panel.target),null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.tasks.views.new_task.panel.target),"")))], null)], null)], null)], null)], null)], null);
});
});
webapp.tasks.views.new_task.panel.advanced_task_creation = (function webapp$tasks$views$new_task$panel$advanced_task_creation(view,language){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.task_advanced_fields,view,language], null)], null));
});
webapp.tasks.views.new_task.panel.keymap_mod_enter = (function webapp$tasks$views$new_task$panel$keymap_mod_enter(view,language){
webapp.tasks.views.new_task.panel.advanced_task_creation(view,language);

return true;
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.new_task !== 'undefined') && (typeof webapp.tasks.views.new_task.panel !== 'undefined') && (typeof webapp.tasks.views.new_task.panel.saved_status_el !== 'undefined')){
} else {
webapp.tasks.views.new_task.panel.saved_status_el = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31087 = cljs.core.get_global_hierarchy;
return (fexpr__31087.cljs$core$IFn$_invoke$arity$0 ? fexpr__31087.cljs$core$IFn$_invoke$arity$0() : fexpr__31087.call(null));
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
webapp.tasks.views.new_task.panel.editor_footer = (function webapp$tasks$views$new_task$panel$editor_footer(editor_view,language){
var is_mac_QMARK_ = (navigator.platform.toUpperCase().indexOf("MAC") >= (0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex p-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.saved_status_el,cljs.core.deref(webapp.tasks.views.new_task.panel.code_saved_status)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular flex-grow justify-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center cursor-pointer ","text-gray-800 hover:underline "].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.tasks.views.new_task.panel.advanced_task_creation(editor_view,language);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-plus-dark-gray.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),["Advanced fields ",((is_mac_QMARK_)?"(Shift+Cmd+Enter)":"(Shift+Ctrl+Enter)")].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center cursor-pointer ","text-blue-700 hover:underline"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__31090_SHARP_){
return webapp.tasks.views.new_task.panel.submit_task(p1__31090_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-play-blue.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),["Create ",((is_mac_QMARK_)?"(Cmd+Enter)":"(Ctrl+Enter)")].join('')], null)], null)], null)], null);
});
webapp.tasks.views.new_task.panel.logs_area = (function webapp$tasks$views$new_task$panel$logs_area(){
var new_task = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","new-task","webapp.subs/new-task",1755247024)], null));
return (function (){
var task_logs = new cljs.core.Keyword(null,"task-logs","task-logs",-274919405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"logs","logs",1068148008),new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"log-status","log-status",1744062288),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"task-status","task-status",1198461430),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task))),new cljs.core.Keyword(null,"classes","classes",2037804510),"h-full",new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849),true,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new_task)))], null),"new-task-logs-container"], null)], null);
});
});
webapp.tasks.views.new_task.panel.editor = (function webapp$tasks$views$new_task$panel$editor(){
var theme = module$node_modules$$codemirror$basic_setup$dist$index_cjs.EditorView.theme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["&",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"height","height",1025178622),"calc(50vh - 72px)"], null),".cm-gutters",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"color","color",1011675173),"rgb(107, 114, 128)"], null)], null)));
var language = (new module$node_modules$$codemirror$state$dist$index_cjs.Compartment());
var targets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","all-targets","webapp.subs/all-targets",1519043201)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-all-targets","get-all-targets",294381516)], null));
var keymap = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Shift-Mod-Enter",new cljs.core.Keyword(null,"run","run",-1821166653),(function (p1__31099_SHARP_){
return webapp.tasks.views.new_task.panel.keymap_mod_enter(p1__31099_SHARP_,language);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Mod-Enter",new cljs.core.Keyword(null,"run","run",-1821166653),(function (){
return webapp.tasks.views.new_task.panel.submit_task(cljs.core.PersistentArrayMap.EMPTY);
})], null)], null);
var selected_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.new_task.panel.type_language_map,cljs.core.deref(webapp.tasks.views.new_task.panel.task_type));
var extensions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(cljs.core.clj__GT_js(keymap)),module$node_modules$$codemirror$basic_setup$dist$index_cjs.basicSetup,module$node_modules$$codemirror$basic_setup$dist$index_cjs.EditorView.updateListener.of((function (p1__31100_SHARP_){
return webapp.tasks.views.new_task.panel.auto_save(p1__31100_SHARP_);
})),theme], null);
var codemirror_editor = webapp.components.codemirror_editor.editor(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref(webapp.tasks.views.new_task.panel.code),new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [language.of((selected_language.cljs$core$IFn$_invoke$arity$0 ? selected_language.cljs$core$IFn$_invoke$arity$0() : selected_language.call(null)))], null),extensions)], null)));
})], null));
var editor_comp = new cljs.core.Keyword(null,"editor-component","editor-component",-449297328).cljs$core$IFn$_invoke$arity$1(codemirror_editor);
var editor_view = new cljs.core.Keyword(null,"editor-view","editor-view",-1778268605).cljs$core$IFn$_invoke$arity$1(codemirror_editor);
return (function (){
var selected_target = cljs.core.first(cljs.core.filterv((function (p1__31103_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31103_SHARP_),cljs.core.deref(webapp.tasks.views.new_task.panel.target));
}),cljs.core.deref(targets)));
var targets_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31104_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31104_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31104_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31104_SHARP_)),")"].join('')], null));
}),cljs.core.deref(targets));
var target_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(selected_target);
var show_tree_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(selected_target),"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"mysql")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"postgres")))));
var supported_sql_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"mysql")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"postgres")));
var ___$1 = ((((cljs.core.seq(cljs.core.deref(targets))) && ((!((new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_view)) == null))))))?webapp.tasks.views.new_task.panel.set_type_from_target(cljs.core.deref(targets),cljs.core.deref(webapp.tasks.views.new_task.panel.target),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_view)),language):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1 h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular px-small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),targets_options,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(webapp.tasks.views.new_task.panel.target),new cljs.core.Keyword(null,"default-value","default-value",232220170),"Select a target",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a target",new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),"min-w-64",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (value){
webapp.tasks.views.new_task.panel.set_type_from_target(cljs.core.deref(targets),value,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_view)),language);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-task-with-target","new-task-with-target",-1243558041),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"target-name","target-name",-1836829889),value], null));
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-target"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-small overflow-auto h-new-task__tree-container"], null),(((((!(supported_sql_QMARK_))) && ((!(show_tree_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-small text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displaying schemas are only supported on MySQL and Postgres"], null)], null):null),((((supported_sql_QMARK_) && ((!(show_tree_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs px-small text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Schema not available when the target requires review."], null)], null):null),((show_tree_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.target_information_tree.main,selected_target], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col justify-items-start col-span-6"," pl-small h-new-task__screen-container"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editor_comp], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.editor_footer,editor_view,language], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.logs_area], null)], null)], null)], null);
});
});
webapp.tasks.views.new_task.panel.main = (function webapp$tasks$views$new_task$panel$main(p__31117){
var map__31118 = p__31117;
var map__31118__$1 = cljs.core.__destructure_map(map__31118);
var target_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"target-name","target-name",-1836829889));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_name,null))?cljs.core.reset_BANG_(webapp.tasks.views.new_task.panel.target,target_name):null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-8 box-border h-new-task__screen-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-rows-1 col-span-7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-name","target-name",-1836829889),target_name], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-new-task__screen-container col-span-1 overflow-auto"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.tasks_list.main], null)], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.new_task.panel.js.map
