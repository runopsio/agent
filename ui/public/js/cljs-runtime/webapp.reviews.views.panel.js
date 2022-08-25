goog.provide('webapp.reviews.views.panel');
webapp.reviews.views.panel.list_item = (function webapp$reviews$views$panel$list_item(review){
var active_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-task-to-review","webapp.subs/active-task-to-review",77453618)], null))),new cljs.core.Keyword(null,"task","task",-1476607993));
var selected = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(active_task),new cljs.core.Keyword(null,"task_id","task_id",511422100).cljs$core$IFn$_invoke$arity$1(review)))?new cljs.core.Keyword(null,"selected","selected",574897764):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.review_item.review_item,selected,review], null);
});
webapp.reviews.views.panel.empty_list_view = (function webapp$reviews$views$panel$empty_list_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-x-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3/4 mx-auto p-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/runops-illustrations/gameboy.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-large text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700 text-sm font-bold"], null),"All caught up!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 text-xs"], null),"Take a break, play a game or fill your cup of coffee."], null)], null)], null);
});
webapp.reviews.views.panel.reviews_list = (function webapp$reviews$views$panel$reviews_list(reviews){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-r h-full"], null),((cljs.core.empty_QMARK_(reviews))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.panel.empty_list_view], null):null),(function (){var iter__4652__auto__ = (function webapp$reviews$views$panel$reviews_list_$_iter__31260(s__31261){
return (new cljs.core.LazySeq(null,(function (){
var s__31261__$1 = s__31261;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31261__$1);
if(temp__5753__auto__){
var s__31261__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31261__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31261__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31263 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31262 = (0);
while(true){
if((i__31262 < size__4651__auto__)){
var review = cljs.core._nth(c__4650__auto__,i__31262);
cljs.core.chunk_append(b__31263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.panel.list_item,review], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task_id","task_id",511422100).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review))].join('')], null)));

var G__31264 = (i__31262 + (1));
i__31262 = G__31264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31263),webapp$reviews$views$panel$reviews_list_$_iter__31260(cljs.core.chunk_rest(s__31261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31263),null);
}
} else {
var review = cljs.core.first(s__31261__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.panel.list_item,review], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task_id","task_id",511422100).cljs$core$IFn$_invoke$arity$1(review)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(review))].join('')], null)),webapp$reviews$views$panel$reviews_list_$_iter__31260(cljs.core.rest(s__31261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(reviews);
})()], null);
});
webapp.reviews.views.panel.panel = (function webapp$reviews$views$panel$panel(){
var reviews = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviews","reviews",-315606921)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reviews","get-reviews",1050009794)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-8 h-reviews__screen-container overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2 overflow-auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.panel.reviews_list,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reviews))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-6 p-regular overflow-auto"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.reviews.views.review_detail.review_detail], null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.reviews.views.panel.js.map
