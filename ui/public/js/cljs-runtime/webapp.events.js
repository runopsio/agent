goog.provide('webapp.events');
var module$node_modules$$sentry$browser$dist$index=shadow.js.require("module$node_modules$$sentry$browser$dist$index", {});
var module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs=shadow.js.require("module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-db","webapp.events/initialize-db",167971186),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__29690__auto__ = webapp.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30613){var e = e30613;
throw e;
}}):(function (_,___$1){
return webapp.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__30614){
var vec__30615 = p__30614;
var seq__30616 = cljs.core.seq(vec__30615);
var first__30617 = cljs.core.first(seq__30616);
var seq__30616__$1 = cljs.core.next(seq__30616);
var ___$1 = first__30617;
var first__30617__$1 = cljs.core.first(seq__30616__$1);
var seq__30616__$2 = cljs.core.next(seq__30616__$1);
var handler = first__30617__$1;
var first__30617__$2 = cljs.core.first(seq__30616__$2);
var seq__30616__$3 = cljs.core.next(seq__30616__$2);
var query_params = first__30617__$2;
var params = seq__30616__$3;
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null)], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){var result__29690__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"params","params",710516235),(function (){var result__29690__auto__ = params;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"query-params","query-params",900640534),(function (){var result__29690__auto__ = (function (){var or__4253__auto__ = (function (){var result__29690__auto__ = query_params;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30618){var e = e30618;
throw e;
}}):(function (_,p__30619){
var vec__30620 = p__30619;
var seq__30621 = cljs.core.seq(vec__30620);
var first__30622 = cljs.core.first(seq__30621);
var seq__30621__$1 = cljs.core.next(seq__30621);
var ___$1 = first__30622;
var first__30622__$1 = cljs.core.first(seq__30621__$1);
var seq__30621__$2 = cljs.core.next(seq__30621__$1);
var handler = first__30622__$1;
var first__30622__$2 = cljs.core.first(seq__30621__$2);
var seq__30621__$3 = cljs.core.next(seq__30621__$2);
var query_params = first__30622__$2;
var params = seq__30621__$3;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"query-params","query-params",900640534),(function (){var or__4253__auto__ = query_params;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-active-panel","webapp.events/set-active-panel",-762875390),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30623,p__30624){
var map__30625 = p__30623;
var map__30625__$1 = cljs.core.__destructure_map(map__30625);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30625__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30626 = p__30624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30626,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30626,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"update"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__29690__auto___30920 = window.Intercom("update");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30920,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"update"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__29690__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30629){var e = e30629;
throw e;
}}):(function (p__30630,p__30631){
var map__30632 = p__30630;
var map__30632__$1 = cljs.core.__destructure_map(map__30632);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30632__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30633 = p__30631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(1),null);
window.Intercom("update");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch","fetch",-1081994244),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30636,p__30637){
var map__30638 = p__30636;
var map__30638__$1 = cljs.core.__destructure_map(map__30638);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30638__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30639 = p__30637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30639,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30639,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)], null)], null),cljs.core.list(new cljs.core.Symbol("runops-api","request","runops-api/request",-1351663034,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),cljs.core.PersistentArrayMap.EMPTY));

var result__29690__auto___30921 = webapp.http.runops_api.request((function (){var result__29690__auto___30921 = request_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30921,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___30921;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30921,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("runops-api","request","runops-api/request",-1351663034,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30642){var e = e30642;
throw e;
}}):(function (p__30643,p__30644){
var map__30645 = p__30643;
var map__30645__$1 = cljs.core.__destructure_map(map__30645);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30645__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30646 = p__30644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30646,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30646,(1),null);
webapp.http.runops_api.request(request_info);

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-request","http-request",-304962216),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30649,p__30650){
var map__30651 = p__30649;
var map__30651__$1 = cljs.core.__destructure_map(map__30651);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30652 = p__30650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30652,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30652,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)], null)], null),cljs.core.list(new cljs.core.Symbol("request","request","request/request",230341977,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),cljs.core.PersistentArrayMap.EMPTY));

