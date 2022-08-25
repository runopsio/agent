goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75183 = arguments.length;
var i__4865__auto___75184 = (0);
while(true){
if((i__4865__auto___75184 < len__4864__auto___75183)){
args__4870__auto__.push((arguments[i__4865__auto___75184]));

var G__75189 = (i__4865__auto___75184 + (1));
i__4865__auto___75184 = G__75189;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq74525){
var G__74526 = cljs.core.first(seq74525);
var seq74525__$1 = cljs.core.next(seq74525);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74526,seq74525__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__74527 = cljs.core.seq(sources);
var chunk__74528 = null;
var count__74529 = (0);
var i__74530 = (0);
while(true){
if((i__74530 < count__74529)){
var map__74545 = chunk__74528.cljs$core$IIndexed$_nth$arity$2(null,i__74530);
var map__74545__$1 = cljs.core.__destructure_map(map__74545);
var src = map__74545__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74545__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74545__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74545__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74546){var e_75191 = e74546;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_75191);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_75191.message)].join('')));
}

var G__75192 = seq__74527;
var G__75193 = chunk__74528;
var G__75194 = count__74529;
var G__75195 = (i__74530 + (1));
seq__74527 = G__75192;
chunk__74528 = G__75193;
count__74529 = G__75194;
i__74530 = G__75195;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74527);
if(temp__5753__auto__){
var seq__74527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74527__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74527__$1);
var G__75198 = cljs.core.chunk_rest(seq__74527__$1);
var G__75199 = c__4679__auto__;
var G__75200 = cljs.core.count(c__4679__auto__);
var G__75201 = (0);
seq__74527 = G__75198;
chunk__74528 = G__75199;
count__74529 = G__75200;
i__74530 = G__75201;
continue;
} else {
var map__74549 = cljs.core.first(seq__74527__$1);
var map__74549__$1 = cljs.core.__destructure_map(map__74549);
var src = map__74549__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74549__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74549__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74550){var e_75202 = e74550;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_75202);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_75202.message)].join('')));
}

var G__75203 = cljs.core.next(seq__74527__$1);
var G__75204 = null;
var G__75205 = (0);
var G__75206 = (0);
seq__74527 = G__75203;
chunk__74528 = G__75204;
count__74529 = G__75205;
i__74530 = G__75206;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__74556 = cljs.core.seq(js_requires);
var chunk__74557 = null;
var count__74558 = (0);
var i__74559 = (0);
while(true){
if((i__74559 < count__74558)){
var js_ns = chunk__74557.cljs$core$IIndexed$_nth$arity$2(null,i__74559);
var require_str_75209 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_75209);


var G__75210 = seq__74556;
var G__75211 = chunk__74557;
var G__75212 = count__74558;
var G__75213 = (i__74559 + (1));
seq__74556 = G__75210;
chunk__74557 = G__75211;
count__74558 = G__75212;
i__74559 = G__75213;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74556);
if(temp__5753__auto__){
var seq__74556__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74556__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74556__$1);
var G__75214 = cljs.core.chunk_rest(seq__74556__$1);
var G__75215 = c__4679__auto__;
var G__75216 = cljs.core.count(c__4679__auto__);
var G__75217 = (0);
seq__74556 = G__75214;
chunk__74557 = G__75215;
count__74558 = G__75216;
i__74559 = G__75217;
continue;
} else {
var js_ns = cljs.core.first(seq__74556__$1);
var require_str_75218 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_75218);


