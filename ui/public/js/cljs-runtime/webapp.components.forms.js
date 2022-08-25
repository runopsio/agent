goog.provide('webapp.components.forms');
webapp.components.forms.form_label = (function webapp$components$forms$form_label(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700"], null),text], null);
});
webapp.components.forms.form_helper_text = (function webapp$components$forms$form_helper_text(text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex flex-col items-center group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4",new cljs.core.Keyword(null,"alt","alt",-3214426),"Helper icon",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-help-with-thin-circle-black.svg"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-0 flex-col items-center hidden mb-6 w-max group-hover:flex"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative border border-gray-300 bg-white rounded-md ","p-2 text-xs text-gray-700 leading-none whitespace-no-wrap shadow-lg"].join('')], null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 h-3 -mt-2 border-r border-b border-gray-300 bg-white transform rotate-45"], null)], null)], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.forms !== 'undefined') && (typeof webapp.components.forms.input_styles !== 'undefined')){
} else {
webapp.components.forms.input_styles = "relative block w-full h-12\n   py-3 px-2 mt-1\n   border border-gray-300 rounded-md\n   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50";
}
/**
 * Multi purpose HTML input component.
 *   Props signature:
 *   :label -> html label text;
 *   :placeholder -> html prop placeholder for input;
 *   :value -> a reagent atom piece of state.
 */
webapp.components.forms.input = (function webapp$components$forms$input(_){
return (function (p__50776){
var map__50777 = p__50776;
var map__50777__$1 = cljs.core.__destructure_map(map__50777);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
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
return (function (p__50779){
var map__50780 = p__50779;
var map__50780__$1 = cljs.core.__destructure_map(map__50780);
var defaultValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910));
var helper_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"min","min",444991522));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"value","value",305978217));
var minlength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"minlength","minlength",259053545));
var on_keyDown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487));
var maxlength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50780__$1,new cljs.core.Keyword(null,"max","max",61366548));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular text-sm"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_label,label], null),(cljs.core.truth_(helper_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_helper_text,helper_text], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[min,(function (){var or__4253__auto__ = placeholder;
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
})(),on_focus_cb,value,on_blur_cb,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",cljs.core.deref(local_type)))?"text":cljs.core.deref(local_type)),minlength,on_keyDown,max,webapp.components.forms.input_styles,maxlength,defaultValue,on_change,step,(function (){var or__4253__auto__ = required;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),pattern])], null)], null);
});
});
});
webapp.components.forms.textarea = (function webapp$components$forms$textarea(config){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular","div.mb-regular",-1073230200),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(config)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309).cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_helper_text,new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309).cljs$core$IFn$_invoke$arity$1(config)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(config),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(config);
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
webapp.components.forms.select = (function webapp$components$forms$select(p__50791){
var map__50792 = p__50791;
var map__50792__$1 = cljs.core.__destructure_map(map__50792);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"options","options",99638489));
var helper_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-regular.text-sm.w-full","div.mb-regular.text-sm.w-full",1546060030),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_label,label], null),(cljs.core.truth_(helper_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.form_helper_text,helper_text], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.forms.input_styles,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__4253__auto__ = name;
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
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),"Select one"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50788_SHARP_){
return webapp.components.forms.option(p1__50788_SHARP_,selected);
}),options)], null)], null);
});

//# sourceMappingURL=webapp.components.forms.js.map
