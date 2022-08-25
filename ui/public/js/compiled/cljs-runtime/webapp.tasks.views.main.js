goog.provide('webapp.tasks.views.main');
webapp.tasks.views.main.template_params_configuration = (function webapp$tasks$views$main$template_params_configuration(){
var template = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-template","webapp.subs/active-template",1115458839)], null));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var update_state = (function (p1__30257_SHARP_,p2__30258_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,p1__30257_SHARP_,p2__30258_SHARP_);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Run task from Template",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-500","div.text-sm.text-gray-500",1210549432),"Complete the last step to run a task from a template"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-task-from-template","create-task-from-template",1982648256),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))),cljs.core.deref(state),cljs.core.deref(target)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-xs","span.text-gray-500.text-xs",1539317662),"Fill the params below for this template"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$tasks$views$main$template_params_configuration_$_iter__30261(s__30262){
return (new cljs.core.LazySeq(null,(function (){
var s__30262__$1 = s__30262;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30262__$1);
if(temp__5753__auto__){
var s__30262__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30262__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30262__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30264 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30263 = (0);
while(true){
if((i__30263 < size__4651__auto__)){
var param = cljs.core._nth(c__4650__auto__,i__30263);
cljs.core.chunk_append(b__30264,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),param,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Define a value for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),param),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__30263,param,c__4650__auto__,size__4651__auto__,b__30264,s__30262__$2,temp__5753__auto__,template,state,target,update_state){
return (function (p1__30259_SHARP_){
return update_state(param,p1__30259_SHARP_.target.value);
});})(i__30263,param,c__4650__auto__,size__4651__auto__,b__30264,s__30262__$2,temp__5753__auto__,template,state,target,update_state))
,new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),param], null)));

var G__30270 = (i__30263 + (1));
i__30263 = G__30270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30264),webapp$tasks$views$main$template_params_configuration_$_iter__30261(cljs.core.chunk_rest(s__30262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30264),null);
}
} else {
var param = cljs.core.first(s__30262__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),param,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Define a value for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),param),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (param,s__30262__$2,temp__5753__auto__,template,state,target,update_state){
return (function (p1__30259_SHARP_){
return update_state(param,p1__30259_SHARP_.target.value);
});})(param,s__30262__$2,temp__5753__auto__,template,state,target,update_state))
,new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),param], null)),webapp$tasks$views$main$template_params_configuration_$_iter__30261(cljs.core.rest(s__30262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Target name",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-xs","span.text-gray-500.text-xs",1539317662),"Type the name of the target you want to run this task"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your-target-name",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30260_SHARP_){
return cljs.core.reset_BANG_(target,p1__30260_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(target)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.flex.gap-regular.justify-end","footer.flex.gap-regular.justify-end",-126062717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.secondary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create task",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)),new cljs.core.Keyword(null,"loading","loading",-737050189)),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null)], null)], null)], null);
});
});
webapp.tasks.views.main.templates_list = (function webapp$tasks$views$main$templates_list(){
var templates = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","templates","webapp.subs/templates",64622767)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Run task from Template",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-500","div.text-sm.text-gray-500",1210549432),"Select a template to run"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(templates))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-regular"], null),"loading..."], null):((cljs.core.empty_QMARK_(cljs.core.deref(templates)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-large text-center"], null),"You don't have any Github repository integrate."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular items-center justify-center border rounded-lg p-regular cursor-pointer hover:bg-gray-100 transition",new cljs.core.Keyword(null,"href","href",-793805698),"/settings",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-select-templates-modal","close-select-templates-modal",904414438)], null));
})], null),"Go to settings"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-lg","div.border.rounded-lg",-1561939235),(function (){var iter__4652__auto__ = (function webapp$tasks$views$main$templates_list_$_iter__30265(s__30266){
return (new cljs.core.LazySeq(null,(function (){
var s__30266__$1 = s__30266;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30266__$1);
if(temp__5753__auto__){
var s__30266__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30266__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30266__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30268 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30267 = (0);
while(true){
if((i__30267 < size__4651__auto__)){
var template = cljs.core._nth(c__4650__auto__,i__30267);
cljs.core.chunk_append(b__30268,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-pointer.px-small.py-regular.text-sm.text-gray-700.hover:text-blue-500.hover:bg-gray-50.transition.border-b","div.cursor-pointer.px-small.py-regular.text-sm.text-gray-700.hover:text-blue-500.hover:bg-gray-50.transition.border-b",-1677520994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30267,template,c__4650__auto__,size__4651__auto__,b__30268,s__30266__$2,temp__5753__auto__,templates){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-template-params-modal","open-template-params-modal",-1453083116),template,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.main.template_params_configuration], null)], null));
});})(i__30267,template,c__4650__auto__,size__4651__auto__,b__30268,s__30266__$2,temp__5753__auto__,templates))
], null),template], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),template], null)));

