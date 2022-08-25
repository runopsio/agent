goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__60856 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__60858 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__60858);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___61025 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___61025)){
var new_db_61027 = temp__5753__auto___61025;
var fexpr__60866_61028 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__60866_61028.cljs$core$IFn$_invoke$arity$1 ? fexpr__60866_61028.cljs$core$IFn$_invoke$arity$1(new_db_61027) : fexpr__60866_61028.call(null,new_db_61027));
} else {
}

var seq__60870 = cljs.core.seq(effects_without_db);
var chunk__60871 = null;
var count__60872 = (0);
var i__60873 = (0);
while(true){
if((i__60873 < count__60872)){
var vec__60892 = chunk__60871.cljs$core$IIndexed$_nth$arity$2(null,i__60873);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60892,(1),null);
var temp__5751__auto___61029 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61029)){
var effect_fn_61030 = temp__5751__auto___61029;
(effect_fn_61030.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61030.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61030.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61031 = seq__60870;
var G__61032 = chunk__60871;
var G__61033 = count__60872;
var G__61034 = (i__60873 + (1));
seq__60870 = G__61031;
chunk__60871 = G__61032;
count__60872 = G__61033;
i__60873 = G__61034;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60870);
if(temp__5753__auto__){
var seq__60870__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60870__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60870__$1);
var G__61035 = cljs.core.chunk_rest(seq__60870__$1);
var G__61036 = c__4679__auto__;
var G__61037 = cljs.core.count(c__4679__auto__);
var G__61038 = (0);
seq__60870 = G__61035;
chunk__60871 = G__61036;
count__60872 = G__61037;
i__60873 = G__61038;
continue;
} else {
var vec__60896 = cljs.core.first(seq__60870__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60896,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60896,(1),null);
var temp__5751__auto___61039 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61039)){
var effect_fn_61040 = temp__5751__auto___61039;
(effect_fn_61040.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61040.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61040.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61041 = cljs.core.next(seq__60870__$1);
var G__61042 = null;
var G__61043 = (0);
var G__61044 = (0);
seq__60870 = G__61041;
chunk__60871 = G__61042;
count__60872 = G__61043;
i__60873 = G__61044;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__60464__auto___61045 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__60465__auto___61046 = (end__60464__auto___61045 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60465__auto___61046,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__60464__auto___61045);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__60856);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___61047 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___61047)){
var new_db_61048 = temp__5753__auto___61047;
var fexpr__60917_61049 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__60917_61049.cljs$core$IFn$_invoke$arity$1 ? fexpr__60917_61049.cljs$core$IFn$_invoke$arity$1(new_db_61048) : fexpr__60917_61049.call(null,new_db_61048));
} else {
}

