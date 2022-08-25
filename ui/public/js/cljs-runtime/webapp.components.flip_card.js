goog.provide('webapp.components.flip_card');
/**
 * This component is a flip card animated. When your mouse hover on the card it active a flip animation to see what is on its back
 * 
 * parameters:
 * HashMap: {
 *   :comp-front (component reagent) -> it's what will show up in the front of the card;
 *   :comp-back (component reagent) -> it's what will show up in the back of the card;
 *   :on-click (function) -> execute the function in the on click action;
 * }
 */
webapp.components.flip_card.main = (function webapp$components$flip_card$main(p__51070){
var map__51071 = p__51070;
var map__51071__$1 = cljs.core.__destructure_map(map__51071);
var comp_front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"comp-front","comp-front",-689769835));
var comp_back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"comp-back","comp-back",1974529789));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1 cursor-pointer w-full h-28 bg-transparent group",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"perspective","perspective",1459886798),"1000px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative w-full h-full text-center transform duration-500 rounded-lg border shadow-0 hover:shadow group-hover:rotate-y-180",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center align-center justify-center p-6 space-x-6 absolute w-full h-full backface-visibility-hidden"], null),comp_front], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center align-center justify-center p-6 space-x-6 bg-white absolute w-full h-full transform rotate-y-180 backface-visibility-hidden"], null),comp_back], null)], null)], null);
});

//# sourceMappingURL=webapp.components.flip_card.js.map
