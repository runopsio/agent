goog.provide('webapp.templates.views.template_dynamic_form');
webapp.templates.views.template_dynamic_form.dynamic_form = (function webapp$templates$views$template_dynamic_form$dynamic_form(type,p__50799){
var map__50800 = p__50799;
var map__50800__$1 = cljs.core.__destructure_map(map__50800);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"options","options",99638489));
var helper_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"min","min",444991522));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"value","value",305978217));
var minlength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"minlength","minlength",259053545));
var maxlength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800__$1,new cljs.core.Keyword(null,"max","max",61366548));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__50801 = type;
switch (G__50801) {
case "select":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.select,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50798_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),p1__50798_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p1__50798_SHARP_], null));
}),options),new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),helper_text], null),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(required,"false");
if(and__4251__auto__){
var or__4253__auto__ = required;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (required == null);
}
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null)], 0))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[min,(function (){var or__4253__auto__ = placeholder;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ["Define a value for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('');
}
})(),value,type,minlength,max,label,maxlength,helper_text,on_change,step,pattern]),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(required,"false");
if(and__4251__auto__){
var or__4253__auto__ = required;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (required == null);
}
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null)], 0))], null);

}
})()], null);
});

//# sourceMappingURL=webapp.templates.views.template_dynamic_form.js.map
