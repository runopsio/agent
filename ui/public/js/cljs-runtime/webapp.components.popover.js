goog.provide('webapp.components.popover');
/**
 * popover to be aligned on the right of the parent component.
 *   Parent component must have position: relative CSS property set.
 */
webapp.components.popover.right = (function webapp$components$popover$right(p__49585){
var map__49586 = p__49585;
var map__49586__$1 = cljs.core.__destructure_map(map__49586);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var on_click_outside = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49586__$1,new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,true)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-full w-full z-20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-0.bg-gray-50.w-full.h-full.z-10.opacity-30","div.fixed.inset-0.bg-gray-50.w-full.h-full.z-10.opacity-30",813308324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_outside], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.z-10.min-w-36.bg-white.border.shadow.top-full.mt-2.-right-3.rounded-lg","div.absolute.z-10.min-w-36.bg-white.border.shadow.top-full.mt-2.-right-3.rounded-lg",-1624594173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#popover-container","div#popover-container",1607432544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-max"], null),component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.w-3.h-3.bg-white.border-t.border-l.rounded.transform.rotate-45.right-4","div.absolute.w-3.h-3.bg-white.border-t.border-l.rounded.transform.rotate-45.right-4",1144021626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-top-1.5"], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * popover to be aligned on the right of the parent component.
 *   Parent component must have position: relative CSS property set.
 */
webapp.components.popover.left = (function webapp$components$popover$left(p__49588){
var map__49589 = p__49588;
var map__49589__$1 = cljs.core.__destructure_map(map__49589);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49589__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49589__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var on_click_outside = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49589__$1,new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,true)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-full w-full z-20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-0.bg-gray-50.w-full.h-full.z-10.opacity-30","div.fixed.inset-0.bg-gray-50.w-full.h-full.z-10.opacity-30",813308324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_outside], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.z-10.min-w-36.bg-white.border.shadow.top-full.mt-2.-left-3.rounded-lg","div.absolute.z-10.min-w-36.bg-white.border.shadow.top-full.mt-2.-left-3.rounded-lg",-304238209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#popover-container","div#popover-container",1607432544),component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.w-3.h-3.bg-white.border-t.border-l.rounded.transform.rotate-45.left-4","div.absolute.w-3.h-3.bg-white.border-t.border-l.rounded.transform.rotate-45.left-4",1976394851),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-top-1.5"], null)], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=webapp.components.popover.js.map
