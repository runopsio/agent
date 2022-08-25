goog.provide('webapp.components.badge');
/**
 * Element from: https://tailwindui.com/components/application-ui/elements/badges
 *   text -> the actual html you need inside the badge
 *   on-close -> callback that will be triggered when user clicks on close
 */
webapp.components.badge.small = (function webapp$components$badge$small(text,on_close){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700"], null),text,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-gray-300 hover:text-gray-500 focus:outline-none focus:bg-gray-300 focus:text-gray-500",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),["Remove ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2 w-2",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 8 8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),"1.5",new cljs.core.Keyword(null,"d","d",1972142424),"M1 1l6 6m0-6L1 7"], null)], null)], null)], null)], null);
});
/**
 * Element from: https://tailwindui.com/components/application-ui/elements/badges
 *   text -> the actual html you need inside the badge
 *   on-close -> callback that will be triggered when user clicks on close
 */
webapp.components.badge.basic = (function webapp$components$badge$basic(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-0.5 px-2 rounded-full text-xs font-medium bg-gray-200 text-gray-700"], null),text], null);
});

//# sourceMappingURL=webapp.components.badge.js.map
