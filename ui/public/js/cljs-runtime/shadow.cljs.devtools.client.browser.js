goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49197 = arguments.length;
var i__4865__auto___49198 = (0);
while(true){
if((i__4865__auto___49198 < len__4864__auto___49197)){
args__4870__auto__.push((arguments[i__4865__auto___49198]));

var G__49199 = (i__4865__auto___49198 + (1));
i__4865__auto___49198 = G__49199;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48481){
var G__48482 = cljs.core.first(seq48481);
var seq48481__$1 = cljs.core.next(seq48481);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48482,seq48481__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48495 = cljs.core.seq(sources);
var chunk__48496 = null;
var count__48497 = (0);
var i__48498 = (0);
while(true){
if((i__48498 < count__48497)){
var map__48526 = chunk__48496.cljs$core$IIndexed$_nth$arity$2(null,i__48498);
var map__48526__$1 = cljs.core.__destructure_map(map__48526);
var src = map__48526__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48526__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48526__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48526__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48527){var e_49200 = e48527;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49200);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49200.message)].join('')));
}

var G__49201 = seq__48495;
var G__49202 = chunk__48496;
var G__49203 = count__48497;
var G__49204 = (i__48498 + (1));
seq__48495 = G__49201;
chunk__48496 = G__49202;
count__48497 = G__49203;
i__48498 = G__49204;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48495);
if(temp__5753__auto__){
var seq__48495__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48495__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48495__$1);
var G__49206 = cljs.core.chunk_rest(seq__48495__$1);
var G__49207 = c__4679__auto__;
var G__49208 = cljs.core.count(c__4679__auto__);
var G__49209 = (0);
seq__48495 = G__49206;
chunk__48496 = G__49207;
count__48497 = G__49208;
i__48498 = G__49209;
continue;
} else {
var map__48528 = cljs.core.first(seq__48495__$1);
var map__48528__$1 = cljs.core.__destructure_map(map__48528);
var src = map__48528__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48528__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48529){var e_49213 = e48529;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49213);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49213.message)].join('')));
}

var G__49214 = cljs.core.next(seq__48495__$1);
var G__49215 = null;
var G__49216 = (0);
var G__49217 = (0);
seq__48495 = G__49214;
chunk__48496 = G__49215;
count__48497 = G__49216;
i__48498 = G__49217;
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
var seq__48530 = cljs.core.seq(js_requires);
var chunk__48531 = null;
var count__48532 = (0);
var i__48533 = (0);
while(true){
if((i__48533 < count__48532)){
var js_ns = chunk__48531.cljs$core$IIndexed$_nth$arity$2(null,i__48533);
var require_str_49218 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49218);


var G__49219 = seq__48530;
var G__49220 = chunk__48531;
var G__49221 = count__48532;
var G__49222 = (i__48533 + (1));
seq__48530 = G__49219;
chunk__48531 = G__49220;
count__48532 = G__49221;
i__48533 = G__49222;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48530);
if(temp__5753__auto__){
var seq__48530__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48530__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48530__$1);
var G__49223 = cljs.core.chunk_rest(seq__48530__$1);
var G__49224 = c__4679__auto__;
var G__49225 = cljs.core.count(c__4679__auto__);
var G__49226 = (0);
seq__48530 = G__49223;
chunk__48531 = G__49224;
count__48532 = G__49225;
i__48533 = G__49226;
continue;
} else {
var js_ns = cljs.core.first(seq__48530__$1);
var require_str_49227 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49227);


