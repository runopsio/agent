goog.provide('webapp.components.searchbox');
webapp.components.searchbox.searchbox_icon = (function webapp$components$searchbox$searchbox_icon(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-5 w-5 text-gray-400",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"8.5",new cljs.core.Keyword(null,"cy","cy",755331060),"8.5",new cljs.core.Keyword(null,"r","r",-471384190),"5.75",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M17.25 17.25L13 13",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null)], null)], null);
});
webapp.components.searchbox.no_results = (function webapp$components$searchbox$no_results(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink w-32 mx-auto p-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/runops-illustrations/pc+monitor.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700 text-sm font-bold"], null),"No results with this criteria."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-300 text-xs pb-x-small"], null),"Maybe some typo?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 text-xs"], null),"We do not consider spaces, traces (-) or underscores (_)."], null)], null)], null);
});
webapp.components.searchbox.searchbox_list_icon = (function webapp$components$searchbox$searchbox_list_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-5 w-5",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
});
webapp.components.searchbox.searchbox_item = (function webapp$components$searchbox$searchbox_item(p__49868){
var map__49869 = p__49868;
var map__49869__$1 = cljs.core.__destructure_map(map__49869);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"item","item",249373802));
var display_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"display-key","display-key",-1366785151));
var meta_display_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var close_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"close-list","close-list",-1609015538));
var searchable_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293));
var meta_values_string = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49863_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__49863_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49863_SHARP_.cljs$core$IFn$_invoke$arity$1(item) : p1__49863_SHARP_.call(null,item)));
}),meta_display_keys));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative select-none text-gray-900 ","py-2 pl-3 pr-9 text-xs ","hover:bg-gray-100 cursor-pointer ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),selected))?"bg-gray-100 cursor-default ":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(item) : on_change.call(null,item));

return (close_list.cljs$core$IFn$_invoke$arity$0 ? close_list.cljs$core$IFn$_invoke$arity$0() : close_list.call(null));
}),new cljs.core.Keyword(null,"role","role",-736691072),"option",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block truncate"], null),(display_key.cljs$core$IFn$_invoke$arity$1 ? display_key.cljs$core$IFn$_invoke$arity$1(item) : display_key.call(null,item)),(cljs.core.truth_(meta_display_keys)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 italic"], null),[" ",meta_values_string].join('')], null):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gap-small text-xxs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-500 pr-x-small"], null),"{"], null),(function (){var iter__4652__auto__ = (function webapp$components$searchbox$searchbox_item_$_iter__49872(s__49873){
return (new cljs.core.LazySeq(null,(function (){
var s__49873__$1 = s__49873;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49873__$1);
if(temp__5753__auto__){
var s__49873__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49873__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49873__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49875 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49874 = (0);
while(true){
if((i__49874 < size__4651__auto__)){
var vec__49878 = cljs.core._nth(c__4650__auto__,i__49874);
var item_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49878,(0),null);
var item_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49878,(1),null);
cljs.core.chunk_append(b__49875,(cljs.core.truth_(cljs.core.some(((function (i__49874,vec__49878,item_key,item_value,c__4650__auto__,size__4651__auto__,b__49875,s__49873__$2,temp__5753__auto__,meta_values_string,map__49869,map__49869__$1,item,display_key,meta_display_keys,selected,on_change,close_list,searchable_keys){
return (function (p1__49866_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_key,p1__49866_SHARP_);
});})(i__49874,vec__49878,item_key,item_value,c__4650__auto__,size__4651__auto__,b__49875,s__49873__$2,temp__5753__auto__,meta_values_string,map__49869,map__49869__$1,item,display_key,meta_display_keys,selected,on_change,close_list,searchable_keys))
,searchable_keys))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_value)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink gap-x-small whitespace-normal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 pr-x-small"], null),item_key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-500 pr-x-small"], null),item_value], null)], null):null));

