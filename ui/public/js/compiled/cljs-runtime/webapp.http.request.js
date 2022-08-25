goog.provide('webapp.http.request');
webapp.http.request.error_handling = (function webapp$http$request$error_handling(error){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),error.message], null)], null));
});
/**
 * This functions has two possible outcomes:
 *   1 - When the status is 401 (Unauthorized), it saves the requested path so the user can be redirected to it later (see in [webapp.app] namespace, in auth-callback-panel function), then it dispatches the :logout event so the application clean up old tokens and ask to the user to login again;
 *   2 - when the status is 399 or below, it executes a on-failure function, that is provided by upperscope.
 */
webapp.http.request.not_ok = (function webapp$http$request$not_ok(p__31999){
var map__32000 = p__31999;
var map__32000__$1 = cljs.core.__destructure_map(map__32000);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(401))){
var pathname_32005 = window.location.pathname;
var search_32006 = window.location.search;
var __32007 = localStorage.setItem("redirect-after-auth",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathname_32005),cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_32006)].join(''));
var __32008__$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
} else {
}

if((status > (399))){
return (on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null));
} else {
return null;
}
});
if((typeof webapp !== 'undefined') && (typeof webapp.http !== 'undefined') && (typeof webapp.http.request !== 'undefined') && (typeof webapp.http.request.response_parser !== 'undefined')){
} else {
webapp.http.request.response_parser = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32001 = cljs.core.get_global_hierarchy;
return (fexpr__32001.cljs$core$IFn$_invoke$arity$0 ? fexpr__32001.cljs$core$IFn$_invoke$arity$0() : fexpr__32001.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.http.request","response-parser"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.http.request.response_parser.cljs$core$IMultiFn$_add_method$arity$3(null,"application/json",(function (_,response,on_success){
return response.json().then((function (json){
var payload = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.not(response.ok)){
webapp.http.request.not_ok(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),response.status,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
throw (new Error(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload)));
})], null));
} else {
}

(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(payload) : on_success.call(null,payload));

return payload;
}));
}));
webapp.http.request.response_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,on_success){
return response.text().then((function (text){
if(cljs.core.not(response.ok)){
webapp.http.request.not_ok(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),response.status,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
throw (new Error(text));
})], null));
} else {
}

(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(text) : on_success.call(null,text));

return text;
}));
}));
webapp.http.request.query_params_parser = (function webapp$http$request$query_params_parser(queries){
var url_search_params = (new URLSearchParams(cljs.core.clj__GT_js(queries)));
if(cljs.core.truth_((function (){var and__4251__auto__ = (!(cljs.core.empty_QMARK_(url_search_params.toString())));
if(and__4251__auto__){
return queries;
} else {
return and__4251__auto__;
}
})())){
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_search_params.toString())].join('');
} else {
return "";
}
});
/**
 * request abstraction for making a http request
 * 
 *   This functions receives one argument with the following keys:
 *   :method -> string of a http verb (GET, POST, PUT, DELETE, etc). If nil, defaults to GET
 *   :url -> URL to be called
 *   :body -> a clojure map of the body structure
 *   :on-sucess -> callback that receives as argument the response payload
 *   :on-failure -> callback that has one argument that is the error message to treat 4xx and 5xx status codes. If not provided, a default callback will be called
 *   :options -> this is a map of options, like headers
 * 
 *   it returns a promise with the response in a clojure map and executes a on-sucess callback
 */
webapp.http.request.request = (function webapp$http$request$request(p__32003){
var map__32004 = p__32003;
var map__32004__$1 = cljs.core.__destructure_map(map__32004);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"url","url",276297046));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"options","options",99638489));
var json_body = JSON.stringify(cljs.core.clj__GT_js(body));
return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),webapp.http.request.query_params_parser(query_params)].join(''),cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__4253__auto__ = method;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "GET";
}
})()], null),(function (){var temp__5753__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET");
if(temp__5753__auto__){
var _ = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),json_body], null);
} else {
return null;
}
})()], 0)))).then((function (p1__32002_SHARP_){
return webapp.http.request.response_parser.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(options)),p1__32002_SHARP_,on_success);
})).catch((function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(on_failure,null)){
return webapp.http.request.error_handling(error);
} else {
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(error) : on_failure.call(null,error));
}
}));
});

//# sourceMappingURL=webapp.http.request.js.map
