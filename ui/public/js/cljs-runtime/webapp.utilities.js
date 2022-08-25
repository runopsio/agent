goog.provide('webapp.utilities');
webapp.utilities.download_string_as_csv = (function webapp$utilities$download_string_as_csv(string,export_name){
var data_blob = (new Blob([string],({"type": "text/csv;charset=utf-8;"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
/**
 * Gets the URL params in the URL and format in a hashmap {"key" "value"}
 */
webapp.utilities.get_url_params = (function webapp$utilities$get_url_params(){
var search = window.location.search;
var url_search_params = (new URLSearchParams(search));
var url_params_list = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$utilities$get_url_params_$_iter__50647(s__50648){
return (new cljs.core.LazySeq(null,(function (){
var s__50648__$1 = s__50648;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50648__$1);
if(temp__5753__auto__){
var s__50648__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50648__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50648__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50650 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50649 = (0);
while(true){
if((i__50649 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__50649);
cljs.core.chunk_append(b__50650,q);

var G__50657 = (i__50649 + (1));
i__50649 = G__50657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50650),webapp$utilities$get_url_params_$_iter__50647(cljs.core.chunk_rest(s__50648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50650),null);
}
} else {
var q = cljs.core.first(s__50648__$2);
return cljs.core.cons(q,webapp$utilities$get_url_params_$_iter__50647(cljs.core.rest(s__50648__$2)));
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
return url_params_map;
});

//# sourceMappingURL=webapp.utilities.js.map