var G__75219 = cljs.core.next(seq__74556__$1);
var G__75220 = null;
var G__75221 = (0);
var G__75222 = (0);
seq__74556 = G__75219;
chunk__74557 = G__75220;
count__74558 = G__75221;
i__74559 = G__75222;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__74576){
var map__74577 = p__74576;
var map__74577__$1 = cljs.core.__destructure_map(map__74577);
var msg = map__74577__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74577__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74577__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74578(s__74579){
return (new cljs.core.LazySeq(null,(function (){
var s__74579__$1 = s__74579;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74579__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__74584 = cljs.core.first(xs__6308__auto__);
var map__74584__$1 = cljs.core.__destructure_map(map__74584);
var src = map__74584__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74584__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__74579__$1,map__74584,map__74584__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__74577,map__74577__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74578_$_iter__74580(s__74581){
return (new cljs.core.LazySeq(null,((function (s__74579__$1,map__74584,map__74584__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__74577,map__74577__$1,msg,info,reload_info){
return (function (){
var s__74581__$1 = s__74581;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__74581__$1);
if(temp__5753__auto____$1){
var s__74581__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74581__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74581__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74583 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74582 = (0);
while(true){
if((i__74582 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__74582);
cljs.core.chunk_append(b__74583,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__75227 = (i__74582 + (1));
i__74582 = G__75227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74583),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74578_$_iter__74580(cljs.core.chunk_rest(s__74581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74583),null);
}
} else {
var warning = cljs.core.first(s__74581__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74578_$_iter__74580(cljs.core.rest(s__74581__$2)));
}
} else {
return null;
}
break;
}
});})(s__74579__$1,map__74584,map__74584__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__74577,map__74577__$1,msg,info,reload_info))
,null,null));
});})(s__74579__$1,map__74584,map__74584__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__74577,map__74577__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74578(cljs.core.rest(s__74579__$1)));
} else {
var G__75230 = cljs.core.rest(s__74579__$1);
s__74579__$1 = G__75230;
continue;
}
} else {
var G__75231 = cljs.core.rest(s__74579__$1);
s__74579__$1 = G__75231;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__74606_75232 = cljs.core.seq(warnings);
var chunk__74607_75233 = null;
var count__74608_75234 = (0);
var i__74609_75235 = (0);
while(true){
if((i__74609_75235 < count__74608_75234)){
var map__74612_75236 = chunk__74607_75233.cljs$core$IIndexed$_nth$arity$2(null,i__74609_75235);
var map__74612_75237__$1 = cljs.core.__destructure_map(map__74612_75236);
var w_75238 = map__74612_75237__$1;
var msg_75239__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74612_75237__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74612_75237__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74612_75237__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74612_75237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75242)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75240),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75241),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75239__$1)].join(''));


var G__75245 = seq__74606_75232;
var G__75246 = chunk__74607_75233;
var G__75247 = count__74608_75234;
var G__75248 = (i__74609_75235 + (1));
seq__74606_75232 = G__75245;
chunk__74607_75233 = G__75246;
count__74608_75234 = G__75247;
i__74609_75235 = G__75248;
continue;
} else {
var temp__5753__auto___75249 = cljs.core.seq(seq__74606_75232);
if(temp__5753__auto___75249){
var seq__74606_75250__$1 = temp__5753__auto___75249;
if(cljs.core.chunked_seq_QMARK_(seq__74606_75250__$1)){
var c__4679__auto___75251 = cljs.core.chunk_first(seq__74606_75250__$1);
var G__75252 = cljs.core.chunk_rest(seq__74606_75250__$1);
var G__75253 = c__4679__auto___75251;
var G__75254 = cljs.core.count(c__4679__auto___75251);
var G__75255 = (0);
seq__74606_75232 = G__75252;
chunk__74607_75233 = G__75253;
count__74608_75234 = G__75254;
i__74609_75235 = G__75255;
continue;
} else {
var map__74616_75256 = cljs.core.first(seq__74606_75250__$1);
var map__74616_75257__$1 = cljs.core.__destructure_map(map__74616_75256);
var w_75258 = map__74616_75257__$1;
var msg_75259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74616_75257__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74616_75257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74616_75257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74616_75257__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75262)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75260),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75261),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75259__$1)].join(''));


