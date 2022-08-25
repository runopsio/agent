goog.provide('webapp.formatters');
/**
 * Transform a comma separated string to list
 */
webapp.formatters.comma_string_to_list = (function webapp$formatters$comma_string_to_list(roles){
if(cljs.core.empty_QMARK_(roles)){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(roles,/, | , /,","),/,/);
}
});
/**
 * Transform a list into a comma separated string
 */
webapp.formatters.list_to_comma_string = (function webapp$formatters$list_to_comma_string(roles){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",roles);
});
webapp.formatters.replace_empty_space__GT_dash = (function webapp$formatters$replace_empty_space__GT_dash(string){
return clojure.string.replace(string,/\s/,"-");
});
webapp.formatters.split_by_colon = (function webapp$formatters$split_by_colon(value){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/:/);
});
/**
 * It receives our Runops API date format, a simple string containing YYYY/MM/DD HH:MM
 *   and parses to a readable string containing `x time ago`, for instance:
 *   - 10 minutes ago
 *   - 1 hour ago
 * 
 *   Important: `time` parameters will always be assumed as UTC timezone, so make sure you're passing a UTC timezone date formatted as `YYYY/MM/DD HH:MM` in here.
 *   
 */
webapp.formatters.time_ago = (function webapp$formatters$time_ago(time){
var units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(86400),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"day",new cljs.core.Keyword(null,"limit","limit",-1355822363),(604800),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(86400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"week",new cljs.core.Keyword(null,"limit","limit",-1355822363),(2629743),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(604800)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"month",new cljs.core.Keyword(null,"limit","limit",-1355822363),(31556926),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(2629743)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"year",new cljs.core.Keyword(null,"limit","limit",-1355822363),(99999999999999),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(31556926)], null)], null);
var ts = (Date.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)," UTC"].join('')) / (1000));
var now = ((new Date()).getTime() / (1000));
var diff = (now - ts);
if((diff < (30))){
return "just now";
} else {
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__33387_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__33387_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__33387_SHARP_))));
}),units));
return (function (p1__33388_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33388_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__33388_SHARP_ > (1)))?"s":null)," ago"].join('');
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
}
});

//# sourceMappingURL=webapp.formatters.js.map
