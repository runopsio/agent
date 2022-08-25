goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45254,p__45255){
var map__45290 = p__45254;
var map__45290__$1 = cljs.core.__destructure_map(map__45290);
var svc = map__45290__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45290__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45292 = p__45255;
var map__45292__$1 = cljs.core.__destructure_map(map__45292);
var msg = map__45292__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45292__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45292__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45356,p__45357){
var map__45358 = p__45356;
var map__45358__$1 = cljs.core.__destructure_map(map__45358);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45358__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45359 = p__45357;
var map__45359__$1 = cljs.core.__destructure_map(map__45359);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45359__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45364,p__45365){
var map__45366 = p__45364;
var map__45366__$1 = cljs.core.__destructure_map(map__45366);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45366__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45366__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45367 = p__45365;
var map__45367__$1 = cljs.core.__destructure_map(map__45367);
var msg = map__45367__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45367__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45371,tid){
var map__45372 = p__45371;
var map__45372__$1 = cljs.core.__destructure_map(map__45372);
var svc = map__45372__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45372__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45385 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45386 = null;
var count__45387 = (0);
var i__45388 = (0);
while(true){
if((i__45388 < count__45387)){
var vec__45399 = chunk__45386.cljs$core$IIndexed$_nth$arity$2(null,i__45388);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45399,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45429 = seq__45385;
var G__45430 = chunk__45386;
var G__45431 = count__45387;
var G__45432 = (i__45388 + (1));
seq__45385 = G__45429;
chunk__45386 = G__45430;
count__45387 = G__45431;
i__45388 = G__45432;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45385);
if(temp__5753__auto__){
var seq__45385__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45385__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45385__$1);
var G__45433 = cljs.core.chunk_rest(seq__45385__$1);
var G__45434 = c__4679__auto__;
var G__45435 = cljs.core.count(c__4679__auto__);
var G__45436 = (0);
seq__45385 = G__45433;
chunk__45386 = G__45434;
count__45387 = G__45435;
i__45388 = G__45436;
continue;
} else {
var vec__45405 = cljs.core.first(seq__45385__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45437 = cljs.core.next(seq__45385__$1);
var G__45438 = null;
var G__45439 = (0);
var G__45440 = (0);
seq__45385 = G__45437;
chunk__45386 = G__45438;
count__45387 = G__45439;
i__45388 = G__45440;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45377_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45377_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45379_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45379_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45380_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45380_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45381_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45381_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45415){
var map__45417 = p__45415;
var map__45417__$1 = cljs.core.__destructure_map(map__45417);
var svc = map__45417__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45417__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45417__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
