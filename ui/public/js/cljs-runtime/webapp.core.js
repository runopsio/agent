goog.provide('webapp.core');
webapp.core.dev_setup = (function webapp$core$dev_setup(){
if(webapp.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
webapp.core.mount_root = (function webapp$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.main_panel], null),root_el);
});
webapp.core.init = (function webapp$core$init(){
webapp.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.events","initialize-db","webapp.events/initialize-db",167971186)], null));

webapp.core.dev_setup();

return webapp.core.mount_root();
});

//# sourceMappingURL=webapp.core.js.map
