goog.provide('webapp.http.runops_api');
/**
 * request abstraction for calling Runops API
 * 
 *   This functions receives one argument with the following keys:
 *   :method -> string of a http verb (GET, POST, PUT, DELETE, etc). If nil, defaults to GET
 *   :uri -> URI to be called
 *   :body -> a clojure map of the body structure
 *   :on-sucess -> callback that receives as argument the response payload
 *   :on-failure -> callback that has one argument that is the error message to treat 4xx and 5xx status codes. If not provided, a default callback will be called
 *   :on-unauthenticated -> a function to be called when the auth fails
 * 
 *   it returns a promise with the response in a clojure map and executes a on-sucess callback
 */
webapp.http.runops_api.request = (function webapp$http$runops_api$request(p__30608){
var map__30609 = p__30608;
var map__30609__$1 = cljs.core.__destructure_map(map__30609);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30609__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var token = localStorage.getItem("jwt-token");
var common_headers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accept","accept",1874130431),"application/json","Content-Type","application/json","Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null)], null);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(common_headers),headers], 0));
return webapp.http.request.request(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"query-params","query-params",900640534),(function (){var or__4253__auto__ = query_params;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure,new cljs.core.Keyword(null,"url","url",276297046),[webapp.config.api,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join(''),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1], null)], null));
});

//# sourceMappingURL=webapp.http.runops_api.js.map