var G__49228 = cljs.core.next(seq__48530__$1);
var G__49229 = null;
var G__49230 = (0);
var G__49231 = (0);
seq__48530 = G__49228;
chunk__48531 = G__49229;
count__48532 = G__49230;
i__48533 = G__49231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48535){
var map__48536 = p__48535;
var map__48536__$1 = cljs.core.__destructure_map(map__48536);
var msg = map__48536__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48536__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48537(s__48538){
return (new cljs.core.LazySeq(null,(function (){
var s__48538__$1 = s__48538;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48538__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__48544 = cljs.core.first(xs__6308__auto__);
var map__48544__$1 = cljs.core.__destructure_map(map__48544);
var src = map__48544__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__48538__$1,map__48544,map__48544__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48536,map__48536__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48537_$_iter__48539(s__48540){
return (new cljs.core.LazySeq(null,((function (s__48538__$1,map__48544,map__48544__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48536,map__48536__$1,msg,info,reload_info){
return (function (){
var s__48540__$1 = s__48540;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48540__$1);
if(temp__5753__auto____$1){
var s__48540__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48540__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48540__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48542 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48541 = (0);
while(true){
if((i__48541 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__48541);
cljs.core.chunk_append(b__48542,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49232 = (i__48541 + (1));
i__48541 = G__49232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48542),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48537_$_iter__48539(cljs.core.chunk_rest(s__48540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48542),null);
}
} else {
var warning = cljs.core.first(s__48540__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48537_$_iter__48539(cljs.core.rest(s__48540__$2)));
}
} else {
return null;
}
break;
}
});})(s__48538__$1,map__48544,map__48544__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48536,map__48536__$1,msg,info,reload_info))
,null,null));
});})(s__48538__$1,map__48544,map__48544__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48536,map__48536__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48537(cljs.core.rest(s__48538__$1)));
} else {
var G__49234 = cljs.core.rest(s__48538__$1);
s__48538__$1 = G__49234;
continue;
}
} else {
var G__49235 = cljs.core.rest(s__48538__$1);
s__48538__$1 = G__49235;
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
var seq__48546_49236 = cljs.core.seq(warnings);
var chunk__48547_49237 = null;
var count__48548_49238 = (0);
var i__48549_49239 = (0);
while(true){
if((i__48549_49239 < count__48548_49238)){
var map__48556_49240 = chunk__48547_49237.cljs$core$IIndexed$_nth$arity$2(null,i__48549_49239);
var map__48556_49241__$1 = cljs.core.__destructure_map(map__48556_49240);
var w_49242 = map__48556_49241__$1;
var msg_49243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556_49241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556_49241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556_49241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556_49241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49243__$1)].join(''));


var G__49247 = seq__48546_49236;
var G__49248 = chunk__48547_49237;
var G__49249 = count__48548_49238;
var G__49250 = (i__48549_49239 + (1));
seq__48546_49236 = G__49247;
chunk__48547_49237 = G__49248;
count__48548_49238 = G__49249;
i__48549_49239 = G__49250;
continue;
} else {
var temp__5753__auto___49251 = cljs.core.seq(seq__48546_49236);
if(temp__5753__auto___49251){
var seq__48546_49252__$1 = temp__5753__auto___49251;
if(cljs.core.chunked_seq_QMARK_(seq__48546_49252__$1)){
var c__4679__auto___49254 = cljs.core.chunk_first(seq__48546_49252__$1);
var G__49255 = cljs.core.chunk_rest(seq__48546_49252__$1);
var G__49256 = c__4679__auto___49254;
var G__49257 = cljs.core.count(c__4679__auto___49254);
var G__49258 = (0);
seq__48546_49236 = G__49255;
chunk__48547_49237 = G__49256;
count__48548_49238 = G__49257;
i__48549_49239 = G__49258;
continue;
} else {
var map__48557_49259 = cljs.core.first(seq__48546_49252__$1);
var map__48557_49260__$1 = cljs.core.__destructure_map(map__48557_49259);
var w_49261 = map__48557_49260__$1;
var msg_49262__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557_49260__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557_49260__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557_49260__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557_49260__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49265)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49263),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49264),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49262__$1)].join(''));


