goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39348 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39349 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39349);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39350 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39351 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39351);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39350);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39348);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39353 = arguments.length;
switch (G__39353) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39354 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39357_39381 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39358_39382 = null;
var count__39359_39383 = (0);
var i__39360_39384 = (0);
while(true){
if((i__39360_39384 < count__39359_39383)){
var vec__39367_39385 = chunk__39358_39382.cljs$core$IIndexed$_nth$arity$2(null,i__39360_39384);
var container_39386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39367_39385,(0),null);
var comp_39387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39367_39385,(1),null);
reagent.dom.re_render_component(comp_39387,container_39386);


var G__39388 = seq__39357_39381;
var G__39389 = chunk__39358_39382;
var G__39390 = count__39359_39383;
var G__39391 = (i__39360_39384 + (1));
seq__39357_39381 = G__39388;
chunk__39358_39382 = G__39389;
count__39359_39383 = G__39390;
i__39360_39384 = G__39391;
continue;
} else {
var temp__5753__auto___39392 = cljs.core.seq(seq__39357_39381);
if(temp__5753__auto___39392){
var seq__39357_39393__$1 = temp__5753__auto___39392;
if(cljs.core.chunked_seq_QMARK_(seq__39357_39393__$1)){
var c__4679__auto___39394 = cljs.core.chunk_first(seq__39357_39393__$1);
var G__39395 = cljs.core.chunk_rest(seq__39357_39393__$1);
var G__39396 = c__4679__auto___39394;
var G__39397 = cljs.core.count(c__4679__auto___39394);
var G__39398 = (0);
seq__39357_39381 = G__39395;
chunk__39358_39382 = G__39396;
count__39359_39383 = G__39397;
i__39360_39384 = G__39398;
continue;
} else {
var vec__39370_39399 = cljs.core.first(seq__39357_39393__$1);
var container_39400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39370_39399,(0),null);
var comp_39401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39370_39399,(1),null);
reagent.dom.re_render_component(comp_39401,container_39400);


var G__39402 = cljs.core.next(seq__39357_39393__$1);
var G__39403 = null;
var G__39404 = (0);
var G__39405 = (0);
seq__39357_39381 = G__39402;
chunk__39358_39382 = G__39403;
count__39359_39383 = G__39404;
i__39360_39384 = G__39405;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