var G__49927 = (i__49874 + (1));
i__49874 = G__49927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49875),webapp$components$searchbox$searchbox_item_$_iter__49872(cljs.core.chunk_rest(s__49873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49875),null);
}
} else {
var vec__49881 = cljs.core.first(s__49873__$2);
var item_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49881,(0),null);
var item_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49881,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.some(((function (vec__49881,item_key,item_value,s__49873__$2,temp__5753__auto__,meta_values_string,map__49869,map__49869__$1,item,display_key,meta_display_keys,selected,on_change,close_list,searchable_keys){
return (function (p1__49866_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_key,p1__49866_SHARP_);
});})(vec__49881,item_key,item_value,s__49873__$2,temp__5753__auto__,meta_values_string,map__49869,map__49869__$1,item,display_key,meta_display_keys,selected,on_change,close_list,searchable_keys))
,searchable_keys))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_value)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink gap-x-small whitespace-normal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 pr-x-small"], null),item_key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-500 pr-x-small"], null),item_value], null)], null):null),webapp$components$searchbox$searchbox_item_$_iter__49872(cljs.core.rest(s__49873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(item);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-gray-500"], null),"}"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),selected))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.searchbox_list_icon], null)], null):null)], null);
});
webapp.components.searchbox.search_options = (function webapp$components$searchbox$search_options(options,pattern,searchable_keys){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49886_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.vals(cljs.core.select_keys(p1__49886_SHARP_,searchable_keys))),/-|_/,""),clojure.string.replace(pattern,/ |-|_/,""));
}),options);
});
/**
 *  SEARCHBOX component searches for an item with by a set of values from a shallow object.
 *   EXAMPLE: given the map {:name :john :last-name :doe :nationality :brazilian}, every value (pointed by searchable-keys) is searchable and will point to its choosen key
 *   size -> a variation property for a regular sized or a small one. Valid option is :small, if anything else is passed, it will consider the regular
 *   name -> form name property;
 *   label -> for adding a label to the combobox. If not provided, the <label> tag won't be rendered;
 *   list-classes -> to provide some specific stylezation to the list of options, it is expected to be passed CSS classes;
 *   placeholder -> placeholder form property for input;
 *   clear? -> a boolean to set a clear first option in the list
 *   loading? -> a boolean for managing a loading status in the search box list
 *   selected -> a string with the selected value (see options);
 *   on-select-result -> a function triggered whenever the user clicks on an result.
 *   on-change-results-cb -> a callback function to be used on upperscope to have access to the results and manage anything that might be of the upperscope interest
 *   hide-results-list -> a boolean used to do not show the results list. Usually useful with `on-change-results-cb` and the list is not necessary because the results are shown in the upperscope
 *   on-focus -> a function that will be executed on input focus
 *   on-blur -> a function that will be executed on input blur
 *   options -> a list of hashmaps to be rendered searched. Example [{:name "name" :type "type" :review_type "review_type" :redact "redact"}]
 *   display-key -> the key that will be used to display information in an user friendly way. This key must be from a valid key from options. Example :name
 *   meta-display-keys -> meta information keys from a option that you want to put to the side of display-key. Example: [:name :type]
 *   searchable-keys -> the keys from the options that you want to be searchable. Example: [:name :type :review_type :redact]
 *   
 */
