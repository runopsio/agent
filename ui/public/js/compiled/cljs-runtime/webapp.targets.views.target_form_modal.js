goog.provide('webapp.targets.views.target_form_modal');
webapp.targets.views.target_form_modal.section = (function webapp$targets$views$target_form_modal$section(head,text,child){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,head,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-800"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.block.mb-regular.text-gray-600","small.block.mb-regular.text-gray-600",-1767202159),text], null),child], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.target_form_modal !== 'undefined') && (typeof webapp.targets.views.target_form_modal.header_text !== 'undefined')){
} else {
webapp.targets.views.target_form_modal.header_text = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30996 = cljs.core.get_global_hierarchy;
return (fexpr__30996.cljs$core$IFn$_invoke$arity$0 ? fexpr__30996.cljs$core$IFn$_invoke$arity$0() : fexpr__30996.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.targets.views.target-form-modal","header-text"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.targets.views.target_form_modal.header_text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_){
return "Update target";
}));
webapp.targets.views.target_form_modal.header_text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return "Create a new Target";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.target_form_modal !== 'undefined') && (typeof webapp.targets.views.target_form_modal.action_button !== 'undefined')){
} else {
webapp.targets.views.target_form_modal.action_button = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30998 = cljs.core.get_global_hierarchy;
return (fexpr__30998.cljs$core$IFn$_invoke$arity$0 ? fexpr__30998.cljs$core$IFn$_invoke$arity$0() : fexpr__30998.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.targets.views.target-form-modal","action-button"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.targets.views.target_form_modal.action_button.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_){
return "Update";
}));
webapp.targets.views.target_form_modal.action_button.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return "Create";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.target_form_modal !== 'undefined') && (typeof webapp.targets.views.target_form_modal.dispatch_form !== 'undefined')){
} else {
webapp.targets.views.target_form_modal.dispatch_form = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31000 = cljs.core.get_global_hierarchy;
return (fexpr__31000.cljs$core$IFn$_invoke$arity$0 ? fexpr__31000.cljs$core$IFn$_invoke$arity$0() : fexpr__31000.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.targets.views.target-form-modal","dispatch-form"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.targets.views.target_form_modal.dispatch_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_,form_fields){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.targets.events","update-target","webapp.targets.events/update-target",-888718063),form_fields], null));
}));
webapp.targets.views.target_form_modal.dispatch_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (_,form_fields){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.targets.events","create-target","webapp.targets.events/create-target",1595564906),form_fields], null));
}));
webapp.targets.views.target_form_modal.get_config_keys = (function webapp$targets$views$target_form_modal$get_config_keys(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.targets.constants.target_configs_required,key);
});
webapp.targets.views.target_form_modal.add_new_configs = (function webapp$targets$views$target_form_modal$add_new_configs(config_map,config_key,config_value){
if((!(((cljs.core.empty_QMARK_(config_key)) || (cljs.core.empty_QMARK_(config_value)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(config_map,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),config_key,new cljs.core.Keyword(null,"value","value",305978217),config_value], null));
} else {
return null;
}
});
webapp.targets.views.target_form_modal.config__GT_inputs = (function webapp$targets$views$target_form_modal$config__GT_inputs(p__31011,index,config){
var map__31012 = p__31011;
var map__31012__$1 = cljs.core.__destructure_map(map__31012);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31012__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31012__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(key);
var value_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(value);
var save = (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(config,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,k], null),v);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31007_SHARP_){
return cljs.core.reset_BANG_(key_val,p1__31007_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(key_val));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(key_val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31009_SHARP_){
return cljs.core.reset_BANG_(value_val,p1__31009_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val)], null)], null)], null);
});
});
webapp.targets.views.target_form_modal.config_inputs_for = (function webapp$targets$views$target_form_modal$config_inputs_for(config){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$targets$views$target_form_modal$config_inputs_for_$_iter__31015(s__31016){
return (new cljs.core.LazySeq(null,(function (){
var s__31016__$1 = s__31016;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31016__$1);
if(temp__5753__auto__){
var s__31016__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31016__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31016__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31018 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31017 = (0);
while(true){
if((i__31017 < size__4651__auto__)){
var index = cljs.core._nth(c__4650__auto__,i__31017);
cljs.core.chunk_append(b__31018,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.target_form_modal.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)));

var G__31065 = (i__31017 + (1));
i__31017 = G__31065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31018),webapp$targets$views$target_form_modal$config_inputs_for_$_iter__31015(cljs.core.chunk_rest(s__31016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31018),null);
}
} else {
var index = cljs.core.first(s__31016__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.target_form_modal.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)),webapp$targets$views$target_form_modal$config_inputs_for_$_iter__31015(cljs.core.rest(s__31016__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(config))));
})());
});
});
webapp.targets.views.target_form_modal.config__GT_json_stringify = (function webapp$targets$views$target_form_modal$config__GT_json_stringify(configs){
return JSON.stringify(cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31022){
var map__31023 = p__31022;
var map__31023__$1 = cljs.core.__destructure_map(map__31023);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31023__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31023__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31025){
var map__31026 = p__31025;
var map__31026__$1 = cljs.core.__destructure_map(map__31026);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)))));
});
webapp.targets.views.target_form_modal.json_stringify__GT_config = (function webapp$targets$views$target_form_modal$json_stringify__GT_config(configs){
if(((clojure.string.blank_QMARK_(configs)) || ((configs == null)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__31027){
var vec__31028 = p__31027;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31028,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31028,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(configs)));
}
});
/**
 * Receives two arguments.
 *   target -> the target to updated. You can send it as nil when form-type is :create
 *   form-type -> :update or :create; when :update, it's required to send target
 */