var result__29690__auto___30922 = webapp.http.request.request((function (){var result__29690__auto___30922 = request_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30922,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___30922;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30922,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("request","request","request/request",230341977,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30655){var e = e30655;
throw e;
}}):(function (p__30656,p__30657){
var map__30658 = p__30656;
var map__30658__$1 = cljs.core.__destructure_map(map__30658);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30658__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30659 = p__30657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659,(1),null);
webapp.http.request.request(request_info);

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"destroy-page-loader","destroy-page-loader",-740445417),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30662,p__30663){
var map__30664 = p__30662;
var map__30664__$1 = cljs.core.__destructure_map(map__30664);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30664__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30665 = p__30663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30665,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30665,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30668){var e = e30668;
throw e;
}}):(function (p__30669,p__30670){
var map__30671 = p__30669;
var map__30671__$1 = cljs.core.__destructure_map(map__30671);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30671__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30672 = p__30670;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30675,p__30676){
var map__30677 = p__30675;
var map__30677__$1 = cljs.core.__destructure_map(map__30677);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30677__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30678 = p__30676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30682){var e = e30682;
throw e;
}}):(function (p__30683,p__30684){
var map__30685 = p__30683;
var map__30685__$1 = cljs.core.__destructure_map(map__30685);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30685__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30686 = p__30684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30689,p__30690){
var map__30691 = p__30689;
var map__30691__$1 = cljs.core.__destructure_map(map__30691);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30691__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30692 = p__30690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc_in((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30695){var e = e30695;
throw e;
}}):(function (p__30696,p__30697){
var map__30698 = p__30696;
var map__30698__$1 = cljs.core.__destructure_map(map__30698);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30698__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30699 = p__30697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"aaaaa","aaaaa",591634403),true,new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),null], null))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-modal","open-modal",947793572),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30702,p__30703){
var map__30704 = p__30702;
var map__30704__$1 = cljs.core.__destructure_map(map__30704);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30704__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30705 = p__30703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(2),null);
var on_click_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null)], null))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc_in((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),(function (){var result__29690__auto__ = component;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var result__29690__auto__ = (function (){var or__4253__auto__ = (function (){var result__29690__auto__ = size;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"small","small",2133478704);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),(function (){var result__29690__auto__ = on_click_out;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),new cljs.core.Symbol(null,"on-click-out","on-click-out",283505186,null)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30708){var e = e30708;
throw e;
}}):(function (p__30711,p__30712){
var map__30713 = p__30711;
var map__30713__$1 = cljs.core.__destructure_map(map__30713);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30713__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30714 = p__30712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714,(2),null);
var on_click_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__4253__auto__ = size;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"small","small",2133478704);
}
})(),new cljs.core.Keyword(null,"on-click-out","on-click-out",-1357026341),on_click_out], null))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-dialog","close-dialog",1508318122),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30717,p__30718){
var map__30719 = p__30717;
var map__30719__$1 = cljs.core.__destructure_map(map__30719);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30719__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30720 = p__30718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30720,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30720,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null)], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30723){var e = e30723;
throw e;
}}):(function (p__30724,p__30725){
var map__30726 = p__30724;
var map__30726__$1 = cljs.core.__destructure_map(map__30726);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30726__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30727 = p__30725;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30731,p__30732){
var map__30733 = p__30731;
var map__30733__$1 = cljs.core.__destructure_map(map__30733);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30733__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30734 = p__30732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),(function (){var result__29690__auto__ = new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),(function (){var result__29690__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30737){var e = e30737;
throw e;
}}):(function (p__30738,p__30739){
var map__30740 = p__30738;
var map__30740__$1 = cljs.core.__destructure_map(map__30740);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30740__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30741 = p__30739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30741,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30741,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-snackbar","hide-snackbar",202914448),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30748,p__30749){
var map__30750 = p__30748;
var map__30750__$1 = cljs.core.__destructure_map(map__30750);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30750__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30751 = p__30749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30751,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30751,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null)], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30754){var e = e30754;
throw e;
}}):(function (p__30755,p__30756){
var map__30757 = p__30755;
var map__30757__$1 = cljs.core.__destructure_map(map__30757);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30757__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30758 = p__30756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30758,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30758,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30761,p__30762){
var map__30763 = p__30761;
var map__30763__$1 = cljs.core.__destructure_map(map__30763);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30763__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30764 = p__30762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30764,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30764,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),(function (){var result__29690__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),(function (){var result__29690__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30767){var e = e30767;
throw e;
}}):(function (p__30768,p__30769){
var map__30770 = p__30768;
var map__30770__$1 = cljs.core.__destructure_map(map__30770);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30770__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30771 = p__30769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30774,p__30775){
var map__30776 = p__30774;
var map__30776__$1 = cljs.core.__destructure_map(map__30776);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30777 = p__30775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30777,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30777,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))))], null),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null))));

