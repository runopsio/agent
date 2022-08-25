goog.provide('webapp.connections.views.list_view');
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.list_view !== 'undefined') && (typeof webapp.connections.views.list_view.item_state !== 'undefined')){
} else {
webapp.connections.views.list_view.item_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webapp.connections.views.list_view.toggle_dropdown_status = (function webapp$connections$views$list_view$toggle_dropdown_status(item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
});
webapp.connections.views.list_view.change_status = (function webapp$connections$views$list_view$change_status(item){
webapp.connections.views.list_view.toggle_dropdown_status(item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),webapp.connections.views.connection_change_status.confirm_target_change_status.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),item)], null));
});
webapp.connections.views.list_view.item_dropdown = (function webapp$connections$views$list_view$item_dropdown(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-right","ul.text-right",134983027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.border-b.py-small.px-regular","li.border-b.py-small.px-regular",1806027964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["/connections/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.list_view.toggle_dropdown_status(item);
})], null),"Edit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("active",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.list_view.change_status(item);
})], null),"Deactivate"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-green-600.text-sm","a.text-green-600.text-sm",518298324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.list_view.change_status(item);
})], null),"Activate"], null))], null)], null);
});
webapp.connections.views.list_view.list_item = (function webapp$connections$views$list_view$list_item(item,admin_QMARK_){
var review_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("team",new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(item)))?"groups":new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(item));
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),"active");
return webapp.components.table.row(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-12","div.grid.grid-cols-12",1799268373),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["grid grid-cols-11 col-span-11",(((!(active_QMARK_)))?" opacity-50 italic":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-700 block col-span-3"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),(((!(active_QMARK_)))?" (inactive)":null)], null),webapp.components.typography.small(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(review_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"reviewers","reviewers",311368702).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-2"], null)),webapp.components.typography.small(webapp.formatters.list_to_comma_string(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"runner_provider","runner_provider",-1237125318).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-2"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null))], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.justify-self-end.relative","div.justify-self-end.relative",-966825840),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-5.cursor-pointer","figure.w-5.cursor-pointer",2069434701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null)),new cljs.core.Keyword(null,"component","component",1555936782),webapp.connections.views.list_view.item_dropdown(item),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),false);
})], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null));
});
webapp.connections.views.list_view.main = (function webapp$connections$views$list_view$main(targets){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
return (function (targets__$1){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),webapp.components.table.header(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-12","div.grid.grid-cols-12",1799268373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-3","small.col-span-3",-1805561624),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Review"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-2","small.col-span-2",334372308),"Reviewers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Groups"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-2","small.col-span-2",334372308),"Provider"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Tags"], null)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.table.rows,(function (){var iter__4652__auto__ = (function webapp$connections$views$list_view$main_$_iter__30914(s__30915){
return (new cljs.core.LazySeq(null,(function (){
var s__30915__$1 = s__30915;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30915__$1);
if(temp__5753__auto__){
var s__30915__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30915__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30915__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30917 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30916 = (0);
while(true){
if((i__30916 < size__4651__auto__)){
var target = cljs.core._nth(c__4650__auto__,i__30916);
cljs.core.chunk_append(b__30917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.list_view.list_item,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)));

var G__30918 = (i__30916 + (1));
i__30916 = G__30918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30917),webapp$connections$views$list_view$main_$_iter__30914(cljs.core.chunk_rest(s__30915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30917),null);
}
} else {
var target = cljs.core.first(s__30915__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.list_view.list_item,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)),webapp$connections$views$list_view$main_$_iter__30914(cljs.core.rest(s__30915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(targets__$1);
})()], null)], null);
});
});

//# sourceMappingURL=webapp.connections.views.list_view.js.map
