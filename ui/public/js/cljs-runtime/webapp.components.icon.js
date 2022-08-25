goog.provide('webapp.components.icon');
webapp.components.icon.base = (function webapp$components$icon$base(p__49832){
var map__49833 = p__49832;
var map__49833__$1 = cljs.core.__destructure_map(map__49833);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49833__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49833__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49833__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = size;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),(function (){var or__4253__auto__ = role;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "icon";
}
})(),new cljs.core.Keyword(null,"src","src",-1651076051),["/icons/icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_name),".svg"].join('')], null)], null)], null);
});
webapp.components.icon.regular = (function webapp$components$icon$regular(p__49835){
var map__49836 = p__49835;
var map__49836__$1 = cljs.core.__destructure_map(map__49836);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49836__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49836__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49836__$1,new cljs.core.Keyword(null,"role","role",-736691072));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.icon.base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"icon-name","icon-name",152456315),icon_name,new cljs.core.Keyword(null,"role","role",-736691072),role], null)], null);
});

//# sourceMappingURL=webapp.components.icon.js.map