var G__75268 = cljs.core.next(seq__74606_75250__$1);
var G__75269 = null;
var G__75270 = (0);
var G__75271 = (0);
seq__74606_75232 = G__75268;
chunk__74607_75233 = G__75269;
count__74608_75234 = G__75270;
i__74609_75235 = G__75271;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__74574_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__74574_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__74628){
var map__74629 = p__74628;
var map__74629__$1 = cljs.core.__destructure_map(map__74629);
var msg = map__74629__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74629__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74629__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__74630 = cljs.core.seq(updates);
var chunk__74632 = null;
var count__74633 = (0);
var i__74634 = (0);
while(true){
if((i__74634 < count__74633)){
var path = chunk__74632.cljs$core$IIndexed$_nth$arity$2(null,i__74634);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74819_75282 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74823_75283 = null;
var count__74824_75284 = (0);
var i__74825_75285 = (0);
while(true){
if((i__74825_75285 < count__74824_75284)){
var node_75286 = chunk__74823_75283.cljs$core$IIndexed$_nth$arity$2(null,i__74825_75285);
if(cljs.core.not(node_75286.shadow$old)){
var path_match_75287 = shadow.cljs.devtools.client.browser.match_paths(node_75286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75287)){
var new_link_75288 = (function (){var G__74874 = node_75286.cloneNode(true);
G__74874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74874;
})();
(node_75286.shadow$old = true);

(new_link_75288.onload = ((function (seq__74819_75282,chunk__74823_75283,count__74824_75284,i__74825_75285,seq__74630,chunk__74632,count__74633,i__74634,new_link_75288,path_match_75287,node_75286,path,map__74629,map__74629__$1,msg,updates,reload_info){
return (function (e){
var seq__74876_75289 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74878_75290 = null;
var count__74879_75291 = (0);
var i__74880_75292 = (0);
while(true){
if((i__74880_75292 < count__74879_75291)){
var map__74884_75293 = chunk__74878_75290.cljs$core$IIndexed$_nth$arity$2(null,i__74880_75292);
var map__74884_75294__$1 = cljs.core.__destructure_map(map__74884_75293);
var task_75295 = map__74884_75294__$1;
var fn_str_75296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74884_75294__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74884_75294__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75298 = goog.getObjectByName(fn_str_75296,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75297)].join(''));

(fn_obj_75298.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75298.cljs$core$IFn$_invoke$arity$2(path,new_link_75288) : fn_obj_75298.call(null,path,new_link_75288));


var G__75299 = seq__74876_75289;
var G__75300 = chunk__74878_75290;
var G__75301 = count__74879_75291;
var G__75302 = (i__74880_75292 + (1));
seq__74876_75289 = G__75299;
chunk__74878_75290 = G__75300;
count__74879_75291 = G__75301;
i__74880_75292 = G__75302;
continue;
} else {
var temp__5753__auto___75303 = cljs.core.seq(seq__74876_75289);
if(temp__5753__auto___75303){
var seq__74876_75304__$1 = temp__5753__auto___75303;
if(cljs.core.chunked_seq_QMARK_(seq__74876_75304__$1)){
var c__4679__auto___75305 = cljs.core.chunk_first(seq__74876_75304__$1);
var G__75306 = cljs.core.chunk_rest(seq__74876_75304__$1);
var G__75307 = c__4679__auto___75305;
var G__75308 = cljs.core.count(c__4679__auto___75305);
var G__75309 = (0);
seq__74876_75289 = G__75306;
chunk__74878_75290 = G__75307;
count__74879_75291 = G__75308;
i__74880_75292 = G__75309;
continue;
} else {
var map__74885_75310 = cljs.core.first(seq__74876_75304__$1);
var map__74885_75311__$1 = cljs.core.__destructure_map(map__74885_75310);
var task_75312 = map__74885_75311__$1;
var fn_str_75313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74885_75311__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74885_75311__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75315 = goog.getObjectByName(fn_str_75313,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75314)].join(''));

(fn_obj_75315.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75315.cljs$core$IFn$_invoke$arity$2(path,new_link_75288) : fn_obj_75315.call(null,path,new_link_75288));


var G__75317 = cljs.core.next(seq__74876_75304__$1);
var G__75318 = null;
var G__75319 = (0);
var G__75320 = (0);
seq__74876_75289 = G__75317;
chunk__74878_75290 = G__75318;
count__74879_75291 = G__75319;
i__74880_75292 = G__75320;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75286);
});})(seq__74819_75282,chunk__74823_75283,count__74824_75284,i__74825_75285,seq__74630,chunk__74632,count__74633,i__74634,new_link_75288,path_match_75287,node_75286,path,map__74629,map__74629__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75287], 0));

goog.dom.insertSiblingAfter(new_link_75288,node_75286);


var G__75322 = seq__74819_75282;
var G__75323 = chunk__74823_75283;
var G__75324 = count__74824_75284;
var G__75325 = (i__74825_75285 + (1));
seq__74819_75282 = G__75322;
chunk__74823_75283 = G__75323;
count__74824_75284 = G__75324;
i__74825_75285 = G__75325;
continue;
} else {
var G__75326 = seq__74819_75282;
var G__75327 = chunk__74823_75283;
var G__75328 = count__74824_75284;
var G__75329 = (i__74825_75285 + (1));
seq__74819_75282 = G__75326;
chunk__74823_75283 = G__75327;
count__74824_75284 = G__75328;
i__74825_75285 = G__75329;
continue;
}
} else {
var G__75330 = seq__74819_75282;
var G__75331 = chunk__74823_75283;
var G__75332 = count__74824_75284;
var G__75333 = (i__74825_75285 + (1));
seq__74819_75282 = G__75330;
chunk__74823_75283 = G__75331;
count__74824_75284 = G__75332;
i__74825_75285 = G__75333;
continue;
}
} else {
var temp__5753__auto___75334 = cljs.core.seq(seq__74819_75282);
if(temp__5753__auto___75334){
var seq__74819_75335__$1 = temp__5753__auto___75334;
if(cljs.core.chunked_seq_QMARK_(seq__74819_75335__$1)){
var c__4679__auto___75336 = cljs.core.chunk_first(seq__74819_75335__$1);
var G__75337 = cljs.core.chunk_rest(seq__74819_75335__$1);
var G__75338 = c__4679__auto___75336;
var G__75339 = cljs.core.count(c__4679__auto___75336);
var G__75340 = (0);
seq__74819_75282 = G__75337;
chunk__74823_75283 = G__75338;
count__74824_75284 = G__75339;
i__74825_75285 = G__75340;
continue;
} else {
var node_75341 = cljs.core.first(seq__74819_75335__$1);
if(cljs.core.not(node_75341.shadow$old)){
var path_match_75342 = shadow.cljs.devtools.client.browser.match_paths(node_75341.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75342)){
var new_link_75343 = (function (){var G__74889 = node_75341.cloneNode(true);
G__74889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75342),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74889;
})();
(node_75341.shadow$old = true);

(new_link_75343.onload = ((function (seq__74819_75282,chunk__74823_75283,count__74824_75284,i__74825_75285,seq__74630,chunk__74632,count__74633,i__74634,new_link_75343,path_match_75342,node_75341,seq__74819_75335__$1,temp__5753__auto___75334,path,map__74629,map__74629__$1,msg,updates,reload_info){
return (function (e){
var seq__74890_75344 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74892_75345 = null;
var count__74893_75346 = (0);
var i__74894_75347 = (0);
while(true){
if((i__74894_75347 < count__74893_75346)){
var map__74917_75348 = chunk__74892_75345.cljs$core$IIndexed$_nth$arity$2(null,i__74894_75347);
var map__74917_75349__$1 = cljs.core.__destructure_map(map__74917_75348);
var task_75350 = map__74917_75349__$1;
var fn_str_75351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74917_75349__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74917_75349__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75353 = goog.getObjectByName(fn_str_75351,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75352)].join(''));

(fn_obj_75353.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75353.cljs$core$IFn$_invoke$arity$2(path,new_link_75343) : fn_obj_75353.call(null,path,new_link_75343));


var G__75362 = seq__74890_75344;
var G__75363 = chunk__74892_75345;
var G__75364 = count__74893_75346;
var G__75365 = (i__74894_75347 + (1));
seq__74890_75344 = G__75362;
chunk__74892_75345 = G__75363;
count__74893_75346 = G__75364;
i__74894_75347 = G__75365;
continue;
} else {
var temp__5753__auto___75366__$1 = cljs.core.seq(seq__74890_75344);
if(temp__5753__auto___75366__$1){
var seq__74890_75367__$1 = temp__5753__auto___75366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74890_75367__$1)){
var c__4679__auto___75368 = cljs.core.chunk_first(seq__74890_75367__$1);
var G__75369 = cljs.core.chunk_rest(seq__74890_75367__$1);
var G__75370 = c__4679__auto___75368;
var G__75371 = cljs.core.count(c__4679__auto___75368);
var G__75372 = (0);
seq__74890_75344 = G__75369;
chunk__74892_75345 = G__75370;
count__74893_75346 = G__75371;
i__74894_75347 = G__75372;
continue;
} else {
var map__74922_75373 = cljs.core.first(seq__74890_75367__$1);
var map__74922_75374__$1 = cljs.core.__destructure_map(map__74922_75373);
var task_75375 = map__74922_75374__$1;
var fn_str_75376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74922_75374__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74922_75374__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75378 = goog.getObjectByName(fn_str_75376,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75377)].join(''));

(fn_obj_75378.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75378.cljs$core$IFn$_invoke$arity$2(path,new_link_75343) : fn_obj_75378.call(null,path,new_link_75343));


var G__75379 = cljs.core.next(seq__74890_75367__$1);
var G__75380 = null;
var G__75381 = (0);
var G__75382 = (0);
seq__74890_75344 = G__75379;
chunk__74892_75345 = G__75380;
count__74893_75346 = G__75381;
i__74894_75347 = G__75382;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75341);
});})(seq__74819_75282,chunk__74823_75283,count__74824_75284,i__74825_75285,seq__74630,chunk__74632,count__74633,i__74634,new_link_75343,path_match_75342,node_75341,seq__74819_75335__$1,temp__5753__auto___75334,path,map__74629,map__74629__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75342], 0));

goog.dom.insertSiblingAfter(new_link_75343,node_75341);


var G__75383 = cljs.core.next(seq__74819_75335__$1);
var G__75384 = null;
var G__75385 = (0);
var G__75386 = (0);
seq__74819_75282 = G__75383;
chunk__74823_75283 = G__75384;
count__74824_75284 = G__75385;
i__74825_75285 = G__75386;
continue;
} else {
var G__75387 = cljs.core.next(seq__74819_75335__$1);
var G__75388 = null;
var G__75389 = (0);
var G__75390 = (0);
seq__74819_75282 = G__75387;
chunk__74823_75283 = G__75388;
count__74824_75284 = G__75389;
i__74825_75285 = G__75390;
continue;
}
} else {
var G__75391 = cljs.core.next(seq__74819_75335__$1);
var G__75392 = null;
var G__75393 = (0);
var G__75394 = (0);
seq__74819_75282 = G__75391;
chunk__74823_75283 = G__75392;
count__74824_75284 = G__75393;
i__74825_75285 = G__75394;
continue;
}
}
} else {
}
}
break;
}


