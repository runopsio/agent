goog.provide('webapp.events');
var module$node_modules$$sentry$browser$dist$index=shadow.js.require("module$node_modules$$sentry$browser$dist$index", {});
var module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs=shadow.js.require("module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-db","webapp.events/initialize-db",167971186),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__26417__auto__ = webapp.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32011){var e = e32011;
throw e;
}}):(function (_,___$1){
return webapp.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__32012){
var vec__32013 = p__32012;
var seq__32014 = cljs.core.seq(vec__32013);
var first__32015 = cljs.core.first(seq__32014);
var seq__32014__$1 = cljs.core.next(seq__32014);
var ___$1 = first__32015;
var first__32015__$1 = cljs.core.first(seq__32014__$1);
var seq__32014__$2 = cljs.core.next(seq__32014__$1);
var handler = first__32015__$1;
var first__32015__$2 = cljs.core.first(seq__32014__$2);
var seq__32014__$3 = cljs.core.next(seq__32014__$2);
var query_params = first__32015__$2;
var params = seq__32014__$3;
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null)], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){var result__26417__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"params","params",710516235),(function (){var result__26417__auto__ = params;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"query-params","query-params",900640534),(function (){var result__26417__auto__ = (function (){var or__4253__auto__ = (function (){var result__26417__auto__ = query_params;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"query-params","query-params",-1753795235,null),cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32016){var e = e32016;
throw e;
}}):(function (_,p__32017){
var vec__32018 = p__32017;
var seq__32019 = cljs.core.seq(vec__32018);
var first__32020 = cljs.core.first(seq__32019);
var seq__32019__$1 = cljs.core.next(seq__32019);
var ___$1 = first__32020;
var first__32020__$1 = cljs.core.first(seq__32019__$1);
var seq__32019__$2 = cljs.core.next(seq__32019__$1);
var handler = first__32020__$1;
var first__32020__$2 = cljs.core.first(seq__32019__$2);
var seq__32019__$3 = cljs.core.next(seq__32019__$2);
var query_params = first__32020__$2;
var params = seq__32019__$3;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"query-params","query-params",900640534),(function (){var or__4253__auto__ = query_params;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-active-panel","webapp.events/set-active-panel",-762875390),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32021,p__32022){
var map__32023 = p__32021;
var map__32023__$1 = cljs.core.__destructure_map(map__32023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32024 = p__32022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"update"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__26417__auto___32397 = window.Intercom("update");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32397,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"update"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__26417__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32027){var e = e32027;
throw e;
}}):(function (p__32028,p__32029){
var map__32030 = p__32028;
var map__32030__$1 = cljs.core.__destructure_map(map__32030);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32030__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32031 = p__32029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32031,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32031,(1),null);
window.Intercom("update");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch","fetch",-1081994244),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32034,p__32035){
var map__32036 = p__32034;
var map__32036__$1 = cljs.core.__destructure_map(map__32036);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32036__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32037 = p__32035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)], null)], null),cljs.core.list(new cljs.core.Symbol("runops-api","request","runops-api/request",-1351663034,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),cljs.core.PersistentArrayMap.EMPTY));

var result__26417__auto___32405 = webapp.http.runops_api.request((function (){var result__26417__auto___32405 = request_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32405,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto___32405;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32405,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("runops-api","request","runops-api/request",-1351663034,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32040){var e = e32040;
throw e;
}}):(function (p__32041,p__32042){
var map__32043 = p__32041;
var map__32043__$1 = cljs.core.__destructure_map(map__32043);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32044 = p__32042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(1),null);
webapp.http.runops_api.request(request_info);

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-request","http-request",-304962216),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32047,p__32048){
var map__32049 = p__32047;
var map__32049__$1 = cljs.core.__destructure_map(map__32049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32049__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32050 = p__32048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32050,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32050,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)], null)], null),cljs.core.list(new cljs.core.Symbol("request","request","request/request",230341977,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),cljs.core.PersistentArrayMap.EMPTY));

