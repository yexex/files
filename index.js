var GDSplashDynamic = function(e) {
    "use strict";

    function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function n(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

    function r(e, t, r) { return t && n(e.prototype, t), r && n(e, r), e }

    function o(e, t) { return o = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, o(e, t) }

    function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && o(e, t) }

    function s(e) { return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, s(e) }

    function a(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

    function u(e, t) { if (t && ("object" === s(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return a(e) }

    function l(e) { return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, l(e) }
    var c, f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        d = { exports: {} },
        p = "object" == typeof Reflect ? Reflect : null,
        h = p && "function" == typeof p.apply ? p.apply : function(e, t, n) { return Function.prototype.apply.call(e, t, n) };
    c = p && "function" == typeof p.ownKeys ? p.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) };
    var y = Number.isNaN || function(e) { return e != e };

    function m() { m.init.call(this) }
    d.exports = m, d.exports.once = function(e, t) { return new Promise((function(n, r) {
            function o(n) { e.removeListener(t, i), r(n) }

            function i() { "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments)) }
            E(e, t, i, { once: !0 }), "error" !== t && function(e, t, n) { "function" == typeof e.on && E(e, "error", t, n) }(e, o, { once: !0 }) })) }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
    var b = 10;

    function g(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e) }

    function v(e) { return void 0 === e._maxListeners ? m.defaultMaxListeners : e._maxListeners }

    function _(e, t, n, r) { var o, i, s, a; if (g(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;
        else if ("function" == typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = v(e)) > 0 && s.length > o && !s.warned) { s.warned = !0; var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a) } return e }

    function w() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

    function x(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            o = w.bind(r); return o.listener = n, r.wrapFn = o, o }

    function k(e, t, n) { var r = e._events; if (void 0 === r) return []; var o = r[t]; return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n]; return t }(o) : O(o, o.length) }

    function S(e) { var t = this._events; if (void 0 !== t) { var n = t[e]; if ("function" == typeof n) return 1; if (void 0 !== n) return n.length } return 0 }

    function O(e, t) { for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]; return n }

    function E(e, t, n, r) { if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else { if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, (function o(i) { r.once && e.removeEventListener(t, o), n(i) })) } }
    Object.defineProperty(m, "defaultMaxListeners", { enumerable: !0, get: function() { return b }, set: function(e) { if ("number" != typeof e || e < 0 || y(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            b = e } }), m.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, m.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || y(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, m.prototype.getMaxListeners = function() { return v(this) }, m.prototype.emit = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]); var r = "error" === e,
            o = this._events; if (void 0 !== o) r = r && void 0 === o.error;
        else if (!r) return !1; if (r) { var i; if (t.length > 0 && (i = t[0]), i instanceof Error) throw i; var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : "")); throw s.context = i, s } var a = o[e]; if (void 0 === a) return !1; if ("function" == typeof a) h(a, this, t);
        else { var u = a.length,
                l = O(a, u); for (n = 0; n < u; ++n) h(l[n], this, t) } return !0 }, m.prototype.addListener = function(e, t) { return _(this, e, t, !1) }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(e, t) { return _(this, e, t, !0) }, m.prototype.once = function(e, t) { return g(t), this.on(e, x(this, e, t)), this }, m.prototype.prependOnceListener = function(e, t) { return g(t), this.prependListener(e, x(this, e, t)), this }, m.prototype.removeListener = function(e, t) { var n, r, o, i, s; if (g(t), void 0 === (r = this._events)) return this; if (void 0 === (n = r[e])) return this; if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) { for (o = -1, i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) { s = n[i].listener, o = i; break }
            if (o < 0) return this;
            0 === o ? n.shift() : function(e, t) { for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop() }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t) } return this }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(e) { var t, n, r; if (void 0 === (n = this._events)) return this; if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this; if (0 === arguments.length) { var o, i = Object.keys(n); for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this } if ("function" == typeof(t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]); return this }, m.prototype.listeners = function(e) { return k(this, e, !0) }, m.prototype.rawListeners = function(e) { return k(this, e, !1) }, m.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : S.call(e, t) }, m.prototype.listenerCount = S, m.prototype.eventNames = function() { return this._eventsCount > 0 ? c(this._events) : [] };
    var j, A, C, P, R, T, B, M = d.exports,
        N = {},
        I = [],
        L = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function D(e, t) { for (var n in t) e[n] = t[n]; return e }

    function U(e) { var t = e.parentNode;
        t && t.removeChild(e) }

    function F(e, t, n) { var r, o, i, s = {}; for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i]; if (arguments.length > 2 && (s.children = arguments.length > 3 ? j.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]); return z(e, s, r, o, null) }

    function z(e, t, n, r, o) { var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++C : o }; return null != A.vnode && A.vnode(i), i }

    function $(e) { return e.children }

    function H(e, t) { this.props = e, this.context = t }

    function W(e, t) { if (null == t) return e.__ ? W(e.__, e.__.__k.indexOf(e) + 1) : null; for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? W(e) : null }

    function V(e) { var t, n; if (null != (e = e.__) && null != e.__c) { for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) { e.__e = e.__c.base = n.__e; break }
            return V(e) } }

    function q(e) {
        (!e.__d && (e.__d = !0) && P.push(e) && !G.__r++ || T !== A.debounceRendering) && ((T = A.debounceRendering) || R)(G) }

    function G() { for (var e; G.__r = P.length;) e = P.sort((function(e, t) { return e.__v.__b - t.__v.__b })), P = [], e.some((function(e) { var t, n, r, o, i, s;
            e.__d && (i = (o = (t = e).__v).__e, (s = t.__P) && (n = [], (r = D({}, o)).__v = o.__v + 1, ne(s, o, r, t.__n, void 0 !== s.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? W(o) : i, o.__h), re(n, o), o.__e != i && V(o))) })) }

    function Z(e, t, n, r, o, i, s, a, u, l) { var c, f, d, p, h, y, m, b = r && r.__k || I,
            g = b.length; for (n.__k = [], c = 0; c < t.length; c++)
            if (null != (p = n.__k[c] = null == (p = t[c]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? z(null, p, null, null, p) : Array.isArray(p) ? z($, { children: p }, null, null, null) : p.__b > 0 ? z(p.type, p.props, p.key, null, p.__v) : p)) { if (p.__ = n, p.__b = n.__b + 1, null === (d = b[c]) || d && p.key == d.key && p.type === d.type) b[c] = void 0;
                else
                    for (f = 0; f < g; f++) { if ((d = b[f]) && p.key == d.key && p.type === d.type) { b[f] = void 0; break }
                        d = null }
                ne(e, p, d = d || N, o, i, s, a, u, l), h = p.__e, (f = p.ref) && d.ref != f && (m || (m = []), d.ref && m.push(d.ref, null, p), m.push(f, p.__c || h, p)), null != h ? (null == y && (y = h), "function" == typeof p.type && null != p.__k && p.__k === d.__k ? p.__d = u = J(p, u, e) : u = K(e, p, d, b, h, u), l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && d.__e == u && u.parentNode != e && (u = W(d)) }
        for (n.__e = y, c = g; c--;) null != b[c] && ("function" == typeof n.type && null != b[c].__e && b[c].__e == n.__d && (n.__d = W(r, c + 1)), ie(b[c], b[c])); if (m)
            for (c = 0; c < m.length; c++) oe(m[c], m[++c], m[++c]) }

    function J(e, t, n) { var r, o; for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? J(o, t, n) : K(n, o, o, e.__k, o.__e, t)); return t }

    function Y(e, t) { return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) { Y(e, t) })) : t.push(e)), t }

    function K(e, t, n, r, o, i) { var s, a, u; if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), s = null;
            else { for (a = i, u = 0;
                    (a = a.nextSibling) && u < r.length; u += 2)
                    if (a == o) break e;
                e.insertBefore(o, i), s = i }
        return void 0 !== s ? s : o.nextSibling }

    function X(e, t, n) { "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || L.test(t) ? n : n + "px" }

    function Q(e, t, n, r, o) { var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else { if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || X(e.style, t, ""); if (n)
                    for (t in n) r && n[t] === r[t] || X(e.style, t, n[t]) }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? te : ee, i) : e.removeEventListener(t, i ? te : ee, i);
        else if ("dangerouslySetInnerHTML" !== t) { if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try { e[t] = null == n ? "" : n; break e } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t)) } }

    function ee(e) { this.l[e.type + !1](A.event ? A.event(e) : e) }

    function te(e) { this.l[e.type + !0](A.event ? A.event(e) : e) }

    function ne(e, t, n, r, o, i, s, a, u) { var l, c, f, d, p, h, y, m, b, g, v, _ = t.type; if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (l = A.__b) && l(t); try { e: if ("function" == typeof _) { if (m = t.props, b = (l = _.contextType) && r[l.__c], g = l ? b ? b.props.value : l.__ : r, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in _ && _.prototype.render ? t.__c = c = new _(m, g) : (t.__c = c = new H(m, g), c.constructor = _, c.render = se), b && b.sub(c), c.props = m, c.state || (c.state = {}), c.context = g, c.__n = r, f = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != _.getDerivedStateFromProps && (c.__s == c.state && (c.__s = D({}, c.__s)), D(c.__s, _.getDerivedStateFromProps(m, c.__s))), d = c.props, p = c.state, f) null == _.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);
                    else { if (null == _.getDerivedStateFromProps && m !== d && null != c.componentWillReceiveProps && c.componentWillReceiveProps(m, g), !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(m, c.__s, g) || t.__v === n.__v) { c.props = m, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) { e && (e.__ = t) })), c.__h.length && s.push(c); break e }
                        null != c.componentWillUpdate && c.componentWillUpdate(m, c.__s, g), null != c.componentDidUpdate && c.__h.push((function() { c.componentDidUpdate(d, p, h) })) }
                    c.context = g, c.props = m, c.state = c.__s, (l = A.__r) && l(t), c.__d = !1, c.__v = t, c.__P = e, l = c.render(c.props, c.state, c.context), c.state = c.__s, null != c.getChildContext && (r = D(D({}, r), c.getChildContext())), f || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(d, p)), v = null != l && l.type === $ && null == l.key ? l.props.children : l, Z(e, Array.isArray(v) ? v : [v], t, n, r, o, i, s, a, u), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), y && (c.__E = c.__ = null), c.__e = !1 } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, o, i, s, a) { var u, l, c, f = n.props,
                        d = t.props,
                        p = t.type,
                        h = 0; if ("svg" === p && (o = !0), null != i)
                        for (; h < i.length; h++)
                            if ((u = i[h]) && (u === e || (p ? u.localName == p : 3 == u.nodeType))) { e = u, i[h] = null; break }
                    if (null == e) { if (null === p) return document.createTextNode(d);
                        e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), i = null, a = !1 } if (null === p) f === d || a && e.data === d || (e.data = d);
                    else { if (i = i && j.call(e.childNodes), l = (f = n.props || N).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) { if (null != i)
                                for (f = {}, h = 0; h < e.attributes.length; h++) f[e.attributes[h].name] = e.attributes[h].value;
                            (c || l) && (c && (l && c.__html == l.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || "")) } if (function(e, t, n, r, o) { var i; for (i in n) "children" === i || "key" === i || i in t || Q(e, i, null, n[i], r); for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || Q(e, i, t[i], n[i], r) }(e, d, f, o, a), c) t.__k = [];
                        else if (h = t.props.children, Z(e, Array.isArray(h) ? h : [h], t, n, r, o && "foreignObject" !== p, i, s, i ? i[0] : n.__k && W(n, 0), a), null != i)
                            for (h = i.length; h--;) null != i[h] && U(i[h]);
                        a || ("value" in d && void 0 !== (h = d.value) && (h !== e.value || "progress" === p && !h) && Q(e, "value", h, f.value, !1), "checked" in d && void 0 !== (h = d.checked) && h !== e.checked && Q(e, "checked", h, f.checked, !1)) } return e }(n.__e, t, n, r, o, i, s, u);
                (l = A.diffed) && l(t) }
        catch (e) { t.__v = null, (u || null != i) && (t.__e = a, t.__h = !!u, i[i.indexOf(a)] = null), A.__e(e, t, n) } }

    function re(e, t) { A.__c && A.__c(t, e), e.some((function(t) { try { e = t.__h, t.__h = [], e.some((function(e) { e.call(t) })) } catch (e) { A.__e(e, t.__v) } })) }

    function oe(e, t, n) { try { "function" == typeof e ? e(t) : e.current = t } catch (e) { A.__e(e, n) } }

    function ie(e, t, n) { var r, o; if (A.unmount && A.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || oe(r, null, t)), null != (r = e.__c)) { if (r.componentWillUnmount) try { r.componentWillUnmount() } catch (e) { A.__e(e, t) }
            r.base = r.__P = null } if (r = e.__k)
            for (o = 0; o < r.length; o++) r[o] && ie(r[o], t, "function" != typeof e.type);
        n || null == e.__e || U(e.__e), e.__e = e.__d = void 0 }

    function se(e, t, n) { return this.constructor(e, n) }

    function ae(e, t, n) { var r, o, i;
        A.__ && A.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], ne(t, e = (!r && n || t).__k = F($, null, [e]), o || N, N, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? j.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), re(i, e) }

    function ue(e, t) { ae(e, t, ue) }

    function le(e, t, n) { var r, o, i, s = D({}, e.props); for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i]; return arguments.length > 2 && (s.children = arguments.length > 3 ? j.call(arguments, 2) : n), z(e.type, s, r || e.key, o || e.ref, null) }
    j = I.slice, A = { __e: function(e, t) { for (var n, r, o; t = t.__;)
                if ((n = t.__c) && !n.__) try { if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n } catch (t) { e = t }
                throw e } }, C = 0, H.prototype.setState = function(e, t) { var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = D({}, this.state), "function" == typeof e && (e = e(D({}, n), this.props)), e && D(n, e), null != e && this.__v && (t && this.__h.push(t), q(this)) }, H.prototype.forceUpdate = function(e) { this.__v && (this.__e = !0, e && this.__h.push(e), q(this)) }, H.prototype.render = $, P = [], R = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, G.__r = 0, B = 0;
    var ce, fe, de, pe = 0,
        he = [],
        ye = A.__b,
        me = A.__r,
        be = A.diffed,
        ge = A.__c,
        ve = A.unmount;

    function _e(e, t) { A.__h && A.__h(fe, e, pe || t), pe = 0; var n = fe.__H || (fe.__H = { __: [], __h: [] }); return e >= n.__.length && n.__.push({}), n.__[e] }

    function we(e) { return pe = 1, xe(Re, e) }

    function xe(e, t, n) { var r = _e(ce++, 2); return r.t = e, r.__c || (r.__ = [n ? n(t) : Re(void 0, t), function(e) { var t = r.t(r.__[0], e);
            r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({})) }], r.__c = fe), r.__ }

    function ke(e, t) { var n = _e(ce++, 3);!A.__s && Pe(n.__H, t) && (n.__ = e, n.__H = t, fe.__H.__h.push(n)) }

    function Se(e, t) { var n = _e(ce++, 4);!A.__s && Pe(n.__H, t) && (n.__ = e, n.__H = t, fe.__h.push(n)) }

    function Oe(e, t) { var n = _e(ce++, 7); return Pe(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__ }

    function Ee() { he.forEach((function(e) { if (e.__P) try { e.__H.__h.forEach(Ae), e.__H.__h.forEach(Ce), e.__H.__h = [] } catch (t) { e.__H.__h = [], A.__e(t, e.__v) } })), he = [] }
    A.__b = function(e) { fe = null, ye && ye(e) }, A.__r = function(e) { me && me(e), ce = 0; var t = (fe = e.__c).__H;
        t && (t.__h.forEach(Ae), t.__h.forEach(Ce), t.__h = []) }, A.diffed = function(e) { be && be(e); var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== he.push(t) && de === A.requestAnimationFrame || ((de = A.requestAnimationFrame) || function(e) { var t, n = function() { clearTimeout(r), je && cancelAnimationFrame(t), setTimeout(e) },
                r = setTimeout(n, 100);
            je && (t = requestAnimationFrame(n)) })(Ee)), fe = void 0 }, A.__c = function(e, t) { t.some((function(e) { try { e.__h.forEach(Ae), e.__h = e.__h.filter((function(e) { return !e.__ || Ce(e) })) } catch (n) { t.some((function(e) { e.__h && (e.__h = []) })), t = [], A.__e(n, e.__v) } })), ge && ge(e, t) }, A.unmount = function(e) { ve && ve(e); var t = e.__c; if (t && t.__H) try { t.__H.__.forEach(Ae) } catch (e) { A.__e(e, t.__v) } };
    var je = "function" == typeof requestAnimationFrame;

    function Ae(e) { var t = fe; "function" == typeof e.__c && e.__c(), fe = t }

    function Ce(e) { var t = fe;
        e.__c = e.__(), fe = t }

    function Pe(e, t) { return !e || e.length !== t.length || t.some((function(t, n) { return t !== e[n] })) }

    function Re(e, t) { return "function" == typeof t ? t(e) : t }

    function Te(e, t) { for (var n in t) e[n] = t[n]; return e }

    function Be(e, t) { for (var n in e)
            if ("__source" !== n && !(n in t)) return !0;
        for (var r in t)
            if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1 }

    function Me(e) { this.props = e }(Me.prototype = new H).isPureReactComponent = !0, Me.prototype.shouldComponentUpdate = function(e, t) { return Be(this.props, e) || Be(this.state, t) };
    var Ne = A.__b;
    A.__b = function(e) { e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ne && Ne(e) };
    var Ie = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    var Le = function(e, t) { return null == e ? null : Y(Y(e).map(t)) },
        De = { map: Le, forEach: Le, count: function(e) { return e ? Y(e).length : 0 }, only: function(e) { var t = Y(e); if (1 !== t.length) throw "Children.only"; return t[0] }, toArray: Y },
        Ue = A.__e;
    A.__e = function(e, t, n) { if (e.then)
            for (var r, o = t; o = o.__;)
                if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        Ue(e, t, n) };
    var Fe = A.unmount;

    function ze() { this.__u = 0, this.t = null, this.__b = null }

    function $e(e) { var t = e.__.__c; return t && t.__e && t.__e(e) }

    function He() { this.u = null, this.o = null }
    A.unmount = function(e) { var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Fe && Fe(e) }, (ze.prototype = new H).__c = function(e, t) { var n = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(n); var o = $e(r.__v),
            i = !1,
            s = function() { i || (i = !0, n.__R = null, o ? o(a) : a()) };
        n.__R = s; var a = function() { if (!--r.__u) { if (r.state.__e) { var e = r.state.__e;
                        r.__v.__k[0] = function e(t, n, r) { return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) { return e(t, n, r) })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t }(e, e.__c.__P, e.__c.__O) } var t; for (r.setState({ __e: r.__b = null }); t = r.t.pop();) t.forceUpdate() } },
            u = !0 === t.__h;
        r.__u++ || u || r.setState({ __e: r.__b = r.__v.__k[0] }), e.then(s, s) }, ze.prototype.componentWillUnmount = function() { this.t = [] }, ze.prototype.render = function(e, t) { if (this.__b) { if (this.__v.__k) { var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) { return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) { "function" == typeof e.__c && e.__c() })), t.__c.__H = null), null != (t = Te({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) { return e(t, n, r) }))), t }(this.__b, n, r.__O = r.__P) }
            this.__b = null } var o = t.__e && F($, null, e.fallback); return o && (o.__h = null), [F($, null, t.__e ? null : e.children), o] };
    var We = function(e, t, n) { if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n;) { for (; n.length > 3;) n.pop()(); if (n[1] < n[0]) break;
                e.u = n = n[2] } };

    function Ve(e) { return this.getChildContext = function() { return e.context }, e.children }

    function qe(e) { var t = this,
            n = e.i;
        t.componentWillUnmount = function() { ae(null, t.l), t.l = null, t.i = null }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(e) { this.childNodes.push(e), t.i.appendChild(e) }, insertBefore: function(e, n) { this.childNodes.push(e), t.i.appendChild(e) }, removeChild: function(e) { this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e) } }), ae(F(Ve, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount() }(He.prototype = new H).__e = function(e) { var t = this,
            n = $e(t.__v),
            r = t.o.get(e); return r[0]++,
            function(o) { var i = function() { t.props.revealOrder ? (r.push(o), We(t, e, r)) : o() };
                n ? n(i) : i() } }, He.prototype.render = function(e) { this.u = null, this.o = new Map; var t = Y(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse(); for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]); return e.children }, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() { var e = this;
        this.o.forEach((function(t, n) { We(e, n, t) })) };
    var Ge = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        Ze = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Je = function(e) { return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e) };
    H.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) { Object.defineProperty(H.prototype, e, { configurable: !0, get: function() { return this["UNSAFE_" + e] }, set: function(t) { Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t }) } }) }));
    var Ye = A.event;

    function Ke() {}

    function Xe() { return this.cancelBubble }

    function Qe() { return this.defaultPrevented }
    A.event = function(e) { return Ye && (e = Ye(e)), e.persist = Ke, e.isPropagationStopped = Xe, e.isDefaultPrevented = Qe, e.nativeEvent = e };
    var et, tt = { configurable: !0, get: function() { return this.class } },
        nt = A.vnode;
    A.vnode = function(e) { var t = e.type,
            n = e.props,
            r = n; if ("string" == typeof t) { for (var o in r = {}, n) { var i = n[o]; "value" === o && "defaultValue" in n && null == i || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Je(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : Ze.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i) } "select" == t && r.multiple && Array.isArray(r.value) && (r.value = Y(n.children).forEach((function(e) { e.props.selected = -1 != r.value.indexOf(e.props.value) }))), "select" == t && null != r.defaultValue && (r.value = Y(n.children).forEach((function(e) { e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value }))), e.props = r }
        t && n.class != n.className && (tt.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", tt)), e.$$typeof = Ge, nt && nt(e) };
    var rt = A.__r;
    A.__r = function(e) { rt && rt(e), et = e.__c };
    var ot = { ReactCurrentDispatcher: { current: { readContext: function(e) { return et.__n[e.__c].props.value } } } };

    function it(e) { return !!e && e.$$typeof === Ge }
    var st = { useState: we, useReducer: xe, useEffect: ke, useLayoutEffect: Se, useRef: function(e) { return pe = 5, Oe((function() { return { current: e } }), []) }, useImperativeHandle: function(e, t, n) { pe = 6, Se((function() { "function" == typeof e ? e(t()) : e && (e.current = t()) }), null == n ? n : n.concat(e)) }, useMemo: Oe, useCallback: function(e, t) { return pe = 8, Oe((function() { return e }), t) }, useContext: function(e) { var t = fe.context[e.__c],
                    n = _e(ce++, 9); return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(fe)), t.props.value) : e.__ }, useDebugValue: function(e, t) { A.useDebugValue && A.useDebugValue(t ? t(e) : e) }, version: "17.0.2", Children: De, render: function(e, t, n) { return null == t.__k && (t.textContent = ""), ae(e, t), "function" == typeof n && n(), e ? e.__c : null }, hydrate: function(e, t, n) { return ue(e, t), "function" == typeof n && n(), e ? e.__c : null }, unmountComponentAtNode: function(e) { return !!e.__k && (ae(null, e), !0) }, createPortal: function(e, t) { return F(qe, { __v: e, i: t }) }, createElement: F, createContext: function(e, t) { var n = { __c: t = "__cC" + B++, __: e, Consumer: function(e, t) { return e.children(t) }, Provider: function(e) { var n, r; return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() { return r }, this.shouldComponentUpdate = function(e) { this.props.value !== e.value && n.some(q) }, this.sub = function(e) { n.push(e); var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() { n.splice(n.indexOf(e), 1), t && t.call(e) } }), e.children } }; return n.Provider.__ = n.Consumer.contextType = n }, createFactory: function(e) { return F.bind(null, e) }, cloneElement: function(e) { return it(e) ? le.apply(null, arguments) : e }, createRef: function() { return { current: null } }, Fragment: $, isValidElement: it, findDOMNode: function(e) { return e && (e.base || 1 === e.nodeType && e) || null }, Component: H, PureComponent: Me, memo: function(e, t) {
                function n(e) { var n = this.props.ref,
                        r = n == e.ref; return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Be(this.props, e) }

                function r(t) { return this.shouldComponentUpdate = n, F(e, t) } return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r }, forwardRef: function(e) {
                function t(t, n) { var r = Te({}, t); return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null) } return t.$$typeof = Ie, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t }, flushSync: function(e, t) { return e(t) }, unstable_batchedUpdates: function(e, t) { return e(t) }, StrictMode: $, Suspense: ze, SuspenseList: He, lazy: function(e) { var t, n, r;

                function o(o) { if (t || (t = e()).then((function(e) { n = e.default || e }), (function(e) { r = e })), r) throw r; if (!n) throw t; return F(n, o) } return o.displayName = "Lazy", o.__f = !0, o }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot },
        at = {},
        ut = Object.prototype.hasOwnProperty;

    function lt(e) { try { return decodeURIComponent(e.replace(/\+/g, " ")) } catch (e) { return null } }

    function ct(e) { try { return encodeURIComponent(e) } catch (e) { return null } }
    at.stringify = function(e, t) { t = t || ""; var n, r, o = []; for (r in "string" != typeof t && (t = "?"), e)
            if (ut.call(e, r)) { if ((n = e[r]) || null != n && !isNaN(n) || (n = ""), r = ct(r), n = ct(n), null === r || null === n) continue;
                o.push(r + "=" + n) }
        return o.length ? t + o.join("&") : "" }, at.parse = function(e) { for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) { var o = lt(t[1]),
                i = lt(t[2]);
            null === o || null === i || o in r || (r[o] = i) } return r };
    var ft = { exports: {} };
    ! function(e, t) { var n = "__lodash_hash_undefined__",
            r = 9007199254740991,
            o = "[object Arguments]",
            i = "[object Boolean]",
            s = "[object Date]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            l = "[object Map]",
            c = "[object Number]",
            d = "[object Object]",
            p = "[object Promise]",
            h = "[object RegExp]",
            y = "[object Set]",
            m = "[object String]",
            b = "[object Symbol]",
            g = "[object WeakMap]",
            v = "[object ArrayBuffer]",
            _ = "[object DataView]",
            w = "[object Float32Array]",
            x = "[object Float64Array]",
            k = "[object Int8Array]",
            S = "[object Int16Array]",
            O = "[object Int32Array]",
            E = "[object Uint8Array]",
            j = "[object Uint8ClampedArray]",
            A = "[object Uint16Array]",
            C = "[object Uint32Array]",
            P = /\w*$/,
            R = /^\[object .+?Constructor\]$/,
            T = /^(?:0|[1-9]\d*)$/,
            B = {};
        B[o] = B["[object Array]"] = B[v] = B[_] = B[i] = B[s] = B[w] = B[x] = B[k] = B[S] = B[O] = B[l] = B[c] = B[d] = B[h] = B[y] = B[m] = B[b] = B[E] = B[j] = B[A] = B[C] = !0, B["[object Error]"] = B[a] = B[g] = !1; var M = "object" == typeof f && f && f.Object === Object && f,
            N = "object" == typeof self && self && self.Object === Object && self,
            I = M || N || Function("return this")(),
            L = t && !t.nodeType && t,
            D = L && e && !e.nodeType && e,
            U = D && D.exports === L;

        function F(e, t) { return e.set(t[0], t[1]), e }

        function z(e, t) { return e.add(t), e }

        function $(e, t, n, r) { var o = -1,
                i = e ? e.length : 0; for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e); return n }

        function H(e) { var t = !1; if (null != e && "function" != typeof e.toString) try { t = !!(e + "") } catch (e) {}
            return t }

        function W(e) { var t = -1,
                n = Array(e.size); return e.forEach((function(e, r) { n[++t] = [r, e] })), n }

        function V(e, t) { return function(n) { return e(t(n)) } }

        function q(e) { var t = -1,
                n = Array(e.size); return e.forEach((function(e) { n[++t] = e })), n } var G, Z = Array.prototype,
            J = Function.prototype,
            Y = Object.prototype,
            K = I["__core-js_shared__"],
            X = (G = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "",
            Q = J.toString,
            ee = Y.hasOwnProperty,
            te = Y.toString,
            ne = RegExp("^" + Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            re = U ? I.Buffer : void 0,
            oe = I.Symbol,
            ie = I.Uint8Array,
            se = V(Object.getPrototypeOf, Object),
            ae = Object.create,
            ue = Y.propertyIsEnumerable,
            le = Z.splice,
            ce = Object.getOwnPropertySymbols,
            fe = re ? re.isBuffer : void 0,
            de = V(Object.keys, Object),
            pe = De(I, "DataView"),
            he = De(I, "Map"),
            ye = De(I, "Promise"),
            me = De(I, "Set"),
            be = De(I, "WeakMap"),
            ge = De(Object, "create"),
            ve = He(pe),
            _e = He(he),
            we = He(ye),
            xe = He(me),
            ke = He(be),
            Se = oe ? oe.prototype : void 0,
            Oe = Se ? Se.valueOf : void 0;

        function Ee(e) { var t = -1,
                n = e ? e.length : 0; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } }

        function je(e) { var t = -1,
                n = e ? e.length : 0; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } }

        function Ae(e) { var t = -1,
                n = e ? e.length : 0; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } }

        function Ce(e) { this.__data__ = new je(e) }

        function Pe(e, t) { var n = Ve(e) || function(e) { return function(e) { return function(e) { return !!e && "object" == typeof e }(e) && qe(e) }(e) && ee.call(e, "callee") && (!ue.call(e, "callee") || te.call(e) == o) }(e) ? function(e, t) { for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n); return r }(e.length, String) : [],
                r = n.length,
                i = !!r; for (var s in e) !t && !ee.call(e, s) || i && ("length" == s || ze(s, r)) || n.push(s); return n }

        function Re(e, t, n) { var r = e[t];
            ee.call(e, t) && We(r, n) && (void 0 !== n || t in e) || (e[t] = n) }

        function Te(e, t) { for (var n = e.length; n--;)
                if (We(e[n][0], t)) return n;
            return -1 }

        function Be(e, t, n, r, f, p, g) { var R; if (r && (R = p ? r(e, f, p, g) : r(e)), void 0 !== R) return R; if (!Je(e)) return e; var T = Ve(e); if (T) { if (R = function(e) { var t = e.length,
                            n = e.constructor(t);
                        t && "string" == typeof e[0] && ee.call(e, "index") && (n.index = e.index, n.input = e.input); return n }(e), !t) return function(e, t) { var n = -1,
                        r = e.length;
                    t || (t = Array(r)); for (; ++n < r;) t[n] = e[n]; return t }(e, R) } else { var M = Fe(e),
                    N = M == a || M == u; if (Ge(e)) return function(e, t) { if (t) return e.slice(); var n = new e.constructor(e.length); return e.copy(n), n }(e, t); if (M == d || M == o || N && !p) { if (H(e)) return p ? e : {}; if (R = function(e) { return "function" != typeof e.constructor || $e(e) ? {} : (t = se(e), Je(t) ? ae(t) : {}); var t }(N ? {} : e), !t) return function(e, t) { return Ie(e, Ue(e), t) }(e, function(e, t) { return e && Ie(t, Ye(t), e) }(R, e)) } else { if (!B[M]) return p ? e : {};
                    R = function(e, t, n, r) { var o = e.constructor; switch (t) {
                            case v:
                                return Ne(e);
                            case i:
                            case s:
                                return new o(+e);
                            case _:
                                return function(e, t) { var n = t ? Ne(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.byteLength) }(e, r);
                            case w:
                            case x:
                            case k:
                            case S:
                            case O:
                            case E:
                            case j:
                            case A:
                            case C:
                                return function(e, t) { var n = t ? Ne(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.length) }(e, r);
                            case l:
                                return function(e, t, n) { return $(t ? n(W(e), !0) : W(e), F, new e.constructor) }(e, r, n);
                            case c:
                            case m:
                                return new o(e);
                            case h:
                                return function(e) { var t = new e.constructor(e.source, P.exec(e)); return t.lastIndex = e.lastIndex, t }(e);
                            case y:
                                return function(e, t, n) { return $(t ? n(q(e), !0) : q(e), z, new e.constructor) }(e, r, n);
                            case b:
                                return a = e, Oe ? Object(Oe.call(a)) : {} } var a }(e, M, Be, t) } }
            g || (g = new Ce); var I = g.get(e); if (I) return I; if (g.set(e, R), !T) var L = n ? function(e) { return function(e, t, n) { var r = t(e); return Ve(e) ? r : function(e, t) { for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n]; return e }(r, n(e)) }(e, Ye, Ue) }(e) : Ye(e); return function(e, t) { for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e);); }(L || e, (function(o, i) { L && (o = e[i = o]), Re(R, i, Be(o, t, n, r, i, e, g)) })), R }

        function Me(e) { return !(!Je(e) || (t = e, X && X in t)) && (Ze(e) || H(e) ? ne : R).test(He(e)); var t }

        function Ne(e) { var t = new e.constructor(e.byteLength); return new ie(t).set(new ie(e)), t }

        function Ie(e, t, n, r) { n || (n = {}); for (var o = -1, i = t.length; ++o < i;) { var s = t[o],
                    a = r ? r(n[s], e[s], s, n, e) : void 0;
                Re(n, s, void 0 === a ? e[s] : a) } return n }

        function Le(e, t) { var n, r, o = e.__data__; return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map }

        function De(e, t) { var n = function(e, t) { return null == e ? void 0 : e[t] }(e, t); return Me(n) ? n : void 0 }
        Ee.prototype.clear = function() { this.__data__ = ge ? ge(null) : {} }, Ee.prototype.delete = function(e) { return this.has(e) && delete this.__data__[e] }, Ee.prototype.get = function(e) { var t = this.__data__; if (ge) { var r = t[e]; return r === n ? void 0 : r } return ee.call(t, e) ? t[e] : void 0 }, Ee.prototype.has = function(e) { var t = this.__data__; return ge ? void 0 !== t[e] : ee.call(t, e) }, Ee.prototype.set = function(e, t) { return this.__data__[e] = ge && void 0 === t ? n : t, this }, je.prototype.clear = function() { this.__data__ = [] }, je.prototype.delete = function(e) { var t = this.__data__,
                n = Te(t, e); return !(n < 0) && (n == t.length - 1 ? t.pop() : le.call(t, n, 1), !0) }, je.prototype.get = function(e) { var t = this.__data__,
                n = Te(t, e); return n < 0 ? void 0 : t[n][1] }, je.prototype.has = function(e) { return Te(this.__data__, e) > -1 }, je.prototype.set = function(e, t) { var n = this.__data__,
                r = Te(n, e); return r < 0 ? n.push([e, t]) : n[r][1] = t, this }, Ae.prototype.clear = function() { this.__data__ = { hash: new Ee, map: new(he || je), string: new Ee } }, Ae.prototype.delete = function(e) { return Le(this, e).delete(e) }, Ae.prototype.get = function(e) { return Le(this, e).get(e) }, Ae.prototype.has = function(e) { return Le(this, e).has(e) }, Ae.prototype.set = function(e, t) { return Le(this, e).set(e, t), this }, Ce.prototype.clear = function() { this.__data__ = new je }, Ce.prototype.delete = function(e) { return this.__data__.delete(e) }, Ce.prototype.get = function(e) { return this.__data__.get(e) }, Ce.prototype.has = function(e) { return this.__data__.has(e) }, Ce.prototype.set = function(e, t) { var n = this.__data__; if (n instanceof je) { var r = n.__data__; if (!he || r.length < 199) return r.push([e, t]), this;
                n = this.__data__ = new Ae(r) } return n.set(e, t), this }; var Ue = ce ? V(ce, Object) : function() { return [] },
            Fe = function(e) { return te.call(e) };

        function ze(e, t) { return !!(t = null == t ? r : t) && ("number" == typeof e || T.test(e)) && e > -1 && e % 1 == 0 && e < t }

        function $e(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || Y) }

        function He(e) { if (null != e) { try { return Q.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" }

        function We(e, t) { return e === t || e != e && t != t }(pe && Fe(new pe(new ArrayBuffer(1))) != _ || he && Fe(new he) != l || ye && Fe(ye.resolve()) != p || me && Fe(new me) != y || be && Fe(new be) != g) && (Fe = function(e) { var t = te.call(e),
                n = t == d ? e.constructor : void 0,
                r = n ? He(n) : void 0; if (r) switch (r) {
                case ve:
                    return _;
                case _e:
                    return l;
                case we:
                    return p;
                case xe:
                    return y;
                case ke:
                    return g }
            return t }); var Ve = Array.isArray;

        function qe(e) { return null != e && function(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r }(e.length) && !Ze(e) } var Ge = fe || function() { return !1 };

        function Ze(e) { var t = Je(e) ? te.call(e) : ""; return t == a || t == u }

        function Je(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

        function Ye(e) { return qe(e) ? Pe(e) : function(e) { if (!$e(e)) return de(e); var t = []; for (var n in Object(e)) ee.call(e, n) && "constructor" != n && t.push(n); return t }(e) }
        e.exports = function(e) { return Be(e, !0, !0) } }(ft, ft.exports);
    var dt = ft.exports;
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    function pt(e) { return "[object Object]" === Object.prototype.toString.call(e) }
    var ht = function() { if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1; if ("symbol" == typeof Symbol.iterator) return !0; var e = {},
                t = Symbol("test"),
                n = Object(t); if ("string" == typeof t) return !1; if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1; if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1; for (t in e[t] = 42, e) return !1; if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1; if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1; var r = Object.getOwnPropertySymbols(e); if (1 !== r.length || r[0] !== t) return !1; if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1; if ("function" == typeof Object.getOwnPropertyDescriptor) { var o = Object.getOwnPropertyDescriptor(e, t); if (42 !== o.value || !0 !== o.enumerable) return !1 } return !0 },
        yt = String.prototype.valueOf,
        mt = Object.prototype.toString,
        bt = ht() && !!Symbol.toStringTag,
        gt = function(e) { return "string" == typeof e || "object" == typeof e && (bt ? function(e) { try { return yt.call(e), !0 } catch (e) { return !1 } }(e) : "[object String]" === mt.call(e)) },
        vt = Array.isArray,
        _t = Object.prototype.toString,
        wt = vt || function(e) { return !!e && "[object Array]" == _t.call(e) },
        xt = function(e) { if (!e) return !1; var t = kt.call(e); return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt) },
        kt = Object.prototype.toString;
    var St = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== St && St,
        Ot = "URLSearchParams" in St,
        Et = "Symbol" in St && "iterator" in Symbol,
        jt = "FileReader" in St && "Blob" in St && function() { try { return new Blob, !0 } catch (e) { return !1 } }(),
        At = "FormData" in St,
        Ct = "ArrayBuffer" in St;
    if (Ct) var Pt = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        Rt = ArrayBuffer.isView || function(e) { return e && Pt.indexOf(Object.prototype.toString.call(e)) > -1 };

    function Tt(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"'); return e.toLowerCase() }

    function Bt(e) { return "string" != typeof e && (e = String(e)), e }

    function Mt(e) { var t = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return Et && (t[Symbol.iterator] = function() { return t }), t }

    function Nt(e) { this.map = {}, e instanceof Nt ? e.forEach((function(e, t) { this.append(t, e) }), this) : Array.isArray(e) ? e.forEach((function(e) { this.append(e[0], e[1]) }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) { this.append(t, e[t]) }), this) }

    function It(e) { if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0 }

    function Lt(e) { return new Promise((function(t, n) { e.onload = function() { t(e.result) }, e.onerror = function() { n(e.error) } })) }

    function Dt(e) { var t = new FileReader,
            n = Lt(t); return t.readAsArrayBuffer(e), n }

    function Ut(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

    function Ft() { return this.bodyUsed = !1, this._initBody = function(e) { var t;
            this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : jt && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : At && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Ot && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Ct && jt && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = Ut(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ct && (ArrayBuffer.prototype.isPrototypeOf(e) || Rt(e)) ? this._bodyArrayBuffer = Ut(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Ot && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, jt && (this.blob = function() { var e = It(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { if (this._bodyArrayBuffer) { var e = It(this); return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) } return this.blob().then(Dt) }), this.text = function() { var e, t, n, r = It(this); if (r) return r; if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = Lt(t), t.readAsText(e), n; if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, At && (this.formData = function() { return this.text().then(Ht) }), this.json = function() { return this.text().then(JSON.parse) }, this }
    Nt.prototype.append = function(e, t) { e = Tt(e), t = Bt(t); var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t }, Nt.prototype.delete = function(e) { delete this.map[Tt(e)] }, Nt.prototype.get = function(e) { return e = Tt(e), this.has(e) ? this.map[e] : null }, Nt.prototype.has = function(e) { return this.map.hasOwnProperty(Tt(e)) }, Nt.prototype.set = function(e, t) { this.map[Tt(e)] = Bt(t) }, Nt.prototype.forEach = function(e, t) { for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }, Nt.prototype.keys = function() { var e = []; return this.forEach((function(t, n) { e.push(n) })), Mt(e) }, Nt.prototype.values = function() { var e = []; return this.forEach((function(t) { e.push(t) })), Mt(e) }, Nt.prototype.entries = function() { var e = []; return this.forEach((function(t, n) { e.push([n, t]) })), Mt(e) }, Et && (Nt.prototype[Symbol.iterator] = Nt.prototype.entries);
    var zt = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function $t(e, t) { if (!(this instanceof $t)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.'); var n, r, o = (t = t || {}).body; if (e instanceof $t) { if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Nt(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0) } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new Nt(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), zt.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests"); if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) { var i = /([?&])_=[^&]*/; if (i.test(this.url)) this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
            else { this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime() } } }

    function Ht(e) { var t = new FormData; return e.trim().split("&").forEach((function(e) { if (e) { var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o)) } })), t }

    function Wt(e, t) { if (!(this instanceof Wt)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new Nt(t.headers), this.url = t.url || "", this._initBody(e) }
    $t.prototype.clone = function() { return new $t(this, { body: this._bodyInit }) }, Ft.call($t.prototype), Ft.call(Wt.prototype), Wt.prototype.clone = function() { return new Wt(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new Nt(this.headers), url: this.url }) }, Wt.error = function() { var e = new Wt(null, { status: 0, statusText: "" }); return e.type = "error", e };
    var Vt = [301, 302, 303, 307, 308];
    Wt.redirect = function(e, t) { if (-1 === Vt.indexOf(t)) throw new RangeError("Invalid status code"); return new Wt(null, { status: t, headers: { location: e } }) };
    var qt = St.DOMException;
    try { new qt } catch (e) {
        (qt = function(e, t) { this.message = e, this.name = t; var n = Error(e);
            this.stack = n.stack }).prototype = Object.create(Error.prototype), qt.prototype.constructor = qt }

    function Gt(e, t) { return new Promise((function(n, r) { var o = new $t(e, t); if (o.signal && o.signal.aborted) return r(new qt("Aborted", "AbortError")); var i = new XMLHttpRequest;

            function s() { i.abort() }
            i.onload = function() { var e, t, r = { status: i.status, statusText: i.statusText, headers: (e = i.getAllResponseHeaders() || "", t = new Nt, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) { return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e })).forEach((function(e) { var n = e.split(":"),
                            r = n.shift().trim(); if (r) { var o = n.join(":").trim();
                            t.append(r, o) } })), t) };
                r.url = "responseURL" in i ? i.responseURL : r.headers.get("X-Request-URL"); var o = "response" in i ? i.response : i.responseText;
                setTimeout((function() { n(new Wt(o, r)) }), 0) }, i.onerror = function() { setTimeout((function() { r(new TypeError("Network request failed")) }), 0) }, i.ontimeout = function() { setTimeout((function() { r(new TypeError("Network request failed")) }), 0) }, i.onabort = function() { setTimeout((function() { r(new qt("Aborted", "AbortError")) }), 0) }, i.open(o.method, function(e) { try { return "" === e && St.location.href ? St.location.href : e } catch (t) { return e } }(o.url), !0), "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1), "responseType" in i && (jt ? i.responseType = "blob" : Ct && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (i.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof Nt ? o.headers.forEach((function(e, t) { i.setRequestHeader(t, e) })) : Object.getOwnPropertyNames(t.headers).forEach((function(e) { i.setRequestHeader(e, Bt(t.headers[e])) })), o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() { 4 === i.readyState && o.signal.removeEventListener("abort", s) }), i.send(void 0 === o._bodyInit ? null : o._bodyInit) })) }
    Gt.polyfill = !0, St.fetch || (St.fetch = Gt, St.Headers = Nt, St.Request = $t, St.Response = Wt);
    var Zt = { exports: {} };
    /*!@license
     * UAParser.js v0.7.28
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
     * Licensed under MIT License
     */
    ! function(e, t) {! function(n, r) { var o = "function",
                i = "object",
                s = "string",
                a = "model",
                u = "name",
                l = "type",
                c = "vendor",
                f = "version",
                d = "architecture",
                p = "console",
                h = "mobile",
                y = "tablet",
                m = "smarttv",
                b = "wearable",
                g = "embedded",
                v = { extend: function(e, t) { var n = {}; for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r]; return n }, has: function(e, t) { return typeof e === s && -1 !== t.toLowerCase().indexOf(e.toLowerCase()) }, lowerize: function(e) { return e.toLowerCase() }, major: function(e) { return typeof e === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : r }, trim: function(e, t) { return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), void 0 === t ? e : e.substring(0, 255) } },
                _ = { rgx: function(e, t) { for (var n, s, a, u, l, c, f = 0; f < t.length && !l;) { var d = t[f],
                                p = t[f + 1]; for (n = s = 0; n < d.length && !l;)
                                if (l = d[n++].exec(e))
                                    for (a = 0; a < p.length; a++) c = l[++s], typeof(u = p[a]) === i && u.length > 0 ? 2 == u.length ? typeof u[1] == o ? this[u[0]] = u[1].call(this, c) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== o || u[1].exec && u[1].test ? this[u[0]] = c ? c.replace(u[1], u[2]) : r : this[u[0]] = c ? u[1].call(this, c, u[2]) : r : 4 == u.length && (this[u[0]] = c ? u[3].call(this, c.replace(u[1], u[2])) : r) : this[u] = c || r;
                            f += 2 } }, str: function(e, t) { for (var n in t)
                            if (typeof t[n] === i && t[n].length > 0) { for (var o = 0; o < t[n].length; o++)
                                    if (v.has(t[n][o], e)) return "?" === n ? r : n } else if (v.has(t[n], e)) return "?" === n ? r : n; return e } },
                w = { browser: { oldSafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } }, oldEdge: { version: { .1: "12.", 21: "13.", 31: "14.", 39: "15.", 41: "16.", 42: "17.", 44: "18." } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
                x = { browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [f, [u, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [f, [u, "Edge"]],
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                        [u, f],
                        [/opios[\/\s]+([\w\.]+)/i],
                        [f, [u, "Opera Mini"]],
                        [/\sopr\/([\w\.]+)/i],
                        [f, [u, "Opera"]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [u, f],
                        [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [f, [u, "UCBrowser"]],
                        [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                        [f, [u, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [f, [u, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [f, [u, "Konqueror"]],
                        [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                        [f, [u, "IE"]],
                        [/yabrowser\/([\w\.]+)/i],
                        [f, [u, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 Secure Browser"], f
                        ],
                        [/focus\/([\w\.]+)/i],
                        [f, [u, "Firefox Focus"]],
                        [/opt\/([\w\.]+)/i],
                        [f, [u, "Opera Touch"]],
                        [/coc_coc_browser\/([\w\.]+)/i],
                        [f, [u, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [f, [u, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [f, [u, "Opera Coast"]],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [f, [u, "MIUI Browser"]],
                        [/fxios\/([\w\.-]+)/i],
                        [f, [u, "Firefox"]],
                        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        [
                            [u, "360 Browser"]
                        ],
                        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 Browser"], f
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [u, /_/g, " "], f
                        ],
                        [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                        [u, f],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                        [u],
                        [/;fbav\/([\w\.]+);/i],
                        [f, [u, "Facebook"]],
                        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                        [
                            [u, "Facebook"]
                        ],
                        [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                        [u, f],
                        [/\bgsa\/([\w\.]+)\s.*safari\//i],
                        [f, [u, "GSA"]],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [f, [u, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [u, "Chrome WebView"], f
                        ],
                        [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                        [f, [u, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [u, f],
                        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                        [f, [u, "Mobile Safari"]],
                        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                        [f, u],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [u, [f, _.str, w.browser.oldSafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [u, f],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [u, "Netscape"], f
                        ],
                        [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                        [f, [u, "Firefox Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [u, f]
                    ], cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [d, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [d, v.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [d, "ia32"]
                        ],
                        [/\b(aarch64|armv?8e?l?)\b/i],
                        [
                            [d, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [d, "armhf"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [d, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [d, /ower/, "", v.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [d, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [d, v.lowerize]
                        ]
                    ], device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                        [a, [c, "Samsung"],
                            [l, y]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                        [a, [c, "Samsung"],
                            [l, h]
                        ],
                        [/\((ip(?:hone|od)[\s\w]*);/i],
                        [a, [c, "Apple"],
                            [l, h]
                        ],
                        [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [a, [c, "Apple"],
                            [l, y]
                        ],
                        [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                        [a, [c, "Huawei"],
                            [l, y]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                        [a, [c, "Huawei"],
                            [l, h]
                        ],
                        [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                        [
                            [a, /_/g, " "],
                            [c, "Xiaomi"],
                            [l, h]
                        ],
                        [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                        [
                            [a, /_/g, " "],
                            [c, "Xiaomi"],
                            [l, y]
                        ],
                        [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                        [a, [c, "OPPO"],
                            [l, h]
                        ],
                        [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                        [a, [c, "Vivo"],
                            [l, h]
                        ],
                        [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                        [a, [c, "Realme"],
                            [l, h]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                        [a, [c, "Motorola"],
                            [l, h]
                        ],
                        [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [a, [c, "Motorola"],
                            [l, y]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                        [a, [c, "LG"],
                            [l, y]
                        ],
                        [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                        [a, [c, "LG"],
                            [l, h]
                        ],
                        [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                        [a, [c, "Lenovo"],
                            [l, y]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                        [
                            [a, /_/g, " "],
                            [c, "Nokia"],
                            [l, h]
                        ],
                        [/droid.+;\s(pixel\sc)[\s)]/i],
                        [a, [c, "Google"],
                            [l, y]
                        ],
                        [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                        [a, [c, "Google"],
                            [l, h]
                        ],
                        [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [a, [c, "Sony"],
                            [l, h]
                        ],
                        [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                        [
                            [a, "Xperia Tablet"],
                            [c, "Sony"],
                            [l, y]
                        ],
                        [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                        [a, [c, "OnePlus"],
                            [l, h]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                        [a, [c, "Amazon"],
                            [l, y]
                        ],
                        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                        [
                            [a, "Fire Phone"],
                            [c, "Amazon"],
                            [l, h]
                        ],
                        [/\((playbook);[\w\s\),;-]+(rim)/i],
                        [a, c, [l, y]],
                        [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                        [a, [c, "BlackBerry"],
                            [l, h]
                        ],
                        [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                        [a, [c, "ASUS"],
                            [l, y]
                        ],
                        [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                        [a, [c, "ASUS"],
                            [l, h]
                        ],
                        [/(nexus\s9)/i],
                        [a, [c, "HTC"],
                            [l, y]
                        ],
                        [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [c, [a, /_/g, " "],
                            [l, h]
                        ],
                        [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [a, [c, "Acer"],
                            [l, y]
                        ],
                        [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                        [a, [c, "Meizu"],
                            [l, h]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [c, a, [l, h]],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                        [c, a, [l, y]],
                        [/\s(surface\sduo)\s/i],
                        [a, [c, "Microsoft"],
                            [l, y]
                        ],
                        [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                        [a, [c, "Fairphone"],
                            [l, h]
                        ],
                        [/\s(u304aa)\sbuild/i],
                        [a, [c, "AT&T"],
                            [l, h]
                        ],
                        [/sie-(\w*)/i],
                        [a, [c, "Siemens"],
                            [l, h]
                        ],
                        [/[;\/]\s?(rct\w+)\sbuild/i],
                        [a, [c, "RCA"],
                            [l, y]
                        ],
                        [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                        [a, [c, "Dell"],
                            [l, y]
                        ],
                        [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                        [a, [c, "Verizon"],
                            [l, y]
                        ],
                        [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                        [a, [c, "Barnes & Noble"],
                            [l, y]
                        ],
                        [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                        [a, [c, "NuVision"],
                            [l, y]
                        ],
                        [/;\s(k88)\sbuild/i],
                        [a, [c, "ZTE"],
                            [l, y]
                        ],
                        [/;\s(nx\d{3}j)\sbuild/i],
                        [a, [c, "ZTE"],
                            [l, h]
                        ],
                        [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                        [a, [c, "Swiss"],
                            [l, h]
                        ],
                        [/[;\/]\s?(zur\d{3})\sbuild/i],
                        [a, [c, "Swiss"],
                            [l, y]
                        ],
                        [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                        [a, [c, "Zeki"],
                            [l, y]
                        ],
                        [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                        [
                            [c, "Dragon Touch"], a, [l, y]
                        ],
                        [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                        [a, [c, "Insignia"],
                            [l, y]
                        ],
                        [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                        [a, [c, "NextBook"],
                            [l, y]
                        ],
                        [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                        [
                            [c, "Voice"], a, [l, h]
                        ],
                        [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                        [
                            [c, "LvTel"], a, [l, h]
                        ],
                        [/;\s(ph-1)\s/i],
                        [a, [c, "Essential"],
                            [l, h]
                        ],
                        [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                        [a, [c, "Envizen"],
                            [l, y]
                        ],
                        [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                        [a, [c, "MachSpeed"],
                            [l, y]
                        ],
                        [/[;\/]\s?tu_(1491)\sbuild/i],
                        [a, [c, "Rotor"],
                            [l, y]
                        ],
                        [/(shield[\w\s]+)\sbuild/i],
                        [a, [c, "Nvidia"],
                            [l, y]
                        ],
                        [/(sprint)\s(\w+)/i],
                        [c, a, [l, h]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [a, /\./g, " "],
                            [c, "Microsoft"],
                            [l, h]
                        ],
                        [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [a, [c, "Zebra"],
                            [l, y]
                        ],
                        [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [a, [c, "Zebra"],
                            [l, h]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                        [c, a, [l, p]],
                        [/droid.+;\s(shield)\sbuild/i],
                        [a, [c, "Nvidia"],
                            [l, p]
                        ],
                        [/(playstation\s[345portablevi]+)/i],
                        [a, [c, "Sony"],
                            [l, p]
                        ],
                        [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                        [a, [c, "Microsoft"],
                            [l, p]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [c, [l, m]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [a, /^/, "SmartTV"],
                            [c, "Samsung"],
                            [l, m]
                        ],
                        [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                        [
                            [c, "LG"],
                            [l, m]
                        ],
                        [/(apple)\s?tv/i],
                        [c, [a, "Apple TV"],
                            [l, m]
                        ],
                        [/crkey/i],
                        [
                            [a, "Chromecast"],
                            [c, "Google"],
                            [l, m]
                        ],
                        [/droid.+aft([\w])(\sbuild\/|\))/i],
                        [a, [c, "Amazon"],
                            [l, m]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [a, [c, "Sharp"],
                            [l, m]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [c, v.trim],
                            [a, v.trim],
                            [l, m]
                        ],
                        [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                        [
                            [l, m]
                        ],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [c, a, [l, b]],
                        [/droid.+;\s(glass)\s\d/i],
                        [a, [c, "Google"],
                            [l, b]
                        ],
                        [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                        [a, [c, "Zebra"],
                            [l, b]
                        ],
                        [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                        [c, [l, g]],
                        [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                        [a, [l, h]],
                        [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                        [a, [l, y]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [l, v.lowerize]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [a, [c, "Generic"]],
                        [/(phone)/i],
                        [
                            [l, h]
                        ]
                    ], engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [f, [u, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [f, [u, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [u, f],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [f, u]
                    ], os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [u, f],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                        [u, [f, _.str, w.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [u, "Windows"],
                            [f, _.str, w.os.windows.version]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                        [
                            [f, /_/g, "."],
                            [u, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                        [
                            [u, "Mac OS"],
                            [f, /_/g, "."]
                        ],
                        [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                        [u, f],
                        [/\(bb(10);/i],
                        [f, [u, "BlackBerry"]],
                        [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                        [f, [u, "Symbian"]],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [u, "Firefox OS"]
                        ],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [f, [u, "webOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [f, [u, "Chromecast"]],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [u, "Chromium OS"], f
                        ],
                        [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                        [u, f],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [u, "Solaris"], f
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [u, f]
                    ] },
                k = function(e, t) { if ("object" == typeof e && (t = e, e = r), !(this instanceof k)) return new k(e, t).getResult(); var o = e || (void 0 !== n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                        i = t ? v.extend(x, t) : x; return this.getBrowser = function() { var e = { name: r, version: r }; return _.rgx.call(e, o, i.browser), e.major = v.major(e.version), e }, this.getCPU = function() { var e = { architecture: r }; return _.rgx.call(e, o, i.cpu), e }, this.getDevice = function() { var e = { vendor: r, model: r, type: r }; return _.rgx.call(e, o, i.device), e }, this.getEngine = function() { var e = { name: r, version: r }; return _.rgx.call(e, o, i.engine), e }, this.getOS = function() { var e = { name: r, version: r }; return _.rgx.call(e, o, i.os), e }, this.getResult = function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function() { return o }, this.setUA = function(e) { return o = typeof e === s && e.length > 255 ? v.trim(e, 255) : e, this }, this.setUA(o), this };
            k.VERSION = "0.7.28", k.BROWSER = { NAME: u, MAJOR: "major", VERSION: f }, k.CPU = { ARCHITECTURE: d }, k.DEVICE = { MODEL: a, VENDOR: c, TYPE: l, CONSOLE: p, MOBILE: h, SMARTTV: m, TABLET: y, WEARABLE: b, EMBEDDED: g }, k.ENGINE = { NAME: u, VERSION: f }, k.OS = { NAME: u, VERSION: f }, e.exports && (t = e.exports = k), t.UAParser = k; var S = void 0 !== n && (n.jQuery || n.Zepto); if (S && !S.ua) { var O = new k;
                S.ua = O.getResult(), S.ua.get = function() { return O.getUA() }, S.ua.set = function(e) { O.setUA(e); var t = O.getResult(); for (var n in t) S.ua[n] = t[n] } } }("object" == typeof window ? window : f) }(Zt, Zt.exports);
    var Jt, Yt = Zt.exports,
        Kt = { exports: {} };
    Jt = Kt,
        function(e, t) { Jt.exports = function(e) { var t, n = (e = e || {}).Base64,
                    r = "2.6.4",
                    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    i = function(e) { for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n; return t }(o),
                    s = String.fromCharCode,
                    a = function(e) { if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? s(192 | t >>> 6) + s(128 | 63 & t) : s(224 | t >>> 12 & 15) + s(128 | t >>> 6 & 63) + s(128 | 63 & t); var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320); return s(240 | t >>> 18 & 7) + s(128 | t >>> 12 & 63) + s(128 | t >>> 6 & 63) + s(128 | 63 & t) },
                    u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                    l = function(e) { return e.replace(u, a) },
                    c = function(e) { var t = [0, 2, 1][e.length % 3],
                            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0); return [o.charAt(n >>> 18), o.charAt(n >>> 12 & 63), t >= 2 ? "=" : o.charAt(n >>> 6 & 63), t >= 1 ? "=" : o.charAt(63 & n)].join("") },
                    f = e.btoa && "function" == typeof e.btoa ? function(t) { return e.btoa(t) } : function(e) { if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters."); return e.replace(/[\s\S]{1,3}/g, c) },
                    d = function(e) { return f(l(String(e))) },
                    p = function(e) { return e.replace(/[+\/]/g, (function(e) { return "+" == e ? "-" : "_" })).replace(/=/g, "") },
                    h = function(e, t) { return t ? p(d(e)) : d(e) },
                    y = function(e) { return h(e, !0) };
                e.Uint8Array && (t = function(e, t) { for (var n = "", r = 0, i = e.length; r < i; r += 3) { var s = e[r],
                            a = e[r + 1],
                            u = e[r + 2],
                            l = s << 16 | a << 8 | u;
                        n += o.charAt(l >>> 18) + o.charAt(l >>> 12 & 63) + (void 0 !== a ? o.charAt(l >>> 6 & 63) : "=") + (void 0 !== u ? o.charAt(63 & l) : "=") } return t ? p(n) : n }); var m, b = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                    g = function(e) { switch (e.length) {
                            case 4:
                                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536; return s(55296 + (t >>> 10)) + s(56320 + (1023 & t));
                            case 3:
                                return s((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                            default:
                                return s((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1)) } },
                    v = function(e) { return e.replace(b, g) },
                    _ = function(e) { var t = e.length,
                            n = t % 4,
                            r = (t > 0 ? i[e.charAt(0)] << 18 : 0) | (t > 1 ? i[e.charAt(1)] << 12 : 0) | (t > 2 ? i[e.charAt(2)] << 6 : 0) | (t > 3 ? i[e.charAt(3)] : 0),
                            o = [s(r >>> 16), s(r >>> 8 & 255), s(255 & r)]; return o.length -= [0, 0, 2, 1][n], o.join("") },
                    w = e.atob && "function" == typeof e.atob ? function(t) { return e.atob(t) } : function(e) { return e.replace(/\S{1,4}/g, _) },
                    x = function(e) { return w(String(e).replace(/[^A-Za-z0-9\+\/]/g, "")) },
                    k = function(e) { return v(w(e)) },
                    S = function(e) { return String(e).replace(/[-_]/g, (function(e) { return "-" == e ? "+" : "/" })).replace(/[^A-Za-z0-9\+\/]/g, "") },
                    O = function(e) { return k(S(e)) };
                e.Uint8Array && (m = function(e) { return Uint8Array.from(x(S(e)), (function(e) { return e.charCodeAt(0) })) }); var E = function() { var t = e.Base64; return e.Base64 = n, t }; if (e.Base64 = { VERSION: r, atob: x, btoa: f, fromBase64: O, toBase64: h, utob: l, encode: h, encodeURI: y, btou: v, decode: O, noConflict: E, fromUint8Array: t, toUint8Array: m }, "function" == typeof Object.defineProperty) { var j = function(e) { return { value: e, enumerable: !1, writable: !0, configurable: !0 } };
                    e.Base64.extendString = function() { Object.defineProperty(String.prototype, "fromBase64", j((function() { return O(this) }))), Object.defineProperty(String.prototype, "toBase64", j((function(e) { return h(this, e) }))), Object.defineProperty(String.prototype, "toBase64URI", j((function() { return h(this, !0) }))) } } return e.Meteor && (Base64 = e.Base64), Jt.exports && (Jt.exports.Base64 = e.Base64), { Base64: e.Base64 } }(e) }("undefined" != typeof self ? self : "undefined" != typeof window ? window : f);
    var Xt = "rewarded",
        Qt = "interstitial";

    function en(e) { return !!localStorage.getItem(e) }
    var tn = function(e, t) { if (!en(e)) return t; var n = localStorage.getItem(e); return "true" === n || !0 === n || 1 === n || "1" === n },
        nn = function() { var e = Date.now(); try { return localStorage.setItem(e, e), localStorage.removeItem(e), !0 } catch (e) { return !1 } }(),
        rn = function(e) { localStorage.removeItem(e) },
        on = function(e, t) { localStorage.setItem(e, t) },
        sn = { zIndex: 1010 },
        an = { zIndex: 1100 },
        un = null,
        ln = function() {
            function e() { if (t(this, e), un) return un;
                un = this, this.listeners = {} } return r(e, [{ key: "_getListenerIdx", value: function(e, t, n) { var r, o = this.listeners[e],
                        i = -1; if (!o || 0 === o.length) return i; for (r = 0; r < o.length; r++)
                        if (o[r].callback === t && (!n || n === o[r].scope)) { i = r; break }
                    return i } }, { key: "subscribe", value: function(e, t, n) { var r; if (!e) throw new Error("Event name cannot be null or undefined."); if (!t || "function" != typeof t) throw new Error("Listener must be of type function.");
                    this._getListenerIdx(e, t, n) >= 0 ? console.log(e, n) : (r = { callback: t, scope: n }, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(r)) } }, { key: "unsubscribeScope", value: function(e) { for (var t = Object.keys(this.listeners), n = 0; n < t.length; n++) { for (var r = t[n], o = this.listeners[r], i = 0; i < o.length; i++) o[i].scope === e && (o.splice(i, 1), i--);
                        0 === o.length && delete this.listeners[r] } } }, { key: "broadcast", value: function(e, t) { var n = this.listeners[e];
                    e && this.listeners[e] && ((t = t || {}).name = t.name || e, n.forEach((function(e) { e.callback.call(e.scope, t, e.scope) }))) } }, { key: "printScope", value: function(e) { for (var t = Object.keys(this.listeners), n = 0; n < t.length; n++)
                        for (var r = t[n], o = this.listeners[r], i = 0; i < o.length; i++) o[i].scope === e && console.log(r, e) } }]), e }();
    ! function() {
        function e(n) { t(this, e), this.game = n.game, this.bridge = n.bridge }
        r(e, [{ key: "transform", value: function(e, t) { var n = dt(e); return this.transformValue(n, t) } }, { key: "transformValue", value: function(e, t) { if (function(e) { var t, n; return !1 !== pt(e) && (void 0 === (t = e.constructor) || !1 !== pt(n = t.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf")) }(e) || wt(e))
                    for (var n in e) e[n] = this.transformValue(e[n], t);
                else if (gt(e)) { var r, o = /\{\{(\w+)\}\}/g,
                        i = [];
                    do { if (r = o.exec(e)) { r[0]; var s = r[1],
                                a = this.getMacroKeyValue(s, t);
                            void 0 !== a && i.push({ key: s, value: a }) } } while (r);
                    i.length > 0 && i.forEach((function(t) { e = e.replace(new RegExp("{{" + t.key + "}}", "g"), t.value) })) } return e } }, { key: "getMacroKeyValue", value: function(e, t) { switch (e) {
                    case "CACHEBUSTER":
                        return Date.now();
                    case "GAME_ID":
                        return this.game.gameId;
                    case "GAME_TITLE":
                        return this.game.title;
                    case "COUNTRY_CODE":
                        return this.game.ctry;
                    case "PAGE_URL":
                        return this.bridge.parentURL;
                    case "PAGE_URL_ESC":
                        return encodeURIComponent(this.bridge.parentURL);
                    case "PAGE_URL_ESC_ESC":
                        return encodeURIComponent(encodeURIComponent(this.bridge.parentURL));
                    case "DOMAIN_MATCHED":
                        return this.bridge.domainMatched ? 1 : 0;
                    case "DOMAIN_PARENT":
                        return this.bridge.parentDomain;
                    case "DOMAIN_TOP":
                        return this.bridge.topDomain;
                    case "DEPTH":
                    case "GAME_DEPTH":
                        return this.bridge.depth;
                    default:
                        if (t && xt(t.get)) return t.get(e) } } }]) }(),
    function() {
        function e(n) { t(this, e), this._config = n || {}, this._url = n.url || "https://msgrt.gamedistribution.com/collect", this._topic_counter = {}, this._ua = (new Yt).getResult() }
        r(e, [{ key: "send", value: function(e, t) { if (!this._config.isCoreSDKMode) { var n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    n -= n % 64, r -= r % 64, this._size = "".concat(n, " x ").concat(r); var o = this._topic_counter[e] || 0;
                    this._topic_counter[e] = ++o; var i = { gmid: this._config.gameId, tdmn: this._config.topDomain, domn: this._config.domain, rfrr: this._config.referrer, lthr: this._config.hours, ctry: this._config.country, dpth: this._config.depth, vers: this._config.version, trac: this._config.tracking, whlb: this._config.whitelabel, plat: this._config.platform, tpct: o, args: t, ttle: document.title, size: this._size, brnm: this._ua.browser.name, brmj: this._ua.browser.major, osnm: this._ua.os.name, osvr: this._ua.os.version, dvmd: this._ua.device.model, byld: this._config.byloader, bylv: this._config.byloaderVersion, imgu: this._config.isMasterGameURL, iegu: this._config.isExtHostedGameURL, itgu: this._config.isTokenGameURL, cmpe: !1, host: window.location.hostname }; "undefined" != typeof idhb && void 0 !== idhb.iabCmpExists() && (i.cmpe = idhb.iabCmpExists()); try { i = encodeURIComponent(Kt.exports.Base64.encode(JSON.stringify([i]))), fetch(this._url + "?tp=com.gdsdk.".concat(e, "&ar=").concat(i, "&ts=").concat(Date.now())) } catch (e) {} } } }, { key: "setGameData", value: function(e) { this._gameData = e, this._config.country = e.ctry } }]) }();
    var cn = null;
    ! function() {
        function e(n) { if (t(this, e), cn) return cn;
            cn = this, this.eventBus = new ln, this._sdk = n }
        r(e, [{ key: "start", value: function() { var e = "\n            #gdsdk__console_container {\n                display: flex;\n                box-sizing: border-box;\n                padding: 3px;\n                background: linear-gradient(90deg,#3d1b5d,#5c3997);\n                box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-size: 8px;\n            }\n            #gdsdk__console_container button {\n                flex: 1;\n                background: #44a5ab;\n                padding: 3px 10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 8px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #gdsdk__console_container button:hover {\n                background: #4fb3b9;\n            }\n            #gdsdk__console_container button:active {\n                background: #62bbc0;\n            }\n        ",
                    t = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n); var r = document.body || document.getElementsByTagName("body")[0],
                    o = document.createElement("div");
                o.id = "gdsdk__console", o.style.position = "fixed", o.style.zIndex = an.zIndex, o.style.bottom = "0", o.style.left = "0", o.style.width = "100%", o.innerHTML = '\n            <div id="gdsdk__console_container">\n                <button id="gdsdk__hbgdDebug">Activate hbgd debug</button>\n                <button id="gdsdk__hbgdConfig">Log idhb config</button>\n                \x3c!--\n                <button id="gdsdk__resumeGame">Resume</button>\n                <button id="gdsdk__pauseGame">Pause</button>\n                --\x3e\n                <button id="gdsdk__showLeaderboard">LeaderBoard</button>\n                <button id="gdsdk__showInterstitial">Interstitial</button>\n                <button id="gdsdk__showRewarded">Rewarded</button>\n                \x3c!--\n                <button id="gdsdk__preloadRewarded">Preload rewarded</button>\n                --\x3e\n                <button id="gdsdk__cancel">Cancel</button>\n                <button id="gdsdk__demo">Demo VAST tag</button>\n                <button id="gdsdk__disableMidrollTimer">Disable delay</button>\n                <button id="gdsdk__closeDebug">Close</button>\n            </div>\n        ', r.appendChild(o); var i = document.getElementById("gdsdk__showLeaderboard"),
                    s = document.getElementById("gdsdk__showInterstitial"),
                    a = document.getElementById("gdsdk__showRewarded"),
                    u = document.getElementById("gdsdk__cancel"),
                    l = document.getElementById("gdsdk__demo"),
                    c = document.getElementById("gdsdk__disableMidrollTimer"),
                    f = document.getElementById("gdsdk__hbgdDebug"),
                    d = document.getElementById("gdsdk__hbgdConfig"),
                    p = document.getElementById("gdsdk__closeDebug");
                tn("gd_tag") ? (l.innerHTML = "Revert Vast tag", l.style.background = "#ff8c1c") : (l.innerHTML = "Demo VAST tag", l.style.background = "#44a5ab"), tn("gd_disable_midroll_timer") ? (c.innerHTML = "Revert delay", c.style.background = "#ff8c1c") : (c.innerHTML = "Disable delay", c.style.background = "#44a5ab"), tn("gd_hb_debug") ? (f.innerHTML = "Revert HB Debug", f.style.background = "#ff8c1c") : (f.innerHTML = "HB Debug", f.style.background = "#44a5ab"), i.addEventListener("click", (function() { window.gdsdk.showLeaderBoard().catch((function(e) {})) })), s.addEventListener("click", (function() { window.gdsdk.showAd(Qt).catch((function(e) {})) })), a.addEventListener("click", (function() { window.gdsdk.showAd(Xt).catch((function(e) {})) })), u.addEventListener("click", (function() { window.gdsdk.cancelAd().then((function(e) {})).catch((function(e) {})) })), l.addEventListener("click", (function() { try { tn("gd_tag") ? rn("gd_tag") : on("gd_tag", !0), location.reload() } catch (e) { console.log(e) } })), c.addEventListener("click", (function() { try { tn("gd_disable_midroll_timer") ? rn("gd_disable_midroll_timer") : on("gd_disable_midroll_timer", !0), location.reload() } catch (e) { console.log(e) } })), p.addEventListener("click", (function() { try { tn("gd_debug_ex") ? rn("gd_debug_ex") : on("gd_debug_ex", !0), location.reload() } catch (e) { console.log(e) } })), f.addEventListener("click", (function() { try { tn("gd_hb_debug") ? rn("gd_hb_debug") : on("gd_hb_debug", !0), window.idhb && window.idhb.debug(!(!nn || !tn("gd_hb_debug"))), location.reload() } catch (e) { console.log(e) } })), d.addEventListener("click", (function() { try { var e = window.idhb.getConfig();
                        console.info(e) } catch (e) { console.log(e) } })) } }]) }();
    var fn = { black: "#000", white: "#fff" },
        dn = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", A100: "#ff8a80", A200: "#ff5252", A400: "#ff1744", A700: "#d50000" },
        pn = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", A100: "#ff80ab", A200: "#ff4081", A400: "#f50057", A700: "#c51162" },
        hn = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", A100: "#8c9eff", A200: "#536dfe", A400: "#3d5afe", A700: "#304ffe" },
        yn = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", A100: "#82b1ff", A200: "#448aff", A400: "#2979ff", A700: "#2962ff" },
        mn = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", A100: "#b9f6ca", A200: "#69f0ae", A400: "#00e676", A700: "#00c853" },
        bn = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", A100: "#ffd180", A200: "#ffab40", A400: "#ff9100", A700: "#ff6d00" },
        gn = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#d5d5d5", A200: "#aaaaaa", A400: "#303030", A700: "#616161" };

    function vn() { return vn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, vn.apply(this, arguments) }

    function _n(e) { return e && "object" === s(e) && e.constructor === Object }

    function wn(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { clone: !0 },
            r = n.clone ? vn({}, e) : e; return _n(e) && _n(t) && Object.keys(t).forEach((function(o) { "__proto__" !== o && (_n(t[o]) && o in e ? r[o] = wn(e[o], t[o], n) : r[o] = t[o]) })), r }
    var xn = {},
        kn = "function" == typeof Symbol && Symbol.for,
        Sn = kn ? Symbol.for("react.element") : 60103,
        On = kn ? Symbol.for("react.portal") : 60106,
        En = kn ? Symbol.for("react.fragment") : 60107,
        jn = kn ? Symbol.for("react.strict_mode") : 60108,
        An = kn ? Symbol.for("react.profiler") : 60114,
        Cn = kn ? Symbol.for("react.provider") : 60109,
        Pn = kn ? Symbol.for("react.context") : 60110,
        Rn = kn ? Symbol.for("react.async_mode") : 60111,
        Tn = kn ? Symbol.for("react.concurrent_mode") : 60111,
        Bn = kn ? Symbol.for("react.forward_ref") : 60112,
        Mn = kn ? Symbol.for("react.suspense") : 60113,
        Nn = kn ? Symbol.for("react.suspense_list") : 60120,
        In = kn ? Symbol.for("react.memo") : 60115,
        Ln = kn ? Symbol.for("react.lazy") : 60116,
        Dn = kn ? Symbol.for("react.block") : 60121,
        Un = kn ? Symbol.for("react.fundamental") : 60117,
        Fn = kn ? Symbol.for("react.responder") : 60118,
        zn = kn ? Symbol.for("react.scope") : 60119;
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    function $n(e) { if ("object" == typeof e && null !== e) { var t = e.$$typeof; switch (t) {
                case Sn:
                    switch (e = e.type) {
                        case Rn:
                        case Tn:
                        case En:
                        case An:
                        case jn:
                        case Mn:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case Pn:
                                case Bn:
                                case Ln:
                                case In:
                                case Cn:
                                    return e;
                                default:
                                    return t } }
                case On:
                    return t } } }

    function Hn(e) { return $n(e) === Tn }
    xn.AsyncMode = Rn, xn.ConcurrentMode = Tn, xn.ContextConsumer = Pn, xn.ContextProvider = Cn, xn.Element = Sn, xn.ForwardRef = Bn, xn.Fragment = En, xn.Lazy = Ln, xn.Memo = In, xn.Portal = On, xn.Profiler = An, xn.StrictMode = jn, xn.Suspense = Mn, xn.isAsyncMode = function(e) { return Hn(e) || $n(e) === Rn }, xn.isConcurrentMode = Hn, xn.isContextConsumer = function(e) { return $n(e) === Pn }, xn.isContextProvider = function(e) { return $n(e) === Cn }, xn.isElement = function(e) { return "object" == typeof e && null !== e && e.$$typeof === Sn }, xn.isForwardRef = function(e) { return $n(e) === Bn }, xn.isFragment = function(e) { return $n(e) === En }, xn.isLazy = function(e) { return $n(e) === Ln }, xn.isMemo = function(e) { return $n(e) === In }, xn.isPortal = function(e) { return $n(e) === On }, xn.isProfiler = function(e) { return $n(e) === An }, xn.isStrictMode = function(e) { return $n(e) === jn }, xn.isSuspense = function(e) { return $n(e) === Mn }, xn.isValidElementType = function(e) { return "string" == typeof e || "function" == typeof e || e === En || e === Tn || e === An || e === jn || e === Mn || e === Nn || "object" == typeof e && null !== e && (e.$$typeof === Ln || e.$$typeof === In || e.$$typeof === Cn || e.$$typeof === Pn || e.$$typeof === Bn || e.$$typeof === Un || e.$$typeof === Fn || e.$$typeof === zn || e.$$typeof === Dn) }, xn.typeOf = $n;
    /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
    Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    ! function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; var r = Object.getOwnPropertyNames(t).map((function(e) { return t[e] })); if ("0123456789" !== r.join("")) return !1; var o = {}; return "abcdefghijklmnopqrst".split("").forEach((function(e) { o[e] = e })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("") } catch (e) { return !1 } }() || Object.assign;
    Function.call.bind(Object.prototype.hasOwnProperty);

    function Wn() {}

    function Vn() {}
    Vn.resetWarningCache = Wn;

    function qn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Gn(e) { for (var t = "https://material-ui.com/production-error/?code=" + e, n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified Material-UI error #" + e + "; visit " + t + " for the full message." }

    function Zn(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return Math.min(Math.max(t, e), n) }

    function Jn(e) { if (e.type) return e; if ("#" === e.charAt(0)) return Jn(function(e) { e = e.substr(1); var t = new RegExp(".{1,".concat(e.length >= 6 ? 2 : 1, "}"), "g"),
                n = e.match(t); return n && 1 === n[0].length && (n = n.map((function(e) { return e + e }))), n ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(n.map((function(e, t) { return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3 })).join(", "), ")") : "" }(e)); var t = e.indexOf("("),
            n = e.substring(0, t); if (-1 === ["rgb", "rgba", "hsl", "hsla"].indexOf(n)) throw new Error(Gn(3, e)); var r = e.substring(t + 1, e.length - 1).split(","); return { type: n, values: r = r.map((function(e) { return parseFloat(e) })) } }

    function Yn(e) { var t = e.type,
            n = e.values; return -1 !== t.indexOf("rgb") ? n = n.map((function(e, t) { return t < 3 ? parseInt(e, 10) : e })) : -1 !== t.indexOf("hsl") && (n[1] = "".concat(n[1], "%"), n[2] = "".concat(n[2], "%")), "".concat(t, "(").concat(n.join(", "), ")") }

    function Kn(e) { var t = "hsl" === (e = Jn(e)).type ? Jn(function(e) { var t = (e = Jn(e)).values,
                n = t[0],
                r = t[1] / 100,
                o = t[2] / 100,
                i = r * Math.min(o, 1 - o),
                s = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12; return o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1) },
                a = "rgb",
                u = [Math.round(255 * s(0)), Math.round(255 * s(8)), Math.round(255 * s(4))]; return "hsla" === e.type && (a += "a", u.push(t[3])), Yn({ type: a, values: u }) }(e)).values : e.values; return t = t.map((function(e) { return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4) })), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3)) }

    function Xn(e, t) { if (null == e) return {}; var n, r, o = {},
            i = Object.keys(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o }

    function Qn(e, t) { if (null == e) return {}; var n, r, o = Xn(e, t); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) } return o }! function() {
        function e(e, t, n, r, o, i) { if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) { var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw s.name = "Invariant Violation", s } }

        function t() { return e }
        e.isRequired = e; var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Vn, resetWarningCache: Wn };
        n.PropTypes = n }();
    var er = ["xs", "sm", "md", "lg", "xl"];

    function tr(e) { var t = e.values,
            n = void 0 === t ? { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } : t,
            r = e.unit,
            o = void 0 === r ? "px" : r,
            i = e.step,
            s = void 0 === i ? 5 : i,
            a = Qn(e, ["values", "unit", "step"]);

        function u(e) { var t = "number" == typeof n[e] ? n[e] : e; return "@media (min-width:".concat(t).concat(o, ")") }

        function l(e, t) { var r = er.indexOf(t); return r === er.length - 1 ? u(e) : "@media (min-width:".concat("number" == typeof n[e] ? n[e] : e).concat(o, ") and ") + "(max-width:".concat((-1 !== r && "number" == typeof n[er[r + 1]] ? n[er[r + 1]] : t) - s / 100).concat(o, ")") } return vn({ keys: er, values: n, up: u, down: function(e) { var t = er.indexOf(e) + 1,
                    r = n[er[t]]; return t === er.length ? u("xs") : "@media (max-width:".concat(("number" == typeof r && t > 0 ? r : e) - s / 100).concat(o, ")") }, between: l, only: function(e) { return l(e, e) }, width: function(e) { return n[e] } }, a) }

    function nr(e, t, n) { var r; return vn({ gutters: function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")), vn({ paddingLeft: t(2), paddingRight: t(2) }, n, qn({}, e.up("sm"), vn({ paddingLeft: t(3), paddingRight: t(3) }, n[e.up("sm")]))) }, toolbar: (r = { minHeight: 56 }, qn(r, "".concat(e.up("xs"), " and (orientation: landscape)"), { minHeight: 48 }), qn(r, e.up("sm"), { minHeight: 64 }), r) }, n) }
    var rr = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)", hint: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: fn.white, default: gn[50] }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: .04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: .08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: .38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: .12, activatedOpacity: .12 } },
        or = { text: { primary: fn.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", hint: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: gn[800], default: "#303030" }, action: { active: fn.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: .08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: .16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: .38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: .12, activatedOpacity: .24 } };

    function ir(e, t, n, r) { var o = r.light || r,
            i = r.dark || 1.5 * r;
        e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = function(e, t) { if (e = Jn(e), t = Zn(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t;
            else if (-1 !== e.type.indexOf("rgb"))
                for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t; return Yn(e) }(e.main, o) : "dark" === t && (e.dark = function(e, t) { if (e = Jn(e), t = Zn(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t;
            else if (-1 !== e.type.indexOf("rgb"))
                for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t; return Yn(e) }(e.main, i))) }

    function sr(e) { var t = e.primary,
            n = void 0 === t ? { light: hn[300], main: hn[500], dark: hn[700] } : t,
            r = e.secondary,
            o = void 0 === r ? { light: pn.A200, main: pn.A400, dark: pn.A700 } : r,
            i = e.error,
            s = void 0 === i ? { light: dn[300], main: dn[500], dark: dn[700] } : i,
            a = e.warning,
            u = void 0 === a ? { light: bn[300], main: bn[500], dark: bn[700] } : a,
            l = e.info,
            c = void 0 === l ? { light: yn[300], main: yn[500], dark: yn[700] } : l,
            f = e.success,
            d = void 0 === f ? { light: mn[300], main: mn[500], dark: mn[700] } : f,
            p = e.type,
            h = void 0 === p ? "light" : p,
            y = e.contrastThreshold,
            m = void 0 === y ? 3 : y,
            b = e.tonalOffset,
            g = void 0 === b ? .2 : b,
            v = Qn(e, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);

        function _(e) { var t = function(e, t) { var n = Kn(e),
                    r = Kn(t); return (Math.max(n, r) + .05) / (Math.min(n, r) + .05) }(e, or.text.primary) >= m ? or.text.primary : rr.text.primary; return t } var w = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 700; if (!(e = vn({}, e)).main && e[t] && (e.main = e[t]), !e.main) throw new Error(Gn(4, t)); if ("string" != typeof e.main) throw new Error(Gn(5, JSON.stringify(e.main))); return ir(e, "light", n, g), ir(e, "dark", r, g), e.contrastText || (e.contrastText = _(e.main)), e },
            x = { dark: or, light: rr }; return wn(vn({ common: fn, type: h, primary: w(n), secondary: w(o, "A400", "A200", "A700"), error: w(s), warning: w(u), info: w(c), success: w(d), grey: gn, contrastThreshold: m, getContrastText: _, augmentColor: w, tonalOffset: g }, x[h]), v) }

    function ar(e) { return Math.round(1e5 * e) / 1e5 }

    function ur(e) { return ar(e) }
    var lr = { textTransform: "uppercase" },
        cr = '"Roboto", "Helvetica", "Arial", sans-serif';

    function fr(e, t) { var n = "function" == typeof t ? t(e) : t,
            r = n.fontFamily,
            o = void 0 === r ? cr : r,
            i = n.fontSize,
            s = void 0 === i ? 14 : i,
            a = n.fontWeightLight,
            u = void 0 === a ? 300 : a,
            l = n.fontWeightRegular,
            c = void 0 === l ? 400 : l,
            f = n.fontWeightMedium,
            d = void 0 === f ? 500 : f,
            p = n.fontWeightBold,
            h = void 0 === p ? 700 : p,
            y = n.htmlFontSize,
            m = void 0 === y ? 16 : y,
            b = n.allVariants,
            g = n.pxToRem,
            v = Qn(n, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]),
            _ = s / 14,
            w = g || function(e) { return "".concat(e / m * _, "rem") },
            x = function(e, t, n, r, i) { return vn({ fontFamily: o, fontWeight: e, fontSize: w(t), lineHeight: n }, o === cr ? { letterSpacing: "".concat(ar(r / t), "em") } : {}, i, b) },
            k = { h1: x(u, 96, 1.167, -1.5), h2: x(u, 60, 1.2, -.5), h3: x(c, 48, 1.167, 0), h4: x(c, 34, 1.235, .25), h5: x(c, 24, 1.334, 0), h6: x(d, 20, 1.6, .15), subtitle1: x(c, 16, 1.75, .15), subtitle2: x(d, 14, 1.57, .1), body1: x(c, 16, 1.5, .15), body2: x(c, 14, 1.43, .15), button: x(d, 14, 1.75, .4, lr), caption: x(c, 12, 1.66, .4), overline: x(c, 12, 2.66, 1, lr) }; return wn(vn({ htmlFontSize: m, pxToRem: w, round: ur, fontFamily: o, fontSize: s, fontWeightLight: u, fontWeightRegular: c, fontWeightMedium: d, fontWeightBold: h }, k), v, { clone: !1 }) }

    function dr() { return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(.2, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(.14, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(.12, ")")].join(",") }
    var pr = ["none", dr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), dr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), dr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), dr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), dr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), dr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), dr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), dr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), dr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), dr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), dr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), dr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), dr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), dr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), dr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), dr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), dr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), dr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), dr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), dr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), dr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), dr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), dr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), dr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
        hr = { borderRadius: 4 };

    function yr(e, t) {
        (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r }

    function mr(e, t) { if (e) { if ("string" == typeof e) return yr(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yr(e, t) : void 0 } }

    function br(e) { return function(e) { if (Array.isArray(e)) return yr(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || mr(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function gr(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != n) { var r, o, i = [],
                    s = !0,
                    a = !1; try { for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0); } catch (e) { a = !0, o = e } finally { try { s || null == n.return || n.return() } finally { if (a) throw o } } return i } }(e, t) || mr(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function vr(e) { var t = e.spacing || 8; return "number" == typeof t ? function(e) { return t * e } : Array.isArray(t) ? function(e) { return t[e] } : "function" == typeof t ? t : function() {} }

    function _r() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8; if (e.mui) return e; var t = vr({ spacing: e }),
            n = function() { for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return 0 === n.length ? t(1) : 1 === n.length ? t(n[0]) : n.map((function(e) { if ("string" == typeof e) return e; var n = t(e); return "number" == typeof n ? "".concat(n, "px") : n })).join(" ") }; return Object.defineProperty(n, "unit", { get: function() { return e } }), n.mui = !0, n }
    var wr = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" },
        xr = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };

    function kr(e) { return "".concat(Math.round(e), "ms") }
    var Sr = { easing: wr, duration: xr, create: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["all"],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.duration,
                    r = void 0 === n ? xr.standard : n,
                    o = t.easing,
                    i = void 0 === o ? wr.easeInOut : o,
                    s = t.delay,
                    a = void 0 === s ? 0 : s; return Qn(t, ["duration", "easing", "delay"]), (Array.isArray(e) ? e : [e]).map((function(e) { return "".concat(e, " ").concat("string" == typeof r ? r : kr(r), " ").concat(i, " ").concat("string" == typeof a ? a : kr(a)) })).join(",") }, getAutoHeightDuration: function(e) { if (!e) return 0; var t = e / 36; return Math.round(10 * (4 + 15 * Math.pow(t, .25) + t / 5)) } },
        Or = { mobileStepper: 1e3, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };

    function Er() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.breakpoints, n = void 0 === t ? {} : t, r = e.mixins, o = void 0 === r ? {} : r, i = e.palette, s = void 0 === i ? {} : i, a = e.spacing, u = e.typography, l = void 0 === u ? {} : u, c = Qn(e, ["breakpoints", "mixins", "palette", "spacing", "typography"]), f = sr(s), d = tr(n), p = _r(a), h = wn({ breakpoints: d, direction: "ltr", mixins: nr(d, p, o), overrides: {}, palette: f, props: {}, shadows: pr, typography: fr(f, l), spacing: p, shape: hr, transitions: Sr, zIndex: Or }, c), y = arguments.length, m = new Array(y > 1 ? y - 1 : 0), b = 1; b < y; b++) m[b - 1] = arguments[b]; return h = m.reduce((function(e, t) { return wn(e, t) }), h) }
    var jr = "function" == typeof Symbol && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__",
        Ar = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];

    function Cr(e) { var t = e.theme,
            n = e.name,
            r = e.props; if (!t || !t.props || !t.props[n]) return r; var o, i = t.props[n]; for (o in i) void 0 === r[o] && (r[o] = i[o]); return r }
    var Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Rr = "object" === ("undefined" == typeof window ? "undefined" : Pr(window)) && "object" === ("undefined" == typeof document ? "undefined" : Pr(document)) && 9 === document.nodeType;

    function Tr(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t) }
    var Br = {}.constructor;

    function Mr(e) { if (null == e || "object" != typeof e) return e; if (Array.isArray(e)) return e.map(Mr); if (e.constructor !== Br) return e; var t = {}; for (var n in e) t[n] = Mr(e[n]); return t }

    function Nr(e, t, n) { void 0 === e && (e = "unnamed"); var r = n.jss,
            o = Mr(t),
            i = r.plugins.onCreateRule(e, o, n); return i || (e[0], null) }
    var Ir = function(e, t) { for (var n = "", r = 0; r < e.length && "!important" !== e[r]; r++) n && (n += t), n += e[r]; return n },
        Lr = function(e, t) { if (void 0 === t && (t = !1), !Array.isArray(e)) return e; var n = ""; if (Array.isArray(e[0]))
                for (var r = 0; r < e.length && "!important" !== e[r]; r++) n && (n += ", "), n += Ir(e[r], " ");
            else n = Ir(e, ", "); return t || "!important" !== e[e.length - 1] || (n += " !important"), n };

    function Dr(e) { return e && !1 === e.format ? { linebreak: "", space: "" } : { linebreak: "\n", space: " " } }

    function Ur(e, t) { for (var n = "", r = 0; r < t; r++) n += "  "; return n + e }

    function Fr(e, t, n) { void 0 === n && (n = {}); var r = ""; if (!t) return r; var o = n.indent,
            i = void 0 === o ? 0 : o,
            s = t.fallbacks;!1 === n.format && (i = -1 / 0); var a = Dr(n),
            u = a.linebreak,
            l = a.space; if (e && i++, s)
            if (Array.isArray(s))
                for (var c = 0; c < s.length; c++) { var f = s[c]; for (var d in f) { var p = f[d];
                        null != p && (r && (r += u), r += Ur(d + ":" + l + Lr(p) + ";", i)) } } else
                    for (var h in s) { var y = s[h];
                        null != y && (r && (r += u), r += Ur(h + ":" + l + Lr(y) + ";", i)) }
            for (var m in t) { var b = t[m];
                null != b && "fallbacks" !== m && (r && (r += u), r += Ur(m + ":" + l + Lr(b) + ";", i)) }
        return (r || n.allowEmpty) && e ? (r && (r = "" + u + r + u), Ur("" + e + l + "{" + r, --i) + Ur("}", i)) : r }
    var zr = /([[\].#*$><+~=|^:(),"'`\s])/g,
        $r = "undefined" != typeof CSS && CSS.escape,
        Hr = function(e) { return $r ? $r(e) : e.replace(zr, "\\$1") },
        Wr = function() {
            function e(e, t, n) { this.type = "style", this.isProcessed = !1; var r = n.sheet,
                    o = n.Renderer;
                this.key = e, this.options = n, this.style = t, r ? this.renderer = r.renderer : o && (this.renderer = new o) } return e.prototype.prop = function(e, t, n) { if (void 0 === t) return this.style[e]; var r = !!n && n.force; if (!r && this.style[e] === t) return this; var o = t;
                n && !1 === n.process || (o = this.options.jss.plugins.onChangeValue(t, e, this)); var i = null == o || !1 === o,
                    s = e in this.style; if (i && !s && !r) return this; var a = i && s; if (a ? delete this.style[e] : this.style[e] = o, this.renderable && this.renderer) return a ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, o), this; var u = this.options.sheet; return u && u.attached, this }, e }(),
        Vr = function(e) {
            function t(t, n, r) { var o;
                o = e.call(this, t, n, r) || this; var i = r.selector,
                    s = r.scoped,
                    u = r.sheet,
                    l = r.generateId; return i ? o.selectorText = i : !1 !== s && (o.id = l(a(a(o)), u), o.selectorText = "." + Hr(o.id)), o }
            Tr(t, e); var n = t.prototype; return n.applyTo = function(e) { var t = this.renderer; if (t) { var n = this.toJSON(); for (var r in n) t.setProperty(e, r, n[r]) } return this }, n.toJSON = function() { var e = {}; for (var t in this.style) { var n = this.style[t]; "object" != typeof n ? e[t] = n : Array.isArray(n) && (e[t] = Lr(n)) } return e }, n.toString = function(e) { var t = this.options.sheet,
                    n = !!t && t.options.link ? vn({}, e, { allowEmpty: !0 }) : e; return Fr(this.selectorText, this.style, n) }, r(t, [{ key: "selector", set: function(e) { if (e !== this.selectorText) { this.selectorText = e; var t = this.renderer,
                            n = this.renderable; if (n && t) t.setSelector(n, e) || t.replaceRule(n, this) } }, get: function() { return this.selectorText } }]), t }(Wr),
        qr = { onCreateRule: function(e, t, n) { return "@" === e[0] || n.parent && "keyframes" === n.parent.type ? null : new Vr(e, t, n) } },
        Gr = { indent: 1, children: !0 },
        Zr = /@([\w-]+)/,
        Jr = function() {
            function e(e, t, n) { this.type = "conditional", this.isProcessed = !1, this.key = e; var r = e.match(Zr); for (var o in this.at = r ? r[1] : "unknown", this.query = n.name || "@" + this.at, this.options = n, this.rules = new _o(vn({}, n, { parent: this })), t) this.rules.add(o, t[o]);
                this.rules.process() } var t = e.prototype; return t.getRule = function(e) { return this.rules.get(e) }, t.indexOf = function(e) { return this.rules.indexOf(e) }, t.addRule = function(e, t, n) { var r = this.rules.add(e, t, n); return r ? (this.options.jss.plugins.onProcessRule(r), r) : null }, t.toString = function(e) { void 0 === e && (e = Gr); var t = Dr(e).linebreak; if (null == e.indent && (e.indent = Gr.indent), null == e.children && (e.children = Gr.children), !1 === e.children) return this.query + " {}"; var n = this.rules.toString(e); return n ? this.query + " {" + t + n + t + "}" : "" }, e }(),
        Yr = /@media|@supports\s+/,
        Kr = { onCreateRule: function(e, t, n) { return Yr.test(e) ? new Jr(e, t, n) : null } },
        Xr = { indent: 1, children: !0 },
        Qr = /@keyframes\s+([\w-]+)/,
        eo = function() {
            function e(e, t, n) { this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1; var r = e.match(Qr);
                r && r[1] ? this.name = r[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = n; var o = n.scoped,
                    i = n.sheet,
                    s = n.generateId; for (var a in this.id = !1 === o ? this.name : Hr(s(this, i)), this.rules = new _o(vn({}, n, { parent: this })), t) this.rules.add(a, t[a], vn({}, n, { parent: this }));
                this.rules.process() } return e.prototype.toString = function(e) { void 0 === e && (e = Xr); var t = Dr(e).linebreak; if (null == e.indent && (e.indent = Xr.indent), null == e.children && (e.children = Xr.children), !1 === e.children) return this.at + " " + this.id + " {}"; var n = this.rules.toString(e); return n && (n = "" + t + n + t), this.at + " " + this.id + " {" + n + "}" }, e }(),
        to = /@keyframes\s+/,
        no = /\$([\w-]+)/g,
        ro = function(e, t) { return "string" == typeof e ? e.replace(no, (function(e, n) { return n in t ? t[n] : e })) : e },
        oo = function(e, t, n) { var r = e[t],
                o = ro(r, n);
            o !== r && (e[t] = o) },
        io = { onCreateRule: function(e, t, n) { return "string" == typeof e && to.test(e) ? new eo(e, t, n) : null }, onProcessStyle: function(e, t, n) { return "style" === t.type && n ? ("animation-name" in e && oo(e, "animation-name", n.keyframes), "animation" in e && oo(e, "animation", n.keyframes), e) : e }, onChangeValue: function(e, t, n) { var r = n.options.sheet; if (!r) return e; switch (t) {
                    case "animation":
                    case "animation-name":
                        return ro(e, r.keyframes);
                    default:
                        return e } } },
        so = function(e) {
            function t() { return e.apply(this, arguments) || this } return Tr(t, e), t.prototype.toString = function(e) { var t = this.options.sheet,
                    n = !!t && t.options.link ? vn({}, e, { allowEmpty: !0 }) : e; return Fr(this.key, this.style, n) }, t }(Wr),
        ao = { onCreateRule: function(e, t, n) { return n.parent && "keyframes" === n.parent.type ? new so(e, t, n) : null } },
        uo = function() {
            function e(e, t, n) { this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = e, this.style = t, this.options = n } return e.prototype.toString = function(e) { var t = Dr(e).linebreak; if (Array.isArray(this.style)) { for (var n = "", r = 0; r < this.style.length; r++) n += Fr(this.at, this.style[r]), this.style[r + 1] && (n += t); return n } return Fr(this.at, this.style, e) }, e }(),
        lo = /@font-face/,
        co = { onCreateRule: function(e, t, n) { return lo.test(e) ? new uo(e, t, n) : null } },
        fo = function() {
            function e(e, t, n) { this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = e, this.style = t, this.options = n } return e.prototype.toString = function(e) { return Fr(this.key, this.style, e) }, e }(),
        po = { onCreateRule: function(e, t, n) { return "@viewport" === e || "@-ms-viewport" === e ? new fo(e, t, n) : null } },
        ho = function() {
            function e(e, t, n) { this.type = "simple", this.isProcessed = !1, this.key = e, this.value = t, this.options = n } return e.prototype.toString = function(e) { if (Array.isArray(this.value)) { for (var t = "", n = 0; n < this.value.length; n++) t += this.key + " " + this.value[n] + ";", this.value[n + 1] && (t += "\n"); return t } return this.key + " " + this.value + ";" }, e }(),
        yo = { "@charset": !0, "@import": !0, "@namespace": !0 },
        mo = { onCreateRule: function(e, t, n) { return e in yo ? new ho(e, t, n) : null } },
        bo = [qr, Kr, io, ao, co, po, mo],
        go = { process: !0 },
        vo = { force: !0, process: !0 },
        _o = function() {
            function e(e) { this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = e, this.classes = e.classes, this.keyframes = e.keyframes } var t = e.prototype; return t.add = function(e, t, n) { var r = this.options,
                    o = r.parent,
                    i = r.sheet,
                    s = r.jss,
                    a = r.Renderer,
                    u = r.generateId,
                    l = r.scoped,
                    c = vn({ classes: this.classes, parent: o, sheet: i, jss: s, Renderer: a, generateId: u, scoped: l, name: e, keyframes: this.keyframes, selector: void 0 }, n),
                    f = e;
                e in this.raw && (f = e + "-d" + this.counter++), this.raw[f] = t, f in this.classes && (c.selector = "." + Hr(this.classes[f])); var d = Nr(f, t, c); if (!d) return null;
                this.register(d); var p = void 0 === c.index ? this.index.length : c.index; return this.index.splice(p, 0, d), d }, t.get = function(e) { return this.map[e] }, t.remove = function(e) { this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1) }, t.indexOf = function(e) { return this.index.indexOf(e) }, t.process = function() { var e = this.options.jss.plugins;
                this.index.slice(0).forEach(e.onProcessRule, e) }, t.register = function(e) { this.map[e.key] = e, e instanceof Vr ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof eo && this.keyframes && (this.keyframes[e.name] = e.id) }, t.unregister = function(e) { delete this.map[e.key], e instanceof Vr ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof eo && delete this.keyframes[e.name] }, t.update = function() { var e, t, n; if ("string" == typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? (e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], n = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], n = arguments.length <= 1 ? void 0 : arguments[1], e = null), e) this.updateOne(this.map[e], t, n);
                else
                    for (var r = 0; r < this.index.length; r++) this.updateOne(this.index[r], t, n) }, t.updateOne = function(t, n, r) { void 0 === r && (r = go); var o = this.options,
                    i = o.jss.plugins,
                    s = o.sheet; if (t.rules instanceof e) t.rules.update(n, r);
                else { var a = t.style; if (i.onUpdate(n, t, s, r), r.process && a && a !== t.style) { for (var u in i.onProcessStyle(t.style, t, s), t.style) { var l = t.style[u];
                            l !== a[u] && t.prop(u, l, vo) } for (var c in a) { var f = t.style[c],
                                d = a[c];
                            null == f && f !== d && t.prop(c, null, vo) } } } }, t.toString = function(e) { for (var t = "", n = this.options.sheet, r = !!n && n.options.link, o = Dr(e).linebreak, i = 0; i < this.index.length; i++) { var s = this.index[i].toString(e);
                    (s || r) && (t && (t += o), t += s) } return t }, e }(),
        wo = function() {
            function e(e, t) { for (var n in this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = vn({}, t, { sheet: this, parent: this, classes: this.classes, keyframes: this.keyframes }), t.Renderer && (this.renderer = new t.Renderer(this)), this.rules = new _o(this.options), e) this.rules.add(n, e[n]);
                this.rules.process() } var t = e.prototype; return t.attach = function() { return this.attached || (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy()), this }, t.detach = function() { return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this }, t.addRule = function(e, t, n) { var r = this.queue;
                this.attached && !r && (this.queue = []); var o = this.rules.add(e, t, n); return o ? (this.options.jss.plugins.onProcessRule(o), this.attached ? this.deployed ? (r ? r.push(o) : (this.insertRule(o), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0)), o) : o : (this.deployed = !1, o)) : null }, t.insertRule = function(e) { this.renderer && this.renderer.insertRule(e) }, t.addRules = function(e, t) { var n = []; for (var r in e) { var o = this.addRule(r, e[r], t);
                    o && n.push(o) } return n }, t.getRule = function(e) { return this.rules.get(e) }, t.deleteRule = function(e) { var t = "object" == typeof e ? e : this.rules.get(e); return !(!t || this.attached && !t.renderable) && (this.rules.remove(t), !(this.attached && t.renderable && this.renderer) || this.renderer.deleteRule(t.renderable)) }, t.indexOf = function(e) { return this.rules.indexOf(e) }, t.deploy = function() { return this.renderer && this.renderer.deploy(), this.deployed = !0, this }, t.update = function() { var e; return (e = this.rules).update.apply(e, arguments), this }, t.updateOne = function(e, t, n) { return this.rules.updateOne(e, t, n), this }, t.toString = function(e) { return this.rules.toString(e) }, e }(),
        xo = function() {
            function e() { this.plugins = { internal: [], external: [] }, this.registry = {} } var t = e.prototype; return t.onCreateRule = function(e, t, n) { for (var r = 0; r < this.registry.onCreateRule.length; r++) { var o = this.registry.onCreateRule[r](e, t, n); if (o) return o } return null }, t.onProcessRule = function(e) { if (!e.isProcessed) { for (var t = e.options.sheet, n = 0; n < this.registry.onProcessRule.length; n++) this.registry.onProcessRule[n](e, t);
                    e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0 } }, t.onProcessStyle = function(e, t, n) { for (var r = 0; r < this.registry.onProcessStyle.length; r++) t.style = this.registry.onProcessStyle[r](t.style, t, n) }, t.onProcessSheet = function(e) { for (var t = 0; t < this.registry.onProcessSheet.length; t++) this.registry.onProcessSheet[t](e) }, t.onUpdate = function(e, t, n, r) { for (var o = 0; o < this.registry.onUpdate.length; o++) this.registry.onUpdate[o](e, t, n, r) }, t.onChangeValue = function(e, t, n) { for (var r = e, o = 0; o < this.registry.onChangeValue.length; o++) r = this.registry.onChangeValue[o](r, t, n); return r }, t.use = function(e, t) { void 0 === t && (t = { queue: "external" }); var n = this.plugins[t.queue]; - 1 === n.indexOf(e) && (n.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce((function(e, t) { for (var n in t) n in e && e[n].push(t[n]); return e }), { onCreateRule: [], onProcessRule: [], onProcessStyle: [], onProcessSheet: [], onChangeValue: [], onUpdate: [] })) }, e }(),
        ko = function() {
            function e() { this.registry = [] } var t = e.prototype; return t.add = function(e) { var t = this.registry,
                    n = e.options.index; if (-1 === t.indexOf(e))
                    if (0 === t.length || n >= this.index) t.push(e);
                    else
                        for (var r = 0; r < t.length; r++)
                            if (t[r].options.index > n) return void t.splice(r, 0, e) }, t.reset = function() { this.registry = [] }, t.remove = function(e) { var t = this.registry.indexOf(e);
                this.registry.splice(t, 1) }, t.toString = function(e) { for (var t = void 0 === e ? {} : e, n = t.attached, r = Xn(t, ["attached"]), o = Dr(r).linebreak, i = "", s = 0; s < this.registry.length; s++) { var a = this.registry[s];
                    null != n && a.attached !== n || (i && (i += o), i += a.toString(r)) } return i }, r(e, [{ key: "index", get: function() { return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index } }]), e }(),
        So = new ko,
        Oo = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
        Eo = "2f1acc6c3a606b082e5eef5e54414ffb";
    null == Oo[Eo] && (Oo[Eo] = 0);
    var jo = Oo[Eo]++,
        Ao = function(e) { void 0 === e && (e = {}); var t = 0; return function(n, r) { t += 1; var o = "",
                    i = ""; return r && (r.options.classNamePrefix && (i = r.options.classNamePrefix), null != r.options.jss.id && (o = String(r.options.jss.id))), e.minify ? "" + (i || "c") + jo + o + t : i + n.key + "-" + jo + (o ? "-" + o : "") + "-" + t } },
        Co = function(e) { var t; return function() { return t || (t = e()), t } },
        Po = function(e, t) { try { return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t) } catch (e) { return "" } },
        Ro = function(e, t, n) { try { var r = n; if (Array.isArray(n) && (r = Lr(n, !0), "!important" === n[n.length - 1])) return e.style.setProperty(t, r, "important"), !0;
                e.attributeStyleMap ? e.attributeStyleMap.set(t, r) : e.style.setProperty(t, r) } catch (e) { return !1 } return !0 },
        To = function(e, t) { try { e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t) } catch (e) {} },
        Bo = function(e, t) { return e.selectorText = t, e.selectorText === t },
        Mo = Co((function() { return document.querySelector("head") }));

    function No(e) { var t = So.registry; if (t.length > 0) { var n = function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n]; if (r.attached && r.options.index > t.index && r.options.insertionPoint === t.insertionPoint) return r } return null }(t, e); if (n && n.renderer) return { parent: n.renderer.element.parentNode, node: n.renderer.element }; if (n = function(e, t) { for (var n = e.length - 1; n >= 0; n--) { var r = e[n]; if (r.attached && r.options.insertionPoint === t.insertionPoint) return r } return null }(t, e), n && n.renderer) return { parent: n.renderer.element.parentNode, node: n.renderer.element.nextSibling } } var r = e.insertionPoint; if (r && "string" == typeof r) { var o = function(e) { for (var t = Mo(), n = 0; n < t.childNodes.length; n++) { var r = t.childNodes[n]; if (8 === r.nodeType && r.nodeValue.trim() === e) return r } return null }(r); if (o) return { parent: o.parentNode, node: o.nextSibling } } return !1 }
    var Io = Co((function() { var e = document.querySelector('meta[property="csp-nonce"]'); return e ? e.getAttribute("content") : null })),
        Lo = function(e, t, n) { try { "insertRule" in e ? e.insertRule(t, n) : "appendRule" in e && e.appendRule(t) } catch (e) { return !1 } return e.cssRules[n] },
        Do = function(e, t) { var n = e.cssRules.length; return void 0 === t || t > n ? n : t },
        Uo = function() {
            function e(e) { this.getPropertyValue = Po, this.setProperty = Ro, this.removeProperty = To, this.setSelector = Bo, this.hasInsertedRules = !1, this.cssRules = [], e && So.add(e), this.sheet = e; var t = this.sheet ? this.sheet.options : {},
                    n = t.media,
                    r = t.meta,
                    o = t.element;
                this.element = o || function() { var e = document.createElement("style"); return e.textContent = "\n", e }(), this.element.setAttribute("data-jss", ""), n && this.element.setAttribute("media", n), r && this.element.setAttribute("data-meta", r); var i = Io();
                i && this.element.setAttribute("nonce", i) } var t = e.prototype; return t.attach = function() { if (!this.element.parentNode && this.sheet) {! function(e, t) { var n = t.insertionPoint,
                            r = No(t); if (!1 !== r && r.parent) r.parent.insertBefore(e, r.node);
                        else if (n && "number" == typeof n.nodeType) { var o = n,
                                i = o.parentNode;
                            i && i.insertBefore(e, o.nextSibling) } else Mo().appendChild(e) }(this.element, this.sheet.options); var e = Boolean(this.sheet && this.sheet.deployed);
                    this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy()) } }, t.detach = function() { if (this.sheet) { var e = this.element.parentNode;
                    e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = "\n") } }, t.deploy = function() { var e = this.sheet;
                e && (e.options.link ? this.insertRules(e.rules) : this.element.textContent = "\n" + e.toString() + "\n") }, t.insertRules = function(e, t) { for (var n = 0; n < e.index.length; n++) this.insertRule(e.index[n], n, t) }, t.insertRule = function(e, t, n) { if (void 0 === n && (n = this.element.sheet), e.rules) { var r = e,
                        o = n; if ("conditional" === e.type || "keyframes" === e.type) { var i = Do(n, t); if (!1 === (o = Lo(n, r.toString({ children: !1 }), i))) return !1;
                        this.refCssRule(e, i, o) } return this.insertRules(r.rules, o), o } var s = e.toString(); if (!s) return !1; var a = Do(n, t),
                    u = Lo(n, s, a); return !1 !== u && (this.hasInsertedRules = !0, this.refCssRule(e, a, u), u) }, t.refCssRule = function(e, t, n) { e.renderable = n, e.options.parent instanceof wo && (this.cssRules[t] = n) }, t.deleteRule = function(e) { var t = this.element.sheet,
                    n = this.indexOf(e); return -1 !== n && (t.deleteRule(n), this.cssRules.splice(n, 1), !0) }, t.indexOf = function(e) { return this.cssRules.indexOf(e) }, t.replaceRule = function(e, t) { var n = this.indexOf(e); return -1 !== n && (this.element.sheet.deleteRule(n), this.cssRules.splice(n, 1), this.insertRule(t, n)) }, t.getRules = function() { return this.element.sheet.cssRules }, e }(),
        Fo = 0,
        zo = function() {
            function e(e) { this.id = Fo++, this.version = "10.8.0", this.plugins = new xo, this.options = { id: { minify: !1 }, createGenerateId: Ao, Renderer: Rr ? Uo : null, plugins: [] }, this.generateId = Ao({ minify: !1 }); for (var t = 0; t < bo.length; t++) this.plugins.use(bo[t], { queue: "internal" });
                this.setup(e) } var t = e.prototype; return t.setup = function(e) { return void 0 === e && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = vn({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), null != e.insertionPoint && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this }, t.createStyleSheet = function(e, t) { void 0 === t && (t = {}); var n = t.index; "number" != typeof n && (n = 0 === So.index ? 0 : So.index + 1); var r = new wo(e, vn({}, t, { jss: this, generateId: t.generateId || this.generateId, insertionPoint: this.options.insertionPoint, Renderer: this.options.Renderer, index: n })); return this.plugins.onProcessSheet(r), r }, t.removeStyleSheet = function(e) { return e.detach(), So.remove(e), this }, t.createRule = function(e, t, n) { if (void 0 === t && (t = {}), void 0 === n && (n = {}), "object" == typeof e) return this.createRule(void 0, e, t); var r = vn({}, n, { name: e, jss: this, Renderer: this.options.Renderer });
                r.generateId || (r.generateId = this.generateId), r.classes || (r.classes = {}), r.keyframes || (r.keyframes = {}); var o = Nr(e, t, r); return o && this.plugins.onProcessRule(o), o }, t.use = function() { for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return n.forEach((function(t) { e.plugins.use(t) })), this }, e }(),
        $o = function(e) { return new zo(e) },
        Ho = "object" == typeof CSS && null != CSS && "number" in CSS;

    function Wo(e) { var t = null; for (var n in e) { var r = e[n],
                o = typeof r; if ("function" === o) t || (t = {}), t[n] = r;
            else if ("object" === o && null !== r && !Array.isArray(r)) { var i = Wo(r);
                i && (t || (t = {}), t[n] = i) } } return t }
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */
    $o();
    var Vo = Date.now(),
        qo = "fnValues" + Vo,
        Go = "fnStyle" + ++Vo,
        Zo = function() { return { onCreateRule: function(e, t, n) { if ("function" != typeof t) return null; var r = Nr(e, {}, n); return r[Go] = t, r }, onProcessStyle: function(e, t) { if (qo in t || Go in t) return e; var n = {}; for (var r in e) { var o = e[r]; "function" == typeof o && (delete e[r], n[r] = o) } return t[qo] = n, e }, onUpdate: function(e, t, n, r) { var o = t,
                        i = o[Go];
                    i && (o.style = i(e) || {}); var s = o[qo]; if (s)
                        for (var a in s) o.prop(a, s[a](e), r) } } },
        Jo = "@global",
        Yo = "@global ",
        Ko = function() {
            function e(e, t, n) { for (var r in this.type = "global", this.at = Jo, this.isProcessed = !1, this.key = e, this.options = n, this.rules = new _o(vn({}, n, { parent: this })), t) this.rules.add(r, t[r]);
                this.rules.process() } var t = e.prototype; return t.getRule = function(e) { return this.rules.get(e) }, t.addRule = function(e, t, n) { var r = this.rules.add(e, t, n); return r && this.options.jss.plugins.onProcessRule(r), r }, t.indexOf = function(e) { return this.rules.indexOf(e) }, t.toString = function() { return this.rules.toString() }, e }(),
        Xo = function() {
            function e(e, t, n) { this.type = "global", this.at = Jo, this.isProcessed = !1, this.key = e, this.options = n; var r = e.substr(Yo.length);
                this.rule = n.jss.createRule(r, t, vn({}, n, { parent: this })) } return e.prototype.toString = function(e) { return this.rule ? this.rule.toString(e) : "" }, e }(),
        Qo = /\s*,\s*/g;

    function ei(e, t) { for (var n = e.split(Qo), r = "", o = 0; o < n.length; o++) r += t + " " + n[o].trim(), n[o + 1] && (r += ", "); return r }

    function ti() { return { onCreateRule: function(e, t, n) { if (!e) return null; if (e === Jo) return new Ko(e, t, n); if ("@" === e[0] && e.substr(0, Yo.length) === Yo) return new Xo(e, t, n); var r = n.parent; return r && ("global" === r.type || r.options.parent && "global" === r.options.parent.type) && (n.scoped = !1), !1 === n.scoped && (n.selector = e), null }, onProcessRule: function(e, t) { "style" === e.type && t && (function(e, t) { var n = e.options,
                        r = e.style,
                        o = r ? r[Jo] : null; if (o) { for (var i in o) t.addRule(i, o[i], vn({}, n, { selector: ei(i, e.selector) }));
                        delete r[Jo] } }(e, t), function(e, t) { var n = e.options,
                        r = e.style; for (var o in r)
                        if ("@" === o[0] && o.substr(0, Jo.length) === Jo) { var i = ei(o.substr(Jo.length), e.selector);
                            t.addRule(i, r[o], vn({}, n, { selector: i })), delete r[o] } }(e, t)) } } }
    var ni = /\s*,\s*/g,
        ri = /&/g,
        oi = /\$([\w-]+)/g;

    function ii() {
        function e(e, t) { return function(n, r) { var o = e.getRule(r) || t && t.getRule(r); return o ? o.selector : r } }

        function t(e, t) { for (var n = t.split(ni), r = e.split(ni), o = "", i = 0; i < n.length; i++)
                for (var s = n[i], a = 0; a < r.length; a++) { var u = r[a];
                    o && (o += ", "), o += -1 !== u.indexOf("&") ? u.replace(ri, s) : s + " " + u }
            return o }

        function n(e, t, n) { if (n) return vn({}, n, { index: n.index + 1 }); var r = e.options.nestingLevel;
            r = void 0 === r ? 1 : r + 1; var o = vn({}, e.options, { nestingLevel: r, index: t.indexOf(e) + 1 }); return delete o.name, o } return { onProcessStyle: function(r, o, i) { if ("style" !== o.type) return r; var s, a, u = o,
                    l = u.options.parent; for (var c in r) { var f = -1 !== c.indexOf("&"),
                        d = "@" === c[0]; if (f || d) { if (s = n(u, l, s), f) { var p = t(c, u.selector);
                            a || (a = e(l, i)), p = p.replace(oi, a), l.addRule(p, r[c], vn({}, s, { selector: p })) } else d && l.addRule(c, {}, s).addRule(u.key, r[c], { selector: u.selector });
                        delete r[c] } } return r } } }
    var si = /[A-Z]/g,
        ai = /^ms-/,
        ui = {};

    function li(e) { return "-" + e.toLowerCase() }

    function ci(e) { if (ui.hasOwnProperty(e)) return ui[e]; var t = e.replace(si, li); return ui[e] = ai.test(t) ? "-" + t : t }

    function fi(e) { var t = {}; for (var n in e) { t[0 === n.indexOf("--") ? n : ci(n)] = e[n] } return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(fi) : t.fallbacks = fi(e.fallbacks)), t }
    var di = Ho && CSS ? CSS.px : "px",
        pi = Ho && CSS ? CSS.ms : "ms",
        hi = Ho && CSS ? CSS.percent : "%";

    function yi(e) { var t = /(-[a-z])/g,
            n = function(e) { return e[1].toUpperCase() },
            r = {}; for (var o in e) r[o] = e[o], r[o.replace(t, n)] = e[o]; return r }
    var mi = yi({ "animation-delay": pi, "animation-duration": pi, "background-position": di, "background-position-x": di, "background-position-y": di, "background-size": di, border: di, "border-bottom": di, "border-bottom-left-radius": di, "border-bottom-right-radius": di, "border-bottom-width": di, "border-left": di, "border-left-width": di, "border-radius": di, "border-right": di, "border-right-width": di, "border-top": di, "border-top-left-radius": di, "border-top-right-radius": di, "border-top-width": di, "border-width": di, "border-block": di, "border-block-end": di, "border-block-end-width": di, "border-block-start": di, "border-block-start-width": di, "border-block-width": di, "border-inline": di, "border-inline-end": di, "border-inline-end-width": di, "border-inline-start": di, "border-inline-start-width": di, "border-inline-width": di, "border-start-start-radius": di, "border-start-end-radius": di, "border-end-start-radius": di, "border-end-end-radius": di, margin: di, "margin-bottom": di, "margin-left": di, "margin-right": di, "margin-top": di, "margin-block": di, "margin-block-end": di, "margin-block-start": di, "margin-inline": di, "margin-inline-end": di, "margin-inline-start": di, padding: di, "padding-bottom": di, "padding-left": di, "padding-right": di, "padding-top": di, "padding-block": di, "padding-block-end": di, "padding-block-start": di, "padding-inline": di, "padding-inline-end": di, "padding-inline-start": di, "mask-position-x": di, "mask-position-y": di, "mask-size": di, height: di, width: di, "min-height": di, "max-height": di, "min-width": di, "max-width": di, bottom: di, left: di, top: di, right: di, inset: di, "inset-block": di, "inset-block-end": di, "inset-block-start": di, "inset-inline": di, "inset-inline-end": di, "inset-inline-start": di, "box-shadow": di, "text-shadow": di, "column-gap": di, "column-rule": di, "column-rule-width": di, "column-width": di, "font-size": di, "font-size-delta": di, "letter-spacing": di, "text-decoration-thickness": di, "text-indent": di, "text-stroke": di, "text-stroke-width": di, "word-spacing": di, motion: di, "motion-offset": di, outline: di, "outline-offset": di, "outline-width": di, perspective: di, "perspective-origin-x": hi, "perspective-origin-y": hi, "transform-origin": hi, "transform-origin-x": hi, "transform-origin-y": hi, "transform-origin-z": hi, "transition-delay": pi, "transition-duration": pi, "vertical-align": di, "flex-basis": di, "shape-margin": di, size: di, gap: di, grid: di, "grid-gap": di, "row-gap": di, "grid-row-gap": di, "grid-column-gap": di, "grid-template-rows": di, "grid-template-columns": di, "grid-auto-rows": di, "grid-auto-columns": di, "box-shadow-x": di, "box-shadow-y": di, "box-shadow-blur": di, "box-shadow-spread": di, "font-line-height": di, "text-shadow-x": di, "text-shadow-y": di, "text-shadow-blur": di });

    function bi(e, t, n) { if (null == t) return t; if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) t[r] = bi(e, t[r], n);
        else if ("object" == typeof t)
            if ("fallbacks" === e)
                for (var o in t) t[o] = bi(o, t[o], n);
            else
                for (var i in t) t[i] = bi(e + "-" + i, t[i], n);
        else if ("number" == typeof t && !1 === isNaN(t)) { var s = n[e] || mi[e]; return !s || 0 === t && s === di ? t.toString() : "function" == typeof s ? s(t).toString() : "" + t + s } return t }

    function gi(e) { void 0 === e && (e = {}); var t = yi(e); return { onProcessStyle: function(e, n) { if ("style" !== n.type) return e; for (var r in e) e[r] = bi(r, e[r], t); return e }, onChangeValue: function(e, n) { return bi(n, e, t) } } }
    var vi = "",
        _i = "",
        wi = "",
        xi = "",
        ki = Rr && "ontouchstart" in document.documentElement;
    if (Rr) { var Si = { Moz: "-moz-", ms: "-ms-", O: "-o-", Webkit: "-webkit-" },
            Oi = document.createElement("p").style; for (var Ei in Si)
            if (Ei + "Transform" in Oi) { vi = Ei, _i = Si[Ei]; break }
            "Webkit" === vi && "msHyphens" in Oi && (vi = "ms", _i = Si.ms, xi = "edge"), "Webkit" === vi && "-apple-trailing-word" in Oi && (wi = "apple") }
    var ji = vi,
        Ai = _i,
        Ci = wi,
        Pi = xi,
        Ri = ki;
    var Ti = { noPrefill: ["appearance"], supportedProperty: function(e) { return "appearance" === e && ("ms" === ji ? "-webkit-" + e : Ai + e) } },
        Bi = { noPrefill: ["color-adjust"], supportedProperty: function(e) { return "color-adjust" === e && ("Webkit" === ji ? Ai + "print-" + e : e) } },
        Mi = /[-\s]+(.)?/g;

    function Ni(e, t) { return t ? t.toUpperCase() : "" }

    function Ii(e) { return e.replace(Mi, Ni) }

    function Li(e) { return Ii("-" + e) }
    var Di, Ui = { noPrefill: ["mask"], supportedProperty: function(e, t) { if (!/^mask/.test(e)) return !1; if ("Webkit" === ji) { var n = "mask-image"; if (Ii(n) in t) return e; if (ji + Li(n) in t) return Ai + e } return e } },
        Fi = { noPrefill: ["text-orientation"], supportedProperty: function(e) { return "text-orientation" === e && ("apple" !== Ci || Ri ? e : Ai + e) } },
        zi = { noPrefill: ["transform"], supportedProperty: function(e, t, n) { return "transform" === e && (n.transform ? e : Ai + e) } },
        $i = { noPrefill: ["transition"], supportedProperty: function(e, t, n) { return "transition" === e && (n.transition ? e : Ai + e) } },
        Hi = { noPrefill: ["writing-mode"], supportedProperty: function(e) { return "writing-mode" === e && ("Webkit" === ji || "ms" === ji && "edge" !== Pi ? Ai + e : e) } },
        Wi = { noPrefill: ["user-select"], supportedProperty: function(e) { return "user-select" === e && ("Moz" === ji || "ms" === ji || "apple" === Ci ? Ai + e : e) } },
        Vi = { supportedProperty: function(e, t) { return !!/^break-/.test(e) && ("Webkit" === ji ? "WebkitColumn" + Li(e) in t && Ai + "column-" + e : "Moz" === ji && ("page" + Li(e) in t && "page-" + e)) } },
        qi = { supportedProperty: function(e, t) { if (!/^(border|margin|padding)-inline/.test(e)) return !1; if ("Moz" === ji) return e; var n = e.replace("-inline", ""); return ji + Li(n) in t && Ai + n } },
        Gi = { supportedProperty: function(e, t) { return Ii(e) in t && e } },
        Zi = { supportedProperty: function(e, t) { var n = Li(e); return "-" === e[0] || "-" === e[0] && "-" === e[1] ? e : ji + n in t ? Ai + e : "Webkit" !== ji && "Webkit" + n in t && "-webkit-" + e } },
        Ji = { supportedProperty: function(e) { return "scroll-snap" === e.substring(0, 11) && ("ms" === ji ? "" + Ai + e : e) } },
        Yi = { supportedProperty: function(e) { return "overscroll-behavior" === e && ("ms" === ji ? Ai + "scroll-chaining" : e) } },
        Ki = { "flex-grow": "flex-positive", "flex-shrink": "flex-negative", "flex-basis": "flex-preferred-size", "justify-content": "flex-pack", order: "flex-order", "align-items": "flex-align", "align-content": "flex-line-pack" },
        Xi = { supportedProperty: function(e, t) { var n = Ki[e]; return !!n && (ji + Li(n) in t && Ai + n) } },
        Qi = { flex: "box-flex", "flex-grow": "box-flex", "flex-direction": ["box-orient", "box-direction"], order: "box-ordinal-group", "align-items": "box-align", "flex-flow": ["box-orient", "box-direction"], "justify-content": "box-pack" },
        es = Object.keys(Qi),
        ts = function(e) { return Ai + e },
        ns = { supportedProperty: function(e, t, n) { var r = n.multiple; if (es.indexOf(e) > -1) { var o = Qi[e]; if (!Array.isArray(o)) return ji + Li(o) in t && Ai + o; if (!r) return !1; for (var i = 0; i < o.length; i++)
                        if (!(ji + Li(o[0]) in t)) return !1;
                    return o.map(ts) } return !1 } },
        rs = [Ti, Bi, Ui, Fi, zi, $i, Hi, Wi, Vi, qi, Gi, Zi, Ji, Yi, Xi, ns],
        os = rs.filter((function(e) { return e.supportedProperty })).map((function(e) { return e.supportedProperty })),
        is = rs.filter((function(e) { return e.noPrefill })).reduce((function(e, t) { return e.push.apply(e, br(t.noPrefill)), e }), []),
        ss = {};
    if (Rr) { Di = document.createElement("p"); var as = window.getComputedStyle(document.documentElement, ""); for (var us in as) isNaN(us) || (ss[as[us]] = as[us]);
        is.forEach((function(e) { return delete ss[e] })) }

    function ls(e, t) { if (void 0 === t && (t = {}), !Di) return e; if (null != ss[e]) return ss[e]; "transition" !== e && "transform" !== e || (t[e] = e in Di.style); for (var n = 0; n < os.length && (ss[e] = os[n](e, Di.style, t), !ss[e]); n++); try { Di.style[e] = "" } catch (e) { return !1 } return ss[e] }
    var cs, fs = {},
        ds = { transition: 1, "transition-property": 1, "-webkit-transition": 1, "-webkit-transition-property": 1 },
        ps = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;

    function hs(e, t, n) { if ("var" === t) return "var"; if ("all" === t) return "all"; if ("all" === n) return ", all"; var r = t ? ls(t) : ", " + ls(n); return r || (t || n) }

    function ys(e, t) { var n = t; if (!cs || "content" === e) return t; if ("string" != typeof n || !isNaN(parseInt(n, 10))) return n; var r = e + n; if (null != fs[r]) return fs[r]; try { cs.style[e] = n } catch (e) { return fs[r] = !1, !1 } if (ds[e]) n = n.replace(ps, hs);
        else if ("" === cs.style[e] && ("-ms-flex" === (n = Ai + n) && (cs.style[e] = "-ms-flexbox"), cs.style[e] = n, "" === cs.style[e])) return fs[r] = !1, !1; return cs.style[e] = "", fs[r] = n, fs[r] }

    function ms() {
        function e(t) { for (var n in t) { var r = t[n]; if ("fallbacks" === n && Array.isArray(r)) t[n] = r.map(e);
                else { var o = !1,
                        i = ls(n);
                    i && i !== n && (o = !0); var s = !1,
                        a = ys(i, Lr(r));
                    a && a !== r && (s = !0), (o || s) && (o && delete t[n], t[i || n] = a || r) } } return t } return { onProcessRule: function(e) { if ("keyframes" === e.type) { var t = e;
                    t.at = function(e) { return "-" === e[1] || "ms" === ji ? e : "@" + Ai + "keyframes" + e.substr(10) }(t.at) } }, onProcessStyle: function(t, n) { return "style" !== n.type ? t : e(t) }, onChangeValue: function(e, t) { return ys(t, Lr(e)) || e } } }

    function bs() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.baseClasses,
            n = e.newClasses; if (e.Component, !n) return t; var r = vn({}, t); return Object.keys(n).forEach((function(e) { n[e] && (r[e] = "".concat(t[e], " ").concat(n[e])) })), r }
    Rr && (cs = document.createElement("p"));
    var gs = { set: function(e, t, n, r) { var o = e.get(t);
                o || (o = new Map, e.set(t, o)), o.set(n, r) }, get: function(e, t, n) { var r = e.get(t); return r ? r.get(n) : void 0 }, delete: function(e, t, n) { e.get(t).delete(n) } },
        vs = gs,
        _s = st.createContext(null);

    function ws() { return st.useContext(_s) }
    var xs, ks = $o({ plugins: [Zo(), ti(), ii(), { onProcessStyle: function(e) { if (Array.isArray(e)) { for (var t = 0; t < e.length; t++) e[t] = fi(e[t]); return e } return fi(e) }, onChangeValue: function(e, t, n) { if (0 === t.indexOf("--")) return e; var r = ci(t); return t === r ? e : (n.prop(r, e), null) } }, gi(), "undefined" == typeof window ? null : ms(), (xs = function(e, t) { return e.length === t.length ? e > t ? 1 : -1 : e.length - t.length }, { onProcessStyle: function(e, t) { if ("style" !== t.type) return e; for (var n = {}, r = Object.keys(e).sort(xs), o = 0; o < r.length; o++) n[r[o]] = e[r[o]]; return n } })] }),
        Ss = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.disableGlobal,
                n = void 0 !== t && t,
                r = e.productionPrefix,
                o = void 0 === r ? "jss" : r,
                i = e.seed,
                s = void 0 === i ? "" : i,
                a = "" === s ? "" : "".concat(s, "-"),
                u = 0,
                l = function() { return u += 1 }; return function(e, t) { var r = t.options.name; if (r && 0 === r.indexOf("Mui") && !t.options.link && !n) { if (-1 !== Ar.indexOf(e.key)) return "Mui-".concat(e.key); var i = "".concat(a).concat(r, "-").concat(e.key); return t.options.theme[jr] && "" === s ? "".concat(i, "-").concat(l()) : i } return "".concat(a).concat(o).concat(l()) } }(),
        Os = { disableGeneration: !1, generateClassName: Ss, jss: ks, sheetsCache: null, sheetsManager: new Map, sheetsRegistry: null },
        Es = st.createContext(Os),
        js = -1e9;

    function As() { return js += 1 }
    var Cs = {};

    function Ps(e) { var t = "function" == typeof e; return { create: function(n, r) { var o; try { o = t ? e(n) : e } catch (e) { throw e } if (!r || !n.overrides || !n.overrides[r]) return o; var i = n.overrides[r],
                    s = vn({}, o); return Object.keys(i).forEach((function(e) { s[e] = wn(s[e], i[e]) })), s }, options: {} } }

    function Rs(e, t, n) { var r = e.state; if (e.stylesOptions.disableGeneration) return t || {};
        r.cacheClasses || (r.cacheClasses = { value: null, lastProp: null, lastJSS: {} }); var o = !1; return r.classes !== r.cacheClasses.lastJSS && (r.cacheClasses.lastJSS = r.classes, o = !0), t !== r.cacheClasses.lastProp && (r.cacheClasses.lastProp = t, o = !0), o && (r.cacheClasses.value = bs({ baseClasses: r.cacheClasses.lastJSS, newClasses: t, Component: n })), r.cacheClasses.value }

    function Ts(e, t) { var n = e.state,
            r = e.theme,
            o = e.stylesOptions,
            i = e.stylesCreator,
            s = e.name; if (!o.disableGeneration) { var a = vs.get(o.sheetsManager, i, r);
            a || (a = { refs: 0, staticSheet: null, dynamicStyles: null }, vs.set(o.sheetsManager, i, r, a)); var u = vn({}, i.options, o, { theme: r, flip: "boolean" == typeof o.flip ? o.flip : "rtl" === r.direction });
            u.generateId = u.serverGenerateClassName || u.generateClassName; var l = o.sheetsRegistry; if (0 === a.refs) { var c;
                o.sheetsCache && (c = vs.get(o.sheetsCache, i, r)); var f = i.create(r, s);
                c || ((c = o.jss.createStyleSheet(f, vn({ link: !1 }, u))).attach(), o.sheetsCache && vs.set(o.sheetsCache, i, r, c)), l && l.add(c), a.staticSheet = c, a.dynamicStyles = Wo(f) } if (a.dynamicStyles) { var d = o.jss.createStyleSheet(a.dynamicStyles, vn({ link: !0 }, u));
                d.update(t), d.attach(), n.dynamicSheet = d, n.classes = bs({ baseClasses: a.staticSheet.classes, newClasses: d.classes }), l && l.add(d) } else n.classes = a.staticSheet.classes;
            a.refs += 1 } }

    function Bs(e, t) { var n = e.state;
        n.dynamicSheet && n.dynamicSheet.update(t) }

    function Ms(e) { var t = e.state,
            n = e.theme,
            r = e.stylesOptions,
            o = e.stylesCreator; if (!r.disableGeneration) { var i = vs.get(r.sheetsManager, o, n);
            i.refs -= 1; var s = r.sheetsRegistry;
            0 === i.refs && (vs.delete(r.sheetsManager, o, n), r.jss.removeStyleSheet(i.staticSheet), s && s.remove(i.staticSheet)), t.dynamicSheet && (r.jss.removeStyleSheet(t.dynamicSheet), s && s.remove(t.dynamicSheet)) } }

    function Ns(e, t) { var n, r = st.useRef([]),
            o = st.useMemo((function() { return {} }), t);
        r.current !== o && (r.current = o, n = e()), st.useEffect((function() { return function() { n && n() } }), [o]) }

    function Is(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.name,
            r = t.classNamePrefix,
            o = t.Component,
            i = t.defaultTheme,
            s = void 0 === i ? Cs : i,
            a = Qn(t, ["name", "classNamePrefix", "Component", "defaultTheme"]),
            u = Ps(e),
            l = n || r || "makeStyles";
        u.options = { index: As(), name: n, meta: l, classNamePrefix: l }; var c = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = ws() || s,
                r = vn({}, st.useContext(Es), a),
                i = st.useRef(),
                l = st.useRef();
            Ns((function() { var o = { name: n, state: {}, stylesCreator: u, stylesOptions: r, theme: t }; return Ts(o, e), l.current = !1, i.current = o,
                    function() { Ms(o) } }), [t, u]), st.useEffect((function() { l.current && Bs(i.current, e), l.current = !0 })); var c = Rs(i.current, e.classes, o); return c }; return c }
    var Ls = { exports: {} },
        Ds = {},
        Us = "function" == typeof Symbol && Symbol.for,
        Fs = Us ? Symbol.for("react.element") : 60103,
        zs = Us ? Symbol.for("react.portal") : 60106,
        $s = Us ? Symbol.for("react.fragment") : 60107,
        Hs = Us ? Symbol.for("react.strict_mode") : 60108,
        Ws = Us ? Symbol.for("react.profiler") : 60114,
        Vs = Us ? Symbol.for("react.provider") : 60109,
        qs = Us ? Symbol.for("react.context") : 60110,
        Gs = Us ? Symbol.for("react.async_mode") : 60111,
        Zs = Us ? Symbol.for("react.concurrent_mode") : 60111,
        Js = Us ? Symbol.for("react.forward_ref") : 60112,
        Ys = Us ? Symbol.for("react.suspense") : 60113,
        Ks = Us ? Symbol.for("react.suspense_list") : 60120,
        Xs = Us ? Symbol.for("react.memo") : 60115,
        Qs = Us ? Symbol.for("react.lazy") : 60116,
        ea = Us ? Symbol.for("react.block") : 60121,
        ta = Us ? Symbol.for("react.fundamental") : 60117,
        na = Us ? Symbol.for("react.responder") : 60118,
        ra = Us ? Symbol.for("react.scope") : 60119;

    function oa(e) { if ("object" == typeof e && null !== e) { var t = e.$$typeof; switch (t) {
                case Fs:
                    switch (e = e.type) {
                        case Gs:
                        case Zs:
                        case $s:
                        case Ws:
                        case Hs:
                        case Ys:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case qs:
                                case Js:
                                case Qs:
                                case Xs:
                                case Vs:
                                    return e;
                                default:
                                    return t } }
                case zs:
                    return t } } }

    function ia(e) { return oa(e) === Zs }
    Ds.AsyncMode = Gs, Ds.ConcurrentMode = Zs, Ds.ContextConsumer = qs, Ds.ContextProvider = Vs, Ds.Element = Fs, Ds.ForwardRef = Js, Ds.Fragment = $s, Ds.Lazy = Qs, Ds.Memo = Xs, Ds.Portal = zs, Ds.Profiler = Ws, Ds.StrictMode = Hs, Ds.Suspense = Ys, Ds.isAsyncMode = function(e) { return ia(e) || oa(e) === Gs }, Ds.isConcurrentMode = ia, Ds.isContextConsumer = function(e) { return oa(e) === qs }, Ds.isContextProvider = function(e) { return oa(e) === Vs }, Ds.isElement = function(e) { return "object" == typeof e && null !== e && e.$$typeof === Fs }, Ds.isForwardRef = function(e) { return oa(e) === Js }, Ds.isFragment = function(e) { return oa(e) === $s }, Ds.isLazy = function(e) { return oa(e) === Qs }, Ds.isMemo = function(e) { return oa(e) === Xs }, Ds.isPortal = function(e) { return oa(e) === zs }, Ds.isProfiler = function(e) { return oa(e) === Ws }, Ds.isStrictMode = function(e) { return oa(e) === Hs }, Ds.isSuspense = function(e) { return oa(e) === Ys }, Ds.isValidElementType = function(e) { return "string" == typeof e || "function" == typeof e || e === $s || e === Zs || e === Ws || e === Hs || e === Ys || e === Ks || "object" == typeof e && null !== e && (e.$$typeof === Qs || e.$$typeof === Xs || e.$$typeof === Vs || e.$$typeof === qs || e.$$typeof === Js || e.$$typeof === ta || e.$$typeof === na || e.$$typeof === ra || e.$$typeof === ea) }, Ds.typeOf = oa, Ls.exports = Ds;
    var sa = Ls.exports,
        aa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
        ua = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        la = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        ca = {};

    function fa(e) { return sa.isMemo(e) ? la : ca[e.$$typeof] || aa }
    ca[sa.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ca[sa.Memo] = la;
    var da = Object.defineProperty,
        pa = Object.getOwnPropertyNames,
        ha = Object.getOwnPropertySymbols,
        ya = Object.getOwnPropertyDescriptor,
        ma = Object.getPrototypeOf,
        ba = Object.prototype;
    var ga = function e(t, n, r) { if ("string" != typeof n) { if (ba) { var o = ma(n);
                o && o !== ba && e(t, o, r) } var i = pa(n);
            ha && (i = i.concat(ha(n))); for (var s = fa(t), a = fa(n), u = 0; u < i.length; ++u) { var l = i[u]; if (!(ua[l] || r && r[l] || a && a[l] || s && s[l])) { var c = ya(n, l); try { da(t, l, c) } catch (e) {} } } } return t };

    function va(e) { var t = e.children,
            n = e.theme,
            r = ws(),
            o = st.useMemo((function() { var e = null === r ? n : function(e, t) { return "function" == typeof t ? t(e) : vn({}, e, t) }(r, n); return null != e && (e[jr] = null !== r), e }), [n, r]); return st.createElement(_s.Provider, { value: o }, t) }
    var _a = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return function(n) { var r = t.defaultTheme,
                    o = t.withTheme,
                    i = void 0 !== o && o,
                    s = t.name,
                    a = Qn(t, ["defaultTheme", "withTheme", "name"]),
                    u = s,
                    l = Is(e, vn({ defaultTheme: r, Component: n, name: s || n.displayName, classNamePrefix: u }, a)),
                    c = st.forwardRef((function(e, t) { e.classes; var o, a = e.innerRef,
                            u = Qn(e, ["classes", "innerRef"]),
                            c = l(vn({}, n.defaultProps, e)),
                            f = u; return ("string" == typeof s || i) && (o = ws() || r, s && (f = Cr({ theme: o, name: s, props: u })), i && !f.theme && (f.theme = o)), st.createElement(n, vn({ ref: a || t, classes: c }, f)) })); return ga(c, n), c } },
        wa = Er();
    var xa = { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box" },
        ka = function(e) { return vn({ color: e.palette.text.primary }, e.typography.body2, { backgroundColor: e.palette.background.default, "@media print": { backgroundColor: e.palette.common.white } }) };
    var Sa, Oa = (Sa = function(e) { return { "@global": { html: xa, "*, *::before, *::after": { boxSizing: "inherit" }, "strong, b": { fontWeight: e.typography.fontWeightBold }, body: vn({ margin: 0 }, ka(e), { "&::backdrop": { backgroundColor: e.palette.background.default } }) } } }, _a(Sa, vn({ defaultTheme: wa }, { name: "MuiCssBaseline" })))((function(e) { var t = e.children,
                n = void 0 === t ? null : t; return e.classes, F($, null, n) })),
        Ea = { typography: { fontFamily: ["Poppins", "Roboto"].join(",") }, borderRadius: "4px", collection_card: { base: "yy--col-base-200", item: "atratio atr-16-9 position-relative d-flex align-items-center overflow-hidden m-1 rounded athover ath-0 ath-b-2", slide: "hd" }, palette: { background: { default: "#070812", paper: "#303030" }, primary: { main: "#1e88e5", contrastText: "#eee" }, secondary: { main: "#E50914", contrastText: "#eee" }, navbar: { bottomBorder: "#0085ff" }, mobileNavbar: { text: { primary: "#fff", active: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } }, settings: { text: { title: "#ffffff", selected: "#00aeff", description: "#858da6" }, background: { container: "#0d121e", popup: "#151b2b", openContainer: "#141a27", header: "linear-gradient(93deg, #0088ff 21%, #d4ff63 100%)", separator: "#303749" }, chartColors: [] } }, payment: { erroPanel: { tryAgainButton: "#ffffff", tryAgainText: "#0e131f" }, confirm: "#6dd400", error: "#e02020", background: { card: "#0d121e", popup: "rgba(0,0,0,0.85)", activeButton: "#fff", disabledButton: "#0d121e" }, text: { primary: "rgba(255, 255, 255, 0.85)", active: "#fff", activeButton: "#0d121e", disabledButton: "#fff" }, shadow: { card: "0 0 15px rgba(21, 27, 43, .5)" }, shapes: { line: "#fff", circle: "#fff", star: "#fff" }, scroll: { track: "#3c4255", thumb: "linear-gradient(to bottom, #1b1e2d, #0d101a 99%)", thumbBorder: "#3c4255", thumbHover: "#000" } } };

    function ja(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }
    var Aa = function(e) { return Object.keys(e).forEach((function(t) {! function e(t, n, r) { "object" === s(t) ? (n[r] || (n[r] = {}), Object.keys(t).forEach((function(o) { e(t[o], n[r], o) }))) : n[r] || (n[r] = t) }(Ea[t], e, t) })), Object.keys(Ea).filter((function(t) { return !Object.keys(e).includes(t) })).forEach((function(t) { e[t] = function(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ja(Object(n), !0).forEach((function(t) { qn(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }({}, Ea[t]) })), e }({ borderRadius: "4px", bannedGames: { width: 144, height: 81, ratio: "16x9" }, palette: { text: { primary: "#eee", secondary: "#eee" }, background: { default: "#141414", paper: "#303030" }, primary: { main: "#1e88e5", contrastText: "#eee" }, secondary: { main: "#E50914", contrastText: "#eee" }, mobileNavbar: { text: { primary: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } } }, overrides: { MuiSwitch: { track: { backgroundColor: "rgba(255,255,255,0.2)" } }, MuiInputBase: { root: { backgroundColor: "rgba(255,255,255,0.2)" } }, MuiButton: { containedPrimary: qn({}, "@media (pointer:coarse)", { "&:hover": { backgroundColor: "#1e88e5" } }) } } });
    Er(Aa);
    var Ca = { typography: { fontFamily: ["Poppins", "Roboto"].join(",") }, borderRadius: "4px", collection_card: { base: "yy--col-base-200", item: "atratio atr-16-9 position-relative d-flex align-items-center overflow-hidden m-1 rounded athover ath-0 ath-b-2", slide: "hd" }, palette: { background: { default: "#070812", paper: "#303030" }, primary: { main: "#1e88e5", contrastText: "#eee" }, secondary: { main: "#E50914", contrastText: "#eee" }, navbar: { bottomBorder: "#0085ff" }, mobileNavbar: { text: { primary: "#fff", active: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } }, settings: { text: { title: "#ffffff", selected: "#00aeff", description: "#858da6" }, background: { container: "#0d121e", popup: "#151b2b", openContainer: "#141a27", header: "linear-gradient(93deg, #0088ff 21%, #d4ff63 100%)", separator: "#303749" }, chartColors: [] } }, payment: { erroPanel: { tryAgainButton: "#ffffff", tryAgainText: "#0e131f" }, confirm: "#6dd400", error: "#e02020", background: { card: "#0d121e", popup: "rgba(0,0,0,0.85)", activeButton: "#fff", disabledButton: "#0d121e" }, text: { primary: "rgba(255, 255, 255, 0.85)", active: "#fff", activeButton: "#0d121e", disabledButton: "#fff" }, shadow: { card: "0 0 15px rgba(21, 27, 43, .5)" }, shapes: { line: "#fff", circle: "#fff", star: "#fff" }, scroll: { track: "#3c4255", thumb: "linear-gradient(to bottom, #1b1e2d, #0d101a 99%)", thumbBorder: "#3c4255", thumbHover: "#000" } } };

    function Pa(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }
    var Ra = function(e) { return Object.keys(e).forEach((function(t) {! function e(t, n, r) { "object" === s(t) ? (n[r] || (n[r] = {}), Object.keys(t).forEach((function(o) { e(t[o], n[r], o) }))) : n[r] || (n[r] = t) }(Ca[t], e, t) })), Object.keys(Ca).filter((function(t) { return !Object.keys(e).includes(t) })).forEach((function(t) { e[t] = function(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Pa(Object(n), !0).forEach((function(t) { qn(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }({}, Ca[t]) })), e }({ borderRadius: "4px", palette: { text: { primary: "#eee", secondary: "#eee" }, background: { default: "#141414", paper: "#303030" }, primary: { main: "#E50914", contrastText: "#eee" }, secondary: { main: "#1e88e5", contrastText: "#eee" }, mobileNavbar: { text: { primary: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } } }, overrides: { MuiSwitch: { track: { backgroundColor: "rgba(255,255,255,0.2)" } }, MuiInputBase: { root: { backgroundColor: "rgba(255,255,255,0.2)" } }, MuiButton: { containedPrimary: qn({}, "@media (pointer:coarse)", { "&:hover": { backgroundColor: "#E50914" } }) } } }),
        Ta = Er(Ra),
        Ba = { typography: { fontFamily: ["Poppins", "Roboto"].join(",") }, borderRadius: "4px", collection_card: { base: "yy--col-base-200", item: "atratio atr-16-9 position-relative d-flex align-items-center overflow-hidden m-1 rounded athover ath-0 ath-b-2", slide: "hd" }, palette: { background: { default: "#070812", paper: "#303030" }, primary: { main: "#1e88e5", contrastText: "#eee" }, secondary: { main: "#E50914", contrastText: "#eee" }, navbar: { bottomBorder: "#0085ff" }, mobileNavbar: { text: { primary: "#fff", active: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } }, settings: { text: { title: "#ffffff", selected: "#00aeff", description: "#858da6" }, background: { container: "#0d121e", popup: "#151b2b", openContainer: "#141a27", header: "linear-gradient(93deg, #0088ff 21%, #d4ff63 100%)", separator: "#303749" }, chartColors: [] } }, payment: { erroPanel: { tryAgainButton: "#ffffff", tryAgainText: "#0e131f" }, confirm: "#6dd400", error: "#e02020", background: { card: "#0d121e", popup: "rgba(0,0,0,0.85)", activeButton: "#fff", disabledButton: "#0d121e" }, text: { primary: "rgba(255, 255, 255, 0.85)", active: "#fff", activeButton: "#0d121e", disabledButton: "#fff" }, shadow: { card: "0 0 15px rgba(21, 27, 43, .5)" }, shapes: { line: "#fff", circle: "#fff", star: "#fff" }, scroll: { track: "#3c4255", thumb: "linear-gradient(to bottom, #1b1e2d, #0d101a 99%)", thumbBorder: "#3c4255", thumbHover: "#000" } } };

    function Ma(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }
    var Na = function(e) { return Object.keys(e).forEach((function(t) {! function e(t, n, r) { "object" === s(t) ? (n[r] || (n[r] = {}), Object.keys(t).forEach((function(o) { e(t[o], n[r], o) }))) : n[r] || (n[r] = t) }(Ba[t], e, t) })), Object.keys(Ba).filter((function(t) { return !Object.keys(e).includes(t) })).forEach((function(t) { e[t] = function(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ma(Object(n), !0).forEach((function(t) { qn(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ma(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }({}, Ba[t]) })), e }({ borderRadius: "4px", palette: { background: { default: "#eee" }, primary: { main: "#FF6200", contrastText: "#eee" }, secondary: { main: "#0088FF", contrastText: "#eee" }, mobileNavbar: { text: { primary: "#fff" }, background: { activeButton: "#00aeff", container: "linear-gradient(to bottom, #282e41, #0f121c)" } } }, overrides: { MuiSwitch: { track: { backgroundColor: "rgba(0,0,0,0.2)" } }, MuiInputBase: { root: { backgroundColor: "rgba(255,255,255,0.2)" } }, MuiButton: { containedPrimary: qn({}, "@media (pointer: coarse)", { "&:hover": { backgroundColor: "#FF6200" } }) } } });
    Er(Na);
    var Ia = Ta,
        La = function(e) { var t = e.children; return st.createElement(va, { theme: Ia }, st.createElement(Oa, null), t) };

    function Da(e) { var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }(); return function() { var n, r = l(e); if (t) { var o = l(this).constructor;
                n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return u(this, n) } }
    var Ua = function(e) { i(o, e); var n = Da(o);

        function o(e, r, i) { var s; return t(this, o), (s = n.call(this)).options = e, s.gameData = r, s.parentDomain = i, s } return r(o, [{ key: "_init", value: function(e, t, n) { var r = this._insertHtml(),
                    o = r.container,
                    i = r.extContainer;
                this._root = o, this._container = o, this._extContainer = i, st.render(st.createElement(La, null, st.createElement(e, { onReady: n, options: this.options, gameData: this.gameData, parentDomain: this.parentDomain })), this._root), this._registerEvents(t), this.options.event_prefix = t } }, { key: "_insertHtml", value: function() { var e = document.getElementById("".concat(this.options.prefix, "splash"));
                e || ((e = document.createElement("div")).id = "".concat(this.options.prefix, "splash"), e.style["z-index"] = sn.zIndex, e.style.position = "fixed", e.style.width = "100%", e.style.height = "100%", e.style.top = "0", e.style.left = "0"); var t = this._getExtContainer(); if (t) t.style.display = "block", t.insertBefore(e, t.firstChild);
                else { var n = document.body || document.getElementsByTagName("body")[0];
                    n.insertBefore(e, n.firstChild) } return { container: e, extContainer: t } } }, { key: "_registerEvents", value: function(e) { var t = this,
                    n = document.getElementById("".concat(e, "splash-button"));
                n && n.addEventListener("click", (function(e) { t.emit("playClick", e) })); var r = document.getElementById("".concat(e, "splash"));
                r && r.addEventListener("click", (function(e) { t.emit("containerClick", e) })) } }, { key: "_getExtContainer", value: function() { if (this.options.flashSettings.splashContainerId) return document.getElementById(this.options.flashSettings.splashContainerId) } }, { key: "hide", value: function() { var e = this._container,
                    t = this._extContainer;
                e && e.parentNode && e.parentNode.removeChild(e), t && (t.style.display = "none") } }, { key: "getRoot", value: function() { return this._root } }]), o }(M);

    function Fa(e, t, n) { return Fa = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e));); return e }(e, t); if (r) { var o = Object.getOwnPropertyDescriptor(r, t); return o.get ? o.get.call(n) : o.value } }, Fa(e, t, n || e) }
    var za = function(e) { e.gameData; var t = e.children,
            n = ws() || wa; return st.createElement("div", { className: "h-100 d-flex align-items-center" }, st.createElement("div", { className: "mh-100 w-100 overflow-auto p-2" }, st.createElement("div", { className: "container p-0 rounded overflow-hidden", style: { maxWidth: "320px", boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2)" } }, st.createElement("div", { style: { backgroundColor: n.palette.background.paper } }, t)))) };
    ! function(e, t) { void 0 === t && (t = {}); var n = t.insertAt; if (e && "undefined" != typeof document) { var r = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
            o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)) } }("body{position:inherit}.pluto-splash-container{display:flex;flex-direction:column;font-family:Helvetica,Arial,sans-serif;background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab) 0 0/300% 300%;animation:pluto-gradient 60s ease 0s infinite normal none running}.pluto-splash-abstract,.pluto-splash-container{position:absolute;width:100%;height:100%;top:0;left:0}.pluto-splash-top{display:flex;justify-content:center;align-items:center;position:relative;width:100%}.pluto-splash-center{display:flex;flex-grow:1;position:relative;flex-basis:100%;overflow:hidden}.pluto-splash-bottom{width:100%}.pluto-splash-bottom,.pluto-splash-left{display:flex;justify-content:center;align-items:center;position:relative}.pluto-splash-game{display:flex;flex-grow:1;flex-direction:column;flex-basis:100%}.pluto-splash-right{align-items:center}.pluto-splash-game-metadata,.pluto-splash-right{display:flex;position:relative;justify-content:center}.pluto-splash-game-metadata{flex-direction:column;flex-grow:1}.pluto-splash-game-consent{display:flex;justify-content:center;margin:0pluto-5em}.pluto-splash-game-consent>p{text-align:justify;font-size:12px;font-family:Arial;font-weight:400;max-width:300px}.pluto-splash-game-consent>p>a{color:#fff}.pluto-splash-game-thumbnail-play{flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.pluto-splash-game-title{display:flex;justify-content:center;align-items:center;margin:4px;font-size:1pluto-5em;color:#fff}.pluto-splash-game-thumbnail{display:flex;justify-content:center;align-items:flex-end;position:relative;margin:4px}.pluto-splash-game-play{display:flex;justify-content:center;align-items:flex-start;margin:6px}.pluto-splash-game-description{display:flex;justify-content:center;align-items:flex-end;margin:4px;text-align:justify;font-size:14px;font-family:Arial;font-weight:400}.pluto-splash-game-title>p{max-width:300px;padding:8px 24px;text-transform:uppercase;text-align:center;box-sizing:border-box}.pluto-splash-game-description>p{max-width:300px;overflow:auto;max-height:200px}.pluto-splash-game-thumbnail>div{width:150px;height:150px;border-radius:4px;background-position:50%;background-size:cover!;box-shadow:0 1px 2px transparent;border:2px solid hsla(0,0%,100%,.9)}.pluto-splash-game-play>button{padding:8px;border-radius:6px;border:0;text-transform:uppercase;font-weight:700;font-size:24px;cursor:pointer;box-shadow:0 1px 2px transparent;width:150px;background-color:hsla(0,0%,100%,.9)}.pluto-loader,.pluto-loader:after{border-radius:50%;width:1.5em;height:1.5em}.pluto-loader{box-sizing:content-box;margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border:1.1em solid hsla(0,0%,100%,.2);border-left-color:#fff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s linear infinite;animation:load8 1.1s linear infinite;display:none}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media screen and (max-height:600px){.pluto-splash-game-description{display:none}.pluto-splash-game-thumbnail>div{max-width:150px;max-height:150px}}@media screen and (min-width:600px){.pluto-splash-center>.pluto-splash-left,.pluto-splash-center>.pluto-splash-right{display:flex}.pluto-splash-game-consent>p,.pluto-splash-game-description>p,.pluto-splash-game-title>p{max-width:500px}}@media screen and (min-height:600px){.pluto-splash-container>.pluto-splash-bottom,.pluto-splash-container>.pluto-splash-top{display:flex}}@keyframes pluto-gradient{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}");
    var $a = function(e) { var t = gr(we(!1), 2),
            n = t[0],
            r = t[1],
            o = gr(we(""), 2),
            i = o[0];
        o[1]; var s, a = gr(we(""), 2),
            u = a[0],
            l = a[1],
            c = e.gameData,
            f = e.options.isConsentDomain,
            d = e.options.playButton || "PLAY"; if (c.crtv) s = "https://pm.gamedistribution.com/@creative/".concat(c.gameId, "/").concat(c.crtv, "/").concat(150, "x").concat(150, ".jpeg");
        else { var p = c.assets.find((function(e) { return e.hasOwnProperty("name") && 512 === e.width && 512 === e.height }));
            p || (p = c.assets.length > 0 ? c.assets[0] : { name: "logo.svg" }), s = "https://img.gamedistribution.com/".concat(p.name) }
        ke((function() {
            (null == e ? void 0 : e.onReady) && e.onReady() }), []), ke((function() { l(i.primary_paper) }), [i]); var h = { button: { display: "block", background: u, color: "".concat(i.primary_text), border: "2px solid ".concat(i.primary_light) } }; return st.createElement(za, { gameData: c }, st.createElement("div", { className: "pluto-splash-container", style: { color: "".concat(i.primary_text), background: "".concat(i.primary_dark) } }, st.createElement("div", { id: "pluto-splash-abstract", className: "pluto-splash-abstract" }), st.createElement("div", { id: "pluto-splash-slot-top", className: "pluto-splash-top" }), st.createElement("div", { className: "pluto-splash-center" }, st.createElement("div", { id: "pluto-splash-slot-left", className: "pluto-splash-left" }), st.createElement("div", { id: "pluto-splash-game", className: "pluto-splash-game" }, st.createElement("div", { className: "pluto-splash-game-metadata" }, st.createElement("div", { className: "pluto-splash-game-thumbnail-play" }, st.createElement("div", { className: "pluto-splash-game-thumbnail" }, st.createElement("div", { style: { background: "url(".concat(s, ")"), backgroundSize: "cover", border: "2px solid ".concat(i.primary_light) } })), st.createElement("div", { className: "pluto-splash-game-play" }, st.createElement("button", { id: "pluto-splash-button", onClick: function() { r(!n) }, style: n ? { display: "none" } : h.button, onMouseEnter: function() { l(i.primary) }, onMouseLeave: function() { l(i.primary_paper) } }, d), st.createElement("div", { className: "pluto-loader", style: n ? { display: "block", borderLeft: "1.1em solid ".concat(i.primary_text) } : { display: "none" } }, "Loading..."))), st.createElement("div", { className: "pluto-splash-game-title" }, st.createElement("p", { style: { color: "".concat(i.primary_text) } }, c.title)), st.createElement("div", { className: "pluto-splash-game-description" }, st.createElement("p", null, e.options.playButton ? "" : c.description))), st.createElement("div", { className: "pluto-splash-game-consent", style: f ? { display: "flex" } : { display: "none" } }, st.createElement("p", null, 'We may show personalized ads provided by our partners, and our services can not be used by children under 16 years old without the consent of their legal guardian. By clicking "PLAY", you consent to transmit your data to our partners for advertising purposes and declare that you are 16 years old or have the permission of your legal guardian. You can review our terms ', st.createElement("a", { href: "https://static.gamedistribution.com/terms/both.html", target: "_blank", style: { color: "".concat(i.primary_text) } }, "here"), "."))), st.createElement("div", { id: "pluto-splash-slot-right", className: "pluto-splash-right" })), st.createElement("div", { id: "pluto-splash-slot-bottom", className: "pluto-splash-bottom" }))) };

    function Ha(e) { var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }(); return function() { var n, r = l(e); if (t) { var o = l(this).constructor;
                n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return u(this, n) } }
    var Wa = function(e) { i(o, e); var n = Ha(o);

        function o(e, r) { var i; return t(this, o), (i = n.call(this, e, r))._init(), i } return r(o, [{ key: "_init", value: function() { var e = this;
                Fa(l(o.prototype), "_init", this).call(this, $a, "pluto-", (function() { e._init_slots() })), this.on("slotVisibilityChanged", this._on_slot_visibility_changed.bind(this)) } }, { key: "_init_slots", value: function() { var e = document.querySelector(".".concat(this.options.event_prefix, "splash-game-description"));!this.gameData.description && e && (e.style.display = "none"); var t = document.getElementById("".concat(this.options.event_prefix, "splash-slot-top")),
                    n = document.getElementById("".concat(this.options.event_prefix, "splash-slot-bottom")),
                    r = document.getElementById("".concat(this.options.event_prefix, "splash-slot-left")),
                    o = document.getElementById("".concat(this.options.event_prefix, "splash-slot-right")),
                    i = this.gameData.dAds,
                    s = i.enabled,
                    a = s && i.top && i.top.enabled,
                    u = s && i.bottom && i.bottom.enabled,
                    l = s && i.left && i.left.enabled,
                    c = s && i.right && i.right.enabled;
                t && (a ? this._observe_visibility(t) : t.style.display = "none"), n && (u ? this._observe_visibility(n) : n.style.display = "none"), r && (l ? this._observe_visibility(r) : r.style.display = "none"), o && (c ? this._observe_visibility(o) : o.style.display = "none"), this._slots = { top: t, bottom: n, left: r, right: o } } }, { key: "_observe_visibility", value: function(e) { var t = this; if (IntersectionObserver) { var n = { root: e.parent, rootMargin: "0px", threshold: .5 };
                    new IntersectionObserver((function(e, n) { e.forEach((function(e) { t.emit("slotVisibilityChanged", { id: e.target.id, visible: e.isIntersecting }) })) }), n).observe(e) } } }, { key: "_on_slot_visibility_changed", value: function(e) { console.log("_on_slot_visibility_changed invoked", e); var t = e.id,
                    n = e.visible,
                    r = this.gameData.dAds,
                    o = t.split("-"),
                    i = o[o.length - 1]; if (r && r.enabled) switch (i) {
                    case "left":
                        r.left && this._put_html(t, n, r.left); break;
                    case "right":
                        r.right && this._put_html(t, n, r.right); break;
                    case "top":
                        r.top && this._put_html(t, n, r.top); break;
                    case "bottom":
                        r.bottom && this._put_html(t, n, r.bottom) } } }, { key: "_put_html", value: function(e, t, n) { var r = document.getElementById(e); if (r && n.enabled && n.script)
                    if (t) { var o = document.createElement("script"); for (var i in n.script) o.setAttribute(i, n.script[i]);
                        this.gameData.gameId && o.setAttribute("data-gd-gameid", this.gameData.gameId), this.gameData.dmn && o.setAttribute("data-gd-domain", this.gameData.dmn), r.appendChild(o) } else r.innerHTML = "" } }]), o }(Ua);
    return e.Base = Ua, e.Pluto = Wa, e
}({});