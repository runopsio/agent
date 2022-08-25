goog.provide('webapp.components.dialog');
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.dialog !== 'undefined') && (typeof webapp.components.dialog.markup !== 'undefined')){
} else {
webapp.components.dialog.markup = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32081 = cljs.core.get_global_hierarchy;
return (fexpr__32081.cljs$core$IFn$_invoke$arity$0 ? fexpr__32081.cljs$core$IFn$_invoke$arity$0() : fexpr__32081.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.dialog","markup"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.dialog.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (_,state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.z-30.inset-0.overflow-y-auto","div.fixed.z-30.inset-0.overflow-y-auto",1606498265),new cljs.core.PersistentArrayMap(null, 1, ["aria-modal",true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.w-full.h-full.inset-0.bg-gray-100.bg-opacity-90.transition","div.fixed.w-full.h-full.inset-0.bg-gray-100.bg-opacity-90.transition",594918901),new cljs.core.PersistentArrayMap(null, 2, ["aria-hidden","true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-dialog","close-dialog",1508318122)], null));
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.max-w-lg.w-full","div.relative.max-w-lg.w-full",1862241346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white border-2 rounded\n               mx-auto top-1/3 p-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block.font-bold.mb-regular.text-center","span.block.font-bold.mb-regular.text-center",-668001009),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.grid.grid-cols-2.gap-regular","footer.grid.grid-cols-2.gap-regular",-1432954008),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-dialog","close-dialog",1508318122)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Confirm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var fexpr__32084_32085 = new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(state);
(fexpr__32084_32085.cljs$core$IFn$_invoke$arity$0 ? fexpr__32084_32085.cljs$core$IFn$_invoke$arity$0() : fexpr__32084_32085.call(null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-dialog","close-dialog",1508318122)], null));
})], null))], null)], null)], null);
}));
webapp.components.dialog.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
webapp.components.dialog.dialog = (function webapp$components$dialog$dialog(){
var dialog_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135)], null)));
return webapp.components.dialog.markup.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(dialog_state),dialog_state);
});

//# sourceMappingURL=webapp.components.dialog.js.map
