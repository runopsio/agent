goog.provide('webapp.config');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("webapp.env","release-type","webapp.env/release-type",824805177),webapp.env.release_type], 0));
webapp.config.debug_QMARK_ = goog.DEBUG;
webapp.config.client = webapp.env.release_type;
webapp.config.api = "https://api.runops.io";
webapp.config.launch_darkly_client_id = "614b7c6f3576ea0d34af1b0c";
webapp.config.sentry = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://11314a4b40b848c7aad6680f1f77757f@o919346.ingest.sentry.io/5924020",new cljs.core.Keyword(null,"traces-sample-rate","traces-sample-rate",-50552030),1.0], null);
webapp.config.auth0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),"iUf1dd5dWTuKJGtaTuwQ6nk8jH5mjhPV",new cljs.core.Keyword(null,"domain","domain",1847214937),"runops.us.auth0.com"], null);

//# sourceMappingURL=webapp.config.js.map
