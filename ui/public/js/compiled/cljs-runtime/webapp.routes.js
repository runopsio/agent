goog.provide('webapp.routes');
if((typeof webapp !== 'undefined') && (typeof webapp.routes !== 'undefined') && (typeof webapp.routes.panels !== 'undefined')){
} else {
webapp.routes.panels = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32389 = cljs.core.get_global_hierarchy;
return (fexpr__32389.cljs$core$IFn$_invoke$arity$0 ? fexpr__32389.cljs$core$IFn$_invoke$arity$0() : fexpr__32389.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-large","header.mb-large",1783789985),"Page not found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://giphy.com/embed/hEc4k5pN17GZq",new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),true], null)], null)], null);
}));
webapp.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.PersistentHashMap.fromArrays(["","quickstarts","slack-integration","tasks","settings","auth/callback","auth","about","agents","users","targets","signup","login"],[new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"quickstarts","quickstarts",2071659840),new cljs.core.Keyword(null,"slack-integration","slack-integration",1878230232),cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"tasks","tasks",-1754368880),"/new",new cljs.core.Keyword(null,"new-task","new-task",-939876740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"task-detail","task-detail",1898516132)]),new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"settings","settings",1556144875),"/slack-integration/callback",new cljs.core.Keyword(null,"slack-cb","slack-cb",321604494)], null),new cljs.core.Keyword(null,"auth-callback","auth-callback",-710517747),new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"agents","agents",-1112413700),new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"targets","targets",2014963406)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/new",new cljs.core.Keyword(null,"target-create","target-create",43273736)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"target-name","target-name",-1836829889),"/tasks/new"], null),new cljs.core.Keyword(null,"new-task-with-target","new-task-with-target",-1243558041)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"target-edit","target-edit",1681017725)], null)], null),new cljs.core.Keyword(null,"signup","signup",1961016747),new cljs.core.Keyword(null,"login","login",55217519)])], null));
webapp.routes.query_params_parser = (function webapp$routes$query_params_parser(queries){
var url_search_params = (new URLSearchParams(cljs.core.clj__GT_js(queries)));
if((!(cljs.core.empty_QMARK_(url_search_params.toString())))){
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_search_params.toString())].join('');
} else {
return "";
}
});
webapp.routes.parse = (function webapp$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(webapp.routes.routes),url);
});
webapp.routes.url_for = (function webapp$routes$url_for(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32398 = arguments.length;
var i__4865__auto___32399 = (0);
while(true){
if((i__4865__auto___32399 < len__4864__auto___32398)){
args__4870__auto__.push((arguments[i__4865__auto___32399]));

var G__32400 = (i__4865__auto___32399 + (1));
i__4865__auto___32399 = G__32400;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return webapp.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(webapp.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(webapp.routes.routes)], null),cljs.core.flatten(args)));
}));

(webapp.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webapp.routes.url_for.cljs$lang$applyTo = (function (seq32390){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32390));
}));

webapp.routes.dispatch = (function webapp$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-active-panel","webapp.events/set-active-panel",-762875390),panel], null));
});
if((typeof webapp !== 'undefined') && (typeof webapp.routes !== 'undefined') && (typeof webapp.routes.history !== 'undefined')){
} else {
webapp.routes.history = pushy.core.pushy(webapp.routes.dispatch,webapp.routes.parse);
}
webapp.routes.navigate_BANG_ = (function webapp$routes$navigate_BANG_(config){
var uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webapp.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(config))].join('');
return webapp.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,uri);
});
webapp.routes.start_BANG_ = (function webapp$routes$start_BANG_(){
return webapp.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (config){
return webapp.routes.navigate_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"query-params","query-params",900640534),webapp.routes.query_params_parser(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(config))], null));
}));

//# sourceMappingURL=webapp.routes.js.map
