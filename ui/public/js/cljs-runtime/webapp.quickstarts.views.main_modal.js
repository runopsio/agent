goog.provide('webapp.quickstarts.views.main_modal');
webapp.quickstarts.views.main_modal.checkbox = (function webapp$quickstarts$views$main_modal$checkbox(p__30352){
var map__30353 = p__30352;
var map__30353__$1 = cljs.core.__destructure_map(map__30353);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex items-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center h-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),["checkbox-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["checkbox-name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"aria-describedby",description,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
localStorage.setItem("quickstart-modal-disabled",cljs.core.not(cljs.core.deref(checked)));

return cljs.core.reset_BANG_(checked,cljs.core.not(cljs.core.deref(checked)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-3 text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),description,new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),text], null)], null)], null);
});
webapp.quickstarts.views.main_modal.checkbox_disabled_quickstart = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
webapp.quickstarts.views.main_modal.manage__GT_main_area = (function webapp$quickstarts$views$main_modal$manage__GT_main_area(p__30365){
var map__30366 = p__30365;
var map__30366__$1 = cljs.core.__destructure_map(map__30366);
var current_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"current-step","current-step",-2023410137));
var config_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"config-atom","config-atom",2036561794));
var fx_change_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886));
var connection_name_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"connection-name-atom","connection-name-atom",1382945459));
var connection_type_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"connection-type-atom","connection-type-atom",1224958263));
var fx_create_connection_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"fx-create-connection-request","fx-create-connection-request",1450162590));
var fx_get_current_step_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420));
var G__30368 = current_step;
var G__30368__$1 = (((G__30368 instanceof cljs.core.Keyword))?G__30368.fqn:null);
switch (G__30368__$1) {
case "agent":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.environment_step_modal.main,webapp.quickstarts.views.configration_inputs.main(config_atom),fx_create_connection_request,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target-name","target-name",-1836829889),connection_name_atom,new cljs.core.Keyword(null,"target-type","target-type",-1795727181),connection_type_atom,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),fx_get_current_step_infos], null)], null);

break;
case "task":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.task_step_modal.main,fx_change_step,cljs.core.deref(connection_name_atom)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30368__$1)].join('')));

}
});
webapp.quickstarts.views.main_modal.container = (function webapp$quickstarts$views$main_modal$container(){
var steppers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"current",new cljs.core.Keyword(null,"title","title",636505583),"Connection's configuration",new cljs.core.Keyword(null,"text","text",-1790561697),"It will create your connection."], null),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"upcoming",new cljs.core.Keyword(null,"title","title",636505583),"Task running",new cljs.core.Keyword(null,"text","text",-1790561697),"It will test your connection running a task of yours."], null)], null));
var current_step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"agent","agent",-766455027));
var connection_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var connection_img = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var configs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webapp.quickstarts.utilities.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))));
var get_current_step_infos = (function (){
var G__30374 = cljs.core.deref(steppers);
var fexpr__30373 = cljs.core.deref(current_step);
return (fexpr__30373.cljs$core$IFn$_invoke$arity$1 ? fexpr__30373.cljs$core$IFn$_invoke$arity$1(G__30374) : fexpr__30373.call(null,G__30374));
});
var get_index = (function (){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.deref(steppers)),cljs.core.deref(current_step));
});
var get_step = (function (direction){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(cljs.core.deref(steppers)),(function (){var G__30376 = direction;
switch (G__30376) {
case "next":
return (get_index() + (1));

break;
case "back":
return (get_index() - (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30376)].join('')));

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
var create_connection_request = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets",new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(connection_name),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(connection_type),new cljs.core.Keyword(null,"groups","groups",-136896102),null,new cljs.core.Keyword(null,"secret_provider","secret_provider",1310227596),"runops",new cljs.core.Keyword(null,"tags","tags",1771418977),"test",new cljs.core.Keyword(null,"config","config",994861415),webapp.quickstarts.utilities.config__GT_json_stringify(cljs.core.deref(configs))], null)], 0)),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (_){
return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"connection-failure","connection-failure",-893938674));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
change_step(new cljs.core.Keyword(null,"agent","agent",-766455027),"complete");

change_step(new cljs.core.Keyword(null,"task","task",-1476607993),"current");

return webapp.quickstarts.views.snackbar.main.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"verified","verified",1807036606));
})], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 items-center mb-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Quickstarts"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-6"], null),((clojure.string.blank_QMARK_(cljs.core.deref(connection_type)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-large"], null),"What would you like to connect?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"list",new cljs.core.Keyword(null,"class","class",-2030961996),"grid gap-6 grid-cols-3 xl:grid-cols-4"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30369_SHARP_){
return webapp.quickstarts.views.connection_card.main(p1__30369_SHARP_,connection_type,connection_img,configs);
}),webapp.connections.constants.connections_types_list)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.checkbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel-quickstart-modal",new cljs.core.Keyword(null,"description","description",-1428560544),"checkbox for disabled quickstart modal",new cljs.core.Keyword(null,"checked","checked",-50955819),webapp.quickstarts.views.main_modal.checkbox_disabled_quickstart,new cljs.core.Keyword(null,"text","text",-1790561697),"I do not want to see this quickstart anymore."], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-4 px-8 mb-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(connection_type,"");

