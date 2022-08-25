goog.provide('webapp.settings.views.main');
webapp.settings.views.main.layout = (function webapp$settings$views$main$layout(title,subtitle,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-5.gap-large","div.grid.grid-cols-5.gap-large",1902104048),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-700","span.text-sm.text-gray-700",-1840574602),(cljs.core.truth_(subtitle)?subtitle:null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),content], null)], null);
});
webapp.settings.views.main.link_button = (function webapp$settings$views$main$link_button(p__30355){
var map__30358 = p__30355;
var map__30358__$1 = cljs.core.__destructure_map(map__30358);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var link_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"link-text","link-text",224432076));
var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var img_alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"img-alt","img-alt",113163913));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-regular items-center justify-center border rounded-lg p-regular cursor-pointer hover:bg-gray-100 transition",new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.w-12","figure.w-12",948722793),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),img_alt], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm"], null),link_text], null)], null);
});
webapp.settings.views.main.slack_integration = (function webapp$settings$views$main$slack_integration(_){
return (function (link){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.layout,"Slack integration","Integrate your organization Slack to get more power from Runops",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.link_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Integrate your organization Slack with Runops",new cljs.core.Keyword(null,"img-src","img-src",-108905265),"/images/Slack_icon_2019.svg",new cljs.core.Keyword(null,"img-alt","img-alt",113163913),"Slack icon"], null)], null)], null)], null);
});
});
webapp.settings.views.main.no_webhooks_available = (function webapp$settings$views$main$no_webhooks_available(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mx-auto p-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block font-bold mb-large text-center"], null),"Webhooks integration is not available for your organization. Please contact us for more information."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-start-2"], null),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
})], null))], null)], null)], null);
});
webapp.settings.views.main.webhooks_integration = (function webapp$settings$views$main$webhooks_integration(_){
return (function (link){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.layout,"Webhook integration","Integrate the webhooks to get information updates from Runops",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.link_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var fexpr__30360 = (((link == null))?re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.no_webhooks_available], null)], null)):null);
return (fexpr__30360.cljs$core$IFn$_invoke$arity$0 ? fexpr__30360.cljs$core$IFn$_invoke$arity$0() : fexpr__30360.call(null));
}),new cljs.core.Keyword(null,"link-text","link-text",224432076),"Integrate with webhooks",new cljs.core.Keyword(null,"img-src","img-src",-108905265),"/images/webhooks.svg",new cljs.core.Keyword(null,"img-alt","img-alt",113163913),"Webhooks icon"], null)], null)], null)], null);
});
});
webapp.settings.views.main.github_connection = (function webapp$settings$views$main$github_connection(_){
return (function (link){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.layout,"Github connection","Connect your Github account to get the power of templates at tasks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.link_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Integrate with Github",new cljs.core.Keyword(null,"img-src","img-src",-108905265),"/images/github-mark-icon.png",new cljs.core.Keyword(null,"img-alt","img-alt",113163913),"Github icon"], null)], null)], null)], null);
});
});
webapp.settings.views.main.stripe_link = (function webapp$settings$views$main$stripe_link(_){
return (function (link){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.layout,"Stripe access","Access Stripe to check your billing information",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.link_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Acess Stripe by clicking here",new cljs.core.Keyword(null,"img-src","img-src",-108905265),"/images/stripe-logo.svg",new cljs.core.Keyword(null,"img-alt","img-alt",113163913),"Stripe icon"], null)], null)], null)], null);
});
});
webapp.settings.views.main.slack_connection = (function webapp$settings$views$main$slack_connection(_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.layout,"Slack connection","Connect your Slack user and get the best of Runops on running your queries and scripts",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.link_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-slack-integration","check-slack-integration",-1931805966)], null));
}),new cljs.core.Keyword(null,"link-text","link-text",224432076),"Connect your user on Slack",new cljs.core.Keyword(null,"img-src","img-src",-108905265),"/images/Slack_icon_2019.svg",new cljs.core.Keyword(null,"img-alt","img-alt",113163913),"Slack icon"], null)], null)], null)], null);
});
});
webapp.settings.views.main.personal_settings = (function webapp$settings$views$main$personal_settings(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-large mb-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Personal integrations",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.slack_connection], null)], null);
});
webapp.settings.views.main.org_settings = (function webapp$settings$views$main$org_settings(){
var orgs_response = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(orgs_response,res);
})], null));
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-large"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,"Organization integrations",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.slack_integration,new cljs.core.Keyword(null,"slack_integration_url","slack_integration_url",1807399304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(orgs_response))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.github_connection,new cljs.core.Keyword(null,"github_integration_url","github_integration_url",-1905420255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(orgs_response))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.webhooks_integration,new cljs.core.Keyword(null,"webhooks_customer_portal_url","webhooks_customer_portal_url",1350521918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(orgs_response))], null),(((!((new cljs.core.Keyword(null,"stripe_customer_portal_url","stripe_customer_portal_url",1890970174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(orgs_response)) == null))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-large"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,new cljs.core.Keyword(null,"Billing","Billing",1475981639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-large"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.stripe_link,new cljs.core.Keyword(null,"stripe_customer_portal_url","stripe_customer_portal_url",1890970174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(orgs_response))], null)], null):null)], null);
});
});
if((typeof webapp !== 'undefined') && (typeof webapp.settings !== 'undefined') && (typeof webapp.settings.views !== 'undefined') && (typeof webapp.settings.views.main !== 'undefined') && (typeof webapp.settings.views.main.selected_view !== 'undefined')){
} else {
webapp.settings.views.main.selected_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30363 = cljs.core.get_global_hierarchy;
return (fexpr__30363.cljs$core$IFn$_invoke$arity$0 ? fexpr__30363.cljs$core$IFn$_invoke$arity$0() : fexpr__30363.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.settings.views.main","selected-view"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.settings.views.main.selected_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"Integrations","Integrations",1815037474),(function (_,admin_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.personal_settings], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.org_settings], null):null)], null);
}));
webapp.settings.views.main.selected_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"default"], null);
}));
webapp.settings.views.main.selected_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"Users","Users",344328276),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.users.main], null);
}));
webapp.settings.views.main.selected_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"Agents","Agents",395061215),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.agents.main], null);
}));
webapp.settings.views.main.main = (function webapp$settings$views$main$main(){
var orgs_response = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings->get-users","settings->get-users",1542304376)], null));
var selected_tab = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Integrations","Integrations",1815037474));
webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/orgs",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (res){
return cljs.core.reset_BANG_(orgs_response,res);
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get admin resources"], 0));
})], null));

return (function (){
var user_groups = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user));
var admin_QMARK_ = cljs.core.some((function (p1__30364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",p1__30364_SHARP_);
}),user_groups);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-large"], null),(cljs.core.truth_(admin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30365_SHARP_){
return cljs.core.reset_BANG_(selected_tab,p1__30365_SHARP_);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Integrations","Integrations",1815037474),new cljs.core.Keyword(null,"Users","Users",344328276),new cljs.core.Keyword(null,"Agents","Agents",395061215)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.settings.views.main.selected_view,cljs.core.deref(selected_tab),admin_QMARK_], null)], null);
});
});

//# sourceMappingURL=webapp.settings.views.main.js.map