var result__26417__auto___32412 = webapp.http.request.request((function (){var result__26417__auto___32412 = request_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32412,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto___32412;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32412,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("request","request","request/request",230341977,null),new cljs.core.Symbol(null,"request-info","request-info",1994288246,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32053){var e = e32053;
throw e;
}}):(function (p__32054,p__32055){
var map__32056 = p__32054;
var map__32056__$1 = cljs.core.__destructure_map(map__32056);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32056__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32057 = p__32055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32057,(0),null);
var request_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32057,(1),null);
webapp.http.request.request(request_info);

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"destroy-page-loader","destroy-page-loader",-740445417),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32060,p__32061){
var map__32062 = p__32060;
var map__32062__$1 = cljs.core.__destructure_map(map__32062);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32062__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32063 = p__32061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32063,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32063,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32066){var e = e32066;
throw e;
}}):(function (p__32067,p__32068){
var map__32069 = p__32067;
var map__32069__$1 = cljs.core.__destructure_map(map__32069);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32069__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32070 = p__32068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closed","closed",-919675359))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32073,p__32074){
var map__32075 = p__32073;
var map__32075__$1 = cljs.core.__destructure_map(map__32075);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32075__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32076 = p__32074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32079){var e = e32079;
throw e;
}}):(function (p__32080,p__32081){
var map__32082 = p__32080;
var map__32082__$1 = cljs.core.__destructure_map(map__32082);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32083 = p__32081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32083,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32083,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page-loader-status","page-loader-status",681072950),new cljs.core.Keyword(null,"closing","closing",-1862893890))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32086,p__32087){
var map__32088 = p__32086;
var map__32088__$1 = cljs.core.__destructure_map(map__32088);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32088__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32089 = p__32087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32089,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32089,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc_in((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32092){var e = e32092;
throw e;
}}):(function (p__32093,p__32094){
var map__32095 = p__32093;
var map__32095__$1 = cljs.core.__destructure_map(map__32095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32096 = p__32094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32096,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32096,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-modal","open-modal",947793572),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32099,p__32100){
var map__32101 = p__32099;
var map__32101__$1 = cljs.core.__destructure_map(map__32101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32102 = p__32100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32102,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32102,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32102,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704))], null))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc_in((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),(function (){var result__26417__auto__ = component;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var result__26417__auto__ = (function (){var or__4253__auto__ = (function (){var result__26417__auto__ = size;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"small","small",2133478704);
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Keyword(null,"small","small",2133478704))], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32105){var e = e32105;
throw e;
}}):(function (p__32106,p__32107){
var map__32108 = p__32106;
var map__32108__$1 = cljs.core.__destructure_map(map__32108);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32108__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32109 = p__32107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__4253__auto__ = size;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"small","small",2133478704);
}
})()], null))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-dialog","close-dialog",1508318122),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32112,p__32113){
var map__32114 = p__32112;
var map__32114__$1 = cljs.core.__destructure_map(map__32114);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32114__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32115 = p__32113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32115,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32115,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null)], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32118){var e = e32118;
throw e;
}}):(function (p__32119,p__32120){
var map__32121 = p__32119;
var map__32121__$1 = cljs.core.__destructure_map(map__32121);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32121__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32122 = p__32120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32122,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32122,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),null,new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),null], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32125,p__32126){
var map__32127 = p__32125;
var map__32127__$1 = cljs.core.__destructure_map(map__32127);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32127__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32128 = p__32126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),(function (){var result__26417__auto__ = new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),(function (){var result__26417__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),cljs.core.list(new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32131){var e = e32131;
throw e;
}}):(function (p__32132,p__32133){
var map__32134 = p__32132;
var map__32134__$1 = cljs.core.__destructure_map(map__32134);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32134__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32135 = p__32133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"dialog-status","dialog-status",-188066621),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dialog-on-success","dialog-on-success",334333841),new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"dialog-text","dialog-text",1406329346),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-snackbar","hide-snackbar",202914448),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32138,p__32139){
var map__32140 = p__32138;
var map__32140__$1 = cljs.core.__destructure_map(map__32140);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32140__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32141 = p__32139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null)], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32144){var e = e32144;
throw e;
}}):(function (p__32145,p__32146){
var map__32147 = p__32145;
var map__32147__$1 = cljs.core.__destructure_map(map__32147);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32148 = p__32146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),null,new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),null], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32151,p__32152){
var map__32153 = p__32151;
var map__32153__$1 = cljs.core.__destructure_map(map__32153);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32153__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32154 = p__32152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32154,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32154,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),(function (){var result__26417__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),(function (){var result__26417__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),cljs.core.list(new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32157){var e = e32157;
throw e;
}}):(function (p__32158,p__32159){
var map__32160 = p__32158;
var map__32160__$1 = cljs.core.__destructure_map(map__32160);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32161 = p__32159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32161,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32161,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"snackbar-status","snackbar-status",642069656),new cljs.core.Keyword(null,"shown","shown",-1564457683),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snackbar-level","snackbar-level",-1283241781),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"snackbar-text","snackbar-text",-1500074700),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32164,p__32165){
var map__32166 = p__32164;
var map__32166__$1 = cljs.core.__destructure_map(map__32166);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32166__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32167 = p__32165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))))], null),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null))));

