goog.provide('webapp.connections.views.connection_form');
webapp.connections.views.connection_form.section = (function webapp$connections$views$connection_form$section(head,text,child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-3 gap-large my-large"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,head,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-800"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block mb-regular text-gray-600"], null),text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2"], null),child], null)], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.connection_form !== 'undefined') && (typeof webapp.connections.views.connection_form.header_text !== 'undefined')){
} else {
webapp.connections.views.connection_form.header_text = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30315 = cljs.core.get_global_hierarchy;
return (fexpr__30315.cljs$core$IFn$_invoke$arity$0 ? fexpr__30315.cljs$core$IFn$_invoke$arity$0() : fexpr__30315.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.views.connection-form","header-text"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.views.connection_form.header_text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_){
return "Update connection";
}));
webapp.connections.views.connection_form.header_text.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return "Create a new Connection";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.connection_form !== 'undefined') && (typeof webapp.connections.views.connection_form.action_button !== 'undefined')){
} else {
webapp.connections.views.connection_form.action_button = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30316 = cljs.core.get_global_hierarchy;
return (fexpr__30316.cljs$core$IFn$_invoke$arity$0 ? fexpr__30316.cljs$core$IFn$_invoke$arity$0() : fexpr__30316.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.views.connection-form","action-button"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.views.connection_form.action_button.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_){
return "Update";
}));
webapp.connections.views.connection_form.action_button.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return "Create";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.connection_form !== 'undefined') && (typeof webapp.connections.views.connection_form.dispatch_form !== 'undefined')){
} else {
webapp.connections.views.connection_form.dispatch_form = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30317 = cljs.core.get_global_hierarchy;
return (fexpr__30317.cljs$core$IFn$_invoke$arity$0 ? fexpr__30317.cljs$core$IFn$_invoke$arity$0() : fexpr__30317.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.views.connection-form","dispatch-form"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.views.connection_form.dispatch_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update","update",1045576396),(function (_,form_fields){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.connections.events","update-connection","webapp.connections.events/update-connection",-261776776),form_fields], null));
}));
webapp.connections.views.connection_form.dispatch_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (_,form_fields){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.connections.events","create-connection","webapp.connections.events/create-connection",50583174),form_fields], null));
}));
webapp.connections.views.connection_form.get_config_keys = (function webapp$connections$views$connection_form$get_config_keys(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.connections.constants.connection_configs_required,key);
});
webapp.connections.views.connection_form.add_new_configs = (function webapp$connections$views$connection_form$add_new_configs(config_map,config_key,config_value){
if((!(((cljs.core.empty_QMARK_(config_key)) || (cljs.core.empty_QMARK_(config_value)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(config_map,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),config_key,new cljs.core.Keyword(null,"value","value",305978217),config_value], null));
} else {
return null;
}
});
webapp.connections.views.connection_form.config__GT_inputs = (function webapp$connections$views$connection_form$config__GT_inputs(p__30320,index,config){
var map__30321 = p__30320;
var map__30321__$1 = cljs.core.__destructure_map(map__30321);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(key);
var value_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(value);
var save = (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(config,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,k], null),v);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30318_SHARP_){
return cljs.core.reset_BANG_(key_val,p1__30318_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(key_val));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(key_val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30319_SHARP_){
return cljs.core.reset_BANG_(value_val,p1__30319_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val));
}),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val)], null)], null)], null);
});
});
webapp.connections.views.connection_form.config_inputs_for = (function webapp$connections$views$connection_form$config_inputs_for(config){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$connections$views$connection_form$config_inputs_for_$_iter__30322(s__30323){
return (new cljs.core.LazySeq(null,(function (){
var s__30323__$1 = s__30323;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30323__$1);
if(temp__5753__auto__){
var s__30323__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30323__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30323__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30325 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30324 = (0);
while(true){
if((i__30324 < size__4651__auto__)){
var index = cljs.core._nth(c__4650__auto__,i__30324);
cljs.core.chunk_append(b__30325,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)));

var G__30352 = (i__30324 + (1));
i__30324 = G__30352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30325),webapp$connections$views$connection_form$config_inputs_for_$_iter__30322(cljs.core.chunk_rest(s__30323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30325),null);
}
} else {
var index = cljs.core.first(s__30323__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)),webapp$connections$views$connection_form$config_inputs_for_$_iter__30322(cljs.core.rest(s__30323__$2)));
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
webapp.connections.views.connection_form.config__GT_json_stringify = (function webapp$connections$views$connection_form$config__GT_json_stringify(configs){
return JSON.stringify(cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30326){
var map__30327 = p__30326;
var map__30327__$1 = cljs.core.__destructure_map(map__30327);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30328){
var map__30329 = p__30328;
var map__30329__$1 = cljs.core.__destructure_map(map__30329);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30329__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30329__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)))));
});
webapp.connections.views.connection_form.json_stringify__GT_config = (function webapp$connections$views$connection_form$json_stringify__GT_config(configs){
if(((clojure.string.blank_QMARK_(configs)) || ((configs == null)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30330){
var vec__30331 = p__30330;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(configs)));
}
});
/**
 * Receives two arguments.
 *   connection -> the connection to updated. You can send it as nil when form-type is :create
 *   form-type -> :update or :create; when :update, it's required to send connection
 */