webapp.targets.views.target_form_modal.form = (function webapp$targets$views$target_form_modal$form(target,_){
var groups_flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","feature-flags","webapp.subs/feature-flags",-995610411)], null))),new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063));
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var target_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "mysql";
}
})());
var tags = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var secret_provider = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "env-var";
}
})());
var secret_path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"secret_path","secret_path",-725814244).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "ENV_CONFIG";
}
})());
var config = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(target)))?webapp.targets.views.target_form_modal.get_config_keys(new cljs.core.Keyword(null,"mysql","mysql",-1431590210)):webapp.targets.views.target_form_modal.json_stringify__GT_config(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(target))));
var config_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"config-key","config-key",1125141517).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var config_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"config-value","config-value",-442060525).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var secrets_host = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("runops");
var roles = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = webapp.formatters.list_to_comma_string((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"roles","roles",143379530).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(target);
}
})());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var change_target_type = (function (value){
cljs.core.reset_BANG_(target_type,value);

return cljs.core.reset_BANG_(config,webapp.targets.views.target_form_modal.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));
});
var agent_token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (___$1,form_type){
webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (___$2){
return cljs.core.reset_BANG_(agent_token,"");
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(agent_token,new cljs.core.Keyword(null,"agents_token","agents_token",-706846737).cljs$core$IFn$_invoke$arity$1(res));
})], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,webapp.targets.views.target_form_modal.header_text.cljs$core$IFn$_invoke$arity$1(form_type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 col-span-2"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mb-regular","form.mb-regular",-864175662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var roles_list = webapp.formatters.comma_string_to_list(cljs.core.deref(roles));
var configurations = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(config_key),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(config_value)], null));
return webapp.targets.views.target_form_modal.dispatch_form.cljs$core$IFn$_invoke$arity$2(form_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(name),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(target_type),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.deref(tags)], null),(function (){var G__31046 = cljs.core.deref(secrets_host);
switch (G__31046) {
case "runops":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"config","config",994861415),webapp.targets.views.target_form_modal.config__GT_json_stringify(configurations)], null);

