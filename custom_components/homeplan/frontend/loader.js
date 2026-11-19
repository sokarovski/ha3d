// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = {
	assign: 0,
	create: 0,
	clone: 0,
	discard: 0,
	update: 0
};
function p(e) {
	return Array.isArray(e);
}
function m(e) {
	return S(typeof e, "bigint");
}
function h(e) {
	return S(typeof e, "boolean");
}
function g(e) {
	return S(typeof e, "function");
}
function _(e) {
	return S(e, null);
}
function v(e) {
	return Number.isFinite(e);
}
function y(e) {
	return b(e) && !p(e);
}
function b(e) {
	return S(typeof e, "object") && !_(e);
}
function x(e) {
	return S(typeof e, "string");
}
function S(e, t) {
	return e === t;
}
function ee(e, t) {
	return e > t;
}
function te(e, t) {
	return e < t;
}
function ne(e, t, n) {
	return e.every((e, r) => r < t || n(e, r));
}
function C(e, t, n) {
	return S(e.length, 0) ? n() : t(e[0], e.slice(1));
}
function re(e) {
	return S(e, "__proto__") || S(e, "constructor") || S(e, "prototype");
}
function w(e, t) {
	return re(t) ? Object.prototype.hasOwnProperty.call(e, t) : t in e;
}
function T(e) {
	return Object.getOwnPropertyNames(e);
}
function ie(e) {
	return Object.getOwnPropertySymbols(e);
}
function ae(e) {
	return Object.values(e);
}
// node_modules/typebox/build/guard/index.mjs
var oe = {
	immutableTypes: !1,
	maxErrors: 8,
	maxParseErrors: 1,
	maxInstantiationCount: 128,
	useAcceleration: !0,
	exactOptionalPropertyTypes: !1,
	enumerableKind: !1,
	correctiveParse: !1,
	unionPrioritySort: !0
};
function se() {
	return oe;
}
// node_modules/typebox/build/system/memory/keys.mjs
function ce(e) {
	return [...T(e), ...ie(e)];
}
// node_modules/typebox/build/system/memory/finalize.mjs
function le(e, t) {
	if (!t.has(e)) {
		t.add(e);
		for (let n of ce(e)) {
			let r = Object.getOwnPropertyDescriptor(e, n);
			r && "value" in r && b(r.value) && le(r.value, t);
		}
		Object.freeze(e);
	}
}
function ue(e) {
	return se().immutableTypes && le(e, /* @__PURE__ */ new WeakSet()), e;
}
// node_modules/typebox/build/system/memory/assign.mjs
function E(e, t) {
	f.assign += 1;
	let n = {}, r = ce(t), i = ce(e);
	for (let t of i) r.includes(t) || Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
	for (let e of r) Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
	return ue(n);
}
// node_modules/typebox/build/system/memory/create.mjs
function de(e, t) {
	return {
		...e,
		...t
	};
}
function fe(e, t) {
	for (let n of Object.keys(t)) Object.defineProperty(e, n, {
		configurable: !0,
		writable: !0,
		enumerable: !1,
		value: t[n]
	});
	return e;
}
function D(e, t, n = {}) {
	f.create += 1;
	let r = de(t, n);
	return ue(se().enumerableKind ? de(r, e) : fe(r, e));
}
// node_modules/typebox/build/system/memory/discard.mjs
function pe(e, t) {
	f.discard += 1;
	let n = {};
	for (let r of ce(e)) {
		if (t.includes(r)) continue;
		let i = Object.getOwnPropertyDescriptor(e, r);
		Object.defineProperty(n, r, i);
	}
	return ue(n);
}
// node_modules/typebox/build/system/memory/update.mjs
function me(e, t, n, r) {
	for (let i of ce(e)) {
		if (re(i) || t.includes(i) || n.includes(i)) continue;
		let a = Object.getOwnPropertyDescriptor(e, i);
		Object.defineProperty(r, i, a);
	}
}
function he(e, t, n) {
	let r = se().enumerableKind;
	for (let i of t) re(i) || Object.defineProperty(n, i, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: e[i]
	});
}
function ge(e, t, n) {
	for (let r of t) re(r) || Object.defineProperty(n, r, {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: e[r]
	});
}
function O(e, t, n) {
	f.update += 1;
	let r = {}, i = ce(t), a = ce(n);
	return me(e, i, a, r), he(t, i, r), ge(n, a, r), ue(r);
}
// node_modules/typebox/build/type/types/schema.mjs
function k(e, t) {
	return b(e) && w(e, "~kind") && S(e["~kind"], t);
}
function _e(e) {
	return b(e);
}
// node_modules/typebox/build/type/types/deferred.mjs
function A(e, t, n) {
	return D({ "~kind": "Deferred" }, {
		type: "deferred",
		action: e,
		parameters: t,
		options: n
	}, {});
}
function ve(e) {
	return k(e, "Deferred");
}
// node_modules/typebox/build/type/engine/readonly/instantiate_add.mjs
function ye(e, t) {
	return O(e, { "~readonly": !0 }, t);
}
function be(e, t, n, r) {
	return ye(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/optional/instantiate_add.mjs
function xe(e, t) {
	return O(e, { "~optional": !0 }, t);
}
function Se(e, t, n, r) {
	return xe(B(e, t, n), r);
}
// node_modules/typebox/build/type/types/array.mjs
function Ce(e, t) {
	return D({ "~kind": "Array" }, {
		type: "array",
		items: e
	}, t);
}
function we(e) {
	return k(e, "Array");
}
function Te(e) {
	return pe(e, [
		"~kind",
		"type",
		"items"
	]);
}
// node_modules/typebox/build/type/types/constructor.mjs
function Ee(e, t, n = {}) {
	return D({ "~kind": "Constructor" }, {
		type: "constructor",
		parameters: e,
		instanceType: t
	}, n);
}
function De(e) {
	return k(e, "Constructor");
}
function Oe(e) {
	return pe(e, [
		"~kind",
		"type",
		"parameters",
		"instanceType"
	]);
}
// node_modules/typebox/build/type/types/function.mjs
function ke(e, t, n = {}) {
	return D({ "~kind": "Function" }, {
		type: "function",
		parameters: e,
		returnType: t
	}, n);
}
function Ae(e) {
	return k(e, "Function");
}
function je(e) {
	return pe(e, [
		"~kind",
		"type",
		"parameters",
		"returnType"
	]);
}
// node_modules/typebox/build/type/types/ref.mjs
function Me(e, t) {
	return D({ "~kind": "Ref" }, { $ref: e }, t);
}
function Ne(e) {
	return k(e, "Ref");
}
// node_modules/typebox/build/type/types/generic.mjs
function Pe(e, t) {
	return D({ "~kind": "Generic" }, {
		type: "generic",
		parameters: e,
		expression: t
	});
}
function Fe(e) {
	return k(e, "Generic");
}
// node_modules/typebox/build/type/types/any.mjs
function Ie(e) {
	return D({ "~kind": "Any" }, {}, e);
}
function Le(e) {
	return k(e, "Any");
}
// node_modules/typebox/build/type/types/never.mjs
var Re = "(?!)";
function ze(e) {
	return D({ "~kind": "Never" }, { not: {} }, e);
}
function Be(e) {
	return k(e, "Never");
}
// node_modules/typebox/build/type/action/_add_optional.mjs
function Ve(e, t = {}) {
	return A("AddOptional", [e], t);
}
function He(e, t = {}) {
	return xe(e, t);
}
// node_modules/typebox/build/type/types/_optional.mjs
function Ue(e) {
	return He(e);
}
function We(e) {
	return _e(e) && w(e, "~optional");
}
// node_modules/typebox/build/type/types/properties.mjs
function Ge(e) {
	return T(e).filter((t) => !We(e[t]));
}
function Ke(e) {
	return T(e);
}
function qe(e) {
	return ae(e);
}
// node_modules/typebox/build/type/types/object.mjs
function j(e, t = {}) {
	let n = Ge(e);
	return D({ "~kind": "Object" }, {
		type: "object",
		...n.length > 0 ? { required: n } : {},
		properties: e
	}, t);
}
function Je(e) {
	return k(e, "Object");
}
function Ye(e) {
	return pe(e, [
		"~kind",
		"type",
		"properties",
		"required"
	]);
}
// node_modules/typebox/build/type/types/unknown.mjs
function Xe(e) {
	return D({ "~kind": "Unknown" }, {}, e);
}
function Ze(e) {
	return k(e, "Unknown");
}
// node_modules/typebox/build/type/types/cyclic.mjs
function Qe(e, t, n) {
	return D({ "~kind": "Cyclic" }, {
		$defs: T(e).reduce((t, n) => ({
			...t,
			[n]: O(e[n], {}, { $id: n })
		}), {}),
		$ref: t
	}, n);
}
function $e(e) {
	return k(e, "Cyclic");
}
// node_modules/typebox/build/type/types/unsafe.mjs
function et(e) {
	return O(e, { "~unsafe": null }, {});
}
function tt(e) {
	return y(e) && w(e, "~unsafe") && _(e["~unsafe"]);
}
// node_modules/typebox/build/system/arguments/arguments.mjs
function nt(e, t) {
	return t[e.length]?.(...e) ?? (() => {
		throw Error("Invalid Arguments");
	})();
}
// node_modules/typebox/build/type/types/infer.mjs
function rt(...e) {
	let [t, n] = nt(e, {
		2: (e, t) => [
			e,
			t,
			t
		],
		1: (e) => [
			e,
			Xe(),
			Xe()
		]
	});
	return D({ "~kind": "Infer" }, {
		type: "infer",
		name: t,
		extends: n
	}, {});
}
function it(e) {
	return k(e, "Infer");
}
// node_modules/typebox/build/type/types/dependent.mjs
function at(e, t, n, r = {}) {
	return D({ "~kind": "Dependent" }, {
		if: e,
		then: t,
		else: n
	}, r);
}
function ot(e) {
	return k(e, "Dependent");
}
function st(e) {
	return pe(e, [
		"~kind",
		"if",
		"then",
		"else"
	]);
}
// node_modules/typebox/build/type/engine/enum/typescript_enum_to_enum_values.mjs
function ct(e) {
	return y(e);
}
function lt(e) {
	return T(e).filter((e) => isNaN(e)).reduce((t, n) => [...t, e[n]], []);
}
// node_modules/typebox/build/type/types/enum.mjs
function ut(e) {
	return x(e) || v(e);
}
function dt(e, t) {
	return D({ "~kind": "Enum" }, { enum: ct(e) ? lt(e) : e }, t);
}
function ft(e) {
	return k(e, "Enum");
}
// node_modules/typebox/build/type/types/intersect.mjs
function pt(e, t = {}) {
	return D({ "~kind": "Intersect" }, { allOf: e }, t);
}
function mt(e) {
	return k(e, "Intersect");
}
function ht(e) {
	return pe(e, ["~kind", "allOf"]);
}
// node_modules/typebox/build/system/unreachable/unreachable.mjs
function gt() {
	throw Error("Unreachable");
}
var _t = /* @__PURE__ */ new Float64Array(1);
new DataView(_t.buffer), new Uint8Array(_t.buffer), new TextEncoder();
// node_modules/typebox/build/system/locale/_config.mjs
var vt = class {
	constructor(e, t) {
		this.type = e, this.decode = t;
	}
	Encode(e) {
		let t = this.type, n = {
			decode: Ct(t) ? (e) => this.decode(t["~codec"].decode(e)) : this.decode,
			encode: Ct(t) ? (n) => t["~codec"].encode(e(n)) : e
		};
		return O(this.type, { "~codec": n }, {});
	}
}, yt = class {
	constructor(e) {
		this.type = e;
	}
	Decode(e) {
		return new vt(this.type, e);
	}
};
function bt(e) {
	return new yt(e);
}
function xt(e, t) {
	return bt(e).Decode(t).Encode(() => {
		throw Error("Encode not implemented");
	});
}
function St(e, t) {
	return bt(e).Decode(() => {
		throw Error("Decode not implemented");
	}).Encode(t);
}
function Ct(e) {
	return _e(e) && w(e, "~codec") && b(e["~codec"]) && w(e["~codec"], "encode") && w(e["~codec"], "decode");
}
// node_modules/typebox/build/type/types/_immutable.mjs
function wt(e) {
	return t_(e);
}
function Tt(e) {
	return _e(e) && w(e, "~immutable");
}
// node_modules/typebox/build/type/action/_add_readonly.mjs
function Et(e, t = {}) {
	return A("AddReadonly", [e], t);
}
function Dt(e, t = {}) {
	return ye(e, t);
}
// node_modules/typebox/build/type/types/_readonly.mjs
function Ot(e) {
	return Dt(e);
}
function kt(e) {
	return _e(e) && w(e, "~readonly");
}
// node_modules/typebox/build/type/types/_refine.mjs
function At(e, t) {
	return O(e, { "~refine": Nt(e) ? [...e["~refine"], t] : [t] }, {});
}
function jt(...e) {
	let [t, n, r] = nt(e, {
		3: (e, t, n) => [
			e,
			t,
			n
		],
		2: (e, t) => [
			e,
			t,
			() => "Refine Error"
		]
	});
	return At(t, {
		check: n,
		error: r
	});
}
function Mt(e) {
	return y(e) && w(e, "check") && w(e, "error") && g(e.check) && g(e.error);
}
function Nt(e) {
	return _e(e) && w(e, "~refine") && p(e["~refine"]) && ne(e["~refine"], 0, (e) => Mt(e));
}
// node_modules/typebox/build/type/types/bigint.mjs
var Pt = "-?(?:0|[1-9][0-9]*)n";
function Ft(e) {
	return D({ "~kind": "BigInt" }, { type: "bigint" }, e);
}
function It(e) {
	return k(e, "BigInt");
}
// node_modules/typebox/build/type/types/boolean.mjs
function Lt(e) {
	return D({ "~kind": "Boolean" }, { type: "boolean" }, e);
}
function Rt(e) {
	return k(e, "Boolean");
}
// node_modules/typebox/build/type/types/identifier.mjs
function zt(e) {
	return D({ "~kind": "Identifier" }, { name: e });
}
function Bt(e) {
	return k(e, "Identifier");
}
// node_modules/typebox/build/type/types/integer.mjs
var Vt = "-?(?:0|[1-9][0-9]*)";
function Ht(e) {
	return D({ "~kind": "Integer" }, { type: "integer" }, e);
}
function Ut(e) {
	return k(e, "Integer");
}
// node_modules/typebox/build/type/types/literal.mjs
var Wt = class extends Error {
	constructor(e) {
		super("Invalid Literal value"), Object.defineProperty(this, "cause", {
			value: { value: e },
			writable: !1,
			configurable: !1,
			enumerable: !1
		});
	}
};
function Gt(e) {
	return m(e) ? "bigint" : h(e) ? "boolean" : v(e) ? "number" : x(e) ? "string" : (() => {
		throw new Wt(e);
	})();
}
function M(e, t) {
	return D({ "~kind": "Literal" }, {
		type: Gt(e),
		const: e
	}, t);
}
function Kt(e) {
	return m(e) || h(e) || v(e) || x(e);
}
function qt(e) {
	return Yt(e) && v(e.const);
}
function Jt(e) {
	return Yt(e) && x(e.const);
}
function Yt(e) {
	return k(e, "Literal");
}
// node_modules/typebox/build/type/types/null.mjs
function Xt(e) {
	return D({ "~kind": "Null" }, { type: "null" }, e);
}
function Zt(e) {
	return k(e, "Null");
}
// node_modules/typebox/build/type/types/number.mjs
var Qt = "-?(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?";
function $t(e) {
	return D({ "~kind": "Number" }, { type: "number" }, e);
}
function en(e) {
	return k(e, "Number");
}
// node_modules/typebox/build/type/types/symbol.mjs
function tn(e) {
	return D({ "~kind": "Symbol" }, { type: "symbol" }, e);
}
function nn(e) {
	return k(e, "Symbol");
}
// node_modules/typebox/build/type/types/parameter.mjs
function rn(...e) {
	let [t, n, r] = nt(e, {
		3: (e, t, n) => [
			e,
			t,
			n
		],
		2: (e, t) => [
			e,
			t,
			t
		],
		1: (e) => [
			e,
			Xe(),
			Xe()
		]
	});
	return D({ "~kind": "Parameter" }, {
		name: t,
		extends: n,
		equals: r
	}, {});
}
function an(e) {
	return k(e, "Parameter");
}
// node_modules/typebox/build/type/types/string.mjs
function on(e) {
	return D({ "~kind": "String" }, { type: "string" }, e);
}
function sn(e) {
	return k(e, "String");
}
// node_modules/typebox/build/type/types/union.mjs
function cn(e, t = {}) {
	return D({ "~kind": "Union" }, { anyOf: e }, t);
}
function N(e) {
	return k(e, "Union");
}
function ln(e) {
	return pe(e, ["~kind", "anyOf"]);
}
// node_modules/typebox/build/type/engine/patterns/pattern.mjs
function un(e) {
	let t = bl(e);
	return S(t.length, 2) ? t[0] : [];
}
// node_modules/typebox/build/type/engine/template_literal/is_finite.mjs
function dn(e) {
	return !0;
}
function fn(e) {
	return C(e, (e, t) => mn(e) ? fn(t) : !1, () => !0);
}
function pn(e) {
	return !S(e.length, 0) && fn(e);
}
function mn(e) {
	return N(e) ? pn(e.anyOf) : Yt(e) ? dn(e.const) : !1;
}
function hn(e) {
	return pn(e);
}
// node_modules/typebox/build/type/engine/template_literal/create.mjs
function gn(e) {
	return D({ "~kind": "TemplateLiteral" }, {
		type: "string",
		pattern: e
	}, {});
}
// node_modules/typebox/build/type/engine/template_literal/decode.mjs
function _n(e, t, n = []) {
	return C(e, (e, r) => _n(r, t, [...n, `${e}${t}`]), () => n);
}
function vn(e, t) {
	return S(e.length, 0) ? [`${t}`] : _n(e, t);
}
function yn(e, t, n = []) {
	return C(t, (t, r) => yn(e, r, [...n, ...bn(e, t)]), () => n);
}
function bn(e, t) {
	return N(t) ? yn(e, t.anyOf) : Yt(t) ? vn(e, t.const) : gt();
}
function xn(e, t) {
	return C(t, (t, n) => xn(bn(e, t), n), () => e);
}
function Sn(e) {
	return e.map((e) => M(e));
}
function Cn(e) {
	return cn(Sn(xn([], e)));
}
function wn(e) {
	return S(e.length, 0) ? gt() : S(e.length, 1) && Yt(e[0]) ? e[0] : Cn(e);
}
function Tn(e) {
	let t = un(e);
	return S(t.length, 0) ? on() : hn(t) ? wn(t) : gn(e);
}
function En(e) {
	let t = Tn(e);
	return au(t) ? on() : t;
}
// node_modules/typebox/build/type/engine/record/record_create.mjs
function Dn(e, t) {
	return D({ "~kind": "Record" }, {
		type: "object",
		patternProperties: { [e]: t }
	});
}
// node_modules/typebox/build/type/engine/record/from_key_any.mjs
function On(e) {
	return Dn(jr, e);
}
// node_modules/typebox/build/type/engine/record/from_key_boolean.mjs
function kn(e) {
	return j({
		true: e,
		false: e
	});
}
// node_modules/typebox/build/type/types/tuple.mjs
function An(e, t = {}) {
	let [n, r, i] = [
		e,
		e.length,
		!1
	];
	return D({ "~kind": "Tuple" }, {
		type: "array",
		additionalItems: i,
		items: n,
		minItems: r
	}, t);
}
function jn(e) {
	return k(e, "Tuple");
}
function Mn(e) {
	return pe(e, [
		"~kind",
		"type",
		"items",
		"minItems",
		"additionalItems"
	]);
}
// node_modules/typebox/build/type/engine/tuple/to_object.mjs
function Nn(e) {
	return e.reduceRight((e, t, n) => ({
		[n]: t,
		...e
	}), {});
}
function Pn(e) {
	return j(Nn(e.items));
}
// node_modules/typebox/build/type/engine/optional/instantiate_remove.mjs
function Fn(e) {
	return pe(e, ["~optional"]);
}
function In(e, t) {
	return O(Fn(e), {}, t);
}
function Ln(e, t, n, r) {
	return In(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/readonly/instantiate_remove.mjs
function Rn(e) {
	return pe(e, ["~readonly"]);
}
function zn(e, t) {
	return O(Rn(e), {}, t);
}
function Bn(e, t, n, r) {
	return zn(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/evaluate/property.mjs
function Vn(e, t) {
	let n = kt(e) && kt(t), r = We(e) && We(t), i = zn(In(sr([e, t]), {}), {});
	return n && r ? ye(xe(i, {}), {}) : n ? ye(i, {}) : r ? xe(i, {}) : i;
}
function Hn(e, t) {
	let n = kt(e) || kt(t), r = We(e) || We(t), i = lr([zn(In(e, {}), {}), zn(In(t, {}), {})]);
	return n && r ? ye(xe(i, {}), {}) : n ? ye(i, {}) : r ? xe(i, {}) : i;
}
// node_modules/typebox/build/type/engine/evaluate/composite.mjs
function Un(e, t, n) {
	return n in e ? n in t ? Vn(e[n], t[n]) : e[n] : n in t ? t[n] : ze();
}
function Wn(e, t) {
	return [.../* @__PURE__ */ new Set([...T(e), ...T(t)])].reduce((n, r) => ({
		...n,
		[r]: Un(e, t, r)
	}), {});
}
function Gn(e) {
	return Je(e) ? e.properties : jn(e) ? Nn(e.items) : {};
}
function Kn(e, t) {
	return j(Wn(Gn(e), Gn(t)));
}
// node_modules/typebox/build/type/engine/evaluate/narrow.mjs
function qn(e, t) {
	let n = df(e, t);
	return S(n, 2) ? e : S(n, 3) || S(n, 0) ? t : ze();
}
function Jn(e) {
	return Je(e) || jn(e);
}
function Yn(e, t) {
	let n = Jn(e), r = Jn(t);
	return n && r ? Kn(e, t) : n && !r ? e : !n && r ? t : qn(e, t);
}
function Xn(e, t) {
	return Be(e) || Le(e) ? e : Ze(e) || Be(t) || Le(t) ? t : Ze(t) ? e : Yn(e, t);
}
// node_modules/typebox/build/type/engine/evaluate/distribute.mjs
function Zn(e, t) {
	return N(e) || N(t);
}
function Qn(e, t) {
	let n = ur(e), r = ur(t);
	return Zn(n, r) ? sr([n, r]) : Xn(n, r);
}
function $n(e, t, n = []) {
	return C(t, (t, r) => $n(e, r, [...n, Qn(t, e)]), () => S(n.length, 0) ? [e] : n);
}
function er(e, t, n = []) {
	return C(e, (e, r) => er(r, t, [...n, ...tr([e], t)]), () => n);
}
function tr(e, t = []) {
	return C(e, (e, n) => N(e) ? tr(n, er(e.anyOf, t)) : tr(n, $n(e, t)), () => t);
}
// node_modules/typebox/build/type/engine/exclude/operation.mjs
function nr(e, t) {
	return du(uf({}, e, t)) ? [] : [e];
}
function rr(e, t, n = []) {
	return C(e, (e, r) => rr(r, t, [...n, ...nr(e, t)]), () => n);
}
function ir(e, t) {
	let n = ur(e);
	return lr(rr(N(n) ? n.anyOf : [n], t));
}
// node_modules/typebox/build/type/engine/evaluate/evaluate.mjs
function ar(e, t, n) {
	return lr([sr([e, t]), ir(n, e)]);
}
function or(e, t = []) {
	return C(e, (e, n) => or(n, [...t, M(e)]), () => lr(t));
}
function sr(e) {
	return lr(hf(tr(e)));
}
function cr(e) {
	return ur(En(e));
}
function lr(e) {
	return dr(hf(e));
}
function ur(e) {
	return ot(e) ? ar(e.if, e.then, e.else) : ft(e) ? or(e.enum) : mt(e) ? sr(e.allOf) : au(e) ? cr(e.pattern) : N(e) ? lr(e.anyOf) : e;
}
function dr(e) {
	return S(e.length, 1) ? e[0] : S(e.length, 0) ? ze() : cn(e);
}
// node_modules/typebox/build/type/engine/record/from_key_enum.mjs
function fr(e, t) {
	return Er(or(e), t);
}
// node_modules/typebox/build/type/engine/record/from_key_integer.mjs
function pr(e, t) {
	return Dn(kr, t);
}
// node_modules/typebox/build/type/engine/record/from_key_intersect.mjs
function mr(e, t) {
	return Er(sr(e), t);
}
// node_modules/typebox/build/type/engine/record/from_key_literal.mjs
function hr(e, t) {
	return x(e) || v(e) ? j({ [e]: t }) : S(e, !1) ? j({ false: t }) : S(e, !0) ? j({ true: t }) : j({});
}
// node_modules/typebox/build/type/engine/record/from_key_number.mjs
function gr(e, t) {
	return Dn(Ar, t);
}
// node_modules/typebox/build/type/engine/record/from_key_string.mjs
function _r(e, t) {
	return w(e, "pattern") && (x(e.pattern) || e.pattern instanceof RegExp) ? Dn(e.pattern.toString(), t) : Dn(jr, t);
}
// node_modules/typebox/build/type/engine/record/from_key_template_literal.mjs
function vr(e, t) {
	return hn(un(e)) ? Er(cr(e), t) : Dn(e, t);
}
// node_modules/typebox/build/type/engine/evaluate/flatten.mjs
function yr(e) {
	return N(e) ? br(e.anyOf) : [e];
}
function br(e, t = []) {
	return C(e, (e, n) => br(n, [...t, ...yr(e)]), () => t);
}
// node_modules/typebox/build/type/engine/record/from_key_union.mjs
function xr(e) {
	return e.some((e) => sn(e) || en(e) || Ut(e));
}
function Sr(e, t) {
	return S(xr(e), !0) ? Dn(jr, t) : void 0;
}
function Cr(e, t) {
	return e.reduce((e, n) => Yt(n) && (x(n.const) || v(n.const)) ? {
		...e,
		[n.const]: t
	} : e, {});
}
function wr(e, t) {
	return j(Cr(e, t));
}
function Tr(e, t) {
	let n = br(e), r = Sr(n, t);
	return _e(r) ? r : wr(n, t);
}
// node_modules/typebox/build/type/engine/record/from_key.mjs
function Er(e, t) {
	return Le(e) ? On(t) : Rt(e) ? kn(t) : ft(e) ? fr(e.enum, t) : Ut(e) ? pr(e, t) : mt(e) ? mr(e.allOf, t) : Yt(e) ? hr(e.const, t) : en(e) ? gr(e, t) : N(e) ? Tr(e.anyOf, t) : sn(e) ? _r(e, t) : au(e) ? vr(e.pattern, t) : j({});
}
// node_modules/typebox/build/type/engine/record/instantiate.mjs
function Dr(e, t, n) {
	return Wg([e]) ? O(Er(e, t), {}, n) : Mr(e, t, n);
}
function Or(e, t, n, r, i) {
	return Dr(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/types/record.mjs
var kr = `^${Vt}$`, Ar = `^${Qt}$`, jr = "^.*$";
function Mr(e, t, n = {}) {
	return A("Record", [e, t], n);
}
function Nr(e, t, n = {}) {
	return Dr(e, t, n);
}
function Pr(e, t) {
	return Dn(e, t);
}
function Fr(e) {
	return S(e, jr) ? on() : S(e, kr) ? Ht() : S(e, Ar) ? $t() : Tn(e);
}
function Ir(e) {
	return T(e.patternProperties)[0];
}
function Lr(e) {
	return Fr(Ir(e));
}
function Rr(e) {
	return e.patternProperties[Ir(e)];
}
function zr(e) {
	return k(e, "Record");
}
// node_modules/typebox/build/type/types/rest.mjs
function Br(e) {
	return D({ "~kind": "Rest" }, {
		type: "rest",
		items: e
	}, {});
}
function Vr(e) {
	return k(e, "Rest");
}
// node_modules/typebox/build/type/types/this.mjs
function Hr(e) {
	return D({ "~kind": "This" }, { $ref: "#" }, e);
}
function Ur(e) {
	return k(e, "This");
}
// node_modules/typebox/build/type/types/undefined.mjs
function Wr(e) {
	return D({ "~kind": "Undefined" }, { type: "undefined" }, e);
}
function Gr(e) {
	return k(e, "Undefined");
}
// node_modules/typebox/build/type/types/void.mjs
function Kr(e) {
	return D({ "~kind": "Void" }, { type: "void" }, e);
}
function qr(e) {
	return k(e, "Void");
}
// node_modules/typebox/build/type/script/mapping.mjs
function Jr(e, t) {
	return S(e, "Array") ? Ce(t[0]) : S(e, "Capitalize") ? sp(t[0]) : S(e, "ConstructorParameters") ? Mp(t[0]) : S(e, "Evaluate") ? r_(t[0]) : S(e, "Exclude") ? Lp(t[0], t[1]) : S(e, "Extract") ? Vp(t[0], t[1]) : S(e, "Index") ? Xp(t[0], t[1]) : S(e, "InstanceType") ? Gm(t[0]) : S(e, "Lowercase") ? lp(t[0]) : S(e, "NonNullable") ? Dh(t[0]) : S(e, "Omit") ? Mh(t[0], t[1]) : S(e, "Parameters") ? zh(t[0]) : S(e, "Partial") ? Wh(t[0]) : S(e, "Pick") ? eg(t[0], t[1]) : S(e, "Readonly") ? og(t[0]) : S(e, "KeyOf") ? Xm(t[0]) : S(e, "Record") ? Mr(t[0], t[1]) : S(e, "Required") ? Og(t[0]) : S(e, "ReturnType") ? Mg(t[0]) : S(e, "Uncapitalize") ? dp(t[0]) : S(e, "Uppercase") ? pp(t[0]) : Xf(Me(e), t);
}
function Yr() {
	throw Error("Unreachable");
}
function Xr(e, t = []) {
	return C(e, (e, n) => Xr(n, [...t, e[1]]), () => t);
}
function Zr(e) {
	return S(e.length, 3) ? [e[0], ...Xr(e[1])] : [];
}
function Qr(e) {
	return rn(e[0], e[2], e[4]);
}
function $r(e) {
	return rn(e[0], e[2], e[2]);
}
function ei(e) {
	return rn(e[0], Xe(), e[2]);
}
function ti(e) {
	return rn(e, Xe(), Xe());
}
function ni(e) {
	return e;
}
function ri(e) {
	return Zr(e);
}
function ii(e) {
	return e[1];
}
function ai(e) {
	return Zr(e);
}
function oi(e) {
	return e[1];
}
function si(e) {
	return Jr(e[0], e[1]);
}
function ci(e) {
	return null;
}
function li(e) {
	return on();
}
function ui(e) {
	return $t();
}
function di(e) {
	return Lt();
}
function fi(e) {
	return Wr();
}
function pi(e) {
	return Xt();
}
function mi(e) {
	return Ht();
}
function hi(e) {
	return Ft();
}
function gi(e) {
	return Xe();
}
function _i(e) {
	return Ie();
}
function vi(e) {
	return j({});
}
function yi(e) {
	return ze();
}
function bi(e) {
	return tn();
}
function xi(e) {
	return Kr();
}
function Si(e) {
	return Hr();
}
function Ci(e) {
	return M(BigInt(e));
}
function wi(e) {
	return M(S(e, "true"));
}
function Ti(e) {
	return M(parseFloat(e));
}
function Ei(e) {
	return M(e);
}
function Di(e) {
	return e[1];
}
function Oi(e) {
	return M(e);
}
function ki(e) {
	return S(e.length, 3) ? [
		e[0],
		e[1],
		...e[2]
	] : [e[0]];
}
function Ai(e) {
	return e[1];
}
function ji(e) {
	return eu(e);
}
function Mi(e) {
	return S(e.length, 6) ? at(e[1], e[3], e[5]) : at(e[1], e[3], Xe());
}
function Ni(e) {
	return e.length > 0;
}
function Pi(e) {
	return e.reduce((e, t) => S(t.length, 3) ? [...e, [t[1]]] : [...e, []], []);
}
function Fi(e) {
	return S(e.length, 6) ? [
		e[1],
		e[3],
		e[5]
	] : [];
}
function Ii(e) {
	return p(e) && S(e.length, 3) ? e[1] : e;
}
function Li(e) {
	return S(e.length, 2) ? e[1] : [];
}
function Ri(e, t) {
	return t.reduce((e, t) => {
		let n = t;
		return S(n.length, 1) ? Xp(e, n[0]) : S(n.length, 0) ? Ce(e) : Yr();
	}, e);
}
function zi(e, t) {
	return S(t.length, 3) ? Dp(e, t[0], t[1], t[2]) : e;
}
function Bi(e, t) {
	return p(t) && S(t.length, 0) ? e : Lg(e, t);
}
function Vi(e) {
	let [t, n, r, i, a] = e;
	return Bi(zi(t ? Xm(Ri(n, r)) : Ri(n, r), i), a);
}
function Hi(e, t) {
	return S(t.length, 3) ? (() => {
		let [n, r, i] = t, a = Hi(r, i);
		if (S(n, "&")) return mt(a) ? pt([e, ...a.allOf]) : pt([e, a]);
		if (S(n, "|")) return N(a) ? cn([e, ...a.anyOf]) : cn([e, a]);
		Yr();
	})() : e;
}
function Ui(e) {
	return e;
}
function Wi(e) {
	let [t, n] = e;
	return Hi(t, n);
}
function Gi(e) {
	return e;
}
function Ki(e) {
	let [t, n] = e;
	return Hi(t, n);
}
function qi(e) {
	return e_(e[1]);
}
function Ji(e) {
	return e[1];
}
function Yi(e) {
	return Pe(e[0], e[2]);
}
function Xi(e) {
	return S(e.length, 4) ? rt(e[1], e[3]) : S(e.length, 2) ? rt(e[1], Xe()) : Yr();
}
function Zi(e) {
	return e;
}
function Qi(e) {
	return `${e}`;
}
function $i(e) {
	return e;
}
function ea(e) {
	return e;
}
function ta(e) {
	return Ut(e[3]) ? kr : en(e[3]) ? Ar : nn(e[3]) || sn(e[3]) ? jr : Yr();
}
function na(e) {
	return e;
}
function ra(e) {
	return e.length > 0;
}
function ia(e) {
	return e.length > 0;
}
function aa(e) {
	let [t, n, r, i, a] = e;
	return { [n]: t && r ? Et(Ve(a)) : t && !r ? Et(a) : !t && r ? Ve(a) : a };
}
function oa(e) {
	return e;
}
function sa(e) {
	return Zr(e);
}
function ca(e) {
	return e.reduce((e, t) => w(t, kr) || w(t, Ar) || w(t, jr) ? [e[0], E(e[1], t)] : [E(e[0], t), e[1]], [{}, {}]);
}
function la(e) {
	return ca(e[1]);
}
function ua(e) {
	let [t, n] = e;
	return j(t, S(T(n).length, 0) ? {} : { patternProperties: n });
}
function da(e) {
	return S(e.length, 5) ? Et(Ve(e[4])) : S(e.length, 3) ? e[2] : S(e.length, 4) ? S(e[2], "readonly") ? Et(e[3]) : Ve(e[3]) : Yr();
}
function fa(e) {
	if (!p(e) || !S(e.length, 3)) return e;
	let [t, n, r] = e;
	return t && r ? Et(Ve(n)) : t && !r ? Et(n) : !t && r ? Ve(n) : n;
}
function pa(e) {
	return S(e.length, 2) ? Br(e[1]) : S(e.length, 1) ? e[0] : Yr();
}
function ma(e) {
	return Zr(e);
}
function ha(e) {
	return An(e[1]);
}
function ga(e) {
	return Et(Ve(e[4]));
}
function _a(e) {
	return Et(e[3]);
}
function va(e) {
	return Ve(e[3]);
}
function ya(e) {
	return e[2];
}
function ba(e) {
	return e;
}
function xa(e) {
	return S(e.length, 2) ? Br(e[1]) : S(e.length, 1) ? e[0] : Yr();
}
function Sa(e) {
	return Zr(e);
}
function Ca(e) {
	return ke(e[1], e[4]);
}
function wa(e) {
	return Ee(e[2], e[5]);
}
function Ta(e, t) {
	return S(e, "remove") ? n_(t) : S(e, "add") ? Et(t) : t;
}
function Ea(e) {
	return S(e.length, 2) && S(e[0], "-") ? "remove" : S(e.length, 2) && S(e[0], "+") || S(e.length, 1) ? "add" : "none";
}
function Da(e, t) {
	return S(e, "remove") ? wg(t) : S(e, "add") ? Ve(t) : t;
}
function Oa(e) {
	return S(e.length, 2) && S(e[0], "-") ? "remove" : S(e.length, 2) && S(e[0], "+") || S(e.length, 1) ? "add" : "none";
}
function ka(e) {
	return S(e.length, 2) ? [e[1]] : [];
}
function Aa(e) {
	return p(e[6]) && S(e[6].length, 1) ? ch(zt(e[3]), e[5], e[6][0], Ta(e[1], Da(e[8], e[10]))) : ch(zt(e[3]), e[5], Me(e[3]), Ta(e[1], Da(e[8], e[10])));
}
function ja(e) {
	return Me(e);
}
function Ma(e) {
	return BigInt(e);
}
function Na(e) {
	return parseFloat(e);
}
function Pa(e) {
	return S(e, "true");
}
function Fa(e) {
	return e;
}
function Ia(e) {
	return null;
}
function La(e) {
	return { [e[0]]: e[2] };
}
function Ra(e) {
	return Zr(e);
}
function za(e) {
	return e.reduce((e, t) => E(e, t), {});
}
function Ba(e) {
	return za(e[1]);
}
function Va(e) {
	return Zr(e);
}
function Ha(e) {
	return e[1];
}
function Ua(e) {
	return e;
}
function Wa(e) {
	return Ft();
}
function Ga(e) {
	return on();
}
function Ka(e) {
	return $t();
}
function qa(e) {
	return Ht();
}
function Ja(e) {
	return ze();
}
function Ya(e) {
	return M(e);
}
function Xa(e) {
	return e;
}
function Za(e) {
	return cn(e[1]);
}
function Qa(e) {
	return e.length === 3 ? [...e[0], ...e[2]] : e.length === 1 ? [...e[0]] : [];
}
function $a(e) {
	return [e[0], ...e[1]];
}
function eo(e) {
	return e;
}
function to(e) {
	return e[1];
}
function no(e) {
	return Zr(e);
}
function ro(e) {
	return S(e.length, 2) ? e[1] : [];
}
function io(e) {
	let t = e[2], n = e[3], [r, i] = e[4], a = S(T(i).length, 0) ? {} : { patternProperties: i };
	return { [e[1]]: Pe(t, Id(n, r, a)) };
}
function ao(e) {
	let t = e[2], [n, r] = e[3], i = S(T(r).length, 0) ? {} : { patternProperties: r };
	return { [e[1]]: Id(t, n, i) };
}
function oo(e) {
	return { [e[1]]: Pe(e[2], e[4]) };
}
function so(e) {
	return { [e[1]]: e[3] };
}
function co(e) {
	return null;
}
function lo(e) {
	return e;
}
function uo(e) {
	return Zr(e);
}
function fo(e) {
	return e[1];
}
function po(e) {
	let [t, n] = [e[0], e[1]];
	return a_(E(t, ca(n)[0]));
}
function mo(e) {
	return e;
}
// node_modules/typebox/build/type/script/token/internal/match.mjs
function ho(e) {
	return S(e.length, 2);
}
function P(e, t, n) {
	return ho(e) ? t(e[0], e[1]) : n();
}
// node_modules/typebox/build/type/script/token/internal/take.mjs
function go(e, t) {
	return S(t.indexOf(e), 0) ? [e, t.slice(e.length)] : [];
}
function _o(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = go(e[n], t);
		if (ho(r)) return r;
	}
	return [];
}
// node_modules/typebox/build/type/script/token/internal/char.mjs
function vo(e, t) {
	return Array.from({ length: t - e + 1 }, (t, n) => String.fromCharCode(e + n));
}
var yo = [...vo(97, 122), ...vo(65, 90)], bo = vo(49, 57), xo = ["0", ...bo], So = "//", Co = "/*", wo = "*/";
function To(e) {
	let t = e.indexOf(wo);
	return S(t, -1) ? "" : e.slice(t + 2);
}
function Eo(e) {
	let t = e.indexOf("\n");
	return S(t, -1) ? "" : e.slice(t);
}
function Do(e) {
	return e.replace(/^[ \t\r\f\v]+/, "");
}
function Oo(e) {
	let t = Do(e);
	return t.startsWith(Co) ? Oo(To(t.slice(2))) : t.startsWith(So) ? Oo(Eo(t.slice(2))) : t;
}
function ko(e) {
	let t = e.trimStart();
	return t.startsWith(Co) ? ko(To(t.slice(2))) : t.startsWith(So) ? ko(Eo(t.slice(2))) : t;
}
// node_modules/typebox/build/type/script/token/internal/optional.mjs
function Ao(e, t) {
	return P(_o([e], t), (e, t) => [e, t], () => ["", t]);
}
// node_modules/typebox/build/type/script/token/internal/many.mjs
function jo(e, t) {
	return e.includes(t);
}
function Mo(e, t, n, r = "") {
	return P(_o(e, n), (n, i) => jo(t, n) ? Mo(e, t, i, r) : Mo(e, t, i, `${r}${n}`), () => [r, n]);
}
// node_modules/typebox/build/type/script/token/unsigned_integer.mjs
function No(e) {
	return _o(bo, e);
}
var Po = [...xo, "_"];
function Fo(e) {
	return Mo(Po, ["_"], e);
}
function Io(e) {
	return P(_o(["0"], e), (e, t) => [e, t], () => P(No(e), (e, t) => P(Fo(t), (t, n) => [`${e}${t}`, n], () => []), () => []));
}
function Lo(e) {
	return Io(ko(e));
}
// node_modules/typebox/build/type/script/token/integer.mjs
function Ro(e) {
	return Ao("-", e);
}
function zo(e) {
	return P(Ro(e), (e, t) => P(Lo(t), (t, n) => [`${e}${t}`, n], () => []), () => []);
}
function Bo(e) {
	return zo(ko(e));
}
// node_modules/typebox/build/type/script/token/bigint.mjs
function Vo(e) {
	return P(Bo(e), (e, t) => P(_o(["n"], t), (t, n) => [`${e}`, n], () => []), () => []);
}
function Ho(e) {
	return Vo(e);
}
// node_modules/typebox/build/type/script/token/const.mjs
function Uo(e, t) {
	return _o([e], t);
}
function F(e, t) {
	return S(e, "") ? ["", t] : e.startsWith("\n") ? Uo(e, Oo(t)) : e.startsWith(" ") ? Uo(e, t) : Uo(e, ko(t));
}
// node_modules/typebox/build/type/script/token/ident.mjs
var Wo = [
	...yo,
	"_",
	"$"
];
function Go(e) {
	return _o(Wo, e);
}
var Ko = [...Wo, ...xo];
function qo(e, t = "") {
	return P(_o(Ko, e), (e, n) => qo(n, `${t}${e}`), () => [t, e]);
}
function Jo(e) {
	return P(Go(e), (e, t) => P(qo(t), (t, n) => [`${e}${t}`, n], () => []), () => []);
}
function Yo(e) {
	return Jo(ko(e));
}
// node_modules/typebox/build/type/script/token/unsigned_number.mjs
var Xo = [...xo, "_"];
function Zo(e) {
	return ho(_o(["."], e));
}
function Qo(e) {
	return P(Mo(Xo, ["_"], e), (e, t) => S(e, "") ? [] : [e, t], () => []);
}
function $o(e) {
	return P(_o(["."], e), (e, t) => P(Qo(t), (t, n) => [`0${e}${t}`, n], () => []), () => []);
}
function es(e) {
	return P(Lo(e), (e, t) => P(_o(["."], t), (t, n) => P(Qo(n), (n, r) => [`${e}${t}${n}`, r], () => [`${e}`, n]), () => [`${e}`, t]), () => []);
}
function ts(e) {
	return Zo(e) ? $o(e) : es(e);
}
function ns(e) {
	return ts(ko(e));
}
// node_modules/typebox/build/type/script/token/number.mjs
function rs(e) {
	return Ao("-", e);
}
function is(e) {
	return P(rs(e), (e, t) => P(ns(t), (t, n) => [`${e}${t}`, n], () => []), () => []);
}
function as(e) {
	return is(ko(e));
}
// node_modules/typebox/build/type/script/token/until.mjs
function os(e) {
	return S(e, "") ? [] : [e.slice(0, 1), e.slice(1)];
}
function ss(e, t) {
	return C(e, (e, n) => t.startsWith(e) ? !0 : ss(n, t), () => !1);
}
function cs(e, t, n = "") {
	return P(os(t), (r, i) => ss(e, t) ? [n, t] : cs(e, i, `${n}${r}`), () => []);
}
// node_modules/typebox/build/type/script/token/span.mjs
function ls(e, t, n) {
	return P(_o([e], n), (e, n) => P(cs([t], n), (e, n) => P(_o([t], n), (t, n) => [`${e}`, n], () => []), () => []), () => []);
}
function us(e, t, n) {
	return P(_o([e], n), (e, n) => P(cs(["\n", t], n), (e, n) => P(_o([t], n), (t, n) => [`${e}`, n], () => []), () => []), () => []);
}
function ds(e, t, n, r) {
	return n ? ls(e, t, ko(r)) : us(e, t, ko(r));
}
// node_modules/typebox/build/type/script/token/string.mjs
function fs(e, t) {
	return _o(e, t);
}
function ps(e, t) {
	return ds(e, e, !1, t);
}
function ms(e, t) {
	return P(fs(e, t), (e, t) => ps(e, `${e}${t}`), () => []);
}
function hs(e, t) {
	return ms(e, ko(t));
}
// node_modules/typebox/build/type/script/token/until_1.mjs
function gs(e, t) {
	return P(cs(e, t), (e, t) => S(e, "") ? [] : [e, t], () => []);
}
// node_modules/typebox/build/type/script/parser.mjs
var I = (e, t, n = () => []) => e.length === 2 ? t(e) : n(), _s = (e) => I(I(Yo(e), ([e, t]) => I(F("extends", t), ([t, n]) => I(L(n), ([n, r]) => I(F("=", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [Qr(e), t]), vs = (e) => I(I(Yo(e), ([e, t]) => I(F("extends", t), ([t, n]) => I(L(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [$r(e), t]), ys = (e) => I(I(Yo(e), ([e, t]) => I(F("=", t), ([t, n]) => I(L(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [ei(e), t]), bs = (e) => I(Yo(e), ([e, t]) => [ti(e), t]), xs = (e) => I(I(_s(e), ([e, t]) => [e, t], () => I(vs(e), ([e, t]) => [e, t], () => I(ys(e), ([e, t]) => [e, t], () => I(bs(e), ([e, t]) => [e, t], () => [])))), ([e, t]) => [ni(e), t]), Ss = (e, t = []) => I(I(F(",", e), ([e, t]) => I(xs(t), ([t, n]) => [[e, t], n])), ([e, n]) => Ss(n, [...t, e]), () => [t, e]), Cs = (e) => I(I(I(xs(e), ([e, t]) => I(Ss(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ri(e), t]), ws = (e) => I(I(F("<", e), ([e, t]) => I(Cs(t), ([t, n]) => I(F(">", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [ii(e), t]), Ts = (e, t = []) => I(I(F(",", e), ([e, t]) => I(L(t), ([t, n]) => [[e, t], n])), ([e, n]) => Ts(n, [...t, e]), () => [t, e]), Es = (e) => I(I(I(L(e), ([e, t]) => I(Ts(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ai(e), t]), Ds = (e) => I(I(F("<", e), ([e, t]) => I(Es(t), ([t, n]) => I(F(">", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [oi(e), t]), Os = (e) => I(I(Yo(e), ([e, t]) => I(Ds(t), ([t, n]) => [[e, t], n])), ([e, t]) => [si(e), t]), ks = (e) => I(I(I(F(";", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ci(e), t]), As = (e) => I(F("string", e), ([e, t]) => [li(e), t]), js = (e) => I(F("number", e), ([e, t]) => [ui(e), t]), Ms = (e) => I(F("boolean", e), ([e, t]) => [di(e), t]), Ns = (e) => I(F("undefined", e), ([e, t]) => [fi(e), t]), Ps = (e) => I(F("null", e), ([e, t]) => [pi(e), t]), Fs = (e) => I(F("integer", e), ([e, t]) => [mi(e), t]), Is = (e) => I(F("bigint", e), ([e, t]) => [hi(e), t]), Ls = (e) => I(F("unknown", e), ([e, t]) => [gi(e), t]), Rs = (e) => I(F("any", e), ([e, t]) => [_i(e), t]), zs = (e) => I(F("object", e), ([e, t]) => [vi(e), t]), Bs = (e) => I(F("never", e), ([e, t]) => [yi(e), t]), Vs = (e) => I(F("symbol", e), ([e, t]) => [bi(e), t]), Hs = (e) => I(F("void", e), ([e, t]) => [xi(e), t]), Us = (e) => I(F("this", e), ([e, t]) => [Si(e), t]), Ws = (e) => I(I(F("${", e), ([e, t]) => I(L(t), ([t, n]) => I(F("}", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Di(e), t]), Gs = (e) => I(cs(["${", "`"], e), ([e, t]) => [Oi(e), t]), Ks = (e) => I(I(I(Gs(e), ([e, t]) => I(Ws(t), ([t, n]) => I(Ks(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I(I(Gs(e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I(I(Gs(e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => []))), ([e, t]) => [ki(e), t]), qs = (e) => I(I(F("`", e), ([e, t]) => I(Ks(t), ([t, n]) => I(F("`", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Ai(e), t]), Js = (e) => I(qs(e), ([e, t]) => [ji(e), t]), Ys = (e) => I(I(I(F("if", e), ([e, t]) => I(L(t), ([t, n]) => I(F("then", n), ([n, r]) => I(L(r), ([r, i]) => I(F("else", i), ([i, a]) => I(L(a), ([a, o]) => [[
	e,
	t,
	n,
	r,
	i,
	a
], o])))))), ([e, t]) => [e, t], () => I(I(F("if", e), ([e, t]) => I(L(t), ([t, n]) => I(F("then", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [e, t], () => [])), ([e, t]) => [Mi(e), t]), Xs = (e) => I(Ho(e), ([e, t]) => [Ci(e), t]), Zs = (e) => I(I(F("true", e), ([e, t]) => [e, t], () => I(F("false", e), ([e, t]) => [e, t], () => [])), ([e, t]) => [wi(e), t]), Qs = (e) => I(as(e), ([e, t]) => [Ti(e), t]), $s = (e) => I(hs(["'", "\""], e), ([e, t]) => [Ei(e), t]), ec = (e) => I(I(I(F("keyof", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Ni(e), t]), tc = (e, t = []) => I(I(I(F("[", e), ([e, t]) => I(L(t), ([t, n]) => I(F("]", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I(I(F("[", e), ([e, t]) => I(F("]", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => [])), ([e, n]) => tc(n, [...t, e]), () => [t, e]), nc = (e) => I(tc(e), ([e, t]) => [Pi(e), t]), rc = (e) => I(I(I(F("extends", e), ([e, t]) => I(L(t), ([t, n]) => I(F("?", n), ([n, r]) => I(L(r), ([r, i]) => I(F(":", i), ([i, a]) => I(L(a), ([a, o]) => [[
	e,
	t,
	n,
	r,
	i,
	a
], o])))))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Fi(e), t]), ic = (e) => I(I(I(F("(", e), ([e, t]) => I(L(t), ([t, n]) => I(F(")", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I(As(e), ([e, t]) => [e, t], () => I(js(e), ([e, t]) => [e, t], () => I(Ms(e), ([e, t]) => [e, t], () => I(Ns(e), ([e, t]) => [e, t], () => I(Ps(e), ([e, t]) => [e, t], () => I(Fs(e), ([e, t]) => [e, t], () => I(Is(e), ([e, t]) => [e, t], () => I(Ls(e), ([e, t]) => [e, t], () => I(Rs(e), ([e, t]) => [e, t], () => I(zs(e), ([e, t]) => [e, t], () => I(Bs(e), ([e, t]) => [e, t], () => I(Vs(e), ([e, t]) => [e, t], () => I(Hs(e), ([e, t]) => [e, t], () => I(Us(e), ([e, t]) => [e, t], () => I(Xs(e), ([e, t]) => [e, t], () => I(Zs(e), ([e, t]) => [e, t], () => I(Qs(e), ([e, t]) => [e, t], () => I($s(e), ([e, t]) => [e, t], () => I(Js(e), ([e, t]) => [e, t], () => I(Ys(e), ([e, t]) => [e, t], () => I(Dc(e), ([e, t]) => [e, t], () => I(Nc(e), ([e, t]) => [e, t], () => I(Uc(e), ([e, t]) => [e, t], () => I(Hc(e), ([e, t]) => [e, t], () => I(qc(e), ([e, t]) => [e, t], () => I(Os(e), ([e, t]) => [e, t], () => I(Jc(e), ([e, t]) => [e, t], () => [])))))))))))))))))))))))))))), ([e, t]) => [Ii(e), t]), ac = (e) => I(I(I(F("with", e), ([e, t]) => I(il(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Li(e), t]), oc = (e) => I(I(ec(e), ([e, t]) => I(ic(t), ([t, n]) => I(nc(n), ([n, r]) => I(rc(r), ([r, i]) => I(ac(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [Vi(e), t]), sc = (e) => I(I(I(F("&", e), ([e, t]) => I(oc(t), ([t, n]) => I(sc(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Ui(e), t]), cc = (e) => I(I(oc(e), ([e, t]) => I(sc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [Wi(e), t]), lc = (e) => I(I(I(F("|", e), ([e, t]) => I(cc(t), ([t, n]) => I(lc(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Gi(e), t]), uc = (e) => I(I(cc(e), ([e, t]) => I(lc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [Ki(e), t]), dc = (e) => I(I(F("readonly", e), ([e, t]) => I(uc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [qi(e), t]), fc = (e) => I(I(F("|", e), ([e, t]) => I(uc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [Ji(e), t]), pc = (e) => I(I(ws(e), ([e, t]) => I(F("=", t), ([t, n]) => I(L(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Yi(e), t]), mc = (e) => I(I(I(F("infer", e), ([e, t]) => I(Yo(t), ([t, n]) => I(F("extends", n), ([n, r]) => I(uc(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [e, t], () => I(I(F("infer", e), ([e, t]) => I(Yo(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => [])), ([e, t]) => [Xi(e), t]), L = (e) => I(I(mc(e), ([e, t]) => [e, t], () => I(fc(e), ([e, t]) => [e, t], () => I(dc(e), ([e, t]) => [e, t], () => I(uc(e), ([e, t]) => [e, t], () => [])))), ([e, t]) => [Zi(e), t]), hc = (e) => I(as(e), ([e, t]) => [Qi(e), t]), gc = (e) => I(Yo(e), ([e, t]) => [$i(e), t]), _c = (e) => I(hs(["'", "\""], e), ([e, t]) => [ea(e), t]), vc = (e) => I(I(F("[", e), ([e, t]) => I(Yo(t), ([t, n]) => I(F(":", n), ([n, r]) => I(I(Fs(r), ([e, t]) => [e, t], () => I(js(r), ([e, t]) => [e, t], () => I(As(r), ([e, t]) => [e, t], () => I(Vs(r), ([e, t]) => [e, t], () => [])))), ([r, i]) => I(F("]", i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [ta(e), t]), yc = (e) => I(I(hc(e), ([e, t]) => [e, t], () => I(gc(e), ([e, t]) => [e, t], () => I(_c(e), ([e, t]) => [e, t], () => I(vc(e), ([e, t]) => [e, t], () => [])))), ([e, t]) => [na(e), t]), bc = (e) => I(I(I(F("readonly", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ra(e), t]), xc = (e) => I(I(I(F("?", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ia(e), t]), Sc = (e) => I(I(bc(e), ([e, t]) => I(yc(t), ([t, n]) => I(xc(n), ([n, r]) => I(F(":", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [aa(e), t]), Cc = (e) => I(I(I(F(",", e), ([e, t]) => I(F("\n", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F(";", e), ([e, t]) => I(F("\n", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F(",", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I(I(F(";", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I(I(F("\n", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => []))))), ([e, t]) => [oa(e), t]), wc = (e, t = []) => I(I(Cc(e), ([e, t]) => I(Sc(t), ([t, n]) => [[e, t], n])), ([e, n]) => wc(n, [...t, e]), () => [t, e]), Tc = (e) => I(I(I(Sc(e), ([e, t]) => I(wc(t), ([t, n]) => I(I(Cc(n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [sa(e), t]), Ec = (e) => I(I(F("{", e), ([e, t]) => I(Tc(t), ([t, n]) => I(F("}", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [la(e), t]), Dc = (e) => I(Ec(e), ([e, t]) => [ua(e), t]), Oc = (e) => I(I(I(Yo(e), ([e, t]) => I(F("?", t), ([t, n]) => I(F(":", n), ([n, r]) => I(F("readonly", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [e, t], () => I(I(Yo(e), ([e, t]) => I(F(":", t), ([t, n]) => I(F("readonly", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [e, t], () => I(I(Yo(e), ([e, t]) => I(F("?", t), ([t, n]) => I(F(":", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [e, t], () => I(I(Yo(e), ([e, t]) => I(F(":", t), ([t, n]) => I(L(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => [])))), ([e, t]) => [da(e), t]), kc = (e) => I(I(Oc(e), ([e, t]) => [e, t], () => I(I(bc(e), ([e, t]) => I(L(t), ([t, n]) => I(xc(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => [])), ([e, t]) => [fa(e), t]), Ac = (e) => I(I(I(F("...", e), ([e, t]) => I(kc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(kc(e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => [])), ([e, t]) => [pa(e), t]), jc = (e, t = []) => I(I(F(",", e), ([e, t]) => I(Ac(t), ([t, n]) => [[e, t], n])), ([e, n]) => jc(n, [...t, e]), () => [t, e]), Mc = (e) => I(I(I(Ac(e), ([e, t]) => I(jc(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ma(e), t]), Nc = (e) => I(I(F("[", e), ([e, t]) => I(Mc(t), ([t, n]) => I(F("]", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [ha(e), t]), Pc = (e) => I(I(Yo(e), ([e, t]) => I(F("?", t), ([t, n]) => I(F(":", n), ([n, r]) => I(F("readonly", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [ga(e), t]), Fc = (e) => I(I(Yo(e), ([e, t]) => I(F(":", t), ([t, n]) => I(F("readonly", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [_a(e), t]), Ic = (e) => I(I(Yo(e), ([e, t]) => I(F("?", t), ([t, n]) => I(F(":", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [va(e), t]), Lc = (e) => I(I(Yo(e), ([e, t]) => I(F(":", t), ([t, n]) => I(L(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [ya(e), t]), Rc = (e) => I(I(Pc(e), ([e, t]) => [e, t], () => I(Fc(e), ([e, t]) => [e, t], () => I(Ic(e), ([e, t]) => [e, t], () => I(Lc(e), ([e, t]) => [e, t], () => [])))), ([e, t]) => [ba(e), t]), zc = (e) => I(I(I(F("...", e), ([e, t]) => I(Rc(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(Rc(e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => [])), ([e, t]) => [xa(e), t]), Bc = (e, t = []) => I(I(F(",", e), ([e, t]) => I(zc(t), ([t, n]) => [[e, t], n])), ([e, n]) => Bc(n, [...t, e]), () => [t, e]), Vc = (e) => I(I(I(zc(e), ([e, t]) => I(Bc(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Sa(e), t]), Hc = (e) => I(I(F("(", e), ([e, t]) => I(Vc(t), ([t, n]) => I(F(")", n), ([n, r]) => I(F("=>", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [Ca(e), t]), Uc = (e) => I(I(F("new", e), ([e, t]) => I(F("(", t), ([t, n]) => I(Vc(n), ([n, r]) => I(F(")", r), ([r, i]) => I(F("=>", i), ([i, a]) => I(L(a), ([a, o]) => [[
	e,
	t,
	n,
	r,
	i,
	a
], o])))))), ([e, t]) => [wa(e), t]), Wc = (e) => I(I(I(F("+", e), ([e, t]) => I(F("readonly", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F("-", e), ([e, t]) => I(F("readonly", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F("readonly", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])))), ([e, t]) => [Ea(e), t]), Gc = (e) => I(I(I(F("+", e), ([e, t]) => I(F("?", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F("-", e), ([e, t]) => I(F("?", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F("?", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])))), ([e, t]) => [Oa(e), t]), Kc = (e) => I(I(I(F("as", e), ([e, t]) => I(L(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ka(e), t]), qc = (e) => I(I(F("{", e), ([e, t]) => I(Wc(t), ([t, n]) => I(F("[", n), ([n, r]) => I(Yo(r), ([r, i]) => I(F("in", i), ([i, a]) => I(L(a), ([a, o]) => I(Kc(o), ([o, s]) => I(F("]", s), ([s, c]) => I(Gc(c), ([c, l]) => I(F(":", l), ([l, u]) => I(L(u), ([u, d]) => I(ks(d), ([d, f]) => I(F("}", f), ([f, p]) => [[
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s,
	c,
	l,
	u,
	d,
	f
], p]))))))))))))), ([e, t]) => [Aa(e), t]), Jc = (e) => I(Yo(e), ([e, t]) => [ja(e), t]), Yc = (e) => I(Ho(e), ([e, t]) => [Ma(e), t]), Xc = (e) => I(as(e), ([e, t]) => [Na(e), t]), Zc = (e) => I(I(F("true", e), ([e, t]) => [e, t], () => I(F("false", e), ([e, t]) => [e, t], () => [])), ([e, t]) => [Pa(e), t]), Qc = (e) => I(hs(["\"", "'"], e), ([e, t]) => [Fa(e), t]), $c = (e) => I(F("null", e), ([e, t]) => [Ia(e), t]), el = (e) => I(F("undefined", e), ([e, t]) => [void 0, t]), tl = (e) => I(I(yc(e), ([e, t]) => I(F(":", t), ([t, n]) => I(cl(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [La(e), t]), nl = (e, t = []) => I(I(Cc(e), ([e, t]) => I(tl(t), ([t, n]) => [[e, t], n])), ([e, n]) => nl(n, [...t, e]), () => [t, e]), rl = (e) => I(I(I(tl(e), ([e, t]) => I(nl(t), ([t, n]) => I(I(Cc(n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Ra(e), t]), il = (e) => I(I(F("{", e), ([e, t]) => I(rl(t), ([t, n]) => I(F("}", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Ba(e), t]), al = (e, t = []) => I(I(F(",", e), ([e, t]) => I(cl(t), ([t, n]) => [[e, t], n])), ([e, n]) => al(n, [...t, e]), () => [t, e]), ol = (e) => I(I(I(cl(e), ([e, t]) => I(al(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [Va(e), t]), sl = (e) => I(I(F("[", e), ([e, t]) => I(ol(t), ([t, n]) => I(F("]", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Ha(e), t]), cl = (e) => I(I(Yc(e), ([e, t]) => [e, t], () => I(Xc(e), ([e, t]) => [e, t], () => I(Zc(e), ([e, t]) => [e, t], () => I(Qc(e), ([e, t]) => [e, t], () => I($c(e), ([e, t]) => [e, t], () => I(el(e), ([e, t]) => [e, t], () => I(il(e), ([e, t]) => [e, t], () => I(sl(e), ([e, t]) => [e, t], () => [])))))))), ([e, t]) => [Ua(e), t]), ll = (e) => I(F("-?(?:0|[1-9][0-9]*)n", e), ([e, t]) => [Wa(e), t]), ul = (e) => I(F(".*", e), ([e, t]) => [Ga(e), t]), dl = (e) => I(F("-?(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?", e), ([e, t]) => [Ka(e), t]), fl = (e) => I(F("-?(?:0|[1-9][0-9]*)", e), ([e, t]) => [qa(e), t]), pl = (e) => I(F("(?!)", e), ([e, t]) => [Ja(e), t]), ml = (e) => I(gs([
	"-?(?:0|[1-9][0-9]*)n",
	".*",
	"-?(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?",
	"-?(?:0|[1-9][0-9]*)",
	"(?!)",
	"(",
	")",
	"$",
	"|"
], e), ([e, t]) => [Ya(e), t]), hl = (e) => I(I(ll(e), ([e, t]) => [e, t], () => I(ul(e), ([e, t]) => [e, t], () => I(dl(e), ([e, t]) => [e, t], () => I(fl(e), ([e, t]) => [e, t], () => I(pl(e), ([e, t]) => [e, t], () => I(gl(e), ([e, t]) => [e, t], () => I(ml(e), ([e, t]) => [e, t], () => []))))))), ([e, t]) => [Xa(e), t]), gl = (e) => I(I(F("(", e), ([e, t]) => I(yl(t), ([t, n]) => I(F(")", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [Za(e), t]), _l = (e) => I(I(I(vl(e), ([e, t]) => I(F("|", t), ([t, n]) => I(_l(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I(I(vl(e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => []))), ([e, t]) => [Qa(e), t]), vl = (e) => I(I(hl(e), ([e, t]) => I(yl(t), ([t, n]) => [[e, t], n])), ([e, t]) => [$a(e), t]), yl = (e) => I(I(_l(e), ([e, t]) => [e, t], () => I(vl(e), ([e, t]) => [e, t], () => [])), ([e, t]) => [eo(e), t]), bl = (e) => I(I(F("^", e), ([e, t]) => I(yl(t), ([t, n]) => I(F("$", n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [to(e), t]), xl = (e, t = []) => I(I(F(",", e), ([e, t]) => I(L(t), ([t, n]) => [[e, t], n])), ([e, n]) => xl(n, [...t, e]), () => [t, e]), Sl = (e) => I(I(I(L(e), ([e, t]) => I(xl(t), ([t, n]) => I(I(F(",", n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [no(e), t]), Cl = (e) => I(I(I(F("extends", e), ([e, t]) => I(Sl(t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [ro(e), t]), wl = (e) => I(I(F("interface", e), ([e, t]) => I(Yo(t), ([t, n]) => I(ws(n), ([n, r]) => I(Cl(r), ([r, i]) => I(Ec(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [io(e), t]), Tl = (e) => I(I(F("interface", e), ([e, t]) => I(Yo(t), ([t, n]) => I(Cl(n), ([n, r]) => I(Ec(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [ao(e), t]), El = (e) => I(I(F("type", e), ([e, t]) => I(Yo(t), ([t, n]) => I(ws(n), ([n, r]) => I(F("=", r), ([r, i]) => I(L(i), ([i, a]) => [[
	e,
	t,
	n,
	r,
	i
], a]))))), ([e, t]) => [oo(e), t]), Dl = (e) => I(I(F("type", e), ([e, t]) => I(Yo(t), ([t, n]) => I(F("=", n), ([n, r]) => I(L(r), ([r, i]) => [[
	e,
	t,
	n,
	r
], i])))), ([e, t]) => [so(e), t]), Ol = (e) => I(I(I(F("export", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [co(e), t]), kl = (e) => I(I(I(F(";", e), ([e, t]) => I(F("\n", t), ([t, n]) => [[e, t], n])), ([e, t]) => [e, t], () => I(I(F(";", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => I(I(F("\n", e), ([e, t]) => [[e], t]), ([e, t]) => [e, t], () => []))), ([e, t]) => [lo(e), t]), Al = (e, t = []) => I(I(kl(e), ([e, t]) => I(Ml(t), ([t, n]) => [[e, t], n])), ([e, n]) => Al(n, [...t, e]), () => [t, e]), jl = (e) => I(I(I(Ml(e), ([e, t]) => I(Al(t), ([t, n]) => I(I(kl(n), ([e, t]) => [[e], t], () => [[], n]), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [e, t], () => I([[], e], ([e, t]) => [e, t], () => [])), ([e, t]) => [uo(e), t]), Ml = (e) => I(I(Ol(e), ([e, t]) => I(I(wl(t), ([e, t]) => [e, t], () => I(Tl(t), ([e, t]) => [e, t], () => I(El(t), ([e, t]) => [e, t], () => I(Dl(t), ([e, t]) => [e, t], () => [])))), ([t, n]) => I(ks(n), ([n, r]) => [[
	e,
	t,
	n
], r]))), ([e, t]) => [fo(e), t]), Nl = (e) => I(I(Ml(e), ([e, t]) => I(jl(t), ([t, n]) => [[e, t], n])), ([e, t]) => [po(e), t]), Pl = (e) => I(I(Nl(e), ([e, t]) => [e, t], () => I(pc(e), ([e, t]) => [e, t], () => I(L(e), ([e, t]) => [e, t], () => []))), ([e, t]) => [mo(e), t]);
// node_modules/typebox/build/type/engine/patterns/template.mjs
function Fl(e) {
	let t = qs(`\`${e}\``);
	return S(t.length, 2) ? t[0] : gt();
}
// node_modules/typebox/build/type/engine/template_literal/encode.mjs
function Il(e) {
	return e.join("|");
}
function Ll(e) {
	return e.slice(1, e.length - 1);
}
function Rl(e, t, n) {
	return Yl(t, `${n}${e}`);
}
function zl(e, t) {
	return Yl(e, `${t}${Pt}`);
}
function Bl(e, t) {
	return Yl(e, `${t}${Vt}`);
}
function Vl(e, t) {
	return Yl(e, `${t}${Qt}`);
}
function Hl(e, t) {
	return Jl(cn([M("false"), M("true")]), e, t);
}
function Ul(e, t) {
	return Yl(e, `${t}.*`);
}
function Wl(e, t, n) {
	return Yl(t, `${n}${Ll(e)}`);
}
function Gl(e, t, n) {
	return Jl(Ql(e, {}), t, n);
}
function Kl(e, t, n) {
	return Jl(or(e), t, n);
}
function ql(e, t, n, r = []) {
	return C(e, (e, i) => ql(i, t, n, [...r, Jl(e, [], "")]), () => Yl(t, `${n}(${Il(r)})`));
}
function Jl(e, t, n) {
	return ft(e) ? Kl(e.enum, t, n) : Ut(e) ? Bl(t, n) : Yt(e) ? Rl(e.const, t, n) : It(e) ? zl(t, n) : Rt(e) ? Hl(t, n) : en(e) ? Vl(t, n) : sn(e) ? Ul(t, n) : au(e) ? Wl(e.pattern, t, n) : tu(e) ? Gl(e.parameters[0], t, n) : N(e) ? ql(e.anyOf, t, n) : Re;
}
function Yl(e, t) {
	return C(e, (e, n) => Jl(e, n, t), () => t);
}
function Xl(e) {
	return `^${Yl(e, "")}$`;
}
function Zl(e) {
	return gn(Xl(e));
}
// node_modules/typebox/build/type/engine/template_literal/instantiate.mjs
function Ql(e, t) {
	return Wg(e) ? O(Zl(e), {}, t) : eu(e, t);
}
function $l(e, t, n, r) {
	return Ql(qg(e, t, n), r);
}
// node_modules/typebox/build/type/types/template_literal.mjs
function eu(e, t = {}) {
	return A("TemplateLiteral", [e], t);
}
function tu(e) {
	return _e(e) && w(e, "action") && S(e.action, "TemplateLiteral");
}
function nu(e) {
	return Ql(e, {});
}
function ru(e) {
	return nu(Fl(e));
}
function iu(e, t = {}) {
	return O(x(e) ? ru(e) : nu(e), {}, t);
}
function au(e) {
	return k(e, "TemplateLiteral");
}
// node_modules/typebox/build/type/extends/result.mjs
var ou = /* @__PURE__ */ c({
	ExtendsFalse: () => z,
	ExtendsTrue: () => R,
	ExtendsUnion: () => su,
	IsExtendsFalse: () => uu,
	IsExtendsTrue: () => lu,
	IsExtendsTrueLike: () => du,
	IsExtendsUnion: () => cu,
	Match: () => fu
});
function su(e) {
	return D({ "~kind": "ExtendsUnion" }, { inferred: e });
}
function cu(e) {
	return b(e) && w(e, "~kind") && w(e, "inferred") && S(e["~kind"], "ExtendsUnion") && b(e.inferred);
}
function R(e) {
	return D({ "~kind": "ExtendsTrue" }, { inferred: e });
}
function lu(e) {
	return b(e) && w(e, "~kind") && w(e, "inferred") && S(e["~kind"], "ExtendsTrue") && b(e.inferred);
}
function z() {
	return D({ "~kind": "ExtendsFalse" }, {});
}
function uu(e) {
	return b(e) && w(e, "~kind") && S(e["~kind"], "ExtendsFalse");
}
function du(e) {
	return cu(e) || lu(e);
}
function fu(e, t, n) {
	return du(e) ? t(e.inferred) : n();
}
// node_modules/typebox/build/type/extends/extends_right.mjs
function pu(e, t, n, r) {
	return fu(Md(e, n, r), (r) => R(E(E(e, r), { [t]: n })), () => z());
}
function mu(e, t) {
	return R(e);
}
function hu(e, t, n, r, i) {
	return fu(Md(e, t, n), (e) => fu(Md(e, t, r), (e) => R(e), () => z()), () => fu(Md(e, t, i), (e) => R(e), () => z()));
}
function gu(e, t, n) {
	return Md(e, t, or(n));
}
function _u(e, t, n) {
	return C(n, (n, r) => fu(Md(e, t, n), (e) => _u(e, t, r), () => z()), () => R(e));
}
function vu(e, t, n) {
	return Md(e, t, cr(n));
}
function yu(e, t, n) {
	return C(n, (n, r) => fu(Md(e, t, n), (e) => R(e), () => yu(e, t, r)), () => z());
}
function bu(e, t, n) {
	return Le(n) ? mu(e, t) : ot(n) ? hu(e, t, n.if, n.then, n.else) : ft(n) ? gu(e, t, n.enum) : it(n) ? pu(e, n.name, t, n.extends) : mt(n) ? _u(e, t, n.allOf) : au(n) ? vu(e, t, n.pattern) : N(n) ? yu(e, t, n.anyOf) : Ze(n) ? R(e) : z();
}
// node_modules/typebox/build/type/extends/any.mjs
function xu(e, t, n) {
	return it(n) ? bu(e, t, n) : Le(n) || Ze(n) ? R(e) : su(e);
}
// node_modules/typebox/build/type/extends/array.mjs
function Su(e, t) {
	let n = Tt(e), r = Tt(t);
	return n && r || !n && r ? !0 : !(n && !r);
}
function Cu(e, t, n, r) {
	return we(r) ? Su(t, r) ? Md(e, n, r.items) : z() : bu(e, t, r);
}
// node_modules/typebox/build/type/extends/bigint.mjs
function wu(e, t, n) {
	return It(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/boolean.mjs
function Tu(e, t, n) {
	return Rt(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/parameters.mjs
function Eu(e, t, n, r, i) {
	let a = it(r) ? t : r, o = it(r) ? r : t, s = We(t), c = We(r);
	return !s && c ? z() : fu(Md(e, a, o), (e) => ku(e, n, i), () => z());
}
function Du(e, t, n, r) {
	return C(r, (r, i) => Eu(e, t, n, r, i), () => We(t) ? R(e) : z());
}
function Ou(e, t, n) {
	return C(t, (t, r) => Du(e, t, r, n), () => R(e));
}
function ku(e, t, n) {
	return Ou(e, t, n);
}
// node_modules/typebox/build/type/extends/return_type.mjs
function Au(e, t, n) {
	return qr(n) ? R(e) : Md(e, t, n);
}
// node_modules/typebox/build/type/extends/constructor.mjs
function ju(e, t, n, r) {
	return Le(r) || Ze(r) ? R(e) : De(r) ? fu(ku(e, t, r.parameters), (e) => Au(e, n, r.instanceType), () => z()) : z();
}
// node_modules/typebox/build/type/extends/dependent.mjs
function Mu(e, t, n, r, i) {
	return fu(Md(e, t, i), () => Md(e, n, i), () => Md(e, r, i));
}
// node_modules/typebox/build/type/extends/enum.mjs
function Nu(e, t, n) {
	return Md(e, or(t), n);
}
// node_modules/typebox/build/type/extends/function.mjs
function Pu(e, t, n, r) {
	return Le(r) || Ze(r) ? R(e) : Ae(r) ? fu(ku(e, t, r.parameters), (e) => Au(e, n, r.returnType), () => z()) : z();
}
// node_modules/typebox/build/type/extends/integer.mjs
function Fu(e, t, n) {
	return Ut(n) || en(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/intersect.mjs
function Iu(e, t, n) {
	return Md(e, sr(t), n);
}
// node_modules/typebox/build/type/extends/literal.mjs
function Lu(e, t, n) {
	return t === n ? R(e) : z();
}
function Ru(e, t, n) {
	return Yt(n) ? Lu(e, t, n.const) : It(n) ? R(e) : bu(e, M(t), n);
}
function zu(e, t, n) {
	return Yt(n) ? Lu(e, t, n.const) : Rt(n) ? R(e) : bu(e, M(t), n);
}
function Bu(e, t, n) {
	return Yt(n) ? Lu(e, t, n.const) : en(n) ? R(e) : bu(e, M(t), n);
}
function Vu(e, t, n) {
	return Yt(n) ? Lu(e, t, n.const) : sn(n) ? R(e) : bu(e, M(t), n);
}
function Hu(e, t, n) {
	return m(t.const) ? Ru(e, t.const, n) : h(t.const) ? zu(e, t.const, n) : v(t.const) ? Bu(e, t.const, n) : x(t.const) ? Vu(e, t.const, n) : gt();
}
// node_modules/typebox/build/type/extends/never.mjs
function Uu(e, t, n) {
	return it(n) ? bu(e, t, n) : R(e);
}
// node_modules/typebox/build/type/extends/null.mjs
function Wu(e, t, n) {
	return Zt(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/number.mjs
function Gu(e, t, n) {
	return en(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/object.mjs
function Ku(e, t, n) {
	return We(t) ? We(n) ? R(e) : z() : R(e);
}
function qu(e, t, n) {
	return it(n) && Be(n.extends) ? z() : fu(Md(e, t, n), (e) => Ku(e, t, n), () => z());
}
function Ju(e, t) {
	return e.reduce((e, n) => n in t && du(t[n]) ? {
		...e,
		...t[n].inferred
	} : gt(), {});
}
function Yu(e, t, n) {
	let r = {};
	for (let i of T(n)) r[i] = i in t ? qu({}, t[i], n[i]) : We(n[i]) ? it(n[i]) ? R(E(e, { [n[i].name]: n[i].extends })) : R(e) : z();
	let i = ae(r).every((e) => du(e)), a = i ? Ju(T(r), r) : {};
	return i ? R(a) : z();
}
function Xu(e, t, n) {
	let r = Yu(e, t, n);
	return du(r) ? R(E(e, r.inferred)) : z();
}
function Zu(e, t, n) {
	return Xu(e, t, n);
}
function Qu(e, t) {
	return T(t).reduce((n, r) => ({
		...n,
		[r]: w(e, r) ? N(n[r]) ? cn([...n[r].anyOf, t[r]]) : cn([e[r], t[r]]) : t[r]
	}), e);
}
function $u(e, t, n, r) {
	return C(t, (t, i) => fu(Md({}, e[t], n), (t) => $u(e, i, n, Qu(r, t)), () => z()), () => R(r));
}
function ed(e, t, n, r) {
	return $u(t, T(t), r, e);
}
function td(e, t, n) {
	return zr(n) ? ed(e, t, Ir(n), Rr(n)) : Je(n) ? Zu(e, t, n.properties) : bu(e, j(t), n);
}
// node_modules/typebox/build/type/extends/record.mjs
function nd(e, t) {
	return S(T(t).length, 0) ? R(e) : z();
}
function rd(e, t, n, r, i) {
	return Md(e, n, i);
}
function id(e, t, n, r) {
	return zr(r) ? rd(e, Fr(t), n, Fr(Ir(r)), Rr(r)) : Je(r) ? nd(e, r.properties) : Le(r) || Ze(r) ? R(e) : z();
}
// node_modules/typebox/build/type/extends/string.mjs
function ad(e, t, n) {
	return sn(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/symbol.mjs
function od(e, t, n) {
	return nn(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/template_literal.mjs
function sd(e, t, n) {
	return Md(e, cr(t), n);
}
// node_modules/typebox/build/type/extends/inference.mjs
function cd(e, t) {
	return D({ "~kind": "Inferrable" }, {
		name: e,
		type: t
	}, {});
}
function ld(e) {
	return b(e) && w(e, "~kind") && w(e, "name") && w(e, "type") && S(e["~kind"], "Inferrable") && x(e.name) && b(e.type);
}
function ud(e) {
	return Vr(e) ? it(e.items) ? we(e.items.extends) ? cd(e.items.name, e.items.extends.items) : Ze(e.items.extends) ? cd(e.items.name, e.items.extends) : void 0 : gt() : void 0;
}
function dd(e) {
	return it(e) ? cd(e.name, e.extends) : void 0;
}
function fd(e, t) {
	let n = [];
	for (let r of e) {
		if (!du(Md({}, r, t))) return;
		n.push(r);
	}
	return n;
}
function pd(e, t, n, r) {
	let i = fd(n, r);
	return p(i) ? R(E(e, { [t]: An(i) })) : z();
}
function md(e, t, n, r) {
	let i = fd(n, r);
	return p(i) ? R(E(e, { [t]: cn(i) })) : z();
}
// node_modules/typebox/build/type/extends/tuple.mjs
function hd(e) {
	return [...e].reverse();
}
function gd(e, t) {
	return t ? hd(e) : e;
}
function _d(e) {
	let t = e.length > 0 ? e[0] : void 0;
	return _e(_e(t) ? ud(t) : void 0);
}
function vd(e, t, n, r, i, a) {
	return fu(Md(e, n, i), (e) => xd(e, t, r, a), () => z());
}
function yd(e, t, n, r, i) {
	let a = ud(r);
	return ld(a) ? pd(e, a.name, gd(n, t), a.type) : C(n, (n, a) => vd(e, t, n, a, r, i), () => z());
}
function bd(e, t, n, r) {
	return C(r, (r, i) => yd(e, t, n, r, i), () => S(n.length, 0) ? R(e) : z());
}
function xd(e, t, n, r) {
	return bd(e, t, n, r);
}
function Sd(e, t, n) {
	let r = Kg(e, Ug([], []), n), i = _d(r);
	return xd(e, i, gd(t, i), gd(r, i));
}
function Cd(e, t, n) {
	for (let r of t) {
		let t = Md(e, r, n);
		if (!du(t)) return t;
		e = t.inferred;
	}
	return R(e);
}
function wd(e, t, n) {
	let r = dd(n);
	return ld(r) ? md(e, r.name, t, r.type) : Cd(e, t, n);
}
function Td(e, t, n) {
	let r = Kg(e, Ug([], []), t);
	return jn(n) ? Sd(e, r, n.items) : we(n) ? wd(e, r, n.items) : bu(e, An(r), n);
}
// node_modules/typebox/build/type/extends/undefined.mjs
function Ed(e, t, n) {
	return qr(n) || Gr(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/union.mjs
function Dd(e, t, n) {
	return C(n, (n, r) => fu(Md(e, t, n), (e) => R(e), () => Dd(e, t, r)), () => z());
}
function Od(e, t, n) {
	return C(t, (t, r) => fu(Dd(e, t, n), (e) => Od(e, r, n), () => z()), () => R(e));
}
function kd(e, t, n) {
	let r = dd(n);
	return ld(r) ? md(e, r.name, t, r.type) : N(n) ? Od(e, t, n.anyOf) : Od(e, t, [n]);
}
// node_modules/typebox/build/type/extends/unknown.mjs
function Ad(e, t, n) {
	return it(n) ? bu(e, t, n) : Le(n) || Ze(n) ? R(e) : z();
}
// node_modules/typebox/build/type/extends/void.mjs
function jd(e, t, n) {
	return qr(n) ? R(e) : bu(e, t, n);
}
// node_modules/typebox/build/type/extends/extends_left.mjs
function Md(e, t, n) {
	return Le(t) ? xu(e, t, n) : we(t) ? Cu(e, t, t.items, n) : It(t) ? wu(e, t, n) : Rt(t) ? Tu(e, t, n) : De(t) ? ju(e, t.parameters, t.instanceType, n) : ot(t) ? Mu(e, t.if, t.then, t.else, n) : ft(t) ? Nu(e, t.enum, n) : Ae(t) ? Pu(e, t.parameters, t.returnType, n) : Ut(t) ? Fu(e, t, n) : mt(t) ? Iu(e, t.allOf, n) : Yt(t) ? Hu(e, t, n) : Be(t) ? Uu(e, t, n) : Zt(t) ? Wu(e, t, n) : en(t) ? Gu(e, t, n) : Je(t) ? td(e, t.properties, n) : zr(t) ? id(e, Ir(t), Rr(t), n) : sn(t) ? ad(e, t, n) : nn(t) ? od(e, t, n) : au(t) ? sd(e, t.pattern, n) : jn(t) ? Td(e, t.items, n) : Gr(t) ? Ed(e, t, n) : N(t) ? kd(e, t.anyOf, n) : Ze(t) ? Ad(e, t, n) : qr(t) ? jd(e, t, n) : z();
}
// node_modules/typebox/build/type/engine/interface/instantiate.mjs
function Nd(e, t) {
	return sr([...e, j(t)]);
}
function Pd(e, t, n) {
	return Wg(e) ? O(Nd(e, t), {}, n) : Id(e, t, n);
}
function Fd(e, t, n, r, i) {
	return Pd(qg(e, t, n), Gg(e, t, r), i);
}
// node_modules/typebox/build/type/action/interface.mjs
function Id(e, t, n = {}) {
	return A("Interface", [e, t], n);
}
function Ld(e) {
	return _e(e) && w(e, "action") && S(e.action, "Interface");
}
function Rd(e, t, n = {}) {
	return Pd(e, t, n);
}
// node_modules/typebox/build/type/engine/cyclic/check.mjs
function zd(e, t, n) {
	return e.includes(n) ? !0 : Hd([...e, n], t, t[n]);
}
function Bd(e, t, n) {
	return Vd(e, t, qe(n));
}
function Vd(e, t, n) {
	return C(n, (n, r) => Hd(e, t, n) ? !0 : Vd(e, t, r), () => !1);
}
function Hd(e, t, n) {
	return Ne(n) ? zd(e, t, n.$ref) : we(n) ? Hd(e, t, n.items) : De(n) ? Vd(e, t, [...n.parameters, n.instanceType]) : Ae(n) ? Vd(e, t, [...n.parameters, n.returnType]) : Ld(n) ? Bd(e, t, n.parameters[1]) : mt(n) ? Vd(e, t, n.allOf) : Je(n) ? Bd(e, t, n.properties) : N(n) ? Vd(e, t, n.anyOf) : jn(n) ? Vd(e, t, n.items) : zr(n) ? Hd(e, t, Rr(n)) : !1;
}
function Ud(e, t, n) {
	return Hd(e, t, n);
}
// node_modules/typebox/build/type/engine/cyclic/candidates.mjs
function Wd(e, t) {
	return t.reduce((t, n) => Ud([n], e, e[n]) ? [...t, n] : t, []);
}
function Gd(e) {
	return Wd(e, Ke(e));
}
// node_modules/typebox/build/type/engine/cyclic/dependencies.mjs
function Kd(e, t, n) {
	return n.includes(t) ? n : t in e ? Yd(e, e[t], [...n, t]) : gt();
}
function qd(e, t, n) {
	return Jd(e, qe(t), n);
}
function Jd(e, t, n) {
	return t.reduce((t, n) => Yd(e, n, t), n);
}
function Yd(e, t, n) {
	return Ne(t) ? Kd(e, t.$ref, n) : we(t) ? Yd(e, t.items, n) : De(t) ? Jd(e, [...t.parameters, t.instanceType], n) : Ae(t) ? Jd(e, [...t.parameters, t.returnType], n) : Ld(t) ? qd(e, t.parameters[1], n) : mt(t) ? Jd(e, t.allOf, n) : Je(t) ? qd(e, t.properties, n) : N(t) ? Jd(e, t.anyOf, n) : jn(t) ? Jd(e, t.items, n) : zr(t) ? Yd(e, Rr(t), n) : n;
}
function Xd(e, t, n) {
	return Yd(e, n, [t]);
}
// node_modules/typebox/build/type/engine/cyclic/extends.mjs
function Zd(e) {
	return Ie();
}
function Qd(e) {
	return T(e).reduce((t, n) => ({
		...t,
		[n]: ef(e[n])
	}), {});
}
function $d(e) {
	return e.reduce((e, t) => [...e, ef(t)], []);
}
function ef(e) {
	return Ne(e) ? Zd(e.$ref) : we(e) ? Ce(ef(e.items), Te(e)) : De(e) ? Ee($d(e.parameters), ef(e.instanceType)) : Ae(e) ? ke($d(e.parameters), ef(e.returnType)) : mt(e) ? pt($d(e.allOf)) : Je(e) ? j(Qd(e.properties)) : zr(e) ? Nr(Lr(e), ef(Rr(e))) : N(e) ? cn($d(e.anyOf)) : jn(e) ? An($d(e.items)) : e;
}
function tf(e, t) {
	return t in e ? ef(e[t]) : Xe();
}
function nf(e) {
	return tf(e.$defs, e.$ref);
}
// node_modules/typebox/build/type/engine/cyclic/instantiate.mjs
function rf(e, t, n) {
	let r = qg(e, Ug([], []), t), i = Gg({}, Ug([], []), n);
	return sr([...r, j(i)]);
}
function af(e, t) {
	return T(e).filter((e) => t.includes(e)).reduce((t, n) => {
		let r = e[n], i = Ld(r) ? rf(e, r.parameters[0], r.parameters[1]) : r;
		return {
			...t,
			[n]: i
		};
	}, {});
}
function of(e, t, n) {
	return Qe(af(e, Xd(e, t, n)), t);
}
// node_modules/typebox/build/type/engine/cyclic/target.mjs
function sf(e, t) {
	return t in e ? Ne(e[t]) ? sf(e, e[t].$ref) : e[t] : ze();
}
function cf(e, t) {
	return sf(e, t);
}
// node_modules/typebox/build/type/extends/extends.mjs
function lf(e) {
	return $e(e) ? nf(e) : tt(e) ? Xe() : e;
}
function uf(e, t, n) {
	return Md(e, lf(t), lf(n));
}
function df(e, t) {
	let n = [uf({}, e, t), uf({}, t, e)];
	return du(n[0]) && du(n[1]) ? 0 : du(n[0]) && uu(n[1]) ? 2 : uu(n[0]) && du(n[1]) ? 3 : 1;
}
// node_modules/typebox/build/type/engine/evaluate/broaden.mjs
function ff(e, t, n = [], r = t) {
	return C(t, (t, i) => {
		let a = df(e, t);
		return S(a, 2) || S(a, 0) ? r : S(a, 1) ? ff(e, i, [...n, t], r) : ff(e, i, n, r);
	}, () => [...n, e]);
}
function pf(e, t, n) {
	let r = ur(e);
	return Le(r) || Ze(r) ? [r] : Be(r) ? mf(t, n) : Je(r) ? mf(t, [...n, r]) : mf(t, ff(r, n));
}
function mf(e, t = []) {
	return C(e, (e, n) => pf(e, n, t), () => t);
}
function hf(e) {
	return br(mf(e));
}
// node_modules/typebox/build/type/engine/evaluate/instantiate.mjs
function gf(e, t) {
	return O(ur(e), {}, t);
}
function _f(e, t, n, r) {
	return gf(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/call/distribute_arguments.mjs
function vf(e, t = []) {
	return ve(e) && S(e.action, "Conditional") ? Ne(e.parameters[0]) ? vf(e.parameters[2], vf(e.parameters[3], [...t, e.parameters[0].$ref])) : vf(e.parameters[2], vf(e.parameters[3], t)) : ve(e) && S(e.action, "Mapped") && ve(e.parameters[1]) && S(e.parameters[1].action, "KeyOf") && Ne(e.parameters[1].parameters[0]) ? [...t, e.parameters[1].parameters[0].$ref] : t;
}
function yf(e, t) {
	return e.reduce((e, n) => [...e, t.includes(n.name)], []);
}
function bf(e, t, n = []) {
	return C(e, (e, r) => C(t, (t, i) => bf(r, i, [...n, [t, e]]), () => n), () => n);
}
function xf(e) {
	return au(e) ? cr(e.pattern) : ft(e) ? or(e.enum) : e;
}
function Sf(e) {
	let t = xf(e);
	return N(t) ? [...t.anyOf] : [t];
}
function Cf(e, t) {
	return e.reduce((e, n) => [...e, [...n, t]], []);
}
function wf(e, t) {
	return t.reduce((t, n) => [...t, ...Cf(e, n)], []);
}
function Tf(e) {
	return e.reduce((e, t) => S(t[0], !0) ? wf(e, Sf(t[1])) : wf(e, [t[1]]), [[]]);
}
function Ef(e, t, n) {
	let r = bf(t, yf(e, vf(n)));
	return ve(n) && S(n.action, "Conditional") || ve(n) && S(n.action, "Mapped") ? Tf(r) : [t];
}
// node_modules/typebox/build/type/engine/call/resolve_target.mjs
function Df() {
	return ["(not-resolvable)", ze()];
}
function Of() {
	return ["(not-generic)", ze()];
}
function kf(e, t, n) {
	return [e, Pe(t, n)];
}
function Af(e, t, n) {
	return t in e ? jf(e, t, e[t], n) : Df();
}
function jf(e, t, n, r) {
	return Fe(n) ? kf(t, n.parameters, n.expression) : Ne(n) ? Af(e, n.$ref, r) : Of();
}
function Mf(e, t, n) {
	return jf(e, "(anonymous)", t, n);
}
// node_modules/typebox/build/type/engine/call/resolve_arguments.mjs
function Nf(e, t, n) {
	if (it(t) || Qf(t) || du(uf({}, t, n))) return;
	let r = {
		parameter: e,
		expect: n,
		actual: t
	};
	throw Error(`Argument for parameter ${e} does not satisfy constraint`, { cause: r });
}
function Pf(e, t, n, r, i) {
	let a = B(e, t, i);
	return Nf(n, a, r), E(e, { [n]: a });
}
function Ff(e, t, n, r, i) {
	let a = B(e, Ug(t.callstack, []), n.extends), o = B(e, Ug(t.callstack, []), n.equals);
	return C(i, (i, o) => If(Pf(e, t, n.name, a, i), t, r, o), () => If(Pf(e, t, n.name, a, o), t, r, []));
}
function If(e, t, n, r) {
	return C(n, (n, i) => Ff(e, t, n, i, r), () => e);
}
function Lf(e, t, n, r) {
	return If(e, t, n, r);
}
// node_modules/typebox/build/type/engine/call/instantiate.mjs
var Rf = 0, zf = 0;
function Bf() {
	if (!te(zf, se().maxInstantiationCount)) throw Error("Type instantiation is excessively deep and possibly infinite");
}
function Vf() {
	Bf(), zf++, Rf++;
}
function Hf() {
	Rf--, S(Rf, 0) && (zf = 0);
}
function Uf(e) {
	return ee(e.callstack.length, 0) ? e.callstack[e.callstack.length - 1] : "";
}
function Wf(e, t) {
	return S(Uf(e), t);
}
function Gf(e, t) {
	return Qf(e) && Ne(e.target) && S(t, e.target.$ref);
}
function Kf(e, t, n, r, i, a) {
	Vf();
	try {
		let o = Lf(e, t, r, a), s = B(o, Ug([...t.callstack, n.$ref], t.visited), i), c = Qf(s) ? qg(o, Ug([], []), s.arguments) : [];
		return Gf(s, n.$ref) ? Kf(e, Ug([], []), n, r, i, c) : B(o, Ug([], []), s);
	} finally {
		Hf();
	}
}
function qf(e, t, n, r, i, a) {
	return a.reduce((a, o) => {
		let s = Kf(e, t, n, r, i, o);
		return [...a, s];
	}, []);
}
function Jf(e, t, n, r, i, a) {
	let o = qf(e, t, n, r, i, Ef(r, a, i));
	return S(o.length, 1) ? o[0] : lr(o);
}
function Yf(e, t, n, r) {
	let i = qg(e, t, r), a = Mf(e, n, r), o = a[0], s = a[1];
	return Fe(s) ? Wf(t, o) ? Xf(Me(o), i) : Jf(e, t, Me(o), s.parameters, s.expression, i) : Xf(n, i);
}
// node_modules/typebox/build/type/types/call.mjs
function Xf(e, t) {
	return D({ "~kind": "Call" }, {
		type: "call",
		target: e,
		arguments: t
	}, {});
}
function Zf(e, t) {
	return Yf({}, Ug([], []), e, t);
}
function Qf(e) {
	return k(e, "Call");
}
// node_modules/typebox/build/type/engine/immutable/instantiate_remove.mjs
function $f(e) {
	return pe(e, ["~immutable"]);
}
function ep(e, t) {
	return O($f(e), {}, t);
}
function tp(e, t, n, r) {
	return ep(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/intrinsics/mapping.mjs
function np(e, t) {
	return e(t);
}
// node_modules/typebox/build/type/engine/intrinsics/from_literal.mjs
function rp(e, t) {
	return x(t) ? M(np(e, t)) : M(t);
}
// node_modules/typebox/build/type/engine/intrinsics/from_template_literal.mjs
function ip(e, t) {
	return op(e, cr(t));
}
// node_modules/typebox/build/type/engine/intrinsics/from_union.mjs
function ap(e, t) {
	return cn(t.map((t) => op(e, t)));
}
// node_modules/typebox/build/type/engine/intrinsics/from_type.mjs
function op(e, t) {
	return Yt(t) ? rp(e, t.const) : au(t) ? ip(e, t.pattern) : N(t) ? ap(e, t.anyOf) : t;
}
// node_modules/typebox/build/type/action/capitalize.mjs
function sp(e, t = {}) {
	return A("Capitalize", [e], t);
}
function cp(e, t = {}) {
	return yp(e, t);
}
// node_modules/typebox/build/type/action/lowercase.mjs
function lp(e, t = {}) {
	return A("Lowercase", [e], t);
}
function up(e, t = {}) {
	return bp(e, t);
}
// node_modules/typebox/build/type/action/uncapitalize.mjs
function dp(e, t = {}) {
	return A("Uncapitalize", [e], t);
}
function fp(e, t = {}) {
	return xp(e, t);
}
// node_modules/typebox/build/type/action/uppercase.mjs
function pp(e, t = {}) {
	return A("Uppercase", [e], t);
}
function mp(e, t = {}) {
	return Sp(e, t);
}
// node_modules/typebox/build/type/engine/intrinsics/instantiate.mjs
var hp = (e) => e[0].toUpperCase() + e.slice(1), gp = (e) => e.toLowerCase(), _p = (e) => e[0].toLowerCase() + e.slice(1), vp = (e) => e.toUpperCase();
function yp(e, t) {
	return Wg([e]) ? O(op(hp, e), {}, t) : sp(e, t);
}
function bp(e, t) {
	return Wg([e]) ? O(op(gp, e), {}, t) : lp(e, t);
}
function xp(e, t) {
	return Wg([e]) ? O(op(_p, e), {}, t) : dp(e, t);
}
function Sp(e, t) {
	return Wg([e]) ? O(op(vp, e), {}, t) : pp(e, t);
}
function Cp(e, t, n, r) {
	return yp(B(e, t, n), r);
}
function wp(e, t, n, r) {
	return bp(B(e, t, n), r);
}
function Tp(e, t, n, r) {
	return xp(B(e, t, n), r);
}
function Ep(e, t, n, r) {
	return Sp(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/conditional.mjs
function Dp(e, t, n, r, i = {}) {
	return A("Conditional", [
		e,
		t,
		n,
		r
	], i);
}
function Op(e, t, n, r, i = {}) {
	return Ap({}, Ug([], []), e, t, n, r, i);
}
// node_modules/typebox/build/type/engine/conditional/instantiate.mjs
function kp(e, t, n, r, i, a) {
	let o = uf(e, n, r);
	return cu(o) ? cn([B(o.inferred, t, i), B(e, t, a)]) : lu(o) ? B(o.inferred, t, i) : B(e, t, a);
}
function Ap(e, t, n, r, i, a, o) {
	return Wg([n, r]) ? O(kp(e, t, n, r, i, a), {}, o) : Dp(n, r, i, a, o);
}
function jp(e, t, n, r, i, a, o) {
	return Ap(e, t, B(e, t, n), B(e, t, r), i, a, o);
}
// node_modules/typebox/build/type/action/constructor_parameters.mjs
function Mp(e, t = {}) {
	return A("ConstructorParameters", [e], t);
}
function Np(e, t = {}) {
	return Fp(e, t);
}
// node_modules/typebox/build/type/engine/constructor_parameters/instantiate.mjs
function Pp(e) {
	let t = De(e) ? e.parameters : [];
	return An(Kg({}, Ug([], []), t));
}
function Fp(e, t) {
	return Wg([e]) ? O(Pp(e), {}, t) : Mp(e, t);
}
function Ip(e, t, n, r) {
	return Fp(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/exclude.mjs
function Lp(e, t, n = {}) {
	return A("Exclude", [e, t], n);
}
function Rp(e, t, n = {}) {
	return zp(e, t, n);
}
// node_modules/typebox/build/type/engine/exclude/instantiate.mjs
function zp(e, t, n) {
	return Wg([e, t]) ? O(ir(e, t), {}, n) : Lp(e, t, n);
}
function Bp(e, t, n, r, i) {
	return zp(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/action/extract.mjs
function Vp(e, t, n = {}) {
	return A("Extract", [e, t], n);
}
function Hp(e, t, n = {}) {
	return Kp(e, t, n);
}
// node_modules/typebox/build/type/engine/extract/operation.mjs
function Up(e, t) {
	return du(uf({}, e, t)) ? [e] : [];
}
function Wp(e, t, n = []) {
	return C(e, (e, r) => Wp(r, t, [...n, ...Up(e, t)]), () => n);
}
function Gp(e, t) {
	let n = ur(e);
	return lr(Wp(N(n) ? n.anyOf : [n], t));
}
// node_modules/typebox/build/type/engine/extract/instantiate.mjs
function Kp(e, t, n) {
	return Wg([e, t]) ? O(Gp(e, t), {}, n) : Vp(e, t, n);
}
function qp(e, t, n, r, i) {
	return Kp(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/engine/helpers/keys_to_indexer.mjs
function Jp(e) {
	return e.reduce((e, t) => Kt(t) ? [...e, M(t)] : e, []);
}
function Yp(e) {
	return cn(Jp(e));
}
// node_modules/typebox/build/type/action/indexed.mjs
function Xp(e, t, n = {}) {
	return A("Index", [e, t], n);
}
function Zp(e, t, n = {}) {
	return Um(e, p(t) ? Yp(t) : t, n);
}
// node_modules/typebox/build/type/engine/object/from_cyclic.mjs
function Qp(e, t) {
	return sm(cf(e, t));
}
// node_modules/typebox/build/type/engine/object/from_dependent.mjs
function $p(e, t, n) {
	return sm(ar(e, t, n));
}
// node_modules/typebox/build/type/engine/object/from_intersect.mjs
function em(e, t) {
	let n = T(e).filter((e) => !w(t, e)), r = T(t).filter((t) => !w(e, t)), i = T(e).filter((e) => w(t, e)), a = n.reduce((t, n) => ({
		...t,
		[n]: e[n]
	}), {}), o = r.reduce((e, n) => ({
		...e,
		[n]: t[n]
	}), {}), s = i.reduce((n, r) => ({
		...n,
		[r]: Vn(e[r], t[r])
	}), {});
	return E(E(a, o), s);
}
function tm(e) {
	return e.reduce((e, t) => em(e, sm(t)), {});
}
// node_modules/typebox/build/type/engine/object/from_object.mjs
function nm(e) {
	return e;
}
// node_modules/typebox/build/type/engine/object/from_tuple.mjs
function rm(e) {
	return sm(Pn(An(e)));
}
// node_modules/typebox/build/type/engine/object/from_union.mjs
function im(e, t) {
	return T(e).filter((e) => e in t).reduce((n, r) => ({
		...n,
		[r]: Hn(e[r], t[r])
	}), {});
}
function am(e, t) {
	return C(e, (e, n) => am(n, im(t, sm(e))), () => t);
}
function om(e) {
	return C(e, (e, t) => am(t, sm(e)), () => gt());
}
// node_modules/typebox/build/type/engine/object/from_type.mjs
function sm(e) {
	return $e(e) ? Qp(e.$defs, e.$ref) : ot(e) ? $p(e.if, e.then, e.else) : mt(e) ? tm(e.allOf) : N(e) ? om(e.anyOf) : jn(e) ? rm(e.items) : Je(e) ? nm(e.properties) : {};
}
// node_modules/typebox/build/type/engine/object/collapse.mjs
function cm(e) {
	return j(sm(e));
}
// node_modules/typebox/build/type/engine/helpers/keys.mjs
var lm = /* @__PURE__ */ RegExp("^(?:0|[1-9][0-9]*)$");
function um(e) {
	let t = `${e}`;
	return lm.test(t) ? parseInt(t) : e;
}
// node_modules/typebox/build/type/engine/indexed/from_array.mjs
function dm(e) {
	return M(um(e));
}
function fm(e) {
	return e.map((e) => pm(e));
}
function pm(e) {
	return mt(e) ? pt(fm(e.allOf)) : N(e) ? cn(fm(e.anyOf)) : Yt(e) ? dm(e.const) : e;
}
function mm(e, t) {
	return du(uf({}, pm(t), $t())) ? e : Yt(t) && S(t.const, "length") ? $t() : ze();
}
// node_modules/typebox/build/type/engine/indexable/from_cyclic.mjs
function hm(e, t) {
	return Sm(cf(e, t));
}
// node_modules/typebox/build/type/engine/indexable/from_dependent.mjs
function gm(e, t, n) {
	return Sm(ar(e, t, n));
}
// node_modules/typebox/build/type/engine/indexable/from_enum.mjs
function _m(e) {
	return Sm(or(e));
}
// node_modules/typebox/build/type/engine/indexable/from_intersect.mjs
function vm(e) {
	return Sm(sr(e));
}
// node_modules/typebox/build/type/engine/indexable/from_literal.mjs
function ym(e) {
	return [`${e}`];
}
// node_modules/typebox/build/type/engine/indexable/from_template_literal.mjs
function bm(e) {
	return Sm(cr(e));
}
// node_modules/typebox/build/type/engine/indexable/from_union.mjs
function xm(e) {
	return e.reduce((e, t) => [...e, ...Sm(t)], []);
}
// node_modules/typebox/build/type/engine/indexable/from_type.mjs
function Sm(e) {
	return $e(e) ? hm(e.$defs, e.$ref) : ot(e) ? gm(e.if, e.then, e.else) : ft(e) ? _m(e.enum) : mt(e) ? vm(e.allOf) : Yt(e) ? ym(e.const) : au(e) ? bm(e.pattern) : N(e) ? xm(e.anyOf) : [];
}
// node_modules/typebox/build/type/engine/indexable/to_indexable_keys.mjs
function Cm(e) {
	return Sm(e);
}
// node_modules/typebox/build/type/engine/this/expand_this.mjs
function wm(e, t) {
	return t.map((t) => Tm(e, t));
}
function Tm(e, t) {
	return we(t) ? Ce(Tm(e, t.items)) : De(t) ? Ee(wm(e, t.parameters), Tm(e, t.instanceType)) : Ae(t) ? ke(wm(e, t.parameters), Tm(e, t.returnType)) : jn(t) ? An(wm(e, t.items)) : N(t) ? cn(wm(e, t.anyOf)) : mt(t) ? pt(wm(e, t.allOf)) : Ur(t) ? j(e) : t;
}
function Em(e, t) {
	return Tm(e, t);
}
// node_modules/typebox/build/type/engine/indexed/from_object.mjs
function Dm(e, t) {
	return Em(e, t in e ? e[t] : ze());
}
function Om(e, t) {
	return t.reduce((t, n) => [...t, Dm(e, n)], []);
}
function km(e, t) {
	return lr(Om(e, Cm(t)));
}
var Am = new RegExp(kr);
function jm(e) {
	return e.filter((e) => Am.test(e));
}
function Mm(e) {
	return lr(Om(e, jm(Ke(e))));
}
function Nm(e, t) {
	return en(t) ? Mm(e) : km(e, t);
}
// node_modules/typebox/build/type/engine/indexed/array_indexer.mjs
function Pm(e) {
	return M(um(e));
}
function Fm(e) {
	return e.map((e) => Im(e));
}
function Im(e) {
	return mt(e) ? pt(Fm(e.allOf)) : N(e) ? cn(Fm(e.anyOf)) : Yt(e) ? Pm(e.const) : e;
}
// node_modules/typebox/build/type/engine/indexed/from_tuple.mjs
function Lm(e, t) {
	return e.reduceRight((e, n, r) => du(uf({}, M(r), t)) ? [n, ...e] : e, []);
}
function Rm(e, t) {
	return dr(Lm(e, Im(t)));
}
function zm(e) {
	return dr(e);
}
function Bm(e, t) {
	return Yt(t) && S(t.const, "length") ? M(e.length) : en(t) || Ut(t) ? zm(e) : Rm(e, t);
}
// node_modules/typebox/build/type/engine/indexed/from_type.mjs
function Vm(e, t) {
	return we(e) ? mm(e.items, t) : Je(e) ? Nm(e.properties, t) : jn(e) ? Bm(e.items, t) : ze();
}
// node_modules/typebox/build/type/engine/indexed/instantiate.mjs
function Hm(e) {
	return $e(e) || ot(e) || mt(e) || N(e) ? cm(e) : e;
}
function Um(e, t, n) {
	return Wg([e, t]) ? O(Vm(Hm(e), t), {}, n) : Xp(e, t, n);
}
function Wm(e, t, n, r, i) {
	return Um(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/action/instance_type.mjs
function Gm(e, t = {}) {
	return A("InstanceType", [e], t);
}
function Km(e, t = {}) {
	return Jm(e, t);
}
// node_modules/typebox/build/type/engine/instance_type/instantiate.mjs
function qm(e) {
	return De(e) ? e.instanceType : ze();
}
function Jm(e, t) {
	return Wg([e]) ? O(qm(e), {}, t) : Gm(e, t);
}
function Ym(e, t, n, r = {}) {
	return Jm(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/keyof.mjs
function Xm(e, t = {}) {
	return A("KeyOf", [e], t);
}
function Zm(e, t = {}) {
	return oh(e, t);
}
// node_modules/typebox/build/type/engine/keyof/from_any.mjs
function Qm() {
	return cn([
		$t(),
		on(),
		tn()
	]);
}
// node_modules/typebox/build/type/engine/keyof/from_array.mjs
function $m(e) {
	return $t();
}
// node_modules/typebox/build/type/engine/keyof/from_object.mjs
function eh(e) {
	return e.reduce((e, t) => Kt(t) ? [...e, M(um(t))] : gt(), []);
}
function th(e) {
	return dr(eh(T(e)));
}
// node_modules/typebox/build/type/engine/keyof/from_record.mjs
function nh(e) {
	return Lr(e);
}
// node_modules/typebox/build/type/engine/keyof/from_tuple.mjs
function rh(e) {
	return dr(e.map((e, t) => M(t)));
}
// node_modules/typebox/build/type/engine/keyof/from_type.mjs
function ih(e) {
	return Le(e) ? Qm() : we(e) ? $m(e.items) : Je(e) ? th(e.properties) : zr(e) ? nh(e) : jn(e) ? rh(e.items) : ze();
}
// node_modules/typebox/build/type/engine/keyof/instantiate.mjs
function ah(e) {
	return $e(e) || ot(e) || mt(e) || N(e) ? cm(e) : e;
}
function oh(e, t) {
	return Wg([e]) ? O(ih(ah(e)), {}, t) : Xm(e, t);
}
function sh(e, t, n, r) {
	return oh(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/mapped.mjs
function ch(e, t, n, r, i = {}) {
	return A("Mapped", [
		e,
		t,
		n,
		r
	], i);
}
function lh(e, t, n, r, i = {}) {
	return xh({}, Ug([], []), e, t, n, r, i);
}
// node_modules/typebox/build/type/engine/mapped/mapped_variants.mjs
function uh(e) {
	return mh(cr(e));
}
function dh(e) {
	return e.reduce((e, t) => [...e, ...mh(t)], []);
}
function fh(e) {
	return mh(or(e));
}
function ph(e) {
	return v(e) ? [M(`${e}`)] : [M(e)];
}
function mh(e) {
	return ft(e) ? fh(e.enum) : Yt(e) ? ph(e.const) : au(e) ? uh(e.pattern) : N(e) ? dh(e.anyOf) : [e];
}
function hh(e) {
	return mh(e);
}
// node_modules/typebox/build/type/engine/mapped/mapped_operation.mjs
function gh(e) {
	return au(e) ? cr(e.pattern) : e;
}
function _h(e, t, n, r, i, a) {
	let o = E(e, { [n.name]: r }), s = gh(B(o, t, i)), c = B(o, t, a);
	return qt(s) || Jt(s) ? { [s.const]: c } : {};
}
function vh(e, t, n, r, i, a) {
	return r.reduce((r, o) => [...r, _h(e, t, n, o, i, a)], []);
}
function yh(e) {
	return e.reduce((e, t) => [...e, j(t)], []);
}
function bh(e, t, n, r, i, a) {
	return sr(yh(vh(e, t, n, hh(r), i, a)));
}
// node_modules/typebox/build/type/engine/mapped/instantiate.mjs
function xh(e, t, n, r, i, a, o) {
	return Wg([r]) ? O(bh(e, t, n, r, i, a), {}, o) : ch(n, r, i, a, o);
}
function Sh(e, t, n, r, i, a, o) {
	return xh(e, t, n, B(e, t, r), i, a, o);
}
// node_modules/typebox/build/type/engine/module/instantiate.mjs
function Ch(e, t, n) {
	let r = E(e, t);
	return T(t).filter((e) => n.includes(e)).reduce((e, n) => ({
		...e,
		[n]: of(r, n, t[n])
	}), {});
}
function wh(e, t, n) {
	let r = E(e, t);
	return T(t).filter((e) => !n.includes(e)).reduce((e, n) => ({
		...e,
		[n]: B(r, Ug([], []), t[n])
	}), {});
}
function Th(e, t, n) {
	let r = Gd(t), i = Ch(e, t, r), a = wh(e, t, r);
	return O({
		...i,
		...a
	}, {}, n);
}
function Eh(e, t, n, r) {
	return Th(e, n, r);
}
// node_modules/typebox/build/type/action/non_nullable.mjs
function Dh(e, t = {}) {
	return A("NonNullable", [e], t);
}
function Oh(e, t = {}) {
	return Ah(e, t);
}
// node_modules/typebox/build/type/engine/non_nullable/instantiate.mjs
function kh(e) {
	return zp(e, cn([Xt(), Wr()]), {});
}
function Ah(e, t) {
	return Wg([e]) ? O(kh(e), {}, t) : Dh(e, t);
}
function jh(e, t, n, r) {
	return Ah(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/omit.mjs
function Mh(e, t, n = {}) {
	return A("Omit", [e, t], n);
}
function Nh(e, t, n = {}) {
	return Lh(e, p(t) ? Yp(t) : t, n);
}
// node_modules/typebox/build/type/engine/indexable/to_indexable.mjs
function Ph(e) {
	let t = cm(e);
	return Je(t) ? t.properties : gt();
}
// node_modules/typebox/build/type/engine/omit/from_type.mjs
function Fh(e, t) {
	return T(e).reduce((n, r) => t.includes(r) ? n : {
		...n,
		[r]: e[r]
	}, {});
}
function Ih(e, t) {
	return j(Fh(Ph(e), Cm(t)));
}
// node_modules/typebox/build/type/engine/omit/instantiate.mjs
function Lh(e, t, n) {
	return Wg([e, t]) ? O(Ih(e, t), {}, n) : Mh(e, t, n);
}
function Rh(e, t, n, r, i) {
	return Lh(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/action/parameters.mjs
function zh(e, t = {}) {
	return A("Parameters", [e], t);
}
function Bh(e, t = {}) {
	return Hh(e, t);
}
// node_modules/typebox/build/type/engine/parameters/instantiate.mjs
function Vh(e) {
	let t = Ae(e) ? e.parameters : [];
	return An(Kg({}, Ug([], []), t));
}
function Hh(e, t) {
	return Wg([e]) ? O(Vh(e), {}, t) : zh(e, t);
}
function Uh(e, t, n, r) {
	return Hh(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/partial.mjs
function Wh(e, t = {}) {
	return A("Partial", [e], t);
}
function Gh(e, t = {}) {
	return Qh(e, t);
}
// node_modules/typebox/build/type/engine/partial/from_cyclic.mjs
function Kh(e, t) {
	let n = Zh(cf(e, t));
	return Qe(E(e, { [t]: n }), t);
}
// node_modules/typebox/build/type/engine/partial/from_dependent.mjs
function qh(e, t, n) {
	return Zh(ar(e, t, n));
}
// node_modules/typebox/build/type/engine/partial/from_intersect.mjs
function Jh(e) {
	return Zh(sr(e));
}
// node_modules/typebox/build/type/engine/partial/from_union.mjs
function Yh(e) {
	return cn(e.map((e) => Zh(e)));
}
// node_modules/typebox/build/type/engine/partial/from_object.mjs
function Xh(e) {
	return j(T(e).reduce((t, n) => ({
		...t,
		[n]: He(e[n])
	}), {}));
}
// node_modules/typebox/build/type/engine/partial/from_type.mjs
function Zh(e) {
	return $e(e) ? Kh(e.$defs, e.$ref) : ot(e) ? qh(e.if, e.then, e.else) : mt(e) ? Jh(e.allOf) : N(e) ? Yh(e.anyOf) : Je(e) ? Xh(e.properties) : j({});
}
// node_modules/typebox/build/type/engine/partial/instantiate.mjs
function Qh(e, t) {
	return Wg([e]) ? O(Zh(e), {}, t) : Wh(e, t);
}
function $h(e, t, n, r) {
	return Qh(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/pick.mjs
function eg(e, t, n = {}) {
	return A("Pick", [e, t], n);
}
function tg(e, t, n = {}) {
	return ig(e, p(t) ? Yp(t) : t, n);
}
// node_modules/typebox/build/type/engine/pick/from_type.mjs
function ng(e, t) {
	return T(e).reduce((n, r) => t.includes(r) ? E(n, { [r]: e[r] }) : n, {});
}
function rg(e, t) {
	return j(ng(Ph(e), Cm(t)));
}
// node_modules/typebox/build/type/engine/pick/instantiate.mjs
function ig(e, t, n) {
	return Wg([e, t]) ? O(rg(e, t), {}, n) : eg(e, t, n);
}
function ag(e, t, n, r, i) {
	return ig(B(e, t, n), B(e, t, r), i);
}
// node_modules/typebox/build/type/action/readonly_object.mjs
function og(e, t = {}) {
	return A("ReadonlyObject", [e], t);
}
function sg(e, t = {}) {
	return _g(e, t);
}
var cg = sg;
// node_modules/typebox/build/type/engine/readonly_object/from_array.mjs
function lg(e) {
	return t_(Ce(e));
}
// node_modules/typebox/build/type/engine/readonly_object/from_cyclic.mjs
function ug(e, t) {
	let n = gg(cf(e, t));
	return Qe(E(e, { [t]: n }), t);
}
// node_modules/typebox/build/type/engine/readonly_object/from_dependent.mjs
function dg(e, t, n) {
	return gg(ar(e, t, n));
}
// node_modules/typebox/build/type/engine/readonly_object/from_intersect.mjs
function fg(e) {
	return gg(sr(e));
}
// node_modules/typebox/build/type/engine/readonly_object/from_object.mjs
function pg(e) {
	return j(T(e).reduce((t, n) => ({
		...t,
		[n]: Dt(e[n])
	}), {}));
}
// node_modules/typebox/build/type/engine/readonly_object/from_tuple.mjs
function mg(e) {
	return t_(An(e));
}
// node_modules/typebox/build/type/engine/readonly_object/from_union.mjs
function hg(e) {
	return cn(e.map((e) => gg(e)));
}
// node_modules/typebox/build/type/engine/readonly_object/from_type.mjs
function gg(e) {
	return we(e) ? lg(e.items) : $e(e) ? ug(e.$defs, e.$ref) : ot(e) ? dg(e.if, e.then, e.else) : mt(e) ? fg(e.allOf) : Je(e) ? pg(e.properties) : jn(e) ? mg(e.items) : N(e) ? hg(e.anyOf) : e;
}
// node_modules/typebox/build/type/engine/readonly_object/instantiate.mjs
function _g(e, t) {
	return Wg([e]) ? O(gg(e), {}, t) : og(e);
}
function vg(e, t, n, r) {
	return _g(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/ref/instantiate.mjs
function yg(e, t, n, r) {
	return t.visited.includes(r) ? n : r in e ? B(e, Ug(t.callstack, [...t.visited, r]), e[r]) : n;
}
// node_modules/typebox/build/type/engine/required/from_cyclic.mjs
function bg(e, t) {
	let n = Dg(cf(e, t));
	return Qe(E(e, { [t]: n }), t);
}
// node_modules/typebox/build/type/engine/required/from_dependent.mjs
function xg(e, t, n) {
	return Dg(ar(e, t, n));
}
// node_modules/typebox/build/type/engine/required/from_intersect.mjs
function Sg(e) {
	return Dg(sr(e));
}
// node_modules/typebox/build/type/engine/required/from_union.mjs
function Cg(e) {
	return cn(e.map((e) => Dg(e)));
}
// node_modules/typebox/build/type/action/_remove_optional.mjs
function wg(e, t = {}) {
	return A("RemoveOptional", [e], t);
}
function Tg(e, t = {}) {
	return In(e, t);
}
// node_modules/typebox/build/type/engine/required/from_object.mjs
function Eg(e) {
	return j(T(e).reduce((t, n) => ({
		...t,
		[n]: Tg(e[n])
	}), {}));
}
// node_modules/typebox/build/type/engine/required/from_type.mjs
function Dg(e) {
	return $e(e) ? bg(e.$defs, e.$ref) : ot(e) ? xg(e.if, e.then, e.else) : mt(e) ? Sg(e.allOf) : N(e) ? Cg(e.anyOf) : Je(e) ? Eg(e.properties) : j({});
}
// node_modules/typebox/build/type/action/required.mjs
function Og(e, t = {}) {
	return A("Required", [e], t);
}
function kg(e, t = {}) {
	return Ag(e, t);
}
// node_modules/typebox/build/type/engine/required/instantiate.mjs
function Ag(e, t) {
	return Wg([e]) ? O(Dg(e), {}, t) : Og(e, t);
}
function jg(e, t, n, r) {
	return Ag(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/return_type.mjs
function Mg(e, t = {}) {
	return A("ReturnType", [e], t);
}
function Ng(e, t = {}) {
	return Fg(e, t);
}
// node_modules/typebox/build/type/engine/return_type/instantiate.mjs
function Pg(e) {
	return Ae(e) ? e.returnType : ze();
}
function Fg(e, t) {
	return Wg([e]) ? O(Pg(e), {}, t) : Mg(e, t);
}
function Ig(e, t, n, r = {}) {
	return Fg(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/with.mjs
function Lg(e, t) {
	return A("With", [e, t], {});
}
function Rg(e, t) {
	return zg(e, t);
}
// node_modules/typebox/build/type/engine/with/instantiate.mjs
function zg(e, t) {
	return Wg([e]) ? O(e, {}, t) : Lg(e, t);
}
function Bg(e, t, n, r) {
	return zg(B(e, t, n), r);
}
// node_modules/typebox/build/type/engine/rest/spread.mjs
function Vg(e) {
	return Vr(e) ? jn(e.items) ? Hg(e.items.items) : it(e.items) || Ne(e.items) ? [e] : [ze()] : [e];
}
function Hg(e) {
	return e.reduce((e, t) => [...e, ...Vg(t)], []);
}
// node_modules/typebox/build/type/engine/instantiate.mjs
function Ug(e, t) {
	return {
		callstack: e,
		visited: t
	};
}
function Wg(e) {
	return C(e, (e, t) => !Ne(e) && Wg(t), () => !0);
}
function Gg(e, t, n) {
	return T(n).reduce((r, i) => ({
		...r,
		[i]: B(e, t, n[i])
	}), {});
}
function Kg(e, t, n) {
	return Hg(qg(e, t, n));
}
function qg(e, t, n) {
	return n.map((n) => B(e, t, n));
}
function Jg(e, t) {
	let n = We(e) ? xe(t, {}) : t, r = kt(e) ? ye(n, {}) : n;
	return Tt(e) ? Qg(r, {}) : r;
}
function Yg(e, t, n, r, i) {
	return S(n, "AddImmutable") ? $g(e, t, r[0], i) : S(n, "RemoveImmutable") ? tp(e, t, r[0], i) : S(n, "AddReadonly") ? be(e, t, r[0], i) : S(n, "RemoveReadonly") ? Bn(e, t, r[0], i) : S(n, "AddOptional") ? Se(e, t, r[0], i) : S(n, "RemoveOptional") ? Ln(e, t, r[0], i) : S(n, "Capitalize") ? Cp(e, t, r[0], i) : S(n, "Conditional") ? jp(e, t, r[0], r[1], r[2], r[3], i) : S(n, "ConstructorParameters") ? Ip(e, t, r[0], i) : S(n, "Evaluate") ? _f(e, t, r[0], i) : S(n, "Exclude") ? Bp(e, t, r[0], r[1], i) : S(n, "Extract") ? qp(e, t, r[0], r[1], i) : S(n, "Index") ? Wm(e, t, r[0], r[1], i) : S(n, "InstanceType") ? Ym(e, t, r[0], i) : S(n, "Interface") ? Fd(e, t, r[0], r[1], i) : S(n, "KeyOf") ? sh(e, t, r[0], i) : S(n, "Lowercase") ? wp(e, t, r[0], i) : S(n, "Mapped") ? Sh(e, t, r[0], r[1], r[2], r[3], i) : S(n, "Module") ? Eh(e, t, r[0], i) : S(n, "NonNullable") ? jh(e, t, r[0], i) : S(n, "Pick") ? ag(e, t, r[0], r[1], i) : S(n, "Parameters") ? Uh(e, t, r[0], i) : S(n, "Partial") ? $h(e, t, r[0], i) : S(n, "Omit") ? Rh(e, t, r[0], r[1], i) : S(n, "ReadonlyObject") ? vg(e, t, r[0], i) : S(n, "Record") ? Or(e, t, r[0], r[1], i) : S(n, "Required") ? jg(e, t, r[0], i) : S(n, "ReturnType") ? Ig(e, t, r[0], i) : S(n, "TemplateLiteral") ? $l(e, t, r[0], i) : S(n, "Uncapitalize") ? Tp(e, t, r[0], i) : S(n, "Uppercase") ? Ep(e, t, r[0], i) : S(n, "With") ? Bg(e, t, r[0], r[1]) : A(n, r, i);
}
function Xg(e, t, n) {
	return Jg(n, Ne(n) ? yg(e, t, n, n.$ref) : we(n) ? Ce(B(e, t, n.items), Te(n)) : Qf(n) ? Yf(e, t, n.target, n.arguments) : De(n) ? Ee(qg(e, t, n.parameters), B(e, t, n.instanceType), Oe(n)) : Ae(n) ? ke(qg(e, t, n.parameters), B(e, t, n.returnType), je(n)) : ot(n) ? at(B(e, t, n.if), B(e, t, n.then), B(e, t, n.else), st(n)) : mt(n) ? pt(qg(e, t, n.allOf), ht(n)) : Je(n) ? j(Gg(e, t, n.properties), Ye(n)) : zr(n) ? Pr(Ir(n), B(e, t, Rr(n))) : Vr(n) ? Br(B(e, t, n.items)) : jn(n) ? An(Kg(e, t, n.items), Mn(n)) : N(n) ? cn(qg(e, t, n.anyOf), ln(n)) : n);
}
function B(e, t, n) {
	return ve(n) ? Yg(e, t, n.action, n.parameters, n.options) : Xg(e, t, n);
}
function Zg(e, t) {
	return B(e, Ug([], []), t);
}
// node_modules/typebox/build/type/engine/immutable/instantiate_add.mjs
function Qg(e, t) {
	return O(e, { "~immutable": !0 }, t);
}
function $g(e, t, n, r) {
	return Qg(B(e, t, n), r);
}
// node_modules/typebox/build/type/action/_add_immutable.mjs
function e_(e, t = {}) {
	return A("AddImmutable", [e], t);
}
function t_(e, t = {}) {
	return Qg(e, t);
}
// node_modules/typebox/build/type/action/_remove_readonly.mjs
function n_(e, t = {}) {
	return A("RemoveReadonly", [e], t);
}
// node_modules/typebox/build/type/action/evaluate.mjs
function r_(e, t = {}) {
	return A("Evaluate", [e], t);
}
function i_(e, t = {}) {
	return gf(e, t);
}
// node_modules/typebox/build/type/action/module.mjs
function a_(e, t = {}) {
	return A("Module", [e], t);
}
function o_(e, t = {}) {
	return Eh({}, Ug([], []), e, t);
}
// node_modules/typebox/build/type/script/script.mjs
function s_(...e) {
	let [t, n, r] = nt(e, {
		2: (e, t) => x(e) ? [
			{},
			e,
			t
		] : [
			e,
			t,
			{}
		],
		3: (e, t, n) => [
			e,
			t,
			n
		],
		1: (e) => [
			{},
			e,
			{}
		]
	}), i = Pl(n);
	return O(p(i) && S(i.length, 2) ? B(t, Ug([], []), i[0]) : ze(), {}, r);
}
// node_modules/typebox/build/index.mjs
var V = /* @__PURE__ */ c({
	Any: () => Ie,
	Array: () => Ce,
	BigInt: () => Ft,
	Boolean: () => Lt,
	Call: () => Zf,
	Capitalize: () => cp,
	Codec: () => bt,
	Conditional: () => Op,
	Constructor: () => Ee,
	ConstructorParameters: () => Np,
	Cyclic: () => Qe,
	Decode: () => xt,
	DecodeBuilder: () => yt,
	Dependent: () => at,
	Encode: () => St,
	EncodeBuilder: () => vt,
	Enum: () => dt,
	Evaluate: () => i_,
	Exclude: () => Rp,
	Extends: () => uf,
	ExtendsResult: () => ou,
	Extract: () => Hp,
	Function: () => ke,
	Generic: () => Pe,
	Identifier: () => zt,
	Immutable: () => wt,
	Index: () => Zp,
	Infer: () => rt,
	InstanceType: () => Km,
	Instantiate: () => Zg,
	Integer: () => Ht,
	Interface: () => Rd,
	Intersect: () => pt,
	IsAny: () => Le,
	IsArray: () => we,
	IsBigInt: () => It,
	IsBoolean: () => Rt,
	IsCall: () => Qf,
	IsCodec: () => Ct,
	IsConstructor: () => De,
	IsCyclic: () => $e,
	IsDependent: () => ot,
	IsEnum: () => ft,
	IsEnumValue: () => ut,
	IsFunction: () => Ae,
	IsGeneric: () => Fe,
	IsIdentifier: () => Bt,
	IsImmutable: () => Tt,
	IsInfer: () => it,
	IsInteger: () => Ut,
	IsIntersect: () => mt,
	IsKind: () => k,
	IsLiteral: () => Yt,
	IsNever: () => Be,
	IsNull: () => Zt,
	IsNumber: () => en,
	IsObject: () => Je,
	IsOptional: () => We,
	IsParameter: () => an,
	IsReadonly: () => kt,
	IsRecord: () => zr,
	IsRef: () => Ne,
	IsRefine: () => Nt,
	IsRest: () => Vr,
	IsSchema: () => _e,
	IsString: () => sn,
	IsSymbol: () => nn,
	IsTemplateLiteral: () => au,
	IsThis: () => Ur,
	IsTuple: () => jn,
	IsUndefined: () => Gr,
	IsUnion: () => N,
	IsUnknown: () => Ze,
	IsUnsafe: () => tt,
	IsVoid: () => qr,
	KeyOf: () => Zm,
	Literal: () => M,
	Lowercase: () => up,
	Mapped: () => lh,
	Module: () => o_,
	Never: () => ze,
	NonNullable: () => Oh,
	Null: () => Xt,
	Number: () => $t,
	Object: () => j,
	Omit: () => Nh,
	Optional: () => Ue,
	Parameter: () => rn,
	Parameters: () => Bh,
	Partial: () => Gh,
	Pick: () => tg,
	Readonly: () => Ot,
	ReadonlyObject: () => sg,
	ReadonlyType: () => cg,
	Record: () => Nr,
	RecordKey: () => Lr,
	RecordPattern: () => Ir,
	RecordValue: () => Rr,
	Ref: () => Me,
	Refine: () => jt,
	Required: () => kg,
	Rest: () => Br,
	ReturnType: () => Ng,
	Script: () => s_,
	String: () => on,
	Symbol: () => tn,
	TemplateLiteral: () => iu,
	This: () => Hr,
	Tuple: () => An,
	Uncapitalize: () => fp,
	Undefined: () => Wr,
	Union: () => cn,
	Unknown: () => Xe,
	Unsafe: () => et,
	Uppercase: () => mp,
	Void: () => Kr,
	With: () => Rg
}), c_ = [
	0,
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], l_ = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
function u_(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function d_(e) {
	let t = l_.exec(e);
	if (!t) return !1;
	let n = +t[1], r = +t[2], i = +t[3];
	return r >= 1 && r <= 12 && i >= 1 && i <= (r === 2 && u_(n) ? 29 : c_[r]);
}
// node_modules/typebox/build/format/time.mjs
var f_ = /^(\d\d):(\d\d):(\d\d)(?:\.\d+)?(?:([Zz])|([+-])(\d\d):(\d\d))?$/;
function p_(e, t = !0) {
	let n = f_.exec(e);
	if (!n || t && !n[4] && !n[5]) return !1;
	let r = +n[1], i = +n[2], a = +n[3];
	if (r > 23 || i > 59 || a > 60) return !1;
	if (n[5]) {
		let e = +n[6], t = +n[7];
		if (e > 23 || t > 59) return !1;
	}
	if (a < 60) return !0;
	let o = n[5] === "-" ? -1 : 1, s = +(n[6] || 0), c = +(n[7] || 0);
	return ((r * 60 + i - o * (s * 60 + c)) % 1440 + 1440) % 1440 == 1439;
}
// node_modules/typebox/build/format/date_time.mjs
var m_ = /^(?:\[!?(?:(?!\.{1,2}[/\]])[A-Za-z._][A-Za-z._0-9+-]{0,13}(?:\/(?!\.{1,2}[/\]])[A-Za-z._][A-Za-z._0-9+-]{0,13})*|[+-](?:[01][0-9]|2[0-3]):[0-5][0-9])\](?:\[!?[a-z_][a-z_0-9-]*=[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\])*|(?:\[!?[a-z_][a-z_0-9-]*=[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\])*)$/;
function h_(e) {
	let t = e.indexOf("["), n = t === -1 ? e : e.slice(0, t);
	if (t !== -1 && !m_.test(e.slice(t))) return !1;
	let r = n.split(/T/i);
	return r.length === 2 && d_(r[0]) && p_(r[1]);
}
// node_modules/typebox/build/format/duration.mjs
var g_ = /^P((\d+Y(\d+M(\d+D)?)?|\d+M(\d+D)?|\d+D)(T(\d+H(\d+M(\d+S)?)?|\d+M(\d+S)?|\d+S))?|T(\d+H(\d+M(\d+S)?)?|\d+M(\d+S)?|\d+S)|\d+W)$/;
function __(e) {
	return g_.test(e);
}
// node_modules/typebox/build/format/email.mjs
var v_ = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[^"\\]|\\[\x20-\x7e])*")@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*|\[(?:IPv6:[a-f0-9:]+|(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})\])$/i;
function y_(e) {
	return v_.test(e);
}
// node_modules/typebox/build/format/idna/pattern/pattern.mjs
var b_ = /^(?!-).*(?<!-)$/, x_ = /^(?!..--)/, S_ = /^[a-zA-Z0-9-]*$/, C_ = /[^\p{ASCII}]/u, w_ = /[0-9]/, T_ = /[\u{0660}-\u{0669}]/u, E_ = /[\u{06f0}-\u{06f9}]/u, D_ = /[\u{002e}\u{002c}\u{003a}\u{002f}]/u, O_ = /[\u{002d}\u{002b}]/u, k_ = /\p{Mn}/u, A_ = /\p{Mc}/u, j_ = /[\p{Mn}\p{Mc}\p{Me}]/u, M_ = /\p{L}/u, N_ = /\p{Nd}/u, P_ = /\p{Script=Greek}/u, F_ = /\p{Script=Hebrew}/u, I_ = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u, L_ = /[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Mandaic}]/u, R_ = /[\u{094d}\u{09cd}\u{0a4d}\u{0acd}\u{0b4d}\u{0bcd}\u{0c4d}\u{0ccd}\u{0d3b}\u{0d3c}\u{0d4d}\u{0dca}\u{1b44}\u{1baa}\u{1bab}\u{a9c0}\u{11046}\u{1107f}\u{110b9}\u{11133}\u{11134}\u{111c0}\u{11235}\u{1134d}\u{11442}\u{114c2}\u{115bf}\u{1163f}\u{116b6}\u{11c3f}\u{11d44}\u{11d45}]/u, z_ = /[\u{0640}\u{07fa}\u{302e}\u{302f}\u{3031}\u{3032}\u{3033}\u{3034}\u{3035}\u{303b}]/u, B_ = /[\u{00b7}\u{0375}\u{05f3}\u{05f4}\u{200c}\u{200d}\u{30fb}]/u, V_ = /[\u{00df}\u{03c2}\u{06fd}\u{06fe}\u{0f0b}\u{3007}]/u, H_ = new RegExp([w_, E_].map((e) => e.source).join("|"), "u"), U_ = new RegExp([
	M_,
	O_,
	D_,
	N_,
	k_,
	A_,
	B_,
	V_
].map((e) => e.source).join("|"), "u");
// node_modules/typebox/build/format/idna/label/ascii.mjs
function W_(e) {
	return b_.test(e) && x_.test(e) && S_.test(e);
}
// node_modules/typebox/build/format/idna/format/puny.mjs
var G_ = 36, K_ = 1, q_ = 26, J_ = 38, Y_ = 700, X_ = 72, Z_ = 128;
function Q_() {
	throw null;
}
function $_(e) {
	return e.toLowerCase().startsWith("xn--");
}
function ev(e, t, n) {
	e = n ? Math.floor(e / Y_) : e >> 1, e += Math.floor(e / t);
	let r = 0;
	for (; e > 455;) e = Math.floor(e / 35), r += G_;
	return r + Math.floor(36 * e / (e + J_));
}
function tv(e) {
	let t = [], n = Z_, r = 0, i = X_, a = e.lastIndexOf("-");
	if (a > 0) for (let n = 0; n < a; n++) {
		let r = e.charCodeAt(n);
		r >= 128 && Q_(), t.push(r);
	}
	let o = a < 0 ? 0 : a + 1;
	for (; o < e.length;) {
		let a = r, s = 1, c = G_;
		for (;;) {
			o >= e.length && Q_();
			let t = e.charCodeAt(o++), n;
			t >= 97 && t <= 122 ? n = t - 97 : t >= 48 && t <= 57 ? n = t - 48 + 26 : Q_(), r += n * s;
			let a = c <= i ? K_ : c >= i + q_ ? q_ : c - i;
			if (n < a) break;
			s *= G_ - a, c += G_;
		}
		let l = t.length + 1;
		i = ev(r - a, l, a === 0), n += Math.floor(r / l), r %= l, t.splice(r, 0, n), r++;
	}
	return String.fromCodePoint(...t);
}
function nv(e) {
	return e < 26 ? String.fromCharCode(e + 97) : String.fromCharCode(e - 26 + 48);
}
var rv = new RegExp(C_.source, "gu");
function iv(e) {
	let t = e.replace(rv, ""), n = t.length, r = n > 0 ? [t, "-"] : [], i = Array.from(e, (e) => e.codePointAt(0)), a = Z_, o = 0, s = X_, c = n;
	for (; c < i.length;) {
		let e = Infinity;
		for (let t of i) t >= a && t < e && (e = t);
		o += (e - a) * (c + 1), a = e;
		for (let e of i) if (e < a && o++, e === a) {
			let e = o;
			for (let t = G_;; t += G_) {
				let n = t <= s ? K_ : t >= s + q_ ? q_ : t - s;
				if (e < n) break;
				let i = n + (e - n) % (G_ - n);
				r.push(nv(i)), e = Math.floor((e - n) / (G_ - n));
			}
			r.push(nv(e)), s = ev(o, c + 1, c === n), o = 0, c++;
		}
		o++, a++;
	}
	return r.join("");
}
// node_modules/typebox/build/format/idna/format/bidi.mjs
var av = /^(?:R|AL|AN|EN|ES|CS|ET|ON|BN|NSM)$/, ov = /^(?:L|EN|ES|CS|ET|ON|BN|NSM)$/, sv = /^(?:R|AL|AN)$/;
function cv(e) {
	if ($_(e)) try {
		return uv(tv(e.slice(4).toLowerCase()));
	} catch {
		return !1;
	}
	return uv(e);
}
function lv(e) {
	let t = String.fromCodePoint(e);
	return H_.test(t) ? "EN" : T_.test(t) ? "AN" : k_.test(t) ? "NSM" : F_.test(t) ? "R" : L_.test(t) ? "AL" : M_.test(t) ? "L" : "ON";
}
function uv(e) {
	for (let t of e) if (sv.test(lv(t.codePointAt(0)))) return !0;
	return !1;
}
function dv(e) {
	let t = !1, n = ov, r = !1, i = !1, a = !0;
	for (let o of e) {
		let e = lv(o.codePointAt(0));
		if (a) {
			if (e !== "L" && e !== "R" && e !== "AL") return !1;
			t = e === "R" || e === "AL", n = t ? av : ov, a = !1;
		}
		if (!n.test(e)) return !1;
		e === "EN" ? r = !0 : e === "AN" && (i = !0);
	}
	return !(t && r && i);
}
// node_modules/typebox/build/format/idna/label/unicode.mjs
function fv(e) {
	return C_.test(e) && iv(e).length + 4 > 63;
}
function pv(e) {
	return e[0] === "-" || e[e.length - 1] === "-" || e.slice(2).join("").startsWith("--");
}
function mv(e) {
	if (fv(e) || uv(e) && !dv(e)) return !1;
	let t = [...e], n = t.map((e) => e.codePointAt(0)), r = n.length;
	if (pv(t) || j_.test(t[0])) return !1;
	let i = !1;
	for (let e = 0; e < r; e++) {
		let r = n[e], a = t[e];
		if (z_.test(a) || !U_.test(a)) return !1;
		I_.test(a) && (i = !0);
		let o = n[e - 1], s = n[e + 1];
		switch (r) {
			case 183:
				if (o !== 108 || s !== 108) return !1;
				break;
			case 885:
				if (!s || !P_.test(t[e + 1])) return !1;
				break;
			case 1523:
			case 1524:
				if (!o || !F_.test(t[e - 1])) return !1;
				break;
			case 8204:
				if (!o || o < 128 && !R_.test(t[e - 1])) return !1;
				break;
			case 8205: if (!o || !R_.test(t[e - 1])) return !1;
		}
	}
	return !(e.includes("・") && !i);
}
// node_modules/typebox/build/format/idna/label/puny.mjs
function hv(e) {
	if (!$_(e)) return !1;
	try {
		let t = e.slice(4).toLowerCase();
		if (t.lastIndexOf("-") === 0) return !1;
		let n = tv(t);
		return C_.test(n) ? mv(n) : !1;
	} catch {
		return !1;
	}
}
// node_modules/typebox/build/format/idna/hostname.mjs
function gv(e) {
	return e.length > 0 && e.length <= 63;
}
function _v(e) {
	return gv(e) && (hv(e) || W_(e));
}
function vv(e) {
	return e.length === 0 || e.length > 253 || e.charCodeAt(e.length - 1) === 46 ? !1 : e.split(".").every((e) => _v(e));
}
// node_modules/typebox/build/format/idna/idn-hostname.mjs
function yv(e) {
	return e.length > 0 && e.length <= 63;
}
function bv(e) {
	return yv(e) && (hv(e) || mv(e));
}
function xv(e) {
	return e.replace(/[\uff01-\uff5e]/g, (e) => String.fromCharCode(e.charCodeAt(0) - 65248)).normalize("NFC").replace(/[\u00ad\u034f\u180b-\u180d\u200b\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu, "").replace(/[\u002E\u3002\uFF0E\uFF61]/g, ".");
}
function Sv(e) {
	if (e.length === 0 || e.includes(" ")) return !1;
	let t = xv(e);
	if (t.length > 253) return !1;
	let n = t.split("."), r = n.some((e) => cv(e));
	return n.every((e) => bv(e) && (!r || dv(e)));
}
// node_modules/typebox/build/format/hostname.mjs
function Cv(e) {
	return vv(e);
}
// node_modules/typebox/build/format/idn_email.mjs
var wv = /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~\u{0080}-\u{10FFFF}-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~\u{0080}-\u{10FFFF}-]+)*|"(?:[^"\\]|\\.)*")@[\p{L}\p{N}](?:[\p{L}\p{N}-]{0,62})(?<!-)(?:\.[\p{L}\p{N}](?:[\p{L}\p{N}-]{0,62})(?<!-))*$/iu;
function Tv(e) {
	return wv.test(e.normalize("NFC"));
}
// node_modules/typebox/build/format/idn_hostname.mjs
function Ev(e) {
	return Sv(e);
}
// node_modules/typebox/build/format/ipv4.mjs
var Dv = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
function Ov(e) {
	return Dv.test(e);
}
// node_modules/typebox/build/format/ipv6.mjs
var kv = /^(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:)?[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)$/i;
function Av(e) {
	return kv.test(e);
}
// node_modules/typebox/build/format/iri_reference.mjs
var jv = /[\x00-\x20\x7f"<>\^`{|}\\]|%(?![0-9a-fA-F]{2})/, Mv = /^(?:[a-z][a-z\d+\-.]*\/\/|(?!(?:[a-z][a-z\d+\-.]*:))[^/?#]*:)/i, Nv = /^(?:[a-z][a-z\d+\-.]*:)?\/\/[^/?#@]*@[^/?#@]*@/i, Pv = /^(?:[a-z][a-z\d+\-.]*:\/\/[^/?#]*\/|\/\/[^/?#]*\/|[a-z][a-z\d+\-.]*:(?!\/\/)|(?![a-z][a-z\d+\-.]*:|\/\/))[^?#]*[\[\]]/i;
function Fv(e) {
	return !jv.test(e) && !Mv.test(e) && !Nv.test(e) && !Pv.test(e) && URL.canParse(e, "http://example.com");
}
// node_modules/typebox/build/format/iri.mjs
var Iv = /^[a-z][a-z\d+\-.]*:/i;
function Lv(e) {
	return Iv.test(e) && Fv(e);
}
// node_modules/typebox/build/format/json_pointer_uri_fragment.mjs
var Rv = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
function zv(e) {
	return Rv.test(e);
}
// node_modules/typebox/build/format/json_pointer.mjs
var Bv = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
function Vv(e) {
	return Bv.test(e);
}
// node_modules/typebox/build/format/regex.mjs
function Hv(e) {
	try {
		return new RegExp(e, "u"), !0;
	} catch {
		return !1;
	}
}
// node_modules/typebox/build/format/relative_json_pointer.mjs
var Uv = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
function Wv(e) {
	return Uv.test(e);
}
// node_modules/typebox/build/format/uri_reference.mjs
var Gv = /^(?:[a-z][a-z0-9+\-.]*:(?:\/\/(?:(?:[-a-z0-9._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:[\da-f]{1,4}:){6}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|::(?:[\da-f]{1,4}:){5}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:[\da-f]{1,4})?::(?:[\da-f]{1,4}:){4}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,1}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){3}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,2}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){2}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,3}[\da-f]{1,4})?::[\da-f]{1,4}:(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,4}[\da-f]{1,4})?::(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,5}[\da-f]{1,4})?::[\da-f]{1,4}|(?:(?:[\da-f]{1,4}:){0,6}[\da-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)|(?:[-a-z0-9._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:\/\/(?:(?:[-a-z0-9._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:[\da-f]{1,4}:){6}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|::(?:[\da-f]{1,4}:){5}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:[\da-f]{1,4})?::(?:[\da-f]{1,4}:){4}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,1}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){3}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,2}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){2}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,3}[\da-f]{1,4})?::[\da-f]{1,4}:(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,4}[\da-f]{1,4})?::(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,5}[\da-f]{1,4})?::[\da-f]{1,4}|(?:(?:[\da-f]{1,4}:){0,6}[\da-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)|(?:[-a-z0-9._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[-a-z0-9._~!$&'()*+,;=@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)(?:\?(?:[-a-z0-9._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[-a-z0-9._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function Kv(e) {
	return Gv.test(e);
}
// node_modules/typebox/build/format/uri_template.mjs
var qv = /^(?:(?:[^\x00-\x20"<>%\\^`{|}\x7f]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?:\.(?:[a-z0-9_]|%[0-9a-f]{2})+)*(?::[1-9]\d{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?:\.(?:[a-z0-9_]|%[0-9a-f]{2})+)*(?::[1-9]\d{0,3}|\*)?)*\})*$/i;
function Jv(e) {
	return qv.test(e);
}
// node_modules/typebox/build/format/uri.mjs
var Yv = /^[a-z][a-z0-9+\-.]*:(?:\/\/(?:(?:[-a-z0-9._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:[\da-f]{1,4}:){6}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|::(?:[\da-f]{1,4}:){5}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:[\da-f]{1,4})?::(?:[\da-f]{1,4}:){4}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,1}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){3}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,2}[\da-f]{1,4})?::(?:[\da-f]{1,4}:){2}(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,3}[\da-f]{1,4})?::[\da-f]{1,4}:(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,4}[\da-f]{1,4})?::(?:[\da-f]{1,4}:[\da-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))|(?:(?:[\da-f]{1,4}:){0,5}[\da-f]{1,4})?::[\da-f]{1,4}|(?:(?:[\da-f]{1,4}:){0,6}[\da-f]{1,4})?::)|v[0-9a-f]+\.[-a-z0-9._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)|(?:[-a-z0-9._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[-a-z0-9._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[-a-z0-9._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[-a-z0-9._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function Xv(e) {
	return Yv.test(e);
}
// node_modules/typebox/build/format/url.mjs
function Zv(e) {
	return URL.canParse(e);
}
// node_modules/typebox/build/format/uuid.mjs
var Qv = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
function $v(e) {
	return Qv.test(e);
}
// node_modules/typebox/build/format/_registry.mjs
var ey = /* @__PURE__ */ new Map();
function ty() {
	ey.clear();
}
function ny() {
	ty(), ey.set("date-time", h_), ey.set("date", d_), ey.set("duration", __), ey.set("email", y_), ey.set("hostname", Cv), ey.set("idn-email", Tv), ey.set("idn-hostname", Ev), ey.set("ipv4", Ov), ey.set("ipv6", Av), ey.set("iri-reference", Fv), ey.set("iri", Lv), ey.set("json-pointer-uri-fragment", zv), ey.set("json-pointer", Vv), ey.set("regex", Hv), ey.set("relative-json-pointer", Wv), ey.set("time", p_), ey.set("uri-reference", Kv), ey.set("uri-template", Jv), ey.set("uri", Xv), ey.set("url", Zv), ey.set("uuid", $v);
}
ny(), BigInt(2 ** 53 - 1), BigInt(-(2 ** 53 - 1)), cn([
	j({
		type: M("insert"),
		path: on(),
		value: Xe()
	}),
	Object({
		type: M("update"),
		path: on(),
		value: Xe()
	}),
	j({
		type: M("delete"),
		path: on()
	})
]);
var ry = V.Unsafe(V.Union([
	"text",
	"number",
	"length",
	"angle",
	"select",
	"segmented",
	"multiSelect",
	"toggle",
	"slider",
	"color",
	"vector2Length",
	"dateTime",
	"file",
	"readOnly",
	"material",
	"image",
	"templateVersion",
	"reference",
	"location",
	"nodeRef",
	"lampPower",
	"materialChoice"
].map((e) => V.Literal(e)))), iy = V.Object({
	editor: V.Optional(ry),
	quantity: V.Optional(V.Union([
		V.Literal("length"),
		V.Literal("angle"),
		V.Literal("luminousFlux"),
		V.Literal("colorTemperature")
	])),
	group: V.Optional(V.String()),
	order: V.Optional(V.Number()),
	hidden: V.Optional(V.Boolean()),
	visibleWhen: V.Optional(V.Object({
		property: V.String(),
		equals: V.Unknown()
	})),
	optionIcons: V.Optional(V.Record(V.String(), V.String())),
	inlineLabel: V.Optional(V.String({
		minLength: 1,
		maxLength: 3
	})),
	derived: V.Optional(V.Boolean()),
	state: V.Optional(V.Boolean()),
	quickPicks: V.Optional(V.Array(V.Number(), { maxItems: 24 })),
	materialChoice: V.Optional(V.Object({
		material: V.String(),
		presets: V.Array(V.Object({
			name: V.String(),
			color: V.Array(V.Integer({
				minimum: 0,
				maximum: 255
			}), {
				minItems: 3,
				maxItems: 3
			}),
			textured: V.Boolean()
		})),
		allowColor: V.Boolean(),
		allowTexture: V.Boolean()
	})),
	options: V.Optional(V.String()),
	groups: V.Optional(V.Array(V.Object({
		id: V.String(),
		title: V.String()
	}))),
	title: V.Optional(V.String()),
	submitLabel: V.Optional(V.String()),
	cancelLabel: V.Optional(V.String()),
	description: V.Optional(V.String()),
	size: V.Optional(V.Union([
		V.Literal("sm"),
		V.Literal("md"),
		V.Literal("lg")
	])),
	accept: V.Optional(V.Array(V.String())),
	maxBytes: V.Optional(V.Number()),
	placeholder: V.Optional(V.String()),
	unitSuffix: V.Optional(V.String()),
	step: V.Optional(V.Number()),
	inverted: V.Optional(V.Boolean()),
	invertedTitle: V.Optional(V.String()),
	searchable: V.Optional(V.Boolean()),
	referenceKind: V.Optional(V.String()),
	multiple: V.Optional(V.Boolean())
}), H = (e) => ({ "x-homeplan": e }), ay = "^[a-z]+_[a-z0-9]{6,}$", oy = V.String({
	pattern: ay,
	readOnly: !0,
	...H({ hidden: !0 })
}), U = (e = {}) => V.Number({
	...e.title === void 0 ? {} : { title: e.title },
	...e.description === void 0 ? {} : { description: e.description },
	...e.minimum === void 0 ? {} : { minimum: e.minimum },
	...e.maximum === void 0 ? {} : { maximum: e.maximum },
	...e.exclusiveMinimum === void 0 ? {} : { exclusiveMinimum: e.exclusiveMinimum },
	...e.default === void 0 ? {} : { default: e.default },
	...e.readOnly === !0 ? { readOnly: !0 } : {},
	...H({
		editor: "length",
		quantity: "length",
		...e.inlineLabel === void 0 ? {} : { inlineLabel: e.inlineLabel },
		...e.group === void 0 ? {} : { group: e.group },
		...e.order === void 0 ? {} : { order: e.order },
		...e.hidden === !0 ? { hidden: !0 } : {},
		...e.quickPicks === void 0 ? {} : { quickPicks: [...e.quickPicks] },
		...e.visibleWhen === void 0 ? {} : { visibleWhen: e.visibleWhen }
	})
}), sy = (e = {}) => V.Number({
	...e.title === void 0 ? {} : { title: e.title },
	...e.minimum === void 0 ? {} : { minimum: e.minimum },
	...e.maximum === void 0 ? {} : { maximum: e.maximum },
	...e.default === void 0 ? {} : { default: e.default },
	...H({
		editor: "angle",
		quantity: "angle",
		...e.group === void 0 ? {} : { group: e.group },
		...e.order === void 0 ? {} : { order: e.order },
		...e.hidden === !0 ? { hidden: !0 } : {}
	})
}), cy = (e = {}) => V.Object({
	x: V.Number(),
	y: V.Number()
}, {
	additionalProperties: !1,
	...e.title === void 0 ? {} : { title: e.title },
	...H({
		editor: "vector2Length",
		quantity: "length",
		...e.group === void 0 ? {} : { group: e.group },
		...e.order === void 0 ? {} : { order: e.order },
		...e.hidden === !0 ? { hidden: !0 } : {}
	})
}), ly = (e = {}) => V.Array(V.Integer({
	minimum: 0,
	maximum: 255
}), {
	minItems: 3,
	maxItems: 3,
	...e.title === void 0 ? {} : { title: e.title },
	...H({
		editor: "color",
		...e.group === void 0 ? {} : { group: e.group },
		...e.order === void 0 ? {} : { order: e.order },
		...e.visibleWhen === void 0 ? {} : { visibleWhen: e.visibleWhen }
	})
}), uy = (e, t = {}) => V.Unsafe(V.Union(e.map(([e, t]) => V.Literal(e, { title: t })), {
	...t.title === void 0 ? {} : { title: t.title },
	...t.default === void 0 ? {} : { default: t.default },
	...t.readOnly === !0 ? { readOnly: !0 } : {},
	...H({
		editor: t.readOnly === !0 ? "readOnly" : t.editor ?? (e.length <= 3 && t.searchable !== !0 ? "segmented" : "select"),
		...t.icons === void 0 ? {} : { optionIcons: { ...t.icons } },
		...t.group === void 0 ? {} : { group: t.group },
		...t.order === void 0 ? {} : { order: t.order },
		...t.hidden === !0 ? { hidden: !0 } : {},
		...t.visibleWhen === void 0 ? {} : { visibleWhen: t.visibleWhen },
		...t.searchable === !0 ? { searchable: !0 } : {}
	})
})), dy = (e = {}) => V.String({
	title: "Name",
	minLength: 1,
	maxLength: e.maxLength ?? 120,
	...e.default === void 0 ? {} : { default: e.default },
	...H({
		editor: "text",
		group: e.group ?? "general",
		order: e.order ?? 0
	})
}), fy = V.Optional(V.Boolean({
	title: "Hidden",
	default: !1,
	...H({
		editor: "toggle",
		group: "general",
		order: 90
	})
})), py = V.Object({ imageId: V.String({ pattern: ay }) }, { additionalProperties: !1 }), my = V.Object({
	tileSizeMm: cy({
		title: "Tile size",
		order: 5
	}),
	rotationDeg: sy({
		title: "Texture rotation",
		order: 6
	}),
	offsetMm: cy({
		title: "Texture offset",
		order: 7
	})
}, { additionalProperties: !1 }), hy = (e = {}) => V.Object({
	pbrMetallicRoughness: V.Object({
		baseColorTexture: V.Optional(py),
		baseColorFactor: V.Array(V.Number({
			minimum: 0,
			maximum: 1
		}), {
			minItems: 4,
			maxItems: 4
		}),
		roughnessFactor: V.Number({
			minimum: 0,
			maximum: 1
		}),
		metallicFactor: V.Number({
			minimum: 0,
			maximum: 1
		})
	}, { additionalProperties: !1 }),
	extras: V.Optional(V.Object({ homeplan: my }, { additionalProperties: !1 }))
}, {
	additionalProperties: !1,
	...e.title === void 0 ? {} : { title: e.title },
	...H({
		editor: "material",
		...e.group === void 0 ? {} : { group: e.group },
		...e.order === void 0 ? {} : { order: e.order },
		...e.visibleWhen === void 0 ? {} : { visibleWhen: e.visibleWhen }
	})
});
hy();
var gy = V.Object({
	x: V.Boolean({
		title: "Left/right",
		...H({
			editor: "toggle",
			order: 1
		})
	}),
	z: V.Boolean({
		title: "Front/back",
		...H({
			editor: "toggle",
			order: 2
		})
	})
}, {
	additionalProperties: !1,
	title: "Flip",
	...H({
		group: "template",
		order: 20
	})
}), _y = V.Object({
	templateId: V.String({ minLength: 1 }),
	templateVersion: V.Integer({ minimum: 1 })
}, { additionalProperties: !1 }), vy = V.Record(V.String({ pattern: "^[A-Za-z][A-Za-z0-9]*$" }), V.Union([
	V.Number(),
	V.Boolean(),
	V.String()
]), {
	title: "Parameters",
	...H({
		group: "template",
		order: 10
	})
}), yy = V.Object({ preset: V.String({
	minLength: 1,
	maxLength: 120
}) }, { additionalProperties: !1 }), by = V.Union([hy(), yy]), xy = V.Record(V.String({ minLength: 1 }), by, {
	title: "Materials",
	...H({
		group: "appearance",
		order: 30
	})
}), Sy = V.String({ pattern: ay }), Cy = V.String({ pattern: "^[0-9a-f]{40}$" }), W = V.Integer({ minimum: 0 }), wy = V.String({ format: "date-time" }), Ty = V.String({
	minLength: 1,
	maxLength: 120
});
V.Object({ houseId: Sy });
var Ey = V.Union([
	V.Literal("validation"),
	V.Literal("badRequest"),
	V.Literal("notFound"),
	V.Literal("staleRevision"),
	V.Literal("referenced"),
	V.Literal("nameTaken"),
	V.Literal("tooLarge"),
	V.Literal("unsupportedMedia"),
	V.Literal("unsupportedVersion"),
	V.Literal("invalidDocument"),
	V.Literal("internal"),
	V.Literal("unavailable"),
	V.Literal("sourceRevisionChanged")
]);
V.Object({
	pointer: V.String(),
	message: V.String()
}, { additionalProperties: !1 }), V.Object({ error: V.Object({
	code: Ey,
	message: V.String(),
	details: V.Optional(V.Record(V.String(), V.Unknown()))
}, { additionalProperties: !1 }) }, { additionalProperties: !1 });
// shared/domain/schemas/homeAssistant.ts
var Dy = V.Object({ action: V.String({ minLength: 1 }) }, { additionalProperties: !0 }), Oy = V.String({ minLength: 1 }), ky = V.Union([V.String(), V.Array(V.String(), { minItems: 1 })]), Ay = V.Object({
	condition: V.Literal("state"),
	entity: Oy,
	attribute: V.Optional(V.String({ minLength: 1 })),
	state: ky
}, { additionalProperties: !1 }), jy = V.Object({
	condition: V.Literal("state"),
	entity: Oy,
	attribute: V.Optional(V.String({ minLength: 1 })),
	state_not: ky
}, { additionalProperties: !1 }), My = V.Object({
	condition: V.Literal("numeric_state"),
	entity: Oy,
	attribute: V.Optional(V.String({ minLength: 1 })),
	above: V.Optional(V.Number()),
	below: V.Optional(V.Number())
}, { additionalProperties: !1 }), Ny = V.Union([
	Ay,
	jy,
	My
]), Py = (e) => V.Union([V.Object({
	condition: V.Literal("and"),
	conditions: V.Array(e)
}, { additionalProperties: !1 }), V.Object({
	condition: V.Literal("or"),
	conditions: V.Array(e)
}, { additionalProperties: !1 })]), Fy = V.Union([Ny, Py(Ny)]), Iy = V.Union([Ny, Py(Fy)]), Ly = {
	stateEntityId: V.Optional(V.Union([V.String({ minLength: 1 }), V.Null()])),
	tapAction: V.Optional(Dy),
	holdAction: V.Optional(Dy),
	doubleTapAction: V.Optional(Dy),
	visibleWhen: V.Optional(Iy)
}, Ry = {
	exclusiveMinimum: 0,
	maximum: 2e5
}, zy = {
	minimum: 1500,
	maximum: 9e3,
	step: 50
}, By = V.Object({
	...Ly,
	lumens: V.Optional(V.Number(Ry)),
	kelvin: V.Optional(V.Number({
		minimum: zy.minimum,
		maximum: zy.maximum
	}))
}, { additionalProperties: !1 }), Vy = V.Union([
	V.Boolean(),
	V.Number(),
	V.String({ maxLength: 128 })
]), Hy = V.Object({
	start: V.Number(),
	end: V.Number()
}, { additionalProperties: !1 }), Uy = V.Union([
	V.Object({
		kind: V.Literal("table"),
		cases: V.Array(V.Object({
			state: ky,
			value: Vy
		}, { additionalProperties: !1 }), { maxItems: 16 }),
		otherwise: V.Optional(Vy)
	}, { additionalProperties: !1 }),
	V.Object({
		kind: V.Literal("threshold"),
		at: V.Number(),
		atOrBelow: Vy,
		above: Vy
	}, { additionalProperties: !1 }),
	V.Object({
		kind: V.Literal("linear"),
		from: Hy,
		to: Hy
	}, { additionalProperties: !1 }),
	V.Object({
		kind: V.Literal("band"),
		from: V.Number(),
		to: V.Number(),
		inside: Vy,
		outside: Vy
	}, { additionalProperties: !1 })
]), Wy = {
	entity: V.Optional(Oy),
	attribute: V.Optional(V.String({ minLength: 1 })),
	map: Uy
}, Gy = V.Object(Wy, { additionalProperties: !1 }), Ky = V.Object({
	...Wy,
	fallback: V.Optional(Gy)
}, { additionalProperties: !1 }), qy = V.Object({
	...Ly,
	states: V.Optional(V.Record(V.String({ minLength: 1 }), Ky))
}, { additionalProperties: !1 }), Jy = V.Object({
	x: V.Number(),
	y: V.Number()
}, { additionalProperties: !1 }), Yy = V.Object({
	entityId: Oy,
	when: V.Optional(Iy),
	corners: V.Optional(V.Array(Jy, { maxItems: 8 }))
}, { additionalProperties: !1 }), Xy = V.Object({
	...Ly,
	presence: V.Optional(Yy),
	haAreaId: V.Optional(V.String({ minLength: 1 }))
}, { additionalProperties: !1 }), Zy = V.Object({ presenceWhen: V.Optional(Iy) }, { additionalProperties: !1 }), Qy = V.Object({
	when: Iy,
	kind: V.Optional(V.Union([V.Literal("swirl"), V.Literal("vapour")])),
	color: V.Optional(V.Array(V.Integer({
		minimum: 0,
		maximum: 255
	}), {
		minItems: 3,
		maxItems: 3
	})),
	direction: V.Optional(V.Union([V.Literal("up"), V.Literal("forward")])),
	sizeMm: V.Optional(V.Number({
		minimum: 100,
		maximum: 3e3
	}))
}, { additionalProperties: !1 }), $y = V.Object({
	visibleWhen: V.Optional(Iy),
	variants: V.Optional(V.Array(Qy, { maxItems: 8 }))
}, { additionalProperties: !1 }), eb = (e) => V.Record(V.String({ minLength: 1 }), e), tb = {
	preset: V.Union([
		V.Literal("temperature"),
		V.Literal("humidity"),
		V.Literal("light"),
		V.Literal("presence"),
		V.Literal("state"),
		V.Literal("custom")
	]),
	...Ly,
	attribute: V.Optional(V.String({ minLength: 1 })),
	icon: V.Optional(V.String({
		minLength: 1,
		maxLength: 128
	})),
	format: V.Union([
		V.Literal("value"),
		V.Literal("state"),
		V.Literal("icon")
	]),
	style: V.Optional(V.Union([V.Literal("bubble"), V.Literal("bare")]))
}, nb = V.Object({
	id: V.String({ minLength: 1 }),
	...tb
}, { additionalProperties: !1 }), rb = V.Object({
	x: V.Number(),
	y: V.Number(),
	h: V.Number()
}, { additionalProperties: !1 }), ib = V.Union([
	V.Object({
		kind: V.Literal("point"),
		areaId: V.String({ minLength: 1 }),
		positionMm: rb
	}, { additionalProperties: !1 }),
	V.Object({
		kind: V.Literal("object"),
		objectId: V.String({ minLength: 1 })
	}, { additionalProperties: !1 }),
	V.Object({
		kind: V.Literal("light"),
		lightId: V.String({ minLength: 1 })
	}, { additionalProperties: !1 })
]), ab = V.Object({
	...tb,
	anchor: ib
}, { additionalProperties: !1 }), ob = V.Object({
	rooms: V.Record(V.String({ minLength: 1 }), V.Array(nb, { maxItems: 12 })),
	placed: eb(ab)
}, { additionalProperties: !1 }), sb = V.Object({
	lights: eb(By),
	objects: eb(qy),
	effects: eb($y),
	areas: eb(Xy),
	bubbles: ob,
	floors: V.Optional(eb(Zy))
}, { additionalProperties: !1 }), cb = V.Object({
	lights: V.Optional(eb(By)),
	objects: V.Optional(eb(qy)),
	effects: V.Optional(eb($y)),
	areas: V.Optional(eb(Xy)),
	bubbles: V.Optional(ob),
	floors: V.Optional(eb(Zy))
}, { additionalProperties: !1 }), lb = V.Object({
	target: V.Object({
		x: V.Number(),
		y: V.Number(),
		h: V.Number()
	}, { additionalProperties: !1 }),
	distance: V.Number({ exclusiveMinimum: 0 }),
	azimuth: V.Number(),
	polar: V.Number()
}, { additionalProperties: !1 }), ub = V.Union([
	V.Literal("left"),
	V.Literal("right"),
	V.Literal("top"),
	V.Literal("bottom")
]), db = V.Union([
	V.Literal("trackpad"),
	V.Literal("mouse"),
	V.Literal("touch")
]), fb = V.Object({
	urlPath: V.Union([V.String({ minLength: 1 }), V.Null()]),
	areaTabs: V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), V.String({ minLength: 1 }))),
	areaColumns: V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), V.Union([V.Literal(1), V.Literal(2)]))),
	areaTitles: V.Optional(V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), V.Literal(!0)))),
	areaViews: V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), lb)),
	floorTabs: V.Optional(V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), V.String({ minLength: 1 })))),
	floorColumns: V.Optional(V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), V.Union([
		V.Literal(1),
		V.Literal(2),
		V.Literal(3),
		V.Literal(4)
	])))),
	floorPositions: V.Optional(V.Record(V.String({ minLength: 1 }), V.Record(V.String({ minLength: 1 }), ub))),
	navigation: V.Optional(db),
	mainViews: V.Optional(V.Record(V.String({ minLength: 1 }), V.String({ minLength: 1 })))
}, { additionalProperties: !1 }), pb = V.Record(V.String({ minLength: 1 }), sb), mb = V.Record(V.String({ minLength: 1 }), cb), hb = V.Object({
	status: V.Literal("ok"),
	id: Sy,
	name: V.String(),
	floorCount: V.Integer({ minimum: 1 }),
	revision: W,
	modifiedAt: wy
}, { additionalProperties: !1 }), gb = V.Object({
	status: V.Literal("invalid"),
	id: V.String(),
	modifiedAt: wy,
	problem: V.Object({
		code: V.Union([V.Literal("invalidDocument"), V.Literal("unsupportedVersion")]),
		message: V.String()
	}, { additionalProperties: !1 })
}, { additionalProperties: !1 }), _b = V.Union([hb, gb]);
V.Object({ houses: V.Array(_b) }, { additionalProperties: !1 }), V.Object({ name: Ty }, { additionalProperties: !1 }), V.Object({ name: V.Optional(Ty) }, { additionalProperties: !1 }), V.Object({
	name: Ty,
	expectedRevision: W
}, { additionalProperties: !1 }), V.Object({
	revision: W,
	house: hb
}, { additionalProperties: !1 });
var vb = V.Object({
	house: _b,
	trashedAt: wy
}, { additionalProperties: !1 });
V.Object({ houses: V.Array(vb) }, { additionalProperties: !1 });
// shared/domain/schemas/preferences.ts
var yb = V.Object({
	appearance: V.Object({
		theme: uy([
			["auto", "Auto"],
			["light", "Light"],
			["dark", "Dark"]
		], {
			title: "Theme",
			default: "auto",
			order: 1,
			icons: {
				light: "sun",
				dark: "moon",
				auto: "monitor"
			}
		}),
		colorScheme: uy([
			["blue", "Blue"],
			["graphite", "Graphite"],
			["green", "Green"],
			["custom", "Custom"]
		], {
			title: "Colours",
			default: "blue",
			order: 2,
			editor: "segmented"
		}),
		customColors: V.Optional(V.Object({
			neutral: ly({
				title: "Neutral",
				order: 1
			}),
			accent: ly({
				title: "Accent",
				order: 2
			}),
			danger: ly({
				title: "Danger",
				order: 3
			}),
			warning: ly({
				title: "Warning",
				order: 4
			}),
			success: ly({
				title: "Success",
				order: 5
			})
		}, {
			additionalProperties: !1,
			title: "Custom colours",
			...H({
				order: 3,
				visibleWhen: {
					property: "colorScheme",
					equals: "custom"
				}
			})
		}))
	}, {
		additionalProperties: !1,
		title: "Appearance",
		...H({ order: 1 })
	}),
	editor: V.Object({
		showGroundGrid: V.Boolean({
			title: "Ground grid",
			default: !0,
			...H({
				editor: "toggle",
				order: 1
			})
		}),
		navigation: uy([["trackpad", "Trackpad"], ["mouse", "Mouse"]], {
			title: "Navigation",
			default: "trackpad",
			order: 2
		}),
		treeShare: V.Number({
			minimum: .15,
			maximum: .85,
			default: .4,
			...H({ hidden: !0 })
		})
	}, {
		additionalProperties: !1,
		title: "Editor",
		...H({ order: 2 })
	}),
	homeAssistant: V.Object({
		viewer: V.Object({
			houseId: V.Union([V.String({ minLength: 1 }), V.Null()]),
			testEntityId: V.Union([V.String({ minLength: 1 }), V.Null()])
		}, { additionalProperties: !1 }),
		bindings: pb,
		dashboard: fb
	}, {
		additionalProperties: !1,
		title: "Home Assistant",
		...H({ hidden: !0 })
	})
}, {
	additionalProperties: !1,
	title: "Settings",
	...H({ title: "Settings" })
});
V.Object({
	schemaVersion: V.Literal(1),
	revision: V.Integer({ minimum: 0 }),
	preferences: yb
}, {
	$id: "urn:homeplan:schema:preferences-document:1",
	additionalProperties: !1
});
// shared/contracts/homeplanIntegration.ts
var G = { additionalProperties: !1 }, bb = V.String({ pattern: "^[0-9a-f]{64}$" }), xb = V.String({
	minLength: 1,
	maxLength: 512
}), Sb = V.Object({
	path: xb,
	byteSize: V.Integer({
		minimum: 0,
		maximum: 134217728
	}),
	sha256: bb,
	mediaType: V.String({
		minLength: 1,
		maxLength: 100
	})
}, G), Cb = yb.properties.homeAssistant.properties.viewer, wb = V.Object({
	urlPath: fb.properties.urlPath,
	areaTabs: fb.properties.areaTabs,
	areaViews: fb.properties.areaViews,
	areaColumns: V.Optional(fb.properties.areaColumns),
	areaTitles: fb.properties.areaTitles,
	floorTabs: fb.properties.floorTabs,
	floorColumns: fb.properties.floorColumns,
	floorPositions: fb.properties.floorPositions,
	navigation: fb.properties.navigation,
	mainViews: fb.properties.mainViews,
	panelColumns: V.Optional(V.Union([V.Literal(1), V.Literal(2)]))
}, G);
V.Object({
	formatVersion: V.Literal(1),
	snapshotId: bb,
	houseId: Sy,
	houseSchemaVersion: V.Integer({ minimum: 1 }),
	producerVersion: V.String(),
	requiredViewerProtocol: V.Literal(1),
	sourceRevisionId: Cy,
	documentRevision: W,
	savedAt: wy,
	createdAt: wy,
	migration: V.Object({
		preferencesRevision: W,
		viewer: Cb,
		dashboard: wb
	}, G),
	files: V.Array(Sb, { maxItems: 1e4 }),
	resources: V.Object({
		images: V.Array(V.Object({
			id: Sy,
			path: xb
		}, G)),
		templates: V.Array(V.Object({
			id: V.String(),
			version: V.Integer({ minimum: 1 }),
			path: xb,
			dependencies: V.Array(xb)
		}, G))
	}, G)
}, G), V.Object({
	preferencesRevision: W,
	bindings: sb
}, G);
var Tb = V.Object({
	houseId: Sy,
	sourceRevisionId: Cy,
	documentRevision: W,
	savedAt: wy,
	producerVersion: V.String(),
	relation: V.Union([
		V.Null(),
		V.Literal("same"),
		V.Literal("newer"),
		V.Literal("different")
	])
}, G), Eb = V.Object({
	...Tb.properties,
	checkedAt: wy
}, G);
V.Object({
	snapshotId: bb,
	sourceRevisionId: Cy,
	expiresAt: wy
}, G), V.Object({ expectedSourceRevisionId: V.Optional(Cy) }, G);
var Db = V.Object({
	formatVersion: V.Literal(1),
	bundleId: bb,
	version: V.String(),
	createdAt: wy,
	entry: xb,
	loaderProtocol: V.Literal(1),
	apiProtocol: V.Literal(1),
	minimumIntegrationVersion: V.String(),
	files: V.Array(Sb, { maxItems: 5e3 })
}, G), Ob = V.Object({
	builderUrl: V.Union([V.String({ maxLength: 2048 }), V.Null()]),
	devMode: V.Boolean(),
	generation: W,
	origin: V.Union([
		V.Literal("manual"),
		V.Literal("discovered"),
		V.Null()
	])
}, G), kb = V.Object({
	houseId: Sy,
	snapshotId: bb,
	sourceRevisionId: Cy,
	documentRevision: W,
	savedAt: wy,
	importedAt: wy,
	producerVersion: V.String(),
	fileCount: W,
	byteSize: W,
	sourceUrl: V.String(),
	previousSnapshotId: V.Union([bb, V.Null()])
}, G), Ab = V.Object({
	schemaVersion: V.Literal(1),
	revision: W,
	viewer: Cb,
	connection: Ob,
	dashboard: fb,
	bindings: pb,
	imports: V.Object({
		global: V.Boolean(),
		houses: V.Record(Sy, V.Boolean())
	}, G),
	houses: V.Record(Sy, kb),
	houseSources: V.Record(Sy, V.String({ maxLength: 2048 })),
	frontend: V.Object({
		active: V.Union([Db, V.Null()]),
		previous: V.Union([Db, V.Null()])
	}, G)
}, G), jb = V.Object({
	revision: W,
	configuration: Ab
}, G), Mb = V.Object({
	revision: W,
	connection: Ob
}, G), Nb = V.Object({ address: V.Union([V.String({
	minLength: 2,
	maxLength: 64
}), V.Null()]) }, G), Pb = V.Object({
	id: Sy,
	kind: V.Union([V.Literal("houseUpgrade"), V.Literal("panelUpgrade")]),
	snapshotId: V.Union([bb, V.Null()]),
	bundleId: V.Union([bb, V.Null()]),
	houseId: V.Union([Sy, V.Null()]),
	status: V.Union([
		V.Literal("pending"),
		V.Literal("running"),
		V.Literal("completed"),
		V.Literal("failed"),
		V.Literal("canceled")
	]),
	stage: V.Union([
		V.Null(),
		V.Literal("checking"),
		V.Literal("downloading"),
		V.Literal("verifying"),
		V.Literal("activating")
	]),
	filesDone: W,
	filesTotal: W,
	bytesDone: W,
	bytesTotal: W,
	createdAt: wy,
	updatedAt: wy,
	finishedAt: V.Union([wy, V.Null()]),
	error: V.Union([V.Object({
		code: V.String(),
		message: V.String()
	}, G), V.Null()]),
	outcome: V.Union([
		V.Null(),
		V.Literal("imported"),
		V.Literal("upgraded"),
		V.Literal("unchanged")
	])
}, G), Fb = V.Object({ job: Pb }, G), Ib = V.Object({ jobs: V.Array(Pb) }, G), Lb = V.Object({
	shipped: Db,
	active: V.Union([Db, V.Null()]),
	previous: V.Union([Db, V.Null()])
}, G), Rb = V.Object({
	recovery: V.Union([V.String(), V.Null()]),
	revision: W,
	connection: Ob,
	viewer: Cb,
	frontend: Lb,
	protocols: V.Object({
		loader: V.Literal(1),
		api: V.Literal(1)
	}, G)
}, G);
V.Object({
	expectedRevision: W,
	patch: V.Object({
		builderUrl: V.Optional(V.Union([V.String({ maxLength: 2048 }), V.Null()])),
		devMode: V.Optional(V.Boolean())
	}, G)
}, G), V.Object({ expectedRevision: W }, G), V.Object({
	expectedRevision: W,
	generation: W
}, G), V.Object({
	generation: W,
	expectedSourceRevisionId: V.Optional(Cy),
	expectedBundleId: V.Optional(bb)
}, G);
var zb = V.Object({
	generation: W,
	connectedAt: wy,
	houses: V.Array(_b),
	frontendOffer: V.Union([Db, V.Null()])
}, G), Bb = V.Union([jb, Fb]), Vb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
	var t = class {};
	e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var n = class extends t {
		constructor(t) {
			if (super(), !e.IDENTIFIER.test(t)) throw Error("CodeGen: name must be a valid identifier");
			this.str = t;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			return !1;
		}
		get names() {
			return { [this.str]: 1 };
		}
	};
	e.Name = n;
	var r = class extends t {
		constructor(e) {
			super(), this._items = typeof e == "string" ? [e] : e;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			if (this._items.length > 1) return !1;
			let e = this._items[0];
			return e === "" || e === "\"\"";
		}
		get str() {
			return this._str ??= this._items.reduce((e, t) => `${e}${t}`, "");
		}
		get names() {
			return this._names ??= this._items.reduce((e, t) => (t instanceof n && (e[t.str] = (e[t.str] || 0) + 1), e), {});
		}
	};
	e._Code = r, e.nil = new r("");
	function i(e, ...t) {
		let n = [e[0]], i = 0;
		for (; i < t.length;) s(n, t[i]), n.push(e[++i]);
		return new r(n);
	}
	e._ = i;
	var a = new r("+");
	function o(e, ...t) {
		let n = [p(e[0])], i = 0;
		for (; i < t.length;) n.push(a), s(n, t[i]), n.push(a, p(e[++i]));
		return c(n), new r(n);
	}
	e.str = o;
	function s(e, t) {
		t instanceof r ? e.push(...t._items) : t instanceof n ? e.push(t) : e.push(d(t));
	}
	e.addCodeArg = s;
	function c(e) {
		let t = 1;
		for (; t < e.length - 1;) {
			if (e[t] === a) {
				let n = l(e[t - 1], e[t + 1]);
				if (n !== void 0) {
					e.splice(t - 1, 3, n);
					continue;
				}
				e[t++] = "+";
			}
			t++;
		}
	}
	function l(e, t) {
		if (t === "\"\"") return e;
		if (e === "\"\"") return t;
		if (typeof e == "string") return t instanceof n || e[e.length - 1] !== "\"" ? void 0 : typeof t == "string" ? t[0] === "\"" ? e.slice(0, -1) + t.slice(1) : void 0 : `${e.slice(0, -1)}${t}"`;
		if (typeof t == "string" && t[0] === "\"" && !(e instanceof n)) return `"${e}${t.slice(1)}`;
	}
	function u(e, t) {
		return t.emptyStr() ? e : e.emptyStr() ? t : o`${e}${t}`;
	}
	e.strConcat = u;
	function d(e) {
		return typeof e == "number" || typeof e == "boolean" || e === null ? e : p(Array.isArray(e) ? e.join(",") : e);
	}
	function f(e) {
		return new r(p(e));
	}
	e.stringify = f;
	function p(e) {
		return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	}
	e.safeStringify = p;
	function m(t) {
		return typeof t == "string" && e.IDENTIFIER.test(t) ? new r(`.${t}`) : i`[${t}]`;
	}
	e.getProperty = m;
	function h(t) {
		if (typeof t == "string" && e.IDENTIFIER.test(t)) return new r(`${t}`);
		throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
	}
	e.getEsmExportName = h;
	function g(e) {
		return new r(e.toString());
	}
	e.regexpCode = g;
})), Hb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
	var t = Vb(), n = class extends Error {
		constructor(e) {
			super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
		}
	}, r;
	(function(e) {
		e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
	})(r || (e.UsedValueState = r = {})), e.varKinds = {
		const: new t.Name("const"),
		let: new t.Name("let"),
		var: new t.Name("var")
	};
	var i = class {
		constructor({ prefixes: e, parent: t } = {}) {
			this._names = {}, this._prefixes = e, this._parent = t;
		}
		toName(e) {
			return e instanceof t.Name ? e : this.name(e);
		}
		name(e) {
			return new t.Name(this._newName(e));
		}
		_newName(e) {
			let t = this._names[e] || this._nameGroup(e);
			return `${e}${t.index++}`;
		}
		_nameGroup(e) {
			if ((this._parent?._prefixes)?.has(e) || this._prefixes && !this._prefixes.has(e)) throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
			return this._names[e] = {
				prefix: e,
				index: 0
			};
		}
	};
	e.Scope = i;
	var a = class extends t.Name {
		constructor(e, t) {
			super(t), this.prefix = e;
		}
		setValue(e, { property: n, itemIndex: r }) {
			this.value = e, this.scopePath = (0, t._)`.${new t.Name(n)}[${r}]`;
		}
	};
	e.ValueScopeName = a;
	var o = (0, t._)`\n`;
	e.ValueScope = class extends i {
		constructor(e) {
			super(e), this._values = {}, this._scope = e.scope, this.opts = {
				...e,
				_n: e.lines ? o : t.nil
			};
		}
		get() {
			return this._scope;
		}
		name(e) {
			return new a(e, this._newName(e));
		}
		value(e, t) {
			if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
			let n = this.toName(e), { prefix: r } = n, i = t.key ?? t.ref, a = this._values[r];
			if (a) {
				let e = a.get(i);
				if (e) return e;
			} else a = this._values[r] = /* @__PURE__ */ new Map();
			a.set(i, n);
			let o = this._scope[r] || (this._scope[r] = []), s = o.length;
			return o[s] = t.ref, n.setValue(t, {
				property: r,
				itemIndex: s
			}), n;
		}
		getValue(e, t) {
			let n = this._values[e];
			if (n) return n.get(t);
		}
		scopeRefs(e, n = this._values) {
			return this._reduceValues(n, (n) => {
				if (n.scopePath === void 0) throw Error(`CodeGen: name "${n}" has no value`);
				return (0, t._)`${e}${n.scopePath}`;
			});
		}
		scopeCode(e = this._values, t, n) {
			return this._reduceValues(e, (e) => {
				if (e.value === void 0) throw Error(`CodeGen: name "${e}" has no value`);
				return e.value.code;
			}, t, n);
		}
		_reduceValues(i, a, o = {}, s) {
			let c = t.nil;
			for (let l in i) {
				let u = i[l];
				if (!u) continue;
				let d = o[l] = o[l] || /* @__PURE__ */ new Map();
				u.forEach((i) => {
					if (d.has(i)) return;
					d.set(i, r.Started);
					let o = a(i);
					if (o) {
						let n = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
						c = (0, t._)`${c}${n} ${i} = ${o};${this.opts._n}`;
					} else if (o = s?.(i)) c = (0, t._)`${c}${o}${this.opts._n}`;
					else throw new n(i);
					d.set(i, r.Completed);
				});
			}
			return c;
		}
	};
})), K = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
	var t = Vb(), n = Hb(), r = Vb();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return r._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return r.str;
		}
	}), Object.defineProperty(e, "strConcat", {
		enumerable: !0,
		get: function() {
			return r.strConcat;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return r.nil;
		}
	}), Object.defineProperty(e, "getProperty", {
		enumerable: !0,
		get: function() {
			return r.getProperty;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	}), Object.defineProperty(e, "regexpCode", {
		enumerable: !0,
		get: function() {
			return r.regexpCode;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return r.Name;
		}
	});
	var i = Hb();
	Object.defineProperty(e, "Scope", {
		enumerable: !0,
		get: function() {
			return i.Scope;
		}
	}), Object.defineProperty(e, "ValueScope", {
		enumerable: !0,
		get: function() {
			return i.ValueScope;
		}
	}), Object.defineProperty(e, "ValueScopeName", {
		enumerable: !0,
		get: function() {
			return i.ValueScopeName;
		}
	}), Object.defineProperty(e, "varKinds", {
		enumerable: !0,
		get: function() {
			return i.varKinds;
		}
	}), e.operators = {
		GT: new t._Code(">"),
		GTE: new t._Code(">="),
		LT: new t._Code("<"),
		LTE: new t._Code("<="),
		EQ: new t._Code("==="),
		NEQ: new t._Code("!=="),
		NOT: new t._Code("!"),
		OR: new t._Code("||"),
		AND: new t._Code("&&"),
		ADD: new t._Code("+")
	};
	var a = class {
		optimizeNodes() {
			return this;
		}
		optimizeNames(e, t) {
			return this;
		}
	}, o = class extends a {
		constructor(e, t, n) {
			super(), this.varKind = e, this.name = t, this.rhs = n;
		}
		render({ es5: e, _n: t }) {
			let r = e ? n.varKinds.var : this.varKind, i = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
			return `${r} ${this.name}${i};` + t;
		}
		optimizeNames(e, t) {
			if (e[this.name.str]) return this.rhs &&= T(this.rhs, e, t), this;
		}
		get names() {
			return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
		}
	}, s = class extends a {
		constructor(e, t, n) {
			super(), this.lhs = e, this.rhs = t, this.sideEffects = n;
		}
		render({ _n: e }) {
			return `${this.lhs} = ${this.rhs};` + e;
		}
		optimizeNames(e, n) {
			if (!(this.lhs instanceof t.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = T(this.rhs, e, n), this;
		}
		get names() {
			return w(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
		}
	}, c = class extends s {
		constructor(e, t, n, r) {
			super(e, n, r), this.op = t;
		}
		render({ _n: e }) {
			return `${this.lhs} ${this.op}= ${this.rhs};` + e;
		}
	}, l = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `${this.label}:` + e;
		}
	}, u = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `break${this.label ? ` ${this.label}` : ""};` + e;
		}
	}, d = class extends a {
		constructor(e) {
			super(), this.error = e;
		}
		render({ _n: e }) {
			return `throw ${this.error};` + e;
		}
		get names() {
			return this.error.names;
		}
	}, f = class extends a {
		constructor(e) {
			super(), this.code = e;
		}
		render({ _n: e }) {
			return `${this.code};` + e;
		}
		optimizeNodes() {
			return `${this.code}` ? this : void 0;
		}
		optimizeNames(e, t) {
			return this.code = T(this.code, e, t), this;
		}
		get names() {
			return this.code instanceof t._CodeOrName ? this.code.names : {};
		}
	}, p = class extends a {
		constructor(e = []) {
			super(), this.nodes = e;
		}
		render(e) {
			return this.nodes.reduce((t, n) => t + n.render(e), "");
		}
		optimizeNodes() {
			let { nodes: e } = this, t = e.length;
			for (; t--;) {
				let n = e[t].optimizeNodes();
				Array.isArray(n) ? e.splice(t, 1, ...n) : n ? e[t] = n : e.splice(t, 1);
			}
			return e.length > 0 ? this : void 0;
		}
		optimizeNames(e, t) {
			let { nodes: n } = this, r = n.length;
			for (; r--;) {
				let i = n[r];
				i.optimizeNames(e, t) || (ie(e, i.names), n.splice(r, 1));
			}
			return n.length > 0 ? this : void 0;
		}
		get names() {
			return this.nodes.reduce((e, t) => re(e, t.names), {});
		}
	}, m = class extends p {
		render(e) {
			return "{" + e._n + super.render(e) + "}" + e._n;
		}
	}, h = class extends p {}, g = class extends m {};
	g.kind = "else";
	var _ = class e extends m {
		constructor(e, t) {
			super(t), this.condition = e;
		}
		render(e) {
			let t = `if(${this.condition})` + super.render(e);
			return this.else && (t += "else " + this.else.render(e)), t;
		}
		optimizeNodes() {
			super.optimizeNodes();
			let t = this.condition;
			if (t === !0) return this.nodes;
			let n = this.else;
			if (n) {
				let e = n.optimizeNodes();
				n = this.else = Array.isArray(e) ? new g(e) : e;
			}
			if (n) return t === !1 ? n instanceof e ? n : n.nodes : this.nodes.length ? this : new e(ae(t), n instanceof e ? [n] : n.nodes);
			if (t !== !1 && this.nodes.length) return this;
		}
		optimizeNames(e, t) {
			if (this.else = this.else?.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = T(this.condition, e, t), this;
		}
		get names() {
			let e = super.names;
			return w(e, this.condition), this.else && re(e, this.else.names), e;
		}
	};
	_.kind = "if";
	var v = class extends m {};
	v.kind = "for";
	var y = class extends v {
		constructor(e) {
			super(), this.iteration = e;
		}
		render(e) {
			return `for(${this.iteration})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iteration = T(this.iteration, e, t), this;
		}
		get names() {
			return re(super.names, this.iteration.names);
		}
	}, b = class extends v {
		constructor(e, t, n, r) {
			super(), this.varKind = e, this.name = t, this.from = n, this.to = r;
		}
		render(e) {
			let t = e.es5 ? n.varKinds.var : this.varKind, { name: r, from: i, to: a } = this;
			return `for(${t} ${r}=${i}; ${r}<${a}; ${r}++)` + super.render(e);
		}
		get names() {
			return w(w(super.names, this.from), this.to);
		}
	}, x = class extends v {
		constructor(e, t, n, r) {
			super(), this.loop = e, this.varKind = t, this.name = n, this.iterable = r;
		}
		render(e) {
			return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iterable = T(this.iterable, e, t), this;
		}
		get names() {
			return re(super.names, this.iterable.names);
		}
	}, S = class extends m {
		constructor(e, t, n) {
			super(), this.name = e, this.args = t, this.async = n;
		}
		render(e) {
			return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
		}
	};
	S.kind = "func";
	var ee = class extends p {
		render(e) {
			return "return " + super.render(e);
		}
	};
	ee.kind = "return";
	var te = class extends m {
		render(e) {
			let t = "try" + super.render(e);
			return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t;
		}
		optimizeNodes() {
			var e, t;
			return super.optimizeNodes(), (e = this.catch) == null || e.optimizeNodes(), (t = this.finally) == null || t.optimizeNodes(), this;
		}
		optimizeNames(e, t) {
			var n, r;
			return super.optimizeNames(e, t), (n = this.catch) == null || n.optimizeNames(e, t), (r = this.finally) == null || r.optimizeNames(e, t), this;
		}
		get names() {
			let e = super.names;
			return this.catch && re(e, this.catch.names), this.finally && re(e, this.finally.names), e;
		}
	}, ne = class extends m {
		constructor(e) {
			super(), this.error = e;
		}
		render(e) {
			return `catch(${this.error})` + super.render(e);
		}
	};
	ne.kind = "catch";
	var C = class extends m {
		render(e) {
			return "finally" + super.render(e);
		}
	};
	C.kind = "finally", e.CodeGen = class {
		constructor(e, t = {}) {
			this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
				...t,
				_n: t.lines ? "\n" : ""
			}, this._extScope = e, this._scope = new n.Scope({ parent: e }), this._nodes = [new h()];
		}
		toString() {
			return this._root.render(this.opts);
		}
		name(e) {
			return this._scope.name(e);
		}
		scopeName(e) {
			return this._extScope.name(e);
		}
		scopeValue(e, t) {
			let n = this._extScope.value(e, t);
			return (this._values[n.prefix] || (this._values[n.prefix] = /* @__PURE__ */ new Set())).add(n), n;
		}
		getScopeValue(e, t) {
			return this._extScope.getValue(e, t);
		}
		scopeRefs(e) {
			return this._extScope.scopeRefs(e, this._values);
		}
		scopeCode() {
			return this._extScope.scopeCode(this._values);
		}
		_def(e, t, n, r) {
			let i = this._scope.toName(t);
			return n !== void 0 && r && (this._constants[i.str] = n), this._leafNode(new o(e, i, n)), i;
		}
		const(e, t, r) {
			return this._def(n.varKinds.const, e, t, r);
		}
		let(e, t, r) {
			return this._def(n.varKinds.let, e, t, r);
		}
		var(e, t, r) {
			return this._def(n.varKinds.var, e, t, r);
		}
		assign(e, t, n) {
			return this._leafNode(new s(e, t, n));
		}
		add(t, n) {
			return this._leafNode(new c(t, e.operators.ADD, n));
		}
		code(e) {
			return typeof e == "function" ? e() : e !== t.nil && this._leafNode(new f(e)), this;
		}
		object(...e) {
			let n = ["{"];
			for (let [r, i] of e) n.length > 1 && n.push(","), n.push(r), (r !== i || this.opts.es5) && (n.push(":"), (0, t.addCodeArg)(n, i));
			return n.push("}"), new t._Code(n);
		}
		if(e, t, n) {
			if (this._blockNode(new _(e)), t && n) this.code(t).else().code(n).endIf();
			else if (t) this.code(t).endIf();
			else if (n) throw Error("CodeGen: \"else\" body without \"then\" body");
			return this;
		}
		elseIf(e) {
			return this._elseNode(new _(e));
		}
		else() {
			return this._elseNode(new g());
		}
		endIf() {
			return this._endBlockNode(_, g);
		}
		_for(e, t) {
			return this._blockNode(e), t && this.code(t).endFor(), this;
		}
		for(e, t) {
			return this._for(new y(e), t);
		}
		forRange(e, t, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
			let o = this._scope.toName(e);
			return this._for(new b(a, o, t, r), () => i(o));
		}
		forOf(e, r, i, a = n.varKinds.const) {
			let o = this._scope.toName(e);
			if (this.opts.es5) {
				let e = r instanceof t.Name ? r : this.var("_arr", r);
				return this.forRange("_i", 0, (0, t._)`${e}.length`, (n) => {
					this.var(o, (0, t._)`${e}[${n}]`), i(o);
				});
			}
			return this._for(new x("of", a, o, r), () => i(o));
		}
		forIn(e, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
			if (this.opts.ownProperties) return this.forOf(e, (0, t._)`Object.keys(${r})`, i);
			let o = this._scope.toName(e);
			return this._for(new x("in", a, o, r), () => i(o));
		}
		endFor() {
			return this._endBlockNode(v);
		}
		label(e) {
			return this._leafNode(new l(e));
		}
		break(e) {
			return this._leafNode(new u(e));
		}
		return(e) {
			let t = new ee();
			if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error("CodeGen: \"return\" should have one node");
			return this._endBlockNode(ee);
		}
		try(e, t, n) {
			if (!t && !n) throw Error("CodeGen: \"try\" without \"catch\" and \"finally\"");
			let r = new te();
			if (this._blockNode(r), this.code(e), t) {
				let e = this.name("e");
				this._currNode = r.catch = new ne(e), t(e);
			}
			return n && (this._currNode = r.finally = new C(), this.code(n)), this._endBlockNode(ne, C);
		}
		throw(e) {
			return this._leafNode(new d(e));
		}
		block(e, t) {
			return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this;
		}
		endBlock(e) {
			let t = this._blockStarts.pop();
			if (t === void 0) throw Error("CodeGen: not in self-balancing block");
			let n = this._nodes.length - t;
			if (n < 0 || e !== void 0 && n !== e) throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
			return this._nodes.length = t, this;
		}
		func(e, n = t.nil, r, i) {
			return this._blockNode(new S(e, n, r)), i && this.code(i).endFunc(), this;
		}
		endFunc() {
			return this._endBlockNode(S);
		}
		optimize(e = 1) {
			for (; e-- > 0;) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
		}
		_leafNode(e) {
			return this._currNode.nodes.push(e), this;
		}
		_blockNode(e) {
			this._currNode.nodes.push(e), this._nodes.push(e);
		}
		_endBlockNode(e, t) {
			let n = this._currNode;
			if (n instanceof e || t && n instanceof t) return this._nodes.pop(), this;
			throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
		}
		_elseNode(e) {
			let t = this._currNode;
			if (!(t instanceof _)) throw Error("CodeGen: \"else\" without \"if\"");
			return this._currNode = t.else = e, this;
		}
		get _root() {
			return this._nodes[0];
		}
		get _currNode() {
			let e = this._nodes;
			return e[e.length - 1];
		}
		set _currNode(e) {
			let t = this._nodes;
			t[t.length - 1] = e;
		}
	};
	function re(e, t) {
		for (let n in t) e[n] = (e[n] || 0) + (t[n] || 0);
		return e;
	}
	function w(e, n) {
		return n instanceof t._CodeOrName ? re(e, n.names) : e;
	}
	function T(e, n, r) {
		return e instanceof t.Name ? i(e) : a(e) ? new t._Code(e._items.reduce((e, n) => (n instanceof t.Name && (n = i(n)), n instanceof t._Code ? e.push(...n._items) : e.push(n), e), [])) : e;
		function i(e) {
			let t = r[e.str];
			return t === void 0 || n[e.str] !== 1 ? e : (delete n[e.str], t);
		}
		function a(e) {
			return e instanceof t._Code && e._items.some((e) => e instanceof t.Name && n[e.str] === 1 && r[e.str] !== void 0);
		}
	}
	function ie(e, t) {
		for (let n in t) e[n] = (e[n] || 0) - (t[n] || 0);
	}
	function ae(e) {
		return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, t._)`!${E(e)}`;
	}
	e.not = ae;
	var oe = ue(e.operators.AND);
	function se(...e) {
		return e.reduce(oe);
	}
	e.and = se;
	var ce = ue(e.operators.OR);
	function le(...e) {
		return e.reduce(ce);
	}
	e.or = le;
	function ue(e) {
		return (n, r) => n === t.nil ? r : r === t.nil ? n : (0, t._)`${E(n)} ${e} ${E(r)}`;
	}
	function E(e) {
		return e instanceof t.Name ? e : (0, t._)`(${e})`;
	}
})), q = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
	var t = K(), n = Vb();
	function r(e) {
		let t = {};
		for (let n of e) t[n] = !0;
		return t;
	}
	e.toHash = r;
	function i(e, t) {
		return typeof t == "boolean" ? t : Object.keys(t).length === 0 || (a(e, t), !o(t, e.self.RULES.all));
	}
	e.alwaysValidSchema = i;
	function a(e, t = e.schema) {
		let { opts: n, self: r } = e;
		if (!n.strictSchema || typeof t == "boolean") return;
		let i = r.RULES.keywords;
		for (let n in t) i[n] || x(e, `unknown keyword: "${n}"`);
	}
	e.checkUnknownRules = a;
	function o(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t[n]) return !0;
		return !1;
	}
	e.schemaHasRules = o;
	function s(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (n !== "$ref" && t.all[n]) return !0;
		return !1;
	}
	e.schemaHasRulesButRef = s;
	function c({ topSchemaRef: e, schemaPath: n }, r, i, a) {
		if (!a) {
			if (typeof r == "number" || typeof r == "boolean") return r;
			if (typeof r == "string") return (0, t._)`${r}`;
		}
		return (0, t._)`${e}${n}${(0, t.getProperty)(i)}`;
	}
	e.schemaRefOrVal = c;
	function l(e) {
		return f(decodeURIComponent(e));
	}
	e.unescapeFragment = l;
	function u(e) {
		return encodeURIComponent(d(e));
	}
	e.escapeFragment = u;
	function d(e) {
		return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	e.escapeJsonPointer = d;
	function f(e) {
		return e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	e.unescapeJsonPointer = f;
	function p(e, t) {
		if (Array.isArray(e)) for (let n of e) t(n);
		else t(e);
	}
	e.eachItem = p;
	function m({ mergeNames: e, mergeToName: n, mergeValues: r, resultToName: i }) {
		return (a, o, s, c) => {
			let l = s === void 0 ? o : s instanceof t.Name ? (o instanceof t.Name ? e(a, o, s) : n(a, o, s), s) : o instanceof t.Name ? (n(a, s, o), o) : r(o, s);
			return c === t.Name && !(l instanceof t.Name) ? i(a, l) : l;
		};
	}
	e.mergeEvaluated = {
		props: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => {
				e.if((0, t._)`${n} === true`, () => e.assign(r, !0), () => e.assign(r, (0, t._)`${r} || {}`).code((0, t._)`Object.assign(${r}, ${n})`));
			}),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => {
				n === !0 ? e.assign(r, !0) : (e.assign(r, (0, t._)`${r} || {}`), g(e, r, n));
			}),
			mergeValues: (e, t) => e === !0 || {
				...e,
				...t
			},
			resultToName: h
		}),
		items: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => e.assign(r, (0, t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => e.assign(r, n === !0 || (0, t._)`${r} > ${n} ? ${r} : ${n}`)),
			mergeValues: (e, t) => e === !0 || Math.max(e, t),
			resultToName: (e, t) => e.var("items", t)
		})
	};
	function h(e, n) {
		if (n === !0) return e.var("props", !0);
		let r = e.var("props", (0, t._)`{}`);
		return n !== void 0 && g(e, r, n), r;
	}
	e.evaluatedPropsToName = h;
	function g(e, n, r) {
		Object.keys(r).forEach((r) => e.assign((0, t._)`${n}${(0, t.getProperty)(r)}`, !0));
	}
	e.setEvaluated = g;
	var _ = {};
	function v(e, t) {
		return e.scopeValue("func", {
			ref: t,
			code: _[t.code] || (_[t.code] = new n._Code(t.code))
		});
	}
	e.useFunc = v;
	var y;
	(function(e) {
		e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
	})(y || (e.Type = y = {}));
	function b(e, n, r) {
		if (e instanceof t.Name) {
			let i = n === y.Num;
			return r ? i ? (0, t._)`"[" + ${e} + "]"` : (0, t._)`"['" + ${e} + "']"` : i ? (0, t._)`"/" + ${e}` : (0, t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
		}
		return r ? (0, t.getProperty)(e).toString() : "/" + d(e);
	}
	e.getErrorPath = b;
	function x(e, t, n = e.opts.strictSchema) {
		if (n) {
			if (t = `strict mode: ${t}`, n === !0) throw Error(t);
			e.self.logger.warn(t);
		}
	}
	e.checkStrictMode = x;
})), Ub = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K();
	e.default = {
		data: new t.Name("data"),
		valCxt: new t.Name("valCxt"),
		instancePath: new t.Name("instancePath"),
		parentData: new t.Name("parentData"),
		parentDataProperty: new t.Name("parentDataProperty"),
		rootData: new t.Name("rootData"),
		dynamicAnchors: new t.Name("dynamicAnchors"),
		vErrors: new t.Name("vErrors"),
		errors: new t.Name("errors"),
		this: new t.Name("this"),
		self: new t.Name("self"),
		scope: new t.Name("scope"),
		json: new t.Name("json"),
		jsonPos: new t.Name("jsonPos"),
		jsonLen: new t.Name("jsonLen"),
		jsonPart: new t.Name("jsonPart")
	};
})), Wb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
	var t = K(), n = q(), r = Ub();
	e.keywordError = { message: ({ keyword: e }) => (0, t.str)`must pass "${e}" keyword validation` }, e.keyword$DataError = { message: ({ keyword: e, schemaType: n }) => n ? (0, t.str)`"${e}" keyword must be ${n} ($data)` : (0, t.str)`"${e}" keyword is invalid ($data)` };
	function i(n, r = e.keywordError, i, a) {
		let { it: o } = n, { gen: s, compositeRule: u, allErrors: f } = o, p = d(n, r, i);
		a ?? (u || f) ? c(s, p) : l(o, (0, t._)`[${p}]`);
	}
	e.reportError = i;
	function a(t, n = e.keywordError, i) {
		let { it: a } = t, { gen: o, compositeRule: s, allErrors: u } = a;
		c(o, d(t, n, i)), s || u || l(a, r.default.vErrors);
	}
	e.reportExtraError = a;
	function o(e, n) {
		e.assign(r.default.errors, n), e.if((0, t._)`${r.default.vErrors} !== null`, () => e.if(n, () => e.assign((0, t._)`${r.default.vErrors}.length`, n), () => e.assign(r.default.vErrors, null)));
	}
	e.resetErrorsCount = o;
	function s({ gen: e, keyword: n, schemaValue: i, data: a, errsCount: o, it: s }) {
		/* istanbul ignore if */
		if (o === void 0) throw Error("ajv implementation error");
		let c = e.name("err");
		e.forRange("i", o, r.default.errors, (o) => {
			e.const(c, (0, t._)`${r.default.vErrors}[${o}]`), e.if((0, t._)`${c}.instancePath === undefined`, () => e.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(r.default.instancePath, s.errorPath))), e.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${n}`), s.opts.verbose && (e.assign((0, t._)`${c}.schema`, i), e.assign((0, t._)`${c}.data`, a));
		});
	}
	e.extendErrors = s;
	function c(e, n) {
		let i = e.const("err", n);
		e.if((0, t._)`${r.default.vErrors} === null`, () => e.assign(r.default.vErrors, (0, t._)`[${i}]`), (0, t._)`${r.default.vErrors}.push(${i})`), e.code((0, t._)`${r.default.errors}++`);
	}
	function l(e, n) {
		let { gen: r, validateName: i, schemaEnv: a } = e;
		a.$async ? r.throw((0, t._)`new ${e.ValidationError}(${n})`) : (r.assign((0, t._)`${i}.errors`, n), r.return(!1));
	}
	var u = {
		keyword: new t.Name("keyword"),
		schemaPath: new t.Name("schemaPath"),
		params: new t.Name("params"),
		propertyName: new t.Name("propertyName"),
		message: new t.Name("message"),
		schema: new t.Name("schema"),
		parentSchema: new t.Name("parentSchema")
	};
	function d(e, n, r) {
		let { createErrors: i } = e.it;
		return i === !1 ? (0, t._)`{}` : f(e, n, r);
	}
	function f(e, t, n = {}) {
		let { gen: r, it: i } = e, a = [p(i, n), m(e, n)];
		return h(e, t, a), r.object(...a);
	}
	function p({ errorPath: e }, { instancePath: i }) {
		let a = i ? (0, t.str)`${e}${(0, n.getErrorPath)(i, n.Type.Str)}` : e;
		return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, a)];
	}
	function m({ keyword: e, it: { errSchemaPath: r } }, { schemaPath: i, parentSchema: a }) {
		let o = a ? r : (0, t.str)`${r}/${e}`;
		return i && (o = (0, t.str)`${o}${(0, n.getErrorPath)(i, n.Type.Str)}`), [u.schemaPath, o];
	}
	function h(e, { params: n, message: i }, a) {
		let { keyword: o, data: s, schemaValue: c, it: l } = e, { opts: d, propertyName: f, topSchemaRef: p, schemaPath: m } = l;
		a.push([u.keyword, o], [u.params, typeof n == "function" ? n(e) : n || (0, t._)`{}`]), d.messages && a.push([u.message, typeof i == "function" ? i(e) : i]), d.verbose && a.push([u.schema, c], [u.parentSchema, (0, t._)`${p}${m}`], [r.default.data, s]), f && a.push([u.propertyName, f]);
	}
})), Gb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
	var t = Wb(), n = K(), r = Ub(), i = { message: "boolean schema is false" };
	function a(e) {
		let { gen: t, schema: i, validateName: a } = e;
		i === !1 ? s(e, !1) : typeof i == "object" && i.$async === !0 ? t.return(r.default.data) : (t.assign((0, n._)`${a}.errors`, null), t.return(!0));
	}
	e.topBoolOrEmptySchema = a;
	function o(e, t) {
		let { gen: n, schema: r } = e;
		r === !1 ? (n.var(t, !1), s(e)) : n.var(t, !0);
	}
	e.boolOrEmptySchema = o;
	function s(e, n) {
		let { gen: r, data: a } = e, o = {
			gen: r,
			keyword: "false schema",
			data: a,
			schema: !1,
			schemaCode: !1,
			schemaValue: !1,
			params: {},
			it: e
		};
		(0, t.reportError)(o, i, void 0, n);
	}
})), Kb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getRules = e.isJSONType = void 0;
	var t = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null",
		"object",
		"array"
	]);
	function n(e) {
		return typeof e == "string" && t.has(e);
	}
	e.isJSONType = n;
	function r() {
		let e = {
			number: {
				type: "number",
				rules: []
			},
			string: {
				type: "string",
				rules: []
			},
			array: {
				type: "array",
				rules: []
			},
			object: {
				type: "object",
				rules: []
			}
		};
		return {
			types: {
				...e,
				integer: !0,
				boolean: !0,
				null: !0
			},
			rules: [
				{ rules: [] },
				e.number,
				e.string,
				e.array,
				e.object
			],
			post: { rules: [] },
			all: {},
			keywords: {}
		};
	}
	e.getRules = r;
})), qb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0;
	function t({ schema: e, self: t }, r) {
		let i = t.RULES.types[r];
		return i && i !== !0 && n(e, i);
	}
	e.schemaHasRulesForType = t;
	function n(e, t) {
		return t.rules.some((t) => r(e, t));
	}
	e.shouldUseGroup = n;
	function r(e, t) {
		return e[t.keyword] !== void 0 || t.definition.implements?.some((t) => e[t] !== void 0);
	}
	e.shouldUseRule = r;
})), Jb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
	var t = Kb(), n = qb(), r = Wb(), i = K(), a = q(), o;
	(function(e) {
		e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
	})(o || (e.DataType = o = {}));
	function s(e) {
		let t = c(e.type);
		if (t.includes("null")) {
			if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
		} else {
			if (!t.length && e.nullable !== void 0) throw Error("\"nullable\" cannot be used without \"type\"");
			e.nullable === !0 && t.push("null");
		}
		return t;
	}
	e.getSchemaTypes = s;
	function c(e) {
		let n = Array.isArray(e) ? e : e ? [e] : [];
		if (n.every(t.isJSONType)) return n;
		throw Error("type must be JSONType or JSONType[]: " + n.join(","));
	}
	e.getJSONTypes = c;
	function l(e, t) {
		let { gen: r, data: i, opts: a } = e, s = d(t, a.coerceTypes), c = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, n.schemaHasRulesForType)(e, t[0]));
		if (c) {
			let n = h(t, i, a.strictNumbers, o.Wrong);
			r.if(n, () => {
				s.length ? f(e, t, s) : _(e);
			});
		}
		return c;
	}
	e.coerceAndCheckDataType = l;
	var u = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null"
	]);
	function d(e, t) {
		return t ? e.filter((e) => u.has(e) || t === "array" && e === "array") : [];
	}
	function f(e, t, n) {
		let { gen: r, data: a, opts: o } = e, s = r.let("dataType", (0, i._)`typeof ${a}`), c = r.let("coerced", (0, i._)`undefined`);
		o.coerceTypes === "array" && r.if((0, i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, i._)`${a}[0]`).assign(s, (0, i._)`typeof ${a}`).if(h(t, a, o.strictNumbers), () => r.assign(c, a))), r.if((0, i._)`${c} !== undefined`);
		for (let e of n) (u.has(e) || e === "array" && o.coerceTypes === "array") && l(e);
		r.else(), _(e), r.endIf(), r.if((0, i._)`${c} !== undefined`, () => {
			r.assign(a, c), p(e, c);
		});
		function l(e) {
			switch (e) {
				case "string":
					r.elseIf((0, i._)`${s} == "number" || ${s} == "boolean"`).assign(c, (0, i._)`"" + ${a}`).elseIf((0, i._)`${a} === null`).assign(c, (0, i._)`""`);
					return;
				case "number":
					r.elseIf((0, i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c, (0, i._)`+${a}`);
					return;
				case "integer":
					r.elseIf((0, i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c, (0, i._)`+${a}`);
					return;
				case "boolean":
					r.elseIf((0, i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c, !1).elseIf((0, i._)`${a} === "true" || ${a} === 1`).assign(c, !0);
					return;
				case "null":
					r.elseIf((0, i._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(c, null);
					return;
				case "array": r.elseIf((0, i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c, (0, i._)`[${a}]`);
			}
		}
	}
	function p({ gen: e, parentData: t, parentDataProperty: n }, r) {
		e.if((0, i._)`${t} !== undefined`, () => e.assign((0, i._)`${t}[${n}]`, r));
	}
	function m(e, t, n, r = o.Correct) {
		let a = r === o.Correct ? i.operators.EQ : i.operators.NEQ, s;
		switch (e) {
			case "null": return (0, i._)`${t} ${a} null`;
			case "array":
				s = (0, i._)`Array.isArray(${t})`;
				break;
			case "object":
				s = (0, i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
				break;
			case "integer":
				s = c((0, i._)`!(${t} % 1) && !isNaN(${t})`);
				break;
			case "number":
				s = c();
				break;
			default: return (0, i._)`typeof ${t} ${a} ${e}`;
		}
		return r === o.Correct ? s : (0, i.not)(s);
		function c(e = i.nil) {
			return (0, i.and)((0, i._)`typeof ${t} == "number"`, e, n ? (0, i._)`isFinite(${t})` : i.nil);
		}
	}
	e.checkDataType = m;
	function h(e, t, n, r) {
		if (e.length === 1) return m(e[0], t, n, r);
		let o, s = (0, a.toHash)(e);
		if (s.array && s.object) {
			let e = (0, i._)`typeof ${t} != "object"`;
			o = s.null ? e : (0, i._)`!${t} || ${e}`, delete s.null, delete s.array, delete s.object;
		} else o = i.nil;
		s.number && delete s.integer;
		for (let e in s) o = (0, i.and)(o, m(e, t, n, r));
		return o;
	}
	e.checkDataTypes = h;
	var g = {
		message: ({ schema: e }) => `must be ${e}`,
		params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, i._)`{type: ${e}}` : (0, i._)`{type: ${t}}`
	};
	function _(e) {
		let t = v(e);
		(0, r.reportError)(t, g);
	}
	e.reportTypeError = _;
	function v(e) {
		let { gen: t, data: n, schema: r } = e, i = (0, a.schemaRefOrVal)(e, r, "type");
		return {
			gen: t,
			keyword: "type",
			data: n,
			schema: r.type,
			schemaCode: i,
			schemaValue: i,
			parentSchema: r,
			params: {},
			it: e
		};
	}
})), Yb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assignDefaults = void 0;
	var t = K(), n = q();
	function r(e, t) {
		let { properties: n, items: r } = e.schema;
		if (t === "object" && n) for (let t in n) i(e, t, n[t].default);
		else t === "array" && Array.isArray(r) && r.forEach((t, n) => i(e, n, t.default));
	}
	e.assignDefaults = r;
	function i(e, r, i) {
		let { gen: a, compositeRule: o, data: s, opts: c } = e;
		if (i === void 0) return;
		let l = (0, t._)`${s}${(0, t.getProperty)(r)}`;
		if (o) {
			(0, n.checkStrictMode)(e, `default is ignored for: ${l}`);
			return;
		}
		let u = (0, t._)`${l} === undefined`;
		c.useDefaults === "empty" && (u = (0, t._)`${u} || ${l} === null || ${l} === ""`), a.if(u, (0, t._)`${l} = ${(0, t.stringify)(i)}`);
	}
})), Xb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
	var t = K(), n = q(), r = Ub(), i = q();
	function a(e, n) {
		let { gen: r, data: i, it: a } = e;
		r.if(d(r, i, n, a.opts.ownProperties), () => {
			e.setParams({ missingProperty: (0, t._)`${n}` }, !0), e.error();
		});
	}
	e.checkReportMissingProp = a;
	function o({ gen: e, data: n, it: { opts: r } }, i, a) {
		return (0, t.or)(...i.map((i) => (0, t.and)(d(e, n, i, r.ownProperties), (0, t._)`${a} = ${i}`)));
	}
	e.checkMissingProp = o;
	function s(e, t) {
		e.setParams({ missingProperty: t }, !0), e.error();
	}
	e.reportMissingProp = s;
	function c(e) {
		return e.scopeValue("func", {
			ref: Object.prototype.hasOwnProperty,
			code: (0, t._)`Object.prototype.hasOwnProperty`
		});
	}
	e.hasPropFunc = c;
	function l(e, n, r) {
		return (0, t._)`${c(e)}.call(${n}, ${r})`;
	}
	e.isOwnProperty = l;
	function u(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} !== undefined`;
		return i ? (0, t._)`${a} && ${l(e, n, r)}` : a;
	}
	e.propertyInData = u;
	function d(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} === undefined`;
		return i ? (0, t.or)(a, (0, t.not)(l(e, n, r))) : a;
	}
	e.noPropertyInData = d;
	function f(e) {
		return e ? Object.keys(e).filter((e) => e !== "__proto__") : [];
	}
	e.allSchemaProperties = f;
	function p(e, t) {
		return f(t).filter((r) => !(0, n.alwaysValidSchema)(e, t[r]));
	}
	e.schemaProperties = p;
	function m({ schemaCode: e, data: n, it: { gen: i, topSchemaRef: a, schemaPath: o, errorPath: s }, it: c }, l, u, d) {
		let f = d ? (0, t._)`${e}, ${n}, ${a}${o}` : n, p = [
			[r.default.instancePath, (0, t.strConcat)(r.default.instancePath, s)],
			[r.default.parentData, c.parentData],
			[r.default.parentDataProperty, c.parentDataProperty],
			[r.default.rootData, r.default.rootData]
		];
		c.opts.dynamicRef && p.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
		let m = (0, t._)`${f}, ${i.object(...p)}`;
		return u === t.nil ? (0, t._)`${l}(${m})` : (0, t._)`${l}.call(${u}, ${m})`;
	}
	e.callValidateCode = m;
	var h = (0, t._)`new RegExp`;
	function g({ gen: e, it: { opts: n } }, r) {
		let a = n.unicodeRegExp ? "u" : "", { regExp: o } = n.code, s = o(r, a);
		return e.scopeValue("pattern", {
			key: s.toString(),
			ref: s,
			code: (0, t._)`${o.code === "new RegExp" ? h : (0, i.useFunc)(e, o)}(${r}, ${a})`
		});
	}
	e.usePattern = g;
	function _(e) {
		let { gen: r, data: i, keyword: a, it: o } = e, s = r.name("valid");
		if (o.allErrors) {
			let e = r.let("valid", !0);
			return c(() => r.assign(e, !1)), e;
		}
		return r.var(s, !0), c(() => r.break()), s;
		function c(o) {
			let c = r.const("len", (0, t._)`${i}.length`);
			r.forRange("i", 0, c, (i) => {
				e.subschema({
					keyword: a,
					dataProp: i,
					dataPropType: n.Type.Num
				}, s), r.if((0, t.not)(s), o);
			});
		}
	}
	e.validateArray = _;
	function v(e) {
		let { gen: r, schema: i, keyword: a, it: o } = e;
		/* istanbul ignore if */
		if (!Array.isArray(i)) throw Error("ajv implementation error");
		if (i.some((e) => (0, n.alwaysValidSchema)(o, e)) && !o.opts.unevaluated) return;
		let s = r.let("valid", !1), c = r.name("_valid");
		r.block(() => i.forEach((n, i) => {
			let o = e.subschema({
				keyword: a,
				schemaProp: i,
				compositeRule: !0
			}, c);
			r.assign(s, (0, t._)`${s} || ${c}`), e.mergeValidEvaluated(o, c) || r.if((0, t.not)(s));
		})), e.result(s, () => e.reset(), () => e.error(!0));
	}
	e.validateUnion = v;
})), Zb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
	var t = K(), n = Ub(), r = Xb(), i = Wb();
	function a(e, n) {
		let { gen: r, keyword: i, schema: a, parentSchema: o, it: s } = e, c = n.macro.call(s.self, a, o, s), l = u(r, i, c);
		s.opts.validateSchema !== !1 && s.self.validateSchema(c, !0);
		let d = r.name("valid");
		e.subschema({
			schema: c,
			schemaPath: t.nil,
			errSchemaPath: `${s.errSchemaPath}/${i}`,
			topSchemaRef: l,
			compositeRule: !0
		}, d), e.pass(d, () => e.error(!0));
	}
	e.macroKeywordCode = a;
	function o(e, i) {
		let { gen: a, keyword: o, schema: d, parentSchema: f, $data: p, it: m } = e;
		l(m, i);
		let h = u(a, o, !p && i.compile ? i.compile.call(m.self, d, f, m) : i.validate), g = a.let("valid");
		e.block$data(g, _), e.ok(i.valid ?? g);
		function _() {
			if (i.errors === !1) b(), i.modifying && s(e), x(() => e.error());
			else {
				let t = i.async ? v() : y();
				i.modifying && s(e), x(() => c(e, t));
			}
		}
		function v() {
			let e = a.let("ruleErrs", null);
			return a.try(() => b((0, t._)`await `), (n) => a.assign(g, !1).if((0, t._)`${n} instanceof ${m.ValidationError}`, () => a.assign(e, (0, t._)`${n}.errors`), () => a.throw(n))), e;
		}
		function y() {
			let e = (0, t._)`${h}.errors`;
			return a.assign(e, null), b(t.nil), e;
		}
		function b(o = i.async ? (0, t._)`await ` : t.nil) {
			let s = m.opts.passContext ? n.default.this : n.default.self, c = !("compile" in i && !p || i.schema === !1);
			a.assign(g, (0, t._)`${o}${(0, r.callValidateCode)(e, h, s, c)}`, i.modifying);
		}
		function x(e) {
			a.if((0, t.not)(i.valid ?? g), e);
		}
	}
	e.funcKeywordCode = o;
	function s(e) {
		let { gen: n, data: r, it: i } = e;
		n.if(i.parentData, () => n.assign(r, (0, t._)`${i.parentData}[${i.parentDataProperty}]`));
	}
	function c(e, r) {
		let { gen: a } = e;
		a.if((0, t._)`Array.isArray(${r})`, () => {
			a.assign(n.default.vErrors, (0, t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors, (0, t._)`${n.default.vErrors}.length`), (0, i.extendErrors)(e);
		}, () => e.error());
	}
	function l({ schemaEnv: e }, t) {
		if (t.async && !e.$async) throw Error("async keyword in sync schema");
	}
	function u(e, n, r) {
		if (r === void 0) throw Error(`keyword "${n}" failed to compile`);
		return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : {
			ref: r,
			code: (0, t.stringify)(r)
		});
	}
	function d(e, t, n = !1) {
		return !t.length || t.some((t) => t === "array" ? Array.isArray(e) : t === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == t || n && e === void 0);
	}
	e.validSchemaType = d;
	function f({ schema: e, opts: t, self: n, errSchemaPath: r }, i, a) {
		/* istanbul ignore if */
		if (Array.isArray(i.keyword) ? !i.keyword.includes(a) : i.keyword !== a) throw Error("ajv implementation error");
		let o = i.dependencies;
		if (o?.some((t) => !Object.prototype.hasOwnProperty.call(e, t))) throw Error(`parent schema must have dependencies of ${a}: ${o.join(",")}`);
		if (i.validateSchema && !i.validateSchema(e[a])) {
			let e = `keyword "${a}" value is invalid at path "${r}": ` + n.errorsText(i.validateSchema.errors);
			if (t.validateSchema === "log") n.logger.error(e);
			else throw Error(e);
		}
	}
	e.validateKeywordUsage = f;
})), Qb = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
	var t = K(), n = q();
	function r(e, { keyword: r, schemaProp: i, schema: a, schemaPath: o, errSchemaPath: s, topSchemaRef: c }) {
		if (r !== void 0 && a !== void 0) throw Error("both \"keyword\" and \"schema\" passed, only one allowed");
		if (r !== void 0) {
			let a = e.schema[r];
			return i === void 0 ? {
				schema: a,
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}`
			} : {
				schema: a[i],
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}${(0, t.getProperty)(i)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}/${(0, n.escapeFragment)(i)}`
			};
		}
		if (a !== void 0) {
			if (o === void 0 || s === void 0 || c === void 0) throw Error("\"schemaPath\", \"errSchemaPath\" and \"topSchemaRef\" are required with \"schema\"");
			return {
				schema: a,
				schemaPath: o,
				topSchemaRef: c,
				errSchemaPath: s
			};
		}
		throw Error("either \"keyword\" or \"schema\" must be passed");
	}
	e.getSubschema = r;
	function i(e, r, { dataProp: i, dataPropType: a, data: o, dataTypes: s, propertyName: c }) {
		if (o !== void 0 && i !== void 0) throw Error("both \"data\" and \"dataProp\" passed, only one allowed");
		let { gen: l } = r;
		if (i !== void 0) {
			let { errorPath: o, dataPathArr: s, opts: c } = r;
			u(l.let("data", (0, t._)`${r.data}${(0, t.getProperty)(i)}`, !0)), e.errorPath = (0, t.str)`${o}${(0, n.getErrorPath)(i, a, c.jsPropertySyntax)}`, e.parentDataProperty = (0, t._)`${i}`, e.dataPathArr = [...s, e.parentDataProperty];
		}
		o !== void 0 && (u(o instanceof t.Name ? o : l.let("data", o, !0)), c !== void 0 && (e.propertyName = c)), s && (e.dataTypes = s);
		function u(t) {
			e.data = t, e.dataLevel = r.dataLevel + 1, e.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), e.parentData = r.data, e.dataNames = [...r.dataNames, t];
		}
	}
	e.extendSubschemaData = i;
	function a(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: i, allErrors: a }) {
		r !== void 0 && (e.compositeRule = r), i !== void 0 && (e.createErrors = i), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = n;
	}
	e.extendSubschemaMode = a;
})), $b = /* @__PURE__ */ s(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})), ex = /* @__PURE__ */ s(((e, t) => {
	var n = t.exports = function(e, t, n) {
		typeof t == "function" && (n = t, t = {}), n = t.cb || n;
		var i = typeof n == "function" ? n : n.pre || function() {}, a = n.post || function() {};
		r(t, i, a, e, "", e);
	};
	n.keywords = {
		additionalItems: !0,
		items: !0,
		contains: !0,
		additionalProperties: !0,
		propertyNames: !0,
		not: !0,
		if: !0,
		then: !0,
		else: !0
	}, n.arrayKeywords = {
		items: !0,
		allOf: !0,
		anyOf: !0,
		oneOf: !0
	}, n.propsKeywords = {
		$defs: !0,
		definitions: !0,
		properties: !0,
		patternProperties: !0,
		dependencies: !0
	}, n.skipKeywords = {
		default: !0,
		enum: !0,
		const: !0,
		required: !0,
		maximum: !0,
		minimum: !0,
		exclusiveMaximum: !0,
		exclusiveMinimum: !0,
		multipleOf: !0,
		maxLength: !0,
		minLength: !0,
		pattern: !0,
		format: !0,
		maxItems: !0,
		minItems: !0,
		uniqueItems: !0,
		maxProperties: !0,
		minProperties: !0
	};
	function r(e, t, a, o, s, c, l, u, d, f) {
		if (o && typeof o == "object" && !Array.isArray(o)) {
			for (var p in t(o, s, c, l, u, d, f), o) {
				var m = o[p];
				if (Array.isArray(m)) {
					if (p in n.arrayKeywords) for (var h = 0; h < m.length; h++) r(e, t, a, m[h], s + "/" + p + "/" + h, c, s, p, o, h);
				} else if (p in n.propsKeywords) {
					if (m && typeof m == "object") for (var g in m) r(e, t, a, m[g], s + "/" + p + "/" + i(g), c, s, p, o, g);
				} else (p in n.keywords || e.allKeys && !(p in n.skipKeywords)) && r(e, t, a, m, s + "/" + p, c, s, p, o);
			}
			a(o, s, c, l, u, d, f);
		}
	}
	function i(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
})), tx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
	var t = q(), n = $b(), r = ex(), i = /* @__PURE__ */ new Set([
		"type",
		"format",
		"pattern",
		"maxLength",
		"minLength",
		"maxProperties",
		"minProperties",
		"maxItems",
		"minItems",
		"maximum",
		"minimum",
		"uniqueItems",
		"multipleOf",
		"required",
		"enum",
		"const"
	]);
	function a(e, t = !0) {
		return typeof e == "boolean" ? !0 : t === !0 ? !s(e) : t ? c(e) <= t : !1;
	}
	e.inlineRef = a;
	var o = /* @__PURE__ */ new Set([
		"$ref",
		"$recursiveRef",
		"$recursiveAnchor",
		"$dynamicRef",
		"$dynamicAnchor"
	]);
	function s(e) {
		for (let t in e) {
			if (o.has(t)) return !0;
			let n = e[t];
			if (Array.isArray(n) && n.some(s) || typeof n == "object" && s(n)) return !0;
		}
		return !1;
	}
	function c(e) {
		let n = 0;
		for (let r in e) if (r === "$ref" || (n++, !i.has(r) && (typeof e[r] == "object" && (0, t.eachItem)(e[r], (e) => n += c(e)), n === Infinity))) return Infinity;
		return n;
	}
	function l(e, t = "", n) {
		return n !== !1 && (t = f(t)), u(e, e.parse(t));
	}
	e.getFullPath = l;
	function u(e, t) {
		return e.serialize(t).split("#")[0] + "#";
	}
	e._getFullPath = u;
	var d = /#\/?$/;
	function f(e) {
		return e ? e.replace(d, "") : "";
	}
	e.normalizeId = f;
	function p(e, t, n) {
		return n = f(n), e.resolve(t, n);
	}
	e.resolveUrl = p;
	var m = /^[a-z_][-a-z0-9._]*$/i;
	function h(e, t) {
		if (typeof e == "boolean") return {};
		let { schemaId: i, uriResolver: a } = this.opts, o = f(e[i] || t), s = { "": o }, c = l(a, o, !1), u = {}, d = /* @__PURE__ */ new Set();
		return r(e, { allKeys: !0 }, (e, t, n, r) => {
			if (r === void 0) return;
			let a = c + t, o = s[r];
			typeof e[i] == "string" && (o = l.call(this, e[i])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), s[t] = o;
			function l(t) {
				let n = this.opts.uriResolver.resolve;
				if (t = f(o ? n(o, t) : t), d.has(t)) throw h(t);
				d.add(t);
				let r = this.refs[t];
				return typeof r == "string" && (r = this.refs[r]), typeof r == "object" ? p(e, r.schema, t) : t !== f(a) && (t[0] === "#" ? (p(e, u[t], t), u[t] = e) : this.refs[t] = a), t;
			}
			function g(e) {
				if (typeof e == "string") {
					if (!m.test(e)) throw Error(`invalid anchor "${e}"`);
					l.call(this, `#${e}`);
				}
			}
		}), u;
		function p(e, t, r) {
			if (t !== void 0 && !n(e, t)) throw h(r);
		}
		function h(e) {
			return /* @__PURE__ */ Error(`reference "${e}" resolves to more than one schema`);
		}
	}
	e.getSchemaRefs = h;
})), nx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
	var t = Gb(), n = Jb(), r = qb(), i = Jb(), a = Yb(), o = Zb(), s = Qb(), c = K(), l = Ub(), u = tx(), d = q(), f = Wb();
	function p(e) {
		S(e) && (te(e), x(e)) ? _(e) : m(e, () => (0, t.topBoolOrEmptySchema)(e));
	}
	e.validateFunctionCode = p;
	function m({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: i }, a) {
		i.code.es5 ? e.func(t, (0, c._)`${l.default.data}, ${l.default.valCxt}`, r.$async, () => {
			e.code((0, c._)`"use strict"; ${y(n, i)}`), g(e, i), e.code(a);
		}) : e.func(t, (0, c._)`${l.default.data}, ${h(i)}`, r.$async, () => e.code(y(n, i)).code(a));
	}
	function h(e) {
		return (0, c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef ? (0, c._)`, ${l.default.dynamicAnchors}={}` : c.nil}}={}`;
	}
	function g(e, t) {
		e.if(l.default.valCxt, () => {
			e.var(l.default.instancePath, (0, c._)`${l.default.valCxt}.${l.default.instancePath}`), e.var(l.default.parentData, (0, c._)`${l.default.valCxt}.${l.default.parentData}`), e.var(l.default.parentDataProperty, (0, c._)`${l.default.valCxt}.${l.default.parentDataProperty}`), e.var(l.default.rootData, (0, c._)`${l.default.valCxt}.${l.default.rootData}`), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
		}, () => {
			e.var(l.default.instancePath, (0, c._)`""`), e.var(l.default.parentData, (0, c._)`undefined`), e.var(l.default.parentDataProperty, (0, c._)`undefined`), e.var(l.default.rootData, l.default.data), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`{}`);
		});
	}
	function _(e) {
		let { schema: t, opts: n, gen: r } = e;
		m(e, () => {
			n.$comment && t.$comment && ie(e), re(e), r.let(l.default.vErrors, null), r.let(l.default.errors, 0), n.unevaluated && v(e), ne(e), ae(e);
		});
	}
	function v(e) {
		let { gen: t, validateName: n } = e;
		e.evaluated = t.const("evaluated", (0, c._)`${n}.evaluated`), t.if((0, c._)`${e.evaluated}.dynamicProps`, () => t.assign((0, c._)`${e.evaluated}.props`, (0, c._)`undefined`)), t.if((0, c._)`${e.evaluated}.dynamicItems`, () => t.assign((0, c._)`${e.evaluated}.items`, (0, c._)`undefined`));
	}
	function y(e, t) {
		let n = typeof e == "object" && e[t.schemaId];
		return n && (t.code.source || t.code.process) ? (0, c._)`/*# sourceURL=${n} */` : c.nil;
	}
	function b(e, n) {
		S(e) && (te(e), x(e)) ? ee(e, n) : (0, t.boolOrEmptySchema)(e, n);
	}
	function x({ schema: e, self: t }) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t.RULES.all[n]) return !0;
		return !1;
	}
	function S(e) {
		return typeof e.schema != "boolean";
	}
	function ee(e, t) {
		let { schema: n, gen: r, opts: i } = e;
		i.$comment && n.$comment && ie(e), w(e), T(e);
		let a = r.const("_errs", l.default.errors);
		ne(e, a), r.var(t, (0, c._)`${a} === ${l.default.errors}`);
	}
	function te(e) {
		(0, d.checkUnknownRules)(e), C(e);
	}
	function ne(e, t) {
		if (e.opts.jtd) return se(e, [], !1, t);
		let r = (0, n.getSchemaTypes)(e.schema);
		se(e, r, !(0, n.coerceAndCheckDataType)(e, r), t);
	}
	function C(e) {
		let { schema: t, errSchemaPath: n, opts: r, self: i } = e;
		t.$ref && r.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
	}
	function re(e) {
		let { schema: t, opts: n } = e;
		t.default !== void 0 && n.useDefaults && n.strictSchema && (0, d.checkStrictMode)(e, "default is ignored in the schema root");
	}
	function w(e) {
		let t = e.schema[e.opts.schemaId];
		t && (e.baseId = (0, u.resolveUrl)(e.opts.uriResolver, e.baseId, t));
	}
	function T(e) {
		if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
	}
	function ie({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: i }) {
		let a = n.$comment;
		if (i.$comment === !0) e.code((0, c._)`${l.default.self}.logger.log(${a})`);
		else if (typeof i.$comment == "function") {
			let n = (0, c.str)`${r}/$comment`, i = e.scopeValue("root", { ref: t.root });
			e.code((0, c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`);
		}
	}
	function ae(e) {
		let { gen: t, schemaEnv: n, validateName: r, ValidationError: i, opts: a } = e;
		n.$async ? t.if((0, c._)`${l.default.errors} === 0`, () => t.return(l.default.data), () => t.throw((0, c._)`new ${i}(${l.default.vErrors})`)) : (t.assign((0, c._)`${r}.errors`, l.default.vErrors), a.unevaluated && oe(e), t.return((0, c._)`${l.default.errors} === 0`));
	}
	function oe({ gen: e, evaluated: t, props: n, items: r }) {
		n instanceof c.Name && e.assign((0, c._)`${t}.props`, n), r instanceof c.Name && e.assign((0, c._)`${t}.items`, r);
	}
	function se(e, t, n, a) {
		let { gen: o, schema: s, data: u, allErrors: f, opts: p, self: m } = e, { RULES: h } = m;
		if (s.$ref && (p.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(s, h))) {
			o.block(() => ge(e, "$ref", h.all.$ref.definition));
			return;
		}
		p.jtd || le(e, t), o.block(() => {
			for (let e of h.rules) g(e);
			g(h.post);
		});
		function g(d) {
			(0, r.shouldUseGroup)(s, d) && (d.type ? (o.if((0, i.checkDataType)(d.type, u, p.strictNumbers)), ce(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : ce(e, d), f || o.if((0, c._)`${l.default.errors} === ${a || 0}`));
		}
	}
	function ce(e, t) {
		let { gen: n, schema: i, opts: { useDefaults: o } } = e;
		o && (0, a.assignDefaults)(e, t.type), n.block(() => {
			for (let n of t.rules) (0, r.shouldUseRule)(i, n) && ge(e, n.keyword, n.definition, t.type);
		});
	}
	function le(e, t) {
		!e.schemaEnv.meta && e.opts.strictTypes && (ue(e, t), e.opts.allowUnionTypes || E(e, t), de(e, e.dataTypes));
	}
	function ue(e, t) {
		t.length && (e.dataTypes.length ? (t.forEach((t) => {
			D(e.dataTypes, t) || me(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
		}), pe(e, t)) : e.dataTypes = t);
	}
	function E(e, t) {
		t.length > 1 && !(t.length === 2 && t.includes("null")) && me(e, "use allowUnionTypes to allow union type keyword");
	}
	function de(e, t) {
		let n = e.self.RULES.all;
		for (let i in n) {
			let a = n[i];
			if (typeof a == "object" && (0, r.shouldUseRule)(e.schema, a)) {
				let { type: n } = a.definition;
				n.length && !n.some((e) => fe(t, e)) && me(e, `missing type "${n.join(",")}" for keyword "${i}"`);
			}
		}
	}
	function fe(e, t) {
		return e.includes(t) || t === "number" && e.includes("integer");
	}
	function D(e, t) {
		return e.includes(t) || t === "integer" && e.includes("number");
	}
	function pe(e, t) {
		let n = [];
		for (let r of e.dataTypes) D(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
		e.dataTypes = n;
	}
	function me(e, t) {
		let n = e.schemaEnv.baseId + e.errSchemaPath;
		t += ` at "${n}" (strictTypes)`, (0, d.checkStrictMode)(e, t, e.opts.strictTypes);
	}
	var he = class {
		constructor(e, t, n) {
			if ((0, o.validateKeywordUsage)(e, t, n), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = n, this.data = e.data, this.schema = e.schema[n], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(e, this.schema, n, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", _e(this.$data, e));
			else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
			("code" in t ? t.trackErrors : t.errors !== !1) && (this.errsCount = e.gen.const("_errs", l.default.errors));
		}
		result(e, t, n) {
			this.failResult((0, c.not)(e), t, n);
		}
		failResult(e, t, n) {
			this.gen.if(e), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		pass(e, t) {
			this.failResult((0, c.not)(e), void 0, t);
		}
		fail(e) {
			e === void 0 ? (this.error(), this.allErrors || this.gen.if(!1)) : (this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else());
		}
		fail$data(e) {
			if (!this.$data) return this.fail(e);
			let { schemaCode: t } = this;
			this.fail((0, c._)`${t} !== undefined && (${(0, c.or)(this.invalid$data(), e)})`);
		}
		error(e, t, n) {
			t ? (this.setParams(t), this._error(e, n), this.setParams({})) : this._error(e, n);
		}
		_error(e, t) {
			(e ? f.reportExtraError : f.reportError)(this, this.def.error, t);
		}
		$dataError() {
			(0, f.reportError)(this, this.def.$dataError || f.keyword$DataError);
		}
		reset() {
			if (this.errsCount === void 0) throw Error("add \"trackErrors\" to keyword definition");
			(0, f.resetErrorsCount)(this.gen, this.errsCount);
		}
		ok(e) {
			this.allErrors || this.gen.if(e);
		}
		setParams(e, t) {
			t ? Object.assign(this.params, e) : this.params = e;
		}
		block$data(e, t, n = c.nil) {
			this.gen.block(() => {
				this.check$data(e, n), t();
			});
		}
		check$data(e = c.nil, t = c.nil) {
			if (!this.$data) return;
			let { gen: n, schemaCode: r, schemaType: i, def: a } = this;
			n.if((0, c.or)((0, c._)`${r} === undefined`, t)), e !== c.nil && n.assign(e, !0), (i.length || a.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), e !== c.nil && n.assign(e, !1)), n.else();
		}
		invalid$data() {
			let { gen: e, schemaCode: t, schemaType: n, def: r, it: a } = this;
			return (0, c.or)(o(), s());
			function o() {
				if (n.length) {
					/* istanbul ignore if */
					if (!(t instanceof c.Name)) throw Error("ajv implementation error");
					let e = Array.isArray(n) ? n : [n];
					return (0, c._)`${(0, i.checkDataTypes)(e, t, a.opts.strictNumbers, i.DataType.Wrong)}`;
				}
				return c.nil;
			}
			function s() {
				if (r.validateSchema) {
					let n = e.scopeValue("validate$data", { ref: r.validateSchema });
					return (0, c._)`!${n}(${t})`;
				}
				return c.nil;
			}
		}
		subschema(e, t) {
			let n = (0, s.getSubschema)(this.it, e);
			(0, s.extendSubschemaData)(n, this.it, e), (0, s.extendSubschemaMode)(n, e);
			let r = {
				...this.it,
				...n,
				items: void 0,
				props: void 0
			};
			return b(r, t), r;
		}
		mergeEvaluated(e, t) {
			let { it: n, gen: r } = this;
			n.opts.unevaluated && (n.props !== !0 && e.props !== void 0 && (n.props = d.mergeEvaluated.props(r, e.props, n.props, t)), n.items !== !0 && e.items !== void 0 && (n.items = d.mergeEvaluated.items(r, e.items, n.items, t)));
		}
		mergeValidEvaluated(e, t) {
			let { it: n, gen: r } = this;
			if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0)) return r.if(t, () => this.mergeEvaluated(e, c.Name)), !0;
		}
	};
	e.KeywordCxt = he;
	function ge(e, t, n, r) {
		let i = new he(e, n, t);
		"code" in n ? n.code(i, r) : i.$data && n.validate ? (0, o.funcKeywordCode)(i, n) : "macro" in n ? (0, o.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, o.funcKeywordCode)(i, n);
	}
	var O = /^\/(?:[^~]|~0|~1)*$/, k = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function _e(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
		let i, a;
		if (e === "") return l.default.rootData;
		if (e[0] === "/") {
			if (!O.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
			i = e, a = l.default.rootData;
		} else {
			let o = k.exec(e);
			if (!o) throw Error(`Invalid JSON-pointer: ${e}`);
			let s = +o[1];
			if (i = o[2], i === "#") {
				if (s >= t) throw Error(u("property/index", s));
				return r[t - s];
			}
			if (s > t) throw Error(u("data", s));
			if (a = n[t - s], !i) return a;
		}
		let o = a, s = i.split("/");
		for (let e of s) e && (a = (0, c._)`${a}${(0, c.getProperty)((0, d.unescapeJsonPointer)(e))}`, o = (0, c._)`${o} && ${a}`);
		return o;
		function u(e, n) {
			return `Cannot access ${e} ${n} levels up, current level is ${t}`;
		}
	}
	e.getData = _e;
})), rx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = class extends Error {
		constructor(e) {
			super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
		}
	};
})), ix = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = tx();
	e.default = class extends Error {
		constructor(e, n, r, i) {
			super(i || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, t.resolveUrl)(e, n, r), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(e, this.missingRef));
		}
	};
})), ax = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
	var t = K(), n = rx(), r = Ub(), i = tx(), a = q(), o = nx(), s = class {
		constructor(e) {
			this.refs = {}, this.dynamicAnchors = {};
			let t;
			typeof e.schema == "object" && (t = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = e.baseId ?? (0, i.normalizeId)(t?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = t?.$async, this.refs = {};
		}
	};
	e.SchemaEnv = s;
	function c(e) {
		let a = d.call(this, e);
		if (a) return a;
		let s = (0, i.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: c, lines: l } = this.opts.code, { ownProperties: u } = this.opts, f = new t.CodeGen(this.scope, {
			es5: c,
			lines: l,
			ownProperties: u
		}), p;
		e.$async && (p = f.scopeValue("Error", {
			ref: n.default,
			code: (0, t._)`require("ajv/dist/runtime/validation_error").default`
		}));
		let m = f.scopeName("validate");
		e.validateName = m;
		let h = {
			gen: f,
			allErrors: this.opts.allErrors,
			data: r.default.data,
			parentData: r.default.parentData,
			parentDataProperty: r.default.parentDataProperty,
			dataNames: [r.default.data],
			dataPathArr: [t.nil],
			dataLevel: 0,
			dataTypes: [],
			definedProperties: /* @__PURE__ */ new Set(),
			topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? {
				ref: e.schema,
				code: (0, t.stringify)(e.schema)
			} : { ref: e.schema }),
			validateName: m,
			ValidationError: p,
			schema: e.schema,
			schemaEnv: e,
			rootId: s,
			baseId: e.baseId || s,
			schemaPath: t.nil,
			errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
			errorPath: (0, t._)`""`,
			opts: this.opts,
			self: this
		}, g;
		try {
			this._compilations.add(e), (0, o.validateFunctionCode)(h), f.optimize(this.opts.code.optimize);
			let n = f.toString();
			g = `${f.scopeRefs(r.default.scope)}return ${n}`, this.opts.code.process && (g = this.opts.code.process(g, e));
			let i = Function(`${r.default.self}`, `${r.default.scope}`, g)(this, this.scope.get());
			if (this.scope.value(m, { ref: i }), i.errors = null, i.schema = e.schema, i.schemaEnv = e, e.$async && (i.$async = !0), this.opts.code.source === !0 && (i.source = {
				validateName: m,
				validateCode: n,
				scopeValues: f._values
			}), this.opts.unevaluated) {
				let { props: e, items: n } = h;
				i.evaluated = {
					props: e instanceof t.Name ? void 0 : e,
					items: n instanceof t.Name ? void 0 : n,
					dynamicProps: e instanceof t.Name,
					dynamicItems: n instanceof t.Name
				}, i.source && (i.source.evaluated = (0, t.stringify)(i.evaluated));
			}
			return e.validate = i, e;
		} catch (t) {
			throw delete e.validate, delete e.validateName, g && this.logger.error("Error compiling schema, function code:", g), t;
		} finally {
			this._compilations.delete(e);
		}
	}
	e.compileSchema = c;
	function l(e, t, n) {
		n = (0, i.resolveUrl)(this.opts.uriResolver, t, n);
		let r = e.refs[n];
		if (r) return r;
		let a = p.call(this, e, n);
		if (a === void 0) {
			let r = e.localRefs?.[n], { schemaId: i } = this.opts;
			r && (a = new s({
				schema: r,
				schemaId: i,
				root: e,
				baseId: t
			}));
		}
		if (a !== void 0) return e.refs[n] = u.call(this, a);
	}
	e.resolveRef = l;
	function u(e) {
		return (0, i.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : c.call(this, e);
	}
	function d(e) {
		for (let t of this._compilations) if (f(t, e)) return t;
	}
	e.getCompilingSchema = d;
	function f(e, t) {
		return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
	}
	function p(e, t) {
		let n;
		for (; typeof (n = this.refs[t]) == "string";) t = n;
		return n || this.schemas[t] || m.call(this, e, t);
	}
	function m(e, t) {
		let n = this.opts.uriResolver.parse(t), r = (0, i._getFullPath)(this.opts.uriResolver, n), a = (0, i.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
		if (Object.keys(e.schema).length > 0 && r === a) return g.call(this, n, e);
		let o = (0, i.normalizeId)(r), l = this.refs[o] || this.schemas[o];
		if (typeof l == "string") {
			let t = m.call(this, e, l);
			return typeof t?.schema == "object" ? g.call(this, n, t) : void 0;
		}
		if (typeof l?.schema == "object") {
			if (l.validate || c.call(this, l), o === (0, i.normalizeId)(t)) {
				let { schema: t } = l, { schemaId: n } = this.opts, r = t[n];
				return r && (a = (0, i.resolveUrl)(this.opts.uriResolver, a, r)), new s({
					schema: t,
					schemaId: n,
					root: e,
					baseId: a
				});
			}
			return g.call(this, n, l);
		}
	}
	e.resolveSchema = m;
	var h = /* @__PURE__ */ new Set([
		"properties",
		"patternProperties",
		"enum",
		"dependencies",
		"definitions"
	]);
	function g(e, { baseId: t, schema: n, root: r }) {
		if (e.fragment?.[0] !== "/") return;
		for (let r of e.fragment.slice(1).split("/")) {
			if (typeof n == "boolean") return;
			let e = n[(0, a.unescapeFragment)(r)];
			if (e === void 0) return;
			n = e;
			let o = typeof n == "object" && n[this.opts.schemaId];
			!h.has(r) && o && (t = (0, i.resolveUrl)(this.opts.uriResolver, t, o));
		}
		let o;
		if (typeof n != "boolean" && n.$ref && !(0, a.schemaHasRulesButRef)(n, this.RULES)) {
			let e = (0, i.resolveUrl)(this.opts.uriResolver, t, n.$ref);
			o = m.call(this, r, e);
		}
		let { schemaId: c } = this.opts;
		if (o ||= new s({
			schema: n,
			schemaId: c,
			root: r,
			baseId: t
		}), o.schema !== o.root.schema) return o;
	}
})), ox = /* @__PURE__ */ c({
	$id: () => sx,
	additionalProperties: () => !1,
	default: () => fx,
	description: () => cx,
	properties: () => dx,
	required: () => ux,
	type: () => lx
}), sx, cx, lx, ux, dx, fx, px = o((() => {
	sx = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", cx = "Meta-schema for $data reference (JSON AnySchema extension proposal)", lx = "object", ux = ["$data"], dx = { $data: {
		type: "string",
		anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
	} }, fx = {
		$id: sx,
		description: cx,
		type: lx,
		required: ux,
		properties: dx,
		additionalProperties: !1
	};
})), mx = /* @__PURE__ */ s(((e, t) => {
	var n = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), i = RegExp.prototype.test.bind(/^\d*$/u), a = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), l = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), u = Array(256);
	{
		let e = "0123456789ABCDEF";
		for (let t = 0; t < 256; t++) u[t] = "%" + e[t >> 4] + e[t & 15];
	}
	function d(e) {
		return e < 2048 ? u[192 | e >> 6] + u[128 | e & 63] : e < 65536 ? u[224 | e >> 12] + u[128 | e >> 6 & 63] + u[128 | e & 63] : u[240 | e >> 18] + u[128 | e >> 12 & 63] + u[128 | e >> 6 & 63] + u[128 | e & 63];
	}
	function f(e) {
		let t = "", n = 0, r = 0;
		for (r = 0; r < e.length; r++) if (n = e[r].charCodeAt(0), n !== 48) {
			if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
			break;
		}
		for (r += 1; r < e.length; r++) {
			if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
		}
		return t;
	}
	var p = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), m = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), h = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), g = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
	function _(e) {
		if (e.length === 0) return !1;
		for (let t = 0; t < e.length; t++) if (!h(e[t])) {
			if (e[t] === "%" && t + 2 < e.length && a(e.slice(t + 1, t + 3))) t += 2;
			else return !1;
		}
		return !0;
	}
	function v(e) {
		let t = -1, n = 0, r = -1, i = 0;
		for (let a = 0; a < e.length; a++) e[a] === "0" ? (r === -1 && (r = a), i++, i > n && (n = i, t = r)) : (r = -1, i = 0);
		if (n < 2) return e.join(":");
		let a = e.slice(0, t).join(":"), o = e.slice(t + n).join(":");
		return a + "::" + o;
	}
	function y(e) {
		let t = e.indexOf("::");
		if (t !== -1 && e.indexOf("::", t + 1) !== -1) return;
		let n = t === -1 ? e.split(":") : e.slice(0, t).split(":"), i = t === -1 ? [] : e.slice(t + 2).split(":");
		t !== -1 && (n.length === 1 && n[0] === "" && (n.length = 0), i.length === 1 && i[0] === "" && (i.length = 0));
		let a = n.concat(i), o = 0;
		for (let e = 0; e < a.length; e++) {
			let n = a[e];
			if (n === "") return;
			if (n.indexOf(".") !== -1) {
				if (e !== a.length - 1 || t !== -1 && i.length === 0 || !r(n)) return;
				o += 2;
			} else {
				if (!p(n)) return;
				a[e] = parseInt(n, 16).toString(16), o++;
			}
		}
		if (t === -1) return o === 8 ? v(a) : void 0;
		if (o >= 8) return;
		let s = a.slice(0, n.length);
		for (let e = o; e < 8; e++) s.push("0");
		for (let e = n.length; e < a.length; e++) s.push(a[e]);
		return v(s);
	}
	function b(e) {
		let t = e[0] === "[" && e[e.length - 1] === "]";
		if ((e[0] === "[" || e[e.length - 1] === "]") && !t) return {
			host: e,
			isIPV6: !1,
			error: !0
		};
		let n = t ? e.slice(1, -1) : e;
		if (t && m(n)) return n = n.toLowerCase(), {
			host: `[${n}]`,
			escapedHost: n,
			isIPV6: !1,
			isIPVFuture: !0
		};
		if (x(n, ":") < 2) return {
			host: e,
			isIPV6: !1,
			error: t
		};
		let r = "", i = n.indexOf("%");
		if (i !== -1) {
			let t = n.slice(i, i + 3).toLowerCase() === "%25" ? 3 : 1;
			if (r = n.slice(i + t), !_(r)) return {
				host: e,
				isIPV6: !1,
				error: !0
			};
			n = n.slice(0, i);
		}
		let a = y(n);
		return a === void 0 ? {
			host: e,
			isIPV6: !1,
			error: !0
		} : {
			host: a + (r ? "%" + r : ""),
			escapedHost: a + (r ? "%25" + r : ""),
			isIPV6: !0
		};
	}
	function x(e, t) {
		let n = 0;
		for (let r = 0; r < e.length; r++) e[r] === t && n++;
		return n;
	}
	function S(e) {
		let t = e, n = [], r = -1, i = 0;
		for (; i = t.length;) {
			if (i === 1) {
				if (t === ".") break;
				if (t === "/") {
					n.push("/");
					break;
				}
				n.push(t);
				break;
			}
			if (i === 2) {
				if (t[0] === ".") {
					if (t[1] === ".") break;
					if (t[1] === "/") {
						t = t.slice(2);
						continue;
					}
				} else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
					n.push("/");
					break;
				}
			} else if (i === 3 && t === "/..") {
				n.length !== 0 && n.pop(), n.push("/");
				break;
			}
			if (t[0] === ".") {
				if (t[1] === ".") {
					if (t[2] === "/") {
						t = t.slice(3);
						continue;
					}
				} else if (t[1] === "/") {
					t = t.slice(2);
					continue;
				}
			} else if (t[0] === "/" && t[1] === ".") {
				if (t[2] === "/") {
					t = t.slice(2);
					continue;
				}
				if (t[2] === "." && t[3] === "/") {
					t = t.slice(3), n.length !== 0 && n.pop();
					continue;
				}
			}
			if ((r = t.indexOf("/", 1)) === -1) {
				n.push(t);
				break;
			}
			n.push(t.slice(0, r)), t = t.slice(r);
		}
		return n.join("");
	}
	function ee(e) {
		if (e === "" || e[0] === "/") return S(e);
		let t = e.split("/"), n = t.length - 1, r = [], i = !1;
		for (let e = 0; e <= n; e++) {
			let a = t[e];
			a === "." || a === ".." ? (a === ".." && (r.length !== 0 && r[r.length - 1] !== ".." ? r.pop() : r.push("..")), i = e === n) : r.push(a);
		}
		return i && r[r.length - 1] !== ".." && r.push(""), (r.length === 0 || r[0] === "" || r[0].includes(":")) && r.unshift("."), r.join("/");
	}
	var te = {
		"@": "%40",
		"/": "%2F",
		"?": "%3F",
		"#": "%23",
		":": "%3A"
	}, ne = /[@/?#:]/g, C = /[@/?#]/g;
	function re(e, t) {
		let n = t ? C : ne;
		return n.lastIndex = 0, e.replace(n, (e) => te[e]);
	}
	function w(e, t = !1) {
		if (e.indexOf("%") === -1) return e;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			if (e[r] === "%" && r + 2 < e.length) {
				let i = e.slice(r + 1, r + 3);
				if (a(i)) {
					let e = i.toUpperCase(), a = String.fromCharCode(parseInt(e, 16));
					t && o(a) ? n += a : n += "%" + e, r += 2;
					continue;
				}
			}
			n += e[r];
		}
		return n;
	}
	function T(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					i !== "." && o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (s(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += le(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function ie(e, t = !1) {
		let n = "", r = t && e[0] !== "/";
		for (let t = 0; t < e.length; t++) {
			let i = e[t];
			if (i === "%" && t + 2 < e.length) {
				let r = e.slice(t + 1, t + 3);
				if (a(r)) {
					n += "%" + r.toUpperCase(), t += 2;
					continue;
				}
			}
			if (i === "/" && (r = !1), s(i) && (i !== ":" || !r)) n += i;
			else {
				let r = e.charCodeAt(t);
				if (r < 128) n += u[r];
				else if (r < 55296 || r > 57343) n += d(r);
				else if (r <= 56319 && t + 1 < e.length) {
					let i = e.charCodeAt(t + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (r - 55296 << 10) + (i - 56320)), t++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function ae(e, t) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (i === "%" && r + 2 < e.length) {
				let t = e.slice(r + 1, r + 3);
				if (a(t)) {
					n += "%" + t.toUpperCase(), r += 2;
					continue;
				}
			}
			if (t(i)) n += i;
			else {
				let t = e.charCodeAt(r);
				if (t < 128) n += u[t];
				else if (t < 55296 || t > 57343) n += d(t);
				else if (t <= 56319 && r + 1 < e.length) {
					let i = e.charCodeAt(r + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (t - 55296 << 10) + (i - 56320)), r++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function oe(e) {
		return ae(e, l);
	}
	function se(e) {
		return ae(e, c);
	}
	function ce(e) {
		return ae(e, c);
	}
	function le(e) {
		return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 42 || e === 43 || e === 45 || e === 46 || e === 47 || e === 64 || e === 95;
	}
	function ue(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (c(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += le(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function E(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			if (e[n] === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					t += "%" + r.toUpperCase(), n += 2;
					continue;
				}
			}
			t += escape(e[n]);
		}
		return t;
	}
	function de(e) {
		let t = [];
		if (e.userinfo !== void 0 && (t.push(oe(e.userinfo)), t.push("@")), e.host !== void 0) {
			let n = e.host;
			if (!r(n)) {
				let e = b(n);
				e.isIPV6 !== !0 && e.isIPVFuture !== !0 && (n = w(n, !0), e = b(n)), n = e.isIPV6 === !0 || e.isIPVFuture === !0 ? `[${e.escapedHost}]` : re(n, !1);
			}
			t.push(n);
		}
		if (typeof e.port == "number" || typeof e.port == "string") {
			let n = String(e.port);
			if (!i(n)) throw TypeError("URI port is malformed.");
			t.push(":"), t.push(n);
		}
		return t.length ? t.join("") : void 0;
	}
	t.exports = {
		nonSimpleDomain: g,
		recomposeAuthority: de,
		reescapeHostDelimiters: re,
		normalizePercentEncoding: w,
		normalizePathEncoding: T,
		serializePathEncoding: ie,
		normalizeQueryFragmentEncoding: ue,
		encodeUserinfo: oe,
		encodeQuery: se,
		encodeFragment: ce,
		escapePreservingEscapes: E,
		removeDotSegments: S,
		removeDotSegmentsRelative: ee,
		isIPv4: r,
		isUUID: n,
		normalizeIPv6: b,
		stringArrayToHexStripped: f
	};
})), hx = /* @__PURE__ */ s(((e, t) => {
	var { isUUID: n } = mx(), r = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, i = [
		"http",
		"https",
		"ws",
		"wss",
		"urn",
		"urn:uuid"
	];
	function a(e) {
		return i.indexOf(e) !== -1;
	}
	function o(e) {
		return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
	}
	function s(e) {
		return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
	}
	function c(e) {
		let t = String(e.scheme).toLowerCase() === "https";
		return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path ||= "/", e;
	}
	function l(e) {
		return e.secure = o(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
	}
	function u(e) {
		if ((e.port === (o(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
			let t = e.resourceName.indexOf("?"), n = t === -1 ? e.resourceName : e.resourceName.slice(0, t);
			e.path = n && n !== "/" ? n : void 0, e.query = t === -1 ? void 0 : e.resourceName.slice(t + 1), e.resourceName = void 0;
		}
		return e.fragment = void 0, e;
	}
	function d(e, t) {
		if (!e.path) return e.error = "URN can not be parsed", e;
		let n = e.path.match(r);
		if (n && n[0] === e.path) {
			let r = t.scheme || e.scheme || "urn";
			e.nid = n[1].toLowerCase(), e.nss = n[2];
			let i = y(`${r}:${t.nid || e.nid}`);
			e.path = void 0, i && (e = i.parse(e, t));
		} else e.error = e.error || "URN can not be parsed.";
		return e;
	}
	function f(e, t) {
		if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
		let n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), i = y(`${n}:${t.nid || r}`);
		i && (e = i.serialize(e, t));
		let a = e, o = e.nss;
		return a.path = `${r || t.nid}:${o}`, t.skipEscape = !0, a;
	}
	function p(e, t) {
		let r = e;
		return r.uuid = r.nss, r.nss = void 0, t.tolerant || r.uuid && n(r.uuid) || (r.error = r.error || "UUID is not valid."), r;
	}
	function m(e) {
		let t = e;
		return t.nss = (e.uuid || "").toLowerCase(), t;
	}
	var h = {
		scheme: "http",
		domainHost: !0,
		parse: s,
		serialize: c
	}, g = {
		scheme: "https",
		domainHost: h.domainHost,
		parse: s,
		serialize: c
	}, _ = {
		scheme: "ws",
		domainHost: !0,
		parse: l,
		serialize: u
	}, v = {
		http: h,
		https: g,
		ws: _,
		wss: {
			scheme: "wss",
			domainHost: _.domainHost,
			parse: _.parse,
			serialize: _.serialize
		},
		urn: {
			scheme: "urn",
			parse: d,
			serialize: f,
			skipNormalize: !0
		},
		"urn:uuid": {
			scheme: "urn:uuid",
			parse: p,
			serialize: m,
			skipNormalize: !0
		}
	};
	Object.setPrototypeOf(v, null);
	function y(e) {
		return e && (v[e] || v[e.toLowerCase()]) || void 0;
	}
	t.exports = {
		wsIsSecure: o,
		SCHEMES: v,
		isValidSchemeName: a,
		getSchemeHandler: y
	};
})), gx = /* @__PURE__ */ s(((e, t) => {
	var { normalizeIPv6: n, removeDotSegments: r, removeDotSegmentsRelative: i, recomposeAuthority: a, normalizePercentEncoding: o, normalizePathEncoding: s, serializePathEncoding: c, normalizeQueryFragmentEncoding: l, encodeQuery: u, encodeFragment: d, reescapeHostDelimiters: f, isIPv4: p, nonSimpleDomain: m } = mx(), { SCHEMES: h, getSchemeHandler: g } = hx(), _ = /^[A-Za-z][A-Za-z0-9+.-]*$/u, v = "URI scheme is malformed.", y = "URI host is malformed.", b = /[\0-\x20"#/:<>?@[\\\]^`{|}\x7F]/u;
	function x(e) {
		let t = String(e);
		if (!_.test(t)) throw TypeError(v);
		return t;
	}
	function S(e, t) {
		return typeof e == "string" ? e = fe(e, t) : typeof e == "object" && (e = de(C(e, t), t)), e;
	}
	function ee(e, t, r) {
		let i = r ? Object.assign({ scheme: "null" }, r) : { scheme: "null" }, { parsed: a, malformedAuthorityOrPort: o, malformedPercentEncoding: s, malformedSchemeSpecific: c, malformedHost: l, malformedScheme: u } = E(e, i), { parsed: d, malformedAuthorityOrPort: f, malformedPercentEncoding: m, malformedSchemeSpecific: h, malformedHost: _, malformedScheme: v } = E(t, i);
		if (o || f || s || m || c || h || l || _ || u || v) throw Error(a.error || d.error || "URI is malformed.");
		let b = te(a, d, i, !0), x = g(r && r.scheme || b.scheme), S = b.host, ee = S !== void 0 && S !== "" && (p(S) || n(S).isIPV6);
		if (le(b, r || {}, x, ee)) throw Error(y);
		ce(b, r || {}, x, ee);
		let ne = S && S.indexOf("%") !== -1 && !/\P{ASCII}/u.test(S);
		if (b.error && !ne) throw Error(b.error);
		return i.skipEscape = !0, C(b, i);
	}
	function te(e, t, n, a) {
		let o = {};
		if (a || (e = de(C(e, n), n), t = de(C(t, n), n)), n ||= {}, !n.tolerant && t.scheme) o.scheme = t.scheme, o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = r(t.path || ""), o.query = t.query;
		else {
			if (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = r(t.path || ""), o.query = t.query;
			else {
				if (!t.path) o.path = e.path, o.query = t.query === void 0 ? e.query : t.query;
				else {
					if (t.path[0] === "/") o.path = r(t.path);
					else {
						let n = e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0;
						o.path = n && !e.path ? "/" + t.path : e.path ? e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : t.path, o.path = e.scheme === void 0 && !n && o.path[0] !== "/" ? i(o.path) : r(o.path);
					}
					o.query = t.query;
				}
				o.userinfo = e.userinfo, o.host = e.host, o.port = e.port;
			}
			o.scheme = e.scheme;
		}
		return o.fragment = t.fragment, o;
	}
	function ne(e, t, n) {
		let r = pe(e, n), i = pe(t, n);
		return r !== void 0 && i !== void 0 && r === i;
	}
	function C(e, t) {
		let n = {
			host: e.host,
			scheme: e.scheme,
			userinfo: e.userinfo,
			port: e.port,
			path: e.path,
			query: e.query,
			nid: e.nid,
			nss: e.nss,
			uuid: e.uuid,
			fragment: e.fragment,
			reference: e.reference,
			resourceName: e.resourceName,
			secure: e.secure,
			error: ""
		}, s = Object.assign({}, t), l = [];
		n.scheme &&= x(n.scheme);
		let f = g(s.scheme || n.scheme);
		f && f.serialize && f.serialize(n, s);
		let p = n.userinfo !== void 0 || n.host !== void 0 || n.port !== void 0, m = (n.scheme === void 0 || s.reference === "suffix") && !p, h = !s.skipEscape && m;
		n.path !== void 0 && (n.path = s.skipEscape ? o(n.path) : c(n.path, h)), s.reference !== "suffix" && n.scheme && (n.scheme = x(n.scheme), l.push(n.scheme, ":"));
		let _ = a(n);
		if (_ !== void 0 && (s.reference !== "suffix" && l.push("//"), l.push(_), n.path && n.path[0] !== "/" && l.push("/")), n.path !== void 0) {
			let e = n.path;
			s.absolutePath || f && f.absolutePath || (e = m && e[0] !== "/" ? i(e) : r(e)), m && (e = c(e, !0)), _ === void 0 && e[0] === "/" && e[1] === "/" && (e = "/%2F" + e.slice(2)), l.push(e);
		}
		return n.query !== void 0 && l.push("?", u(n.query)), n.fragment !== void 0 && l.push("#", d(n.fragment)), l.join("");
	}
	var re = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, w = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, T = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
	function ie(e, t) {
		if (t[2] !== void 0 && e.path && e.path[0] !== "/") return "URI path must start with \"/\" when authority is present.";
		if (typeof e.port == "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
	}
	function ae(e) {
		if (e === void 0) return !1;
		let t = e.indexOf("%");
		for (; t !== -1;) {
			if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) return !0;
			t = e.indexOf("%", t + 3);
		}
		return !1;
	}
	function oe(e) {
		return e[0] === "[" && e[e.length - 1] === "]";
	}
	function se(e) {
		let t = e[4];
		return ae(e[3]) || t !== void 0 && !oe(t) && ae(t) || ae(e[6]) || ae(e[7]) || ae(e[8]);
	}
	function ce(e, t, n, r) {
		if (le(e, t, n, r)) return e.error = e.error || y, !0;
		if (!t.unicodeSupport && (!n || !n.unicodeSupport) && e.host && !oe(e.host) && (t.domainHost || n && n.domainHost) && r === !1 && m(e.host)) {
			let t;
			try {
				t = new URL("http://" + e.host);
			} catch (t) {
				return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
			}
			if (!ue(t)) return e.error = e.error || y, !0;
			e.host = t.hostname;
		}
		return !1;
	}
	function le(e, t, n, r) {
		return !!(e.host && r === !1 && !oe(e.host) && (t.domainHost || n && n.domainHost) && b.test(e.host));
	}
	function ue(e) {
		return e.username === "" && e.password === "" && e.port === "" && e.pathname === "/" && e.search === "" && e.hash === "" && e.hostname !== "";
	}
	function E(e, t) {
		let r = Object.assign({}, t), i = {
			scheme: void 0,
			userinfo: void 0,
			host: "",
			port: void 0,
			path: "",
			query: void 0,
			fragment: void 0
		}, a = !1, c = !1, u = !1, d = !1, m = !1, b = !1, x = !1;
		r.reference === "suffix" && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
		let S = e.match(w);
		S !== null && S[1].indexOf("\\") !== -1 && (i.error = "URI authority must not contain a literal backslash.", a = !0);
		let ee = e.match(T);
		if (ee !== null) {
			let e = ee[1], t = e.replace(/[\t\n\r]/g, "");
			t.length >= 2 && (t.slice(0, 2) === "//" ? e.length !== t.length && (i.error = i.error || "URI authority introducer must not contain whitespace.", a = !0) : (i.error = i.error || "URI authority must not contain a literal backslash.", a = !0));
		}
		let te = e.match(re);
		if (te) {
			i.scheme = te[1], i.userinfo = te[3], i.host = te[4], i.port = parseInt(te[5], 10), i.path = te[6] || "", i.query = te[7], i.fragment = te[8], i.scheme !== void 0 && (_.test(i.scheme) ? i.scheme = i.scheme.toLowerCase() : (i.error = i.error || v, b = !0)), c = se(te), c && (i.error = i.error || "URI contains malformed percent-encoding."), isNaN(i.port) && (i.port = te[5]);
			let t = ie(i, te);
			if (t !== void 0 && (i.error = i.error || t, a = !0), i.host) {
				if (p(i.host) === !1) {
					let e = oe(i.host), t = i.host.indexOf("[") !== -1 || i.host.indexOf("]") !== -1, r = n(i.host);
					x = r.isIPV6 || r.isIPVFuture === !0, m = t && (!e || r.error === !0), i.host = x ? r.host : r.host.toLowerCase(), m && (i.error = i.error || y, a = !0);
				} else x = !0;
			}
			i.reference = i.scheme === void 0 && i.userinfo === void 0 && i.host === void 0 && i.port === void 0 && i.query === void 0 && !i.path ? "same-document" : i.scheme === void 0 ? "relative" : i.fragment === void 0 ? "absolute" : "uri", r.reference && r.reference !== "suffix" && r.reference !== i.reference && (i.error = i.error || "URI is not a " + r.reference + " reference.");
			let S = g(r.scheme || i.scheme);
			if (m || (d = ce(i, r, S, x)), e.indexOf("%") !== -1 && i.host !== void 0 && !m) {
				let e = x ? i.host : o(i.host, !0);
				x || (e = o(e.toLowerCase())), i.host = x || r.scheme !== "null" ? f(e, x) : e;
			}
			(!S || S && !S.skipNormalize) && (i.path &&= s(i.path), i.query &&= l(i.query), i.fragment &&= l(i.fragment)), S && S.parse && (S.parse(i, r), S === h.urn && i.nid === void 0 && (u = !0));
		} else i.error = i.error || "URI can not be parsed.";
		return {
			parsed: i,
			malformedAuthorityOrPort: a,
			malformedPercentEncoding: c,
			malformedSchemeSpecific: u,
			malformedHost: d,
			malformedScheme: b
		};
	}
	function de(e, t) {
		return E(e, t).parsed;
	}
	function fe(e, t) {
		return D(e, t).normalized;
	}
	function D(e, t) {
		let { parsed: n, malformedAuthorityOrPort: r, malformedPercentEncoding: i, malformedSchemeSpecific: a, malformedHost: o, malformedScheme: s } = E(e, t);
		return {
			normalized: r || i || a || o || s ? e : C(n, t),
			malformedAuthorityOrPort: r,
			malformedPercentEncoding: i,
			malformedSchemeSpecific: a,
			malformedHost: o,
			malformedScheme: s
		};
	}
	function pe(e, t) {
		if (typeof e != "string" && typeof e != "object") return;
		let n;
		try {
			n = typeof e == "string" ? e : C(e, t);
		} catch {
			return;
		}
		let { normalized: r, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: o, malformedHost: s, malformedScheme: c } = D(n, t);
		return i || a || o || s || c ? void 0 : r;
	}
	var me = {
		SCHEMES: h,
		normalize: S,
		resolve: ee,
		resolveComponent: te,
		equal: ne,
		serialize: C,
		parse: de
	};
	t.exports = me, t.exports.default = me, t.exports.fastUri = me;
})), _x = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = gx();
	t.code = "require(\"ajv/dist/runtime/uri\").default", e.default = t;
})), vx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
	var t = nx();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return t.KeywordCxt;
		}
	});
	var n = K();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return n._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return n.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return n.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return n.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return n.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return n.CodeGen;
		}
	});
	var r = rx(), i = ix(), a = Kb(), o = ax(), s = K(), c = tx(), l = Jb(), u = q(), f = (px(), d(ox).default), p = _x(), m = (e, t) => new RegExp(e, t);
	m.code = "new RegExp";
	var h = [
		"removeAdditional",
		"useDefaults",
		"coerceTypes"
	], g = /* @__PURE__ */ new Set([
		"validate",
		"serialize",
		"parse",
		"wrapper",
		"root",
		"schema",
		"keyword",
		"pattern",
		"formats",
		"validate$data",
		"func",
		"obj",
		"Error"
	]), _ = {
		errorDataPath: "",
		format: "`validateFormats: false` can be used instead.",
		nullable: "\"nullable\" keyword is supported by default.",
		jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
		extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
		missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
		processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
		sourceCode: "Use option `code: {source: true}`",
		strictDefaults: "It is default now, see option `strict`.",
		strictKeywords: "It is default now, see option `strict`.",
		uniqueItems: "\"uniqueItems\" keyword is always validated.",
		unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
		cache: "Map is used as cache, schema object as key.",
		serialize: "Map is used as cache, schema object as key.",
		ajvErrors: "It is default now."
	}, v = {
		ignoreKeywordsWithRef: "",
		jsPropertySyntax: "",
		unicode: "\"minLength\"/\"maxLength\" account for unicode characters by default."
	}, y = 200;
	function b(e) {
		let t = e.strict, n = e.code?.optimize, r = n === !0 || n === void 0 ? 1 : n || 0, i = e.code?.regExp ?? m, a = e.uriResolver ?? p.default;
		return {
			strictSchema: e.strictSchema ?? t ?? !0,
			strictNumbers: e.strictNumbers ?? t ?? !0,
			strictTypes: e.strictTypes ?? t ?? "log",
			strictTuples: e.strictTuples ?? t ?? "log",
			strictRequired: e.strictRequired ?? t ?? !1,
			code: e.code ? {
				...e.code,
				optimize: r,
				regExp: i
			} : {
				optimize: r,
				regExp: i
			},
			loopRequired: e.loopRequired ?? y,
			loopEnum: e.loopEnum ?? y,
			meta: e.meta ?? !0,
			messages: e.messages ?? !0,
			inlineRefs: e.inlineRefs ?? !0,
			schemaId: e.schemaId ?? "$id",
			addUsedSchema: e.addUsedSchema ?? !0,
			validateSchema: e.validateSchema ?? !0,
			validateFormats: e.validateFormats ?? !0,
			unicodeRegExp: e.unicodeRegExp ?? !0,
			int32range: e.int32range ?? !0,
			uriResolver: a
		};
	}
	var x = class {
		constructor(e = {}) {
			this.schemas = {}, this.refs = {}, this.formats = Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e = this.opts = {
				...e,
				...b(e)
			};
			let { es5: t, lines: n } = this.opts.code;
			this.scope = new s.ValueScope({
				scope: {},
				prefixes: g,
				es5: t,
				lines: n
			}), this.logger = T(e.logger);
			let r = e.validateFormats;
			e.validateFormats = !1, this.RULES = (0, a.getRules)(), S.call(this, _, e, "NOT SUPPORTED"), S.call(this, v, e, "DEPRECATED", "warn"), this._metaOpts = re.call(this), e.formats && ne.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && C.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), te.call(this), e.validateFormats = r;
		}
		_addVocabularies() {
			this.addKeyword("$async");
		}
		_addDefaultMetaSchema() {
			let { $data: e, meta: t, schemaId: n } = this.opts, r = f;
			n === "id" && (r = { ...f }, r.id = r.$id, delete r.$id), t && e && this.addMetaSchema(r, r[n], !1);
		}
		defaultMeta() {
			let { meta: e, schemaId: t } = this.opts;
			return this.opts.defaultMeta = typeof e == "object" ? e[t] || e : void 0;
		}
		validate(e, t) {
			let n;
			if (typeof e == "string") {
				if (n = this.getSchema(e), !n) throw Error(`no schema with key or ref "${e}"`);
			} else n = this.compile(e);
			let r = n(t);
			return "$async" in n || (this.errors = n.errors), r;
		}
		compile(e, t) {
			let n = this._addSchema(e, t);
			return n.validate || this._compileSchemaEnv(n);
		}
		compileAsync(e, t) {
			if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
			let { loadSchema: n } = this.opts;
			return r.call(this, e, t);
			async function r(e, t) {
				await a.call(this, e.$schema);
				let n = this._addSchema(e, t);
				return n.validate || o.call(this, n);
			}
			async function a(e) {
				e && !this.getSchema(e) && await r.call(this, { $ref: e }, !0);
			}
			async function o(e) {
				try {
					return this._compileSchemaEnv(e);
				} catch (t) {
					if (!(t instanceof i.default)) throw t;
					return s.call(this, t), await c.call(this, t.missingSchema), o.call(this, e);
				}
			}
			function s({ missingSchema: e, missingRef: t }) {
				if (this.refs[e]) throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
			}
			async function c(e) {
				let n = await l.call(this, e);
				this.refs[e] || await a.call(this, n.$schema), this.refs[e] || this.addSchema(n, e, t);
			}
			async function l(e) {
				let t = this._loading[e];
				if (t) return t;
				try {
					return await (this._loading[e] = n(e));
				} finally {
					delete this._loading[e];
				}
			}
		}
		addSchema(e, t, n, r = this.opts.validateSchema) {
			if (Array.isArray(e)) {
				for (let t of e) this.addSchema(t, void 0, n, r);
				return this;
			}
			let i;
			if (typeof e == "object") {
				let { schemaId: t } = this.opts;
				if (i = e[t], i !== void 0 && typeof i != "string") throw Error(`schema ${t} must be string`);
			}
			return t = (0, c.normalizeId)(t || i), this._checkUnique(t), this.schemas[t] = this._addSchema(e, n, t, r, !0), this;
		}
		addMetaSchema(e, t, n = this.opts.validateSchema) {
			return this.addSchema(e, t, !0, n), this;
		}
		validateSchema(e, t) {
			if (typeof e == "boolean") return !0;
			let n;
			if (n = e.$schema, n !== void 0 && typeof n != "string") throw Error("$schema must be a string");
			if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
			let r = this.validate(n, e);
			if (!r && t) {
				let e = "schema is invalid: " + this.errorsText();
				if (this.opts.validateSchema === "log") this.logger.error(e);
				else throw Error(e);
			}
			return r;
		}
		getSchema(e) {
			let t;
			for (; typeof (t = ee.call(this, e)) == "string";) e = t;
			if (t === void 0) {
				let { schemaId: n } = this.opts, r = new o.SchemaEnv({
					schema: {},
					schemaId: n
				});
				if (t = o.resolveSchema.call(this, r, e), !t) return;
				this.refs[e] = t;
			}
			return t.validate || this._compileSchemaEnv(t);
		}
		removeSchema(e) {
			if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
			switch (typeof e) {
				case "undefined": return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
				case "string": {
					let t = ee.call(this, e);
					return typeof t == "object" && this._cache.delete(t.schema), delete this.schemas[e], delete this.refs[e], this;
				}
				case "object": {
					let t = e;
					this._cache.delete(t);
					let n = e[this.opts.schemaId];
					return n && (n = (0, c.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), this;
				}
				default: throw Error("ajv.removeSchema: invalid parameter");
			}
		}
		addVocabulary(e) {
			for (let t of e) this.addKeyword(t);
			return this;
		}
		addKeyword(e, t) {
			let n;
			if (typeof e == "string") n = e, typeof t == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = n);
			else if (typeof e == "object" && t === void 0) {
				if (t = e, n = t.keyword, Array.isArray(n) && !n.length) throw Error("addKeywords: keyword must be string or non-empty array");
			} else throw Error("invalid addKeywords parameters");
			if (ae.call(this, n, t), !t) return (0, u.eachItem)(n, (e) => oe.call(this, e)), this;
			ce.call(this, t);
			let r = {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			};
			return (0, u.eachItem)(n, r.type.length === 0 ? (e) => oe.call(this, e, r) : (e) => r.type.forEach((t) => oe.call(this, e, r, t))), this;
		}
		getKeyword(e) {
			let t = this.RULES.all[e];
			return typeof t == "object" ? t.definition : !!t;
		}
		removeKeyword(e) {
			let { RULES: t } = this;
			delete t.keywords[e], delete t.all[e];
			for (let n of t.rules) {
				let t = n.rules.findIndex((t) => t.keyword === e);
				t >= 0 && n.rules.splice(t, 1);
			}
			return this;
		}
		addFormat(e, t) {
			return typeof t == "string" && (t = new RegExp(t)), this.formats[e] = t, this;
		}
		errorsText(e = this.errors, { separator: t = ", ", dataVar: n = "data" } = {}) {
			return !e || e.length === 0 ? "No errors" : e.map((e) => `${n}${e.instancePath} ${e.message}`).reduce((e, n) => e + t + n);
		}
		$dataMetaSchema(e, t) {
			let n = this.RULES.all;
			e = JSON.parse(JSON.stringify(e));
			for (let r of t) {
				let t = r.split("/").slice(1), i = e;
				for (let e of t) i = i[e];
				for (let e in n) {
					let t = n[e];
					if (typeof t != "object") continue;
					let { $data: r } = t.definition, a = i[e];
					r && a && (i[e] = ue(a));
				}
			}
			return e;
		}
		_removeAllSchemas(e, t) {
			for (let n in e) {
				let r = e[n];
				(!t || t.test(n)) && (typeof r == "string" ? delete e[n] : r && !r.meta && (this._cache.delete(r.schema), delete e[n]));
			}
		}
		_addSchema(e, t, n, r = this.opts.validateSchema, i = this.opts.addUsedSchema) {
			let a, { schemaId: s } = this.opts;
			if (typeof e == "object") a = e[s];
			else if (this.opts.jtd) throw Error("schema must be object");
			else if (typeof e != "boolean") throw Error("schema must be object or boolean");
			let l = this._cache.get(e);
			if (l !== void 0) return l;
			n = (0, c.normalizeId)(a || n);
			let u = c.getSchemaRefs.call(this, e, n);
			return l = new o.SchemaEnv({
				schema: e,
				schemaId: s,
				meta: t,
				baseId: n,
				localRefs: u
			}), this._cache.set(l.schema, l), i && !n.startsWith("#") && (n && this._checkUnique(n), this.refs[n] = l), r && this.validateSchema(e, !0), l;
		}
		_checkUnique(e) {
			if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
		}
		_compileSchemaEnv(e) {
			/* istanbul ignore if */
			if (e.meta ? this._compileMetaSchema(e) : o.compileSchema.call(this, e), !e.validate) throw Error("ajv implementation error");
			return e.validate;
		}
		_compileMetaSchema(e) {
			let t = this.opts;
			this.opts = this._metaOpts;
			try {
				o.compileSchema.call(this, e);
			} finally {
				this.opts = t;
			}
		}
	};
	x.ValidationError = r.default, x.MissingRefError = i.default, e.default = x;
	function S(e, t, n, r = "error") {
		for (let i in e) {
			let a = i;
			a in t && this.logger[r](`${n}: option ${i}. ${e[a]}`);
		}
	}
	function ee(e) {
		return e = (0, c.normalizeId)(e), this.schemas[e] || this.refs[e];
	}
	function te() {
		let e = this.opts.schemas;
		if (e) {
			if (Array.isArray(e)) this.addSchema(e);
			else for (let t in e) this.addSchema(e[t], t);
		}
	}
	function ne() {
		for (let e in this.opts.formats) {
			let t = this.opts.formats[e];
			t && this.addFormat(e, t);
		}
	}
	function C(e) {
		if (Array.isArray(e)) this.addVocabulary(e);
		else {
			this.logger.warn("keywords option as map is deprecated, pass array");
			for (let t in e) {
				let n = e[t];
				n.keyword ||= t, this.addKeyword(n);
			}
		}
	}
	function re() {
		let e = { ...this.opts };
		for (let t of h) delete e[t];
		return e;
	}
	var w = {
		log() {},
		warn() {},
		error() {}
	};
	function T(e) {
		if (e === !1) return w;
		if (e === void 0) return console;
		if (e.log && e.warn && e.error) return e;
		throw Error("logger must implement log, warn and error methods");
	}
	var ie = /^[a-z_$][a-z0-9_$:-]*$/i;
	function ae(e, t) {
		let { RULES: n } = this;
		if ((0, u.eachItem)(e, (e) => {
			if (n.keywords[e]) throw Error(`Keyword ${e} is already defined`);
			if (!ie.test(e)) throw Error(`Keyword ${e} has invalid name`);
		}), t && t.$data && !("code" in t || "validate" in t)) throw Error("$data keyword must have \"code\" or \"validate\" function");
	}
	function oe(e, t, n) {
		var r;
		let i = t?.post;
		if (n && i) throw Error("keyword with \"post\" flag cannot have \"type\"");
		let { RULES: a } = this, o = i ? a.post : a.rules.find(({ type: e }) => e === n);
		if (o || (o = {
			type: n,
			rules: []
		}, a.rules.push(o)), a.keywords[e] = !0, !t) return;
		let s = {
			keyword: e,
			definition: {
				...t,
				type: (0, l.getJSONTypes)(t.type),
				schemaType: (0, l.getJSONTypes)(t.schemaType)
			}
		};
		t.before ? se.call(this, o, s, t.before) : o.rules.push(s), a.all[e] = s, (r = t.implements) == null || r.forEach((e) => this.addKeyword(e));
	}
	function se(e, t, n) {
		let r = e.rules.findIndex((e) => e.keyword === n);
		r >= 0 ? e.rules.splice(r, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${n} is not defined`));
	}
	function ce(e) {
		let { metaSchema: t } = e;
		t !== void 0 && (e.$data && this.opts.$data && (t = ue(t)), e.validateSchema = this.compile(t, !0));
	}
	var le = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
	function ue(e) {
		return { anyOf: [e, le] };
	}
})), yx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "id",
		code() {
			throw Error("NOT SUPPORTED: keyword \"id\", use \"$id\" for schema ID");
		}
	};
})), bx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.callRef = e.getValidate = void 0;
	var t = ix(), n = Xb(), r = K(), i = Ub(), a = ax(), o = q(), s = {
		keyword: "$ref",
		schemaType: "string",
		code(e) {
			let { gen: n, schema: i, it: o } = e, { baseId: s, schemaEnv: u, validateName: d, opts: f, self: p } = o, { root: m } = u;
			if ((i === "#" || i === "#/") && s === m.baseId) return g();
			let h = a.resolveRef.call(p, m, s, i);
			if (h === void 0) throw new t.default(o.opts.uriResolver, s, i);
			return h instanceof a.SchemaEnv ? _(h) : v(h);
			function g() {
				if (u === m) return l(e, d, u, u.$async);
				let t = n.scopeValue("root", { ref: m });
				return l(e, (0, r._)`${t}.validate`, m, m.$async);
			}
			function _(t) {
				l(e, c(e, t), t, t.$async);
			}
			function v(t) {
				let a = n.scopeValue("schema", f.code.source === !0 ? {
					ref: t,
					code: (0, r.stringify)(t)
				} : { ref: t }), o = n.name("valid"), s = e.subschema({
					schema: t,
					dataTypes: [],
					schemaPath: r.nil,
					topSchemaRef: a,
					errSchemaPath: i
				}, o);
				e.mergeEvaluated(s), e.ok(o);
			}
		}
	};
	function c(e, t) {
		let { gen: n } = e;
		return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, r._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
	}
	e.getValidate = c;
	function l(e, t, a, s) {
		let { gen: c, it: l } = e, { allErrors: u, schemaEnv: d, opts: f } = l, p = f.passContext ? i.default.this : r.nil;
		s ? m() : h();
		function m() {
			if (!d.$async) throw Error("async schema referenced by sync schema");
			let i = c.let("valid");
			c.try(() => {
				c.code((0, r._)`await ${(0, n.callValidateCode)(e, t, p)}`), _(t), u || c.assign(i, !0);
			}, (e) => {
				c.if((0, r._)`!(${e} instanceof ${l.ValidationError})`, () => c.throw(e)), g(e), u || c.assign(i, !1);
			}), e.ok(i);
		}
		function h() {
			e.result((0, n.callValidateCode)(e, t, p), () => _(t), () => g(t));
		}
		function g(e) {
			let t = (0, r._)`${e}.errors`;
			c.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), c.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
		}
		function _(e) {
			if (!l.opts.unevaluated) return;
			let t = a?.validate?.evaluated;
			if (l.props !== !0) {
				if (t && !t.dynamicProps) t.props !== void 0 && (l.props = o.mergeEvaluated.props(c, t.props, l.props));
				else {
					let t = c.var("props", (0, r._)`${e}.evaluated.props`);
					l.props = o.mergeEvaluated.props(c, t, l.props, r.Name);
				}
			}
			if (l.items !== !0) {
				if (t && !t.dynamicItems) t.items !== void 0 && (l.items = o.mergeEvaluated.items(c, t.items, l.items));
				else {
					let t = c.var("items", (0, r._)`${e}.evaluated.items`);
					l.items = o.mergeEvaluated.items(c, t, l.items, r.Name);
				}
			}
		}
	}
	e.callRef = l, e.default = s;
})), xx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = yx(), n = bx();
	e.default = [
		"$schema",
		"$id",
		"$defs",
		"$vocabulary",
		{ keyword: "$comment" },
		"definitions",
		t.default,
		n.default
	];
})), Sx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = t.operators, r = {
		maximum: {
			okStr: "<=",
			ok: n.LTE,
			fail: n.GT
		},
		minimum: {
			okStr: ">=",
			ok: n.GTE,
			fail: n.LT
		},
		exclusiveMaximum: {
			okStr: "<",
			ok: n.LT,
			fail: n.GTE
		},
		exclusiveMinimum: {
			okStr: ">",
			ok: n.GT,
			fail: n.LTE
		}
	};
	e.default = {
		keyword: Object.keys(r),
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: n }) => (0, t.str)`must be ${r[e].okStr} ${n}`,
			params: ({ keyword: e, schemaCode: n }) => (0, t._)`{comparison: ${r[e].okStr}, limit: ${n}}`
		},
		code(e) {
			let { keyword: n, data: i, schemaCode: a } = e;
			e.fail$data((0, t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`);
		}
	};
})), Cx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K();
	e.default = {
		keyword: "multipleOf",
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must be multiple of ${e}`,
			params: ({ schemaCode: e }) => (0, t._)`{multipleOf: ${e}}`
		},
		code(e) {
			let { gen: n, data: r, schemaCode: i, it: a } = e, o = a.opts.multipleOfPrecision, s = n.let("res"), c = o ? (0, t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}` : (0, t._)`${s} !== parseInt(${s})`;
			e.fail$data((0, t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`);
		}
	};
})), wx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e) {
		let t = e.length, n = 0, r = 0, i;
		for (; r < t;) n++, i = e.charCodeAt(r++), i >= 55296 && i <= 56319 && r < t && (i = e.charCodeAt(r), (i & 64512) == 56320 && r++);
		return n;
	}
	e.default = t, t.code = "require(\"ajv/dist/runtime/ucs2length\").default";
})), Tx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = wx();
	e.default = {
		keyword: ["maxLength", "minLength"],
		type: "string",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxLength" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} characters`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: i, data: a, schemaCode: o, it: s } = e, c = i === "maxLength" ? t.operators.GT : t.operators.LT, l = s.opts.unicode === !1 ? (0, t._)`${a}.length` : (0, t._)`${(0, n.useFunc)(e.gen, r.default)}(${a})`;
			e.fail$data((0, t._)`${l} ${c} ${o}`);
		}
	};
})), Ex = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Xb(), n = q(), r = K();
	e.default = {
		keyword: "pattern",
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, r.str)`must match pattern "${e}"`,
			params: ({ schemaCode: e }) => (0, r._)`{pattern: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e, u = l.opts.unicodeRegExp ? "u" : "";
			if (o) {
				let { regExp: t } = l.opts.code, o = t.code === "new RegExp" ? (0, r._)`new RegExp` : (0, n.useFunc)(i, t), s = i.let("valid");
				i.try(() => i.assign(s, (0, r._)`${o}(${c}, ${u}).test(${a})`), () => i.assign(s, !1)), e.fail$data((0, r._)`!${s}`);
			} else {
				let n = (0, t.usePattern)(e, s);
				e.fail$data((0, r._)`!${n}.test(${a})`);
			}
		}
	};
})), Dx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K();
	e.default = {
		keyword: ["maxProperties", "minProperties"],
		type: "object",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxProperties" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} properties`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxProperties" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`Object.keys(${r}).length ${a} ${i}`);
		}
	};
})), Ox = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Xb(), n = K(), r = q();
	e.default = {
		keyword: "required",
		type: "object",
		schemaType: "array",
		$data: !0,
		error: {
			message: ({ params: { missingProperty: e } }) => (0, n.str)`must have required property '${e}'`,
			params: ({ params: { missingProperty: e } }) => (0, n._)`{missingProperty: ${e}}`
		},
		code(e) {
			let { gen: i, schema: a, schemaCode: o, data: s, $data: c, it: l } = e, { opts: u } = l;
			if (!c && a.length === 0) return;
			let d = a.length >= u.loopRequired;
			if (l.allErrors ? f() : p(), u.strictRequired) {
				let t = e.parentSchema.properties, { definedProperties: n } = e.it;
				for (let e of a) if (t?.[e] === void 0 && !n.has(e)) {
					let t = `required property "${e}" is not defined at "${l.schemaEnv.baseId + l.errSchemaPath}" (strictRequired)`;
					(0, r.checkStrictMode)(l, t, l.opts.strictRequired);
				}
			}
			function f() {
				if (d || c) e.block$data(n.nil, m);
				else for (let n of a) (0, t.checkReportMissingProp)(e, n);
			}
			function p() {
				let n = i.let("missing");
				if (d || c) {
					let t = i.let("valid", !0);
					e.block$data(t, () => h(n, t)), e.ok(t);
				} else i.if((0, t.checkMissingProp)(e, a, n)), (0, t.reportMissingProp)(e, n), i.else();
			}
			function m() {
				i.forOf("prop", o, (n) => {
					e.setParams({ missingProperty: n }), i.if((0, t.noPropertyInData)(i, s, n, u.ownProperties), () => e.error());
				});
			}
			function h(r, a) {
				e.setParams({ missingProperty: r }), i.forOf(r, o, () => {
					i.assign(a, (0, t.propertyInData)(i, s, r, u.ownProperties)), i.if((0, n.not)(a), () => {
						e.error(), i.break();
					});
				}, n.nil);
			}
		}
	};
})), kx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K();
	e.default = {
		keyword: ["maxItems", "minItems"],
		type: "array",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxItems" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} items`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxItems" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`${r}.length ${a} ${i}`);
		}
	};
})), Ax = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = $b();
	t.code = "require(\"ajv/dist/runtime/equal\").default", e.default = t;
})), jx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Jb(), n = K(), r = q(), i = Ax();
	e.default = {
		keyword: "uniqueItems",
		type: "array",
		schemaType: "boolean",
		$data: !0,
		error: {
			message: ({ params: { i: e, j: t } }) => (0, n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
			params: ({ params: { i: e, j: t } }) => (0, n._)`{i: ${e}, j: ${t}}`
		},
		code(e) {
			let { gen: a, data: o, $data: s, schema: c, parentSchema: l, schemaCode: u, it: d } = e;
			if (!s && !c) return;
			let f = a.let("valid"), p = l.items ? (0, t.getSchemaTypes)(l.items) : [];
			e.block$data(f, m, (0, n._)`${u} === false`), e.ok(f);
			function m() {
				let t = a.let("i", (0, n._)`${o}.length`), r = a.let("j");
				e.setParams({
					i: t,
					j: r
				}), a.assign(f, !0), a.if((0, n._)`${t} > 1`, () => (h() ? g : _)(t, r));
			}
			function h() {
				return p.length > 0 && !p.some((e) => e === "object" || e === "array");
			}
			function g(r, i) {
				let s = a.name("item"), c = (0, t.checkDataTypes)(p, s, d.opts.strictNumbers, t.DataType.Wrong), l = a.const("indices", (0, n._)`{}`);
				a.for((0, n._)`;${r}--;`, () => {
					a.let(s, (0, n._)`${o}[${r}]`), a.if(c, (0, n._)`continue`), p.length > 1 && a.if((0, n._)`typeof ${s} == "string"`, (0, n._)`${s} += "_"`), a.if((0, n._)`typeof ${l}[${s}] == "number"`, () => {
						a.assign(i, (0, n._)`${l}[${s}]`), e.error(), a.assign(f, !1).break();
					}).code((0, n._)`${l}[${s}] = ${r}`);
				});
			}
			function _(t, s) {
				let c = (0, r.useFunc)(a, i.default), l = a.name("outer");
				a.label(l).for((0, n._)`;${t}--;`, () => a.for((0, n._)`${s} = ${t}; ${s}--;`, () => a.if((0, n._)`${c}(${o}[${t}], ${o}[${s}])`, () => {
					e.error(), a.assign(f, !1).break(l);
				})));
			}
		}
	};
})), Mx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = Ax();
	e.default = {
		keyword: "const",
		$data: !0,
		error: {
			message: "must be equal to constant",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValue: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schemaCode: s, schema: c } = e;
			o || c && typeof c == "object" ? e.fail$data((0, t._)`!${(0, n.useFunc)(i, r.default)}(${a}, ${s})`) : e.fail((0, t._)`${c} !== ${a}`);
		}
	};
})), Nx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = Ax();
	e.default = {
		keyword: "enum",
		schemaType: "array",
		$data: !0,
		error: {
			message: "must be equal to one of the allowed values",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValues: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e;
			if (!o && s.length === 0) throw Error("enum must have non-empty array");
			let u = s.length >= l.opts.loopEnum, d, f = () => d ??= (0, n.useFunc)(i, r.default), p;
			if (u || o) p = i.let("valid"), e.block$data(p, m);
			else {
				/* istanbul ignore if */
				if (!Array.isArray(s)) throw Error("ajv implementation error");
				let e = i.const("vSchema", c);
				p = (0, t.or)(...s.map((t, n) => h(e, n)));
			}
			e.pass(p);
			function m() {
				i.assign(p, !1), i.forOf("v", c, (e) => i.if((0, t._)`${f()}(${a}, ${e})`, () => i.assign(p, !0).break()));
			}
			function h(e, n) {
				let r = s[n];
				return typeof r == "object" && r ? (0, t._)`${f()}(${a}, ${e}[${n}])` : (0, t._)`${a} === ${r}`;
			}
		}
	};
})), Px = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Sx(), n = Cx(), r = Tx(), i = Ex(), a = Dx(), o = Ox(), s = kx(), c = jx(), l = Mx(), u = Nx();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default,
		a.default,
		o.default,
		s.default,
		c.default,
		{
			keyword: "type",
			schemaType: ["string", "array"]
		},
		{
			keyword: "nullable",
			schemaType: "boolean"
		},
		l.default,
		u.default
	];
})), Fx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateAdditionalItems = void 0;
	var t = K(), n = q(), r = {
		keyword: "additionalItems",
		type: "array",
		schemaType: ["boolean", "object"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { parentSchema: t, it: r } = e, { items: a } = t;
			Array.isArray(a) ? i(e, a) : (0, n.checkStrictMode)(r, "\"additionalItems\" is ignored when \"items\" is not an array of schemas");
		}
	};
	function i(e, r) {
		let { gen: i, schema: a, data: o, keyword: s, it: c } = e;
		c.items = !0;
		let l = i.const("len", (0, t._)`${o}.length`);
		if (a === !1) e.setParams({ len: r.length }), e.pass((0, t._)`${l} <= ${r.length}`);
		else if (typeof a == "object" && !(0, n.alwaysValidSchema)(c, a)) {
			let n = i.var("valid", (0, t._)`${l} <= ${r.length}`);
			i.if((0, t.not)(n), () => u(n)), e.ok(n);
		}
		function u(a) {
			i.forRange("i", r.length, l, (r) => {
				e.subschema({
					keyword: s,
					dataProp: r,
					dataPropType: n.Type.Num
				}, a), c.allErrors || i.if((0, t.not)(a), () => i.break());
			});
		}
	}
	e.validateAdditionalItems = i, e.default = r;
})), Ix = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTuple = void 0;
	var t = K(), n = q(), r = Xb(), i = {
		keyword: "items",
		type: "array",
		schemaType: [
			"object",
			"array",
			"boolean"
		],
		before: "uniqueItems",
		code(e) {
			let { schema: t, it: i } = e;
			if (Array.isArray(t)) return a(e, "additionalItems", t);
			i.items = !0, (0, n.alwaysValidSchema)(i, t) || e.ok((0, r.validateArray)(e));
		}
	};
	function a(e, r, i = e.schema) {
		let { gen: a, parentSchema: o, data: s, keyword: c, it: l } = e;
		f(o), l.opts.unevaluated && i.length && l.items !== !0 && (l.items = n.mergeEvaluated.items(a, i.length, l.items));
		let u = a.name("valid"), d = a.const("len", (0, t._)`${s}.length`);
		i.forEach((r, i) => {
			(0, n.alwaysValidSchema)(l, r) || (a.if((0, t._)`${d} > ${i}`, () => e.subschema({
				keyword: c,
				schemaProp: i,
				dataProp: i
			}, u)), e.ok(u));
		});
		function f(e) {
			let { opts: t, errSchemaPath: a } = l, o = i.length, s = o === e.minItems && (o === e.maxItems || e[r] === !1);
			if (t.strictTuples && !s) {
				let e = `"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;
				(0, n.checkStrictMode)(l, e, t.strictTuples);
			}
		}
	}
	e.validateTuple = a, e.default = i;
})), Lx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ix();
	e.default = {
		keyword: "prefixItems",
		type: "array",
		schemaType: ["array"],
		before: "uniqueItems",
		code: (e) => (0, t.validateTuple)(e, "items")
	};
})), Rx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = Xb(), i = Fx();
	e.default = {
		keyword: "items",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { schema: t, parentSchema: a, it: o } = e, { prefixItems: s } = a;
			o.items = !0, (0, n.alwaysValidSchema)(o, t) || (s ? (0, i.validateAdditionalItems)(e, s) : e.ok((0, r.validateArray)(e)));
		}
	};
})), zx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q();
	e.default = {
		keyword: "contains",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		trackErrors: !0,
		error: {
			message: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t.str)`must contain at least ${e} valid item(s)` : (0, t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,
			params: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t._)`{minContains: ${e}}` : (0, t._)`{minContains: ${e}, maxContains: ${n}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, data: o, it: s } = e, c, l, { minContains: u, maxContains: d } = a;
			s.opts.next ? (c = u === void 0 ? 1 : u, l = d) : c = 1;
			let f = r.const("len", (0, t._)`${o}.length`);
			if (e.setParams({
				min: c,
				max: l
			}), l === void 0 && c === 0) {
				(0, n.checkStrictMode)(s, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
				return;
			}
			if (l !== void 0 && c > l) {
				(0, n.checkStrictMode)(s, "\"minContains\" > \"maxContains\" is always invalid"), e.fail();
				return;
			}
			if ((0, n.alwaysValidSchema)(s, i)) {
				let n = (0, t._)`${f} >= ${c}`;
				l !== void 0 && (n = (0, t._)`${n} && ${f} <= ${l}`), e.pass(n);
				return;
			}
			s.items = !0;
			let p = r.name("valid");
			l === void 0 && c === 1 ? h(p, () => r.if(p, () => r.break())) : c === 0 ? (r.let(p, !0), l !== void 0 && r.if((0, t._)`${o}.length > 0`, m)) : (r.let(p, !1), m()), e.result(p, () => e.reset());
			function m() {
				let e = r.name("_valid"), t = r.let("count", 0);
				h(e, () => r.if(e, () => g(t)));
			}
			function h(t, i) {
				r.forRange("i", 0, f, (r) => {
					e.subschema({
						keyword: "contains",
						dataProp: r,
						dataPropType: n.Type.Num,
						compositeRule: !0
					}, t), i();
				});
			}
			function g(e) {
				r.code((0, t._)`${e}++`), l === void 0 ? r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0).break()) : (r.if((0, t._)`${e} > ${l}`, () => r.assign(p, !1).break()), c === 1 ? r.assign(p, !0) : r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0)));
			}
		}
	};
})), Bx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
	var t = K(), n = q(), r = Xb();
	e.error = {
		message: ({ params: { property: e, depsCount: n, deps: r } }) => {
			let i = n === 1 ? "property" : "properties";
			return (0, t.str)`must have ${i} ${r} when property ${e} is present`;
		},
		params: ({ params: { property: e, depsCount: n, deps: r, missingProperty: i } }) => (0, t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`
	};
	var i = {
		keyword: "dependencies",
		type: "object",
		schemaType: "object",
		error: e.error,
		code(e) {
			let [t, n] = a(e);
			o(e, t), s(e, n);
		}
	};
	function a({ schema: e }) {
		let t = {}, n = {};
		for (let r in e) {
			if (r === "__proto__") continue;
			let i = Array.isArray(e[r]) ? t : n;
			i[r] = e[r];
		}
		return [t, n];
	}
	function o(e, n = e.schema) {
		let { gen: i, data: a, it: o } = e;
		if (Object.keys(n).length === 0) return;
		let s = i.let("missing");
		for (let c in n) {
			let l = n[c];
			if (l.length === 0) continue;
			let u = (0, r.propertyInData)(i, a, c, o.opts.ownProperties);
			e.setParams({
				property: c,
				depsCount: l.length,
				deps: l.join(", ")
			}), o.allErrors ? i.if(u, () => {
				for (let t of l) (0, r.checkReportMissingProp)(e, t);
			}) : (i.if((0, t._)`${u} && (${(0, r.checkMissingProp)(e, l, s)})`), (0, r.reportMissingProp)(e, s), i.else());
		}
	}
	e.validatePropertyDeps = o;
	function s(e, t = e.schema) {
		let { gen: i, data: a, keyword: o, it: s } = e, c = i.name("valid");
		for (let l in t) (0, n.alwaysValidSchema)(s, t[l]) || (i.if((0, r.propertyInData)(i, a, l, s.opts.ownProperties), () => {
			let t = e.subschema({
				keyword: o,
				schemaProp: l
			}, c);
			e.mergeValidEvaluated(t, c);
		}, () => i.var(c, !0)), e.ok(c));
	}
	e.validateSchemaDeps = s, e.default = i;
})), Vx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q();
	e.default = {
		keyword: "propertyNames",
		type: "object",
		schemaType: ["object", "boolean"],
		error: {
			message: "property name must be valid",
			params: ({ params: e }) => (0, t._)`{propertyName: ${e.propertyName}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e;
			if ((0, n.alwaysValidSchema)(o, i)) return;
			let s = r.name("valid");
			r.forIn("key", a, (n) => {
				e.setParams({ propertyName: n }), e.subschema({
					keyword: "propertyNames",
					data: n,
					dataTypes: ["string"],
					propertyName: n,
					compositeRule: !0
				}, s), r.if((0, t.not)(s), () => {
					e.error(!0), o.allErrors || r.break();
				});
			}), e.ok(s);
		}
	};
})), Hx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Xb(), n = K(), r = Ub(), i = q();
	e.default = {
		keyword: "additionalProperties",
		type: ["object"],
		schemaType: ["boolean", "object"],
		allowUndefined: !0,
		trackErrors: !0,
		error: {
			message: "must NOT have additional properties",
			params: ({ params: e }) => (0, n._)`{additionalProperty: ${e.additionalProperty}}`
		},
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, errsCount: l, it: u } = e;
			/* istanbul ignore if */
			if (!l) throw Error("ajv implementation error");
			let { allErrors: d, opts: f } = u;
			if (u.props = !0, f.removeAdditional !== "all" && (0, i.alwaysValidSchema)(u, o)) return;
			let p = (0, t.allSchemaProperties)(s.properties), m = (0, t.allSchemaProperties)(s.patternProperties);
			h(), e.ok((0, n._)`${l} === ${r.default.errors}`);
			function h() {
				a.forIn("key", c, (e) => {
					!p.length && !m.length ? v(e) : a.if(g(e), () => v(e));
				});
			}
			function g(r) {
				let o;
				if (p.length > 8) {
					let e = (0, i.schemaRefOrVal)(u, s.properties, "properties");
					o = (0, t.isOwnProperty)(a, e, r);
				} else o = p.length ? (0, n.or)(...p.map((e) => (0, n._)`${r} === ${e}`)) : n.nil;
				return m.length && (o = (0, n.or)(o, ...m.map((i) => (0, n._)`${(0, t.usePattern)(e, i)}.test(${r})`))), (0, n.not)(o);
			}
			function _(e) {
				a.code((0, n._)`delete ${c}[${e}]`);
			}
			function v(t) {
				if (f.removeAdditional === "all" || f.removeAdditional && o === !1) _(t);
				else if (o === !1) e.setParams({ additionalProperty: t }), e.error(), d || a.break();
				else if (typeof o == "object" && !(0, i.alwaysValidSchema)(u, o)) {
					let r = a.name("valid");
					f.removeAdditional === "failing" ? (y(t, r, !1), a.if((0, n.not)(r), () => {
						e.reset(), _(t);
					})) : (y(t, r), d || a.if((0, n.not)(r), () => a.break()));
				}
			}
			function y(t, n, r) {
				let a = {
					keyword: "additionalProperties",
					dataProp: t,
					dataPropType: i.Type.Str
				};
				r === !1 && Object.assign(a, {
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}), e.subschema(a, n);
			}
		}
	};
})), Ux = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = nx(), n = Xb(), r = q(), i = Hx();
	e.default = {
		keyword: "properties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, it: l } = e;
			l.opts.removeAdditional === "all" && s.additionalProperties === void 0 && i.default.code(new t.KeywordCxt(l, i.default, "additionalProperties"));
			let u = (0, n.allSchemaProperties)(o);
			for (let e of u) l.definedProperties.add(e);
			l.opts.unevaluated && u.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(u), l.props));
			let d = u.filter((e) => !(0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0) return;
			let f = a.name("valid");
			for (let t of d) p(t) ? m(t) : (a.if((0, n.propertyInData)(a, c, t, l.opts.ownProperties)), m(t), l.allErrors || a.else().var(f, !0), a.endIf()), e.it.definedProperties.add(t), e.ok(f);
			function p(e) {
				return l.opts.useDefaults && !l.compositeRule && o[e].default !== void 0;
			}
			function m(t) {
				e.subschema({
					keyword: "properties",
					schemaProp: t,
					dataProp: t
				}, f);
			}
		}
	};
})), Wx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Xb(), n = K(), r = q(), i = q();
	e.default = {
		keyword: "patternProperties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, data: s, parentSchema: c, it: l } = e, { opts: u } = l, d = (0, t.allSchemaProperties)(o), f = d.filter((e) => (0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0 || f.length === d.length && (!l.opts.unevaluated || l.props === !0)) return;
			let p = u.strictSchema && !u.allowMatchingProperties && c.properties, m = a.name("valid");
			l.props !== !0 && !(l.props instanceof n.Name) && (l.props = (0, i.evaluatedPropsToName)(a, l.props));
			let { props: h } = l;
			g();
			function g() {
				for (let e of d) p && _(e), l.allErrors ? v(e) : (a.var(m, !0), v(e), a.if(m));
			}
			function _(e) {
				for (let t in p) new RegExp(e).test(t) && (0, r.checkStrictMode)(l, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
			}
			function v(r) {
				a.forIn("key", s, (o) => {
					a.if((0, n._)`${(0, t.usePattern)(e, r)}.test(${o})`, () => {
						let t = f.includes(r);
						t || e.subschema({
							keyword: "patternProperties",
							schemaProp: r,
							dataProp: o,
							dataPropType: i.Type.Str
						}, m), l.opts.unevaluated && h !== !0 ? a.assign((0, n._)`${h}[${o}]`, !0) : !t && !l.allErrors && a.if((0, n.not)(m), () => a.break());
					});
				});
			}
		}
	};
})), Gx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = q();
	e.default = {
		keyword: "not",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			if ((0, t.alwaysValidSchema)(i, r)) {
				e.fail();
				return;
			}
			let a = n.name("valid");
			e.subschema({
				keyword: "not",
				compositeRule: !0,
				createErrors: !1,
				allErrors: !1
			}, a), e.failResult(a, () => e.reset(), () => e.error());
		},
		error: { message: "must NOT be valid" }
	};
})), Kx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "anyOf",
		schemaType: "array",
		trackErrors: !0,
		code: Xb().validateUnion,
		error: { message: "must match a schema in anyOf" }
	};
})), qx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q();
	e.default = {
		keyword: "oneOf",
		schemaType: "array",
		trackErrors: !0,
		error: {
			message: "must match exactly one schema in oneOf",
			params: ({ params: e }) => (0, t._)`{passingSchemas: ${e.passing}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, it: o } = e;
			/* istanbul ignore if */
			if (!Array.isArray(i)) throw Error("ajv implementation error");
			if (o.opts.discriminator && a.discriminator) return;
			let s = i, c = r.let("valid", !1), l = r.let("passing", null), u = r.name("_valid");
			e.setParams({ passing: l }), r.block(d), e.result(c, () => e.reset(), () => e.error(!0));
			function d() {
				s.forEach((i, a) => {
					let s;
					(0, n.alwaysValidSchema)(o, i) ? r.var(u, !0) : s = e.subschema({
						keyword: "oneOf",
						schemaProp: a,
						compositeRule: !0
					}, u), a > 0 && r.if((0, t._)`${u} && ${c}`).assign(c, !1).assign(l, (0, t._)`[${l}, ${a}]`).else(), r.if(u, () => {
						r.assign(c, !0), r.assign(l, a), s && e.mergeEvaluated(s, t.Name);
					});
				});
			}
		}
	};
})), Jx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = q();
	e.default = {
		keyword: "allOf",
		schemaType: "array",
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			/* istanbul ignore if */
			if (!Array.isArray(r)) throw Error("ajv implementation error");
			let a = n.name("valid");
			r.forEach((n, r) => {
				if ((0, t.alwaysValidSchema)(i, n)) return;
				let o = e.subschema({
					keyword: "allOf",
					schemaProp: r
				}, a);
				e.ok(a), e.mergeEvaluated(o);
			});
		}
	};
})), Yx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = {
		keyword: "if",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		error: {
			message: ({ params: e }) => (0, t.str)`must match "${e.ifClause}" schema`,
			params: ({ params: e }) => (0, t._)`{failingKeyword: ${e.ifClause}}`
		},
		code(e) {
			let { gen: r, parentSchema: a, it: o } = e;
			a.then === void 0 && a.else === void 0 && (0, n.checkStrictMode)(o, "\"if\" without \"then\" and \"else\" is ignored");
			let s = i(o, "then"), c = i(o, "else");
			if (!s && !c) return;
			let l = r.let("valid", !0), u = r.name("_valid");
			if (d(), e.reset(), s && c) {
				let t = r.let("ifClause");
				e.setParams({ ifClause: t }), r.if(u, f("then", t), f("else", t));
			} else s ? r.if(u, f("then")) : r.if((0, t.not)(u), f("else"));
			e.pass(l, () => e.error(!0));
			function d() {
				let t = e.subschema({
					keyword: "if",
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}, u);
				e.mergeEvaluated(t);
			}
			function f(n, i) {
				return () => {
					let a = e.subschema({ keyword: n }, u);
					r.assign(l, u), e.mergeValidEvaluated(a, l), i ? r.assign(i, (0, t._)`${n}`) : e.setParams({ ifClause: n });
				};
			}
		}
	};
	function i(e, t) {
		let r = e.schema[t];
		return r !== void 0 && !(0, n.alwaysValidSchema)(e, r);
	}
	e.default = r;
})), Xx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = q();
	e.default = {
		keyword: ["then", "else"],
		schemaType: ["object", "boolean"],
		code({ keyword: e, parentSchema: n, it: r }) {
			n.if === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "if" is ignored`);
		}
	};
})), Zx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Fx(), n = Lx(), r = Ix(), i = Rx(), a = zx(), o = Bx(), s = Vx(), c = Hx(), l = Ux(), u = Wx(), d = Gx(), f = Kx(), p = qx(), m = Jx(), h = Yx(), g = Xx();
	function _(e = !1) {
		let _ = [
			d.default,
			f.default,
			p.default,
			m.default,
			h.default,
			g.default,
			s.default,
			c.default,
			o.default,
			l.default,
			u.default
		];
		return e ? _.push(n.default, i.default) : _.push(t.default, r.default), _.push(a.default), _;
	}
	e.default = _;
})), Qx = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicAnchor = void 0;
	var t = K(), n = Ub(), r = ax(), i = bx(), a = {
		keyword: "$dynamicAnchor",
		schemaType: "string",
		code: (e) => o(e, e.schema)
	};
	function o(e, r) {
		let { gen: i, it: a } = e;
		a.schemaEnv.root.dynamicAnchors[r] = !0;
		let o = (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(r)}`, c = a.errSchemaPath === "#" ? a.validateName : s(e);
		i.if((0, t._)`!${o}`, () => i.assign(o, c));
	}
	e.dynamicAnchor = o;
	function s(e) {
		let { schemaEnv: t, schema: n, self: a } = e.it, { root: o, baseId: s, localRefs: c, meta: l } = t.root, { schemaId: u } = a.opts, d = new r.SchemaEnv({
			schema: n,
			schemaId: u,
			root: o,
			baseId: s,
			localRefs: c,
			meta: l
		});
		return r.compileSchema.call(a, d), (0, i.getValidate)(e, d);
	}
	e.default = a;
})), $x = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicRef = void 0;
	var t = K(), n = Ub(), r = bx(), i = {
		keyword: "$dynamicRef",
		schemaType: "string",
		code: (e) => a(e, e.schema)
	};
	function a(e, i) {
		let { gen: a, keyword: o, it: s } = e;
		if (i[0] !== "#") throw Error(`"${o}" only supports hash fragment reference`);
		let c = i.slice(1);
		if (s.allErrors) l();
		else {
			let t = a.let("valid", !1);
			l(t), e.ok(t);
		}
		function l(e) {
			if (s.schemaEnv.root.dynamicAnchors[c]) {
				let r = a.let("_v", (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(c)}`);
				a.if(r, u(r, e), u(s.validateName, e));
			} else u(s.validateName, e)();
		}
		function u(t, n) {
			return n ? () => a.block(() => {
				(0, r.callRef)(e, t), a.let(n, !0);
			}) : () => (0, r.callRef)(e, t);
		}
	}
	e.dynamicRef = a, e.default = i;
})), eS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Qx(), n = q();
	e.default = {
		keyword: "$recursiveAnchor",
		schemaType: "boolean",
		code(e) {
			e.schema ? (0, t.dynamicAnchor)(e, "") : (0, n.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
		}
	};
})), tS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = $x();
	e.default = {
		keyword: "$recursiveRef",
		schemaType: "string",
		code: (e) => (0, t.dynamicRef)(e, e.schema)
	};
})), nS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Qx(), n = $x(), r = eS(), i = tS();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default
	];
})), rS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Bx();
	e.default = {
		keyword: "dependentRequired",
		type: "object",
		schemaType: "object",
		error: t.error,
		code: (e) => (0, t.validatePropertyDeps)(e)
	};
})), iS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Bx();
	e.default = {
		keyword: "dependentSchemas",
		type: "object",
		schemaType: "object",
		code: (e) => (0, t.validateSchemaDeps)(e)
	};
})), aS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = q();
	e.default = {
		keyword: ["maxContains", "minContains"],
		type: "array",
		schemaType: "number",
		code({ keyword: e, parentSchema: n, it: r }) {
			n.contains === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "contains" is ignored`);
		}
	};
})), oS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = rS(), n = iS(), r = aS();
	e.default = [
		t.default,
		n.default,
		r.default
	];
})), sS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q(), r = Ub();
	e.default = {
		keyword: "unevaluatedProperties",
		type: "object",
		schemaType: ["boolean", "object"],
		trackErrors: !0,
		error: {
			message: "must NOT have unevaluated properties",
			params: ({ params: e }) => (0, t._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
		},
		code(e) {
			let { gen: i, schema: a, data: o, errsCount: s, it: c } = e;
			/* istanbul ignore if */
			if (!s) throw Error("ajv implementation error");
			let { allErrors: l, props: u } = c;
			u instanceof t.Name ? i.if((0, t._)`${u} !== true`, () => i.forIn("key", o, (e) => i.if(f(u, e), () => d(e)))) : u !== !0 && i.forIn("key", o, (e) => u === void 0 ? d(e) : i.if(p(u, e), () => d(e))), c.props = !0, e.ok((0, t._)`${s} === ${r.default.errors}`);
			function d(r) {
				if (a === !1) e.setParams({ unevaluatedProperty: r }), e.error(), l || i.break();
				else if (!(0, n.alwaysValidSchema)(c, a)) {
					let a = i.name("valid");
					e.subschema({
						keyword: "unevaluatedProperties",
						dataProp: r,
						dataPropType: n.Type.Str
					}, a), l || i.if((0, t.not)(a), () => i.break());
				}
			}
			function f(e, n) {
				return (0, t._)`!${e} || !${e}[${n}]`;
			}
			function p(e, n) {
				let r = [];
				for (let i in e) e[i] === !0 && r.push((0, t._)`${n} !== ${i}`);
				return (0, t.and)(...r);
			}
		}
	};
})), cS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = q();
	e.default = {
		keyword: "unevaluatedItems",
		type: "array",
		schemaType: ["boolean", "object"],
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e, s = o.items || 0;
			if (s === !0) return;
			let c = r.const("len", (0, t._)`${a}.length`);
			if (i === !1) e.setParams({ len: s }), e.fail((0, t._)`${c} > ${s}`);
			else if (typeof i == "object" && !(0, n.alwaysValidSchema)(o, i)) {
				let n = r.var("valid", (0, t._)`${c} <= ${s}`);
				r.if((0, t.not)(n), () => l(n, s)), e.ok(n);
			}
			o.items = !0;
			function l(i, a) {
				r.forRange("i", a, c, (a) => {
					e.subschema({
						keyword: "unevaluatedItems",
						dataProp: a,
						dataPropType: n.Type.Num
					}, i), o.allErrors || r.if((0, t.not)(i), () => r.break());
				});
			}
		}
	};
})), lS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = sS(), n = cS();
	e.default = [t.default, n.default];
})), uS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K();
	e.default = {
		keyword: "format",
		type: ["number", "string"],
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must match format "${e}"`,
			params: ({ schemaCode: e }) => (0, t._)`{format: ${e}}`
		},
		code(e, n) {
			let { gen: r, data: i, $data: a, schema: o, schemaCode: s, it: c } = e, { opts: l, errSchemaPath: u, schemaEnv: d, self: f } = c;
			if (!l.validateFormats) return;
			a ? p() : m();
			function p() {
				let a = r.scopeValue("formats", {
					ref: f.formats,
					code: l.code.formats
				}), o = r.const("fDef", (0, t._)`${a}[${s}]`), c = r.let("fType"), u = r.let("format");
				r.if((0, t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`, () => r.assign(c, (0, t._)`${o}.type || "string"`).assign(u, (0, t._)`${o}.validate`), () => r.assign(c, (0, t._)`"string"`).assign(u, o)), e.fail$data((0, t.or)(p(), m()));
				function p() {
					return l.strictSchema === !1 ? t.nil : (0, t._)`${s} && !${u}`;
				}
				function m() {
					let e = d.$async ? (0, t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))` : (0, t._)`${u}(${i})`, r = (0, t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;
					return (0, t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`;
				}
			}
			function m() {
				let a = f.formats[o];
				if (!a) {
					m();
					return;
				}
				if (a === !0) return;
				let [s, c, p] = h(a);
				s === n && e.pass(g());
				function m() {
					if (l.strictSchema === !1) {
						f.logger.warn(e());
						return;
					}
					throw Error(e());
					function e() {
						return `unknown format "${o}" ignored in schema at path "${u}"`;
					}
				}
				function h(e) {
					let n = e instanceof RegExp ? (0, t.regexpCode)(e) : l.code.formats ? (0, t._)`${l.code.formats}${(0, t.getProperty)(o)}` : void 0, i = r.scopeValue("formats", {
						key: o,
						ref: e,
						code: n
					});
					return typeof e == "object" && !(e instanceof RegExp) ? [
						e.type || "string",
						e.validate,
						(0, t._)`${i}.validate`
					] : [
						"string",
						e,
						i
					];
				}
				function g() {
					if (typeof a == "object" && !(a instanceof RegExp) && a.async) {
						if (!d.$async) throw Error("async format in sync schema");
						return (0, t._)`await ${p}(${i})`;
					}
					return typeof c == "function" ? (0, t._)`${p}(${i})` : (0, t._)`${p}.test(${i})`;
				}
			}
		}
	};
})), dS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [uS().default];
})), fS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	], e.contentVocabulary = [
		"contentMediaType",
		"contentEncoding",
		"contentSchema"
	];
})), pS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = xx(), n = Px(), r = Zx(), i = nS(), a = oS(), o = lS(), s = dS(), c = fS();
	e.default = [
		i.default,
		t.default,
		n.default,
		(0, r.default)(!0),
		s.default,
		c.metadataVocabulary,
		c.contentVocabulary,
		a.default,
		o.default
	];
})), mS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0;
	var t;
	(function(e) {
		e.Tag = "tag", e.Mapping = "mapping";
	})(t || (e.DiscrError = t = {}));
})), hS = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = K(), n = mS(), r = ax(), i = ix(), a = q();
	e.default = {
		keyword: "discriminator",
		type: "object",
		schemaType: "object",
		error: {
			message: ({ params: { discrError: e, tagName: t } }) => e === n.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
			params: ({ params: { discrError: e, tag: n, tagName: r } }) => (0, t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`
		},
		code(e) {
			let { gen: o, data: s, schema: c, parentSchema: l, it: u } = e, { oneOf: d } = l;
			if (!u.opts.discriminator) throw Error("discriminator: requires discriminator option");
			let f = c.propertyName;
			if (typeof f != "string") throw Error("discriminator: requires propertyName");
			if (c.mapping) throw Error("discriminator: mapping is not supported");
			if (!d) throw Error("discriminator: requires oneOf keyword");
			let p = o.let("valid", !1), m = o.const("tag", (0, t._)`${s}${(0, t.getProperty)(f)}`);
			o.if((0, t._)`typeof ${m} == "string"`, () => h(), () => e.error(!1, {
				discrError: n.DiscrError.Tag,
				tag: m,
				tagName: f
			})), e.ok(p);
			function h() {
				let r = _();
				o.if(!1);
				for (let e in r) o.elseIf((0, t._)`${m} === ${e}`), o.assign(p, g(r[e]));
				o.else(), e.error(!1, {
					discrError: n.DiscrError.Mapping,
					tag: m,
					tagName: f
				}), o.endIf();
			}
			function g(n) {
				let r = o.name("valid"), i = e.subschema({
					keyword: "oneOf",
					schemaProp: n
				}, r);
				return e.mergeEvaluated(i, t.Name), r;
			}
			function _() {
				let e = {}, t = o(l), n = !0;
				for (let e = 0; e < d.length; e++) {
					let c = d[e];
					if (c?.$ref && !(0, a.schemaHasRulesButRef)(c, u.self.RULES)) {
						let e = c.$ref;
						if (c = r.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof r.SchemaEnv && (c = c.schema), c === void 0) throw new i.default(u.opts.uriResolver, u.baseId, e);
					}
					let l = c?.properties?.[f];
					if (typeof l != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);
					n &&= t || o(c), s(l, e);
				}
				if (!n) throw Error(`discriminator: "${f}" must be required`);
				return e;
				function o({ required: e }) {
					return Array.isArray(e) && e.includes(f);
				}
				function s(e, t) {
					if (e.const) c(e.const, t);
					else if (e.enum) for (let n of e.enum) c(n, t);
					else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`);
				}
				function c(t, n) {
					if (typeof t != "string" || t in e) throw Error(`discriminator: "${f}" values must be unique strings`);
					e[t] = n;
				}
			}
		}
	};
})), gS = /* @__PURE__ */ c({
	$comment: () => wS,
	$dynamicAnchor: () => bS,
	$id: () => vS,
	$schema: () => _S,
	$vocabulary: () => yS,
	allOf: () => SS,
	default: () => ES,
	properties: () => TS,
	title: () => xS,
	type: () => CS
}), _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS = o((() => {
	_S = "https://json-schema.org/draft/2020-12/schema", vS = "https://json-schema.org/draft/2020-12/schema", yS = {
		"https://json-schema.org/draft/2020-12/vocab/core": !0,
		"https://json-schema.org/draft/2020-12/vocab/applicator": !0,
		"https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
		"https://json-schema.org/draft/2020-12/vocab/validation": !0,
		"https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
		"https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
		"https://json-schema.org/draft/2020-12/vocab/content": !0
	}, bS = "meta", xS = "Core and Validation specifications meta-schema", SS = [
		{ $ref: "meta/core" },
		{ $ref: "meta/applicator" },
		{ $ref: "meta/unevaluated" },
		{ $ref: "meta/validation" },
		{ $ref: "meta/meta-data" },
		{ $ref: "meta/format-annotation" },
		{ $ref: "meta/content" }
	], CS = ["object", "boolean"], wS = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", TS = {
		definitions: {
			$comment: "\"definitions\" has been replaced by \"$defs\".",
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			deprecated: !0,
			default: {}
		},
		dependencies: {
			$comment: "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
			type: "object",
			additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] },
			deprecated: !0,
			default: {}
		},
		$recursiveAnchor: {
			$comment: "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
			$ref: "meta/core#/$defs/anchorString",
			deprecated: !0
		},
		$recursiveRef: {
			$comment: "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
			$ref: "meta/core#/$defs/uriReferenceString",
			deprecated: !0
		}
	}, ES = {
		$schema: _S,
		$id: vS,
		$vocabulary: yS,
		$dynamicAnchor: bS,
		title: xS,
		allOf: SS,
		type: CS,
		$comment: wS,
		properties: TS
	};
})), OS = /* @__PURE__ */ c({
	$defs: () => IS,
	$dynamicAnchor: () => MS,
	$id: () => AS,
	$schema: () => kS,
	$vocabulary: () => jS,
	default: () => LS,
	properties: () => FS,
	title: () => NS,
	type: () => PS
}), kS, AS, jS, MS, NS, PS, FS, IS, LS, RS = o((() => {
	kS = "https://json-schema.org/draft/2020-12/schema", AS = "https://json-schema.org/draft/2020-12/meta/applicator", jS = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, MS = "meta", NS = "Applicator vocabulary meta-schema", PS = ["object", "boolean"], FS = {
		prefixItems: { $ref: "#/$defs/schemaArray" },
		items: { $dynamicRef: "#meta" },
		contains: { $dynamicRef: "#meta" },
		additionalProperties: { $dynamicRef: "#meta" },
		properties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependentSchemas: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		propertyNames: { $dynamicRef: "#meta" },
		if: { $dynamicRef: "#meta" },
		then: { $dynamicRef: "#meta" },
		else: { $dynamicRef: "#meta" },
		allOf: { $ref: "#/$defs/schemaArray" },
		anyOf: { $ref: "#/$defs/schemaArray" },
		oneOf: { $ref: "#/$defs/schemaArray" },
		not: { $dynamicRef: "#meta" }
	}, IS = { schemaArray: {
		type: "array",
		minItems: 1,
		items: { $dynamicRef: "#meta" }
	} }, LS = {
		$schema: kS,
		$id: AS,
		$vocabulary: jS,
		$dynamicAnchor: MS,
		title: NS,
		type: PS,
		properties: FS,
		$defs: IS
	};
})), zS = /* @__PURE__ */ c({
	$dynamicAnchor: () => US,
	$id: () => VS,
	$schema: () => BS,
	$vocabulary: () => HS,
	default: () => qS,
	properties: () => KS,
	title: () => WS,
	type: () => GS
}), BS, VS, HS, US, WS, GS, KS, qS, JS = o((() => {
	BS = "https://json-schema.org/draft/2020-12/schema", VS = "https://json-schema.org/draft/2020-12/meta/unevaluated", HS = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, US = "meta", WS = "Unevaluated applicator vocabulary meta-schema", GS = ["object", "boolean"], KS = {
		unevaluatedItems: { $dynamicRef: "#meta" },
		unevaluatedProperties: { $dynamicRef: "#meta" }
	}, qS = {
		$schema: BS,
		$id: VS,
		$vocabulary: HS,
		$dynamicAnchor: US,
		title: WS,
		type: GS,
		properties: KS
	};
})), YS = /* @__PURE__ */ c({
	$dynamicAnchor: () => $S,
	$id: () => ZS,
	$schema: () => XS,
	$vocabulary: () => QS,
	default: () => rC,
	properties: () => nC,
	title: () => eC,
	type: () => tC
}), XS, ZS, QS, $S, eC, tC, nC, rC, iC = o((() => {
	XS = "https://json-schema.org/draft/2020-12/schema", ZS = "https://json-schema.org/draft/2020-12/meta/content", QS = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, $S = "meta", eC = "Content vocabulary meta-schema", tC = ["object", "boolean"], nC = {
		contentEncoding: { type: "string" },
		contentMediaType: { type: "string" },
		contentSchema: { $dynamicRef: "#meta" }
	}, rC = {
		$schema: XS,
		$id: ZS,
		$vocabulary: QS,
		$dynamicAnchor: $S,
		title: eC,
		type: tC,
		properties: nC
	};
})), aC = /* @__PURE__ */ c({
	$defs: () => pC,
	$dynamicAnchor: () => lC,
	$id: () => sC,
	$schema: () => oC,
	$vocabulary: () => cC,
	default: () => mC,
	properties: () => fC,
	title: () => uC,
	type: () => dC
}), oC, sC, cC, lC, uC, dC, fC, pC, mC, hC = o((() => {
	oC = "https://json-schema.org/draft/2020-12/schema", sC = "https://json-schema.org/draft/2020-12/meta/core", cC = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, lC = "meta", uC = "Core vocabulary meta-schema", dC = ["object", "boolean"], fC = {
		$id: {
			$ref: "#/$defs/uriReferenceString",
			$comment: "Non-empty fragments not allowed.",
			pattern: "^[^#]*#?$"
		},
		$schema: { $ref: "#/$defs/uriString" },
		$ref: { $ref: "#/$defs/uriReferenceString" },
		$anchor: { $ref: "#/$defs/anchorString" },
		$dynamicRef: { $ref: "#/$defs/uriReferenceString" },
		$dynamicAnchor: { $ref: "#/$defs/anchorString" },
		$vocabulary: {
			type: "object",
			propertyNames: { $ref: "#/$defs/uriString" },
			additionalProperties: { type: "boolean" }
		},
		$comment: { type: "string" },
		$defs: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" }
		}
	}, pC = {
		anchorString: {
			type: "string",
			pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
		},
		uriString: {
			type: "string",
			format: "uri"
		},
		uriReferenceString: {
			type: "string",
			format: "uri-reference"
		}
	}, mC = {
		$schema: oC,
		$id: sC,
		$vocabulary: cC,
		$dynamicAnchor: lC,
		title: uC,
		type: dC,
		properties: fC,
		$defs: pC
	};
})), gC = /* @__PURE__ */ c({
	$dynamicAnchor: () => bC,
	$id: () => vC,
	$schema: () => _C,
	$vocabulary: () => yC,
	default: () => wC,
	properties: () => CC,
	title: () => xC,
	type: () => SC
}), _C, vC, yC, bC, xC, SC, CC, wC, TC = o((() => {
	_C = "https://json-schema.org/draft/2020-12/schema", vC = "https://json-schema.org/draft/2020-12/meta/format-annotation", yC = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, bC = "meta", xC = "Format vocabulary meta-schema for annotation results", SC = ["object", "boolean"], CC = { format: { type: "string" } }, wC = {
		$schema: _C,
		$id: vC,
		$vocabulary: yC,
		$dynamicAnchor: bC,
		title: xC,
		type: SC,
		properties: CC
	};
})), EC = /* @__PURE__ */ c({
	$dynamicAnchor: () => AC,
	$id: () => OC,
	$schema: () => DC,
	$vocabulary: () => kC,
	default: () => PC,
	properties: () => NC,
	title: () => jC,
	type: () => MC
}), DC, OC, kC, AC, jC, MC, NC, PC, FC = o((() => {
	DC = "https://json-schema.org/draft/2020-12/schema", OC = "https://json-schema.org/draft/2020-12/meta/meta-data", kC = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, AC = "meta", jC = "Meta-data vocabulary meta-schema", MC = ["object", "boolean"], NC = {
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		deprecated: {
			type: "boolean",
			default: !1
		},
		readOnly: {
			type: "boolean",
			default: !1
		},
		writeOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		}
	}, PC = {
		$schema: DC,
		$id: OC,
		$vocabulary: kC,
		$dynamicAnchor: AC,
		title: jC,
		type: MC,
		properties: NC
	};
})), IC = /* @__PURE__ */ c({
	$defs: () => WC,
	$dynamicAnchor: () => BC,
	$id: () => RC,
	$schema: () => LC,
	$vocabulary: () => zC,
	default: () => GC,
	properties: () => UC,
	title: () => VC,
	type: () => HC
}), LC, RC, zC, BC, VC, HC, UC, WC, GC, KC = o((() => {
	LC = "https://json-schema.org/draft/2020-12/schema", RC = "https://json-schema.org/draft/2020-12/meta/validation", zC = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, BC = "meta", VC = "Validation vocabulary meta-schema", HC = ["object", "boolean"], UC = {
		type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/$defs/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		const: !0,
		enum: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/$defs/nonNegativeInteger" },
		minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		maxItems: { $ref: "#/$defs/nonNegativeInteger" },
		minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		maxContains: { $ref: "#/$defs/nonNegativeInteger" },
		minContains: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 1
		},
		maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
		minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		required: { $ref: "#/$defs/stringArray" },
		dependentRequired: {
			type: "object",
			additionalProperties: { $ref: "#/$defs/stringArray" }
		}
	}, WC = {
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 0
		},
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, GC = {
		$schema: LC,
		$id: RC,
		$vocabulary: zC,
		$dynamicAnchor: BC,
		title: VC,
		type: HC,
		properties: UC,
		$defs: WC
	};
})), qC = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (DS(), d(gS).default), n = (RS(), d(OS).default), r = (JS(), d(zS).default), i = (iC(), d(YS).default), a = (hC(), d(aC).default), o = (TC(), d(gC).default), s = (FC(), d(EC).default), c = (KC(), d(IC).default), l = ["/properties"];
	function u(e) {
		return [
			t,
			n,
			r,
			i,
			a,
			u(this, o),
			s,
			u(this, c)
		].forEach((e) => this.addMetaSchema(e, void 0, !1)), this;
		function u(t, n) {
			return e ? t.$dataMetaSchema(n, l) : n;
		}
	}
	e.default = u;
})), JC = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
	var n = vx(), r = pS(), i = hS(), a = qC(), o = "https://json-schema.org/draft/2020-12/schema", s = class extends n.default {
		constructor(e = {}) {
			super({
				...e,
				dynamicRef: !0,
				next: !0,
				unevaluated: !0
			});
		}
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			super._addDefaultMetaSchema();
			let { $data: e, meta: t } = this.opts;
			t && (a.default.call(this, e), this.refs["http://json-schema.org/schema"] = o);
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
		}
	};
	e.Ajv2020 = s, t.exports = e = s, t.exports.Ajv2020 = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var c = nx();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return c.KeywordCxt;
		}
	});
	var l = K();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return l._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return l.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return l.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return l.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return l.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return l.CodeGen;
		}
	});
	var u = rx();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return u.default;
		}
	});
	var d = ix();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return d.default;
		}
	});
})), YC = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
	function t(e, t) {
		return {
			validate: e,
			compare: t
		};
	}
	e.fullFormats = {
		date: t(a, o),
		time: t(c(!0), l),
		"date-time": t(f(!0), p),
		"iso-time": t(c(), u),
		"iso-date-time": t(f(), m),
		duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
		uri: _,
		"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
		"uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
		url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
		email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
		hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
		ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
		ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
		regex: C,
		uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
		"json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
		"json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
		"relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
		byte: y,
		int32: {
			type: "number",
			validate: S
		},
		int64: {
			type: "number",
			validate: ee
		},
		float: {
			type: "number",
			validate: te
		},
		double: {
			type: "number",
			validate: te
		},
		password: !0,
		binary: !0
	}, e.fastFormats = {
		...e.fullFormats,
		date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
		time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
		"date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
		"iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
		"iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
		uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
		"uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
		email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
	}, e.formatNames = Object.keys(e.fullFormats);
	function n(e) {
		return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
	}
	var r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, i = [
		0,
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];
	function a(e) {
		let t = r.exec(e);
		if (!t) return !1;
		let a = +t[1], o = +t[2], s = +t[3];
		return o >= 1 && o <= 12 && s >= 1 && s <= (o === 2 && n(a) ? 29 : i[o]);
	}
	function o(e, t) {
		if (e && t) return e > t ? 1 : e < t ? -1 : 0;
	}
	var s = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
	function c(e) {
		return function(t) {
			let n = s.exec(t);
			if (!n) return !1;
			let r = +n[1], i = +n[2], a = +n[3], o = n[4], c = n[5] === "-" ? -1 : 1, l = +(n[6] || 0), u = +(n[7] || 0);
			if (l > 23 || u > 59 || e && !o) return !1;
			if (r <= 23 && i <= 59 && a < 60) return !0;
			let d = i - u * c, f = r - l * c - +(d < 0);
			return (f === 23 || f === -1) && (d === 59 || d === -1) && a < 61;
		};
	}
	function l(e, t) {
		if (!(e && t)) return;
		let n = (/* @__PURE__ */ new Date("2020-01-01T" + e)).valueOf(), r = (/* @__PURE__ */ new Date("2020-01-01T" + t)).valueOf();
		if (n && r) return n - r;
	}
	function u(e, t) {
		if (!(e && t)) return;
		let n = s.exec(e), r = s.exec(t);
		if (n && r) return e = n[1] + n[2] + n[3], t = r[1] + r[2] + r[3], e > t ? 1 : e < t ? -1 : 0;
	}
	var d = /t|\s/i;
	function f(e) {
		let t = c(e);
		return function(e) {
			let n = e.split(d);
			return n.length === 2 && a(n[0]) && t(n[1]);
		};
	}
	function p(e, t) {
		if (!(e && t)) return;
		let n = new Date(e).valueOf(), r = new Date(t).valueOf();
		if (n && r) return n - r;
	}
	function m(e, t) {
		if (!(e && t)) return;
		let [n, r] = e.split(d), [i, a] = t.split(d), s = o(n, i);
		if (s !== void 0) return s || l(r, a);
	}
	var h = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function _(e) {
		return h.test(e) && g.test(e);
	}
	var v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function y(e) {
		return v.lastIndex = 0, v.test(e);
	}
	var b = -(2 ** 31), x = 2 ** 31 - 1;
	function S(e) {
		return Number.isInteger(e) && e <= x && e >= b;
	}
	function ee(e) {
		return Number.isInteger(e);
	}
	function te() {
		return !0;
	}
	var ne = /[^\\]\\Z/;
	function C(e) {
		if (ne.test(e)) return !1;
		try {
			return new RegExp(e), !0;
		} catch {
			return !1;
		}
	}
})), XC = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = xx(), n = Px(), r = Zx(), i = dS(), a = fS();
	e.default = [
		t.default,
		n.default,
		(0, r.default)(),
		i.default,
		a.metadataVocabulary,
		a.contentVocabulary
	];
})), ZC = /* @__PURE__ */ c({
	$id: () => $C,
	$schema: () => QC,
	default: () => iw,
	definitions: () => tw,
	properties: () => rw,
	title: () => ew,
	type: () => nw
}), QC, $C, ew, tw, nw, rw, iw, aw = o((() => {
	QC = "http://json-schema.org/draft-07/schema#", $C = "http://json-schema.org/draft-07/schema#", ew = "Core schema meta-schema", tw = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: { $ref: "#" }
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, nw = ["object", "boolean"], rw = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: { type: "string" },
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		readOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/definitions/nonNegativeInteger" },
		minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: { $ref: "#" },
		items: {
			anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
			default: !0
		},
		maxItems: { $ref: "#/definitions/nonNegativeInteger" },
		minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		contains: { $ref: "#" },
		maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
		minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		required: { $ref: "#/definitions/stringArray" },
		additionalProperties: { $ref: "#" },
		definitions: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		properties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependencies: {
			type: "object",
			additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
		},
		propertyNames: { $ref: "#" },
		const: !0,
		enum: {
			type: "array",
			items: !0,
			minItems: 1,
			uniqueItems: !0
		},
		type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/definitions/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		format: { type: "string" },
		contentMediaType: { type: "string" },
		contentEncoding: { type: "string" },
		if: { $ref: "#" },
		then: { $ref: "#" },
		else: { $ref: "#" },
		allOf: { $ref: "#/definitions/schemaArray" },
		anyOf: { $ref: "#/definitions/schemaArray" },
		oneOf: { $ref: "#/definitions/schemaArray" },
		not: { $ref: "#" }
	}, iw = {
		$schema: QC,
		$id: $C,
		title: ew,
		definitions: tw,
		type: nw,
		properties: rw,
		default: !0
	};
})), ow = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
	var n = vx(), r = XC(), i = hS(), a = (aw(), d(ZC).default), o = ["/properties"], s = "http://json-schema.org/draft-07/schema", c = class extends n.default {
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			if (super._addDefaultMetaSchema(), !this.opts.meta) return;
			let e = this.opts.$data ? this.$dataMetaSchema(a, o) : a;
			this.addMetaSchema(e, s, !1), this.refs["http://json-schema.org/schema"] = s;
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
		}
	};
	e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = c;
	var l = nx();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return l.KeywordCxt;
		}
	});
	var u = K();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return u._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return u.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return u.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return u.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return u.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return u.CodeGen;
		}
	});
	var f = rx();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return f.default;
		}
	});
	var p = ix();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return p.default;
		}
	});
})), sw = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
	var t = ow(), n = K(), r = n.operators, i = {
		formatMaximum: {
			okStr: "<=",
			ok: r.LTE,
			fail: r.GT
		},
		formatMinimum: {
			okStr: ">=",
			ok: r.GTE,
			fail: r.LT
		},
		formatExclusiveMaximum: {
			okStr: "<",
			ok: r.LT,
			fail: r.GTE
		},
		formatExclusiveMinimum: {
			okStr: ">",
			ok: r.GT,
			fail: r.LTE
		}
	};
	e.formatLimitDefinition = {
		keyword: Object.keys(i),
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: t }) => (0, n.str)`should be ${i[e].okStr} ${t}`,
			params: ({ keyword: e, schemaCode: t }) => (0, n._)`{comparison: ${i[e].okStr}, limit: ${t}}`
		},
		code(e) {
			let { gen: r, data: a, schemaCode: o, keyword: s, it: c } = e, { opts: l, self: u } = c;
			if (!l.validateFormats) return;
			let d = new t.KeywordCxt(c, u.RULES.all.format.definition, "format");
			d.$data ? f() : p();
			function f() {
				let t = r.scopeValue("formats", {
					ref: u.formats,
					code: l.code.formats
				}), i = r.const("fmt", (0, n._)`${t}[${d.schemaCode}]`);
				e.fail$data((0, n.or)((0, n._)`typeof ${i} != "object"`, (0, n._)`${i} instanceof RegExp`, (0, n._)`typeof ${i}.compare != "function"`, m(i)));
			}
			function p() {
				let t = d.schema, i = u.formats[t];
				if (!i || i === !0) return;
				if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function") throw Error(`"${s}": format "${t}" does not define "compare" function`);
				let a = r.scopeValue("formats", {
					key: t,
					ref: i,
					code: l.code.formats ? (0, n._)`${l.code.formats}${(0, n.getProperty)(t)}` : void 0
				});
				e.fail$data(m(a));
			}
			function m(e) {
				return (0, n._)`${e}.compare(${a}, ${o}) ${i[s].fail} 0`;
			}
		},
		dependencies: ["format"]
	}, e.default = (t) => (t.addKeyword(e.formatLimitDefinition), t);
})), cw = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = YC(), r = sw(), i = K(), a = new i.Name("fullFormats"), o = new i.Name("fastFormats"), s = (e, t = { keywords: !0 }) => {
		if (Array.isArray(t)) return c(e, t, n.fullFormats, a), e;
		let [i, s] = t.mode === "fast" ? [n.fastFormats, o] : [n.fullFormats, a];
		return c(e, t.formats || n.formatNames, i, s), t.keywords && (0, r.default)(e), e;
	};
	s.get = (e, t = "full") => {
		let r = (t === "fast" ? n.fastFormats : n.fullFormats)[e];
		if (!r) throw Error(`Unknown format "${e}"`);
		return r;
	};
	function c(e, t, n, r) {
		var a;
		(a = e.opts.code).formats ?? (a.formats = (0, i._)`require("ajv-formats/dist/formats").${r}`);
		for (let r of t) e.addFormat(r, n[r]);
	}
	t.exports = e = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
})), lw = JC(), uw = /* @__PURE__ */ u(cw(), 1), dw = () => {
	let e = new lw.Ajv2020({
		strict: !0,
		allErrors: !0,
		keywords: ["x-homeplan"],
		strictTypes: !1
	});
	return (0, uw.default)(e), e;
}, fw, pw = () => (fw ??= dw(), fw), mw = (e) => pw().compile(e), hw = {
	general: { title: "General" },
	template: { title: "Template" },
	staircase: { title: "Staircase" },
	placement: { title: "Placement" },
	size: { title: "Size" },
	slab: { title: "Slab" },
	emitter: { title: "Emitter" },
	light: { title: "Light" },
	appearance: { title: "Appearance" },
	environment: { title: "Environment" },
	profile: { title: "Profile" },
	materials: { title: "Materials" },
	ribs: { title: "Ribs" }
}, gw = Object.keys(hw), _w = (...e) => ({ groups: [...e].sort((e, t) => gw.indexOf(e) - gw.indexOf(t)).map((e) => ({
	id: e,
	title: hw[e].title
})) }), vw = V.Object({
	id: oy,
	type: V.Literal("rectangle", {
		readOnly: !0,
		...H({ hidden: !0 })
	}),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 1
	}),
	rotationDeg: sy({
		title: "Rotation",
		group: "placement",
		order: 2
	}),
	widthMm: U({
		title: "Width",
		exclusiveMinimum: 0,
		maximum: 2e5,
		group: "size",
		order: 3,
		inlineLabel: "W"
	}),
	heightMm: U({
		title: "Depth",
		exclusiveMinimum: 0,
		maximum: 2e5,
		group: "size",
		order: 4,
		inlineLabel: "D"
	})
}, {
	additionalProperties: !1,
	title: "Rectangle",
	...H({ groups: _w("placement", "size").groups })
}), yw = V.Object({
	id: oy,
	type: V.Literal("circle", {
		readOnly: !0,
		...H({ hidden: !0 })
	}),
	positionMm: cy({
		title: "Center",
		group: "placement",
		order: 1
	}),
	radiusMm: U({
		title: "Radius",
		exclusiveMinimum: 0,
		maximum: 1e5,
		group: "size",
		order: 3
	})
}, {
	additionalProperties: !1,
	title: "Circle",
	...H({ groups: _w("placement", "size").groups })
}), bw = V.Object({
	id: oy,
	x: V.Number(),
	y: V.Number()
}, { additionalProperties: !1 }), xw = V.Object({
	id: oy,
	type: V.Literal("polygon", {
		readOnly: !0,
		...H({ hidden: !0 })
	}),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 1
	}),
	rotationDeg: sy({
		title: "Rotation",
		group: "placement",
		order: 2
	}),
	vertices: V.Array(bw, {
		minItems: 3,
		...H({ hidden: !0 })
	})
}, {
	additionalProperties: !1,
	title: "Polygon",
	...H({ groups: _w("placement", "size").groups })
}), Sw = V.Union([
	vw,
	yw,
	xw
]), Cw = V.Object({
	id: oy,
	name: dy(),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 1
	}),
	rotationDeg: sy({
		title: "Rotation",
		group: "placement",
		order: 2
	}),
	material: hy({
		title: "Material",
		group: "appearance",
		order: 1
	}),
	shapes: V.Array(Sw, {
		minItems: 1,
		...H({ hidden: !0 })
	}),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Carpet",
	...H({ groups: _w("general", "placement", "appearance").groups })
}), ww = {
	kind: uy([["swirl", "Swirl"], ["vapour", "Vapour"]], {
		title: "Kind",
		default: "swirl",
		group: "general",
		order: 1
	}),
	enabled: V.Boolean({
		title: "Enabled",
		default: !0,
		description: "Off never plays; in the Home Assistant viewer a binding decides when it runs",
		...H({
			editor: "toggle",
			group: "general",
			order: 2
		})
	}),
	direction: uy([["up", "Up"], ["forward", "Forward"]], {
		title: "Direction",
		default: "up",
		group: "placement",
		order: 1
	}),
	offsetMm: V.Object({
		x: U({
			title: "Right",
			inlineLabel: "R",
			minimum: -5e3,
			maximum: 5e3,
			order: 1
		}),
		y: U({
			title: "Forward",
			inlineLabel: "F",
			minimum: -5e3,
			maximum: 5e3,
			order: 2
		}),
		h: U({
			title: "Up",
			inlineLabel: "U",
			minimum: -5e3,
			maximum: 5e3,
			order: 3
		})
	}, {
		additionalProperties: !1,
		title: "Offset",
		description: "From the middle of the object's top (Up) or front (Forward), in the object's own axes",
		...H({
			group: "placement",
			order: 2
		})
	}),
	color: ly({
		title: "Colour",
		group: "appearance",
		order: 1
	}),
	sizeMm: U({
		title: "Size",
		minimum: 100,
		maximum: 3e3,
		default: 600,
		group: "appearance",
		order: 2
	})
}, Tw = V.Object({
	id: oy,
	...ww
}, {
	additionalProperties: !1,
	title: "Effect",
	...H({ groups: _w("general", "placement", "appearance").groups })
}), Ew = V.Object(ww, { additionalProperties: !1 }), Dw = {
	templateId: V.String({
		minLength: 1,
		readOnly: !0,
		...H({ hidden: !0 })
	}),
	templateVersion: V.Integer({
		minimum: 1,
		title: "Template",
		...H({
			editor: "templateVersion",
			group: "template",
			order: 1
		})
	}),
	parameters: vy,
	flip: gy,
	materialOverrides: xy
}, Ow = H({ groups: _w("general", "placement", "template", "appearance").groups }), kw = H({ groups: _w("general", "placement", "staircase", "template", "appearance").groups }), Aw = {
	property: "floorCut",
	equals: "stair"
}, jw = V.Object({
	id: oy,
	name: dy(),
	...Dw,
	placement: V.Object({
		distanceAlongWallMm: U({
			title: "Along wall",
			group: "placement",
			order: 1
		}),
		bottomMm: U({
			title: "Bottom",
			minimum: 0,
			group: "placement",
			order: 2
		})
	}, {
		additionalProperties: !1,
		title: "Placement",
		...H({ group: "placement" })
	})
}, {
	additionalProperties: !1,
	title: "Opening",
	...Ow
}), Mw = V.Object({
	id: oy,
	name: dy(),
	...Dw,
	attachment: V.Object({
		host: uy([
			["floor", "Floor"],
			["wall", "Wall"],
			["overhead", "Overhead"]
		], {
			title: "Host",
			default: "floor",
			group: "placement",
			order: 1
		}),
		wallId: V.Optional(V.String({
			title: "Wall",
			...H({
				editor: "reference",
				referenceKind: "wall",
				group: "placement",
				order: 2,
				visibleWhen: {
					property: "host",
					equals: "wall"
				}
			})
		})),
		hostSide: V.Optional(uy([["interior", "Interior"], ["exterior", "Exterior"]], {
			title: "Wall side",
			default: "interior",
			group: "placement",
			order: 3,
			visibleWhen: {
				property: "host",
				equals: "wall"
			}
		}))
	}, {
		additionalProperties: !1,
		title: "Attachment",
		...H({
			group: "placement",
			order: 1
		})
	}),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 2
	}),
	elevationMm: U({
		title: "Elevation",
		group: "placement",
		order: 3
	}),
	rotationDeg: sy({
		title: "Rotation",
		group: "placement",
		order: 4
	}),
	hidden: fy,
	floorCut: V.Optional(uy([["stair", "Staircase"], ["opening", "Floor opening"]], {
		title: "Floor cut",
		readOnly: !0,
		hidden: !0
	})),
	floorCutShape: V.Optional(uy([["rectangle", "Rectangle"], ["ellipse", "Round"]], {
		title: "Opening shape",
		readOnly: !0,
		hidden: !0
	})),
	cutFloorAbove: V.Optional(V.Boolean({
		title: "Cut floor above",
		default: !0,
		description: "Cuts the floor the stair reaches, and any floor it passes through",
		...H({
			editor: "toggle",
			group: "staircase",
			order: 1,
			visibleWhen: Aw
		})
	})),
	cutFloorBelow: V.Optional(V.Boolean({
		title: "Cut floor below",
		default: !1,
		description: "Cuts the floor the stair stands on, for a stair going down",
		...H({
			editor: "toggle",
			group: "staircase",
			order: 2,
			visibleWhen: Aw
		})
	})),
	effects: V.Optional(V.Array(Tw, {
		maxItems: 8,
		...H({ hidden: !0 })
	}))
}, {
	additionalProperties: !1,
	title: "Object",
	...kw
}), Nw = [
	"tungsten",
	"halogen",
	"ledWarm",
	"ledNeutral",
	"ledCool",
	"fluorescent",
	"neon"
], Pw = [
	{
		watts: 2.5,
		lumens: 250
	},
	{
		watts: 4.9,
		lumens: 470
	},
	{
		watts: 8.5,
		lumens: 806
	},
	{
		watts: 11,
		lumens: 1055
	},
	{
		watts: 14,
		lumens: 1521
	},
	{
		watts: 18,
		lumens: 2e3
	},
	{
		watts: 24,
		lumens: 2600
	}
], Fw = {
	tungsten: {
		title: "Tungsten",
		kelvin: 2700,
		tint: [
			1,
			1,
			1
		],
		presets: [
			{
				watts: 25,
				lumens: 220
			},
			{
				watts: 40,
				lumens: 470
			},
			{
				watts: 60,
				lumens: 800
			},
			{
				watts: 75,
				lumens: 1055
			},
			{
				watts: 100,
				lumens: 1521
			}
		]
	},
	halogen: {
		title: "Halogen",
		kelvin: 2900,
		tint: [
			1,
			1,
			1
		],
		presets: [
			{
				watts: 18,
				lumens: 235
			},
			{
				watts: 28,
				lumens: 370
			},
			{
				watts: 42,
				lumens: 630
			},
			{
				watts: 53,
				lumens: 840
			},
			{
				watts: 70,
				lumens: 1180
			}
		]
	},
	ledWarm: {
		title: "LED warm white",
		kelvin: 2700,
		tint: [
			1,
			1,
			1
		],
		presets: Pw
	},
	ledNeutral: {
		title: "LED neutral white",
		kelvin: 4e3,
		tint: [
			1,
			1,
			1
		],
		presets: Pw
	},
	ledCool: {
		title: "LED cool daylight",
		kelvin: 6500,
		tint: [
			1,
			1,
			1
		],
		presets: Pw
	},
	fluorescent: {
		title: "Fluorescent",
		kelvin: 4e3,
		tint: [
			.96,
			1.03,
			.97
		],
		presets: [
			{
				watts: 8,
				lumens: 400
			},
			{
				watts: 11,
				lumens: 600
			},
			{
				watts: 15,
				lumens: 900
			},
			{
				watts: 18,
				lumens: 1350
			},
			{
				watts: 36,
				lumens: 3350
			},
			{
				watts: 58,
				lumens: 5200
			}
		]
	},
	neon: {
		title: "Neon (LED flex)",
		kelvin: 2200,
		tint: [
			1,
			1,
			1
		],
		rgb: [
			255,
			90,
			40
		],
		presets: [
			{
				watts: 5,
				lumens: 200
			},
			{
				watts: 10,
				lumens: 400
			},
			{
				watts: 15,
				lumens: 600
			},
			{
				watts: 20,
				lumens: 800
			},
			{
				watts: 30,
				lumens: 1200
			}
		]
	}
}, Iw = Nw.map((e) => [e, Fw[e].title]), Lw = [
	["fixedWhite", "Fixed white"],
	["colorTemperature", "Color temperature"],
	["rgb", "RGB"]
], Rw = V.Object({
	id: oy,
	name: dy(),
	fixture: V.Union([_y, V.Null()], {
		title: "Fixture",
		...H({
			editor: "templateVersion",
			group: "general",
			order: 1
		})
	}),
	fixtureVisible: V.Boolean({
		title: "Show fixture",
		default: !0,
		...H({
			editor: "toggle",
			group: "general",
			order: 2
		})
	}),
	geometry: V.Object({
		type: uy([
			["point", "Point"],
			["spot", "Spot"],
			["linear", "Linear"]
		], {
			title: "Type",
			default: "point",
			order: 1
		}),
		lengthMm: U({
			title: "Length",
			exclusiveMinimum: 0,
			default: 1e3,
			order: 2,
			inlineLabel: "L"
		}),
		widthMm: U({
			title: "Width",
			exclusiveMinimum: 0,
			default: 12,
			order: 3,
			inlineLabel: "W"
		}),
		facingDeg: V.Optional(V.Integer({
			title: "Facing",
			description: "0° shines down, 90° left of the heading, 180° up, 270° right",
			minimum: 0,
			maximum: 360,
			default: 0,
			...H({
				editor: "angle",
				quantity: "angle",
				order: 4,
				visibleWhen: {
					property: "type",
					equals: "linear"
				}
			})
		}))
	}, {
		additionalProperties: !1,
		title: "Emitter",
		...H({
			group: "emitter",
			order: 1
		})
	}),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 1
	}),
	elevationMm: U({
		title: "Elevation",
		group: "placement",
		order: 2
	}),
	rotationDeg: sy({
		title: "Heading",
		group: "placement",
		order: 3
	}),
	mount: V.Optional(uy([["free", "Free"], ["wall", "Wall"]], {
		title: "Mount",
		default: "free",
		group: "placement",
		order: .1
	})),
	wallId: V.Optional(V.String({
		title: "Wall",
		...H({
			editor: "reference",
			referenceKind: "wall",
			group: "placement",
			order: .2,
			visibleWhen: {
				property: "mount",
				equals: "wall"
			}
		})
	})),
	wallSide: V.Optional(uy([["interior", "Interior"], ["exterior", "Exterior"]], {
		title: "Wall side",
		default: "interior",
		group: "placement",
		order: .3,
		visibleWhen: {
			property: "mount",
			equals: "wall"
		}
	})),
	spot: V.Object({
		tiltDeg: sy({
			title: "Tilt",
			minimum: 0,
			maximum: 180,
			default: 0,
			order: 1
		}),
		beamAngleDeg: V.Number({
			title: "Beam angle",
			minimum: 1,
			maximum: 160,
			default: 40,
			...H({
				editor: "slider",
				quantity: "angle",
				unitSuffix: "°",
				order: 2
			})
		}),
		softEdge: V.Number({
			title: "Soft edge",
			minimum: 0,
			maximum: 1,
			default: .3,
			...H({
				editor: "slider",
				step: .01,
				order: 3
			})
		})
	}, {
		additionalProperties: !1,
		title: "Spot",
		...H({
			group: "emitter",
			order: 2
		})
	}),
	lampType: V.Optional(uy(Iw, {
		title: "Lamp type",
		group: "light",
		order: 0,
		editor: "select"
	})),
	lampWatts: V.Optional(V.Number({
		title: "Lamp power",
		exclusiveMinimum: 0,
		maximum: 5e3,
		...H({
			editor: "lampPower",
			unitSuffix: "W",
			group: "light",
			order: .5
		})
	})),
	renderCapabilities: V.Object({ colorModes: V.Array(uy(Lw), {
		title: "Color modes",
		minItems: 1,
		uniqueItems: !0,
		...H({
			editor: "multiSelect",
			order: 1
		})
	}) }, {
		additionalProperties: !1,
		title: "Capabilities",
		...H({
			group: "light",
			order: 1
		})
	}),
	defaults: V.Object({
		enabled: V.Boolean({
			title: "Enabled",
			default: !0,
			...H({
				editor: "toggle",
				order: 1
			})
		}),
		brightness: V.Number({
			title: "Brightness",
			minimum: 0,
			maximum: 1,
			default: 1,
			...H({
				editor: "slider",
				step: .01,
				order: 2
			})
		}),
		outputLumens: V.Number({
			title: "Output",
			exclusiveMinimum: 0,
			maximum: 2e5,
			default: 800,
			...H({
				editor: "number",
				quantity: "luminousFlux",
				unitSuffix: "lm",
				order: 3
			})
		}),
		color: V.Object({
			mode: uy(Lw, {
				title: "Color mode",
				default: "fixedWhite",
				order: 1,
				editor: "select"
			}),
			kelvin: V.Number({
				title: "Temperature",
				minimum: 1500,
				maximum: 9e3,
				default: 3e3,
				...H({
					editor: "slider",
					quantity: "colorTemperature",
					unitSuffix: "K",
					step: 50,
					order: 2,
					visibleWhen: {
						property: "mode",
						equals: "colorTemperature"
					}
				})
			}),
			rgb: ly({
				title: "Color",
				order: 3,
				visibleWhen: {
					property: "mode",
					equals: "rgb"
				}
			})
		}, {
			additionalProperties: !1,
			title: "Color",
			...H({ order: 4 })
		})
	}, {
		additionalProperties: !1,
		title: "Defaults",
		...H({
			group: "light",
			order: 2
		})
	}),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Light",
	...H({ groups: _w("general", "emitter", "placement", "light").groups })
}), zw = V.Object({
	id: oy,
	name: dy(),
	memberIds: V.Array(V.String(), {
		title: "Members",
		uniqueItems: !0,
		...H({
			editor: "reference",
			referenceKind: "light",
			multiple: !0,
			group: "general",
			order: 1
		})
	})
}, {
	additionalProperties: !1,
	title: "Light group",
	...H({ groups: _w("general").groups })
}), Bw = V.Object({
	id: oy,
	name: dy(),
	memberIds: V.Array(V.String(), {
		title: "Members",
		uniqueItems: !0,
		minItems: 2,
		...H({
			editor: "reference",
			referenceKind: "object",
			multiple: !0,
			group: "general",
			order: 1
		})
	}),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Object group",
	...H({ groups: _w("general").groups })
}), Vw = V.Object({
	shapeId: V.String(),
	edge: V.String({ minLength: 1 })
}, {
	additionalProperties: !1,
	readOnly: !0,
	...H({ hidden: !0 })
}), Hw = V.Object({
	anchor: V.Union([V.Literal("start"), V.Literal("end")]),
	offsetMm: V.Number({ minimum: 0 })
}, { additionalProperties: !1 }), Uw = V.Object({
	id: oy,
	name: dy({
		group: "general",
		order: 1
	}),
	face: uy([["interior", "Interior"], ["exterior", "Exterior"]], {
		title: "Face",
		default: "interior",
		group: "placement",
		order: 1
	}),
	depthMm: U({
		title: "Depth",
		minimum: -2e3,
		maximum: 2e3,
		description: "Positive sticks out of the wall, negative goes into it, zero is flat",
		group: "size",
		order: 1
	}),
	material: hy({
		title: "Material",
		group: "appearance",
		order: 1
	}),
	shapes: V.Array(Sw, {
		minItems: 1,
		...H({ hidden: !0 })
	}),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Wall feature",
	...H({ groups: _w("general", "placement", "size", "appearance").groups })
}), Ww = V.Object({
	id: oy,
	sourceEdge: Vw,
	spanMm: V.Object({
		start: Hw,
		end: Hw
	}, {
		additionalProperties: !1,
		...H({ hidden: !0 })
	}),
	heightMm: U({
		title: "Height",
		minimum: 1,
		maximum: 2e4,
		default: 2400,
		group: "size",
		order: 1
	}),
	thicknessMm: U({
		title: "Thickness",
		minimum: 1,
		maximum: 2e3,
		default: 200,
		group: "size",
		order: 2
	}),
	riseToRoof: V.Optional(V.Boolean({
		title: "Rise to roof",
		default: !0,
		description: "Under a roof whose walls rise, this wall extends up to the roof's underside. Off: it keeps its own height (the roof still cuts it).",
		...H({
			editor: "toggle",
			group: "size",
			order: 1.5
		})
	})),
	alignment: uy([
		["outside", "Outside"],
		["inside", "Inside"],
		["center", "Center"]
	], {
		title: "Alignment",
		default: "outside",
		group: "placement",
		order: 1
	}),
	materials: V.Object({
		interior: hy({
			title: "Interior",
			order: 1
		}),
		exterior: hy({
			title: "Exterior",
			order: 2
		})
	}, {
		additionalProperties: !1,
		title: "Materials",
		...H({ group: "appearance" })
	}),
	objects: V.Array(jw, { ...H({ hidden: !0 }) }),
	reliefs: V.Optional(V.Array(Uw, { ...H({ hidden: !0 }) })),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Wall",
	...H({ groups: _w("general", "placement", "size", "appearance").groups })
}), Gw = V.Object({
	id: oy,
	material: hy({
		title: "Flooring",
		group: "appearance",
		order: 1
	}),
	shapes: V.Array(Sw, { ...H({ hidden: !0 }) }),
	carpets: V.Array(Cw, { ...H({ hidden: !0 }) })
}, {
	additionalProperties: !1,
	title: "Floor",
	...H({ groups: _w("appearance").groups })
}), Kw = V.Object({
	id: oy,
	kind: V.Optional(V.Literal("yard", {
		readOnly: !0,
		...H({ hidden: !0 })
	})),
	name: dy(),
	fence: V.Optional(uy([
		["picket", "Wooden picket"],
		["panel", "Metal panel"],
		["hedge", "Hedge"],
		["slatted", "Horizontal timber"],
		["trellis", "Diamond trellis"],
		["wire", "Wire mesh"]
	], {
		title: "Fence",
		default: "picket",
		group: "appearance",
		order: 1,
		editor: "select",
		visibleWhen: {
			property: "kind",
			equals: "yard"
		}
	})),
	positionMm: cy({
		title: "Position",
		group: "placement",
		order: 1
	}),
	rotationDeg: sy({
		title: "Rotation",
		group: "placement",
		order: 2
	}),
	floor: Gw,
	walls: V.Array(Ww, { ...H({ hidden: !0 }) }),
	objects: V.Array(Mw, { ...H({ hidden: !0 }) }),
	objectGroups: V.Optional(V.Array(Bw, { ...H({ hidden: !0 }) })),
	lights: V.Array(Rw, { ...H({ hidden: !0 }) }),
	hidden: fy
}, {
	additionalProperties: !1,
	title: "Area",
	...H({ groups: _w("general", "placement", "appearance").groups })
}), qw = V.Object({
	id: oy,
	kind: uy([["line", "Guide line"], ["point", "Guide point"]], {
		title: "Kind",
		readOnly: !0,
		group: "general",
		order: 1
	}),
	visible: V.Boolean({
		title: "Visible",
		default: !0,
		...H({
			editor: "toggle",
			group: "general",
			order: 2
		})
	}),
	aMm: cy({ hidden: !0 }),
	bMm: cy({ hidden: !0 })
}, {
	additionalProperties: !1,
	title: "Guide",
	...H({ groups: _w("general").groups })
}), Jw = 3e4, Yw = 3e4, Xw = 1e3, Zw = V.String({
	pattern: ay,
	...H({ hidden: !0 })
}), Qw = V.Object({
	id: oy,
	x: V.Number({ ...H({ hidden: !0 }) }),
	y: V.Number({ ...H({ hidden: !0 }) }),
	heightMm: U({
		title: "Height",
		minimum: 0,
		maximum: Jw,
		group: "general",
		order: 1,
		description: "Above the roof's eave height."
	})
}, {
	additionalProperties: !1,
	title: "Roof point",
	...H({ groups: _w("general").groups })
}), $w = {
	property: "kind",
	equals: "step"
}, eT = V.Object({
	id: oy,
	a: Zw,
	b: Zw,
	kind: V.Optional(uy([["break", "Break line"], ["step", "Step line"]], {
		title: "Kind",
		default: "break",
		group: "general",
		order: 1
	})),
	stepMm: V.Optional(U({
		title: "Step height",
		minimum: 10,
		maximum: 1e4,
		default: 500,
		group: "general",
		order: 2,
		visibleWhen: $w,
		description: "How much higher the raised side is along the line."
	})),
	raisedSide: V.Optional(uy([["left", "Left"], ["right", "Right"]], {
		title: "Raised side",
		default: "left",
		group: "general",
		order: 3,
		visibleWhen: $w
	})),
	stepFace: V.Optional(uy([["side", "Roof sides"], ["wall", "Wall"]], {
		title: "Step face",
		default: "side",
		group: "general",
		order: 4,
		visibleWhen: $w
	}))
}, {
	additionalProperties: !1,
	title: "Break line",
	...H({ groups: _w("general").groups })
}), tT = V.Object({
	x: V.Number(),
	y: V.Number()
}, { additionalProperties: !1 }), nT = 4e3, rT = V.Object({
	id: oy,
	name: dy(),
	points: V.Array(tT, {
		minItems: 3,
		maxItems: 256,
		...H({ hidden: !0 })
	})
}, {
	additionalProperties: !1,
	title: "Roof hole",
	...H({ groups: _w("general").groups })
}), iT = V.Object({
	id: oy,
	name: dy(),
	templateId: V.String({
		minLength: 1,
		...H({ hidden: !0 })
	}),
	templateVersion: V.Integer({
		minimum: 1,
		...H({ hidden: !0 })
	}),
	positionMm: V.Object({
		x: V.Number(),
		y: V.Number()
	}, {
		additionalProperties: !1,
		...H({ hidden: !0 })
	}),
	widthMm: U({
		title: "Width",
		minimum: 300,
		maximum: nT,
		group: "general",
		order: 1,
		inlineLabel: "W"
	}),
	lengthMm: U({
		title: "Length",
		minimum: 300,
		maximum: nT,
		group: "general",
		order: 2,
		inlineLabel: "L",
		description: "Up the slope."
	}),
	minPitchDeg: V.Number({
		minimum: 0,
		maximum: 90,
		...H({ hidden: !0 })
	}),
	maxPitchDeg: V.Number({
		minimum: 0,
		maximum: 90,
		...H({ hidden: !0 })
	})
}, {
	additionalProperties: !1,
	title: "Roof window",
	...H({ groups: _w("general").groups })
}), aT = {
	property: "design",
	equals: "open"
}, oT = {
	property: "design",
	equals: "closed"
}, sT = V.Object({
	id: oy,
	name: dy(),
	design: uy([["closed", "Closed"], ["open", "Open"]], {
		title: "Design",
		default: "closed",
		group: "general",
		order: 1
	}),
	cutsWalls: V.Boolean({
		title: "Cuts walls",
		default: !0,
		description: "The roof's underside is the height limit of this floor's walls.",
		...H({
			editor: "toggle",
			group: "general",
			order: 1.5
		})
	}),
	wallsRise: V.Boolean({
		title: "Walls rise",
		default: !0,
		description: "Walls under the roof extend up to its underside (gable ends fill to the ridge).",
		...H({
			editor: "toggle",
			group: "general",
			order: 1.6,
			visibleWhen: {
				property: "cutsWalls",
				equals: !0
			}
		})
	}),
	eaveHeightMm: U({
		title: "Eave height",
		minimum: 0,
		maximum: Yw,
		group: "general",
		order: 2,
		description: "The roof's base above the floor; point heights are measured from it."
	}),
	thicknessMm: U({
		title: "Thickness",
		minimum: 10,
		maximum: Xw,
		group: "general",
		order: 3,
		description: "Top to underside (measured vertically)."
	}),
	topMaterial: hy({
		title: "Top",
		group: "materials",
		order: 1
	}),
	bottomMaterial: hy({
		title: "Underside",
		group: "materials",
		order: 2
	}),
	sideMaterial: hy({
		title: "Sides",
		group: "materials",
		order: 3,
		visibleWhen: oT
	}),
	ribHeightMm: U({
		title: "Rib height",
		minimum: 10,
		maximum: 600,
		group: "ribs",
		order: 1,
		inlineLabel: "H",
		visibleWhen: aT
	}),
	ribWidthMm: U({
		title: "Rib width",
		minimum: 10,
		maximum: 400,
		group: "ribs",
		order: 2,
		inlineLabel: "W",
		visibleWhen: aT
	}),
	ribSpacingMm: U({
		title: "Rib spacing",
		minimum: 100,
		maximum: 5e3,
		group: "ribs",
		order: 3,
		visibleWhen: aT
	}),
	ribMaterial: uy([["wood", "Wood"], ["metal", "Metal"]], {
		title: "Rib material",
		default: "wood",
		group: "ribs",
		order: 4,
		visibleWhen: aT
	}),
	points: V.Array(Qw, {
		minItems: 3,
		maxItems: 400,
		...H({ hidden: !0 })
	}),
	outline: V.Array(Zw, {
		minItems: 3,
		...H({ hidden: !0 })
	}),
	lines: V.Array(eT, { ...H({ hidden: !0 }) }),
	holes: V.Optional(V.Array(rT, {
		maxItems: 200,
		...H({ hidden: !0 })
	})),
	windows: V.Optional(V.Array(iT, {
		maxItems: 200,
		...H({ hidden: !0 })
	}))
}, {
	additionalProperties: !1,
	title: "Roof",
	...H({ groups: _w("general", "materials", "ribs").groups })
}), cT = 1e3, lT = 1e5, uT = V.Object({
	id: oy,
	name: V.String({
		title: "Name",
		minLength: 1,
		maxLength: 64,
		...H({
			editor: "text",
			group: "general",
			order: 0
		})
	}),
	positionMm: V.Optional(cy({
		title: "Position",
		group: "placement",
		order: 1
	})),
	elevationMm: V.Optional(U({
		title: "Elevation",
		minimum: -1e5,
		maximum: lT,
		default: 0,
		group: "placement",
		order: 2,
		description: "Height of this floor's finished floor in the house."
	})),
	slabThicknessMm: V.Optional(U({
		title: "Slab thickness",
		minimum: 0,
		maximum: cT,
		default: 200,
		group: "slab",
		order: 1,
		description: "0: no slab."
	})),
	slabMaterial: V.Optional(hy({
		title: "Slab material",
		group: "slab",
		order: 2
	})),
	areas: V.Array(Kw, { ...H({ hidden: !0 }) }),
	lightGroups: V.Array(zw, { ...H({ hidden: !0 }) }),
	guides: V.Array(qw, { ...H({ hidden: !0 }) }),
	roofs: V.Optional(V.Array(sT, { ...H({ hidden: !0 }) }))
}, {
	additionalProperties: !1,
	title: "Floor",
	...H({ groups: _w("general", "placement", "slab").groups })
}), dT = V.Object({
	id: oy,
	name: V.String({
		title: "Name",
		minLength: 1,
		maxLength: 120,
		...H({ editor: "text" })
	}),
	material: hy()
}, { additionalProperties: !1 }), fT = V.Object({
	countryCode: V.Optional(V.String({ pattern: "^[A-Z]{2}$" })),
	city: V.Optional(V.String()),
	latitudeDeg: V.Number({
		minimum: -90,
		maximum: 90
	}),
	longitudeDeg: V.Number({
		minimum: -180,
		maximum: 180
	}),
	timeZone: V.String({ minLength: 1 })
}, {
	additionalProperties: !1,
	title: "Location",
	...H({
		editor: "location",
		group: "environment",
		order: 1
	})
}), pT = V.Object({
	location: fT,
	northRotationDeg: sy({
		title: "North",
		minimum: 0,
		maximum: 360,
		default: 0,
		order: 2
	}),
	sun: V.Object({
		timeMode: uy([["fixed", "Fixed time"], ["current", "Current time"]], {
			title: "Sun time",
			default: "fixed",
			order: 1
		}),
		fixedLocalDateTime: V.String({
			title: "Date and time",
			pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}(:\\d{2})?$",
			default: "2020-06-01T12:00:00",
			...H({
				editor: "dateTime",
				order: 2,
				visibleWhen: {
					property: "timeMode",
					equals: "fixed"
				}
			})
		})
	}, {
		additionalProperties: !1,
		title: "Sun",
		...H({ order: 3 })
	})
}, {
	additionalProperties: !1,
	title: "Environment",
	...H({ group: "environment" })
}), mT = V.Object({
	schemaVersion: V.Literal(6, { ...H({ hidden: !0 }) }),
	revision: V.Integer({
		minimum: 0,
		...H({ hidden: !0 })
	}),
	id: oy,
	name: V.String({
		title: "Name",
		minLength: 1,
		maxLength: 120,
		...H({
			editor: "text",
			group: "general",
			order: 0
		})
	}),
	units: uy([
		["mm", "Millimeters (mm)"],
		["cm", "Centimeters (cm)"],
		["m", "Meters (m)"],
		["in", "Inches (in)"],
		["ft", "Feet (ft)"]
	], {
		title: "Units",
		default: "mm",
		group: "general",
		order: 1
	}),
	defaultWallHeightMm: V.Optional(U({
		title: "Default wall height",
		minimum: 100,
		maximum: 1e4,
		group: "general",
		order: 2,
		description: "New walls start at this height. Empty: 2.40 m."
	})),
	capMaterial: hy({
		title: "Cap material",
		group: "appearance",
		order: 1
	}),
	environment: pT,
	materialPresets: V.Array(dT, { ...H({ hidden: !0 }) }),
	floors: V.Array(uT, {
		minItems: 1,
		...H({ hidden: !0 })
	})
}, {
	additionalProperties: !1,
	title: "House",
	...H({ groups: _w("general", "environment", "appearance").groups })
}), hT = V.Record(V.String(), V.Unknown()), gT = V.Object({
	...sT.properties,
	cutsWalls: V.Optional(V.Boolean()),
	wallsRise: V.Optional(V.Boolean())
}, { additionalProperties: !1 }), _T = V.Object({
	...uT.properties,
	roofCuts: V.Array(hT),
	roofs: V.Optional(V.Array(gT))
}, { additionalProperties: !1 }), vT = V.Object({
	...mT.properties,
	schemaVersion: V.Literal(5),
	floors: V.Array(_T, { minItems: 1 })
}, { additionalProperties: !1 }), yT = V.Object({
	...Kw.properties,
	kind: V.Optional(V.Union([V.Literal("room"), V.Literal("staircase")])),
	staircase: V.Optional(V.Record(V.String(), V.Unknown()))
}, { additionalProperties: !1 }), bT = V.Object({
	..._T.properties,
	areas: V.Array(yT)
}, { additionalProperties: !1 }), xT = V.Object({
	...mT.properties,
	schemaVersion: V.Literal(4),
	floors: V.Array(bT, { minItems: 1 })
}, { additionalProperties: !1 }), ST = V.Union([
	mT,
	vT,
	xT
]);
V.Object({
	revision: W,
	document: mT
}, { additionalProperties: !1 }), V.Object({
	revision: W,
	document: ST
}, { additionalProperties: !1 }), V.Object({
	expectedRevision: W,
	document: mT
}, { additionalProperties: !1 }), V.Object({ revision: W }, { additionalProperties: !1 }), V.Object({
	revision: W,
	preferences: yb
}, { additionalProperties: !1 });
var CT = yb.properties.appearance.properties, wT = yb.properties.editor.properties, TT = V.Object({
	appearance: V.Optional(V.Object({
		theme: V.Optional(CT.theme),
		colorScheme: V.Optional(CT.colorScheme),
		customColors: V.Optional(CT.customColors)
	}, { additionalProperties: !1 })),
	editor: V.Optional(V.Object({
		showGroundGrid: V.Optional(wT.showGroundGrid),
		navigation: V.Optional(wT.navigation),
		treeShare: V.Optional(wT.treeShare)
	}, { additionalProperties: !1 })),
	homeAssistant: V.Optional(V.Object({
		viewer: V.Optional(yb.properties.homeAssistant.properties.viewer),
		bindings: V.Optional(mb),
		dashboard: V.Optional(yb.properties.homeAssistant.properties.dashboard)
	}, { additionalProperties: !1 }))
}, { additionalProperties: !1 });
V.Object({
	expectedRevision: W,
	patch: TT
}, { additionalProperties: !1 });
// shared/domain/house/builtinMaterials.ts
var ET = "builtinimg_", DT = (e, t, n, r, i, a = 0) => ({
	id: `${ET}${e}`,
	name: t,
	file: `${ET}${e}.png`,
	widthPx: 512,
	heightPx: 512,
	tileSizeMm: r,
	roughness: i,
	presetName: n,
	presetId: `builtin_${e}`,
	metallic: a
}), OT = [
	DT("oakparquet", "Oak planks", "Oak parquet", 1600, .55),
	DT("walnut", "Walnut planks", "Walnut", 1600, .5),
	DT("ashplanks", "Pale ash planks", "Ash", 1600, .6),
	DT("greytiles", "Grey stone tiles 60 cm", "Grey tiles", 1200, .35),
	DT("whitetiles", "White tiles 15 cm", "White tiles", 600, .25),
	DT("terracotta", "Terracotta tiles 30 cm", "Terracotta tiles", 1200, .75),
	DT("slatetiles", "Slate tiles 60 × 30 cm", "Slate tiles", 1200, .6),
	DT("granite", "Granite tiles 60 cm", "Granite", 1200, .3),
	DT("decking", "Wood decking", "Decking", 1160, .8),
	DT("lawngrass", "Lawn", "Lawn", 2400, .95),
	DT("paving", "Sandstone paving", "Paving", 1200, .85),
	DT("aluminium", "Aluminium standing-seam roofing", "Aluminium roofing", 2e3, .4, .35)
], kT = (e, t = {}) => {
	let n = t.tint ?? [
		1,
		1,
		1
	];
	return {
		pbrMetallicRoughness: {
			baseColorTexture: { imageId: e.id },
			baseColorFactor: [
				n[0],
				n[1],
				n[2],
				1
			],
			roughnessFactor: e.roughness,
			metallicFactor: e.metallic
		},
		extras: { homeplan: {
			tileSizeMm: {
				x: e.tileSizeMm,
				y: e.tileSizeMm
			},
			rotationDeg: t.rotationDeg ?? 0,
			offsetMm: {
				x: 0,
				y: 0
			}
		} }
	};
}, AT = (e, t) => ({
	pbrMetallicRoughness: {
		baseColorFactor: [
			e[0],
			e[1],
			e[2],
			1
		],
		roughnessFactor: t,
		metallicFactor: 0
	},
	extras: { homeplan: {
		tileSizeMm: {
			x: 1e3,
			y: 1e3
		},
		rotationDeg: 0,
		offsetMm: {
			x: 0,
			y: 0
		}
	} }
}), jT = [
	{
		id: "builtin_capwhite",
		name: "Plain white (cap)",
		material: AT([
			1,
			1,
			1
		], .9)
	},
	{
		id: "builtin_flooring",
		name: "Default flooring",
		material: AT([
			.78,
			.66,
			.5
		], .7)
	},
	{
		id: "builtin_wallpaint",
		name: "Default wall paint",
		material: AT([
			.94,
			.93,
			.9
		], .9)
	},
	{
		id: "builtin_concrete",
		name: "Concrete",
		material: AT([
			.62,
			.62,
			.6
		], .95)
	},
	{
		id: "builtin_darkwood",
		name: "Dark wood",
		material: AT([
			.35,
			.22,
			.13
		], .6)
	},
	...OT.map((e) => ({
		id: e.presetId,
		name: e.presetName,
		material: kT(e)
	}))
];
((e) => {
	let t = jT.find((t) => t.id === e);
	if (t === void 0) throw Error(`Unknown built-in preset ${e}`);
	return structuredClone(t.material);
})("builtin_concrete");
// node_modules/immer/dist/immer.mjs
var MT = Symbol.for("immer-nothing"), NT = Symbol.for("immer-draftable"), PT = Symbol.for("immer-state");
function FT(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var IT = Object, LT = IT.getPrototypeOf, RT = "constructor", zT = "prototype", BT = "configurable", VT = "enumerable", HT = "writable", UT = "value", WT = (e) => !!e && !!e[PT];
function GT(e) {
	return e ? JT(e) || tE(e) || !!e[NT] || !!e[RT]?.[NT] || nE(e) || rE(e) : !1;
}
var KT = IT[zT][RT].toString(), qT = /* @__PURE__ */ new WeakMap();
function JT(e) {
	if (!e || !iE(e)) return !1;
	let t = LT(e);
	if (t === null || t === IT[zT]) return !0;
	let n = IT.hasOwnProperty.call(t, RT) && t[RT];
	if (n === Object) return !0;
	if (!aE(n)) return !1;
	let r = qT.get(n);
	return r === void 0 && (r = Function.toString.call(n), qT.set(n, r)), r === KT;
}
function YT(e, t, n = !0) {
	XT(e) === 0 ? (n ? Reflect.ownKeys(e) : IT.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function XT(e) {
	let t = e[PT];
	return t ? t.type_ : tE(e) ? 1 : nE(e) ? 2 : rE(e) ? 3 : 0;
}
var ZT = (e, t, n = XT(e)) => n === 2 ? e.has(t) : IT[zT].hasOwnProperty.call(e, t), QT = (e, t, n = XT(e)) => n === 2 ? e.get(t) : e[t], $T = (e, t, n, r = XT(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function eE(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var tE = Array.isArray, nE = (e) => e instanceof Map, rE = (e) => e instanceof Set, iE = (e) => typeof e == "object", aE = (e) => typeof e == "function", oE = (e) => typeof e == "boolean";
function sE(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var cE = (e) => e.copy_ || e.base_, lE = (e) => e.modified_ ? e.copy_ : e.base_;
function uE(e, t) {
	if (nE(e)) return new Map(e);
	if (rE(e)) return new Set(e);
	if (tE(e)) return Array[zT].slice.call(e);
	let n = JT(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = IT.getOwnPropertyDescriptors(e);
		delete t[PT];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[HT] === !1 && (a[HT] = !0, a[BT] = !0), (a.get || a.set) && (t[i] = {
				[BT]: !0,
				[HT]: !0,
				[VT]: a[VT],
				[UT]: e[i]
			});
		}
		return IT.create(LT(e), t);
	}
	{
		let t = LT(e);
		if (t !== null && n) return { ...e };
		let r = IT.create(t);
		return IT.assign(r, e);
	}
}
function dE(e, t = !1) {
	return mE(e) || WT(e) || !GT(e) || (XT(e) > 1 && IT.defineProperties(e, {
		set: pE,
		add: pE,
		clear: pE,
		delete: pE
	}), IT.freeze(e), t && YT(e, (e, t) => {
		dE(t, !0);
	}, !1)), e;
}
function fE() {
	FT(2);
}
var pE = { [UT]: fE };
function mE(e) {
	return e === null || !iE(e) || IT.isFrozen(e);
}
var hE = "MapSet", gE = "Patches", _E = "ArrayMethods", vE = {};
function yE(e) {
	let t = vE[e];
	return t || FT(0, e), t;
}
var bE = (e) => !!vE[e], xE, SE = () => xE, CE = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: bE(hE) ? yE(hE) : void 0,
	arrayMethodsPlugin_: bE(_E) ? yE(_E) : void 0
});
function wE(e, t) {
	t && (e.patchPlugin_ = yE(gE), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function TE(e) {
	EE(e), e.drafts_.forEach(OE), e.drafts_ = null;
}
function EE(e) {
	e === xE && (xE = e.parent_);
}
var DE = (e) => xE = CE(xE, e);
function OE(e) {
	let t = e[PT];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function kE(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[PT].modified_ && (TE(t), FT(4)), GT(e) && (e = AE(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[PT].base_, e, t);
	} else e = AE(t, n);
	return jE(t, e, !0), TE(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === MT ? void 0 : e;
}
function AE(e, t) {
	if (mE(t)) return t;
	let n = t[PT];
	if (!n) return zE(t, e.handledSet_, e);
	if (!NE(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		LE(n, e);
	}
	return n.copy_;
}
function jE(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && dE(t, n);
}
function ME(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var NE = (e, t) => e.scope_ === t, PE = [];
function FE(e, t, n, r) {
	let i = cE(e), a = e.type_;
	if (r !== void 0 && QT(i, r, a) === t) {
		$T(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		YT(i, (e, n) => {
			if (WT(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? PE;
	for (let e of o) $T(i, e, n, a);
}
function IE(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !NE(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = lE(i);
		FE(e, i.draft_ ?? i, a, n), LE(i, r);
	});
}
function LE(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		ME(e);
	}
}
function RE(e, t, n) {
	let { scope_: r } = e;
	if (WT(n)) {
		let i = n[PT];
		NE(i, r) && i.callbacks_.push(function() {
			JE(e), FE(e, n, lE(i), t);
		});
	} else GT(n) && e.callbacks_.push(function() {
		let i = cE(e);
		e.type_ === 3 ? i.has(n) && zE(n, r.handledSet_, r) : QT(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && zE(QT(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function zE(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || WT(e) || t.has(e) || !GT(e) || mE(e) || (t.add(e), YT(e, (r, i) => {
		if (WT(i)) {
			let t = i[PT];
			NE(t, n) && ($T(e, r, lE(t), e.type_), ME(t));
		} else GT(i) && zE(i, t, n);
	})), e;
}
function BE(e, t) {
	let n = tE(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : SE(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = VE;
	n && (i = [r], a = HE);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var VE = {
	get(e, t) {
		if (t === PT) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = cE(e);
		if (!ZT(i, t, e.type_)) return GE(e, i, t);
		let a = i[t];
		if (e.finalized_ || !GT(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && sE(t)) return a;
		if (a === UE(e.base_, t) || WE(e, t, a)) {
			JE(e);
			let n = e.type_ === 1 ? +t : t, r = XE(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in cE(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(cE(e));
	},
	set(e, t, n) {
		let r = KE(cE(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = UE(cE(e), t), i = r?.[PT];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.delete(t), !0;
			if (eE(n, r) && (n !== void 0 || ZT(e.base_, t, e.type_))) return !0;
			JE(e), qE(e);
		}
		return e.copy_[t] === n && (n !== void 0 || ZT(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), RE(e, t, n)), !0;
	},
	deleteProperty(e, t) {
		return JE(e), UE(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), qE(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = cE(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[HT]: !0,
			[BT]: e.type_ !== 1 || t !== "length",
			[VT]: r[VT],
			[UT]: n[t]
		};
	},
	defineProperty() {
		FT(11);
	},
	getPrototypeOf(e) {
		return LT(e.base_);
	},
	setPrototypeOf() {
		FT(12);
	}
}, HE = {};
for (let e in VE) {
	let t = VE[e];
	HE[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
HE.deleteProperty = function(e, t) {
	return HE.set.call(this, e, t, void 0);
}, HE.set = function(e, t, n) {
	return VE.set.call(this, e[0], t, n, e[0]);
};
function UE(e, t) {
	let n = e[PT];
	return (n ? cE(n) : e)[t];
}
function WE(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || !GT(n) || n[PT] ? !1 : e.baseRefs_.has(n);
}
function GE(e, t, n) {
	let r = KE(t, n);
	return r ? UT in r ? r[UT] : r.get?.call(e.draft_) : void 0;
}
function KE(e, t) {
	if (!(t in e)) return;
	let n = LT(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = LT(n);
	}
}
function qE(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && qE(e.parent_));
}
function JE(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), uE(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var YE = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (aE(e) && !aE(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			aE(t) || FT(6), n !== void 0 && !aE(n) && FT(7);
			let r;
			if (GT(e)) {
				let i = DE(this), a = XE(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? TE(i) : EE(i);
				}
				return wE(i, n), kE(r, i);
			}
			if (!e || !iE(e)) {
				if (r = t(e), r === void 0 && (r = e), r === MT && (r = void 0), this.autoFreeze_ && dE(r, !0), n) {
					let t = [], i = [];
					yE(gE).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			}
			FT(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (aE(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, oE(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
		let t = e?.useStrictShallowCopy;
		(oE(t) || t === "class_only") && this.setUseStrictShallowCopy(t), oE(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		GT(e) || FT(8), WT(e) && (e = ZE(e));
		let t = DE(this), n = XE(t, e, void 0);
		return n[PT].isManual_ = !0, EE(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[PT];
		n && n.isManual_ || FT(9);
		let { scope_: r } = n;
		return wE(r, t), kE(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = yE(gE).applyPatches_;
		return WT(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function XE(e, t, n, r) {
	let [i, a] = nE(t) ? yE(hE).proxyMap_(t, n) : rE(t) ? yE(hE).proxySet_(t, n) : BE(t, n);
	return (n?.scope_ ?? SE()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? IE(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function ZE(e) {
	return WT(e) || FT(10, e), QE(e);
}
function QE(e) {
	if (!GT(e) || mE(e)) return e;
	let t = e[PT], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = uE(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = uE(e, !0);
	let i = n;
	return rE(n) && (n = /* @__PURE__ */ new Set()), YT(i, (e, t) => {
		$T(n, e, QE(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from, new YE().produce;
// shared/geometry/draftSafeWeakMap.ts
var $E = class {
	map = /* @__PURE__ */ new WeakMap();
	get(e) {
		return WT(e) ? void 0 : this.map.get(e);
	}
	set(e, t) {
		return WT(e) || this.map.set(e, t), this;
	}
}, eD;
(function(e) {
	e[e.NoClip = 0] = "NoClip", e[e.Intersection = 1] = "Intersection", e[e.Union = 2] = "Union", e[e.Difference = 3] = "Difference", e[e.Xor = 4] = "Xor";
})(eD ||= {});
var tD;
(function(e) {
	e[e.Subject = 0] = "Subject", e[e.Clip = 1] = "Clip";
})(tD ||= {});
var J;
(function(e) {
	e[e.EvenOdd = 0] = "EvenOdd", e[e.NonZero = 1] = "NonZero", e[e.Positive = 2] = "Positive", e[e.Negative = 3] = "Negative";
})(J ||= {});
var Y;
(function(e) {
	e[e.IsOn = 0] = "IsOn", e[e.IsInside = 1] = "IsInside", e[e.IsOutside = 2] = "IsOutside";
})(Y ||= {});
var X;
(function(e) {
	e.MaxInt64 = 9223372036854775807n, e.MaxCoord = Number(e.MaxInt64 / 4n), e.max_coord = e.MaxCoord, e.min_coord = -e.MaxCoord, e.Invalid64 = Number(e.MaxInt64), e.floatingPointTolerance = 1e-12, e.defaultMinimumEdgeLength = .1;
	function t(e, t, n) {
		return (t.x - e.x) * (n.y - t.y) - (t.y - e.y) * (n.x - t.x);
	}
	e.crossProduct = t;
	function n(e, t, n) {
		let r = t.x - e.x, i = n.y - t.y, a = t.y - e.y, o = n.x - t.x;
		if (Math.abs(r) < 9e7 && Math.abs(i) < 9e7 && Math.abs(a) < 9e7 && Math.abs(o) < 9e7) {
			let e = r * i, t = a * o;
			return e > t ? 1 : e < t ? -1 : 0;
		}
		let s = r < 0 ? -1 : +(r > 0), c = i < 0 ? -1 : +(i > 0), l = a < 0 ? -1 : +(a > 0), u = o < 0 ? -1 : +(o > 0), d = s * c, f = l * u;
		if (d !== f) return d > f ? 1 : -1;
		if (d === 0) return 0;
		let p = BigInt(r), m = BigInt(i), h = BigInt(a), g = BigInt(o), _ = p * m, v = h * g;
		return _ === v ? 0 : _ > v ? 1 : -1;
	}
	e.crossProductSign = n;
	function r(e) {
		if (e < -8 || e > 8) throw Error("Error: Precision is out of range.");
	}
	e.checkPrecision = r;
	function i(t) {
		return Math.abs(t) <= e.floatingPointTolerance;
	}
	e.isAlmostZero = i;
	function a(e) {
		return e < 0 ? -1 : +(e > 0);
	}
	e.triSign = a;
	function o(e, t) {
		let n = BigInt(e) * BigInt(t);
		return {
			lo64: Number(n & 18446744073709551615n),
			hi64: Number(n >> 64n)
		};
	}
	e.multiplyUInt64 = o;
	function s(e, t, n, r) {
		let i = Math.abs(e), a = Math.abs(t), o = Math.abs(n), s = Math.abs(r);
		if (i < 46341 && a < 46341 && o < 46341 && s < 46341 || i < 9e7 && a < 9e7 && o < 9e7 && s < 9e7) return e * t === n * r;
		let c = (e < 0 ? -1 : +(e > 0)) * (t < 0 ? -1 : +(t > 0));
		if (c !== (n < 0 ? -1 : +(n > 0)) * (r < 0 ? -1 : +(r > 0))) return !1;
		if (c === 0) return !0;
		let l = BigInt(i), u = BigInt(a), d = BigInt(o), f = BigInt(s);
		return l * u === d * f;
	}
	e.productsAreEqual = s;
	function c(e, t, n) {
		return s(t.x - e.x, n.y - t.y, t.y - e.y, n.x - t.x);
	}
	e.isCollinear = c;
	function l(e, t, n) {
		return (t.x - e.x) * (n.x - t.x) + (t.y - e.y) * (n.y - t.y);
	}
	e.dotProduct = l;
	function u(e, t) {
		return e.y * t.x - t.y * e.x;
	}
	e.crossProductD = u;
	function d(e, t) {
		return e.x * t.x + e.y * t.y;
	}
	e.dotProductD = d;
	function f(e) {
		let t = Math.floor(e), n = e - t;
		return Math.abs(n - .5) < 1e-10 ? t % 2 == 0 ? t : t + 1 : Math.round(e);
	}
	e.roundToEven = f;
	function p(t) {
		return t >= e.max_coord || t <= e.min_coord ? e.Invalid64 : Math.round(t);
	}
	e.checkCastInt64 = p;
	function m(e, t, n, r) {
		let i = t.y - e.y, a = t.x - e.x, o = r.y - n.y, s = r.x - n.x, c = i * s - o * a;
		if (c === 0) return {
			intersects: !1,
			point: {
				x: 0,
				y: 0,
				z: 0
			}
		};
		let l = ((e.x - n.x) * o - (e.y - n.y) * s) / c, u;
		if (l <= 0) u = {
			x: e.x,
			y: e.y,
			z: 0
		};
		else if (l >= 1) u = {
			x: t.x,
			y: t.y,
			z: 0
		};
		else {
			let t = e.x + l * a, n = e.y + l * i;
			u = {
				x: Math.trunc(t),
				y: Math.trunc(n),
				z: 0
			};
		}
		return {
			intersects: !0,
			point: u
		};
	}
	e.getLineIntersectPt = m;
	function h(e, t, n, r) {
		let i = t.y - e.y, a = t.x - e.x, o = r.y - n.y, s = r.x - n.x, c = i * s - o * a;
		if (c === 0) return {
			success: !1,
			ip: {
				x: 0,
				y: 0,
				z: 0
			}
		};
		let l = ((e.x - n.x) * o - (e.y - n.y) * s) / c, u;
		return u = l <= 0 ? {
			...e,
			z: 0
		} : l >= 1 ? {
			...t,
			z: 0
		} : {
			x: e.x + l * a,
			y: e.y + l * i,
			z: 0
		}, {
			success: !0,
			ip: u
		};
	}
	e.getLineIntersectPtD = h;
	function g(e, n, r, i, a = !1) {
		if (!a) return t(e, r, i) * t(n, r, i) < 0 && t(r, e, n) * t(i, e, n) < 0;
		let o = t(e, r, i), s = t(n, r, i);
		if (o * s > 0) return !1;
		let c = t(r, e, n), l = t(i, e, n);
		return c * l > 0 ? !1 : o !== 0 || s !== 0 || c !== 0 || l !== 0;
	}
	e.segsIntersect = g;
	function _(e) {
		if (e.length === 0) return {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		};
		let t = {
			left: 2 ** 53 - 1,
			top: 2 ** 53 - 1,
			right: -(2 ** 53 - 1),
			bottom: -(2 ** 53 - 1)
		};
		for (let n of e) n.x < t.left && (t.left = n.x), n.x > t.right && (t.right = n.x), n.y < t.top && (t.top = n.y), n.y > t.bottom && (t.bottom = n.y);
		return t.left === 2 ** 53 - 1 ? {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		} : t;
	}
	e.getBounds = _;
	function v(e, t, n) {
		if (t.x === n.x && t.y === n.y) return {
			x: t.x,
			y: t.y,
			z: 0
		};
		let r = n.x - t.x, i = n.y - t.y, a = ((e.x - t.x) * r + (e.y - t.y) * i) / (r * r + i * i), o = a < 0 ? 0 : a > 1 ? 1 : a;
		return {
			x: Math.round(t.x + o * r),
			y: Math.round(t.y + o * i),
			z: 0
		};
	}
	e.getClosestPtOnSegment = v;
	function y(e, t) {
		let r = t.length, i = 0;
		if (r < 3) return Y.IsOutside;
		for (; i < r && t[i].y === e.y;) i++;
		if (i === r) return Y.IsOutside;
		let a = t[i].y < e.y, o = a, s = 0, c = i + 1, l = r;
		for (;;) {
			if (c === l) {
				if (l === 0 || i === 0) break;
				l = i, c = 0;
			}
			if (a) for (; c < l && t[c].y < e.y;) c++;
			else for (; c < l && t[c].y > e.y;) c++;
			if (c === l) continue;
			let o = t[c], u = c > 0 ? t[c - 1] : t[r - 1];
			if (o.y === e.y) {
				if (o.x === e.x || o.y === u.y && e.x < u.x != e.x < o.x) return Y.IsOn;
				if (c++, c === i) break;
			} else {
				if (!(e.x < o.x && e.x < u.x)) {
					if (e.x > u.x && e.x > o.x) s = 1 - s;
					else {
						let t = n(u, o, e);
						if (t === 0) return Y.IsOn;
						t < 0 === a && (s = 1 - s);
					}
				}
				a = !a, c++;
			}
		}
		if (a === o) return s === 0 ? Y.IsOutside : Y.IsInside;
		c === r && (c = 0);
		let u = c === 0 ? n(t[r - 1], t[0], e) : n(t[c - 1], t[c], e);
		return u === 0 ? Y.IsOn : (u < 0 === a && (s = 1 - s), s === 0 ? Y.IsOutside : Y.IsInside);
	}
	e.pointInPolygon = y;
	function b(e, t) {
		let n = Y.IsOn;
		for (let r of e) switch (y(r, t)) {
			case Y.IsOutside:
				if (n === Y.IsOutside) return !1;
				n = Y.IsOutside;
				break;
			case Y.IsInside:
				if (n === Y.IsInside) return !0;
				n = Y.IsInside;
		}
		let r = _(e);
		return y({
			x: Math.round((r.left + r.right) / 2),
			y: Math.round((r.top + r.bottom) / 2)
		}, t) !== Y.IsOutside;
	}
	e.path2ContainsPath1 = b;
})(X ||= {});
var Z;
(function(e) {
	function t(e = 0, t = 0, n = 0) {
		return {
			x: Math.round(e),
			y: Math.round(t),
			z: n
		};
	}
	e.create = t;
	function n(e) {
		return {
			x: Math.round(e.x),
			y: Math.round(e.y),
			z: e.z || 0
		};
	}
	e.fromPointD = n;
	function r(e, t) {
		return {
			x: Math.round(e.x * t),
			y: Math.round(e.y * t),
			z: e.z || 0
		};
	}
	e.scale = r;
	function i(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	e.equals = i;
	function a(e, t) {
		return {
			x: e.x + t.x,
			y: e.y + t.y,
			z: 0
		};
	}
	e.add = a;
	function o(e, t) {
		return {
			x: e.x - t.x,
			y: e.y - t.y,
			z: 0
		};
	}
	e.subtract = o;
	function s(e) {
		return e.z !== void 0 && e.z !== 0 ? `${e.x},${e.y},${e.z} ` : `${e.x},${e.y} `;
	}
	e.toString = s;
})(Z ||= {});
var nD;
(function(e) {
	function t(e = 0, t = 0, n = 0) {
		return {
			x: e,
			y: t,
			z: n
		};
	}
	e.create = t;
	function n(e) {
		return {
			x: e.x,
			y: e.y,
			z: e.z || 0
		};
	}
	e.fromPoint64 = n;
	function r(e, t) {
		return {
			x: e.x * t,
			y: e.y * t,
			z: e.z || 0
		};
	}
	e.scale = r;
	function i(e, t) {
		return X.isAlmostZero(e.x - t.x) && X.isAlmostZero(e.y - t.y);
	}
	e.equals = i;
	function a(e) {
		e.x = -e.x, e.y = -e.y;
	}
	e.negate = a;
	function o(e, t = 2) {
		return e.z !== void 0 && e.z !== 0 ? `${e.x.toFixed(t)},${e.y.toFixed(t)},${e.z}` : `${e.x.toFixed(t)},${e.y.toFixed(t)}`;
	}
	e.toString = o;
})(nD ||= {});
var rD;
(function(e) {
	function t(e = 0, t = 0, n = 0, r = 0) {
		return {
			left: e,
			top: t,
			right: n,
			bottom: r
		};
	}
	e.create = t;
	function n() {
		return {
			left: 2 ** 53 - 1,
			top: 2 ** 53 - 1,
			right: -(2 ** 53 - 1),
			bottom: -(2 ** 53 - 1)
		};
	}
	e.createInvalid = n;
	function r(e) {
		return e.right - e.left;
	}
	e.width = r;
	function i(e) {
		return e.bottom - e.top;
	}
	e.height = i;
	function a(e) {
		return e.bottom <= e.top || e.right <= e.left;
	}
	e.isEmpty = a;
	function o(e) {
		return e.left < 2 ** 53 - 1;
	}
	e.isValid = o;
	function s(e) {
		return {
			x: Math.round((e.left + e.right) / 2),
			y: Math.round((e.top + e.bottom) / 2)
		};
	}
	e.midPoint = s;
	function c(e, t) {
		return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
	}
	e.contains = c;
	function l(e, t) {
		return t.left >= e.left && t.right <= e.right && t.top >= e.top && t.bottom <= e.bottom;
	}
	e.containsRect = l;
	function u(e, t) {
		return Math.max(e.left, t.left) <= Math.min(e.right, t.right) && Math.max(e.top, t.top) <= Math.min(e.bottom, t.bottom);
	}
	e.intersects = u;
	function d(e) {
		return [
			{
				x: e.left,
				y: e.top,
				z: 0
			},
			{
				x: e.right,
				y: e.top,
				z: 0
			},
			{
				x: e.right,
				y: e.bottom,
				z: 0
			},
			{
				x: e.left,
				y: e.bottom,
				z: 0
			}
		];
	}
	e.asPath = d;
})(rD ||= {});
var iD;
(function(e) {
	function t(e = 0, t = 0, n = 0, r = 0) {
		return {
			left: e,
			top: t,
			right: n,
			bottom: r
		};
	}
	e.create = t;
	function n() {
		return {
			left: Number.MAX_VALUE,
			top: Number.MAX_VALUE,
			right: -Number.MAX_VALUE,
			bottom: -Number.MAX_VALUE
		};
	}
	e.createInvalid = n;
	function r(e) {
		return e.right - e.left;
	}
	e.width = r;
	function i(e) {
		return e.bottom - e.top;
	}
	e.height = i;
	function a(e) {
		return e.bottom <= e.top || e.right <= e.left;
	}
	e.isEmpty = a;
	function o(e) {
		return {
			x: (e.left + e.right) / 2,
			y: (e.top + e.bottom) / 2
		};
	}
	e.midPoint = o;
	function s(e, t) {
		return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
	}
	e.contains = s;
	function c(e, t) {
		return t.left >= e.left && t.right <= e.right && t.top >= e.top && t.bottom <= e.bottom;
	}
	e.containsRect = c;
	function l(e, t) {
		return Math.max(e.left, t.left) < Math.min(e.right, t.right) && Math.max(e.top, t.top) < Math.min(e.bottom, t.bottom);
	}
	e.intersects = l;
	function u(e) {
		return [
			{
				x: e.left,
				y: e.top,
				z: 0
			},
			{
				x: e.right,
				y: e.top,
				z: 0
			},
			{
				x: e.right,
				y: e.bottom,
				z: 0
			},
			{
				x: e.left,
				y: e.bottom,
				z: 0
			}
		];
	}
	e.asPath = u;
})(iD ||= {});
var aD;
(function(e) {
	function t(e) {
		let t = "";
		for (let n of e) t += Z.toString(n);
		return t + "\n";
	}
	e.toString64 = t;
	function n(e, t = 2) {
		let n = "";
		for (let r of e) n += nD.toString(r, t) + ", ";
		return n !== "" && (n = n.slice(0, -2)), n;
	}
	e.toStringD = n;
	function r(e) {
		return [...e].reverse();
	}
	e.reverse64 = r;
	function i(e) {
		return [...e].reverse();
	}
	e.reverseD = i;
})(aD ||= {});
var oD;
(function(e) {
	function t(e) {
		let t = "";
		for (let n of e) t += aD.toString64(n);
		return t;
	}
	e.toString64 = t;
	function n(e, t = 2) {
		let n = "";
		for (let r of e) n += aD.toStringD(r, t) + "\n";
		return n;
	}
	e.toStringD = n;
	function r(e) {
		return e.map((e) => aD.reverse64(e));
	}
	e.reverse64 = r;
	function i(e) {
		return e.map((e) => aD.reverseD(e));
	}
	e.reverseD = i;
})(oD ||= {});
var sD = rD.createInvalid(), cD = iD.createInvalid(), Q;
(function(e) {
	e[e.None = 0] = "None", e[e.OpenStart = 1] = "OpenStart", e[e.OpenEnd = 2] = "OpenEnd", e[e.LocalMax = 4] = "LocalMax", e[e.LocalMin = 8] = "LocalMin";
})(Q ||= {});
var lD = class {
	data = [];
	push(e) {
		this.data.push(e), this.siftUp(this.data.length - 1);
	}
	pop() {
		if (this.data.length === 0) return null;
		let e = this.data[0], t = this.data.pop();
		return this.data.length > 0 && (this.data[0] = t, this.siftDown(0)), e;
	}
	clear() {
		this.data.length = 0;
	}
	siftUp(e) {
		for (; e > 0;) {
			let t = e - 1 >> 1;
			if (this.data[t] >= this.data[e]) break;
			[this.data[t], this.data[e]] = [this.data[e], this.data[t]], e = t;
		}
	}
	siftDown(e) {
		let t = this.data.length;
		for (;;) {
			let n = e, r = (e << 1) + 1, i = r + 1;
			if (r < t && this.data[r] > this.data[n] && (n = r), i < t && this.data[i] > this.data[n] && (n = i), n === e) break;
			[this.data[e], this.data[n]] = [this.data[n], this.data[e]], e = n;
		}
	}
}, uD = class {
	pt;
	next = null;
	prev = null;
	flags;
	constructor(e, t, n) {
		this.pt = e, this.flags = t, this.prev = n;
	}
}, dD = class {
	vertex;
	polytype;
	isOpen;
	constructor(e, t, n = !1) {
		this.vertex = e, this.polytype = t, this.isOpen = n;
	}
	equals(e) {
		return e !== null && this.vertex === e.vertex;
	}
};
function fD(e, t, n) {
	return {
		pt: {
			x: e.x,
			y: e.y,
			z: e.z || 0
		},
		edge1: t,
		edge2: n
	};
}
var pD = class e {
	static _nextId = 1;
	_debugId;
	pt;
	next;
	prev;
	outrec;
	horz;
	constructor(t, n) {
		this._debugId = e._nextId++, this.pt = t, this.outrec = n, this.next = this, this.prev = this, this.horz = null;
	}
}, mD;
(function(e) {
	e[e.None = 0] = "None", e[e.Left = 1] = "Left", e[e.Right = 2] = "Right";
})(mD ||= {});
var hD;
(function(e) {
	e[e.Bottom = 0] = "Bottom", e[e.Middle = 1] = "Middle", e[e.Top = 2] = "Top";
})(hD ||= {});
var gD = class e {
	static _nextId = 1;
	_debugId;
	idx = 0;
	owner = null;
	frontEdge = null;
	backEdge = null;
	pts = null;
	polypath = null;
	bounds = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	};
	path = [];
	isOpen = !1;
	splits = null;
	recursiveSplit = null;
	constructor() {
		this._debugId = e._nextId++;
	}
}, _D = class {
	leftOp;
	rightOp;
	leftToRight;
	constructor(e) {
		this.leftOp = e, this.rightOp = null, this.leftToRight = !0;
	}
}, vD = class {
	op1;
	op2;
	constructor(e, t) {
		this.op1 = e, this.op2 = t;
	}
}, yD = class {
	bot = {
		x: 0,
		y: 0,
		z: 0
	};
	top = {
		x: 0,
		y: 0,
		z: 0
	};
	curX = 0;
	dx = 0;
	windDx = 0;
	windCount = 0;
	windCount2 = 0;
	outrec = null;
	prevInAEL = null;
	nextInAEL = null;
	prevInSEL = null;
	nextInSEL = null;
	jump = null;
	vertexTop = null;
	localMin = null;
	isLeftBound = !1;
	joinWith = mD.None;
}, bD;
(function(e) {
	function t(e, t, n, r) {
		if ((e.flags & Q.LocalMin) !== Q.None) return;
		e.flags |= Q.LocalMin;
		let i = new dD(e, t, n);
		r.push(i);
	}
	e.addLocMin = t;
	function n(e, n, r, i, a) {
		for (let o = 0, s = e.length; o < s; o++) {
			let s = e[o], c = null, l = null;
			for (let e = 0, t = s.length; e < t; e++) {
				let t = s[e];
				if (c === null) c = new uD(t, Q.None, null), a.push(c), l = c;
				else if (l.pt.x !== t.x || l.pt.y !== t.y) {
					let e = new uD(t, Q.None, l);
					a.push(e), l.next = e, l = e;
				}
			}
			if (l?.prev === null || (!r && l.pt.x === c.pt.x && l.pt.y === c.pt.y && (l = l.prev), l.next = c, c.prev = l, !r && l.next === l)) continue;
			let u;
			if (r) {
				let e = c.next;
				for (; e !== c && e.pt.y === c.pt.y;) e = e.next;
				u = e.pt.y <= c.pt.y, u ? (c.flags = Q.OpenStart, t(c, n, !0, i)) : c.flags = Q.OpenStart | Q.LocalMax;
			} else {
				for (l = c.prev; l !== c && l.pt.y === c.pt.y;) l = l.prev;
				if (l === c) continue;
				u = l.pt.y > c.pt.y;
			}
			let d = u;
			l = c;
			let f = c.next;
			for (; f !== c;) f.pt.y > l.pt.y && u ? (l.flags |= Q.LocalMax, u = !1) : f.pt.y < l.pt.y && !u && (u = !0, t(l, n, r, i)), l = f, f = f.next;
			r ? (l.flags |= Q.OpenEnd, u ? l.flags |= Q.LocalMax : t(l, n, r, i)) : u !== d && (d ? t(l, n, !1, i) : l.flags |= Q.LocalMax);
		}
	}
	e.addPathsToVertexList = n;
})(bD ||= {});
var xD = class e {
	cliptype = eD.NoClip;
	fillrule = J.EvenOdd;
	actives = null;
	sel = null;
	minimaList = [];
	intersectList = [];
	vertexList = [];
	outrecList = [];
	scanlineHeap = new lD();
	scanlineSet = /* @__PURE__ */ new Set();
	scanlineArr = [];
	useScanlineArray = !1;
	horzSegList = [];
	horzJoinList = [];
	currentLocMin = 0;
	currentBotY = 0;
	isSortedMinimaList = !1;
	hasOpenPaths = !1;
	usingPolytree = !1;
	succeeded = !1;
	preserveCollinear = !0;
	reverseSolution = !1;
	constructor() {}
	getZCallback() {}
	xyEqual(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	setZ(t, n, r) {
		let i = this.getZCallback();
		i && (e.getPolyType(t) === tD.Subject ? (r.z = this.xyEqual(r, t.bot) ? t.bot.z : this.xyEqual(r, t.top) ? t.top.z : this.xyEqual(r, n.bot) ? n.bot.z : this.xyEqual(r, n.top) ? n.top.z : 0, i(t.bot, t.top, n.bot, n.top, r)) : (r.z = this.xyEqual(r, n.bot) ? n.bot.z : this.xyEqual(r, n.top) ? n.top.z : this.xyEqual(r, t.bot) ? t.bot.z : this.xyEqual(r, t.top) ? t.top.z : 0, i(n.bot, n.top, t.bot, t.top, r)));
	}
	static isOdd(e) {
		return !!(e & 1);
	}
	static isHotEdge(e) {
		return e.outrec != null;
	}
	static isOpen(e) {
		return e.localMin.isOpen;
	}
	static isOpenEnd(t) {
		return t.localMin.isOpen && e.isOpenEndVertex(t.vertexTop);
	}
	static isOpenEndVertex(e) {
		return (e.flags & (Q.OpenStart | Q.OpenEnd)) !== Q.None;
	}
	static getPrevHotEdge(t) {
		let n = t.prevInAEL;
		for (; n !== null && (e.isOpen(n) || !e.isHotEdge(n));) n = n.prevInAEL;
		return n;
	}
	static isFront(e) {
		return e === e.outrec.frontEdge;
	}
	static getDx(e, t) {
		let n = t.y - e.y;
		return n === 0 ? t.x > e.x ? -Infinity : Infinity : (t.x - e.x) / n;
	}
	static topX(e, t) {
		return t === e.top.y || e.top.x === e.bot.x ? e.top.x : t === e.bot.y ? e.bot.x : X.roundToEven(e.bot.x + e.dx * (t - e.bot.y));
	}
	static isHorizontal(e) {
		return e.top.y === e.bot.y;
	}
	static isHeadingRightHorz(e) {
		return e.dx === -Infinity;
	}
	static isHeadingLeftHorz(e) {
		return e.dx === Infinity;
	}
	static swapActives(e, t) {
		return [t, e];
	}
	static getPolyType(e) {
		return e.localMin.polytype;
	}
	static isSamePolyType(e, t) {
		return e.localMin.polytype === t.localMin.polytype;
	}
	static setDx(t) {
		t.dx = e.getDx(t.bot, t.top);
	}
	static nextVertex(e) {
		return e.windDx > 0 ? e.vertexTop.next : e.vertexTop.prev;
	}
	static prevPrevVertex(e) {
		return e.windDx > 0 ? e.vertexTop.prev.prev : e.vertexTop.next.next;
	}
	static isMaxima(t) {
		return "flags" in t ? (t.flags & Q.LocalMax) !== Q.None : e.isMaxima(t.vertexTop);
	}
	static getMaximaPair(e) {
		let t = e.nextInAEL;
		for (; t !== null;) {
			if (t.vertexTop === e.vertexTop) return t;
			t = t.nextInAEL;
		}
		return null;
	}
	boundingBoxesOverlap(e, t, n, r) {
		let i = Math.min(e.x, t.x), a = Math.max(e.x, t.x), o = Math.min(e.y, t.y), s = Math.max(e.y, t.y), c = Math.min(n.x, r.x), l = Math.max(n.x, r.x), u = Math.min(n.y, r.y), d = Math.max(n.y, r.y);
		return !(a < c || l < i || s < u || d < o);
	}
	clearSolutionOnly() {
		for (; this.actives !== null;) this.deleteFromAEL(this.actives);
		this.scanlineHeap.clear(), this.scanlineSet.clear(), this.scanlineArr.length = 0, this.disposeIntersectNodes(), this.outrecList.length = 0, this.horzSegList.length = 0, this.horzJoinList.length = 0;
	}
	clear() {
		this.clearSolutionOnly(), this.minimaList.length = 0, this.vertexList.length = 0, this.currentLocMin = 0, this.isSortedMinimaList = !1, this.hasOpenPaths = !1;
	}
	reset() {
		this.isSortedMinimaList ||= (this.minimaList.sort((e, t) => t.vertex.pt.y - e.vertex.pt.y), !0), this.scanlineHeap.clear(), this.scanlineSet.clear(), this.scanlineArr.length = 0, this.useScanlineArray = this.minimaList.length <= 16;
		for (let e = this.minimaList.length - 1; e >= 0; e--) this.insertScanline(this.minimaList[e].vertex.pt.y);
		this.currentBotY = 0, this.currentLocMin = 0, this.actives = null, this.sel = null, this.succeeded = !0;
	}
	upgradeScanlineStructureFromArray() {
		let e = this.scanlineArr;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			this.scanlineSet.add(n), this.scanlineHeap.push(n);
		}
		e.length = 0, this.useScanlineArray = !1;
	}
	insertScanline(e) {
		if (this.useScanlineArray) {
			let t = this.scanlineArr;
			for (let n = 0, r = t.length; n < r; n++) if (t[n] === e) return;
			t.push(e), t.length > 64 && this.upgradeScanlineStructureFromArray();
		} else this.scanlineSet.has(e) || (this.scanlineSet.add(e), this.scanlineHeap.push(e));
	}
	popScanline() {
		if (this.useScanlineArray) {
			let e = this.scanlineArr, t = e.length;
			if (t === 0) return {
				success: !1,
				y: 0
			};
			let n = 0, r = e[0];
			for (let i = 1; i < t; i++) {
				let t = e[i];
				t > r && (r = t, n = i);
			}
			return e[n] = e[t - 1], e.pop(), {
				success: !0,
				y: r
			};
		}
		let e = this.scanlineHeap.pop();
		return e === null ? {
			success: !1,
			y: 0
		} : (this.scanlineSet.delete(e), {
			success: !0,
			y: e
		});
	}
	hasLocMinAtY(e) {
		return this.currentLocMin < this.minimaList.length && this.minimaList[this.currentLocMin].vertex.pt.y === e;
	}
	popLocalMinima() {
		return this.minimaList[this.currentLocMin++];
	}
	addPath(e, t, n = !1) {
		let r = [e];
		this.addPaths(r, t, n);
	}
	addPaths(e, t, n = !1) {
		n && (this.hasOpenPaths = !0), this.isSortedMinimaList = !1, bD.addPathsToVertexList(e, t, n, this.minimaList, this.vertexList);
	}
	addReuseableData(e) {
		if (e.minimaList.length !== 0) {
			this.isSortedMinimaList = !1;
			for (let t of e.minimaList) this.minimaList.push(new dD(t.vertex, t.polytype, t.isOpen)), t.isOpen && (this.hasOpenPaths = !0);
		}
	}
	deleteFromAEL(e) {
		let t = e.prevInAEL, n = e.nextInAEL;
		(t !== null || n !== null || e === this.actives) && (t === null ? this.actives = n : t.nextInAEL = n, n !== null && (n.prevInAEL = t));
	}
	getBounds() {
		let e = {
			left: 2 ** 53 - 1,
			top: 2 ** 53 - 1,
			right: -(2 ** 53 - 1),
			bottom: -(2 ** 53 - 1)
		};
		for (let t of this.vertexList) {
			let n = t;
			do
				n.pt.x < e.left && (e.left = n.pt.x), n.pt.x > e.right && (e.right = n.pt.x), n.pt.y < e.top && (e.top = n.pt.y), n.pt.y > e.bottom && (e.bottom = n.pt.y), n = n.next;
			while (n !== t);
		}
		return rD.isEmpty(e) ? {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		} : e;
	}
	executeInternal(e, t) {
		if (e === eD.NoClip) return;
		this.fillrule = t, this.cliptype = e, this.reset();
		let n = this.popScanline();
		if (!n.success) return;
		let r = n.y;
		for (; this.succeeded;) {
			this.insertLocalMinimaIntoAEL(r);
			let e;
			for (; (e = this.popHorz()) !== null;) this.doHorizontal(e);
			this.horzSegList.length > 0 && (this.convertHorzSegsToJoins(), this.horzSegList.length = 0), this.currentBotY = r;
			let t = this.popScanline();
			if (!t.success) break;
			for (r = t.y, this.doIntersections(r), this.doTopOfScanbeam(r); (e = this.popHorz()) !== null;) this.doHorizontal(e);
		}
		this.succeeded && this.processHorzJoins();
	}
	insertLocalMinimaIntoAEL(t) {
		for (; this.hasLocMinAtY(t);) {
			let t = this.popLocalMinima(), n;
			(t.vertex.flags & Q.OpenStart) === Q.None ? (n = new yD(), n.bot = {
				x: t.vertex.pt.x,
				y: t.vertex.pt.y,
				z: t.vertex.pt.z || 0
			}, n.curX = t.vertex.pt.x, n.windDx = -1, n.vertexTop = t.vertex.prev, n.top = {
				x: t.vertex.prev.pt.x,
				y: t.vertex.prev.pt.y,
				z: t.vertex.prev.pt.z || 0
			}, n.outrec = null, n.localMin = t, e.setDx(n)) : n = null;
			let r;
			(t.vertex.flags & Q.OpenEnd) === Q.None ? (r = new yD(), r.bot = {
				x: t.vertex.pt.x,
				y: t.vertex.pt.y,
				z: t.vertex.pt.z || 0
			}, r.curX = t.vertex.pt.x, r.windDx = 1, r.vertexTop = t.vertex.next, r.top = {
				x: t.vertex.next.pt.x,
				y: t.vertex.next.pt.y,
				z: t.vertex.next.pt.z || 0
			}, r.outrec = null, r.localMin = t, e.setDx(r)) : r = null, n !== null && r !== null ? e.isHorizontal(n) ? e.isHeadingRightHorz(n) && ([n, r] = e.swapActives(n, r)) : e.isHorizontal(r) ? e.isHeadingLeftHorz(r) && ([n, r] = e.swapActives(n, r)) : n.dx < r.dx && ([n, r] = e.swapActives(n, r)) : n === null && (n = r, r = null);
			let i;
			if (n.isLeftBound = !0, this.insertLeftEdge(n), e.isOpen(n) ? (this.setWindCountForOpenPathEdge(n), i = this.isContributingOpen(n)) : (this.setWindCountForClosedPathEdge(n), i = this.isContributingClosed(n)), r !== null) {
				for (r.windCount = n.windCount, r.windCount2 = n.windCount2, this.insertRightEdge(n, r), i && (this.addLocalMinPoly(n, r, n.bot, !0), e.isHorizontal(n) || this.checkJoinLeft(n, n.bot)); r.nextInAEL !== null && this.isValidAelOrder(r.nextInAEL, r);) this.intersectEdges(r, r.nextInAEL, r.bot), this.swapPositionsInAEL(r, r.nextInAEL);
				e.isHorizontal(r) ? this.pushHorz(r) : (this.checkJoinRight(r, r.bot), this.insertScanline(r.top.y));
			} else i && this.startOpenPath(n, n.bot);
			e.isHorizontal(n) ? this.pushHorz(n) : this.insertScanline(n.top.y);
		}
	}
	pushHorz(e) {
		e.nextInSEL = this.sel, this.sel = e;
	}
	popHorz() {
		let e = this.sel;
		return e === null ? null : (this.sel = this.sel.nextInSEL, e);
	}
	doHorizontal(t) {
		let n = e.isOpen(t), r = t.bot.y, i = n ? this.getCurrYMaximaVertexOpen(t) : this.getCurrYMaximaVertex(t), { isLeftToRight: a, leftX: o, rightX: s } = this.resetHorzDirection(t, i), c = o, l = s;
		if (e.isHotEdge(t)) {
			let e = this.addOutPt(t, {
				x: t.curX,
				y: r
			});
			this.addToHorzSegList(e);
		}
		for (;;) {
			let o = a ? t.nextInAEL : t.prevInAEL;
			for (; o !== null;) {
				if (o.vertexTop === i) {
					if (e.isHotEdge(t) && this.isJoined(o) && this.split(o, o.top), e.isHotEdge(t)) {
						for (; t.vertexTop !== i;) this.addOutPt(t, t.top), this.updateEdgeIntoAEL(t);
						a ? this.addLocalMaxPoly(t, o, t.top) : this.addLocalMaxPoly(o, t, t.top);
					}
					this.deleteFromAEL(o), this.deleteFromAEL(t);
					return;
				}
				if (i !== t.vertexTop || e.isOpenEnd(t)) {
					if (a && o.curX > l || !a && o.curX < c) break;
					if (o.curX === t.top.x && !e.isHorizontal(o)) {
						let n = e.nextVertex(t).pt;
						if (e.isOpen(o) && !e.isSamePolyType(o, t) && !e.isHotEdge(o)) {
							if (a && e.topX(o, n.y) > n.x || !a && e.topX(o, n.y) < n.x) break;
						} else if (a && e.topX(o, n.y) >= n.x || !a && e.topX(o, n.y) <= n.x) break;
					}
				}
				let n = {
					x: o.curX,
					y: r
				};
				a ? (this.intersectEdges(t, o, n), this.swapPositionsInAEL(t, o), this.checkJoinLeft(o, n), t.curX = o.curX, o = t.nextInAEL) : (this.intersectEdges(o, t, n), this.swapPositionsInAEL(o, t), this.checkJoinRight(o, n), t.curX = o.curX, o = t.prevInAEL), e.isHotEdge(t) && this.addToHorzSegList(this.getLastOp(t));
			}
			if (n && e.isOpenEnd(t)) {
				e.isHotEdge(t) && (this.addOutPt(t, t.top), e.isFront(t) ? t.outrec.frontEdge = null : t.outrec.backEdge = null, t.outrec = null), this.deleteFromAEL(t);
				return;
			}
			if (e.nextVertex(t).pt.y !== t.top.y) break;
			e.isHotEdge(t) && this.addOutPt(t, t.top), this.updateEdgeIntoAEL(t);
			let s = this.resetHorzDirection(t, i);
			c = s.leftX, l = s.rightX;
		}
		if (e.isHotEdge(t)) {
			let e = this.addOutPt(t, t.top);
			this.addToHorzSegList(e);
		}
		this.updateEdgeIntoAEL(t);
	}
	convertHorzSegsToJoins() {
		let e = 0;
		for (let t of this.horzSegList) this.updateHorzSegment(t) && e++;
		if (!(e < 2)) {
			this.horzSegList.sort((e, t) => this.horzSegSort(e, t));
			for (let t = 0; t < e - 1; t++) {
				let n = this.horzSegList[t];
				for (let r = t + 1; r < e; r++) {
					let e = this.horzSegList[r];
					if (e.leftOp.pt.x >= n.rightOp.pt.x || e.leftToRight === n.leftToRight || e.rightOp.pt.x <= n.leftOp.pt.x) continue;
					let t = n.leftOp.pt.y;
					if (n.leftToRight) {
						for (; n.leftOp.next.pt.y === t && n.leftOp.next.pt.x <= e.leftOp.pt.x;) n.leftOp = n.leftOp.next;
						for (; e.leftOp.prev.pt.y === t && e.leftOp.prev.pt.x <= n.leftOp.pt.x;) e.leftOp = e.leftOp.prev;
						let r = new vD(this.duplicateOp(n.leftOp, !0), this.duplicateOp(e.leftOp, !1));
						this.horzJoinList.push(r);
					} else {
						for (; n.leftOp.prev.pt.y === t && n.leftOp.prev.pt.x <= e.leftOp.pt.x;) n.leftOp = n.leftOp.prev;
						for (; e.leftOp.next.pt.y === t && e.leftOp.next.pt.x <= n.leftOp.pt.x;) e.leftOp = e.leftOp.next;
						let r = new vD(this.duplicateOp(e.leftOp, !0), this.duplicateOp(n.leftOp, !1));
						this.horzJoinList.push(r);
					}
				}
			}
		}
	}
	updateHorzSegment(e) {
		let t = e.leftOp, n = this.getRealOutRec(t.outrec), r = n.frontEdge !== null, i = t.pt.y, a = t, o = t;
		if (r) {
			let e = n.pts, t = e.next;
			for (; a !== t && a.prev.pt.y === i;) a = a.prev;
			for (; o !== e && o.next.pt.y === i;) o = o.next;
		} else {
			for (; a.prev !== o && a.prev.pt.y === i;) a = a.prev;
			for (; o.next !== a && o.next.pt.y === i;) o = o.next;
		}
		let s = this.setHorzSegHeadingForward(e, a, o) && e.leftOp.horz === null;
		return s ? e.leftOp.horz = e : e.rightOp = null, s;
	}
	setHorzSegHeadingForward(e, t, n) {
		return t.pt.x !== n.pt.x && (t.pt.x < n.pt.x ? (e.leftOp = t, e.rightOp = n, e.leftToRight = !0) : (e.leftOp = n, e.rightOp = t, e.leftToRight = !1), !0);
	}
	horzSegSort(e, t) {
		return e.rightOp === null ? t.rightOp === null ? 0 : 1 : t.rightOp === null ? -1 : e.leftOp.pt.x - t.leftOp.pt.x;
	}
	duplicateOp(e, t) {
		let n = new pD(e.pt, e.outrec);
		return t ? (n.next = e.next, n.next.prev = n, n.prev = e, e.next = n) : (n.prev = e.prev, n.prev.next = n, n.next = e, e.prev = n), n;
	}
	getRealOutRec(e) {
		for (; e !== null && e.pts === null;) e = e.owner;
		return e;
	}
	doIntersections(e) {
		this.buildIntersectList(e) && (this.processIntersectList(), this.disposeIntersectNodes());
	}
	doTopOfScanbeam(t) {
		this.sel = null;
		let n = this.actives;
		for (; n !== null;) {
			if (n.top.y === t) {
				if (n.curX = n.top.x, e.isMaxima(n)) {
					n = this.doMaxima(n);
					continue;
				}
				e.isHotEdge(n) && this.addOutPt(n, n.top), this.updateEdgeIntoAEL(n), e.isHorizontal(n) && this.pushHorz(n);
			} else n.curX = e.topX(n, t);
			n = n.nextInAEL;
		}
	}
	processHorzJoins() {
		for (let e of this.horzJoinList) {
			let t = this.getRealOutRec(e.op1.outrec), n = this.getRealOutRec(e.op2.outrec), r = e.op1.next, i = e.op2.prev;
			if (e.op1.next = e.op2, e.op2.prev = e.op1, r.prev = i, i.next = r, t === n) {
				let n = this.newOutRec();
				n.pts = r, this.fixOutRecPts(n), t.pts.outrec === n && (t.pts = e.op1, t.pts.outrec = t), this.usingPolytree ? (this.path1InsidePath2(t.pts, n.pts) ? ([n.pts, t.pts] = [t.pts, n.pts], this.fixOutRecPts(t), this.fixOutRecPts(n), n.owner = t) : n.owner = this.path1InsidePath2(n.pts, t.pts) ? t : t.owner, t.splits === null && (t.splits = []), t.splits.push(n.idx)) : n.owner = t;
			} else n.pts = null, this.usingPolytree ? (this.setOwner(n, t), this.moveSplits(n, t)) : n.owner = t;
		}
	}
	fixOutRecPts(e) {
		let t = e.pts;
		do
			t.outrec = e, t = t.next;
		while (t !== e.pts);
	}
	path1InsidePath2(e, t) {
		let n = Y.IsOn, r = e;
		do {
			switch (this.pointInOpPolygon(r.pt, t)) {
				case Y.IsOutside:
					if (n === Y.IsOutside) return !1;
					n = Y.IsOutside;
					break;
				case Y.IsInside:
					if (n === Y.IsInside) return !0;
					n = Y.IsInside;
			}
			r = r.next;
		} while (r !== e);
		return X.path2ContainsPath1(this.getCleanPath(e), this.getCleanPath(t));
	}
	pointInOpPolygon(e, t) {
		if (t === t.next || t.prev === t.next) return Y.IsOutside;
		let n = t;
		do {
			if (t.pt.y !== e.y) break;
			t = t.next;
		} while (t !== n);
		if (t.pt.y === e.y) return Y.IsOutside;
		let r = t.pt.y < e.y, i = r, a = 0;
		for (n = t.next; n !== t;) {
			if (r) for (; n !== t && n.pt.y < e.y;) n = n.next;
			else for (; n !== t && n.pt.y > e.y;) n = n.next;
			if (n === t) break;
			if (n.pt.y === e.y) {
				if (n.pt.x === e.x || n.pt.y === n.prev.pt.y && e.x < n.prev.pt.x != e.x < n.pt.x) return Y.IsOn;
				if (n = n.next, n === t) break;
			} else {
				if (n.pt.x <= e.x || n.prev.pt.x <= e.x) {
					if (n.prev.pt.x < e.x && n.pt.x < e.x) a = 1 - a;
					else {
						let t = X.crossProduct(n.prev.pt, n.pt, e);
						if (t === 0) return Y.IsOn;
						t < 0 === r && (a = 1 - a);
					}
				}
				r = !r, n = n.next;
			}
		}
		if (r === i) return a === 0 ? Y.IsOutside : Y.IsInside;
		{
			let t = X.crossProduct(n.prev.pt, n.pt, e);
			if (t === 0) return Y.IsOn;
			t < 0 === r && (a = 1 - a);
		}
		return a === 0 ? Y.IsOutside : Y.IsInside;
	}
	getCleanPath(e) {
		let t = [], n = e;
		for (; n.next !== e && (n.pt.x === n.next.pt.x && n.pt.x === n.prev.pt.x || n.pt.y === n.next.pt.y && n.pt.y === n.prev.pt.y);) n = n.next;
		t.push(n.pt);
		let r = n;
		for (n = n.next; n !== e;) n.pt.x === n.next.pt.x && n.pt.x === r.pt.x || n.pt.y === n.next.pt.y && n.pt.y === r.pt.y || (t.push(n.pt), r = n), n = n.next;
		return t;
	}
	moveSplits(e, t) {
		if (e.splits !== null) {
			t.splits === null && (t.splits = []);
			for (let n of e.splits) n !== t.idx && t.splits.push(n);
			e.splits = null;
		}
	}
	buildIntersectList(e) {
		if (this.actives?.nextInAEL === null) return !1;
		this.adjustCurrXAndCopyToSEL(e);
		let t = this.sel;
		for (; t !== null && t.jump !== null;) {
			let n = null;
			for (; t !== null && t.jump !== null;) {
				let r = t, i = t.jump, a = i, o = i?.jump || null;
				for (t.jump = o; t !== a && i !== o;) if (i.curX < t.curX) {
					let s = i.prevInSEL;
					for (; this.addNewIntersectNode(s, i, e), s !== t;) s = s.prevInSEL;
					if (s = i, i = this.extractFromSEL(s), a = i, t !== null && this.insert1Before2InSEL(s, t), t !== r) continue;
					r = s, r.jump = o, n === null ? this.sel = r : n.jump = r;
				} else t = t.nextInSEL;
				n = r, t = o;
			}
			t = this.sel;
		}
		return this.intersectList.length > 0;
	}
	processIntersectList() {
		this.intersectList.sort((e, t) => e.pt.y === t.pt.y ? e.pt.x === t.pt.x ? e.edge1.curX === t.edge1.curX ? e.edge2.curX < t.edge2.curX ? -1 : +(e.edge2.curX > t.edge2.curX) : e.edge1.curX < t.edge1.curX ? -1 : 1 : e.pt.x < t.pt.x ? -1 : 1 : e.pt.y > t.pt.y ? -1 : 1);
		for (let e = 0; e < this.intersectList.length; ++e) {
			if (!this.edgesAdjacentInAEL(this.intersectList[e])) {
				let t = e + 1;
				for (; !this.edgesAdjacentInAEL(this.intersectList[t]);) t++;
				[this.intersectList[t], this.intersectList[e]] = [this.intersectList[e], this.intersectList[t]];
			}
			let t = this.intersectList[e];
			this.intersectEdges(t.edge1, t.edge2, t.pt), this.swapPositionsInAEL(t.edge1, t.edge2), t.edge1.curX = t.pt.x, t.edge2.curX = t.pt.x, this.checkJoinLeft(t.edge2, t.pt, !0), this.checkJoinRight(t.edge1, t.pt, !0);
		}
	}
	edgesAdjacentInAEL(e) {
		return e.edge1.nextInAEL === e.edge2 || e.edge1.prevInAEL === e.edge2;
	}
	adjustCurrXAndCopyToSEL(t) {
		let n = this.actives;
		for (this.sel = n; n !== null;) n.prevInSEL = n.prevInAEL, n.nextInSEL = n.nextInAEL, n.jump = n.nextInSEL, n.curX = e.topX(n, t), n = n.nextInAEL;
	}
	doMaxima(t) {
		let n = t.prevInAEL, r = t.nextInAEL;
		if (e.isOpenEnd(t)) return e.isHotEdge(t) && this.addOutPt(t, t.top), e.isHorizontal(t) || (e.isHotEdge(t) && (e.isFront(t) ? t.outrec.frontEdge = null : t.outrec.backEdge = null, t.outrec = null), this.deleteFromAEL(t)), r;
		let i = e.getMaximaPair(t);
		if (i === null) return r;
		for (this.isJoined(t) && this.split(t, t.top), this.isJoined(i) && this.split(i, i.top); r !== i;) this.intersectEdges(t, r, t.top), this.swapPositionsInAEL(t, r), r = t.nextInAEL;
		return e.isOpen(t) ? (e.isHotEdge(t) && this.addLocalMaxPoly(t, i, t.top), this.deleteFromAEL(i), this.deleteFromAEL(t), n === null ? this.actives : n.nextInAEL) : (e.isHotEdge(t) && this.addLocalMaxPoly(t, i, t.top), this.deleteFromAEL(t), this.deleteFromAEL(i), n === null ? this.actives : n.nextInAEL);
	}
	updateEdgeIntoAEL(t) {
		t.bot = {
			x: t.top.x,
			y: t.top.y,
			z: t.top.z || 0
		}, t.vertexTop = e.nextVertex(t), t.top = {
			x: t.vertexTop.pt.x,
			y: t.vertexTop.pt.y,
			z: t.vertexTop.pt.z || 0
		}, t.curX = t.bot.x, e.setDx(t), this.isJoined(t) && this.split(t, t.bot), e.isHorizontal(t) ? e.isOpen(t) || this.trimHorz(t, this.preserveCollinear) : (this.insertScanline(t.top.y), this.checkJoinLeft(t, t.bot), this.checkJoinRight(t, t.bot, !0));
	}
	trimHorz(t, n) {
		let r = !1, i = e.nextVertex(t).pt;
		for (; i.y === t.top.y && !(n && i.x < t.top.x != t.bot.x < t.top.x || (t.vertexTop = e.nextVertex(t), t.top = i, r = !0, e.isMaxima(t)));) i = e.nextVertex(t).pt;
		r && e.setDx(t);
	}
	addToHorzSegList(e) {
		e.outrec.isOpen || this.horzSegList.push(new _D(e));
	}
	addNewIntersectNode(t, n, r) {
		let i = X.getLineIntersectPt(t.bot, t.top, n.bot, n.top), a;
		if (a = i.intersects ? i.point : {
			x: t.curX,
			y: r,
			z: 0
		}, a.y > this.currentBotY || a.y < r) {
			let i = Math.abs(t.dx), o = Math.abs(n.dx);
			i > 100 && o > 100 ? a = i > o ? X.getClosestPtOnSegment(a, t.bot, t.top) : X.getClosestPtOnSegment(a, n.bot, n.top) : i > 100 ? a = X.getClosestPtOnSegment(a, t.bot, t.top) : o > 100 ? a = X.getClosestPtOnSegment(a, n.bot, n.top) : (a.y < r ? a.y = r : a.y = this.currentBotY, i < o ? a.x = e.topX(t, a.y) : a.x = e.topX(n, a.y));
		}
		let o = fD(a, t, n);
		this.intersectList.push(o);
	}
	extractFromSEL(e) {
		let t = e.nextInSEL;
		return t !== null && (t.prevInSEL = e.prevInSEL), e.prevInSEL.nextInSEL = t, t;
	}
	insert1Before2InSEL(e, t) {
		e.prevInSEL = t.prevInSEL, e.prevInSEL !== null && (e.prevInSEL.nextInSEL = e), e.nextInSEL = t, t.prevInSEL = e;
	}
	getCurrYMaximaVertexOpen(t) {
		let n = t.vertexTop;
		if (t.windDx > 0) for (; n.next.pt.y === n.pt.y && (n.flags & (Q.OpenEnd | Q.LocalMax)) === Q.None;) n = n.next;
		else for (; n.prev.pt.y === n.pt.y && (n.flags & (Q.OpenEnd | Q.LocalMax)) === Q.None;) n = n.prev;
		return e.isMaxima(n) || (n = null), n;
	}
	getCurrYMaximaVertex(t) {
		let n = t.vertexTop;
		if (t.windDx > 0) for (; n.next.pt.y === n.pt.y;) n = n.next;
		else for (; n.prev.pt.y === n.pt.y;) n = n.prev;
		return e.isMaxima(n) || (n = null), n;
	}
	resetHorzDirection(e, t) {
		if (e.bot.x === e.top.x) {
			let n = e.curX, r = e.curX, i = e.nextInAEL;
			for (; i !== null && i.vertexTop !== t;) i = i.nextInAEL;
			return {
				isLeftToRight: i !== null,
				leftX: n,
				rightX: r
			};
		}
		return e.curX < e.top.x ? {
			isLeftToRight: !0,
			leftX: e.curX,
			rightX: e.top.x
		} : {
			isLeftToRight: !1,
			leftX: e.top.x,
			rightX: e.curX
		};
	}
	getLastOp(e) {
		let t = e.outrec;
		return e === t.frontEdge ? t.pts : t.pts.next;
	}
	insertLeftEdge(e) {
		if (this.actives === null) e.prevInAEL = null, e.nextInAEL = null, this.actives = e;
		else if (!this.isValidAelOrder(this.actives, e)) e.prevInAEL = null, e.nextInAEL = this.actives, this.actives.prevInAEL = e, this.actives = e;
		else {
			let t = this.actives;
			for (; t.nextInAEL !== null && this.isValidAelOrder(t.nextInAEL, e);) t = t.nextInAEL;
			t.joinWith === mD.Right && (t = t.nextInAEL), e.nextInAEL = t.nextInAEL, t.nextInAEL !== null && (t.nextInAEL.prevInAEL = e), e.prevInAEL = t, t.nextInAEL = e;
		}
	}
	insertRightEdge(e, t) {
		t.nextInAEL = e.nextInAEL, e.nextInAEL !== null && (e.nextInAEL.prevInAEL = t), t.prevInAEL = e, e.nextInAEL = t;
	}
	setWindCountForOpenPathEdge(t) {
		let n = this.actives;
		if (this.fillrule === J.EvenOdd) {
			let r = 0, i = 0;
			for (; n !== t;) e.getPolyType(n) === tD.Clip ? i++ : e.isOpen(n) || r++, n = n.nextInAEL;
			t.windCount = +!!e.isOdd(r), t.windCount2 = +!!e.isOdd(i);
		} else for (; n !== t;) e.getPolyType(n) === tD.Clip ? t.windCount2 += n.windDx : e.isOpen(n) || (t.windCount += n.windDx), n = n.nextInAEL;
	}
	setWindCountForClosedPathEdge(t) {
		let n = t.prevInAEL, r = e.getPolyType(t);
		for (; n !== null && (e.getPolyType(n) !== r || e.isOpen(n));) n = n.prevInAEL;
		if (n === null ? (t.windCount = t.windDx, n = this.actives) : this.fillrule === J.EvenOdd ? (t.windCount = t.windDx, t.windCount2 = n.windCount2, n = n.nextInAEL) : (t.windCount = n.windCount * n.windDx < 0 ? Math.abs(n.windCount) > 1 ? n.windDx * t.windDx < 0 ? n.windCount : n.windCount + t.windDx : e.isOpen(t) ? 1 : t.windDx : n.windDx * t.windDx < 0 ? n.windCount : n.windCount + t.windDx, t.windCount2 = n.windCount2, n = n.nextInAEL), this.fillrule === J.EvenOdd) for (; n !== t;) e.getPolyType(n) !== r && !e.isOpen(n) && (t.windCount2 = +(t.windCount2 === 0)), n = n.nextInAEL;
		else for (; n !== t;) e.getPolyType(n) !== r && !e.isOpen(n) && (t.windCount2 += n.windDx), n = n.nextInAEL;
	}
	isContributingOpen(e) {
		let t, n;
		switch (this.fillrule) {
			case J.Positive:
				n = e.windCount > 0, t = e.windCount2 > 0;
				break;
			case J.Negative:
				n = e.windCount < 0, t = e.windCount2 < 0;
				break;
			default: n = e.windCount !== 0, t = e.windCount2 !== 0;
		}
		switch (this.cliptype) {
			case eD.Intersection: return t;
			case eD.Union: return !n && !t;
			default: return !t;
		}
	}
	isContributingClosed(t) {
		switch (this.fillrule) {
			case J.Positive:
				if (t.windCount !== 1) return !1;
				break;
			case J.Negative:
				if (t.windCount !== -1) return !1;
				break;
			case J.NonZero: if (Math.abs(t.windCount) !== 1) return !1;
		}
		switch (this.cliptype) {
			case eD.Intersection: return this.fillrule === J.Positive ? t.windCount2 > 0 : this.fillrule === J.Negative ? t.windCount2 < 0 : t.windCount2 !== 0;
			case eD.Union: return this.fillrule === J.Positive ? t.windCount2 <= 0 : this.fillrule === J.Negative ? t.windCount2 >= 0 : t.windCount2 === 0;
			case eD.Difference:
				let n = this.fillrule === J.Positive ? t.windCount2 <= 0 : this.fillrule === J.Negative ? t.windCount2 >= 0 : t.windCount2 === 0;
				return e.getPolyType(t) === tD.Subject ? n : !n;
			case eD.Xor: return !0;
			default: return !1;
		}
	}
	addLocalMinPoly(t, n, r, i = !1) {
		let a = this.newOutRec();
		if (t.outrec = a, n.outrec = a, e.isOpen(t)) a.owner = null, a.isOpen = !0, t.windDx > 0 ? this.setSides(a, t, n) : this.setSides(a, n, t);
		else {
			a.isOpen = !1;
			let r = e.getPrevHotEdge(t);
			r === null ? (a.owner = null, i ? this.setSides(a, t, n) : this.setSides(a, n, t)) : (this.usingPolytree && this.setOwner(a, r.outrec), a.owner = r.outrec, this.outrecIsAscending(r) === i ? this.setSides(a, n, t) : this.setSides(a, t, n));
		}
		let o = new pD(r, a);
		return a.pts = o, o;
	}
	outrecIsAscending(e) {
		return e === e.outrec.frontEdge;
	}
	newOutRec() {
		let e = new gD();
		return e.idx = this.outrecList.length, this.outrecList.push(e), e;
	}
	startOpenPath(e, t) {
		let n = this.newOutRec();
		n.isOpen = !0, e.windDx > 0 ? (n.frontEdge = e, n.backEdge = null) : (n.frontEdge = null, n.backEdge = e), e.outrec = n;
		let r = new pD(t, n);
		return n.pts = r, r;
	}
	checkJoinLeft(t, n, r = !1) {
		let i = t.prevInAEL;
		if (!(i === null || !e.isHotEdge(t) || !e.isHotEdge(i) || e.isHorizontal(t) || e.isHorizontal(i) || e.isOpen(t) || e.isOpen(i)) && !((n.y < t.top.y + 2 || n.y < i.top.y + 2) && (t.bot.y > n.y || i.bot.y > n.y))) {
			if (r) {
				if (this.perpendicDistFromLineSqrd(n, i.bot, i.top) > .25) return;
			} else if (t.curX !== i.curX) return;
			X.isCollinear(t.top, n, i.top) && (t.outrec.idx === i.outrec.idx ? this.addLocalMaxPoly(i, t, n) : t.outrec.idx < i.outrec.idx ? this.joinOutrecPaths(t, i) : this.joinOutrecPaths(i, t), i.joinWith = mD.Right, t.joinWith = mD.Left);
		}
	}
	checkJoinRight(t, n, r = !1) {
		let i = t.nextInAEL;
		if (!(i === null || !e.isHotEdge(t) || !e.isHotEdge(i) || e.isHorizontal(t) || e.isHorizontal(i) || e.isOpen(t) || e.isOpen(i)) && !((n.y < t.top.y + 2 || n.y < i.top.y + 2) && (t.bot.y > n.y || i.bot.y > n.y))) {
			if (r) {
				if (this.perpendicDistFromLineSqrd(n, i.bot, i.top) > .25) return;
			} else if (t.curX !== i.curX) return;
			X.isCollinear(t.top, n, i.top) && (t.outrec.idx === i.outrec.idx ? this.addLocalMaxPoly(t, i, n) : t.outrec.idx < i.outrec.idx ? this.joinOutrecPaths(t, i) : this.joinOutrecPaths(i, t), t.joinWith = mD.Right, i.joinWith = mD.Left);
		}
	}
	perpendicDistFromLineSqrd(e, t, n) {
		let r = e.x - t.x, i = e.y - t.y, a = n.x - t.x, o = n.y - t.y;
		return a === 0 && o === 0 ? 0 : (r * o - a * i) * (r * o - a * i) / (a * a + o * o);
	}
	intersectEdges(t, n, r) {
		let i = null;
		if (this.hasOpenPaths && (e.isOpen(t) || e.isOpen(n))) {
			if (e.isOpen(t) && e.isOpen(n)) return;
			if (e.isOpen(n) && ([t, n] = e.swapActives(t, n)), this.isJoined(n) && this.split(n, r), this.cliptype === eD.Union) {
				if (!e.isHotEdge(n)) return;
			} else if (n.localMin.polytype === tD.Subject) return;
			switch (this.fillrule) {
				case J.Positive:
					if (n.windCount !== 1) return;
					break;
				case J.Negative:
					if (n.windCount !== -1) return;
					break;
				default: if (Math.abs(n.windCount) !== 1) return;
			}
			if (e.isHotEdge(t)) i = this.addOutPt(t, r), this.setZ(t, n, i.pt), e.isFront(t) ? t.outrec.frontEdge = null : t.outrec.backEdge = null, t.outrec = null;
			else if (r.x === t.localMin.vertex.pt.x && r.y === t.localMin.vertex.pt.y && !e.isOpenEndVertex(t.localMin.vertex)) {
				let n = this.findEdgeWithMatchingLocMin(t);
				if (n !== null && e.isHotEdge(n)) {
					t.outrec = n.outrec, t.windDx > 0 ? this.setSides(n.outrec, t, n) : this.setSides(n.outrec, n, t);
					return;
				}
				i = this.startOpenPath(t, r);
			} else i = this.startOpenPath(t, r);
			this.setZ(t, n, i.pt);
			return;
		}
		this.isJoined(t) && this.split(t, r), this.isJoined(n) && this.split(n, r);
		let a, o;
		switch (t.localMin.polytype === n.localMin.polytype ? this.fillrule === J.EvenOdd ? (a = t.windCount, t.windCount = n.windCount, n.windCount = a) : (t.windCount + n.windDx === 0 ? t.windCount = -t.windCount : t.windCount += n.windDx, n.windCount - t.windDx === 0 ? n.windCount = -n.windCount : n.windCount -= t.windDx) : (this.fillrule === J.EvenOdd ? t.windCount2 = +(t.windCount2 === 0) : t.windCount2 += n.windDx, this.fillrule === J.EvenOdd ? n.windCount2 = +(n.windCount2 === 0) : n.windCount2 -= t.windDx), this.fillrule) {
			case J.Positive:
				a = t.windCount, o = n.windCount;
				break;
			case J.Negative:
				a = -t.windCount, o = -n.windCount;
				break;
			default: a = Math.abs(t.windCount), o = Math.abs(n.windCount);
		}
		let s = a === 0 || a === 1, c = o === 0 || o === 1;
		if ((e.isHotEdge(t) || s) && (e.isHotEdge(n) || c)) {
			if (e.isHotEdge(t) && e.isHotEdge(n)) {
				if (a !== 0 && a !== 1 || o !== 0 && o !== 1 || t.localMin.polytype !== n.localMin.polytype && this.cliptype !== eD.Xor) i = this.addLocalMaxPoly(t, n, r), i && this.setZ(t, n, i.pt);
				else if (e.isFront(t) || t.outrec === n.outrec) {
					i = this.addLocalMaxPoly(t, n, r), i && this.setZ(t, n, i.pt);
					let e = this.addLocalMinPoly(t, n, r);
					this.setZ(t, n, e.pt);
				} else {
					i = this.addOutPt(t, r), this.setZ(t, n, i.pt);
					let e = this.addOutPt(n, r);
					this.setZ(t, n, e.pt), this.swapOutrecs(t, n);
				}
			} else if (e.isHotEdge(t)) i = this.addOutPt(t, r), this.setZ(t, n, i.pt), this.swapOutrecs(t, n);
			else if (e.isHotEdge(n)) i = this.addOutPt(n, r), this.setZ(t, n, i.pt), this.swapOutrecs(t, n);
			else {
				let s, c;
				switch (this.fillrule) {
					case J.Positive:
						s = t.windCount2, c = n.windCount2;
						break;
					case J.Negative:
						s = -t.windCount2, c = -n.windCount2;
						break;
					default: s = Math.abs(t.windCount2), c = Math.abs(n.windCount2);
				}
				if (!e.isSamePolyType(t, n)) i = this.addLocalMinPoly(t, n, r), this.setZ(t, n, i.pt);
				else if (a === 1 && o === 1) {
					switch (i = null, this.cliptype) {
						case eD.Union:
							if (s > 0 && c > 0) return;
							i = this.addLocalMinPoly(t, n, r);
							break;
						case eD.Difference:
							(e.getPolyType(t) === tD.Clip && s > 0 && c > 0 || e.getPolyType(t) === tD.Subject && s <= 0 && c <= 0) && (i = this.addLocalMinPoly(t, n, r));
							break;
						case eD.Xor:
							i = this.addLocalMinPoly(t, n, r);
							break;
						default:
							if (s <= 0 || c <= 0) return;
							i = this.addLocalMinPoly(t, n, r);
					}
					i && this.setZ(t, n, i.pt);
				}
			}
		}
	}
	swapPositionsInAEL(e, t) {
		let n = t.nextInAEL;
		n !== null && (n.prevInAEL = e);
		let r = e.prevInAEL;
		r !== null && (r.nextInAEL = t), t.prevInAEL = r, t.nextInAEL = e, e.prevInAEL = t, e.nextInAEL = n, t.prevInAEL === null && (this.actives = t);
	}
	isValidAelOrder(t, n) {
		if (n.curX !== t.curX) return n.curX > t.curX;
		let r = X.crossProduct(t.top, n.bot, n.top);
		if (r !== 0) return r < 0;
		if (!e.isMaxima(t) && t.top.y > n.top.y) return X.crossProduct(n.bot, t.top, e.nextVertex(t).pt) <= 0;
		if (!e.isMaxima(n) && n.top.y > t.top.y) return X.crossProduct(n.bot, n.top, e.nextVertex(n).pt) >= 0;
		let i = n.bot.y, a = n.isLeftBound;
		return t.bot.y !== i || t.localMin.vertex.pt.y !== i ? n.isLeftBound : t.isLeftBound === a ? X.isCollinear(e.prevPrevVertex(t).pt, t.bot, t.top) ? !0 : X.crossProduct(e.prevPrevVertex(t).pt, n.bot, e.prevPrevVertex(n).pt) > 0 === a : a;
	}
	isJoined(e) {
		return e.joinWith !== mD.None;
	}
	split(e, t) {
		e.joinWith === mD.Right ? (e.joinWith = mD.None, e.nextInAEL.joinWith = mD.None, this.addLocalMinPoly(e, e.nextInAEL, t, !0)) : (e.joinWith = mD.None, e.prevInAEL.joinWith = mD.None, this.addLocalMinPoly(e.prevInAEL, e, t, !0));
	}
	setSides(e, t, n) {
		e.frontEdge = t, e.backEdge = n;
	}
	findEdgeWithMatchingLocMin(t) {
		let n = t.nextInAEL;
		for (; n !== null;) {
			if (n.localMin?.equals(t.localMin)) return n;
			n = !e.isHorizontal(n) && (t.bot.x !== n.bot.x || t.bot.y !== n.bot.y) ? null : n.nextInAEL;
		}
		for (n = t.prevInAEL; n !== null;) {
			if (n.localMin?.equals(t.localMin)) return n;
			if (!e.isHorizontal(n) && (t.bot.x !== n.bot.x || t.bot.y !== n.bot.y)) return null;
			n = n.prevInAEL;
		}
		return n;
	}
	addOutPt(t, n) {
		let r = t.outrec, i = e.isFront(t), a = r.pts, o = a.next;
		if (i && n.x === a.pt.x && n.y === a.pt.y) return a;
		if (!i && n.x === o.pt.x && n.y === o.pt.y) return o;
		let s = new pD(n, r);
		return o.prev = s, s.prev = a, s.next = o, a.next = s, i && (r.pts = s), s;
	}
	addLocalMaxPoly(t, n, r) {
		if (this.isJoined(t) && this.split(t, r), this.isJoined(n) && this.split(n, r), e.isFront(t) === e.isFront(n)) {
			if (e.isOpenEnd(t)) this.swapFrontBackSides(t.outrec);
			else if (e.isOpenEnd(n)) this.swapFrontBackSides(n.outrec);
			else return this.succeeded = !1, null;
		}
		let i = this.addOutPt(t, r);
		if (t.outrec === n.outrec) {
			let n = t.outrec;
			if (n.pts = i, this.usingPolytree) {
				let r = e.getPrevHotEdge(t);
				r === null ? n.owner = null : this.setOwner(n, r.outrec);
			}
			this.uncoupleOutRec(t);
		} else e.isOpen(t) ? t.windDx < 0 ? this.joinOutrecPaths(t, n) : this.joinOutrecPaths(n, t) : t.outrec.idx < n.outrec.idx ? this.joinOutrecPaths(t, n) : this.joinOutrecPaths(n, t);
		return i;
	}
	swapFrontBackSides(e) {
		let t = e.frontEdge;
		e.frontEdge = e.backEdge, e.backEdge = t, e.pts = e.pts.next;
	}
	setOwner(e, t) {
		for (; t.owner !== null && t.owner.pts === null;) t.owner = t.owner.owner;
		let n = t;
		for (; n !== null && n !== e;) n = n.owner;
		n !== null && (t.owner = e.owner), e.owner = t;
	}
	uncoupleOutRec(e) {
		let t = e.outrec;
		t !== null && (t.frontEdge.outrec = null, t.backEdge.outrec = null, t.frontEdge = null, t.backEdge = null);
	}
	joinOutrecPaths(t, n) {
		let r = t.outrec.pts, i = n.outrec.pts, a = r.next, o = i.next;
		e.isFront(t) ? (o.prev = r, r.next = o, i.next = a, a.prev = i, t.outrec.pts = i, t.outrec.frontEdge = n.outrec.frontEdge, t.outrec.frontEdge !== null && (t.outrec.frontEdge.outrec = t.outrec)) : (a.prev = i, i.next = a, r.next = o, o.prev = r, t.outrec.backEdge = n.outrec.backEdge, t.outrec.backEdge !== null && (t.outrec.backEdge.outrec = t.outrec)), n.outrec.frontEdge = null, n.outrec.backEdge = null, n.outrec.pts = null, this.setOwner(n.outrec, t.outrec), e.isOpenEnd(t) && (n.outrec.pts = t.outrec.pts, t.outrec.pts = null), t.outrec = null, n.outrec = null;
	}
	swapOutrecs(e, t) {
		let n = e.outrec, r = t.outrec;
		if (n === r) {
			let e = n.frontEdge;
			n.frontEdge = n.backEdge, n.backEdge = e;
		} else n !== null && (e === n.frontEdge ? n.frontEdge = t : n.backEdge = t), r !== null && (t === r.frontEdge ? r.frontEdge = e : r.backEdge = e), e.outrec = r, t.outrec = n;
	}
	disposeIntersectNodes() {
		this.intersectList.length = 0;
	}
	static ptsReallyClose(e, t) {
		return Math.abs(e.x - t.x) < 2 && Math.abs(e.y - t.y) < 2;
	}
	static isVerySmallTriangle(t) {
		return t.next.next === t.prev && (e.ptsReallyClose(t.prev.pt, t.next.pt) || e.ptsReallyClose(t.pt, t.next.pt) || e.ptsReallyClose(t.pt, t.prev.pt));
	}
	static buildPath(t, n, r, i) {
		if (t === null || t.next === t || !r && t.next === t.prev) return !1;
		i.length = 0;
		let a, o;
		for (n ? (a = t.pt, o = t.prev) : (t = t.next, a = t.pt, o = t.next), i.push(a); o !== t;) (o.pt.x !== a.x || o.pt.y !== a.y) && (a = o.pt, i.push(a)), o = n ? o.prev : o.next;
		return i.length !== 3 || r || !e.isVerySmallTriangle(o);
	}
	buildPaths(t, n) {
		t.length = 0, n.length = 0;
		let r = 0;
		for (; r < this.outrecList.length;) {
			let i = this.outrecList[r++];
			if (i.pts === null) continue;
			let a = [];
			i.isOpen ? e.buildPath(i.pts, this.reverseSolution, !0, a) && n.push(a) : (this.cleanCollinear(i), e.buildPath(i.pts, this.reverseSolution, !1, a) && t.push(a));
		}
		return !0;
	}
	buildTree(t, n) {
		t.clear(), n.length = 0;
		let r = 0;
		for (; r < this.outrecList.length;) {
			let i = this.outrecList[r++];
			if (i.pts !== null) {
				if (i.isOpen) {
					let t = [];
					e.buildPath(i.pts, this.reverseSolution, !0, t) && n.push(t);
				} else this.checkBounds(i) && this.recursiveCheckOwners(i, t);
			}
		}
	}
	checkBounds(t) {
		return t.pts === null ? !1 : !rD.isEmpty(t.bounds) || (this.cleanCollinear(t), t.pts === null || !e.buildPath(t.pts, this.reverseSolution, !1, t.path) ? !1 : (t.bounds = X.getBounds(t.path), !0));
	}
	recursiveCheckOwners(e, t) {
		if (!(e.polypath !== null || rD.isEmpty(e.bounds))) {
			for (; e.owner !== null && !(e.owner.splits !== null && this.checkSplitOwner(e, e.owner.splits) || e.owner.pts !== null && this.checkBounds(e.owner) && this.containsRect(e.owner.bounds, e.bounds) && this.path1InsidePath2(e.pts, e.owner.pts));) e.owner = e.owner.owner;
			e.owner === null ? e.polypath = t.addChild(e.path) : (e.owner.polypath === null && this.recursiveCheckOwners(e.owner, t), e.polypath = e.owner.polypath.addChild(e.path));
		}
	}
	cleanCollinear(e) {
		if (e = this.getRealOutRec(e), e === null || e.isOpen) return;
		if (!this.isValidClosedPath(e.pts)) {
			e.pts = null;
			return;
		}
		let t = e.pts, n = t;
		for (;;) if (n !== null && X.isCollinear(n.prev.pt, n.pt, n.next.pt) && (n.pt.x === n.prev.pt.x && n.pt.y === n.prev.pt.y || n.pt.x === n.next.pt.x && n.pt.y === n.next.pt.y || !this.preserveCollinear || X.dotProduct(n.prev.pt, n.pt, n.next.pt) < 0)) {
			if (n === e.pts && (e.pts = n.prev), n = this.disposeOutPt(n), !this.isValidClosedPath(n)) {
				e.pts = null;
				return;
			}
			t = n;
		} else if (n === null || (n = n.next, n === t)) break;
		this.fixSelfIntersects(e);
	}
	isValidClosedPath(t) {
		return t !== null && t.next !== t && (t.next !== t.prev || !e.isVerySmallTriangle(t));
	}
	disposeOutPt(e) {
		let t = e.next === e ? null : e.next;
		return e.prev.next = e.next, e.next.prev = e.prev, t;
	}
	fixSelfIntersects(e) {
		let t = e.pts;
		if (t.prev !== t.next.next) for (;;) {
			if (t.next && t.next.next && this.boundingBoxesOverlap(t.prev.pt, t.pt, t.next.pt, t.next.next.pt) && X.segsIntersect(t.prev.pt, t.pt, t.next.pt, t.next.next.pt)) {
				if (t.next.next.next && this.boundingBoxesOverlap(t.prev.pt, t.pt, t.next.next.pt, t.next.next.next.pt) && X.segsIntersect(t.prev.pt, t.pt, t.next.next.pt, t.next.next.next.pt)) t = this.duplicateOp(t, !1), t.pt = t.next.next.next.pt, t = t.next;
				else {
					if ((t === e.pts || t.next === e.pts) && (e.pts = e.pts.prev), this.doSplitOp(e, t), e.pts === null) return;
					if (t = e.pts, t.prev === t.next.next) break;
					continue;
				}
			}
			if (t = t.next, t === e.pts) break;
		}
	}
	doSplitOp(t, n) {
		let r = n.prev, i = n.next.next;
		t.pts = r;
		let a = X.getLineIntersectPt(r.pt, n.pt, n.next.pt, i.pt).point, o = e.areaOutPt(r), s = Math.abs(o);
		if (s < 2) {
			t.pts = null;
			return;
		}
		let c = this.areaTriangle(a, n.pt, n.next.pt), l = Math.abs(c);
		if (a.x === r.pt.x && a.y === r.pt.y || a.x === i.pt.x && a.y === i.pt.y) i.prev = r, r.next = i;
		else {
			let e = new pD(a, t);
			e.prev = r, e.next = i, i.prev = e, r.next = e;
		}
		if (!(l > 1) || !(l > s) && c > 0 != o > 0) return;
		let u = this.newOutRec();
		u.owner = t.owner, n.outrec = u, n.next.outrec = u;
		let d = new pD(a, u);
		d.prev = n.next, d.next = n, u.pts = d, n.prev = d, n.next.next = d, this.usingPolytree && (this.path1InsidePath2(r, d) ? (u.splits === null && (u.splits = []), u.splits.push(t.idx)) : (t.splits === null && (t.splits = []), t.splits.push(u.idx)));
	}
	static areaOutPt(e) {
		let t = 0, n = e;
		do
			t += (n.prev.pt.y + n.pt.y) * (n.prev.pt.x - n.pt.x), n = n.next;
		while (n !== e);
		return t * .5;
	}
	areaTriangle(e, t, n) {
		return (n.y + e.y) * (n.x - e.x) + (e.y + t.y) * (e.x - t.x) + (t.y + n.y) * (t.x - n.x);
	}
	isValidOwner(e, t) {
		for (; t !== null && t !== e;) t = t.owner;
		return t === null;
	}
	containsRect(e, t) {
		return t.left >= e.left && t.right <= e.right && t.top >= e.top && t.bottom <= e.bottom;
	}
	checkSplitOwner(e, t) {
		for (let n = 0; n < t.length; n++) {
			let r = this.outrecList[t[n]];
			if (r.pts === null && r.splits !== null && this.checkSplitOwner(e, r.splits)) return !0;
			if (r = this.getRealOutRec(r), r !== null && r !== e && r.recursiveSplit !== e) {
				if (r.recursiveSplit = e, r.splits !== null && this.checkSplitOwner(e, r.splits)) return !0;
				if (this.checkBounds(r) && this.containsRect(r.bounds, e.bounds) && this.path1InsidePath2(e.pts, r.pts)) return this.isValidOwner(e, r) || (r.owner = e.owner), e.owner = r, !0;
			}
		}
		return !1;
	}
}, SD = class extends xD {
	zCallback;
	getZCallback() {
		return this.zCallback;
	}
	addPath(e, t, n = !1) {
		super.addPath(e, t, n);
	}
	addReuseableData(e) {
		super.addReuseableData(e);
	}
	addPaths(e, t, n = !1) {
		super.addPaths(e, t, n);
	}
	addSubject(e) {
		this.addPaths(e, tD.Subject);
	}
	addOpenSubject(e) {
		this.addPaths(e, tD.Subject, !0);
	}
	addClip(e) {
		this.addPaths(e, tD.Clip);
	}
	execute(e, t, n, r) {
		if (Array.isArray(n)) {
			let i = n, a = r;
			i.length = 0, a && (a.length = 0);
			try {
				this.executeInternal(e, t), this.buildPaths(i, a || []);
			} catch {
				this.succeeded = !1;
			}
			return this.clearSolutionOnly(), this.succeeded;
		}
		{
			let i = n, a = r;
			i.clear(), a && (a.length = 0), this.usingPolytree = !0;
			try {
				this.executeInternal(e, t), this.buildTree(i, a || []);
			} catch {
				this.succeeded = !1;
			}
			return this.clearSolutionOnly(), this.succeeded;
		}
	}
}, CD = class extends xD {
	zCallback;
	scale;
	invScale;
	constructor(e = 2) {
		super(), X.checkPrecision(e), this.scale = 10 ** e, this.invScale = 1 / this.scale;
	}
	getZCallback() {
		return this.zCallback;
	}
	scalePathDFromInt(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: r.x * t,
			y: r.y * t,
			z: r.z || 0
		});
		return n;
	}
	buildPathsD(e, t) {
		e.length = 0, t.length = 0;
		let n = 0;
		for (; n < this.outrecList.length;) {
			let r = this.outrecList[n++];
			if (r.pts === null) continue;
			let i = [];
			r.isOpen ? xD.buildPath(r.pts, this.reverseSolution, !0, i) && t.push(this.scalePathDFromInt(i, this.invScale)) : (this.cleanCollinear(r), xD.buildPath(r.pts, this.reverseSolution, !1, i) && e.push(this.scalePathDFromInt(i, this.invScale)));
		}
		return !0;
	}
	buildTreeD(e, t) {
		e.clear(), t.length = 0;
		let n = 0;
		for (; n < this.outrecList.length;) {
			let r = this.outrecList[n++];
			if (r.pts !== null) {
				if (r.isOpen) {
					let e = [];
					xD.buildPath(r.pts, this.reverseSolution, !0, e) && t.push(this.scalePathDFromInt(e, this.invScale));
				} else this.checkBounds(r) && this.recursiveCheckOwners(r, e);
			}
		}
	}
	addPath(e, t, n = !1) {
		super.addPath(wD.scalePath64(e, this.scale), t, n);
	}
	addPaths(e, t, n = !1) {
		super.addPaths(wD.scalePaths64(e, this.scale), t, n);
	}
	addSubject(e) {
		this.addPath(e, tD.Subject);
	}
	addOpenSubject(e) {
		this.addPath(e, tD.Subject, !0);
	}
	addClip(e) {
		this.addPath(e, tD.Clip);
	}
	addSubjectPaths(e) {
		this.addPaths(e, tD.Subject);
	}
	addOpenSubjectPaths(e) {
		this.addPaths(e, tD.Subject, !0);
	}
	addClipPaths(e) {
		this.addPaths(e, tD.Clip);
	}
	execute(e, t, n, r) {
		if (Array.isArray(n)) {
			let i = n, a = r, o = [], s = [];
			i.length = 0, a && (a.length = 0);
			let c = !0;
			try {
				this.executeInternal(e, t), this.buildPaths(o, s);
			} catch {
				c = !1;
			}
			if (this.clearSolutionOnly(), !c) return !1;
			for (let e of o) i.push(this.scalePathDFromInt(e, this.invScale));
			if (a) for (let e of s) a.push(this.scalePathDFromInt(e, this.invScale));
			return !0;
		}
		{
			let i = n, a = r;
			i.clear(), a && (a.length = 0), this.usingPolytree = !0, i.scale = this.scale;
			let o = !0;
			try {
				this.executeInternal(e, t), this.buildTreeD(i, a || []);
			} catch {
				o = !1;
			}
			return this.clearSolutionOnly(), o;
		}
	}
}, wD;
(function(e) {
	function t(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	e.area = t;
	function n(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	e.areaD = n;
	function r(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: Math.round(r.x * t),
			y: Math.round(r.y * t)
		});
		return n;
	}
	e.scalePath64 = r;
	function i(e, t) {
		let n = [];
		for (let i of e) n.push(r(i, t));
		return n;
	}
	e.scalePaths64 = i;
	function a(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: r.x * t,
			y: r.y * t
		});
		return n;
	}
	e.scalePathD = a;
	function o(e, t) {
		let n = [];
		for (let r of e) n.push(a(r, t));
		return n;
	}
	e.scalePathsD = o;
})(wD ||= {});
// node_modules/clipper2-ts/dist/Offset.js
var TD;
(function(e) {
	e[e.Miter = 0] = "Miter", e[e.Square = 1] = "Square", e[e.Bevel = 2] = "Bevel", e[e.Round = 3] = "Round";
})(TD ||= {});
var ED;
(function(e) {
	e[e.Polygon = 0] = "Polygon", e[e.Joined = 1] = "Joined", e[e.Butt = 2] = "Butt", e[e.Square = 3] = "Square", e[e.Round = 4] = "Round";
})(ED ||= {});
var DD = class {
	inPaths;
	joinType;
	endType;
	pathsReversed;
	lowestPathIdx;
	constructor(e, t, n = ED.Polygon) {
		this.joinType = t, this.endType = n;
		let r = n === ED.Polygon || n === ED.Joined;
		this.inPaths = [];
		for (let t of e) this.inPaths.push(OD.stripDuplicates(t, r));
		if (n === ED.Polygon) {
			let e = OD.getLowestPathInfo(this.inPaths);
			this.lowestPathIdx = e.idx, this.pathsReversed = this.lowestPathIdx >= 0 && e.isNegArea;
		} else this.lowestPathIdx = -1, this.pathsReversed = !1;
	}
}, OD = class e {
	static Tolerance = 1e-12;
	static arc_const = .002;
	groupList = [];
	pathOut = [];
	normals = [];
	solution = [];
	solutionTree = null;
	groupDelta = 0;
	delta = 0;
	mitLimSqr = 0;
	stepsPerRad = 0;
	stepSin = 0;
	stepCos = 0;
	joinType = TD.Bevel;
	endType = ED.Polygon;
	arcTolerance = 0;
	mergeGroups = !0;
	miterLimit = 2;
	preserveCollinear = !1;
	reverseSolution = !1;
	zCallback;
	deltaCallback = null;
	constructor(e = 2, t = 0, n = !1, r = !1) {
		this.miterLimit = e, this.arcTolerance = t, this.mergeGroups = !0, this.preserveCollinear = n, this.reverseSolution = r;
	}
	clear() {
		this.groupList.length = 0;
	}
	ZCB = (e, t, n, r, i) => {
		(e.z || 0) !== 0 && (e.z === n.z || e.z === r.z) ? i.z = e.z : (n.z || 0) !== 0 && n.z === t.z ? i.z = n.z : (t.z || 0) !== 0 && t.z === r.z ? i.z = t.z : this.zCallback && this.zCallback(e, t, n, r, i);
	};
	addPath(e, t, n) {
		if (e.length === 0) return;
		let r = [e];
		this.addPaths(r, t, n);
	}
	addPaths(e, t, n) {
		e.length !== 0 && this.groupList.push(new DD(e, t, n));
	}
	calcSolutionCapacity() {
		let e = 0;
		for (let t of this.groupList) e += t.endType === ED.Joined ? t.inPaths.length * 2 : t.inPaths.length;
		return e;
	}
	checkPathsReversed() {
		let e = !1;
		for (let t of this.groupList) if (t.endType === ED.Polygon) {
			e = t.pathsReversed;
			break;
		}
		return e;
	}
	executeInternal(t) {
		if (this.groupList.length === 0) return;
		if (Math.abs(t) < .5) {
			for (let e of this.groupList) for (let t of e.inPaths) this.solution.push(t);
			return;
		}
		this.delta = t, this.mitLimSqr = this.miterLimit <= 1 ? 2 : 2 / e.sqr(this.miterLimit);
		for (let e of this.groupList) this.doGroupOffset(e);
		if (this.groupList.length === 0) return;
		let n = this.checkPathsReversed(), r = n ? J.Negative : J.Positive, i = new SD();
		i.preserveCollinear = this.preserveCollinear, i.reverseSolution = this.reverseSolution !== n, i.zCallback = this.ZCB, i.addSubject(this.solution), this.solutionTree === null ? i.execute(eD.Union, r, this.solution) : i.execute(eD.Union, r, this.solutionTree);
	}
	execute(e, t) {
		if (Array.isArray(t)) {
			let n = t;
			n.length = 0, this.solution = n, this.executeInternal(e);
		} else {
			let n = t;
			n.clear(), this.solutionTree = n, this.solution = [], this.executeInternal(e);
		}
	}
	executeWithCallback(e, t) {
		this.deltaCallback = e, this.execute(1, t);
	}
	static getUnitNormal(e, t) {
		let n = t.x - e.x, r = t.y - e.y;
		if (n === 0 && r === 0) return {
			x: 0,
			y: 0
		};
		let i = 1 / Math.sqrt(n * n + r * r);
		return {
			x: r * i,
			y: -n * i
		};
	}
	static getLowestPathInfo(t) {
		let n = -1, r = !1, i = {
			x: 2 ** 53 - 1,
			y: -(2 ** 53 - 1)
		};
		for (let a = 0; a < t.length; ++a) {
			let o = Number.MAX_VALUE;
			for (let s of t[a]) if (!(s.y < i.y || s.y === i.y && s.x >= i.x)) {
				if (o === Number.MAX_VALUE) {
					if (o = e.area(t[a]), o === 0) break;
					r = o < 0;
				}
				n = a, i.x = s.x, i.y = s.y;
			}
		}
		return {
			idx: n,
			isNegArea: r
		};
	}
	static translatePoint(e, t, n) {
		return {
			x: e.x + t,
			y: e.y + n
		};
	}
	static reflectPoint(e, t) {
		return {
			x: t.x + (t.x - e.x),
			y: t.y + (t.y - e.y)
		};
	}
	static almostZero(e, t = .001) {
		return Math.abs(e) < t;
	}
	static hypotenuse(e, t) {
		return Math.sqrt(e ** 2 + t ** 2);
	}
	static normalizeVector(t) {
		let n = e.hypotenuse(t.x, t.y);
		if (e.almostZero(n)) return {
			x: 0,
			y: 0
		};
		let r = 1 / n;
		return {
			x: t.x * r,
			y: t.y * r
		};
	}
	static getAvgUnitVector(t, n) {
		return e.normalizeVector({
			x: t.x + n.x,
			y: t.y + n.y
		});
	}
	static intersectPoint(e, t, n, r) {
		if (X.isAlmostZero(e.x - t.x)) {
			if (X.isAlmostZero(n.x - r.x)) return {
				x: 0,
				y: 0
			};
			let t = (r.y - n.y) / (r.x - n.x), i = n.y - t * n.x;
			return {
				x: e.x,
				y: t * e.x + i
			};
		}
		if (X.isAlmostZero(n.x - r.x)) {
			let r = (t.y - e.y) / (t.x - e.x), i = e.y - r * e.x;
			return {
				x: n.x,
				y: r * n.x + i
			};
		}
		{
			let i = (t.y - e.y) / (t.x - e.x), a = e.y - i * e.x, o = (r.y - n.y) / (r.x - n.x), s = n.y - o * n.x;
			if (X.isAlmostZero(i - o)) return {
				x: 0,
				y: 0
			};
			let c = (s - a) / (i - o);
			return {
				x: c,
				y: i * c + a
			};
		}
	}
	getPerpendic(e, t) {
		return {
			x: Math.round(e.x + t.x * this.groupDelta),
			y: Math.round(e.y + t.y * this.groupDelta)
		};
	}
	getPerpendicD(e, t) {
		return {
			x: e.x + t.x * this.groupDelta,
			y: e.y + t.y * this.groupDelta
		};
	}
	doBevel(e, t, n) {
		let r, i;
		if (t === n) {
			let n = Math.abs(this.groupDelta);
			r = {
				x: Math.round(e[t].x - n * this.normals[t].x),
				y: Math.round(e[t].y - n * this.normals[t].y)
			}, i = {
				x: Math.round(e[t].x + n * this.normals[t].x),
				y: Math.round(e[t].y + n * this.normals[t].y)
			};
		} else r = {
			x: Math.round(e[t].x + this.groupDelta * this.normals[n].x),
			y: Math.round(e[t].y + this.groupDelta * this.normals[n].y)
		}, i = {
			x: Math.round(e[t].x + this.groupDelta * this.normals[t].x),
			y: Math.round(e[t].y + this.groupDelta * this.normals[t].y)
		};
		this.pathOut.push(r), this.pathOut.push(i);
	}
	doSquare(t, n, r) {
		let i;
		i = n === r ? {
			x: this.normals[n].y,
			y: -this.normals[n].x
		} : e.getAvgUnitVector({
			x: -this.normals[r].y,
			y: this.normals[r].x
		}, {
			x: this.normals[n].y,
			y: -this.normals[n].x
		});
		let a = Math.abs(this.groupDelta), o = {
			x: t[n].x,
			y: t[n].y
		};
		o = e.translatePoint(o, a * i.x, a * i.y);
		let s = e.translatePoint(o, this.groupDelta * i.y, this.groupDelta * -i.x), c = e.translatePoint(o, this.groupDelta * -i.y, this.groupDelta * i.x), l = this.getPerpendicD(t[r], this.normals[r]);
		if (n === r) {
			let t = {
				x: l.x + i.x * this.groupDelta,
				y: l.y + i.y * this.groupDelta
			}, n = e.intersectPoint(s, c, l, t);
			this.pathOut.push(Z.fromPointD(e.reflectPoint(n, o))), this.pathOut.push(Z.fromPointD(n));
		} else {
			let i = this.getPerpendicD(t[n], this.normals[r]), a = e.intersectPoint(s, c, l, i);
			this.pathOut.push(Z.fromPointD(a)), this.pathOut.push(Z.fromPointD(e.reflectPoint(a, o)));
		}
	}
	doMiter(e, t, n, r) {
		let i = this.groupDelta / (r + 1);
		this.pathOut.push({
			x: Math.round(e[t].x + (this.normals[n].x + this.normals[t].x) * i),
			y: Math.round(e[t].y + (this.normals[n].y + this.normals[t].y) * i)
		});
	}
	doRound(t, n, r, i) {
		if (this.deltaCallback !== null) {
			let t = Math.abs(this.groupDelta), n = this.arcTolerance > .01 ? this.arcTolerance : t * e.arc_const, r = Math.PI / Math.acos(1 - n / t);
			this.stepSin = Math.sin(2 * Math.PI / r), this.stepCos = Math.cos(2 * Math.PI / r), this.groupDelta < 0 && (this.stepSin = -this.stepSin), this.stepsPerRad = r / (2 * Math.PI);
		}
		let a = t[n], o = {
			x: this.normals[r].x * this.groupDelta,
			y: this.normals[r].y * this.groupDelta
		};
		n === r && nD.negate(o), this.pathOut.push({
			x: Math.round(a.x + o.x),
			y: Math.round(a.y + o.y)
		});
		let s = Math.ceil(this.stepsPerRad * Math.abs(i));
		for (let e = 1; e < s; e++) o = {
			x: o.x * this.stepCos - this.stepSin * o.y,
			y: o.x * this.stepSin + o.y * this.stepCos
		}, this.pathOut.push({
			x: Math.round(a.x + o.x),
			y: Math.round(a.y + o.y)
		});
		this.pathOut.push(this.getPerpendic(t[n], this.normals[n]));
	}
	buildNormals(t) {
		let n = t.length;
		if (this.normals.length = 0, n !== 0) {
			for (let r = 0; r < n - 1; r++) this.normals.push(e.getUnitNormal(t[r], t[r + 1]));
			this.normals.push(e.getUnitNormal(t[n - 1], t[0]));
		}
	}
	offsetPoint(t, n, r, i) {
		if (Z.equals(n[r], n[i])) return;
		let a = X.crossProductD(this.normals[r], this.normals[i]), o = X.dotProductD(this.normals[r], this.normals[i]);
		if (a > 1 ? a = 1 : a < -1 && (a = -1), this.deltaCallback !== null && (this.groupDelta = this.deltaCallback(n, this.normals, r, i), t.pathsReversed && (this.groupDelta = -this.groupDelta)), Math.abs(this.groupDelta) < e.Tolerance) this.pathOut.push(n[r]);
		else if (o > -.999 && a * this.groupDelta < 0) this.pathOut.push(this.getPerpendic(n[r], this.normals[i])), this.pathOut.push(n[r]), this.pathOut.push(this.getPerpendic(n[r], this.normals[r]));
		else if (o > .999 && this.joinType !== TD.Round) this.doMiter(n, r, i, o);
		else switch (this.joinType) {
			case TD.Miter:
				o > this.mitLimSqr - 1 ? this.doMiter(n, r, i, o) : this.doSquare(n, r, i);
				break;
			case TD.Round:
				this.doRound(n, r, i, Math.atan2(a, o));
				break;
			case TD.Bevel:
				this.doBevel(n, r, i);
				break;
			default: this.doSquare(n, r, i);
		}
	}
	offsetPolygon(e, t) {
		this.pathOut = [];
		let n = t.length, r = n - 1;
		for (let i = 0; i < n; i++) this.offsetPoint(e, t, i, r), r = i;
		this.solution.push([...this.pathOut]);
	}
	offsetOpenJoined(e, t) {
		this.offsetPolygon(e, t);
		let n = [...t].reverse();
		this.buildNormals(n), this.offsetPolygon(e, n);
	}
	offsetOpenPath(t, n) {
		this.pathOut = [];
		let r = n.length - 1;
		if (this.deltaCallback !== null && (this.groupDelta = this.deltaCallback(n, this.normals, 0, 0)), Math.abs(this.groupDelta) < e.Tolerance) this.pathOut.push(n[0]);
		else switch (this.endType) {
			case ED.Butt:
				this.doBevel(n, 0, 0);
				break;
			case ED.Round:
				this.doRound(n, 0, 0, Math.PI);
				break;
			default: this.doSquare(n, 0, 0);
		}
		for (let e = 1, i = 0; e < r; e++) this.offsetPoint(t, n, e, i), i = e;
		for (let e = r; e > 0; e--) this.normals[e] = {
			x: -this.normals[e - 1].x,
			y: -this.normals[e - 1].y
		};
		if (this.normals[0] = this.normals[r], this.deltaCallback !== null && (this.groupDelta = this.deltaCallback(n, this.normals, r, r)), Math.abs(this.groupDelta) < e.Tolerance) this.pathOut.push(n[r]);
		else switch (this.endType) {
			case ED.Butt:
				this.doBevel(n, r, r);
				break;
			case ED.Round:
				this.doRound(n, r, r, Math.PI);
				break;
			default: this.doSquare(n, r, r);
		}
		for (let e = r - 1, i = r; e > 0; e--) this.offsetPoint(t, n, e, i), i = e;
		this.solution.push([...this.pathOut]);
	}
	doGroupOffset(t) {
		t.endType === ED.Polygon ? (t.lowestPathIdx < 0 && (this.delta = Math.abs(this.delta)), this.groupDelta = t.pathsReversed ? -this.delta : this.delta) : this.groupDelta = Math.abs(this.delta);
		let n = Math.abs(this.groupDelta);
		if (this.joinType = t.joinType, this.endType = t.endType, t.joinType === TD.Round || t.endType === ED.Round) {
			let t = this.arcTolerance > .01 ? this.arcTolerance : n * e.arc_const, r = Math.PI / Math.acos(1 - t / n);
			this.stepSin = Math.sin(2 * Math.PI / r), this.stepCos = Math.cos(2 * Math.PI / r), this.groupDelta < 0 && (this.stepSin = -this.stepSin), this.stepsPerRad = r / (2 * Math.PI);
		}
		for (let n of t.inPaths) {
			this.pathOut = [];
			let r = n.length;
			if (r === 1) {
				let r = n[0];
				if (this.deltaCallback !== null && (this.groupDelta = this.deltaCallback(n, this.normals, 0, 0), t.pathsReversed && (this.groupDelta = -this.groupDelta)), t.endType === ED.Round) {
					let t = Math.ceil(this.stepsPerRad * 2 * Math.PI);
					this.pathOut = e.ellipse(r, Math.abs(this.groupDelta), Math.abs(this.groupDelta), t);
				} else {
					let e = Math.ceil(Math.abs(this.groupDelta)), t = {
						left: r.x - e,
						top: r.y - e,
						right: r.x + e,
						bottom: r.y + e
					};
					this.pathOut = [
						{
							x: t.left,
							y: t.top
						},
						{
							x: t.right,
							y: t.top
						},
						{
							x: t.right,
							y: t.bottom
						},
						{
							x: t.left,
							y: t.bottom
						}
					];
				}
				this.solution.push([...this.pathOut]);
			} else switch (r === 2 && t.endType === ED.Joined && (this.endType = t.joinType === TD.Round ? ED.Round : ED.Square), this.buildNormals(n), this.endType) {
				case ED.Polygon:
					this.offsetPolygon(t, n);
					break;
				case ED.Joined:
					this.offsetOpenJoined(t, n);
					break;
				default: this.offsetOpenPath(t, n);
			}
		}
	}
	static stripDuplicates(e, t) {
		let n = e.length, r = [];
		if (n === 0) return r;
		let i = e[0];
		r.push(i);
		for (let t = 1; t < n; t++) Z.equals(i, e[t]) || (i = e[t], r.push(i));
		return t && Z.equals(i, r[0]) && r.pop(), r;
	}
	static area(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	static sqr(e) {
		return e * e;
	}
	static ellipse(e, t, n = 0, r = 0) {
		if (t <= 0) return [];
		n <= 0 && (n = t), r <= 2 && (r = Math.ceil(Math.PI * Math.sqrt((t + n) / 2)));
		let i = Math.sin(2 * Math.PI / r), a = Math.cos(2 * Math.PI / r), o = a, s = i, c = [{
			x: Math.round(e.x + t),
			y: e.y
		}];
		for (let l = 1; l < r; ++l) {
			c.push({
				x: Math.round(e.x + t * o),
				y: Math.round(e.y + n * s)
			});
			let r = o * a - s * i;
			s = s * a + o * i, o = r;
		}
		return c;
	}
}, kD = class {
	next = null;
	prev = null;
	pt;
	ownerIdx = 0;
	edge = null;
	constructor(e) {
		this.pt = e;
	}
}, $;
(function(e) {
	e[e.left = 0] = "left", e[e.top = 1] = "top", e[e.right = 2] = "right", e[e.bottom = 3] = "bottom", e[e.inside = 4] = "inside";
})($ ||= {});
var AD = class e {
	rect;
	mp;
	rectPath;
	pathBounds = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	};
	results = [];
	edges = [];
	currIdx = -1;
	constructor(e) {
		this.currIdx = -1, this.rect = e, this.mp = rD.midPoint(e), this.rectPath = rD.asPath(this.rect), this.results = [], this.edges = [];
		for (let e = 0; e < 8; e++) this.edges[e] = [];
	}
	add(e, t = !1) {
		let n = this.results.length, r;
		if (n === 0 || t) r = new kD(e), this.results.push(r), r.ownerIdx = n, r.prev = r, r.next = r;
		else {
			n--;
			let t = this.results[n];
			if (t && Z.equals(t.pt, e)) return t;
			r = new kD(e), r.ownerIdx = n, r.next = t.next, t.next.prev = r, t.next = r, r.prev = t, this.results[n] = r;
		}
		return r;
	}
	static path1ContainsPath2(e, t) {
		let n = 0;
		for (let r of t) {
			switch (X.pointInPolygon(r, e)) {
				case Y.IsInside:
					n--;
					break;
				case Y.IsOutside: n++;
			}
			if (Math.abs(n) > 1) break;
		}
		return n <= 0;
	}
	static isClockwise(t, n, r, i, a) {
		return e.areOpposites(t, n) ? X.crossProduct(r, a, i) < 0 : e.headingClockwise(t, n);
	}
	static areOpposites(e, t) {
		return Math.abs(e - t) === 2;
	}
	static headingClockwise(e, t) {
		return (e + 1) % 4 === t;
	}
	static getAdjacentLocation(e, t) {
		return (e + (t ? 1 : 3)) % 4;
	}
	static unlinkOp(e) {
		return e.next === e ? null : (e.prev.next = e.next, e.next.prev = e.prev, e.next);
	}
	static unlinkOpBack(e) {
		return e.next === e ? null : (e.prev.next = e.next, e.next.prev = e.prev, e.prev);
	}
	static getEdgesForPt(e, t) {
		let n = 0;
		return e.x === t.left ? n = 1 : e.x === t.right && (n = 4), e.y === t.top ? n += 2 : e.y === t.bottom && (n += 8), n;
	}
	static isHeadingClockwise(e, t, n) {
		switch (n) {
			case 0: return t.y < e.y;
			case 1: return t.x > e.x;
			case 2: return t.y > e.y;
			default: return t.x < e.x;
		}
	}
	static hasHorzOverlap(e, t, n, r) {
		return e.x < r.x && t.x > n.x;
	}
	static hasVertOverlap(e, t, n, r) {
		return e.y < r.y && t.y > n.y;
	}
	static addToEdge(e, t) {
		t.edge === null && (t.edge = e, e.push(t));
	}
	static uncoupleEdge(e) {
		if (e.edge !== null) {
			for (let t = 0; t < e.edge.length; t++) if (e.edge[t] === e) {
				e.edge[t] = null;
				break;
			}
			e.edge = null;
		}
	}
	static setNewOwner(e, t) {
		e.ownerIdx = t;
		let n = e.next;
		for (; n !== e;) n.ownerIdx = t, n = n.next;
	}
	addCorner(t, n) {
		this.add(e.headingClockwise(t, n) ? this.rectPath[t] : this.rectPath[n]);
	}
	addCornerWithDirection(t, n) {
		if (n) return this.add(this.rectPath[t]), e.getAdjacentLocation(t, !0);
		{
			let n = e.getAdjacentLocation(t, !1);
			return this.add(this.rectPath[n]), n;
		}
	}
	static getLocation(e, t) {
		if (t.x === e.left && t.y >= e.top && t.y <= e.bottom) return {
			location: $.left,
			isOnRect: !0
		};
		if (t.x === e.right && t.y >= e.top && t.y <= e.bottom) return {
			location: $.right,
			isOnRect: !0
		};
		if (t.y === e.top && t.x >= e.left && t.x <= e.right) return {
			location: $.top,
			isOnRect: !0
		};
		if (t.y === e.bottom && t.x >= e.left && t.x <= e.right) return {
			location: $.bottom,
			isOnRect: !0
		};
		let n;
		return n = t.x < e.left ? $.left : t.x > e.right ? $.right : t.y < e.top ? $.top : t.y > e.bottom ? $.bottom : $.inside, {
			location: n,
			isOnRect: !1
		};
	}
	static isHorizontal(e, t) {
		return e.y === t.y;
	}
	static getSegmentIntersection(t, n, r, i) {
		let a = X.crossProduct(t, r, i), o = X.crossProduct(n, r, i);
		if (a === 0) {
			let n = t;
			return o === 0 ? {
				intersects: !1,
				point: n
			} : Z.equals(t, r) || Z.equals(t, i) ? {
				intersects: !0,
				point: n
			} : e.isHorizontal(r, i) ? {
				intersects: t.x > r.x == t.x < i.x,
				point: n
			} : {
				intersects: t.y > r.y == t.y < i.y,
				point: n
			};
		}
		if (o === 0) {
			let t = n;
			return Z.equals(n, r) || Z.equals(n, i) ? {
				intersects: !0,
				point: t
			} : e.isHorizontal(r, i) ? {
				intersects: n.x > r.x == n.x < i.x,
				point: t
			} : {
				intersects: n.y > r.y == n.y < i.y,
				point: t
			};
		}
		if (a > 0 == o > 0) return {
			intersects: !1,
			point: {
				x: 0,
				y: 0
			}
		};
		let s = X.crossProduct(r, t, n), c = X.crossProduct(i, t, n);
		if (s === 0) {
			let i = r;
			return Z.equals(r, t) || Z.equals(r, n) ? {
				intersects: !0,
				point: i
			} : e.isHorizontal(t, n) ? {
				intersects: r.x > t.x == r.x < n.x,
				point: i
			} : {
				intersects: r.y > t.y == r.y < n.y,
				point: i
			};
		}
		if (c === 0) {
			let r = i;
			return Z.equals(i, t) || Z.equals(i, n) ? {
				intersects: !0,
				point: r
			} : e.isHorizontal(t, n) ? {
				intersects: i.x > t.x == i.x < n.x,
				point: r
			} : {
				intersects: i.y > t.y == i.y < n.y,
				point: r
			};
		}
		return s > 0 == c > 0 ? {
			intersects: !1,
			point: {
				x: 0,
				y: 0
			}
		} : X.getLineIntersectPt(t, n, r, i);
	}
	static getIntersection(t, n, r, i) {
		let a = {
			x: 0,
			y: 0
		}, o = i;
		switch (i) {
			case $.left: {
				let i = e.getSegmentIntersection(n, r, t[0], t[3]);
				if (i.intersects) return a = i.point, {
					intersects: !0,
					point: a,
					newLocation: o
				};
				if (n.y < t[0].y) {
					let i = e.getSegmentIntersection(n, r, t[0], t[1]);
					if (i.intersects) return o = $.top, {
						intersects: !0,
						point: i.point,
						newLocation: o
					};
				}
				let s = e.getSegmentIntersection(n, r, t[2], t[3]);
				return s.intersects ? (o = $.bottom, {
					intersects: !0,
					point: s.point,
					newLocation: o
				}) : {
					intersects: !1,
					point: a,
					newLocation: o
				};
			}
			case $.right: {
				let i = e.getSegmentIntersection(n, r, t[1], t[2]);
				if (i.intersects) return {
					intersects: !0,
					point: i.point,
					newLocation: o
				};
				if (n.y < t[0].y) {
					let i = e.getSegmentIntersection(n, r, t[0], t[1]);
					if (i.intersects) return o = $.top, {
						intersects: !0,
						point: i.point,
						newLocation: o
					};
				}
				let s = e.getSegmentIntersection(n, r, t[2], t[3]);
				return s.intersects ? (o = $.bottom, {
					intersects: !0,
					point: s.point,
					newLocation: o
				}) : {
					intersects: !1,
					point: a,
					newLocation: o
				};
			}
			case $.top: {
				let i = e.getSegmentIntersection(n, r, t[0], t[1]);
				if (i.intersects) return {
					intersects: !0,
					point: i.point,
					newLocation: o
				};
				if (n.x < t[0].x) {
					let i = e.getSegmentIntersection(n, r, t[0], t[3]);
					if (i.intersects) return o = $.left, {
						intersects: !0,
						point: i.point,
						newLocation: o
					};
				}
				if (n.x <= t[1].x) return {
					intersects: !1,
					point: a,
					newLocation: o
				};
				let s = e.getSegmentIntersection(n, r, t[1], t[2]);
				return s.intersects ? (o = $.right, {
					intersects: !0,
					point: s.point,
					newLocation: o
				}) : {
					intersects: !1,
					point: a,
					newLocation: o
				};
			}
			case $.bottom: {
				let i = e.getSegmentIntersection(n, r, t[2], t[3]);
				if (i.intersects) return {
					intersects: !0,
					point: i.point,
					newLocation: o
				};
				if (n.x < t[3].x) {
					let i = e.getSegmentIntersection(n, r, t[0], t[3]);
					if (i.intersects) return o = $.left, {
						intersects: !0,
						point: i.point,
						newLocation: o
					};
				}
				if (n.x <= t[2].x) return {
					intersects: !1,
					point: a,
					newLocation: o
				};
				let s = e.getSegmentIntersection(n, r, t[1], t[2]);
				return s.intersects ? (o = $.right, {
					intersects: !0,
					point: s.point,
					newLocation: o
				}) : {
					intersects: !1,
					point: a,
					newLocation: o
				};
			}
			default: {
				let i = e.getSegmentIntersection(n, r, t[0], t[3]);
				if (i.intersects) return o = $.left, {
					intersects: !0,
					point: i.point,
					newLocation: o
				};
				let s = e.getSegmentIntersection(n, r, t[0], t[1]);
				if (s.intersects) return o = $.top, {
					intersects: !0,
					point: s.point,
					newLocation: o
				};
				let c = e.getSegmentIntersection(n, r, t[1], t[2]);
				if (c.intersects) return o = $.right, {
					intersects: !0,
					point: c.point,
					newLocation: o
				};
				let l = e.getSegmentIntersection(n, r, t[2], t[3]);
				return l.intersects ? (o = $.bottom, {
					intersects: !0,
					point: l.point,
					newLocation: o
				}) : {
					intersects: !1,
					point: a,
					newLocation: o
				};
			}
		}
	}
	getNextLocation(e, t, n, r) {
		let i = n, a = t;
		switch (t) {
			case $.left:
				for (; i <= r && e[i].x <= this.rect.left;) i++;
				if (i > r) break;
				a = e[i].x >= this.rect.right ? $.right : e[i].y <= this.rect.top ? $.top : e[i].y >= this.rect.bottom ? $.bottom : $.inside;
				break;
			case $.top:
				for (; i <= r && e[i].y <= this.rect.top;) i++;
				if (i > r) break;
				a = e[i].y >= this.rect.bottom ? $.bottom : e[i].x <= this.rect.left ? $.left : e[i].x >= this.rect.right ? $.right : $.inside;
				break;
			case $.right:
				for (; i <= r && e[i].x >= this.rect.right;) i++;
				if (i > r) break;
				a = e[i].x <= this.rect.left ? $.left : e[i].y <= this.rect.top ? $.top : e[i].y >= this.rect.bottom ? $.bottom : $.inside;
				break;
			case $.bottom:
				for (; i <= r && e[i].y >= this.rect.bottom;) i++;
				if (i > r) break;
				a = e[i].y <= this.rect.top ? $.top : e[i].x <= this.rect.left ? $.left : e[i].x >= this.rect.right ? $.right : $.inside;
				break;
			case $.inside: for (; i <= r;) {
				if (e[i].x < this.rect.left) a = $.left;
				else if (e[i].x > this.rect.right) a = $.right;
				else if (e[i].y > this.rect.bottom) a = $.bottom;
				else if (e[i].y < this.rect.top) a = $.top;
				else {
					this.add(e[i]), i++;
					continue;
				}
				break;
			}
		}
		return {
			location: a,
			index: i
		};
	}
	static startLocsAreClockwise(e) {
		let t = 0;
		for (let n = 1; n < e.length; n++) switch (e[n] - e[n - 1]) {
			case -1:
				--t;
				break;
			case 1:
				t += 1;
				break;
			case -3:
				t += 1;
				break;
			case 3: --t;
		}
		return t > 0;
	}
	executeInternal(t) {
		if (t.length < 3 || rD.isEmpty(this.rect)) return;
		let n = [], r = $.inside, i = r, a = r, o = t.length - 1, s = e.getLocation(this.rect, t[o]), c = s.location;
		if (s.isOnRect) {
			let n = o - 1;
			for (; n >= 0;) {
				let r = e.getLocation(this.rect, t[n]);
				if (!r.isOnRect) {
					a = r.location;
					break;
				}
				n--;
			}
			if (n < 0) {
				for (let e of t) this.add(e);
				return;
			}
			a === $.inside && (c = $.inside);
		}
		let l = c, u = 0;
		for (; u <= o;) {
			a = c;
			let s = i, l = this.getNextLocation(t, c, u, o);
			if (c = l.location, u = l.index, u > o) break;
			let d = u === 0 ? t[o] : t[u - 1];
			i = c;
			let f = e.getIntersection(this.rectPath, t[u], d, i);
			if (!f.intersects) {
				if (s === $.inside) {
					let r = e.isClockwise(a, c, d, t[u], this.mp);
					do
						n.push(a), a = e.getAdjacentLocation(a, r);
					while (a !== c);
					i = s;
				} else if (a !== $.inside && a !== c) {
					let n = e.isClockwise(a, c, d, t[u], this.mp);
					do
						a = this.addCornerWithDirection(a, n);
					while (a !== c);
				}
				++u;
				continue;
			}
			let p = f.point;
			if (i = f.newLocation, c === $.inside) {
				if (r === $.inside) r = i, n.push(a);
				else if (a !== i) {
					let n = e.isClockwise(a, i, d, t[u], this.mp);
					do
						a = this.addCornerWithDirection(a, n);
					while (a !== i);
				}
			} else if (a !== $.inside) {
				c = a;
				let o = e.getIntersection(this.rectPath, d, t[u], c).point;
				if (s !== $.inside && s !== c && this.addCorner(s, c), r === $.inside && (r = c, n.push(a)), c = i, this.add(o), Z.equals(p, o)) {
					c = e.getLocation(this.rect, t[u]).location, this.addCorner(i, c), i = c;
					continue;
				}
			} else c = i, r === $.inside && (r = i);
			this.add(p);
		}
		if (r === $.inside) {
			if (l === $.inside || !rD.containsRect(this.pathBounds, this.rect) || !e.path1ContainsPath2(t, this.rectPath)) return;
			let r = e.startLocsAreClockwise(n);
			for (let t = 0; t < 4; t++) {
				let n = r ? t : 3 - t;
				this.add(this.rectPath[n]), e.addToEdge(this.edges[n * 2], this.results[0]);
			}
		} else if (c !== $.inside && (c !== r || n.length > 2)) {
			if (n.length > 0) {
				a = c;
				for (let t of n) a !== t && (a = this.addCornerWithDirection(a, e.headingClockwise(a, t)), a = t);
				c = a;
			}
			c !== r && this.addCornerWithDirection(c, e.headingClockwise(c, r));
		}
	}
	execute(e) {
		let t = [];
		if (rD.isEmpty(this.rect)) return t;
		for (let n of e) if (!(n.length < 3) && (this.pathBounds = X.getBounds(n), rD.intersects(this.rect, this.pathBounds))) {
			if (rD.containsRect(this.rect, this.pathBounds)) t.push(n);
			else {
				this.executeInternal(n), this.checkEdges();
				for (let e = 0; e < 4; ++e) this.tidyEdgePair(e, this.edges[e * 2], this.edges[e * 2 + 1]);
				for (let e of this.results) {
					let n = this.getPath(e);
					n.length > 0 && t.push(n);
				}
				this.results.length = 0;
				for (let e = 0; e < 8; e++) this.edges[e].length = 0;
			}
		}
		return t;
	}
	checkEdges() {
		for (let t = 0; t < this.results.length; t++) {
			let n = this.results[t], r = n;
			if (n === null) continue;
			do
				if (X.isCollinear(r.prev.pt, r.pt, r.next.pt)) {
					if (r === n) {
						if (r = e.unlinkOpBack(r), r === null) break;
						n = r.prev;
					} else if (r = e.unlinkOpBack(r), r === null) break;
				} else r = r.next;
			while (r !== n);
			if (r === null) {
				this.results[t] = null;
				continue;
			}
			this.results[t] = r;
			let i = e.getEdgesForPt(n.prev.pt, this.rect);
			r = n;
			do {
				let t = e.getEdgesForPt(r.pt, this.rect);
				if (t !== 0 && r.edge === null) {
					let n = i & t;
					for (let t = 0; t < 4; ++t) n & 1 << t && (e.isHeadingClockwise(r.prev.pt, r.pt, t) ? e.addToEdge(this.edges[t * 2], r) : e.addToEdge(this.edges[t * 2 + 1], r));
				}
				i = t, r = r.next;
			} while (r !== n);
		}
	}
	tidyEdgePair(t, n, r) {
		if (r.length === 0) return;
		let i = t === 1 || t === 3, a = t === 1 || t === 2, o = 0, s = 0;
		for (; o < n.length;) {
			let t = n[o];
			if (t === null || t.next === t.prev) {
				n[o++] = null, s = 0;
				continue;
			}
			let c = r.length;
			for (; s < c && (r[s] === null || r[s].next === r[s].prev);) ++s;
			if (s === c) {
				++o, s = 0;
				continue;
			}
			let l, u, d;
			if (a ? (t = n[o].prev, u = n[o], l = r[s], d = r[s].prev) : (t = n[o], u = n[o].prev, l = r[s].prev, d = r[s]), i && !e.hasHorzOverlap(t.pt, u.pt, l.pt, d.pt) || !i && !e.hasVertOverlap(t.pt, u.pt, l.pt, d.pt)) {
				++s;
				continue;
			}
			let f = n[o].ownerIdx !== r[s].ownerIdx;
			if (f && (this.results[l.ownerIdx] = null, e.setNewOwner(l, t.ownerIdx)), a ? (t.next = l, l.prev = t, u.prev = d, d.next = u) : (t.prev = l, l.next = t, u.next = d, d.prev = u), !f) {
				let t = this.results.length;
				this.results.push(u), e.setNewOwner(u, t);
			}
			let p, m;
			a ? (p = l, m = u) : (p = t, m = d), this.results[p.ownerIdx] = p, this.results[m.ownerIdx] = m;
			let h, g;
			i ? (h = p.pt.x > p.prev.pt.x, g = m.pt.x > m.prev.pt.x) : (h = p.pt.y > p.prev.pt.y, g = m.pt.y > m.prev.pt.y), p.next === p.prev || Z.equals(p.pt, p.prev.pt) ? g === a ? (n[o] = m, r[s++] = null) : (r[s] = m, n[o++] = null) : m.next === m.prev || Z.equals(m.pt, m.prev.pt) ? h === a ? (n[o] = p, r[s++] = null) : (r[s] = p, n[o++] = null) : h === g ? h === a ? (n[o] = p, e.uncoupleEdge(m), e.addToEdge(n, m), r[s++] = null) : (n[o++] = null, r[s] = m, e.uncoupleEdge(p), e.addToEdge(r, p), s = 0) : (h === a ? n[o] = p : r[s] = p, g === a ? n[o] = m : r[s] = m);
		}
	}
	getPath(t) {
		let n = [];
		if (t === null || t.prev === t.next) return n;
		let r = t.next;
		for (; r !== null && r !== t;) X.isCollinear(r.prev.pt, r.pt, r.next.pt) ? (t = r.prev, r = e.unlinkOp(r)) : r = r.next;
		if (r === null) return [];
		for (n.push(t.pt), r = t.next; r !== t;) n.push(r.pt), r = r.next;
		return n;
	}
}, jD = class extends AD {
	constructor(e) {
		super(e);
	}
	execute(e) {
		let t = [];
		if (rD.isEmpty(this.rect)) return t;
		for (let n of e) if (!(n.length < 2) && (this.pathBounds = X.getBounds(n), rD.intersects(this.rect, this.pathBounds))) {
			this.executeInternalLines(n);
			for (let e of this.results) {
				let n = this.getPathLines(e);
				n.length > 0 && t.push(n);
			}
			this.results.length = 0;
			for (let e = 0; e < 8; e++) this.edges[e].length = 0;
		}
		return t;
	}
	getPathLines(e) {
		let t = [];
		if (e === null || e === e.next) return t;
		e = e.next, t.push(e.pt);
		let n = e.next;
		for (; n !== e;) t.push(n.pt), n = n.next;
		return t;
	}
	executeInternalLines(e) {
		if (this.results.length = 0, e.length < 2 || rD.isEmpty(this.rect)) return;
		let t = $.inside, n = 1, r = e.length - 1, i = AD.getLocation(this.rect, e[0]), a = i.location;
		if (i.isOnRect) {
			for (; n <= r;) {
				let r = AD.getLocation(this.rect, e[n]);
				if (!r.isOnRect) {
					t = r.location;
					break;
				}
				n++;
			}
			if (n > r) {
				for (let t of e) this.add(t);
				return;
			}
			t === $.inside && (a = $.inside), n = 1;
		}
		for (a === $.inside && this.add(e[0]); n <= r;) {
			t = a;
			let i = this.getNextLocation(e, a, n, r);
			if (a = i.location, n = i.index, n > r) break;
			let o = e[n - 1], s = a, c = AD.getIntersection(this.rectPath, e[n], o, s);
			if (!c.intersects) {
				++n;
				continue;
			}
			let l = c.point;
			if (s = c.newLocation, a === $.inside) this.add(l, !0);
			else if (t !== $.inside) {
				s = t;
				let r = AD.getIntersection(this.rectPath, o, e[n], s).point;
				this.add(r, !0), this.add(l);
			} else this.add(l);
		}
	}
}, MD;
(function(e) {
	function t(e, t, n, r) {
		let i = +!r, a = e.length, s = t.length, l = [];
		for (let r of t) {
			let t = [];
			if (n) for (let n of e) t.push(Z.add(r, n));
			else for (let n of e) t.push(Z.subtract(r, n));
			l.push(t);
		}
		let u = [], d = r ? s - 1 : 0, f = a - 1;
		for (let e = i; e < s; e++) {
			for (let t = 0; t < a; t++) {
				let n = [
					l[d][f],
					l[e][f],
					l[e][t],
					l[d][t]
				];
				o(n) ? u.push(n) : u.push(c(n)), f = t;
			}
			d = e;
		}
		return u;
	}
	function n(e, n, r) {
		return d(t(e, n, !0, r), J.NonZero);
	}
	e.sum = n;
	function r(e, n, r, i = 2) {
		let a = 10 ** i;
		return u(d(t(l(e, a), l(n, a), !0, r), J.NonZero), 1 / a);
	}
	e.sumD = r;
	function i(e, n, r) {
		return d(t(e, n, !1, r), J.NonZero);
	}
	e.diff = i;
	function a(e, n, r, i = 2) {
		let a = 10 ** i;
		return u(d(t(l(e, a), l(n, a), !1, r), J.NonZero), 1 / a);
	}
	e.diffD = a;
	function o(e) {
		return s(e) >= 0;
	}
	function s(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	function c(e) {
		return [...e].reverse();
	}
	function l(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: X.roundToEven(r.x * t),
			y: X.roundToEven(r.y * t)
		});
		return n;
	}
	function u(e, t) {
		let n = [];
		for (let r of e) {
			let e = [];
			for (let n of r) e.push({
				x: n.x * t,
				y: n.y * t
			});
			n.push(e);
		}
		return n;
	}
	function d(e, t) {
		let n = [], r = new SD();
		return r.addPaths(e, tD.Subject), r.execute(eD.Union, t, n), n;
	}
})(MD ||= {});
// node_modules/clipper2-ts/dist/Triangulation.js
var ND;
(function(e) {
	e[e.success = 0] = "success", e[e.fail = 1] = "fail", e[e.noPolygons = 2] = "noPolygons", e[e.pathsIntersect = 3] = "pathsIntersect";
})(ND ||= {});
var PD;
(function(e) {
	e[e.loose = 0] = "loose", e[e.ascend = 1] = "ascend", e[e.descend = 2] = "descend";
})(PD ||= {});
var FD;
(function(e) {
	e[e.none = 0] = "none", e[e.collinear = 1] = "collinear", e[e.intersect = 2] = "intersect";
})(FD ||= {});
var ID;
(function(e) {
	e[e.neither = 0] = "neither", e[e.left = 1] = "left", e[e.right = 2] = "right";
})(ID ||= {});
var LD = class {
	pt;
	edges = [];
	innerLM = !1;
	constructor(e) {
		this.pt = e;
	}
}, RD = class {
	vL = null;
	vR = null;
	vB = null;
	vT = null;
	kind = PD.loose;
	triA = null;
	triB = null;
	isActive = !1;
	nextE = null;
	prevE = null;
}, zD = class {
	edges = [
		,
		,
		,
	];
	constructor(e, t, n) {
		this.edges[0] = e, this.edges[1] = t, this.edges[2] = n;
	}
}, BD = class e {
	allVertices = [];
	allEdges = [];
	allTriangles = [];
	pendingDelaunayStack = [];
	horzEdgeStack = [];
	locMinStack = [];
	useDelaunay;
	firstActive = null;
	lowermostVertex = null;
	constructor(e = !0) {
		this.useDelaunay = e;
	}
	addPath(t) {
		let n = t.length;
		if (n === 0) return;
		let r = 0, i, a, o = e.findLocMinIdx(t, n, r);
		if (!o.found) return;
		for (r = o.idx, i = e.prev(r, n); t[i].x === t[r].x && t[i].y === t[r].y;) i = e.prev(i, n);
		a = e.next(r, n);
		let s = r;
		for (; X.crossProductSign(t[i], t[s], t[a]) === 0;) {
			let r = e.findLocMinIdx(t, n, s);
			if (!r.found) return;
			for (s = r.idx, i = e.prev(s, n); t[i].x === t[s].x && t[i].y === t[s].y;) i = e.prev(i, n);
			a = e.next(s, n);
		}
		let c = this.allVertices.length, l = new LD(t[s]);
		this.allVertices.push(l), e.leftTurning(t[i], t[s], t[a]) && (l.innerLM = !0);
		let u = l;
		for (s = a;;) {
			if (this.locMinStack.push(u), (this.lowermostVertex === null || u.pt.y > this.lowermostVertex.pt.y || u.pt.y === this.lowermostVertex.pt.y && u.pt.x < this.lowermostVertex.pt.x) && (this.lowermostVertex = u), a = e.next(s, n), X.crossProductSign(u.pt, t[s], t[a]) === 0) {
				s = a;
				continue;
			}
			for (; t[s].y <= u.pt.y;) {
				let r = new LD(t[s]);
				for (this.allVertices.push(r), this.createEdge(u, r, PD.ascend), u = r, s = a, a = e.next(s, n); X.crossProductSign(u.pt, t[s], t[a]) === 0;) s = a, a = e.next(s, n);
			}
			let i = u;
			for (; s !== r && t[s].y >= u.pt.y;) {
				let r = new LD(t[s]);
				for (this.allVertices.push(r), this.createEdge(r, u, PD.descend), u = r, s = a, a = e.next(s, n); X.crossProductSign(u.pt, t[s], t[a]) === 0;) s = a, a = e.next(s, n);
			}
			if (s === r) break;
			e.leftTurning(i.pt, u.pt, t[s]) && (u.innerLM = !0);
		}
		this.createEdge(l, u, PD.descend);
		let d = this.allVertices.length - c, f = c;
		if (d < 3 || d === 3 && (e.distSqr(this.allVertices[f].pt, this.allVertices[f + 1].pt) <= 1 || e.distSqr(this.allVertices[f + 1].pt, this.allVertices[f + 2].pt) <= 1 || e.distSqr(this.allVertices[f + 2].pt, this.allVertices[f].pt) <= 1)) for (let e = c; e < this.allVertices.length; ++e) this.allVertices[e].edges = [];
	}
	addPaths(e) {
		let t = 0;
		for (let n of e) t += n.length;
		if (t === 0) return !1;
		for (let t of e) this.addPath(t);
		return this.allVertices.length > 2;
	}
	cleanUp() {
		this.allVertices.length = 0, this.allEdges.length = 0, this.allTriangles.length = 0, this.pendingDelaunayStack.length = 0, this.horzEdgeStack.length = 0, this.locMinStack.length = 0, this.firstActive = null, this.lowermostVertex = null;
	}
	fixupEdgeIntersects() {
		for (let t = 0; t < this.allEdges.length; ++t) {
			let n = this.allEdges[t];
			for (let r = t + 1; r < this.allEdges.length; ++r) {
				let t = this.allEdges[r];
				if (t.vL.pt.x >= n.vR.pt.x) break;
				if (t.vT.pt.y < n.vB.pt.y && t.vB.pt.y > n.vT.pt.y && e.segsIntersect(t.vL.pt, t.vR.pt, n.vL.pt, n.vR.pt) === FD.intersect && !this.removeIntersection(t, n)) return !1;
			}
		}
		return !0;
	}
	mergeDupOrCollinearVertices() {
		if (this.allVertices.length < 2) return;
		let t = 0;
		for (let n = 1; n < this.allVertices.length; ++n) {
			let r = this.allVertices[t], i = this.allVertices[n];
			if (r.pt.x !== i.pt.x || r.pt.y !== i.pt.y) t = n;
			else {
				r.innerLM && i.innerLM || (r.innerLM = !1);
				for (let e of i.edges) e.vB === i ? e.vB = r : e.vT = r, e.vL === i ? e.vL = r : e.vR = r;
				r.edges.push(...i.edges), i.edges = [];
				for (let t = 0; t < r.edges.length; ++t) {
					let n = r.edges[t];
					if (!(e.isHorizontal(n) || n.vB !== r)) for (let e = t + 1; e < r.edges.length; ++e) {
						let t = r.edges[e];
						if (t.vB === r && n.vT.pt.y !== t.vT.pt.y && X.crossProductSign(n.vT.pt, r.pt, t.vT.pt) === 0) {
							n.vT.pt.y < t.vT.pt.y ? this.splitEdge(n, t) : this.splitEdge(t, n);
							break;
						}
					}
				}
			}
		}
	}
	splitEdge(t, n) {
		let r = t.vT, i = n.vT;
		e.removeEdgeFromVertex(r, t), t.vT = i, t.vL === r ? t.vL = i : t.vR = i, i.edges.push(t), this.createEdge(i, r, t.kind);
	}
	removeIntersection(t, n) {
		let r = t.vL, i = n, a = e.shortestDistFromSegment(t.vL.pt, n.vL.pt, n.vR.pt), o = e.shortestDistFromSegment(t.vR.pt, n.vL.pt, n.vR.pt);
		if (o < a && (a = o, r = t.vR), o = e.shortestDistFromSegment(n.vL.pt, t.vL.pt, t.vR.pt), o < a && (a = o, i = t, r = n.vL), o = e.shortestDistFromSegment(n.vR.pt, t.vL.pt, t.vR.pt), o < a && (a = o, i = t, r = n.vR), a > 1) return !1;
		let s = i.vT;
		return e.removeEdgeFromVertex(s, i), i.vL === s ? i.vL = r : i.vR = r, i.vT = r, r.edges.push(i), r.innerLM = !1, i.vB.innerLM && e.getLocMinAngle(i.vB) <= 0 && (i.vB.innerLM = !1), this.createEdge(r, s, i.kind), !0;
	}
	createEdge(e, t, n) {
		let r = new RD();
		return this.allEdges.push(r), e.pt.y === t.pt.y ? (r.vB = e, r.vT = t) : e.pt.y < t.pt.y ? (r.vB = t, r.vT = e) : (r.vB = e, r.vT = t), e.pt.x <= t.pt.x ? (r.vL = e, r.vR = t) : (r.vL = t, r.vR = e), r.kind = n, e.edges.push(r), t.edges.push(r), n === PD.loose && (this.pendingDelaunayStack.push(r), this.addEdgeToActives(r)), r;
	}
	createTriangle(t, n, r) {
		let i = new zD(t, n, r);
		this.allTriangles.push(i);
		for (let t = 0; t < 3; ++t) {
			let n = i.edges[t];
			n.triA === null ? (n.triA = i, e.isLooseEdge(n) || this.removeEdgeFromActives(n)) : (n.triB = i, this.removeEdgeFromActives(n));
		}
		return i;
	}
	forceLegal(t) {
		if (t.triA === null || t.triB === null) return;
		let n = null, r = null, i = [
			null,
			null,
			null
		], a = [
			null,
			null,
			null
		];
		for (let r = 0; r < 3; ++r) {
			if (t.triA.edges[r] === t) continue;
			let o = t.triA.edges[r], s = e.edgeContains(o, t.vL);
			s === ID.left ? (i[1] = o, n = o.vR) : s === ID.right ? (i[1] = o, n = o.vL) : a[1] = o;
		}
		for (let n = 0; n < 3; ++n) {
			if (t.triB.edges[n] === t) continue;
			let o = t.triB.edges[n], s = e.edgeContains(o, t.vL);
			s === ID.left ? (i[2] = o, r = o.vR) : s === ID.right ? (i[2] = o, r = o.vL) : a[2] = o;
		}
		if (n === null || r === null || X.crossProductSign(n.pt, t.vL.pt, t.vR.pt) === 0) return;
		let o = e.inCircleTest(n.pt, t.vL.pt, t.vR.pt, r.pt);
		if (o !== 0 && e.rightTurning(n.pt, t.vL.pt, t.vR.pt) !== o < 0) {
			t.vL = n, t.vR = r, t.triA.edges[0] = t;
			for (let n = 1; n < 3; ++n) {
				let r = i[n];
				if (t.triA.edges[n] = r, e.isLooseEdge(r) && this.pendingDelaunayStack.push(r), r.triA !== t.triA && r.triB !== t.triA) {
					if (r.triA === t.triB) r.triA = t.triA;
					else if (r.triB === t.triB) r.triB = t.triA;
					else throw Error("Triangulation internal error");
				}
			}
			t.triB.edges[0] = t;
			for (let n = 1; n < 3; ++n) {
				let r = a[n];
				if (t.triB.edges[n] = r, e.isLooseEdge(r) && this.pendingDelaunayStack.push(r), r.triA !== t.triB && r.triB !== t.triB) {
					if (r.triA === t.triA) r.triA = t.triB;
					else if (r.triB === t.triA) r.triB = t.triB;
					else throw Error("Triangulation internal error");
				}
			}
		}
	}
	createInnerLocMinLooseEdge(t) {
		if (this.firstActive === null) return null;
		let n = t.pt.x, r = t.pt.y, i = this.firstActive, a = null, o = -1;
		for (; i !== null;) {
			if (i.vL.pt.x <= n && i.vR.pt.x >= n && i.vB.pt.y >= r && i.vB !== t && i.vT !== t && !e.leftTurning(i.vL.pt, t.pt, i.vR.pt)) {
				let n = e.shortestDistFromSegment(t.pt, i.vL.pt, i.vR.pt);
				(a === null || n < o) && (a = i, o = n);
			}
			i = i.nextE;
		}
		if (a === null) return null;
		let s = a.vT.pt.y <= r ? a.vB : a.vT, c = s.pt.x, l = s.pt.y;
		if (i = this.firstActive, c < n) for (; i !== null;) i.vR.pt.x > c && i.vL.pt.x < n && i.vB.pt.y > r && i.vT.pt.y < l && e.segsIntersect(i.vB.pt, i.vT.pt, s.pt, t.pt) === FD.intersect && (s = i.vT.pt.y > r ? i.vT : i.vB, c = s.pt.x, l = s.pt.y), i = i.nextE;
		else for (; i !== null;) i.vR.pt.x < c && i.vL.pt.x > n && i.vB.pt.y > r && i.vT.pt.y < l && e.segsIntersect(i.vB.pt, i.vT.pt, s.pt, t.pt) === FD.intersect && (s = i.vT.pt.y > r ? i.vT : i.vB, c = s.pt.x, l = s.pt.y), i = i.nextE;
		return this.createEdge(s, t, PD.loose);
	}
	horizontalBetween(e, t) {
		let n = e.pt.y, r, i;
		e.pt.x > t.pt.x ? (r = t.pt.x, i = e.pt.x) : (r = e.pt.x, i = t.pt.x);
		let a = this.firstActive;
		for (; a !== null && !(a.vL.pt.y === n && a.vR.pt.y === n && a.vL.pt.x >= r && a.vR.pt.x <= i && (a.vL.pt.x !== r || a.vL.pt.x !== i));) a = a.nextE;
		return a;
	}
	doTriangulateLeft(t, n, r) {
		let i = null, a = null, o = t.vB === n ? t.vT : t.vB;
		for (let r of n.edges) {
			if (r === t || !r.isActive) continue;
			let s = r.vT === n ? r.vB : r.vT;
			if (s === o) continue;
			let c = X.crossProductSign(o.pt, n.pt, s.pt);
			if (c === 0) {
				if (o.pt.x > n.pt.x == n.pt.x > s.pt.x) continue;
			} else if (c > 0 || i !== null && !e.leftTurning(s.pt, n.pt, i.pt)) continue;
			i = s, a = r;
		}
		if (i === null || i.pt.y < r || a === null) return;
		if (i.pt.y < n.pt.y) {
			if (e.isLeftEdge(a)) return;
		} else if (i.pt.y > n.pt.y && e.isRightEdge(a)) return;
		let s = e.findLinkingEdge(i, o, i.pt.y < o.pt.y);
		if (s === null) {
			if (i.pt.y === o.pt.y && o.pt.y === r && this.horizontalBetween(i, o) !== null) return;
			s = this.createEdge(i, o, PD.loose);
		}
		this.createTriangle(t, a, s), e.edgeCompleted(s) || this.doTriangulateLeft(s, i, r);
	}
	doTriangulateRight(t, n, r) {
		let i = null, a = null, o = t.vB === n ? t.vT : t.vB;
		for (let r of n.edges) {
			if (r === t || !r.isActive) continue;
			let s = r.vT === n ? r.vB : r.vT;
			if (s === o) continue;
			let c = X.crossProductSign(o.pt, n.pt, s.pt);
			if (c === 0) {
				if (o.pt.x > n.pt.x == n.pt.x > s.pt.x) continue;
			} else if (c < 0 || i !== null && !e.rightTurning(s.pt, n.pt, i.pt)) continue;
			i = s, a = r;
		}
		if (i === null || i.pt.y < r || a === null) return;
		if (i.pt.y < n.pt.y) {
			if (e.isRightEdge(a)) return;
		} else if (i.pt.y > n.pt.y && e.isLeftEdge(a)) return;
		let s = e.findLinkingEdge(i, o, i.pt.y > o.pt.y);
		if (s === null) {
			if (i.pt.y === o.pt.y && o.pt.y === r && this.horizontalBetween(i, o) !== null) return;
			s = this.createEdge(i, o, PD.loose);
		}
		this.createTriangle(t, s, a), e.edgeCompleted(s) || this.doTriangulateRight(s, i, r);
	}
	addEdgeToActives(e) {
		e.isActive || (e.prevE = null, e.nextE = this.firstActive, e.isActive = !0, this.firstActive !== null && (this.firstActive.prevE = e), this.firstActive = e);
	}
	removeEdgeFromActives(t) {
		e.removeEdgeFromVertex(t.vB, t), e.removeEdgeFromVertex(t.vT, t);
		let n = t.prevE, r = t.nextE;
		r !== null && (r.prevE = n), n !== null && (n.nextE = r), t.isActive = !1, this.firstActive === t && (this.firstActive = r);
	}
	execute(t) {
		let n = [];
		if (!this.addPaths(t)) return {
			result: ND.noPolygons,
			solution: n
		};
		if (this.lowermostVertex.innerLM) {
			for (; this.locMinStack.length > 0;) {
				let e = this.locMinStack.pop();
				e.innerLM = !e.innerLM;
			}
			for (let e of this.allEdges) e.kind === PD.ascend ? e.kind = PD.descend : e.kind === PD.descend && (e.kind = PD.ascend);
		} else this.locMinStack.length = 0;
		if (this.allEdges.sort((e, t) => e.vL.pt.x < t.vL.pt.x ? -1 : +(e.vL.pt.x > t.vL.pt.x)), !this.fixupEdgeIntersects()) return this.cleanUp(), {
			result: ND.pathsIntersect,
			solution: n
		};
		this.allVertices.sort((e, t) => e.pt.y === t.pt.y ? e.pt.x < t.pt.x ? -1 : +(e.pt.x > t.pt.x) : t.pt.y < e.pt.y ? -1 : 1), this.mergeDupOrCollinearVertices();
		let r = this.allVertices[0].pt.y;
		for (let t of this.allVertices) if (t.edges.length !== 0) {
			if (t.pt.y !== r) {
				for (; this.locMinStack.length > 0;) {
					let t = this.locMinStack.pop(), i = this.createInnerLocMinLooseEdge(t);
					if (i === null) return this.cleanUp(), {
						result: ND.fail,
						solution: n
					};
					e.isHorizontal(i) ? i.vL === i.vB ? this.doTriangulateLeft(i, i.vB, r) : this.doTriangulateRight(i, i.vB, r) : (this.doTriangulateLeft(i, i.vB, r), e.edgeCompleted(i) || this.doTriangulateRight(i, i.vB, r)), this.addEdgeToActives(t.edges[0]), this.addEdgeToActives(t.edges[1]);
				}
				for (; this.horzEdgeStack.length > 0;) {
					let t = this.horzEdgeStack.pop();
					e.edgeCompleted(t) || (t.vB === t.vL ? e.isLeftEdge(t) && this.doTriangulateLeft(t, t.vB, r) : e.isRightEdge(t) && this.doTriangulateRight(t, t.vB, r));
				}
				r = t.pt.y;
			}
			for (let n = t.edges.length - 1; n >= 0; --n) {
				if (n >= t.edges.length) continue;
				let r = t.edges[n];
				e.edgeCompleted(r) || e.isLooseEdge(r) || (t === r.vB ? (e.isHorizontal(r) && this.horzEdgeStack.push(r), t.innerLM || this.addEdgeToActives(r)) : e.isHorizontal(r) ? this.horzEdgeStack.push(r) : e.isLeftEdge(r) ? this.doTriangulateLeft(r, r.vB, t.pt.y) : this.doTriangulateRight(r, r.vB, t.pt.y));
			}
			t.innerLM && this.locMinStack.push(t);
		}
		for (; this.horzEdgeStack.length > 0;) {
			let t = this.horzEdgeStack.pop();
			!e.edgeCompleted(t) && t.vB === t.vL && this.doTriangulateLeft(t, t.vB, r);
		}
		if (this.useDelaunay) for (; this.pendingDelaunayStack.length > 0;) {
			let e = this.pendingDelaunayStack.pop();
			this.forceLegal(e);
		}
		for (let t of this.allTriangles) {
			let r = e.pathFromTriangle(t), i = X.crossProductSign(r[0], r[1], r[2]);
			i !== 0 && (i < 0 && r.reverse(), n.push(r));
		}
		return this.cleanUp(), {
			result: ND.success,
			solution: n
		};
	}
	static isLooseEdge(e) {
		return e.kind === PD.loose;
	}
	static isLeftEdge(e) {
		return e.kind === PD.ascend;
	}
	static isRightEdge(e) {
		return e.kind === PD.descend;
	}
	static isHorizontal(e) {
		return e.vB.pt.y === e.vT.pt.y;
	}
	static leftTurning(e, t, n) {
		return X.crossProductSign(e, t, n) < 0;
	}
	static rightTurning(e, t, n) {
		return X.crossProductSign(e, t, n) > 0;
	}
	static edgeCompleted(e) {
		return e.triA === null ? !1 : e.triB !== null || e.kind !== PD.loose;
	}
	static edgeContains(e, t) {
		return e.vL === t ? ID.left : e.vR === t ? ID.right : ID.neither;
	}
	static getAngle(e, t, n) {
		let r = Number(t.x - e.x), i = Number(t.y - e.y), a = Number(t.x - n.x), o = Number(t.y - n.y), s = r * a + i * o, c = r * o - i * a;
		return Math.atan2(c, s);
	}
	static getLocMinAngle(t) {
		let n, r;
		return t.edges[0].kind === PD.ascend ? (n = 0, r = 1) : (r = 0, n = 1), e.getAngle(t.edges[r].vT.pt, t.pt, t.edges[n].vT.pt);
	}
	static removeEdgeFromVertex(e, t) {
		let n = e.edges.indexOf(t);
		if (n < 0) throw Error("Edge not found in vertex");
		e.edges.splice(n, 1);
	}
	static findLocMinIdx(e, t, n) {
		if (t < 3) return {
			found: !1,
			idx: n
		};
		let r = n, i = (n + 1) % t;
		for (; e[i].y <= e[n].y;) if (n = i, i = (i + 1) % t, n === r) return {
			found: !1,
			idx: n
		};
		for (; e[i].y >= e[n].y;) n = i, i = (i + 1) % t;
		return {
			found: !0,
			idx: n
		};
	}
	static prev(e, t) {
		return e === 0 ? t - 1 : e - 1;
	}
	static next(e, t) {
		return (e + 1) % t;
	}
	static findLinkingEdge(e, t, n) {
		let r = null;
		for (let i of e.edges) if (i.vL === t || i.vR === t) {
			if (i.kind === PD.loose || i.kind === PD.ascend === n) return i;
			r = i;
		}
		return r;
	}
	static pathFromTriangle(e) {
		let t = [e.edges[0].vL.pt, e.edges[0].vR.pt], n = e.edges[1];
		return n.vL.pt.x === t[0].x && n.vL.pt.y === t[0].y || n.vL.pt.x === t[1].x && n.vL.pt.y === t[1].y ? t.push(n.vR.pt) : t.push(n.vL.pt), t;
	}
	static inCircleTest(e, t, n, r) {
		let i = Number(e.x - r.x), a = Number(e.y - r.y), o = i * i + a * a, s = Number(t.x - r.x), c = Number(t.y - r.y), l = s * s + c * c, u = Number(n.x - r.x), d = Number(n.y - r.y), f = u * u + d * d;
		return i * (c * f - d * l) - s * (a * f - d * o) + u * (a * l - c * o);
	}
	static shortestDistFromSegment(t, n, r) {
		let i = Number(r.x - n.x), a = Number(r.y - n.y), o = Number(t.x - n.x), s = Number(t.y - n.y), c = o * i + s * a, l = i * i + a * a;
		return c < 0 ? e.distanceSqr(t, n) : c > l ? e.distanceSqr(t, r) : (o * a - i * s) * (o * a - i * s) / l;
	}
	static segsIntersect(e, t, n, r) {
		let i = Number(t.y - e.y), a = Number(t.x - e.x), o = Number(r.y - n.y), s = Number(r.x - n.x), c = i * s - o * a;
		if (c === 0) return FD.collinear;
		let l = Number(e.x - n.x) * o - Number(e.y - n.y) * s;
		if (l === 0) return FD.none;
		if (l > 0) {
			if (c < 0 || l >= c) return FD.none;
		} else if (c > 0 || l <= c) return FD.none;
		if (l = Number(e.x - n.x) * i - Number(e.y - n.y) * a, l === 0) return FD.none;
		if (l > 0) {
			if (c > 0 && l < c) return FD.intersect;
		} else if (c < 0 && l > c) return FD.intersect;
		return FD.none;
	}
	static distSqr(e, t) {
		let n = Number(e.x - t.x), r = Number(e.y - t.y);
		return n * n + r * r;
	}
	static distanceSqr(e, t) {
		let n = Number(e.x - t.x), r = Number(e.y - t.y);
		return n * n + r * r;
	}
}, VD;
(function(e) {
	e.invalidRect64 = sD, e.invalidRectD = cD;
	function t(e, t, n) {
		return l(eD.Intersection, e, t, n);
	}
	e.intersect = t;
	function n(e, t, n, r = 2) {
		return d(eD.Intersection, e, t, n, r);
	}
	e.intersectD = n;
	function r(e, t, n) {
		return typeof t == "number" ? l(eD.Union, e, null, t) : l(eD.Union, e, t, n);
	}
	e.union = r;
	function i(e, t, n, r) {
		return typeof t == "number" ? d(eD.Union, e, null, t) : d(eD.Union, e, t, n, r || 2);
	}
	e.unionD = i;
	function a(e, t, n) {
		return l(eD.Difference, e, t, n);
	}
	e.difference = a;
	function o(e, t, n, r = 2) {
		return d(eD.Difference, e, t, n, r);
	}
	e.differenceD = o;
	function s(e, t, n) {
		return l(eD.Xor, e, t, n);
	}
	e.xor = s;
	function c(e, t, n, r = 2) {
		return d(eD.Xor, e, t, n, r);
	}
	e.xorD = c;
	function l(e, t, n, r) {
		let i = [];
		if (t === null) return i;
		let a = new SD();
		return a.addPaths(t, tD.Subject), n !== null && a.addPaths(n, tD.Clip), a.execute(e, r, i), i;
	}
	e.booleanOp = l;
	function u(e, t, n, r, i) {
		if (t === null) return;
		let a = new SD();
		a.addPaths(t, tD.Subject), n !== null && a.addPaths(n, tD.Clip), a.execute(e, i, r);
	}
	e.booleanOpWithPolyTree = u;
	function d(e, t, n, r, i = 2) {
		let a = [], o = new CD(i);
		return o.addSubjectPaths(t), n !== null && o.addClipPaths(n), o.execute(e, r, a), a;
	}
	e.booleanOpD = d;
	function f(e, t, n, r, i, a = 2) {
		if (t === null) return;
		let o = new CD(a);
		o.addSubjectPaths(t), n !== null && o.addClipPaths(n), o.execute(e, i, r);
	}
	e.booleanOpDWithPolyTree = f;
	function p(e, t, n, r, i = 2, a = 0) {
		let o = new OD(i, a);
		o.addPaths(e, n, r);
		let s = [];
		return o.execute(t, s), s;
	}
	e.inflatePaths = p;
	function m(e, t, n, r, i = 2, a = 2, o = 0) {
		X.checkPrecision(a);
		let s = 10 ** a, c = D(e, s), l = new OD(i, s * o);
		l.addPaths(c, n, r);
		let u = [];
		return l.execute(t * s, u), de(u, 1 / s);
	}
	e.inflatePathsD = m;
	function h(e, t, n) {
		if ("left" in e && typeof e.left == "number" && Number.isInteger(e.left)) {
			let n = e;
			if (rD.isEmpty(n)) return [];
			if (Array.isArray(t[0])) {
				let e = t;
				return e.length === 0 ? [] : new AD(n).execute(e);
			}
			{
				let e = t;
				return e.length === 0 ? [] : h(n, [e]);
			}
		}
		{
			let r = e, i = n || 2;
			if (X.checkPrecision(i), iD.isEmpty(r)) return [];
			let a = 10 ** i, o = ce(r, a);
			if (Array.isArray(t[0])) {
				let e = t;
				if (e.length === 0) return [];
				let n = D(e, a);
				return de(new AD(o).execute(n), 1 / a);
			}
			{
				let e = t;
				return e.length === 0 ? [] : h(r, [e], i);
			}
		}
	}
	e.rectClip = h;
	function g(e, t, n) {
		if ("left" in e && typeof e.left == "number" && Number.isInteger(e.left)) {
			let n = e;
			if (rD.isEmpty(n)) return [];
			if (Array.isArray(t[0])) {
				let e = t;
				return e.length === 0 ? [] : new jD(n).execute(e);
			}
			{
				let e = t;
				return e.length === 0 ? [] : g(n, [e]);
			}
		}
		{
			let r = e, i = n || 2;
			if (X.checkPrecision(i), iD.isEmpty(r)) return [];
			let a = 10 ** i, o = ce(r, a);
			if (Array.isArray(t[0])) {
				let e = t;
				if (e.length === 0) return [];
				let n = D(e, a);
				return de(new jD(o).execute(n), 1 / a);
			}
			{
				let e = t;
				return e.length === 0 ? [] : g(r, [e], i);
			}
		}
	}
	e.rectClipLines = g;
	function _(e, t, n) {
		return MD.sum(e, t, n);
	}
	e.minkowskiSum = _;
	function v(e, t, n) {
		return MD.sumD(e, t, n);
	}
	e.minkowskiSumD = v;
	function y(e, t, n) {
		return MD.diff(e, t, n);
	}
	e.minkowskiDiff = y;
	function b(e, t, n) {
		return MD.diffD(e, t, n);
	}
	e.minkowskiDiffD = b;
	function x(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	e.area = x;
	function S(e) {
		let t = 0;
		for (let n of e) t += x(n);
		return t;
	}
	e.areaPaths = S;
	function ee(e) {
		let t = 0, n = e.length;
		if (n < 3) return 0;
		let r = e[n - 1];
		for (let n of e) t += (r.y + n.y) * (r.x - n.x), r = n;
		return t * .5;
	}
	e.areaD = ee;
	function te(e) {
		let t = 0;
		for (let n of e) t += ee(n);
		return t;
	}
	e.areaPathsD = te;
	function ne(e) {
		return x(e) >= 0;
	}
	e.isPositive = ne;
	function C(e) {
		return ee(e) >= 0;
	}
	e.isPositiveD = C;
	function re(e) {
		let t = "";
		for (let n of e) t += Z.toString(n);
		return t + "\n";
	}
	e.path64ToString = re;
	function w(e) {
		let t = "";
		for (let n of e) t += re(n);
		return t;
	}
	e.paths64ToString = w;
	function T(e, t = 2) {
		let n = "";
		for (let r of e) n += nD.toString(r, t);
		return n + "\n";
	}
	e.pathDToString = T;
	function ie(e, t = 2) {
		let n = "";
		for (let r of e) n += T(r, t);
		return n;
	}
	e.pathsDToString = ie;
	function ae(e, t, n) {
		let r = [];
		for (let i of e) r.push({
			x: i.x + t,
			y: i.y + n
		});
		return r;
	}
	e.offsetPath = ae;
	function oe(e, t) {
		return {
			x: Math.round(e.x * t),
			y: Math.round(e.y * t)
		};
	}
	e.scalePoint64 = oe;
	function se(e, t) {
		return {
			x: e.x * t,
			y: e.y * t
		};
	}
	e.scalePointD = se;
	function ce(e, t) {
		return {
			left: Math.round(e.left * t),
			top: Math.round(e.top * t),
			right: Math.round(e.right * t),
			bottom: Math.round(e.bottom * t)
		};
	}
	e.scaleRect = ce;
	function le(e, t) {
		if (X.isAlmostZero(t - 1)) return e;
		let n = [];
		for (let r of e) n.push({
			x: Math.round(r.x * t),
			y: Math.round(r.y * t)
		});
		return n;
	}
	e.scalePath = le;
	function ue(e, t) {
		if (X.isAlmostZero(t - 1)) return e;
		let n = [];
		for (let r of e) n.push(le(r, t));
		return n;
	}
	e.scalePaths = ue;
	function E(e, t) {
		if (X.isAlmostZero(t - 1)) return e;
		let n = [];
		for (let r of e) n.push(nD.scale(r, t));
		return n;
	}
	e.scalePathD = E;
	function de(e, t) {
		if (X.isAlmostZero(t - 1)) return e;
		let n = [];
		for (let r of e) n.push(E(r, t));
		return n;
	}
	e.scalePathsD = de;
	function fe(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: Math.round(r.x * t),
			y: Math.round(r.y * t)
		});
		return n;
	}
	e.scalePath64 = fe;
	function D(e, t) {
		let n = [];
		for (let r of e) n.push(fe(r, t));
		return n;
	}
	e.scalePaths64 = D;
	function pe(e, t) {
		let n = [];
		for (let r of e) n.push({
			x: r.x * t,
			y: r.y * t
		});
		return n;
	}
	e.scalePathDFromInt = pe;
	function me(e, t) {
		let n = [];
		for (let r of e) n.push(pe(r, t));
		return n;
	}
	e.scalePathsDFromInt = me;
	function he(e) {
		let t = [];
		for (let n of e) t.push(Z.fromPointD(n));
		return t;
	}
	e.path64FromD = he;
	function ge(e) {
		let t = [];
		for (let n of e) t.push(he(n));
		return t;
	}
	e.paths64FromD = ge;
	function O(e) {
		let t = [];
		for (let n of e) t.push(k(n));
		return t;
	}
	e.pathsD = O;
	function k(e) {
		let t = [];
		for (let n of e) t.push(nD.fromPoint64(n));
		return t;
	}
	e.pathD = k;
	function _e(e, t, n) {
		let r = [];
		for (let i of e) r.push({
			x: i.x + t,
			y: i.y + n
		});
		return r;
	}
	e.translatePath = _e;
	function A(e, t, n) {
		let r = [];
		for (let i of e) r.push(ae(i, t, n));
		return r;
	}
	e.translatePaths = A;
	function ve(e, t, n) {
		let r = [];
		for (let i of e) r.push({
			x: i.x + t,
			y: i.y + n
		});
		return r;
	}
	e.translatePathD = ve;
	function ye(e, t, n) {
		let r = [];
		for (let i of e) r.push(ve(i, t, n));
		return r;
	}
	e.translatePathsD = ye;
	function be(e) {
		return [...e].reverse();
	}
	e.reversePath = be;
	function xe(e) {
		return [...e].reverse();
	}
	e.reversePathD = xe;
	function Se(e) {
		let t = [];
		for (let n of e) t.push(be(n));
		return t;
	}
	e.reversePaths = Se;
	function Ce(e) {
		let t = [];
		for (let n of e) t.push(xe(n));
		return t;
	}
	e.reversePathsD = Ce;
	function we(e) {
		return X.getBounds(e);
	}
	e.getBounds = we;
	function Te(e) {
		let t = rD.createInvalid();
		for (let n of e) for (let e of n) e.x < t.left && (t.left = e.x), e.x > t.right && (t.right = e.x), e.y < t.top && (t.top = e.y), e.y > t.bottom && (t.bottom = e.y);
		return t.left === 2 ** 53 - 1 ? {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		} : t;
	}
	e.getBoundsPaths = Te;
	function Ee(e) {
		let t = iD.createInvalid();
		for (let n of e) n.x < t.left && (t.left = n.x), n.x > t.right && (t.right = n.x), n.y < t.top && (t.top = n.y), n.y > t.bottom && (t.bottom = n.y);
		return Math.abs(t.left - Number.MAX_VALUE) < X.floatingPointTolerance ? {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		} : t;
	}
	e.getBoundsD = Ee;
	function De(e) {
		let t = iD.createInvalid();
		for (let n of e) for (let e of n) e.x < t.left && (t.left = e.x), e.x > t.right && (t.right = e.x), e.y < t.top && (t.top = e.y), e.y > t.bottom && (t.bottom = e.y);
		return Math.abs(t.left - Number.MAX_VALUE) < X.floatingPointTolerance ? {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		} : t;
	}
	e.getBoundsPathsD = De;
	function Oe(e) {
		let t = Math.floor(e.length / 2), n = [];
		for (let r = 0; r < t; r++) n.push({
			x: e[r * 2],
			y: e[r * 2 + 1],
			z: 0
		});
		return n;
	}
	e.makePath = Oe;
	function ke(e) {
		let t = Math.floor(e.length / 2), n = [];
		for (let r = 0; r < t; r++) n.push({
			x: e[r * 2],
			y: e[r * 2 + 1],
			z: 0
		});
		return n;
	}
	e.makePathD = ke;
	function Ae(e) {
		return e * e;
	}
	e.sqr = Ae;
	function je(e, t) {
		return Ae(e.x - t.x) + Ae(e.y - t.y);
	}
	e.distanceSqr = je;
	function Me(e, t) {
		return {
			x: Math.round((e.x + t.x) / 2),
			y: Math.round((e.y + t.y) / 2)
		};
	}
	e.midPoint = Me;
	function Ne(e, t) {
		return {
			x: (e.x + t.x) / 2,
			y: (e.y + t.y) / 2
		};
	}
	e.midPointD = Ne;
	function Pe(e, t, n) {
		e.left -= t, e.right += t, e.top -= n, e.bottom += n;
	}
	e.inflateRect = Pe;
	function Fe(e, t, n) {
		e.left -= t, e.right += t, e.top -= n, e.bottom += n;
	}
	e.inflateRectD = Fe;
	function Ie(e, t, n) {
		return Ae(e.x - t.x) + Ae(e.y - t.y) < n;
	}
	e.pointsNearEqual = Ie;
	function Le(e, t, n) {
		let r = e.length, i = [];
		if (r === 0) return i;
		let a = e[0];
		i.push(a);
		for (let n = 1; n < r; n++) Ie(a, e[n], t) || (a = e[n], i.push(a));
		return n && Ie(a, i[0], t) && i.pop(), i;
	}
	e.stripNearDuplicates = Le;
	function Re(e, t) {
		let n = e.length, r = [];
		if (n === 0) return r;
		let i = e[0];
		r.push(i);
		for (let t = 1; t < n; t++) Z.equals(i, e[t]) || (i = e[t], r.push(i));
		return t && Z.equals(i, r[0]) && r.pop(), r;
	}
	e.stripDuplicates = Re;
	function ze(e, t) {
		e.poly && e.poly.length > 0 && t.push(e.poly);
		for (let n = 0; n < e.count; n++) ze(e.child(n), t);
	}
	function Be(e) {
		let t = [];
		for (let n = 0; n < e.count; n++) ze(e.child(n), t);
		return t;
	}
	e.polyTreeToPaths64 = Be;
	function Ve(e, t) {
		e.poly && e.poly.length > 0 && t.push(e.poly);
		for (let n = 0; n < e.count; n++) Ve(e.child(n), t);
	}
	e.addPolyNodeToPathsD = Ve;
	function He(e) {
		let t = [];
		for (let n = 0; n < e.count; n++) Ve(e.child(n), t);
		return t;
	}
	e.polyTreeToPathsD = He;
	function Ue(e, t, n) {
		let r = e.x - t.x, i = e.y - t.y, a = n.x - t.x, o = n.y - t.y;
		return a === 0 && o === 0 ? 0 : Ae(r * o - a * i) / (a * a + o * o);
	}
	e.perpendicDistFromLineSqrd = Ue;
	function We(e, t, n) {
		let r = e.x - t.x, i = e.y - t.y, a = n.x - t.x, o = n.y - t.y;
		return a === 0 && o === 0 ? 0 : Ae(r * o - a * i) / (a * a + o * o);
	}
	e.perpendicDistFromLineSqrd64 = We;
	function Ge(e, t, n, r, i) {
		for (;;) {
			let a = 0, o = 0;
			for (; n > t && Z.equals(e[t], e[n]);) i[n--] = !1;
			for (let r = t + 1; r < n; ++r) {
				let i = We(e[r], e[t], e[n]);
				i <= o || (o = i, a = r);
			}
			if (o <= r) return;
			if (i[a] = !0, a > t + 1 && Ge(e, t, a, r, i), a < n - 1) t = a;
			else break;
		}
	}
	function Ke(e, t) {
		let n = e.length;
		if (n < 5) return e;
		let r = Array(n).fill(!1);
		r[0] = !0, r[n - 1] = !0, Ge(e, 0, n - 1, Ae(t), r);
		let i = [];
		for (let t = 0; t < n; ++t) r[t] && i.push(e[t]);
		return i;
	}
	e.ramerDouglasPeucker = Ke;
	function qe(e, t) {
		let n = [];
		for (let r of e) n.push(Ke(r, t));
		return n;
	}
	e.ramerDouglasPeuckerPaths = qe;
	function j(e, t, n, r, i) {
		for (;;) {
			let a = 0, o = 0;
			for (; n > t && nD.equals(e[t], e[n]);) i[n--] = !1;
			for (let r = t + 1; r < n; ++r) {
				let i = Ue(e[r], e[t], e[n]);
				i <= o || (o = i, a = r);
			}
			if (o <= r) return;
			if (i[a] = !0, a > t + 1 && j(e, t, a, r, i), a < n - 1) t = a;
			else break;
		}
	}
	function Je(e, t) {
		let n = e.length;
		if (n < 5) return e;
		let r = Array(n).fill(!1);
		r[0] = !0, r[n - 1] = !0, j(e, 0, n - 1, Ae(t), r);
		let i = [];
		for (let t = 0; t < n; ++t) r[t] && i.push(e[t]);
		return i;
	}
	e.ramerDouglasPeuckerD = Je;
	function Ye(e, t) {
		let n = [];
		for (let r of e) n.push(Je(r, t));
		return n;
	}
	e.ramerDouglasPeuckerPathsD = Ye;
	function Xe(e, t, n) {
		for (++e; e <= t && n[e];) ++e;
		if (e <= t) return e;
		for (e = 0; n[e];) ++e;
		return e;
	}
	function Ze(e, t, n) {
		for (e === 0 ? e = t : --e; e > 0 && n[e];) --e;
		if (!n[e]) return e;
		for (e = t; n[e];) --e;
		return e;
	}
	function Qe(e, t, n = !0) {
		let r = e.length, i = r - 1, a = Ae(t);
		if (r < 4) return e;
		let o = Array(r).fill(!1), s = Array(r).fill(0), c = 0;
		n ? (s[0] = We(e[0], e[i], e[1]), s[i] = We(e[i], e[0], e[i - 1])) : (s[0] = Number.MAX_VALUE, s[i] = Number.MAX_VALUE);
		for (let t = 1; t < i; ++t) s[t] = We(e[t], e[t - 1], e[t + 1]);
		for (;;) {
			if (s[c] > a) {
				let e = c;
				do
					c = Xe(c, i, o);
				while (c !== e && s[c] > a);
				if (c === e) break;
			}
			let t = Ze(c, i, o), r = Xe(c, i, o);
			if (r === t) break;
			let l;
			if (s[r] < s[c]) {
				l = t;
				let a = c;
				c = r;
				let u = Xe(r, i, o);
				o[c] = !0, c = u;
				let d = Xe(u, i, o);
				(n || c !== i && c !== 0) && (s[c] = We(e[c], e[a], e[d])), (n || a !== 0 && a !== i) && (s[a] = We(e[a], e[l], e[c]));
			} else {
				l = Ze(t, i, o), o[c] = !0, c = r;
				let a = Xe(r, i, o);
				(n || c !== i && c !== 0) && (s[c] = We(e[c], e[t], e[a])), (n || t !== 0 && t !== i) && (s[t] = We(e[t], e[l], e[c]));
			}
		}
		let l = [];
		for (let t = 0; t < r; t++) o[t] || l.push(e[t]);
		return l;
	}
	e.simplifyPath = Qe;
	function $e(e, t, n = !0) {
		let r = [];
		for (let i of e) r.push(Qe(i, t, n));
		return r;
	}
	e.simplifyPaths = $e;
	function et(e, t, n = !0) {
		let r = e.length, i = r - 1, a = Ae(t);
		if (r < 4) return e;
		let o = Array(r).fill(!1), s = Array(r).fill(0), c = 0;
		n ? (s[0] = Ue(e[0], e[i], e[1]), s[i] = Ue(e[i], e[0], e[i - 1])) : (s[0] = Number.MAX_VALUE, s[i] = Number.MAX_VALUE);
		for (let t = 1; t < i; ++t) s[t] = Ue(e[t], e[t - 1], e[t + 1]);
		for (;;) {
			if (s[c] > a) {
				let e = c;
				do
					c = Xe(c, i, o);
				while (c !== e && s[c] > a);
				if (c === e) break;
			}
			let t = Ze(c, i, o), r = Xe(c, i, o);
			if (r === t) break;
			let l;
			if (s[r] < s[c]) {
				l = t;
				let a = c;
				c = r;
				let u = Xe(r, i, o);
				o[c] = !0, c = u;
				let d = Xe(u, i, o);
				(n || c !== i && c !== 0) && (s[c] = Ue(e[c], e[a], e[d])), (n || a !== 0 && a !== i) && (s[a] = Ue(e[a], e[l], e[c]));
			} else {
				l = Ze(t, i, o), o[c] = !0, c = r;
				let a = Xe(r, i, o);
				(n || c !== i && c !== 0) && (s[c] = Ue(e[c], e[t], e[a])), (n || t !== 0 && t !== i) && (s[t] = Ue(e[t], e[l], e[c]));
			}
		}
		let l = [];
		for (let t = 0; t < r; t++) o[t] || l.push(e[t]);
		return l;
	}
	e.simplifyPathD = et;
	function tt(e, t, n = !0) {
		let r = [];
		for (let i of e) r.push(et(i, t, n));
		return r;
	}
	e.simplifyPathsD = tt;
	function nt(e, t = !1) {
		let n = e.length, r = 0;
		if (!t) {
			for (; r < n - 1 && X.isCollinear(e[n - 1], e[r], e[r + 1]);) r++;
			for (; r < n - 1 && X.isCollinear(e[n - 2], e[n - 1], e[r]);) n--;
		}
		if (n - r < 3) return !t || n < 2 || Z.equals(e[0], e[1]) ? [] : e;
		let i = [], a = e[r];
		for (i.push(a), r++; r < n - 1; r++) X.isCollinear(a, e[r], e[r + 1]) || (a = e[r], i.push(a));
		if (t) i.push(e[n - 1]);
		else if (!X.isCollinear(a, e[n - 1], i[0])) i.push(e[n - 1]);
		else {
			for (; i.length > 2 && X.isCollinear(i[i.length - 1], i[i.length - 2], i[0]);) i.pop();
			i.length < 3 && (i.length = 0);
		}
		return i;
	}
	e.trimCollinear = nt;
	function rt(e, t, n = !1) {
		X.checkPrecision(t);
		let r = 10 ** t, i = fe(e, r);
		return i = nt(i, n), pe(i, 1 / r);
	}
	e.trimCollinearD = rt;
	function it(e, t) {
		return X.pointInPolygon(e, t);
	}
	e.pointInPolygon = it;
	function at(e, t, n = 2) {
		X.checkPrecision(n);
		let r = 10 ** n, i = Z.fromPointD(nD.scale(e, r)), a = fe(t, r);
		return X.pointInPolygon(i, a);
	}
	e.pointInPolygonD = at;
	function ot(e, t, n = 0, r = 0) {
		if (t <= 0) return [];
		n <= 0 && (n = t), r <= 2 && (r = Math.ceil(Math.PI * Math.sqrt((t + n) / 2)));
		let i = Math.sin(2 * Math.PI / r), a = Math.cos(2 * Math.PI / r), o = a, s = i, c = [{
			x: Math.round(e.x + t),
			y: e.y
		}];
		for (let l = 1; l < r; ++l) {
			c.push({
				x: Math.round(e.x + t * o),
				y: Math.round(e.y + n * s)
			});
			let r = o * a - s * i;
			s = s * a + o * i, o = r;
		}
		return c;
	}
	e.ellipse = ot;
	function st(e, t, n = 0, r = 0) {
		if (t <= 0) return [];
		n <= 0 && (n = t), r <= 2 && (r = Math.ceil(Math.PI * Math.sqrt((t + n) / 2)));
		let i = Math.sin(2 * Math.PI / r), a = Math.cos(2 * Math.PI / r), o = a, s = i, c = [{
			x: e.x + t,
			y: e.y
		}];
		for (let l = 1; l < r; ++l) {
			c.push({
				x: e.x + t * o,
				y: e.y + n * s
			});
			let r = o * a - s * i;
			s = s * a + o * i, o = r;
		}
		return c;
	}
	e.ellipseD = st;
	function ct(e, t = !0) {
		return new BD(t).execute(e);
	}
	e.triangulate = ct;
	function lt(e, t, n = !0) {
		let r;
		r = t <= 0 ? 1 : t > 8 ? 10 ** 8 : 10 ** t;
		let i = D(e, r), { result: a, solution: o } = new BD(n).execute(i), s;
		return s = a === ND.success ? de(o, 1 / r) : [], {
			result: a,
			solution: s
		};
	}
	e.triangulateD = lt;
})(VD ||= {});
// node_modules/clipper2-ts/dist/index.js
var { intersect: HD, intersectD: UD, union: WD, unionD: GD, difference: KD, differenceD: qD, xor: JD, xorD: YD, booleanOp: XD, booleanOpWithPolyTree: ZD, booleanOpD: QD, booleanOpDWithPolyTree: $D, inflatePaths: eO, inflatePathsD: tO, rectClip: nO, rectClipLines: rO, minkowskiSum: iO, minkowskiSumD: aO, minkowskiDiff: oO, minkowskiDiffD: sO, area: cO, areaPaths: lO, areaD: uO, areaPathsD: dO, isPositive: fO, isPositiveD: pO, getBounds: mO, getBoundsPaths: hO, getBoundsD: gO, getBoundsPathsD: _O, makePath: vO, makePathD: yO, scalePath64: bO, scalePaths64: xO, scalePathD: SO, scalePathsD: CO, translatePath: wO, translatePaths: TO, translatePathD: EO, translatePathsD: DO, reversePath: OO, reversePathD: kO, reversePaths: AO, reversePathsD: jO, stripDuplicates: MO, trimCollinear: NO, trimCollinearD: PO, pointInPolygon: FO, pointInPolygonD: IO, ellipse: LO, ellipseD: RO, simplifyPath: zO, simplifyPaths: BO, simplifyPathD: VO, simplifyPathsD: HO, ramerDouglasPeucker: UO, ramerDouglasPeuckerPaths: WO, ramerDouglasPeuckerD: GO, ramerDouglasPeuckerPathsD: KO, triangulate: qO, triangulateD: JO } = VD;
new $E(), new $E(), new $E(), mw(Sw), new $E();
// shared/domain/templates/formula.ts
var YO = {
	min: [1, 16],
	max: [1, 16],
	floor: [1, 1],
	ceil: [1, 1],
	round: [1, 1],
	abs: [1, 1],
	clamp: [3, 3]
}, XO = V.String({ pattern: "^[A-Za-z][A-Za-z0-9]*$" }), ZO = V.Number({ minimum: 0 }), QO = V.Number({ exclusiveMinimum: 0 }), $O = V.String({
	minLength: 1,
	maxLength: 500
}), ek = V.Union([V.Number(), $O]), tk = V.Union([V.Boolean(), $O]), nk = V.String({
	minLength: 1,
	maxLength: 500
}), rk = V.Array(QO, {
	minItems: 1,
	maxItems: 24
}), ik = V.Union([
	V.Literal("interior"),
	V.Literal("center"),
	V.Literal("exterior")
]), ak = V.Object({
	mode: V.Union([
		V.Literal("fixed"),
		V.Literal("scale"),
		V.Literal("slice"),
		V.Literal("fitHostDepth")
	]),
	parameter: V.Optional(V.Union([XO, V.Null()])),
	title: V.Optional(V.String({ minLength: 1 })),
	description: V.Optional(nk),
	quickPicks: V.Optional(rk),
	startMm: V.Optional(ZO),
	endMm: V.Optional(ZO),
	startParameter: V.Optional(XO),
	endParameter: V.Optional(XO),
	minMm: V.Optional(QO),
	maxMm: V.Optional(QO),
	defaultMm: V.Optional(QO),
	wallPosition: V.Optional(ik),
	wallOffsetMm: V.Optional(V.Number())
}, { additionalProperties: !1 }), ok = V.Object({
	bottomMm: V.Optional(V.Number({ minimum: 0 })),
	elevationMm: V.Optional(V.Number()),
	horizontalAlign: V.Optional(V.Union([
		V.Literal("start"),
		V.Literal("center"),
		V.Literal("end")
	])),
	verticalAlign: V.Optional(V.Union([
		V.Literal("bottom"),
		V.Literal("center"),
		V.Literal("top")
	])),
	topInsetMm: V.Optional(V.Number({ minimum: 0 }))
}, { additionalProperties: !1 }), sk = V.Object({
	hosts: V.Array(V.Union([
		V.Literal("wall"),
		V.Literal("floor"),
		V.Literal("overhead"),
		V.Literal("staircaseArea"),
		V.Literal("roof")
	]), {
		minItems: 1,
		uniqueItems: !0
	}),
	contact: V.String({ minLength: 1 }),
	defaultHostSide: V.Optional(V.Union([V.Literal("interior"), V.Literal("exterior")])),
	defaultPlacement: V.Optional(ok)
}, { additionalProperties: !1 }), ck = V.Union([V.Object({
	shape: V.Literal("bounds"),
	clearanceMm: ZO
}, { additionalProperties: !1 }), V.Null()]), lk = V.Object({
	shape: V.Union([
		V.Literal("point"),
		V.Literal("spot"),
		V.Literal("linear")
	]),
	outputLumens: QO,
	colorModes: V.Array(V.Union([
		V.Literal("fixedWhite"),
		V.Literal("colorTemperature"),
		V.Literal("rgb")
	]), {
		minItems: 1,
		uniqueItems: !0
	}),
	kelvin: V.Optional(V.Number({
		minimum: 1e3,
		maximum: 12e3
	})),
	minKelvin: V.Optional(V.Number({
		minimum: 1e3,
		maximum: 12e3
	})),
	maxKelvin: V.Optional(V.Number({
		minimum: 1e3,
		maximum: 12e3
	}))
}, { additionalProperties: !1 }), uk = V.Object({ materialSlot: V.String({ minLength: 1 }) }, { additionalProperties: !1 }), dk = V.Object({ materialSlot: V.String({ minLength: 1 }) }, { additionalProperties: !1 }), fk = V.Union([V.String({ minLength: 1 }), V.Object({
	material: V.String({ minLength: 1 }),
	title: V.Optional(V.String({
		minLength: 1,
		maxLength: 60
	})),
	choosable: V.Optional(V.Boolean()),
	presets: V.Optional(V.Array(V.String({ minLength: 1 }), {
		minItems: 1,
		maxItems: 32,
		uniqueItems: !0
	})),
	allowColor: V.Optional(V.Boolean()),
	allowTexture: V.Optional(V.Boolean())
}, { additionalProperties: !1 })]), pk = V.Object({
	manufacturer: V.Optional(V.String({
		minLength: 1,
		maxLength: 120
	})),
	name: V.Optional(V.String({
		minLength: 1,
		maxLength: 120
	})),
	code: V.Optional(V.String({
		minLength: 1,
		maxLength: 120
	})),
	url: V.Optional(V.String({
		minLength: 1,
		maxLength: 2e3
	})),
	description: V.Optional(V.String({
		minLength: 1,
		maxLength: 2e3
	})),
	notes: V.Optional(V.String({
		minLength: 1,
		maxLength: 2e3
	}))
}, { additionalProperties: !1 }), mk = V.Object({ shape: V.Union([V.Literal("rectangle"), V.Literal("ellipse")]) }, { additionalProperties: !1 }), hk = V.Object({
	minPitchDeg: V.Number({
		minimum: 0,
		maximum: 90
	}),
	maxPitchDeg: V.Number({
		minimum: 0,
		maximum: 90
	})
}, { additionalProperties: !1 }), gk = V.Object({
	schemaVersion: V.Literal(1),
	kind: V.String({
		minLength: 1,
		maxLength: 64
	}),
	label: V.String({
		minLength: 1,
		maxLength: 120
	}),
	contract: V.Union([
		V.Literal("Wallable"),
		V.Literal("Areable"),
		V.Literal("Staircasable")
	]),
	attachment: sk,
	resize: V.Object({
		x: ak,
		y: ak,
		z: ak
	}, { additionalProperties: !1 }),
	flip: V.Object({
		x: V.Boolean(),
		z: V.Boolean()
	}, { additionalProperties: !1 }),
	opening: ck,
	materialSlots: V.Record(V.String({ minLength: 1 }), fk),
	category: V.Optional(V.String({
		minLength: 1,
		maxLength: 60
	})),
	tags: V.Optional(V.Array(V.String({
		minLength: 1,
		maxLength: 40
	}), {
		maxItems: 32,
		uniqueItems: !0
	})),
	product: V.Optional(pk),
	properties: V.Optional(V.Record(XO, V.Unknown())),
	formulas: V.Optional(V.Record(XO, $O)),
	light: V.Optional(lk),
	effects: V.Optional(V.Array(Ew, { maxItems: 8 })),
	screen: V.Optional(uk),
	mirror: V.Optional(dk),
	floorCut: V.Optional(mk),
	roofWindow: V.Optional(hk)
}, { additionalProperties: !1 }), _k = V.Union([
	V.Literal("start"),
	V.Literal("center"),
	V.Literal("end")
]), vk = V.Union([
	V.Object({
		parameter: XO,
		factor: V.Optional(V.Number({ exclusiveMinimum: 0 })),
		add: V.Optional(V.Number())
	}, { additionalProperties: !1 }),
	V.Literal("fill"),
	V.Integer({ minimum: 0 }),
	$O
]), yk = V.Object({
	x: V.Optional(ek),
	y: V.Optional(ek),
	z: V.Optional(ek)
}, { additionalProperties: !1 }), bk = V.Union([
	V.Literal("start"),
	V.Literal("center"),
	V.Literal("end")
]), xk = V.Union([bk, V.Object({
	at: V.Optional(bk),
	of: V.Optional(V.Union([V.Literal("part"), V.Literal("template")])),
	offsetMm: V.Optional(ek)
}, { additionalProperties: !1 })]), Sk = V.Object({
	axis: V.Union([
		V.Literal("x"),
		V.Literal("y"),
		V.Literal("z")
	]),
	angleDeg: ek,
	pivot: V.Optional(V.Object({
		x: V.Optional(xk),
		y: V.Optional(xk),
		z: V.Optional(xk)
	}, { additionalProperties: !1 })),
	perCopy: V.Optional(V.Boolean())
}, { additionalProperties: !1 }), Ck = V.Object({
	pin: V.Optional(V.Object({
		x: V.Optional(_k),
		y: V.Optional(_k),
		z: V.Optional(_k)
	}, { additionalProperties: !1 })),
	stretch: V.Optional(V.Object({
		x: V.Optional(V.Boolean()),
		y: V.Optional(V.Boolean()),
		z: V.Optional(V.Boolean())
	}, { additionalProperties: !1 })),
	repeat: V.Optional(V.Object({
		offsetMm: yk,
		count: vk
	}, { additionalProperties: !1 })),
	follows: V.Optional(V.String({ minLength: 1 })),
	extendsWith: V.Optional(V.String({ minLength: 1 })),
	emitter: V.Optional(V.Literal("linear")),
	size: V.Optional(yk),
	visible: V.Optional(tk),
	rotate: V.Optional(Sk),
	translate: V.Optional(yk),
	face: V.Optional(V.Literal("interior"))
}, { additionalProperties: !1 });
[...Object.keys(YO)], mw(iy), mw(gk), mw(Ck), new $E(), new $E(), new $E(), new $E(), new $E(), new $E(), new $E(), mw(uT);
// ha-viewer/houseSource.ts
var wk = class extends Error {
	status;
	constructor(e, t) {
		super(e), this.name = "SourceError", this.status = t;
	}
}, Tk = (...e) => new URL(`/api/homeplan/${e.map(encodeURIComponent).join("/")}`, location.origin).href, Ek = (e) => {
	let t = async (t, n) => {
		let r = new URL(t, location.origin);
		if (r.origin !== location.origin || !r.pathname.startsWith("/api/homeplan/")) throw new wk("Private resources must be served by this HA integration.", null);
		let i = e()?.fetchWithAuth;
		if (i === void 0) throw new wk("Waiting for Home Assistant's authenticated transport.", null);
		let a = await i(r.pathname + r.search, {
			cache: "no-store",
			...n
		});
		if (!a.ok) {
			let e = `Homeplan answered HTTP ${String(a.status)}.`;
			try {
				let t = await a.json();
				typeof t == "object" && t && "error" in t && typeof t.error == "object" && t.error !== null && "message" in t.error && typeof t.error.message == "string" && (e = t.error.message);
			} catch {}
			throw new wk(e, a.status);
		}
		return a;
	}, n = async (e, n, r, i = "POST") => {
		let a = await (await t(Tk(...n), r === void 0 ? void 0 : {
			method: i,
			headers: { "content-type": "application/json" },
			body: JSON.stringify(r)
		})).json();
		if (!mw(e)(a)) throw new wk("Homeplan returned an incompatible response; update the integration or reload.", null);
		return a;
	};
	return {
		request: n,
		fetchPrivate: t,
		bootstrap: () => n(Rb, ["bootstrap"]),
		config: () => n(jb, ["config"]),
		connection: () => n(Mb, ["connection"]),
		clientAddress: () => n(Nb, ["client-address"]),
		saveConnection: (e, t) => n(Mb, ["connection"], {
			expectedRevision: e,
			patch: t
		}, "PATCH"),
		connect: (e) => n(zb, ["source", "connect"], { expectedRevision: e }),
		useHouse: (e, t, r) => n(Bb, [
			"source",
			"houses",
			e,
			"use"
		], {
			expectedRevision: t,
			generation: r
		}),
		copy: (e) => n(kb, ["houses", e]),
		sourceStatus: (e) => n(Eb, [
			"source",
			"houses",
			e
		]),
		upgradeHouse: (e, t, r) => n(Fb, [
			"houses",
			e,
			"upgrade"
		], {
			generation: t,
			...r === void 0 ? {} : { expectedSourceRevisionId: r }
		}),
		frontend: () => n(Lb, ["frontend"]),
		upgradeFrontend: (e) => n(Fb, ["frontend", "upgrade"], { generation: e }),
		restoreFrontend: async (e) => {
			await t(Tk("frontend", "restore-packaged"), {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ expectedRevision: e })
			});
		},
		job: (e) => n(Fb, ["jobs", e]),
		jobs: () => n(Ib, ["jobs"]),
		cancel: (e) => n(Fb, ["jobs", e], {}, "DELETE"),
		moduleUrl: (e, t) => {
			if (t) {
				let t = e.connection.builderUrl;
				if (t === null) throw new wk("DEV MODE needs a Floor Builder URL.", null);
				return new URL("ha-viewer/entry.ts", t).href;
			}
			let n = e.frontend.active;
			return n === null ? new URL("/homeplan-static/viewer.js", location.origin).href : new URL(`/homeplan/frontend/${n.bundleId}/files/${n.entry}`, location.origin).href;
		}
	};
}, Dk = "homeplan.nextLoadLocal", Ok = (e) => typeof e == "object" && !!e && "protocol" in e && e.protocol === 1 && "apiProtocol" in e && e.apiProtocol === 1 && "mount" in e && typeof e.mount == "function", kk = class extends HTMLElement {
	hassValue = null;
	isNarrow = !1;
	instance = null;
	started = !1;
	generation = 0;
	recovering = !1;
	bootstrap = null;
	client = Ek(() => this.hassValue);
	container = document.createElement("div");
	constructor() {
		super(), this.attachShadow({ mode: "open" }).append(this.container);
	}
	set hass(e) {
		this.hassValue = e, this.instance?.setHass(e), this.start();
	}
	set narrow(e) {
		this.isNarrow = e, this.instance?.setNarrow(e);
	}
	set panel(e) {
		this.start();
	}
	connectedCallback() {
		this.start();
	}
	disconnectedCallback() {
		this.generation += 1, this.started = !1, this.instance?.dispose(), this.instance = null;
	}
	showRecovery(e) {
		this.instance?.dispose(), this.instance = null;
		let t = document.createElement("div");
		t.style.cssText = "padding:32px;font:16px system-ui;color:var(--primary-text-color);background:var(--primary-background-color);min-height:100dvh;box-sizing:border-box";
		let n = document.createElement("p");
		n.textContent = e;
		let r = document.createElement("a");
		if (r.href = "/config/integrations", r.textContent = "Open Devices & services → Homeplan → Configure", t.append(n, r), this.hassValue?.user?.is_admin === !0) {
			let e = document.createElement("button");
			e.textContent = "Disable DEV MODE and restore packaged frontend", e.addEventListener("click", () => {
				(async () => {
					e.disabled = !0;
					try {
						let e = await this.client.connection(), t = await this.client.saveConnection(e.revision, { devMode: !1 });
						await this.client.restoreFrontend(t.revision), location.reload();
					} catch (t) {
						n.textContent = t instanceof Error ? t.message : "Use native Configure to recover.", e.disabled = !1;
					}
				})();
			}), t.append(document.createElement("br"), e);
		}
		this.container.replaceChildren(t);
	}
	fallback(e, t) {
		if (this.recovering) return;
		let n = t ? "Local fallback — development server unavailable or incompatible. DEV MODE is still enabled; refresh to retry remote." : "Recovered packaged frontend after a local viewer load failure.";
		if (this.isConnected) {
			if (!t && this.bootstrap?.frontend.active === null) this.showRecovery(e instanceof Error ? e.message : n);
			else {
				this.recovering = !0;
				try {
					if (sessionStorage.getItem(Dk) !== null) {
						this.showRecovery(n);
						return;
					}
					sessionStorage.setItem(Dk, JSON.stringify({
						message: n,
						packaged: !t
					})), location.reload();
				} catch {
					this.showRecovery(`${n} Open native Configure to disable DEV MODE or restore packaged files.`);
				}
			}
		}
	}
	async start() {
		let e = this.hassValue;
		if (this.started || !this.isConnected || e?.fetchWithAuth === void 0) return;
		this.started = !0;
		let t = ++this.generation, n = null;
		try {
			let e = sessionStorage.getItem(Dk);
			if (e !== null) {
				sessionStorage.removeItem(Dk);
				let t = JSON.parse(e);
				typeof t == "object" && t && "message" in t && typeof t.message == "string" && "packaged" in t && typeof t.packaged == "boolean" && (n = {
					message: t.message,
					packaged: t.packaged
				});
			}
		} catch {}
		let r = !1;
		try {
			let e = await this.client.bootstrap();
			if (t !== this.generation) return;
			this.bootstrap = e, r = e.connection.devMode && n === null, r && e.viewer.houseId !== null && await this.client.fetchPrivate(`${Tk("remote", "houses", e.viewer.houseId, "document")}?generation=${String(e.connection.generation)}`);
			let i = n?.packaged === !0 ? {
				...e,
				frontend: {
					...e.frontend,
					active: null
				}
			} : e, a = new URL(this.client.moduleUrl(i, r));
			a.searchParams.set("load", r ? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}` : (i.frontend.active ?? i.frontend.shipped).bundleId);
			let o = await import(
				/* @vite-ignore */
				a.href
);
			if (!Ok(o)) throw Error("The viewer does not support this integration's loader/API protocol.");
			if (t !== this.generation || this.hassValue === null) return;
			if (this.instance = o.mount(this.container, {
				client: this.client,
				bootstrap: e,
				remote: r,
				message: n?.message ?? e.recovery,
				hass: this.hassValue,
				narrow: this.isNarrow,
				fail: (e) => {
					n === null ? this.fallback(e, r) : this.showRecovery(e instanceof Error ? e.message : "No usable local copy; open native recovery.");
				}
			}), typeof this.instance.dispose != "function" || typeof this.instance.setHass != "function") throw Error("The frontend mount handshake is invalid.");
		} catch (e) {
			if (t !== this.generation) return;
			n === null ? this.fallback(e, r) : this.showRecovery(e instanceof Error ? e.message : n.message);
		}
	}
};
customElements.get("homeplan-panel") === void 0 && customElements.define("homeplan-panel", kk);
