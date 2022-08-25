goog.provide('webapp.components.table_task_logs');
var module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd=shadow.js.require("module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
webapp.components.table_task_logs.main = (function webapp$components$table_task_logs$main(head,body){
var reference = module$node_modules$react$index.useRef(null);
var head_formatted = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),value,new cljs.core.Keyword(null,"source","source",-433931539),idx], null);
}),head);
module$node_modules$react$index.useEffect((function (){
(reference.current.grid = (new module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd(reference.current,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),body,new cljs.core.Keyword(null,"columns","columns",1998437288),head_formatted], null)))));

return undefined;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col w-full h-72",new cljs.core.Keyword(null,"ref","ref",1289896967),reference], null)], null);
});

//# sourceMappingURL=webapp.components.table_task_logs.js.map
