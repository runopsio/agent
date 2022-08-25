goog.provide('webapp.components.tabs');
webapp.components.tabs.list_item = (function webapp$components$tabs$list_item(item,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50513 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__50513) : on_click.call(null,G__50513));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(item))?"border-gray-900 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 cursor-pointer")," whitespace-nowrap flex py-regular px-small border-b-2 font-medium text-sm"].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(item))?"page":null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null);
});
webapp.components.tabs.state_builder = (function webapp$components$tabs$state_builder(item,default_value){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),item,new cljs.core.Keyword(null,"current","current",-1088038603),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,default_value))?true:false)], null)]);
});
webapp.components.tabs.update_tab_view = (function webapp$components$tabs$update_tab_view(tabs_list,clicked_tab){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50541){
var vec__50542 = p__50541;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,clicked_tab)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabs_list,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"current","current",-1088038603)], null),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabs_list,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"current","current",-1088038603)], null),false);
}
}),cljs.core.deref(tabs_list)));
});
/**
 * on-change -> a lambda that will return the value clicked
 * default-value -> a name from the tabs list that has to be the default selected item. Default is the first item from tabs
 * tabs -> a list of symbols or strings for each tab to be shown
 * 
 *   ;;;;;;;;;;;
 *   ;; USAGE ;;
 *   ;;;;;;;;;;;
 * 
 *   [tabs/tabs
 *  {:on-change #(println %) -> you can use this to manage a panel view
 *   :tabs [:Tasks :Reviews] -> inside the tabs it mounts a complex state, no need to worry about it in your implementation
 *   :default-value :Tasks}] -> optional, if not provided, it gets the first value from :tabs configuration
 *   
 */
webapp.components.tabs.tabs = (function webapp$components$tabs$tabs(config){
var default_value = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(config));
}
})();
var tabs_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50551_SHARP_){
return webapp.components.tabs.state_builder(p1__50551_SHARP_,default_value);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(config))));
var on_change = (function (clicked_tab){
var fexpr__50592_50616 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(config);
(fexpr__50592_50616.cljs$core$IFn$_invoke$arity$1 ? fexpr__50592_50616.cljs$core$IFn$_invoke$arity$1(clicked_tab) : fexpr__50592_50616.call(null,clicked_tab));

return webapp.components.tabs.update_tab_view(tabs_state,clicked_tab);
});
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular","div.mb-regular",-1073230200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:block","div.sm:block",-1994366617),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-b.border-gray-200","div.border-b.border-gray-200",-1048944763),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.-mb-px.flex.space-x-8","nav.-mb-px.flex.space-x-8",1593670835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"Tabs","Tabs",2107467899)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50599){
var vec__50600 = p__50599;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50600,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50600,(1),null);
return webapp.components.tabs.list_item(value,on_change);
}),cljs.core.deref(tabs_state)))], null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.components.tabs.js.map
