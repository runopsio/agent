goog.provide('reagent_forms.core');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__31201 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
return (list_elem.scrollTop = (offset_top - ((2) * item_height)));
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(1)),/\./);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize((function (doc,id){
return reagent.core.cursor(doc,reagent_forms.core.id__GT_path(id));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = reagent_forms.core.id__GT_path(id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31206_SHARP_,p2__31205_SHARP_){
var or__4253__auto__ = (p2__31205_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p2__31205_SHARP_.cljs$core$IFn$_invoke$arity$4(id,path,value,p1__31206_SHARP_) : p2__31205_SHARP_.call(null,id,path,value,p1__31206_SHARP_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__31206_SHARP_;
}
}),doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent_forms.core.cursor_for_id(doc,id),(function (current_value){
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(current_value,value) : update_fn.call(null,current_value,value));
}));
if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_(reagent_forms.core.cursor_for_id(doc,id),value);

if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__31244 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__31244) : wrapper.call(null,G__31244));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__31245 = id;
var G__31246 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31245,G__31246) : save_BANG_.call(null,G__31245,G__31246));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__31251 = id;
var G__31252 = update_fn;
var G__31253 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__31251,G__31252,G__31253) : update_BANG_.call(null,G__31251,G__31252,G__31253));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__31254,node){
var map__31255 = p__31254;
var map__31255__$1 = cljs.core.__destructure_map(map__31255);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31255__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31255__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31255__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5751__auto__)){
var in_fn = temp__5751__auto__;
return reagent_forms.core.wrap_get_fn(get,in_fn);
} else {
return get;
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5751__auto__)){
var out_fn = temp__5751__auto__;
return reagent_forms.core.wrap_save_fn(save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5751__auto__)){
var out_fn = temp__5751__auto__;
return reagent_forms.core.wrap_update_fn(update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.set_disabled = (function reagent_forms$core$set_disabled(attrs,update_disabled_QMARK_){
if(cljs.core.truth_((function (){var and__4251__auto__ = update_disabled_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (!((new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (p1__31256_SHARP_){
if(cljs.core.fn_QMARK_(p1__31256_SHARP_)){
return (p1__31256_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__31256_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__31256_SHARP_.call(null));
} else {
return p1__31256_SHARP_;
}
}));
} else {
return attrs;
}
});
reagent_forms.core.call_attr = (function reagent_forms$core$call_attr(doc,attr){
var doc__$1 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
if(cljs.core.fn_QMARK_(attr)){
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(doc__$1) : attr.call(null,doc__$1));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc__$1,reagent_forms.core.id__GT_path(attr));
}
});
reagent_forms.core.update_class = (function reagent_forms$core$update_class(attrs,classes){
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__31257_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((typeof p1__31257_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31257_SHARP_], null):p1__31257_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__31258,doc){
var map__31259 = p__31258;
var map__31259__$1 = cljs.core.__destructure_map(map__31259);
var attrs = map__31259__$1;
var set_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31259__$1,new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
var or__4253__auto__ = (cljs.core.truth_(set_attributes)?(function (){var G__31260 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
var G__31261 = attrs;
return (set_attributes.cljs$core$IFn$_invoke$arity$2 ? set_attributes.cljs$core$IFn$_invoke$arity$2(G__31260,G__31261) : set_attributes.call(null,G__31260,G__31261));
})():null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return attrs;
}
});
reagent_forms.core.set_validation_class = (function reagent_forms$core$set_validation_class(attrs,doc){
var temp__5751__auto__ = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var valid = temp__5751__auto__;
return reagent_forms.core.update_class(attrs,reagent_forms.core.call_attr(doc,valid));
} else {
return attrs;
}
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"fmt","fmt",332300772),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694),new cljs.core.Keyword(null,"out-fn","out-fn",747295447),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"postamble","postamble",-500033366),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"date-format","date-format",-557196721),new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568),new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473)], 0));
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.format_type !== 'undefined')){
} else {
reagent_forms.core.format_type = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31266 = cljs.core.get_global_hierarchy;
return (fexpr__31266.cljs$core$IFn$_invoke$arity$0 ? fexpr__31266.cljs$core$IFn$_invoke$arity$0() : fexpr__31266.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),(function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__31268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null);
return (fexpr__31268.cljs$core$IFn$_invoke$arity$1 ? fexpr__31268.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__31268.call(null,field_type));
})())){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(isNaN(parseFloat(value)));
if(and__4251__auto__){
return fmt;
} else {
return and__4251__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind !== 'undefined')){
} else {
reagent_forms.core.bind = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31271 = cljs.core.get_global_hierarchy;
return (fexpr__31271.cljs$core$IFn$_invoke$arity$0 ? fexpr__31271.cljs$core$IFn$_invoke$arity$0() : fexpr__31271.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),(function (p__31272,_){
var map__31273 = p__31272;
var map__31273__$1 = cljs.core.__destructure_map(map__31273);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31273__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_((function (){var fexpr__31274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__31274.cljs$core$IFn$_invoke$arity$1 ? fexpr__31274.cljs$core$IFn$_invoke$arity$1(field) : fexpr__31274.call(null,field));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__31276,p__31277){
var map__31279 = p__31276;
var map__31279__$1 = cljs.core.__destructure_map(map__31279);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31279__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31279__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__31280 = p__31277;
var map__31280__$1 = cljs.core.__destructure_map(map__31280);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4253__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31275_SHARP_){
var G__31281 = id;
var G__31282 = reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(field,reagent_forms.core.value_of(p1__31275_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31281,G__31282) : save_BANG_.call(null,G__31281,G__31282));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__31283,p__31284){
var map__31285 = p__31283;
var map__31285__$1 = cljs.core.__destructure_map(map__31285);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__31286 = p__31284;
var map__31286__$1 = cljs.core.__destructure_map(map__31286);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31286__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31286__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__31293 = id;
var G__31294 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31293,G__31294) : save_BANG_.call(null,G__31293,G__31294));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31526 = arguments.length;
var i__4865__auto___31527 = (0);
while(true){
if((i__4865__auto___31527 < len__4864__auto___31526)){
args__4870__auto__.push((arguments[i__4865__auto___31527]));

var G__31528 = (i__4865__auto___31527 + (1));
i__4865__auto___31527 = G__31528;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__31298,opts,p__31299){
var vec__31300 = p__31298;
var seq__31301 = cljs.core.seq(vec__31300);
var first__31302 = cljs.core.first(seq__31301);
var seq__31301__$1 = cljs.core.next(seq__31301);
var type = first__31302;
var first__31302__$1 = cljs.core.first(seq__31301__$1);
var seq__31301__$2 = cljs.core.next(seq__31301__$1);
var attrs = first__31302__$1;
var body = seq__31301__$2;
var vec__31303 = p__31299;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31303,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0))], 0))], null),body);
}));

(reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq31295){
var G__31296 = cljs.core.first(seq31295);
var seq31295__$1 = cljs.core.next(seq31295);
var G__31297 = cljs.core.first(seq31295__$1);
var seq31295__$2 = cljs.core.next(seq31295__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31296,G__31297,seq31295__$2);
}));

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31306 = cljs.core.get_global_hierarchy;
return (fexpr__31306.cljs$core$IFn$_invoke$arity$0 ? fexpr__31306.cljs$core$IFn$_invoke$arity$0() : fexpr__31306.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),(function (p__31307,_){
var vec__31308 = p__31307;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(0),null);
var map__31311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(1),null);
var map__31311__$1 = cljs.core.__destructure_map(map__31311);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31311__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__31312 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__31312.cljs$core$IFn$_invoke$arity$1 ? fexpr__31312.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__31312.call(null,field__$1));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__31313,p__31314){
var vec__31315 = p__31313;
var seq__31316 = cljs.core.seq(vec__31315);
var first__31317 = cljs.core.first(seq__31316);
var seq__31316__$1 = cljs.core.next(seq__31316);
var type = first__31317;
var first__31317__$1 = cljs.core.first(seq__31316__$1);
var seq__31316__$2 = cljs.core.next(seq__31316__$1);
var attrs = first__31317__$1;
var body = seq__31316__$2;
var map__31318 = p__31314;
var map__31318__$1 = cljs.core.__destructure_map(map__31318);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__31319,p__31320){
var vec__31321 = p__31319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321,(0),null);
var map__31324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321,(1),null);
var map__31324__$1 = cljs.core.__destructure_map(map__31324);
var attrs = map__31324__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31324__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__31321;
var map__31325 = p__31320;
var map__31325__$1 = cljs.core.__destructure_map(map__31325);
var opts = map__31325__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__31331,p__31332){
var vec__31333 = p__31331;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31333,(0),null);
var map__31336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31333,(1),null);
var map__31336__$1 = cljs.core.__destructure_map(map__31336);
var attrs = map__31336__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31336__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__31337 = p__31332;
var map__31337__$1 = cljs.core.__destructure_map(map__31337);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31327_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__31327_SHARP_));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__31328_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__31341 = id;
var G__31342 = reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__31328_SHARP_)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31341,G__31342) : save_BANG_.call(null,G__31341,G__31342));
})], null),attrs], 0))], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__31348,p__31349){
var vec__31350 = p__31348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31350,(0),null);
var map__31353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31350,(1),null);
var map__31353__$1 = cljs.core.__destructure_map(map__31353);
var attrs = map__31353__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31353__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353__$1,new cljs.core.Keyword(null,"save-fn","save-fn",383840986));
var map__31354 = p__31349;
var map__31354__$1 = cljs.core.__destructure_map(map__31354);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31354__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31354__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31354__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:(function (p1__31345_SHARP_){
return reagent_forms.datepicker.format_date(p1__31345_SHARP_,reagent_forms.datepicker.parse_format(date_format));
}));
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__4253__auto__ = selected_month;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var save_value = (cljs.core.truth_(save_fn)?(function (p1__31346_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__31346_SHARP_) : update_BANG_.call(null,id,save_fn,p1__31346_SHARP_));
}):(function (p1__31347_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__31347_SHARP_) : save_BANG_.call(null,id,p1__31347_SHARP_));
}));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5751__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5751__auto__)){
var date = temp__5751__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,(function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
}),save_value,inline,lang], null)], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
})], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__31358,p__31359){
var vec__31360 = p__31358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31360,(0),null);
var map__31363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31360,(1),null);
var map__31363__$1 = cljs.core.__destructure_map(map__31363);
var attrs = map__31363__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__31360;
var map__31364 = p__31359;
var map__31364__$1 = cljs.core.__destructure_map(map__31364);
var opts = map__31364__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31364__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4253__auto__ = checked;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)));
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__31368,p__31369){
var vec__31374 = p__31368;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(0),null);
var map__31377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(1),null);
var map__31377__$1 = cljs.core.__destructure_map(map__31377);
var attrs = map__31377__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__31378 = p__31369;
var map__31378__$1 = cljs.core.__destructure_map(map__31378);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31378__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(value) : fmt.call(null,value));
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__31384,p__31385){
var vec__31386 = p__31384;
var seq__31387 = cljs.core.seq(vec__31386);
var first__31388 = cljs.core.first(seq__31387);
var seq__31387__$1 = cljs.core.next(seq__31387);
var type = first__31388;
var first__31388__$1 = cljs.core.first(seq__31387__$1);
var seq__31387__$2 = cljs.core.next(seq__31387__$1);
var map__31389 = first__31388__$1;
var map__31389__$1 = cljs.core.__destructure_map(map__31389);
var attrs = map__31389__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31389__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31389__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31389__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__31387__$2;
var map__31390 = p__31385;
var map__31390__$1 = cljs.core.__destructure_map(map__31390);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31390__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31390__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31390__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__31391 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__31391) : event.call(null,G__31391));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body):null):(function (){var temp__5751__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5751__auto__)){
var message = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4253__auto__ = touch_event;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
})]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__31392,p__31393){
var vec__31394 = p__31392;
var seq__31395 = cljs.core.seq(vec__31394);
var first__31396 = cljs.core.first(seq__31395);
var seq__31395__$1 = cljs.core.next(seq__31395);
var type = first__31396;
var first__31396__$1 = cljs.core.first(seq__31395__$1);
var seq__31395__$2 = cljs.core.next(seq__31395__$1);
var map__31397 = first__31396__$1;
var map__31397__$1 = cljs.core.__destructure_map(map__31397);
var attrs = map__31397__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31397__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31397__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31397__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__31395__$2;
var map__31398 = p__31393;
var map__31398__$1 = cljs.core.__destructure_map(map__31398);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4253__auto__ = checked;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
})], null)], 0))], null),body));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__31403,p__31404){
var vec__31405 = p__31403;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31405,(0),null);
var map__31408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31405,(1),null);
var map__31408__$1 = cljs.core.__destructure_map(map__31408);
var attrs = map__31408__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31408__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31408__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31408__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__31409 = p__31404;
var map__31409__$1 = cljs.core.__destructure_map(map__31409);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31409__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31409__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31409__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections__$1 = (function (){var or__4253__auto__ = selections;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__4253__auto__ = get_index;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.constantly((-1));
}
})();
var choose_selected = (function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_empty(cljs.core.deref(selections__$1));
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.deref(selected_index) > (-1));
} else {
return and__4251__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections__$1),cljs.core.deref(selected_index));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);
} else {
return null;
}
});
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),(function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
}),(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if((!(cljs.core.iterable_QMARK_(v)))){
return v;
} else {
return cljs.core.first(v);
}
})(),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
}),new cljs.core.Keyword(null,"text","text",-1790561697),input_class,(function (p1__31399_SHARP_){
var temp__5753__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__31399_SHARP_));
if(cljs.core.truth_(temp__5753__auto__)){
var value = temp__5753__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__31410 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__31410) : data_source.call(null,G__31410));
})());

