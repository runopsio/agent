goog.provide('webapp.templates.views.template_view');
if((typeof webapp !== 'undefined') && (typeof webapp.templates !== 'undefined') && (typeof webapp.templates.views !== 'undefined') && (typeof webapp.templates.views.template_view !== 'undefined') && (typeof webapp.templates.views.template_view.template_view !== 'undefined')){
} else {
webapp.templates.views.template_view.template_view = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30220 = cljs.core.get_global_hierarchy;
return (fexpr__30220.cljs$core$IFn$_invoke$arity$0 ? fexpr__30220.cljs$core$IFn$_invoke$arity$0() : fexpr__30220.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("webapp.templates.views.template-view","template-view"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
webapp.templates.views.template_view.template_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ready","ready",1086465795),(function (_){
var template = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates->selected-template","templates->selected-template",1454285310)], null));
var connection_filters = new cljs.core.Keyword(null,"connections","connections",-2064090887).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"runops_configs","runops_configs",1315114080).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))))));
var connection_filter__GT_name = (function (connections){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30222_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30222_SHARP_)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection_filters)));
}),connections);
});
var connection_filter__GT_type = (function (connections){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30223_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30223_SHARP_)]),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection_filters)]));
}),connections);
});
var all_connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var connections_combobox_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_connections = (function (c){
var connections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(connection_filters))){
cljs.core.reset_BANG_(connections,connection_filter__GT_name(c));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(connection_filters))){
cljs.core.reset_BANG_(connections,connection_filter__GT_type(c));
} else {
}

cljs.core.reset_BANG_(all_connections,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30224_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30224_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30224_SHARP_))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30224_SHARP_)),")"].join('')], null));
}),cljs.core.deref(connections)));

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var set_connections_error = (function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["couldn't get all connections",e], 0));

return cljs.core.reset_BANG_(connections_combobox_status,null);
});
var get_all_connections = (function (){
return webapp.http.runops_api.request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"/v1/targets?limit=2000&status=active",new cljs.core.Keyword(null,"on-success","on-success",1786904109),set_connections,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),set_connections_error], null));
});
var selected_connection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var update_state = (function (p1__30225_SHARP_,p2__30226_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,p1__30225_SHARP_,p2__30226_SHARP_);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h4,"Finish the setup to run your template",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates->run-template","templates->run-template",797608252),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref(state),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.deref(selected_connection),new cljs.core.Keyword(null,"modal-body","modal-body",-1430211731),webapp.tasks.views.task_details.main], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.mb-regular","header.mb-regular",622013361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,decodeURIComponent(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-xs","span.text-gray-500.text-xs",1539317662),"Fill the params below for this template"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function webapp$templates$views$template_view$iter__30249(s__30250){
return (new cljs.core.LazySeq(null,(function (){
var s__30250__$1 = s__30250;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30250__$1);
if(temp__5753__auto__){
var s__30250__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30250__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__30250__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__30252 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__30251 = (0);
while(true){
if((i__30251 < size__4651__auto__)){
var param = cljs.core._nth(c__4650__auto__,i__30251);
var metadata = (function (){var G__30254 = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)));
var fexpr__30253 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(param);
return (fexpr__30253.cljs$core$IFn$_invoke$arity$1 ? fexpr__30253.cljs$core$IFn$_invoke$arity$1(G__30254) : fexpr__30253.call(null,G__30254));
})();
cljs.core.chunk_append(b__30252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.templates.views.template_dynamic_form.dynamic_form,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),param),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"minlength","minlength",259053545).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(metadata),param,new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata),((function (i__30251,metadata,param,c__4650__auto__,size__4651__auto__,b__30252,s__30250__$2,temp__5753__auto__,template,connection_filters,connection_filter__GT_name,connection_filter__GT_type,all_connections,connections_combobox_status,set_connections,set_connections_error,get_all_connections,selected_connection,state,update_state){
return (function (p1__30227_SHARP_){
return update_state(param,p1__30227_SHARP_.target.value);
});})(i__30251,metadata,param,c__4650__auto__,size__4651__auto__,b__30252,s__30250__$2,temp__5753__auto__,template,connection_filters,connection_filter__GT_name,connection_filter__GT_type,all_connections,connections_combobox_status,set_connections,set_connections_error,get_all_connections,selected_connection,state,update_state))
,new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(metadata)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),param], null)));

var G__30265 = (i__30251 + (1));
i__30251 = G__30265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30252),webapp$templates$views$template_view$iter__30249(cljs.core.chunk_rest(s__30250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30252),null);
}
} else {
var param = cljs.core.first(s__30250__$2);
var metadata = (function (){var G__30256 = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)));
var fexpr__30255 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(param);
return (fexpr__30255.cljs$core$IFn$_invoke$arity$1 ? fexpr__30255.cljs$core$IFn$_invoke$arity$1(G__30256) : fexpr__30255.call(null,G__30256));
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.templates.views.template_dynamic_form.dynamic_form,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(metadata),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),param),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"minlength","minlength",259053545).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(metadata),param,new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata),((function (metadata,param,s__30250__$2,temp__5753__auto__,template,connection_filters,connection_filter__GT_name,connection_filter__GT_type,all_connections,connections_combobox_status,set_connections,set_connections_error,get_all_connections,selected_connection,state,update_state){
return (function (p1__30227_SHARP_){
return update_state(param,p1__30227_SHARP_.target.value);
});})(metadata,param,s__30250__$2,temp__5753__auto__,template,connection_filters,connection_filter__GT_name,connection_filter__GT_type,all_connections,connections_combobox_status,set_connections,set_connections_error,get_all_connections,selected_connection,state,update_state))
,new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(metadata)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),param], null)),webapp$templates$views$template_view$iter__30249(cljs.core.rest(s__30250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-regular"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h3,"Connection name",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-xs","span.text-gray-500.text-xs",1539317662),"Type the name of the connection you want to run this template"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.combobox.main,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"list-classes","list-classes",-1246198045),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],["min-w-64",cljs.core.deref(selected_connection),"Select a connection",(function (){
get_all_connections();

return cljs.core.reset_BANG_(connections_combobox_status,new cljs.core.Keyword(null,"loading","loading",-737050189));
}),"select-connection",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(connections_combobox_status),new cljs.core.Keyword(null,"loading","loading",-737050189)),"Select a connection","Connection",cljs.core.deref(all_connections),(function (p1__30228_SHARP_){
return cljs.core.reset_BANG_(selected_connection,p1__30228_SHARP_);
})])], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.divider.main], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.flex.gap-regular.justify-end","footer.flex.gap-regular.justify-end",-126062717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.button.primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-small items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Run template"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-status","form-status",-635982090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)),new cljs.core.Keyword(null,"loading","loading",-737050189)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle-white.svg"], null)], null)], null):null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)),new cljs.core.Keyword(null,"loading","loading",-737050189))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-status","form-status",-635982090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template)),new cljs.core.Keyword(null,"loading","loading",-737050189)))),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null)], null)], null)], null);
});
}));
webapp.templates.views.template_view.template_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin",new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-loader-circle.svg"], null)], null)], null)], null);
}));
webapp.templates.views.template_view.template_view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 text-xl"], null),"No template selected"], null)], null);
}));

//# sourceMappingURL=webapp.templates.views.template_view.js.map
