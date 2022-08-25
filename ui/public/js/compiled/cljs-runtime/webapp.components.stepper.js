goog.provide('webapp.components.stepper');
webapp.components.stepper.complete_circle = (function webapp$components$stepper$complete_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 text-white",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null)], null);
});
webapp.components.stepper.current_circle = (function webapp$components$stepper$current_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2.5 w-2.5 bg-indigo-600 rounded-full"], null)], null)], null);
});
webapp.components.stepper.upcoming_circle = (function webapp$components$stepper$upcoming_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2.5 w-2.5 bg-transparent rounded-full bg-gray-300 group-hover:bg-gray-400"], null)], null)], null);
});
/**
 * Element from: https://tailwindui.com/components/application-ui/navigation/steps#component-fe94b9131ea11970b4653b2f0d0c83cd
 *   step -> {}, the couple of data which will determine the step.
 *   hash-last-step -> string, it is a hash compounding by title and status string together.
 *   
 *   step is compounding by:
 * status -> enum string (:current :complete :upcoming), the status of the step.
 * title -> string, the title showed in front of step
 * text -> string, the text showed below the title
 */
webapp.components.stepper.step = (function webapp$components$stepper$step(p__36082,hash_last_step){
var map__36083 = p__36082;
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var last_step_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hash_last_step,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''));
var active_step_QMARK_ = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"upcoming")));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"list",new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-hidden border-none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative pb-10"], null),(((!(last_step_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ",((active_step_QMARK_)?"bg-indigo-600":"bg-gray-300")].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex items-start group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-9 flex items-center"], null),(function (){var G__36084 = status;
switch (G__36084) {
case "complete":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.stepper.complete_circle], null);

break;
case "current":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.stepper.current_circle], null);

break;
case "upcoming":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.stepper.upcoming_circle], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36084)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4 min-w-0 flex flex-col"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-semibold tracking-wide uppercase"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-500"], null),text], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
});
/**
 * This function crafts the stepper with steps.
 *   stepper -> {(keyword step-name) {:status enum :title string :text string }}, the stepper is the dictionary of steps.
 *   
 *   Each step inside of steppers is compounding by:
 * status -> enum string (:current :complete :upcoming), the status of the step.
 * title -> string, the title showed in front of step
 * text -> string, the text showed below the title
 * 
 *   e.g {:agent {:status :complete :title 'your agent' :text 'setup your agent'}}
 */
webapp.components.stepper.main = (function webapp$components$stepper$main(stepper){
var steps = cljs.core.vals(stepper);
var last_step = cljs.core.last(steps);
var hash_last_step = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(last_step)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(last_step))].join('');
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36086_SHARP_){
return webapp.components.stepper.step(p1__36086_SHARP_,hash_last_step);
}),steps);
});

//# sourceMappingURL=webapp.components.stepper.js.map
