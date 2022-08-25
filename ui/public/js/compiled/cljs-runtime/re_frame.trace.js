goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__63496){
var map__63497 = p__63496;
var map__63497__$1 = cljs.core.__destructure_map(map__63497);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63497__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63497__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63497__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63497__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__63498_63527 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__63499_63528 = null;
var count__63500_63529 = (0);
var i__63501_63530 = (0);
while(true){
if((i__63501_63530 < count__63500_63529)){
var vec__63512_63531 = chunk__63499_63528.cljs$core$IIndexed$_nth$arity$2(null,i__63501_63530);
var k_63532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63512_63531,(0),null);
var cb_63533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63512_63531,(1),null);
try{var G__63516_63534 = cljs.core.deref(re_frame.trace.traces);
(cb_63533.cljs$core$IFn$_invoke$arity$1 ? cb_63533.cljs$core$IFn$_invoke$arity$1(G__63516_63534) : cb_63533.call(null,G__63516_63534));
}catch (e63515){var e_63535 = e63515;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_63532,"while storing",cljs.core.deref(re_frame.trace.traces),e_63535], 0));
}

var G__63536 = seq__63498_63527;
var G__63537 = chunk__63499_63528;
var G__63538 = count__63500_63529;
var G__63539 = (i__63501_63530 + (1));
seq__63498_63527 = G__63536;
chunk__63499_63528 = G__63537;
count__63500_63529 = G__63538;
i__63501_63530 = G__63539;
continue;
} else {
var temp__5753__auto___63540 = cljs.core.seq(seq__63498_63527);
if(temp__5753__auto___63540){
var seq__63498_63541__$1 = temp__5753__auto___63540;
if(cljs.core.chunked_seq_QMARK_(seq__63498_63541__$1)){
var c__4679__auto___63542 = cljs.core.chunk_first(seq__63498_63541__$1);
var G__63543 = cljs.core.chunk_rest(seq__63498_63541__$1);
var G__63544 = c__4679__auto___63542;
var G__63545 = cljs.core.count(c__4679__auto___63542);
var G__63546 = (0);
seq__63498_63527 = G__63543;
chunk__63499_63528 = G__63544;
count__63500_63529 = G__63545;
i__63501_63530 = G__63546;
continue;
} else {
var vec__63517_63547 = cljs.core.first(seq__63498_63541__$1);
var k_63548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63517_63547,(0),null);
var cb_63549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63517_63547,(1),null);
try{var G__63521_63550 = cljs.core.deref(re_frame.trace.traces);
(cb_63549.cljs$core$IFn$_invoke$arity$1 ? cb_63549.cljs$core$IFn$_invoke$arity$1(G__63521_63550) : cb_63549.call(null,G__63521_63550));
}catch (e63520){var e_63551 = e63520;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_63548,"while storing",cljs.core.deref(re_frame.trace.traces),e_63551], 0));
}

var G__63552 = cljs.core.next(seq__63498_63541__$1);
var G__63553 = null;
var G__63554 = (0);
var G__63555 = (0);
seq__63498_63527 = G__63552;
chunk__63499_63528 = G__63553;
count__63500_63529 = G__63554;
i__63501_63530 = G__63555;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
