goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__70036 = arguments.length;
switch (G__70036) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70037 = (function (f,blockable,meta70038){
this.f = f;
this.blockable = blockable;
this.meta70038 = meta70038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70039,meta70038__$1){
var self__ = this;
var _70039__$1 = this;
return (new cljs.core.async.t_cljs$core$async70037(self__.f,self__.blockable,meta70038__$1));
}));

(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70039){
var self__ = this;
var _70039__$1 = this;
return self__.meta70038;
}));

(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async70037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async70037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70038","meta70038",-929461201,null)], null);
}));

(cljs.core.async.t_cljs$core$async70037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70037");

(cljs.core.async.t_cljs$core$async70037.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70037.
 */
cljs.core.async.__GT_t_cljs$core$async70037 = (function cljs$core$async$__GT_t_cljs$core$async70037(f__$1,blockable__$1,meta70038){
return (new cljs.core.async.t_cljs$core$async70037(f__$1,blockable__$1,meta70038));
});

}

return (new cljs.core.async.t_cljs$core$async70037(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__70043 = arguments.length;
switch (G__70043) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__70045 = arguments.length;
switch (G__70045) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__70047 = arguments.length;
switch (G__70047) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_72223 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72223) : fn1.call(null,val_72223));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72223) : fn1.call(null,val_72223));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__70051 = arguments.length;
switch (G__70051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___72226 = n;
var x_72227 = (0);
while(true){
if((x_72227 < n__4741__auto___72226)){
(a[x_72227] = x_72227);

var G__72229 = (x_72227 + (1));
x_72227 = G__72229;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70063 = (function (flag,meta70064){
this.flag = flag;
this.meta70064 = meta70064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70065,meta70064__$1){
var self__ = this;
var _70065__$1 = this;
return (new cljs.core.async.t_cljs$core$async70063(self__.flag,meta70064__$1));
}));

(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70065){
var self__ = this;
var _70065__$1 = this;
return self__.meta70064;
}));

(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async70063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta70064","meta70064",1578674551,null)], null);
}));

(cljs.core.async.t_cljs$core$async70063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70063");

(cljs.core.async.t_cljs$core$async70063.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70063.
 */
cljs.core.async.__GT_t_cljs$core$async70063 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async70063(flag__$1,meta70064){
return (new cljs.core.async.t_cljs$core$async70063(flag__$1,meta70064));
});

}

return (new cljs.core.async.t_cljs$core$async70063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70093 = (function (flag,cb,meta70094){
this.flag = flag;
this.cb = cb;
this.meta70094 = meta70094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70095,meta70094__$1){
var self__ = this;
var _70095__$1 = this;
return (new cljs.core.async.t_cljs$core$async70093(self__.flag,self__.cb,meta70094__$1));
}));

(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70095){
var self__ = this;
var _70095__$1 = this;
return self__.meta70094;
}));

(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async70093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta70094","meta70094",-1599750493,null)], null);
}));

(cljs.core.async.t_cljs$core$async70093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70093");

(cljs.core.async.t_cljs$core$async70093.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70093.
 */
cljs.core.async.__GT_t_cljs$core$async70093 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async70093(flag__$1,cb__$1,meta70094){
return (new cljs.core.async.t_cljs$core$async70093(flag__$1,cb__$1,meta70094));
});

}

