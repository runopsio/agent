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
var _STAR_current_trace_STAR__orig_val__37857 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37858 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37858);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37964 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37964)){
var new_db_37965 = temp__5753__auto___37964;
var fexpr__37860_37966 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37860_37966.cljs$core$IFn$_invoke$arity$1 ? fexpr__37860_37966.cljs$core$IFn$_invoke$arity$1(new_db_37965) : fexpr__37860_37966.call(null,new_db_37965));
} else {
}

var seq__37861 = cljs.core.seq(effects_without_db);
var chunk__37863 = null;
var count__37864 = (0);
var i__37865 = (0);
while(true){
if((i__37865 < count__37864)){
var vec__37882 = chunk__37863.cljs$core$IIndexed$_nth$arity$2(null,i__37865);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37882,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37882,(1),null);
var temp__5751__auto___37968 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37968)){
var effect_fn_37969 = temp__5751__auto___37968;
(effect_fn_37969.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37969.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37969.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37970 = seq__37861;
var G__37971 = chunk__37863;
var G__37972 = count__37864;
var G__37973 = (i__37865 + (1));
seq__37861 = G__37970;
chunk__37863 = G__37971;
count__37864 = G__37972;
i__37865 = G__37973;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37861);
if(temp__5753__auto__){
var seq__37861__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37861__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37861__$1);
var G__37974 = cljs.core.chunk_rest(seq__37861__$1);
var G__37975 = c__4679__auto__;
var G__37976 = cljs.core.count(c__4679__auto__);
var G__37977 = (0);
seq__37861 = G__37974;
chunk__37863 = G__37975;
count__37864 = G__37976;
i__37865 = G__37977;
continue;
} else {
var vec__37885 = cljs.core.first(seq__37861__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37885,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37885,(1),null);
var temp__5751__auto___37978 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37978)){
var effect_fn_37979 = temp__5751__auto___37978;
(effect_fn_37979.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37979.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37979.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37980 = cljs.core.next(seq__37861__$1);
var G__37981 = null;
var G__37982 = (0);
var G__37983 = (0);
seq__37861 = G__37980;
chunk__37863 = G__37981;
count__37864 = G__37982;
i__37865 = G__37983;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__27811__auto___37984 = re_frame.interop.now();
var duration__27812__auto___37985 = (end__27811__auto___37984 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27812__auto___37985,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__27811__auto___37984);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37857);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37986 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37986)){
var new_db_37987 = temp__5753__auto___37986;
var fexpr__37889_37988 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37889_37988.cljs$core$IFn$_invoke$arity$1 ? fexpr__37889_37988.cljs$core$IFn$_invoke$arity$1(new_db_37987) : fexpr__37889_37988.call(null,new_db_37987));
} else {
}

