goog.provide('webapp.components.button');
webapp.components.button.common_classes = "disabled:opacity-50 disabled:cursor-not-allowed\n   leading-none transition\n   font-semibold text-sm";
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.button !== 'undefined') && (typeof webapp.components.button.btn_variant !== 'undefined')){
} else {
webapp.components.button.btn_variant = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33119 = cljs.core.get_global_hierarchy;
return (fexpr__33119.cljs$core$IFn$_invoke$arity$0 ? fexpr__33119.cljs$core$IFn$_invoke$arity$0() : fexpr__33119.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.button","btn-variant"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.button.btn_variant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"small","small",2133478704),(function (){
return "h-8";
}));
webapp.components.button.btn_variant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return "h-12";
}));
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.button !== 'undefined') && (typeof webapp.components.button.green !== 'undefined')){
} else {
webapp.components.button.green = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33120 = cljs.core.get_global_hierarchy;
return (fexpr__33120.cljs$core$IFn$_invoke$arity$0 ? fexpr__33120.cljs$core$IFn$_invoke$arity$0() : fexpr__33120.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.button","green"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.button.green.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"small","small",2133478704),(function (_,p__33121){
var map__33122 = p__33121;
var map__33122__$1 = cljs.core.__destructure_map(map__33122);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33122__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33122__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33122__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33122__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.py-small.px-regular.text-green-50.bg-green-500.hover:bg-green-600","button.py-small.px-regular.text-green-50.bg-green-500.hover:bg-green-600",-156196085),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.button.common_classes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})()], null),text], null);
}));
webapp.components.button.green.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function (_,p__33123){
var map__33124 = p__33123;
var map__33124__$1 = cljs.core.__destructure_map(map__33124);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33124__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded-full.py-x-small.px-x-small.text-green-50.bg-green-500.hover:bg-green-600","button.rounded-full.py-x-small.px-x-small.text-green-50.bg-green-500.hover:bg-green-600",-2064689685),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.button.common_classes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})()], null),text], null);
}));
webapp.components.button.green.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,p__33125){
var map__33126 = p__33125;
var map__33126__$1 = cljs.core.__destructure_map(map__33126);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33126__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33126__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33126__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33126__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.py-regular.px-large.text-green-50.bg-green-500.hover:bg-green-600","button.py-regular.px-large.text-green-50.bg-green-500.hover:bg-green-600",1154031639),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.button.common_classes,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null),text], null);
}));
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.button !== 'undefined') && (typeof webapp.components.button.red !== 'undefined')){
} else {
webapp.components.button.red = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33127 = cljs.core.get_global_hierarchy;
return (fexpr__33127.cljs$core$IFn$_invoke$arity$0 ? fexpr__33127.cljs$core$IFn$_invoke$arity$0() : fexpr__33127.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.button","red"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.button.red.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"small-transparent","small-transparent",158340393),(function (_,p__33128){
var map__33129 = p__33128;
var map__33129__$1 = cljs.core.__destructure_map(map__33129);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33129__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33129__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33129__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33129__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.py-small.px-small.text-red-500.bg-transparent.hover:bg-red-50","button.py-small.px-small.text-red-500.bg-transparent.hover:bg-red-50",-239919546),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.button.common_classes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})()], null),text], null);
}));
webapp.components.button.red.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-transparent","rounded-transparent",1906127178),(function (_,p__33130){
var map__33131 = p__33130;
var map__33131__$1 = cljs.core.__destructure_map(map__33131);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33131__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded-full.py-x-small.px-x-small.text-red-500.bg-transparent.hover:bg-red-50","button.rounded-full.py-x-small.px-x-small.text-red-500.bg-transparent.hover:bg-red-50",180946620),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),webapp.components.button.common_classes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})()], null),text], null);
}));
if((typeof webapp !== 'undefined') && (typeof webapp.components !== 'undefined') && (typeof webapp.components.button !== 'undefined') && (typeof webapp.components.button.btn_status !== 'undefined')){
} else {
webapp.components.button.btn_status = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33132 = cljs.core.get_global_hierarchy;
return (fexpr__33132.cljs$core$IFn$_invoke$arity$0 ? fexpr__33132.cljs$core$IFn$_invoke$arity$0() : fexpr__33132.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.components.button","btn-status"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.components.button.btn_status.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.block.flex.place-content-center.justify-center","figure.block.flex.place-content-center.justify-center",-1996925726),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.w-4.animate-spin","img.w-4.animate-spin",-1437482500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle-white.svg"], null)], null)], null);
}));
webapp.components.button.btn_status.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,text){
return text;
}));
webapp.components.button.dropdown_more_options = (function webapp$components$button$dropdown_more_options(options,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w-56.text-center","ul.w-56.text-center",672974870),(function (){var iter__4652__auto__ = (function webapp$components$button$dropdown_more_options_$_iter__33133(s__33134){
return (new cljs.core.LazySeq(null,(function (){
var s__33134__$1 = s__33134;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33134__$1);
if(temp__5753__auto__){
var s__33134__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33134__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__33134__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__33136 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__33135 = (0);
while(true){
if((i__33135 < size__4651__auto__)){
var option = cljs.core._nth(c__4650__auto__,i__33135);
cljs.core.chunk_append(b__33136,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33135,option,c__4650__auto__,size__4651__auto__,b__33136,s__33134__$2,temp__5753__auto__){
return (function (){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(option) : cb.call(null,option));
});})(i__33135,option,c__4650__auto__,size__4651__auto__,b__33136,s__33134__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),["p-regular border-b cursor-pointer ","text-gray-800 font-normal hover:bg-gray-50"].join('')], null),option], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)));

