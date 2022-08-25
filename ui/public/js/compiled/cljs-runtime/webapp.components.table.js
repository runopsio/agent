goog.provide('webapp.components.table');
/**
 * Container for the table header and content
 */
webapp.components.table.table_container = (function webapp$components$table$table_container(){
return null;
});
/**
 * This component receives one argument that is the component to be rendered
 *   and a second that is a map of html attributes to be passed to the header
 */
webapp.components.table.header = (function webapp$components$table$header(component,attrs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-gray-100.rounded-t-lg.border-gray-100.border-t.border-r.border-l.text-gray-500.font-bold.px-regular.py-x-small","header.bg-gray-100.rounded-t-lg.border-gray-100.border-t.border-r.border-l.text-gray-500.font-bold.px-regular.py-x-small",620926572),attrs,component], null);
});
/**
 * This component receives one argument that is the component to be rendered
 *   and a second that is a map of html attributes to be passed to the row container
 */
webapp.components.table.rows = (function webapp$components$table$rows(rows){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.border-b.border-l.border-r.border-gray-100","ul.border-b.border-l.border-r.border-gray-100",193901948),rows], null);
});
/**
 * This is the row, to be used inside the table/rows component
 */
webapp.components.table.row = (function webapp$components$table$row(item,attrs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.px-regular.py-small.border-b.border-gray-100.hover:bg-gray-50.transition","li.px-regular.py-small.border-b.border-gray-100.hover:bg-gray-50.transition",-1430613957),attrs,item], null);
});

//# sourceMappingURL=webapp.components.table.js.map
