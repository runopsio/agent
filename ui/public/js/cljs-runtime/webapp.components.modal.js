goog.provide('webapp.components.modal');
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.modal !== 'undefined') && (typeof webapp.components.modal.markup !== 'undefined')){
} else {
webapp.components.modal.markup = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52160 = cljs.core.get_global_hierarchy;
return (fexpr__52160.cljs$core$IFn$_invoke$arity$0 ? fexpr__52160.cljs$core$IFn$_invoke$arity$0() : fexpr__52160.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.modal","markup"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.modal.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (_,p__52161){
var map__52162 = p__52161;
var map__52162__$1 = cljs.core.__destructure_map(map__52162);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var on_click_out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341));
var modal_on_click_out = (((on_click_out == null))?(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
}):(function (){
return (on_click_out.cljs$core$IFn$_invoke$arity$0 ? on_click_out.cljs$core$IFn$_invoke$arity$0() : on_click_out.call(null));
}));
var modal_size = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,new cljs.core.Keyword(null,"large","large",-196820544)))?"w-2/3 max-w-full":"max-w-xl w-full");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.z-20.inset-0.overflow-y-auto","div.fixed.z-20.inset-0.overflow-y-auto",1534656577),new cljs.core.PersistentArrayMap(null, 1, ["aria-modal",true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.w-full.h-full.inset-0.bg-gray-100.bg-opacity-90.transition","div.fixed.w-full.h-full.inset-0.bg-gray-100.bg-opacity-90.transition",594918901),new cljs.core.PersistentArrayMap(null, 2, ["aria-hidden","true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),modal_on_click_out], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.mb-large.m-auto","div.relative.mb-large.m-auto",1375843168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-white border-2 rounded","mx-auto mt-large p-regular overflow-auto ",modal_size].join('')], null),component], null)], null);
}));
webapp.components.modal.markup.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
webapp.components.modal.modal = (function webapp$components$modal$modal(){
var modal_status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.modal.markup,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(modal_status),modal_status], null);
});

//# sourceMappingURL=webapp.components.modal.js.map
