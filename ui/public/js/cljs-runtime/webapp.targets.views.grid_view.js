goog.provide('webapp.targets.views.grid_view');
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.grid_view !== 'undefined') && (typeof webapp.targets.views.grid_view.item_state !== 'undefined')){
} else {
webapp.targets.views.grid_view.item_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webapp.targets.views.grid_view.toggle_dropdown_status = (function webapp$targets$views$grid_view$toggle_dropdown_status(item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
});
webapp.targets.views.grid_view.confirm_target_deactivation = (function webapp$targets$views$grid_view$confirm_target_deactivation(target){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Target deactivation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-regular","p.mb-regular",-1576444515),"Do you really want to deactivate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)," target?"], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Confirm deactivation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.targets.events","deactivate-target","webapp.targets.events/deactivate-target",-837902796),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null));
})], null))], null)], null);
});
webapp.targets.views.grid_view.deactivate = (function webapp$targets$views$grid_view$deactivate(item){
webapp.targets.views.grid_view.toggle_dropdown_status(item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),webapp.targets.views.grid_view.confirm_target_deactivation(item)], null));
});
webapp.targets.views.grid_view.item_dropdown = (function webapp$targets$views$grid_view$item_dropdown(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-right","ul.text-right",134983027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.border-b.py-small.px-regular","li.border-b.py-small.px-regular",1806027964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["/targets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.targets.views.grid_view.toggle_dropdown_status(item);
})], null),"Edit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.targets.views.grid_view.deactivate(item);
})], null),"Deactivate"], null)], null)], null);
});
webapp.targets.views.grid_view.target_card_popover = (function webapp$targets$views$grid_view$target_card_popover(target){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-small top-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.targets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null)),new cljs.core.Keyword(null,"component","component",1555936782),webapp.targets.views.grid_view.item_dropdown(target),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.targets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),false);
})], null))], null);
});
webapp.targets.views.grid_view.card_empty_targets = (function webapp$targets$views$grid_view$card_empty_targets(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex flex-col justify-center items-center"," p-regular bg-white rounded-lg h-32"," border shadow-0 hover:shadow transition"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),"/targets/new"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 opacity-40 group-hover:opacity-50 transition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-plus-blue.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-blue-500"], null),"Create a target"], null)], null);
});
webapp.targets.views.grid_view.target_card = (function webapp$targets$views$grid_view$target_card(target,admin_QMARK_){
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(target),"active");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex flex-col relative p-regular bg-white rounded-lg"," border shadow-0 hover:shadow transition h-full"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),["/targets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)),"/tasks/new"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm text-gray-900",(((!(active_QMARK_)))?" opacity-50 italic":null)].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target),(((!(active_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-italic text-xs text-gray-600"], null)," (inactive)"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500"], null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-start py-regular gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap gap-small"], null),(function (){var iter__4652__auto__ = (function webapp$targets$views$grid_view$target_card_$_iter__30764(s__30765){
return (new cljs.core.LazySeq(null,(function (){
var s__30765__$1 = s__30765;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30765__$1);
if(temp__5753__auto__){
var s__30765__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30765__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30765__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30767 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30766 = (0);
while(true){
if((i__30766 < size__4651__auto__)){
var group = cljs.core._nth(c__4650__auto__,i__30766);
cljs.core.chunk_append(b__30767,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.basic,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)));

var G__30776 = (i__30766 + (1));
i__30766 = G__30776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30767),webapp$targets$views$grid_view$target_card_$_iter__30764(cljs.core.chunk_rest(s__30765__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30767),null);
}
} else {
var group = cljs.core.first(s__30765__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.basic,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)),webapp$targets$views$grid_view$target_card_$_iter__30764(cljs.core.rest(s__30765__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(target));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow justify-end items-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-small text-xs text-blue-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Open"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 transform group-hover:translate-x-0.5 transition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-right-blue.svg"], null)], null)], null)], null)], null)], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.grid_view.target_card_popover,target], null):null)], null);
});
webapp.targets.views.grid_view.main = (function webapp$targets$views$grid_view$main(_){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
return (function (targets){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["grid grid-cols-3 gap-small ","2xl:grid-cols-4"].join('')], null),((cljs.core.empty_QMARK_(targets))?(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.grid_view.card_empty_targets], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["col-span-3 text-center p-x-large"," text-sm text-gray-400 font-semibold"].join('')], null),["You have no targets. ","If you need access to some, contact the admin"].join('')], null)):null),(function (){var iter__4652__auto__ = (function webapp$targets$views$grid_view$main_$_iter__30772(s__30773){
return (new cljs.core.LazySeq(null,(function (){
var s__30773__$1 = s__30773;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30773__$1);
if(temp__5753__auto__){
var s__30773__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30773__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30773__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30775 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30774 = (0);
while(true){
if((i__30774 < size__4651__auto__)){
var target = cljs.core._nth(c__4650__auto__,i__30774);
cljs.core.chunk_append(b__30775,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.grid_view.target_card,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)));

var G__30780 = (i__30774 + (1));
i__30774 = G__30780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30775),webapp$targets$views$grid_view$main_$_iter__30772(cljs.core.chunk_rest(s__30773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30775),null);
}
} else {
var target = cljs.core.first(s__30773__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.grid_view.target_card,target,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)], null)),webapp$targets$views$grid_view$main_$_iter__30772(cljs.core.rest(s__30773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(targets);
})()], null);
});
});

//# sourceMappingURL=webapp.targets.views.grid_view.js.map
