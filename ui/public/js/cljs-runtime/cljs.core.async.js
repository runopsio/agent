goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44037 = arguments.length;
switch (G__44037) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44045 = (function (f,blockable,meta44046){
this.f = f;
this.blockable = blockable;
this.meta44046 = meta44046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44047,meta44046__$1){
var self__ = this;
var _44047__$1 = this;
return (new cljs.core.async.t_cljs$core$async44045(self__.f,self__.blockable,meta44046__$1));
}));

(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44047){
var self__ = this;
var _44047__$1 = this;
return self__.meta44046;
}));

(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44046","meta44046",309237036,null)], null);
}));

(cljs.core.async.t_cljs$core$async44045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44045");

(cljs.core.async.t_cljs$core$async44045.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44045.
 */
cljs.core.async.__GT_t_cljs$core$async44045 = (function cljs$core$async$__GT_t_cljs$core$async44045(f__$1,blockable__$1,meta44046){
return (new cljs.core.async.t_cljs$core$async44045(f__$1,blockable__$1,meta44046));
});

}

return (new cljs.core.async.t_cljs$core$async44045(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44061 = arguments.length;
switch (G__44061) {
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
var G__44065 = arguments.length;
switch (G__44065) {
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
var G__44081 = arguments.length;
switch (G__44081) {
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
var val_46226 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46226) : fn1.call(null,val_46226));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46226) : fn1.call(null,val_46226));
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
var G__44083 = arguments.length;
switch (G__44083) {
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
var n__4741__auto___46228 = n;
var x_46229 = (0);
while(true){
if((x_46229 < n__4741__auto___46228)){
(a[x_46229] = x_46229);

var G__46230 = (x_46229 + (1));
x_46229 = G__46230;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44084 = (function (flag,meta44085){
this.flag = flag;
this.meta44085 = meta44085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44086,meta44085__$1){
var self__ = this;
var _44086__$1 = this;
return (new cljs.core.async.t_cljs$core$async44084(self__.flag,meta44085__$1));
}));

(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44086){
var self__ = this;
var _44086__$1 = this;
return self__.meta44085;
}));

(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44085","meta44085",221871221,null)], null);
}));

(cljs.core.async.t_cljs$core$async44084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44084");

(cljs.core.async.t_cljs$core$async44084.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44084.
 */
cljs.core.async.__GT_t_cljs$core$async44084 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44084(flag__$1,meta44085){
return (new cljs.core.async.t_cljs$core$async44084(flag__$1,meta44085));
});

}

return (new cljs.core.async.t_cljs$core$async44084(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44087 = (function (flag,cb,meta44088){
this.flag = flag;
this.cb = cb;
this.meta44088 = meta44088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44089,meta44088__$1){
var self__ = this;
var _44089__$1 = this;
return (new cljs.core.async.t_cljs$core$async44087(self__.flag,self__.cb,meta44088__$1));
}));

(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44089){
var self__ = this;
var _44089__$1 = this;
return self__.meta44088;
}));

(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44088","meta44088",-944594739,null)], null);
}));

(cljs.core.async.t_cljs$core$async44087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44087");

(cljs.core.async.t_cljs$core$async44087.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44087.
 */
cljs.core.async.__GT_t_cljs$core$async44087 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44087(flag__$1,cb__$1,meta44088){
return (new cljs.core.async.t_cljs$core$async44087(flag__$1,cb__$1,meta44088));
});

}

