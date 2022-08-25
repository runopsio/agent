goog.provide('webapp.settings.views.slack_integration_callback');
webapp.settings.views.slack_integration_callback.main = (function webapp$settings$views$slack_integration_callback$main(){
var search_string = window.location.search;
var url_params = (new URLSearchParams(search_string));
var token = url_params.get("token");
var slack_param = goog.crypt.base64.decodeString(url_params.get("slack"));
var error = url_params.get("error");
localStorage.setItem("jwt-token",token);

if(cljs.core.truth_(error)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.auth.events","login-error","webapp.auth.events/login-error",-552927581),error], null));
} else {
}

window.location.replace(slack_param);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Verifying authentication",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.w-16","span.w-16",1404963181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline.animate-spin","img.inline.animate-spin",1020808394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-refresh.svg"], null)], null)], null)], null);
});

//# sourceMappingURL=webapp.settings.views.slack_integration_callback.js.map