var result__29690__auto__ = (function (){var auth0_logout_url = (function (){var result__29690__auto__ = ["https://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = webapp.config.auth0;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()),"/v2/logout?returnTo=",(function (){var result__29690__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = (function (){var result__29690__auto__ = window.location;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})().origin;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()),"/login"].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = ["&client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = webapp.config.auth0;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})();
var result__29690__auto___30933 = (function (){var result__29690__auto___30933 = localStorage;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30933,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30933;
})().removeItem("jwt-token");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30933,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__29690__auto___30934 = (window.location.href = (function (){var result__29690__auto___30934 = auth0_logout_url;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30934,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30934;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30934,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))))], null),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30781){var e = e30781;
throw e;
}}):(function (p__30787,p__30788){
var map__30793 = p__30787;
var map__30793__$1 = cljs.core.__destructure_map(map__30793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30793__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30794 = p__30788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(1),null);
var auth0_logout_url = ["https://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(webapp.config.auth0)),"/v2/logout?returnTo=",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),"/login"].join(''),["&client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(webapp.config.auth0))].join('')].join('');
localStorage.removeItem("jwt-token");

(window.location.href = auth0_logout_url);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30797,p__30798){
var map__30799 = p__30797;
var map__30799__$1 = cljs.core.__destructure_map(map__30799);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30799__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30800 = p__30798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30800,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30800,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"boot",cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),cljs.core.PersistentArrayMap.EMPTY));

var result__29690__auto___30937 = window.Intercom("boot",(function (){var result__29690__auto___30937 = cljs.core.clj__GT_js((function (){var result__29690__auto___30937 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var result__29690__auto___30937 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30937 = new cljs.core.Keyword(null,"given_name","given_name",2027851744).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30937 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30937;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30937;
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30937 = new cljs.core.Keyword(null,"family_name","family_name",853479664).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30937 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30937;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30937;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___30937;
})(),new cljs.core.Keyword(null,"email","email",1415816706),(function (){var result__29690__auto___30937 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30937 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30937;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___30937;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30937;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___30937;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"boot",cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30804){var e = e30804;
throw e;
}}):(function (p__30805,p__30806){
var map__30807 = p__30805;
var map__30807__$1 = cljs.core.__destructure_map(map__30807);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30808 = p__30806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30808,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30808,(1),null);
window.Intercom("boot",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"given_name","given_name",2027851744).cljs$core$IFn$_invoke$arity$1(user))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"family_name","family_name",853479664).cljs$core$IFn$_invoke$arity$1(user))].join(''),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user)], null)));

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30813,p__30814){
var map__30815 = p__30813;
var map__30815__$1 = cljs.core.__destructure_map(map__30815);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30816 = p__30814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30816,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30816,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol("sentry","setUser","sentry/setUser",-604465056,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),cljs.core.PersistentArrayMap.EMPTY));

var result__29690__auto___30946 = module$node_modules$$sentry$browser$dist$index.setUser((function (){var result__29690__auto___30946 = cljs.core.clj__GT_js((function (){var result__29690__auto___30946 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),(function (){var result__29690__auto___30946 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30946 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30946;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___30946;
})(),new cljs.core.Keyword(null,"username","username",1605666410),(function (){var result__29690__auto___30946 = new cljs.core.Keyword(null,"nickname","nickname",-802027190).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___30946 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30946;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___30946;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30946;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___30946;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30946,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("sentry","setUser","sentry/setUser",-604465056,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30823){var e = e30823;
throw e;
}}):(function (p__30828,p__30829){
var map__30830 = p__30828;
var map__30830__$1 = cljs.core.__destructure_map(map__30830);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30831 = p__30829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30831,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30831,(1),null);
module$node_modules$$sentry$browser$dist$index.setUser(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"nickname","nickname",-802027190).cljs$core$IFn$_invoke$arity$1(user)], null)));

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30835,p__30836){
var map__30837 = p__30835;
var map__30837__$1 = cljs.core.__destructure_map(map__30837);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30838 = p__30836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30838,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30838,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"flags","flags",-879017694,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),(function (){var result__29690__auto__ = flags;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30841){var e = e30841;
throw e;
}}):(function (p__30842,p__30843){
var map__30844 = p__30842;
var map__30844__$1 = cljs.core.__destructure_map(map__30844);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30844__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30845 = p__30843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30845,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30845,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),flags)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30848,p__30849){
var map__30850 = p__30848;
var map__30850__$1 = cljs.core.__destructure_map(map__30850);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30850__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30851 = p__30849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30851,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30851,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Symbol(null,"client","client",317083410,null),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null))], null),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null))));