webapp.components.searchbox.main = (function webapp$components$searchbox$main(p__49888){
var map__49889 = p__49888;
var map__49889__$1 = cljs.core.__destructure_map(map__49889);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49889__$1,new cljs.core.Keyword(null,"options","options",99638489));
var list_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"closed","closed",-919675359));
var close_list = (function (){
return cljs.core.reset_BANG_(list_status,new cljs.core.Keyword(null,"closed","closed",-919675359));
});
var open_list = (function (){
return cljs.core.reset_BANG_(list_status,new cljs.core.Keyword(null,"open","open",-1763596448));
});
var searched_options = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(options);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__49890){
var map__49891 = p__49890;
var map__49891__$1 = cljs.core.__destructure_map(map__49891);
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"options","options",99638489));
var meta_display_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
var display_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"display-key","display-key",-1366785151));
var on_change_results_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"on-change-results-cb","on-change-results-cb",-909078750));
var list_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var searchable_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var hide_results_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"hide-results-list","hide-results-list",1113706229));
var on_select_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49891__$1,new cljs.core.Keyword(null,"on-select-result","on-select-result",742011127));
var lifecycle_iterable = ((cljs.core.empty_QMARK_(cljs.core.deref(searched_options)))?options__$1:cljs.core.deref(searched_options));
var no_results_QMARK_ = ((cljs.core.empty_QMARK_(cljs.core.deref(searched_options))) && ((cljs.core.count(cljs.core.deref(input_value)) > (0))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),name,new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700 mb-x-small"], null),label], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[placeholder,(function (){
if(cljs.core.truth_(on_focus)){
(on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
} else {
}

open_list();

return cljs.core.reset_BANG_(searched_options,options__$1);
}),name,"off",(function (){var or__4253__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return selected;
}
})(),(function (){
if(cljs.core.truth_(on_blur)){
(on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
}

return setTimeout(close_list,(150));
}),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(27))){
return close_list();
} else {
return null;
}
}),name,["w-full rounded-md border shadow-sm h-12 ","border-gray-300 bg-white ","pl-3 pr-12 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,new cljs.core.Keyword(null,"small","small",2133478704)))?"py-1 ":"py-3 "),"focus:border-indigo-500 focus:outline-none ","focus:ring-1 focus:ring-indigo-500 ","sm:text-sm "].join(''),(function (e){
var value = e.target.value;
var results = webapp.components.searchbox.search_options(options__$1,value,searchable_keys);
cljs.core.reset_BANG_(input_value,value);

if(cljs.core.not(loading_QMARK_)){
cljs.core.reset_BANG_(searched_options,results);

if(cljs.core.truth_(on_change_results_cb)){
return (on_change_results_cb.cljs$core$IFn$_invoke$arity$1 ? on_change_results_cb.cljs$core$IFn$_invoke$arity$1(results) : on_change_results_cb.call(null,results));
} else {
return null;
}
} else {
return null;
}
})])], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute w-4 h-4 inset-y-4 right-10 opacity-50 animate-spin origin-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.icon.regular,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"loader-circle"], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
open_list();