var result__26417__auto__ = (function (){var auth0_logout_url = (function (){var result__26417__auto__ = ["https://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = webapp.config.auth0;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})()),"/v2/logout?returnTo=",(function (){var result__26417__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = (function (){var result__26417__auto__ = window.location;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})().origin;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()),"/login"].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = ["&client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = webapp.config.auth0;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})()].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})();
var result__26417__auto___32442 = (function (){var result__26417__auto___32442 = localStorage;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32442,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32442;
})().removeItem("jwt-token");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32442,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__26417__auto___32443 = (window.location.href = (function (){var result__26417__auto___32443 = auth0_logout_url;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32443,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32443;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32443,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"https://",cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null)),"/v2/logout?returnTo=",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null)),new cljs.core.Symbol(null,"-origin","-origin",-2057978506,null)),"/login"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"&client_id=",cljs.core.list(new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Symbol("config","auth0","config/auth0",1008567207,null))))], null),cljs.core.list(new cljs.core.Symbol(null,".removeItem",".removeItem",343642982,null),new cljs.core.Symbol("js","localStorage","js/localStorage",1794695826,null),"jwt-token"),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol("js","window","js/window",-1929916804,null),new cljs.core.Symbol(null,"-location","-location",1785650365,null),new cljs.core.Symbol(null,"-href","-href",1728329062,null)),new cljs.core.Symbol(null,"auth0-logout-url","auth0-logout-url",-676422613,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32175){var e = e32175;
throw e;
}}):(function (p__32196,p__32197){
var map__32198 = p__32196;
var map__32198__$1 = cljs.core.__destructure_map(map__32198);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32198__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32199 = p__32197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(1),null);
var auth0_logout_url = ["https://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(webapp.config.auth0)),"/v2/logout?returnTo=",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),"/login"].join(''),["&client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(webapp.config.auth0))].join('')].join('');
localStorage.removeItem("jwt-token");

(window.location.href = auth0_logout_url);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32206,p__32207){
var map__32209 = p__32206;
var map__32209__$1 = cljs.core.__destructure_map(map__32209);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32209__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32211 = p__32207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32211,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32211,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"boot",cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),cljs.core.PersistentArrayMap.EMPTY));