var result__29690__auto__ = (function (){var lduser = (function (){var result__29690__auto__ = cljs.core.clj__GT_js((function (){var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, ["key",(function (){var result__29690__auto__ = new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})();
var client = (function (){var result__29690__auto__ = module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs.initialize((function (){var result__29690__auto__ = webapp.config.launch_darkly_client_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = lduser;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})();
var result__29690__auto___30949 = (function (){var result__29690__auto___30949 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30949;
})().on("ready",(function (){var result__29690__auto___30949 = (function (){
var result__29690__auto___30949 = (function (){var groups_flag = (function (){var result__29690__auto___30949 = (function (){var result__29690__auto___30949 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto___30949;
})().variation("groups-flag");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30949;
})();
var agents_events = (function (){var result__29690__auto___30949 = (function (){var result__29690__auto___30949 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto___30949;
})().variation("agent-events-flag");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30949;
})();
var feature_flags = (function (){var result__29690__auto___30949 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),(function (){var result__29690__auto___30949 = groups_flag;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(31),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto___30949;
})(),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),(function (){var result__29690__auto___30949 = agents_events;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(33),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto___30949;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30949;
})();
var result__29690__auto___30949 = re_frame.core.dispatch((function (){var result__29690__auto___30949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),(function (){var result__29690__auto___30949 = feature_flags;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto___30949;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(35),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto___30949;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(34),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto___30949;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___30949;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___30949;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___30949,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(41),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),(function (){var result__29690__auto__ = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(43),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(38),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Symbol(null,"client","client",317083410,null),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null))], null),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30854){var e = e30854;
throw e;
}}):(function (p__30869,p__30870){
var map__30871 = p__30869;
var map__30871__$1 = cljs.core.__destructure_map(map__30871);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30871__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30872 = p__30870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30872,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30872,(1),null);
var lduser = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["key",new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(user)], null));
var client = module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs.initialize(webapp.config.launch_darkly_client_id,lduser);
client.on("ready",(function (){
var groups_flag = client.variation("groups-flag");
var agents_events = client.variation("agent-events-flag");
var feature_flags = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),groups_flag,new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),agents_events], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),feature_flags], null));
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),client)], null);
})));
webapp.events.filter_current_user = (function webapp$events$filter_current_user(current_user,runops_users){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current_user),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__30875_SHARP_));
}),runops_users));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","get-user","webapp.events/get-user",-918369556),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__30877){
var vec__30878 = p__30877;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null)], null)], null)], null)], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (){var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__29690__auto__ = (function (p1__30876_SHARP_){
var result__29690__auto__ = re_frame.core.dispatch((function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),(function (){var result__29690__auto__ = p1__30876_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29690__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__30876#","p1__30876#",1540076170,null)], null)))], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30881){var e = e30881;
throw e;
}}):(function (_,p__30889){
var vec__30890 = p__30889;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30890,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30890,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__30876_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),p1__30876_SHARP_], null));
})], null)], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30893,p__30894){
var map__30895 = p__30893;
var map__30895__$1 = cljs.core.__destructure_map(map__30895);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30895__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30896 = p__30894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-info","user-info",578621607,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null))));

var result__29690__auto__ = (function (){var user_info = (function (){var result__29690__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var result__29690__auto__ = payload;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})();
var user = (function (){var result__29690__auto__ = (function (){var or__4253__auto__ = (function (){var result__29690__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var result__29690__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})();
var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"user","user",1532431356),(function (){var result__29690__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__29690__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),(function (){var result__29690__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),(function (){var result__29690__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(34),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(32),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(30),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),(function (){var result__29690__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(39),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(35),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(42),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-info","user-info",578621607,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30905){var e = e30905;
throw e;
}}):(function (p__30908,p__30909){
var map__30910 = p__30908;
var map__30910__$1 = cljs.core.__destructure_map(map__30910);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30911 = p__30909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30911,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30911,(1),null);
var user_info = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(payload,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var user = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_info,user], 0))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),user_info], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),user_info], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),user_info], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null);
})));

//# sourceMappingURL=webapp.events.js.map
