var e = { name: 'AlForm', props: ['model', 'rules'], provide () { return { AlFrom: this } }, methods: { async validate (e) { const t = this.$children.filter(e => e.prop).map(e => e.validate()); e((await Promise.all(t)).every(e => !!e)) } } }; function t (e, t) { const n = Object.create(null); const o = e.split(','); for (let e = 0; e < o.length; e++)n[o[e]] = !0; return t ? e => !!n[e.toLowerCase()] : e => !!n[e] } function n (e) { if (_(e)) { const t = {}; for (let o = 0; o < e.length; o++) { const r = e[o]; const c = y(r) ? s(r) : n(r); if (c) for (const e in c)t[e] = c[e] } return t } return y(e) || E(e) ? e : void 0 } const o = /;(?![^(]*\))/g; const r = /:(.+)/; function s (e) { const t = {}; return e.split(o).forEach(e => { if (e) { const n = e.split(r); n.length > 1 && (t[n[0].trim()] = n[1].trim()) } }), t } function c (e) { let t = ''; if (y(e))t = e; else if (_(e)) for (let n = 0; n < e.length; n++) { const o = c(e[n]); o && (t += o + ' ') } else if (E(e)) for (const n in e)e[n] && (t += n + ' '); return t.trim() } const i = process.env.NODE_ENV !== 'production' ? Object.freeze({}) : {}; const l = process.env.NODE_ENV !== 'production' ? Object.freeze([]) : []; const a = () => {}; const u = /^on[^a-z]/; const p = e => u.test(e); const d = Object.assign; const f = Object.prototype.hasOwnProperty; const h = (e, t) => f.call(e, t); const _ = Array.isArray; const v = e => w(e) === '[object Map]'; const g = e => typeof e === 'function'; const y = e => typeof e === 'string'; const m = e => typeof e === 'symbol'; const E = e => e !== null && typeof e === 'object'; const N = Object.prototype.toString; const w = e => N.call(e); const b = e => w(e).slice(8, -1); const O = e => y(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e; const V = (e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) })(e => e.charAt(0).toUpperCase() + e.slice(1)); const k = (e, t) => !Object.is(e, t); let S; function D (e, ...t) { console.warn(`[Vue warn] ${e}`, ...t) } const x = e => { const t = new Set(e); return t.w = 0, t.n = 0, t }; const $ = e => (e.w & P) > 0; const R = e => (e.n & P) > 0; const C = new WeakMap(); let j = 0; let P = 1; let M; const F = Symbol(process.env.NODE_ENV !== 'production' ? 'iterate' : ''); const I = Symbol(process.env.NODE_ENV !== 'production' ? 'Map key iterate' : ''); class T {constructor (e, t = null, n) { this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, (function (e, t) { t && t.active && t.effects.push(e) }(this, n)) }run () { if (!this.active) return this.fn(); let e = M; const t = U; for (;e;) { if (e === this) return; e = e.parent } try { return this.parent = M, M = this, U = !0, P = 1 << ++j, j <= 30 ? (({ deps: e }) => { if (e.length) for (let t = 0; t < e.length; t++)e[t].w |= P })(this) : A(this), this.fn() } finally { j <= 30 && (e => { const { deps: t } = e; if (t.length) { let n = 0; for (let o = 0; o < t.length; o++) { const r = t[o]; $(r) && !R(r) ? r.delete(e) : t[n++] = r, r.w &= ~P, r.n &= ~P }t.length = n } })(this), P = 1 << --j, M = this.parent, U = t, this.parent = void 0, this.deferStop && this.stop() } }stop () { M === this ? this.deferStop = !0 : this.active && (A(this), this.onStop && this.onStop(), this.active = !1) }} function A (e) { const { deps: t } = e; if (t.length) { for (let n = 0; n < t.length; n++)t[n].delete(e); t.length = 0 } }let U = !0; const z = []; function W () { z.push(U), U = !1 } function H () { const e = z.pop(); U = void 0 === e || e } function K (e, t, n) { if (U && M) { let o = C.get(e); o || C.set(e, o = new Map()); let r = o.get(n); r || o.set(n, r = x()); !(function (e, t) { let n = !1; j <= 30 ? R(e) || (e.n |= P, n = !$(e)) : n = !e.has(M); n && (e.add(M), M.deps.push(e), process.env.NODE_ENV !== 'production' && M.onTrack && M.onTrack(Object.assign({ effect: M }, t))) }(r, process.env.NODE_ENV !== 'production' ? { effect: M, target: e, type: t, key: n } : void 0)) } } function L (e, t, n, o, r, s) { const c = C.get(e); if (!c) return; let i = []; if (t === 'clear')i = [...c.values()]; else if (n === 'length' && _(e))c.forEach((e, t) => { (t === 'length' || t >= o) && i.push(e) }); else switch (void 0 !== n && i.push(c.get(n)), t) { case 'add':_(e) ? O(n) && i.push(c.get('length')) : (i.push(c.get(F)), v(e) && i.push(c.get(I))); break; case 'delete':_(e) || (i.push(c.get(F)), v(e) && i.push(c.get(I))); break; case 'set':v(e) && i.push(c.get(F)) } const l = process.env.NODE_ENV !== 'production' ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0; if (i.length === 1)i[0] && (process.env.NODE_ENV !== 'production' ? q(i[0], l) : q(i[0])); else { const e = []; for (const t of i)t && e.push(...t); process.env.NODE_ENV !== 'production' ? q(x(e), l) : q(x(e)) } } function q (e, t) { const n = _(e) ? e : [...e]; for (const e of n)e.computed && B(e, t); for (const e of n)e.computed || B(e, t) } function B (e, t) { (e !== M || e.allowRecurse) && (process.env.NODE_ENV !== 'production' && e.onTrigger && e.onTrigger(d({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run()) } const J = t('__proto__,__v_isRef,__isVue'); const Y = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== 'arguments' && e !== 'caller').map(e => Symbol[e]).filter(m)); const G = te(); const Q = te(!0); const X = te(!0, !0); const Z = ee(); function ee () { const e = {}; return ['includes', 'indexOf', 'lastIndexOf'].forEach(t => { e[t] = function (...e) { const n = Ue(this); for (let e = 0, t = this.length; e < t; e++)K(n, 'get', e + ''); const o = n[t](...e); return o === -1 || !1 === o ? n[t](...e.map(Ue)) : o } }), ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => { e[t] = function (...e) { W(); const n = Ue(this)[t].apply(this, e); return H(), n } }), e } function te (e = !1, t = !1) { return function (n, o, r) { if (o === '__v_isReactive') return !e; if (o === '__v_isReadonly') return e; if (o === '__v_isShallow') return t; if (o === '__v_raw' && r === (e ? t ? Re : $e : t ? xe : De).get(n)) return n; const s = _(n); if (!e && s && h(Z, o)) return Reflect.get(Z, o, r); const c = Reflect.get(n, o, r); return (m(o) ? Y.has(o) : J(o)) ? c : (e || K(n, 'get', o), t ? c : Ke(c) ? s && O(o) ? c : c.value : E(c) ? e ? je(c) : Ce(c) : c) } } function ne (e = !1) { return function (t, n, o, r) { let s = t[n]; if (Ie(s) && Ke(s) && !Ke(o)) return !1; if (!e && !Ie(o) && (Te(o) || (o = Ue(o), s = Ue(s)), !_(t) && Ke(s) && !Ke(o))) return s.value = o, !0; const c = _(t) && O(n) ? Number(n) < t.length : h(t, n); const i = Reflect.set(t, n, o, r); return t === Ue(r) && (c ? k(o, s) && L(t, 'set', n, o, s) : L(t, 'add', n, o)), i } } const oe = { get: G, set: ne(), deleteProperty: function (e, t) { const n = h(e, t); const o = e[t]; const r = Reflect.deleteProperty(e, t); return r && n && L(e, 'delete', t, void 0, o), r }, has: function (e, t) { const n = Reflect.has(e, t); return m(t) && Y.has(t) || K(e, 'has', t), n }, ownKeys: function (e) { return K(e, 'iterate', _(e) ? 'length' : F), Reflect.ownKeys(e) } }; const re = { get: Q, set: (e, t) => (process.env.NODE_ENV !== 'production' && D(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0), deleteProperty: (e, t) => (process.env.NODE_ENV !== 'production' && D(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0) }; const se = d({}, re, { get: X }); const ce = e => e; const ie = e => Reflect.getPrototypeOf(e); function le (e, t, n = !1, o = !1) { const r = Ue(e = e.__v_raw); const s = Ue(t); n || (t !== s && K(r, 'get', t), K(r, 'get', s)); const { has: c } = ie(r); const i = o ? ce : n ? He : We; return c.call(r, t) ? i(e.get(t)) : c.call(r, s) ? i(e.get(s)) : void (e !== r && e.get(t)) } function ae (e, t = !1) { const n = this.__v_raw; const o = Ue(n); const r = Ue(e); return t || (e !== r && K(o, 'has', e), K(o, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r) } function ue (e, t = !1) { return e = e.__v_raw, !t && K(Ue(e), 'iterate', F), Reflect.get(e, 'size', e) } function pe (e) { e = Ue(e); const t = Ue(this); return ie(t).has.call(t, e) || (t.add(e), L(t, 'add', e, e)), this } function de (e, t) { t = Ue(t); const n = Ue(this); const { has: o, get: r } = ie(n); let s = o.call(n, e); s ? process.env.NODE_ENV !== 'production' && Se(n, o, e) : (e = Ue(e), s = o.call(n, e)); const c = r.call(n, e); return n.set(e, t), s ? k(t, c) && L(n, 'set', e, t, c) : L(n, 'add', e, t), this } function fe (e) { const t = Ue(this); const { has: n, get: o } = ie(t); let r = n.call(t, e); r ? process.env.NODE_ENV !== 'production' && Se(t, n, e) : (e = Ue(e), r = n.call(t, e)); const s = o ? o.call(t, e) : void 0; const c = t.delete(e); return r && L(t, 'delete', e, void 0, s), c } function he () { const e = Ue(this); const t = e.size !== 0; const n = process.env.NODE_ENV !== 'production' ? v(e) ? new Map(e) : new Set(e) : void 0; const o = e.clear(); return t && L(e, 'clear', void 0, void 0, n), o } function _e (e, t) { return function (n, o) { const r = this; const s = r.__v_raw; const c = Ue(s); const i = t ? ce : e ? He : We; return !e && K(c, 'iterate', F), s.forEach((e, t) => n.call(o, i(e), i(t), r)) } } function ve (e, t, n) { return function (...o) { const r = this.__v_raw; const s = Ue(r); const c = v(s); const i = e === 'entries' || e === Symbol.iterator && c; const l = e === 'keys' && c; const a = r[e](...o); const u = n ? ce : t ? He : We; return !t && K(s, 'iterate', l ? I : F), { next () { const { value: e, done: t } = a.next(); return t ? { value: e, done: t } : { value: i ? [u(e[0]), u(e[1])] : u(e), done: t } }, [Symbol.iterator] () { return this } } } } function ge (e) { return function (...t) { if (process.env.NODE_ENV !== 'production') { const n = t[0] ? `on key "${t[0]}" ` : ''; console.warn(`${V(e)} operation ${n}failed: target is readonly.`, Ue(this)) } return e !== 'delete' && this } } function ye () { const e = { get (e) { return le(this, e) }, get size () { return ue(this) }, has: ae, add: pe, set: de, delete: fe, clear: he, forEach: _e(!1, !1) }; const t = { get (e) { return le(this, e, !1, !0) }, get size () { return ue(this) }, has: ae, add: pe, set: de, delete: fe, clear: he, forEach: _e(!1, !0) }; const n = { get (e) { return le(this, e, !0) }, get size () { return ue(this, !0) }, has (e) { return ae.call(this, e, !0) }, add: ge('add'), set: ge('set'), delete: ge('delete'), clear: ge('clear'), forEach: _e(!0, !1) }; const o = { get (e) { return le(this, e, !0, !0) }, get size () { return ue(this, !0) }, has (e) { return ae.call(this, e, !0) }, add: ge('add'), set: ge('set'), delete: ge('delete'), clear: ge('clear'), forEach: _e(!0, !0) }; return ['keys', 'values', 'entries', Symbol.iterator].forEach(r => { e[r] = ve(r, !1, !1), n[r] = ve(r, !0, !1), t[r] = ve(r, !1, !0), o[r] = ve(r, !0, !0) }), [e, n, t, o] } const [me, Ee, Ne, we] = ye(); function be (e, t) { const n = t ? e ? we : Ne : e ? Ee : me; return (t, o, r) => o === '__v_isReactive' ? !e : o === '__v_isReadonly' ? e : o === '__v_raw' ? t : Reflect.get(h(n, o) && o in t ? n : t, o, r) } const Oe = { get: be(!1, !1) }; const Ve = { get: be(!0, !1) }; const ke = { get: be(!0, !0) }; function Se (e, t, n) { const o = Ue(n); if (o !== n && t.call(e, o)) { const t = b(e); console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${t === 'Map' ? ' as keys' : ''}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`) } } const De = new WeakMap(); const xe = new WeakMap(); const $e = new WeakMap(); const Re = new WeakMap(); function Ce (e) { return Ie(e) ? e : Me(e, !1, oe, Oe, De) } function je (e) { return Me(e, !0, re, Ve, $e) } function Pe (e) { return Me(e, !0, se, ke, Re) } function Me (e, t, n, o, r) { if (!E(e)) return process.env.NODE_ENV !== 'production' && console.warn(`value cannot be made reactive: ${String(e)}`), e; if (e.__v_raw && (!t || !e.__v_isReactive)) return e; const s = r.get(e); if (s) return s; const c = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : (function (e) { switch (e) { case 'Object':case 'Array':return 1; case 'Map':case 'Set':case 'WeakMap':case 'WeakSet':return 2; default:return 0 } }(b(i))); var i; if (c === 0) return e; const l = new Proxy(e, c === 2 ? o : n); return r.set(e, l), l } function Fe (e) { return Ie(e) ? Fe(e.__v_raw) : !(!e || !e.__v_isReactive) } function Ie (e) { return !(!e || !e.__v_isReadonly) } function Te (e) { return !(!e || !e.__v_isShallow) } function Ae (e) { return Fe(e) || Ie(e) } function Ue (e) { const t = e && e.__v_raw; return t ? Ue(t) : e } function ze (e) { return ((e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) })(e, '__v_skip', !0), e } const We = e => E(e) ? Ce(e) : e; const He = e => E(e) ? je(e) : e; function Ke (e) { return !(!e || !0 !== e.__v_isRef) } const Le = { get: (e, t, n) => { return Ke(o = Reflect.get(e, t, n)) ? o.value : o; var o }, set: (e, t, n, o) => { const r = e[t]; return Ke(r) && !Ke(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o) } }; const qe = []; function Be (e, ...t) { W(); const n = qe.length ? qe[qe.length - 1].component : null; const o = n && n.appContext.config.warnHandler; const r = (function () { let e = qe[qe.length - 1]; if (!e) return []; const t = []; for (;e;) { const n = t[0]; n && n.vnode === e ? n.recurseCount++ : t.push({ vnode: e, recurseCount: 0 }); const o = e.component && e.component.parent; e = o && o.vnode } return t }()); if (o)Qe(o, n, 11, [e + t.join(''), n && n.proxy, r.map(({ vnode: e }) => `at <${hn(n, e.type)}>`).join('\n'), r]); else { const n = [`[Vue warn]: ${e}`, ...t]; r.length && n.push('\n', ...(function (e) { const t = []; return e.forEach((e, n) => { t.push(...n === 0 ? [] : ['\n'], ...(function ({ vnode: e, recurseCount: t }) { const n = t > 0 ? `... (${t} recursive calls)` : ''; const o = !!e.component && e.component.parent == null; const r = ` at <${hn(e.component, e.type, o)}`; const s = '>' + n; return e.props ? [r, ...Je(e.props), s] : [r + s] }(e))) }), t }(r))), console.warn(...n) }H() } function Je (e) { const t = []; const n = Object.keys(e); return n.slice(0, 3).forEach(n => { t.push(...Ye(n, e[n])) }), n.length > 3 && t.push(' ...'), t } function Ye (e, t, n) { return y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t === 'number' || typeof t === 'boolean' || t == null ? n ? t : [`${e}=${t}`] : Ke(t) ? (t = Ye(e, Ue(t.value), !0), n ? t : [`${e}=Ref<`, t, '>']) : g(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ''}`] : (t = Ue(t), n ? t : [`${e}=`, t]) } const Ge = { sp: 'serverPrefetch hook', bc: 'beforeCreate hook', c: 'created hook', bm: 'beforeMount hook', m: 'mounted hook', bu: 'beforeUpdate hook', u: 'updated', bum: 'beforeUnmount hook', um: 'unmounted hook', a: 'activated hook', da: 'deactivated hook', ec: 'errorCaptured hook', rtc: 'renderTracked hook', rtg: 'renderTriggered hook', 0: 'setup function', 1: 'render function', 2: 'watcher getter', 3: 'watcher callback', 4: 'watcher cleanup function', 5: 'native event handler', 6: 'component event handler', 7: 'vnode hook', 8: 'directive hook', 9: 'transition hook', 10: 'app errorHandler', 11: 'app warnHandler', 12: 'ref function', 13: 'async component loader', 14: 'scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core' }; function Qe (e, t, n, o) { let r; try { r = o ? e(...o) : e() } catch (e) { Ze(e, t, n) } return r } function Xe (e, t, n, o) { if (g(e)) { const s = Qe(e, t, n, o); return s && (E(r = s) && g(r.then) && g(r.catch)) && s.catch(e => { Ze(e, t, n) }), s } var r; const s = []; for (let r = 0; r < e.length; r++)s.push(Xe(e[r], t, n, o)); return s } function Ze (e, t, n, o = !0) { const r = t ? t.vnode : null; if (t) { let o = t.parent; const r = t.proxy; const s = process.env.NODE_ENV !== 'production' ? Ge[n] : n; for (;o;) { const t = o.ec; if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, r, s)) return; o = o.parent } const c = t.appContext.config.errorHandler; if (c) return void Qe(c, null, 10, [e, r, s]) }!(function (e, t, n, o = !0) { if (process.env.NODE_ENV !== 'production') { const s = Ge[t]; if (n && (r = n, qe.push(r)), Be('Unhandled error' + (s ? ` during execution of ${s}` : '')), n && qe.pop(), o) throw e; console.error(e) } else console.error(e); var r }(e, n, r, o)) }let et = !1; let tt = !1; const nt = []; let ot = 0; const rt = []; let st = null; let ct = 0; const it = []; let lt = null; let at = 0; const ut = Promise.resolve(); let pt = null; let dt = null; function ft (e) { const t = pt || ut; return e ? t.then(this ? e.bind(this) : e) : t } function ht (e) { nt.length && nt.includes(e, et && e.allowRecurse ? ot + 1 : ot) || e === dt || (e.id == null ? nt.push(e) : nt.splice((function (e) { let t = ot + 1; let n = nt.length; for (;t < n;) { const o = t + n >>> 1; mt(nt[o]) < e ? t = o + 1 : n = o } return t }(e.id)), 0, e), _t()) } function _t () { et || tt || (tt = !0, pt = ut.then(Et)) } function vt (e, t, n, o) { _(e) ? n.push(...e) : t && t.includes(e, e.allowRecurse ? o + 1 : o) || n.push(e), _t() } function gt (e) { vt(e, lt, it, at) } function yt (e, t = null) { if (rt.length) { for (dt = t, st = [...new Set(rt)], rt.length = 0, process.env.NODE_ENV !== 'production' && (e = e || new Map()), ct = 0; ct < st.length; ct++)process.env.NODE_ENV !== 'production' && Nt(e, st[ct]) || st[ct](); st = null, ct = 0, dt = null, yt(e, t) } } const mt = e => e.id == null ? 1 / 0 : e.id; function Et (e) { tt = !1, et = !0, process.env.NODE_ENV !== 'production' && (e = e || new Map()), yt(e), nt.sort((e, t) => mt(e) - mt(t)); const t = process.env.NODE_ENV !== 'production' ? t => Nt(e, t) : a; try { for (ot = 0; ot < nt.length; ot++) { const e = nt[ot]; if (e && !1 !== e.active) { if (process.env.NODE_ENV !== 'production' && t(e)) continue; Qe(e, null, 14) } } } finally { ot = 0, nt.length = 0, (function (e) { if (yt(), it.length) { const t = [...new Set(it)]; if (it.length = 0, lt) return void lt.push(...t); for (lt = t, process.env.NODE_ENV !== 'production' && (e = e || new Map()), lt.sort((e, t) => mt(e) - mt(t)), at = 0; at < lt.length; at++)process.env.NODE_ENV !== 'production' && Nt(e, lt[at]) || lt[at](); lt = null, at = 0 } }(e)), et = !1, pt = null, (nt.length || rt.length || it.length) && Et(e) } } function Nt (e, t) { if (e.has(t)) { const n = e.get(t); if (n > 100) { const e = t.ownerInstance; const n = e && fn(e.type); return Be(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ''}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0 }e.set(t, n + 1) } else e.set(t, 1) } const wt = new Set(); process.env.NODE_ENV !== 'production' && ((S || (S = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {})).__VUE_HMR_RUNTIME__ = { createRecord: kt(function (e, t) { if (bt.has(e)) return !1; return bt.set(e, { initialDef: Ot(t), instances: new Set() }), !0 }), rerender: kt(function (e, t) { const n = bt.get(e); if (!n) return; n.initialDef.render = t, [...n.instances].forEach(e => { t && (e.render = t, Ot(e.type).render = t), e.renderCache = [], e.update() }) }), reload: kt(function (e, t) { const n = bt.get(e); if (!n) return; t = Ot(t), Vt(n.initialDef, t); const o = [...n.instances]; for (const e of o) { const o = Ot(e.type); wt.has(o) || (o !== n.initialDef && Vt(o, t), wt.add(o)), e.appContext.optionsCache.delete(e.type), e.ceReload ? (wt.add(o), e.ceReload(t.styles), wt.delete(o)) : e.parent ? (ht(e.parent.update), e.parent.type.__asyncLoader && e.parent.ceReload && e.parent.ceReload(t.styles)) : e.appContext.reload ? e.appContext.reload() : typeof window !== 'undefined' ? window.location.reload() : console.warn('[HMR] Root or manually mounted instance modified. Full reload required.') }gt(() => { for (const e of o)wt.delete(Ot(e.type)) }) }) }); const bt = new Map(); function Ot (e) { return _n(e) ? e.__vccOpts : e } function Vt (e, t) { d(e, t); for (const n in e)n === '__file' || n in t || delete e[n] } function kt (e) { return (t, n) => { try { return e(t, n) } catch (e) { console.error(e), console.warn('[HMR] Something went wrong during Vue component hot-reload. Full reload required.') } } } const St = {}; function Dt (e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = i) { process.env.NODE_ENV === 'production' || t || (void 0 !== n && Be('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== o && Be('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.')); const l = e => { Be('Invalid watch source: ', e, 'A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.') }; const u = an; let p; let d; let f = !1; let h = !1; if (Ke(e) ? (p = () => e.value, f = Te(e)) : Fe(e) ? (p = () => e, o = !0) : _(e) ? (h = !0, f = e.some(e => Fe(e) || Te(e)), p = () => e.map(e => Ke(e) ? e.value : Fe(e) ? $t(e) : g(e) ? Qe(e, u, 2) : void (process.env.NODE_ENV !== 'production' && l(e)))) : g(e) ? p = t ? () => Qe(e, u, 2) : () => { if (!u || !u.isUnmounted) return d && d(), Xe(e, u, 3, [v]) } : (p = a, process.env.NODE_ENV !== 'production' && l(e)), t && o) { const e = p; p = () => $t(e()) } const v = e => { d = N.onStop = () => { Qe(e, u, 4) } }; let y = h ? [] : St; const m = () => { if (N.active) if (t) { const e = N.run(); (o || f || (h ? e.some((e, t) => k(e, y[t])) : k(e, y))) && (d && d(), Xe(t, u, 3, [e, y === St ? void 0 : y, v]), y = e) } else N.run() }; let E; m.allowRecurse = !!t, E = r === 'sync' ? m : r === 'post' ? () => Kt(m, u && u.suspense) : () => (function (e) { vt(e, st, rt, ct) }(m)); const N = new T(p, E); return process.env.NODE_ENV !== 'production' && (N.onTrack = s, N.onTrigger = c), t ? n ? m() : y = N.run() : r === 'post' ? Kt(N.run.bind(N), u && u.suspense) : N.run(), () => { N.stop(), u && u.scope && ((e, t) => { const n = e.indexOf(t); n > -1 && e.splice(n, 1) })(u.scope.effects, N) } } function xt (e, t, n) { const o = this.proxy; const r = y(e) ? e.includes('.') ? (function (e, t) { const n = t.split('.'); return () => { let t = e; for (let e = 0; e < n.length && t; e++)t = t[n[e]]; return t } }(o, e)) : () => o[e] : e.bind(o, o); let s; g(t) ? s = t : (s = t.handler, n = t); const c = an; un(this); const i = Dt(r, s.bind(o), n); return c ? un(c) : pn(), i } function $t (e, t) { if (!E(e) || e.__v_skip) return e; if ((t = t || new Set()).has(e)) return e; if (t.add(e), Ke(e))$t(e.value, t); else if (_(e)) for (let n = 0; n < e.length; n++)$t(e[n], t); else if (w(e) === '[object Set]' || v(e))e.forEach(e => { $t(e, t) }); else if ((e => w(e) === '[object Object]')(e)) for (const n in e)$t(e[n], t); return e } const Rt = Symbol(); function Ct (e, t, n = {}, o, r) { if (null.isCE || null.parent && null.parent.type.__asyncLoader && null.parent.isCE) return nn('slot', t === 'default' ? null : { name: t }, o && o()); let s = e[t]; process.env.NODE_ENV !== 'production' && s && s.length > 1 && (Be('SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.'), s = () => []), s && s._c && (s._d = !1), Gt(); const c = s && jt(s(n)); const i = (function (e, t, n, o, r) { return Qt(nn(e, t, n, o, r, !0)) }(Lt, { key: n.key || `_${t}` }, c || (o ? o() : []), c && e._ === 1 ? 64 : -2)); return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + '-s']), s && s._c && (s._d = !0), i } function jt (e) { return e.some(e => !Xt(e) || e.type !== Bt && !(e.type === Lt && !jt(e.children))) ? e : null } const Pt = e => e ? 4 & e.vnode.shapeFlag ? (function (e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Fe(t = ze(e.exposed)) ? t : new Proxy(t, Le), { get: (t, n) => n in t ? t[n] : n in Mt ? Mt[n](e) : void 0 })); var t }(e)) || e.proxy : Pt(e.parent) : null; const Mt = d(Object.create(null), { $: e => e, $el: e => e.vnode.el, $data: e => e.data, $props: e => process.env.NODE_ENV !== 'production' ? Pe(e.props) : e.props, $attrs: e => process.env.NODE_ENV !== 'production' ? Pe(e.attrs) : e.attrs, $slots: e => process.env.NODE_ENV !== 'production' ? Pe(e.slots) : e.slots, $refs: e => process.env.NODE_ENV !== 'production' ? Pe(e.refs) : e.refs, $parent: e => Pt(e.parent), $root: e => Pt(e.root), $emit: e => e.emit, $options: e => __VUE_OPTIONS_API__ ? (function (e) { const t = e.type; const { mixins: n, extends: o } = t; const { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext; const i = s.get(t); let l; i ? l = i : r.length || n || o ? (l = {}, r.length && r.forEach(e => Tt(l, e, c, !0)), Tt(l, t, c)) : l = t; return s.set(t, l), l }(e)) : e.type, $forceUpdate: e => e.f || (e.f = () => ht(e.update)), $nextTick: e => e.n || (e.n = ft.bind(e.proxy)), $watch: e => __VUE_OPTIONS_API__ ? xt.bind(e) : a }); const Ft = { get ({ _: e }, t) { const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: a } = e; if (process.env.NODE_ENV !== 'production' && t === '__isVue') return !0; if (process.env.NODE_ENV !== 'production' && o !== i && o.__isScriptSetup && h(o, t)) return o[t]; let u; if (t[0] !== '$') { const l = c[t]; if (void 0 !== l) switch (l) { case 1:return o[t]; case 2:return r[t]; case 4:return n[t]; case 3:return s[t] } else { if (o !== i && h(o, t)) return c[t] = 1, o[t]; if (r !== i && h(r, t)) return c[t] = 2, r[t]; if ((u = e.propsOptions[0]) && h(u, t)) return c[t] = 3, s[t]; if (n !== i && h(n, t)) return c[t] = 4, n[t]; __VUE_OPTIONS_API__ && !It || (c[t] = 0) } } const p = Mt[t]; let d, f; return p ? (t === '$attrs' && (K(e, 'get', t), process.env.NODE_ENV), p(e)) : (d = l.__cssModules) && (d = d[t]) ? d : n !== i && h(n, t) ? (c[t] = 4, n[t]) : (f = a.config.globalProperties, h(f, t) ? f[t] : void process.env.NODE_ENV) }, set ({ _: e }, t, n) { const { data: o, setupState: r, ctx: s } = e; return r !== i && h(r, t) ? (r[t] = n, !0) : o !== i && h(o, t) ? (o[t] = n, !0) : h(e.props, t) ? (process.env.NODE_ENV !== 'production' && Be(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === '$' && t.slice(1) in e ? (process.env.NODE_ENV !== 'production' && Be(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== 'production' && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, { enumerable: !0, configurable: !0, value: n }) : s[t] = n, !0) }, has ({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) { let l; return !!n[c] || e !== i && h(e, c) || t !== i && h(t, c) || (l = s[0]) && h(l, c) || h(o, c) || h(Mt, c) || h(r.config.globalProperties, c) }, defineProperty (e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : h(n, 'value') && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) } }; process.env.NODE_ENV !== 'production' && (Ft.ownKeys = e => (Be('Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.'), Reflect.ownKeys(e))); const It = !0; function Tt (e, t, n, o = !1) { const { mixins: r, extends: s } = t; s && Tt(e, s, n, !0), r && r.forEach(t => Tt(e, t, n, !0)); for (const r in t) if (o && r === 'expose')process.env.NODE_ENV !== 'production' && Be('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'); else { const o = At[r] || n && n[r]; e[r] = o ? o(e[r], t[r]) : t[r] } return e } const At = { data: Ut, props: Ht, emits: Ht, methods: Ht, computed: Ht, beforeCreate: Wt, created: Wt, beforeMount: Wt, mounted: Wt, beforeUpdate: Wt, updated: Wt, beforeDestroy: Wt, beforeUnmount: Wt, destroyed: Wt, unmounted: Wt, activated: Wt, deactivated: Wt, errorCaptured: Wt, serverPrefetch: Wt, components: Ht, directives: Ht, watch: function (e, t) { if (!e) return t; if (!t) return e; const n = d(Object.create(null), e); for (const o in t)n[o] = Wt(e[o], t[o]); return n }, provide: Ut, inject: function (e, t) { return Ht(zt(e), zt(t)) } }; function Ut (e, t) { return t ? e ? function () { return d(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t) } : t : e } function zt (e) { if (_(e)) { const t = {}; for (let n = 0; n < e.length; n++)t[e[n]] = e[n]; return t } return e } function Wt (e, t) { return e ? [...new Set([].concat(e, t))] : t } function Ht (e, t) { return e ? d(d(Object.create(null), e), t) : t } const Kt = function (e, t) { t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : gt(e) }; const Lt = Symbol(process.env.NODE_ENV !== 'production' ? 'Fragment' : void 0); const qt = Symbol(process.env.NODE_ENV !== 'production' ? 'Text' : void 0); const Bt = Symbol(process.env.NODE_ENV !== 'production' ? 'Comment' : void 0); Symbol(process.env.NODE_ENV !== 'production' ? 'Static' : void 0); const Jt = []; let Yt = null; function Gt (e = !1) { Jt.push(Yt = e ? null : []) } function Qt (e) { return e.dynamicChildren = Yt || l, Jt.pop(), Yt = Jt[Jt.length - 1] || null, Yt && Yt.push(e), e } function Xt (e) { return !!e && !0 === e.__v_isVNode } const Zt = ({ key: e }) => e != null ? e : null; const en = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? y(e) || Ke(e) || g(e) ? { i: null, r: e, k: t, f: !!n } : e : null; function tn (e, t = null, n = null, o = 0, r = null, s = (e === Lt ? 0 : 1), c = !1, i = !1) { const l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Zt(t), ref: t && en(t), scopeId: null, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: o, dynamicProps: r, dynamicChildren: null, appContext: null }; return i ? (ln(l, n), 128 & s && e.normalize(l)) : n && (l.shapeFlag |= y(n) ? 8 : 16), process.env.NODE_ENV !== 'production' && l.key != l.key && Be('VNode created with invalid key (NaN). VNode type:', l.type), !c && Yt && (l.patchFlag > 0 || 6 & s) && l.patchFlag !== 32 && Yt.push(l), l } const nn = process.env.NODE_ENV !== 'production' ? (...e) => on(...e) : on; function on (e, t = null, o = null, r = 0, s = null, i = !1) { if (e && e !== Rt || (process.env.NODE_ENV === 'production' || e || Be(`Invalid vnode type when creating vnode: ${e}.`), e = Bt), Xt(e)) { const n = rn(e, t, !0); return o && ln(n, o), !i && Yt && (6 & n.shapeFlag ? Yt[Yt.indexOf(e)] = n : Yt.push(n)), n.patchFlag |= -2, n } if (_n(e) && (e = e.__vccOpts), t) { t = (function (e) { return e ? Ae(e) || '__vInternal' in e ? d({}, e) : e : null }(t)); let{ class: e, style: o } = t; e && !y(e) && (t.class = c(e)), E(o) && (Ae(o) && !_(o) && (o = d({}, o)), t.style = n(o)) } const l = y(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : E(e) ? 4 : g(e) ? 2 : 0; return process.env.NODE_ENV !== 'production' && 4 & l && Ae(e) && Be('Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.', '\nComponent that was made reactive: ', e = Ue(e)), tn(e, t, o, r, s, l, i, !0) } function rn (e, t, o = !1) { const { props: r, ref: s, patchFlag: i, children: l } = e; const a = t ? (function (...e) { const t = {}; for (let o = 0; o < e.length; o++) { const r = e[o]; for (const e in r) if (e === 'class')t.class !== r.class && (t.class = c([t.class, r.class])); else if (e === 'style')t.style = n([t.style, r.style]); else if (p(e)) { const n = t[e]; const o = r[e]; !o || n === o || _(n) && n.includes(o) || (t[e] = n ? [].concat(n, o) : o) } else e !== '' && (t[e] = r[e]) } return t }(r || {}, t)) : r; return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && Zt(a), ref: t && t.ref ? o && s ? _(s) ? s.concat(en(t)) : [s, en(t)] : en(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: process.env.NODE_ENV !== 'production' && i === -1 && _(l) ? l.map(sn) : l, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== Lt ? i === -1 ? 16 : 16 | i : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && rn(e.ssContent), ssFallback: e.ssFallback && rn(e.ssFallback), el: e.el, anchor: e.anchor } } function sn (e) { const t = rn(e); return _(e.children) && (t.children = e.children.map(sn)), t } function cn (e = ' ', t = 0) { return nn(qt, null, e, t) } function ln (e, t) { let n = 0; const { shapeFlag: o } = e; if (t == null)t = null; else if (_(t))n = 16; else if (typeof t === 'object') { if (65 & o) { const n = t.default; return void (n && (n._c && (n._d = !1), ln(e, n()), n._c && (n._d = !0))) } { n = 32; const e = t._; e || '__vInternal' in t || (t._ctx = null) } } else g(t) ? (t = { default: t, _ctx: null }, n = 32) : (t = String(t), 64 & o ? (n = 16, t = [cn(t)]) : n = 8); e.children = t, e.shapeFlag |= n }Object.create(null), new WeakMap(), new WeakMap(), new WeakMap(); let an = null; const un = e => { an = e, e.scope.on() }; const pn = () => { an && an.scope.off(), an = null }; const dn = /(?:^|[-_])(\w)/g; function fn (e, t = !0) { return g(e) ? e.displayName || e.name : e.name || t && e.__name } function hn (e, t, n = !1) { let o = fn(t); if (!o && t.__file) { const e = t.__file.match(/([^/\\]+)\.\w+$/); e && (o = e[1]) } if (!o && e && e.parent) { const n = e => { for (const n in e) if (e[n] === t) return n }; o = n(e.components || e.parent.type.components) || n(e.appContext.components) } return o ? o.replace(dn, e => e.toUpperCase()).replace(/[-_]/g, '') : n ? 'App' : 'Anonymous' } function _n (e) { return g(e) && '__vccOpts' in e } function vn (e) { return !(!e || !e.__v_isShallow) }Symbol(process.env.NODE_ENV !== 'production' ? 'ssrContext' : ''), process.env.NODE_ENV !== 'production' && (function () { if (process.env.NODE_ENV === 'production' || typeof window === 'undefined') return; const e = { style: 'color:#3ba776' }; const t = { style: 'color:#0b1bc9' }; const n = { style: 'color:#b62e24' }; const o = { style: 'color:#9d288c' }; const r = { header: t => E(t) ? t.__isVue ? ['div', e, 'VueInstance'] : Ke(t) ? ['div', {}, ['span', e, p(t)], '<', l(t.value), '>'] : Fe(t) ? ['div', {}, ['span', e, vn(t) ? 'ShallowReactive' : 'Reactive'], '<', l(t), '>' + (Ie(t) ? ' (readonly)' : '')] : Ie(t) ? ['div', {}, ['span', e, vn(t) ? 'ShallowReadonly' : 'Readonly'], '<', l(t), '>'] : null : null, hasBody: e => e && e.__isVue, body (e) { if (e && e.__isVue) return ['div', {}, ...s(e.$)] } }; function s (e) { const t = []; e.type.props && e.props && t.push(c('props', Ue(e.props))), e.setupState !== i && t.push(c('setup', e.setupState)), e.data !== i && t.push(c('data', Ue(e.data))); const n = a(e, 'computed'); n && t.push(c('computed', n)); const r = a(e, 'inject'); return r && t.push(c('injected', r)), t.push(['div', {}, ['span', { style: o.style + ';opacity:0.66' }, '$ (internal): '], ['object', { object: e }]]), t } function c (e, t) { return t = d({}, t), Object.keys(t).length ? ['div', { style: 'line-height:1.25em;margin-bottom:0.6em' }, ['div', { style: 'color:#476582' }, e], ['div', { style: 'padding-left:1.25em' }, ...Object.keys(t).map(e => ['div', {}, ['span', o, e + ': '], l(t[e], !1)])]] : ['span', {}] } function l (e, r = !0) { return typeof e === 'number' ? ['span', t, e] : typeof e === 'string' ? ['span', n, JSON.stringify(e)] : typeof e === 'boolean' ? ['span', o, e] : E(e) ? ['object', { object: r ? Ue(e) : e }] : ['span', n, String(e)] } function a (e, t) { const n = e.type; if (g(n)) return; const o = {}; for (const r in e.ctx)u(n, r, t) && (o[r] = e.ctx[r]); return o } function u (e, t, n) { const o = e[n]; return !!(_(o) && o.includes(t) || E(o) && t in o) || !(!e.extends || !u(e.extends, t, n)) || !(!e.mixins || !e.mixins.some(e => u(e, t, n))) || void 0 } function p (e) { return vn(e) ? 'ShallowRef' : e.effect ? 'ComputedRef' : 'Ref' }window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r] }()); const gn = { class: 'al-form' }; e.render = function (e, t, n, o, r, s) { return Gt(), c = 'div', i = gn, l = [Ct(e.$slots, 'default')], Qt(tn(c, i, l, a, u, p, !0)); var c, i, l, a, u, p }, e.__file = 'al-form.vue', e.install = t => { t.component(e.name, e) }; export { e as default }
