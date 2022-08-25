goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_73067 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_73067(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_73068 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_73068(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__72218 = coll;
var G__72219 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__72218,G__72219) : shadow.dom.lazy_native_coll_seq.call(null,G__72218,G__72219));
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
var G__72228 = arguments.length;
switch (G__72228) {
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
var G__72231 = arguments.length;
switch (G__72231) {
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
var G__72234 = arguments.length;
switch (G__72234) {
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
var G__72238 = arguments.length;
switch (G__72238) {
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
var G__72253 = arguments.length;
switch (G__72253) {
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
var G__72270 = arguments.length;
switch (G__72270) {
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
}catch (e72287){if((e72287 instanceof Object)){
var e = e72287;
return console.log("didnt support attachEvent",el,e);
} else {
throw e72287;

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
var seq__72293 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__72294 = null;
var count__72295 = (0);
var i__72296 = (0);
while(true){
if((i__72296 < count__72295)){
var el = chunk__72294.cljs$core$IIndexed$_nth$arity$2(null,i__72296);
var handler_73078__$1 = ((function (seq__72293,chunk__72294,count__72295,i__72296,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72293,chunk__72294,count__72295,i__72296,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73078__$1);


var G__73079 = seq__72293;
var G__73080 = chunk__72294;
var G__73081 = count__72295;
var G__73082 = (i__72296 + (1));
seq__72293 = G__73079;
chunk__72294 = G__73080;
count__72295 = G__73081;
i__72296 = G__73082;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72293);
if(temp__5753__auto__){
var seq__72293__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72293__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72293__$1);
var G__73083 = cljs.core.chunk_rest(seq__72293__$1);
var G__73084 = c__4679__auto__;
var G__73085 = cljs.core.count(c__4679__auto__);
var G__73086 = (0);
seq__72293 = G__73083;
chunk__72294 = G__73084;
count__72295 = G__73085;
i__72296 = G__73086;
continue;
} else {
var el = cljs.core.first(seq__72293__$1);
var handler_73087__$1 = ((function (seq__72293,chunk__72294,count__72295,i__72296,el,seq__72293__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72293,chunk__72294,count__72295,i__72296,el,seq__72293__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73087__$1);


var G__73088 = cljs.core.next(seq__72293__$1);
var G__73089 = null;
var G__73090 = (0);
var G__73091 = (0);
seq__72293 = G__73088;
chunk__72294 = G__73089;
count__72295 = G__73090;
i__72296 = G__73091;
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
var G__72308 = arguments.length;
switch (G__72308) {
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
var seq__72310 = cljs.core.seq(events);
var chunk__72311 = null;
var count__72312 = (0);
var i__72313 = (0);
while(true){
if((i__72313 < count__72312)){
var vec__72321 = chunk__72311.cljs$core$IIndexed$_nth$arity$2(null,i__72313);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72321,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73093 = seq__72310;
var G__73094 = chunk__72311;
var G__73095 = count__72312;
var G__73096 = (i__72313 + (1));
seq__72310 = G__73093;
chunk__72311 = G__73094;
count__72312 = G__73095;
i__72313 = G__73096;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72310);
if(temp__5753__auto__){
var seq__72310__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72310__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72310__$1);
var G__73097 = cljs.core.chunk_rest(seq__72310__$1);
var G__73098 = c__4679__auto__;
var G__73099 = cljs.core.count(c__4679__auto__);
var G__73100 = (0);
seq__72310 = G__73097;
chunk__72311 = G__73098;
count__72312 = G__73099;
i__72313 = G__73100;
continue;
} else {
var vec__72324 = cljs.core.first(seq__72310__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73101 = cljs.core.next(seq__72310__$1);
var G__73102 = null;
var G__73103 = (0);
var G__73104 = (0);
seq__72310 = G__73101;
chunk__72311 = G__73102;
count__72312 = G__73103;
i__72313 = G__73104;
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
var seq__72329 = cljs.core.seq(styles);
var chunk__72330 = null;
var count__72331 = (0);
var i__72332 = (0);
while(true){
if((i__72332 < count__72331)){
var vec__72339 = chunk__72330.cljs$core$IIndexed$_nth$arity$2(null,i__72332);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72339,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73105 = seq__72329;
var G__73106 = chunk__72330;
var G__73107 = count__72331;
var G__73108 = (i__72332 + (1));
seq__72329 = G__73105;
chunk__72330 = G__73106;
count__72331 = G__73107;
i__72332 = G__73108;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72329);
if(temp__5753__auto__){
var seq__72329__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72329__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72329__$1);
var G__73109 = cljs.core.chunk_rest(seq__72329__$1);
var G__73110 = c__4679__auto__;
var G__73111 = cljs.core.count(c__4679__auto__);
var G__73112 = (0);
seq__72329 = G__73109;
chunk__72330 = G__73110;
count__72331 = G__73111;
i__72332 = G__73112;
continue;
} else {
var vec__72342 = cljs.core.first(seq__72329__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72342,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73113 = cljs.core.next(seq__72329__$1);
var G__73114 = null;
var G__73115 = (0);
var G__73116 = (0);
seq__72329 = G__73113;
chunk__72330 = G__73114;
count__72331 = G__73115;
i__72332 = G__73116;
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
var G__72366_73117 = key;
var G__72366_73118__$1 = (((G__72366_73117 instanceof cljs.core.Keyword))?G__72366_73117.fqn:null);
switch (G__72366_73118__$1) {
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
var ks_73120 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_73120,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_73120,"aria-");
}
})())){
el.setAttribute(ks_73120,value);
} else {
(el[ks_73120] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__72387){
var map__72389 = p__72387;
var map__72389__$1 = cljs.core.__destructure_map(map__72389);
var props = map__72389__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72389__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__72392 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72392,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72392,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72392,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__72397 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__72397,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__72397;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__72402 = arguments.length;
switch (G__72402) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__72411){
var vec__72413 = p__72411;
var seq__72414 = cljs.core.seq(vec__72413);
var first__72415 = cljs.core.first(seq__72414);
var seq__72414__$1 = cljs.core.next(seq__72414);
var nn = first__72415;
var first__72415__$1 = cljs.core.first(seq__72414__$1);
var seq__72414__$2 = cljs.core.next(seq__72414__$1);
var np = first__72415__$1;
var nc = seq__72414__$2;
var node = vec__72413;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72416 = nn;
var G__72417 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72416,G__72417) : create_fn.call(null,G__72416,G__72417));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72418 = nn;
var G__72419 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72418,G__72419) : create_fn.call(null,G__72418,G__72419));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__72423 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72423,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72423,(1),null);
var seq__72426_73130 = cljs.core.seq(node_children);
var chunk__72427_73131 = null;
var count__72428_73132 = (0);
var i__72429_73133 = (0);
while(true){
if((i__72429_73133 < count__72428_73132)){
var child_struct_73134 = chunk__72427_73131.cljs$core$IIndexed$_nth$arity$2(null,i__72429_73133);
var children_73137 = shadow.dom.dom_node(child_struct_73134);
if(cljs.core.seq_QMARK_(children_73137)){
var seq__72459_73140 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73137));
var chunk__72461_73141 = null;
var count__72462_73142 = (0);
var i__72463_73143 = (0);
while(true){
if((i__72463_73143 < count__72462_73142)){
var child_73144 = chunk__72461_73141.cljs$core$IIndexed$_nth$arity$2(null,i__72463_73143);
if(cljs.core.truth_(child_73144)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73144);


var G__73145 = seq__72459_73140;
var G__73146 = chunk__72461_73141;
var G__73147 = count__72462_73142;
var G__73148 = (i__72463_73143 + (1));
seq__72459_73140 = G__73145;
chunk__72461_73141 = G__73146;
count__72462_73142 = G__73147;
i__72463_73143 = G__73148;
continue;
} else {
var G__73150 = seq__72459_73140;
var G__73151 = chunk__72461_73141;
var G__73152 = count__72462_73142;
var G__73153 = (i__72463_73143 + (1));
seq__72459_73140 = G__73150;
chunk__72461_73141 = G__73151;
count__72462_73142 = G__73152;
i__72463_73143 = G__73153;
continue;
}
} else {
var temp__5753__auto___73154 = cljs.core.seq(seq__72459_73140);
if(temp__5753__auto___73154){
var seq__72459_73155__$1 = temp__5753__auto___73154;
if(cljs.core.chunked_seq_QMARK_(seq__72459_73155__$1)){
var c__4679__auto___73156 = cljs.core.chunk_first(seq__72459_73155__$1);
var G__73157 = cljs.core.chunk_rest(seq__72459_73155__$1);
var G__73158 = c__4679__auto___73156;
var G__73159 = cljs.core.count(c__4679__auto___73156);
var G__73160 = (0);
seq__72459_73140 = G__73157;
chunk__72461_73141 = G__73158;
count__72462_73142 = G__73159;
i__72463_73143 = G__73160;
continue;
} else {
var child_73161 = cljs.core.first(seq__72459_73155__$1);
if(cljs.core.truth_(child_73161)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73161);


var G__73162 = cljs.core.next(seq__72459_73155__$1);
var G__73163 = null;
var G__73164 = (0);
var G__73165 = (0);
seq__72459_73140 = G__73162;
chunk__72461_73141 = G__73163;
count__72462_73142 = G__73164;
i__72463_73143 = G__73165;
continue;
} else {
var G__73166 = cljs.core.next(seq__72459_73155__$1);
var G__73167 = null;
var G__73168 = (0);
var G__73169 = (0);
seq__72459_73140 = G__73166;
chunk__72461_73141 = G__73167;
count__72462_73142 = G__73168;
i__72463_73143 = G__73169;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73137);
}


var G__73170 = seq__72426_73130;
var G__73171 = chunk__72427_73131;
var G__73172 = count__72428_73132;
var G__73173 = (i__72429_73133 + (1));
seq__72426_73130 = G__73170;
chunk__72427_73131 = G__73171;
count__72428_73132 = G__73172;
i__72429_73133 = G__73173;
continue;
} else {
var temp__5753__auto___73174 = cljs.core.seq(seq__72426_73130);
if(temp__5753__auto___73174){
var seq__72426_73175__$1 = temp__5753__auto___73174;
if(cljs.core.chunked_seq_QMARK_(seq__72426_73175__$1)){
var c__4679__auto___73176 = cljs.core.chunk_first(seq__72426_73175__$1);
var G__73178 = cljs.core.chunk_rest(seq__72426_73175__$1);
var G__73179 = c__4679__auto___73176;
var G__73180 = cljs.core.count(c__4679__auto___73176);
var G__73181 = (0);
seq__72426_73130 = G__73178;
chunk__72427_73131 = G__73179;
count__72428_73132 = G__73180;
i__72429_73133 = G__73181;
continue;
} else {
var child_struct_73183 = cljs.core.first(seq__72426_73175__$1);
var children_73184 = shadow.dom.dom_node(child_struct_73183);
if(cljs.core.seq_QMARK_(children_73184)){
var seq__72502_73185 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73184));
var chunk__72504_73186 = null;
var count__72505_73187 = (0);
var i__72506_73188 = (0);
while(true){
if((i__72506_73188 < count__72505_73187)){
var child_73189 = chunk__72504_73186.cljs$core$IIndexed$_nth$arity$2(null,i__72506_73188);
if(cljs.core.truth_(child_73189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73189);


var G__73191 = seq__72502_73185;
var G__73192 = chunk__72504_73186;
var G__73193 = count__72505_73187;
var G__73194 = (i__72506_73188 + (1));
seq__72502_73185 = G__73191;
chunk__72504_73186 = G__73192;
count__72505_73187 = G__73193;
i__72506_73188 = G__73194;
continue;
} else {
var G__73195 = seq__72502_73185;
var G__73196 = chunk__72504_73186;
var G__73197 = count__72505_73187;
var G__73198 = (i__72506_73188 + (1));
seq__72502_73185 = G__73195;
chunk__72504_73186 = G__73196;
count__72505_73187 = G__73197;
i__72506_73188 = G__73198;
continue;
}
} else {
var temp__5753__auto___73199__$1 = cljs.core.seq(seq__72502_73185);
if(temp__5753__auto___73199__$1){
var seq__72502_73201__$1 = temp__5753__auto___73199__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72502_73201__$1)){
var c__4679__auto___73202 = cljs.core.chunk_first(seq__72502_73201__$1);
var G__73203 = cljs.core.chunk_rest(seq__72502_73201__$1);
var G__73204 = c__4679__auto___73202;
var G__73205 = cljs.core.count(c__4679__auto___73202);
var G__73206 = (0);
seq__72502_73185 = G__73203;
chunk__72504_73186 = G__73204;
count__72505_73187 = G__73205;
i__72506_73188 = G__73206;
continue;
} else {
var child_73208 = cljs.core.first(seq__72502_73201__$1);
if(cljs.core.truth_(child_73208)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73208);


var G__73209 = cljs.core.next(seq__72502_73201__$1);
var G__73210 = null;
var G__73211 = (0);
var G__73212 = (0);
seq__72502_73185 = G__73209;
chunk__72504_73186 = G__73210;
count__72505_73187 = G__73211;
i__72506_73188 = G__73212;
continue;
} else {
var G__73213 = cljs.core.next(seq__72502_73201__$1);
var G__73214 = null;
var G__73215 = (0);
var G__73216 = (0);
seq__72502_73185 = G__73213;
chunk__72504_73186 = G__73214;
count__72505_73187 = G__73215;
i__72506_73188 = G__73216;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73184);
}


var G__73217 = cljs.core.next(seq__72426_73175__$1);
var G__73218 = null;
var G__73219 = (0);
var G__73220 = (0);
seq__72426_73130 = G__73217;
chunk__72427_73131 = G__73218;
count__72428_73132 = G__73219;
i__72429_73133 = G__73220;
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
var seq__72547 = cljs.core.seq(node);
var chunk__72548 = null;
var count__72549 = (0);
var i__72550 = (0);
while(true){
if((i__72550 < count__72549)){
var n = chunk__72548.cljs$core$IIndexed$_nth$arity$2(null,i__72550);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73221 = seq__72547;
var G__73222 = chunk__72548;
var G__73223 = count__72549;
var G__73224 = (i__72550 + (1));
seq__72547 = G__73221;
chunk__72548 = G__73222;
count__72549 = G__73223;
i__72550 = G__73224;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72547);
if(temp__5753__auto__){
var seq__72547__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72547__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72547__$1);
var G__73225 = cljs.core.chunk_rest(seq__72547__$1);
var G__73226 = c__4679__auto__;
var G__73227 = cljs.core.count(c__4679__auto__);
var G__73228 = (0);
seq__72547 = G__73225;
chunk__72548 = G__73226;
count__72549 = G__73227;
i__72550 = G__73228;
continue;
} else {
var n = cljs.core.first(seq__72547__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73229 = cljs.core.next(seq__72547__$1);
var G__73230 = null;
var G__73231 = (0);
var G__73232 = (0);
seq__72547 = G__73229;
chunk__72548 = G__73230;
count__72549 = G__73231;
i__72550 = G__73232;
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
var G__72562 = arguments.length;
switch (G__72562) {
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
var G__72572 = arguments.length;
switch (G__72572) {
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
var G__72583 = arguments.length;
switch (G__72583) {
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
var len__4864__auto___73243 = arguments.length;
var i__4865__auto___73244 = (0);
while(true){
if((i__4865__auto___73244 < len__4864__auto___73243)){
args__4870__auto__.push((arguments[i__4865__auto___73244]));

var G__73245 = (i__4865__auto___73244 + (1));
i__4865__auto___73244 = G__73245;
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
var seq__72596_73249 = cljs.core.seq(nodes);
var chunk__72597_73250 = null;
var count__72598_73251 = (0);
var i__72599_73252 = (0);
while(true){
if((i__72599_73252 < count__72598_73251)){
var node_73253 = chunk__72597_73250.cljs$core$IIndexed$_nth$arity$2(null,i__72599_73252);
fragment.appendChild(shadow.dom._to_dom(node_73253));


var G__73254 = seq__72596_73249;
var G__73255 = chunk__72597_73250;
var G__73256 = count__72598_73251;
var G__73257 = (i__72599_73252 + (1));
seq__72596_73249 = G__73254;
chunk__72597_73250 = G__73255;
count__72598_73251 = G__73256;
i__72599_73252 = G__73257;
continue;
} else {
var temp__5753__auto___73258 = cljs.core.seq(seq__72596_73249);
if(temp__5753__auto___73258){
var seq__72596_73259__$1 = temp__5753__auto___73258;
if(cljs.core.chunked_seq_QMARK_(seq__72596_73259__$1)){
var c__4679__auto___73260 = cljs.core.chunk_first(seq__72596_73259__$1);
var G__73261 = cljs.core.chunk_rest(seq__72596_73259__$1);
var G__73262 = c__4679__auto___73260;
var G__73263 = cljs.core.count(c__4679__auto___73260);
var G__73264 = (0);
seq__72596_73249 = G__73261;
chunk__72597_73250 = G__73262;
count__72598_73251 = G__73263;
i__72599_73252 = G__73264;
continue;
} else {
var node_73265 = cljs.core.first(seq__72596_73259__$1);
fragment.appendChild(shadow.dom._to_dom(node_73265));


var G__73266 = cljs.core.next(seq__72596_73259__$1);
var G__73267 = null;
var G__73268 = (0);
var G__73269 = (0);
seq__72596_73249 = G__73266;
chunk__72597_73250 = G__73267;
count__72598_73251 = G__73268;
i__72599_73252 = G__73269;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq72591){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72591));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__72603_73272 = cljs.core.seq(scripts);
var chunk__72604_73273 = null;
var count__72605_73274 = (0);
var i__72606_73275 = (0);
while(true){
if((i__72606_73275 < count__72605_73274)){
var vec__72613_73276 = chunk__72604_73273.cljs$core$IIndexed$_nth$arity$2(null,i__72606_73275);
var script_tag_73277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72613_73276,(0),null);
var script_body_73278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72613_73276,(1),null);
eval(script_body_73278);


var G__73279 = seq__72603_73272;
var G__73280 = chunk__72604_73273;
var G__73281 = count__72605_73274;
var G__73282 = (i__72606_73275 + (1));
seq__72603_73272 = G__73279;
chunk__72604_73273 = G__73280;
count__72605_73274 = G__73281;
i__72606_73275 = G__73282;
continue;
} else {
var temp__5753__auto___73287 = cljs.core.seq(seq__72603_73272);
if(temp__5753__auto___73287){
var seq__72603_73288__$1 = temp__5753__auto___73287;
if(cljs.core.chunked_seq_QMARK_(seq__72603_73288__$1)){
var c__4679__auto___73289 = cljs.core.chunk_first(seq__72603_73288__$1);
var G__73290 = cljs.core.chunk_rest(seq__72603_73288__$1);
var G__73291 = c__4679__auto___73289;
var G__73292 = cljs.core.count(c__4679__auto___73289);
var G__73293 = (0);
seq__72603_73272 = G__73290;
chunk__72604_73273 = G__73291;
count__72605_73274 = G__73292;
i__72606_73275 = G__73293;
continue;
} else {
var vec__72618_73294 = cljs.core.first(seq__72603_73288__$1);
var script_tag_73295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72618_73294,(0),null);
var script_body_73296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72618_73294,(1),null);
eval(script_body_73296);


var G__73297 = cljs.core.next(seq__72603_73288__$1);
var G__73298 = null;
var G__73299 = (0);
var G__73300 = (0);
seq__72603_73272 = G__73297;
chunk__72604_73273 = G__73298;
count__72605_73274 = G__73299;
i__72606_73275 = G__73300;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__72622){
var vec__72623 = p__72622;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72623,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72623,(1),null);
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
var G__72638 = arguments.length;
switch (G__72638) {
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
var seq__72684 = cljs.core.seq(style_keys);
var chunk__72685 = null;
var count__72686 = (0);
var i__72687 = (0);
while(true){
if((i__72687 < count__72686)){
var it = chunk__72685.cljs$core$IIndexed$_nth$arity$2(null,i__72687);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73308 = seq__72684;
var G__73309 = chunk__72685;
var G__73310 = count__72686;
var G__73311 = (i__72687 + (1));
seq__72684 = G__73308;
chunk__72685 = G__73309;
count__72686 = G__73310;
i__72687 = G__73311;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72684);
if(temp__5753__auto__){
var seq__72684__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72684__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72684__$1);
var G__73312 = cljs.core.chunk_rest(seq__72684__$1);
var G__73313 = c__4679__auto__;
var G__73314 = cljs.core.count(c__4679__auto__);
var G__73315 = (0);
seq__72684 = G__73312;
chunk__72685 = G__73313;
count__72686 = G__73314;
i__72687 = G__73315;
continue;
} else {
var it = cljs.core.first(seq__72684__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73316 = cljs.core.next(seq__72684__$1);
var G__73317 = null;
var G__73318 = (0);
var G__73319 = (0);
seq__72684 = G__73316;
chunk__72685 = G__73317;
count__72686 = G__73318;
i__72687 = G__73319;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72693,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72699 = k72693;
var G__72699__$1 = (((G__72699 instanceof cljs.core.Keyword))?G__72699.fqn:null);
switch (G__72699__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72693,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72701){
var vec__72703 = p__72701;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72703,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72703,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72692){
var self__ = this;
var G__72692__$1 = this;
return (new cljs.core.RecordIter((0),G__72692__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72694,other72695){
var self__ = this;
var this72694__$1 = this;
return (((!((other72695 == null)))) && ((((this72694__$1.constructor === other72695.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72694__$1.x,other72695.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72694__$1.y,other72695.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72694__$1.__extmap,other72695.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72693){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72729 = k72693;
var G__72729__$1 = (((G__72729 instanceof cljs.core.Keyword))?G__72729.fqn:null);
switch (G__72729__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72693);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72692){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72731 = cljs.core.keyword_identical_QMARK_;
var expr__72732 = k__4511__auto__;
if(cljs.core.truth_((pred__72731.cljs$core$IFn$_invoke$arity$2 ? pred__72731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72732) : pred__72731.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72732)))){
return (new shadow.dom.Coordinate(G__72692,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72731.cljs$core$IFn$_invoke$arity$2 ? pred__72731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72732) : pred__72731.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72732)))){
return (new shadow.dom.Coordinate(self__.x,G__72692,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72692),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72692){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__72692,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__72696){
var extmap__4542__auto__ = (function (){var G__72741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72696,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__72696)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72741);
} else {
return G__72741;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72696),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72696),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72767,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72779 = k72767;
var G__72779__$1 = (((G__72779 instanceof cljs.core.Keyword))?G__72779.fqn:null);
switch (G__72779__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72767,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72784){
var vec__72785 = p__72784;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72785,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72785,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72766){
var self__ = this;
var G__72766__$1 = this;
return (new cljs.core.RecordIter((0),G__72766__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72768,other72769){
var self__ = this;
var this72768__$1 = this;
return (((!((other72769 == null)))) && ((((this72768__$1.constructor === other72769.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72768__$1.w,other72769.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72768__$1.h,other72769.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72768__$1.__extmap,other72769.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72767){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72809 = k72767;
var G__72809__$1 = (((G__72809 instanceof cljs.core.Keyword))?G__72809.fqn:null);
switch (G__72809__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72767);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72766){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72812 = cljs.core.keyword_identical_QMARK_;
var expr__72813 = k__4511__auto__;
if(cljs.core.truth_((pred__72812.cljs$core$IFn$_invoke$arity$2 ? pred__72812.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72813) : pred__72812.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72813)))){
return (new shadow.dom.Size(G__72766,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72812.cljs$core$IFn$_invoke$arity$2 ? pred__72812.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72813) : pred__72812.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72813)))){
return (new shadow.dom.Size(self__.w,G__72766,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72766),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72766){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72766,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72771){
var extmap__4542__auto__ = (function (){var G__72830 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72771,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72771)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72830);
} else {
return G__72830;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72771),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72771),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__73361 = (i + (1));
var G__73362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__73361;
ret = G__73362;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72859){
var vec__72860 = p__72859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72860,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__72867 = arguments.length;
switch (G__72867) {
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
var G__73377 = ps;
var G__73378 = (i + (1));
el__$1 = G__73377;
i = G__73378;
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
var vec__72890 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__72894_73379 = cljs.core.seq(props);
var chunk__72895_73380 = null;
var count__72896_73381 = (0);
var i__72897_73382 = (0);
while(true){
if((i__72897_73382 < count__72896_73381)){
var vec__72910_73383 = chunk__72895_73380.cljs$core$IIndexed$_nth$arity$2(null,i__72897_73382);
var k_73384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72910_73383,(0),null);
var v_73385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72910_73383,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_73384);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73384),v_73385);


var G__73386 = seq__72894_73379;
var G__73387 = chunk__72895_73380;
var G__73388 = count__72896_73381;
var G__73389 = (i__72897_73382 + (1));
seq__72894_73379 = G__73386;
chunk__72895_73380 = G__73387;
count__72896_73381 = G__73388;
i__72897_73382 = G__73389;
continue;
} else {
var temp__5753__auto___73390 = cljs.core.seq(seq__72894_73379);
if(temp__5753__auto___73390){
var seq__72894_73391__$1 = temp__5753__auto___73390;
if(cljs.core.chunked_seq_QMARK_(seq__72894_73391__$1)){
var c__4679__auto___73392 = cljs.core.chunk_first(seq__72894_73391__$1);
var G__73393 = cljs.core.chunk_rest(seq__72894_73391__$1);
var G__73394 = c__4679__auto___73392;
var G__73395 = cljs.core.count(c__4679__auto___73392);
var G__73396 = (0);
seq__72894_73379 = G__73393;
chunk__72895_73380 = G__73394;
count__72896_73381 = G__73395;
i__72897_73382 = G__73396;
continue;
} else {
var vec__72915_73397 = cljs.core.first(seq__72894_73391__$1);
var k_73398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72915_73397,(0),null);
var v_73399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72915_73397,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_73398);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73398),v_73399);


var G__73400 = cljs.core.next(seq__72894_73391__$1);
var G__73401 = null;
var G__73402 = (0);
var G__73403 = (0);
seq__72894_73379 = G__73400;
chunk__72895_73380 = G__73401;
count__72896_73381 = G__73402;
i__72897_73382 = G__73403;
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
var vec__72924 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72924,(1),null);
var seq__72928_73404 = cljs.core.seq(node_children);
var chunk__72930_73405 = null;
var count__72931_73406 = (0);
var i__72932_73407 = (0);
while(true){
if((i__72932_73407 < count__72931_73406)){
var child_struct_73408 = chunk__72930_73405.cljs$core$IIndexed$_nth$arity$2(null,i__72932_73407);
if((!((child_struct_73408 == null)))){
if(typeof child_struct_73408 === 'string'){
var text_73409 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73409),child_struct_73408].join(''));
} else {
var children_73410 = shadow.dom.svg_node(child_struct_73408);
if(cljs.core.seq_QMARK_(children_73410)){
var seq__72969_73411 = cljs.core.seq(children_73410);
var chunk__72971_73412 = null;
var count__72972_73413 = (0);
var i__72973_73414 = (0);
while(true){
if((i__72973_73414 < count__72972_73413)){
var child_73415 = chunk__72971_73412.cljs$core$IIndexed$_nth$arity$2(null,i__72973_73414);
if(cljs.core.truth_(child_73415)){
node.appendChild(child_73415);


var G__73416 = seq__72969_73411;
var G__73417 = chunk__72971_73412;
var G__73418 = count__72972_73413;
var G__73419 = (i__72973_73414 + (1));
seq__72969_73411 = G__73416;
chunk__72971_73412 = G__73417;
count__72972_73413 = G__73418;
i__72973_73414 = G__73419;
continue;
} else {
var G__73420 = seq__72969_73411;
var G__73421 = chunk__72971_73412;
var G__73422 = count__72972_73413;
var G__73423 = (i__72973_73414 + (1));
seq__72969_73411 = G__73420;
chunk__72971_73412 = G__73421;
count__72972_73413 = G__73422;
i__72973_73414 = G__73423;
continue;
}
} else {
var temp__5753__auto___73424 = cljs.core.seq(seq__72969_73411);
if(temp__5753__auto___73424){
var seq__72969_73425__$1 = temp__5753__auto___73424;
if(cljs.core.chunked_seq_QMARK_(seq__72969_73425__$1)){
var c__4679__auto___73426 = cljs.core.chunk_first(seq__72969_73425__$1);
var G__73427 = cljs.core.chunk_rest(seq__72969_73425__$1);
var G__73428 = c__4679__auto___73426;
var G__73429 = cljs.core.count(c__4679__auto___73426);
var G__73430 = (0);
seq__72969_73411 = G__73427;
chunk__72971_73412 = G__73428;
count__72972_73413 = G__73429;
i__72973_73414 = G__73430;
continue;
} else {
var child_73431 = cljs.core.first(seq__72969_73425__$1);
if(cljs.core.truth_(child_73431)){
node.appendChild(child_73431);


var G__73432 = cljs.core.next(seq__72969_73425__$1);
var G__73433 = null;
var G__73434 = (0);
var G__73435 = (0);
seq__72969_73411 = G__73432;
chunk__72971_73412 = G__73433;
count__72972_73413 = G__73434;
i__72973_73414 = G__73435;
continue;
} else {
var G__73436 = cljs.core.next(seq__72969_73425__$1);
var G__73437 = null;
var G__73438 = (0);
var G__73439 = (0);
seq__72969_73411 = G__73436;
chunk__72971_73412 = G__73437;
count__72972_73413 = G__73438;
i__72973_73414 = G__73439;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73410);
}
}


var G__73440 = seq__72928_73404;
var G__73441 = chunk__72930_73405;
var G__73442 = count__72931_73406;
var G__73443 = (i__72932_73407 + (1));
seq__72928_73404 = G__73440;
chunk__72930_73405 = G__73441;
count__72931_73406 = G__73442;
i__72932_73407 = G__73443;
continue;
} else {
var G__73444 = seq__72928_73404;
var G__73445 = chunk__72930_73405;
var G__73446 = count__72931_73406;
var G__73447 = (i__72932_73407 + (1));
seq__72928_73404 = G__73444;
chunk__72930_73405 = G__73445;
count__72931_73406 = G__73446;
i__72932_73407 = G__73447;
continue;
}
} else {
var temp__5753__auto___73448 = cljs.core.seq(seq__72928_73404);
if(temp__5753__auto___73448){
var seq__72928_73449__$1 = temp__5753__auto___73448;
if(cljs.core.chunked_seq_QMARK_(seq__72928_73449__$1)){
var c__4679__auto___73450 = cljs.core.chunk_first(seq__72928_73449__$1);
var G__73451 = cljs.core.chunk_rest(seq__72928_73449__$1);
var G__73452 = c__4679__auto___73450;
var G__73453 = cljs.core.count(c__4679__auto___73450);
var G__73454 = (0);
seq__72928_73404 = G__73451;
chunk__72930_73405 = G__73452;
count__72931_73406 = G__73453;
i__72932_73407 = G__73454;
continue;
} else {
var child_struct_73455 = cljs.core.first(seq__72928_73449__$1);
if((!((child_struct_73455 == null)))){
if(typeof child_struct_73455 === 'string'){
var text_73456 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73456),child_struct_73455].join(''));
} else {
var children_73457 = shadow.dom.svg_node(child_struct_73455);
if(cljs.core.seq_QMARK_(children_73457)){
var seq__72986_73458 = cljs.core.seq(children_73457);
var chunk__72988_73459 = null;
var count__72989_73460 = (0);
var i__72990_73461 = (0);
while(true){
if((i__72990_73461 < count__72989_73460)){
var child_73465 = chunk__72988_73459.cljs$core$IIndexed$_nth$arity$2(null,i__72990_73461);
if(cljs.core.truth_(child_73465)){
node.appendChild(child_73465);


var G__73466 = seq__72986_73458;
var G__73467 = chunk__72988_73459;
var G__73468 = count__72989_73460;
var G__73469 = (i__72990_73461 + (1));
seq__72986_73458 = G__73466;
chunk__72988_73459 = G__73467;
count__72989_73460 = G__73468;
i__72990_73461 = G__73469;
continue;
} else {
var G__73470 = seq__72986_73458;
var G__73471 = chunk__72988_73459;
var G__73472 = count__72989_73460;
var G__73473 = (i__72990_73461 + (1));
seq__72986_73458 = G__73470;
chunk__72988_73459 = G__73471;
count__72989_73460 = G__73472;
i__72990_73461 = G__73473;
continue;
}
} else {
var temp__5753__auto___73474__$1 = cljs.core.seq(seq__72986_73458);
if(temp__5753__auto___73474__$1){
var seq__72986_73475__$1 = temp__5753__auto___73474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72986_73475__$1)){
var c__4679__auto___73476 = cljs.core.chunk_first(seq__72986_73475__$1);
var G__73477 = cljs.core.chunk_rest(seq__72986_73475__$1);
var G__73478 = c__4679__auto___73476;
var G__73479 = cljs.core.count(c__4679__auto___73476);
var G__73480 = (0);
seq__72986_73458 = G__73477;
chunk__72988_73459 = G__73478;
count__72989_73460 = G__73479;
i__72990_73461 = G__73480;
continue;
} else {
var child_73481 = cljs.core.first(seq__72986_73475__$1);
if(cljs.core.truth_(child_73481)){
node.appendChild(child_73481);


var G__73482 = cljs.core.next(seq__72986_73475__$1);
var G__73483 = null;
var G__73484 = (0);
var G__73485 = (0);
seq__72986_73458 = G__73482;
chunk__72988_73459 = G__73483;
count__72989_73460 = G__73484;
i__72990_73461 = G__73485;
continue;
} else {
var G__73486 = cljs.core.next(seq__72986_73475__$1);
var G__73487 = null;
var G__73488 = (0);
var G__73489 = (0);
seq__72986_73458 = G__73486;
chunk__72988_73459 = G__73487;
count__72989_73460 = G__73488;
i__72990_73461 = G__73489;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73457);
}
}


var G__73490 = cljs.core.next(seq__72928_73449__$1);
var G__73491 = null;
var G__73492 = (0);
var G__73493 = (0);
seq__72928_73404 = G__73490;
chunk__72930_73405 = G__73491;
count__72931_73406 = G__73492;
i__72932_73407 = G__73493;
continue;
} else {
var G__73494 = cljs.core.next(seq__72928_73449__$1);
var G__73495 = null;
var G__73496 = (0);
var G__73497 = (0);
seq__72928_73404 = G__73494;
chunk__72930_73405 = G__73495;
count__72931_73406 = G__73496;
i__72932_73407 = G__73497;
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
var len__4864__auto___73501 = arguments.length;
var i__4865__auto___73502 = (0);
while(true){
if((i__4865__auto___73502 < len__4864__auto___73501)){
args__4870__auto__.push((arguments[i__4865__auto___73502]));

var G__73503 = (i__4865__auto___73502 + (1));
i__4865__auto___73502 = G__73503;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq73013){
var G__73014 = cljs.core.first(seq73013);
var seq73013__$1 = cljs.core.next(seq73013);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73014,seq73013__$1);
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
var G__73024 = arguments.length;
switch (G__73024) {
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
var c__44586__auto___73508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_73039){
var state_val_73040 = (state_73039[(1)]);
if((state_val_73040 === (1))){
var state_73039__$1 = state_73039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73039__$1,(2),once_or_cleanup);
} else {
if((state_val_73040 === (2))){
var inst_73036 = (state_73039[(2)]);
var inst_73037 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_73039__$1 = (function (){var statearr_73045 = state_73039;
(statearr_73045[(7)] = inst_73036);

return statearr_73045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73039__$1,inst_73037);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44380__auto__ = null;
var shadow$dom$state_machine__44380__auto____0 = (function (){
var statearr_73046 = [null,null,null,null,null,null,null,null];
(statearr_73046[(0)] = shadow$dom$state_machine__44380__auto__);

(statearr_73046[(1)] = (1));

return statearr_73046;
});
var shadow$dom$state_machine__44380__auto____1 = (function (state_73039){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_73039);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e73049){var ex__44383__auto__ = e73049;
var statearr_73053_73509 = state_73039;
(statearr_73053_73509[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_73039[(4)]))){
var statearr_73056_73511 = state_73039;
(statearr_73056_73511[(1)] = cljs.core.first((state_73039[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73512 = state_73039;
state_73039 = G__73512;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
shadow$dom$state_machine__44380__auto__ = function(state_73039){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44380__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44380__auto____1.call(this,state_73039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44380__auto____0;
shadow$dom$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44380__auto____1;
return shadow$dom$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_73060 = f__44587__auto__();
(statearr_73060[(6)] = c__44586__auto___73508);

return statearr_73060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
