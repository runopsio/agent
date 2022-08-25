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
var _STAR_current_trace_STAR__orig_val__34821 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34822 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34822);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34916 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34916)){
var new_db_34917 = temp__5753__auto___34916;
var fexpr__34823_34918 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34823_34918.cljs$core$IFn$_invoke$arity$1 ? fexpr__34823_34918.cljs$core$IFn$_invoke$arity$1(new_db_34917) : fexpr__34823_34918.call(null,new_db_34917));
} else {
}

var seq__34825 = cljs.core.seq(effects_without_db);
var chunk__34826 = null;
var count__34827 = (0);
var i__34828 = (0);
while(true){
if((i__34828 < count__34827)){
var vec__34836 = chunk__34826.cljs$core$IIndexed$_nth$arity$2(null,i__34828);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34836,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34836,(1),null);
var temp__5751__auto___34919 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34919)){
var effect_fn_34920 = temp__5751__auto___34919;
(effect_fn_34920.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34920.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34920.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34921 = seq__34825;
var G__34922 = chunk__34826;
var G__34923 = count__34827;
var G__34924 = (i__34828 + (1));
seq__34825 = G__34921;
chunk__34826 = G__34922;
count__34827 = G__34923;
i__34828 = G__34924;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34825);
if(temp__5753__auto__){
var seq__34825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__34926 = cljs.core.chunk_rest(seq__34825__$1);
var G__34927 = c__4679__auto__;
var G__34928 = cljs.core.count(c__4679__auto__);
var G__34929 = (0);
seq__34825 = G__34926;
chunk__34826 = G__34927;
count__34827 = G__34928;
i__34828 = G__34929;
continue;
} else {
var vec__34839 = cljs.core.first(seq__34825__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34839,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34839,(1),null);
var temp__5751__auto___34930 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34930)){
var effect_fn_34931 = temp__5751__auto___34930;
(effect_fn_34931.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34931.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34931.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34932 = cljs.core.next(seq__34825__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__34825 = G__34932;
chunk__34826 = G__34933;
count__34827 = G__34934;
i__34828 = G__34935;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34458__auto___34937 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34459__auto___34938 = (end__34458__auto___34937 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34459__auto___34938,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34458__auto___34937);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34821);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34941 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34941)){
var new_db_34942 = temp__5753__auto___34941;
var fexpr__34843_34943 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34843_34943.cljs$core$IFn$_invoke$arity$1 ? fexpr__34843_34943.cljs$core$IFn$_invoke$arity$1(new_db_34942) : fexpr__34843_34943.call(null,new_db_34942));
} else {
}