var G__49267 = cljs.core.next(seq__48546_49252__$1);
var G__49268 = null;
var G__49269 = (0);
var G__49270 = (0);
seq__48546_49236 = G__49267;
chunk__48547_49237 = G__49268;
count__48548_49238 = G__49269;
i__48549_49239 = G__49270;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48534_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48534_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48572){
var map__48573 = p__48572;
var map__48573__$1 = cljs.core.__destructure_map(map__48573);
var msg = map__48573__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48577 = cljs.core.seq(updates);
var chunk__48579 = null;
var count__48580 = (0);
var i__48581 = (0);
while(true){
if((i__48581 < count__48580)){
var path = chunk__48579.cljs$core$IIndexed$_nth$arity$2(null,i__48581);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48936_49275 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48940_49276 = null;
var count__48941_49277 = (0);
var i__48942_49278 = (0);
while(true){
if((i__48942_49278 < count__48941_49277)){
var node_49279 = chunk__48940_49276.cljs$core$IIndexed$_nth$arity$2(null,i__48942_49278);
if(cljs.core.not(node_49279.shadow$old)){
var path_match_49280 = shadow.cljs.devtools.client.browser.match_paths(node_49279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49280)){
var new_link_49281 = (function (){var G__49010 = node_49279.cloneNode(true);
G__49010.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49280),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49010;
})();
(node_49279.shadow$old = true);

(new_link_49281.onload = ((function (seq__48936_49275,chunk__48940_49276,count__48941_49277,i__48942_49278,seq__48577,chunk__48579,count__48580,i__48581,new_link_49281,path_match_49280,node_49279,path,map__48573,map__48573__$1,msg,updates,reload_info){
return (function (e){
var seq__49011_49282 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49013_49283 = null;
var count__49014_49284 = (0);
var i__49015_49285 = (0);
while(true){
if((i__49015_49285 < count__49014_49284)){
var map__49020_49286 = chunk__49013_49283.cljs$core$IIndexed$_nth$arity$2(null,i__49015_49285);
var map__49020_49287__$1 = cljs.core.__destructure_map(map__49020_49286);
var task_49288 = map__49020_49287__$1;
var fn_str_49289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49020_49287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49020_49287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49292 = goog.getObjectByName(fn_str_49289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49290)].join(''));

(fn_obj_49292.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49292.cljs$core$IFn$_invoke$arity$2(path,new_link_49281) : fn_obj_49292.call(null,path,new_link_49281));


var G__49293 = seq__49011_49282;
var G__49294 = chunk__49013_49283;
var G__49295 = count__49014_49284;
var G__49296 = (i__49015_49285 + (1));
seq__49011_49282 = G__49293;
chunk__49013_49283 = G__49294;
count__49014_49284 = G__49295;
i__49015_49285 = G__49296;
continue;
} else {
var temp__5753__auto___49297 = cljs.core.seq(seq__49011_49282);
if(temp__5753__auto___49297){
var seq__49011_49298__$1 = temp__5753__auto___49297;
if(cljs.core.chunked_seq_QMARK_(seq__49011_49298__$1)){
var c__4679__auto___49299 = cljs.core.chunk_first(seq__49011_49298__$1);
var G__49300 = cljs.core.chunk_rest(seq__49011_49298__$1);
var G__49301 = c__4679__auto___49299;
var G__49302 = cljs.core.count(c__4679__auto___49299);
var G__49303 = (0);
seq__49011_49282 = G__49300;
chunk__49013_49283 = G__49301;
count__49014_49284 = G__49302;
i__49015_49285 = G__49303;
continue;
} else {
var map__49021_49304 = cljs.core.first(seq__49011_49298__$1);
var map__49021_49305__$1 = cljs.core.__destructure_map(map__49021_49304);
var task_49306 = map__49021_49305__$1;
var fn_str_49307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021_49305__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49021_49305__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49309 = goog.getObjectByName(fn_str_49307,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49308)].join(''));

(fn_obj_49309.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49309.cljs$core$IFn$_invoke$arity$2(path,new_link_49281) : fn_obj_49309.call(null,path,new_link_49281));


var G__49310 = cljs.core.next(seq__49011_49298__$1);
var G__49311 = null;
var G__49312 = (0);
var G__49313 = (0);
seq__49011_49282 = G__49310;
chunk__49013_49283 = G__49311;
count__49014_49284 = G__49312;
i__49015_49285 = G__49313;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49279);
});})(seq__48936_49275,chunk__48940_49276,count__48941_49277,i__48942_49278,seq__48577,chunk__48579,count__48580,i__48581,new_link_49281,path_match_49280,node_49279,path,map__48573,map__48573__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49280], 0));

goog.dom.insertSiblingAfter(new_link_49281,node_49279);


var G__49314 = seq__48936_49275;
var G__49315 = chunk__48940_49276;
var G__49316 = count__48941_49277;
var G__49317 = (i__48942_49278 + (1));
seq__48936_49275 = G__49314;
chunk__48940_49276 = G__49315;
count__48941_49277 = G__49316;
i__48942_49278 = G__49317;
continue;
} else {
var G__49318 = seq__48936_49275;
var G__49319 = chunk__48940_49276;
var G__49320 = count__48941_49277;
var G__49321 = (i__48942_49278 + (1));
seq__48936_49275 = G__49318;
chunk__48940_49276 = G__49319;
count__48941_49277 = G__49320;
i__48942_49278 = G__49321;
continue;
}
} else {
var G__49322 = seq__48936_49275;
var G__49323 = chunk__48940_49276;
var G__49324 = count__48941_49277;
var G__49325 = (i__48942_49278 + (1));
seq__48936_49275 = G__49322;
chunk__48940_49276 = G__49323;
count__48941_49277 = G__49324;
i__48942_49278 = G__49325;
continue;
}
} else {
var temp__5753__auto___49326 = cljs.core.seq(seq__48936_49275);
if(temp__5753__auto___49326){
var seq__48936_49327__$1 = temp__5753__auto___49326;
if(cljs.core.chunked_seq_QMARK_(seq__48936_49327__$1)){
var c__4679__auto___49328 = cljs.core.chunk_first(seq__48936_49327__$1);
var G__49329 = cljs.core.chunk_rest(seq__48936_49327__$1);
var G__49330 = c__4679__auto___49328;
var G__49331 = cljs.core.count(c__4679__auto___49328);
var G__49332 = (0);
seq__48936_49275 = G__49329;
chunk__48940_49276 = G__49330;
count__48941_49277 = G__49331;
i__48942_49278 = G__49332;
continue;
} else {
var node_49333 = cljs.core.first(seq__48936_49327__$1);
if(cljs.core.not(node_49333.shadow$old)){
var path_match_49334 = shadow.cljs.devtools.client.browser.match_paths(node_49333.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49334)){
var new_link_49335 = (function (){var G__49025 = node_49333.cloneNode(true);
G__49025.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49334),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49025;
})();
(node_49333.shadow$old = true);

(new_link_49335.onload = ((function (seq__48936_49275,chunk__48940_49276,count__48941_49277,i__48942_49278,seq__48577,chunk__48579,count__48580,i__48581,new_link_49335,path_match_49334,node_49333,seq__48936_49327__$1,temp__5753__auto___49326,path,map__48573,map__48573__$1,msg,updates,reload_info){
return (function (e){
var seq__49026_49337 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49028_49338 = null;
var count__49029_49339 = (0);
var i__49030_49340 = (0);
while(true){
if((i__49030_49340 < count__49029_49339)){
var map__49075_49341 = chunk__49028_49338.cljs$core$IIndexed$_nth$arity$2(null,i__49030_49340);
var map__49075_49342__$1 = cljs.core.__destructure_map(map__49075_49341);
var task_49343 = map__49075_49342__$1;
var fn_str_49344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49075_49342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49075_49342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49346 = goog.getObjectByName(fn_str_49344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49345)].join(''));

(fn_obj_49346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49346.cljs$core$IFn$_invoke$arity$2(path,new_link_49335) : fn_obj_49346.call(null,path,new_link_49335));


var G__49347 = seq__49026_49337;
var G__49348 = chunk__49028_49338;
var G__49349 = count__49029_49339;
var G__49350 = (i__49030_49340 + (1));
seq__49026_49337 = G__49347;
chunk__49028_49338 = G__49348;
count__49029_49339 = G__49349;
i__49030_49340 = G__49350;
continue;
} else {
var temp__5753__auto___49351__$1 = cljs.core.seq(seq__49026_49337);
if(temp__5753__auto___49351__$1){
var seq__49026_49352__$1 = temp__5753__auto___49351__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49026_49352__$1)){
var c__4679__auto___49353 = cljs.core.chunk_first(seq__49026_49352__$1);
var G__49354 = cljs.core.chunk_rest(seq__49026_49352__$1);
var G__49355 = c__4679__auto___49353;
var G__49356 = cljs.core.count(c__4679__auto___49353);
var G__49357 = (0);
seq__49026_49337 = G__49354;
chunk__49028_49338 = G__49355;
count__49029_49339 = G__49356;
i__49030_49340 = G__49357;
continue;
} else {
var map__49082_49358 = cljs.core.first(seq__49026_49352__$1);
var map__49082_49359__$1 = cljs.core.__destructure_map(map__49082_49358);
var task_49360 = map__49082_49359__$1;
var fn_str_49361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49082_49359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49082_49359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49364 = goog.getObjectByName(fn_str_49361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49362)].join(''));

(fn_obj_49364.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49364.cljs$core$IFn$_invoke$arity$2(path,new_link_49335) : fn_obj_49364.call(null,path,new_link_49335));


var G__49368 = cljs.core.next(seq__49026_49352__$1);
var G__49369 = null;
var G__49370 = (0);
var G__49371 = (0);
seq__49026_49337 = G__49368;
chunk__49028_49338 = G__49369;
count__49029_49339 = G__49370;
i__49030_49340 = G__49371;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49333);
});})(seq__48936_49275,chunk__48940_49276,count__48941_49277,i__48942_49278,seq__48577,chunk__48579,count__48580,i__48581,new_link_49335,path_match_49334,node_49333,seq__48936_49327__$1,temp__5753__auto___49326,path,map__48573,map__48573__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49334], 0));

goog.dom.insertSiblingAfter(new_link_49335,node_49333);


var G__49372 = cljs.core.next(seq__48936_49327__$1);
var G__49373 = null;
var G__49374 = (0);
var G__49375 = (0);
seq__48936_49275 = G__49372;
chunk__48940_49276 = G__49373;
count__48941_49277 = G__49374;
i__48942_49278 = G__49375;
continue;
} else {
var G__49376 = cljs.core.next(seq__48936_49327__$1);
var G__49377 = null;
var G__49378 = (0);
var G__49379 = (0);
seq__48936_49275 = G__49376;
chunk__48940_49276 = G__49377;
count__48941_49277 = G__49378;
i__48942_49278 = G__49379;
continue;
}
} else {
var G__49380 = cljs.core.next(seq__48936_49327__$1);
var G__49381 = null;
var G__49382 = (0);
var G__49383 = (0);
seq__48936_49275 = G__49380;
chunk__48940_49276 = G__49381;
count__48941_49277 = G__49382;
i__48942_49278 = G__49383;
continue;
}
}
} else {
}
}
break;
}


