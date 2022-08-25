goog.provide('webapp.secrets.views.secret_form_modal_update');
webapp.secrets.views.secret_form_modal_update.add_new_configs = (function webapp$secrets$views$secret_form_modal_update$add_new_configs(config_map,config_key,config_value){
if((!(((cljs.core.empty_QMARK_(config_key)) || (cljs.core.empty_QMARK_(config_value)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(config_map,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),config_key,new cljs.core.Keyword(null,"value","value",305978217),config_value], null));
} else {
return null;
}
});
webapp.secrets.views.secret_form_modal_update.config__GT_inputs = (function webapp$secrets$views$secret_form_modal_update$config__GT_inputs(p__31025,index,config){
var map__31026 = p__31025;
var map__31026__$1 = cljs.core.__destructure_map(map__31026);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"value","value",305978217));
var key_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(key);
var value_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(value);
var save = (function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(config,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,k], null),v);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31023_SHARP_){
return cljs.core.reset_BANG_(key_val,p1__31023_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(key_val));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(key_val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31024_SHARP_){
return cljs.core.reset_BANG_(value_val,p1__31024_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return save(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val));
}),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_val)], null)], null)], null);
});
});
webapp.secrets.views.secret_form_modal_update.config_inputs_for = (function webapp$secrets$views$secret_form_modal_update$config_inputs_for(config){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$secrets$views$secret_form_modal_update$config_inputs_for_$_iter__31035(s__31036){
return (new cljs.core.LazySeq(null,(function (){
var s__31036__$1 = s__31036;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31036__$1);
if(temp__5753__auto__){
var s__31036__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31036__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31036__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31038 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31037 = (0);
while(true){
if((i__31037 < size__4651__auto__)){
var index = cljs.core._nth(c__4650__auto__,i__31037);
cljs.core.chunk_append(b__31038,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.secret_form_modal_update.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)));

var G__31059 = (i__31037 + (1));
i__31037 = G__31059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31038),webapp$secrets$views$secret_form_modal_update$config_inputs_for_$_iter__31035(cljs.core.chunk_rest(s__31036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31038),null);
}
} else {
var index = cljs.core.first(s__31036__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.secret_form_modal_update.config__GT_inputs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index),index,config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(config),index)], null)),webapp$secrets$views$secret_form_modal_update$config_inputs_for_$_iter__31035(cljs.core.rest(s__31036__$2)));
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
webapp.secrets.views.secret_form_modal_update.remove_empty_keys = (function webapp$secrets$views$secret_form_modal_update$remove_empty_keys(configs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31041){
var map__31042 = p__31041;
var map__31042__$1 = cljs.core.__destructure_map(map__31042);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31042__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31042__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31045){
var map__31046 = p__31045;
var map__31046__$1 = cljs.core.__destructure_map(map__31046);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31046__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31046__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)));
});
webapp.secrets.views.secret_form_modal_update.secrets_hashmap__GT_key_value = (function webapp$secrets$views$secret_form_modal_update$secrets_hashmap__GT_key_value(configs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__31049){
var vec__31051 = p__31049;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31051,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31051,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}),configs);
});
webapp.secrets.views.secret_form_modal_update.form = (function webapp$secrets$views$secret_form_modal_update$form(current_secret_key){
var secrets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null));
var secret_path_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(current_secret_key);
var secret_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var secret_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var configs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.secrets.views.secret_form_modal_update.secrets_hashmap__GT_key_value((function (){var G__31057 = cljs.core.deref(secrets);
return (current_secret_key.cljs$core$IFn$_invoke$arity$1 ? current_secret_key.cljs$core$IFn$_invoke$arity$1(G__31057) : current_secret_key.call(null,G__31057));
})()));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Update secret",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4 col-span-2"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mb-regular","form.mb-regular",-864175662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->delete-secret","secrets->delete-secret",893904953),current_secret_key], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->update-secrets","secrets->update-secrets",-396344994),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(secret_path_name)),webapp.secrets.views.secret_form_modal_update.remove_empty_keys(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(configs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref(secret_key),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_value)], null)))])], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Give a nickname for this secret path",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"my-mysql-test",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31054_SHARP_){
return cljs.core.reset_BANG_(secret_path_name,p1__31054_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_path_name)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700"], null),"Key"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700"], null),"Value"], null),webapp.secrets.views.secret_form_modal_update.config_inputs_for(configs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31055_SHARP_){
return cljs.core.reset_BANG_(secret_key,p1__31055_SHARP_.target.value);
}),new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Insert key env",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_key)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31056_SHARP_){
return cljs.core.reset_BANG_(secret_value,p1__31056_SHARP_.target.value);
}),new cljs.core.Keyword(null,"classes","classes",2037804510),"whitespace-pre overflow-x",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Insert value env",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(secret_value)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.justify-items-end.mb-4","div.grid.grid-cols-1.justify-items-end.mb-4",-1800014608),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"+ add more",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
webapp.secrets.views.secret_form_modal_update.add_new_configs(configs,cljs.core.deref(secret_key),cljs.core.deref(secret_value));

cljs.core.reset_BANG_(secret_value,"");

return cljs.core.reset_BANG_(secret_key,"");
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"small","small",2133478704)], null))], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Update",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.secrets.views.secret_form_modal_update.js.map