webapp.connections.views.connection_form.form = (function webapp$connections$views$connection_form$form(connection,_){
var feature_flags = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105)], null));
var agents = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"agents","agents",-1112413700)], null));
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var connection_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "bash";
}
})());
var override_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"override_type","override_type",-2009577183).cljs$core$IFn$_invoke$arity$1(connection))?"Allow":"Do not allow"));
var templates_only = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"templates_only","templates_only",1685561766).cljs$core$IFn$_invoke$arity$1(connection))?"Allow":"Do not allow"));
var review_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "none";
}
})());
var channel_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"channel_name","channel_name",-2066447531).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var reviewers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reviewers","reviewers",311368702).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var redact = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"redact","redact",591770150).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "all";
}
})());
var secret_provider = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var secret_path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"secret_path","secret_path",-725814244).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "ENV_CONFIG";
}
})());
var config = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(connection)))?webapp.connections.views.connection_form.get_config_keys(new cljs.core.Keyword(null,"bash","bash",1176231467)):webapp.connections.views.connection_form.json_stringify__GT_config(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(connection))));
var config_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"config-key","config-key",1125141517).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var config_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"config-value","config-value",-442060525).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var groups = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = webapp.formatters.list_to_comma_string(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(connection));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var secrets_host = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("runops",new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596).cljs$core$IFn$_invoke$arity$1(connection)))?"runops":"self"));
var change_connection_type = (function (value){
cljs.core.reset_BANG_(connection_type,value);

return cljs.core.reset_BANG_(config,webapp.connections.views.connection_form.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));
});
var agent_token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var agent_default = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30334_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p1__30334_SHARP_),(function (){var or__4253__auto__ = "runops-hosted";
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "test";
}
})());
}),cljs.core.deref(agents)));
var agent_tag = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(connection);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(agent_default);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(agents))))){
return "unnamed";
} else {
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(agents)));
}
}
}
})());
var agents_options__GT_get_selected = (function (agents__$1,selected){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30335_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30335_SHARP_),selected);
}),agents__$1));
});
return (function (___$1,form_type){
var agents_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30348){
var map__30349 = p__30348;
var map__30349__$1 = cljs.core.__destructure_map(map__30349);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),((clojure.string.blank_QMARK_(tags))?"unnamed":tags),new cljs.core.Keyword(null,"text","text",-1790561697),((clojure.string.blank_QMARK_(tags))?"unnamed":tags),new cljs.core.Keyword(null,"status","status",-1997798413),status], null);
}),cljs.core.deref(agents));
var agent_selected_status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(agents_options__GT_get_selected(agents_options,cljs.core.deref(agent_tag)));
if(cljs.core.truth_(cljs.core.deref(feature_flags))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings->get-agents","settings->get-agents",-663403061),(cljs.core.truth_(new cljs.core.Keyword(null,"agents-events","agents-events",-846279452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(feature_flags)))?new cljs.core.Keyword(null,"new","new",-2085437848):new cljs.core.Keyword(null,"vintage","vintage",818195578))], null));
} else {
}

webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (___$2){
return cljs.core.reset_BANG_(agent_token,"");
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(agent_token,new cljs.core.Keyword(null,"agents_token","agents_token",-706846737).cljs$core$IFn$_invoke$arity$1(res));
})], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,webapp.connections.views.connection_form.header_text.cljs$core$IFn$_invoke$arity$1(form_type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var groups_list = webapp.formatters.comma_string_to_list(cljs.core.deref(groups));
var configurations = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(config_key),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(config_value)], null));
return webapp.connections.views.connection_form.dispatch_form.cljs$core$IFn$_invoke$arity$2(form_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"override_type","override_type",-2009577183),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"review_type","review_type",743039553),new cljs.core.Keyword(null,"templates_only","templates_only",1685561766),new cljs.core.Keyword(null,"redact","redact",591770150),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"channel_name","channel_name",-2066447531),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"reviewers","reviewers",311368702)],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(override_type),"Allow"))?true:false),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(agent_tag),"unnamed"))?null:cljs.core.deref(agent_tag)),cljs.core.deref(review_type),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(templates_only),"Allow"))?true:false),cljs.core.deref(redact),cljs.core.deref(name),cljs.core.deref(connection_type),cljs.core.deref(channel_name),((cljs.core.empty_QMARK_(groups_list))?null:groups_list),cljs.core.deref(description),cljs.core.deref(reviewers)]),(function (){var G__30350 = cljs.core.deref(secrets_host);
switch (G__30350) {
case "runops":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"config","config",994861415),webapp.connections.views.connection_form.config__GT_json_stringify(configurations)], null);