return (new cljs.core.async.t_cljs$core$async44087(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44094_SHARP_){
var G__44096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44094_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44096) : fret.call(null,G__44096));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44095_SHARP_){
var G__44097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44095_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44097) : fret.call(null,G__44097));
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
var G__46233 = (i + (1));
i = G__46233;
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
var len__4864__auto___46234 = arguments.length;
var i__4865__auto___46235 = (0);
while(true){
if((i__4865__auto___46235 < len__4864__auto___46234)){
args__4870__auto__.push((arguments[i__4865__auto___46235]));

var G__46236 = (i__4865__auto___46235 + (1));
i__4865__auto___46235 = G__46236;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44100){
var map__44101 = p__44100;
var map__44101__$1 = cljs.core.__destructure_map(map__44101);
var opts = map__44101__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44098){
var G__44099 = cljs.core.first(seq44098);
var seq44098__$1 = cljs.core.next(seq44098);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44099,seq44098__$1);
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
var G__44104 = arguments.length;
switch (G__44104) {
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
var c__27102__auto___46238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44133){
var state_val_44135 = (state_44133[(1)]);
if((state_val_44135 === (7))){
var inst_44129 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
var statearr_44137_46239 = state_44133__$1;
(statearr_44137_46239[(2)] = inst_44129);

(statearr_44137_46239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (1))){
var state_44133__$1 = state_44133;
var statearr_44139_46240 = state_44133__$1;
(statearr_44139_46240[(2)] = null);

(statearr_44139_46240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (4))){
var inst_44112 = (state_44133[(7)]);
var inst_44112__$1 = (state_44133[(2)]);
var inst_44113 = (inst_44112__$1 == null);
var state_44133__$1 = (function (){var statearr_44140 = state_44133;
(statearr_44140[(7)] = inst_44112__$1);

return statearr_44140;
})();
if(cljs.core.truth_(inst_44113)){
var statearr_44141_46241 = state_44133__$1;
(statearr_44141_46241[(1)] = (5));

} else {
var statearr_44142_46242 = state_44133__$1;
(statearr_44142_46242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (13))){
var state_44133__$1 = state_44133;
var statearr_44143_46243 = state_44133__$1;
(statearr_44143_46243[(2)] = null);

(statearr_44143_46243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (6))){
var inst_44112 = (state_44133[(7)]);
var state_44133__$1 = state_44133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44133__$1,(11),to,inst_44112);
} else {
if((state_val_44135 === (3))){
var inst_44131 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44133__$1,inst_44131);
} else {
if((state_val_44135 === (12))){
var state_44133__$1 = state_44133;
var statearr_44145_46244 = state_44133__$1;
(statearr_44145_46244[(2)] = null);

(statearr_44145_46244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (2))){
var state_44133__$1 = state_44133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44133__$1,(4),from);
} else {
if((state_val_44135 === (11))){
var inst_44122 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
if(cljs.core.truth_(inst_44122)){
var statearr_44146_46245 = state_44133__$1;
(statearr_44146_46245[(1)] = (12));

} else {
var statearr_44147_46246 = state_44133__$1;
(statearr_44147_46246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (9))){
var state_44133__$1 = state_44133;
var statearr_44150_46247 = state_44133__$1;
(statearr_44150_46247[(2)] = null);

(statearr_44150_46247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (5))){
var state_44133__$1 = state_44133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44151_46248 = state_44133__$1;
(statearr_44151_46248[(1)] = (8));

} else {
var statearr_44152_46249 = state_44133__$1;
(statearr_44152_46249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (14))){
var inst_44127 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
var statearr_44154_46250 = state_44133__$1;
(statearr_44154_46250[(2)] = inst_44127);

(statearr_44154_46250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (10))){
var inst_44119 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
var statearr_44155_46251 = state_44133__$1;
(statearr_44155_46251[(2)] = inst_44119);

(statearr_44155_46251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (8))){
var inst_44116 = cljs.core.async.close_BANG_(to);
var state_44133__$1 = state_44133;
var statearr_44156_46252 = state_44133__$1;
(statearr_44156_46252[(2)] = inst_44116);

(statearr_44156_46252[(1)] = (10));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_44157 = [null,null,null,null,null,null,null,null];
(statearr_44157[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_44157[(1)] = (1));

return statearr_44157;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_44133){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44133);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44158){var ex__27036__auto__ = e44158;
var statearr_44159_46253 = state_44133;
(statearr_44159_46253[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44133[(4)]))){
var statearr_44160_46254 = state_44133;
(statearr_44160_46254[(1)] = cljs.core.first((state_44133[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46255 = state_44133;
state_44133 = G__46255;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_44133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_44133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44161 = f__27103__auto__();
(statearr_44161[(6)] = c__27102__auto___46238);

return statearr_44161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var process = (function (p__44162){
var vec__44163 = p__44162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163,(1),null);
var job = vec__44163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27102__auto___46256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44170){
var state_val_44171 = (state_44170[(1)]);
if((state_val_44171 === (1))){
var state_44170__$1 = state_44170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44170__$1,(2),res,v);
} else {
if((state_val_44171 === (2))){
var inst_44167 = (state_44170[(2)]);
var inst_44168 = cljs.core.async.close_BANG_(res);
var state_44170__$1 = (function (){var statearr_44172 = state_44170;
(statearr_44172[(7)] = inst_44167);

return statearr_44172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44170__$1,inst_44168);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_44173 = [null,null,null,null,null,null,null,null];
(statearr_44173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__);

(statearr_44173[(1)] = (1));

return statearr_44173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1 = (function (state_44170){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44170);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44174){var ex__27036__auto__ = e44174;
var statearr_44175_46257 = state_44170;
(statearr_44175_46257[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44170[(4)]))){
var statearr_44180_46258 = state_44170;
(statearr_44180_46258[(1)] = cljs.core.first((state_44170[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46259 = state_44170;
state_44170 = G__46259;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = function(state_44170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1.call(this,state_44170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44181 = f__27103__auto__();
(statearr_44181[(6)] = c__27102__auto___46256);

return statearr_44181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44183){
var vec__44184 = p__44183;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(1),null);
var job = vec__44184;
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
var n__4741__auto___46260 = n;
var __46261 = (0);
while(true){
if((__46261 < n__4741__auto___46260)){
var G__44187_46262 = type;
var G__44187_46263__$1 = (((G__44187_46262 instanceof cljs.core.Keyword))?G__44187_46262.fqn:null);
switch (G__44187_46263__$1) {
case "compute":
var c__27102__auto___46265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46261,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = ((function (__46261,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function (state_44200){
var state_val_44201 = (state_44200[(1)]);
if((state_val_44201 === (1))){
var state_44200__$1 = state_44200;
var statearr_44202_46266 = state_44200__$1;
(statearr_44202_46266[(2)] = null);

(statearr_44202_46266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44201 === (2))){
var state_44200__$1 = state_44200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44200__$1,(4),jobs);
} else {
if((state_val_44201 === (3))){
var inst_44198 = (state_44200[(2)]);
var state_44200__$1 = state_44200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44200__$1,inst_44198);
} else {
if((state_val_44201 === (4))){
var inst_44190 = (state_44200[(2)]);
var inst_44191 = process(inst_44190);
var state_44200__$1 = state_44200;
if(cljs.core.truth_(inst_44191)){
var statearr_44207_46267 = state_44200__$1;
(statearr_44207_46267[(1)] = (5));

} else {
var statearr_44208_46268 = state_44200__$1;
(statearr_44208_46268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44201 === (5))){
var state_44200__$1 = state_44200;
var statearr_44209_46269 = state_44200__$1;
(statearr_44209_46269[(2)] = null);

(statearr_44209_46269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44201 === (6))){
var state_44200__$1 = state_44200;
var statearr_44210_46270 = state_44200__$1;
(statearr_44210_46270[(2)] = null);

(statearr_44210_46270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44201 === (7))){
var inst_44196 = (state_44200[(2)]);
var state_44200__$1 = state_44200;
var statearr_44211_46271 = state_44200__$1;
(statearr_44211_46271[(2)] = inst_44196);

(statearr_44211_46271[(1)] = (3));


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
});})(__46261,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
;
return ((function (__46261,switch__27032__auto__,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_44212 = [null,null,null,null,null,null,null];
(statearr_44212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__);

(statearr_44212[(1)] = (1));

return statearr_44212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1 = (function (state_44200){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44200);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44213){var ex__27036__auto__ = e44213;
var statearr_44214_46272 = state_44200;
(statearr_44214_46272[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44200[(4)]))){
var statearr_44217_46273 = state_44200;
(statearr_44217_46273[(1)] = cljs.core.first((state_44200[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46274 = state_44200;
state_44200 = G__46274;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = function(state_44200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1.call(this,state_44200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__;
})()
;})(__46261,switch__27032__auto__,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
})();
var state__27104__auto__ = (function (){var statearr_44221 = f__27103__auto__();
(statearr_44221[(6)] = c__27102__auto___46265);

return statearr_44221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
});})(__46261,c__27102__auto___46265,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
);


break;
case "async":
var c__27102__auto___46275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46261,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = ((function (__46261,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function (state_44236){
var state_val_44240 = (state_44236[(1)]);
if((state_val_44240 === (1))){
var state_44236__$1 = state_44236;
var statearr_44241_46276 = state_44236__$1;
(statearr_44241_46276[(2)] = null);

(statearr_44241_46276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44240 === (2))){
var state_44236__$1 = state_44236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44236__$1,(4),jobs);
} else {
if((state_val_44240 === (3))){
var inst_44234 = (state_44236[(2)]);
var state_44236__$1 = state_44236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44236__$1,inst_44234);
} else {
if((state_val_44240 === (4))){
var inst_44226 = (state_44236[(2)]);
var inst_44227 = async(inst_44226);
var state_44236__$1 = state_44236;
if(cljs.core.truth_(inst_44227)){
var statearr_44246_46277 = state_44236__$1;
(statearr_44246_46277[(1)] = (5));

} else {
var statearr_44247_46279 = state_44236__$1;
(statearr_44247_46279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44240 === (5))){
var state_44236__$1 = state_44236;
var statearr_44248_46280 = state_44236__$1;
(statearr_44248_46280[(2)] = null);

(statearr_44248_46280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44240 === (6))){
var state_44236__$1 = state_44236;
var statearr_44249_46281 = state_44236__$1;
(statearr_44249_46281[(2)] = null);

(statearr_44249_46281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44240 === (7))){
var inst_44232 = (state_44236[(2)]);
var state_44236__$1 = state_44236;
var statearr_44250_46282 = state_44236__$1;
(statearr_44250_46282[(2)] = inst_44232);

(statearr_44250_46282[(1)] = (3));


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
});})(__46261,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
;
return ((function (__46261,switch__27032__auto__,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_44251 = [null,null,null,null,null,null,null];
(statearr_44251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__);

(statearr_44251[(1)] = (1));

return statearr_44251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1 = (function (state_44236){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44236);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44252){var ex__27036__auto__ = e44252;
var statearr_44253_46284 = state_44236;
(statearr_44253_46284[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44236[(4)]))){
var statearr_44254_46285 = state_44236;
(statearr_44254_46285[(1)] = cljs.core.first((state_44236[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46286 = state_44236;
state_44236 = G__46286;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = function(state_44236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1.call(this,state_44236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__;
})()
;})(__46261,switch__27032__auto__,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
})();
var state__27104__auto__ = (function (){var statearr_44257 = f__27103__auto__();
(statearr_44257[(6)] = c__27102__auto___46275);

return statearr_44257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
});})(__46261,c__27102__auto___46275,G__44187_46262,G__44187_46263__$1,n__4741__auto___46260,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44187_46263__$1)].join('')));

}

var G__46287 = (__46261 + (1));
__46261 = G__46287;
continue;
} else {
}
break;
}

var c__27102__auto___46288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44287){
var state_val_44288 = (state_44287[(1)]);
if((state_val_44288 === (7))){
var inst_44283 = (state_44287[(2)]);
var state_44287__$1 = state_44287;
var statearr_44289_46290 = state_44287__$1;
(statearr_44289_46290[(2)] = inst_44283);

(statearr_44289_46290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44288 === (1))){
var state_44287__$1 = state_44287;
var statearr_44290_46291 = state_44287__$1;
(statearr_44290_46291[(2)] = null);

(statearr_44290_46291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44288 === (4))){
var inst_44268 = (state_44287[(7)]);
var inst_44268__$1 = (state_44287[(2)]);
var inst_44269 = (inst_44268__$1 == null);
var state_44287__$1 = (function (){var statearr_44291 = state_44287;
(statearr_44291[(7)] = inst_44268__$1);

return statearr_44291;
})();
if(cljs.core.truth_(inst_44269)){
var statearr_44292_46292 = state_44287__$1;
(statearr_44292_46292[(1)] = (5));

} else {
var statearr_44293_46293 = state_44287__$1;
(statearr_44293_46293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44288 === (6))){
var inst_44268 = (state_44287[(7)]);
var inst_44273 = (state_44287[(8)]);
var inst_44273__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44275 = [inst_44268,inst_44273__$1];
var inst_44276 = (new cljs.core.PersistentVector(null,2,(5),inst_44274,inst_44275,null));
var state_44287__$1 = (function (){var statearr_44294 = state_44287;
(statearr_44294[(8)] = inst_44273__$1);

return statearr_44294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44287__$1,(8),jobs,inst_44276);
} else {
if((state_val_44288 === (3))){
var inst_44285 = (state_44287[(2)]);
var state_44287__$1 = state_44287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44287__$1,inst_44285);
} else {
if((state_val_44288 === (2))){
var state_44287__$1 = state_44287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44287__$1,(4),from);
} else {
if((state_val_44288 === (9))){
var inst_44280 = (state_44287[(2)]);
var state_44287__$1 = (function (){var statearr_44295 = state_44287;
(statearr_44295[(9)] = inst_44280);

return statearr_44295;
})();
var statearr_44296_46294 = state_44287__$1;
(statearr_44296_46294[(2)] = null);

(statearr_44296_46294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44288 === (5))){
var inst_44271 = cljs.core.async.close_BANG_(jobs);
var state_44287__$1 = state_44287;
var statearr_44297_46295 = state_44287__$1;
(statearr_44297_46295[(2)] = inst_44271);

(statearr_44297_46295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44288 === (8))){
var inst_44273 = (state_44287[(8)]);
var inst_44278 = (state_44287[(2)]);
var state_44287__$1 = (function (){var statearr_44298 = state_44287;
(statearr_44298[(10)] = inst_44278);

return statearr_44298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44287__$1,(9),results,inst_44273);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_44299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__);

(statearr_44299[(1)] = (1));

return statearr_44299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1 = (function (state_44287){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44287);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44300){var ex__27036__auto__ = e44300;
var statearr_44301_46297 = state_44287;
(statearr_44301_46297[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44287[(4)]))){
var statearr_44302_46298 = state_44287;
(statearr_44302_46298[(1)] = cljs.core.first((state_44287[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46300 = state_44287;
state_44287 = G__46300;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = function(state_44287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1.call(this,state_44287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44306 = f__27103__auto__();
(statearr_44306[(6)] = c__27102__auto___46288);

return statearr_44306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


var c__27102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44348){
var state_val_44349 = (state_44348[(1)]);
if((state_val_44349 === (7))){
var inst_44344 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
var statearr_44350_46303 = state_44348__$1;
(statearr_44350_46303[(2)] = inst_44344);

(statearr_44350_46303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (20))){
var state_44348__$1 = state_44348;
var statearr_44351_46304 = state_44348__$1;
(statearr_44351_46304[(2)] = null);

(statearr_44351_46304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (1))){
var state_44348__$1 = state_44348;
var statearr_44352_46305 = state_44348__$1;
(statearr_44352_46305[(2)] = null);

(statearr_44352_46305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (4))){
var inst_44309 = (state_44348[(7)]);
var inst_44309__$1 = (state_44348[(2)]);
var inst_44310 = (inst_44309__$1 == null);
var state_44348__$1 = (function (){var statearr_44353 = state_44348;
(statearr_44353[(7)] = inst_44309__$1);

return statearr_44353;
})();
if(cljs.core.truth_(inst_44310)){
var statearr_44354_46306 = state_44348__$1;
(statearr_44354_46306[(1)] = (5));

} else {
var statearr_44355_46307 = state_44348__$1;
(statearr_44355_46307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (15))){
var inst_44326 = (state_44348[(8)]);
var state_44348__$1 = state_44348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44348__$1,(18),to,inst_44326);
} else {
if((state_val_44349 === (21))){
var inst_44339 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
var statearr_44360_46308 = state_44348__$1;
(statearr_44360_46308[(2)] = inst_44339);

(statearr_44360_46308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (13))){
var inst_44341 = (state_44348[(2)]);
var state_44348__$1 = (function (){var statearr_44365 = state_44348;
(statearr_44365[(9)] = inst_44341);

return statearr_44365;
})();
var statearr_44366_46309 = state_44348__$1;
(statearr_44366_46309[(2)] = null);

(statearr_44366_46309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (6))){
var inst_44309 = (state_44348[(7)]);
var state_44348__$1 = state_44348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44348__$1,(11),inst_44309);
} else {
if((state_val_44349 === (17))){
var inst_44334 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
if(cljs.core.truth_(inst_44334)){
var statearr_44367_46311 = state_44348__$1;
(statearr_44367_46311[(1)] = (19));

} else {
var statearr_44372_46313 = state_44348__$1;
(statearr_44372_46313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (3))){
var inst_44346 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44348__$1,inst_44346);
} else {
if((state_val_44349 === (12))){
var inst_44323 = (state_44348[(10)]);
var state_44348__$1 = state_44348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44348__$1,(14),inst_44323);
} else {
if((state_val_44349 === (2))){
var state_44348__$1 = state_44348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44348__$1,(4),results);
} else {
if((state_val_44349 === (19))){
var state_44348__$1 = state_44348;
var statearr_44377_46314 = state_44348__$1;
(statearr_44377_46314[(2)] = null);

(statearr_44377_46314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (11))){
var inst_44323 = (state_44348[(2)]);
var state_44348__$1 = (function (){var statearr_44378 = state_44348;
(statearr_44378[(10)] = inst_44323);

return statearr_44378;
})();
var statearr_44379_46315 = state_44348__$1;
(statearr_44379_46315[(2)] = null);

(statearr_44379_46315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (9))){
var state_44348__$1 = state_44348;
var statearr_44380_46316 = state_44348__$1;
(statearr_44380_46316[(2)] = null);

(statearr_44380_46316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (5))){
var state_44348__$1 = state_44348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44381_46318 = state_44348__$1;
(statearr_44381_46318[(1)] = (8));

} else {
var statearr_44386_46319 = state_44348__$1;
(statearr_44386_46319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (14))){
var inst_44326 = (state_44348[(8)]);
var inst_44328 = (state_44348[(11)]);
var inst_44326__$1 = (state_44348[(2)]);
var inst_44327 = (inst_44326__$1 == null);
var inst_44328__$1 = cljs.core.not(inst_44327);
var state_44348__$1 = (function (){var statearr_44387 = state_44348;
(statearr_44387[(8)] = inst_44326__$1);

(statearr_44387[(11)] = inst_44328__$1);

return statearr_44387;
})();
if(inst_44328__$1){
var statearr_44388_46321 = state_44348__$1;
(statearr_44388_46321[(1)] = (15));

} else {
var statearr_44389_46322 = state_44348__$1;
(statearr_44389_46322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (16))){
var inst_44328 = (state_44348[(11)]);
var state_44348__$1 = state_44348;
var statearr_44394_46323 = state_44348__$1;
(statearr_44394_46323[(2)] = inst_44328);

(statearr_44394_46323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (10))){
var inst_44316 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
var statearr_44395_46324 = state_44348__$1;
(statearr_44395_46324[(2)] = inst_44316);

(statearr_44395_46324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (18))){
var inst_44331 = (state_44348[(2)]);
var state_44348__$1 = state_44348;
var statearr_44396_46325 = state_44348__$1;
(statearr_44396_46325[(2)] = inst_44331);

(statearr_44396_46325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44349 === (8))){
var inst_44313 = cljs.core.async.close_BANG_(to);
var state_44348__$1 = state_44348;
var statearr_44397_46326 = state_44348__$1;
(statearr_44397_46326[(2)] = inst_44313);

(statearr_44397_46326[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_44398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__);

(statearr_44398[(1)] = (1));

return statearr_44398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1 = (function (state_44348){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44348);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44399){var ex__27036__auto__ = e44399;
var statearr_44400_46328 = state_44348;
(statearr_44400_46328[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44348[(4)]))){
var statearr_44401_46329 = state_44348;
(statearr_44401_46329[(1)] = cljs.core.first((state_44348[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46331 = state_44348;
state_44348 = G__46331;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__ = function(state_44348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1.call(this,state_44348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44402 = f__27103__auto__();
(statearr_44402[(6)] = c__27102__auto__);

return statearr_44402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

return c__27102__auto__;
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
var G__44404 = arguments.length;
switch (G__44404) {
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
var G__44407 = arguments.length;
switch (G__44407) {
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
var G__44421 = arguments.length;
switch (G__44421) {
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
var c__27102__auto___46335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44462){
var state_val_44463 = (state_44462[(1)]);
if((state_val_44463 === (7))){
var inst_44458 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
var statearr_44474_46336 = state_44462__$1;
(statearr_44474_46336[(2)] = inst_44458);

(statearr_44474_46336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (1))){
var state_44462__$1 = state_44462;
var statearr_44475_46337 = state_44462__$1;
(statearr_44475_46337[(2)] = null);

(statearr_44475_46337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (4))){
var inst_44435 = (state_44462[(7)]);
var inst_44435__$1 = (state_44462[(2)]);
var inst_44439 = (inst_44435__$1 == null);
var state_44462__$1 = (function (){var statearr_44479 = state_44462;
(statearr_44479[(7)] = inst_44435__$1);

return statearr_44479;
})();
if(cljs.core.truth_(inst_44439)){
var statearr_44483_46338 = state_44462__$1;
(statearr_44483_46338[(1)] = (5));

} else {
var statearr_44484_46340 = state_44462__$1;
(statearr_44484_46340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (13))){
var state_44462__$1 = state_44462;
var statearr_44486_46341 = state_44462__$1;
(statearr_44486_46341[(2)] = null);

(statearr_44486_46341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (6))){
var inst_44435 = (state_44462[(7)]);
var inst_44445 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44435) : p.call(null,inst_44435));
var state_44462__$1 = state_44462;
if(cljs.core.truth_(inst_44445)){
var statearr_44489_46343 = state_44462__$1;
(statearr_44489_46343[(1)] = (9));

} else {
var statearr_44490_46344 = state_44462__$1;
(statearr_44490_46344[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (3))){
var inst_44460 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44462__$1,inst_44460);
} else {
if((state_val_44463 === (12))){
var state_44462__$1 = state_44462;
var statearr_44492_46345 = state_44462__$1;
(statearr_44492_46345[(2)] = null);

(statearr_44492_46345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (2))){
var state_44462__$1 = state_44462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44462__$1,(4),ch);
} else {
if((state_val_44463 === (11))){
var inst_44435 = (state_44462[(7)]);
var inst_44449 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44462__$1,(8),inst_44449,inst_44435);
} else {
if((state_val_44463 === (9))){
var state_44462__$1 = state_44462;
var statearr_44493_46346 = state_44462__$1;
(statearr_44493_46346[(2)] = tc);

(statearr_44493_46346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (5))){
var inst_44442 = cljs.core.async.close_BANG_(tc);
var inst_44443 = cljs.core.async.close_BANG_(fc);
var state_44462__$1 = (function (){var statearr_44495 = state_44462;
(statearr_44495[(8)] = inst_44442);

return statearr_44495;
})();
var statearr_44496_46347 = state_44462__$1;
(statearr_44496_46347[(2)] = inst_44443);

(statearr_44496_46347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (14))){
var inst_44456 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
var statearr_44498_46348 = state_44462__$1;
(statearr_44498_46348[(2)] = inst_44456);

(statearr_44498_46348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (10))){
var state_44462__$1 = state_44462;
var statearr_44500_46349 = state_44462__$1;
(statearr_44500_46349[(2)] = fc);

(statearr_44500_46349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (8))){
var inst_44451 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
if(cljs.core.truth_(inst_44451)){
var statearr_44502_46350 = state_44462__$1;
(statearr_44502_46350[(1)] = (12));

} else {
var statearr_44503_46351 = state_44462__$1;
(statearr_44503_46351[(1)] = (13));

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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_44505 = [null,null,null,null,null,null,null,null,null];
(statearr_44505[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_44505[(1)] = (1));

return statearr_44505;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_44462){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44462);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44507){var ex__27036__auto__ = e44507;
var statearr_44508_46352 = state_44462;
(statearr_44508_46352[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44462[(4)]))){
var statearr_44509_46353 = state_44462;
(statearr_44509_46353[(1)] = cljs.core.first((state_44462[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46354 = state_44462;
state_44462 = G__46354;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_44462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_44462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44515 = f__27103__auto__();
(statearr_44515[(6)] = c__27102__auto___46335);

return statearr_44515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var c__27102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44574){
var state_val_44575 = (state_44574[(1)]);
if((state_val_44575 === (7))){
var inst_44570 = (state_44574[(2)]);
var state_44574__$1 = state_44574;
var statearr_44576_46357 = state_44574__$1;
(statearr_44576_46357[(2)] = inst_44570);

(statearr_44576_46357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (1))){
var inst_44537 = init;
var inst_44541 = inst_44537;
var state_44574__$1 = (function (){var statearr_44577 = state_44574;
(statearr_44577[(7)] = inst_44541);

return statearr_44577;
})();
var statearr_44578_46358 = state_44574__$1;
(statearr_44578_46358[(2)] = null);

(statearr_44578_46358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (4))){
var inst_44548 = (state_44574[(8)]);
var inst_44548__$1 = (state_44574[(2)]);
var inst_44551 = (inst_44548__$1 == null);
var state_44574__$1 = (function (){var statearr_44579 = state_44574;
(statearr_44579[(8)] = inst_44548__$1);

return statearr_44579;
})();
if(cljs.core.truth_(inst_44551)){
var statearr_44580_46359 = state_44574__$1;
(statearr_44580_46359[(1)] = (5));

} else {
var statearr_44581_46360 = state_44574__$1;
(statearr_44581_46360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (6))){
var inst_44548 = (state_44574[(8)]);
var inst_44541 = (state_44574[(7)]);
var inst_44556 = (state_44574[(9)]);
var inst_44556__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44541,inst_44548) : f.call(null,inst_44541,inst_44548));
var inst_44557 = cljs.core.reduced_QMARK_(inst_44556__$1);
var state_44574__$1 = (function (){var statearr_44582 = state_44574;
(statearr_44582[(9)] = inst_44556__$1);

return statearr_44582;
})();
if(inst_44557){
var statearr_44583_46361 = state_44574__$1;
(statearr_44583_46361[(1)] = (8));

} else {
var statearr_44584_46362 = state_44574__$1;
(statearr_44584_46362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (3))){
var inst_44572 = (state_44574[(2)]);
var state_44574__$1 = state_44574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44574__$1,inst_44572);
} else {
if((state_val_44575 === (2))){
var state_44574__$1 = state_44574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44574__$1,(4),ch);
} else {
if((state_val_44575 === (9))){
var inst_44556 = (state_44574[(9)]);
var inst_44541 = inst_44556;
var state_44574__$1 = (function (){var statearr_44606 = state_44574;
(statearr_44606[(7)] = inst_44541);

return statearr_44606;
})();
var statearr_44608_46363 = state_44574__$1;
(statearr_44608_46363[(2)] = null);

(statearr_44608_46363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (5))){
var inst_44541 = (state_44574[(7)]);
var state_44574__$1 = state_44574;
var statearr_44609_46364 = state_44574__$1;
(statearr_44609_46364[(2)] = inst_44541);

(statearr_44609_46364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (10))){
var inst_44563 = (state_44574[(2)]);
var state_44574__$1 = state_44574;
var statearr_44610_46365 = state_44574__$1;
(statearr_44610_46365[(2)] = inst_44563);

(statearr_44610_46365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44575 === (8))){
var inst_44556 = (state_44574[(9)]);
var inst_44559 = cljs.core.deref(inst_44556);
var state_44574__$1 = state_44574;
var statearr_44615_46367 = state_44574__$1;
(statearr_44615_46367[(2)] = inst_44559);

(statearr_44615_46367[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27033__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27033__auto____0 = (function (){
var statearr_44628 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44628[(0)] = cljs$core$async$reduce_$_state_machine__27033__auto__);

(statearr_44628[(1)] = (1));

return statearr_44628;
});
var cljs$core$async$reduce_$_state_machine__27033__auto____1 = (function (state_44574){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44574);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44640){var ex__27036__auto__ = e44640;
var statearr_44641_46368 = state_44574;
(statearr_44641_46368[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44574[(4)]))){
var statearr_44646_46369 = state_44574;
(statearr_44646_46369[(1)] = cljs.core.first((state_44574[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46370 = state_44574;
state_44574 = G__46370;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27033__auto__ = function(state_44574){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27033__auto____1.call(this,state_44574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27033__auto____0;
cljs$core$async$reduce_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27033__auto____1;
return cljs$core$async$reduce_$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44653 = f__27103__auto__();
(statearr_44653[(6)] = c__27102__auto__);

return statearr_44653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

return c__27102__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44675){
var state_val_44676 = (state_44675[(1)]);
if((state_val_44676 === (1))){
var inst_44668 = cljs.core.async.reduce(f__$1,init,ch);
var state_44675__$1 = state_44675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44675__$1,(2),inst_44668);
} else {
if((state_val_44676 === (2))){
var inst_44670 = (state_44675[(2)]);
var inst_44673 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44670) : f__$1.call(null,inst_44670));
var state_44675__$1 = state_44675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44675__$1,inst_44673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27033__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27033__auto____0 = (function (){
var statearr_44677 = [null,null,null,null,null,null,null];
(statearr_44677[(0)] = cljs$core$async$transduce_$_state_machine__27033__auto__);

(statearr_44677[(1)] = (1));

return statearr_44677;
});
var cljs$core$async$transduce_$_state_machine__27033__auto____1 = (function (state_44675){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44675);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44679){var ex__27036__auto__ = e44679;
var statearr_44680_46371 = state_44675;
(statearr_44680_46371[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44675[(4)]))){
var statearr_44681_46376 = state_44675;
(statearr_44681_46376[(1)] = cljs.core.first((state_44675[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46377 = state_44675;
state_44675 = G__46377;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27033__auto__ = function(state_44675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27033__auto____1.call(this,state_44675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27033__auto____0;
cljs$core$async$transduce_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27033__auto____1;
return cljs$core$async$transduce_$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44690 = f__27103__auto__();
(statearr_44690[(6)] = c__27102__auto__);

return statearr_44690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

return c__27102__auto__;
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
var G__44701 = arguments.length;
switch (G__44701) {
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
var c__27102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_44875){
var state_val_44880 = (state_44875[(1)]);
if((state_val_44880 === (7))){
var inst_44853 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
var statearr_44898_46379 = state_44875__$1;
(statearr_44898_46379[(2)] = inst_44853);

(statearr_44898_46379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (1))){
var inst_44733 = cljs.core.seq(coll);
var inst_44734 = inst_44733;
var state_44875__$1 = (function (){var statearr_44899 = state_44875;
(statearr_44899[(7)] = inst_44734);

return statearr_44899;
})();
var statearr_44900_46382 = state_44875__$1;
(statearr_44900_46382[(2)] = null);

(statearr_44900_46382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (4))){
var inst_44734 = (state_44875[(7)]);
var inst_44851 = cljs.core.first(inst_44734);
var state_44875__$1 = state_44875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44875__$1,(7),ch,inst_44851);
} else {
if((state_val_44880 === (13))){
var inst_44865 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
var statearr_44902_46388 = state_44875__$1;
(statearr_44902_46388[(2)] = inst_44865);

(statearr_44902_46388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (6))){
var inst_44856 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
if(cljs.core.truth_(inst_44856)){
var statearr_44903_46391 = state_44875__$1;
(statearr_44903_46391[(1)] = (8));

} else {
var statearr_44904_46393 = state_44875__$1;
(statearr_44904_46393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (3))){
var inst_44869 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44875__$1,inst_44869);
} else {
if((state_val_44880 === (12))){
var state_44875__$1 = state_44875;
var statearr_44905_46394 = state_44875__$1;
(statearr_44905_46394[(2)] = null);

(statearr_44905_46394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (2))){
var inst_44734 = (state_44875[(7)]);
var state_44875__$1 = state_44875;
if(cljs.core.truth_(inst_44734)){
var statearr_44906_46399 = state_44875__$1;
(statearr_44906_46399[(1)] = (4));

} else {
var statearr_44907_46400 = state_44875__$1;
(statearr_44907_46400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (11))){
var inst_44862 = cljs.core.async.close_BANG_(ch);
var state_44875__$1 = state_44875;
var statearr_44908_46405 = state_44875__$1;
(statearr_44908_46405[(2)] = inst_44862);

(statearr_44908_46405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (9))){
var state_44875__$1 = state_44875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44909_46410 = state_44875__$1;
(statearr_44909_46410[(1)] = (11));

} else {
var statearr_44910_46411 = state_44875__$1;
(statearr_44910_46411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (5))){
var inst_44734 = (state_44875[(7)]);
var state_44875__$1 = state_44875;
var statearr_44911_46416 = state_44875__$1;
(statearr_44911_46416[(2)] = inst_44734);

(statearr_44911_46416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (10))){
var inst_44867 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
var statearr_44912_46420 = state_44875__$1;
(statearr_44912_46420[(2)] = inst_44867);

(statearr_44912_46420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44880 === (8))){
var inst_44734 = (state_44875[(7)]);
var inst_44858 = cljs.core.next(inst_44734);
var inst_44734__$1 = inst_44858;
var state_44875__$1 = (function (){var statearr_44913 = state_44875;
(statearr_44913[(7)] = inst_44734__$1);

return statearr_44913;
})();
var statearr_44914_46425 = state_44875__$1;
(statearr_44914_46425[(2)] = null);

(statearr_44914_46425[(1)] = (2));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_44915 = [null,null,null,null,null,null,null,null];
(statearr_44915[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_44915[(1)] = (1));

return statearr_44915;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_44875){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_44875);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e44916){var ex__27036__auto__ = e44916;
var statearr_44918_46432 = state_44875;
(statearr_44918_46432[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_44875[(4)]))){
var statearr_44919_46436 = state_44875;
(statearr_44919_46436[(1)] = cljs.core.first((state_44875[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46437 = state_44875;
state_44875 = G__46437;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_44875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_44875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_44923 = f__27103__auto__();
(statearr_44923[(6)] = c__27102__auto__);

return statearr_44923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

return c__27102__auto__;
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
var G__44925 = arguments.length;
switch (G__44925) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46443 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46443(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46444 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46444(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46445 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46445(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46446 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46446(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44930 = (function (ch,cs,meta44931){
this.ch = ch;
this.cs = cs;
this.meta44931 = meta44931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44932,meta44931__$1){
var self__ = this;
var _44932__$1 = this;
return (new cljs.core.async.t_cljs$core$async44930(self__.ch,self__.cs,meta44931__$1));
}));

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44932){
var self__ = this;
var _44932__$1 = this;
return self__.meta44931;
}));

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44930.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44931","meta44931",741316210,null)], null);
}));

(cljs.core.async.t_cljs$core$async44930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44930");

(cljs.core.async.t_cljs$core$async44930.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44930.
 */
cljs.core.async.__GT_t_cljs$core$async44930 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44930(ch__$1,cs__$1,meta44931){
return (new cljs.core.async.t_cljs$core$async44930(ch__$1,cs__$1,meta44931));
});

}

return (new cljs.core.async.t_cljs$core$async44930(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27102__auto___46447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45091){
var state_val_45092 = (state_45091[(1)]);
if((state_val_45092 === (7))){
var inst_45087 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45098_46448 = state_45091__$1;
(statearr_45098_46448[(2)] = inst_45087);

(statearr_45098_46448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (20))){
var inst_44968 = (state_45091[(7)]);
var inst_44988 = cljs.core.first(inst_44968);
var inst_44989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44988,(0),null);
var inst_44990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44988,(1),null);
var state_45091__$1 = (function (){var statearr_45100 = state_45091;
(statearr_45100[(8)] = inst_44989);

return statearr_45100;
})();
if(cljs.core.truth_(inst_44990)){
var statearr_45101_46449 = state_45091__$1;
(statearr_45101_46449[(1)] = (22));

} else {
var statearr_45102_46450 = state_45091__$1;
(statearr_45102_46450[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (27))){
var inst_45027 = (state_45091[(9)]);
var inst_44936 = (state_45091[(10)]);
var inst_45019 = (state_45091[(11)]);
var inst_45021 = (state_45091[(12)]);
var inst_45027__$1 = cljs.core._nth(inst_45019,inst_45021);
var inst_45028 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45027__$1,inst_44936,done);
var state_45091__$1 = (function (){var statearr_45103 = state_45091;
(statearr_45103[(9)] = inst_45027__$1);

return statearr_45103;
})();
if(cljs.core.truth_(inst_45028)){
var statearr_45104_46451 = state_45091__$1;
(statearr_45104_46451[(1)] = (30));

} else {
var statearr_45105_46452 = state_45091__$1;
(statearr_45105_46452[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (1))){
var state_45091__$1 = state_45091;
var statearr_45106_46453 = state_45091__$1;
(statearr_45106_46453[(2)] = null);

(statearr_45106_46453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (24))){
var inst_44968 = (state_45091[(7)]);
var inst_44995 = (state_45091[(2)]);
var inst_44996 = cljs.core.next(inst_44968);
var inst_44945 = inst_44996;
var inst_44946 = null;
var inst_44947 = (0);
var inst_44948 = (0);
var state_45091__$1 = (function (){var statearr_45109 = state_45091;
(statearr_45109[(13)] = inst_44995);

(statearr_45109[(14)] = inst_44946);

(statearr_45109[(15)] = inst_44945);

(statearr_45109[(16)] = inst_44947);

(statearr_45109[(17)] = inst_44948);

return statearr_45109;
})();
var statearr_45111_46454 = state_45091__$1;
(statearr_45111_46454[(2)] = null);

(statearr_45111_46454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (39))){
var state_45091__$1 = state_45091;
var statearr_45122_46455 = state_45091__$1;
(statearr_45122_46455[(2)] = null);

(statearr_45122_46455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (4))){
var inst_44936 = (state_45091[(10)]);
var inst_44936__$1 = (state_45091[(2)]);
var inst_44937 = (inst_44936__$1 == null);
var state_45091__$1 = (function (){var statearr_45123 = state_45091;
(statearr_45123[(10)] = inst_44936__$1);

return statearr_45123;
})();
if(cljs.core.truth_(inst_44937)){
var statearr_45124_46456 = state_45091__$1;
(statearr_45124_46456[(1)] = (5));

} else {
var statearr_45125_46457 = state_45091__$1;
(statearr_45125_46457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (15))){
var inst_44946 = (state_45091[(14)]);
var inst_44945 = (state_45091[(15)]);
var inst_44947 = (state_45091[(16)]);
var inst_44948 = (state_45091[(17)]);
var inst_44963 = (state_45091[(2)]);
var inst_44964 = (inst_44948 + (1));
var tmp45114 = inst_44946;
var tmp45115 = inst_44945;
var tmp45116 = inst_44947;
var inst_44945__$1 = tmp45115;
var inst_44946__$1 = tmp45114;
var inst_44947__$1 = tmp45116;
var inst_44948__$1 = inst_44964;
var state_45091__$1 = (function (){var statearr_45126 = state_45091;
(statearr_45126[(14)] = inst_44946__$1);

(statearr_45126[(15)] = inst_44945__$1);

(statearr_45126[(16)] = inst_44947__$1);

(statearr_45126[(18)] = inst_44963);

(statearr_45126[(17)] = inst_44948__$1);

return statearr_45126;
})();
var statearr_45127_46458 = state_45091__$1;
(statearr_45127_46458[(2)] = null);

(statearr_45127_46458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (21))){
var inst_44999 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45131_46459 = state_45091__$1;
(statearr_45131_46459[(2)] = inst_44999);

(statearr_45131_46459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (31))){
var inst_45027 = (state_45091[(9)]);
var inst_45033 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45027);
var state_45091__$1 = state_45091;
var statearr_45132_46460 = state_45091__$1;
(statearr_45132_46460[(2)] = inst_45033);

(statearr_45132_46460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (32))){
var inst_45020 = (state_45091[(19)]);
var inst_45019 = (state_45091[(11)]);
var inst_45021 = (state_45091[(12)]);
var inst_45018 = (state_45091[(20)]);
var inst_45035 = (state_45091[(2)]);
var inst_45037 = (inst_45021 + (1));
var tmp45128 = inst_45020;
var tmp45129 = inst_45019;
var tmp45130 = inst_45018;
var inst_45018__$1 = tmp45130;
var inst_45019__$1 = tmp45129;
var inst_45020__$1 = tmp45128;
var inst_45021__$1 = inst_45037;
var state_45091__$1 = (function (){var statearr_45133 = state_45091;
(statearr_45133[(19)] = inst_45020__$1);

(statearr_45133[(11)] = inst_45019__$1);

(statearr_45133[(12)] = inst_45021__$1);

(statearr_45133[(21)] = inst_45035);

(statearr_45133[(20)] = inst_45018__$1);

return statearr_45133;
})();
var statearr_45137_46461 = state_45091__$1;
(statearr_45137_46461[(2)] = null);

(statearr_45137_46461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (40))){
var inst_45054 = (state_45091[(22)]);
var inst_45060 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45054);
var state_45091__$1 = state_45091;
var statearr_45138_46462 = state_45091__$1;
(statearr_45138_46462[(2)] = inst_45060);

(statearr_45138_46462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (33))){
var inst_45041 = (state_45091[(23)]);
var inst_45045 = cljs.core.chunked_seq_QMARK_(inst_45041);
var state_45091__$1 = state_45091;
if(inst_45045){
var statearr_45139_46463 = state_45091__$1;
(statearr_45139_46463[(1)] = (36));

} else {
var statearr_45140_46464 = state_45091__$1;
(statearr_45140_46464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (13))){
var inst_44957 = (state_45091[(24)]);
var inst_44960 = cljs.core.async.close_BANG_(inst_44957);
var state_45091__$1 = state_45091;
var statearr_45141_46465 = state_45091__$1;
(statearr_45141_46465[(2)] = inst_44960);

(statearr_45141_46465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (22))){
var inst_44989 = (state_45091[(8)]);
var inst_44992 = cljs.core.async.close_BANG_(inst_44989);
var state_45091__$1 = state_45091;
var statearr_45142_46466 = state_45091__$1;
(statearr_45142_46466[(2)] = inst_44992);

(statearr_45142_46466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (36))){
var inst_45041 = (state_45091[(23)]);
var inst_45047 = cljs.core.chunk_first(inst_45041);
var inst_45048 = cljs.core.chunk_rest(inst_45041);
var inst_45051 = cljs.core.count(inst_45047);
var inst_45018 = inst_45048;
var inst_45019 = inst_45047;
var inst_45020 = inst_45051;
var inst_45021 = (0);
var state_45091__$1 = (function (){var statearr_45143 = state_45091;
(statearr_45143[(19)] = inst_45020);

(statearr_45143[(11)] = inst_45019);

(statearr_45143[(12)] = inst_45021);

(statearr_45143[(20)] = inst_45018);

return statearr_45143;
})();
var statearr_45144_46469 = state_45091__$1;
(statearr_45144_46469[(2)] = null);

(statearr_45144_46469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (41))){
var inst_45041 = (state_45091[(23)]);
var inst_45062 = (state_45091[(2)]);
var inst_45064 = cljs.core.next(inst_45041);
var inst_45018 = inst_45064;
var inst_45019 = null;
var inst_45020 = (0);
var inst_45021 = (0);
var state_45091__$1 = (function (){var statearr_45145 = state_45091;
(statearr_45145[(19)] = inst_45020);

(statearr_45145[(11)] = inst_45019);

(statearr_45145[(12)] = inst_45021);

(statearr_45145[(25)] = inst_45062);

(statearr_45145[(20)] = inst_45018);

return statearr_45145;
})();
var statearr_45146_46475 = state_45091__$1;
(statearr_45146_46475[(2)] = null);

(statearr_45146_46475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (43))){
var state_45091__$1 = state_45091;
var statearr_45147_46476 = state_45091__$1;
(statearr_45147_46476[(2)] = null);

(statearr_45147_46476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (29))){
var inst_45075 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45148_46480 = state_45091__$1;
(statearr_45148_46480[(2)] = inst_45075);

(statearr_45148_46480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (44))){
var inst_45084 = (state_45091[(2)]);
var state_45091__$1 = (function (){var statearr_45151 = state_45091;
(statearr_45151[(26)] = inst_45084);

return statearr_45151;
})();
var statearr_45152_46481 = state_45091__$1;
(statearr_45152_46481[(2)] = null);

(statearr_45152_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (6))){
var inst_45010 = (state_45091[(27)]);
var inst_45009 = cljs.core.deref(cs);
var inst_45010__$1 = cljs.core.keys(inst_45009);
var inst_45011 = cljs.core.count(inst_45010__$1);
var inst_45012 = cljs.core.reset_BANG_(dctr,inst_45011);
var inst_45017 = cljs.core.seq(inst_45010__$1);
var inst_45018 = inst_45017;
var inst_45019 = null;
var inst_45020 = (0);
var inst_45021 = (0);
var state_45091__$1 = (function (){var statearr_45158 = state_45091;
(statearr_45158[(19)] = inst_45020);

(statearr_45158[(27)] = inst_45010__$1);

(statearr_45158[(28)] = inst_45012);

(statearr_45158[(11)] = inst_45019);

(statearr_45158[(12)] = inst_45021);

(statearr_45158[(20)] = inst_45018);

return statearr_45158;
})();
var statearr_45159_46483 = state_45091__$1;
(statearr_45159_46483[(2)] = null);

(statearr_45159_46483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (28))){
var inst_45041 = (state_45091[(23)]);
var inst_45018 = (state_45091[(20)]);
var inst_45041__$1 = cljs.core.seq(inst_45018);
var state_45091__$1 = (function (){var statearr_45161 = state_45091;
(statearr_45161[(23)] = inst_45041__$1);

return statearr_45161;
})();
if(inst_45041__$1){
var statearr_45162_46484 = state_45091__$1;
(statearr_45162_46484[(1)] = (33));

} else {
var statearr_45163_46485 = state_45091__$1;
(statearr_45163_46485[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (25))){
var inst_45020 = (state_45091[(19)]);
var inst_45021 = (state_45091[(12)]);
var inst_45024 = (inst_45021 < inst_45020);
var inst_45025 = inst_45024;
var state_45091__$1 = state_45091;
if(cljs.core.truth_(inst_45025)){
var statearr_45164_46487 = state_45091__$1;
(statearr_45164_46487[(1)] = (27));

} else {
var statearr_45165_46488 = state_45091__$1;
(statearr_45165_46488[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (34))){
var state_45091__$1 = state_45091;
var statearr_45166_46490 = state_45091__$1;
(statearr_45166_46490[(2)] = null);

(statearr_45166_46490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (17))){
var state_45091__$1 = state_45091;
var statearr_45167_46491 = state_45091__$1;
(statearr_45167_46491[(2)] = null);

(statearr_45167_46491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (3))){
var inst_45089 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45091__$1,inst_45089);
} else {
if((state_val_45092 === (12))){
var inst_45004 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45168_46492 = state_45091__$1;
(statearr_45168_46492[(2)] = inst_45004);

(statearr_45168_46492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (2))){
var state_45091__$1 = state_45091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45091__$1,(4),ch);
} else {
if((state_val_45092 === (23))){
var state_45091__$1 = state_45091;
var statearr_45171_46493 = state_45091__$1;
(statearr_45171_46493[(2)] = null);

(statearr_45171_46493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (35))){
var inst_45073 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45176_46494 = state_45091__$1;
(statearr_45176_46494[(2)] = inst_45073);

(statearr_45176_46494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (19))){
var inst_44968 = (state_45091[(7)]);
var inst_44976 = cljs.core.chunk_first(inst_44968);
var inst_44977 = cljs.core.chunk_rest(inst_44968);
var inst_44978 = cljs.core.count(inst_44976);
var inst_44945 = inst_44977;
var inst_44946 = inst_44976;
var inst_44947 = inst_44978;
var inst_44948 = (0);
var state_45091__$1 = (function (){var statearr_45179 = state_45091;
(statearr_45179[(14)] = inst_44946);

(statearr_45179[(15)] = inst_44945);

(statearr_45179[(16)] = inst_44947);

(statearr_45179[(17)] = inst_44948);

return statearr_45179;
})();
var statearr_45182_46495 = state_45091__$1;
(statearr_45182_46495[(2)] = null);

(statearr_45182_46495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (11))){
var inst_44968 = (state_45091[(7)]);
var inst_44945 = (state_45091[(15)]);
var inst_44968__$1 = cljs.core.seq(inst_44945);
var state_45091__$1 = (function (){var statearr_45183 = state_45091;
(statearr_45183[(7)] = inst_44968__$1);

return statearr_45183;
})();
if(inst_44968__$1){
var statearr_45184_46496 = state_45091__$1;
(statearr_45184_46496[(1)] = (16));

} else {
var statearr_45185_46497 = state_45091__$1;
(statearr_45185_46497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (9))){
var inst_45006 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45190_46498 = state_45091__$1;
(statearr_45190_46498[(2)] = inst_45006);

(statearr_45190_46498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (5))){
var inst_44943 = cljs.core.deref(cs);
var inst_44944 = cljs.core.seq(inst_44943);
var inst_44945 = inst_44944;
var inst_44946 = null;
var inst_44947 = (0);
var inst_44948 = (0);
var state_45091__$1 = (function (){var statearr_45191 = state_45091;
(statearr_45191[(14)] = inst_44946);

(statearr_45191[(15)] = inst_44945);

(statearr_45191[(16)] = inst_44947);

(statearr_45191[(17)] = inst_44948);

return statearr_45191;
})();
var statearr_45192_46499 = state_45091__$1;
(statearr_45192_46499[(2)] = null);

(statearr_45192_46499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (14))){
var state_45091__$1 = state_45091;
var statearr_45193_46500 = state_45091__$1;
(statearr_45193_46500[(2)] = null);

(statearr_45193_46500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (45))){
var inst_45081 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45194_46501 = state_45091__$1;
(statearr_45194_46501[(2)] = inst_45081);

(statearr_45194_46501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (26))){
var inst_45010 = (state_45091[(27)]);
var inst_45077 = (state_45091[(2)]);
var inst_45078 = cljs.core.seq(inst_45010);
var state_45091__$1 = (function (){var statearr_45195 = state_45091;
(statearr_45195[(29)] = inst_45077);

return statearr_45195;
})();
if(inst_45078){
var statearr_45198_46503 = state_45091__$1;
(statearr_45198_46503[(1)] = (42));

} else {
var statearr_45201_46507 = state_45091__$1;
(statearr_45201_46507[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (16))){
var inst_44968 = (state_45091[(7)]);
var inst_44972 = cljs.core.chunked_seq_QMARK_(inst_44968);
var state_45091__$1 = state_45091;
if(inst_44972){
var statearr_45202_46508 = state_45091__$1;
(statearr_45202_46508[(1)] = (19));

} else {
var statearr_45203_46509 = state_45091__$1;
(statearr_45203_46509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (38))){
var inst_45068 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45204_46510 = state_45091__$1;
(statearr_45204_46510[(2)] = inst_45068);

(statearr_45204_46510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (30))){
var state_45091__$1 = state_45091;
var statearr_45206_46511 = state_45091__$1;
(statearr_45206_46511[(2)] = null);

(statearr_45206_46511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (10))){
var inst_44946 = (state_45091[(14)]);
var inst_44948 = (state_45091[(17)]);
var inst_44956 = cljs.core._nth(inst_44946,inst_44948);
var inst_44957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44956,(0),null);
var inst_44958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44956,(1),null);
var state_45091__$1 = (function (){var statearr_45210 = state_45091;
(statearr_45210[(24)] = inst_44957);

return statearr_45210;
})();
if(cljs.core.truth_(inst_44958)){
var statearr_45211_46516 = state_45091__$1;
(statearr_45211_46516[(1)] = (13));

} else {
var statearr_45212_46518 = state_45091__$1;
(statearr_45212_46518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (18))){
var inst_45002 = (state_45091[(2)]);
var state_45091__$1 = state_45091;
var statearr_45214_46519 = state_45091__$1;
(statearr_45214_46519[(2)] = inst_45002);

(statearr_45214_46519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (42))){
var state_45091__$1 = state_45091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45091__$1,(45),dchan);
} else {
if((state_val_45092 === (37))){
var inst_44936 = (state_45091[(10)]);
var inst_45041 = (state_45091[(23)]);
var inst_45054 = (state_45091[(22)]);
var inst_45054__$1 = cljs.core.first(inst_45041);
var inst_45055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45054__$1,inst_44936,done);
var state_45091__$1 = (function (){var statearr_45215 = state_45091;
(statearr_45215[(22)] = inst_45054__$1);

return statearr_45215;
})();
if(cljs.core.truth_(inst_45055)){
var statearr_45216_46522 = state_45091__$1;
(statearr_45216_46522[(1)] = (39));

} else {
var statearr_45217_46523 = state_45091__$1;
(statearr_45217_46523[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45092 === (8))){
var inst_44947 = (state_45091[(16)]);
var inst_44948 = (state_45091[(17)]);
var inst_44950 = (inst_44948 < inst_44947);
var inst_44951 = inst_44950;
var state_45091__$1 = state_45091;
if(cljs.core.truth_(inst_44951)){
var statearr_45222_46528 = state_45091__$1;
(statearr_45222_46528[(1)] = (10));

} else {
var statearr_45223_46532 = state_45091__$1;
(statearr_45223_46532[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27033__auto__ = null;
var cljs$core$async$mult_$_state_machine__27033__auto____0 = (function (){
var statearr_45226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45226[(0)] = cljs$core$async$mult_$_state_machine__27033__auto__);

(statearr_45226[(1)] = (1));

return statearr_45226;
});
var cljs$core$async$mult_$_state_machine__27033__auto____1 = (function (state_45091){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45091);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45227){var ex__27036__auto__ = e45227;
var statearr_45228_46539 = state_45091;
(statearr_45228_46539[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45091[(4)]))){
var statearr_45229_46541 = state_45091;
(statearr_45229_46541[(1)] = cljs.core.first((state_45091[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46542 = state_45091;
state_45091 = G__46542;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27033__auto__ = function(state_45091){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27033__auto____1.call(this,state_45091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27033__auto____0;
cljs$core$async$mult_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27033__auto____1;
return cljs$core$async$mult_$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45234 = f__27103__auto__();
(statearr_45234[(6)] = c__27102__auto___46447);

return statearr_45234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var G__45236 = arguments.length;
switch (G__45236) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46548 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_46548(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46549 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_46549(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46551 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46551(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46558 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_46558(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46559 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46559(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46560 = arguments.length;
var i__4865__auto___46561 = (0);
while(true){
if((i__4865__auto___46561 < len__4864__auto___46560)){
args__4870__auto__.push((arguments[i__4865__auto___46561]));

var G__46562 = (i__4865__auto___46561 + (1));
i__4865__auto___46561 = G__46562;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45249){
var map__45250 = p__45249;
var map__45250__$1 = cljs.core.__destructure_map(map__45250);
var opts = map__45250__$1;
var statearr_45251_46563 = state;
(statearr_45251_46563[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45252_46564 = state;
(statearr_45252_46564[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45253_46565 = state;
(statearr_45253_46565[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45245){
var G__45246 = cljs.core.first(seq45245);
var seq45245__$1 = cljs.core.next(seq45245);
var G__45247 = cljs.core.first(seq45245__$1);
var seq45245__$2 = cljs.core.next(seq45245__$1);
var G__45248 = cljs.core.first(seq45245__$2);
var seq45245__$3 = cljs.core.next(seq45245__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45246,G__45247,G__45248,seq45245__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45263 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45264){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45264 = meta45264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45265,meta45264__$1){
var self__ = this;
var _45265__$1 = this;
return (new cljs.core.async.t_cljs$core$async45263(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45264__$1));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45265){
var self__ = this;
var _45265__$1 = this;
return self__.meta45264;
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45264","meta45264",-47071736,null)], null);
}));

(cljs.core.async.t_cljs$core$async45263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45263");

(cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45263.
 */
cljs.core.async.__GT_t_cljs$core$async45263 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45264){
return (new cljs.core.async.t_cljs$core$async45263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45264));
});

}

return (new cljs.core.async.t_cljs$core$async45263(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27102__auto___46572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45352){
var state_val_45353 = (state_45352[(1)]);
if((state_val_45353 === (7))){
var inst_45312 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
if(cljs.core.truth_(inst_45312)){
var statearr_45354_46573 = state_45352__$1;
(statearr_45354_46573[(1)] = (8));

} else {
var statearr_45355_46574 = state_45352__$1;
(statearr_45355_46574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (20))){
var inst_45305 = (state_45352[(7)]);
var state_45352__$1 = state_45352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45352__$1,(23),out,inst_45305);
} else {
if((state_val_45353 === (1))){
var inst_45285 = calc_state();
var inst_45287 = cljs.core.__destructure_map(inst_45285);
var inst_45288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45287,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45287,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45287,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45293 = inst_45285;
var state_45352__$1 = (function (){var statearr_45360 = state_45352;
(statearr_45360[(8)] = inst_45293);

(statearr_45360[(9)] = inst_45288);

(statearr_45360[(10)] = inst_45289);

(statearr_45360[(11)] = inst_45291);

return statearr_45360;
})();
var statearr_45361_46575 = state_45352__$1;
(statearr_45361_46575[(2)] = null);

(statearr_45361_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (24))){
var inst_45296 = (state_45352[(12)]);
var inst_45293 = inst_45296;
var state_45352__$1 = (function (){var statearr_45362 = state_45352;
(statearr_45362[(8)] = inst_45293);

return statearr_45362;
})();
var statearr_45363_46576 = state_45352__$1;
(statearr_45363_46576[(2)] = null);

(statearr_45363_46576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (4))){
var inst_45305 = (state_45352[(7)]);
var inst_45307 = (state_45352[(13)]);
var inst_45304 = (state_45352[(2)]);
var inst_45305__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45304,(0),null);
var inst_45306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45304,(1),null);
var inst_45307__$1 = (inst_45305__$1 == null);
var state_45352__$1 = (function (){var statearr_45368 = state_45352;
(statearr_45368[(14)] = inst_45306);

(statearr_45368[(7)] = inst_45305__$1);

(statearr_45368[(13)] = inst_45307__$1);

return statearr_45368;
})();
if(cljs.core.truth_(inst_45307__$1)){
var statearr_45369_46577 = state_45352__$1;
(statearr_45369_46577[(1)] = (5));

} else {
var statearr_45370_46578 = state_45352__$1;
(statearr_45370_46578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (15))){
var inst_45297 = (state_45352[(15)]);
var inst_45326 = (state_45352[(16)]);
var inst_45326__$1 = cljs.core.empty_QMARK_(inst_45297);
var state_45352__$1 = (function (){var statearr_45373 = state_45352;
(statearr_45373[(16)] = inst_45326__$1);

return statearr_45373;
})();
if(inst_45326__$1){
var statearr_45374_46579 = state_45352__$1;
(statearr_45374_46579[(1)] = (17));

} else {
var statearr_45375_46580 = state_45352__$1;
(statearr_45375_46580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (21))){
var inst_45296 = (state_45352[(12)]);
var inst_45293 = inst_45296;
var state_45352__$1 = (function (){var statearr_45376 = state_45352;
(statearr_45376[(8)] = inst_45293);

return statearr_45376;
})();
var statearr_45378_46581 = state_45352__$1;
(statearr_45378_46581[(2)] = null);

(statearr_45378_46581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (13))){
var inst_45319 = (state_45352[(2)]);
var inst_45320 = calc_state();
var inst_45293 = inst_45320;
var state_45352__$1 = (function (){var statearr_45382 = state_45352;
(statearr_45382[(8)] = inst_45293);

(statearr_45382[(17)] = inst_45319);

return statearr_45382;
})();
var statearr_45383_46582 = state_45352__$1;
(statearr_45383_46582[(2)] = null);

(statearr_45383_46582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (22))){
var inst_45346 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
var statearr_45384_46583 = state_45352__$1;
(statearr_45384_46583[(2)] = inst_45346);

(statearr_45384_46583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (6))){
var inst_45306 = (state_45352[(14)]);
var inst_45310 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45306,change);
var state_45352__$1 = state_45352;
var statearr_45389_46584 = state_45352__$1;
(statearr_45389_46584[(2)] = inst_45310);

(statearr_45389_46584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (25))){
var state_45352__$1 = state_45352;
var statearr_45393_46585 = state_45352__$1;
(statearr_45393_46585[(2)] = null);

(statearr_45393_46585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (17))){
var inst_45306 = (state_45352[(14)]);
var inst_45298 = (state_45352[(18)]);
var inst_45328 = (inst_45298.cljs$core$IFn$_invoke$arity$1 ? inst_45298.cljs$core$IFn$_invoke$arity$1(inst_45306) : inst_45298.call(null,inst_45306));
var inst_45329 = cljs.core.not(inst_45328);
var state_45352__$1 = state_45352;
var statearr_45394_46586 = state_45352__$1;
(statearr_45394_46586[(2)] = inst_45329);

(statearr_45394_46586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (3))){
var inst_45350 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45352__$1,inst_45350);
} else {
if((state_val_45353 === (12))){
var state_45352__$1 = state_45352;
var statearr_45398_46587 = state_45352__$1;
(statearr_45398_46587[(2)] = null);

(statearr_45398_46587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (2))){
var inst_45293 = (state_45352[(8)]);
var inst_45296 = (state_45352[(12)]);
var inst_45296__$1 = cljs.core.__destructure_map(inst_45293);
var inst_45297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45352__$1 = (function (){var statearr_45402 = state_45352;
(statearr_45402[(15)] = inst_45297);

(statearr_45402[(12)] = inst_45296__$1);

(statearr_45402[(18)] = inst_45298);

return statearr_45402;
})();
return cljs.core.async.ioc_alts_BANG_(state_45352__$1,(4),inst_45299);
} else {
if((state_val_45353 === (23))){
var inst_45337 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
if(cljs.core.truth_(inst_45337)){
var statearr_45403_46588 = state_45352__$1;
(statearr_45403_46588[(1)] = (24));

} else {
var statearr_45404_46589 = state_45352__$1;
(statearr_45404_46589[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (19))){
var inst_45332 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
var statearr_45408_46590 = state_45352__$1;
(statearr_45408_46590[(2)] = inst_45332);

(statearr_45408_46590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (11))){
var inst_45306 = (state_45352[(14)]);
var inst_45316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45306);
var state_45352__$1 = state_45352;
var statearr_45409_46591 = state_45352__$1;
(statearr_45409_46591[(2)] = inst_45316);

(statearr_45409_46591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (9))){
var inst_45323 = (state_45352[(19)]);
var inst_45306 = (state_45352[(14)]);
var inst_45297 = (state_45352[(15)]);
var inst_45323__$1 = (inst_45297.cljs$core$IFn$_invoke$arity$1 ? inst_45297.cljs$core$IFn$_invoke$arity$1(inst_45306) : inst_45297.call(null,inst_45306));
var state_45352__$1 = (function (){var statearr_45410 = state_45352;
(statearr_45410[(19)] = inst_45323__$1);

return statearr_45410;
})();
if(cljs.core.truth_(inst_45323__$1)){
var statearr_45411_46592 = state_45352__$1;
(statearr_45411_46592[(1)] = (14));

} else {
var statearr_45412_46593 = state_45352__$1;
(statearr_45412_46593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (5))){
var inst_45307 = (state_45352[(13)]);
var state_45352__$1 = state_45352;
var statearr_45413_46594 = state_45352__$1;
(statearr_45413_46594[(2)] = inst_45307);

(statearr_45413_46594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (14))){
var inst_45323 = (state_45352[(19)]);
var state_45352__$1 = state_45352;
var statearr_45414_46595 = state_45352__$1;
(statearr_45414_46595[(2)] = inst_45323);

(statearr_45414_46595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (26))){
var inst_45342 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
var statearr_45416_46596 = state_45352__$1;
(statearr_45416_46596[(2)] = inst_45342);

(statearr_45416_46596[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (16))){
var inst_45334 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
if(cljs.core.truth_(inst_45334)){
var statearr_45418_46597 = state_45352__$1;
(statearr_45418_46597[(1)] = (20));

} else {
var statearr_45419_46598 = state_45352__$1;
(statearr_45419_46598[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (10))){
var inst_45348 = (state_45352[(2)]);
var state_45352__$1 = state_45352;
var statearr_45420_46599 = state_45352__$1;
(statearr_45420_46599[(2)] = inst_45348);

(statearr_45420_46599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (18))){
var inst_45326 = (state_45352[(16)]);
var state_45352__$1 = state_45352;
var statearr_45421_46600 = state_45352__$1;
(statearr_45421_46600[(2)] = inst_45326);

(statearr_45421_46600[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45353 === (8))){
var inst_45305 = (state_45352[(7)]);
var inst_45314 = (inst_45305 == null);
var state_45352__$1 = state_45352;
if(cljs.core.truth_(inst_45314)){
var statearr_45422_46601 = state_45352__$1;
(statearr_45422_46601[(1)] = (11));

} else {
var statearr_45423_46602 = state_45352__$1;
(statearr_45423_46602[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27033__auto__ = null;
var cljs$core$async$mix_$_state_machine__27033__auto____0 = (function (){
var statearr_45424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45424[(0)] = cljs$core$async$mix_$_state_machine__27033__auto__);

(statearr_45424[(1)] = (1));

return statearr_45424;
});
var cljs$core$async$mix_$_state_machine__27033__auto____1 = (function (state_45352){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45352);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45425){var ex__27036__auto__ = e45425;
var statearr_45426_46603 = state_45352;
(statearr_45426_46603[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45352[(4)]))){
var statearr_45427_46604 = state_45352;
(statearr_45427_46604[(1)] = cljs.core.first((state_45352[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46605 = state_45352;
state_45352 = G__46605;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27033__auto__ = function(state_45352){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27033__auto____1.call(this,state_45352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27033__auto____0;
cljs$core$async$mix_$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27033__auto____1;
return cljs$core$async$mix_$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45428 = f__27103__auto__();
(statearr_45428[(6)] = c__27102__auto___46572);

return statearr_45428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_46606 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_46606(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46608 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_46608(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46609 = (function() {
var G__46610 = null;
var G__46610__1 = (function (p){
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
var G__46610__2 = (function (p,v){
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
G__46610 = function(p,v){
switch(arguments.length){
case 1:
return G__46610__1.call(this,p);
case 2:
return G__46610__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46610.cljs$core$IFn$_invoke$arity$1 = G__46610__1;
G__46610.cljs$core$IFn$_invoke$arity$2 = G__46610__2;
return G__46610;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45442 = arguments.length;
switch (G__45442) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46609(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46609(p,v);
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
var G__45445 = arguments.length;
switch (G__45445) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45443_SHARP_){
if(cljs.core.truth_((p1__45443_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45443_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45443_SHARP_.call(null,topic)))){
return p1__45443_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45443_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45446 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45447){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45447 = meta45447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45448,meta45447__$1){
var self__ = this;
var _45448__$1 = this;
return (new cljs.core.async.t_cljs$core$async45446(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45447__$1));
}));

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45448){
var self__ = this;
var _45448__$1 = this;
return self__.meta45447;
}));

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45447","meta45447",662090743,null)], null);
}));

(cljs.core.async.t_cljs$core$async45446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45446");

(cljs.core.async.t_cljs$core$async45446.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45446.
 */
cljs.core.async.__GT_t_cljs$core$async45446 = (function cljs$core$async$__GT_t_cljs$core$async45446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45447){
return (new cljs.core.async.t_cljs$core$async45446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45447));
});

}

return (new cljs.core.async.t_cljs$core$async45446(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27102__auto___46615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45520){
var state_val_45521 = (state_45520[(1)]);
if((state_val_45521 === (7))){
var inst_45516 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45524_46616 = state_45520__$1;
(statearr_45524_46616[(2)] = inst_45516);

(statearr_45524_46616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (20))){
var state_45520__$1 = state_45520;
var statearr_45525_46617 = state_45520__$1;
(statearr_45525_46617[(2)] = null);

(statearr_45525_46617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (1))){
var state_45520__$1 = state_45520;
var statearr_45526_46618 = state_45520__$1;
(statearr_45526_46618[(2)] = null);

(statearr_45526_46618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (24))){
var inst_45499 = (state_45520[(7)]);
var inst_45508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45499);
var state_45520__$1 = state_45520;
var statearr_45527_46619 = state_45520__$1;
(statearr_45527_46619[(2)] = inst_45508);

(statearr_45527_46619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (4))){
var inst_45451 = (state_45520[(8)]);
var inst_45451__$1 = (state_45520[(2)]);
var inst_45452 = (inst_45451__$1 == null);
var state_45520__$1 = (function (){var statearr_45528 = state_45520;
(statearr_45528[(8)] = inst_45451__$1);

return statearr_45528;
})();
if(cljs.core.truth_(inst_45452)){
var statearr_45529_46620 = state_45520__$1;
(statearr_45529_46620[(1)] = (5));

} else {
var statearr_45530_46621 = state_45520__$1;
(statearr_45530_46621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (15))){
var inst_45493 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45531_46622 = state_45520__$1;
(statearr_45531_46622[(2)] = inst_45493);

(statearr_45531_46622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (21))){
var inst_45513 = (state_45520[(2)]);
var state_45520__$1 = (function (){var statearr_45532 = state_45520;
(statearr_45532[(9)] = inst_45513);

return statearr_45532;
})();
var statearr_45533_46623 = state_45520__$1;
(statearr_45533_46623[(2)] = null);

(statearr_45533_46623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (13))){
var inst_45475 = (state_45520[(10)]);
var inst_45477 = cljs.core.chunked_seq_QMARK_(inst_45475);
var state_45520__$1 = state_45520;
if(inst_45477){
var statearr_45536_46624 = state_45520__$1;
(statearr_45536_46624[(1)] = (16));

} else {
var statearr_45537_46625 = state_45520__$1;
(statearr_45537_46625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (22))){
var inst_45505 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
if(cljs.core.truth_(inst_45505)){
var statearr_45539_46626 = state_45520__$1;
(statearr_45539_46626[(1)] = (23));

} else {
var statearr_45540_46627 = state_45520__$1;
(statearr_45540_46627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (6))){
var inst_45451 = (state_45520[(8)]);
var inst_45499 = (state_45520[(7)]);
var inst_45501 = (state_45520[(11)]);
var inst_45499__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45451) : topic_fn.call(null,inst_45451));
var inst_45500 = cljs.core.deref(mults);
var inst_45501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45500,inst_45499__$1);
var state_45520__$1 = (function (){var statearr_45542 = state_45520;
(statearr_45542[(7)] = inst_45499__$1);

(statearr_45542[(11)] = inst_45501__$1);

return statearr_45542;
})();
if(cljs.core.truth_(inst_45501__$1)){
var statearr_45543_46628 = state_45520__$1;
(statearr_45543_46628[(1)] = (19));

} else {
var statearr_45544_46629 = state_45520__$1;
(statearr_45544_46629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (25))){
var inst_45510 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45545_46630 = state_45520__$1;
(statearr_45545_46630[(2)] = inst_45510);

(statearr_45545_46630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (17))){
var inst_45475 = (state_45520[(10)]);
var inst_45484 = cljs.core.first(inst_45475);
var inst_45485 = cljs.core.async.muxch_STAR_(inst_45484);
var inst_45486 = cljs.core.async.close_BANG_(inst_45485);
var inst_45487 = cljs.core.next(inst_45475);
var inst_45461 = inst_45487;
var inst_45462 = null;
var inst_45463 = (0);
var inst_45464 = (0);
var state_45520__$1 = (function (){var statearr_45546 = state_45520;
(statearr_45546[(12)] = inst_45486);

(statearr_45546[(13)] = inst_45463);

(statearr_45546[(14)] = inst_45462);

(statearr_45546[(15)] = inst_45461);

(statearr_45546[(16)] = inst_45464);

return statearr_45546;
})();
var statearr_45547_46631 = state_45520__$1;
(statearr_45547_46631[(2)] = null);

(statearr_45547_46631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (3))){
var inst_45518 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45520__$1,inst_45518);
} else {
if((state_val_45521 === (12))){
var inst_45495 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45548_46632 = state_45520__$1;
(statearr_45548_46632[(2)] = inst_45495);

(statearr_45548_46632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (2))){
var state_45520__$1 = state_45520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45520__$1,(4),ch);
} else {
if((state_val_45521 === (23))){
var state_45520__$1 = state_45520;
var statearr_45549_46633 = state_45520__$1;
(statearr_45549_46633[(2)] = null);

(statearr_45549_46633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (19))){
var inst_45451 = (state_45520[(8)]);
var inst_45501 = (state_45520[(11)]);
var inst_45503 = cljs.core.async.muxch_STAR_(inst_45501);
var state_45520__$1 = state_45520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45520__$1,(22),inst_45503,inst_45451);
} else {
if((state_val_45521 === (11))){
var inst_45475 = (state_45520[(10)]);
var inst_45461 = (state_45520[(15)]);
var inst_45475__$1 = cljs.core.seq(inst_45461);
var state_45520__$1 = (function (){var statearr_45551 = state_45520;
(statearr_45551[(10)] = inst_45475__$1);

return statearr_45551;
})();
if(inst_45475__$1){
var statearr_45552_46634 = state_45520__$1;
(statearr_45552_46634[(1)] = (13));

} else {
var statearr_45553_46635 = state_45520__$1;
(statearr_45553_46635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (9))){
var inst_45497 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45554_46636 = state_45520__$1;
(statearr_45554_46636[(2)] = inst_45497);

(statearr_45554_46636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (5))){
var inst_45458 = cljs.core.deref(mults);
var inst_45459 = cljs.core.vals(inst_45458);
var inst_45460 = cljs.core.seq(inst_45459);
var inst_45461 = inst_45460;
var inst_45462 = null;
var inst_45463 = (0);
var inst_45464 = (0);
var state_45520__$1 = (function (){var statearr_45555 = state_45520;
(statearr_45555[(13)] = inst_45463);

(statearr_45555[(14)] = inst_45462);

(statearr_45555[(15)] = inst_45461);

(statearr_45555[(16)] = inst_45464);

return statearr_45555;
})();
var statearr_45556_46637 = state_45520__$1;
(statearr_45556_46637[(2)] = null);

(statearr_45556_46637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (14))){
var state_45520__$1 = state_45520;
var statearr_45560_46638 = state_45520__$1;
(statearr_45560_46638[(2)] = null);

(statearr_45560_46638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (16))){
var inst_45475 = (state_45520[(10)]);
var inst_45479 = cljs.core.chunk_first(inst_45475);
var inst_45480 = cljs.core.chunk_rest(inst_45475);
var inst_45481 = cljs.core.count(inst_45479);
var inst_45461 = inst_45480;
var inst_45462 = inst_45479;
var inst_45463 = inst_45481;
var inst_45464 = (0);
var state_45520__$1 = (function (){var statearr_45561 = state_45520;
(statearr_45561[(13)] = inst_45463);

(statearr_45561[(14)] = inst_45462);

(statearr_45561[(15)] = inst_45461);

(statearr_45561[(16)] = inst_45464);

return statearr_45561;
})();
var statearr_45562_46639 = state_45520__$1;
(statearr_45562_46639[(2)] = null);

(statearr_45562_46639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (10))){
var inst_45463 = (state_45520[(13)]);
var inst_45462 = (state_45520[(14)]);
var inst_45461 = (state_45520[(15)]);
var inst_45464 = (state_45520[(16)]);
var inst_45469 = cljs.core._nth(inst_45462,inst_45464);
var inst_45470 = cljs.core.async.muxch_STAR_(inst_45469);
var inst_45471 = cljs.core.async.close_BANG_(inst_45470);
var inst_45472 = (inst_45464 + (1));
var tmp45557 = inst_45463;
var tmp45558 = inst_45462;
var tmp45559 = inst_45461;
var inst_45461__$1 = tmp45559;
var inst_45462__$1 = tmp45558;
var inst_45463__$1 = tmp45557;
var inst_45464__$1 = inst_45472;
var state_45520__$1 = (function (){var statearr_45565 = state_45520;
(statearr_45565[(13)] = inst_45463__$1);

(statearr_45565[(17)] = inst_45471);

(statearr_45565[(14)] = inst_45462__$1);

(statearr_45565[(15)] = inst_45461__$1);

(statearr_45565[(16)] = inst_45464__$1);

return statearr_45565;
})();
var statearr_45567_46640 = state_45520__$1;
(statearr_45567_46640[(2)] = null);

(statearr_45567_46640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (18))){
var inst_45490 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
var statearr_45568_46641 = state_45520__$1;
(statearr_45568_46641[(2)] = inst_45490);

(statearr_45568_46641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45521 === (8))){
var inst_45463 = (state_45520[(13)]);
var inst_45464 = (state_45520[(16)]);
var inst_45466 = (inst_45464 < inst_45463);
var inst_45467 = inst_45466;
var state_45520__$1 = state_45520;
if(cljs.core.truth_(inst_45467)){
var statearr_45569_46642 = state_45520__$1;
(statearr_45569_46642[(1)] = (10));

} else {
var statearr_45570_46643 = state_45520__$1;
(statearr_45570_46643[(1)] = (11));

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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_45571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45571[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_45571[(1)] = (1));

return statearr_45571;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_45520){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45520);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45573){var ex__27036__auto__ = e45573;
var statearr_45574_46644 = state_45520;
(statearr_45574_46644[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45520[(4)]))){
var statearr_45575_46645 = state_45520;
(statearr_45575_46645[(1)] = cljs.core.first((state_45520[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46646 = state_45520;
state_45520 = G__46646;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_45520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_45520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45576 = f__27103__auto__();
(statearr_45576[(6)] = c__27102__auto___46615);

return statearr_45576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var G__45583 = arguments.length;
switch (G__45583) {
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
var G__45590 = arguments.length;
switch (G__45590) {
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
var G__45598 = arguments.length;
switch (G__45598) {
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
var c__27102__auto___46652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45655){
var state_val_45656 = (state_45655[(1)]);
if((state_val_45656 === (7))){
var state_45655__$1 = state_45655;
var statearr_45657_46653 = state_45655__$1;
(statearr_45657_46653[(2)] = null);

(statearr_45657_46653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (1))){
var state_45655__$1 = state_45655;
var statearr_45658_46654 = state_45655__$1;
(statearr_45658_46654[(2)] = null);

(statearr_45658_46654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (4))){
var inst_45603 = (state_45655[(7)]);
var inst_45604 = (state_45655[(8)]);
var inst_45606 = (inst_45604 < inst_45603);
var state_45655__$1 = state_45655;
if(cljs.core.truth_(inst_45606)){
var statearr_45659_46658 = state_45655__$1;
(statearr_45659_46658[(1)] = (6));

} else {
var statearr_45660_46659 = state_45655__$1;
(statearr_45660_46659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (15))){
var inst_45637 = (state_45655[(9)]);
var inst_45642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45637);
var state_45655__$1 = state_45655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45655__$1,(17),out,inst_45642);
} else {
if((state_val_45656 === (13))){
var inst_45637 = (state_45655[(9)]);
var inst_45637__$1 = (state_45655[(2)]);
var inst_45638 = cljs.core.some(cljs.core.nil_QMARK_,inst_45637__$1);
var state_45655__$1 = (function (){var statearr_45661 = state_45655;
(statearr_45661[(9)] = inst_45637__$1);

return statearr_45661;
})();
if(cljs.core.truth_(inst_45638)){
var statearr_45662_46660 = state_45655__$1;
(statearr_45662_46660[(1)] = (14));

} else {
var statearr_45663_46661 = state_45655__$1;
(statearr_45663_46661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (6))){
var state_45655__$1 = state_45655;
var statearr_45664_46663 = state_45655__$1;
(statearr_45664_46663[(2)] = null);

(statearr_45664_46663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (17))){
var inst_45644 = (state_45655[(2)]);
var state_45655__$1 = (function (){var statearr_45670 = state_45655;
(statearr_45670[(10)] = inst_45644);

return statearr_45670;
})();
var statearr_45671_46664 = state_45655__$1;
(statearr_45671_46664[(2)] = null);

(statearr_45671_46664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (3))){
var inst_45649 = (state_45655[(2)]);
var state_45655__$1 = state_45655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45655__$1,inst_45649);
} else {
if((state_val_45656 === (12))){
var _ = (function (){var statearr_45672 = state_45655;
(statearr_45672[(4)] = cljs.core.rest((state_45655[(4)])));

return statearr_45672;
})();
var state_45655__$1 = state_45655;
var ex45669 = (state_45655__$1[(2)]);
var statearr_45673_46665 = state_45655__$1;
(statearr_45673_46665[(5)] = ex45669);


if((ex45669 instanceof Object)){
var statearr_45674_46666 = state_45655__$1;
(statearr_45674_46666[(1)] = (11));

(statearr_45674_46666[(5)] = null);

} else {
throw ex45669;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (2))){
var inst_45602 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45603 = cnt;
var inst_45604 = (0);
var state_45655__$1 = (function (){var statearr_45677 = state_45655;
(statearr_45677[(11)] = inst_45602);

(statearr_45677[(7)] = inst_45603);

(statearr_45677[(8)] = inst_45604);

return statearr_45677;
})();
var statearr_45678_46667 = state_45655__$1;
(statearr_45678_46667[(2)] = null);

(statearr_45678_46667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (11))){
var inst_45615 = (state_45655[(2)]);
var inst_45616 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45655__$1 = (function (){var statearr_45679 = state_45655;
(statearr_45679[(12)] = inst_45615);

return statearr_45679;
})();
var statearr_45680_46668 = state_45655__$1;
(statearr_45680_46668[(2)] = inst_45616);

(statearr_45680_46668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (9))){
var inst_45604 = (state_45655[(8)]);
var _ = (function (){var statearr_45681 = state_45655;
(statearr_45681[(4)] = cljs.core.cons((12),(state_45655[(4)])));

return statearr_45681;
})();
var inst_45622 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45604) : chs__$1.call(null,inst_45604));
var inst_45624 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45604) : done.call(null,inst_45604));
var inst_45625 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45622,inst_45624);
var ___$1 = (function (){var statearr_45683 = state_45655;
(statearr_45683[(4)] = cljs.core.rest((state_45655[(4)])));

return statearr_45683;
})();
var state_45655__$1 = state_45655;
var statearr_45684_46669 = state_45655__$1;
(statearr_45684_46669[(2)] = inst_45625);

(statearr_45684_46669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (5))){
var inst_45635 = (state_45655[(2)]);
var state_45655__$1 = (function (){var statearr_45685 = state_45655;
(statearr_45685[(13)] = inst_45635);

return statearr_45685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45655__$1,(13),dchan);
} else {
if((state_val_45656 === (14))){
var inst_45640 = cljs.core.async.close_BANG_(out);
var state_45655__$1 = state_45655;
var statearr_45689_46670 = state_45655__$1;
(statearr_45689_46670[(2)] = inst_45640);

(statearr_45689_46670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (16))){
var inst_45647 = (state_45655[(2)]);
var state_45655__$1 = state_45655;
var statearr_45690_46671 = state_45655__$1;
(statearr_45690_46671[(2)] = inst_45647);

(statearr_45690_46671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (10))){
var inst_45604 = (state_45655[(8)]);
var inst_45628 = (state_45655[(2)]);
var inst_45629 = (inst_45604 + (1));
var inst_45604__$1 = inst_45629;
var state_45655__$1 = (function (){var statearr_45691 = state_45655;
(statearr_45691[(14)] = inst_45628);

(statearr_45691[(8)] = inst_45604__$1);

return statearr_45691;
})();
var statearr_45692_46672 = state_45655__$1;
(statearr_45692_46672[(2)] = null);

(statearr_45692_46672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (8))){
var inst_45633 = (state_45655[(2)]);
var state_45655__$1 = state_45655;
var statearr_45693_46673 = state_45655__$1;
(statearr_45693_46673[(2)] = inst_45633);

(statearr_45693_46673[(1)] = (5));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_45655){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45655);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45695){var ex__27036__auto__ = e45695;
var statearr_45696_46674 = state_45655;
(statearr_45696_46674[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45655[(4)]))){
var statearr_45697_46675 = state_45655;
(statearr_45697_46675[(1)] = cljs.core.first((state_45655[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46676 = state_45655;
state_45655 = G__46676;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_45655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_45655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45698 = f__27103__auto__();
(statearr_45698[(6)] = c__27102__auto___46652);

return statearr_45698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var G__45702 = arguments.length;
switch (G__45702) {
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
var c__27102__auto___46678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45739){
var state_val_45740 = (state_45739[(1)]);
if((state_val_45740 === (7))){
var inst_45716 = (state_45739[(7)]);
var inst_45717 = (state_45739[(8)]);
var inst_45716__$1 = (state_45739[(2)]);
var inst_45717__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45716__$1,(0),null);
var inst_45718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45716__$1,(1),null);
var inst_45719 = (inst_45717__$1 == null);
var state_45739__$1 = (function (){var statearr_45741 = state_45739;
(statearr_45741[(7)] = inst_45716__$1);

(statearr_45741[(9)] = inst_45718);

(statearr_45741[(8)] = inst_45717__$1);

return statearr_45741;
})();
if(cljs.core.truth_(inst_45719)){
var statearr_45742_46679 = state_45739__$1;
(statearr_45742_46679[(1)] = (8));

} else {
var statearr_45743_46680 = state_45739__$1;
(statearr_45743_46680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (1))){
var inst_45705 = cljs.core.vec(chs);
var inst_45707 = inst_45705;
var state_45739__$1 = (function (){var statearr_45744 = state_45739;
(statearr_45744[(10)] = inst_45707);

return statearr_45744;
})();
var statearr_45745_46681 = state_45739__$1;
(statearr_45745_46681[(2)] = null);

(statearr_45745_46681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (4))){
var inst_45707 = (state_45739[(10)]);
var state_45739__$1 = state_45739;
return cljs.core.async.ioc_alts_BANG_(state_45739__$1,(7),inst_45707);
} else {
if((state_val_45740 === (6))){
var inst_45735 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45748_46682 = state_45739__$1;
(statearr_45748_46682[(2)] = inst_45735);

(statearr_45748_46682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (3))){
var inst_45737 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45739__$1,inst_45737);
} else {
if((state_val_45740 === (2))){
var inst_45707 = (state_45739[(10)]);
var inst_45709 = cljs.core.count(inst_45707);
var inst_45710 = (inst_45709 > (0));
var state_45739__$1 = state_45739;
if(cljs.core.truth_(inst_45710)){
var statearr_45752_46683 = state_45739__$1;
(statearr_45752_46683[(1)] = (4));

} else {
var statearr_45753_46684 = state_45739__$1;
(statearr_45753_46684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (11))){
var inst_45707 = (state_45739[(10)]);
var inst_45728 = (state_45739[(2)]);
var tmp45751 = inst_45707;
var inst_45707__$1 = tmp45751;
var state_45739__$1 = (function (){var statearr_45755 = state_45739;
(statearr_45755[(10)] = inst_45707__$1);

(statearr_45755[(11)] = inst_45728);

return statearr_45755;
})();
var statearr_45757_46685 = state_45739__$1;
(statearr_45757_46685[(2)] = null);

(statearr_45757_46685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (9))){
var inst_45717 = (state_45739[(8)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45739__$1,(11),out,inst_45717);
} else {
if((state_val_45740 === (5))){
var inst_45733 = cljs.core.async.close_BANG_(out);
var state_45739__$1 = state_45739;
var statearr_45758_46686 = state_45739__$1;
(statearr_45758_46686[(2)] = inst_45733);

(statearr_45758_46686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (10))){
var inst_45731 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45759_46687 = state_45739__$1;
(statearr_45759_46687[(2)] = inst_45731);

(statearr_45759_46687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (8))){
var inst_45707 = (state_45739[(10)]);
var inst_45716 = (state_45739[(7)]);
var inst_45718 = (state_45739[(9)]);
var inst_45717 = (state_45739[(8)]);
var inst_45722 = (function (){var cs = inst_45707;
var vec__45712 = inst_45716;
var v = inst_45717;
var c = inst_45718;
return (function (p1__45699_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45699_SHARP_);
});
})();
var inst_45724 = cljs.core.filterv(inst_45722,inst_45707);
var inst_45707__$1 = inst_45724;
var state_45739__$1 = (function (){var statearr_45763 = state_45739;
(statearr_45763[(10)] = inst_45707__$1);

return statearr_45763;
})();
var statearr_45764_46688 = state_45739__$1;
(statearr_45764_46688[(2)] = null);

(statearr_45764_46688[(1)] = (2));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_45767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45767[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_45767[(1)] = (1));

return statearr_45767;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_45739){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45739);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45769){var ex__27036__auto__ = e45769;
var statearr_45771_46689 = state_45739;
(statearr_45771_46689[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45739[(4)]))){
var statearr_45772_46690 = state_45739;
(statearr_45772_46690[(1)] = cljs.core.first((state_45739[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46691 = state_45739;
state_45739 = G__46691;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_45739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_45739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45775 = f__27103__auto__();
(statearr_45775[(6)] = c__27102__auto___46678);

return statearr_45775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
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
var G__45779 = arguments.length;
switch (G__45779) {
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
var c__27102__auto___46693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45803){
var state_val_45804 = (state_45803[(1)]);
if((state_val_45804 === (7))){
var inst_45785 = (state_45803[(7)]);
var inst_45785__$1 = (state_45803[(2)]);
var inst_45786 = (inst_45785__$1 == null);
var inst_45787 = cljs.core.not(inst_45786);
var state_45803__$1 = (function (){var statearr_45807 = state_45803;
(statearr_45807[(7)] = inst_45785__$1);

return statearr_45807;
})();
if(inst_45787){
var statearr_45808_46694 = state_45803__$1;
(statearr_45808_46694[(1)] = (8));

} else {
var statearr_45809_46695 = state_45803__$1;
(statearr_45809_46695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (1))){
var inst_45780 = (0);
var state_45803__$1 = (function (){var statearr_45810 = state_45803;
(statearr_45810[(8)] = inst_45780);

return statearr_45810;
})();
var statearr_45812_46696 = state_45803__$1;
(statearr_45812_46696[(2)] = null);

(statearr_45812_46696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (4))){
var state_45803__$1 = state_45803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45803__$1,(7),ch);
} else {
if((state_val_45804 === (6))){
var inst_45798 = (state_45803[(2)]);
var state_45803__$1 = state_45803;
var statearr_45813_46697 = state_45803__$1;
(statearr_45813_46697[(2)] = inst_45798);

(statearr_45813_46697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (3))){
var inst_45800 = (state_45803[(2)]);
var inst_45801 = cljs.core.async.close_BANG_(out);
var state_45803__$1 = (function (){var statearr_45815 = state_45803;
(statearr_45815[(9)] = inst_45800);

return statearr_45815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45803__$1,inst_45801);
} else {
if((state_val_45804 === (2))){
var inst_45780 = (state_45803[(8)]);
var inst_45782 = (inst_45780 < n);
var state_45803__$1 = state_45803;
if(cljs.core.truth_(inst_45782)){
var statearr_45817_46698 = state_45803__$1;
(statearr_45817_46698[(1)] = (4));

} else {
var statearr_45818_46699 = state_45803__$1;
(statearr_45818_46699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (11))){
var inst_45780 = (state_45803[(8)]);
var inst_45790 = (state_45803[(2)]);
var inst_45791 = (inst_45780 + (1));
var inst_45780__$1 = inst_45791;
var state_45803__$1 = (function (){var statearr_45819 = state_45803;
(statearr_45819[(8)] = inst_45780__$1);

(statearr_45819[(10)] = inst_45790);

return statearr_45819;
})();
var statearr_45821_46700 = state_45803__$1;
(statearr_45821_46700[(2)] = null);

(statearr_45821_46700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (9))){
var state_45803__$1 = state_45803;
var statearr_45822_46701 = state_45803__$1;
(statearr_45822_46701[(2)] = null);

(statearr_45822_46701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (5))){
var state_45803__$1 = state_45803;
var statearr_45823_46702 = state_45803__$1;
(statearr_45823_46702[(2)] = null);

(statearr_45823_46702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (10))){
var inst_45795 = (state_45803[(2)]);
var state_45803__$1 = state_45803;
var statearr_45825_46703 = state_45803__$1;
(statearr_45825_46703[(2)] = inst_45795);

(statearr_45825_46703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45804 === (8))){
var inst_45785 = (state_45803[(7)]);
var state_45803__$1 = state_45803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45803__$1,(11),out,inst_45785);
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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_45826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45826[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_45826[(1)] = (1));

return statearr_45826;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_45803){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45803);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45827){var ex__27036__auto__ = e45827;
var statearr_45828_46704 = state_45803;
(statearr_45828_46704[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45803[(4)]))){
var statearr_45829_46705 = state_45803;
(statearr_45829_46705[(1)] = cljs.core.first((state_45803[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46706 = state_45803;
state_45803 = G__46706;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_45803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_45803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45830 = f__27103__auto__();
(statearr_45830[(6)] = c__27102__auto___46693);

return statearr_45830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45832 = (function (f,ch,meta45833){
this.f = f;
this.ch = ch;
this.meta45833 = meta45833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45834,meta45833__$1){
var self__ = this;
var _45834__$1 = this;
return (new cljs.core.async.t_cljs$core$async45832(self__.f,self__.ch,meta45833__$1));
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45834){
var self__ = this;
var _45834__$1 = this;
return self__.meta45833;
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45836 = (function (f,ch,meta45833,_,fn1,meta45837){
this.f = f;
this.ch = ch;
this.meta45833 = meta45833;
this._ = _;
this.fn1 = fn1;
this.meta45837 = meta45837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45838,meta45837__$1){
var self__ = this;
var _45838__$1 = this;
return (new cljs.core.async.t_cljs$core$async45836(self__.f,self__.ch,self__.meta45833,self__._,self__.fn1,meta45837__$1));
}));

(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45838){
var self__ = this;
var _45838__$1 = this;
return self__.meta45837;
}));

(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45831_SHARP_){
var G__45839 = (((p1__45831_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45831_SHARP_) : self__.f.call(null,p1__45831_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45839) : f1.call(null,G__45839));
});
}));

(cljs.core.async.t_cljs$core$async45836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45833","meta45833",-412876196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45832","cljs.core.async/t_cljs$core$async45832",-94407508,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45837","meta45837",1742365872,null)], null);
}));

(cljs.core.async.t_cljs$core$async45836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45836");

(cljs.core.async.t_cljs$core$async45836.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45836.
 */
cljs.core.async.__GT_t_cljs$core$async45836 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45836(f__$1,ch__$1,meta45833__$1,___$2,fn1__$1,meta45837){
return (new cljs.core.async.t_cljs$core$async45836(f__$1,ch__$1,meta45833__$1,___$2,fn1__$1,meta45837));
});

}

return (new cljs.core.async.t_cljs$core$async45836(self__.f,self__.ch,self__.meta45833,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45848 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45848) : self__.f.call(null,G__45848));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45833","meta45833",-412876196,null)], null);
}));

(cljs.core.async.t_cljs$core$async45832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45832");

(cljs.core.async.t_cljs$core$async45832.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45832.
 */
cljs.core.async.__GT_t_cljs$core$async45832 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45832(f__$1,ch__$1,meta45833){
return (new cljs.core.async.t_cljs$core$async45832(f__$1,ch__$1,meta45833));
});

}

return (new cljs.core.async.t_cljs$core$async45832(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45849 = (function (f,ch,meta45850){
this.f = f;
this.ch = ch;
this.meta45850 = meta45850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45851,meta45850__$1){
var self__ = this;
var _45851__$1 = this;
return (new cljs.core.async.t_cljs$core$async45849(self__.f,self__.ch,meta45850__$1));
}));

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45851){
var self__ = this;
var _45851__$1 = this;
return self__.meta45850;
}));

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45850","meta45850",-1842583255,null)], null);
}));

(cljs.core.async.t_cljs$core$async45849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45849");

(cljs.core.async.t_cljs$core$async45849.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45849.
 */
cljs.core.async.__GT_t_cljs$core$async45849 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45849(f__$1,ch__$1,meta45850){
return (new cljs.core.async.t_cljs$core$async45849(f__$1,ch__$1,meta45850));
});

}

return (new cljs.core.async.t_cljs$core$async45849(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45852 = (function (p,ch,meta45853){
this.p = p;
this.ch = ch;
this.meta45853 = meta45853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45854,meta45853__$1){
var self__ = this;
var _45854__$1 = this;
return (new cljs.core.async.t_cljs$core$async45852(self__.p,self__.ch,meta45853__$1));
}));

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45854){
var self__ = this;
var _45854__$1 = this;
return self__.meta45853;
}));

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45853","meta45853",260248592,null)], null);
}));

(cljs.core.async.t_cljs$core$async45852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45852");

(cljs.core.async.t_cljs$core$async45852.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45852.
 */
cljs.core.async.__GT_t_cljs$core$async45852 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45852(p__$1,ch__$1,meta45853){
return (new cljs.core.async.t_cljs$core$async45852(p__$1,ch__$1,meta45853));
});

}

return (new cljs.core.async.t_cljs$core$async45852(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45858 = arguments.length;
switch (G__45858) {
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
var c__27102__auto___46723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45879){
var state_val_45880 = (state_45879[(1)]);
if((state_val_45880 === (7))){
var inst_45875 = (state_45879[(2)]);
var state_45879__$1 = state_45879;
var statearr_45881_46724 = state_45879__$1;
(statearr_45881_46724[(2)] = inst_45875);

(statearr_45881_46724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (1))){
var state_45879__$1 = state_45879;
var statearr_45882_46726 = state_45879__$1;
(statearr_45882_46726[(2)] = null);

(statearr_45882_46726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (4))){
var inst_45861 = (state_45879[(7)]);
var inst_45861__$1 = (state_45879[(2)]);
var inst_45862 = (inst_45861__$1 == null);
var state_45879__$1 = (function (){var statearr_45883 = state_45879;
(statearr_45883[(7)] = inst_45861__$1);

return statearr_45883;
})();
if(cljs.core.truth_(inst_45862)){
var statearr_45884_46729 = state_45879__$1;
(statearr_45884_46729[(1)] = (5));

} else {
var statearr_45885_46730 = state_45879__$1;
(statearr_45885_46730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (6))){
var inst_45861 = (state_45879[(7)]);
var inst_45866 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45861) : p.call(null,inst_45861));
var state_45879__$1 = state_45879;
if(cljs.core.truth_(inst_45866)){
var statearr_45886_46732 = state_45879__$1;
(statearr_45886_46732[(1)] = (8));

} else {
var statearr_45887_46733 = state_45879__$1;
(statearr_45887_46733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (3))){
var inst_45877 = (state_45879[(2)]);
var state_45879__$1 = state_45879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45879__$1,inst_45877);
} else {
if((state_val_45880 === (2))){
var state_45879__$1 = state_45879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45879__$1,(4),ch);
} else {
if((state_val_45880 === (11))){
var inst_45869 = (state_45879[(2)]);
var state_45879__$1 = state_45879;
var statearr_45888_46734 = state_45879__$1;
(statearr_45888_46734[(2)] = inst_45869);

(statearr_45888_46734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (9))){
var state_45879__$1 = state_45879;
var statearr_45889_46735 = state_45879__$1;
(statearr_45889_46735[(2)] = null);

(statearr_45889_46735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (5))){
var inst_45864 = cljs.core.async.close_BANG_(out);
var state_45879__$1 = state_45879;
var statearr_45890_46736 = state_45879__$1;
(statearr_45890_46736[(2)] = inst_45864);

(statearr_45890_46736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (10))){
var inst_45872 = (state_45879[(2)]);
var state_45879__$1 = (function (){var statearr_45891 = state_45879;
(statearr_45891[(8)] = inst_45872);

return statearr_45891;
})();
var statearr_45892_46737 = state_45879__$1;
(statearr_45892_46737[(2)] = null);

(statearr_45892_46737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45880 === (8))){
var inst_45861 = (state_45879[(7)]);
var state_45879__$1 = state_45879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45879__$1,(11),out,inst_45861);
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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_45893 = [null,null,null,null,null,null,null,null,null];
(statearr_45893[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_45893[(1)] = (1));

return statearr_45893;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_45879){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45879);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e45894){var ex__27036__auto__ = e45894;
var statearr_45895_46742 = state_45879;
(statearr_45895_46742[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45879[(4)]))){
var statearr_45896_46743 = state_45879;
(statearr_45896_46743[(1)] = cljs.core.first((state_45879[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46744 = state_45879;
state_45879 = G__46744;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_45879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_45879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_45897 = f__27103__auto__();
(statearr_45897[(6)] = c__27102__auto___46723);

return statearr_45897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45899 = arguments.length;
switch (G__45899) {
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
var c__27102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_45964){
var state_val_45965 = (state_45964[(1)]);
if((state_val_45965 === (7))){
var inst_45960 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45966_46746 = state_45964__$1;
(statearr_45966_46746[(2)] = inst_45960);

(statearr_45966_46746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (20))){
var inst_45930 = (state_45964[(7)]);
var inst_45941 = (state_45964[(2)]);
var inst_45942 = cljs.core.next(inst_45930);
var inst_45914 = inst_45942;
var inst_45915 = null;
var inst_45916 = (0);
var inst_45917 = (0);
var state_45964__$1 = (function (){var statearr_45967 = state_45964;
(statearr_45967[(8)] = inst_45915);

(statearr_45967[(9)] = inst_45941);

(statearr_45967[(10)] = inst_45917);

(statearr_45967[(11)] = inst_45916);

(statearr_45967[(12)] = inst_45914);

return statearr_45967;
})();
var statearr_45968_46747 = state_45964__$1;
(statearr_45968_46747[(2)] = null);

(statearr_45968_46747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (1))){
var state_45964__$1 = state_45964;
var statearr_45969_46748 = state_45964__$1;
(statearr_45969_46748[(2)] = null);

(statearr_45969_46748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (4))){
var inst_45902 = (state_45964[(13)]);
var inst_45902__$1 = (state_45964[(2)]);
var inst_45904 = (inst_45902__$1 == null);
var state_45964__$1 = (function (){var statearr_45970 = state_45964;
(statearr_45970[(13)] = inst_45902__$1);

return statearr_45970;
})();
if(cljs.core.truth_(inst_45904)){
var statearr_45971_46750 = state_45964__$1;
(statearr_45971_46750[(1)] = (5));

} else {
var statearr_45972_46751 = state_45964__$1;
(statearr_45972_46751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (15))){
var state_45964__$1 = state_45964;
var statearr_45976_46752 = state_45964__$1;
(statearr_45976_46752[(2)] = null);

(statearr_45976_46752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (21))){
var state_45964__$1 = state_45964;
var statearr_45977_46753 = state_45964__$1;
(statearr_45977_46753[(2)] = null);

(statearr_45977_46753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (13))){
var inst_45915 = (state_45964[(8)]);
var inst_45917 = (state_45964[(10)]);
var inst_45916 = (state_45964[(11)]);
var inst_45914 = (state_45964[(12)]);
var inst_45926 = (state_45964[(2)]);
var inst_45927 = (inst_45917 + (1));
var tmp45973 = inst_45915;
var tmp45974 = inst_45916;
var tmp45975 = inst_45914;
var inst_45914__$1 = tmp45975;
var inst_45915__$1 = tmp45973;
var inst_45916__$1 = tmp45974;
var inst_45917__$1 = inst_45927;
var state_45964__$1 = (function (){var statearr_45978 = state_45964;
(statearr_45978[(8)] = inst_45915__$1);

(statearr_45978[(14)] = inst_45926);

(statearr_45978[(10)] = inst_45917__$1);

(statearr_45978[(11)] = inst_45916__$1);

(statearr_45978[(12)] = inst_45914__$1);

return statearr_45978;
})();
var statearr_45979_46754 = state_45964__$1;
(statearr_45979_46754[(2)] = null);

(statearr_45979_46754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (22))){
var state_45964__$1 = state_45964;
var statearr_45980_46755 = state_45964__$1;
(statearr_45980_46755[(2)] = null);

(statearr_45980_46755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (6))){
var inst_45902 = (state_45964[(13)]);
var inst_45912 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45902) : f.call(null,inst_45902));
var inst_45913 = cljs.core.seq(inst_45912);
var inst_45914 = inst_45913;
var inst_45915 = null;
var inst_45916 = (0);
var inst_45917 = (0);
var state_45964__$1 = (function (){var statearr_45981 = state_45964;
(statearr_45981[(8)] = inst_45915);

(statearr_45981[(10)] = inst_45917);

(statearr_45981[(11)] = inst_45916);

(statearr_45981[(12)] = inst_45914);

return statearr_45981;
})();
var statearr_45982_46760 = state_45964__$1;
(statearr_45982_46760[(2)] = null);

(statearr_45982_46760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (17))){
var inst_45930 = (state_45964[(7)]);
var inst_45934 = cljs.core.chunk_first(inst_45930);
var inst_45935 = cljs.core.chunk_rest(inst_45930);
var inst_45936 = cljs.core.count(inst_45934);
var inst_45914 = inst_45935;
var inst_45915 = inst_45934;
var inst_45916 = inst_45936;
var inst_45917 = (0);
var state_45964__$1 = (function (){var statearr_45983 = state_45964;
(statearr_45983[(8)] = inst_45915);

(statearr_45983[(10)] = inst_45917);

(statearr_45983[(11)] = inst_45916);

(statearr_45983[(12)] = inst_45914);

return statearr_45983;
})();
var statearr_45984_46761 = state_45964__$1;
(statearr_45984_46761[(2)] = null);

(statearr_45984_46761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (3))){
var inst_45962 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45964__$1,inst_45962);
} else {
if((state_val_45965 === (12))){
var inst_45950 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45985_46762 = state_45964__$1;
(statearr_45985_46762[(2)] = inst_45950);

(statearr_45985_46762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (2))){
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45964__$1,(4),in$);
} else {
if((state_val_45965 === (23))){
var inst_45958 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45986_46763 = state_45964__$1;
(statearr_45986_46763[(2)] = inst_45958);

(statearr_45986_46763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (19))){
var inst_45945 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45987_46764 = state_45964__$1;
(statearr_45987_46764[(2)] = inst_45945);

(statearr_45987_46764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (11))){
var inst_45930 = (state_45964[(7)]);
var inst_45914 = (state_45964[(12)]);
var inst_45930__$1 = cljs.core.seq(inst_45914);
var state_45964__$1 = (function (){var statearr_45988 = state_45964;
(statearr_45988[(7)] = inst_45930__$1);

return statearr_45988;
})();
if(inst_45930__$1){
var statearr_45989_46765 = state_45964__$1;
(statearr_45989_46765[(1)] = (14));

} else {
var statearr_45990_46766 = state_45964__$1;
(statearr_45990_46766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (9))){
var inst_45952 = (state_45964[(2)]);
var inst_45953 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45964__$1 = (function (){var statearr_45991 = state_45964;
(statearr_45991[(15)] = inst_45952);

return statearr_45991;
})();
if(cljs.core.truth_(inst_45953)){
var statearr_45992_46767 = state_45964__$1;
(statearr_45992_46767[(1)] = (21));

} else {
var statearr_45993_46772 = state_45964__$1;
(statearr_45993_46772[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (5))){
var inst_45906 = cljs.core.async.close_BANG_(out);
var state_45964__$1 = state_45964;
var statearr_45994_46773 = state_45964__$1;
(statearr_45994_46773[(2)] = inst_45906);

(statearr_45994_46773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (14))){
var inst_45930 = (state_45964[(7)]);
var inst_45932 = cljs.core.chunked_seq_QMARK_(inst_45930);
var state_45964__$1 = state_45964;
if(inst_45932){
var statearr_45995_46774 = state_45964__$1;
(statearr_45995_46774[(1)] = (17));

} else {
var statearr_45996_46775 = state_45964__$1;
(statearr_45996_46775[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (16))){
var inst_45948 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45997_46776 = state_45964__$1;
(statearr_45997_46776[(2)] = inst_45948);

(statearr_45997_46776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (10))){
var inst_45915 = (state_45964[(8)]);
var inst_45917 = (state_45964[(10)]);
var inst_45922 = cljs.core._nth(inst_45915,inst_45917);
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45964__$1,(13),out,inst_45922);
} else {
if((state_val_45965 === (18))){
var inst_45930 = (state_45964[(7)]);
var inst_45939 = cljs.core.first(inst_45930);
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45964__$1,(20),out,inst_45939);
} else {
if((state_val_45965 === (8))){
var inst_45917 = (state_45964[(10)]);
var inst_45916 = (state_45964[(11)]);
var inst_45919 = (inst_45917 < inst_45916);
var inst_45920 = inst_45919;
var state_45964__$1 = state_45964;
if(cljs.core.truth_(inst_45920)){
var statearr_45998_46781 = state_45964__$1;
(statearr_45998_46781[(1)] = (10));

} else {
var statearr_45999_46785 = state_45964__$1;
(statearr_45999_46785[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____0 = (function (){
var statearr_46000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__);

(statearr_46000[(1)] = (1));

return statearr_46000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____1 = (function (state_45964){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_45964);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e46001){var ex__27036__auto__ = e46001;
var statearr_46002_46786 = state_45964;
(statearr_46002_46786[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_45964[(4)]))){
var statearr_46003_46787 = state_45964;
(statearr_46003_46787[(1)] = cljs.core.first((state_45964[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46794 = state_45964;
state_45964 = G__46794;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__ = function(state_45964){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____1.call(this,state_45964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27033__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_46004 = f__27103__auto__();
(statearr_46004[(6)] = c__27102__auto__);

return statearr_46004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));

return c__27102__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46006 = arguments.length;
switch (G__46006) {
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
var G__46008 = arguments.length;
switch (G__46008) {
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
var G__46010 = arguments.length;
switch (G__46010) {
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
var c__27102__auto___46817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_46034){
var state_val_46035 = (state_46034[(1)]);
if((state_val_46035 === (7))){
var inst_46029 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46036_46818 = state_46034__$1;
(statearr_46036_46818[(2)] = inst_46029);

(statearr_46036_46818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (1))){
var inst_46011 = null;
var state_46034__$1 = (function (){var statearr_46037 = state_46034;
(statearr_46037[(7)] = inst_46011);

return statearr_46037;
})();
var statearr_46038_46819 = state_46034__$1;
(statearr_46038_46819[(2)] = null);

(statearr_46038_46819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (4))){
var inst_46014 = (state_46034[(8)]);
var inst_46014__$1 = (state_46034[(2)]);
var inst_46015 = (inst_46014__$1 == null);
var inst_46016 = cljs.core.not(inst_46015);
var state_46034__$1 = (function (){var statearr_46039 = state_46034;
(statearr_46039[(8)] = inst_46014__$1);

return statearr_46039;
})();
if(inst_46016){
var statearr_46040_46820 = state_46034__$1;
(statearr_46040_46820[(1)] = (5));

} else {
var statearr_46041_46821 = state_46034__$1;
(statearr_46041_46821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (6))){
var state_46034__$1 = state_46034;
var statearr_46042_46822 = state_46034__$1;
(statearr_46042_46822[(2)] = null);

(statearr_46042_46822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (3))){
var inst_46031 = (state_46034[(2)]);
var inst_46032 = cljs.core.async.close_BANG_(out);
var state_46034__$1 = (function (){var statearr_46043 = state_46034;
(statearr_46043[(9)] = inst_46031);

return statearr_46043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46034__$1,inst_46032);
} else {
if((state_val_46035 === (2))){
var state_46034__$1 = state_46034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46034__$1,(4),ch);
} else {
if((state_val_46035 === (11))){
var inst_46014 = (state_46034[(8)]);
var inst_46023 = (state_46034[(2)]);
var inst_46011 = inst_46014;
var state_46034__$1 = (function (){var statearr_46046 = state_46034;
(statearr_46046[(10)] = inst_46023);

(statearr_46046[(7)] = inst_46011);

return statearr_46046;
})();
var statearr_46047_46823 = state_46034__$1;
(statearr_46047_46823[(2)] = null);

(statearr_46047_46823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (9))){
var inst_46014 = (state_46034[(8)]);
var state_46034__$1 = state_46034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46034__$1,(11),out,inst_46014);
} else {
if((state_val_46035 === (5))){
var inst_46014 = (state_46034[(8)]);
var inst_46011 = (state_46034[(7)]);
var inst_46018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46014,inst_46011);
var state_46034__$1 = state_46034;
if(inst_46018){
var statearr_46049_46824 = state_46034__$1;
(statearr_46049_46824[(1)] = (8));

} else {
var statearr_46050_46825 = state_46034__$1;
(statearr_46050_46825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (10))){
var inst_46026 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46051_46827 = state_46034__$1;
(statearr_46051_46827[(2)] = inst_46026);

(statearr_46051_46827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (8))){
var inst_46011 = (state_46034[(7)]);
var tmp46048 = inst_46011;
var inst_46011__$1 = tmp46048;
var state_46034__$1 = (function (){var statearr_46053 = state_46034;
(statearr_46053[(7)] = inst_46011__$1);

return statearr_46053;
})();
var statearr_46054_46828 = state_46034__$1;
(statearr_46054_46828[(2)] = null);

(statearr_46054_46828[(1)] = (2));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_46055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46055[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_46055[(1)] = (1));

return statearr_46055;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_46034){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_46034);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e46056){var ex__27036__auto__ = e46056;
var statearr_46057_46829 = state_46034;
(statearr_46057_46829[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_46034[(4)]))){
var statearr_46058_46830 = state_46034;
(statearr_46058_46830[(1)] = cljs.core.first((state_46034[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46831 = state_46034;
state_46034 = G__46831;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_46034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_46034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_46061 = f__27103__auto__();
(statearr_46061[(6)] = c__27102__auto___46817);

return statearr_46061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46065 = arguments.length;
switch (G__46065) {
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
var c__27102__auto___46834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_46106){
var state_val_46107 = (state_46106[(1)]);
if((state_val_46107 === (7))){
var inst_46102 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
var statearr_46108_46835 = state_46106__$1;
(statearr_46108_46835[(2)] = inst_46102);

(statearr_46108_46835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (1))){
var inst_46069 = (new Array(n));
var inst_46070 = inst_46069;
var inst_46071 = (0);
var state_46106__$1 = (function (){var statearr_46109 = state_46106;
(statearr_46109[(7)] = inst_46071);

(statearr_46109[(8)] = inst_46070);

return statearr_46109;
})();
var statearr_46110_46837 = state_46106__$1;
(statearr_46110_46837[(2)] = null);

(statearr_46110_46837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (4))){
var inst_46074 = (state_46106[(9)]);
var inst_46074__$1 = (state_46106[(2)]);
var inst_46075 = (inst_46074__$1 == null);
var inst_46076 = cljs.core.not(inst_46075);
var state_46106__$1 = (function (){var statearr_46111 = state_46106;
(statearr_46111[(9)] = inst_46074__$1);

return statearr_46111;
})();
if(inst_46076){
var statearr_46116_46838 = state_46106__$1;
(statearr_46116_46838[(1)] = (5));

} else {
var statearr_46117_46839 = state_46106__$1;
(statearr_46117_46839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (15))){
var inst_46096 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
var statearr_46118_46840 = state_46106__$1;
(statearr_46118_46840[(2)] = inst_46096);

(statearr_46118_46840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (13))){
var state_46106__$1 = state_46106;
var statearr_46119_46841 = state_46106__$1;
(statearr_46119_46841[(2)] = null);

(statearr_46119_46841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (6))){
var inst_46071 = (state_46106[(7)]);
var inst_46092 = (inst_46071 > (0));
var state_46106__$1 = state_46106;
if(cljs.core.truth_(inst_46092)){
var statearr_46122_46842 = state_46106__$1;
(statearr_46122_46842[(1)] = (12));

} else {
var statearr_46123_46843 = state_46106__$1;
(statearr_46123_46843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (3))){
var inst_46104 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46106__$1,inst_46104);
} else {
if((state_val_46107 === (12))){
var inst_46070 = (state_46106[(8)]);
var inst_46094 = cljs.core.vec(inst_46070);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46106__$1,(15),out,inst_46094);
} else {
if((state_val_46107 === (2))){
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46106__$1,(4),ch);
} else {
if((state_val_46107 === (11))){
var inst_46086 = (state_46106[(2)]);
var inst_46087 = (new Array(n));
var inst_46070 = inst_46087;
var inst_46071 = (0);
var state_46106__$1 = (function (){var statearr_46126 = state_46106;
(statearr_46126[(10)] = inst_46086);

(statearr_46126[(7)] = inst_46071);

(statearr_46126[(8)] = inst_46070);

return statearr_46126;
})();
var statearr_46127_46844 = state_46106__$1;
(statearr_46127_46844[(2)] = null);

(statearr_46127_46844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (9))){
var inst_46070 = (state_46106[(8)]);
var inst_46084 = cljs.core.vec(inst_46070);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46106__$1,(11),out,inst_46084);
} else {
if((state_val_46107 === (5))){
var inst_46071 = (state_46106[(7)]);
var inst_46079 = (state_46106[(11)]);
var inst_46074 = (state_46106[(9)]);
var inst_46070 = (state_46106[(8)]);
var inst_46078 = (inst_46070[inst_46071] = inst_46074);
var inst_46079__$1 = (inst_46071 + (1));
var inst_46080 = (inst_46079__$1 < n);
var state_46106__$1 = (function (){var statearr_46128 = state_46106;
(statearr_46128[(11)] = inst_46079__$1);

(statearr_46128[(12)] = inst_46078);

return statearr_46128;
})();
if(cljs.core.truth_(inst_46080)){
var statearr_46129_46845 = state_46106__$1;
(statearr_46129_46845[(1)] = (8));

} else {
var statearr_46130_46846 = state_46106__$1;
(statearr_46130_46846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (14))){
var inst_46099 = (state_46106[(2)]);
var inst_46100 = cljs.core.async.close_BANG_(out);
var state_46106__$1 = (function (){var statearr_46132 = state_46106;
(statearr_46132[(13)] = inst_46099);

return statearr_46132;
})();
var statearr_46133_46847 = state_46106__$1;
(statearr_46133_46847[(2)] = inst_46100);

(statearr_46133_46847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (10))){
var inst_46090 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
var statearr_46134_46848 = state_46106__$1;
(statearr_46134_46848[(2)] = inst_46090);

(statearr_46134_46848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (8))){
var inst_46079 = (state_46106[(11)]);
var inst_46070 = (state_46106[(8)]);
var tmp46131 = inst_46070;
var inst_46070__$1 = tmp46131;
var inst_46071 = inst_46079;
var state_46106__$1 = (function (){var statearr_46135 = state_46106;
(statearr_46135[(7)] = inst_46071);

(statearr_46135[(8)] = inst_46070__$1);

return statearr_46135;
})();
var statearr_46136_46849 = state_46106__$1;
(statearr_46136_46849[(2)] = null);

(statearr_46136_46849[(1)] = (2));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_46137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46137[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_46137[(1)] = (1));

return statearr_46137;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_46106){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_46106);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e46138){var ex__27036__auto__ = e46138;
var statearr_46139_46850 = state_46106;
(statearr_46139_46850[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_46106[(4)]))){
var statearr_46140_46851 = state_46106;
(statearr_46140_46851[(1)] = cljs.core.first((state_46106[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46852 = state_46106;
state_46106 = G__46852;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_46106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_46106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_46141 = f__27103__auto__();
(statearr_46141[(6)] = c__27102__auto___46834);

return statearr_46141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46143 = arguments.length;
switch (G__46143) {
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
var c__27102__auto___46854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27103__auto__ = (function (){var switch__27032__auto__ = (function (state_46188){
var state_val_46189 = (state_46188[(1)]);
if((state_val_46189 === (7))){
var inst_46184 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
var statearr_46190_46855 = state_46188__$1;
(statearr_46190_46855[(2)] = inst_46184);

(statearr_46190_46855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (1))){
var inst_46144 = [];
var inst_46145 = inst_46144;
var inst_46146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46188__$1 = (function (){var statearr_46191 = state_46188;
(statearr_46191[(7)] = inst_46145);

(statearr_46191[(8)] = inst_46146);

return statearr_46191;
})();
var statearr_46192_46856 = state_46188__$1;
(statearr_46192_46856[(2)] = null);

(statearr_46192_46856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (4))){
var inst_46149 = (state_46188[(9)]);
var inst_46149__$1 = (state_46188[(2)]);
var inst_46150 = (inst_46149__$1 == null);
var inst_46151 = cljs.core.not(inst_46150);
var state_46188__$1 = (function (){var statearr_46193 = state_46188;
(statearr_46193[(9)] = inst_46149__$1);

return statearr_46193;
})();
if(inst_46151){
var statearr_46194_46857 = state_46188__$1;
(statearr_46194_46857[(1)] = (5));

} else {
var statearr_46195_46862 = state_46188__$1;
(statearr_46195_46862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (15))){
var inst_46145 = (state_46188[(7)]);
var inst_46176 = cljs.core.vec(inst_46145);
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46188__$1,(18),out,inst_46176);
} else {
if((state_val_46189 === (13))){
var inst_46171 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
var statearr_46196_46863 = state_46188__$1;
(statearr_46196_46863[(2)] = inst_46171);

(statearr_46196_46863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (6))){
var inst_46145 = (state_46188[(7)]);
var inst_46173 = inst_46145.length;
var inst_46174 = (inst_46173 > (0));
var state_46188__$1 = state_46188;
if(cljs.core.truth_(inst_46174)){
var statearr_46197_46864 = state_46188__$1;
(statearr_46197_46864[(1)] = (15));

} else {
var statearr_46198_46865 = state_46188__$1;
(statearr_46198_46865[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (17))){
var inst_46181 = (state_46188[(2)]);
var inst_46182 = cljs.core.async.close_BANG_(out);
var state_46188__$1 = (function (){var statearr_46199 = state_46188;
(statearr_46199[(10)] = inst_46181);

return statearr_46199;
})();
var statearr_46200_46866 = state_46188__$1;
(statearr_46200_46866[(2)] = inst_46182);

(statearr_46200_46866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (3))){
var inst_46186 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46188__$1,inst_46186);
} else {
if((state_val_46189 === (12))){
var inst_46145 = (state_46188[(7)]);
var inst_46164 = cljs.core.vec(inst_46145);
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46188__$1,(14),out,inst_46164);
} else {
if((state_val_46189 === (2))){
var state_46188__$1 = state_46188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46188__$1,(4),ch);
} else {
if((state_val_46189 === (11))){
var inst_46145 = (state_46188[(7)]);
var inst_46153 = (state_46188[(11)]);
var inst_46149 = (state_46188[(9)]);
var inst_46161 = inst_46145.push(inst_46149);
var tmp46201 = inst_46145;
var inst_46145__$1 = tmp46201;
var inst_46146 = inst_46153;
var state_46188__$1 = (function (){var statearr_46202 = state_46188;
(statearr_46202[(12)] = inst_46161);

(statearr_46202[(7)] = inst_46145__$1);

(statearr_46202[(8)] = inst_46146);

return statearr_46202;
})();
var statearr_46203_46867 = state_46188__$1;
(statearr_46203_46867[(2)] = null);

(statearr_46203_46867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (9))){
var inst_46146 = (state_46188[(8)]);
var inst_46157 = cljs.core.keyword_identical_QMARK_(inst_46146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46188__$1 = state_46188;
var statearr_46204_46868 = state_46188__$1;
(statearr_46204_46868[(2)] = inst_46157);

(statearr_46204_46868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (5))){
var inst_46153 = (state_46188[(11)]);
var inst_46146 = (state_46188[(8)]);
var inst_46154 = (state_46188[(13)]);
var inst_46149 = (state_46188[(9)]);
var inst_46153__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46149) : f.call(null,inst_46149));
var inst_46154__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46153__$1,inst_46146);
var state_46188__$1 = (function (){var statearr_46205 = state_46188;
(statearr_46205[(11)] = inst_46153__$1);

(statearr_46205[(13)] = inst_46154__$1);

return statearr_46205;
})();
if(inst_46154__$1){
var statearr_46206_46869 = state_46188__$1;
(statearr_46206_46869[(1)] = (8));

} else {
var statearr_46207_46870 = state_46188__$1;
(statearr_46207_46870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (14))){
var inst_46153 = (state_46188[(11)]);
var inst_46149 = (state_46188[(9)]);
var inst_46166 = (state_46188[(2)]);
var inst_46167 = [];
var inst_46168 = inst_46167.push(inst_46149);
var inst_46145 = inst_46167;
var inst_46146 = inst_46153;
var state_46188__$1 = (function (){var statearr_46208 = state_46188;
(statearr_46208[(14)] = inst_46168);

(statearr_46208[(7)] = inst_46145);

(statearr_46208[(8)] = inst_46146);

(statearr_46208[(15)] = inst_46166);

return statearr_46208;
})();
var statearr_46209_46875 = state_46188__$1;
(statearr_46209_46875[(2)] = null);

(statearr_46209_46875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (16))){
var state_46188__$1 = state_46188;
var statearr_46210_46876 = state_46188__$1;
(statearr_46210_46876[(2)] = null);

(statearr_46210_46876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (10))){
var inst_46159 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
if(cljs.core.truth_(inst_46159)){
var statearr_46211_46877 = state_46188__$1;
(statearr_46211_46877[(1)] = (11));

} else {
var statearr_46212_46878 = state_46188__$1;
(statearr_46212_46878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (18))){
var inst_46178 = (state_46188[(2)]);
var state_46188__$1 = state_46188;
var statearr_46213_46880 = state_46188__$1;
(statearr_46213_46880[(2)] = inst_46178);

(statearr_46213_46880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46189 === (8))){
var inst_46154 = (state_46188[(13)]);
var state_46188__$1 = state_46188;
var statearr_46214_46881 = state_46188__$1;
(statearr_46214_46881[(2)] = inst_46154);

(statearr_46214_46881[(1)] = (10));


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
var cljs$core$async$state_machine__27033__auto__ = null;
var cljs$core$async$state_machine__27033__auto____0 = (function (){
var statearr_46215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46215[(0)] = cljs$core$async$state_machine__27033__auto__);

(statearr_46215[(1)] = (1));

return statearr_46215;
});
var cljs$core$async$state_machine__27033__auto____1 = (function (state_46188){
while(true){
var ret_value__27034__auto__ = (function (){try{while(true){
var result__27035__auto__ = switch__27032__auto__(state_46188);
if(cljs.core.keyword_identical_QMARK_(result__27035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27035__auto__;
}
break;
}
}catch (e46216){var ex__27036__auto__ = e46216;
var statearr_46217_46884 = state_46188;
(statearr_46217_46884[(2)] = ex__27036__auto__);


if(cljs.core.seq((state_46188[(4)]))){
var statearr_46218_46885 = state_46188;
(statearr_46218_46885[(1)] = cljs.core.first((state_46188[(4)])));

} else {
throw ex__27036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46886 = state_46188;
state_46188 = G__46886;
continue;
} else {
return ret_value__27034__auto__;
}
break;
}
});
cljs$core$async$state_machine__27033__auto__ = function(state_46188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27033__auto____1.call(this,state_46188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27033__auto____0;
cljs$core$async$state_machine__27033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27033__auto____1;
return cljs$core$async$state_machine__27033__auto__;
})()
})();
var state__27104__auto__ = (function (){var statearr_46219 = f__27103__auto__();
(statearr_46219[(6)] = c__27102__auto___46854);

return statearr_46219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27104__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