var G__31411_31529 = id;
var G__31412_31530 = reagent_forms.core.value_of(p1__31399_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31411_31529,G__31412_31530) : save_BANG_.call(null,G__31411_31529,G__31412_31530));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
}),(function (p1__31400_SHARP_){
var G__31413 = p1__31400_SHARP_.which;
switch (G__31413) {
case (38):
p1__31400_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.deref(typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (cljs.core.deref(selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to(p1__31400_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__31400_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742)) : data_source.call(null,new cljs.core.Keyword(null,"all","all",892129742))));

cljs.core.reset_BANG_(selected_index,(function (){var G__31414 = clojure.string.trim(reagent_forms.core.value_of(p1__31400_SHARP_));
var G__31415 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__31414,G__31415) : get_index__$1.call(null,G__31414,G__31415));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__31400_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__31416_31532 = id;
var G__31417_31533 = reagent_forms.core.value_of(p1__31400_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31416_31532,G__31417_31533) : save_BANG_.call(null,G__31416_31532,G__31417_31533));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__31400_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__31400_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__31401_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__31401_SHARP_.target.getAttribute("tabIndex")));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__31402_SHARP_){
p1__31402_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
})], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
}),cljs.core.deref(selections__$1)))], null)], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__31419,p__31420){
var vec__31421 = p__31419;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31421,(0),null);
var map__31424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31421,(1),null);
var map__31424__$1 = cljs.core.__destructure_map(map__31424);
var attrs = map__31424__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31424__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__31425 = p__31420;
var map__31425__$1 = cljs.core.__destructure_map(map__31425);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31425__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31418_SHARP_){
var G__31426 = id;
var G__31427 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__31418_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31426,G__31427) : save_BANG_.call(null,G__31426,G__31427));
})], null),attrs], 0))], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__31429,p__31430){
var vec__31431 = p__31429;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31431,(0),null);
var map__31434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31431,(1),null);
var map__31434__$1 = cljs.core.__destructure_map(map__31434);
var attrs = map__31434__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__31435 = p__31430;
var map__31435__$1 = cljs.core.__destructure_map(map__31435);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31428_SHARP_){
var G__31436 = id;
var G__31437 = p1__31428_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31436,G__31437) : save_BANG_.call(null,G__31436,G__31437));
})], null),attrs], 0))], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__31438,p__31439,selections,field,id){
var vec__31440 = p__31438;
var seq__31441 = cljs.core.seq(vec__31440);
var first__31442 = cljs.core.first(seq__31441);
var seq__31441__$1 = cljs.core.next(seq__31441);
var type = first__31442;
var first__31442__$1 = cljs.core.first(seq__31441__$1);
var seq__31441__$2 = cljs.core.next(seq__31441__$1);
var map__31443 = first__31442__$1;
var map__31443__$1 = cljs.core.__destructure_map(map__31443);
var attrs = map__31443__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var body = seq__31441__$2;
var map__31444 = p__31439;
var map__31444__$1 = cljs.core.__destructure_map(map__31444);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__31449 = id;
var G__31450 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31449,G__31450) : save_BANG_.call(null,G__31449,G__31450));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__31451 = id;
var G__31452 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31451,G__31452) : save_BANG_.call(null,G__31451,G__31452));
}
});
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(type),(0),(5));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"butto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"input")));
})();
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__4251__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (!(button_or_input_QMARK_));
} else {
return and__4251__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),class$,(function (){var or__4253__auto__ = touch_event;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], 0)),((button_or_input_QMARK_)?null:new cljs.core.Keyword(null,"disabled","disabled",-1529784218))),body], null);
});
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__31453){
var map__31454 = p__31453;
var map__31454__$1 = cljs.core.__destructure_map(map__31454);
var ks = map__31454__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__31455){
var vec__31456 = p__31455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(0),null);
var map__31459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(1),null);
var map__31459__$1 = cljs.core.__destructure_map(map__31459);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31459__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
}),cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__31462,p__31463){
var vec__31464 = p__31462;
var seq__31465 = cljs.core.seq(vec__31464);
var first__31466 = cljs.core.first(seq__31465);
var seq__31465__$1 = cljs.core.next(seq__31465);
var type = first__31466;
var first__31466__$1 = cljs.core.first(seq__31465__$1);
var seq__31465__$2 = cljs.core.next(seq__31465__$1);
var map__31467 = first__31466__$1;
var map__31467__$1 = cljs.core.__destructure_map(map__31467);
var attrs = map__31467__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31467__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__31465__$2;
var map__31468 = p__31463;
var map__31468__$1 = cljs.core.__destructure_map(map__31468);
var opts = map__31468__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31468__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
}),selection_items__$1);
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,(function (p1__31460_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31469){
var vec__31470 = p__31469;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31470,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),p1__31460_SHARP_));
}));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31461_SHARP_){
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__31461_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var visible_QMARK_ = temp__5751__auto__;
return reagent_forms.core.call_attr(doc,visible_QMARK_);
} else {
return true;
}
}),selectors)));
});
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__31473,p__31474){
var vec__31475 = p__31473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31475,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31475,(1),null);
var field = vec__31475;
var map__31478 = p__31474;
var map__31478__$1 = cljs.core.__destructure_map(map__31478);
var opts = map__31478__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__31479,p__31480){
var vec__31481 = p__31479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31481,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31481,(1),null);
var field = vec__31481;
var map__31484 = p__31480;
var map__31484__$1 = cljs.core.__destructure_map(map__31484);
var opts = map__31484__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31484__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reagent_forms$core$map_options_$_iter__31485(s__31486){
return (new cljs.core.LazySeq(null,(function (){
var s__31486__$1 = s__31486;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31486__$1);
if(temp__5753__auto__){
var s__31486__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31486__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31486__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31488 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31487 = (0);
while(true){
if((i__31487 < size__4651__auto__)){
var vec__31489 = cljs.core._nth(c__4650__auto__,i__31487);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31489,(0),null);
var map__31492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31489,(1),null);
var map__31492__$1 = cljs.core.__destructure_map(map__31492);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31492__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31489,(2),null);
cljs.core.chunk_append(b__31488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null));

var G__31534 = (i__31487 + (1));
i__31487 = G__31534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31488),reagent_forms$core$map_options_$_iter__31485(cljs.core.chunk_rest(s__31486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31488),null);
}
} else {
var vec__31493 = cljs.core.first(s__31486__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(0),null);
var map__31496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(1),null);
var map__31496__$1 = cljs.core.__destructure_map(map__31496);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31496__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31493,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null),reagent_forms$core$map_options_$_iter__31485(cljs.core.rest(s__31486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31497_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31497_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__31500,p__31501){
var vec__31502 = p__31500;
var seq__31503 = cljs.core.seq(vec__31502);
var first__31504 = cljs.core.first(seq__31503);
var seq__31503__$1 = cljs.core.next(seq__31503);
var type = first__31504;
var first__31504__$1 = cljs.core.first(seq__31503__$1);
var seq__31503__$2 = cljs.core.next(seq__31503__$1);
var map__31505 = first__31504__$1;
var map__31505__$1 = cljs.core.__destructure_map(map__31505);
var attrs = map__31505__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__31503__$2;
var map__31506 = p__31501;
var map__31506__$1 = cljs.core.__destructure_map(map__31506);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31506__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31506__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
var G__31507_31535 = id;
var G__31508_31536 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31507_31535,G__31508_31536) : save_BANG_.call(null,G__31507_31535,G__31508_31536));

