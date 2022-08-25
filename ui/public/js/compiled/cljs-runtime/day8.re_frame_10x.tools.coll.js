goog.provide('day8.re_frame_10x.tools.coll');
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.tools.coll.last_in_vec = (function day8$re_frame_10x$tools$coll$last_in_vec(v){
var num = cljs.core.count(v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.tools.coll.find_all_indexes_in_vec = (function day8$re_frame_10x$tools$coll$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__63997_SHARP_,p2__63995_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__63995_SHARP_) : pred.call(null,p2__63995_SHARP_)))){
return p1__63997_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.tools.coll.find_index_in_vec = (function day8$re_frame_10x$tools$coll$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame_10x.tools.coll.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.tools.coll.id_between_xf = (function day8$re_frame_10x$tools$coll$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__64011_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64011_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__64011_SHARP_) <= ending)));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.tools.coll.dissoc_in = (function day8$re_frame_10x$tools$coll$dissoc_in(m,p__64014){
var vec__64015 = p__64014;
var seq__64016 = cljs.core.seq(vec__64015);
var first__64017 = cljs.core.first(seq__64016);
var seq__64016__$1 = cljs.core.next(seq__64016);
var k = first__64017;
var ks = seq__64016__$1;
var keys = vec__64015;
if(ks){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = (day8.re_frame_10x.tools.coll.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.tools.coll.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.tools.coll.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * cljs.core/get-in with support for index access of lists.
 */
day8.re_frame_10x.tools.coll.get_in_with_lists = (function day8$re_frame_10x$tools$coll$get_in_with_lists(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,k){
if(cljs.core.list_QMARK_(ret)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ret,k);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,k);
}
}),m,ks);
});

//# sourceMappingURL=day8.re_frame_10x.tools.coll.js.map