var G__49384 = seq__48577;
var G__49385 = chunk__48579;
var G__49386 = count__48580;
var G__49387 = (i__48581 + (1));
seq__48577 = G__49384;
chunk__48579 = G__49385;
count__48580 = G__49386;
i__48581 = G__49387;
continue;
} else {
var G__49388 = seq__48577;
var G__49389 = chunk__48579;
var G__49390 = count__48580;
var G__49391 = (i__48581 + (1));
seq__48577 = G__49388;
chunk__48579 = G__49389;
count__48580 = G__49390;
i__48581 = G__49391;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48577);
if(temp__5753__auto__){
var seq__48577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48577__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48577__$1);
var G__49392 = cljs.core.chunk_rest(seq__48577__$1);
var G__49393 = c__4679__auto__;
var G__49394 = cljs.core.count(c__4679__auto__);
var G__49395 = (0);
seq__48577 = G__49392;
chunk__48579 = G__49393;
count__48580 = G__49394;
i__48581 = G__49395;
continue;
} else {
var path = cljs.core.first(seq__48577__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49083_49396 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49087_49397 = null;
var count__49088_49398 = (0);
var i__49089_49399 = (0);
while(true){
if((i__49089_49399 < count__49088_49398)){
var node_49400 = chunk__49087_49397.cljs$core$IIndexed$_nth$arity$2(null,i__49089_49399);
if(cljs.core.not(node_49400.shadow$old)){
var path_match_49401 = shadow.cljs.devtools.client.browser.match_paths(node_49400.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49401)){
var new_link_49402 = (function (){var G__49124 = node_49400.cloneNode(true);
G__49124.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49401),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49124;
})();
(node_49400.shadow$old = true);

(new_link_49402.onload = ((function (seq__49083_49396,chunk__49087_49397,count__49088_49398,i__49089_49399,seq__48577,chunk__48579,count__48580,i__48581,new_link_49402,path_match_49401,node_49400,path,seq__48577__$1,temp__5753__auto__,map__48573,map__48573__$1,msg,updates,reload_info){
return (function (e){
var seq__49125_49403 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49127_49404 = null;
var count__49128_49405 = (0);
var i__49129_49406 = (0);
while(true){
if((i__49129_49406 < count__49128_49405)){
var map__49133_49407 = chunk__49127_49404.cljs$core$IIndexed$_nth$arity$2(null,i__49129_49406);
var map__49133_49408__$1 = cljs.core.__destructure_map(map__49133_49407);
var task_49409 = map__49133_49408__$1;
var fn_str_49410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49133_49408__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49133_49408__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49412 = goog.getObjectByName(fn_str_49410,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49411)].join(''));

(fn_obj_49412.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49412.cljs$core$IFn$_invoke$arity$2(path,new_link_49402) : fn_obj_49412.call(null,path,new_link_49402));


var G__49413 = seq__49125_49403;
var G__49414 = chunk__49127_49404;
var G__49415 = count__49128_49405;
var G__49416 = (i__49129_49406 + (1));
seq__49125_49403 = G__49413;
chunk__49127_49404 = G__49414;
count__49128_49405 = G__49415;
i__49129_49406 = G__49416;
continue;
} else {
var temp__5753__auto___49417__$1 = cljs.core.seq(seq__49125_49403);
if(temp__5753__auto___49417__$1){
var seq__49125_49418__$1 = temp__5753__auto___49417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49125_49418__$1)){
var c__4679__auto___49419 = cljs.core.chunk_first(seq__49125_49418__$1);
var G__49420 = cljs.core.chunk_rest(seq__49125_49418__$1);
var G__49421 = c__4679__auto___49419;
var G__49422 = cljs.core.count(c__4679__auto___49419);
var G__49423 = (0);
seq__49125_49403 = G__49420;
chunk__49127_49404 = G__49421;
count__49128_49405 = G__49422;
i__49129_49406 = G__49423;
continue;
} else {
var map__49134_49424 = cljs.core.first(seq__49125_49418__$1);
var map__49134_49425__$1 = cljs.core.__destructure_map(map__49134_49424);
var task_49426 = map__49134_49425__$1;
var fn_str_49427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49134_49425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49134_49425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49429 = goog.getObjectByName(fn_str_49427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49428)].join(''));

(fn_obj_49429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49429.cljs$core$IFn$_invoke$arity$2(path,new_link_49402) : fn_obj_49429.call(null,path,new_link_49402));


var G__49430 = cljs.core.next(seq__49125_49418__$1);
var G__49431 = null;
var G__49432 = (0);
var G__49433 = (0);
seq__49125_49403 = G__49430;
chunk__49127_49404 = G__49431;
count__49128_49405 = G__49432;
i__49129_49406 = G__49433;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49400);
});})(seq__49083_49396,chunk__49087_49397,count__49088_49398,i__49089_49399,seq__48577,chunk__48579,count__48580,i__48581,new_link_49402,path_match_49401,node_49400,path,seq__48577__$1,temp__5753__auto__,map__48573,map__48573__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49401], 0));

goog.dom.insertSiblingAfter(new_link_49402,node_49400);


var G__49434 = seq__49083_49396;
var G__49435 = chunk__49087_49397;
var G__49436 = count__49088_49398;
var G__49437 = (i__49089_49399 + (1));
seq__49083_49396 = G__49434;
chunk__49087_49397 = G__49435;
count__49088_49398 = G__49436;
i__49089_49399 = G__49437;
continue;
} else {
var G__49438 = seq__49083_49396;
var G__49439 = chunk__49087_49397;
var G__49440 = count__49088_49398;
var G__49441 = (i__49089_49399 + (1));
seq__49083_49396 = G__49438;
chunk__49087_49397 = G__49439;
count__49088_49398 = G__49440;
i__49089_49399 = G__49441;
continue;
}
} else {
var G__49442 = seq__49083_49396;
var G__49443 = chunk__49087_49397;
var G__49444 = count__49088_49398;
var G__49445 = (i__49089_49399 + (1));
seq__49083_49396 = G__49442;
chunk__49087_49397 = G__49443;
count__49088_49398 = G__49444;
i__49089_49399 = G__49445;
continue;
}
} else {
var temp__5753__auto___49446__$1 = cljs.core.seq(seq__49083_49396);
if(temp__5753__auto___49446__$1){
var seq__49083_49447__$1 = temp__5753__auto___49446__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49083_49447__$1)){
var c__4679__auto___49448 = cljs.core.chunk_first(seq__49083_49447__$1);
var G__49449 = cljs.core.chunk_rest(seq__49083_49447__$1);
var G__49450 = c__4679__auto___49448;
var G__49451 = cljs.core.count(c__4679__auto___49448);
var G__49452 = (0);
seq__49083_49396 = G__49449;
chunk__49087_49397 = G__49450;
count__49088_49398 = G__49451;
i__49089_49399 = G__49452;
continue;
} else {
var node_49453 = cljs.core.first(seq__49083_49447__$1);
if(cljs.core.not(node_49453.shadow$old)){
var path_match_49454 = shadow.cljs.devtools.client.browser.match_paths(node_49453.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49454)){
var new_link_49455 = (function (){var G__49135 = node_49453.cloneNode(true);
G__49135.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49454),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49135;
})();
(node_49453.shadow$old = true);

(new_link_49455.onload = ((function (seq__49083_49396,chunk__49087_49397,count__49088_49398,i__49089_49399,seq__48577,chunk__48579,count__48580,i__48581,new_link_49455,path_match_49454,node_49453,seq__49083_49447__$1,temp__5753__auto___49446__$1,path,seq__48577__$1,temp__5753__auto__,map__48573,map__48573__$1,msg,updates,reload_info){
return (function (e){
var seq__49136_49456 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49138_49457 = null;
var count__49139_49458 = (0);
var i__49140_49459 = (0);
while(true){
if((i__49140_49459 < count__49139_49458)){
var map__49146_49460 = chunk__49138_49457.cljs$core$IIndexed$_nth$arity$2(null,i__49140_49459);
var map__49146_49461__$1 = cljs.core.__destructure_map(map__49146_49460);
var task_49462 = map__49146_49461__$1;
var fn_str_49463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49146_49461__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49146_49461__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49465 = goog.getObjectByName(fn_str_49463,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49464)].join(''));

(fn_obj_49465.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49465.cljs$core$IFn$_invoke$arity$2(path,new_link_49455) : fn_obj_49465.call(null,path,new_link_49455));


var G__49466 = seq__49136_49456;
var G__49467 = chunk__49138_49457;
var G__49468 = count__49139_49458;
var G__49469 = (i__49140_49459 + (1));
seq__49136_49456 = G__49466;
chunk__49138_49457 = G__49467;
count__49139_49458 = G__49468;
i__49140_49459 = G__49469;
continue;
} else {
var temp__5753__auto___49470__$2 = cljs.core.seq(seq__49136_49456);
if(temp__5753__auto___49470__$2){
var seq__49136_49471__$1 = temp__5753__auto___49470__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49136_49471__$1)){
var c__4679__auto___49472 = cljs.core.chunk_first(seq__49136_49471__$1);
var G__49473 = cljs.core.chunk_rest(seq__49136_49471__$1);
var G__49474 = c__4679__auto___49472;
var G__49475 = cljs.core.count(c__4679__auto___49472);
var G__49476 = (0);
seq__49136_49456 = G__49473;
chunk__49138_49457 = G__49474;
count__49139_49458 = G__49475;
i__49140_49459 = G__49476;
continue;
} else {
var map__49157_49477 = cljs.core.first(seq__49136_49471__$1);
var map__49157_49478__$1 = cljs.core.__destructure_map(map__49157_49477);
var task_49479 = map__49157_49478__$1;
var fn_str_49480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49157_49478__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49157_49478__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49482 = goog.getObjectByName(fn_str_49480,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49481)].join(''));

(fn_obj_49482.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49482.cljs$core$IFn$_invoke$arity$2(path,new_link_49455) : fn_obj_49482.call(null,path,new_link_49455));


var G__49483 = cljs.core.next(seq__49136_49471__$1);
var G__49484 = null;
var G__49485 = (0);
var G__49486 = (0);
seq__49136_49456 = G__49483;
chunk__49138_49457 = G__49484;
count__49139_49458 = G__49485;
i__49140_49459 = G__49486;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49453);
});})(seq__49083_49396,chunk__49087_49397,count__49088_49398,i__49089_49399,seq__48577,chunk__48579,count__48580,i__48581,new_link_49455,path_match_49454,node_49453,seq__49083_49447__$1,temp__5753__auto___49446__$1,path,seq__48577__$1,temp__5753__auto__,map__48573,map__48573__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49454], 0));

