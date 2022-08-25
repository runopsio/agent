goog.provide('webapp.app');
var module$node_modules$$sentry$browser$dist$index=shadow.js.require("module$node_modules$$sentry$browser$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
webapp.app.initialize_sentry = (function webapp$app$initialize_sentry(){
return module$node_modules$$sentry$browser$dist$index.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),new cljs.core.Keyword(null,"dsn","dsn",1561266567).cljs$core$IFn$_invoke$arity$1(webapp.config.sentry),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$$sentry$tracing$dist$index.Integrations.BrowserTracing())], null),new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),new cljs.core.Keyword(null,"trace-sample-rate","trace-sample-rate",-806291409).cljs$core$IFn$_invoke$arity$1(webapp.config.sentry)], null)));
});
window.addEventListener("load",webapp.app.initialize_sentry);
/**
 * This panel works for receiving the token and storing in the session for later requests
 */
webapp.app.auth_callback_panel = (function webapp$app$auth_callback_panel(){
var search_string = window.location.search;
var url_params = (new URLSearchParams(search_string));
var token = url_params.get("token");
var slack_param = goog.crypt.base64.decodeString(url_params.get("slack"));
var error = url_params.get("error");
var redirect_after_auth = localStorage.getItem("redirect-after-auth");
var destiny = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"login","login",55217519):((cljs.core.empty_QMARK_(slack_param))?new cljs.core.Keyword(null,"home","home",-74557309):new cljs.core.Keyword(null,"slack-integration","slack-integration",1878230232)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-slack-integration-url","set-slack-integration-url",221480669),slack_param], null));

localStorage.setItem("jwt-token",token);

if((redirect_after_auth == null)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),destiny], null));
} else {
var __30467 = window.location.replace(redirect_after_auth);
var __30468__$1 = localStorage.removeItem("redirect-after-auth");
}

if(cljs.core.truth_(error)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.auth.events","login-error","webapp.auth.events/login-error",-552927581),error], null));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Verifying authentication",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.w-16","span.w-16",1404963181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline.animate-spin","img.inline.animate-spin",1020808394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-refresh.svg"], null)], null)], null)], null);
});
if((typeof webapp !== 'undefined') && (typeof webapp.app !== 'undefined') && (typeof webapp.app.layout !== 'undefined')){
} else {
webapp.app.layout = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30466 = cljs.core.get_global_hierarchy;
return (fexpr__30466.cljs$core$IFn$_invoke$arity$0 ? fexpr__30466.cljs$core$IFn$_invoke$arity$0() : fexpr__30466.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.app","layout"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.app.layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"application","application",551185447),(function (_,panels){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.min-h-screen.h-full.antialiased.bg-gray-50","section.min-h-screen.h-full.antialiased.bg-gray-50",-1275585966),webapp.components.modal.modal(),webapp.components.dialog.dialog(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.snackbar.snackbar], null),webapp.components.loaders.over_page_loader(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.shared_ui.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["container min-w-app__container ","rounded-lg bg-white ","py-regular px-large mx-auto mb-x-large"].join('')], null),panels], null)], null)], null);
}));
webapp.app.layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"application-full","application-full",1749933988),(function (_,panels){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["min-h-screen h-full min-w-app__container ","antialiased bg-white"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.modal.modal], null),webapp.components.dialog.dialog(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.snackbar.snackbar], null),webapp.components.loaders.over_page_loader(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main_modal.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.shared_ui.header.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mb-x-large.w-full","section.mb-x-large.w-full",-614113411),panels], null)], null)], null);
}));
webapp.app.layout.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"auth","auth",1389754926),(function (_,panels){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.min-h-screen.antialiased.bg-gray-50","section.min-h-screen.antialiased.bg-gray-50",1104286255),webapp.components.snackbar.snackbar(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.container.rounded-main-large.p-large.mx-auto","section.container.rounded-main-large.p-large.mx-auto",-1712312027),panels], null)], null);
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"settings-panel","settings-panel",-960581779),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.layout,new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.main], null)], null);
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.views.home.home_panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"users-panel","users-panel",501343440),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.users.views.main.users_panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"targets-panel","targets-panel",-2109839648),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.main.panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"target-create-panel","target-create-panel",1371125118),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.target_form.main,new cljs.core.Keyword(null,"create","create",-1301499256)], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"target-edit-panel","target-edit-panel",-648298405),(function (_,name){
var pathname = window.location.pathname;
var current_route = bidi.bidi.match_route(cljs.core.deref(webapp.routes.routes),pathname);
var target_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(current_route));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.targets.events","get-target","webapp.targets.events/get-target",-1282842404),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-name","target-name",-1836829889),target_name], null)], null));

return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.targets.views.target_form.main,new cljs.core.Keyword(null,"update","update",1045576396)], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"agents-panel","agents-panel",-1743775068),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.agents.views.main.panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tasks-panel","tasks-panel",1008637631),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reviews","get-reviews",1050009794)], null));

return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.main.panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new-task-panel","new-task-panel",-54361219),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.layout,new cljs.core.Keyword(null,"application-full","application-full",1749933988),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.main], null)], null);
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new-task-with-target-panel","new-task-with-target-panel",2136413551),(function (_){
var pathname = window.location.pathname;
var current_route = bidi.bidi.match_route(cljs.core.deref(webapp.routes.routes),pathname);
var target_name = new cljs.core.Keyword(null,"target-name","target-name",-1836829889).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(current_route));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.layout,new cljs.core.Keyword(null,"application-full","application-full",1749933988),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.new_task.panel.main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-name","target-name",-1836829889),target_name], null)], null)], null);
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"task-detail-panel","task-detail-panel",1589090949),(function (_){
var pathname = window.location.pathname;
var current_route = bidi.bidi.match_route(cljs.core.deref(webapp.routes.routes),pathname);
var task_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(current_route));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-task-by-id","get-task-by-id",1555438274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),task_id], null)], null));

return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.item_detail.item_detail], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quickstarts-panel","quickstarts-panel",-554227254),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"application","application",551185447),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.quickstarts.views.main.main], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"auth-callback-panel","auth-callback-panel",-658066314),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.auth_callback_panel], null);
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.auth.views.login_panel.panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"signup-panel","signup-panel",-725759078),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.auth.views.signup_panel.panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"slack-integration-panel","slack-integration-panel",680819206),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.integrations.slack.slack_panel], null));
}));
webapp.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"slack-cb-panel","slack-cb-panel",-1925031851),(function (){
return webapp.app.layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.slack_integration_callback.main], null));
}));
webapp.app.app = (function webapp$app$app(panels){
return panels;
});
webapp.app.main_panel = (function webapp$app$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-panel","webapp.subs/active-panel",-1188363582)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.app.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.routes.panels,cljs.core.deref(active_panel)], null)], null);
});

//# sourceMappingURL=webapp.app.js.map