var G__33149 = (i__33135 + (1));
i__33135 = G__33149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33136),webapp$components$button$dropdown_more_options_$_iter__33133(cljs.core.chunk_rest(s__33134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33136),null);
}
} else {
var option = cljs.core.first(s__33134__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__33134__$2,temp__5753__auto__){
return (function (){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(option) : cb.call(null,option));
});})(option,s__33134__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),["p-regular border-b cursor-pointer ","text-gray-800 font-normal hover:bg-gray-50"].join('')], null),option], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null)),webapp$components$button$dropdown_more_options_$_iter__33133(cljs.core.rest(s__33134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})()], null);
});
webapp.components.button.button_base = (function webapp$components$button$button_base(p__33137){
var map__33138 = p__33137;
var map__33138__$1 = cljs.core.__destructure_map(map__33138);
var more_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33138__$1,new cljs.core.Keyword(null,"more-options","more-options",1399478268));
var has_more_options_QMARK_ = (cljs.core.count(more_options) > (0));
var more_options_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__33139){
var map__33140 = p__33139;
var map__33140__$1 = cljs.core.__destructure_map(map__33140);
var more_options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"more-options","more-options",1399478268));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var full_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_click_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"on-click-option","on-click-option",1451659086));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(full_width)?"w-full":null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-grow items-center justify-center ",webapp.components.button.common_classes," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webapp.components.button.btn_variant.cljs$core$IFn$_invoke$arity$1(variant))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes),((has_more_options_QMARK_)?" rounded-l-lg":" rounded-lg"),(cljs.core.truth_(full_width)?" w-full":null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__4253__auto__ = disabled;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"loading","loading",-737050189));
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-regular","span.px-regular",-794822692),webapp.components.button.btn_status.cljs$core$IFn$_invoke$arity$2(status,text)], null)], null),((has_more_options_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.relative.flex.cursor-pointer","span.relative.flex.cursor-pointer",-1867903955),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[webapp.components.button.common_classes," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webapp.components.button.btn_variant.cljs$core$IFn$_invoke$arity$1(variant))," px-small rounded-r-lg border-l border-blue-400 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(more_options_open_QMARK_,cljs.core.not(cljs.core.deref(more_options_open_QMARK_)));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline.w-5","img.inline.w-5",-10366047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-cheveron-down-white.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.popover.right,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(more_options_open_QMARK_),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.dropdown_more_options,more_options__$1,on_click_option], null)], null)], null)], null):null)], null);
});
});
webapp.components.button.primary = (function webapp$components$button$primary(p__33141){
var map__33142 = p__33141;
var map__33142__$1 = cljs.core.__destructure_map(map__33142);
var more_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"more-options","more-options",1399478268));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var full_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_click_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"on-click-option","on-click-option",1451659086));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.button_base,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"full-width","full-width",1911330562),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-click-option","on-click-option",1451659086),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"more-options","more-options",1399478268),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"text","text",-1790561697)],[full_width,disabled,(function (){var or__4253__auto__ = variant;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})(),type,on_click_option,on_click,status,more_options,"text-blue-50 bg-blue-500 hover:bg-blue-600",text])], null);
});
webapp.components.button.secondary = (function webapp$components$button$secondary(p__33143){
var map__33144 = p__33143;
var map__33144__$1 = cljs.core.__destructure_map(map__33144);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var outlined = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"outlined","outlined",-69626634));
var full_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33144__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.button_base,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"full-width","full-width",1911330562),full_width,new cljs.core.Keyword(null,"variant","variant",-424354234),(function (){var or__4253__auto__ = variant;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})(),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"classes","classes",2037804510),["text-gray-900 bg-transparent hover:bg-gray-100",(cljs.core.truth_(outlined)?" border border-gray-300":null)].join('')], null)], null);
});

//# sourceMappingURL=webapp.components.button.js.map
