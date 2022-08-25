goog.provide('webapp.targets.views.targets_filter');
webapp.targets.views.targets_filter.main = (function webapp$targets$views$targets_filter$main(){
var all_targets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","all-targets","webapp.subs/all-targets",1519043201)], null));
var search = window.location.search;
var url_search_params = (new URLSearchParams(search));
var url_params_list = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$targets$views$targets_filter$main_$_iter__30754(s__30755){
return (new cljs.core.LazySeq(null,(function (){
var s__30755__$1 = s__30755;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30755__$1);
if(temp__5753__auto__){
var s__30755__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30755__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30755__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30757 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30756 = (0);
while(true){
if((i__30756 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__30756);
cljs.core.chunk_append(b__30757,q);

var G__30761 = (i__30756 + (1));
i__30756 = G__30761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30757),webapp$targets$views$targets_filter$main_$_iter__30754(cljs.core.chunk_rest(s__30755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30757),null);
}
} else {
var q = cljs.core.first(s__30755__$2);
return cljs.core.cons(q,webapp$targets$views$targets_filter$main_$_iter__30754(cljs.core.rest(s__30755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(url_search_params);
})());
var url_params_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),url_params_list);
var selected_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var selected_review = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(url_params_map,"review_type");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
return (function (){
var targets_types = webapp.targets.constants.targets_types_list;
var reviews = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["none","anyone","team"], null);
var reviews_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30752_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),p1__30752_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p1__30752_SHARP_], null));
}),reviews);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),targets_types,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type",new cljs.core.Keyword(null,"name","name",1843675177),"target-type",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(selected_type,v);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-targets","filter-targets",978697764),"type",v], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),reviews_types,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.deref(selected_review),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Review type",new cljs.core.Keyword(null,"name","name",1843675177),"target-review",new cljs.core.Keyword(null,"clear?","clear?",1363344639),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (v){
cljs.core.reset_BANG_(selected_review,v);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-targets","filter-targets",978697764),"review_type",v], null));
})], null)], null)], null);
});
});

//# sourceMappingURL=webapp.targets.views.targets_filter.js.map
