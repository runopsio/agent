goog.provide('webapp.components.codemirror_editor');
var module$node_modules$$codemirror$basic_setup$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$basic_setup$dist$index_cjs", {});
webapp.components.codemirror_editor.editor = (function webapp$components$codemirror_editor$editor(p__51519){
var map__51520 = p__51519;
var map__51520__$1 = cljs.core.__destructure_map(map__51520);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _BANG_editor_view = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),null], null));
var editor_state = (state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null));
var lambda_view = (function (p1__51517_SHARP_){
return (new module$node_modules$$codemirror$basic_setup$dist$index_cjs.EditorView(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),editor_state,new cljs.core.Keyword(null,"parent","parent",-878878779),p1__51517_SHARP_], null))));
});
var component = (function (){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"codemirror-editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_editor_view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),lambda_view(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_editor_view))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-lg overflow-scroll border",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51518_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_editor_view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),p1__51518_SHARP_);
})], null)], null);
})], null));
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor-state","editor-state",579582138),editor_state,new cljs.core.Keyword(null,"editor-component","editor-component",-449297328),component,new cljs.core.Keyword(null,"editor-view","editor-view",-1778268605),_BANG_editor_view], null);
});

//# sourceMappingURL=webapp.components.codemirror_editor.js.map
