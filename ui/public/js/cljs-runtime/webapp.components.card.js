goog.provide('webapp.components.card');
/**
 * Card component is a white box for receiving entire structures.
 *   Its size is defined by its parent component.
 *   children -> the children to be rendered
 *   inner-space? -> flag to add internal padding
 *   class -> CSS classes to be passed down to card container
 */
webapp.components.card.main = (function webapp$components$card$main(p__51316){
var map__51317 = p__51316;
var map__51317__$1 = cljs.core.__destructure_map(map__51317);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inner_space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51317__$1,new cljs.core.Keyword(null,"inner-space?","inner-space?",1349450580));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51317__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(inner_space_QMARK_)?"px-regular py-small ":null),(cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," "].join(''):null),"rounded-lg border border-gray-200 overflow-auto"].join('')], null),children], null);
});

//# sourceMappingURL=webapp.components.card.js.map