var G__75395 = seq__74630;
var G__75396 = chunk__74632;
var G__75397 = count__74633;
var G__75398 = (i__74634 + (1));
seq__74630 = G__75395;
chunk__74632 = G__75396;
count__74633 = G__75397;
i__74634 = G__75398;
continue;
} else {
var G__75399 = seq__74630;
var G__75400 = chunk__74632;
var G__75401 = count__74633;
var G__75402 = (i__74634 + (1));
seq__74630 = G__75399;
chunk__74632 = G__75400;
count__74633 = G__75401;
i__74634 = G__75402;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74630);
if(temp__5753__auto__){
var seq__74630__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74630__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74630__$1);
var G__75403 = cljs.core.chunk_rest(seq__74630__$1);
var G__75404 = c__4679__auto__;
var G__75405 = cljs.core.count(c__4679__auto__);
var G__75406 = (0);
seq__74630 = G__75403;
chunk__74632 = G__75404;
count__74633 = G__75405;
i__74634 = G__75406;
continue;
} else {
var path = cljs.core.first(seq__74630__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74929_75407 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74933_75408 = null;
var count__74934_75409 = (0);
var i__74935_75410 = (0);
while(true){
if((i__74935_75410 < count__74934_75409)){
var node_75411 = chunk__74933_75408.cljs$core$IIndexed$_nth$arity$2(null,i__74935_75410);
if(cljs.core.not(node_75411.shadow$old)){
var path_match_75412 = shadow.cljs.devtools.client.browser.match_paths(node_75411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75412)){
var new_link_75413 = (function (){var G__74993 = node_75411.cloneNode(true);
G__74993.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74993;
})();
(node_75411.shadow$old = true);

(new_link_75413.onload = ((function (seq__74929_75407,chunk__74933_75408,count__74934_75409,i__74935_75410,seq__74630,chunk__74632,count__74633,i__74634,new_link_75413,path_match_75412,node_75411,path,seq__74630__$1,temp__5753__auto__,map__74629,map__74629__$1,msg,updates,reload_info){
return (function (e){
var seq__74994_75415 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__74996_75416 = null;
var count__74997_75417 = (0);
var i__74998_75418 = (0);
while(true){
if((i__74998_75418 < count__74997_75417)){
var map__75003_75419 = chunk__74996_75416.cljs$core$IIndexed$_nth$arity$2(null,i__74998_75418);
var map__75003_75420__$1 = cljs.core.__destructure_map(map__75003_75419);
var task_75421 = map__75003_75420__$1;
var fn_str_75422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75003_75420__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75003_75420__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75424 = goog.getObjectByName(fn_str_75422,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75423)].join(''));

(fn_obj_75424.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75424.cljs$core$IFn$_invoke$arity$2(path,new_link_75413) : fn_obj_75424.call(null,path,new_link_75413));


var G__75425 = seq__74994_75415;
var G__75426 = chunk__74996_75416;
var G__75427 = count__74997_75417;
var G__75428 = (i__74998_75418 + (1));
seq__74994_75415 = G__75425;
chunk__74996_75416 = G__75426;
count__74997_75417 = G__75427;
i__74998_75418 = G__75428;
continue;
} else {
var temp__5753__auto___75429__$1 = cljs.core.seq(seq__74994_75415);
if(temp__5753__auto___75429__$1){
var seq__74994_75430__$1 = temp__5753__auto___75429__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74994_75430__$1)){
var c__4679__auto___75431 = cljs.core.chunk_first(seq__74994_75430__$1);
var G__75432 = cljs.core.chunk_rest(seq__74994_75430__$1);
var G__75433 = c__4679__auto___75431;
var G__75434 = cljs.core.count(c__4679__auto___75431);
var G__75435 = (0);
seq__74994_75415 = G__75432;
chunk__74996_75416 = G__75433;
count__74997_75417 = G__75434;
i__74998_75418 = G__75435;
continue;
} else {
var map__75004_75436 = cljs.core.first(seq__74994_75430__$1);
var map__75004_75437__$1 = cljs.core.__destructure_map(map__75004_75436);
var task_75438 = map__75004_75437__$1;
var fn_str_75439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75004_75437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75004_75437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75441 = goog.getObjectByName(fn_str_75439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75440)].join(''));

(fn_obj_75441.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75441.cljs$core$IFn$_invoke$arity$2(path,new_link_75413) : fn_obj_75441.call(null,path,new_link_75413));


var G__75442 = cljs.core.next(seq__74994_75430__$1);
var G__75443 = null;
var G__75444 = (0);
var G__75445 = (0);
seq__74994_75415 = G__75442;
chunk__74996_75416 = G__75443;
count__74997_75417 = G__75444;
i__74998_75418 = G__75445;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75411);
});})(seq__74929_75407,chunk__74933_75408,count__74934_75409,i__74935_75410,seq__74630,chunk__74632,count__74633,i__74634,new_link_75413,path_match_75412,node_75411,path,seq__74630__$1,temp__5753__auto__,map__74629,map__74629__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75412], 0));

goog.dom.insertSiblingAfter(new_link_75413,node_75411);


var G__75446 = seq__74929_75407;
var G__75447 = chunk__74933_75408;
var G__75448 = count__74934_75409;
var G__75449 = (i__74935_75410 + (1));
seq__74929_75407 = G__75446;
chunk__74933_75408 = G__75447;
count__74934_75409 = G__75448;
i__74935_75410 = G__75449;
continue;
} else {
var G__75450 = seq__74929_75407;
var G__75451 = chunk__74933_75408;
var G__75452 = count__74934_75409;
var G__75453 = (i__74935_75410 + (1));
seq__74929_75407 = G__75450;
chunk__74933_75408 = G__75451;
count__74934_75409 = G__75452;
i__74935_75410 = G__75453;
continue;
}
} else {
var G__75454 = seq__74929_75407;
var G__75455 = chunk__74933_75408;
var G__75456 = count__74934_75409;
var G__75457 = (i__74935_75410 + (1));
seq__74929_75407 = G__75454;
chunk__74933_75408 = G__75455;
count__74934_75409 = G__75456;
i__74935_75410 = G__75457;
continue;
}
} else {
var temp__5753__auto___75458__$1 = cljs.core.seq(seq__74929_75407);
if(temp__5753__auto___75458__$1){
var seq__74929_75459__$1 = temp__5753__auto___75458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74929_75459__$1)){
var c__4679__auto___75460 = cljs.core.chunk_first(seq__74929_75459__$1);
var G__75461 = cljs.core.chunk_rest(seq__74929_75459__$1);
var G__75462 = c__4679__auto___75460;
var G__75463 = cljs.core.count(c__4679__auto___75460);
var G__75464 = (0);
seq__74929_75407 = G__75461;
chunk__74933_75408 = G__75462;
count__74934_75409 = G__75463;
i__74935_75410 = G__75464;
continue;
} else {
var node_75465 = cljs.core.first(seq__74929_75459__$1);
if(cljs.core.not(node_75465.shadow$old)){
var path_match_75466 = shadow.cljs.devtools.client.browser.match_paths(node_75465.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75466)){
var new_link_75467 = (function (){var G__75008 = node_75465.cloneNode(true);
G__75008.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75466),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__75008;
})();
(node_75465.shadow$old = true);

(new_link_75467.onload = ((function (seq__74929_75407,chunk__74933_75408,count__74934_75409,i__74935_75410,seq__74630,chunk__74632,count__74633,i__74634,new_link_75467,path_match_75466,node_75465,seq__74929_75459__$1,temp__5753__auto___75458__$1,path,seq__74630__$1,temp__5753__auto__,map__74629,map__74629__$1,msg,updates,reload_info){
return (function (e){
var seq__75010_75468 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__75013_75469 = null;
var count__75014_75470 = (0);
var i__75015_75471 = (0);
while(true){
if((i__75015_75471 < count__75014_75470)){
var map__75037_75472 = chunk__75013_75469.cljs$core$IIndexed$_nth$arity$2(null,i__75015_75471);
var map__75037_75473__$1 = cljs.core.__destructure_map(map__75037_75472);
var task_75474 = map__75037_75473__$1;
var fn_str_75475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75037_75473__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75037_75473__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75477 = goog.getObjectByName(fn_str_75475,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75476)].join(''));

(fn_obj_75477.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75477.cljs$core$IFn$_invoke$arity$2(path,new_link_75467) : fn_obj_75477.call(null,path,new_link_75467));


var G__75478 = seq__75010_75468;
var G__75479 = chunk__75013_75469;
var G__75480 = count__75014_75470;
var G__75481 = (i__75015_75471 + (1));
seq__75010_75468 = G__75478;
chunk__75013_75469 = G__75479;
count__75014_75470 = G__75480;
i__75015_75471 = G__75481;
continue;
} else {
var temp__5753__auto___75482__$2 = cljs.core.seq(seq__75010_75468);
if(temp__5753__auto___75482__$2){
var seq__75010_75483__$1 = temp__5753__auto___75482__$2;
if(cljs.core.chunked_seq_QMARK_(seq__75010_75483__$1)){
var c__4679__auto___75484 = cljs.core.chunk_first(seq__75010_75483__$1);
var G__75485 = cljs.core.chunk_rest(seq__75010_75483__$1);
var G__75486 = c__4679__auto___75484;
var G__75487 = cljs.core.count(c__4679__auto___75484);
var G__75488 = (0);
seq__75010_75468 = G__75485;
chunk__75013_75469 = G__75486;
count__75014_75470 = G__75487;
i__75015_75471 = G__75488;
continue;
} else {
var map__75065_75489 = cljs.core.first(seq__75010_75483__$1);
var map__75065_75490__$1 = cljs.core.__destructure_map(map__75065_75489);
var task_75491 = map__75065_75490__$1;
var fn_str_75492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75065_75490__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_75493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75065_75490__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_75494 = goog.getObjectByName(fn_str_75492,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_75493)].join(''));

(fn_obj_75494.cljs$core$IFn$_invoke$arity$2 ? fn_obj_75494.cljs$core$IFn$_invoke$arity$2(path,new_link_75467) : fn_obj_75494.call(null,path,new_link_75467));


var G__75495 = cljs.core.next(seq__75010_75483__$1);
var G__75496 = null;
var G__75497 = (0);
var G__75498 = (0);
seq__75010_75468 = G__75495;
chunk__75013_75469 = G__75496;
count__75014_75470 = G__75497;
i__75015_75471 = G__75498;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_75465);
});})(seq__74929_75407,chunk__74933_75408,count__74934_75409,i__74935_75410,seq__74630,chunk__74632,count__74633,i__74634,new_link_75467,path_match_75466,node_75465,seq__74929_75459__$1,temp__5753__auto___75458__$1,path,seq__74630__$1,temp__5753__auto__,map__74629,map__74629__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75466], 0));