return cljs.core.reset_BANG_(connection_img,"");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-left-blue.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(connection_img),new cljs.core.Keyword(null,"alt","alt",-3214426),["logo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection_type))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl px-8 grid grid-cols-12 gap-16"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-4 flex flex-col justify-between my-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sticky top-6 divide-y divide-gray-300"], null),webapp.components.stepper.main(cljs.core.deref(steppers))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.checkbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel-quickstart-modal",new cljs.core.Keyword(null,"description","description",-1428560544),"checkbox for disabled quickstart modal",new cljs.core.Keyword(null,"checked","checked",-50955819),webapp.quickstarts.views.main_modal.checkbox_disabled_quickstart,new cljs.core.Keyword(null,"text","text",-1790561697),"I do not want to see this quickstart anymore."], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.manage__GT_main_area,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"current-step","current-step",-2023410137),cljs.core.deref(current_step),new cljs.core.Keyword(null,"config-atom","config-atom",2036561794),configs,new cljs.core.Keyword(null,"fx-change-step","fx-change-step",-312327886),change_step,new cljs.core.Keyword(null,"connection-name-atom","connection-name-atom",1382945459),connection_name,new cljs.core.Keyword(null,"connection-type-atom","connection-type-atom",1224958263),connection_type,new cljs.core.Keyword(null,"fx-create-connection-request","fx-create-connection-request",1450162590),create_connection_request,new cljs.core.Keyword(null,"fx-get-current-step-infos","fx-get-current-step-infos",154763420),get_current_step_infos], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-x-x-large"], null),(cljs.core.truth_(get_step("back"))?webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"outlined","outlined",-69626634),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_back_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null)),(cljs.core.truth_((function (){var and__4251__auto__ = get_step("next");
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete");
} else {
return and__4251__auto__;
}
})())?webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(get_current_step_infos()),"complete"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return go_next_step();
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null)], null))], null)], null)], null)], null))], null)], null);
});
});
webapp.quickstarts.views.main_modal.close_modal_dialog = (function webapp$quickstarts$views$main_modal$close_modal_dialog(){
var dialog_text = "Are you sure you want to discard this new connection?";
var on_success_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});
var open_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),dialog_text,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_dialog], null)], null));
});
return open_dialog();
});
webapp.quickstarts.views.main_modal.main = (function webapp$quickstarts$views$main_modal$main(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","quickstart-tasks","webapp.subs/quickstart-tasks",-677319774)], null));
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quickstart-tasks->get-tasks","quickstart-tasks->get-tasks",-1063668726)], null));

return (function (){
var user_groups = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user));
var admin_QMARK_ = cljs.core.some((function (p1__30380_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",p1__30380_SHARP_);
}),user_groups);
var results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks));
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tasks));
var quickstart_modal_disabled = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",localStorage.getItem("quickstart-modal-disabled")))?true:false);
if(quickstart_modal_disabled){
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
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.container], null),new cljs.core.Keyword(null,"large","large",-196820544),webapp.quickstarts.views.main_modal.close_modal_dialog], null));
} else {
return null;
}
}
});
});

//# sourceMappingURL=webapp.quickstarts.views.main_modal.js.map
