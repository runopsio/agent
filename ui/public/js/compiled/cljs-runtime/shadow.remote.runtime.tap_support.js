goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__71260,p__71261){
var map__71262 = p__71260;
var map__71262__$1 = cljs.core.__destructure_map(map__71262);
var svc = map__71262__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71262__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71262__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71262__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71263 = p__71261;
var map__71263__$1 = cljs.core.__destructure_map(map__71263);
var msg = map__71263__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71263__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71263__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__71267,p__71268){
var map__71269 = p__71267;
var map__71269__$1 = cljs.core.__destructure_map(map__71269);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71269__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__71270 = p__71268;
var map__71270__$1 = cljs.core.__destructure_map(map__71270);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71270__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__71271,p__71272){
var map__71273 = p__71271;
var map__71273__$1 = cljs.core.__destructure_map(map__71273);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71273__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71274 = p__71272;
var map__71274__$1 = cljs.core.__destructure_map(map__71274);
var msg = map__71274__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71274__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__71275,tid){
var map__71276 = p__71275;
var map__71276__$1 = cljs.core.__destructure_map(map__71276);
var svc = map__71276__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71276__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__71281 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__71282 = null;
var count__71283 = (0);
var i__71284 = (0);
while(true){
if((i__71284 < count__71283)){
var vec__71318 = chunk__71282.cljs$core$IIndexed$_nth$arity$2(null,i__71284);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__71396 = seq__71281;
var G__71397 = chunk__71282;
var G__71398 = count__71283;
var G__71399 = (i__71284 + (1));
seq__71281 = G__71396;
chunk__71282 = G__71397;
count__71283 = G__71398;
i__71284 = G__71399;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71281);
if(temp__5753__auto__){
var seq__71281__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71281__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__71281__$1);
var G__71401 = cljs.core.chunk_rest(seq__71281__$1);
var G__71402 = c__4679__auto__;
var G__71403 = cljs.core.count(c__4679__auto__);
var G__71404 = (0);
seq__71281 = G__71401;
chunk__71282 = G__71402;
count__71283 = G__71403;
i__71284 = G__71404;
continue;
} else {
var vec__71343 = cljs.core.first(seq__71281__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71343,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71343,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__71406 = cljs.core.next(seq__71281__$1);
var G__71407 = null;
var G__71408 = (0);
var G__71409 = (0);
seq__71281 = G__71406;
chunk__71282 = G__71407;
count__71283 = G__71408;
i__71284 = G__71409;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__71277_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__71277_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__71278_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__71278_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__71279_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__71279_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__71280_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__71280_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__71377){
var map__71379 = p__71377;
var map__71379__$1 = cljs.core.__destructure_map(map__71379);
var svc = map__71379__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71379__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71379__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
