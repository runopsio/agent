goog.provide('webapp.targets.views.list_view');
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.list_view !== 'undefined') && (typeof webapp.targets.views.list_view.item_state !== 'undefined')){
} else {
webapp.targets.views.list_view.item_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webapp.targets.views.list_view.toggle_dropdown_status = (function webapp$targets$views$list_view$toggle_dropdown_status(item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
});
webapp.targets.views.list_view.confirm_target_deactivation = (function webapp$targets$views$list_view$confirm_target_deactivation(target){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Target deactivation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-regular","p.mb-regular",-1576444515),"Do you really want to deactivate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)," target?"], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Confirm deactivation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deactivate-target","deactivate-target",2109441258),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null));
})], null))], null)], null);
});
webapp.targets.views.list_view.deactivate = (function webapp$targets$views$list_view$deactivate(item){
webapp.targets.views.list_view.toggle_dropdown_status(item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),webapp.targets.views.list_view.confirm_target_deactivation(item)], null));
});
webapp.targets.views.list_view.item_dropdown = (function webapp$targets$views$list_view$item_dropdown(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-right","ul.text-right",134983027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.border-b.py-small.px-regular","li.border-b.py-small.px-regular",1806027964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["/targets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.targets.views.list_view.toggle_dropdown_status(item);
})], null),"Edit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.targets.views.list_view.deactivate(item);
})], null),"Deactivate"], null)], null)], null);
});
webapp.targets.views.list_view.list_item = (function webapp$targets$views$list_view$list_item(item,admin_QMARK_){
var review_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("team",new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(item)))?"groups":new cljs.core.Keyword(null,"review_type","review_type",743039553).cljs$core$IFn$_invoke$arity$1(item));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"admin","admin",-1239101627),admin_QMARK_], 0));

return webapp.components.table.row(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-12","div.grid.grid-cols-12",1799268373),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.font-semibold.text-gray-700.block","small.font-semibold.text-gray-700.block",232084412),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.block.text-gray-500","small.block.text-gray-500",1882998347),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(item)], null)], null),webapp.components.typography.small(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(review_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"reviewers","reviewers",311368702).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-2"], null)),webapp.components.typography.small(webapp.formatters.list_to_comma_string(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"runner_provider","runner_provider",-1237125318).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-2"], null)),webapp.components.typography.small(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 col-span-1"], null)),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.justify-self-end.relative","div.justify-self-end.relative",-966825840),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-5.cursor-pointer","figure.w-5.cursor-pointer",2069434701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.list_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null)),new cljs.core.Keyword(null,"component","component",1555936782),webapp.targets.views.list_view.item_dropdown(item),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.list_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),false);
})], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null));
});
webapp.targets.views.list_view.main = (function webapp$targets$views$list_view$main(targets){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
return (function (targets__$1){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),webapp.components.table.header(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-12","div.grid.grid-cols-12",1799268373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-3","small.col-span-3",-1805561624),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Review"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-2","small.col-span-2",334372308),"Reviewers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Groups"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-2","small.col-span-2",334372308),"Provider"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.col-span-1","small.col-span-1",-343099733),"Tags"], null)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.table.rows,(function (){var iter__4652__auto__ = (function webapp$targets$views$list_view$main_$_iter__30768(s__30769){
return (new cljs.core.LazySeq(null,(function (){
var s__30769__$1 = s__30769;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30769__$1);
if(temp__5753__auto__){
var s__30769__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30769__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30769__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30771 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30770 = (0);
while(true){
if((i__30770 < size__4651__auto__)){
var target = cljs.core._nth(c__4650__auto__,i__30770);
cljs.core.chunk_append(b__30771,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.list_view.list_item,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)));

var G__30778 = (i__30770 + (1));
i__30770 = G__30778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30771),webapp$targets$views$list_view$main_$_iter__30768(cljs.core.chunk_rest(s__30769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30771),null);
}
} else {
var target = cljs.core.first(s__30769__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.list_view.list_item,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)),webapp$targets$views$list_view$main_$_iter__30768(cljs.core.rest(s__30769__$2)));
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

//# sourceMappingURL=webapp.targets.views.list_view.js.map