var seq__37890 = cljs.core.seq(effects_without_db);
var chunk__37891 = null;
var count__37892 = (0);
var i__37893 = (0);
while(true){
if((i__37893 < count__37892)){
var vec__37908 = chunk__37891.cljs$core$IIndexed$_nth$arity$2(null,i__37893);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37908,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37908,(1),null);
var temp__5751__auto___37989 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37989)){
var effect_fn_37994 = temp__5751__auto___37989;
(effect_fn_37994.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37994.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37994.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37995 = seq__37890;
var G__37996 = chunk__37891;
var G__37997 = count__37892;
var G__37998 = (i__37893 + (1));
seq__37890 = G__37995;
chunk__37891 = G__37996;
count__37892 = G__37997;
i__37893 = G__37998;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37890);
if(temp__5753__auto__){
var seq__37890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37890__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37890__$1);
var G__38003 = cljs.core.chunk_rest(seq__37890__$1);
var G__38004 = c__4679__auto__;
var G__38005 = cljs.core.count(c__4679__auto__);
var G__38006 = (0);
seq__37890 = G__38003;
chunk__37891 = G__38004;
count__37892 = G__38005;
i__37893 = G__38006;
continue;
} else {
var vec__37913 = cljs.core.first(seq__37890__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37913,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37913,(1),null);
var temp__5751__auto___38013 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38013)){
var effect_fn_38014 = temp__5751__auto___38013;
(effect_fn_38014.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38014.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38014.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38015 = cljs.core.next(seq__37890__$1);
var G__38016 = null;
var G__38017 = (0);
var G__38018 = (0);
seq__37890 = G__38015;
chunk__37891 = G__38016;
count__37892 = G__38017;
i__37893 = G__38018;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37919){
var map__37920 = p__37919;
var map__37920__$1 = cljs.core.__destructure_map(map__37920);
var effect = map__37920__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37922 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37923 = null;
var count__37924 = (0);
var i__37925 = (0);
while(true){
if((i__37925 < count__37924)){
var effect = chunk__37923.cljs$core$IIndexed$_nth$arity$2(null,i__37925);
re_frame.fx.dispatch_later(effect);


var G__38019 = seq__37922;
var G__38020 = chunk__37923;
var G__38021 = count__37924;
var G__38022 = (i__37925 + (1));
seq__37922 = G__38019;
chunk__37923 = G__38020;
count__37924 = G__38021;
i__37925 = G__38022;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37922);
if(temp__5753__auto__){
var seq__37922__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37922__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37922__$1);
var G__38024 = cljs.core.chunk_rest(seq__37922__$1);
var G__38025 = c__4679__auto__;
var G__38026 = cljs.core.count(c__4679__auto__);
var G__38027 = (0);
seq__37922 = G__38024;
chunk__37923 = G__38025;
count__37924 = G__38026;
i__37925 = G__38027;
continue;
} else {
var effect = cljs.core.first(seq__37922__$1);
re_frame.fx.dispatch_later(effect);


var G__38028 = cljs.core.next(seq__37922__$1);
var G__38029 = null;
var G__38030 = (0);
var G__38031 = (0);
seq__37922 = G__38028;
chunk__37923 = G__38029;
count__37924 = G__38030;
i__37925 = G__38031;
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
var seq__37927 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37928 = null;
var count__37929 = (0);
var i__37930 = (0);
while(true){
if((i__37930 < count__37929)){
var vec__37941 = chunk__37928.cljs$core$IIndexed$_nth$arity$2(null,i__37930);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37941,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37941,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38032 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38032)){
var effect_fn_38033 = temp__5751__auto___38032;
(effect_fn_38033.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38033.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38033.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38034 = seq__37927;
var G__38035 = chunk__37928;
var G__38036 = count__37929;
var G__38037 = (i__37930 + (1));
seq__37927 = G__38034;
chunk__37928 = G__38035;
count__37929 = G__38036;
i__37930 = G__38037;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37927);
if(temp__5753__auto__){
var seq__37927__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37927__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37927__$1);
var G__38038 = cljs.core.chunk_rest(seq__37927__$1);
var G__38039 = c__4679__auto__;
var G__38040 = cljs.core.count(c__4679__auto__);
var G__38041 = (0);
seq__37927 = G__38038;
chunk__37928 = G__38039;
count__37929 = G__38040;
i__37930 = G__38041;
continue;
} else {
var vec__37946 = cljs.core.first(seq__37927__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38042)){
var effect_fn_38043 = temp__5751__auto___38042;
(effect_fn_38043.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38043.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38043.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38045 = cljs.core.next(seq__37927__$1);
var G__38046 = null;
var G__38047 = (0);
var G__38048 = (0);
seq__37927 = G__38045;
chunk__37928 = G__38046;
count__37929 = G__38047;
i__37930 = G__38048;
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
var seq__37950 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37951 = null;
var count__37952 = (0);
var i__37953 = (0);
while(true){
if((i__37953 < count__37952)){
var event = chunk__37951.cljs$core$IIndexed$_nth$arity$2(null,i__37953);
re_frame.router.dispatch(event);


var G__38051 = seq__37950;
var G__38052 = chunk__37951;
var G__38053 = count__37952;
var G__38054 = (i__37953 + (1));
seq__37950 = G__38051;
chunk__37951 = G__38052;
count__37952 = G__38053;
i__37953 = G__38054;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37950);
if(temp__5753__auto__){
var seq__37950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37950__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37950__$1);
var G__38055 = cljs.core.chunk_rest(seq__37950__$1);
var G__38056 = c__4679__auto__;
var G__38057 = cljs.core.count(c__4679__auto__);
var G__38058 = (0);
seq__37950 = G__38055;
chunk__37951 = G__38056;
count__37952 = G__38057;
i__37953 = G__38058;
continue;
} else {
var event = cljs.core.first(seq__37950__$1);
re_frame.router.dispatch(event);


var G__38059 = cljs.core.next(seq__37950__$1);
var G__38060 = null;
var G__38061 = (0);
var G__38062 = (0);
seq__37950 = G__38059;
chunk__37951 = G__38060;
count__37952 = G__38061;
i__37953 = G__38062;
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
var seq__37954 = cljs.core.seq(value);
var chunk__37955 = null;
var count__37956 = (0);
var i__37957 = (0);
while(true){
if((i__37957 < count__37956)){
var event = chunk__37955.cljs$core$IIndexed$_nth$arity$2(null,i__37957);
clear_event(event);


var G__38063 = seq__37954;
var G__38064 = chunk__37955;
var G__38065 = count__37956;
var G__38066 = (i__37957 + (1));
seq__37954 = G__38063;
chunk__37955 = G__38064;
count__37956 = G__38065;
i__37957 = G__38066;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37954);
if(temp__5753__auto__){
var seq__37954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37954__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37954__$1);
var G__38068 = cljs.core.chunk_rest(seq__37954__$1);
var G__38069 = c__4679__auto__;
var G__38070 = cljs.core.count(c__4679__auto__);
var G__38071 = (0);
seq__37954 = G__38068;
chunk__37955 = G__38069;
count__37956 = G__38070;
i__37957 = G__38071;
continue;
} else {
var event = cljs.core.first(seq__37954__$1);
clear_event(event);


var G__38072 = cljs.core.next(seq__37954__$1);
var G__38073 = null;
var G__38074 = (0);
var G__38075 = (0);
seq__37954 = G__38072;
chunk__37955 = G__38073;
count__37956 = G__38074;
i__37957 = G__38075;
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
