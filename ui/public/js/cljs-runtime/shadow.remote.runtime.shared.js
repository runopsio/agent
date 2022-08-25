goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__44215,res){
var map__44216 = p__44215;
var map__44216__$1 = cljs.core.__destructure_map(map__44216);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__44218 = res;
var G__44218__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44218,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__44218);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44218__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__44218__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__44220 = arguments.length;
switch (G__44220) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__44223,msg,handlers,timeout_after_ms){
var map__44224 = p__44223;
var map__44224__$1 = cljs.core.__destructure_map(map__44224);
var runtime = map__44224__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44224__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44814 = arguments.length;
var i__4865__auto___44815 = (0);
while(true){
if((i__4865__auto___44815 < len__4864__auto___44814)){
args__4870__auto__.push((arguments[i__4865__auto___44815]));

var G__44816 = (i__4865__auto___44815 + (1));
i__4865__auto___44815 = G__44816;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__44255,ev,args){
var map__44256 = p__44255;
var map__44256__$1 = cljs.core.__destructure_map(map__44256);
var runtime = map__44256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__44258 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44261 = null;
var count__44262 = (0);
var i__44263 = (0);
while(true){
if((i__44263 < count__44262)){
var ext = chunk__44261.cljs$core$IIndexed$_nth$arity$2(null,i__44263);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44817 = seq__44258;
var G__44818 = chunk__44261;
var G__44819 = count__44262;
var G__44820 = (i__44263 + (1));
seq__44258 = G__44817;
chunk__44261 = G__44818;
count__44262 = G__44819;
i__44263 = G__44820;
continue;
} else {
var G__44821 = seq__44258;
var G__44822 = chunk__44261;
var G__44823 = count__44262;
var G__44824 = (i__44263 + (1));
seq__44258 = G__44821;
chunk__44261 = G__44822;
count__44262 = G__44823;
i__44263 = G__44824;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44258);
if(temp__5753__auto__){
var seq__44258__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44258__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44258__$1);
var G__44825 = cljs.core.chunk_rest(seq__44258__$1);
var G__44826 = c__4679__auto__;
var G__44827 = cljs.core.count(c__4679__auto__);
var G__44828 = (0);
seq__44258 = G__44825;
chunk__44261 = G__44826;
count__44262 = G__44827;
i__44263 = G__44828;
continue;
} else {
var ext = cljs.core.first(seq__44258__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44829 = cljs.core.next(seq__44258__$1);
var G__44830 = null;
var G__44831 = (0);
var G__44832 = (0);
seq__44258 = G__44829;
chunk__44261 = G__44830;
count__44262 = G__44831;
i__44263 = G__44832;
continue;
} else {
var G__44833 = cljs.core.next(seq__44258__$1);
var G__44834 = null;
var G__44835 = (0);
var G__44836 = (0);
seq__44258 = G__44833;
chunk__44261 = G__44834;
count__44262 = G__44835;
i__44263 = G__44836;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq44237){
var G__44238 = cljs.core.first(seq44237);
var seq44237__$1 = cljs.core.next(seq44237);
var G__44239 = cljs.core.first(seq44237__$1);
var seq44237__$2 = cljs.core.next(seq44237__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44238,G__44239,seq44237__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__44409,p__44410){
var map__44411 = p__44409;
var map__44411__$1 = cljs.core.__destructure_map(map__44411);
var runtime = map__44411__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44411__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44412 = p__44410;
var map__44412__$1 = cljs.core.__destructure_map(map__44412);
var msg = map__44412__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44412__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__44420 = cljs.core.deref(state_ref);
var map__44420__$1 = cljs.core.__destructure_map(map__44420);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44420__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44420__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__44487){
var map__44491 = p__44487;
var map__44491__$1 = cljs.core.__destructure_map(map__44491);
var runtime = map__44491__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44491__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__44504,msg){
var map__44506 = p__44504;
var map__44506__$1 = cljs.core.__destructure_map(map__44506);
var runtime = map__44506__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__44654,key,p__44655){
var map__44666 = p__44654;
var map__44666__$1 = cljs.core.__destructure_map(map__44666);
var state = map__44666__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__44667 = p__44655;
var map__44667__$1 = cljs.core.__destructure_map(map__44667);
var spec = map__44667__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__44683,key,spec){
var map__44684 = p__44683;
var map__44684__$1 = cljs.core.__destructure_map(map__44684);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__44685_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__44685_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__44686_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__44686_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__44687_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__44687_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__44688_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__44688_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__44689_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__44689_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__44691,key){
var map__44692 = p__44691;
var map__44692__$1 = cljs.core.__destructure_map(map__44692);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__44699,msg){
var map__44700 = p__44699;
var map__44700__$1 = cljs.core.__destructure_map(map__44700);
var runtime = map__44700__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44700__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__44715,p__44716){
var map__44731 = p__44715;
var map__44731__$1 = cljs.core.__destructure_map(map__44731);
var runtime = map__44731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44732 = p__44716;
var map__44732__$1 = cljs.core.__destructure_map(map__44732);
var msg = map__44732__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44732__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44732__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__44740 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44742 = null;
var count__44743 = (0);
var i__44744 = (0);
while(true){
if((i__44744 < count__44743)){
var map__44769 = chunk__44742.cljs$core$IIndexed$_nth$arity$2(null,i__44744);
var map__44769__$1 = cljs.core.__destructure_map(map__44769);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44769__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44871 = seq__44740;
var G__44872 = chunk__44742;
var G__44873 = count__44743;
var G__44874 = (i__44744 + (1));
seq__44740 = G__44871;
chunk__44742 = G__44872;
count__44743 = G__44873;
i__44744 = G__44874;
continue;
} else {
var G__44876 = seq__44740;
var G__44877 = chunk__44742;
var G__44878 = count__44743;
var G__44879 = (i__44744 + (1));
seq__44740 = G__44876;
chunk__44742 = G__44877;
count__44743 = G__44878;
i__44744 = G__44879;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44740);
if(temp__5753__auto__){
var seq__44740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44740__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44740__$1);
var G__44881 = cljs.core.chunk_rest(seq__44740__$1);
var G__44882 = c__4679__auto__;
var G__44883 = cljs.core.count(c__4679__auto__);
var G__44884 = (0);
seq__44740 = G__44881;
chunk__44742 = G__44882;
count__44743 = G__44883;
i__44744 = G__44884;
continue;
} else {
var map__44770 = cljs.core.first(seq__44740__$1);
var map__44770__$1 = cljs.core.__destructure_map(map__44770);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44770__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44889 = cljs.core.next(seq__44740__$1);
var G__44890 = null;
var G__44891 = (0);
var G__44892 = (0);
seq__44740 = G__44889;
chunk__44742 = G__44890;
count__44743 = G__44891;
i__44744 = G__44892;
continue;
} else {
var G__44893 = cljs.core.next(seq__44740__$1);
var G__44894 = null;
var G__44895 = (0);
var G__44896 = (0);
seq__44740 = G__44893;
chunk__44742 = G__44894;
count__44743 = G__44895;
i__44744 = G__44896;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
