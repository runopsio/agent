goog.provide('webapp.components.data_grid_table');
var module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd=shadow.js.require("module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd", {});
/**
 * head -> is an array of strings where each string corresponds to each table title.
 *   body -> is an array matrix where each array corresponds to one line of the table
 */
webapp.components.data_grid_table.main = (function webapp$components$data_grid_table$main(head,body){
var _BANG_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),null], null));
var head_formatted = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),value,new cljs.core.Keyword(null,"source","source",-433931539),idx], null);
}),head);
return (function (){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"data-grid-table",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_ref,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),(new module$node_modules$$datagridxl$datagridxl2$datagridxl$datagridxl2_umd(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_ref)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),body,new cljs.core.Keyword(null,"columns","columns",1998437288),head_formatted,new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Sora",new cljs.core.Keyword(null,"allowEditCells","allowEditCells",1941230868),false,new cljs.core.Keyword(null,"instantActivate","instantActivate",-818124083),false,new cljs.core.Keyword(null,"bottomBar","bottomBar",-2127386060),cljs.core.PersistentVector.EMPTY], null)))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-5/6 border flex-grow",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_ref,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),el);
})], null)], null);
})], null));
});
});

//# sourceMappingURL=webapp.components.data_grid_table.js.map