var seq__34844 = cljs.core.seq(effects_without_db);
var chunk__34845 = null;
var count__34846 = (0);
var i__34847 = (0);
while(true){
if((i__34847 < count__34846)){
var vec__34854 = chunk__34845.cljs$core$IIndexed$_nth$arity$2(null,i__34847);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854,(1),null);
var temp__5751__auto___34944 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34944)){
var effect_fn_34945 = temp__5751__auto___34944;
(effect_fn_34945.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34945.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34945.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34946 = seq__34844;
var G__34947 = chunk__34845;
var G__34948 = count__34846;
var G__34949 = (i__34847 + (1));
seq__34844 = G__34946;
chunk__34845 = G__34947;
count__34846 = G__34948;
i__34847 = G__34949;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34844);
if(temp__5753__auto__){
var seq__34844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34844__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34844__$1);
var G__34950 = cljs.core.chunk_rest(seq__34844__$1);
var G__34951 = c__4679__auto__;
var G__34952 = cljs.core.count(c__4679__auto__);
var G__34953 = (0);
seq__34844 = G__34950;
chunk__34845 = G__34951;
count__34846 = G__34952;
i__34847 = G__34953;
continue;
} else {
var vec__34859 = cljs.core.first(seq__34844__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859,(1),null);
var temp__5751__auto___34954 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34954)){
var effect_fn_34955 = temp__5751__auto___34954;
(effect_fn_34955.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34955.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34955.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34956 = cljs.core.next(seq__34844__$1);
var G__34957 = null;
var G__34958 = (0);
var G__34959 = (0);
seq__34844 = G__34956;
chunk__34845 = G__34957;
count__34846 = G__34958;
i__34847 = G__34959;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__34865){
var map__34866 = p__34865;
var map__34866__$1 = cljs.core.__destructure_map(map__34866);
var effect = map__34866__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34866__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34866__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__34867 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34868 = null;
var count__34869 = (0);
var i__34870 = (0);
while(true){
if((i__34870 < count__34869)){
var effect = chunk__34868.cljs$core$IIndexed$_nth$arity$2(null,i__34870);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34960 = seq__34867;
var G__34961 = chunk__34868;
var G__34962 = count__34869;
var G__34963 = (i__34870 + (1));
seq__34867 = G__34960;
chunk__34868 = G__34961;
count__34869 = G__34962;
i__34870 = G__34963;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34867);
if(temp__5753__auto__){
var seq__34867__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34867__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34867__$1);
var G__34964 = cljs.core.chunk_rest(seq__34867__$1);
var G__34965 = c__4679__auto__;
var G__34966 = cljs.core.count(c__4679__auto__);
var G__34967 = (0);
seq__34867 = G__34964;
chunk__34868 = G__34965;
count__34869 = G__34966;
i__34870 = G__34967;
continue;
} else {
var effect = cljs.core.first(seq__34867__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34968 = cljs.core.next(seq__34867__$1);
var G__34969 = null;
var G__34970 = (0);
var G__34971 = (0);
seq__34867 = G__34968;
chunk__34868 = G__34969;
count__34869 = G__34970;
i__34870 = G__34971;
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
var seq__34871 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__34872 = null;
var count__34873 = (0);
var i__34874 = (0);
while(true){
if((i__34874 < count__34873)){
var vec__34882 = chunk__34872.cljs$core$IIndexed$_nth$arity$2(null,i__34874);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34972 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34972)){
var effect_fn_34973 = temp__5751__auto___34972;
(effect_fn_34973.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34973.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34973.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34974 = seq__34871;
var G__34975 = chunk__34872;
var G__34976 = count__34873;
var G__34977 = (i__34874 + (1));
seq__34871 = G__34974;
chunk__34872 = G__34975;
count__34873 = G__34976;
i__34874 = G__34977;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34871);
if(temp__5753__auto__){
var seq__34871__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34871__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34871__$1);
var G__34978 = cljs.core.chunk_rest(seq__34871__$1);
var G__34979 = c__4679__auto__;
var G__34980 = cljs.core.count(c__4679__auto__);
var G__34981 = (0);
seq__34871 = G__34978;
chunk__34872 = G__34979;
count__34873 = G__34980;
i__34874 = G__34981;
continue;
} else {
var vec__34887 = cljs.core.first(seq__34871__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34983 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34983)){
var effect_fn_34984 = temp__5751__auto___34983;
(effect_fn_34984.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34984.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34984.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34985 = cljs.core.next(seq__34871__$1);
var G__34986 = null;
var G__34987 = (0);
var G__34988 = (0);
seq__34871 = G__34985;
chunk__34872 = G__34986;
count__34873 = G__34987;
i__34874 = G__34988;
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
var seq__34892 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34893 = null;
var count__34894 = (0);
var i__34895 = (0);
while(true){
if((i__34895 < count__34894)){
var event = chunk__34893.cljs$core$IIndexed$_nth$arity$2(null,i__34895);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34990 = seq__34892;
var G__34991 = chunk__34893;
var G__34992 = count__34894;
var G__34993 = (i__34895 + (1));
seq__34892 = G__34990;
chunk__34893 = G__34991;
count__34894 = G__34992;
i__34895 = G__34993;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34892);
if(temp__5753__auto__){
var seq__34892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34892__$1);
var G__34994 = cljs.core.chunk_rest(seq__34892__$1);
var G__34995 = c__4679__auto__;
var G__34996 = cljs.core.count(c__4679__auto__);
var G__34997 = (0);
seq__34892 = G__34994;
chunk__34893 = G__34995;
count__34894 = G__34996;
i__34895 = G__34997;
continue;
} else {
var event = cljs.core.first(seq__34892__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34998 = cljs.core.next(seq__34892__$1);
var G__34999 = null;
var G__35000 = (0);
var G__35001 = (0);
seq__34892 = G__34998;
chunk__34893 = G__34999;
count__34894 = G__35000;
i__34895 = G__35001;
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
var seq__34908 = cljs.core.seq(value);
var chunk__34909 = null;
var count__34910 = (0);
var i__34911 = (0);
while(true){
if((i__34911 < count__34910)){
var event = chunk__34909.cljs$core$IIndexed$_nth$arity$2(null,i__34911);
clear_event(event);


var G__35002 = seq__34908;
var G__35003 = chunk__34909;
var G__35004 = count__34910;
var G__35005 = (i__34911 + (1));
seq__34908 = G__35002;
chunk__34909 = G__35003;
count__34910 = G__35004;
i__34911 = G__35005;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34908);
if(temp__5753__auto__){
var seq__34908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34908__$1);
var G__35006 = cljs.core.chunk_rest(seq__34908__$1);
var G__35007 = c__4679__auto__;
var G__35008 = cljs.core.count(c__4679__auto__);
var G__35009 = (0);
seq__34908 = G__35006;
chunk__34909 = G__35007;
count__34910 = G__35008;
i__34911 = G__35009;
continue;
} else {
var event = cljs.core.first(seq__34908__$1);
clear_event(event);


var G__35010 = cljs.core.next(seq__34908__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34908 = G__35010;
chunk__34909 = G__35011;
count__34910 = G__35012;
i__34911 = G__35013;
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
