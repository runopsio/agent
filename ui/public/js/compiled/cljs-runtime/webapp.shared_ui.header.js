goog.provide('webapp.shared_ui.header');
webapp.shared_ui.header.dropdown_list = (function webapp$shared_ui$header$dropdown_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w-36","ul.w-36",1882302430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular.border-b","li.py-small.px-regular.border-b",-959666802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-700.text-sm","a.text-gray-700.text-sm",-245166318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/settings",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
})], null),new cljs.core.Keyword(null,"Settings","Settings",378369876)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.py-small.px-regular","li.py-small.px-regular",230699477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-red-600.text-sm","a.text-red-600.text-sm",2066171006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
})], null),"Log out"], null)], null)], null);
});
webapp.shared_ui.header.resources = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"tasks",new cljs.core.Keyword(null,"uri","uri",-774711847),"/tasks"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"targets",new cljs.core.Keyword(null,"uri","uri",-774711847),"/targets"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"users",new cljs.core.Keyword(null,"uri","uri",-774711847),"/users"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"agents",new cljs.core.Keyword(null,"uri","uri",-774711847),"/agents"], null)], null);
webapp.shared_ui.header.toggle_dropdown = (function webapp$shared_ui$header$toggle_dropdown(status){
return cljs.core.not(status);
});
if((typeof webapp !== 'undefined') && (typeof webapp.shared_ui !== 'undefined') && (typeof webapp.shared_ui.header !== 'undefined') && (typeof webapp.shared_ui.header.dropdown_status !== 'undefined')){
} else {
webapp.shared_ui.header.dropdown_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
webapp.shared_ui.header.dropdown = (function webapp$shared_ui$header$dropdown(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.flex.items-center","div.relative.flex.items-center",1786319670),webapp.components.popover.right(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(webapp.shared_ui.header.dropdown_status),new cljs.core.Keyword(null,"component","component",1555936782),webapp.shared_ui.header.dropdown_list()], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-5","figure.w-5",622946640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-cheveron-down.svg"], null)], null)], null)], null);
});
webapp.shared_ui.header.navigation = (function webapp$shared_ui$header$navigation(user){
if(cljs.core.truth_(cljs.core.some((function (p1__30186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",p1__30186_SHARP_);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(user)))){
var active_page = window.location.pathname;
var _ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-panel","webapp.subs/active-panel",-1188363582)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.antialiased","nav.antialiased",633165266),(function (){var iter__4652__auto__ = (function webapp$shared_ui$header$navigation_$_iter__30187(s__30190){
return (new cljs.core.LazySeq(null,(function (){
var s__30190__$1 = s__30190;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30190__$1);
if(temp__5753__auto__){
var s__30190__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30190__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30190__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30193 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30191 = (0);
while(true){
if((i__30191 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__30191);
cljs.core.chunk_append(b__30193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.pr-regular.transition.hover:text-magenta","a.text-sm.pr-regular.transition.hover:text-magenta",-212732297),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(item)))?"text-black underline":"text-gray-500")], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)], null));

var G__30208 = (i__30191 + (1));
i__30191 = G__30208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30193),webapp$shared_ui$header$navigation_$_iter__30187(cljs.core.chunk_rest(s__30190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30193),null);
}
} else {
var item = cljs.core.first(s__30190__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.pr-regular.transition.hover:text-magenta","a.text-sm.pr-regular.transition.hover:text-magenta",-212732297),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(item)))?"text-black underline":"text-gray-500")], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)], null),webapp$shared_ui$header$navigation_$_iter__30187(cljs.core.rest(s__30190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(webapp.shared_ui.header.resources);
})()], null);
} else {
return null;
}
});
if((typeof webapp !== 'undefined') && (typeof webapp.shared_ui !== 'undefined') && (typeof webapp.shared_ui.header !== 'undefined') && (typeof webapp.shared_ui.header.quickstart_link !== 'undefined')){
} else {
webapp.shared_ui.header.quickstart_link = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30202 = cljs.core.get_global_hierarchy;
return (fexpr__30202.cljs$core$IFn$_invoke$arity$0 ? fexpr__30202.cljs$core$IFn$_invoke$arity$0() : fexpr__30202.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.shared-ui.header","quickstart-link"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.shared_ui.header.quickstart_link.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-admin","not-admin",-472367706),(function (_){
return null;
}));
webapp.shared_ui.header.quickstart_link.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"admin","admin",-1239101627),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.font-semibold.pr-regular.transition.hover:text-black","a.text-xs.font-semibold.pr-regular.transition.hover:text-black",911575058),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"/quickstarts",new cljs.core.Keyword(null,"key","key",-1516042587),"Quickstarts",new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),"quickstarts"], null);
}));
webapp.shared_ui.header.header = (function webapp$shared_ui$header$header(){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","user","webapp.subs/user",-1125424936)], null)));
var admin_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"admin"),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(user));
if(cljs.core.not(user)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","get-user","webapp.events/get-user",-918369556)], null));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full min-w-app__container ","bg-white shadow ","py-small px-large mb-regular "].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-cols-2.items-center","div.flex.flex-cols-2.items-center",-1564917440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-grow.gap-regular.items-center","div.flex.flex-grow.gap-regular.items-center",-1499825623),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-24 px-small cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/Runops_Logo_Runops_Logo_Preto.png",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.shared_ui.header.navigation,user], null)], null),(cljs.core.truth_(admin_QMARK_)?webapp.shared_ui.header.quickstart_link.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"admin","admin",-1239101627)):webapp.shared_ui.header.quickstart_link.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-admin","not-admin",-472367706))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-shrink.flex-row-reverse.items-center.cursor-pointer","div.flex.flex-shrink.flex-row-reverse.items-center.cursor-pointer",593053684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(webapp.shared_ui.header.dropdown_status,cljs.core.not(cljs.core.deref(webapp.shared_ui.header.dropdown_status)));
})], null),webapp.shared_ui.header.dropdown(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-semibold.text-black","span.text-xs.font-semibold.text-black",1301495044),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null);
});

//# sourceMappingURL=webapp.shared_ui.header.js.map
