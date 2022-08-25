goog.provide('webapp.components.loaders');
webapp.components.loaders.spinner_lg = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-12.h-12.rounded-full.border-8.border-t-gray-600.animate-spin","div.w-12.h-12.rounded-full.border-8.border-t-gray-600.animate-spin",-1226659526)], null);
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.loaders !== 'undefined') && (typeof webapp.components.loaders.page_loader !== 'undefined')){
} else {
webapp.components.loaders.page_loader = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31114 = cljs.core.get_global_hierarchy;
return (fexpr__31114.cljs$core$IFn$_invoke$arity$0 ? fexpr__31114.cljs$core$IFn$_invoke$arity$0() : fexpr__31114.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.loaders","page-loader"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.loaders.page_loader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
webapp.components.loaders.page_loader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (_,fadeout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.flex.items-center.place-content-center.inset-0.w-full.h-full.z-30.bg-white.transition.text-gray-200","div.fixed.flex.items-center.place-content-center.inset-0.w-full.h-full.z-30.bg-white.transition.text-gray-200",-2008569026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),fadeout], null),webapp.components.loaders.spinner_lg], null);
}));
webapp.components.loaders.page_loader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"closing","closing",-1862893890),(function (_,___$1){
setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destroy-page-loader","destroy-page-loader",-740445417)], null));
}),(200));

return webapp.components.loaders.page_loader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),"opacity-0");
}));
webapp.components.loaders.over_page_loader = (function webapp$components$loaders$over_page_loader(){
var page_loader_status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","page-loader","webapp.subs/page-loader",-1674517817)], null)));
return webapp.components.loaders.page_loader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page_loader_status),"");
});
webapp.components.loaders.simple_loader = (function webapp$components$loaders$simple_loader(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded-full border-4 border-t-gray-400"," w-6 h-6 animate-spin"].join('')], null)], null);
});

//# sourceMappingURL=webapp.components.loaders.js.map