var seq__60918 = cljs.core.seq(effects_without_db);
var chunk__60919 = null;
var count__60920 = (0);
var i__60921 = (0);
while(true){
if((i__60921 < count__60920)){
var vec__60944 = chunk__60919.cljs$core$IIndexed$_nth$arity$2(null,i__60921);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944,(1),null);
var temp__5751__auto___61050 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61050)){
var effect_fn_61051 = temp__5751__auto___61050;
(effect_fn_61051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61051.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61052 = seq__60918;
var G__61053 = chunk__60919;
var G__61054 = count__60920;
var G__61055 = (i__60921 + (1));
seq__60918 = G__61052;
chunk__60919 = G__61053;
count__60920 = G__61054;
i__60921 = G__61055;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60918);
if(temp__5753__auto__){
var seq__60918__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60918__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60918__$1);
var G__61056 = cljs.core.chunk_rest(seq__60918__$1);
var G__61057 = c__4679__auto__;
var G__61058 = cljs.core.count(c__4679__auto__);
var G__61059 = (0);
seq__60918 = G__61056;
chunk__60919 = G__61057;
count__60920 = G__61058;
i__60921 = G__61059;
continue;
} else {
var vec__60948 = cljs.core.first(seq__60918__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60948,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60948,(1),null);
var temp__5751__auto___61060 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61060)){
var effect_fn_61061 = temp__5751__auto___61060;
(effect_fn_61061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61061.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61062 = cljs.core.next(seq__60918__$1);
var G__61063 = null;
var G__61064 = (0);
var G__61065 = (0);
seq__60918 = G__61062;
chunk__60919 = G__61063;
count__60920 = G__61064;
i__60921 = G__61065;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__60953){
var map__60954 = p__60953;
var map__60954__$1 = cljs.core.__destructure_map(map__60954);
var effect = map__60954__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__60957 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60958 = null;
var count__60959 = (0);
var i__60960 = (0);
while(true){
if((i__60960 < count__60959)){
var effect = chunk__60958.cljs$core$IIndexed$_nth$arity$2(null,i__60960);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__61066 = seq__60957;
var G__61067 = chunk__60958;
var G__61068 = count__60959;
var G__61069 = (i__60960 + (1));
seq__60957 = G__61066;
chunk__60958 = G__61067;
count__60959 = G__61068;
i__60960 = G__61069;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60957);
if(temp__5753__auto__){
var seq__60957__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60957__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60957__$1);
var G__61070 = cljs.core.chunk_rest(seq__60957__$1);
var G__61071 = c__4679__auto__;
var G__61072 = cljs.core.count(c__4679__auto__);
var G__61073 = (0);
seq__60957 = G__61070;
chunk__60958 = G__61071;
count__60959 = G__61072;
i__60960 = G__61073;
continue;
} else {
var effect = cljs.core.first(seq__60957__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__61074 = cljs.core.next(seq__60957__$1);
var G__61075 = null;
var G__61076 = (0);
var G__61077 = (0);
seq__60957 = G__61074;
chunk__60958 = G__61075;
count__60959 = G__61076;
i__60960 = G__61077;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__60970 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__60971 = null;
var count__60972 = (0);
var i__60973 = (0);
while(true){
if((i__60973 < count__60972)){
var vec__60981 = chunk__60971.cljs$core$IIndexed$_nth$arity$2(null,i__60973);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___61078 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61078)){
var effect_fn_61079 = temp__5751__auto___61078;
(effect_fn_61079.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61079.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61079.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61080 = seq__60970;
var G__61081 = chunk__60971;
var G__61082 = count__60972;
var G__61083 = (i__60973 + (1));
seq__60970 = G__61080;
chunk__60971 = G__61081;
count__60972 = G__61082;
i__60973 = G__61083;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60970);
if(temp__5753__auto__){
var seq__60970__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60970__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60970__$1);
var G__61084 = cljs.core.chunk_rest(seq__60970__$1);
var G__61085 = c__4679__auto__;
var G__61086 = cljs.core.count(c__4679__auto__);
var G__61087 = (0);
seq__60970 = G__61084;
chunk__60971 = G__61085;
count__60972 = G__61086;
i__60973 = G__61087;
continue;
} else {
var vec__60984 = cljs.core.first(seq__60970__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60984,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60984,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___61088 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___61088)){
var effect_fn_61089 = temp__5751__auto___61088;
(effect_fn_61089.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61089.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61089.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__61090 = cljs.core.next(seq__60970__$1);
var G__61091 = null;
var G__61092 = (0);
var G__61093 = (0);
seq__60970 = G__61090;
chunk__60971 = G__61091;
count__60972 = G__61092;
i__60973 = G__61093;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__60987 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60988 = null;
var count__60989 = (0);
var i__60990 = (0);
while(true){
if((i__60990 < count__60989)){
var event = chunk__60988.cljs$core$IIndexed$_nth$arity$2(null,i__60990);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__61094 = seq__60987;
var G__61095 = chunk__60988;
var G__61096 = count__60989;
var G__61097 = (i__60990 + (1));
seq__60987 = G__61094;
chunk__60988 = G__61095;
count__60989 = G__61096;
i__60990 = G__61097;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60987);
if(temp__5753__auto__){
var seq__60987__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60987__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60987__$1);
var G__61098 = cljs.core.chunk_rest(seq__60987__$1);
var G__61099 = c__4679__auto__;
var G__61100 = cljs.core.count(c__4679__auto__);
var G__61101 = (0);
seq__60987 = G__61098;
chunk__60988 = G__61099;
count__60989 = G__61100;
i__60990 = G__61101;
continue;
} else {
var event = cljs.core.first(seq__60987__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__61102 = cljs.core.next(seq__60987__$1);
var G__61103 = null;
var G__61104 = (0);
var G__61105 = (0);
seq__60987 = G__61102;
chunk__60988 = G__61103;
count__60989 = G__61104;
i__60990 = G__61105;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61018 = cljs.core.seq(value);
var chunk__61019 = null;
var count__61020 = (0);
var i__61021 = (0);
while(true){
if((i__61021 < count__61020)){
var event = chunk__61019.cljs$core$IIndexed$_nth$arity$2(null,i__61021);
clear_event(event);


var G__61106 = seq__61018;
var G__61107 = chunk__61019;
var G__61108 = count__61020;
var G__61109 = (i__61021 + (1));
seq__61018 = G__61106;
chunk__61019 = G__61107;
count__61020 = G__61108;
i__61021 = G__61109;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61018);
if(temp__5753__auto__){
var seq__61018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61018__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61018__$1);
var G__61110 = cljs.core.chunk_rest(seq__61018__$1);
var G__61111 = c__4679__auto__;
var G__61112 = cljs.core.count(c__4679__auto__);
var G__61113 = (0);
seq__61018 = G__61110;
chunk__61019 = G__61111;
count__61020 = G__61112;
i__61021 = G__61113;
continue;
} else {
var event = cljs.core.first(seq__61018__$1);
clear_event(event);


var G__61114 = cljs.core.next(seq__61018__$1);
var G__61115 = null;
var G__61116 = (0);
var G__61117 = (0);
seq__61018 = G__61114;
chunk__61019 = G__61115;
count__61020 = G__61116;
i__61021 = G__61117;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
