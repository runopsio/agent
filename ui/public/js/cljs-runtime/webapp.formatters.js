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
webapp.formatters.replace_dash__GT_underline = (function webapp$formatters$replace_dash__GT_underline(string){
return clojure.string.replace(string,"-","_");
});
webapp.formatters.split_by_colon = (function webapp$formatters$split_by_colon(value){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/:/);
});
/**
 * It's remove the HH:mm:ss from 'yyyy-mm-dd HH:mm:ss' datetime string
 */
webapp.formatters.remove_time_from_date = (function webapp$formatters$remove_time_from_date(datetime){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(datetime,/ /));
});
webapp.formatters.convert_query_params__GT_datetime = (function webapp$formatters$convert_query_params__GT_datetime(datetime){
return clojure.string.replace(clojure.string.replace(datetime,"+"," "),/%3A/,":");
});
/**
 * PARAMETERS
 *   time -> a value in miliseconds
 * 
 *   Returns a string containing a human readable value of time.
 *   For instance:
 *   - Less than a second
 *   - 26 seconds;
 *   - 10 minutes;
 *   - in case of hours, if it has at least 1 minute, it returns 'X hours and Y minutes', otherwise, it returns 'X hours' only
 *   
 */
webapp.formatters.time_elapsed = (function webapp$formatters$time_elapsed(time){
var time_in_seconds = (time / (1000));
var units = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(9999999999),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null)], null);
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__49996_SHARP_){
return (time_in_seconds >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__49996_SHARP_));
}),units));
if((time_in_seconds < (1))){
return "less than a second";
} else {
if((((time_in_seconds >= (1))) && ((time_in_seconds < (3600))))){
return (function (p1__49997_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49997_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__49997_SHARP_ > (1)))?"s":null)].join('');
})((Math.floor((time_in_seconds / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
} else {
var t = (time_in_seconds / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit));
var hours_time = (Math.floor(t) | (0));
var minutes_time = (Math.floor(((t - hours_time) * (60))) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours_time)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((hours_time > (1)))?"s":null),(((minutes_time >= (1)))?[" and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes_time)," minute",(((minutes_time > (1)))?"s":null)].join(''):null)].join('');

}
}
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
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__50019_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__50019_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__50019_SHARP_))));
}),units));
return (function (p1__50022_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50022_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__50022_SHARP_ > (1)))?"s":null)," ago"].join('');
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
}
});

//# sourceMappingURL=webapp.formatters.js.map