var result__26417__auto___32450 = window.Intercom("boot",(function (){var result__26417__auto___32450 = cljs.core.clj__GT_js((function (){var result__26417__auto___32450 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var result__26417__auto___32450 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32450 = new cljs.core.Keyword(null,"given_name","given_name",2027851744).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32450 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32450;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32450;
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32450 = new cljs.core.Keyword(null,"family_name","family_name",853479664).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32450 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32450;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32450;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto___32450;
})(),new cljs.core.Keyword(null,"email","email",1415816706),(function (){var result__26417__auto___32450 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32450 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32450;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto___32450;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32450;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto___32450;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32450,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("js","window.Intercom","js/window.Intercom",656233995,null),"boot",cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Keyword(null,"given_name","given_name",2027851744),new cljs.core.Symbol(null,"user","user",-1122004413,null))," ",cljs.core.list(new cljs.core.Keyword(null,"family_name","family_name",853479664),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32230){var e = e32230;
throw e;
}}):(function (p__32245,p__32246){
var map__32247 = p__32245;
var map__32247__$1 = cljs.core.__destructure_map(map__32247);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32247__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32248 = p__32246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32248,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32248,(1),null);
window.Intercom("boot",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app_id","app_id",1219902058),"ryuapdmp",new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"given_name","given_name",2027851744).cljs$core$IFn$_invoke$arity$1(user))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"family_name","family_name",853479664).cljs$core$IFn$_invoke$arity$1(user))].join(''),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user)], null)));

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32251,p__32252){
var map__32253 = p__32251;
var map__32253__$1 = cljs.core.__destructure_map(map__32253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32254 = p__32252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol("sentry","setUser","sentry/setUser",-604465056,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),cljs.core.PersistentArrayMap.EMPTY));

var result__26417__auto___32457 = module$node_modules$$sentry$browser$dist$index.setUser((function (){var result__26417__auto___32457 = cljs.core.clj__GT_js((function (){var result__26417__auto___32457 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),(function (){var result__26417__auto___32457 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32457 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32457;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto___32457;
})(),new cljs.core.Keyword(null,"username","username",1605666410),(function (){var result__26417__auto___32457 = new cljs.core.Keyword(null,"nickname","nickname",-802027190).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto___32457 = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32457;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto___32457;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32457;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto___32457;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32457,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("sentry","setUser","sentry/setUser",-604465056,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.list(new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.list(new cljs.core.Keyword(null,"nickname","nickname",-802027190),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32257){var e = e32257;
throw e;
}}):(function (p__32259,p__32260){
var map__32261 = p__32259;
var map__32261__$1 = cljs.core.__destructure_map(map__32261);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32261__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32262 = p__32260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32262,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32262,(1),null);
module$node_modules$$sentry$browser$dist$index.setUser(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"nickname","nickname",-802027190).cljs$core$IFn$_invoke$arity$1(user)], null)));

return cljs.core.PersistentArrayMap.EMPTY;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32265,p__32266){
var map__32267 = p__32265;
var map__32267__$1 = cljs.core.__destructure_map(map__32267);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32267__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32268 = p__32266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32268,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32268,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"flags","flags",-879017694,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null))], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),(function (){var result__26417__auto__ = flags;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),new cljs.core.Symbol(null,"flags","flags",-879017694,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32271){var e = e32271;
throw e;
}}):(function (p__32282,p__32283){
var map__32284 = p__32282;
var map__32284__$1 = cljs.core.__destructure_map(map__32284);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32284__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32285 = p__32283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32285,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32285,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105),flags)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32289,p__32290){
var map__32291 = p__32289;
var map__32291__$1 = cljs.core.__destructure_map(map__32291);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32291__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32292 = p__32290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Symbol(null,"client","client",317083410,null),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null))], null),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null))));

