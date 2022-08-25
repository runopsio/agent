goog.provide('webapp.components.forms');
webapp.components.forms.form_label = (function webapp$components$forms$form_label(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.text-gray-700","label.block.text-sm.font-medium.text-gray-700",-558470411),text], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.forms !== 'undefined') && (typeof webapp.components.forms.input_styles !== 'undefined')){
} else {
webapp.components.forms.input_styles = "relative block w-full\n   py-3 px-2 mt-1\n   border border-gray-300 rounded-md\n   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50";
}
/**
 * Multi purpose HTML input component.
 *   Props signature:
 *   :label -> html label text;
 *   :placeholder -> html prop placeholder for input;
 *   :value -> a reagent atom piece of state.
 */
webapp.components.forms.input = (function webapp$components$forms$input(_){
return (function (p__31593){
var map__31594 = p__31593;
var map__31594__$1 = cljs.core.__destructure_map(map__31594);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31594__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31594__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var local_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "text";
}
})());
var on_blur_cb = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"password")){
cljs.core.reset_BANG_(local_type,"password");
} else {
}

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
});
var on_focus_cb = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"password")){
cljs.core.reset_BANG_(local_type,"text");
} else {
}

if(cljs.core.truth_(on_focus)){
return (on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
} else {
return null;
}
});
return (function (p__31597){
var map__31598 = p__31597;
var map__31598__$1 = cljs.core.__destructure_map(map__31598);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"value","value",305978217));
var defaultValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_keyDown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular.text-sm","div.mb-regular.text-sm",2068149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_label,label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){var or__4253__auto__ = placeholder;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return label;
}
})(),(function (){var or__4253__auto__ = disabled;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),on_focus_cb,value,on_blur_cb,cljs.core.deref(local_type),on_keyDown,webapp.components.forms.input_styles,defaultValue,on_change,(function (){var or__4253__auto__ = required;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})()])], null)], null);
});
});
});
webapp.components.forms.textarea = (function webapp$components$forms$textarea(config){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular","div.mb-regular",-1073230200),webapp.components.forms.form_label(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})(),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),[webapp.components.forms.input_styles," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})())].join(''),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})()])], null)], null);
});
webapp.components.forms.option = (function webapp$components$forms$option(item,selected){
var attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),attrs,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)], null);
});
/**
 * HTML select.
 *   Props signature:
 *   label -> html label text;
 *   options -> List of {:text string :value string};
 *   active -> the option value of an already active item;
 *   on-change -> function to be executed on change;
 *   required -> HTML required attribute;
 */
webapp.components.forms.select = (function webapp$components$forms$select(p__31606){
var map__31607 = p__31606;
var map__31607__$1 = cljs.core.__destructure_map(map__31607);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31607__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular.text-sm.w-full","div.mb-regular.text-sm.w-full",1546060030),webapp.components.forms.form_label(label),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.forms.input_styles,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4253__auto__ = id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),selected,new cljs.core.Keyword(null,"required","required",1807647006),(function (){var or__4253__auto__ = required;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__4253__auto__ = disabled;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),"Select one"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31605_SHARP_){
return webapp.components.forms.option(p1__31605_SHARP_,selected);
}),options)], null)], null);
});

//# sourceMappingURL=webapp.components.forms.js.map