goog.dom.insertSiblingAfter(new_link_75467,node_75465);


var G__75499 = cljs.core.next(seq__74929_75459__$1);
var G__75500 = null;
var G__75501 = (0);
var G__75502 = (0);
seq__74929_75407 = G__75499;
chunk__74933_75408 = G__75500;
count__74934_75409 = G__75501;
i__74935_75410 = G__75502;
continue;
} else {
var G__75503 = cljs.core.next(seq__74929_75459__$1);
var G__75504 = null;
var G__75505 = (0);
var G__75506 = (0);
seq__74929_75407 = G__75503;
chunk__74933_75408 = G__75504;
count__74934_75409 = G__75505;
i__74935_75410 = G__75506;
continue;
}
} else {
var G__75507 = cljs.core.next(seq__74929_75459__$1);
var G__75508 = null;
var G__75509 = (0);
var G__75510 = (0);
seq__74929_75407 = G__75507;
chunk__74933_75408 = G__75508;
count__74934_75409 = G__75509;
i__74935_75410 = G__75510;
continue;
}
}
} else {
}
}
break;
}


var G__75511 = cljs.core.next(seq__74630__$1);
var G__75512 = null;
var G__75513 = (0);
var G__75514 = (0);
seq__74630 = G__75511;
chunk__74632 = G__75512;
count__74633 = G__75513;
i__74634 = G__75514;
continue;
} else {
var G__75515 = cljs.core.next(seq__74630__$1);
var G__75516 = null;
var G__75517 = (0);
var G__75518 = (0);
seq__74630 = G__75515;
chunk__74632 = G__75516;
count__74633 = G__75517;
i__74634 = G__75518;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__75071){
var map__75075 = p__75071;
var map__75075__$1 = cljs.core.__destructure_map(map__75075);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75075__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__75105){
var map__75107 = p__75105;
var map__75107__$1 = cljs.core.__destructure_map(map__75107);
var _ = map__75107__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75107__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__75114,done,error){
var map__75115 = p__75114;
var map__75115__$1 = cljs.core.__destructure_map(map__75115);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75115__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__75121,done,error){
var map__75122 = p__75121;
var map__75122__$1 = cljs.core.__destructure_map(map__75122);
var msg = map__75122__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75122__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75122__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75122__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__75130){
var map__75131 = p__75130;
var map__75131__$1 = cljs.core.__destructure_map(map__75131);
var src = map__75131__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75131__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__75132 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__75132) : done.call(null,G__75132));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__75133){
var map__75134 = p__75133;
var map__75134__$1 = cljs.core.__destructure_map(map__75134);
var msg__$1 = map__75134__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75134__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e75135){var ex = e75135;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__75139){
var map__75140 = p__75139;
var map__75140__$1 = cljs.core.__destructure_map(map__75140);
var env = map__75140__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75140__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__75165){
var map__75166 = p__75165;
var map__75166__$1 = cljs.core.__destructure_map(map__75166);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75166__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75166__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__75172){
var map__75173 = p__75172;
var map__75173__$1 = cljs.core.__destructure_map(map__75173);
var svc = map__75173__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75173__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
