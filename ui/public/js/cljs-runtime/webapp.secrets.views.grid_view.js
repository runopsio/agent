goog.provide('webapp.secrets.views.grid_view');
if((typeof webapp !== 'undefined') && (typeof webapp.secrets !== 'undefined') && (typeof webapp.secrets.views !== 'undefined') && (typeof webapp.secrets.views.grid_view !== 'undefined') && (typeof webapp.secrets.views.grid_view.item_state !== 'undefined')){
} else {
webapp.secrets.views.grid_view.item_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webapp.secrets.views.grid_view.close_modal_dialog = (function webapp$secrets$views$grid_view$close_modal_dialog(){
var dialog_text = "Are you sure you want to discard this update secret?";
var on_success_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});
var open_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),dialog_text,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_dialog], null)], null));
});
return open_dialog();
});
webapp.secrets.views.grid_view.toggle_dropdown_status = (function webapp$secrets$views$grid_view$toggle_dropdown_status(item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.secrets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.secrets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
});
webapp.secrets.views.grid_view.confirm_delete_secret = (function webapp$secrets$views$grid_view$confirm_delete_secret(secret_key){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Secret deletion",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-regular","p.mb-regular",-1576444515),"Do you really want to delete ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),secret_key], null)," secret?"], null),webapp.components.divider.main(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-regular","div.grid.grid-cols-2.gap-regular",-1979651726),webapp.components.button.secondary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null)),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Confirm deactivation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->delete-secret","secrets->delete-secret",893904953),secret_key], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null))], null)], null);
});
webapp.secrets.views.grid_view.delete_secret = (function webapp$secrets$views$grid_view$delete_secret(item){
webapp.secrets.views.grid_view.toggle_dropdown_status(item);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.grid_view.confirm_delete_secret,item], null)], null));
});
webapp.secrets.views.grid_view.item_dropdown = (function webapp$secrets$views$grid_view$item_dropdown(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-right","ul.text-right",134983027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webapp.secrets.views.grid_view.delete_secret(item);
})], null),"Delete"], null)], null)], null);
});
webapp.secrets.views.grid_view.secret_card_popover = (function webapp$secrets$views$grid_view$secret_card_popover(secret){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-small top-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.secrets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.secrets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-dots-vertical.svg"], null)], null)], null),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webapp.secrets.views.grid_view.item_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null)),new cljs.core.Keyword(null,"component","component",1555936782),webapp.secrets.views.grid_view.item_dropdown(secret),new cljs.core.Keyword(null,"on-click-outside","on-click-outside",1213535688),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webapp.secrets.views.grid_view.item_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret,new cljs.core.Keyword(null,"dropdown-status","dropdown-status",777318957)], null),false);
})], null))], null);
});
webapp.secrets.views.grid_view.secret_card = (function webapp$secrets$views$grid_view$secret_card(secret){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex flex-col relative p-regular bg-white rounded-lg"," border shadow-0 hover:shadow transition h-full"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.secret_form_modal_update.form,secret], null),new cljs.core.Keyword(null,"large","large",-196820544),webapp.secrets.views.grid_view.close_modal_dialog], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-900 mb-large"], null),secret], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-grow justify-end items-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-small text-xs text-blue-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Open"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 transform group-hover:translate-x-0.5 transition"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-arrow-right-blue.svg"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.grid_view.secret_card_popover,secret], null)], null);
});
webapp.secrets.views.grid_view.main = (function webapp$secrets$views$grid_view$main(_){
return (function (secrets){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["grid grid-cols-3 gap-regular ","2xl:grid-cols-4"].join('')], null),(function (){var iter__4652__auto__ = (function webapp$secrets$views$grid_view$main_$_iter__31060(s__31061){
return (new cljs.core.LazySeq(null,(function (){
var s__31061__$1 = s__31061;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31061__$1);
if(temp__5753__auto__){
var s__31061__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31061__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31061__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31063 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31062 = (0);
while(true){
if((i__31062 < size__4651__auto__)){
var secret = cljs.core._nth(c__4650__auto__,i__31062);
cljs.core.chunk_append(b__31063,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.grid_view.secret_card,secret], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),secret], null)));

var G__31064 = (i__31062 + (1));
i__31062 = G__31064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31063),webapp$secrets$views$grid_view$main_$_iter__31060(cljs.core.chunk_rest(s__31061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31063),null);
}
} else {
var secret = cljs.core.first(s__31061__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.grid_view.secret_card,secret], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),secret], null)),webapp$secrets$views$grid_view$main_$_iter__31060(cljs.core.rest(s__31061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys(secrets));
})()], null);
});
});

//# sourceMappingURL=webapp.secrets.views.grid_view.js.map
