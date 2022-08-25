goog.provide('webapp.secrets.views.main');
webapp.secrets.views.main.close_modal_dialog = (function webapp$secrets$views$main$close_modal_dialog(){
var dialog_text = "Are you sure you want to discard this new secret?";
var on_success_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});
var open_dialog = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-dialog","open-dialog",-1381626691),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),dialog_text,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_dialog], null)], null));
});
return open_dialog();
});
webapp.secrets.views.main.section_header = (function webapp$secrets$views$main$section_header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-regular items-center mb-regular"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),webapp.components.button.primary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create new secret",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.secret_form_modal.form], null),new cljs.core.Keyword(null,"large","large",-196820544),webapp.secrets.views.main.close_modal_dialog], null));
})], null))], null)], null);
});
webapp.secrets.views.main.panel = (function webapp$secrets$views$main$panel(){
var secrets = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->secrets-list","secrets->secrets-list",628533203)], null));
var searched_secrets = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"secrets->get-secrets","secrets->get-secrets",-212084076)], null));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-large","div.px-large",-711310353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.main.section_header,searched_secrets,cljs.core.deref(secrets)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.secrets.views.grid_view.main,cljs.core.deref(secrets)], null)], null);
});
});

//# sourceMappingURL=webapp.secrets.views.main.js.map
