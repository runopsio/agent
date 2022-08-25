goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__62511__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62512__i = 0, G__62512__a = new Array(arguments.length -  0);
while (G__62512__i < G__62512__a.length) {G__62512__a[G__62512__i] = arguments[G__62512__i + 0]; ++G__62512__i;}
  args = new cljs.core.IndexedSeq(G__62512__a,0,null);
} 
return G__62511__delegate.call(this,args);};
G__62511.cljs$lang$maxFixedArity = 0;
G__62511.cljs$lang$applyTo = (function (arglist__62513){
var args = cljs.core.seq(arglist__62513);
return G__62511__delegate(args);
});
G__62511.cljs$core$IFn$_invoke$arity$variadic = G__62511__delegate;
return G__62511;
})()
);

(o.error = (function() { 
var G__62514__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62515__i = 0, G__62515__a = new Array(arguments.length -  0);
while (G__62515__i < G__62515__a.length) {G__62515__a[G__62515__i] = arguments[G__62515__i + 0]; ++G__62515__i;}
  args = new cljs.core.IndexedSeq(G__62515__a,0,null);
} 
return G__62514__delegate.call(this,args);};
G__62514.cljs$lang$maxFixedArity = 0;
G__62514.cljs$lang$applyTo = (function (arglist__62516){
var args = cljs.core.seq(arglist__62516);
return G__62514__delegate(args);
});
G__62514.cljs$core$IFn$_invoke$arity$variadic = G__62514__delegate;
return G__62514;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