goog.dom.insertSiblingAfter(new_link_49455,node_49453);


var G__49487 = cljs.core.next(seq__49083_49447__$1);
var G__49488 = null;
var G__49489 = (0);
var G__49490 = (0);
seq__49083_49396 = G__49487;
chunk__49087_49397 = G__49488;
count__49088_49398 = G__49489;
i__49089_49399 = G__49490;
continue;
} else {
var G__49491 = cljs.core.next(seq__49083_49447__$1);
var G__49492 = null;
var G__49493 = (0);
var G__49494 = (0);
seq__49083_49396 = G__49491;
chunk__49087_49397 = G__49492;
count__49088_49398 = G__49493;
i__49089_49399 = G__49494;
continue;
}
} else {
var G__49495 = cljs.core.next(seq__49083_49447__$1);
var G__49496 = null;
var G__49497 = (0);
var G__49498 = (0);
seq__49083_49396 = G__49495;
chunk__49087_49397 = G__49496;
count__49088_49398 = G__49497;
i__49089_49399 = G__49498;
continue;
}
}
} else {
}
}
break;
}


var G__49499 = cljs.core.next(seq__48577__$1);
var G__49500 = null;
var G__49501 = (0);
var G__49502 = (0);
seq__48577 = G__49499;
chunk__48579 = G__49500;
count__48580 = G__49501;
i__48581 = G__49502;
continue;
} else {
var G__49503 = cljs.core.next(seq__48577__$1);
var G__49504 = null;
var G__49505 = (0);
var G__49506 = (0);
seq__48577 = G__49503;
chunk__48579 = G__49504;
count__48580 = G__49505;
i__48581 = G__49506;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49162){
var map__49163 = p__49162;
var map__49163__$1 = cljs.core.__destructure_map(map__49163);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49168){
var map__49169 = p__49168;
var map__49169__$1 = cljs.core.__destructure_map(map__49169);
var _ = map__49169__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49169__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49170,done,error){
var map__49171 = p__49170;
var map__49171__$1 = cljs.core.__destructure_map(map__49171);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49171__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49172,done,error){
var map__49173 = p__49172;
var map__49173__$1 = cljs.core.__destructure_map(map__49173);
var msg = map__49173__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49173__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49173__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49173__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49174){
var map__49175 = p__49174;
var map__49175__$1 = cljs.core.__destructure_map(map__49175);
var src = map__49175__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49176 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49176) : done.call(null,G__49176));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49178){
var map__49179 = p__49178;
var map__49179__$1 = cljs.core.__destructure_map(map__49179);
var msg__$1 = map__49179__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49179__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49180){var ex = e49180;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49181){
var map__49182 = p__49181;
var map__49182__$1 = cljs.core.__destructure_map(map__49182);
var env = map__49182__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49182__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49190){
var map__49194 = p__49190;
var map__49194__$1 = cljs.core.__destructure_map(map__49194);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__49195){
var map__49196 = p__49195;
var map__49196__$1 = cljs.core.__destructure_map(map__49196);
var svc = map__49196__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49196__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
