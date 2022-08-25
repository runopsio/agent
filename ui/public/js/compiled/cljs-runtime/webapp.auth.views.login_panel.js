goog.provide('webapp.auth.views.login_panel');
webapp.auth.views.login_panel.submit = (function webapp$auth$views$login_panel$submit(email){
localStorage.setItem("user_email_login",email);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.auth.events","get-auth-link","webapp.auth.events/get-auth-link",-576920887),email], null));
});
webapp.auth.views.login_panel.email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = localStorage.getItem("user_email_login");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
webapp.auth.views.login_panel.loading = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
webapp.auth.views.login_panel.panel = (function webapp$auth$views$login_panel$panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md:w-96.w-full.m-auto","div.md:w-96.w-full.m-auto",-1357002572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.grid.place-items-center.mb-large","header.grid.place-items-center.mb-large",-146098592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-16.mb-large","figure.w-16.mb-large",224697210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/runops-icon-black.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Sign in to your account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.px-regular.py-large.rounded-lg.bg-white.border","section.px-regular.py-large.rounded-lg.bg-white.border",-545987599),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

cljs.core.reset_BANG_(webapp.auth.views.login_panel.loading,cljs.core.not(cljs.core.deref(webapp.auth.views.login_panel.loading)));

return webapp.auth.views.login_panel.submit(cljs.core.deref(webapp.auth.views.login_panel.email));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.forms.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Email",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32083_SHARP_){
return cljs.core.reset_BANG_(webapp.auth.views.login_panel.email,p1__32083_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(webapp.auth.views.login_panel.email),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Login",new cljs.core.Keyword(null,"status","status",-1997798413),(cljs.core.truth_(cljs.core.deref(webapp.auth.views.login_panel.loading))?new cljs.core.Keyword(null,"loading","loading",-737050189):null),new cljs.core.Keyword(null,"full-width","full-width",1911330562),true,new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-regular.text-right","div.pt-regular.text-right",1495128934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-blue-500.text-sm","a.text-blue-500.text-sm",-1436602129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/signup"], null),"I do not have an account"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=webapp.auth.views.login_panel.js.map
