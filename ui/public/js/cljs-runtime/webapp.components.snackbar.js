goog.provide('webapp.components.snackbar');
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.snackbar !== 'undefined') && (typeof webapp.components.snackbar.level_icon !== 'undefined')){
} else {
webapp.components.snackbar.level_icon = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52204 = cljs.core.get_global_hierarchy;
return (fexpr__52204.cljs$core$IFn$_invoke$arity$0 ? fexpr__52204.cljs$core$IFn$_invoke$arity$0() : fexpr__52204.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.snackbar","level-icon"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.snackbar.level_icon.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (_){
return "/icons/icon-important-red.svg";
}));
webapp.components.snackbar.level_icon.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"success","success",1890645906),(function (_){
return "/icons/icon-check-green.svg";
}));
webapp.components.snackbar.level_icon.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"info","info",-317069002),(function (_){
return "/icons/icon-information-white.svg";
}));
webapp.components.snackbar.level_icon.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return "/icons/icon-information-white.svg";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.snackbar !== 'undefined') && (typeof webapp.components.snackbar.markup !== 'undefined')){
} else {
webapp.components.snackbar.markup = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52205 = cljs.core.get_global_hierarchy;
return (fexpr__52205.cljs$core$IFn$_invoke$arity$0 ? fexpr__52205.cljs$core$IFn$_invoke$arity$0() : fexpr__52205.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.snackbar","markup"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.snackbar.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shown","shown",-1564457683),(function (_,state){
setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-snackbar","hide-snackbar",202914448)], null));
}),(10000));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.align-center.z-20.fixed.max-w-xs.top-8.right-8.p-regular.bg-gray-800.font-light.text-gray-100.leading-5.rounded-lg.shadow-lg.animate-appear-right","div.flex.align-center.z-20.fixed.max-w-xs.top-8.right-8.p-regular.bg-gray-800.font-light.text-gray-100.leading-5.rounded-lg.shadow-lg.animate-appear-right",-1982698527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.flex-shrink-0.w-6.mr-regular","figure.flex-shrink-0.w-6.mr-regular",1747941201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),webapp.components.snackbar.level_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-shrink","div.flex-shrink",-1631845344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.flex-shrink-0.w-6.ml-regular.cursor-pointer","figure.flex-shrink-0.w-6.ml-regular.cursor-pointer",-630430967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-snackbar","hide-snackbar",202914448)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-close-white.svg"], null)], null)], null)], null);
}));
webapp.components.snackbar.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
webapp.components.snackbar.snackbar = (function webapp$components$snackbar$snackbar(){
var state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snackbar","snackbar",1792678973)], null)));
return webapp.components.snackbar.markup.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state),state);
});

//# sourceMappingURL=webapp.components.snackbar.js.map