return (function (){
var update_disabled_QMARK___30568__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__30569__auto__ = clojure.walk.postwalk((function (c__30570__auto__){
if(cljs.core.map_QMARK_(c__30570__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__30570__auto__,doc),doc),update_disabled_QMARK___30568__auto__));
} else {
return c__30570__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31498_SHARP_){
var G__31509 = id;
var G__31510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__31498_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31509,G__31510) : save_BANG_.call(null,G__31509,G__31510));
})], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31499_SHARP_){
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__31499_SHARP_));
if(cljs.core.truth_(temp__5751__auto__)){
var visible = temp__5751__auto__;
return reagent_forms.core.call_attr(doc,visible);
} else {
return true;
}
}),options__$1))], null));
var temp__5751__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5751__auto__)){
var visible__30571__auto__ = temp__5751__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__30571__auto__))){
return body__30569__auto__;
} else {
return null;
}
} else {
return body__30569__auto__;
}
});
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (((cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword(null,"field","field",-1302436500))))));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts){
return clojure.walk.postwalk((function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1);
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind_fields !== 'undefined')){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 *         the supplied functions (when `doc` is a map) on events triggered by fields.
 *         form - the form template with the fields
 *         doc - the document that the fields will be bound to
 *         events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31511 = cljs.core.get_global_hierarchy;
return (fexpr__31511.cljs$core$IFn$_invoke$arity$0 ? fexpr__31511.cljs$core$IFn$_invoke$arity$0() : fexpr__31511.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),(function() { 
var G__31537__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__31537 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__31538__i = 0, G__31538__a = new Array(arguments.length -  2);
while (G__31538__i < G__31538__a.length) {G__31538__a[G__31538__i] = arguments[G__31538__i + 2]; ++G__31538__i;}
  ___$1 = new cljs.core.IndexedSeq(G__31538__a,0,null);
} 
return G__31537__delegate.call(this,_,doc,___$1);};
G__31537.cljs$lang$maxFixedArity = 2;
G__31537.cljs$lang$applyTo = (function (arglist__31539){
var _ = cljs.core.first(arglist__31539);
arglist__31539 = cljs.core.next(arglist__31539);
var doc = cljs.core.first(arglist__31539);
var ___$1 = cljs.core.rest(arglist__31539);
return G__31537__delegate(_,doc,___$1);
});
G__31537.cljs$core$IFn$_invoke$arity$variadic = G__31537__delegate;
return G__31537;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"get","get",1683182755),(function (get){
return (function (id){
var G__31512 = reagent_forms.core.id__GT_path(id);
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__31512) : get.call(null,G__31512));
});
})),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (save_BANG_){
return (function (id,value){
var G__31513 = reagent_forms.core.id__GT_path(id);
var G__31514 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__31513,G__31514) : save_BANG_.call(null,G__31513,G__31514));
});
})),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (update_BANG_){
return (function (id,save_fn,value){
var G__31515 = reagent_forms.core.id__GT_path(id);
var G__31516 = save_fn;
var G__31517 = value;
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__31515,G__31516,G__31517) : update_BANG_.call(null,G__31515,G__31516,G__31517));
});
})));
return (function (){
return form__$1;
});
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__31540__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__31518_SHARP_){
return cljs.core.deref(reagent_forms.core.cursor_for_id(doc,p1__31518_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn(doc,events),new cljs.core.Keyword(null,"update!","update!",-1453508586),reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts);
return (function (){
return form__$1;
});
};
var G__31540 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__31541__i = 0, G__31541__a = new Array(arguments.length -  2);
while (G__31541__i < G__31541__a.length) {G__31541__a[G__31541__i] = arguments[G__31541__i + 2]; ++G__31541__i;}
  events = new cljs.core.IndexedSeq(G__31541__a,0,null);
} 
return G__31540__delegate.call(this,form,doc,events);};
G__31540.cljs$lang$maxFixedArity = 2;
G__31540.cljs$lang$applyTo = (function (arglist__31542){
var form = cljs.core.first(arglist__31542);
arglist__31542 = cljs.core.next(arglist__31542);
var doc = cljs.core.first(arglist__31542);
var events = cljs.core.rest(arglist__31542);
return G__31540__delegate(form,doc,events);
});
G__31540.cljs$core$IFn$_invoke$arity$variadic = G__31540__delegate;
return G__31540;
})()
);

//# sourceMappingURL=reagent_forms.core.js.map
