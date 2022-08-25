goog.provide('webapp.connections.views.main');
webapp.connections.views.main.close_modal_dialog = (function webapp$connections$views$main$close_modal_dialog(){
var dialog_text = "Are you sure you want to discard this new connection?";
var on_success_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});
var open_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),dialog_text,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_dialog], null)], null));
});
return open_dialog();
});
webapp.connections.views.main.section_header = (function webapp$connections$views$main$section_header(admin_QMARK_,searched_connections_atom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-regular items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-bar.col-span-3","div.search-bar.col-span-3",-1306717088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connections_filter.main,searched_connections_atom], null)], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create connection",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.connection_form_modal.form], null),new cljs.core.Keyword(null,"large","large",-196820544),webapp.connections.views.main.close_modal_dialog], null));
})], null))], null):null)], null);
});
webapp.connections.views.main.next_page = (function webapp$connections$views$main$next_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.pt-regular.justify-center","div.flex.pt-regular.justify-center",1781930668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-48","div.w-48",-1912173103),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Load more",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.connections.events","get-next-page","webapp.connections.events/get-next-page",1943257233)], null));
})], null))], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.connections !== 'undefined') && (typeof webapp.connections.views !== 'undefined') && (typeof webapp.connections.views.main !== 'undefined') && (typeof webapp.connections.views.main.connections_layout !== 'undefined')){
} else {
webapp.connections.views.main.connections_layout = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30287 = cljs.core.get_global_hierarchy;
return (fexpr__30287.cljs$core$IFn$_invoke$arity$0 ? fexpr__30287.cljs$core$IFn$_invoke$arity$0() : fexpr__30287.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.connections.views.main","connections-layout"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.connections.views.main.connections_layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (_,connections){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.list_view.main,connections], null);
}));
webapp.connections.views.main.connections_layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,connections){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.grid_view.main,connections], null);
}));
webapp.connections.views.main.layout_switcher = (function webapp$connections$views$main$layout_switcher(p__30288){
var map__30289 = p__30288;
var map__30289__$1 = cljs.core.__destructure_map(map__30289);
var set_grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30289__$1,new cljs.core.Keyword(null,"set-grid","set-grid",266786468));
var set_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30289__$1,new cljs.core.Keyword(null,"set-list","set-list",10803291));
var view_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30289__$1,new cljs.core.Keyword(null,"view-style","view-style",-175127862));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small text-xs pt-regular pb-small justify-end px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-800"], null),"View in:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),set_grid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-4 cursor-pointer ","hover:opacity-80 transition ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_style,new cljs.core.Keyword(null,"grid","grid",402978600)))?"opacity-100":"opacity-50")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Grid view",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-grid-gray.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),set_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-4 cursor-pointer ","hover:opacity-80 transition ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_style,new cljs.core.Keyword(null,"list","list",765357683)))?"opacity-100":"opacity-50")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"List view",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-list-gray.svg"], null)], null)], null)], null)], null);
});
webapp.connections.views.main.panel = (function webapp$connections$views$main$panel(){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
var connections = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","connections","webapp.subs/connections",-407614507)], null));
var searched_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_next_page = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","connections-next-page","webapp.subs/connections-next-page",-130914701)], null));
var feature_flags = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-flags","feature-flags",945050105)], null));
var view_style = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-connections","get-connections",742236564)], null));

return (function (){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
if(cljs.core.truth_(cljs.core.deref(feature_flags))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings->get-agents","settings->get-agents",-663403061),(cljs.core.truth_(new cljs.core.Keyword(null,"agents-events","agents-events",-846279452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(feature_flags)))?new cljs.core.Keyword(null,"new","new",-2085437848):new cljs.core.Keyword(null,"vintage","vintage",818195578))], null));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-large","div.px-large",-711310353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.main.section_header,admin_QMARK_,searched_connections], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.main.layout_switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"set-grid","set-grid",266786468),(function (){
return cljs.core.reset_BANG_(view_style,new cljs.core.Keyword(null,"grid","grid",402978600));
}),new cljs.core.Keyword(null,"set-list","set-list",10803291),(function (){
return cljs.core.reset_BANG_(view_style,new cljs.core.Keyword(null,"list","list",765357683));
}),new cljs.core.Keyword(null,"view-style","view-style",-175127862),cljs.core.deref(view_style)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.connections.views.main.connections_layout,cljs.core.deref(view_style),(cljs.core.truth_(cljs.core.deref(searched_connections))?cljs.core.deref(searched_connections):new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connections)))], null),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connections_next_page))))?null:webapp.connections.views.main.next_page())], null);
});
});

//# sourceMappingURL=webapp.connections.views.main.js.map