break;
case "self":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),cljs.core.deref(secret_provider),new cljs.core.Keyword(null,"secret_path","secret_path",-725814244),cljs.core.deref(secret_path),new cljs.core.Keyword(null,"config","config",994861415),null], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31046)].join('')));

}
})(),(cljs.core.truth_(groups_flag)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groups","groups",-136896102),((cljs.core.empty_QMARK_(roles_list))?null:roles_list)], null):null),((cljs.core.not(groups_flag))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"roles","roles",143379530),((cljs.core.empty_QMARK_(roles_list))?null:roles_list)], null):null)], 0)));
})], null),webapp.targets.views.target_form_modal.section("Target information","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31031_SHARP_){
return cljs.core.reset_BANG_(name,webapp.formatters.replace_empty_space__GT_dash(p1__31031_SHARP_.target.value));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Target name",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form_type,new cljs.core.Keyword(null,"update","update",1045576396)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Target type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31032_SHARP_){
return change_target_type(p1__31032_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(target_type),new cljs.core.Keyword(null,"options","options",99638489),webapp.targets.constants.targets_types_list], null)], null)], null)], null)),webapp.targets.views.target_form_modal.section("Secrets management","Choose your host and set your secret's configurations",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.secrets_management.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-change->secrets-host-ui","on-change->secrets-host-ui",75084032),new cljs.core.Keyword(null,"secret-path","secret-path",1447725346),new cljs.core.Keyword(null,"secrets-host-ui","secrets-host-ui",1704246691),new cljs.core.Keyword(null,"agent-token","agent-token",1061166627),new cljs.core.Keyword(null,"on-change->config-value","on-change->config-value",-1616803261),new cljs.core.Keyword(null,"on-change->secret-provider","on-change->secret-provider",463685034),new cljs.core.Keyword(null,"secret-provider-disabled?","secret-provider-disabled?",-1670953206),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Keyword(null,"on-change->secret-path","on-change->secret-path",-1382183186),new cljs.core.Keyword(null,"secret-provider","secret-provider",1024312241),new cljs.core.Keyword(null,"config-value","config-value",-442060525),new cljs.core.Keyword(null,"on-click->add-more","on-click->add-more",1366954488),new cljs.core.Keyword(null,"on-change->config-key","on-change->config-key",-1219521829),new cljs.core.Keyword(null,"component->config-inputs","component->config-inputs",970595391),new cljs.core.Keyword(null,"configs","configs",1884039583),new cljs.core.Keyword(null,"secret-path-disabled?","secret-path-disabled?",2070346303)],[(function (value){
return cljs.core.reset_BANG_(secrets_host,value);
}),cljs.core.deref(secret_path),cljs.core.deref(secrets_host),cljs.core.deref(agent_token),(function (value){
return cljs.core.reset_BANG_(config_value,value);
}),(function (value){
return cljs.core.reset_BANG_(secret_provider,value);
}),true,cljs.core.deref(config_key),(function (value){
return cljs.core.reset_BANG_(secret_path,value);
}),cljs.core.deref(secret_provider),cljs.core.deref(config_value),(function (){
webapp.targets.views.target_form_modal.add_new_configs(config,cljs.core.deref(config_key),cljs.core.deref(config_value));

cljs.core.reset_BANG_(config_value,"");

return cljs.core.reset_BANG_(config_key,"");
}),(function (value){
return cljs.core.reset_BANG_(config_key,value);
}),webapp.targets.views.target_form_modal.config_inputs_for(config),cljs.core.deref(config),true])], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.justify-end.my-regular","div.grid.justify-end.my-regular",-1585449667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-blue-500.text-sm","a.text-blue-500.text-sm",-1436602129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/targets/new",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null),"Advanced configurations \u2192"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),webapp.targets.views.target_form_modal.action_button.cljs$core$IFn$_invoke$arity$1(form_type),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null)], null)], null);
});
});

//# sourceMappingURL=webapp.targets.views.target_form_modal.js.map
