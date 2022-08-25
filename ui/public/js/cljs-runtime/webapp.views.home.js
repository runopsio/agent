goog.provide('webapp.views.home');
if((typeof webapp !== 'undefined') && (typeof webapp.views !== 'undefined') && (typeof webapp.views.home !== 'undefined') && (typeof webapp.views.home.initial_view !== 'undefined')){
} else {
webapp.views.home.initial_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30225 = cljs.core.get_global_hierarchy;
return (fexpr__30225.cljs$core$IFn$_invoke$arity$0 ? fexpr__30225.cljs$core$IFn$_invoke$arity$0() : fexpr__30225.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.views.home","initial-view"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.views.home.initial_view.cljs$core$IMultiFn$_add_method$arity$3(null,"portal-web",(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"connections","connections",-2064090887)], null));
}));
webapp.views.home.initial_view.cljs$core$IMultiFn$_add_method$arity$3(null,"agent-wizard",(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"secrets","secrets",587690824)], null));
}));
webapp.views.home.home_panel = (function webapp$views$home$home_panel(){
webapp.views.home.initial_view.cljs$core$IFn$_invoke$arity$1(webapp.config.client);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});

//# sourceMappingURL=webapp.views.home.js.map
