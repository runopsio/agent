goog.provide('webapp.components.radio_button');
/**
 * Radio button component
 * 
 * parameters:
 * HashMap {
 *   :label (string) -> the label which will show up by the side of the radio button;
 *   :name (string) -> the name to distinguish from other radio button;
 *   :value (string) -> value from radio button;
 *   :on-change (function) -> function which will dispatch when select the radio button;
 *   :checked? (boolean) -> boolean to start the radio button checked or not;
 * }
 */
webapp.components.radio_button.main = (function webapp$components$radio_button$main(p__31506){
var map__31507 = p__31506;
var map__31507__$1 = cljs.core.__destructure_map(map__31507);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-small",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),checked_QMARK_], null)], null),label], null)], null);
});

//# sourceMappingURL=webapp.components.radio_button.js.map
