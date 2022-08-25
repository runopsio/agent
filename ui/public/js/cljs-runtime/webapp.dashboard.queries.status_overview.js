goog.provide('webapp.dashboard.queries.status_overview');
webapp.dashboard.queries.status_overview.runops_status = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["success","failure","pending-review","approved","rejected"], null);
webapp.dashboard.queries.status_overview.status_item = (function webapp$dashboard$queries$status_overview$status_item(_,___$1,___$2){
var status_total = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->status-total-by-date","dashboard->status-total-by-date",174498118)], null));
return (function (status,start_date,end_date){
var url_params = webapp.utilities.get_url_params();
var selected_connection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params,"connection");
var selected_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params,"user-email");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex gap-small items-center px-regular py-small ","text-xs border-b border-gray-100 last:border-b-0 ","hover:bg-gray-50 "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"italic flex-grow"], null),status], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(status_total)),status)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 hover:underline ml-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/queries?status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),"&start-date=",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_date)," 00:00:00"].join(''),"&end-date=",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_date)," 23:59:59"].join(''),(cljs.core.truth_(selected_connection)?["&target=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_connection)].join(''):null),(cljs.core.truth_(selected_user)?["&user-email=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_user)].join(''):null)].join('')], null),"View in queries"], null)], null)], null);
});
});
webapp.dashboard.queries.status_overview.status_list = (function webapp$dashboard$queries$status_overview$status_list(_,___$1){
return (function (start_date,end_date){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$dashboard$queries$status_overview$status_list_$_iter__51312(s__51313){
return (new cljs.core.LazySeq(null,(function (){
var s__51313__$1 = s__51313;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51313__$1);
if(temp__5753__auto__){
var s__51313__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51313__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51313__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51315 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51314 = (0);
while(true){
if((i__51314 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__51314);
cljs.core.chunk_append(b__51315,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.status_overview.status_item,item,start_date,end_date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__51323 = (i__51314 + (1));
i__51314 = G__51323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51315),webapp$dashboard$queries$status_overview$status_list_$_iter__51312(cljs.core.chunk_rest(s__51313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51315),null);
}
} else {
var item = cljs.core.first(s__51313__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.status_overview.status_item,item,start_date,end_date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),webapp$dashboard$queries$status_overview$status_list_$_iter__51312(cljs.core.rest(s__51313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(webapp.dashboard.queries.status_overview.runops_status);
})())], null);
});
});
webapp.dashboard.queries.status_overview.main = (function webapp$dashboard$queries$status_overview$main(){
var today = (new Date());
var iso_today = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(today.getFullYear()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((today.getMonth() + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(today.getDate())].join('');
var filtered_dates = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-date","start-date",295168731),iso_today,new cljs.core.Keyword(null,"end-date","end-date",-208259642),iso_today], null));
var days_ago = (function (days){
var base_date = (new Date());
var _ = base_date.setDate((base_date.getDate() - days));
var parsed = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_date.getFullYear()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((base_date.getMonth() + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_date.getDate())].join('');
return parsed;
});
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->status-total-by-date","dashboard->status-total-by-date",174498118)], null));
var dates_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["30 days","15 days","7 days","Today"], null);
var switch_dates = (function (date){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard->get-status-total-by-date","dashboard->get-status-total-by-date",-1380291793),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-x-days","last-x-days",-1608055052),date], null)], null));
});
var _ = switch_dates("7 days");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"loading","loading",-737050189)))?"opacity-50 pointer-events-none":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small items-center mb-small px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Queries by status",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex gap-regular flex-shrink ","text-xs text-gray-600 "].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$dashboard$queries$status_overview$main_$_iter__51318(s__51319){
return (new cljs.core.LazySeq(null,(function (){
var s__51319__$1 = s__51319;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51319__$1);
if(temp__5753__auto__){
var s__51319__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51319__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51319__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51321 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51320 = (0);
while(true){
if((i__51320 < size__4651__auto__)){
var date = cljs.core._nth(c__4650__auto__,i__51320);
cljs.core.chunk_append(b__51321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer hover:text-blue-500 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,new cljs.core.Keyword(null,"selected-days","selected-days",614652841).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"text-blue-500":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51320,date,c__4650__auto__,size__4651__auto__,b__51321,s__51319__$2,temp__5753__auto__,today,iso_today,filtered_dates,days_ago,state,dates_options,switch_dates,_){
return (function (){
return switch_dates(date);
});})(i__51320,date,c__4650__auto__,size__4651__auto__,b__51321,s__51319__$2,temp__5753__auto__,today,iso_today,filtered_dates,days_ago,state,dates_options,switch_dates,_))
], null),date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)));

var G__51324 = (i__51320 + (1));
i__51320 = G__51324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51321),webapp$dashboard$queries$status_overview$main_$_iter__51318(cljs.core.chunk_rest(s__51319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51321),null);
}
} else {
var date = cljs.core.first(s__51319__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer hover:text-blue-500 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,new cljs.core.Keyword(null,"selected-days","selected-days",614652841).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?"text-blue-500":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date,s__51319__$2,temp__5753__auto__,today,iso_today,filtered_dates,days_ago,state,dates_options,switch_dates,_){
return (function (){
return switch_dates(date);
});})(date,s__51319__$2,temp__5753__auto__,today,iso_today,filtered_dates,days_ago,state,dates_options,switch_dates,_))
], null),date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)),webapp$dashboard$queries$status_overview$main_$_iter__51318(cljs.core.rest(s__51319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(dates_options);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.dashboard.queries.status_overview.status_list,(function (){var G__51322 = new cljs.core.Keyword(null,"selected-days","selected-days",614652841).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
switch (G__51322) {
case "Today":
return iso_today;

break;
case "7 days":
return days_ago((7));

break;
case "15 days":
return days_ago((15));

break;
case "30 days":
return days_ago((30));

break;
default:
return days_ago((7));

}
})(),new cljs.core.Keyword(null,"end-date","end-date",-208259642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(filtered_dates))], null)], null)], null);
});
});

//# sourceMappingURL=webapp.dashboard.queries.status_overview.js.map
