goog.provide('webapp.components.tabs2');
webapp.components.tabs2.option = (function webapp$components$tabs2$option(item){
var attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)], null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),attrs,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)], null));
});
webapp.components.tabs2.a = (function webapp$components$tabs2$a(p__76399,on_click){
var map__76400 = p__76399;
var map__76400__$1 = cljs.core.__destructure_map(map__76400);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76400__$1,new cljs.core.Keyword(null,"value","value",305978217));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76400__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76400__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76400__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76400__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var aria_current = ((current === true)?"page":null);
var classes = ((current === true)?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300");
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.whitespace-nowrap.py-4.px-1.border-b-2.font-medium.text-sm","a.whitespace-nowrap.py-4.px-1.border-b-2.font-medium.text-sm",-787103964),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),aria_current,new cljs.core.Keyword(null,"class","class",-2030961996),classes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__4253__auto__ = disabled;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((disabled === true)?null:(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(href) : on_click.call(null,href));
}))], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null));
});
/**
 * 
 */
webapp.components.tabs2.main = (function webapp$components$tabs2$main(_){
return (function (p__76404){
var map__76405 = p__76404;
var map__76405__$1 = cljs.core.__destructure_map(map__76405);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76405__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76405__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76405__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:hidden","div.sm:hidden",-1069045681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sr-only","label.sr-only",-964684571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"tabs"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.block.w-full.pl-3.pr-10.py-2.text-base.border-gray-300.focus:outline-none.focus:ring-indigo-500.focus:border-indigo-500.sm:text-sm.rounded-md","select.block.w-full.pl-3.pr-10.py-2.text-base.border-gray-300.focus:outline-none.focus:ring-indigo-500.focus:border-indigo-500.sm:text-sm.rounded-md",-1651012230),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tabs",new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__76401_SHARP_){
return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__76401_SHARP_);
}),tabs),new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76402_SHARP_){
return webapp.components.tabs2.option(p1__76402_SHARP_);
}),tabs)], null)], null)], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.sm:block","div.hidden.sm:block",1954855850),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-b.border-gray-200","div.border-b.border-gray-200",-1048944763),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.-mb-px.flex.space-x-8","nav.-mb-px.flex.space-x-8",1593670835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Tabs"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76403_SHARP_){
return webapp.components.tabs2.a(p1__76403_SHARP_,on_click);
}),tabs)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.components.tabs2.js.map
