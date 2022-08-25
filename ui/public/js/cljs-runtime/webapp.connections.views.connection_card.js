goog.provide('webapp.connections.views.connection_card');
webapp.connections.views.connection_card.main = (function webapp$connections$views$connection_card$main(attr,target_type,target_img,configs){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attr);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(attr);
var img = new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(attr);
var description = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(attr);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.flip_card.main,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp-front","comp-front",-689769835),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),["logo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null)], null)], null),new cljs.core.Keyword(null,"comp-back","comp-back",1974529789),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-gray-600 whitespace-pre-line"], null),description], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(target_type,value);

cljs.core.reset_BANG_(target_img,img);

return cljs.core.reset_BANG_(configs,webapp.connections.utilities.get_config_keys(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null));
});

//# sourceMappingURL=webapp.connections.views.connection_card.js.map
