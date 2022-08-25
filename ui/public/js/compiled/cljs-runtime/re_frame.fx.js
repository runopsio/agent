goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__63833 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__63834 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__63834);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___63973 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___63973)){
var new_db_63974 = temp__5753__auto___63973;
var fexpr__63840_63975 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__63840_63975.cljs$core$IFn$_invoke$arity$1 ? fexpr__63840_63975.cljs$core$IFn$_invoke$arity$1(new_db_63974) : fexpr__63840_63975.call(null,new_db_63974));
} else {
}

var seq__63845 = cljs.core.seq(effects_without_db);
var chunk__63846 = null;
var count__63847 = (0);
var i__63848 = (0);
while(true){
if((i__63848 < count__63847)){
var vec__63866 = chunk__63846.cljs$core$IIndexed$_nth$arity$2(null,i__63848);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63866,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63866,(1),null);
var temp__5751__auto___63976 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___63976)){
var effect_fn_63977 = temp__5751__auto___63976;
(effect_fn_63977.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63977.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63977.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__63978 = seq__63845;
var G__63979 = chunk__63846;
var G__63980 = count__63847;
var G__63981 = (i__63848 + (1));
seq__63845 = G__63978;
chunk__63846 = G__63979;
count__63847 = G__63980;
i__63848 = G__63981;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63845);
if(temp__5753__auto__){
var seq__63845__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63845__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63845__$1);
var G__63982 = cljs.core.chunk_rest(seq__63845__$1);
var G__63983 = c__4679__auto__;
var G__63984 = cljs.core.count(c__4679__auto__);
var G__63985 = (0);
seq__63845 = G__63982;
chunk__63846 = G__63983;
count__63847 = G__63984;
i__63848 = G__63985;
continue;
} else {
var vec__63871 = cljs.core.first(seq__63845__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63871,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63871,(1),null);
var temp__5751__auto___63986 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___63986)){
var effect_fn_63987 = temp__5751__auto___63986;
(effect_fn_63987.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63987.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63987.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__63988 = cljs.core.next(seq__63845__$1);
var G__63989 = null;
var G__63990 = (0);
var G__63991 = (0);
seq__63845 = G__63988;
chunk__63846 = G__63989;
count__63847 = G__63990;
i__63848 = G__63991;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__33512__auto___63992 = re_frame.interop.now();
var duration__33513__auto___63993 = (end__33512__auto___63992 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33513__auto___63993,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__33512__auto___63992);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__63833);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___63996 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___63996)){
var new_db_63998 = temp__5753__auto___63996;
var fexpr__63874_63999 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__63874_63999.cljs$core$IFn$_invoke$arity$1 ? fexpr__63874_63999.cljs$core$IFn$_invoke$arity$1(new_db_63998) : fexpr__63874_63999.call(null,new_db_63998));
} else {
}

