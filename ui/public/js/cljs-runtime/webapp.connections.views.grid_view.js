goog.provide('webapp.connections.views.grid_view');
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.grid_view !== 'undefined') && (typeof webapp.connections.views.grid_view.item_state !== 'undefined')){
} else {
webapp.connections.views.grid_view.item_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webapp.connections.views.grid_view.close_modal_dialog = (function webapp$connections$views$grid_view$close_modal_dialog(){
var dialog_text = "Are you sure you want to discard this new connection?";
var on_success_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});
var open_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),dialog_text,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_dialog], null)], null));
});
return open_dialog();
});
webapp.connections.views.grid_view.toggle_dropdown_status = (function webapp$connections$views$grid_view$toggle_dropdown_status(item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
});
webapp.connections.views.grid_view.change_status = (function webapp$connections$views$grid_view$change_status(item){
webapp.connections.views.grid_view.toggle_dropdown_status(item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),webapp.connections.views.connection_change_status.confirm_target_change_status.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),item)], null));
});
webapp.connections.views.grid_view.item_dropdown = (function webapp$connections$views$grid_view$item_dropdown(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-right","ul.text-right",134983027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.border-b.py-small.px-regular","li.border-b.py-small.px-regular",1806027964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["/connections/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.grid_view.toggle_dropdown_status(item);
})], null),"Edit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("active",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.grid_view.change_status(item);
})], null),"Deactivate"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-green-600.text-sm","a.text-green-600.text-sm",518298324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.connections.views.grid_view.change_status(item);
})], null),"Activate"], null))], null)], null);
});
webapp.connections.views.grid_view.connection_card_popover = (function webapp$connections$views$grid_view$connection_card_popover(connection){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-small top-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.connections.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null)),new cljs.core.Keyword(null,"component","component",1555936782),webapp.connections.views.grid_view.item_dropdown(connection),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.connections.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),false);
})], null))], null);
});
webapp.connections.views.grid_view.card_empty_connections = (function webapp$connections$views$grid_view$card_empty_connections(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex flex-col justify-center items-center cursor-pointer"," p-regular bg-white rounded-lg h-32"," border shadow-0 hover:shadow transition"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form_modal.form,null,new cljs.core.Keyword(null,"create","create",-1301499256)], null),new cljs.core.Keyword(null,"large","large",-196820544),webapp.connections.views.grid_view.close_modal_dialog], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 opacity-40 group-hover:opacity-50 transition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-plus-blue.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-blue-500"], null),"Create a connection"], null)], null);
});
webapp.connections.views.grid_view.connection_card = (function webapp$connections$views$grid_view$connection_card(connection,admin_QMARK_){
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(connection),"active");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex flex-col relative p-regular bg-white rounded-lg"," border shadow-0 hover:shadow transition h-full"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),["/connections/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)),"/queries/new"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm text-gray-900",(((!(active_QMARK_)))?" opacity-50 italic":null)].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection),(((!(active_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-italic text-xs text-gray-600"], null)," (inactive)"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500"], null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-start py-regular gap-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-wrap gap-small"], null),(function (){var iter__4652__auto__ = (function webapp$connections$views$grid_view$connection_card_$_iter__30276(s__30277){
return (new cljs.core.LazySeq(null,(function (){
var s__30277__$1 = s__30277;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30277__$1);
if(temp__5753__auto__){
var s__30277__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30277__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30277__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30279 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30278 = (0);
while(true){
if((i__30278 < size__4651__auto__)){
var group = cljs.core._nth(c__4650__auto__,i__30278);
cljs.core.chunk_append(b__30279,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.basic,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)));

var G__30284 = (i__30278 + (1));
i__30278 = G__30284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30279),webapp$connections$views$grid_view$connection_card_$_iter__30276(cljs.core.chunk_rest(s__30277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30279),null);
}
} else {
var group = cljs.core.first(s__30277__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.badge.basic,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group], null)),webapp$connections$views$grid_view$connection_card_$_iter__30276(cljs.core.rest(s__30277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(connection));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow justify-end items-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-small text-xs text-blue-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Open"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 transform group-hover:translate-x-0.5 transition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-right-blue.svg"], null)], null)], null)], null)], null)], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.grid_view.connection_card_popover,connection], null):null)], null);
});
webapp.connections.views.grid_view.main = (function webapp$connections$views$grid_view$main(_){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
return (function (connections){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["grid grid-cols-3 gap-regular ","2xl:grid-cols-4"].join('')], null),((cljs.core.empty_QMARK_(connections))?(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.grid_view.card_empty_connections], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["col-span-3 text-center p-x-large"," text-sm text-gray-400 font-semibold"].join('')], null),["You have no connections. ","If you need access to some, contact the admin"].join('')], null)):null),(function (){var iter__4652__auto__ = (function webapp$connections$views$grid_view$main_$_iter__30280(s__30281){
return (new cljs.core.LazySeq(null,(function (){
var s__30281__$1 = s__30281;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30281__$1);
if(temp__5753__auto__){
var s__30281__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30281__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30281__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30283 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30282 = (0);
while(true){
if((i__30282 < size__4651__auto__)){
var connection = cljs.core._nth(c__4650__auto__,i__30282);
cljs.core.chunk_append(b__30283,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.grid_view.connection_card,connection,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null)));

var G__30286 = (i__30282 + (1));
i__30282 = G__30286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30283),webapp$connections$views$grid_view$main_$_iter__30280(cljs.core.chunk_rest(s__30281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30283),null);
}
} else {
var connection = cljs.core.first(s__30281__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.grid_view.connection_card,connection,admin_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection)], null)),webapp$connections$views$grid_view$main_$_iter__30280(cljs.core.rest(s__30281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(connections);
})()], null);
});
});

//# sourceMappingURL=webapp.connections.views.grid_view.js.map
