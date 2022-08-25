goog.provide('webapp.quickstarts.views.snackbar');
if((typeof webapp !== 'undefined') && (typeof webapp.quickstarts !== 'undefined') && (typeof webapp.quickstarts.views !== 'undefined') && (typeof webapp.quickstarts.views.snackbar !== 'undefined') && (typeof webapp.quickstarts.views.snackbar.main !== 'undefined')){
} else {
webapp.quickstarts.views.snackbar.main = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30711 = cljs.core.get_global_hierarchy;
return (fexpr__30711.cljs$core$IFn$_invoke$arity$0 ? fexpr__30711.cljs$core$IFn$_invoke$arity$0() : fexpr__30711.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.quickstarts.views.snackbar","main"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.quickstarts.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"verified","verified",1807036606),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent verified and target successfully created!"], null)], null));
}));
webapp.quickstarts.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-up","not-up",-1655597142),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent is not working! Please verify your configurations."], null)], null));
}));
webapp.quickstarts.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-exist","not-exist",-1832922632),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent not found! Please verify your configurations."], null)], null));
}));
webapp.quickstarts.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"agent-failure","agent-failure",891834568),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Agent not verified! Please try again in a few minutes."], null)], null));
}));
webapp.quickstarts.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"target-failure","target-failure",-1643082723),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Target not created! Please try again in a few minutes."], null)], null));
}));

//# sourceMappingURL=webapp.quickstarts.views.snackbar.js.map
