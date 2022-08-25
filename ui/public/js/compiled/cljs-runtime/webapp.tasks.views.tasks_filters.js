goog.provide('webapp.tasks.views.tasks_filters');
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.tasks_filters !== 'undefined') && (typeof webapp.tasks.views.tasks_filters.status_options !== 'undefined')){
} else {
webapp.tasks.views.tasks_filters.status_options = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"text","text",-1790561697),"All"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"created",new cljs.core.Keyword(null,"text","text",-1790561697),"created"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"pending-review",new cljs.core.Keyword(null,"text","text",-1790561697),"pending-review"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"approved",new cljs.core.Keyword(null,"text","text",-1790561697),"approved"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rejected",new cljs.core.Keyword(null,"text","text",-1790561697),"rejected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ready",new cljs.core.Keyword(null,"text","text",-1790561697),"ready"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"running",new cljs.core.Keyword(null,"text","text",-1790561697),"running"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"success",new cljs.core.Keyword(null,"text","text",-1790561697),"success"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"failure",new cljs.core.Keyword(null,"text","text",-1790561697),"failure"], null)], null);
}
webapp.tasks.views.tasks_filters.form = (function webapp$tasks$views$tasks_filters$form(filters){
var user_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"user-id");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var target_form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"target");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var target_form_filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"target");
var user_id_filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,"user-id");
var all_targets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","all-targets","webapp.subs/all-targets",1519043201)], null));
return (function (filters__$1){
var combobox_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31037_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31037_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31037_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31037_SHARP_)),")"].join('')], null));
}),cljs.core.deref(all_targets));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm:flex-row.gap-regular.items-center.p-regular","div.flex.flex-col.sm:flex-row.gap-regular.items-center.p-regular",-747538681),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-regular.flex-grow","div.flex.gap-regular.flex-grow",195833393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full sm:w-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"User id",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"123",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31041_SHARP_){
return cljs.core.reset_BANG_(user_id,p1__31041_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),(function (p1__31042_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31042_SHARP_.keyCode,(13))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),"user-id",p1__31042_SHARP_.target.value], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(user_id),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),user_id_filters], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),combobox_options,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(target_form),new cljs.core.Keyword(null,"label","label",1718410804),"Target",new cljs.core.Keyword(null,"default-value","default-value",232220170),"Select a target",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a target",new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),"min-w-64",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31043_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),"target",p1__31043_SHARP_], null));
}),new cljs.core.Keyword(null,"name","name",1843675177),"select-target"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-regular.flex-grow.items-stretch","div.flex.gap-regular.flex-grow.items-stretch",-419280116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full sm:w-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Task type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31044_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),"type",p1__31044_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters__$1,"type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"text","text",-1790561697),"All"], null)], null),webapp.targets.constants.targets_types_list))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Status",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31045_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),"status",p1__31045_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters__$1,"status");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),webapp.tasks.views.tasks_filters.status_options], null)], null)], null)], null);
});
});
webapp.tasks.views.tasks_filters.filter_badges = (function webapp$tasks$views$tasks_filters$filter_badges(filters){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-small","div.flex.items-center.gap-small",-709592445),(function (){var iter__4652__auto__ = (function webapp$tasks$views$tasks_filters$filter_badges_$_iter__31049(s__31050){
return (new cljs.core.LazySeq(null,(function (){
var s__31050__$1 = s__31050;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31050__$1);
if(temp__5753__auto__){
var s__31050__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31050__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31050__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31052 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31051 = (0);
while(true){
if((i__31051 < size__4651__auto__)){
var vec__31055 = cljs.core._nth(c__4650__auto__,i__31051);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31055,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31055,(1),null);
cljs.core.chunk_append(b__31052,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.small,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),": "].join('')], null),value], null),((function (i__31051,vec__31055,key,value,c__4650__auto__,size__4651__auto__,b__31052,s__31050__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),key,""], null));
});})(i__31051,vec__31055,key,value,c__4650__auto__,size__4651__auto__,b__31052,s__31050__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null)));

var G__31084 = (i__31051 + (1));
i__31051 = G__31084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31052),webapp$tasks$views$tasks_filters$filter_badges_$_iter__31049(cljs.core.chunk_rest(s__31050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31052),null);
}
} else {
var vec__31058 = cljs.core.first(s__31050__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.small,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),": "].join('')], null),value], null),((function (vec__31058,key,value,s__31050__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tasks","filter-tasks",255568388),key,""], null));
});})(vec__31058,key,value,s__31050__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null)),webapp$tasks$views$tasks_filters$filter_badges_$_iter__31049(cljs.core.rest(s__31050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(filters);
})()], null);
});
webapp.tasks.views.tasks_filters.tasks_filters = (function webapp$tasks$views$tasks_filters$tasks_filters(_){
var popover_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-all-targets","get-all-targets",294381516)], null));
return (function (filters){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.relative.flex.gap-regular","div.w-full.relative.flex.gap-regular",1612904263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.secondary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.justify-center","span.flex.items-center.justify-center",1844163715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"Filters","Filters",714573883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.w-5","img.w-5",-1131508518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-cheveron-down.svg"], null)], null)], null),new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(popover_open,cljs.core.not(cljs.core.deref(popover_open)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_filters.filter_badges,filters], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.popover.left,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(popover_open),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_filters.form,filters], null),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.reset_BANG_(popover_open,false);
})], null)], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.tasks_filters.js.map
