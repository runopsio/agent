
shadow.cljs.devtools.client.env.module_loaded('app');

try { webapp.core.init(); } catch (e) { console.error("An error occurred when calling (webapp.core/init)"); throw(e); }