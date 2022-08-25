goog.provide('webapp.quickstarts.utilities');
webapp.quickstarts.utilities.get_config_keys = (function webapp$quickstarts$utilities$get_config_keys(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(webapp.connections.constants.connection_configs_required,key);
});
webapp.quickstarts.utilities.config__GT_json_stringify = (function webapp$quickstarts$utilities$config__GT_json_stringify(configs){
return JSON.stringify(cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35374){
var map__35379 = p__35374;
var map__35379__$1 = cljs.core.__destructure_map(map__35379);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35380){
var map__35381 = p__35380;
var map__35381__$1 = cljs.core.__destructure_map(map__35381);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (!(((clojure.string.blank_QMARK_(key)) || (clojure.string.blank_QMARK_(value)))));
}),configs)))));
});

//# sourceMappingURL=webapp.quickstarts.utilities.js.map
