goog.provide('webapp.events.secrets');
webapp.events.secrets.secrets_api = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ENV_CONFIG","ENV_CONFIG",251061884),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"MYSQL_HOST","MYSQL_HOST",-655112105),"localhost",new cljs.core.Keyword(null,"MYSQL_USER","MYSQL_USER",131005293),"admin",new cljs.core.Keyword(null,"MYSQL_PASS","MYSQL_PASS",764879405),"admin123",new cljs.core.Keyword(null,"MYSQL_DB","MYSQL_DB",1072616827),"localhost"], null)], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30935,p__30936){
var map__30938 = p__30935;
var map__30938__$1 = cljs.core.__destructure_map(map__30938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30939 = p__30936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30939,(0),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null))], null)], null)], null)], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),(function (){var result__29690__auto__ = cljs.core.deref((function (){var result__29690__auto__ = webapp.events.secrets.secrets_api;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null))], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null))], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30947){var e = e30947;
throw e;
}}):(function (p__30970,p__30971){
var map__30972 = p__30970;
var map__30972__$1 = cljs.core.__destructure_map(map__30972);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30972__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30973 = p__30971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30973,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),cljs.core.deref(webapp.events.secrets.secrets_api)], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("webapp.events.secrets","secrets->set-secrets","webapp.events.secrets/secrets->set-secrets",-1546196962),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30976,p__30977){
var map__30978 = p__30976;
var map__30978__$1 = cljs.core.__destructure_map(map__30978);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30978__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30979 = p__30977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(0),null);
var secrets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null))], null)));

var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29690__auto__ = cljs.core.assoc_in((function (){var result__29690__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})(),(function (){var result__29690__auto__ = secrets;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30982){var e = e30982;
throw e;
}}):(function (p__30983,p__30984){
var map__30985 = p__30983;
var map__30985__$1 = cljs.core.__destructure_map(map__30985);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30985__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30986 = p__30984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30986,(0),null);
var secrets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30986,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null),secrets)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secrets->update-secrets","secrets->update-secrets",-396344994),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30989,p__30990){
var map__30991 = p__30989;
var map__30991__$1 = cljs.core.__destructure_map(map__30991);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30992 = p__30990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(0),null);
var secrets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null)));

var result__29690__auto___31019 = cljs.core.reset_BANG_((function (){var result__29690__auto___31019 = webapp.events.secrets.secrets_api;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___31019;
})(),(function (){var result__29690__auto___31019 = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var result__29690__auto___31019 = new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___31019 = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___31019;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___31019;
})(),(function (){var result__29690__auto___31019 = secrets;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___31019;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___31019;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31019,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secrets","secrets",-2066744945,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e30997){var e = e30997;
throw e;
}}):(function (p__31000,p__31001){
var map__31002 = p__31000;
var map__31002__$1 = cljs.core.__destructure_map(map__31002);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31002__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31003 = p__31001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31003,(0),null);
var secrets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31003,(1),null);
cljs.core.reset_BANG_(webapp.events.secrets.secrets_api,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203).cljs$core$IFn$_invoke$arity$1(db),secrets));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secrets->delete-secret","secrets->delete-secret",893904953),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__31006,p__31007){
var map__31008 = p__31006;
var map__31008__$1 = cljs.core.__destructure_map(map__31008);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31009 = p__31007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(0),null);
var secret_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"secret-key","secret-key",1769767061,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secret-key","secret-key",1769767061,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null)));

var result__29690__auto___31022 = cljs.core.reset_BANG_((function (){var result__29690__auto___31022 = webapp.events.secrets.secrets_api;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___31022;
})(),(function (){var result__29690__auto___31022 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var result__29690__auto___31022 = new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203).cljs$core$IFn$_invoke$arity$1((function (){var result__29690__auto___31022 = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto___31022;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___31022;
})(),(function (){var result__29690__auto___31022 = secret_key;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"secret-key","secret-key",1769767061,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto___31022;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secret-key","secret-key",1769767061,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto___31022;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto___31022,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"secrets-api","secrets-api",-1157476156,null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),cljs.core.list(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"secret-key","secret-key",1769767061,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__29690__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (){var result__29690__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29690__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29690__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29690__auto__;
}catch (e31012){var e = e31012;
throw e;
}}):(function (p__31013,p__31014){
var map__31015 = p__31013;
var map__31015__$1 = cljs.core.__destructure_map(map__31015);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31015__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31016 = p__31014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31016,(0),null);
var secret_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31016,(1),null);
cljs.core.reset_BANG_(webapp.events.secrets.secrets_api,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203).cljs$core$IFn$_invoke$arity$1(db),secret_key));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null)], null)], null)], null);
})));

//# sourceMappingURL=webapp.events.secrets.js.map
