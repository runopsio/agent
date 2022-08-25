goog.provide('webapp.tasks.views.new_task.task_details');
var module$node_modules$clipboard$dist$clipboard=shadow.js.require("module$node_modules$clipboard$dist$clipboard", {});
webapp.tasks.views.new_task.task_details.copy_clipboard = (function webapp$tasks$views$new_task$task_details$copy_clipboard(data_clipboard_target){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.copy-to-clipboard.absolute.w-6.h-6.rounded-lg.p-x-small.top-2.right-2.bg-gray-200.cursor-pointer.shadow.box-border.opacity-0.group-hover:opacity-100.transition","div.copy-to-clipboard.absolute.w-6.h-6.rounded-lg.p-x-small.top-2.right-2.bg-gray-200.cursor-pointer.shadow.box-border.opacity-0.group-hover:opacity-100.transition",-144145537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-clipboard-target","data-clipboard-target",810388567),data_clipboard_target], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/icons/icon-copy.svg"], null)], null)], null)], null);
});
webapp.tasks.views.new_task.task_details.main = (function webapp$tasks$views$new_task$task_details$main(){
var task_details = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webapp.subs","active-task-details","webapp.subs/active-task-details",-481890894)], null));
var clipboard = (new module$node_modules$clipboard$dist$clipboard(".copy-to-clipboard"));
var _ = clipboard.on("success",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-snackbar","show-snackbar",-972926495),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"text","text",-1790561697),"Text copied to clipboard"], null)], null));
}));
return (function (){
var task = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(task_details));
var task_logs = new cljs.core.Keyword(null,"task-logs","task-logs",-274919405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(task_details));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex.mb-regular","header.flex.mb-regular",-1606686508),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow","div.flex-grow",651082791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.components.headings.h2,["Task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task))].join(''),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(task))," - ",webapp.formatters.time_ago(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(task))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.grid.grid-cols-3","section.grid.grid-cols-3",-1236777620),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.col-span-2","section.col-span-2",1095438550),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-600.font-light","span.text-sm.text-gray-600.font-light",-1992500350),"Target: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-sm","span.font-semibold.text-sm",-1796218823),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-600.font-light","span.text-sm.text-gray-600.font-light",-1992500350),"Type: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-sm","span.font-semibold.text-sm",-1796218823),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(task)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-600.font-light","span.text-sm.text-gray-600.font-light",-1992500350),"User: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-sm","span.font-semibold.text-sm",-1796218823),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(task))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-600.font-light","span.text-sm.text-gray-600.font-light",-1992500350),"Redact: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-sm","span.font-semibold.text-sm",-1796218823),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"redact","redact",591770150).cljs$core$IFn$_invoke$arity$1(task);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400.italic","span.text-xs.text-gray-400.italic",-164051739),"This task has no information regards redaction"], null);
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-600.font-light","span.text-sm.text-gray-600.font-light",-1992500350),"Status: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-sm","span.font-semibold.text-sm",-1796218823),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),webapp.tasks.views.reviewers.reviewers(new cljs.core.Keyword(null,"opened","opened",-1451743091),task,new cljs.core.Keyword(null,"tasks","tasks",-1754368880))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-regular","div.pt-regular",1480751669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.pb-regular.gap-large","div.grid.grid-cols-2.pb-regular.gap-large",-556981706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.text-gray-800","span.text-sm.text-gray-800",144963547),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400.italic","span.text-xs.text-gray-400.italic",-164051739),"This task has no description"], null);
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.col-span-2","section.col-span-2",1095438550),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.flex.mb-regular.col-span-2","header.flex.mb-regular.col-span-2",-1862534137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-grow.font-bold","span.flex-grow.font-bold",-1334030883),"Script"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.relative.rounded-lg.bg-gray-100.font-mono.p-regular.text-xs.overflow-auto.max-h-32.whitespace-pre.group","section.relative.rounded-lg.bg-gray-100.font-mono.p-regular.text-xs.overflow-auto.max-h-32.whitespace-pre.group",-1722829474),webapp.tasks.views.new_task.task_details.copy_clipboard("#task-script"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#task-script","span#task-script",235717737),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task),"failure")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task),"success"))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webapp.tasks.views.tasks_logs_container.main,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"logs","logs",1068148008),new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"log-status","log-status",1744062288),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task_logs),new cljs.core.Keyword(null,"classes","classes",2037804510),"h-96",new cljs.core.Keyword(null,"task-status","task-status",1198461430),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null):null)], null)], null)], null);
});
});

//# sourceMappingURL=webapp.tasks.views.new_task.task_details.js.map
