goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units');
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$unit_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.length_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$length_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.angle_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$angle_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.time_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$time_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.frequency_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$frequency_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.resolution_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$resolution_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.convertable_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.convert = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$convert(p__62517,right){
var map__62518 = p__62517;
var map__62518__$1 = cljs.core.__destructure_map(map__62518);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62518__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62518__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.name(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.read_unit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$read_unit(s){
var temp__5753__auto__ = cljs.core.re_matches(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_re,s);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__62519 = temp__5753__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62519,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_predicate(unit){
return (function (x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.unit_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.convert(x,unit);
}
} else {
var ex_message = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(unit);
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return u((0));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return u(x);
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__62522 = u(x);
var map__62522__$1 = cljs.core.__destructure_map(map__62522);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__62523 = u(y);
var map__62523__$1 = cljs.core.__destructure_map(map__62523);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62523__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u((m1 + m2));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__62543__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_,day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__62543 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__62544__i = 0, G__62544__a = new Array(arguments.length -  2);
while (G__62544__i < G__62544__a.length) {G__62544__a[G__62544__i] = arguments[G__62544__i + 2]; ++G__62544__i;}
  more = new cljs.core.IndexedSeq(G__62544__a,0,null);
} 
return G__62543__delegate.call(this,x,y,more);};
G__62543.cljs$lang$maxFixedArity = 2;
G__62543.cljs$lang$applyTo = (function (arglist__62545){
var x = cljs.core.first(arglist__62545);
arglist__62545 = cljs.core.next(arglist__62545);
var y = cljs.core.first(arglist__62545);
var more = cljs.core.rest(arglist__62545);
return G__62543__delegate(x,y,more);
});
G__62543.cljs$core$IFn$_invoke$arity$variadic = G__62543__delegate;
return G__62543;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__62546 = null;
if (arguments.length > 2) {
var G__62547__i = 0, G__62547__a = new Array(arguments.length -  2);
while (G__62547__i < G__62547__a.length) {G__62547__a[G__62547__i] = arguments[G__62547__i + 2]; ++G__62547__i;}
G__62546 = new cljs.core.IndexedSeq(G__62547__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__62546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___0;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_adder_$_u_PLUS_;
})()
});
/**
 * Create a subtraction function for subtracting Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(unit);
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___1 = (function (x){
return u((- x));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__62524 = u(x);
var map__62524__$1 = cljs.core.__destructure_map(map__62524);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62524__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__62525 = u(y);
var map__62525__$1 = cljs.core.__destructure_map(map__62525);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62525__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u((m1 - m2));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__62548__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_,day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__62548 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__62549__i = 0, G__62549__a = new Array(arguments.length -  2);
while (G__62549__i < G__62549__a.length) {G__62549__a[G__62549__i] = arguments[G__62549__i + 2]; ++G__62549__i;}
  more = new cljs.core.IndexedSeq(G__62549__a,0,null);
} 
return G__62548__delegate.call(this,x,y,more);};
G__62548.cljs$lang$maxFixedArity = 2;
G__62548.cljs$lang$applyTo = (function (arglist__62550){
var x = cljs.core.first(arglist__62550);
arglist__62550 = cljs.core.next(arglist__62550);
var y = cljs.core.first(arglist__62550);
var more = cljs.core.rest(arglist__62550);
return G__62548__delegate(x,y,more);
});
G__62548.cljs$core$IFn$_invoke$arity$variadic = G__62548__delegate;
return G__62548;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__62551 = null;
if (arguments.length > 2) {
var G__62552__i = 0, G__62552__a = new Array(arguments.length -  2);
while (G__62552__i < G__62552__a.length) {G__62552__a[G__62552__i] = arguments[G__62552__i + 2]; ++G__62552__i;}
G__62551 = new cljs.core.IndexedSeq(G__62552__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__62551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_subtractor_$_u_;
})()
});
/**
 * Create a multiplication function for multiplying Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?(function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_percent_STAR_(x,y){
return ((x * y) / (100));
}):cljs.core._STAR_);
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_ = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return u((1));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return u(x);
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__62526 = u(x);
var map__62526__$1 = cljs.core.__destructure_map(map__62526);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62526__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__62527 = u(y);
var map__62527__$1 = cljs.core.__destructure_map(map__62527);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62527__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u((op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2)));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__62553__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_,day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__62553 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__62554__i = 0, G__62554__a = new Array(arguments.length -  2);
while (G__62554__i < G__62554__a.length) {G__62554__a[G__62554__i] = arguments[G__62554__i + 2]; ++G__62554__i;}
  more = new cljs.core.IndexedSeq(G__62554__a,0,null);
} 
return G__62553__delegate.call(this,x,y,more);};
G__62553.cljs$lang$maxFixedArity = 2;
G__62553.cljs$lang$applyTo = (function (arglist__62555){
var x = cljs.core.first(arglist__62555);
arglist__62555 = cljs.core.next(arglist__62555);
var y = cljs.core.first(arglist__62555);
var more = cljs.core.rest(arglist__62555);
return G__62553__delegate(x,y,more);
});
G__62553.cljs$core$IFn$_invoke$arity$variadic = G__62553__delegate;
return G__62553;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__62556 = null;
if (arguments.length > 2) {
var G__62557__i = 0, G__62557__a = new Array(arguments.length -  2);
while (G__62557__i < G__62557__a.length) {G__62557__a[G__62557__i] = arguments[G__62557__i + 2]; ++G__62557__i;}
G__62556 = new cljs.core.IndexedSeq(G__62557__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__62556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___0;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___1;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_multiplier_$_u_STAR_;
})()
});
/**
 * Create a division function for dividing Units.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider(unit){
var u = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?(function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_percent_div(x,y){
return ((100) * (x / y));
}):cljs.core._SLASH_);
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__1 = (function (x){
return u(((1) / x));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__62528 = u(x);
var map__62528__$1 = cljs.core.__destructure_map(map__62528);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__62529 = u(y);
var map__62529__$1 = cljs.core.__destructure_map(map__62529);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62529__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u((op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2)));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__62558__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud,day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__62558 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__62559__i = 0, G__62559__a = new Array(arguments.length -  2);
while (G__62559__i < G__62559__a.length) {G__62559__a[G__62559__i] = arguments[G__62559__i + 2]; ++G__62559__i;}
  more = new cljs.core.IndexedSeq(G__62559__a,0,null);
} 
return G__62558__delegate.call(this,x,y,more);};
G__62558.cljs$lang$maxFixedArity = 2;
G__62558.cljs$lang$applyTo = (function (arglist__62560){
var x = cljs.core.first(arglist__62560);
arglist__62560 = cljs.core.next(arglist__62560);
var y = cljs.core.first(arglist__62560);
var more = cljs.core.rest(arglist__62560);
return G__62558__delegate(x,y,more);
});
G__62558.cljs$core$IFn$_invoke$arity$variadic = G__62558__delegate;
return G__62558;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__62563 = null;
if (arguments.length > 2) {
var G__62564__i = 0, G__62564__a = new Array(arguments.length -  2);
while (G__62564__i < G__62564__a.length) {G__62564__a[G__62564__i] = arguments[G__62564__i + 2]; ++G__62564__i;}
G__62563 = new cljs.core.IndexedSeq(G__62564__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__62563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__1;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__2;
day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$units$make_unit_divider_$_ud;
})()
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"cm","cm",540591536));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.cm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"cm","cm",540591536));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"mm","mm",-1652850560));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.mm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"mm","mm",-1652850560));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in$ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"in","in",-1531184865));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.in_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"in","in",-1531184865));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"px","px",281329899));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"px","px",281329899));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pt","pt",556460867));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pt_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pt","pt",556460867));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pc","pc",512913453));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.pc_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pc","pc",512913453));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"%","%",1704198600));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.percent_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"%","%",1704198600));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"em","em",707813035));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.em_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"em","em",707813035));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ex","ex",-1413771341));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ex_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ex","ex",-1413771341));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ch","ch",-554717905));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ch_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ch","ch",-554717905));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rem","rem",-976484757));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rem_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rem","rem",-976484757));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vw","vw",1941049135));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vw_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vw","vw",1941049135));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vh","vh",79552846));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vh_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vh","vh",79552846));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmin","vmin",446546816));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmin_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmin","vmin",446546816));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.vmax_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"deg","deg",-681556081));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.deg_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"deg","deg",-681556081));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"grad","grad",1125187229));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.grad_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"grad","grad",1125187229));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rad","rad",-833983012));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.rad_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rad","rad",-833983012));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"turn","turn",75759344));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.turn_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"turn","turn",75759344));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"s","s",1705939918));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.s_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"s","s",1705939918));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ms","ms",-1152709733));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ms","ms",-1152709733));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.Hz_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"kHz","kHz",240398466));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.kHz_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"kHz","kHz",240398466));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpi_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpi","dpi",-986162832));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dpcm_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.dppx_div = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.js.map
