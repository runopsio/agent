goog.provide('webapp.components.combobox');
webapp.components.combobox.combobox_icon = (function webapp$components$combobox$combobox_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-5 w-5 text-gray-400",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
});
webapp.components.combobox.combobox_list_icon = (function webapp$components$combobox$combobox_list_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-5 w-5",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
});
webapp.components.combobox.combobox_item = (function webapp$components$combobox$combobox_item(p__31498){
var map__31499 = p__31498;
var map__31499__$1 = cljs.core.__destructure_map(map__31499);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"item","item",249373802));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var close_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"close-list","close-list",-1609015538));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative select-none text-gray-900 ","py-2 pl-3 pr-9 text-xs ","hover:bg-gray-100 cursor-pointer ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),selected))?"bg-gray-100 cursor-default ":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__31504_31520 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31504_31520) : on_change.call(null,G__31504_31520));

return (close_list.cljs$core$IFn$_invoke$arity$0 ? close_list.cljs$core$IFn$_invoke$arity$0() : close_list.call(null));
}),new cljs.core.Keyword(null,"role","role",-736691072),"option",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block truncate"], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),selected))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.combobox_list_icon], null)], null):null)], null);
});
webapp.components.combobox.search_options = (function webapp$components$combobox$search_options(options,pattern){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31509_SHARP_){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31509_SHARP_),pattern);
}),options);
});
/**
 * size -> a variation property for a regular sized or a small one. Valid option is :small, if anything else is passed, it will consider the regular
 *   name -> form name property;
 *   label -> for adding a label to the combobox. If not provided, the <label> tag won't be rendered;
 *   options -> a list of values to be rendered. The expected structure is {:value "", :text ""}, where value is the metadata for the selected information and text is anything you want to show in the option for that value;
 *   list-classes -> to provide some specific stylezation to the list of options, it is expected to be passed CSS classes;
 *   placeholder -> placeholder form property for input;
 *   selected -> a string with the selected value (see options);
 *   on-change -> a function triggered whenever the user clicks on another option.
 */
webapp.components.combobox.main = (function webapp$components$combobox$main(p__31511){
var map__31512 = p__31511;
var map__31512__$1 = cljs.core.__destructure_map(map__31512);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31512__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31512__$1,new cljs.core.Keyword(null,"options","options",99638489));
var list_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"closed","closed",-919675359));
var close_list = (function (){
return cljs.core.reset_BANG_(list_status,new cljs.core.Keyword(null,"closed","closed",-919675359));
});
var open_list = (function (){
return cljs.core.reset_BANG_(list_status,new cljs.core.Keyword(null,"open","open",-1763596448));
});
var searched_options = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(options);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = selected;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
return (function (p__31513){
var map__31514 = p__31513;
var map__31514__$1 = cljs.core.__destructure_map(map__31514);
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var list_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045));
var selected__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31514__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),name,new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700 mb-x-small"], null),label], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[placeholder,(function (){
open_list();

return cljs.core.reset_BANG_(searched_options,options__$1);
}),name,"off",cljs.core.deref(input_value),(function (){
return setTimeout(close_list,(150));
}),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(27))){
return close_list();
} else {
return null;
}
}),["w-full rounded-md border shadow-sm ","border-gray-300 bg-white ","pl-3 pr-12 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,new cljs.core.Keyword(null,"small","small",2133478704)))?"py-1 ":"py-3 "),"focus:border-indigo-500 focus:outline-none ","focus:ring-1 focus:ring-indigo-500 ","sm:text-sm "].join(''),default_value,(function (e){
var value = e.target.value;
cljs.core.reset_BANG_(input_value,value);

return cljs.core.reset_BANG_(searched_options,webapp.components.combobox.search_options(options__$1,value));
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return open_list();
}),new cljs.core.Keyword(null,"class","class",-2030961996),["absolute flex items-center rounded-r-md ","inset-y-0 right-0 px-2 focus:outline-none "].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.combobox_icon], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(list_status),new cljs.core.Keyword(null,"open","open",-1763596448)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute overflow-auto rounded-md bg-white ","shadow-lg ring-1 ring-black ring-opacity-5 ","z-10 mt-1 max-h-60 w-full py-1 ","text-base focus:outline-none sm:text-sm ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(list_classes)?list_classes:null))].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),"options",new cljs.core.Keyword(null,"role","role",-736691072),"listbox"], null),(function (){var iter__4652__auto__ = (function webapp$components$combobox$main_$_iter__31516(s__31517){
return (new cljs.core.LazySeq(null,(function (){
var s__31517__$1 = s__31517;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31517__$1);
if(temp__5753__auto__){
var s__31517__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31517__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31517__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31519 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31518 = (0);
while(true){
if((i__31518 < size__4651__auto__)){
var option = cljs.core._nth(c__4650__auto__,i__31518);
cljs.core.chunk_append(b__31519,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.combobox_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),option,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__31518,option,c__4650__auto__,size__4651__auto__,b__31519,s__31517__$2,temp__5753__auto__,map__31514,map__31514__$1,options__$1,on_change,list_classes,selected__$1,placeholder,name,default_value,size,label,list_status,close_list,open_list,searched_options,input_value,map__31512,map__31512__$1,selected,options){
return (function (value){
cljs.core.reset_BANG_(input_value,value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
});})(i__31518,option,c__4650__auto__,size__4651__auto__,b__31519,s__31517__$2,temp__5753__auto__,map__31514,map__31514__$1,options__$1,on_change,list_classes,selected__$1,placeholder,name,default_value,size,label,list_status,close_list,open_list,searched_options,input_value,map__31512,map__31512__$1,selected,options))
,new cljs.core.Keyword(null,"close-list","close-list",-1609015538),close_list,new cljs.core.Keyword(null,"selected","selected",574897764),selected__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)));

var G__31526 = (i__31518 + (1));
i__31518 = G__31526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31519),webapp$components$combobox$main_$_iter__31516(cljs.core.chunk_rest(s__31517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31519),null);
}
} else {
var option = cljs.core.first(s__31517__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.combobox_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item","item",249373802),option,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (option,s__31517__$2,temp__5753__auto__,map__31514,map__31514__$1,options__$1,on_change,list_classes,selected__$1,placeholder,name,default_value,size,label,list_status,close_list,open_list,searched_options,input_value,map__31512,map__31512__$1,selected,options){
return (function (value){
cljs.core.reset_BANG_(input_value,value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
});})(option,s__31517__$2,temp__5753__auto__,map__31514,map__31514__$1,options__$1,on_change,list_classes,selected__$1,placeholder,name,default_value,size,label,list_status,close_list,open_list,searched_options,input_value,map__31512,map__31512__$1,selected,options))
,new cljs.core.Keyword(null,"close-list","close-list",-1609015538),close_list,new cljs.core.Keyword(null,"selected","selected",574897764),selected__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)),webapp$components$combobox$main_$_iter__31516(cljs.core.rest(s__31517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(searched_options));
})()], null):null)], null)], null);
});
});

//# sourceMappingURL=webapp.components.combobox.js.map
