goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__34633 = (function (){
return (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.call(null,f));
});
return (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__34633) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.after_render.call(null,G__34633));
}),new cljs.core.Keyword(null,"yield","yield",177875009),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick], null);

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.IEventQueue = function(){};

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$dyn_34800 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.push[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4551__auto__.call(null,this$,event));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.push["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4549__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.push = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$dyn_34800(this$,event);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$add_post_event_callback$dyn_34802 = (function (this$,id,callack){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.add_post_event_callback[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4551__auto__.call(null,this$,id,callack));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.add_post_event_callback["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4549__auto__.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$add_post_event_callback$dyn_34802(this$,id,callack);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$remove_post_event_callback$dyn_34807 = (function (this$,f){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.remove_post_event_callback[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4551__auto__.call(null,this$,f));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.remove_post_event_callback["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4549__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$remove_post_event_callback$dyn_34807(this$,f);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$dyn_34809 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.purge[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.purge["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.purge = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$dyn_34809(this$);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$dyn_34810 = (function (this$,trigger,arg){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._fsm_trigger[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4551__auto__.call(null,this$,trigger,arg));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._fsm_trigger["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4549__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._fsm_trigger = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$dyn_34810(this$,trigger,arg);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$dyn_34811 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._add_event[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4551__auto__.call(null,this$,event));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._add_event["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4549__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._add_event = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$dyn_34811(this$,event);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_34817 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._process_1st_event_in_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_34817(this$);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$dyn_34818 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_next_tick[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_next_tick["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_next_tick = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$dyn_34818(this$);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$dyn_34819 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_queue[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_queue["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._run_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$dyn_34819(this$);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$dyn_34820 = (function (this$,ex){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._exception[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4551__auto__.call(null,this$,ex));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._exception["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4549__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._exception = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$dyn_34820(this$,ex);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$dyn_34824 = (function (this$,later_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._pause[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4551__auto__.call(null,this$,later_fn));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._pause["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4549__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._pause = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$dyn_34824(this$,later_fn);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$dyn_34835 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._resume[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._resume["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._resume = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$dyn_34835(this$);
}
});

var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_34842 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._call_post_event_callbacks[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4551__auto__.call(null,this$,event));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4549__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router._call_post_event_callbacks = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_34842(this$,event);
}
});


/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.IEventQueue}
*/
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5751__auto__ = cljs.core.some(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5751__auto__)){
var later_fn = temp__5751__auto__;
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__34858 = (n - (1));
n = G__34858;
continue;
}
}
break;
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1(null);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__34757 = (function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__34757) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.next_tick.call(null,G__34757));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34758 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34759 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.router","fsm-trigger","day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.router/fsm-trigger",1732257350)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34759);

try{try{var vec__34762 = (function (){var G__34765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__34765)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34765)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762,(1),null);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__34460__auto___34881 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__34460__auto___34881);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34458__auto___34885 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34459__auto___34886 = (end__34458__auto___34885 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34459__auto___34886,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34458__auto___34885);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34758);
}} else {
var vec__34772 = (function (){var G__34775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__34775)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__34775)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__34460__auto___34890 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__34460__auto___34890);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__34784 = (function (){
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__34784) : later_fn.call(null,G__34784));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e34787){var ex = e34787;
return this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__34792 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__34793 = null;
var count__34794 = (0);
var i__34795 = (0);
while(true){
if((i__34795 < count__34794)){
var callback = chunk__34793.cljs$core$IIndexed$_nth$arity$2(null,i__34795);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__34896 = seq__34792;
var G__34897 = chunk__34793;
var G__34898 = count__34794;
var G__34899 = (i__34795 + (1));
seq__34792 = G__34896;
chunk__34793 = G__34897;
count__34794 = G__34898;
i__34795 = G__34899;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34792);
if(temp__5753__auto__){
var seq__34792__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34792__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34792__$1);
var G__34900 = cljs.core.chunk_rest(seq__34792__$1);
var G__34901 = c__4679__auto__;
var G__34902 = cljs.core.count(c__4679__auto__);
var G__34903 = (0);
seq__34792 = G__34900;
chunk__34793 = G__34901;
count__34794 = G__34902;
i__34795 = G__34903;
continue;
} else {
var callback = cljs.core.first(seq__34792__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__34904 = cljs.core.next(seq__34792__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34792 = G__34904;
chunk__34793 = G__34905;
count__34794 = G__34906;
i__34795 = G__34907;
continue;
}
} else {
return null;
}
}
break;
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.prototype.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$purge$arity$1(null);

throw ex;
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.router/EventQueue");

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.router/EventQueue");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.router/EventQueue.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.__GT_EventQueue = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.event_queue = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$push$arity$2(null,event);
}

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch_sync = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$dispatch_sync(event_v){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.handle(event_v);

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);

return null;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.js.map
