goog.provide('webapp.components.logs_container');
var module$node_modules$clipboard$dist$clipboard=shadow.js.require("module$node_modules$clipboard$dist$clipboard", {});
webapp.components.logs_container.copy_clipboard = (function webapp$components$logs_container$copy_clipboard(data_clipboard_target){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.copy-to-clipboard.absolute.w-6.h-6.rounded-lg.p-x-small.top-2.right-2.bg-gray-200.cursor-pointer.shadow.box-border.opacity-0.group-hover:opacity-100.transition.z-20","div.copy-to-clipboard.absolute.w-6.h-6.rounded-lg.p-x-small.top-2.right-2.bg-gray-200.cursor-pointer.shadow.box-border.opacity-0.group-hover:opacity-100.transition.z-20",-1303793959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-clipboard-target","data-clipboard-target",810388567),data_clipboard_target], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-copy.svg"], null)], null)], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.logs_container !== 'undefined') && (typeof webapp.components.logs_container.logs_area !== 'undefined')){
} else {
webapp.components.logs_container.logs_area = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31261 = cljs.core.get_global_hierarchy;
return (fexpr__31261.cljs$core$IFn$_invoke$arity$0 ? fexpr__31261.cljs$core$IFn$_invoke$arity$0() : fexpr__31261.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.logs-container","logs-area"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.logs_container.logs_area.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"success","success",1890645906),(function (_,logs){
return logs;
}));
webapp.components.logs_container.logs_area.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (_,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-small","div.flex.gap-small",-48970151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"loading"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-4","figure.w-4",-291729794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.animate-spin","img.animate-spin",-1697433641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle.svg"], null)], null)], null)], null);
}));
webapp.components.logs_container.logs_area.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"failure","failure",720415879),(function (_,___$1){
return "There was an error to get the logs for this task";
}));
webapp.components.logs_container.logs_area.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return "No logs to show";
}));
/**
 * config is a map with the following fields:
 *   :status -> possible values are :success :loading :failure. Anything different will be default to an generic error message
 *   :logs -> the actual string with the logs
 */
webapp.components.logs_container.container = (function webapp$components$logs_container$container(config,title){
var clipboard = (new module$node_modules$clipboard$dist$clipboard(".copy-to-clipboard"));
clipboard.on("success",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Text copied to clipboard"], null)], null));
}));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-5/6"], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative rounded-lg bg-gray-100 h-full"," font-mono p-regular text-xs mb-regular"," whitespace-pre group"].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"not-clipboard?","not-clipboard?",545290213).cljs$core$IFn$_invoke$arity$1(config))?null:webapp.components.logs_container.copy_clipboard("#task-logs")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"task-logs",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"classe","classe",-1645416743).cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(config):null))," pb-regular overflow-auto whitespace-pre h-full",(cljs.core.truth_(new cljs.core.Keyword(null,"fixed-height?","fixed-height?",-67081849).cljs$core$IFn$_invoke$arity$1(config))?null:" max-h-80")].join('')], null),webapp.components.logs_container.logs_area.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(config))], null)], null)], null);
});

//# sourceMappingURL=webapp.components.logs_container.js.map
