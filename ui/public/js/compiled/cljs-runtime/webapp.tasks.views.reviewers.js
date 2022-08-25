goog.provide('webapp.tasks.views.reviewers');
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.reviewers !== 'undefined') && (typeof webapp.tasks.views.reviewers.on_review_cb !== 'undefined')){
} else {
webapp.tasks.views.reviewers.on_review_cb = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32762 = cljs.core.get_global_hierarchy;
return (fexpr__32762.cljs$core$IFn$_invoke$arity$0 ? fexpr__32762.cljs$core$IFn$_invoke$arity$0() : fexpr__32762.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.reviewers","on-review-cb"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.reviewers.on_review_cb.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (_,task_id,review_status){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),["Task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task_id)," was !",cljs.core.str.cljs$core$IFn$_invoke$arity$1(review_status),"!"].join('')], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.tasks.events","refetch-current-task","webapp.tasks.events/refetch-current-task",-1772397916),task_id], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refetch-tasks","refetch-tasks",1270762505)], null));
}));
webapp.tasks.views.reviewers.on_review_cb.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"reviews","reviews",-315606921),(function (_,task_id,review_status){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),["Task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task_id)," was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(review_status),"!"].join('')], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-task-to-review","get-task-to-review",-1028065577),task_id], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reviews","get-reviews",1050009794)], null));
}));
webapp.tasks.views.reviewers.confirm_task_approval = (function webapp$tasks$views$reviewers$confirm_task_approval(body,source){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.tasks.events","confirm-task-approval","webapp.tasks.events/confirm-task-approval",-2108957247),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),["Do you really want to approve task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task-id","task-id",-1045480126).cljs$core$IFn$_invoke$arity$1(body)),"?"].join(''),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return webapp.tasks.views.reviewers.on_review_cb.cljs$core$IFn$_invoke$arity$3(source,new cljs.core.Keyword(null,"task-id","task-id",-1045480126).cljs$core$IFn$_invoke$arity$1(body),"approved");
})], null)], null));
});
webapp.tasks.views.reviewers.confirm_task_rejection = (function webapp$tasks$views$reviewers$confirm_task_rejection(body,source){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.tasks.events","confirm-task-rejection","webapp.tasks.events/confirm-task-rejection",1297754558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),["Do you really want to reject task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task-id","task-id",-1045480126).cljs$core$IFn$_invoke$arity$1(body)),"?"].join(''),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return webapp.tasks.views.reviewers.on_review_cb.cljs$core$IFn$_invoke$arity$3(source,new cljs.core.Keyword(null,"task-id","task-id",-1045480126).cljs$core$IFn$_invoke$arity$1(body),"rejected");
})], null)], null));
});
webapp.tasks.views.reviewers.review_buttons = (function webapp$tasks$views$reviewers$review_buttons(review_body,source){
var approve_icon = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.align-center","img.align-center",981248104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-check-white.svg"], null)], null)], null);
var reject_icon = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.align-center","img.align-center",981248104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-close-red.svg"], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-grow.gap-small.place-content-end","div.flex.flex-grow.gap-small.place-content-end",876684881),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-8","div.w-8",-2079459804),webapp.components.button.red.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rounded-transparent","rounded-transparent",1906127178),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),reject_icon,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.tasks.views.reviewers.confirm_task_rejection(review_body,source);
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-8","div.w-8",-2079459804),webapp.components.button.green.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rounded","rounded",85415706),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),approve_icon,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.tasks.views.reviewers.confirm_task_approval(review_body,source);
})], null))], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.reviewers !== 'undefined') && (typeof webapp.tasks.views.reviewers.review_status_icon !== 'undefined')){
} else {
webapp.tasks.views.reviewers.review_status_icon = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32766 = cljs.core.get_global_hierarchy;
return (fexpr__32766.cljs$core$IFn$_invoke$arity$0 ? fexpr__32766.cljs$core$IFn$_invoke$arity$0() : fexpr__32766.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.reviewers","review-status-icon"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.reviewers.review_status_icon.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return "/icons/icon-waiting-circle-yellow.svg";
}));
webapp.tasks.views.reviewers.review_status_icon.cljs$core$IMultiFn$_add_method$arity$3(null,"approved",(function (_,___$1){
return "/icons/icon-check-green.svg";
}));
webapp.tasks.views.reviewers.review_status_icon.cljs$core$IMultiFn$_add_method$arity$3(null,"rejected",(function (_,___$1){
return "/icons/icon-close-red.svg";
}));
webapp.tasks.views.reviewers.review_information = (function webapp$tasks$views$reviewers$review_information(review,task,source){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null)));
var can_review_QMARK_ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(review),"pending-review");
if(and__4251__auto__){
return cljs.core.some((function (p1__32770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review),p1__32770_SHARP_);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(user));
} else {
return and__4251__auto__;
}
})();
var review_body = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review)], null);
return (function (review__$1,task__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(review__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task__$1))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.mb-small","div.flex.items-center.mb-small",947013282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-shrink-0.w-4.mr-small","div.flex-shrink-0.w-4.mr-small",-699880337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-user-couple.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-shrink-0.text-sm.text-gray-800","span.flex-shrink-0.text-sm.text-gray-800",-229003482),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review__$1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-6","div.w-6",1132750992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),webapp.tasks.views.reviewers.review_status_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(review__$1))], null)], null)], null)], null),(cljs.core.truth_((function (){var or__4253__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anyone",new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(review__$1),"pending-review")));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return can_review_QMARK_;
}
})())?webapp.tasks.views.reviewers.review_buttons(review_body,source):null)], null),webapp.components.divider.main()], null);
});
});
if((typeof webapp !== 'undefined') && (typeof webapp.tasks !== 'undefined') && (typeof webapp.tasks.views !== 'undefined') && (typeof webapp.tasks.views.reviewers !== 'undefined') && (typeof webapp.tasks.views.reviewers.groups_list !== 'undefined')){
} else {
webapp.tasks.views.reviewers.groups_list = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32773 = cljs.core.get_global_hierarchy;
return (fexpr__32773.cljs$core$IFn$_invoke$arity$0 ? fexpr__32773.cljs$core$IFn$_invoke$arity$0() : fexpr__32773.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.tasks.views.reviewers","groups-list"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.tasks.views.reviewers.groups_list.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.animate-pulse","div.animate-pulse",-1370639443),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mb-small.gap-small","div.flex.mb-small.gap-small",1433666258),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-5.w-5.rounded-lg.bg-gray-300","div.h-5.w-5.rounded-lg.bg-gray-300",-1928804957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-5.flex-grow.rounded-lg.bg-gray-300","div.h-5.flex-grow.rounded-lg.bg-gray-300",1650350552)], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mb-small.gap-small","div.flex.mb-small.gap-small",1433666258),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-5.w-5.rounded-lg.bg-gray-300","div.h-5.w-5.rounded-lg.bg-gray-300",-1928804957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-5.flex-grow.rounded-lg.bg-gray-300","div.h-5.flex-grow.rounded-lg.bg-gray-300",1650350552)], null)], null),webapp.components.divider.main()], null);
}));
webapp.tasks.views.reviewers.groups_list.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,task,source){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"reviews","reviews",-315606921).cljs$core$IFn$_invoke$arity$1(task)),(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.italic.text-gray-400","div.text-xs.italic.text-gray-400",-1710929693),"No review needed"], null):null),(function (){var iter__4652__auto__ = (function webapp$tasks$views$reviewers$iter__32774(s__32775){
return (new cljs.core.LazySeq(null,(function (){
var s__32775__$1 = s__32775;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32775__$1);
if(temp__5753__auto__){
var s__32775__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32775__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__32775__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__32777 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__32776 = (0);
while(true){
if((i__32776 < size__4651__auto__)){
var review = cljs.core._nth(c__4650__auto__,i__32776);
cljs.core.chunk_append(b__32777,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.reviewers.review_information,review,task,source], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task))].join('')], null)));

var G__32779 = (i__32776 + (1));
i__32776 = G__32779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32777),webapp$tasks$views$reviewers$iter__32774(cljs.core.chunk_rest(s__32775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32777),null);
}
} else {
var review = cljs.core.first(s__32775__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.reviewers.review_information,review,task,source], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task))].join('')], null)),webapp$tasks$views$reviewers$iter__32774(cljs.core.rest(s__32775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"reviews","reviews",-315606921).cljs$core$IFn$_invoke$arity$1(task));
})()], null);
}));
/**
 * task -> the task to be reviewed
 * status -> the request status for the task, to manage loading state
 * source -> the source that is rendering the component, used to take decisions regards which list and informations update. Check more information of possible values on `on-review-cb` function on this file
 */
webapp.tasks.views.reviewers.reviewers = (function webapp$tasks$views$reviewers$reviewers(status,task,source){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex.mb-regular.items-center","header.flex.mb-regular.items-center",-1468662221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-semibold.flex-grow","span.text-sm.font-semibold.flex-grow",40196842),"Reviewers"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular","div.mb-regular",-1073230200),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.reviewers.groups_list,status,task,source], null)], null)], null);
});

//# sourceMappingURL=webapp.tasks.views.reviewers.js.map
