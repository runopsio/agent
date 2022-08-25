goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44304){
var map__44305 = p__44304;
var map__44305__$1 = cljs.core.__destructure_map(map__44305);
var m = map__44305__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44305__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44318_44585 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44320_44586 = null;
var count__44321_44587 = (0);
var i__44322_44588 = (0);
while(true){
if((i__44322_44588 < count__44321_44587)){
var f_44589 = chunk__44320_44586.cljs$core$IIndexed$_nth$arity$2(null,i__44322_44588);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44589], 0));


var G__44590 = seq__44318_44585;
var G__44591 = chunk__44320_44586;
var G__44592 = count__44321_44587;
var G__44593 = (i__44322_44588 + (1));
seq__44318_44585 = G__44590;
chunk__44320_44586 = G__44591;
count__44321_44587 = G__44592;
i__44322_44588 = G__44593;
continue;
} else {
var temp__5753__auto___44594 = cljs.core.seq(seq__44318_44585);
if(temp__5753__auto___44594){
var seq__44318_44595__$1 = temp__5753__auto___44594;
if(cljs.core.chunked_seq_QMARK_(seq__44318_44595__$1)){
var c__4679__auto___44596 = cljs.core.chunk_first(seq__44318_44595__$1);
var G__44597 = cljs.core.chunk_rest(seq__44318_44595__$1);
var G__44598 = c__4679__auto___44596;
var G__44599 = cljs.core.count(c__4679__auto___44596);
var G__44600 = (0);
seq__44318_44585 = G__44597;
chunk__44320_44586 = G__44598;
count__44321_44587 = G__44599;
i__44322_44588 = G__44600;
continue;
} else {
var f_44601 = cljs.core.first(seq__44318_44595__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44601], 0));


var G__44602 = cljs.core.next(seq__44318_44595__$1);
var G__44603 = null;
var G__44604 = (0);
var G__44605 = (0);
seq__44318_44585 = G__44602;
chunk__44320_44586 = G__44603;
count__44321_44587 = G__44604;
i__44322_44588 = G__44605;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44607], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44607)))?cljs.core.second(arglists_44607):arglists_44607)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44356_44611 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44357_44612 = null;
var count__44358_44613 = (0);
var i__44359_44614 = (0);
while(true){
if((i__44359_44614 < count__44358_44613)){
var vec__44373_44616 = chunk__44357_44612.cljs$core$IIndexed$_nth$arity$2(null,i__44359_44614);
var name_44617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44373_44616,(0),null);
var map__44376_44618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44373_44616,(1),null);
var map__44376_44619__$1 = cljs.core.__destructure_map(map__44376_44618);
var doc_44620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44376_44619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44376_44619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44617], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44621], 0));

if(cljs.core.truth_(doc_44620)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44620], 0));
} else {
}


var G__44622 = seq__44356_44611;
var G__44623 = chunk__44357_44612;
var G__44624 = count__44358_44613;
var G__44625 = (i__44359_44614 + (1));
seq__44356_44611 = G__44622;
chunk__44357_44612 = G__44623;
count__44358_44613 = G__44624;
i__44359_44614 = G__44625;
continue;
} else {
var temp__5753__auto___44626 = cljs.core.seq(seq__44356_44611);
if(temp__5753__auto___44626){
var seq__44356_44627__$1 = temp__5753__auto___44626;
if(cljs.core.chunked_seq_QMARK_(seq__44356_44627__$1)){
var c__4679__auto___44629 = cljs.core.chunk_first(seq__44356_44627__$1);
var G__44630 = cljs.core.chunk_rest(seq__44356_44627__$1);
var G__44631 = c__4679__auto___44629;
var G__44632 = cljs.core.count(c__4679__auto___44629);
var G__44633 = (0);
seq__44356_44611 = G__44630;
chunk__44357_44612 = G__44631;
count__44358_44613 = G__44632;
i__44359_44614 = G__44633;
continue;
} else {
var vec__44382_44634 = cljs.core.first(seq__44356_44627__$1);
var name_44635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44382_44634,(0),null);
var map__44385_44636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44382_44634,(1),null);
var map__44385_44637__$1 = cljs.core.__destructure_map(map__44385_44636);
var doc_44638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385_44637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385_44637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44635], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44639], 0));

if(cljs.core.truth_(doc_44638)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44638], 0));
} else {
}


var G__44642 = cljs.core.next(seq__44356_44627__$1);
var G__44643 = null;
var G__44644 = (0);
var G__44645 = (0);
seq__44356_44611 = G__44642;
chunk__44357_44612 = G__44643;
count__44358_44613 = G__44644;
i__44359_44614 = G__44645;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44390 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44391 = null;
var count__44392 = (0);
var i__44393 = (0);
while(true){
if((i__44393 < count__44392)){
var role = chunk__44391.cljs$core$IIndexed$_nth$arity$2(null,i__44393);
var temp__5753__auto___44647__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44647__$1)){
var spec_44648 = temp__5753__auto___44647__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44648)], 0));
} else {
}


