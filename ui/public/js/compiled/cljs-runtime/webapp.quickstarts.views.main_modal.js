goog.provide('webapp.quickstarts.views.main_modal');
webapp.quickstarts.views.main_modal.checkbox = (function webapp$quickstarts$views$main_modal$checkbox(p__30411){
var map__30412 = p__30411;
var map__30412__$1 = cljs.core.__destructure_map(map__30412);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30412__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex items-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center h-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),["checkbox-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["checkbox-name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"aria-describedby",description,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
localStorage.setItem("quickstart-modal-disabled",cljs.core.not(cljs.core.deref(checked)));

return cljs.core.reset_BANG_(checked,cljs.core.not(cljs.core.deref(checked)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-3 text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),description,new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),text], null)], null)], null);
});
webapp.quickstarts.views.main_modal.checkbox_disabled_quickstart = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
webapp.quickstarts.views.main_modal.get_config_keys = (function webapp$quickstarts$views$main_modal$get_config_keys(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.targets.constants.target_configs_required,key);
});
webapp.quickstarts.views.main_modal.select_area = (function webapp$quickstarts$views$main_modal$select_area(target_type,configs,disabled_QMARK_){
var change_target_type = (function (value){
cljs.core.reset_BANG_(target_type,value);

return cljs.core.reset_BANG_(configs,webapp.quickstarts.views.main_modal.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-3 gap-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"What you would like to connect?",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30415_SHARP_){
return change_target_type(p1__30415_SHARP_.target.value);
}),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(target_type),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),webapp.targets.constants.targets_types_list], null)], null)], null);
});
webapp.quickstarts.views.main_modal.config__GT_inputs = (function webapp$quickstarts$views$main_modal$config__GT_inputs(p__30420,index,config){
var map__30421 = p__30420;
var map__30421__$1 = cljs.core.__destructure_map(map__30421);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30421__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(key);
var value_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(value);
var save = (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(config,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,k], null),v);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(key_val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30418_SHARP_){
return cljs.core.reset_BANG_(value_val,p1__30418_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val));
}),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val)], null)], null)], null);
});
});
webapp.quickstarts.views.main_modal.config_inputs_for = (function webapp$quickstarts$views$main_modal$config_inputs_for(config){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$quickstarts$views$main_modal$config_inputs_for_$_iter__30422(s__30423){
return (new cljs.core.LazySeq(null,(function (){
var s__30423__$1 = s__30423;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30423__$1);
if(temp__5753__auto__){
var s__30423__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30423__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30423__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30425 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30424 = (0);
while(true){
if((i__30424 < size__4651__auto__)){
var index = cljs.core._nth(c__4650__auto__,i__30424);
cljs.core.chunk_append(b__30425,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)));

var G__30461 = (i__30424 + (1));
i__30424 = G__30461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30425),webapp$quickstarts$views$main_modal$config_inputs_for_$_iter__30422(cljs.core.chunk_rest(s__30423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30425),null);
}
} else {
var index = cljs.core.first(s__30423__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)),webapp$quickstarts$views$main_modal$config_inputs_for_$_iter__30422(cljs.core.rest(s__30423__$2)));
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
webapp.quickstarts.views.main_modal.config__GT_json_stringify = (function webapp$quickstarts$views$main_modal$config__GT_json_stringify(configs){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([configs], 0));

return JSON.stringify(cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30430){
var map__30431 = p__30430;
var map__30431__$1 = cljs.core.__destructure_map(map__30431);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30431__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30431__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30432){
var map__30433 = p__30432;
var map__30433__$1 = cljs.core.__destructure_map(map__30433);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30433__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30433__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)))));
});
webapp.quickstarts.views.main_modal.manage__GT_main_area = (function webapp$quickstarts$views$main_modal$manage__GT_main_area(p__30436){
var map__30437 = p__30436;
var map__30437__$1 = cljs.core.__destructure_map(map__30437);
var current_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"current-step","current-step",-2023410137));
var config_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"config-atom","config-atom",2036561794));
var fx_change_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886));
var target_name_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"target-name-atom","target-name-atom",803045800));
var target_type_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"target-type-atom","target-type-atom",217924369));
var fx_create_target_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"fx-create-target-request","fx-create-target-request",-229901159));
var fx_get_current_step_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30437__$1,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420));
var G__30438 = current_step;
var G__30438__$1 = (((G__30438 instanceof cljs.core.Keyword))?G__30438.fqn:null);
switch (G__30438__$1) {
case "agent":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.environment_step_modal.main,webapp.quickstarts.views.main_modal.config_inputs_for(config_atom),fx_create_target_request,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target-name","target-name",-1836829889),target_name_atom,new cljs.core.Keyword(null,"target-type","target-type",-1795727181),target_type_atom,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),fx_get_current_step_infos], null)], null);

break;
case "task":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.task_step_modal.main,fx_change_step,cljs.core.deref(target_name_atom)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30438__$1)].join('')));

}
});
if((typeof webapp !== 'undefined') && (typeof webapp.quickstarts !== 'undefined') && (typeof webapp.quickstarts.views !== 'undefined') && (typeof webapp.quickstarts.views.main_modal !== 'undefined') && (typeof webapp.quickstarts.views.main_modal.show_snackbar !== 'undefined')){
} else {
webapp.quickstarts.views.main_modal.show_snackbar = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30439 = cljs.core.get_global_hierarchy;
return (fexpr__30439.cljs$core$IFn$_invoke$arity$0 ? fexpr__30439.cljs$core$IFn$_invoke$arity$0() : fexpr__30439.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.quickstarts.views.main-modal","show-snackbar"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"verified","verified",1807036606),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent verified and target successfully created!"], null)], null));
}));
webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-up","not-up",-1655597142),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent is not working! Please verify your configurations."], null)], null));
}));
webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-exist","not-exist",-1832922632),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent not found! Please verify your configurations."], null)], null));
}));
webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"agent-failure","agent-failure",891834568),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent not verified! Please try again in a few minutes."], null)], null));
}));
webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"target-failure","target-failure",-1643082723),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Target not created! Please try again in a few minutes."], null)], null));
}));
webapp.quickstarts.views.main_modal.container = (function webapp$quickstarts$views$main_modal$container(){
var steppers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"current",new cljs.core.Keyword(null,"title","title",636505583),"Connection's configuration",new cljs.core.Keyword(null,"text","text",-1790561697),"It will create your connection."], null),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"upcoming",new cljs.core.Keyword(null,"title","title",636505583),"Task running",new cljs.core.Keyword(null,"text","text",-1790561697),"It will test your connection running a task of yours."], null)], null));
var current_step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"agent","agent",-766455027));
var target_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("mysql");
var target_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var configs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.quickstarts.views.main_modal.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(target_type))));
var selects_disabled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var get_current_step_infos = (function (){
var G__30453 = cljs.core.deref(steppers);
var fexpr__30452 = cljs.core.deref(current_step);
return (fexpr__30452.cljs$core$IFn$_invoke$arity$1 ? fexpr__30452.cljs$core$IFn$_invoke$arity$1(G__30453) : fexpr__30452.call(null,G__30453));
});
var get_index = (function (){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.deref(steppers)),cljs.core.deref(current_step));
});
var get_step = (function (direction){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(cljs.core.deref(steppers)),(function (){var G__30454 = direction;
switch (G__30454) {
case "next":
return (get_index() + (1));

break;
case "back":
return (get_index() - (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30454)].join('')));

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
var create_target_request = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets",new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(target_name),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(target_type),new cljs.core.Keyword(null,"groups","groups",-136896102),null,new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"tags","tags",1771418977),"test",new cljs.core.Keyword(null,"config","config",994861415),webapp.quickstarts.views.main_modal.config__GT_json_stringify(cljs.core.deref(configs))], null)], 0)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target-failure","target-failure",-1643082723));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
change_step(new cljs.core.Keyword(null,"agent","agent",-766455027),"complete");

change_step(new cljs.core.Keyword(null,"task","task",-1476607993),"current");

cljs.core.reset_BANG_(selects_disabled_QMARK_,true);

return webapp.quickstarts.views.main_modal.show_snackbar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"verified","verified",1807036606));
})], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 items-center mb-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Quickstarts"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.select_area,target_type,configs,cljs.core.deref(selects_disabled_QMARK_)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-6"], null),((clojure.string.blank_QMARK_(cljs.core.deref(target_type)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center h-96"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Choose one target type to start."], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl px-8 grid grid-cols-12 gap-16"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-4 flex flex-col justify-between my-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sticky top-6 divide-y divide-gray-300"], null),webapp.components.stepper.main(cljs.core.deref(steppers))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.checkbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel-quickstart-modal",new cljs.core.Keyword(null,"description","description",-1428560544),"checkbox for disabled quickstart modal",new cljs.core.Keyword(null,"checked","checked",-50955819),webapp.quickstarts.views.main_modal.checkbox_disabled_quickstart,new cljs.core.Keyword(null,"text","text",-1790561697),"I do not want to see this quickstart anymore."], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.manage__GT_main_area,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"current-step","current-step",-2023410137),cljs.core.deref(current_step),new cljs.core.Keyword(null,"config-atom","config-atom",2036561794),configs,new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886),change_step,new cljs.core.Keyword(null,"target-name-atom","target-name-atom",803045800),target_name,new cljs.core.Keyword(null,"target-type-atom","target-type-atom",217924369),target_type,new cljs.core.Keyword(null,"fx-create-target-request","fx-create-target-request",-229901159),create_target_request,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),get_current_step_infos], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-x-large"], null),(cljs.core.truth_(get_step("back"))?webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_back_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null)),(cljs.core.truth_((function (){var and__4251__auto__ = get_step("next");
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete");
} else {
return and__4251__auto__;
}
})())?webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_next_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null))], null)], null)], null))], null)], null);
});
});
webapp.quickstarts.views.main_modal.main = (function webapp$quickstarts$views$main_modal$main(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","tasks","webapp.subs/tasks",-468408004)], null));
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
return (function (){
var user_groups = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user));
var admin_QMARK_ = cljs.core.some((function (p1__30458_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",p1__30458_SHARP_);
}),user_groups);
var results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks));
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks));
var quickstart_modal_disabled = localStorage.getItem("quickstart-modal-disabled");
if(cljs.core.truth_(quickstart_modal_disabled)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.empty_QMARK_(results);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"success","success",1890645906));
if(and__4251__auto____$1){
return admin_QMARK_;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.container], null),new cljs.core.Keyword(null,"large","large",-196820544)], null));
} else {
return null;
}
}
});
});

//# sourceMappingURL=webapp.quickstarts.views.main_modal.js.map