break;
case "self":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),cljs.core.deref(secret_provider),new cljs.core.Keyword(null,"secret_path","secret_path",-725814244),cljs.core.deref(secret_path),new cljs.core.Keyword(null,"config","config",994861415),null], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30350)].join('')));

}
})()], 0)));
})], null),webapp.connections.views.connection_form.section("Informations","General informations of your connection",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-x-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30336_SHARP_){
return cljs.core.reset_BANG_(name,webapp.formatters.replace_empty_space__GT_dash(p1__30336_SHARP_.target.value));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Connection name",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form_type,new cljs.core.Keyword(null,"update","update",1045576396)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"connection type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30337_SHARP_){
return change_connection_type(p1__30337_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(connection_type),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"options","options",99638489),webapp.connections.constants.connections_types_list], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.textarea,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30338_SHARP_){
return cljs.core.reset_BANG_(description,p1__30338_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add a description to your connection",new cljs.core.Keyword(null,"rows","rows",850049680),(2),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(description)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.section,"Permission management","Management who can access the connection and the behavior of task's review in this connection",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular mb-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Access control"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Groups",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30339_SHARP_){
return cljs.core.reset_BANG_(groups,p1__30339_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Comma separated string",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(groups)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Allow run only in templates",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30340_SHARP_){
return cljs.core.reset_BANG_(templates_only,p1__30340_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(templates_only),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Allow",new cljs.core.Keyword(null,"value","value",305978217),"Allow"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Do not allow",new cljs.core.Keyword(null,"value","value",305978217),"Do not allow"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular mb-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Review control"], null)], null),webapp.components.forms.select(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Who approves",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30341_SHARP_){
cljs.core.reset_BANG_(review_type,p1__30341_SHARP_.target.value);

cljs.core.reset_BANG_(reviewers,"");

return cljs.core.reset_BANG_(channel_name,"");
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(review_type),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"none",new cljs.core.Keyword(null,"text","text",-1790561697),"none"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"anyone",new cljs.core.Keyword(null,"text","text",-1790561697),"anyone"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"team",new cljs.core.Keyword(null,"text","text",-1790561697),"groups"], null)], null)], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(review_type),"team"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Reviewer's groups",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30342_SHARP_){
return cljs.core.reset_BANG_(reviewers,p1__30342_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Comma separated string",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(reviewers)], null)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(review_type),"none"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Slack channel name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30343_SHARP_){
return cljs.core.reset_BANG_(channel_name,p1__30343_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Slack channel name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(channel_name)], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular mb-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Data control"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-1","div.col-span-1",1379827151),webapp.components.forms.select(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Redact sensitive data",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30344_SHARP_){
return cljs.core.reset_BANG_(redact,p1__30344_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(redact),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"all",new cljs.core.Keyword(null,"text","text",-1790561697),"all"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"none",new cljs.core.Keyword(null,"text","text",-1790561697),"none"], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 mb-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Connection type restriction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-600"], null),["You can configure so people won't be able to run queries ","that are not the exact same type of this connection"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Allow queries with any type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30345_SHARP_){
return cljs.core.reset_BANG_(override_type,p1__30345_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(override_type),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Allow",new cljs.core.Keyword(null,"value","value",305978217),"Allow"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Do not allow",new cljs.core.Keyword(null,"value","value",305978217),"Do not allow"], null)], null)], null)], null)], null)], null)], null)], null),webapp.connections.views.connection_form.section("Secrets management","Choose your host and set your secret's configurations",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.secrets_management.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-change->secrets-host-ui","on-change->secrets-host-ui",75084032),new cljs.core.Keyword(null,"secret-path","secret-path",1447725346),new cljs.core.Keyword(null,"secrets-host-ui","secrets-host-ui",1704246691),new cljs.core.Keyword(null,"agent-token","agent-token",1061166627),new cljs.core.Keyword(null,"on-change->config-value","on-change->config-value",-1616803261),new cljs.core.Keyword(null,"agent-tag","agent-tag",-1544913180),new cljs.core.Keyword(null,"on-change->secret-provider","on-change->secret-provider",463685034),new cljs.core.Keyword(null,"secret-provider-disabled?","secret-provider-disabled?",-1670953206),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Keyword(null,"on-change->secret-path","on-change->secret-path",-1382183186),new cljs.core.Keyword(null,"secret-provider","secret-provider",1024312241),new cljs.core.Keyword(null,"config-value","config-value",-442060525),new cljs.core.Keyword(null,"on-click->add-more","on-click->add-more",1366954488),new cljs.core.Keyword(null,"on-change->config-key","on-change->config-key",-1219521829),new cljs.core.Keyword(null,"component->config-inputs","component->config-inputs",970595391),new cljs.core.Keyword(null,"configs","configs",1884039583),new cljs.core.Keyword(null,"secret-path-disabled?","secret-path-disabled?",2070346303)],[(function (value){
return cljs.core.reset_BANG_(secrets_host,value);
}),cljs.core.deref(secret_path),cljs.core.deref(secrets_host),cljs.core.deref(agent_token),(function (value){
return cljs.core.reset_BANG_(config_value,value);
}),cljs.core.deref(agent_tag),(function (value){
return cljs.core.reset_BANG_(secret_provider,value);
}),false,cljs.core.deref(config_key),(function (value){
return cljs.core.reset_BANG_(secret_path,value);
}),cljs.core.deref(secret_provider),cljs.core.deref(config_value),(function (){
webapp.connections.views.connection_form.add_new_configs(config,cljs.core.deref(config_key),cljs.core.deref(config_value));

cljs.core.reset_BANG_(config_value,"");

return cljs.core.reset_BANG_(config_key,"");
}),(function (value){
return cljs.core.reset_BANG_(config_key,value);
}),webapp.connections.views.connection_form.config_inputs_for(config),cljs.core.deref(config),false])], null)),webapp.connections.views.connection_form.section("Agents","Select the agent for your connection",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-regular mb-regular items-baseline"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"options","options",99638489),agents_options,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type",new cljs.core.Keyword(null,"name","name",1843675177),"connection-type",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(agent_tag),new cljs.core.Keyword(null,"required?","required?",-872514462),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
return cljs.core.reset_BANG_(agent_tag,v);
})], null)], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(agent_tag)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["block p-1 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(agent_selected_status,"UP"))?"text-green-500":"text-red-500")].join('')], null),["This agent is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_selected_status)].join('')], null):null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.section,"","",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),webapp.connections.views.connection_form.action_button.cljs$core$IFn$_invoke$arity$1(form_type),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null)], null)], null)], null);
});
});
webapp.connections.views.connection_form.main = (function webapp$connections$views$connection_form$main(form_type){
var connection = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","updating-connection","webapp.subs/updating-connection",207816543)], null)));
var G__30351 = form_type;
var G__30351__$1 = (((G__30351 instanceof cljs.core.Keyword))?G__30351.fqn:null);
switch (G__30351__$1) {
case "create":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.form,null,new cljs.core.Keyword(null,"create","create",-1301499256)], null);

break;
case "update":
if(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(connection) === true){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form.form,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.Keyword(null,"update","update",1045576396)], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30351__$1)].join('')));

}
});

//# sourceMappingURL=webapp.connections.views.connection_form.js.map