var G__44649 = seq__44390;
var G__44650 = chunk__44391;
var G__44651 = count__44392;
var G__44652 = (i__44393 + (1));
seq__44390 = G__44649;
chunk__44391 = G__44650;
count__44392 = G__44651;
i__44393 = G__44652;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__44390);
if(temp__5753__auto____$1){
var seq__44390__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44390__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44390__$1);
var G__44656 = cljs.core.chunk_rest(seq__44390__$1);
var G__44657 = c__4679__auto__;
var G__44658 = cljs.core.count(c__4679__auto__);
var G__44659 = (0);
seq__44390 = G__44656;
chunk__44391 = G__44657;
count__44392 = G__44658;
i__44393 = G__44659;
continue;
} else {
var role = cljs.core.first(seq__44390__$1);
var temp__5753__auto___44660__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44660__$2)){
var spec_44661 = temp__5753__auto___44660__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44661)], 0));
} else {
}


var G__44662 = cljs.core.next(seq__44390__$1);
var G__44663 = null;
var G__44664 = (0);
var G__44665 = (0);
seq__44390 = G__44662;
chunk__44391 = G__44663;
count__44392 = G__44664;
i__44393 = G__44665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44672 = cljs.core.ex_cause(t);
via = G__44671;
t = G__44672;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44415 = datafied_throwable;
var map__44415__$1 = cljs.core.__destructure_map(map__44415);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44415__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44415__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44415__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44416 = cljs.core.last(via);
var map__44416__$1 = cljs.core.__destructure_map(map__44416);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44417 = data;
var map__44417__$1 = cljs.core.__destructure_map(map__44417);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44417__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44417__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44417__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44418 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44418__$1 = cljs.core.__destructure_map(map__44418);
var top_data = map__44418__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44422 = phase;
var G__44422__$1 = (((G__44422 instanceof cljs.core.Keyword))?G__44422.fqn:null);
switch (G__44422__$1) {
case "read-source":
var map__44424 = data;
var map__44424__$1 = cljs.core.__destructure_map(map__44424);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44424__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44424__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44426 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44426__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44426,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44426);
var G__44426__$2 = (cljs.core.truth_((function (){var fexpr__44427 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44427.cljs$core$IFn$_invoke$arity$1 ? fexpr__44427.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44427.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44426__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44426__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44426__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44433 = top_data;
var G__44433__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44433,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44433);
var G__44433__$2 = (cljs.core.truth_((function (){var fexpr__44441 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44441.cljs$core$IFn$_invoke$arity$1 ? fexpr__44441.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44441.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44433__$1);
var G__44433__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44433__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44433__$2);
var G__44433__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44433__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44433__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44433__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44433__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(3),null);
var G__44470 = top_data;
var G__44470__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44470,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44470);
var G__44470__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44470__$1);
var G__44470__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44470__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44470__$2);
var G__44470__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44470__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44470__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44470__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44470__$4;
}

break;
case "execution":
var vec__44476 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44414_SHARP_){
var or__4253__auto__ = (p1__44414_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__44485 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44485.cljs$core$IFn$_invoke$arity$1 ? fexpr__44485.cljs$core$IFn$_invoke$arity$1(p1__44414_SHARP_) : fexpr__44485.call(null,p1__44414_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__44488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44488__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44488,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44488);
var G__44488__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44488__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44488__$1);
var G__44488__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44488__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44488__$2);
var G__44488__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44488__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44488__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44488__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44488__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44422__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44499){
var map__44501 = p__44499;
var map__44501__$1 = cljs.core.__destructure_map(map__44501);
var triage_data = map__44501__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44501__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44510 = phase;
var G__44510__$1 = (((G__44510 instanceof cljs.core.Keyword))?G__44510.fqn:null);
switch (G__44510__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44511 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44513 = loc;
var G__44514 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44516_44695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44517_44696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44518_44697 = true;
var _STAR_print_fn_STAR__temp_val__44519_44698 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44518_44697);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44519_44698);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44517_44696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44516_44695);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44511,G__44512,G__44513,G__44514) : format.call(null,G__44511,G__44512,G__44513,G__44514));

break;
case "macroexpansion":
var G__44522 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44523 = cause_type;
var G__44524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44525 = loc;
var G__44526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44522,G__44523,G__44524,G__44525,G__44526) : format.call(null,G__44522,G__44523,G__44524,G__44525,G__44526));

break;
case "compile-syntax-check":
var G__44527 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44528 = cause_type;
var G__44529 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44530 = loc;
var G__44531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44527,G__44528,G__44529,G__44530,G__44531) : format.call(null,G__44527,G__44528,G__44529,G__44530,G__44531));

break;
case "compilation":
var G__44532 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44533 = cause_type;
var G__44534 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44535 = loc;
var G__44536 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44532,G__44533,G__44534,G__44535,G__44536) : format.call(null,G__44532,G__44533,G__44534,G__44535,G__44536));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44543 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44544 = symbol;
var G__44545 = loc;
var G__44546 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44549_44721 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44550_44722 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44552_44723 = true;
var _STAR_print_fn_STAR__temp_val__44553_44724 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44552_44723);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44553_44724);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44497_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44497_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44550_44722);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44549_44721);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44543,G__44544,G__44545,G__44546) : format.call(null,G__44543,G__44544,G__44545,G__44546));
} else {
var G__44564 = "Execution error%s at %s(%s).\n%s\n";
var G__44565 = cause_type;
var G__44566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44567 = loc;
var G__44568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44564,G__44565,G__44566,G__44567,G__44568) : format.call(null,G__44564,G__44565,G__44566,G__44567,G__44568));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44510__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