var G__30271 = (i__30267 + (1));
i__30267 = G__30271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30268),webapp$tasks$views$main$templates_list_$_iter__30265(cljs.core.chunk_rest(s__30266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30268),null);
}
} else {
var template = cljs.core.first(s__30266__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-pointer.px-small.py-regular.text-sm.text-gray-700.hover:text-blue-500.hover:bg-gray-50.transition.border-b","div.cursor-pointer.px-small.py-regular.text-sm.text-gray-700.hover:text-blue-500.hover:bg-gray-50.transition.border-b",-1677520994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (template,s__30266__$2,temp__5753__auto__,templates){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-template-params-modal","open-template-params-modal",-1453083116),template,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.main.template_params_configuration], null)], null));
});})(template,s__30266__$2,temp__5753__auto__,templates))
], null),template], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),template], null)),webapp$tasks$views$main$templates_list_$_iter__30265(cljs.core.rest(s__30266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(templates));
})()], null)
))], null);
});
});
webapp.tasks.views.main.new_task_from_template = (function webapp$tasks$views$main$new_task_from_template(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-templates","get-templates",759657641)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-select-templates-modal","open-select-templates-modal",-1362495342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.main.templates_list], null)], null));
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.main !== 'undefined') && (typeof webapp.tasks.views.main.tab_view !== 'undefined')){
} else {
webapp.tasks.views.main.tab_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30269 = cljs.core.get_global_hierarchy;
return (fexpr__30269.cljs$core$IFn$_invoke$arity$0 ? fexpr__30269.cljs$core$IFn$_invoke$arity$0() : fexpr__30269.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.main","tab-view"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.main.tab_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"Tasks","Tasks",-625266501),(function (){
var tasks = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","tasks","webapp.subs/tasks",-468408004)], null)));
var targets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","targets","webapp.subs/targets",1387670906)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex.mb-regular.gap-regular","header.flex.mb-regular.gap-regular",339092388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-grow","div.flex.flex-grow",1497743171),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_filters.tasks_filters,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(tasks),targets], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-self-end.flex-shrink-0","div.flex.justify-self-end.flex-shrink-0",-1134099376),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.primary,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"new-task","new-task",-939876740)], null));
}),new cljs.core.Keyword(null,"more-options","more-options",1399478268),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New task from template"], null),new cljs.core.Keyword(null,"on-click-option","on-click-option",1451659086),(function (){
return webapp.tasks.views.main.new_task_from_template();
}),new cljs.core.Keyword(null,"text","text",-1790561697),"New task"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-8.rounded-lg.border.h-tasks-list.overflow-hidden","div.grid.grid-cols-8.rounded-lg.border.h-tasks-list.overflow-hidden",-2024414648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_list.tasks_list,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(tasks)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-6.p-regular.overflow-auto","div.col-span-6.p-regular.overflow-auto",1056640953),webapp.tasks.views.item_detail.item_detail()], null)], null)], null);
}));
webapp.tasks.views.main.tab_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"Reviews","Reviews",-1307212777),(function (){
var reviews = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","reviews","webapp.subs/reviews",1221856131)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-8.rounded-lg.border.h-tasks-list.overflow-hidden","div.grid.grid-cols-8.rounded-lg.border.h-tasks-list.overflow-hidden",-2024414648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.reviews_list.reviews_list,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(reviews)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-6.p-regular.overflow-auto","div.col-span-6.p-regular.overflow-auto",1056640953),webapp.tasks.views.review_detail.review_detail()], null)], null)], null);
}));
webapp.tasks.views.main.panel = (function webapp$tasks$views$main$panel(){
var view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Tasks","Tasks",-625266501));
var manage_tab_change = (function (clicked_tab){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clicked_tab,new cljs.core.Keyword(null,"Reviews","Reviews",-1307212777))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reviews","get-reviews",1050009794)], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clicked_tab,new cljs.core.Keyword(null,"Tasks","Tasks",-625266501))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null));
} else {
}

return cljs.core.reset_BANG_(view,clicked_tab);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),manage_tab_change,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Tasks","Tasks",-625266501),new cljs.core.Keyword(null,"Reviews","Reviews",-1307212777)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.main.tab_view,cljs.core.deref(view)], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.main.js.map
