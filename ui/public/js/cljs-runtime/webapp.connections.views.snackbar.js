goog.provide('webapp.connections.views.snackbar');
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.snackbar !== 'undefined') && (typeof webapp.connections.views.snackbar.main !== 'undefined')){
} else {
webapp.connections.views.snackbar.main = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51073 = cljs.core.get_global_hierarchy;
return (fexpr__51073.cljs$core$IFn$_invoke$arity$0 ? fexpr__51073.cljs$core$IFn$_invoke$arity$0() : fexpr__51073.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.views.snackbar","main"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"success","success",1890645906),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Target successfully created!"], null)], null));
}));
webapp.connections.views.snackbar.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"failure","failure",720415879),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Target not created! Please try again in a few minutes."], null)], null));
}));

//# sourceMappingURL=webapp.connections.views.snackbar.js.map
