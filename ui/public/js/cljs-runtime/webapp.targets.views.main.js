goog.provide('webapp.targets.views.main');
webapp.targets.views.main.section_header = (function webapp$targets$views$main$section_header(admin_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-regular items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-bar.col-span-3","div.search-bar.col-span-3",-1306717088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.targets_filter.main], null)], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create target",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.target_form_modal.form,null,new cljs.core.Keyword(null,"create","create",-1301499256)], null)], null));
})], null))], null):null)], null);
});
webapp.targets.views.main.next_page = (function webapp$targets$views$main$next_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.pt-regular.justify-center","div.flex.pt-regular.justify-center",1781930668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-48","div.w-48",-1912173103),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Load more",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.targets.events","get-next-page","webapp.targets.events/get-next-page",1734371496)], null));
})], null))], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.targets !== 'undefined') && (typeof webapp.targets.views !== 'undefined') && (typeof webapp.targets.views.main !== 'undefined') && (typeof webapp.targets.views.main.targets_layout !== 'undefined')){
} else {
webapp.targets.views.main.targets_layout = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30803 = cljs.core.get_global_hierarchy;
return (fexpr__30803.cljs$core$IFn$_invoke$arity$0 ? fexpr__30803.cljs$core$IFn$_invoke$arity$0() : fexpr__30803.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.targets.views.main","targets-layout"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.targets.views.main.targets_layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (_,targets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.list_view.main,targets], null);
}));
webapp.targets.views.main.targets_layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,targets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.grid_view.main,targets], null);
}));
webapp.targets.views.main.layout_switcher = (function webapp$targets$views$main$layout_switcher(p__30804){
var map__30805 = p__30804;
var map__30805__$1 = cljs.core.__destructure_map(map__30805);
var set_grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,new cljs.core.Keyword(null,"set-grid","set-grid",266786468));
var set_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,new cljs.core.Keyword(null,"set-list","set-list",10803291));
var view_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,new cljs.core.Keyword(null,"view-style","view-style",-175127862));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small text-xs pt-regular pb-small justify-end px-small"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-800"], null),"View in:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),set_grid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-4 cursor-pointer ","hover:opacity-80 transition ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_style,new cljs.core.Keyword(null,"grid","grid",402978600)))?"opacity-100":"opacity-50")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Grid view",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-grid-gray.svg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),set_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-4 cursor-pointer ","hover:opacity-80 transition ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_style,new cljs.core.Keyword(null,"list","list",765357683)))?"opacity-100":"opacity-50")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"List view",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-list-gray.svg"], null)], null)], null)], null)], null);
});
webapp.targets.views.main.panel = (function webapp$targets$views$main$panel(){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null));
var targets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","targets","webapp.subs/targets",1387670906)], null));
var targets_next_page = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","targets-next-page","webapp.subs/targets-next-page",-558048830)], null));
var view_style = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-targets","get-targets",-2090102436)], null));

return (function (){
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-large","div.px-large",-711310353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.main.section_header,admin_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.main.layout_switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"set-grid","set-grid",266786468),(function (){
return cljs.core.reset_BANG_(view_style,new cljs.core.Keyword(null,"grid","grid",402978600));
}),new cljs.core.Keyword(null,"set-list","set-list",10803291),(function (){
return cljs.core.reset_BANG_(view_style,new cljs.core.Keyword(null,"list","list",765357683));
}),new cljs.core.Keyword(null,"view-style","view-style",-175127862),cljs.core.deref(view_style)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.main.targets_layout,cljs.core.deref(view_style),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(targets))], null),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(targets_next_page))))?null:webapp.targets.views.main.next_page())], null);
});
});

//# sourceMappingURL=webapp.targets.views.main.js.map
