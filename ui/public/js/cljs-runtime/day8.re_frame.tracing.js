goog.provide('day8.re_frame.tracing');
cljs.core.enable_console_print_BANG_();
/**
 * @define {boolean}
 */
day8.re_frame.tracing.trace_enabled_QMARK_ = goog.define("day8.re_frame.tracing.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame.tracing.is_trace_enabled_QMARK_ = (function day8$re_frame$tracing$is_trace_enabled_QMARK_(){
return day8.re_frame.tracing.trace_enabled_QMARK_;
});
day8.re_frame.tracing.reset_indent_level_BANG_ = day8.re_frame.debux.common.util.reset_indent_level_BANG_;
day8.re_frame.tracing.set_print_seq_length_BANG_ = day8.re_frame.debux.common.util.set_print_seq_length_BANG_;
day8.re_frame.tracing.find_symbols = (function day8$re_frame$tracing$find_symbols(args){

var loc = day8.re_frame.debux.common.util.sequential_zip(args);
var seen = cljs.core.PersistentVector.EMPTY;
while(true){
var node = clojure.zip.node(loc);
if(clojure.zip.end_QMARK_(loc)){
return seen;
} else {
if((node instanceof cljs.core.Symbol)){
var G__49936 = clojure.zip.next(loc);
var G__49937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node);
loc = G__49936;
seen = G__49937;
continue;
} else {
var G__49938 = clojure.zip.next(loc);
var G__49939 = seen;
loc = G__49938;
seen = G__49939;
continue;

}
}
break;
}
});
day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49940 = arguments.length;
var i__4865__auto___49941 = (0);
while(true){
if((i__4865__auto___49941 < len__4864__auto___49940)){
args__4870__auto__.push((arguments[i__4865__auto___49941]));

var G__49942 = (i__4865__auto___49941 + (1));
i__4865__auto___49941 = G__49942;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic = (function (args_PLUS_body,send_form){
var args = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var body_or_prepost = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1));
var args_symbols = day8.re_frame.tracing.find_symbols(args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),body_or_prepost)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("dbgn","dbgn-forms","dbgn/dbgn-forms",-1354469701,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))], 0)))),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"prepost","prepost",1251610712).cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("dbgn","dbgn-forms","dbgn/dbgn-forms",-1354469701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(day8.re_frame.tracing.fn_body.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame.tracing.fn_body.cljs$lang$applyTo = (function (seq49932){
var G__49933 = cljs.core.first(seq49932);
var seq49932__$1 = cljs.core.next(seq49932);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49933,seq49932__$1);
}));


//# sourceMappingURL=day8.re_frame.tracing.js.map
