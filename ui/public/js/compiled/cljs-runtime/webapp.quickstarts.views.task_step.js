goog.provide('webapp.quickstarts.views.task_step');
webapp.quickstarts.views.task_step.create_task = (function webapp$quickstarts$views$task_step$create_task(){
var new_task = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","new-task","webapp.subs/new-task",1755247024)], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-new-task","create-new-task",494722089),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(new_task),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(new_task),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_task)], null)], null));
});
webapp.quickstarts.views.task_step.submit_task_on_keydown = (function webapp$quickstarts$views$task_step$submit_task_on_keydown(e){
var meta_key = e.metaKey;
var key = e.keyCode;
if(cljs.core.truth_((function (){var and__4251__auto__ = meta_key;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,(13));
} else {
return and__4251__auto__;
}
})())){
return webapp.quickstarts.views.task_step.create_task();
} else {
return null;
}
});
webapp.quickstarts.views.task_step.main = (function webapp$quickstarts$views$task_step$main(change_step,target_name){
var new_task = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","new-task","webapp.subs/new-task",1755247024)], null)));
var textarea_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"classes","classes",2037804510)],["Insert your script here",true,"script_area",(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(new_task);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),(function (p1__31654_SHARP_){
return webapp.quickstarts.views.task_step.submit_task_on_keydown(p1__31654_SHARP_);
}),(10),"script_area",(function (p1__31653_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-task-script","set-new-task-script",1957710486),p1__31653_SHARP_.target.value], null));
}),"font-mono"]);
var target_select_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Target",new cljs.core.Keyword(null,"selected","selected",574897764),target_name,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),target_name,new cljs.core.Keyword(null,"text","text",-1790561697),target_name], null)], null)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new_task),new cljs.core.Keyword(null,"success","success",1890645906))){
(change_step.cljs$core$IFn$_invoke$arity$2 ? change_step.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"task","task",-1476607993),"complete") : change_step.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),"complete"));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-task-target","set-new-task-target",-2060588066),target_name], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-end gap-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular place-self-center flex-grow"], null),webapp.components.headings.h2("New task",cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between items-center gap-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow justify-end"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),webapp.components.forms.select(target_select_config)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink"], null),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Create","Create",-1958351633),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(new_task),"")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(new_task),"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new_task),new cljs.core.Keyword(null,"loading","loading",-737050189)))))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.quickstarts.views.task_step.create_task();
})], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"script_form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.textarea,textarea_config], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.main,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"logs","logs",1068148008),new cljs.core.Keyword(null,"task_logs","task_logs",-1918365592).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(new_task)),new cljs.core.Keyword(null,"log-status","log-status",1744062288),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new_task),new cljs.core.Keyword(null,"task-status","task-status",1198461430),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(new_task)),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(new_task))], null)], null)], null);
});

//# sourceMappingURL=webapp.quickstarts.views.task_step.js.map