return (new cljs.core.async.t_cljs$core$async70093(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70096_SHARP_){
var G__70098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70096_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70098) : fret.call(null,G__70098));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70097_SHARP_){
var G__70099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70097_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70099) : fret.call(null,G__70099));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__72236 = (i + (1));
i = G__72236;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72239 = arguments.length;
var i__4865__auto___72240 = (0);
while(true){
if((i__4865__auto___72240 < len__4864__auto___72239)){
args__4870__auto__.push((arguments[i__4865__auto___72240]));

var G__72241 = (i__4865__auto___72240 + (1));
i__4865__auto___72240 = G__72241;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__70102){
var map__70103 = p__70102;
var map__70103__$1 = cljs.core.__destructure_map(map__70103);
var opts = map__70103__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq70100){
var G__70101 = cljs.core.first(seq70100);
var seq70100__$1 = cljs.core.next(seq70100);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70101,seq70100__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__70105 = arguments.length;
switch (G__70105) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44586__auto___72244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70129){
var state_val_70130 = (state_70129[(1)]);
if((state_val_70130 === (7))){
var inst_70125 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70131_72245 = state_70129__$1;
(statearr_70131_72245[(2)] = inst_70125);

(statearr_70131_72245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (1))){
var state_70129__$1 = state_70129;
var statearr_70132_72247 = state_70129__$1;
(statearr_70132_72247[(2)] = null);

(statearr_70132_72247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (4))){
var inst_70108 = (state_70129[(7)]);
var inst_70108__$1 = (state_70129[(2)]);
var inst_70109 = (inst_70108__$1 == null);
var state_70129__$1 = (function (){var statearr_70133 = state_70129;
(statearr_70133[(7)] = inst_70108__$1);

return statearr_70133;
})();
if(cljs.core.truth_(inst_70109)){
var statearr_70134_72249 = state_70129__$1;
(statearr_70134_72249[(1)] = (5));

} else {
var statearr_70135_72250 = state_70129__$1;
(statearr_70135_72250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (13))){
var state_70129__$1 = state_70129;
var statearr_70136_72252 = state_70129__$1;
(statearr_70136_72252[(2)] = null);

(statearr_70136_72252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (6))){
var inst_70108 = (state_70129[(7)]);
var state_70129__$1 = state_70129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70129__$1,(11),to,inst_70108);
} else {
if((state_val_70130 === (3))){
var inst_70127 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70129__$1,inst_70127);
} else {
if((state_val_70130 === (12))){
var state_70129__$1 = state_70129;
var statearr_70137_72255 = state_70129__$1;
(statearr_70137_72255[(2)] = null);

(statearr_70137_72255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (2))){
var state_70129__$1 = state_70129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70129__$1,(4),from);
} else {
if((state_val_70130 === (11))){
var inst_70118 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
if(cljs.core.truth_(inst_70118)){
var statearr_70144_72256 = state_70129__$1;
(statearr_70144_72256[(1)] = (12));

} else {
var statearr_70145_72258 = state_70129__$1;
(statearr_70145_72258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (9))){
var state_70129__$1 = state_70129;
var statearr_70148_72259 = state_70129__$1;
(statearr_70148_72259[(2)] = null);

(statearr_70148_72259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (5))){
var state_70129__$1 = state_70129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70149_72260 = state_70129__$1;
(statearr_70149_72260[(1)] = (8));

} else {
var statearr_70150_72261 = state_70129__$1;
(statearr_70150_72261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (14))){
var inst_70123 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70152_72262 = state_70129__$1;
(statearr_70152_72262[(2)] = inst_70123);

(statearr_70152_72262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (10))){
var inst_70115 = (state_70129[(2)]);
var state_70129__$1 = state_70129;
var statearr_70154_72263 = state_70129__$1;
(statearr_70154_72263[(2)] = inst_70115);

(statearr_70154_72263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70130 === (8))){
var inst_70112 = cljs.core.async.close_BANG_(to);
var state_70129__$1 = state_70129;
var statearr_70157_72264 = state_70129__$1;
(statearr_70157_72264[(2)] = inst_70112);

(statearr_70157_72264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_70160 = [null,null,null,null,null,null,null,null];
(statearr_70160[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_70160[(1)] = (1));

return statearr_70160;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_70129){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70129);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70163){var ex__44383__auto__ = e70163;
var statearr_70164_72265 = state_70129;
(statearr_70164_72265[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70129[(4)]))){
var statearr_70165_72266 = state_70129;
(statearr_70165_72266[(1)] = cljs.core.first((state_70129[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72267 = state_70129;
state_70129 = G__72267;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_70129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_70129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70166 = f__44587__auto__();
(statearr_70166[(6)] = c__44586__auto___72244);

return statearr_70166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__70171){
var vec__70172 = p__70171;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70172,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70172,(1),null);
var job = vec__70172;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44586__auto___72271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70179){
var state_val_70180 = (state_70179[(1)]);
if((state_val_70180 === (1))){
var state_70179__$1 = state_70179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70179__$1,(2),res,v);
} else {
if((state_val_70180 === (2))){
var inst_70176 = (state_70179[(2)]);
var inst_70177 = cljs.core.async.close_BANG_(res);
var state_70179__$1 = (function (){var statearr_70181 = state_70179;
(statearr_70181[(7)] = inst_70176);

return statearr_70181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70179__$1,inst_70177);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_70182 = [null,null,null,null,null,null,null,null];
(statearr_70182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__);

(statearr_70182[(1)] = (1));

return statearr_70182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1 = (function (state_70179){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70179);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70183){var ex__44383__auto__ = e70183;
var statearr_70184_72272 = state_70179;
(statearr_70184_72272[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70179[(4)]))){
var statearr_70185_72273 = state_70179;
(statearr_70185_72273[(1)] = cljs.core.first((state_70179[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72274 = state_70179;
state_70179 = G__72274;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = function(state_70179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1.call(this,state_70179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70186 = f__44587__auto__();
(statearr_70186[(6)] = c__44586__auto___72271);

return statearr_70186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__70187){
var vec__70188 = p__70187;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70188,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70188,(1),null);
var job = vec__70188;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___72275 = n;
var __72276 = (0);
while(true){
if((__72276 < n__4741__auto___72275)){
var G__70195_72277 = type;
var G__70195_72278__$1 = (((G__70195_72277 instanceof cljs.core.Keyword))?G__70195_72277.fqn:null);
switch (G__70195_72278__$1) {
case "compute":
var c__44586__auto___72280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72276,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = ((function (__72276,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function (state_70209){
var state_val_70210 = (state_70209[(1)]);
if((state_val_70210 === (1))){
var state_70209__$1 = state_70209;
var statearr_70211_72281 = state_70209__$1;
(statearr_70211_72281[(2)] = null);

(statearr_70211_72281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70210 === (2))){
var state_70209__$1 = state_70209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70209__$1,(4),jobs);
} else {
if((state_val_70210 === (3))){
var inst_70207 = (state_70209[(2)]);
var state_70209__$1 = state_70209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70209__$1,inst_70207);
} else {
if((state_val_70210 === (4))){
var inst_70199 = (state_70209[(2)]);
var inst_70200 = process(inst_70199);
var state_70209__$1 = state_70209;
if(cljs.core.truth_(inst_70200)){
var statearr_70212_72282 = state_70209__$1;
(statearr_70212_72282[(1)] = (5));

} else {
var statearr_70213_72283 = state_70209__$1;
(statearr_70213_72283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70210 === (5))){
var state_70209__$1 = state_70209;
var statearr_70214_72284 = state_70209__$1;
(statearr_70214_72284[(2)] = null);

(statearr_70214_72284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70210 === (6))){
var state_70209__$1 = state_70209;
var statearr_70215_72285 = state_70209__$1;
(statearr_70215_72285[(2)] = null);

(statearr_70215_72285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70210 === (7))){
var inst_70205 = (state_70209[(2)]);
var state_70209__$1 = state_70209;
var statearr_70216_72286 = state_70209__$1;
(statearr_70216_72286[(2)] = inst_70205);

(statearr_70216_72286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72276,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
;
return ((function (__72276,switch__44379__auto__,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_70221 = [null,null,null,null,null,null,null];
(statearr_70221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__);

(statearr_70221[(1)] = (1));

return statearr_70221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1 = (function (state_70209){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70209);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70222){var ex__44383__auto__ = e70222;
var statearr_70223_72288 = state_70209;
(statearr_70223_72288[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70209[(4)]))){
var statearr_70224_72289 = state_70209;
(statearr_70224_72289[(1)] = cljs.core.first((state_70209[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72290 = state_70209;
state_70209 = G__72290;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = function(state_70209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1.call(this,state_70209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__;
})()
;})(__72276,switch__44379__auto__,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
})();
var state__44588__auto__ = (function (){var statearr_70225 = f__44587__auto__();
(statearr_70225[(6)] = c__44586__auto___72280);

return statearr_70225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
});})(__72276,c__44586__auto___72280,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
);


break;
case "async":
var c__44586__auto___72291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72276,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = ((function (__72276,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function (state_70238){
var state_val_70239 = (state_70238[(1)]);
if((state_val_70239 === (1))){
var state_70238__$1 = state_70238;
var statearr_70240_72292 = state_70238__$1;
(statearr_70240_72292[(2)] = null);

(statearr_70240_72292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70239 === (2))){
var state_70238__$1 = state_70238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70238__$1,(4),jobs);
} else {
if((state_val_70239 === (3))){
var inst_70236 = (state_70238[(2)]);
var state_70238__$1 = state_70238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70238__$1,inst_70236);
} else {
if((state_val_70239 === (4))){
var inst_70228 = (state_70238[(2)]);
var inst_70229 = async(inst_70228);
var state_70238__$1 = state_70238;
if(cljs.core.truth_(inst_70229)){
var statearr_70241_72297 = state_70238__$1;
(statearr_70241_72297[(1)] = (5));

} else {
var statearr_70242_72298 = state_70238__$1;
(statearr_70242_72298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70239 === (5))){
var state_70238__$1 = state_70238;
var statearr_70243_72299 = state_70238__$1;
(statearr_70243_72299[(2)] = null);

(statearr_70243_72299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70239 === (6))){
var state_70238__$1 = state_70238;
var statearr_70246_72300 = state_70238__$1;
(statearr_70246_72300[(2)] = null);

(statearr_70246_72300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70239 === (7))){
var inst_70234 = (state_70238[(2)]);
var state_70238__$1 = state_70238;
var statearr_70247_72301 = state_70238__$1;
(statearr_70247_72301[(2)] = inst_70234);

(statearr_70247_72301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72276,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
;
return ((function (__72276,switch__44379__auto__,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_70250 = [null,null,null,null,null,null,null];
(statearr_70250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__);

(statearr_70250[(1)] = (1));

return statearr_70250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1 = (function (state_70238){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70238);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70258){var ex__44383__auto__ = e70258;
var statearr_70259_72302 = state_70238;
(statearr_70259_72302[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70238[(4)]))){
var statearr_70266_72303 = state_70238;
(statearr_70266_72303[(1)] = cljs.core.first((state_70238[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72304 = state_70238;
state_70238 = G__72304;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = function(state_70238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1.call(this,state_70238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__;
})()
;})(__72276,switch__44379__auto__,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
})();
var state__44588__auto__ = (function (){var statearr_70270 = f__44587__auto__();
(statearr_70270[(6)] = c__44586__auto___72291);

return statearr_70270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
});})(__72276,c__44586__auto___72291,G__70195_72277,G__70195_72278__$1,n__4741__auto___72275,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70195_72278__$1)].join('')));

}

var G__72305 = (__72276 + (1));
__72276 = G__72305;
continue;
} else {
}
break;
}

var c__44586__auto___72307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70298){
var state_val_70299 = (state_70298[(1)]);
if((state_val_70299 === (7))){
var inst_70293 = (state_70298[(2)]);
var state_70298__$1 = state_70298;
var statearr_70300_72309 = state_70298__$1;
(statearr_70300_72309[(2)] = inst_70293);

(statearr_70300_72309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70299 === (1))){
var state_70298__$1 = state_70298;
var statearr_70301_72317 = state_70298__$1;
(statearr_70301_72317[(2)] = null);

(statearr_70301_72317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70299 === (4))){
var inst_70273 = (state_70298[(7)]);
var inst_70273__$1 = (state_70298[(2)]);
var inst_70276 = (inst_70273__$1 == null);
var state_70298__$1 = (function (){var statearr_70302 = state_70298;
(statearr_70302[(7)] = inst_70273__$1);

return statearr_70302;
})();
if(cljs.core.truth_(inst_70276)){
var statearr_70303_72327 = state_70298__$1;
(statearr_70303_72327[(1)] = (5));

} else {
var statearr_70304_72328 = state_70298__$1;
(statearr_70304_72328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70299 === (6))){
var inst_70280 = (state_70298[(8)]);
var inst_70273 = (state_70298[(7)]);
var inst_70280__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_70284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70285 = [inst_70273,inst_70280__$1];
var inst_70286 = (new cljs.core.PersistentVector(null,2,(5),inst_70284,inst_70285,null));
var state_70298__$1 = (function (){var statearr_70305 = state_70298;
(statearr_70305[(8)] = inst_70280__$1);

return statearr_70305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70298__$1,(8),jobs,inst_70286);
} else {
if((state_val_70299 === (3))){
var inst_70295 = (state_70298[(2)]);
var state_70298__$1 = state_70298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70298__$1,inst_70295);
} else {
if((state_val_70299 === (2))){
var state_70298__$1 = state_70298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70298__$1,(4),from);
} else {
if((state_val_70299 === (9))){
var inst_70290 = (state_70298[(2)]);
var state_70298__$1 = (function (){var statearr_70306 = state_70298;
(statearr_70306[(9)] = inst_70290);

return statearr_70306;
})();
var statearr_70307_72345 = state_70298__$1;
(statearr_70307_72345[(2)] = null);

(statearr_70307_72345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70299 === (5))){
var inst_70278 = cljs.core.async.close_BANG_(jobs);
var state_70298__$1 = state_70298;
var statearr_70308_72346 = state_70298__$1;
(statearr_70308_72346[(2)] = inst_70278);

(statearr_70308_72346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70299 === (8))){
var inst_70280 = (state_70298[(8)]);
var inst_70288 = (state_70298[(2)]);
var state_70298__$1 = (function (){var statearr_70309 = state_70298;
(statearr_70309[(10)] = inst_70288);

return statearr_70309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70298__$1,(9),results,inst_70280);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_70310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__);

(statearr_70310[(1)] = (1));

return statearr_70310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1 = (function (state_70298){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70298);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70311){var ex__44383__auto__ = e70311;
var statearr_70312_72347 = state_70298;
(statearr_70312_72347[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70298[(4)]))){
var statearr_70313_72348 = state_70298;
(statearr_70313_72348[(1)] = cljs.core.first((state_70298[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72349 = state_70298;
state_70298 = G__72349;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = function(state_70298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1.call(this,state_70298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70314 = f__44587__auto__();
(statearr_70314[(6)] = c__44586__auto___72307);

return statearr_70314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


var c__44586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70373){
var state_val_70374 = (state_70373[(1)]);
if((state_val_70374 === (7))){
var inst_70361 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
var statearr_70375_72350 = state_70373__$1;
(statearr_70375_72350[(2)] = inst_70361);

(statearr_70375_72350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (20))){
var state_70373__$1 = state_70373;
var statearr_70376_72351 = state_70373__$1;
(statearr_70376_72351[(2)] = null);

(statearr_70376_72351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (1))){
var state_70373__$1 = state_70373;
var statearr_70401_72352 = state_70373__$1;
(statearr_70401_72352[(2)] = null);

(statearr_70401_72352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (4))){
var inst_70321 = (state_70373[(7)]);
var inst_70321__$1 = (state_70373[(2)]);
var inst_70322 = (inst_70321__$1 == null);
var state_70373__$1 = (function (){var statearr_70402 = state_70373;
(statearr_70402[(7)] = inst_70321__$1);

return statearr_70402;
})();
if(cljs.core.truth_(inst_70322)){
var statearr_70403_72353 = state_70373__$1;
(statearr_70403_72353[(1)] = (5));

} else {
var statearr_70404_72354 = state_70373__$1;
(statearr_70404_72354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (15))){
var inst_70338 = (state_70373[(8)]);
var state_70373__$1 = state_70373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70373__$1,(18),to,inst_70338);
} else {
if((state_val_70374 === (21))){
var inst_70354 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
var statearr_70407_72355 = state_70373__$1;
(statearr_70407_72355[(2)] = inst_70354);

(statearr_70407_72355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (13))){
var inst_70357 = (state_70373[(2)]);
var state_70373__$1 = (function (){var statearr_70408 = state_70373;
(statearr_70408[(9)] = inst_70357);

return statearr_70408;
})();
var statearr_70409_72356 = state_70373__$1;
(statearr_70409_72356[(2)] = null);

(statearr_70409_72356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (6))){
var inst_70321 = (state_70373[(7)]);
var state_70373__$1 = state_70373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70373__$1,(11),inst_70321);
} else {
if((state_val_70374 === (17))){
var inst_70349 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
if(cljs.core.truth_(inst_70349)){
var statearr_70412_72357 = state_70373__$1;
(statearr_70412_72357[(1)] = (19));

} else {
var statearr_70413_72358 = state_70373__$1;
(statearr_70413_72358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (3))){
var inst_70366 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70373__$1,inst_70366);
} else {
if((state_val_70374 === (12))){
var inst_70333 = (state_70373[(10)]);
var state_70373__$1 = state_70373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70373__$1,(14),inst_70333);
} else {
if((state_val_70374 === (2))){
var state_70373__$1 = state_70373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70373__$1,(4),results);
} else {
if((state_val_70374 === (19))){
var state_70373__$1 = state_70373;
var statearr_70414_72359 = state_70373__$1;
(statearr_70414_72359[(2)] = null);

(statearr_70414_72359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (11))){
var inst_70333 = (state_70373[(2)]);
var state_70373__$1 = (function (){var statearr_70415 = state_70373;
(statearr_70415[(10)] = inst_70333);

return statearr_70415;
})();
var statearr_70417_72360 = state_70373__$1;
(statearr_70417_72360[(2)] = null);

(statearr_70417_72360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (9))){
var state_70373__$1 = state_70373;
var statearr_70418_72361 = state_70373__$1;
(statearr_70418_72361[(2)] = null);

(statearr_70418_72361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (5))){
var state_70373__$1 = state_70373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70419_72362 = state_70373__$1;
(statearr_70419_72362[(1)] = (8));

} else {
var statearr_70420_72363 = state_70373__$1;
(statearr_70420_72363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (14))){
var inst_70343 = (state_70373[(11)]);
var inst_70338 = (state_70373[(8)]);
var inst_70338__$1 = (state_70373[(2)]);
var inst_70342 = (inst_70338__$1 == null);
var inst_70343__$1 = cljs.core.not(inst_70342);
var state_70373__$1 = (function (){var statearr_70421 = state_70373;
(statearr_70421[(11)] = inst_70343__$1);

(statearr_70421[(8)] = inst_70338__$1);

return statearr_70421;
})();
if(inst_70343__$1){
var statearr_70422_72364 = state_70373__$1;
(statearr_70422_72364[(1)] = (15));

} else {
var statearr_70423_72365 = state_70373__$1;
(statearr_70423_72365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (16))){
var inst_70343 = (state_70373[(11)]);
var state_70373__$1 = state_70373;
var statearr_70424_72367 = state_70373__$1;
(statearr_70424_72367[(2)] = inst_70343);

(statearr_70424_72367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (10))){
var inst_70330 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
var statearr_70425_72368 = state_70373__$1;
(statearr_70425_72368[(2)] = inst_70330);

(statearr_70425_72368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (18))){
var inst_70346 = (state_70373[(2)]);
var state_70373__$1 = state_70373;
var statearr_70426_72369 = state_70373__$1;
(statearr_70426_72369[(2)] = inst_70346);

(statearr_70426_72369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70374 === (8))){
var inst_70327 = cljs.core.async.close_BANG_(to);
var state_70373__$1 = state_70373;
var statearr_70427_72370 = state_70373__$1;
(statearr_70427_72370[(2)] = inst_70327);

(statearr_70427_72370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_70428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__);

(statearr_70428[(1)] = (1));

return statearr_70428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1 = (function (state_70373){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70373);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70429){var ex__44383__auto__ = e70429;
var statearr_70430_72371 = state_70373;
(statearr_70430_72371[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70373[(4)]))){
var statearr_70431_72372 = state_70373;
(statearr_70431_72372[(1)] = cljs.core.first((state_70373[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72373 = state_70373;
state_70373 = G__72373;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__ = function(state_70373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1.call(this,state_70373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70432 = f__44587__auto__();
(statearr_70432[(6)] = c__44586__auto__);

return statearr_70432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

return c__44586__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70435 = arguments.length;
switch (G__70435) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70439 = arguments.length;
switch (G__70439) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70519 = arguments.length;
switch (G__70519) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44586__auto___72377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70564){
var state_val_70565 = (state_70564[(1)]);
if((state_val_70565 === (7))){
var inst_70560 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70592_72378 = state_70564__$1;
(statearr_70592_72378[(2)] = inst_70560);

(statearr_70592_72378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (1))){
var state_70564__$1 = state_70564;
var statearr_70593_72379 = state_70564__$1;
(statearr_70593_72379[(2)] = null);

(statearr_70593_72379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (4))){
var inst_70535 = (state_70564[(7)]);
var inst_70535__$1 = (state_70564[(2)]);
var inst_70537 = (inst_70535__$1 == null);
var state_70564__$1 = (function (){var statearr_70599 = state_70564;
(statearr_70599[(7)] = inst_70535__$1);

return statearr_70599;
})();
if(cljs.core.truth_(inst_70537)){
var statearr_70604_72380 = state_70564__$1;
(statearr_70604_72380[(1)] = (5));

} else {
var statearr_70605_72381 = state_70564__$1;
(statearr_70605_72381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (13))){
var state_70564__$1 = state_70564;
var statearr_70611_72382 = state_70564__$1;
(statearr_70611_72382[(2)] = null);

(statearr_70611_72382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (6))){
var inst_70535 = (state_70564[(7)]);
var inst_70543 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70535) : p.call(null,inst_70535));
var state_70564__$1 = state_70564;
if(cljs.core.truth_(inst_70543)){
var statearr_70618_72383 = state_70564__$1;
(statearr_70618_72383[(1)] = (9));

} else {
var statearr_70620_72384 = state_70564__$1;
(statearr_70620_72384[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (3))){
var inst_70562 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70564__$1,inst_70562);
} else {
if((state_val_70565 === (12))){
var state_70564__$1 = state_70564;
var statearr_70641_72385 = state_70564__$1;
(statearr_70641_72385[(2)] = null);

(statearr_70641_72385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (2))){
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70564__$1,(4),ch);
} else {
if((state_val_70565 === (11))){
var inst_70535 = (state_70564[(7)]);
var inst_70551 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70564__$1,(8),inst_70551,inst_70535);
} else {
if((state_val_70565 === (9))){
var state_70564__$1 = state_70564;
var statearr_70642_72386 = state_70564__$1;
(statearr_70642_72386[(2)] = tc);

(statearr_70642_72386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (5))){
var inst_70540 = cljs.core.async.close_BANG_(tc);
var inst_70541 = cljs.core.async.close_BANG_(fc);
var state_70564__$1 = (function (){var statearr_70643 = state_70564;
(statearr_70643[(8)] = inst_70540);

return statearr_70643;
})();
var statearr_70644_72388 = state_70564__$1;
(statearr_70644_72388[(2)] = inst_70541);

(statearr_70644_72388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (14))){
var inst_70558 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70645_72390 = state_70564__$1;
(statearr_70645_72390[(2)] = inst_70558);

(statearr_70645_72390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (10))){
var state_70564__$1 = state_70564;
var statearr_70646_72391 = state_70564__$1;
(statearr_70646_72391[(2)] = fc);

(statearr_70646_72391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (8))){
var inst_70553 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
if(cljs.core.truth_(inst_70553)){
var statearr_70647_72395 = state_70564__$1;
(statearr_70647_72395[(1)] = (12));

} else {
var statearr_70648_72396 = state_70564__$1;
(statearr_70648_72396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_70649 = [null,null,null,null,null,null,null,null,null];
(statearr_70649[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_70649[(1)] = (1));

return statearr_70649;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_70564){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70564);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70650){var ex__44383__auto__ = e70650;
var statearr_70651_72398 = state_70564;
(statearr_70651_72398[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70564[(4)]))){
var statearr_70652_72399 = state_70564;
(statearr_70652_72399[(1)] = cljs.core.first((state_70564[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72400 = state_70564;
state_70564 = G__72400;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_70564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_70564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70653 = f__44587__auto__();
(statearr_70653[(6)] = c__44586__auto___72377);

return statearr_70653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70704){
var state_val_70706 = (state_70704[(1)]);
if((state_val_70706 === (7))){
var inst_70699 = (state_70704[(2)]);
var state_70704__$1 = state_70704;
var statearr_70718_72403 = state_70704__$1;
(statearr_70718_72403[(2)] = inst_70699);

(statearr_70718_72403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (1))){
var inst_70672 = init;
var inst_70673 = inst_70672;
var state_70704__$1 = (function (){var statearr_70720 = state_70704;
(statearr_70720[(7)] = inst_70673);

return statearr_70720;
})();
var statearr_70722_72404 = state_70704__$1;
(statearr_70722_72404[(2)] = null);

(statearr_70722_72404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (4))){
var inst_70684 = (state_70704[(8)]);
var inst_70684__$1 = (state_70704[(2)]);
var inst_70685 = (inst_70684__$1 == null);
var state_70704__$1 = (function (){var statearr_70724 = state_70704;
(statearr_70724[(8)] = inst_70684__$1);

return statearr_70724;
})();
if(cljs.core.truth_(inst_70685)){
var statearr_70726_72405 = state_70704__$1;
(statearr_70726_72405[(1)] = (5));

} else {
var statearr_70727_72406 = state_70704__$1;
(statearr_70727_72406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (6))){
var inst_70688 = (state_70704[(9)]);
var inst_70673 = (state_70704[(7)]);
var inst_70684 = (state_70704[(8)]);
var inst_70688__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_70673,inst_70684) : f.call(null,inst_70673,inst_70684));
var inst_70689 = cljs.core.reduced_QMARK_(inst_70688__$1);
var state_70704__$1 = (function (){var statearr_70728 = state_70704;
(statearr_70728[(9)] = inst_70688__$1);

return statearr_70728;
})();
if(inst_70689){
var statearr_70729_72407 = state_70704__$1;
(statearr_70729_72407[(1)] = (8));

} else {
var statearr_70730_72408 = state_70704__$1;
(statearr_70730_72408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (3))){
var inst_70701 = (state_70704[(2)]);
var state_70704__$1 = state_70704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70704__$1,inst_70701);
} else {
if((state_val_70706 === (2))){
var state_70704__$1 = state_70704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70704__$1,(4),ch);
} else {
if((state_val_70706 === (9))){
var inst_70688 = (state_70704[(9)]);
var inst_70673 = inst_70688;
var state_70704__$1 = (function (){var statearr_70731 = state_70704;
(statearr_70731[(7)] = inst_70673);

return statearr_70731;
})();
var statearr_70732_72409 = state_70704__$1;
(statearr_70732_72409[(2)] = null);

(statearr_70732_72409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (5))){
var inst_70673 = (state_70704[(7)]);
var state_70704__$1 = state_70704;
var statearr_70733_72410 = state_70704__$1;
(statearr_70733_72410[(2)] = inst_70673);

(statearr_70733_72410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (10))){
var inst_70697 = (state_70704[(2)]);
var state_70704__$1 = state_70704;
var statearr_70734_72412 = state_70704__$1;
(statearr_70734_72412[(2)] = inst_70697);

(statearr_70734_72412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (8))){
var inst_70688 = (state_70704[(9)]);
var inst_70692 = cljs.core.deref(inst_70688);
var state_70704__$1 = state_70704;
var statearr_70735_72420 = state_70704__$1;
(statearr_70735_72420[(2)] = inst_70692);

(statearr_70735_72420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44380__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44380__auto____0 = (function (){
var statearr_70736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70736[(0)] = cljs$core$async$reduce_$_state_machine__44380__auto__);

(statearr_70736[(1)] = (1));

return statearr_70736;
});
var cljs$core$async$reduce_$_state_machine__44380__auto____1 = (function (state_70704){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70704);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70738){var ex__44383__auto__ = e70738;
var statearr_70739_72437 = state_70704;
(statearr_70739_72437[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70704[(4)]))){
var statearr_70748_72438 = state_70704;
(statearr_70748_72438[(1)] = cljs.core.first((state_70704[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72439 = state_70704;
state_70704 = G__72439;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44380__auto__ = function(state_70704){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44380__auto____1.call(this,state_70704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44380__auto____0;
cljs$core$async$reduce_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44380__auto____1;
return cljs$core$async$reduce_$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70768 = f__44587__auto__();
(statearr_70768[(6)] = c__44586__auto__);

return statearr_70768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

return c__44586__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70783){
var state_val_70784 = (state_70783[(1)]);
if((state_val_70784 === (1))){
var inst_70778 = cljs.core.async.reduce(f__$1,init,ch);
var state_70783__$1 = state_70783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70783__$1,(2),inst_70778);
} else {
if((state_val_70784 === (2))){
var inst_70780 = (state_70783[(2)]);
var inst_70781 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_70780) : f__$1.call(null,inst_70780));
var state_70783__$1 = state_70783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70783__$1,inst_70781);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44380__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44380__auto____0 = (function (){
var statearr_70807 = [null,null,null,null,null,null,null];
(statearr_70807[(0)] = cljs$core$async$transduce_$_state_machine__44380__auto__);

(statearr_70807[(1)] = (1));

return statearr_70807;
});
var cljs$core$async$transduce_$_state_machine__44380__auto____1 = (function (state_70783){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70783);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70839){var ex__44383__auto__ = e70839;
var statearr_70840_72441 = state_70783;
(statearr_70840_72441[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70783[(4)]))){
var statearr_70842_72442 = state_70783;
(statearr_70842_72442[(1)] = cljs.core.first((state_70783[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72443 = state_70783;
state_70783 = G__72443;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44380__auto__ = function(state_70783){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44380__auto____1.call(this,state_70783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44380__auto____0;
cljs$core$async$transduce_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44380__auto____1;
return cljs$core$async$transduce_$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70858 = f__44587__auto__();
(statearr_70858[(6)] = c__44586__auto__);

return statearr_70858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

return c__44586__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__70863 = arguments.length;
switch (G__70863) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_70894){
var state_val_70895 = (state_70894[(1)]);
if((state_val_70895 === (7))){
var inst_70876 = (state_70894[(2)]);
var state_70894__$1 = state_70894;
var statearr_70896_72465 = state_70894__$1;
(statearr_70896_72465[(2)] = inst_70876);

(statearr_70896_72465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (1))){
var inst_70870 = cljs.core.seq(coll);
var inst_70871 = inst_70870;
var state_70894__$1 = (function (){var statearr_70897 = state_70894;
(statearr_70897[(7)] = inst_70871);

return statearr_70897;
})();
var statearr_70899_72473 = state_70894__$1;
(statearr_70899_72473[(2)] = null);

(statearr_70899_72473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (4))){
var inst_70871 = (state_70894[(7)]);
var inst_70874 = cljs.core.first(inst_70871);
var state_70894__$1 = state_70894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70894__$1,(7),ch,inst_70874);
} else {
if((state_val_70895 === (13))){
var inst_70888 = (state_70894[(2)]);
var state_70894__$1 = state_70894;
var statearr_70908_72474 = state_70894__$1;
(statearr_70908_72474[(2)] = inst_70888);

(statearr_70908_72474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (6))){
var inst_70879 = (state_70894[(2)]);
var state_70894__$1 = state_70894;
if(cljs.core.truth_(inst_70879)){
var statearr_70909_72475 = state_70894__$1;
(statearr_70909_72475[(1)] = (8));

} else {
var statearr_70910_72476 = state_70894__$1;
(statearr_70910_72476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (3))){
var inst_70892 = (state_70894[(2)]);
var state_70894__$1 = state_70894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70894__$1,inst_70892);
} else {
if((state_val_70895 === (12))){
var state_70894__$1 = state_70894;
var statearr_70911_72477 = state_70894__$1;
(statearr_70911_72477[(2)] = null);

(statearr_70911_72477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (2))){
var inst_70871 = (state_70894[(7)]);
var state_70894__$1 = state_70894;
if(cljs.core.truth_(inst_70871)){
var statearr_70912_72478 = state_70894__$1;
(statearr_70912_72478[(1)] = (4));

} else {
var statearr_70913_72479 = state_70894__$1;
(statearr_70913_72479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (11))){
var inst_70885 = cljs.core.async.close_BANG_(ch);
var state_70894__$1 = state_70894;
var statearr_70914_72480 = state_70894__$1;
(statearr_70914_72480[(2)] = inst_70885);

(statearr_70914_72480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (9))){
var state_70894__$1 = state_70894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70915_72481 = state_70894__$1;
(statearr_70915_72481[(1)] = (11));

} else {
var statearr_70920_72482 = state_70894__$1;
(statearr_70920_72482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (5))){
var inst_70871 = (state_70894[(7)]);
var state_70894__$1 = state_70894;
var statearr_70921_72486 = state_70894__$1;
(statearr_70921_72486[(2)] = inst_70871);

(statearr_70921_72486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (10))){
var inst_70890 = (state_70894[(2)]);
var state_70894__$1 = state_70894;
var statearr_70922_72487 = state_70894__$1;
(statearr_70922_72487[(2)] = inst_70890);

(statearr_70922_72487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70895 === (8))){
var inst_70871 = (state_70894[(7)]);
var inst_70881 = cljs.core.next(inst_70871);
var inst_70871__$1 = inst_70881;
var state_70894__$1 = (function (){var statearr_70923 = state_70894;
(statearr_70923[(7)] = inst_70871__$1);

return statearr_70923;
})();
var statearr_70924_72488 = state_70894__$1;
(statearr_70924_72488[(2)] = null);

(statearr_70924_72488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_70925 = [null,null,null,null,null,null,null,null];
(statearr_70925[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_70925[(1)] = (1));

return statearr_70925;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_70894){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_70894);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e70926){var ex__44383__auto__ = e70926;
var statearr_70927_72492 = state_70894;
(statearr_70927_72492[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_70894[(4)]))){
var statearr_70928_72493 = state_70894;
(statearr_70928_72493[(1)] = cljs.core.first((state_70894[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72497 = state_70894;
state_70894 = G__72497;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_70894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_70894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_70929 = f__44587__auto__();
(statearr_70929[(6)] = c__44586__auto__);

return statearr_70929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

return c__44586__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70935 = arguments.length;
switch (G__70935) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72499 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72499(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72500 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72500(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72508 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72508(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72509 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72509(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70944 = (function (ch,cs,meta70945){
this.ch = ch;
this.cs = cs;
this.meta70945 = meta70945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70946,meta70945__$1){
var self__ = this;
var _70946__$1 = this;
return (new cljs.core.async.t_cljs$core$async70944(self__.ch,self__.cs,meta70945__$1));
}));

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70946){
var self__ = this;
var _70946__$1 = this;
return self__.meta70945;
}));

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async70944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async70944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70945","meta70945",-821063536,null)], null);
}));

(cljs.core.async.t_cljs$core$async70944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70944");

(cljs.core.async.t_cljs$core$async70944.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70944.
 */
cljs.core.async.__GT_t_cljs$core$async70944 = (function cljs$core$async$mult_$___GT_t_cljs$core$async70944(ch__$1,cs__$1,meta70945){
return (new cljs.core.async.t_cljs$core$async70944(ch__$1,cs__$1,meta70945));
});

}

return (new cljs.core.async.t_cljs$core$async70944(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44586__auto___72514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71109){
var state_val_71110 = (state_71109[(1)]);
if((state_val_71110 === (7))){
var inst_71101 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71115_72515 = state_71109__$1;
(statearr_71115_72515[(2)] = inst_71101);

(statearr_71115_72515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (20))){
var inst_71004 = (state_71109[(7)]);
var inst_71016 = cljs.core.first(inst_71004);
var inst_71017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71016,(0),null);
var inst_71018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71016,(1),null);
var state_71109__$1 = (function (){var statearr_71116 = state_71109;
(statearr_71116[(8)] = inst_71017);

return statearr_71116;
})();
if(cljs.core.truth_(inst_71018)){
var statearr_71117_72516 = state_71109__$1;
(statearr_71117_72516[(1)] = (22));

} else {
var statearr_71118_72517 = state_71109__$1;
(statearr_71118_72517[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (27))){
var inst_71048 = (state_71109[(9)]);
var inst_71046 = (state_71109[(10)]);
var inst_70967 = (state_71109[(11)]);
var inst_71053 = (state_71109[(12)]);
var inst_71053__$1 = cljs.core._nth(inst_71046,inst_71048);
var inst_71055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71053__$1,inst_70967,done);
var state_71109__$1 = (function (){var statearr_71119 = state_71109;
(statearr_71119[(12)] = inst_71053__$1);

return statearr_71119;
})();
if(cljs.core.truth_(inst_71055)){
var statearr_71120_72518 = state_71109__$1;
(statearr_71120_72518[(1)] = (30));

} else {
var statearr_71121_72519 = state_71109__$1;
(statearr_71121_72519[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (1))){
var state_71109__$1 = state_71109;
var statearr_71122_72520 = state_71109__$1;
(statearr_71122_72520[(2)] = null);

(statearr_71122_72520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (24))){
var inst_71004 = (state_71109[(7)]);
var inst_71023 = (state_71109[(2)]);
var inst_71024 = cljs.core.next(inst_71004);
var inst_70976 = inst_71024;
var inst_70977 = null;
var inst_70978 = (0);
var inst_70979 = (0);
var state_71109__$1 = (function (){var statearr_71123 = state_71109;
(statearr_71123[(13)] = inst_70976);

(statearr_71123[(14)] = inst_70979);

(statearr_71123[(15)] = inst_70977);

(statearr_71123[(16)] = inst_71023);

(statearr_71123[(17)] = inst_70978);

return statearr_71123;
})();
var statearr_71124_72521 = state_71109__$1;
(statearr_71124_72521[(2)] = null);

(statearr_71124_72521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (39))){
var state_71109__$1 = state_71109;
var statearr_71128_72522 = state_71109__$1;
(statearr_71128_72522[(2)] = null);

(statearr_71128_72522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (4))){
var inst_70967 = (state_71109[(11)]);
var inst_70967__$1 = (state_71109[(2)]);
var inst_70968 = (inst_70967__$1 == null);
var state_71109__$1 = (function (){var statearr_71129 = state_71109;
(statearr_71129[(11)] = inst_70967__$1);

return statearr_71129;
})();
if(cljs.core.truth_(inst_70968)){
var statearr_71131_72523 = state_71109__$1;
(statearr_71131_72523[(1)] = (5));

} else {
var statearr_71133_72524 = state_71109__$1;
(statearr_71133_72524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (15))){
var inst_70976 = (state_71109[(13)]);
var inst_70979 = (state_71109[(14)]);
var inst_70977 = (state_71109[(15)]);
var inst_70978 = (state_71109[(17)]);
var inst_71000 = (state_71109[(2)]);
var inst_71001 = (inst_70979 + (1));
var tmp71125 = inst_70976;
var tmp71126 = inst_70977;
var tmp71127 = inst_70978;
var inst_70976__$1 = tmp71125;
var inst_70977__$1 = tmp71126;
var inst_70978__$1 = tmp71127;
var inst_70979__$1 = inst_71001;
var state_71109__$1 = (function (){var statearr_71135 = state_71109;
(statearr_71135[(13)] = inst_70976__$1);

(statearr_71135[(14)] = inst_70979__$1);

(statearr_71135[(18)] = inst_71000);

(statearr_71135[(15)] = inst_70977__$1);

(statearr_71135[(17)] = inst_70978__$1);

return statearr_71135;
})();
var statearr_71136_72525 = state_71109__$1;
(statearr_71136_72525[(2)] = null);

(statearr_71136_72525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (21))){
var inst_71027 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71140_72526 = state_71109__$1;
(statearr_71140_72526[(2)] = inst_71027);

(statearr_71140_72526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (31))){
var inst_71053 = (state_71109[(12)]);
var inst_71058 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71053);
var state_71109__$1 = state_71109;
var statearr_71141_72527 = state_71109__$1;
(statearr_71141_72527[(2)] = inst_71058);

(statearr_71141_72527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (32))){
var inst_71048 = (state_71109[(9)]);
var inst_71046 = (state_71109[(10)]);
var inst_71045 = (state_71109[(19)]);
var inst_71047 = (state_71109[(20)]);
var inst_71060 = (state_71109[(2)]);
var inst_71062 = (inst_71048 + (1));
var tmp71137 = inst_71046;
var tmp71138 = inst_71045;
var tmp71139 = inst_71047;
var inst_71045__$1 = tmp71138;
var inst_71046__$1 = tmp71137;
var inst_71047__$1 = tmp71139;
var inst_71048__$1 = inst_71062;
var state_71109__$1 = (function (){var statearr_71142 = state_71109;
(statearr_71142[(9)] = inst_71048__$1);

(statearr_71142[(10)] = inst_71046__$1);

(statearr_71142[(19)] = inst_71045__$1);

(statearr_71142[(21)] = inst_71060);

(statearr_71142[(20)] = inst_71047__$1);

return statearr_71142;
})();
var statearr_71143_72528 = state_71109__$1;
(statearr_71143_72528[(2)] = null);

(statearr_71143_72528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (40))){
var inst_71074 = (state_71109[(22)]);
var inst_71078 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71074);
var state_71109__$1 = state_71109;
var statearr_71144_72529 = state_71109__$1;
(statearr_71144_72529[(2)] = inst_71078);

(statearr_71144_72529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (33))){
var inst_71065 = (state_71109[(23)]);
var inst_71067 = cljs.core.chunked_seq_QMARK_(inst_71065);
var state_71109__$1 = state_71109;
if(inst_71067){
var statearr_71145_72530 = state_71109__$1;
(statearr_71145_72530[(1)] = (36));

} else {
var statearr_71146_72531 = state_71109__$1;
(statearr_71146_72531[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (13))){
var inst_70992 = (state_71109[(24)]);
var inst_70997 = cljs.core.async.close_BANG_(inst_70992);
var state_71109__$1 = state_71109;
var statearr_71147_72532 = state_71109__$1;
(statearr_71147_72532[(2)] = inst_70997);

(statearr_71147_72532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (22))){
var inst_71017 = (state_71109[(8)]);
var inst_71020 = cljs.core.async.close_BANG_(inst_71017);
var state_71109__$1 = state_71109;
var statearr_71148_72533 = state_71109__$1;
(statearr_71148_72533[(2)] = inst_71020);

(statearr_71148_72533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (36))){
var inst_71065 = (state_71109[(23)]);
var inst_71069 = cljs.core.chunk_first(inst_71065);
var inst_71070 = cljs.core.chunk_rest(inst_71065);
var inst_71071 = cljs.core.count(inst_71069);
var inst_71045 = inst_71070;
var inst_71046 = inst_71069;
var inst_71047 = inst_71071;
var inst_71048 = (0);
var state_71109__$1 = (function (){var statearr_71149 = state_71109;
(statearr_71149[(9)] = inst_71048);

(statearr_71149[(10)] = inst_71046);

(statearr_71149[(19)] = inst_71045);

(statearr_71149[(20)] = inst_71047);

return statearr_71149;
})();
var statearr_71152_72534 = state_71109__$1;
(statearr_71152_72534[(2)] = null);

(statearr_71152_72534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (41))){
var inst_71065 = (state_71109[(23)]);
var inst_71080 = (state_71109[(2)]);
var inst_71081 = cljs.core.next(inst_71065);
var inst_71045 = inst_71081;
var inst_71046 = null;
var inst_71047 = (0);
var inst_71048 = (0);
var state_71109__$1 = (function (){var statearr_71153 = state_71109;
(statearr_71153[(9)] = inst_71048);

(statearr_71153[(25)] = inst_71080);

(statearr_71153[(10)] = inst_71046);

(statearr_71153[(19)] = inst_71045);

(statearr_71153[(20)] = inst_71047);

return statearr_71153;
})();
var statearr_71159_72535 = state_71109__$1;
(statearr_71159_72535[(2)] = null);

(statearr_71159_72535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (43))){
var state_71109__$1 = state_71109;
var statearr_71161_72536 = state_71109__$1;
(statearr_71161_72536[(2)] = null);

(statearr_71161_72536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (29))){
var inst_71089 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71162_72537 = state_71109__$1;
(statearr_71162_72537[(2)] = inst_71089);

(statearr_71162_72537[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (44))){
var inst_71098 = (state_71109[(2)]);
var state_71109__$1 = (function (){var statearr_71163 = state_71109;
(statearr_71163[(26)] = inst_71098);

return statearr_71163;
})();
var statearr_71164_72538 = state_71109__$1;
(statearr_71164_72538[(2)] = null);

(statearr_71164_72538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (6))){
var inst_71037 = (state_71109[(27)]);
var inst_71036 = cljs.core.deref(cs);
var inst_71037__$1 = cljs.core.keys(inst_71036);
var inst_71038 = cljs.core.count(inst_71037__$1);
var inst_71039 = cljs.core.reset_BANG_(dctr,inst_71038);
var inst_71044 = cljs.core.seq(inst_71037__$1);
var inst_71045 = inst_71044;
var inst_71046 = null;
var inst_71047 = (0);
var inst_71048 = (0);
var state_71109__$1 = (function (){var statearr_71165 = state_71109;
(statearr_71165[(9)] = inst_71048);

(statearr_71165[(10)] = inst_71046);

(statearr_71165[(19)] = inst_71045);

(statearr_71165[(27)] = inst_71037__$1);

(statearr_71165[(28)] = inst_71039);

(statearr_71165[(20)] = inst_71047);

return statearr_71165;
})();
var statearr_71166_72539 = state_71109__$1;
(statearr_71166_72539[(2)] = null);

(statearr_71166_72539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (28))){
var inst_71065 = (state_71109[(23)]);
var inst_71045 = (state_71109[(19)]);
var inst_71065__$1 = cljs.core.seq(inst_71045);
var state_71109__$1 = (function (){var statearr_71169 = state_71109;
(statearr_71169[(23)] = inst_71065__$1);

return statearr_71169;
})();
if(inst_71065__$1){
var statearr_71170_72540 = state_71109__$1;
(statearr_71170_72540[(1)] = (33));

} else {
var statearr_71171_72541 = state_71109__$1;
(statearr_71171_72541[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (25))){
var inst_71048 = (state_71109[(9)]);
var inst_71047 = (state_71109[(20)]);
var inst_71050 = (inst_71048 < inst_71047);
var inst_71051 = inst_71050;
var state_71109__$1 = state_71109;
if(cljs.core.truth_(inst_71051)){
var statearr_71173_72542 = state_71109__$1;
(statearr_71173_72542[(1)] = (27));

} else {
var statearr_71175_72543 = state_71109__$1;
(statearr_71175_72543[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (34))){
var state_71109__$1 = state_71109;
var statearr_71176_72544 = state_71109__$1;
(statearr_71176_72544[(2)] = null);

(statearr_71176_72544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (17))){
var state_71109__$1 = state_71109;
var statearr_71177_72545 = state_71109__$1;
(statearr_71177_72545[(2)] = null);

(statearr_71177_72545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (3))){
var inst_71103 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71109__$1,inst_71103);
} else {
if((state_val_71110 === (12))){
var inst_71032 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71182_72551 = state_71109__$1;
(statearr_71182_72551[(2)] = inst_71032);

(statearr_71182_72551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (2))){
var state_71109__$1 = state_71109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71109__$1,(4),ch);
} else {
if((state_val_71110 === (23))){
var state_71109__$1 = state_71109;
var statearr_71183_72552 = state_71109__$1;
(statearr_71183_72552[(2)] = null);

(statearr_71183_72552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (35))){
var inst_71087 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71184_72553 = state_71109__$1;
(statearr_71184_72553[(2)] = inst_71087);

(statearr_71184_72553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (19))){
var inst_71004 = (state_71109[(7)]);
var inst_71008 = cljs.core.chunk_first(inst_71004);
var inst_71009 = cljs.core.chunk_rest(inst_71004);
var inst_71010 = cljs.core.count(inst_71008);
var inst_70976 = inst_71009;
var inst_70977 = inst_71008;
var inst_70978 = inst_71010;
var inst_70979 = (0);
var state_71109__$1 = (function (){var statearr_71187 = state_71109;
(statearr_71187[(13)] = inst_70976);

(statearr_71187[(14)] = inst_70979);

(statearr_71187[(15)] = inst_70977);

(statearr_71187[(17)] = inst_70978);

return statearr_71187;
})();
var statearr_71188_72554 = state_71109__$1;
(statearr_71188_72554[(2)] = null);

(statearr_71188_72554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (11))){
var inst_70976 = (state_71109[(13)]);
var inst_71004 = (state_71109[(7)]);
var inst_71004__$1 = cljs.core.seq(inst_70976);
var state_71109__$1 = (function (){var statearr_71189 = state_71109;
(statearr_71189[(7)] = inst_71004__$1);

return statearr_71189;
})();
if(inst_71004__$1){
var statearr_71190_72555 = state_71109__$1;
(statearr_71190_72555[(1)] = (16));

} else {
var statearr_71194_72556 = state_71109__$1;
(statearr_71194_72556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (9))){
var inst_71034 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71196_72557 = state_71109__$1;
(statearr_71196_72557[(2)] = inst_71034);

(statearr_71196_72557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (5))){
var inst_70974 = cljs.core.deref(cs);
var inst_70975 = cljs.core.seq(inst_70974);
var inst_70976 = inst_70975;
var inst_70977 = null;
var inst_70978 = (0);
var inst_70979 = (0);
var state_71109__$1 = (function (){var statearr_71197 = state_71109;
(statearr_71197[(13)] = inst_70976);

(statearr_71197[(14)] = inst_70979);

(statearr_71197[(15)] = inst_70977);

(statearr_71197[(17)] = inst_70978);

return statearr_71197;
})();
var statearr_71198_72558 = state_71109__$1;
(statearr_71198_72558[(2)] = null);

(statearr_71198_72558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (14))){
var state_71109__$1 = state_71109;
var statearr_71199_72559 = state_71109__$1;
(statearr_71199_72559[(2)] = null);

(statearr_71199_72559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (45))){
var inst_71095 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71200_72561 = state_71109__$1;
(statearr_71200_72561[(2)] = inst_71095);

(statearr_71200_72561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (26))){
var inst_71037 = (state_71109[(27)]);
var inst_71091 = (state_71109[(2)]);
var inst_71092 = cljs.core.seq(inst_71037);
var state_71109__$1 = (function (){var statearr_71204 = state_71109;
(statearr_71204[(29)] = inst_71091);

return statearr_71204;
})();
if(inst_71092){
var statearr_71206_72563 = state_71109__$1;
(statearr_71206_72563[(1)] = (42));

} else {
var statearr_71207_72564 = state_71109__$1;
(statearr_71207_72564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (16))){
var inst_71004 = (state_71109[(7)]);
var inst_71006 = cljs.core.chunked_seq_QMARK_(inst_71004);
var state_71109__$1 = state_71109;
if(inst_71006){
var statearr_71208_72565 = state_71109__$1;
(statearr_71208_72565[(1)] = (19));

} else {
var statearr_71209_72566 = state_71109__$1;
(statearr_71209_72566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (38))){
var inst_71084 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71210_72567 = state_71109__$1;
(statearr_71210_72567[(2)] = inst_71084);

(statearr_71210_72567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (30))){
var state_71109__$1 = state_71109;
var statearr_71212_72568 = state_71109__$1;
(statearr_71212_72568[(2)] = null);

(statearr_71212_72568[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (10))){
var inst_70979 = (state_71109[(14)]);
var inst_70977 = (state_71109[(15)]);
var inst_70991 = cljs.core._nth(inst_70977,inst_70979);
var inst_70992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70991,(0),null);
var inst_70993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70991,(1),null);
var state_71109__$1 = (function (){var statearr_71216 = state_71109;
(statearr_71216[(24)] = inst_70992);

return statearr_71216;
})();
if(cljs.core.truth_(inst_70993)){
var statearr_71217_72570 = state_71109__$1;
(statearr_71217_72570[(1)] = (13));

} else {
var statearr_71218_72571 = state_71109__$1;
(statearr_71218_72571[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (18))){
var inst_71030 = (state_71109[(2)]);
var state_71109__$1 = state_71109;
var statearr_71219_72573 = state_71109__$1;
(statearr_71219_72573[(2)] = inst_71030);

(statearr_71219_72573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (42))){
var state_71109__$1 = state_71109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71109__$1,(45),dchan);
} else {
if((state_val_71110 === (37))){
var inst_71065 = (state_71109[(23)]);
var inst_70967 = (state_71109[(11)]);
var inst_71074 = (state_71109[(22)]);
var inst_71074__$1 = cljs.core.first(inst_71065);
var inst_71075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71074__$1,inst_70967,done);
var state_71109__$1 = (function (){var statearr_71221 = state_71109;
(statearr_71221[(22)] = inst_71074__$1);

return statearr_71221;
})();
if(cljs.core.truth_(inst_71075)){
var statearr_71222_72574 = state_71109__$1;
(statearr_71222_72574[(1)] = (39));

} else {
var statearr_71223_72575 = state_71109__$1;
(statearr_71223_72575[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71110 === (8))){
var inst_70979 = (state_71109[(14)]);
var inst_70978 = (state_71109[(17)]);
var inst_70982 = (inst_70979 < inst_70978);
var inst_70983 = inst_70982;
var state_71109__$1 = state_71109;
if(cljs.core.truth_(inst_70983)){
var statearr_71224_72576 = state_71109__$1;
(statearr_71224_72576[(1)] = (10));

} else {
var statearr_71225_72577 = state_71109__$1;
(statearr_71225_72577[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44380__auto__ = null;
var cljs$core$async$mult_$_state_machine__44380__auto____0 = (function (){
var statearr_71226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71226[(0)] = cljs$core$async$mult_$_state_machine__44380__auto__);

(statearr_71226[(1)] = (1));

return statearr_71226;
});
var cljs$core$async$mult_$_state_machine__44380__auto____1 = (function (state_71109){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71109);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71231){var ex__44383__auto__ = e71231;
var statearr_71232_72578 = state_71109;
(statearr_71232_72578[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71109[(4)]))){
var statearr_71233_72579 = state_71109;
(statearr_71233_72579[(1)] = cljs.core.first((state_71109[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72580 = state_71109;
state_71109 = G__72580;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44380__auto__ = function(state_71109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44380__auto____1.call(this,state_71109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44380__auto____0;
cljs$core$async$mult_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44380__auto____1;
return cljs$core$async$mult_$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71235 = f__44587__auto__();
(statearr_71235[(6)] = c__44586__auto___72514);

return statearr_71235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__71238 = arguments.length;
switch (G__71238) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_72584 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_72584(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_72585 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_72585(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_72586 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_72586(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_72587 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_72587(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_72588 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_72588(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72589 = arguments.length;
var i__4865__auto___72590 = (0);
while(true){
if((i__4865__auto___72590 < len__4864__auto___72589)){
args__4870__auto__.push((arguments[i__4865__auto___72590]));

var G__72592 = (i__4865__auto___72590 + (1));
i__4865__auto___72590 = G__72592;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__71255){
var map__71256 = p__71255;
var map__71256__$1 = cljs.core.__destructure_map(map__71256);
var opts = map__71256__$1;
var statearr_71257_72593 = state;
(statearr_71257_72593[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_71258_72594 = state;
(statearr_71258_72594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_71259_72595 = state;
(statearr_71259_72595[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq71250){
var G__71251 = cljs.core.first(seq71250);
var seq71250__$1 = cljs.core.next(seq71250);
var G__71252 = cljs.core.first(seq71250__$1);
var seq71250__$2 = cljs.core.next(seq71250__$1);
var G__71253 = cljs.core.first(seq71250__$2);
var seq71250__$3 = cljs.core.next(seq71250__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71251,G__71252,G__71253,seq71250__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71264 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71265){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta71265 = meta71265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71266,meta71265__$1){
var self__ = this;
var _71266__$1 = this;
return (new cljs.core.async.t_cljs$core$async71264(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta71265__$1));
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71266){
var self__ = this;
var _71266__$1 = this;
return self__.meta71265;
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71264.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta71265","meta71265",1472446080,null)], null);
}));

(cljs.core.async.t_cljs$core$async71264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71264");

(cljs.core.async.t_cljs$core$async71264.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71264.
 */
cljs.core.async.__GT_t_cljs$core$async71264 = (function cljs$core$async$mix_$___GT_t_cljs$core$async71264(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71265){
return (new cljs.core.async.t_cljs$core$async71264(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71265));
});

}

return (new cljs.core.async.t_cljs$core$async71264(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44586__auto___72616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71374){
var state_val_71376 = (state_71374[(1)]);
if((state_val_71376 === (7))){
var inst_71328 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
if(cljs.core.truth_(inst_71328)){
var statearr_71378_72617 = state_71374__$1;
(statearr_71378_72617[(1)] = (8));

} else {
var statearr_71380_72621 = state_71374__$1;
(statearr_71380_72621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (20))){
var inst_71316 = (state_71374[(7)]);
var state_71374__$1 = state_71374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71374__$1,(23),out,inst_71316);
} else {
if((state_val_71376 === (1))){
var inst_71291 = calc_state();
var inst_71297 = cljs.core.__destructure_map(inst_71291);
var inst_71298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71297,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71297,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71297,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_71303 = inst_71291;
var state_71374__$1 = (function (){var statearr_71393 = state_71374;
(statearr_71393[(8)] = inst_71301);

(statearr_71393[(9)] = inst_71302);

(statearr_71393[(10)] = inst_71298);

(statearr_71393[(11)] = inst_71303);

return statearr_71393;
})();
var statearr_71394_72626 = state_71374__$1;
(statearr_71394_72626[(2)] = null);

(statearr_71394_72626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (24))){
var inst_71306 = (state_71374[(12)]);
var inst_71303 = inst_71306;
var state_71374__$1 = (function (){var statearr_71400 = state_71374;
(statearr_71400[(11)] = inst_71303);

return statearr_71400;
})();
var statearr_71405_72627 = state_71374__$1;
(statearr_71405_72627[(2)] = null);

(statearr_71405_72627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (4))){
var inst_71316 = (state_71374[(7)]);
var inst_71322 = (state_71374[(13)]);
var inst_71315 = (state_71374[(2)]);
var inst_71316__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71315,(0),null);
var inst_71321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71315,(1),null);
var inst_71322__$1 = (inst_71316__$1 == null);
var state_71374__$1 = (function (){var statearr_71410 = state_71374;
(statearr_71410[(14)] = inst_71321);

(statearr_71410[(7)] = inst_71316__$1);

(statearr_71410[(13)] = inst_71322__$1);

return statearr_71410;
})();
if(cljs.core.truth_(inst_71322__$1)){
var statearr_71411_72628 = state_71374__$1;
(statearr_71411_72628[(1)] = (5));

} else {
var statearr_71412_72629 = state_71374__$1;
(statearr_71412_72629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (15))){
var inst_71346 = (state_71374[(15)]);
var inst_71307 = (state_71374[(16)]);
var inst_71346__$1 = cljs.core.empty_QMARK_(inst_71307);
var state_71374__$1 = (function (){var statearr_71413 = state_71374;
(statearr_71413[(15)] = inst_71346__$1);

return statearr_71413;
})();
if(inst_71346__$1){
var statearr_71414_72630 = state_71374__$1;
(statearr_71414_72630[(1)] = (17));

} else {
var statearr_71415_72631 = state_71374__$1;
(statearr_71415_72631[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (21))){
var inst_71306 = (state_71374[(12)]);
var inst_71303 = inst_71306;
var state_71374__$1 = (function (){var statearr_71416 = state_71374;
(statearr_71416[(11)] = inst_71303);

return statearr_71416;
})();
var statearr_71417_72633 = state_71374__$1;
(statearr_71417_72633[(2)] = null);

(statearr_71417_72633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (13))){
var inst_71335 = (state_71374[(2)]);
var inst_71337 = calc_state();
var inst_71303 = inst_71337;
var state_71374__$1 = (function (){var statearr_71418 = state_71374;
(statearr_71418[(17)] = inst_71335);

(statearr_71418[(11)] = inst_71303);

return statearr_71418;
})();
var statearr_71419_72637 = state_71374__$1;
(statearr_71419_72637[(2)] = null);

(statearr_71419_72637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (22))){
var inst_71367 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
var statearr_71420_72639 = state_71374__$1;
(statearr_71420_72639[(2)] = inst_71367);

(statearr_71420_72639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (6))){
var inst_71321 = (state_71374[(14)]);
var inst_71326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71321,change);
var state_71374__$1 = state_71374;
var statearr_71421_72641 = state_71374__$1;
(statearr_71421_72641[(2)] = inst_71326);

(statearr_71421_72641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (25))){
var state_71374__$1 = state_71374;
var statearr_71422_72645 = state_71374__$1;
(statearr_71422_72645[(2)] = null);

(statearr_71422_72645[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (17))){
var inst_71321 = (state_71374[(14)]);
var inst_71308 = (state_71374[(18)]);
var inst_71349 = (inst_71308.cljs$core$IFn$_invoke$arity$1 ? inst_71308.cljs$core$IFn$_invoke$arity$1(inst_71321) : inst_71308.call(null,inst_71321));
var inst_71350 = cljs.core.not(inst_71349);
var state_71374__$1 = state_71374;
var statearr_71423_72646 = state_71374__$1;
(statearr_71423_72646[(2)] = inst_71350);

(statearr_71423_72646[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (3))){
var inst_71371 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71374__$1,inst_71371);
} else {
if((state_val_71376 === (12))){
var state_71374__$1 = state_71374;
var statearr_71424_72647 = state_71374__$1;
(statearr_71424_72647[(2)] = null);

(statearr_71424_72647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (2))){
var inst_71306 = (state_71374[(12)]);
var inst_71303 = (state_71374[(11)]);
var inst_71306__$1 = cljs.core.__destructure_map(inst_71303);
var inst_71307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71306__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71306__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71306__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71374__$1 = (function (){var statearr_71425 = state_71374;
(statearr_71425[(12)] = inst_71306__$1);

(statearr_71425[(16)] = inst_71307);

(statearr_71425[(18)] = inst_71308);

return statearr_71425;
})();
return cljs.core.async.ioc_alts_BANG_(state_71374__$1,(4),inst_71309);
} else {
if((state_val_71376 === (23))){
var inst_71358 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
if(cljs.core.truth_(inst_71358)){
var statearr_71426_72650 = state_71374__$1;
(statearr_71426_72650[(1)] = (24));

} else {
var statearr_71427_72651 = state_71374__$1;
(statearr_71427_72651[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (19))){
var inst_71353 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
var statearr_71428_72652 = state_71374__$1;
(statearr_71428_72652[(2)] = inst_71353);

(statearr_71428_72652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (11))){
var inst_71321 = (state_71374[(14)]);
var inst_71332 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_71321);
var state_71374__$1 = state_71374;
var statearr_71429_72655 = state_71374__$1;
(statearr_71429_72655[(2)] = inst_71332);

(statearr_71429_72655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (9))){
var inst_71321 = (state_71374[(14)]);
var inst_71307 = (state_71374[(16)]);
var inst_71340 = (state_71374[(19)]);
var inst_71340__$1 = (inst_71307.cljs$core$IFn$_invoke$arity$1 ? inst_71307.cljs$core$IFn$_invoke$arity$1(inst_71321) : inst_71307.call(null,inst_71321));
var state_71374__$1 = (function (){var statearr_71430 = state_71374;
(statearr_71430[(19)] = inst_71340__$1);

return statearr_71430;
})();
if(cljs.core.truth_(inst_71340__$1)){
var statearr_71431_72656 = state_71374__$1;
(statearr_71431_72656[(1)] = (14));

} else {
var statearr_71432_72657 = state_71374__$1;
(statearr_71432_72657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (5))){
var inst_71322 = (state_71374[(13)]);
var state_71374__$1 = state_71374;
var statearr_71433_72660 = state_71374__$1;
(statearr_71433_72660[(2)] = inst_71322);

(statearr_71433_72660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (14))){
var inst_71340 = (state_71374[(19)]);
var state_71374__$1 = state_71374;
var statearr_71434_72661 = state_71374__$1;
(statearr_71434_72661[(2)] = inst_71340);

(statearr_71434_72661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (26))){
var inst_71363 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
var statearr_71435_72663 = state_71374__$1;
(statearr_71435_72663[(2)] = inst_71363);

(statearr_71435_72663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (16))){
var inst_71355 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
if(cljs.core.truth_(inst_71355)){
var statearr_71436_72665 = state_71374__$1;
(statearr_71436_72665[(1)] = (20));

} else {
var statearr_71437_72666 = state_71374__$1;
(statearr_71437_72666[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (10))){
var inst_71369 = (state_71374[(2)]);
var state_71374__$1 = state_71374;
var statearr_71438_72667 = state_71374__$1;
(statearr_71438_72667[(2)] = inst_71369);

(statearr_71438_72667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (18))){
var inst_71346 = (state_71374[(15)]);
var state_71374__$1 = state_71374;
var statearr_71439_72670 = state_71374__$1;
(statearr_71439_72670[(2)] = inst_71346);

(statearr_71439_72670[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71376 === (8))){
var inst_71316 = (state_71374[(7)]);
var inst_71330 = (inst_71316 == null);
var state_71374__$1 = state_71374;
if(cljs.core.truth_(inst_71330)){
var statearr_71440_72672 = state_71374__$1;
(statearr_71440_72672[(1)] = (11));

} else {
var statearr_71441_72673 = state_71374__$1;
(statearr_71441_72673[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44380__auto__ = null;
var cljs$core$async$mix_$_state_machine__44380__auto____0 = (function (){
var statearr_71442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71442[(0)] = cljs$core$async$mix_$_state_machine__44380__auto__);

(statearr_71442[(1)] = (1));

return statearr_71442;
});
var cljs$core$async$mix_$_state_machine__44380__auto____1 = (function (state_71374){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71374);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71443){var ex__44383__auto__ = e71443;
var statearr_71444_72674 = state_71374;
(statearr_71444_72674[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71374[(4)]))){
var statearr_71445_72675 = state_71374;
(statearr_71445_72675[(1)] = cljs.core.first((state_71374[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72676 = state_71374;
state_71374 = G__72676;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44380__auto__ = function(state_71374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44380__auto____1.call(this,state_71374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44380__auto____0;
cljs$core$async$mix_$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44380__auto____1;
return cljs$core$async$mix_$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71446 = f__44587__auto__();
(statearr_71446[(6)] = c__44586__auto___72616);

return statearr_71446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_72681 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_72681(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_72682 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_72682(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_72683 = (function() {
var G__72688 = null;
var G__72688__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__72688__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__72688 = function(p,v){
switch(arguments.length){
case 1:
return G__72688__1.call(this,p);
case 2:
return G__72688__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72688.cljs$core$IFn$_invoke$arity$1 = G__72688__1;
G__72688.cljs$core$IFn$_invoke$arity$2 = G__72688__2;
return G__72688;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__71448 = arguments.length;
switch (G__71448) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72683(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72683(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71451 = arguments.length;
switch (G__71451) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__71449_SHARP_){
if(cljs.core.truth_((p1__71449_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__71449_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__71449_SHARP_.call(null,topic)))){
return p1__71449_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71449_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71452 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71453){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71453 = meta71453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71454,meta71453__$1){
var self__ = this;
var _71454__$1 = this;
return (new cljs.core.async.t_cljs$core$async71452(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71453__$1));
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71454){
var self__ = this;
var _71454__$1 = this;
return self__.meta71453;
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async71452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async71452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71453","meta71453",63401351,null)], null);
}));

(cljs.core.async.t_cljs$core$async71452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71452");

(cljs.core.async.t_cljs$core$async71452.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71452.
 */
cljs.core.async.__GT_t_cljs$core$async71452 = (function cljs$core$async$__GT_t_cljs$core$async71452(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71453){
return (new cljs.core.async.t_cljs$core$async71452(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71453));
});

}

return (new cljs.core.async.t_cljs$core$async71452(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44586__auto___72702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71533){
var state_val_71534 = (state_71533[(1)]);
if((state_val_71534 === (7))){
var inst_71528 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71538_72708 = state_71533__$1;
(statearr_71538_72708[(2)] = inst_71528);

(statearr_71538_72708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (20))){
var state_71533__$1 = state_71533;
var statearr_71540_72710 = state_71533__$1;
(statearr_71540_72710[(2)] = null);

(statearr_71540_72710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (1))){
var state_71533__$1 = state_71533;
var statearr_71545_72711 = state_71533__$1;
(statearr_71545_72711[(2)] = null);

(statearr_71545_72711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (24))){
var inst_71511 = (state_71533[(7)]);
var inst_71520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_71511);
var state_71533__$1 = state_71533;
var statearr_71549_72712 = state_71533__$1;
(statearr_71549_72712[(2)] = inst_71520);

(statearr_71549_72712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (4))){
var inst_71463 = (state_71533[(8)]);
var inst_71463__$1 = (state_71533[(2)]);
var inst_71464 = (inst_71463__$1 == null);
var state_71533__$1 = (function (){var statearr_71553 = state_71533;
(statearr_71553[(8)] = inst_71463__$1);

return statearr_71553;
})();
if(cljs.core.truth_(inst_71464)){
var statearr_71554_72713 = state_71533__$1;
(statearr_71554_72713[(1)] = (5));

} else {
var statearr_71555_72714 = state_71533__$1;
(statearr_71555_72714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (15))){
var inst_71505 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71560_72718 = state_71533__$1;
(statearr_71560_72718[(2)] = inst_71505);

(statearr_71560_72718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (21))){
var inst_71525 = (state_71533[(2)]);
var state_71533__$1 = (function (){var statearr_71563 = state_71533;
(statearr_71563[(9)] = inst_71525);

return statearr_71563;
})();
var statearr_71564_72719 = state_71533__$1;
(statearr_71564_72719[(2)] = null);

(statearr_71564_72719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (13))){
var inst_71487 = (state_71533[(10)]);
var inst_71489 = cljs.core.chunked_seq_QMARK_(inst_71487);
var state_71533__$1 = state_71533;
if(inst_71489){
var statearr_71565_72720 = state_71533__$1;
(statearr_71565_72720[(1)] = (16));

} else {
var statearr_71566_72721 = state_71533__$1;
(statearr_71566_72721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (22))){
var inst_71517 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
if(cljs.core.truth_(inst_71517)){
var statearr_71567_72722 = state_71533__$1;
(statearr_71567_72722[(1)] = (23));

} else {
var statearr_71568_72723 = state_71533__$1;
(statearr_71568_72723[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (6))){
var inst_71511 = (state_71533[(7)]);
var inst_71513 = (state_71533[(11)]);
var inst_71463 = (state_71533[(8)]);
var inst_71511__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_71463) : topic_fn.call(null,inst_71463));
var inst_71512 = cljs.core.deref(mults);
var inst_71513__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71512,inst_71511__$1);
var state_71533__$1 = (function (){var statearr_71571 = state_71533;
(statearr_71571[(7)] = inst_71511__$1);

(statearr_71571[(11)] = inst_71513__$1);

return statearr_71571;
})();
if(cljs.core.truth_(inst_71513__$1)){
var statearr_71572_72724 = state_71533__$1;
(statearr_71572_72724[(1)] = (19));

} else {
var statearr_71573_72725 = state_71533__$1;
(statearr_71573_72725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (25))){
var inst_71522 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71574_72726 = state_71533__$1;
(statearr_71574_72726[(2)] = inst_71522);

(statearr_71574_72726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (17))){
var inst_71487 = (state_71533[(10)]);
var inst_71496 = cljs.core.first(inst_71487);
var inst_71497 = cljs.core.async.muxch_STAR_(inst_71496);
var inst_71498 = cljs.core.async.close_BANG_(inst_71497);
var inst_71499 = cljs.core.next(inst_71487);
var inst_71473 = inst_71499;
var inst_71474 = null;
var inst_71475 = (0);
var inst_71476 = (0);
var state_71533__$1 = (function (){var statearr_71575 = state_71533;
(statearr_71575[(12)] = inst_71473);

(statearr_71575[(13)] = inst_71476);

(statearr_71575[(14)] = inst_71474);

(statearr_71575[(15)] = inst_71475);

(statearr_71575[(16)] = inst_71498);

return statearr_71575;
})();
var statearr_71576_72730 = state_71533__$1;
(statearr_71576_72730[(2)] = null);

(statearr_71576_72730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (3))){
var inst_71530 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71533__$1,inst_71530);
} else {
if((state_val_71534 === (12))){
var inst_71507 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71581_72734 = state_71533__$1;
(statearr_71581_72734[(2)] = inst_71507);

(statearr_71581_72734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (2))){
var state_71533__$1 = state_71533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71533__$1,(4),ch);
} else {
if((state_val_71534 === (23))){
var state_71533__$1 = state_71533;
var statearr_71583_72735 = state_71533__$1;
(statearr_71583_72735[(2)] = null);

(statearr_71583_72735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (19))){
var inst_71513 = (state_71533[(11)]);
var inst_71463 = (state_71533[(8)]);
var inst_71515 = cljs.core.async.muxch_STAR_(inst_71513);
var state_71533__$1 = state_71533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71533__$1,(22),inst_71515,inst_71463);
} else {
if((state_val_71534 === (11))){
var inst_71473 = (state_71533[(12)]);
var inst_71487 = (state_71533[(10)]);
var inst_71487__$1 = cljs.core.seq(inst_71473);
var state_71533__$1 = (function (){var statearr_71584 = state_71533;
(statearr_71584[(10)] = inst_71487__$1);

return statearr_71584;
})();
if(inst_71487__$1){
var statearr_71585_72737 = state_71533__$1;
(statearr_71585_72737[(1)] = (13));

} else {
var statearr_71587_72739 = state_71533__$1;
(statearr_71587_72739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (9))){
var inst_71509 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71588_72740 = state_71533__$1;
(statearr_71588_72740[(2)] = inst_71509);

(statearr_71588_72740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (5))){
var inst_71470 = cljs.core.deref(mults);
var inst_71471 = cljs.core.vals(inst_71470);
var inst_71472 = cljs.core.seq(inst_71471);
var inst_71473 = inst_71472;
var inst_71474 = null;
var inst_71475 = (0);
var inst_71476 = (0);
var state_71533__$1 = (function (){var statearr_71589 = state_71533;
(statearr_71589[(12)] = inst_71473);

(statearr_71589[(13)] = inst_71476);

(statearr_71589[(14)] = inst_71474);

(statearr_71589[(15)] = inst_71475);

return statearr_71589;
})();
var statearr_71590_72742 = state_71533__$1;
(statearr_71590_72742[(2)] = null);

(statearr_71590_72742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (14))){
var state_71533__$1 = state_71533;
var statearr_71614_72743 = state_71533__$1;
(statearr_71614_72743[(2)] = null);

(statearr_71614_72743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (16))){
var inst_71487 = (state_71533[(10)]);
var inst_71491 = cljs.core.chunk_first(inst_71487);
var inst_71492 = cljs.core.chunk_rest(inst_71487);
var inst_71493 = cljs.core.count(inst_71491);
var inst_71473 = inst_71492;
var inst_71474 = inst_71491;
var inst_71475 = inst_71493;
var inst_71476 = (0);
var state_71533__$1 = (function (){var statearr_71617 = state_71533;
(statearr_71617[(12)] = inst_71473);

(statearr_71617[(13)] = inst_71476);

(statearr_71617[(14)] = inst_71474);

(statearr_71617[(15)] = inst_71475);

return statearr_71617;
})();
var statearr_71618_72744 = state_71533__$1;
(statearr_71618_72744[(2)] = null);

(statearr_71618_72744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (10))){
var inst_71473 = (state_71533[(12)]);
var inst_71476 = (state_71533[(13)]);
var inst_71474 = (state_71533[(14)]);
var inst_71475 = (state_71533[(15)]);
var inst_71481 = cljs.core._nth(inst_71474,inst_71476);
var inst_71482 = cljs.core.async.muxch_STAR_(inst_71481);
var inst_71483 = cljs.core.async.close_BANG_(inst_71482);
var inst_71484 = (inst_71476 + (1));
var tmp71591 = inst_71473;
var tmp71592 = inst_71474;
var tmp71593 = inst_71475;
var inst_71473__$1 = tmp71591;
var inst_71474__$1 = tmp71592;
var inst_71475__$1 = tmp71593;
var inst_71476__$1 = inst_71484;
var state_71533__$1 = (function (){var statearr_71621 = state_71533;
(statearr_71621[(12)] = inst_71473__$1);

(statearr_71621[(17)] = inst_71483);

(statearr_71621[(13)] = inst_71476__$1);

(statearr_71621[(14)] = inst_71474__$1);

(statearr_71621[(15)] = inst_71475__$1);

return statearr_71621;
})();
var statearr_71622_72746 = state_71533__$1;
(statearr_71622_72746[(2)] = null);

(statearr_71622_72746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (18))){
var inst_71502 = (state_71533[(2)]);
var state_71533__$1 = state_71533;
var statearr_71623_72750 = state_71533__$1;
(statearr_71623_72750[(2)] = inst_71502);

(statearr_71623_72750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71534 === (8))){
var inst_71476 = (state_71533[(13)]);
var inst_71475 = (state_71533[(15)]);
var inst_71478 = (inst_71476 < inst_71475);
var inst_71479 = inst_71478;
var state_71533__$1 = state_71533;
if(cljs.core.truth_(inst_71479)){
var statearr_71624_72755 = state_71533__$1;
(statearr_71624_72755[(1)] = (10));

} else {
var statearr_71625_72756 = state_71533__$1;
(statearr_71625_72756[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_71628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71628[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_71628[(1)] = (1));

return statearr_71628;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_71533){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71533);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71629){var ex__44383__auto__ = e71629;
var statearr_71630_72758 = state_71533;
(statearr_71630_72758[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71533[(4)]))){
var statearr_71631_72759 = state_71533;
(statearr_71631_72759[(1)] = cljs.core.first((state_71533[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72760 = state_71533;
state_71533 = G__72760;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_71533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_71533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71632 = f__44587__auto__();
(statearr_71632[(6)] = c__44586__auto___72702);

return statearr_71632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71635 = arguments.length;
switch (G__71635) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71638 = arguments.length;
switch (G__71638) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71650 = arguments.length;
switch (G__71650) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44586__auto___72773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71694){
var state_val_71695 = (state_71694[(1)]);
if((state_val_71695 === (7))){
var state_71694__$1 = state_71694;
var statearr_71697_72774 = state_71694__$1;
(statearr_71697_72774[(2)] = null);

(statearr_71697_72774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (1))){
var state_71694__$1 = state_71694;
var statearr_71698_72775 = state_71694__$1;
(statearr_71698_72775[(2)] = null);

(statearr_71698_72775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (4))){
var inst_71655 = (state_71694[(7)]);
var inst_71654 = (state_71694[(8)]);
var inst_71657 = (inst_71655 < inst_71654);
var state_71694__$1 = state_71694;
if(cljs.core.truth_(inst_71657)){
var statearr_71700_72776 = state_71694__$1;
(statearr_71700_72776[(1)] = (6));

} else {
var statearr_71701_72777 = state_71694__$1;
(statearr_71701_72777[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (15))){
var inst_71680 = (state_71694[(9)]);
var inst_71685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_71680);
var state_71694__$1 = state_71694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71694__$1,(17),out,inst_71685);
} else {
if((state_val_71695 === (13))){
var inst_71680 = (state_71694[(9)]);
var inst_71680__$1 = (state_71694[(2)]);
var inst_71681 = cljs.core.some(cljs.core.nil_QMARK_,inst_71680__$1);
var state_71694__$1 = (function (){var statearr_71703 = state_71694;
(statearr_71703[(9)] = inst_71680__$1);

return statearr_71703;
})();
if(cljs.core.truth_(inst_71681)){
var statearr_71704_72780 = state_71694__$1;
(statearr_71704_72780[(1)] = (14));

} else {
var statearr_71705_72781 = state_71694__$1;
(statearr_71705_72781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (6))){
var state_71694__$1 = state_71694;
var statearr_71707_72782 = state_71694__$1;
(statearr_71707_72782[(2)] = null);

(statearr_71707_72782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (17))){
var inst_71687 = (state_71694[(2)]);
var state_71694__$1 = (function (){var statearr_71709 = state_71694;
(statearr_71709[(10)] = inst_71687);

return statearr_71709;
})();
var statearr_71710_72783 = state_71694__$1;
(statearr_71710_72783[(2)] = null);

(statearr_71710_72783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (3))){
var inst_71692 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71694__$1,inst_71692);
} else {
if((state_val_71695 === (12))){
var _ = (function (){var statearr_71712 = state_71694;
(statearr_71712[(4)] = cljs.core.rest((state_71694[(4)])));

return statearr_71712;
})();
var state_71694__$1 = state_71694;
var ex71708 = (state_71694__$1[(2)]);
var statearr_71713_72788 = state_71694__$1;
(statearr_71713_72788[(5)] = ex71708);


if((ex71708 instanceof Object)){
var statearr_71714_72789 = state_71694__$1;
(statearr_71714_72789[(1)] = (11));

(statearr_71714_72789[(5)] = null);

} else {
throw ex71708;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (2))){
var inst_71653 = cljs.core.reset_BANG_(dctr,cnt);
var inst_71654 = cnt;
var inst_71655 = (0);
var state_71694__$1 = (function (){var statearr_71716 = state_71694;
(statearr_71716[(11)] = inst_71653);

(statearr_71716[(7)] = inst_71655);

(statearr_71716[(8)] = inst_71654);

return statearr_71716;
})();
var statearr_71717_72794 = state_71694__$1;
(statearr_71717_72794[(2)] = null);

(statearr_71717_72794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (11))){
var inst_71659 = (state_71694[(2)]);
var inst_71660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_71694__$1 = (function (){var statearr_71718 = state_71694;
(statearr_71718[(12)] = inst_71659);

return statearr_71718;
})();
var statearr_71720_72795 = state_71694__$1;
(statearr_71720_72795[(2)] = inst_71660);

(statearr_71720_72795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (9))){
var inst_71655 = (state_71694[(7)]);
var _ = (function (){var statearr_71721 = state_71694;
(statearr_71721[(4)] = cljs.core.cons((12),(state_71694[(4)])));

return statearr_71721;
})();
var inst_71666 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_71655) : chs__$1.call(null,inst_71655));
var inst_71667 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_71655) : done.call(null,inst_71655));
var inst_71668 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71666,inst_71667);
var ___$1 = (function (){var statearr_71722 = state_71694;
(statearr_71722[(4)] = cljs.core.rest((state_71694[(4)])));

return statearr_71722;
})();
var state_71694__$1 = state_71694;
var statearr_71723_72796 = state_71694__$1;
(statearr_71723_72796[(2)] = inst_71668);

(statearr_71723_72796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (5))){
var inst_71678 = (state_71694[(2)]);
var state_71694__$1 = (function (){var statearr_71724 = state_71694;
(statearr_71724[(13)] = inst_71678);

return statearr_71724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71694__$1,(13),dchan);
} else {
if((state_val_71695 === (14))){
var inst_71683 = cljs.core.async.close_BANG_(out);
var state_71694__$1 = state_71694;
var statearr_71725_72797 = state_71694__$1;
(statearr_71725_72797[(2)] = inst_71683);

(statearr_71725_72797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (16))){
var inst_71690 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
var statearr_71726_72798 = state_71694__$1;
(statearr_71726_72798[(2)] = inst_71690);

(statearr_71726_72798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (10))){
var inst_71655 = (state_71694[(7)]);
var inst_71671 = (state_71694[(2)]);
var inst_71672 = (inst_71655 + (1));
var inst_71655__$1 = inst_71672;
var state_71694__$1 = (function (){var statearr_71727 = state_71694;
(statearr_71727[(14)] = inst_71671);

(statearr_71727[(7)] = inst_71655__$1);

return statearr_71727;
})();
var statearr_71728_72799 = state_71694__$1;
(statearr_71728_72799[(2)] = null);

(statearr_71728_72799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71695 === (8))){
var inst_71676 = (state_71694[(2)]);
var state_71694__$1 = state_71694;
var statearr_71729_72800 = state_71694__$1;
(statearr_71729_72800[(2)] = inst_71676);

(statearr_71729_72800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_71730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71730[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_71730[(1)] = (1));

return statearr_71730;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_71694){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71694);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71731){var ex__44383__auto__ = e71731;
var statearr_71732_72802 = state_71694;
(statearr_71732_72802[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71694[(4)]))){
var statearr_71733_72803 = state_71694;
(statearr_71733_72803[(1)] = cljs.core.first((state_71694[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72804 = state_71694;
state_71694 = G__72804;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_71694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_71694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71735 = f__44587__auto__();
(statearr_71735[(6)] = c__44586__auto___72773);

return statearr_71735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71738 = arguments.length;
switch (G__71738) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___72807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71770){
var state_val_71771 = (state_71770[(1)]);
if((state_val_71771 === (7))){
var inst_71749 = (state_71770[(7)]);
var inst_71750 = (state_71770[(8)]);
var inst_71749__$1 = (state_71770[(2)]);
var inst_71750__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71749__$1,(0),null);
var inst_71751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71749__$1,(1),null);
var inst_71752 = (inst_71750__$1 == null);
var state_71770__$1 = (function (){var statearr_71774 = state_71770;
(statearr_71774[(7)] = inst_71749__$1);

(statearr_71774[(9)] = inst_71751);

(statearr_71774[(8)] = inst_71750__$1);

return statearr_71774;
})();
if(cljs.core.truth_(inst_71752)){
var statearr_71776_72810 = state_71770__$1;
(statearr_71776_72810[(1)] = (8));

} else {
var statearr_71777_72811 = state_71770__$1;
(statearr_71777_72811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (1))){
var inst_71739 = cljs.core.vec(chs);
var inst_71740 = inst_71739;
var state_71770__$1 = (function (){var statearr_71779 = state_71770;
(statearr_71779[(10)] = inst_71740);

return statearr_71779;
})();
var statearr_71784_72815 = state_71770__$1;
(statearr_71784_72815[(2)] = null);

(statearr_71784_72815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (4))){
var inst_71740 = (state_71770[(10)]);
var state_71770__$1 = state_71770;
return cljs.core.async.ioc_alts_BANG_(state_71770__$1,(7),inst_71740);
} else {
if((state_val_71771 === (6))){
var inst_71766 = (state_71770[(2)]);
var state_71770__$1 = state_71770;
var statearr_71785_72816 = state_71770__$1;
(statearr_71785_72816[(2)] = inst_71766);

(statearr_71785_72816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (3))){
var inst_71768 = (state_71770[(2)]);
var state_71770__$1 = state_71770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71770__$1,inst_71768);
} else {
if((state_val_71771 === (2))){
var inst_71740 = (state_71770[(10)]);
var inst_71742 = cljs.core.count(inst_71740);
var inst_71743 = (inst_71742 > (0));
var state_71770__$1 = state_71770;
if(cljs.core.truth_(inst_71743)){
var statearr_71787_72817 = state_71770__$1;
(statearr_71787_72817[(1)] = (4));

} else {
var statearr_71788_72818 = state_71770__$1;
(statearr_71788_72818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (11))){
var inst_71740 = (state_71770[(10)]);
var inst_71759 = (state_71770[(2)]);
var tmp71786 = inst_71740;
var inst_71740__$1 = tmp71786;
var state_71770__$1 = (function (){var statearr_71789 = state_71770;
(statearr_71789[(10)] = inst_71740__$1);

(statearr_71789[(11)] = inst_71759);

return statearr_71789;
})();
var statearr_71790_72819 = state_71770__$1;
(statearr_71790_72819[(2)] = null);

(statearr_71790_72819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (9))){
var inst_71750 = (state_71770[(8)]);
var state_71770__$1 = state_71770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71770__$1,(11),out,inst_71750);
} else {
if((state_val_71771 === (5))){
var inst_71764 = cljs.core.async.close_BANG_(out);
var state_71770__$1 = state_71770;
var statearr_71791_72821 = state_71770__$1;
(statearr_71791_72821[(2)] = inst_71764);

(statearr_71791_72821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (10))){
var inst_71762 = (state_71770[(2)]);
var state_71770__$1 = state_71770;
var statearr_71792_72823 = state_71770__$1;
(statearr_71792_72823[(2)] = inst_71762);

(statearr_71792_72823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71771 === (8))){
var inst_71740 = (state_71770[(10)]);
var inst_71749 = (state_71770[(7)]);
var inst_71751 = (state_71770[(9)]);
var inst_71750 = (state_71770[(8)]);
var inst_71754 = (function (){var cs = inst_71740;
var vec__71745 = inst_71749;
var v = inst_71750;
var c = inst_71751;
return (function (p1__71736_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__71736_SHARP_);
});
})();
var inst_71755 = cljs.core.filterv(inst_71754,inst_71740);
var inst_71740__$1 = inst_71755;
var state_71770__$1 = (function (){var statearr_71794 = state_71770;
(statearr_71794[(10)] = inst_71740__$1);

return statearr_71794;
})();
var statearr_71795_72824 = state_71770__$1;
(statearr_71795_72824[(2)] = null);

(statearr_71795_72824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_71796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71796[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_71796[(1)] = (1));

return statearr_71796;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_71770){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71770);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71797){var ex__44383__auto__ = e71797;
var statearr_71798_72826 = state_71770;
(statearr_71798_72826[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71770[(4)]))){
var statearr_71799_72827 = state_71770;
(statearr_71799_72827[(1)] = cljs.core.first((state_71770[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72828 = state_71770;
state_71770 = G__72828;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_71770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_71770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71800 = f__44587__auto__();
(statearr_71800[(6)] = c__44586__auto___72807);

return statearr_71800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71802 = arguments.length;
switch (G__71802) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___72831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71826){
var state_val_71827 = (state_71826[(1)]);
if((state_val_71827 === (7))){
var inst_71808 = (state_71826[(7)]);
var inst_71808__$1 = (state_71826[(2)]);
var inst_71809 = (inst_71808__$1 == null);
var inst_71810 = cljs.core.not(inst_71809);
var state_71826__$1 = (function (){var statearr_71828 = state_71826;
(statearr_71828[(7)] = inst_71808__$1);

return statearr_71828;
})();
if(inst_71810){
var statearr_71829_72834 = state_71826__$1;
(statearr_71829_72834[(1)] = (8));

} else {
var statearr_71830_72835 = state_71826__$1;
(statearr_71830_72835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (1))){
var inst_71803 = (0);
var state_71826__$1 = (function (){var statearr_71832 = state_71826;
(statearr_71832[(8)] = inst_71803);

return statearr_71832;
})();
var statearr_71833_72836 = state_71826__$1;
(statearr_71833_72836[(2)] = null);

(statearr_71833_72836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (4))){
var state_71826__$1 = state_71826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71826__$1,(7),ch);
} else {
if((state_val_71827 === (6))){
var inst_71821 = (state_71826[(2)]);
var state_71826__$1 = state_71826;
var statearr_71834_72837 = state_71826__$1;
(statearr_71834_72837[(2)] = inst_71821);

(statearr_71834_72837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (3))){
var inst_71823 = (state_71826[(2)]);
var inst_71824 = cljs.core.async.close_BANG_(out);
var state_71826__$1 = (function (){var statearr_71835 = state_71826;
(statearr_71835[(9)] = inst_71823);

return statearr_71835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71826__$1,inst_71824);
} else {
if((state_val_71827 === (2))){
var inst_71803 = (state_71826[(8)]);
var inst_71805 = (inst_71803 < n);
var state_71826__$1 = state_71826;
if(cljs.core.truth_(inst_71805)){
var statearr_71836_72838 = state_71826__$1;
(statearr_71836_72838[(1)] = (4));

} else {
var statearr_71837_72839 = state_71826__$1;
(statearr_71837_72839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (11))){
var inst_71803 = (state_71826[(8)]);
var inst_71813 = (state_71826[(2)]);
var inst_71814 = (inst_71803 + (1));
var inst_71803__$1 = inst_71814;
var state_71826__$1 = (function (){var statearr_71838 = state_71826;
(statearr_71838[(10)] = inst_71813);

(statearr_71838[(8)] = inst_71803__$1);

return statearr_71838;
})();
var statearr_71839_72840 = state_71826__$1;
(statearr_71839_72840[(2)] = null);

(statearr_71839_72840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (9))){
var state_71826__$1 = state_71826;
var statearr_71840_72841 = state_71826__$1;
(statearr_71840_72841[(2)] = null);

(statearr_71840_72841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (5))){
var state_71826__$1 = state_71826;
var statearr_71841_72842 = state_71826__$1;
(statearr_71841_72842[(2)] = null);

(statearr_71841_72842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (10))){
var inst_71818 = (state_71826[(2)]);
var state_71826__$1 = state_71826;
var statearr_71842_72843 = state_71826__$1;
(statearr_71842_72843[(2)] = inst_71818);

(statearr_71842_72843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71827 === (8))){
var inst_71808 = (state_71826[(7)]);
var state_71826__$1 = state_71826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71826__$1,(11),out,inst_71808);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_71843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71843[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_71843[(1)] = (1));

return statearr_71843;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_71826){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71826);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71844){var ex__44383__auto__ = e71844;
var statearr_71845_72848 = state_71826;
(statearr_71845_72848[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71826[(4)]))){
var statearr_71846_72849 = state_71826;
(statearr_71846_72849[(1)] = cljs.core.first((state_71826[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72850 = state_71826;
state_71826 = G__72850;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_71826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_71826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71847 = f__44587__auto__();
(statearr_71847[(6)] = c__44586__auto___72831);

return statearr_71847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71850 = (function (f,ch,meta71851){
this.f = f;
this.ch = ch;
this.meta71851 = meta71851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71852,meta71851__$1){
var self__ = this;
var _71852__$1 = this;
return (new cljs.core.async.t_cljs$core$async71850(self__.f,self__.ch,meta71851__$1));
}));

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71852){
var self__ = this;
var _71852__$1 = this;
return self__.meta71851;
}));

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71853 = (function (f,ch,meta71851,_,fn1,meta71854){
this.f = f;
this.ch = ch;
this.meta71851 = meta71851;
this._ = _;
this.fn1 = fn1;
this.meta71854 = meta71854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71855,meta71854__$1){
var self__ = this;
var _71855__$1 = this;
return (new cljs.core.async.t_cljs$core$async71853(self__.f,self__.ch,self__.meta71851,self__._,self__.fn1,meta71854__$1));
}));

(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71855){
var self__ = this;
var _71855__$1 = this;
return self__.meta71854;
}));

(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__71849_SHARP_){
var G__71858 = (((p1__71849_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__71849_SHARP_) : self__.f.call(null,p1__71849_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__71858) : f1.call(null,G__71858));
});
}));

(cljs.core.async.t_cljs$core$async71853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71851","meta71851",-2051540689,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71850","cljs.core.async/t_cljs$core$async71850",-1848226670,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71854","meta71854",2125138076,null)], null);
}));

(cljs.core.async.t_cljs$core$async71853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71853");

(cljs.core.async.t_cljs$core$async71853.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71853.
 */
cljs.core.async.__GT_t_cljs$core$async71853 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71853(f__$1,ch__$1,meta71851__$1,___$2,fn1__$1,meta71854){
return (new cljs.core.async.t_cljs$core$async71853(f__$1,ch__$1,meta71851__$1,___$2,fn1__$1,meta71854));
});

}

return (new cljs.core.async.t_cljs$core$async71853(self__.f,self__.ch,self__.meta71851,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__71859 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__71859) : self__.f.call(null,G__71859));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async71850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71851","meta71851",-2051540689,null)], null);
}));

(cljs.core.async.t_cljs$core$async71850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71850");

(cljs.core.async.t_cljs$core$async71850.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71850.
 */
cljs.core.async.__GT_t_cljs$core$async71850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71850(f__$1,ch__$1,meta71851){
return (new cljs.core.async.t_cljs$core$async71850(f__$1,ch__$1,meta71851));
});

}

return (new cljs.core.async.t_cljs$core$async71850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71860 = (function (f,ch,meta71861){
this.f = f;
this.ch = ch;
this.meta71861 = meta71861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71862,meta71861__$1){
var self__ = this;
var _71862__$1 = this;
return (new cljs.core.async.t_cljs$core$async71860(self__.f,self__.ch,meta71861__$1));
}));

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71862){
var self__ = this;
var _71862__$1 = this;
return self__.meta71861;
}));

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async71860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71861","meta71861",1447927180,null)], null);
}));

(cljs.core.async.t_cljs$core$async71860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71860");

(cljs.core.async.t_cljs$core$async71860.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71860.
 */
cljs.core.async.__GT_t_cljs$core$async71860 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71860(f__$1,ch__$1,meta71861){
return (new cljs.core.async.t_cljs$core$async71860(f__$1,ch__$1,meta71861));
});

}

return (new cljs.core.async.t_cljs$core$async71860(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71863 = (function (p,ch,meta71864){
this.p = p;
this.ch = ch;
this.meta71864 = meta71864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71865,meta71864__$1){
var self__ = this;
var _71865__$1 = this;
return (new cljs.core.async.t_cljs$core$async71863(self__.p,self__.ch,meta71864__$1));
}));

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71865){
var self__ = this;
var _71865__$1 = this;
return self__.meta71864;
}));

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async71863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71864","meta71864",1364178711,null)], null);
}));

(cljs.core.async.t_cljs$core$async71863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71863");

(cljs.core.async.t_cljs$core$async71863.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71863.
 */
cljs.core.async.__GT_t_cljs$core$async71863 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71863(p__$1,ch__$1,meta71864){
return (new cljs.core.async.t_cljs$core$async71863(p__$1,ch__$1,meta71864));
});

}

return (new cljs.core.async.t_cljs$core$async71863(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71867 = arguments.length;
switch (G__71867) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___72872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71888){
var state_val_71889 = (state_71888[(1)]);
if((state_val_71889 === (7))){
var inst_71884 = (state_71888[(2)]);
var state_71888__$1 = state_71888;
var statearr_71890_72873 = state_71888__$1;
(statearr_71890_72873[(2)] = inst_71884);

(statearr_71890_72873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (1))){
var state_71888__$1 = state_71888;
var statearr_71891_72874 = state_71888__$1;
(statearr_71891_72874[(2)] = null);

(statearr_71891_72874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (4))){
var inst_71870 = (state_71888[(7)]);
var inst_71870__$1 = (state_71888[(2)]);
var inst_71871 = (inst_71870__$1 == null);
var state_71888__$1 = (function (){var statearr_71892 = state_71888;
(statearr_71892[(7)] = inst_71870__$1);

return statearr_71892;
})();
if(cljs.core.truth_(inst_71871)){
var statearr_71893_72875 = state_71888__$1;
(statearr_71893_72875[(1)] = (5));

} else {
var statearr_71894_72876 = state_71888__$1;
(statearr_71894_72876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (6))){
var inst_71870 = (state_71888[(7)]);
var inst_71875 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71870) : p.call(null,inst_71870));
var state_71888__$1 = state_71888;
if(cljs.core.truth_(inst_71875)){
var statearr_71895_72878 = state_71888__$1;
(statearr_71895_72878[(1)] = (8));

} else {
var statearr_71896_72880 = state_71888__$1;
(statearr_71896_72880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (3))){
var inst_71886 = (state_71888[(2)]);
var state_71888__$1 = state_71888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71888__$1,inst_71886);
} else {
if((state_val_71889 === (2))){
var state_71888__$1 = state_71888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71888__$1,(4),ch);
} else {
if((state_val_71889 === (11))){
var inst_71878 = (state_71888[(2)]);
var state_71888__$1 = state_71888;
var statearr_71897_72881 = state_71888__$1;
(statearr_71897_72881[(2)] = inst_71878);

(statearr_71897_72881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (9))){
var state_71888__$1 = state_71888;
var statearr_71898_72882 = state_71888__$1;
(statearr_71898_72882[(2)] = null);

(statearr_71898_72882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (5))){
var inst_71873 = cljs.core.async.close_BANG_(out);
var state_71888__$1 = state_71888;
var statearr_71899_72883 = state_71888__$1;
(statearr_71899_72883[(2)] = inst_71873);

(statearr_71899_72883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (10))){
var inst_71881 = (state_71888[(2)]);
var state_71888__$1 = (function (){var statearr_71900 = state_71888;
(statearr_71900[(8)] = inst_71881);

return statearr_71900;
})();
var statearr_71901_72884 = state_71888__$1;
(statearr_71901_72884[(2)] = null);

(statearr_71901_72884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71889 === (8))){
var inst_71870 = (state_71888[(7)]);
var state_71888__$1 = state_71888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71888__$1,(11),out,inst_71870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_71902 = [null,null,null,null,null,null,null,null,null];
(statearr_71902[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_71902[(1)] = (1));

return statearr_71902;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_71888){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71888);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e71903){var ex__44383__auto__ = e71903;
var statearr_71904_72887 = state_71888;
(statearr_71904_72887[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71888[(4)]))){
var statearr_71905_72888 = state_71888;
(statearr_71905_72888[(1)] = cljs.core.first((state_71888[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72889 = state_71888;
state_71888 = G__72889;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_71888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_71888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_71906 = f__44587__auto__();
(statearr_71906[(6)] = c__44586__auto___72872);

return statearr_71906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71908 = arguments.length;
switch (G__71908) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_71970){
var state_val_71971 = (state_71970[(1)]);
if((state_val_71971 === (7))){
var inst_71966 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
var statearr_71972_72901 = state_71970__$1;
(statearr_71972_72901[(2)] = inst_71966);

(statearr_71972_72901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (20))){
var inst_71936 = (state_71970[(7)]);
var inst_71947 = (state_71970[(2)]);
var inst_71948 = cljs.core.next(inst_71936);
var inst_71922 = inst_71948;
var inst_71923 = null;
var inst_71924 = (0);
var inst_71925 = (0);
var state_71970__$1 = (function (){var statearr_71973 = state_71970;
(statearr_71973[(8)] = inst_71924);

(statearr_71973[(9)] = inst_71947);

(statearr_71973[(10)] = inst_71923);

(statearr_71973[(11)] = inst_71922);

(statearr_71973[(12)] = inst_71925);

return statearr_71973;
})();
var statearr_71974_72902 = state_71970__$1;
(statearr_71974_72902[(2)] = null);

(statearr_71974_72902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (1))){
var state_71970__$1 = state_71970;
var statearr_71975_72906 = state_71970__$1;
(statearr_71975_72906[(2)] = null);

(statearr_71975_72906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (4))){
var inst_71911 = (state_71970[(13)]);
var inst_71911__$1 = (state_71970[(2)]);
var inst_71912 = (inst_71911__$1 == null);
var state_71970__$1 = (function (){var statearr_71976 = state_71970;
(statearr_71976[(13)] = inst_71911__$1);

return statearr_71976;
})();
if(cljs.core.truth_(inst_71912)){
var statearr_71977_72907 = state_71970__$1;
(statearr_71977_72907[(1)] = (5));

} else {
var statearr_71978_72908 = state_71970__$1;
(statearr_71978_72908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (15))){
var state_71970__$1 = state_71970;
var statearr_71982_72909 = state_71970__$1;
(statearr_71982_72909[(2)] = null);

(statearr_71982_72909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (21))){
var state_71970__$1 = state_71970;
var statearr_71983_72913 = state_71970__$1;
(statearr_71983_72913[(2)] = null);

(statearr_71983_72913[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (13))){
var inst_71924 = (state_71970[(8)]);
var inst_71923 = (state_71970[(10)]);
var inst_71922 = (state_71970[(11)]);
var inst_71925 = (state_71970[(12)]);
var inst_71932 = (state_71970[(2)]);
var inst_71933 = (inst_71925 + (1));
var tmp71979 = inst_71924;
var tmp71980 = inst_71923;
var tmp71981 = inst_71922;
var inst_71922__$1 = tmp71981;
var inst_71923__$1 = tmp71980;
var inst_71924__$1 = tmp71979;
var inst_71925__$1 = inst_71933;
var state_71970__$1 = (function (){var statearr_71984 = state_71970;
(statearr_71984[(8)] = inst_71924__$1);

(statearr_71984[(10)] = inst_71923__$1);

(statearr_71984[(11)] = inst_71922__$1);

(statearr_71984[(12)] = inst_71925__$1);

(statearr_71984[(14)] = inst_71932);

return statearr_71984;
})();
var statearr_71985_72914 = state_71970__$1;
(statearr_71985_72914[(2)] = null);

(statearr_71985_72914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (22))){
var state_71970__$1 = state_71970;
var statearr_71986_72918 = state_71970__$1;
(statearr_71986_72918[(2)] = null);

(statearr_71986_72918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (6))){
var inst_71911 = (state_71970[(13)]);
var inst_71920 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71911) : f.call(null,inst_71911));
var inst_71921 = cljs.core.seq(inst_71920);
var inst_71922 = inst_71921;
var inst_71923 = null;
var inst_71924 = (0);
var inst_71925 = (0);
var state_71970__$1 = (function (){var statearr_71987 = state_71970;
(statearr_71987[(8)] = inst_71924);

(statearr_71987[(10)] = inst_71923);

(statearr_71987[(11)] = inst_71922);

(statearr_71987[(12)] = inst_71925);

return statearr_71987;
})();
var statearr_71988_72919 = state_71970__$1;
(statearr_71988_72919[(2)] = null);

(statearr_71988_72919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (17))){
var inst_71936 = (state_71970[(7)]);
var inst_71940 = cljs.core.chunk_first(inst_71936);
var inst_71941 = cljs.core.chunk_rest(inst_71936);
var inst_71942 = cljs.core.count(inst_71940);
var inst_71922 = inst_71941;
var inst_71923 = inst_71940;
var inst_71924 = inst_71942;
var inst_71925 = (0);
var state_71970__$1 = (function (){var statearr_71989 = state_71970;
(statearr_71989[(8)] = inst_71924);

(statearr_71989[(10)] = inst_71923);

(statearr_71989[(11)] = inst_71922);

(statearr_71989[(12)] = inst_71925);

return statearr_71989;
})();
var statearr_71990_72921 = state_71970__$1;
(statearr_71990_72921[(2)] = null);

(statearr_71990_72921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (3))){
var inst_71968 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71970__$1,inst_71968);
} else {
if((state_val_71971 === (12))){
var inst_71956 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
var statearr_71991_72922 = state_71970__$1;
(statearr_71991_72922[(2)] = inst_71956);

(statearr_71991_72922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (2))){
var state_71970__$1 = state_71970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71970__$1,(4),in$);
} else {
if((state_val_71971 === (23))){
var inst_71964 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
var statearr_71992_72923 = state_71970__$1;
(statearr_71992_72923[(2)] = inst_71964);

(statearr_71992_72923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (19))){
var inst_71951 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
var statearr_71993_72927 = state_71970__$1;
(statearr_71993_72927[(2)] = inst_71951);

(statearr_71993_72927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (11))){
var inst_71922 = (state_71970[(11)]);
var inst_71936 = (state_71970[(7)]);
var inst_71936__$1 = cljs.core.seq(inst_71922);
var state_71970__$1 = (function (){var statearr_71994 = state_71970;
(statearr_71994[(7)] = inst_71936__$1);

return statearr_71994;
})();
if(inst_71936__$1){
var statearr_71995_72934 = state_71970__$1;
(statearr_71995_72934[(1)] = (14));

} else {
var statearr_71996_72935 = state_71970__$1;
(statearr_71996_72935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (9))){
var inst_71958 = (state_71970[(2)]);
var inst_71959 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_71970__$1 = (function (){var statearr_71997 = state_71970;
(statearr_71997[(15)] = inst_71958);

return statearr_71997;
})();
if(cljs.core.truth_(inst_71959)){
var statearr_71998_72936 = state_71970__$1;
(statearr_71998_72936[(1)] = (21));

} else {
var statearr_71999_72943 = state_71970__$1;
(statearr_71999_72943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (5))){
var inst_71914 = cljs.core.async.close_BANG_(out);
var state_71970__$1 = state_71970;
var statearr_72000_72944 = state_71970__$1;
(statearr_72000_72944[(2)] = inst_71914);

(statearr_72000_72944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (14))){
var inst_71936 = (state_71970[(7)]);
var inst_71938 = cljs.core.chunked_seq_QMARK_(inst_71936);
var state_71970__$1 = state_71970;
if(inst_71938){
var statearr_72001_72945 = state_71970__$1;
(statearr_72001_72945[(1)] = (17));

} else {
var statearr_72002_72946 = state_71970__$1;
(statearr_72002_72946[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (16))){
var inst_71954 = (state_71970[(2)]);
var state_71970__$1 = state_71970;
var statearr_72003_72947 = state_71970__$1;
(statearr_72003_72947[(2)] = inst_71954);

(statearr_72003_72947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71971 === (10))){
var inst_71923 = (state_71970[(10)]);
var inst_71925 = (state_71970[(12)]);
var inst_71930 = cljs.core._nth(inst_71923,inst_71925);
var state_71970__$1 = state_71970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71970__$1,(13),out,inst_71930);
} else {
if((state_val_71971 === (18))){
var inst_71936 = (state_71970[(7)]);
var inst_71945 = cljs.core.first(inst_71936);
var state_71970__$1 = state_71970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71970__$1,(20),out,inst_71945);
} else {
if((state_val_71971 === (8))){
var inst_71924 = (state_71970[(8)]);
var inst_71925 = (state_71970[(12)]);
var inst_71927 = (inst_71925 < inst_71924);
var inst_71928 = inst_71927;
var state_71970__$1 = state_71970;
if(cljs.core.truth_(inst_71928)){
var statearr_72004_72948 = state_71970__$1;
(statearr_72004_72948[(1)] = (10));

} else {
var statearr_72005_72949 = state_71970__$1;
(statearr_72005_72949[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____0 = (function (){
var statearr_72006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72006[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__);

(statearr_72006[(1)] = (1));

return statearr_72006;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____1 = (function (state_71970){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_71970);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e72007){var ex__44383__auto__ = e72007;
var statearr_72008_72955 = state_71970;
(statearr_72008_72955[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_71970[(4)]))){
var statearr_72009_72956 = state_71970;
(statearr_72009_72956[(1)] = cljs.core.first((state_71970[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72957 = state_71970;
state_71970 = G__72957;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__ = function(state_71970){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____1.call(this,state_71970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44380__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_72010 = f__44587__auto__();
(statearr_72010[(6)] = c__44586__auto__);

return statearr_72010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));

return c__44586__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__72012 = arguments.length;
switch (G__72012) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__72015 = arguments.length;
switch (G__72015) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__72018 = arguments.length;
switch (G__72018) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___72967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_72042){
var state_val_72043 = (state_72042[(1)]);
if((state_val_72043 === (7))){
var inst_72037 = (state_72042[(2)]);
var state_72042__$1 = state_72042;
var statearr_72044_72968 = state_72042__$1;
(statearr_72044_72968[(2)] = inst_72037);

(statearr_72044_72968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (1))){
var inst_72019 = null;
var state_72042__$1 = (function (){var statearr_72046 = state_72042;
(statearr_72046[(7)] = inst_72019);

return statearr_72046;
})();
var statearr_72047_72975 = state_72042__$1;
(statearr_72047_72975[(2)] = null);

(statearr_72047_72975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (4))){
var inst_72022 = (state_72042[(8)]);
var inst_72022__$1 = (state_72042[(2)]);
var inst_72023 = (inst_72022__$1 == null);
var inst_72024 = cljs.core.not(inst_72023);
var state_72042__$1 = (function (){var statearr_72048 = state_72042;
(statearr_72048[(8)] = inst_72022__$1);

return statearr_72048;
})();
if(inst_72024){
var statearr_72049_72976 = state_72042__$1;
(statearr_72049_72976[(1)] = (5));

} else {
var statearr_72050_72977 = state_72042__$1;
(statearr_72050_72977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (6))){
var state_72042__$1 = state_72042;
var statearr_72051_72978 = state_72042__$1;
(statearr_72051_72978[(2)] = null);

(statearr_72051_72978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (3))){
var inst_72039 = (state_72042[(2)]);
var inst_72040 = cljs.core.async.close_BANG_(out);
var state_72042__$1 = (function (){var statearr_72052 = state_72042;
(statearr_72052[(9)] = inst_72039);

return statearr_72052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72042__$1,inst_72040);
} else {
if((state_val_72043 === (2))){
var state_72042__$1 = state_72042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72042__$1,(4),ch);
} else {
if((state_val_72043 === (11))){
var inst_72022 = (state_72042[(8)]);
var inst_72031 = (state_72042[(2)]);
var inst_72019 = inst_72022;
var state_72042__$1 = (function (){var statearr_72053 = state_72042;
(statearr_72053[(10)] = inst_72031);

(statearr_72053[(7)] = inst_72019);

return statearr_72053;
})();
var statearr_72054_72979 = state_72042__$1;
(statearr_72054_72979[(2)] = null);

(statearr_72054_72979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (9))){
var inst_72022 = (state_72042[(8)]);
var state_72042__$1 = state_72042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72042__$1,(11),out,inst_72022);
} else {
if((state_val_72043 === (5))){
var inst_72022 = (state_72042[(8)]);
var inst_72019 = (state_72042[(7)]);
var inst_72026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72022,inst_72019);
var state_72042__$1 = state_72042;
if(inst_72026){
var statearr_72056_72982 = state_72042__$1;
(statearr_72056_72982[(1)] = (8));

} else {
var statearr_72057_72983 = state_72042__$1;
(statearr_72057_72983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (10))){
var inst_72034 = (state_72042[(2)]);
var state_72042__$1 = state_72042;
var statearr_72058_72984 = state_72042__$1;
(statearr_72058_72984[(2)] = inst_72034);

(statearr_72058_72984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72043 === (8))){
var inst_72019 = (state_72042[(7)]);
var tmp72055 = inst_72019;
var inst_72019__$1 = tmp72055;
var state_72042__$1 = (function (){var statearr_72059 = state_72042;
(statearr_72059[(7)] = inst_72019__$1);

return statearr_72059;
})();
var statearr_72060_72985 = state_72042__$1;
(statearr_72060_72985[(2)] = null);

(statearr_72060_72985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_72061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72061[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_72061[(1)] = (1));

return statearr_72061;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_72042){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_72042);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e72062){var ex__44383__auto__ = e72062;
var statearr_72063_72992 = state_72042;
(statearr_72063_72992[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_72042[(4)]))){
var statearr_72064_72993 = state_72042;
(statearr_72064_72993[(1)] = cljs.core.first((state_72042[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72994 = state_72042;
state_72042 = G__72994;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_72042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_72042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_72065 = f__44587__auto__();
(statearr_72065[(6)] = c__44586__auto___72967);

return statearr_72065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__72070 = arguments.length;
switch (G__72070) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___72999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_72108){
var state_val_72109 = (state_72108[(1)]);
if((state_val_72109 === (7))){
var inst_72104 = (state_72108[(2)]);
var state_72108__$1 = state_72108;
var statearr_72110_73000 = state_72108__$1;
(statearr_72110_73000[(2)] = inst_72104);

(statearr_72110_73000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (1))){
var inst_72071 = (new Array(n));
var inst_72072 = inst_72071;
var inst_72073 = (0);
var state_72108__$1 = (function (){var statearr_72111 = state_72108;
(statearr_72111[(7)] = inst_72072);

(statearr_72111[(8)] = inst_72073);

return statearr_72111;
})();
var statearr_72112_73001 = state_72108__$1;
(statearr_72112_73001[(2)] = null);

(statearr_72112_73001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (4))){
var inst_72076 = (state_72108[(9)]);
var inst_72076__$1 = (state_72108[(2)]);
var inst_72077 = (inst_72076__$1 == null);
var inst_72078 = cljs.core.not(inst_72077);
var state_72108__$1 = (function (){var statearr_72113 = state_72108;
(statearr_72113[(9)] = inst_72076__$1);

return statearr_72113;
})();
if(inst_72078){
var statearr_72114_73004 = state_72108__$1;
(statearr_72114_73004[(1)] = (5));

} else {
var statearr_72115_73005 = state_72108__$1;
(statearr_72115_73005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (15))){
var inst_72098 = (state_72108[(2)]);
var state_72108__$1 = state_72108;
var statearr_72116_73006 = state_72108__$1;
(statearr_72116_73006[(2)] = inst_72098);

(statearr_72116_73006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (13))){
var state_72108__$1 = state_72108;
var statearr_72117_73007 = state_72108__$1;
(statearr_72117_73007[(2)] = null);

(statearr_72117_73007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (6))){
var inst_72073 = (state_72108[(8)]);
var inst_72094 = (inst_72073 > (0));
var state_72108__$1 = state_72108;
if(cljs.core.truth_(inst_72094)){
var statearr_72118_73008 = state_72108__$1;
(statearr_72118_73008[(1)] = (12));

} else {
var statearr_72119_73009 = state_72108__$1;
(statearr_72119_73009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (3))){
var inst_72106 = (state_72108[(2)]);
var state_72108__$1 = state_72108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72108__$1,inst_72106);
} else {
if((state_val_72109 === (12))){
var inst_72072 = (state_72108[(7)]);
var inst_72096 = cljs.core.vec(inst_72072);
var state_72108__$1 = state_72108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72108__$1,(15),out,inst_72096);
} else {
if((state_val_72109 === (2))){
var state_72108__$1 = state_72108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72108__$1,(4),ch);
} else {
if((state_val_72109 === (11))){
var inst_72088 = (state_72108[(2)]);
var inst_72089 = (new Array(n));
var inst_72072 = inst_72089;
var inst_72073 = (0);
var state_72108__$1 = (function (){var statearr_72120 = state_72108;
(statearr_72120[(10)] = inst_72088);

(statearr_72120[(7)] = inst_72072);

(statearr_72120[(8)] = inst_72073);

return statearr_72120;
})();
var statearr_72121_73010 = state_72108__$1;
(statearr_72121_73010[(2)] = null);

(statearr_72121_73010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (9))){
var inst_72072 = (state_72108[(7)]);
var inst_72086 = cljs.core.vec(inst_72072);
var state_72108__$1 = state_72108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72108__$1,(11),out,inst_72086);
} else {
if((state_val_72109 === (5))){
var inst_72081 = (state_72108[(11)]);
var inst_72076 = (state_72108[(9)]);
var inst_72072 = (state_72108[(7)]);
var inst_72073 = (state_72108[(8)]);
var inst_72080 = (inst_72072[inst_72073] = inst_72076);
var inst_72081__$1 = (inst_72073 + (1));
var inst_72082 = (inst_72081__$1 < n);
var state_72108__$1 = (function (){var statearr_72122 = state_72108;
(statearr_72122[(12)] = inst_72080);

(statearr_72122[(11)] = inst_72081__$1);

return statearr_72122;
})();
if(cljs.core.truth_(inst_72082)){
var statearr_72123_73011 = state_72108__$1;
(statearr_72123_73011[(1)] = (8));

} else {
var statearr_72124_73012 = state_72108__$1;
(statearr_72124_73012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (14))){
var inst_72101 = (state_72108[(2)]);
var inst_72102 = cljs.core.async.close_BANG_(out);
var state_72108__$1 = (function (){var statearr_72126 = state_72108;
(statearr_72126[(13)] = inst_72101);

return statearr_72126;
})();
var statearr_72127_73015 = state_72108__$1;
(statearr_72127_73015[(2)] = inst_72102);

(statearr_72127_73015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (10))){
var inst_72092 = (state_72108[(2)]);
var state_72108__$1 = state_72108;
var statearr_72128_73016 = state_72108__$1;
(statearr_72128_73016[(2)] = inst_72092);

(statearr_72128_73016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72109 === (8))){
var inst_72081 = (state_72108[(11)]);
var inst_72072 = (state_72108[(7)]);
var tmp72125 = inst_72072;
var inst_72072__$1 = tmp72125;
var inst_72073 = inst_72081;
var state_72108__$1 = (function (){var statearr_72129 = state_72108;
(statearr_72129[(7)] = inst_72072__$1);

(statearr_72129[(8)] = inst_72073);

return statearr_72129;
})();
var statearr_72130_73017 = state_72108__$1;
(statearr_72130_73017[(2)] = null);

(statearr_72130_73017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_72131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72131[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_72131[(1)] = (1));

return statearr_72131;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_72108){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_72108);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e72132){var ex__44383__auto__ = e72132;
var statearr_72133_73018 = state_72108;
(statearr_72133_73018[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_72108[(4)]))){
var statearr_72134_73019 = state_72108;
(statearr_72134_73019[(1)] = cljs.core.first((state_72108[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73020 = state_72108;
state_72108 = G__73020;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_72108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_72108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_72135 = f__44587__auto__();
(statearr_72135[(6)] = c__44586__auto___72999);

return statearr_72135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__72137 = arguments.length;
switch (G__72137) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44586__auto___73022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44587__auto__ = (function (){var switch__44379__auto__ = (function (state_72182){
var state_val_72183 = (state_72182[(1)]);
if((state_val_72183 === (7))){
var inst_72178 = (state_72182[(2)]);
var state_72182__$1 = state_72182;
var statearr_72184_73025 = state_72182__$1;
(statearr_72184_73025[(2)] = inst_72178);

(statearr_72184_73025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (1))){
var inst_72138 = [];
var inst_72139 = inst_72138;
var inst_72140 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_72182__$1 = (function (){var statearr_72185 = state_72182;
(statearr_72185[(7)] = inst_72140);

(statearr_72185[(8)] = inst_72139);

return statearr_72185;
})();
var statearr_72186_73026 = state_72182__$1;
(statearr_72186_73026[(2)] = null);

(statearr_72186_73026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (4))){
var inst_72143 = (state_72182[(9)]);
var inst_72143__$1 = (state_72182[(2)]);
var inst_72144 = (inst_72143__$1 == null);
var inst_72145 = cljs.core.not(inst_72144);
var state_72182__$1 = (function (){var statearr_72187 = state_72182;
(statearr_72187[(9)] = inst_72143__$1);

return statearr_72187;
})();
if(inst_72145){
var statearr_72188_73028 = state_72182__$1;
(statearr_72188_73028[(1)] = (5));

} else {
var statearr_72189_73029 = state_72182__$1;
(statearr_72189_73029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (15))){
var inst_72139 = (state_72182[(8)]);
var inst_72170 = cljs.core.vec(inst_72139);
var state_72182__$1 = state_72182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72182__$1,(18),out,inst_72170);
} else {
if((state_val_72183 === (13))){
var inst_72165 = (state_72182[(2)]);
var state_72182__$1 = state_72182;
var statearr_72190_73030 = state_72182__$1;
(statearr_72190_73030[(2)] = inst_72165);

(statearr_72190_73030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (6))){
var inst_72139 = (state_72182[(8)]);
var inst_72167 = inst_72139.length;
var inst_72168 = (inst_72167 > (0));
var state_72182__$1 = state_72182;
if(cljs.core.truth_(inst_72168)){
var statearr_72191_73031 = state_72182__$1;
(statearr_72191_73031[(1)] = (15));

} else {
var statearr_72192_73032 = state_72182__$1;
(statearr_72192_73032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (17))){
var inst_72175 = (state_72182[(2)]);
var inst_72176 = cljs.core.async.close_BANG_(out);
var state_72182__$1 = (function (){var statearr_72193 = state_72182;
(statearr_72193[(10)] = inst_72175);

return statearr_72193;
})();
var statearr_72194_73033 = state_72182__$1;
(statearr_72194_73033[(2)] = inst_72176);

(statearr_72194_73033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (3))){
var inst_72180 = (state_72182[(2)]);
var state_72182__$1 = state_72182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72182__$1,inst_72180);
} else {
if((state_val_72183 === (12))){
var inst_72139 = (state_72182[(8)]);
var inst_72158 = cljs.core.vec(inst_72139);
var state_72182__$1 = state_72182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72182__$1,(14),out,inst_72158);
} else {
if((state_val_72183 === (2))){
var state_72182__$1 = state_72182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72182__$1,(4),ch);
} else {
if((state_val_72183 === (11))){
var inst_72147 = (state_72182[(11)]);
var inst_72143 = (state_72182[(9)]);
var inst_72139 = (state_72182[(8)]);
var inst_72155 = inst_72139.push(inst_72143);
var tmp72195 = inst_72139;
var inst_72139__$1 = tmp72195;
var inst_72140 = inst_72147;
var state_72182__$1 = (function (){var statearr_72197 = state_72182;
(statearr_72197[(12)] = inst_72155);

(statearr_72197[(7)] = inst_72140);

(statearr_72197[(8)] = inst_72139__$1);

return statearr_72197;
})();
var statearr_72199_73041 = state_72182__$1;
(statearr_72199_73041[(2)] = null);

(statearr_72199_73041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (9))){
var inst_72140 = (state_72182[(7)]);
var inst_72151 = cljs.core.keyword_identical_QMARK_(inst_72140,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_72182__$1 = state_72182;
var statearr_72200_73042 = state_72182__$1;
(statearr_72200_73042[(2)] = inst_72151);

(statearr_72200_73042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (5))){
var inst_72147 = (state_72182[(11)]);
var inst_72140 = (state_72182[(7)]);
var inst_72148 = (state_72182[(13)]);
var inst_72143 = (state_72182[(9)]);
var inst_72147__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72143) : f.call(null,inst_72143));
var inst_72148__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72147__$1,inst_72140);
var state_72182__$1 = (function (){var statearr_72201 = state_72182;
(statearr_72201[(11)] = inst_72147__$1);

(statearr_72201[(13)] = inst_72148__$1);

return statearr_72201;
})();
if(inst_72148__$1){
var statearr_72202_73043 = state_72182__$1;
(statearr_72202_73043[(1)] = (8));

} else {
var statearr_72203_73044 = state_72182__$1;
(statearr_72203_73044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (14))){
var inst_72147 = (state_72182[(11)]);
var inst_72143 = (state_72182[(9)]);
var inst_72160 = (state_72182[(2)]);
var inst_72161 = [];
var inst_72162 = inst_72161.push(inst_72143);
var inst_72139 = inst_72161;
var inst_72140 = inst_72147;
var state_72182__$1 = (function (){var statearr_72204 = state_72182;
(statearr_72204[(14)] = inst_72162);

(statearr_72204[(15)] = inst_72160);

(statearr_72204[(7)] = inst_72140);

(statearr_72204[(8)] = inst_72139);

return statearr_72204;
})();
var statearr_72205_73047 = state_72182__$1;
(statearr_72205_73047[(2)] = null);

(statearr_72205_73047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (16))){
var state_72182__$1 = state_72182;
var statearr_72206_73048 = state_72182__$1;
(statearr_72206_73048[(2)] = null);

(statearr_72206_73048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (10))){
var inst_72153 = (state_72182[(2)]);
var state_72182__$1 = state_72182;
if(cljs.core.truth_(inst_72153)){
var statearr_72207_73054 = state_72182__$1;
(statearr_72207_73054[(1)] = (11));

} else {
var statearr_72208_73055 = state_72182__$1;
(statearr_72208_73055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (18))){
var inst_72172 = (state_72182[(2)]);
var state_72182__$1 = state_72182;
var statearr_72209_73058 = state_72182__$1;
(statearr_72209_73058[(2)] = inst_72172);

(statearr_72209_73058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72183 === (8))){
var inst_72148 = (state_72182[(13)]);
var state_72182__$1 = state_72182;
var statearr_72210_73059 = state_72182__$1;
(statearr_72210_73059[(2)] = inst_72148);

(statearr_72210_73059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44380__auto__ = null;
var cljs$core$async$state_machine__44380__auto____0 = (function (){
var statearr_72211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72211[(0)] = cljs$core$async$state_machine__44380__auto__);

(statearr_72211[(1)] = (1));

return statearr_72211;
});
var cljs$core$async$state_machine__44380__auto____1 = (function (state_72182){
while(true){
var ret_value__44381__auto__ = (function (){try{while(true){
var result__44382__auto__ = switch__44379__auto__(state_72182);
if(cljs.core.keyword_identical_QMARK_(result__44382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44382__auto__;
}
break;
}
}catch (e72212){var ex__44383__auto__ = e72212;
var statearr_72213_73061 = state_72182;
(statearr_72213_73061[(2)] = ex__44383__auto__);


if(cljs.core.seq((state_72182[(4)]))){
var statearr_72214_73062 = state_72182;
(statearr_72214_73062[(1)] = cljs.core.first((state_72182[(4)])));

} else {
throw ex__44383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73063 = state_72182;
state_72182 = G__73063;
continue;
} else {
return ret_value__44381__auto__;
}
break;
}
});
cljs$core$async$state_machine__44380__auto__ = function(state_72182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44380__auto____1.call(this,state_72182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44380__auto____0;
cljs$core$async$state_machine__44380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44380__auto____1;
return cljs$core$async$state_machine__44380__auto__;
})()
})();
var state__44588__auto__ = (function (){var statearr_72215 = f__44587__auto__();
(statearr_72215[(6)] = c__44586__auto___73022);

return statearr_72215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44588__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