var seq__63876 = cljs.core.seq(effects_without_db);
var chunk__63878 = null;
var count__63879 = (0);
var i__63880 = (0);
while(true){
if((i__63880 < count__63879)){
var vec__63891 = chunk__63878.cljs$core$IIndexed$_nth$arity$2(null,i__63880);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63891,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63891,(1),null);
var temp__5751__auto___64001 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___64001)){
var effect_fn_64002 = temp__5751__auto___64001;
(effect_fn_64002.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64002.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64002.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64003 = seq__63876;
var G__64004 = chunk__63878;
var G__64005 = count__63879;
var G__64006 = (i__63880 + (1));
seq__63876 = G__64003;
chunk__63878 = G__64004;
count__63879 = G__64005;
i__63880 = G__64006;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63876);
if(temp__5753__auto__){
var seq__63876__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63876__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63876__$1);
var G__64007 = cljs.core.chunk_rest(seq__63876__$1);
var G__64008 = c__4679__auto__;
var G__64009 = cljs.core.count(c__4679__auto__);
var G__64010 = (0);
seq__63876 = G__64007;
chunk__63878 = G__64008;
count__63879 = G__64009;
i__63880 = G__64010;
continue;
} else {
var vec__63895 = cljs.core.first(seq__63876__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63895,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63895,(1),null);
var temp__5751__auto___64012 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___64012)){
var effect_fn_64013 = temp__5751__auto___64012;
(effect_fn_64013.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64013.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64013.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64018 = cljs.core.next(seq__63876__$1);
var G__64019 = null;
var G__64020 = (0);
var G__64021 = (0);
seq__63876 = G__64018;
chunk__63878 = G__64019;
count__63879 = G__64020;
i__63880 = G__64021;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__63920){
var map__63921 = p__63920;
var map__63921__$1 = cljs.core.__destructure_map(map__63921);
var effect = map__63921__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63921__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63921__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__63936 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__63941 = null;
var count__63942 = (0);
var i__63943 = (0);
while(true){
if((i__63943 < count__63942)){
var effect = chunk__63941.cljs$core$IIndexed$_nth$arity$2(null,i__63943);
re_frame.fx.dispatch_later(effect);


var G__64026 = seq__63936;
var G__64027 = chunk__63941;
var G__64028 = count__63942;
var G__64029 = (i__63943 + (1));
seq__63936 = G__64026;
chunk__63941 = G__64027;
count__63942 = G__64028;
i__63943 = G__64029;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63936);
if(temp__5753__auto__){
var seq__63936__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63936__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63936__$1);
var G__64032 = cljs.core.chunk_rest(seq__63936__$1);
var G__64033 = c__4679__auto__;
var G__64034 = cljs.core.count(c__4679__auto__);
var G__64035 = (0);
seq__63936 = G__64032;
chunk__63941 = G__64033;
count__63942 = G__64034;
i__63943 = G__64035;
continue;
} else {
var effect = cljs.core.first(seq__63936__$1);
re_frame.fx.dispatch_later(effect);


var G__64036 = cljs.core.next(seq__63936__$1);
var G__64037 = null;
var G__64038 = (0);
var G__64039 = (0);
seq__63936 = G__64036;
chunk__63941 = G__64037;
count__63942 = G__64038;
i__63943 = G__64039;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__63948 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__63949 = null;
var count__63950 = (0);
var i__63951 = (0);
while(true){
if((i__63951 < count__63950)){
var vec__63958 = chunk__63949.cljs$core$IIndexed$_nth$arity$2(null,i__63951);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63958,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63958,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___64042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___64042)){
var effect_fn_64043 = temp__5751__auto___64042;
(effect_fn_64043.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64043.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64043.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64044 = seq__63948;
var G__64045 = chunk__63949;
var G__64046 = count__63950;
var G__64047 = (i__63951 + (1));
seq__63948 = G__64044;
chunk__63949 = G__64045;
count__63950 = G__64046;
i__63951 = G__64047;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63948);
if(temp__5753__auto__){
var seq__63948__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63948__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63948__$1);
var G__64048 = cljs.core.chunk_rest(seq__63948__$1);
var G__64049 = c__4679__auto__;
var G__64050 = cljs.core.count(c__4679__auto__);
var G__64051 = (0);
seq__63948 = G__64048;
chunk__63949 = G__64049;
count__63950 = G__64050;
i__63951 = G__64051;
continue;
} else {
var vec__63961 = cljs.core.first(seq__63948__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63961,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63961,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___64052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___64052)){
var effect_fn_64055 = temp__5751__auto___64052;
(effect_fn_64055.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64055.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64055.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64056 = cljs.core.next(seq__63948__$1);
var G__64057 = null;
var G__64058 = (0);
var G__64059 = (0);
seq__63948 = G__64056;
chunk__63949 = G__64057;
count__63950 = G__64058;
i__63951 = G__64059;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__63964 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__63965 = null;
var count__63966 = (0);
var i__63967 = (0);
while(true){
if((i__63967 < count__63966)){
var event = chunk__63965.cljs$core$IIndexed$_nth$arity$2(null,i__63967);
re_frame.router.dispatch(event);


var G__64060 = seq__63964;
var G__64061 = chunk__63965;
var G__64062 = count__63966;
var G__64063 = (i__63967 + (1));
seq__63964 = G__64060;
chunk__63965 = G__64061;
count__63966 = G__64062;
i__63967 = G__64063;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63964);
if(temp__5753__auto__){
var seq__63964__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63964__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63964__$1);
var G__64064 = cljs.core.chunk_rest(seq__63964__$1);
var G__64065 = c__4679__auto__;
var G__64066 = cljs.core.count(c__4679__auto__);
var G__64067 = (0);
seq__63964 = G__64064;
chunk__63965 = G__64065;
count__63966 = G__64066;
i__63967 = G__64067;
continue;
} else {
var event = cljs.core.first(seq__63964__$1);
re_frame.router.dispatch(event);


var G__64068 = cljs.core.next(seq__63964__$1);
var G__64069 = null;
var G__64070 = (0);
var G__64071 = (0);
seq__63964 = G__64068;
chunk__63965 = G__64069;
count__63966 = G__64070;
i__63967 = G__64071;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__63968 = cljs.core.seq(value);
var chunk__63969 = null;
var count__63970 = (0);
var i__63971 = (0);
while(true){
if((i__63971 < count__63970)){
var event = chunk__63969.cljs$core$IIndexed$_nth$arity$2(null,i__63971);
clear_event(event);


var G__64072 = seq__63968;
var G__64073 = chunk__63969;
var G__64074 = count__63970;
var G__64075 = (i__63971 + (1));
seq__63968 = G__64072;
chunk__63969 = G__64073;
count__63970 = G__64074;
i__63971 = G__64075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63968);
if(temp__5753__auto__){
var seq__63968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63968__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63968__$1);
var G__64076 = cljs.core.chunk_rest(seq__63968__$1);
var G__64077 = c__4679__auto__;
var G__64078 = cljs.core.count(c__4679__auto__);
var G__64079 = (0);
seq__63968 = G__64076;
chunk__63969 = G__64077;
count__63970 = G__64078;
i__63971 = G__64079;
continue;
} else {
var event = cljs.core.first(seq__63968__$1);
clear_event(event);


var G__64081 = cljs.core.next(seq__63968__$1);
var G__64082 = null;
var G__64083 = (0);
var G__64084 = (0);
seq__63968 = G__64081;
chunk__63969 = G__64082;
count__63970 = G__64083;
i__63971 = G__64084;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
