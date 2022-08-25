goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47074 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47074(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47077 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47077(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46231 = coll;
var G__46232 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46231,G__46232) : shadow.dom.lazy_native_coll_seq.call(null,G__46231,G__46232));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46302 = arguments.length;
switch (G__46302) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46312 = arguments.length;
switch (G__46312) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46320 = arguments.length;
switch (G__46320) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46330 = arguments.length;
switch (G__46330) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46342 = arguments.length;
switch (G__46342) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46356 = arguments.length;
switch (G__46356) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46366){if((e46366 instanceof Object)){
var e = e46366;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46366;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46372 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46373 = null;
var count__46374 = (0);
var i__46375 = (0);
while(true){
if((i__46375 < count__46374)){
var el = chunk__46373.cljs$core$IIndexed$_nth$arity$2(null,i__46375);
var handler_47084__$1 = ((function (seq__46372,chunk__46373,count__46374,i__46375,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46372,chunk__46373,count__46374,i__46375,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47084__$1);


var G__47085 = seq__46372;
var G__47086 = chunk__46373;
var G__47087 = count__46374;
var G__47088 = (i__46375 + (1));
seq__46372 = G__47085;
chunk__46373 = G__47086;
count__46374 = G__47087;
i__46375 = G__47088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46372);
if(temp__5753__auto__){
var seq__46372__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46372__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46372__$1);
var G__47089 = cljs.core.chunk_rest(seq__46372__$1);
var G__47090 = c__4679__auto__;
var G__47091 = cljs.core.count(c__4679__auto__);
var G__47092 = (0);
seq__46372 = G__47089;
chunk__46373 = G__47090;
count__46374 = G__47091;
i__46375 = G__47092;
continue;
} else {
var el = cljs.core.first(seq__46372__$1);
var handler_47093__$1 = ((function (seq__46372,chunk__46373,count__46374,i__46375,el,seq__46372__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46372,chunk__46373,count__46374,i__46375,el,seq__46372__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47093__$1);


var G__47094 = cljs.core.next(seq__46372__$1);
var G__47095 = null;
var G__47096 = (0);
var G__47097 = (0);
seq__46372 = G__47094;
chunk__46373 = G__47095;
count__46374 = G__47096;
i__46375 = G__47097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46384 = arguments.length;
switch (G__46384) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46395 = cljs.core.seq(events);
var chunk__46396 = null;
var count__46397 = (0);
var i__46398 = (0);
while(true){
if((i__46398 < count__46397)){
var vec__46412 = chunk__46396.cljs$core$IIndexed$_nth$arity$2(null,i__46398);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46412,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47099 = seq__46395;
var G__47100 = chunk__46396;
var G__47101 = count__46397;
var G__47102 = (i__46398 + (1));
seq__46395 = G__47099;
chunk__46396 = G__47100;
count__46397 = G__47101;
i__46398 = G__47102;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46395);
if(temp__5753__auto__){
var seq__46395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46395__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46395__$1);
var G__47103 = cljs.core.chunk_rest(seq__46395__$1);
var G__47104 = c__4679__auto__;
var G__47105 = cljs.core.count(c__4679__auto__);
var G__47106 = (0);
seq__46395 = G__47103;
chunk__46396 = G__47104;
count__46397 = G__47105;
i__46398 = G__47106;
continue;
} else {
var vec__46417 = cljs.core.first(seq__46395__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47107 = cljs.core.next(seq__46395__$1);
var G__47108 = null;
var G__47109 = (0);
var G__47110 = (0);
seq__46395 = G__47107;
chunk__46396 = G__47108;
count__46397 = G__47109;
i__46398 = G__47110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46421 = cljs.core.seq(styles);
var chunk__46422 = null;
var count__46423 = (0);
var i__46424 = (0);
while(true){
if((i__46424 < count__46423)){
var vec__46433 = chunk__46422.cljs$core$IIndexed$_nth$arity$2(null,i__46424);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47111 = seq__46421;
var G__47112 = chunk__46422;
var G__47113 = count__46423;
var G__47114 = (i__46424 + (1));
seq__46421 = G__47111;
chunk__46422 = G__47112;
count__46423 = G__47113;
i__46424 = G__47114;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46421);
if(temp__5753__auto__){
var seq__46421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46421__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46421__$1);
var G__47115 = cljs.core.chunk_rest(seq__46421__$1);
var G__47116 = c__4679__auto__;
var G__47117 = cljs.core.count(c__4679__auto__);
var G__47118 = (0);
seq__46421 = G__47115;
chunk__46422 = G__47116;
count__46423 = G__47117;
i__46424 = G__47118;
continue;
} else {
var vec__46438 = cljs.core.first(seq__46421__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47119 = cljs.core.next(seq__46421__$1);
var G__47120 = null;
var G__47121 = (0);
var G__47122 = (0);
seq__46421 = G__47119;
chunk__46422 = G__47120;
count__46423 = G__47121;
i__46424 = G__47122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46441_47123 = key;
var G__46441_47124__$1 = (((G__46441_47123 instanceof cljs.core.Keyword))?G__46441_47123.fqn:null);
switch (G__46441_47124__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47126 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_47126,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_47126,"aria-");
}
})())){
el.setAttribute(ks_47126,value);
} else {
(el[ks_47126] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46473){
var map__46474 = p__46473;
var map__46474__$1 = cljs.core.__destructure_map(map__46474);
var props = map__46474__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46474__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46477 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46477,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46477,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46477,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46482 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46482,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46482;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46489 = arguments.length;
switch (G__46489) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46502){
var vec__46504 = p__46502;
var seq__46505 = cljs.core.seq(vec__46504);
var first__46506 = cljs.core.first(seq__46505);
var seq__46505__$1 = cljs.core.next(seq__46505);
var nn = first__46506;
var first__46506__$1 = cljs.core.first(seq__46505__$1);
var seq__46505__$2 = cljs.core.next(seq__46505__$1);
var np = first__46506__$1;
var nc = seq__46505__$2;
var node = vec__46504;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46512 = nn;
var G__46513 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46512,G__46513) : create_fn.call(null,G__46512,G__46513));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46514 = nn;
var G__46515 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46514,G__46515) : create_fn.call(null,G__46514,G__46515));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46524 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(1),null);
var seq__46527_47133 = cljs.core.seq(node_children);
var chunk__46529_47134 = null;
var count__46530_47135 = (0);
var i__46531_47136 = (0);
while(true){
if((i__46531_47136 < count__46530_47135)){
var child_struct_47137 = chunk__46529_47134.cljs$core$IIndexed$_nth$arity$2(null,i__46531_47136);
var children_47138 = shadow.dom.dom_node(child_struct_47137);
if(cljs.core.seq_QMARK_(children_47138)){
var seq__46566_47139 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47138));
var chunk__46568_47140 = null;
var count__46569_47141 = (0);
var i__46570_47142 = (0);
while(true){
if((i__46570_47142 < count__46569_47141)){
var child_47143 = chunk__46568_47140.cljs$core$IIndexed$_nth$arity$2(null,i__46570_47142);
if(cljs.core.truth_(child_47143)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47143);


var G__47144 = seq__46566_47139;
var G__47145 = chunk__46568_47140;
var G__47146 = count__46569_47141;
var G__47147 = (i__46570_47142 + (1));
seq__46566_47139 = G__47144;
chunk__46568_47140 = G__47145;
count__46569_47141 = G__47146;
i__46570_47142 = G__47147;
continue;
} else {
var G__47148 = seq__46566_47139;
var G__47149 = chunk__46568_47140;
var G__47150 = count__46569_47141;
var G__47151 = (i__46570_47142 + (1));
seq__46566_47139 = G__47148;
chunk__46568_47140 = G__47149;
count__46569_47141 = G__47150;
i__46570_47142 = G__47151;
continue;
}
} else {
var temp__5753__auto___47152 = cljs.core.seq(seq__46566_47139);
if(temp__5753__auto___47152){
var seq__46566_47154__$1 = temp__5753__auto___47152;
if(cljs.core.chunked_seq_QMARK_(seq__46566_47154__$1)){
var c__4679__auto___47155 = cljs.core.chunk_first(seq__46566_47154__$1);
var G__47156 = cljs.core.chunk_rest(seq__46566_47154__$1);
var G__47157 = c__4679__auto___47155;
var G__47158 = cljs.core.count(c__4679__auto___47155);
var G__47159 = (0);
seq__46566_47139 = G__47156;
chunk__46568_47140 = G__47157;
count__46569_47141 = G__47158;
i__46570_47142 = G__47159;
continue;
} else {
var child_47160 = cljs.core.first(seq__46566_47154__$1);
if(cljs.core.truth_(child_47160)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47160);


var G__47162 = cljs.core.next(seq__46566_47154__$1);
var G__47163 = null;
var G__47164 = (0);
var G__47165 = (0);
seq__46566_47139 = G__47162;
chunk__46568_47140 = G__47163;
count__46569_47141 = G__47164;
i__46570_47142 = G__47165;
continue;
} else {
var G__47166 = cljs.core.next(seq__46566_47154__$1);
var G__47167 = null;
var G__47168 = (0);
var G__47169 = (0);
seq__46566_47139 = G__47166;
chunk__46568_47140 = G__47167;
count__46569_47141 = G__47168;
i__46570_47142 = G__47169;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47138);
}


var G__47170 = seq__46527_47133;
var G__47171 = chunk__46529_47134;
var G__47172 = count__46530_47135;
var G__47173 = (i__46531_47136 + (1));
seq__46527_47133 = G__47170;
chunk__46529_47134 = G__47171;
count__46530_47135 = G__47172;
i__46531_47136 = G__47173;
continue;
} else {
var temp__5753__auto___47174 = cljs.core.seq(seq__46527_47133);
if(temp__5753__auto___47174){
var seq__46527_47175__$1 = temp__5753__auto___47174;
if(cljs.core.chunked_seq_QMARK_(seq__46527_47175__$1)){
var c__4679__auto___47176 = cljs.core.chunk_first(seq__46527_47175__$1);
var G__47177 = cljs.core.chunk_rest(seq__46527_47175__$1);
var G__47178 = c__4679__auto___47176;
var G__47179 = cljs.core.count(c__4679__auto___47176);
var G__47180 = (0);
seq__46527_47133 = G__47177;
chunk__46529_47134 = G__47178;
count__46530_47135 = G__47179;
i__46531_47136 = G__47180;
continue;
} else {
var child_struct_47181 = cljs.core.first(seq__46527_47175__$1);
var children_47182 = shadow.dom.dom_node(child_struct_47181);
if(cljs.core.seq_QMARK_(children_47182)){
var seq__46647_47183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47182));
var chunk__46655_47184 = null;
var count__46656_47185 = (0);
var i__46657_47186 = (0);
while(true){
if((i__46657_47186 < count__46656_47185)){
var child_47187 = chunk__46655_47184.cljs$core$IIndexed$_nth$arity$2(null,i__46657_47186);
if(cljs.core.truth_(child_47187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47187);


var G__47188 = seq__46647_47183;
var G__47189 = chunk__46655_47184;
var G__47190 = count__46656_47185;
var G__47191 = (i__46657_47186 + (1));
seq__46647_47183 = G__47188;
chunk__46655_47184 = G__47189;
count__46656_47185 = G__47190;
i__46657_47186 = G__47191;
continue;
} else {
var G__47192 = seq__46647_47183;
var G__47193 = chunk__46655_47184;
var G__47194 = count__46656_47185;
var G__47195 = (i__46657_47186 + (1));
seq__46647_47183 = G__47192;
chunk__46655_47184 = G__47193;
count__46656_47185 = G__47194;
i__46657_47186 = G__47195;
continue;
}
} else {
var temp__5753__auto___47196__$1 = cljs.core.seq(seq__46647_47183);
if(temp__5753__auto___47196__$1){
var seq__46647_47197__$1 = temp__5753__auto___47196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46647_47197__$1)){
var c__4679__auto___47198 = cljs.core.chunk_first(seq__46647_47197__$1);
var G__47199 = cljs.core.chunk_rest(seq__46647_47197__$1);
var G__47200 = c__4679__auto___47198;
var G__47201 = cljs.core.count(c__4679__auto___47198);
var G__47202 = (0);
seq__46647_47183 = G__47199;
chunk__46655_47184 = G__47200;
count__46656_47185 = G__47201;
i__46657_47186 = G__47202;
continue;
} else {
var child_47203 = cljs.core.first(seq__46647_47197__$1);
if(cljs.core.truth_(child_47203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47203);


var G__47204 = cljs.core.next(seq__46647_47197__$1);
var G__47205 = null;
var G__47206 = (0);
var G__47207 = (0);
seq__46647_47183 = G__47204;
chunk__46655_47184 = G__47205;
count__46656_47185 = G__47206;
i__46657_47186 = G__47207;
continue;
} else {
var G__47208 = cljs.core.next(seq__46647_47197__$1);
var G__47209 = null;
var G__47210 = (0);
var G__47211 = (0);
seq__46647_47183 = G__47208;
chunk__46655_47184 = G__47209;
count__46656_47185 = G__47210;
i__46657_47186 = G__47211;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47182);
}


var G__47212 = cljs.core.next(seq__46527_47175__$1);
var G__47213 = null;
var G__47214 = (0);
var G__47215 = (0);
seq__46527_47133 = G__47212;
chunk__46529_47134 = G__47213;
count__46530_47135 = G__47214;
i__46531_47136 = G__47215;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46708 = cljs.core.seq(node);
var chunk__46709 = null;
var count__46710 = (0);
var i__46711 = (0);
while(true){
if((i__46711 < count__46710)){
var n = chunk__46709.cljs$core$IIndexed$_nth$arity$2(null,i__46711);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47219 = seq__46708;
var G__47220 = chunk__46709;
var G__47221 = count__46710;
var G__47222 = (i__46711 + (1));
seq__46708 = G__47219;
chunk__46709 = G__47220;
count__46710 = G__47221;
i__46711 = G__47222;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46708);
if(temp__5753__auto__){
var seq__46708__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46708__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46708__$1);
var G__47225 = cljs.core.chunk_rest(seq__46708__$1);
var G__47226 = c__4679__auto__;
var G__47227 = cljs.core.count(c__4679__auto__);
var G__47228 = (0);
seq__46708 = G__47225;
chunk__46709 = G__47226;
count__46710 = G__47227;
i__46711 = G__47228;
continue;
} else {
var n = cljs.core.first(seq__46708__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47229 = cljs.core.next(seq__46708__$1);
var G__47230 = null;
var G__47231 = (0);
var G__47232 = (0);
seq__46708 = G__47229;
chunk__46709 = G__47230;
count__46710 = G__47231;
i__46711 = G__47232;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46717 = arguments.length;
switch (G__46717) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46719 = arguments.length;
switch (G__46719) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46727 = arguments.length;
switch (G__46727) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47244 = arguments.length;
var i__4865__auto___47245 = (0);
while(true){
if((i__4865__auto___47245 < len__4864__auto___47244)){
args__4870__auto__.push((arguments[i__4865__auto___47245]));

var G__47246 = (i__4865__auto___47245 + (1));
i__4865__auto___47245 = G__47246;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46756_47247 = cljs.core.seq(nodes);
var chunk__46757_47248 = null;
var count__46758_47249 = (0);
var i__46759_47250 = (0);
while(true){
if((i__46759_47250 < count__46758_47249)){
var node_47251 = chunk__46757_47248.cljs$core$IIndexed$_nth$arity$2(null,i__46759_47250);
fragment.appendChild(shadow.dom._to_dom(node_47251));


var G__47252 = seq__46756_47247;
var G__47253 = chunk__46757_47248;
var G__47254 = count__46758_47249;
var G__47255 = (i__46759_47250 + (1));
seq__46756_47247 = G__47252;
chunk__46757_47248 = G__47253;
count__46758_47249 = G__47254;
i__46759_47250 = G__47255;
continue;
} else {
var temp__5753__auto___47256 = cljs.core.seq(seq__46756_47247);
if(temp__5753__auto___47256){
var seq__46756_47257__$1 = temp__5753__auto___47256;
if(cljs.core.chunked_seq_QMARK_(seq__46756_47257__$1)){
var c__4679__auto___47258 = cljs.core.chunk_first(seq__46756_47257__$1);
var G__47259 = cljs.core.chunk_rest(seq__46756_47257__$1);
var G__47260 = c__4679__auto___47258;
var G__47261 = cljs.core.count(c__4679__auto___47258);
var G__47262 = (0);
seq__46756_47247 = G__47259;
chunk__46757_47248 = G__47260;
count__46758_47249 = G__47261;
i__46759_47250 = G__47262;
continue;
} else {
var node_47263 = cljs.core.first(seq__46756_47257__$1);
fragment.appendChild(shadow.dom._to_dom(node_47263));


var G__47264 = cljs.core.next(seq__46756_47257__$1);
var G__47265 = null;
var G__47266 = (0);
var G__47267 = (0);
seq__46756_47247 = G__47264;
chunk__46757_47248 = G__47265;
count__46758_47249 = G__47266;
i__46759_47250 = G__47267;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46749){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46749));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46777_47268 = cljs.core.seq(scripts);
var chunk__46778_47269 = null;
var count__46779_47270 = (0);
var i__46780_47271 = (0);
while(true){
if((i__46780_47271 < count__46779_47270)){
var vec__46796_47272 = chunk__46778_47269.cljs$core$IIndexed$_nth$arity$2(null,i__46780_47271);
var script_tag_47273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796_47272,(0),null);
var script_body_47274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796_47272,(1),null);
eval(script_body_47274);


var G__47275 = seq__46777_47268;
var G__47276 = chunk__46778_47269;
var G__47277 = count__46779_47270;
var G__47278 = (i__46780_47271 + (1));
seq__46777_47268 = G__47275;
chunk__46778_47269 = G__47276;
count__46779_47270 = G__47277;
i__46780_47271 = G__47278;
continue;
} else {
var temp__5753__auto___47279 = cljs.core.seq(seq__46777_47268);
if(temp__5753__auto___47279){
var seq__46777_47280__$1 = temp__5753__auto___47279;
if(cljs.core.chunked_seq_QMARK_(seq__46777_47280__$1)){
var c__4679__auto___47281 = cljs.core.chunk_first(seq__46777_47280__$1);
var G__47282 = cljs.core.chunk_rest(seq__46777_47280__$1);
var G__47283 = c__4679__auto___47281;
var G__47284 = cljs.core.count(c__4679__auto___47281);
var G__47285 = (0);
seq__46777_47268 = G__47282;
chunk__46778_47269 = G__47283;
count__46779_47270 = G__47284;
i__46780_47271 = G__47285;
continue;
} else {
var vec__46800_47286 = cljs.core.first(seq__46777_47280__$1);
var script_tag_47287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800_47286,(0),null);
var script_body_47288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800_47286,(1),null);
eval(script_body_47288);


var G__47289 = cljs.core.next(seq__46777_47280__$1);
var G__47290 = null;
var G__47291 = (0);
var G__47292 = (0);
seq__46777_47268 = G__47289;
chunk__46778_47269 = G__47290;
count__46779_47270 = G__47291;
i__46780_47271 = G__47292;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46806){
var vec__46807 = p__46806;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46807,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46836 = arguments.length;
switch (G__46836) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46858 = cljs.core.seq(style_keys);
var chunk__46859 = null;
var count__46860 = (0);
var i__46861 = (0);
while(true){
if((i__46861 < count__46860)){
var it = chunk__46859.cljs$core$IIndexed$_nth$arity$2(null,i__46861);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47295 = seq__46858;
var G__47296 = chunk__46859;
var G__47297 = count__46860;
var G__47298 = (i__46861 + (1));
seq__46858 = G__47295;
chunk__46859 = G__47296;
count__46860 = G__47297;
i__46861 = G__47298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46858);
if(temp__5753__auto__){
var seq__46858__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46858__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46858__$1);
var G__47299 = cljs.core.chunk_rest(seq__46858__$1);
var G__47300 = c__4679__auto__;
var G__47301 = cljs.core.count(c__4679__auto__);
var G__47302 = (0);
seq__46858 = G__47299;
chunk__46859 = G__47300;
count__46860 = G__47301;
i__46861 = G__47302;
continue;
} else {
var it = cljs.core.first(seq__46858__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47304 = cljs.core.next(seq__46858__$1);
var G__47305 = null;
var G__47306 = (0);
var G__47307 = (0);
seq__46858 = G__47304;
chunk__46859 = G__47305;
count__46860 = G__47306;
i__46861 = G__47307;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46872,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46887 = k46872;
var G__46887__$1 = (((G__46887 instanceof cljs.core.Keyword))?G__46887.fqn:null);
switch (G__46887__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46872,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46888){
var vec__46889 = p__46888;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46889,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46889,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46871){
var self__ = this;
var G__46871__$1 = this;
return (new cljs.core.RecordIter((0),G__46871__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46873,other46874){
var self__ = this;
var this46873__$1 = this;
return (((!((other46874 == null)))) && ((((this46873__$1.constructor === other46874.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46873__$1.x,other46874.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46873__$1.y,other46874.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46873__$1.__extmap,other46874.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46872){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46894 = k46872;
var G__46894__$1 = (((G__46894 instanceof cljs.core.Keyword))?G__46894.fqn:null);
switch (G__46894__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46872);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46871){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46895 = cljs.core.keyword_identical_QMARK_;
var expr__46896 = k__4511__auto__;
if(cljs.core.truth_((pred__46895.cljs$core$IFn$_invoke$arity$2 ? pred__46895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46896) : pred__46895.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46896)))){
return (new shadow.dom.Coordinate(G__46871,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46895.cljs$core$IFn$_invoke$arity$2 ? pred__46895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46896) : pred__46895.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46896)))){
return (new shadow.dom.Coordinate(self__.x,G__46871,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46871),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46871){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46871,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46879){
var extmap__4542__auto__ = (function (){var G__46898 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46879,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46898);
} else {
return G__46898;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46879),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46879),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46900,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46904 = k46900;
var G__46904__$1 = (((G__46904 instanceof cljs.core.Keyword))?G__46904.fqn:null);
switch (G__46904__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46900,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46905){
var vec__46906 = p__46905;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46899){
var self__ = this;
var G__46899__$1 = this;
return (new cljs.core.RecordIter((0),G__46899__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46901,other46902){
var self__ = this;
var this46901__$1 = this;
return (((!((other46902 == null)))) && ((((this46901__$1.constructor === other46902.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46901__$1.w,other46902.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46901__$1.h,other46902.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46901__$1.__extmap,other46902.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46900){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46927 = k46900;
var G__46927__$1 = (((G__46927 instanceof cljs.core.Keyword))?G__46927.fqn:null);
switch (G__46927__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46900);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46899){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46931 = cljs.core.keyword_identical_QMARK_;
var expr__46932 = k__4511__auto__;
if(cljs.core.truth_((pred__46931.cljs$core$IFn$_invoke$arity$2 ? pred__46931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46932) : pred__46931.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46932)))){
return (new shadow.dom.Size(G__46899,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46931.cljs$core$IFn$_invoke$arity$2 ? pred__46931.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46932) : pred__46931.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46932)))){
return (new shadow.dom.Size(self__.w,G__46899,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46899),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46899){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46899,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46903){
var extmap__4542__auto__ = (function (){var G__46939 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46903,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46903)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46939);
} else {
return G__46939;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46903),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46903),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__47316 = (i + (1));
var G__47317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47316;
ret = G__47317;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46953){
var vec__46955 = p__46953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46960 = arguments.length;
switch (G__46960) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47319 = ps;
var G__47320 = (i + (1));
el__$1 = G__47319;
i = G__47320;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46972 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46975_47321 = cljs.core.seq(props);
var chunk__46976_47322 = null;
var count__46977_47323 = (0);
var i__46978_47324 = (0);
while(true){
if((i__46978_47324 < count__46977_47323)){
var vec__46985_47325 = chunk__46976_47322.cljs$core$IIndexed$_nth$arity$2(null,i__46978_47324);
var k_47326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46985_47325,(0),null);
var v_47327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46985_47325,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47326);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47326),v_47327);


var G__47328 = seq__46975_47321;
var G__47329 = chunk__46976_47322;
var G__47330 = count__46977_47323;
var G__47331 = (i__46978_47324 + (1));
seq__46975_47321 = G__47328;
chunk__46976_47322 = G__47329;
count__46977_47323 = G__47330;
i__46978_47324 = G__47331;
continue;
} else {
var temp__5753__auto___47332 = cljs.core.seq(seq__46975_47321);
if(temp__5753__auto___47332){
var seq__46975_47333__$1 = temp__5753__auto___47332;
if(cljs.core.chunked_seq_QMARK_(seq__46975_47333__$1)){
var c__4679__auto___47334 = cljs.core.chunk_first(seq__46975_47333__$1);
var G__47335 = cljs.core.chunk_rest(seq__46975_47333__$1);
var G__47336 = c__4679__auto___47334;
var G__47337 = cljs.core.count(c__4679__auto___47334);
var G__47338 = (0);
seq__46975_47321 = G__47335;
chunk__46976_47322 = G__47336;
count__46977_47323 = G__47337;
i__46978_47324 = G__47338;
continue;
} else {
var vec__46990_47339 = cljs.core.first(seq__46975_47333__$1);
var k_47340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990_47339,(0),null);
var v_47341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990_47339,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47340);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47340),v_47341);


var G__47342 = cljs.core.next(seq__46975_47333__$1);
var G__47343 = null;
var G__47344 = (0);
var G__47345 = (0);
seq__46975_47321 = G__47342;
chunk__46976_47322 = G__47343;
count__46977_47323 = G__47344;
i__46978_47324 = G__47345;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46997 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46997,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46997,(1),null);
var seq__47000_47346 = cljs.core.seq(node_children);
var chunk__47002_47347 = null;
var count__47003_47348 = (0);
var i__47004_47349 = (0);
while(true){
if((i__47004_47349 < count__47003_47348)){
var child_struct_47350 = chunk__47002_47347.cljs$core$IIndexed$_nth$arity$2(null,i__47004_47349);
if((!((child_struct_47350 == null)))){
if(typeof child_struct_47350 === 'string'){
var text_47351 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47351),child_struct_47350].join(''));
} else {
var children_47352 = shadow.dom.svg_node(child_struct_47350);
if(cljs.core.seq_QMARK_(children_47352)){
var seq__47030_47353 = cljs.core.seq(children_47352);
var chunk__47032_47354 = null;
var count__47033_47355 = (0);
var i__47034_47356 = (0);
while(true){
if((i__47034_47356 < count__47033_47355)){
var child_47357 = chunk__47032_47354.cljs$core$IIndexed$_nth$arity$2(null,i__47034_47356);
if(cljs.core.truth_(child_47357)){
node.appendChild(child_47357);


var G__47358 = seq__47030_47353;
var G__47359 = chunk__47032_47354;
var G__47360 = count__47033_47355;
var G__47361 = (i__47034_47356 + (1));
seq__47030_47353 = G__47358;
chunk__47032_47354 = G__47359;
count__47033_47355 = G__47360;
i__47034_47356 = G__47361;
continue;
} else {
var G__47362 = seq__47030_47353;
var G__47363 = chunk__47032_47354;
var G__47364 = count__47033_47355;
var G__47365 = (i__47034_47356 + (1));
seq__47030_47353 = G__47362;
chunk__47032_47354 = G__47363;
count__47033_47355 = G__47364;
i__47034_47356 = G__47365;
continue;
}
} else {
var temp__5753__auto___47366 = cljs.core.seq(seq__47030_47353);
if(temp__5753__auto___47366){
var seq__47030_47367__$1 = temp__5753__auto___47366;
if(cljs.core.chunked_seq_QMARK_(seq__47030_47367__$1)){
var c__4679__auto___47368 = cljs.core.chunk_first(seq__47030_47367__$1);
var G__47369 = cljs.core.chunk_rest(seq__47030_47367__$1);
var G__47370 = c__4679__auto___47368;
var G__47371 = cljs.core.count(c__4679__auto___47368);
var G__47372 = (0);
seq__47030_47353 = G__47369;
chunk__47032_47354 = G__47370;
count__47033_47355 = G__47371;
i__47034_47356 = G__47372;
continue;
} else {
var child_47373 = cljs.core.first(seq__47030_47367__$1);
if(cljs.core.truth_(child_47373)){
node.appendChild(child_47373);


var G__47374 = cljs.core.next(seq__47030_47367__$1);
var G__47375 = null;
var G__47376 = (0);
var G__47377 = (0);
seq__47030_47353 = G__47374;
chunk__47032_47354 = G__47375;
count__47033_47355 = G__47376;
i__47034_47356 = G__47377;
continue;
} else {
var G__47378 = cljs.core.next(seq__47030_47367__$1);
var G__47379 = null;
var G__47380 = (0);
var G__47381 = (0);
seq__47030_47353 = G__47378;
chunk__47032_47354 = G__47379;
count__47033_47355 = G__47380;
i__47034_47356 = G__47381;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47352);
}
}


var G__47382 = seq__47000_47346;
var G__47383 = chunk__47002_47347;
var G__47384 = count__47003_47348;
var G__47385 = (i__47004_47349 + (1));
seq__47000_47346 = G__47382;
chunk__47002_47347 = G__47383;
count__47003_47348 = G__47384;
i__47004_47349 = G__47385;
continue;
} else {
var G__47386 = seq__47000_47346;
var G__47387 = chunk__47002_47347;
var G__47388 = count__47003_47348;
var G__47389 = (i__47004_47349 + (1));
seq__47000_47346 = G__47386;
chunk__47002_47347 = G__47387;
count__47003_47348 = G__47388;
i__47004_47349 = G__47389;
continue;
}
} else {
var temp__5753__auto___47390 = cljs.core.seq(seq__47000_47346);
if(temp__5753__auto___47390){
var seq__47000_47391__$1 = temp__5753__auto___47390;
if(cljs.core.chunked_seq_QMARK_(seq__47000_47391__$1)){
var c__4679__auto___47392 = cljs.core.chunk_first(seq__47000_47391__$1);
var G__47393 = cljs.core.chunk_rest(seq__47000_47391__$1);
var G__47394 = c__4679__auto___47392;
var G__47395 = cljs.core.count(c__4679__auto___47392);
var G__47396 = (0);
seq__47000_47346 = G__47393;
chunk__47002_47347 = G__47394;
count__47003_47348 = G__47395;
i__47004_47349 = G__47396;
continue;
} else {
var child_struct_47397 = cljs.core.first(seq__47000_47391__$1);
if((!((child_struct_47397 == null)))){
if(typeof child_struct_47397 === 'string'){
var text_47398 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47398),child_struct_47397].join(''));
} else {
var children_47399 = shadow.dom.svg_node(child_struct_47397);
if(cljs.core.seq_QMARK_(children_47399)){
var seq__47047_47401 = cljs.core.seq(children_47399);
var chunk__47049_47402 = null;
var count__47050_47403 = (0);
var i__47051_47404 = (0);
while(true){
if((i__47051_47404 < count__47050_47403)){
var child_47405 = chunk__47049_47402.cljs$core$IIndexed$_nth$arity$2(null,i__47051_47404);
if(cljs.core.truth_(child_47405)){
node.appendChild(child_47405);


var G__47406 = seq__47047_47401;
var G__47407 = chunk__47049_47402;
var G__47408 = count__47050_47403;
var G__47409 = (i__47051_47404 + (1));
seq__47047_47401 = G__47406;
chunk__47049_47402 = G__47407;
count__47050_47403 = G__47408;
i__47051_47404 = G__47409;
continue;
} else {
var G__47410 = seq__47047_47401;
var G__47411 = chunk__47049_47402;
var G__47412 = count__47050_47403;
var G__47413 = (i__47051_47404 + (1));
seq__47047_47401 = G__47410;
chunk__47049_47402 = G__47411;
count__47050_47403 = G__47412;
i__47051_47404 = G__47413;
continue;
}
} else {
var temp__5753__auto___47414__$1 = cljs.core.seq(seq__47047_47401);
if(temp__5753__auto___47414__$1){
var seq__47047_47415__$1 = temp__5753__auto___47414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47047_47415__$1)){
var c__4679__auto___47416 = cljs.core.chunk_first(seq__47047_47415__$1);
var G__47417 = cljs.core.chunk_rest(seq__47047_47415__$1);
var G__47418 = c__4679__auto___47416;
var G__47419 = cljs.core.count(c__4679__auto___47416);
var G__47420 = (0);
seq__47047_47401 = G__47417;
chunk__47049_47402 = G__47418;
count__47050_47403 = G__47419;
i__47051_47404 = G__47420;
continue;
} else {
var child_47421 = cljs.core.first(seq__47047_47415__$1);
if(cljs.core.truth_(child_47421)){
node.appendChild(child_47421);


var G__47422 = cljs.core.next(seq__47047_47415__$1);
var G__47423 = null;
var G__47424 = (0);
var G__47425 = (0);
seq__47047_47401 = G__47422;
chunk__47049_47402 = G__47423;
count__47050_47403 = G__47424;
i__47051_47404 = G__47425;
continue;
} else {
var G__47426 = cljs.core.next(seq__47047_47415__$1);
var G__47427 = null;
var G__47428 = (0);
var G__47429 = (0);
seq__47047_47401 = G__47426;
chunk__47049_47402 = G__47427;
count__47050_47403 = G__47428;
i__47051_47404 = G__47429;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47399);
}
}


var G__47430 = cljs.core.next(seq__47000_47391__$1);
var G__47431 = null;
var G__47432 = (0);
var G__47433 = (0);
seq__47000_47346 = G__47430;
chunk__47002_47347 = G__47431;
count__47003_47348 = G__47432;
i__47004_47349 = G__47433;
continue;
} else {
var G__47434 = cljs.core.next(seq__47000_47391__$1);
var G__47435 = null;
var G__47436 = (0);
var G__47437 = (0);
seq__47000_47346 = G__47434;
chunk__47002_47347 = G__47435;
count__47003_47348 = G__47436;
i__47004_47349 = G__47437;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47438 = arguments.length;
var i__4865__auto___47439 = (0);
while(true){
if((i__4865__auto___47439 < len__4864__auto___47438)){
args__4870__auto__.push((arguments[i__4865__auto___47439]));

var G__47440 = (i__4865__auto___47439 + (1));
i__4865__auto___47439 = G__47440;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47056){
var G__47057 = cljs.core.first(seq47056);
var seq47056__$1 = cljs.core.next(seq47056);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47057,seq47056__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47059 = arguments.length;
switch (G__47059) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__27102__auto___47443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_47064){
var state_val_47065 = (state_47064[(1)]);
if((state_val_47065 === (1))){
var state_47064__$1 = state_47064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47064__$1,(2),once_or_cleanup);
} else {
if((state_val_47065 === (2))){
var inst_47061 = (state_47064[(2)]);
var inst_47062 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47064__$1 = (function (){var statearr_47066 = state_47064;
(statearr_47066[(7)] = inst_47061);

return statearr_47066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47064__$1,inst_47062);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27033__auto__ = null;
var shadow$dom$state_machine__27033__auto____0 = (function (){
var statearr_47067 = [null,null,null,null,null,null,null,null];
(statearr_47067[(0)] = shadow$dom$state_machine__27033__auto__);

(statearr_47067[(1)] = (1));

return statearr_47067;
});
var shadow$dom$state_machine__27033__auto____1 = (function (state_47064){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_47064);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e47068){var ex__27036__auto__ = e47068;
var statearr_47069_47444 = state_47064;
(statearr_47069_47444[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_47064[(4)]))){
var statearr_47070_47445 = state_47064;
(statearr_47070_47445[(1)] = cljs.core.first((state_47064[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47446 = state_47064;
state_47064 = G__47446;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
shadow$dom$state_machine__27033__auto__ = function(state_47064){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27033__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27033__auto____1.call(this,state_47064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27033__auto____0;
shadow$dom$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27033__auto____1;
return shadow$dom$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_47071 = f__27103__auto__();
(statearr_47071[(6)] = c__27102__auto___47443);

return statearr_47071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