return document.getElementById(name).focus();
}),new cljs.core.Keyword(null,"class","class",-2030961996),["absolute flex items-center rounded-r-md ","inset-y-0 right-0 px-2 focus:outline-none "].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.searchbox_icon], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(list_status),new cljs.core.Keyword(null,"open","open",-1763596448))) && (cljs.core.not(hide_results_list))))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute overflow-auto rounded-md bg-white ","shadow-lg ring-1 ring-black ring-opacity-5 ","z-10 mt-1 max-h-80 w-full py-1 ","text-base focus:outline-none sm:text-sm ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(list_classes)?list_classes:null))].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),"options",new cljs.core.Keyword(null,"role","role",-736691072),"listbox"], null),(cljs.core.truth_(clear_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative select-none text-gray-500 ","py-1 pl-3 pr-9 text-xs ","hover:bg-gray-100 cursor-pointer ","border-b"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_select_result.cljs$core$IFn$_invoke$arity$1 ? on_select_result.cljs$core$IFn$_invoke$arity$1("") : on_select_result.call(null,""));

cljs.core.reset_BANG_(input_value,"");

return close_list();
}),new cljs.core.Keyword(null,"role","role",-736691072),"option",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block truncate"], null),"Clear"], null)], null):null),((no_results_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.no_results], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500 italic p-small"], null),"loading..."], null):null),((((cljs.core.not(loading_QMARK_)) && ((!(no_results_QMARK_)))))?(function (){var iter__4652__auto__ = (function webapp$components$searchbox$main_$_iter__49899(s__49900){
return (new cljs.core.LazySeq(null,(function (){
var s__49900__$1 = s__49900;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49900__$1);
if(temp__5753__auto__){
var s__49900__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49900__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49900__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49902 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49901 = (0);
while(true){
if((i__49901 < size__4651__auto__)){
var option = cljs.core._nth(c__4650__auto__,i__49901);
cljs.core.chunk_append(b__49902,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.searchbox_item,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"item","item",249373802),option,new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826),meta_display_keys,new cljs.core.Keyword(null,"display-key","display-key",-1366785151),display_key,new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293),searchable_keys,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__49901,option,c__4650__auto__,size__4651__auto__,b__49902,s__49900__$2,temp__5753__auto__,lifecycle_iterable,no_results_QMARK_,map__49891,map__49891__$1,options__$1,meta_display_keys,clear_QMARK_,display_key,on_change_results_cb,list_classes,selected,placeholder,on_focus,name,loading_QMARK_,on_blur,searchable_keys,size,label,hide_results_list,on_select_result,list_status,close_list,open_list,searched_options,input_value,map__49889,map__49889__$1,options){
return (function (value){
cljs.core.reset_BANG_(input_value,(display_key.cljs$core$IFn$_invoke$arity$1 ? display_key.cljs$core$IFn$_invoke$arity$1(value) : display_key.call(null,value)));

return (on_select_result.cljs$core$IFn$_invoke$arity$1 ? on_select_result.cljs$core$IFn$_invoke$arity$1(value) : on_select_result.call(null,value));
});})(i__49901,option,c__4650__auto__,size__4651__auto__,b__49902,s__49900__$2,temp__5753__auto__,lifecycle_iterable,no_results_QMARK_,map__49891,map__49891__$1,options__$1,meta_display_keys,clear_QMARK_,display_key,on_change_results_cb,list_classes,selected,placeholder,on_focus,name,loading_QMARK_,on_blur,searchable_keys,size,label,hide_results_list,on_select_result,list_status,close_list,open_list,searched_options,input_value,map__49889,map__49889__$1,options))
,new cljs.core.Keyword(null,"close-list","close-list",-1609015538),close_list,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null)));

var G__49928 = (i__49901 + (1));
i__49901 = G__49928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49902),webapp$components$searchbox$main_$_iter__49899(cljs.core.chunk_rest(s__49900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49902),null);
}
} else {
var option = cljs.core.first(s__49900__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.searchbox.searchbox_item,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"item","item",249373802),option,new cljs.core.Keyword(null,"meta-display-keys","meta-display-keys",1970584826),meta_display_keys,new cljs.core.Keyword(null,"display-key","display-key",-1366785151),display_key,new cljs.core.Keyword(null,"searchable-keys","searchable-keys",769509293),searchable_keys,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (option,s__49900__$2,temp__5753__auto__,lifecycle_iterable,no_results_QMARK_,map__49891,map__49891__$1,options__$1,meta_display_keys,clear_QMARK_,display_key,on_change_results_cb,list_classes,selected,placeholder,on_focus,name,loading_QMARK_,on_blur,searchable_keys,size,label,hide_results_list,on_select_result,list_status,close_list,open_list,searched_options,input_value,map__49889,map__49889__$1,options){
return (function (value){
cljs.core.reset_BANG_(input_value,(display_key.cljs$core$IFn$_invoke$arity$1 ? display_key.cljs$core$IFn$_invoke$arity$1(value) : display_key.call(null,value)));

return (on_select_result.cljs$core$IFn$_invoke$arity$1 ? on_select_result.cljs$core$IFn$_invoke$arity$1(value) : on_select_result.call(null,value));
});})(option,s__49900__$2,temp__5753__auto__,lifecycle_iterable,no_results_QMARK_,map__49891,map__49891__$1,options__$1,meta_display_keys,clear_QMARK_,display_key,on_change_results_cb,list_classes,selected,placeholder,on_focus,name,loading_QMARK_,on_blur,searchable_keys,size,label,hide_results_list,on_select_result,list_status,close_list,open_list,searched_options,input_value,map__49889,map__49889__$1,options))
,new cljs.core.Keyword(null,"close-list","close-list",-1609015538),close_list,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null)),webapp$components$searchbox$main_$_iter__49899(cljs.core.rest(s__49900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lifecycle_iterable);
})():null)], null):null)], null)], null);
});
});

//# sourceMappingURL=webapp.components.searchbox.js.map