var result__26417__auto__ = (function (){var lduser = (function (){var result__26417__auto__ = cljs.core.clj__GT_js((function (){var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, ["key",(function (){var result__26417__auto__ = new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})();
var client = (function (){var result__26417__auto__ = module$node_modules$launchdarkly_js_client_sdk$dist$ldclient_cjs.initialize((function (){var result__26417__auto__ = webapp.config.launch_darkly_client_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = lduser;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})();
var result__26417__auto___32497 = (function (){var result__26417__auto___32497 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32497;
})().on("ready",(function (){var result__26417__auto___32497 = (function (){
var result__26417__auto___32497 = (function (){var groups_flag = (function (){var result__26417__auto___32497 = (function (){var result__26417__auto___32497 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto___32497;
})().variation("groups-flag");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32497;
})();
var agents_events = (function (){var result__26417__auto___32497 = (function (){var result__26417__auto___32497 = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto___32497;
})().variation("agent-events-flag");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32497;
})();
var feature_flags = (function (){var result__26417__auto___32497 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),(function (){var result__26417__auto___32497 = groups_flag;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(31),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto___32497;
})(),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),(function (){var result__26417__auto___32497 = agents_events;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(33),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto___32497;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32497;
})();
var result__26417__auto___32497 = re_frame.core.dispatch((function (){var result__26417__auto___32497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),(function (){var result__26417__auto___32497 = feature_flags;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto___32497;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(35),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto___32497;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(34),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto___32497;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto___32497;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto___32497;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto___32497,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(41),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),(function (){var result__26417__auto__ = client;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(43),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(38),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lduser","lduser",-442920289,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, ["key",cljs.core.list(new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null)),new cljs.core.Symbol(null,"client","client",317083410,null),cljs.core.list(new cljs.core.Symbol("ldclient","initialize","ldclient/initialize",-635394659,null),new cljs.core.Symbol("config","launch-darkly-client-id","config/launch-darkly-client-id",1930484088,null),new cljs.core.Symbol(null,"lduser","lduser",-442920289,null))], null),cljs.core.list(new cljs.core.Symbol(null,".on",".on",444793949,null),new cljs.core.Symbol(null,"client","client",317083410,null),"ready",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"groups-flag"),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null),cljs.core.list(new cljs.core.Symbol(null,".variation",".variation",84481383,null),new cljs.core.Symbol(null,"client","client",317083410,null),"agent-events-flag"),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"groups-flag","groups-flag",-39991063),new cljs.core.Symbol(null,"groups-flag","groups-flag",1600540464,null),new cljs.core.Keyword(null,"agents-events","agents-events",-846279452),new cljs.core.Symbol(null,"agents-events","agents-events",794252075,null)], null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-feature-flags","webapp.events/set-feature-flags",332351802),new cljs.core.Symbol(null,"feature-flags","feature-flags",-1709385664,null)], null))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"launch-darkly-client","launch-darkly-client",881083608),new cljs.core.Symbol(null,"client","client",317083410,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32296){var e = e32296;
throw e;
}}):(function (p__32333,p__32334){
var map__32335 = p__32333;
var map__32335__$1 = cljs.core.__destructure_map(map__32335);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32335__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32336 = p__32334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336,(1),null);
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32341_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current_user),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__32341_SHARP_));
}),runops_users));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","get-user","webapp.events/get-user",-918369556),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__32347){
var vec__32350 = p__32347;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32350,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null)], null)], null)], null)], null)));

var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (){var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__26417__auto__ = (function (p1__32346_SHARP_){
var result__26417__auto__ = re_frame.core.dispatch((function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),(function (){var result__26417__auto__ = p1__32346_SHARP_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__26417__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null),cljs.core.list(new cljs.core.Symbol("rf","dispatch","rf/dispatch",-1335086036,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),new cljs.core.Symbol(null,"p1__32346#","p1__32346#",-2079239999,null)], null)))], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32358){var e = e32358;
throw e;
}}):(function (_,p__32359){
var vec__32360 = p__32359;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32360,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32360,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/userinfo",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__32346_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),p1__32346_SHARP_], null));
})], null)], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events","set-user","webapp.events/set-user",498709229),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__32363,p__32364){
var map__32365 = p__32363;
var map__32365__$1 = cljs.core.__destructure_map(map__32365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32366 = p__32364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32366,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32366,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-info","user-info",578621607,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null))));

var result__26417__auto__ = (function (){var user_info = (function (){var result__26417__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var result__26417__auto__ = payload;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})();
var user = (function (){var result__26417__auto__ = (function (){var or__4253__auto__ = (function (){var result__26417__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var result__26417__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})();
var result__26417__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__26417__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__26417__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"user","user",1532431356),(function (){var result__26417__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__26417__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = user;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})(),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),(function (){var result__26417__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),(function (){var result__26417__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(34),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(32),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(30),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),(function (){var result__26417__auto__ = user_info;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(39),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(35),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})(),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__26417__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(42),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26417__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26417__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__26417__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-info","user-info",578621607,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356)),cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"user-info","user-info",578621607,null),new cljs.core.Symbol(null,"user","user",-1122004413,null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-intercom","webapp.events/initialize-intercom",-1989801860),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","sentry-set-user","webapp.events/sentry-set-user",228501380),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-launchdarkly","webapp.events/initialize-launchdarkly",-886376914),new cljs.core.Symbol(null,"user-info","user-info",578621607,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-page-loader","close-page-loader",-338018413)], null)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26417__auto__;
}catch (e32369){var e = e32369;
throw e;
}}):(function (p__32371,p__32372){
var map__32373 = p__32371;
var map__32373__$1 = cljs.core.__destructure_map(map__32373);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32373__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32374 = p__32372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32374,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32374,(1),null);
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
