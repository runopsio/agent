goog.provide('webapp.tasks.views.reviews_list');
webapp.tasks.views.reviews_list.list_item = (function webapp$tasks$views$reviews_list$list_item(review){
var active_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-task-to-review","webapp.subs/active-task-to-review",77453618)], null))),new cljs.core.Keyword(null,"task","task",-1476607993));
var selected = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(active_task),new cljs.core.Keyword(null,"task_id","task_id",511422100).cljs$core$IFn$_invoke$arity$1(review)))?new cljs.core.Keyword(null,"selected","selected",574897764):null);
return webapp.tasks.views.review_item.review_item.cljs$core$IFn$_invoke$arity$2(selected,review);
});
webapp.tasks.views.reviews_list.reviews_list = (function webapp$tasks$views$reviews_list$reviews_list(reviews){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-r.overflow-auto.h-full.relative.h-tasks-list","div.border-r.overflow-auto.h-full.relative.h-tasks-list",-1516511299),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(webapp.tasks.views.reviews_list.list_item,reviews))], null);
});

//# sourceMappingURL=webapp.tasks.views.reviews_list.js.map
