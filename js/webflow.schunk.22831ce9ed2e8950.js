(self.webpackChunk = self.webpackChunk || []).push([
    ["95"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new U.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function a(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var a = n;
                    return $.test(e) || !q.test(e) ? a = parseInt(e, 10) : q.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a == a ? a : n
                }

                function r(e) {
                    Y.debug && window && window.console.warn(e)
                }
                var c, l, d, s = function(e, t, n) {
                        function a(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function r(c, l) {
                            function d() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            l === n && (l = c, c = Object), d.Bare = s;
                            var u, f = o[e] = c[e],
                                p = s[e] = d[e] = new o;
                            return p.constructor = d, d.mixin = function(t) {
                                return s[e] = d[e] = r(d, t)[e], d
                            }, d.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(d, p, f, d, c) : a(e) && (u = e), a(u))
                                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                                return i(p.init) || (p.init = c), d
                            }, d.open(l)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, n, a) {
                            return n * e / a + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
                            return n * (e /= a) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
                            return -n * (e /= a) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
                            return n * (e /= a) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
                            return -n * ((e = e / a - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
                            return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
                            return n * Math.sin(e / a * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
                            return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
                            return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
                            return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
                            return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
                            return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    p = window,
                    g = "bkwld-tram",
                    I = /[\-\.0-9]/g,
                    E = /[A-Z]/,
                    y = "number",
                    T = /^(rgb|#)/,
                    m = /(em|cm|mm|in|pt|pc|px)$/,
                    b = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    _ = "unitless",
                    v = /(all|none) 0s ease 0s/,
                    h = /^(width|height)$/,
                    S = document.createElement("a"),
                    A = ["Webkit", "Moz", "O", "ms"],
                    R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    L = function(e) {
                        if (e in S.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, a = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < A.length; t++)
                            if ((n = A[t] + a) in S.style) return {
                                dom: n,
                                css: R[t] + e
                            }
                    },
                    N = t.support = {
                        bind: Function.prototype.bind,
                        transform: L("transform"),
                        transition: L("transition"),
                        backface: L("backface-visibility"),
                        timing: L("transition-timing-function")
                    };
                if (N.transition) {
                    var C = N.timing.dom;
                    if (S.style[C] = u["ease-in-back"][0], !S.style[C])
                        for (var w in f) u[w][0] = f[w]
                }
                var P = t.frame = (c = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && N.bind ? c.bind(p) : function(e) {
                        p.setTimeout(e, 16)
                    },
                    M = t.now = (d = (l = p.performance) && (l.now || l.webkitNow || l.msNow || l.mozNow)) && N.bind ? d.bind(l) : Date.now || function() {
                        return +new Date
                    },
                    V = s(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, a = []; ++t < n;) {
                                        var i = e[t];
                                        i && a.push(i)
                                    }
                                    return a
                                }(("" + e).split(" ")),
                                a = n[0];
                            t = t || {};
                            var i = z[a];
                            if (!i) return r("Unsupported property: " + a);
                            if (!t.weak || !this.props[a]) {
                                var o = i[0],
                                    c = this.props[a];
                                return c || (c = this.props[a] = new o.Bare), c.init(this.$el, n, i, t), c
                            }
                        }

                        function a(e, t, a) {
                            if (e) {
                                var r = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && t) return this.timer = new X({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == r && t) {
                                    switch (e) {
                                        case "hide":
                                            l.call(this);
                                            break;
                                        case "stop":
                                            c.call(this);
                                            break;
                                        case "redraw":
                                            d.call(this);
                                            break;
                                        default:
                                            n.call(this, e, a && a[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == r) return void e.call(this, this);
                                if ("object" == r) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new X({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var p = this,
                                        g = !1,
                                        I = {};
                                    P(function() {
                                        u.call(p, e, function(e) {
                                            e.active && (g = !0, I[e.name] = e.nextStyle)
                                        }), g && p.$el.css(I)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                a.call(this, e.options, !0, e.args)
                            }
                        }

                        function c(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function l() {
                            c.call(this), this.el.style.display = "none"
                        }

                        function d() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[N.transition.dom] = n)
                        }

                        function u(e, t, a) {
                            var i, o, r, c, l = t !== f,
                                d = {};
                            for (i in e) r = e[i], i in H ? (d.transform || (d.transform = {}), d.transform[i] = r) : (E.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in z ? d[i] = r : (c || (c = {}), c[i] = r));
                            for (i in d) {
                                if (r = d[i], !(o = this.props[i])) {
                                    if (!l) continue;
                                    o = n.call(this, i)
                                }
                                t.call(this, o, r)
                            }
                            a && c && a.call(this, c)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function p(e, t) {
                            e.set(t)
                        }

                        function I(e) {
                            this.$el.css(e)
                        }

                        function y(e, n) {
                            t[e] = function() {
                                return this.children ? T.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function T(e, t) {
                            var n, a = this.children.length;
                            for (n = 0; a > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Y.keepInherited && !Y.fallback) {
                                var n = W(this.el, "transition");
                                n && !v.test(n) && (this.upstream = n)
                            }
                            N.backface && Y.hideBackface && j(this.el, N.backface.css, "hidden")
                        }, y("add", n), y("start", a), y("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new X({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), y("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : r("No active transition timer. Use start() or wait() before then().")
                        }), y("next", i), y("stop", c), y("set", function(e) {
                            c.call(this, e), u.call(this, e, p, I)
                        }), y("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), y("hide", l), y("redraw", d), y("destroy", function() {
                            c.call(this), e.removeData(this.el, g), this.$el = this.el = null
                        })
                    }),
                    U = s(V, function(t) {
                        function n(t, n) {
                            var a = e.data(t, g) || e.data(t, g, new V.Bare);
                            return a.el || a.init(t), n ? a.start(n) : a
                        }
                        t.init = function(t, a) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], a);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(n(t, a))
                            }), this.children = o, this
                        }
                    }),
                    F = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        var n = 500,
                            i = "ease",
                            c = 0;
                        e.init = function(e, t, a, r) {
                            this.$el = e, this.el = e[0];
                            var l, d, s, f = t[0];
                            a[2] && (f = a[2]), Q[f] && (f = Q[f]), this.name = f, this.type = a[1], this.duration = o(t[1], this.duration, n), this.ease = (l = t[2], d = this.ease, s = i, void 0 !== d && (s = d), l in u ? l : s), this.delay = o(t[3], this.delay, c), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = h.test(this.name), this.unit = r.unit || this.unit || Y.defaultUnit, this.angle = r.angle || this.angle || Y.defaultAngle, Y.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return W(this.el, this.name)
                        }, e.update = function(e) {
                            j(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, j(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, i, o, c, l = "number" == typeof e,
                                d = "string" == typeof e;
                            switch (t) {
                                case y:
                                    if (l) return e;
                                    if (d && "" === e.replace(I, "")) return +e;
                                    c = "number(unitless)";
                                    break;
                                case T:
                                    if (d) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) {;
                                            return "#" == e.charAt(0) && 7 == e.length ? e : (n = e, ((i = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n)) ? a(i[1], i[2], i[3]) : n).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"))
                                        }
                                    }
                                    c = "hex or rgb string";
                                    break;
                                case m:
                                    if (l) return e + this.unit;
                                    if (d && t.test(e)) return e;
                                    c = "number(px) or string(unit)";
                                    break;
                                case b:
                                    if (l) return e + this.unit;
                                    if (d && t.test(e)) return e;
                                    c = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (l) return e + this.angle;
                                    if (d && t.test(e)) return e;
                                    c = "number(deg) or string(angle)";
                                    break;
                                case _:
                                    if (l || d && b.test(e)) return e;
                                    c = "number(unitless) or string(unit or %)"
                            }
                            return r("Type warning: Expected: [" + c + "] Got: [" + typeof(o = e) + "] " + o), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    x = s(F, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), T))
                        }
                    }),
                    G = s(F, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    k = s(F, function(e, t) {
                        function n(e, t) {
                            var n, a, i, o, r;
                            for (n in e) i = (o = H[n])[0], a = o[1] || n, r = this.convert(e[n], i), t.call(this, a, r, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, H.perspective && Y.perspective && (this.current.perspective = Y.perspective, j(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), j(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new B({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, a = {};
                            for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(a)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new B({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            j(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, a = {};
                            return n.call(this, e, function(e, n, i) {
                                a[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), a
                        }
                    }),
                    D = s(function(t) {
                        function o() {
                            var e, t, n, a = l.length;
                            if (a)
                                for (P(o), t = M(), e = a; e--;)(n = l[e]) && n.render(t)
                        }
                        var c = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || c.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = c.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                a = e.to;
                            void 0 === n && (n = c.from), void 0 === a && (a = c.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof a ? (this.begin = n, this.change = a - n) : this.format(a, n), this.value = this.begin + this.unit, this.start = M(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            var e;
                            this.active || (this.start || (this.start = M()), this.active = !0, e = this, 1 === l.push(e) && P(o))
                        }, t.stop = function() {
                            var t, n, a;
                            this.active && (this.active = !1, t = this, (a = e.inArray(t, l)) >= 0 && (n = l.slice(a + 1), l.length = a, n.length && (l = l.concat(n))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var i, o, r, c = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, r = c, a(i[0] + r * (o[0] - i[0]), i[1] + r * (o[1] - i[1]), i[2] + r * (o[2] - i[2]))) : Math.round((this.begin + c * this.change) * d) / d, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var a = t.replace(I, "");
                                a !== e.replace(I, "") && r("Units do not match [tween]: " + t + ", " + e), this.unit = a
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var l = [],
                            d = 1e3
                    }),
                    X = s(D, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    B = s(D, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new D({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, a = this.tweens.length,
                                i = !1;
                            for (t = a; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e, n;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    Y = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !N.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!N.transition) return Y.fallback = !0;
                    Y.agentTests.push("(" + e + ")");
                    var t = RegExp(Y.agentTests.join("|"), "i");
                    Y.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new D(e)
                }, t.delay = function(e, t, n) {
                    return new X({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var j = e.style,
                    W = e.css,
                    Q = {
                        transform: N.transform && N.transform.css
                    },
                    z = {
                        color: [x, T],
                        background: [x, T, "background-color"],
                        "outline-color": [x, T],
                        "border-color": [x, T],
                        "border-top-color": [x, T],
                        "border-right-color": [x, T],
                        "border-bottom-color": [x, T],
                        "border-left-color": [x, T],
                        "border-width": [F, m],
                        "border-top-width": [F, m],
                        "border-right-width": [F, m],
                        "border-bottom-width": [F, m],
                        "border-left-width": [F, m],
                        "border-spacing": [F, m],
                        "letter-spacing": [F, m],
                        margin: [F, m],
                        "margin-top": [F, m],
                        "margin-right": [F, m],
                        "margin-bottom": [F, m],
                        "margin-left": [F, m],
                        padding: [F, m],
                        "padding-top": [F, m],
                        "padding-right": [F, m],
                        "padding-bottom": [F, m],
                        "padding-left": [F, m],
                        "outline-width": [F, m],
                        opacity: [F, y],
                        top: [F, b],
                        right: [F, b],
                        bottom: [F, b],
                        left: [F, b],
                        "font-size": [F, b],
                        "text-indent": [F, b],
                        "word-spacing": [F, b],
                        width: [F, b],
                        "min-width": [F, b],
                        "max-width": [F, b],
                        height: [F, b],
                        "min-height": [F, b],
                        "max-height": [F, b],
                        "line-height": [F, _],
                        "scroll-top": [G, y, "scrollTop"],
                        "scroll-left": [G, y, "scrollLeft"]
                    },
                    H = {};
                N.transform && (z.transform = [k], H = {
                    x: [b, "translateX"],
                    y: [b, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [y],
                    scaleX: [y],
                    scaleY: [y],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), N.transform && N.backface && (H.z = [b, "translateZ"], H.rotateZ = [O], H.scaleZ = [y], H.perspective = [m]);
                var $ = /ms/,
                    q = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, n) {
            "use strict";
            var a, i, o, r, c, l, d, s, u, f, p, g, I, E, y, T, m, b, O, _, v = window.$,
                h = n(5487) && v.tram;
            e.exports = ((a = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, r = Object.prototype, c = Function.prototype, o.push, l = o.slice, d = (o.concat, r.toString, r.hasOwnProperty), s = o.forEach, u = o.map, f = (o.reduce, o.reduceRight, o.filter), p = (o.every, o.some), g = o.indexOf, I = (o.lastIndexOf, Object.keys), c.bind, E = a.each = a.forEach = function(e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, r = e.length; o < r; o++)
                        if (t.call(n, e[o], o, e) === i) return
                } else {
                    for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                        if (t.call(n, e[c[o]], c[o], e) === i) return
                }
                return e
            }, a.map = a.collect = function(e, t, n) {
                var a = [];
                return null == e ? a : u && e.map === u ? e.map(t, n) : (E(e, function(e, i, o) {
                    a.push(t.call(n, e, i, o))
                }), a)
            }, a.find = a.detect = function(e, t, n) {
                var a;
                return y(e, function(e, i, o) {
                    if (t.call(n, e, i, o)) return a = e, !0
                }), a
            }, a.filter = a.select = function(e, t, n) {
                var a = [];
                return null == e ? a : f && e.filter === f ? e.filter(t, n) : (E(e, function(e, i, o) {
                    t.call(n, e, i, o) && a.push(e)
                }), a)
            }, y = a.some = a.any = function(e, t, n) {
                t || (t = a.identity);
                var o = !1;
                return null == e ? o : p && e.some === p ? e.some(t, n) : (E(e, function(e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i
                }), !!o)
            }, a.contains = a.include = function(e, t) {
                return null != e && (g && e.indexOf === g ? -1 != e.indexOf(t) : y(e, function(e) {
                    return e === t
                }))
            }, a.delay = function(e, t) {
                var n = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, a.defer = function(e) {
                return a.delay.apply(a, [e, 1].concat(l.call(arguments, 1)))
            }, a.throttle = function(e) {
                var t, n, a;
                return function() {
                    !t && (t = !0, n = arguments, a = this, h.frame(function() {
                        t = !1, e.apply(a, n)
                    }))
                }
            }, a.debounce = function(e, t, n) {
                var i, o, r, c, l, d = function() {
                    var s = a.now() - c;
                    s < t ? i = setTimeout(d, t - s) : (i = null, !n && (l = e.apply(r, o), r = o = null))
                };
                return function() {
                    r = this, o = arguments, c = a.now();
                    var s = n && !i;
                    return !i && (i = setTimeout(d, t)), s && (l = e.apply(r, o), r = o = null), l
                }
            }, a.defaults = function(e) {
                if (!a.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, a.keys = function(e) {
                if (!a.isObject(e)) return [];
                if (I) return I(e);
                var t = [];
                for (var n in e) a.has(e, n) && t.push(n);
                return t
            }, a.has = function(e, t) {
                return d.call(e, t)
            }, a.isObject = function(e) {
                return e === Object(e)
            }, a.now = Date.now || function() {
                return new Date().getTime()
            }, a.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, T = /(.)^/, m = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, b = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + m[e]
            }, _ = /^\s*(\w|\$)+\s*$/, a.template = function(e, t, n) {
                !t && n && (t = n);
                var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
                    r = 0,
                    c = "__p+='";
                e.replace(o, function(t, n, a, i, o) {
                    return c += e.slice(r, o).replace(b, O), r = o + t.length, n ? c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), t
                }), c += "';\n";
                var l = t.variable;
                if (l) {
                    if (!_.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else c = "with(obj||{}){\n" + c + "}\n", l = "obj";
                c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", c)
                } catch (e) {
                    throw e.source = c, e
                }
                var d = function(e) {
                    return i.call(this, e, a)
                };
                return d.source = "function(" + l + "){\n" + c + "}", d
            }, a)
        },
        9461: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("brand", e.exports = function(e) {
                var t, n = {},
                    i = document,
                    o = e("html"),
                    r = e("body"),
                    c = window.location,
                    l = /PhantomJS/i.test(navigator.userAgent),
                    d = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }
                n.ready = function() {
                    var n = o.attr("data-wf-status"),
                        a = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(a) && c.hostname !== a && (n = !0), n && !l && (t = t || function() {
                        var t = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                            n = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                                marginRight: "4px",
                                width: "26px"
                            }),
                            a = 0;
                        return t.append(n, a), t[0]
                    }(), u(), setTimeout(u, 500), e(i).off(d, s).on(d, s))
                };

                function u() {
                    var e = r.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        i = a.env("editor");
                    if (n) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), !i && r.append(t)
                }
                return n
            })
        },
        322: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (a.env("test") || a.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    r = e(document.documentElement),
                    c = document.location,
                    l = "hashchange",
                    d = n.load || function() {
                        i = !0, window.WebflowEditor = !0, o.off(l, u),
                            function(e) {
                                var t = window.document.createElement("iframe");
                                t.src = "https://webflow.com/site/third-party-cookie-check.html", t.style.display = "none", t.sandbox = "allow-scripts allow-same-origin";
                                var n = function(a) {
                                    "WF_third_party_cookies_unsupported" === a.data ? (g(t, n), e(!1)) : "WF_third_party_cookies_supported" === a.data && (g(t, n), e(!0))
                                };
                                t.onerror = function() {
                                    g(t, n), e(!1)
                                }, window.addEventListener("message", n, !1), window.document.body.appendChild(t)
                            }(function(t) {
                                e.ajax({
                                    url: p("https://editor-api.webflow.com/api/editor/view"),
                                    data: {
                                        siteId: r.attr("data-wf-site")
                                    },
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    dataType: "json",
                                    crossDomain: !0,
                                    success: function(t) {
                                        return function(n) {
                                            if (!n) {
                                                console.error("Could not load editor data");
                                                return
                                            }
                                            n.thirdPartyCookiesSupported = t,
                                                function(t, n) {
                                                    e.ajax({
                                                        type: "GET",
                                                        url: t,
                                                        dataType: "script",
                                                        cache: !0
                                                    }).then(n, f)
                                                }(function(e) {
                                                    return e.indexOf("//") >= 0 ? e : p("https://editor-api.webflow.com" + e)
                                                }(n.scriptPath), function() {
                                                    window.WebflowEditor(n)
                                                })
                                        }
                                    }(t)
                                })
                            })
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    if (!i) /\?edit/.test(c.hash) && d()
                }
                s ? d() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && d() : o.on(l, u).triggerHandler(l);

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function p(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function g(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return {}
            })
        },
        2338: function(e, t, n) {
            "use strict";
            n(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    a = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList || !1
                                }

                                function r(e) {
                                    if (!e.getAttribute("data-wf-focus-visible")) e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function c() {
                                    t = !1
                                }

                                function l() {
                                    document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
                                }

                                function d(e) {
                                    if (!e.target.nodeName || "html" !== e.target.nodeName.toLowerCase()) t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
                                }
                                document.addEventListener("keydown", function(n) {
                                    if (!n.metaKey && !n.altKey && !n.ctrlKey) o(e.activeElement) && r(e.activeElement), t = !0
                                }, !0), document.addEventListener("mousedown", c, !0), document.addEventListener("pointerdown", c, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), l())
                                }, !0), l(), e.addEventListener("focus", function(e) {
                                    var n, a, c;
                                    if (!!o(e.target)) {
                                        if (t || (a = (n = e.target).type, "INPUT" === (c = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === c && !n.readOnly || n.isContentEditable)) r(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (!!o(e.target)) e.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                                        n = !1
                                    }, 100), ! function(e) {
                                        if (!!e.getAttribute("data-wf-focus-visible")) e.removeAttribute("data-wf-focus-visible")
                                    }(e.target))
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function i(n) {
                    var a, i;
                    if (i = (a = n.target).tagName, /^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls) t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var a = e.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type, a))
                        }
                    }, 0)
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, a) {
                        if (!a.__wf_intro) a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO)
                    },
                    outro: function(e, a) {
                        if (!!a.__wf_intro) a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO)
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, n.init = function() {
                for (var e = a.length, i = 0; i < e; i++) {
                    var r = a[i];
                    r[0](0, r[1])
                }
                a = [], t.extend(n.triggers, o)
            }, n.async = function() {
                for (var e in o) {
                    var t = o[e];
                    if (!!o.hasOwnProperty(e)) n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    }
                }
            }, n.async(), e.exports = n
        },
        5134: function(e, t, n) {
            "use strict";
            var a = n(7199);

            function i(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
            }
            var o = window.jQuery,
                r = {},
                c = ".w-ix";
            r.triggers = {}, r.types = {
                INTRO: "w-ix-intro" + c,
                OUTRO: "w-ix-outro" + c
            }, o.extend(r.triggers, {
                reset: function(e, t) {
                    a.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = r
        },
        941: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env), a.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, n) {
            "use strict";
            var a, i, o = {},
                r = {},
                c = [],
                l = window.Webflow || [],
                d = window.jQuery,
                s = d(window),
                u = d(document),
                f = d.isFunction,
                p = o._ = n(5756),
                g = o.tram = n(5487) && d.tram,
                I = !1,
                E = !1;

            function y(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (I) {
                        e.ready();
                        return
                    }
                    if (!p.contains(c, e.ready)) c.push(e.ready)
                }(e)
            }
            g.config.hideBackface = !1, g.config.keepInherited = !0, o.define = function(e, t, n) {
                r[e] && T(r[e]);
                var a = r[e] = t(d, p, n) || {};
                return y(a), a
            }, o.require = function(e) {
                return r[e]
            };

            function T(e) {
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    c = p.filter(c, function(t) {
                        return t !== e.ready
                    })
                }(e)
            }
            o.push = function(e) {
                if (I) {
                    f(e) && e();
                    return
                }
                l.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var m = navigator.userAgent.toLowerCase(),
                b = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = o.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10),
                _ = o.env.ios = /(ipod|iphone|ipad)/.test(m);
            o.env.safari = /safari/.test(m) && !O && !_, b && u.on("touchstart mousedown", function(e) {
                a = e.target
            }), o.validClick = b ? function(e) {
                return e === a || d.contains(e, a)
            } : function() {
                return !0
            };
            var v = "resize.webflow orientationchange.webflow load.webflow",
                h = "scroll.webflow " + v;

            function S(e, t) {
                var n = [],
                    a = {};
                return a.up = p.throttle(function(e) {
                    p.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, a.up), a.on = function(e) {
                    if (!("function" != typeof e || p.contains(n, e))) n.push(e)
                }, a.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = p.filter(n, function(t) {
                        return t !== e
                    })
                }, a
            }

            function A(e) {
                f(e) && e()
            }
            o.resize = S(s, v), o.scroll = S(s, h), o.redraw = S(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                I = !0, E ? function() {
                    E = !1, p.each(r, y)
                }() : p.each(c, A), p.each(l, A), o.resize.up()
            };

            function R() {
                i && (i.reject(), s.off("load", i.resolve)), i = new d.Deferred, s.on("load", i.resolve)
            }
            o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, E = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (I = e.domready), p.each(r, T), o.resize.off(), o.scroll.off(), o.redraw.off(), c = [], l = [], "pending" === i.state() && R()
            }, d(o.ready), R(), e.exports = window.Webflow = o
        },
        7624: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("links", e.exports = function(e, t) {
                var n, i, o, r = {},
                    c = e(window),
                    l = a.env(),
                    d = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    p = /\/$/;
                r.ready = r.design = r.preview = function() {
                    n = l && a.env("design"), o = a.env("slug") || d.pathname || "", a.scroll.off(g), i = [];
                    for (var t = document.links, r = 0; r < t.length; ++r)(function(t) {
                        if (t.getAttribute("hreflang")) return;
                        var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                        if (s.href = a, a.indexOf(":") >= 0) return;
                        var r = e(t);
                        if (s.hash.length > 1 && s.host + s.pathname === d.host + d.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var c = e(s.hash);
                            c.length && i.push({
                                link: r,
                                sec: c,
                                active: !1
                            });
                            return
                        }
                        if ("#" !== a && "" !== a) I(r, u, s.href === d.href || a === o || f.test(a) && p.test(o))
                    })(t[r]);
                    i.length && (a.scroll.on(g), g())
                };

                function g() {
                    var e = c.scrollTop(),
                        n = c.height();
                    t.each(i, function(t) {
                        if (t.link.attr("hreflang")) return;
                        var a = t.link,
                            i = t.sec,
                            o = i.offset().top,
                            r = i.outerHeight(),
                            c = .5 * n,
                            l = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                        if (t.active !== l) t.active = l, I(a, u, l)
                    })
                }

                function I(e, t, n) {
                    var a = e.hasClass(t);
                    if ((!n || !a) && (!!n || !!a)) n ? e.addClass(t) : e.removeClass(t)
                }
                return r
            })
        },
        286: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    i = function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? null : window.history,
                    o = e(window),
                    r = e(document),
                    c = e(document.body),
                    l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    d = a.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + d + " > .header, " + d + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    p = document.createElement("style");
                p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var g = /^#[a-zA-Z0-9][\w:.-]*$/;
                let I = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function E(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function y(t) {
                    var r, d = t.currentTarget;
                    if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                        var u = (r = d, g.test(r.hash) && r.host + r.pathname === n.host + n.pathname) ? d.hash : "";
                        if ("" !== u) {
                            var f = e(u);
                            if (!f.length) return;
                            t && (t.preventDefault(), t.stopPropagation()),
                                function(e) {
                                    n.hash !== e && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== e && i.pushState({
                                        hash: e
                                    }, "", e)
                                }(u, t), window.setTimeout(function() {
                                    (function(t, n) {
                                        var a = o.scrollTop(),
                                            i = function(t) {
                                                var n = e(s),
                                                    a = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                    i = t.offset().top - a;
                                                if ("mid" === t.data("scroll")) {
                                                    var r = o.height() - a,
                                                        c = t.outerHeight();
                                                    c < r && (i -= Math.round((r - c) / 2))
                                                }
                                                return i
                                            }(t);
                                        if (a !== i) {
                                            var r = function(e, t, n) {
                                                    if ("none" === document.body.getAttribute("data-wf-scroll-motion") || I.matches) return 0;
                                                    var a = 1;
                                                    return c.add(e).each(function(e, t) {
                                                        var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                        !isNaN(n) && n >= 0 && (a = n)
                                                    }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                                                }(t, a, i),
                                                d = Date.now(),
                                                u = function() {
                                                    var e = Date.now() - d;
                                                    window.scroll(0, function(e, t, n, a) {
                                                        return n > a ? t : e + (t - e) * function(e) {
                                                            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                                                        }(n / a)
                                                    }(a, i, e, r)), e <= r ? l(u) : "function" == typeof n && n()
                                                };
                                            l(u)
                                        }
                                    })(f, function() {
                                        E(f, "add"), f.get(0).focus({
                                            preventScroll: !0
                                        }), E(f, "remove")
                                    })
                                }, t ? 0 : 300)
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        r.on(n, f, y), r.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(p, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, n) {
            "use strict";
            n(3949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function a(t) {
                    var a, i, o = !1,
                        r = !1,
                        c = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function l(e) {
                        var t = e.touches;
                        if (!t || !(t.length > 1)) o = !0, t ? (r = !0, a = t[0].clientX) : a = e.clientX, i = a
                    }

                    function d(t) {
                        if (!!o) {
                            if (r && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var a = t.touches,
                                l = a ? a[0].clientX : t.clientX,
                                d = l - i;
                            i = l, Math.abs(d) > c && n && "" === String(n()) && (function(t, n, a) {
                                var i = e.Event(t, {
                                    originalEvent: n
                                });
                                e(n.target).trigger(i, a)
                            }("swipe", t, {
                                direction: d > 0 ? "right" : "left"
                            }), u())
                        }
                    }

                    function s(e) {
                        if (!!o) {
                            if (o = !1, r && "mouseup" === e.type) {
                                e.preventDefault(), e.stopPropagation(), r = !1;
                                return
                            }
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", d, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", d, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1);
                    this.destroy = function() {
                        t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", d, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", d, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
                }, t.instance = t.init(document), t
            })
        },
        1655: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            a.define("navbar", e.exports = function(e, t) {
                var n, r, c, l, d = {},
                    s = e.tram,
                    u = e(window),
                    f = e(document),
                    p = t.debounce,
                    g = a.env(),
                    I = ".w-nav",
                    E = "w--open",
                    y = "w--nav-dropdown-open",
                    T = "w--nav-dropdown-toggle-open",
                    m = "w--nav-dropdown-list-open",
                    b = "w--nav-link-open",
                    O = i.triggers,
                    _ = e();
                d.ready = d.design = d.preview = function() {
                    if (c = g && a.env("design"), l = a.env("editor"), n = e(document.body), !!(r = f.find(I)).length) r.each(S), v(),
                        function() {
                            a.resize.on(h)
                        }()
                }, d.destroy = function() {
                    _ = e(), v(), r && r.length && r.each(A)
                };

                function v() {
                    a.resize.off(h)
                }

                function h() {
                    r.each(V)
                }

                function S(n, a) {
                    var i = e(a),
                        r = e.data(a, I);
                    !r && (r = e.data(a, I, {
                        open: !1,
                        el: i,
                        config: {},
                        selectedIdx: -1
                    })), r.menu = i.find(".w-nav-menu"), r.links = r.menu.find(".w-nav-link"), r.dropdowns = r.menu.find(".w-dropdown"), r.dropdownToggle = r.menu.find(".w-dropdown-toggle"), r.dropdownList = r.menu.find(".w-dropdown-list"), r.button = i.find(".w-nav-button"), r.container = i.find(".w-container"), r.overlayContainerId = "w-nav-overlay-" + n, r.outside = function(t) {
                        return t.outside && f.off("click" + I, t.outside),
                            function(n) {
                                var a = e(n.target);
                                if (!l || !a.closest(".w-editor-bem-EditorOverlay").length) M(t, a)
                            }
                    }(r);
                    var d = i.find(".w-nav-brand");
                    d && "/" === d.attr("href") && null == d.attr("aria-label") && d.attr("aria-label", "home"), r.button.attr("style", "-webkit-user-select: text;"), null == r.button.attr("aria-label") && r.button.attr("aria-label", "menu"), r.button.attr("role", "button"), r.button.attr("tabindex", "0"), r.button.attr("aria-controls", r.overlayContainerId), r.button.attr("aria-haspopup", "menu"), r.button.attr("aria-expanded", "false"), r.el.off(I), r.button.off(I), r.menu.off(I), L(r), c ? (R(r), r.el.on("setting" + I, function(e) {
                        return function(n, a) {
                            a = a || {};
                            var i = u.width();
                            L(e), !0 === a.open && G(e, !0), !1 === a.open && D(e, !0), e.open && t.defer(function() {
                                i !== u.width() && C(e)
                            })
                        }
                    }(r))) : (function(t) {
                        if (!t.overlay) t.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(t.el), t.overlay.attr("id", t.overlayContainerId), t.parent = t.menu.parent(), D(t, !0)
                    }(r), r.button.on("click" + I, w(r)), r.menu.on("click" + I, "a", P(r)), r.button.on("keydown" + I, function(e) {
                        return function(t) {
                            switch (t.keyCode) {
                                case o.SPACE:
                                case o.ENTER:
                                    return w(e)(), t.preventDefault(), t.stopPropagation();
                                case o.ESCAPE:
                                    return D(e), t.preventDefault(), t.stopPropagation();
                                case o.ARROW_RIGHT:
                                case o.ARROW_DOWN:
                                case o.HOME:
                                case o.END:
                                    if (!e.open) return t.preventDefault(), t.stopPropagation();
                                    return t.keyCode === o.END ? e.selectedIdx = e.links.length - 1 : e.selectedIdx = 0, N(e), t.preventDefault(), t.stopPropagation()
                            }
                        }
                    }(r)), r.el.on("keydown" + I, function(e) {
                        return function(t) {
                            if (!!e.open) switch (e.selectedIdx = e.links.index(document.activeElement), t.keyCode) {
                                case o.HOME:
                                case o.END:
                                    return t.keyCode === o.END ? e.selectedIdx = e.links.length - 1 : e.selectedIdx = 0, N(e), t.preventDefault(), t.stopPropagation();
                                case o.ESCAPE:
                                    return D(e), e.button.focus(), t.preventDefault(), t.stopPropagation();
                                case o.ARROW_LEFT:
                                case o.ARROW_UP:
                                    return e.selectedIdx = Math.max(-1, e.selectedIdx - 1), N(e), t.preventDefault(), t.stopPropagation();
                                case o.ARROW_RIGHT:
                                case o.ARROW_DOWN:
                                    return e.selectedIdx = Math.min(e.links.length - 1, e.selectedIdx + 1), N(e), t.preventDefault(), t.stopPropagation()
                            }
                        }
                    }(r))), V(n, a)
                }

                function A(t, n) {
                    var a = e.data(n, I);
                    a && (R(a), e.removeData(n, I))
                }

                function R(e) {
                    if (!!e.overlay) D(e, !0), e.overlay.remove(), e.overlay = null
                }

                function L(e) {
                    var n = {},
                        a = e.config || {},
                        i = n.animation = e.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, a.animation !== i && e.open && t.defer(C, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
                }

                function N(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), P(t)
                    }
                }

                function C(e) {
                    if (!!e.open) D(e, !0), G(e, !0)
                }

                function w(e) {
                    return p(function() {
                        e.open ? D(e) : G(e)
                    })
                }

                function P(t) {
                    return function(n) {
                        var i = e(this).attr("href");
                        if (!a.validClick(n.currentTarget)) {
                            n.preventDefault();
                            return
                        }
                        i && 0 === i.indexOf("#") && t.open && D(t)
                    }
                }
                var M = p(function(e, t) {
                    if (!!e.open) {
                        var n = t.closest(".w-nav-menu");
                        !e.menu.is(n) && D(e)
                    }
                });

                function V(t, n) {
                    var a = e.data(n, I),
                        i = a.collapsed = "none" !== a.button.css("display");
                    if (a.open && !i && !c && D(a, !0), a.container.length) {
                        var o = function(t) {
                            var n = t.container.css(U);
                            return "none" === n && (n = ""),
                                function(t, a) {
                                    (a = e(a)).css(U, ""), "none" === a.css(U) && a.css(U, n)
                                }
                        }(a);
                        a.links.each(o), a.dropdowns.each(o)
                    }
                    a.open && k(a)
                }
                var U = "max-width";

                function F(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function x(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function G(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(F), e.links.addClass(b), e.dropdowns.addClass(y), e.dropdownToggle.addClass(T), e.dropdownList.addClass(m), e.button.addClass(E);
                        var n = e.config;
                        ("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0);
                        var i = k(e),
                            o = e.menu.outerHeight(!0),
                            r = e.menu.outerWidth(!0),
                            l = e.el.height(),
                            d = e.el[0];
                        if (V(0, d), O.intro(0, d), a.redraw.up(), !c && f.on("click" + I, e.outside), t) {
                            p();
                            return
                        }
                        var u = "transform " + n.duration + "ms " + n.easing;
                        if (e.overlay && (_ = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
                            s(e.menu).add(u).set({
                                x: n.animDirect * r,
                                height: i
                            }).start({
                                x: 0
                            }).then(p), e.overlay && e.overlay.width(r);
                            return
                        }
                        s(e.menu).add(u).set({
                            y: -(l + o)
                        }).start({
                            y: 0
                        }).then(p)
                    }

                    function p() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function k(e) {
                    var t = e.config,
                        a = t.docHeight ? f.height() : n.height();
                    return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(a), a
                }

                function D(e, t) {
                    if (!!e.open) {
                        e.open = !1, e.button.removeClass(E);
                        var n = e.config;
                        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0), O.outro(0, e.el[0]), f.off("click" + I, e.outside), t) {
                            s(e.menu).stop(), c();
                            return
                        }
                        var a = "transform " + n.duration + "ms " + n.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            r = e.el.height();
                        if (n.animOver) {
                            s(e.menu).add(a).start({
                                x: o * n.animDirect
                            }).then(c);
                            return
                        }
                        s(e.menu).add(a).start({
                            y: -(r + i)
                        }).then(c)
                    }

                    function c() {
                        e.menu.height(""), s(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(x), e.links.removeClass(b), e.dropdowns.removeClass(y), e.dropdownToggle.removeClass(T), e.dropdownList.removeClass(m), e.overlay && e.overlay.children().length && (_.length ? e.menu.insertAfter(_) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return d
            })
        },
        3946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                actionListPlaybackChanged: function() {
                    return Y
                },
                animationFrameChanged: function() {
                    return x
                },
                clearRequested: function() {
                    return M
                },
                elementStateChanged: function() {
                    return B
                },
                eventListenerAdded: function() {
                    return V
                },
                eventStateChanged: function() {
                    return F
                },
                instanceAdded: function() {
                    return k
                },
                instanceRemoved: function() {
                    return X
                },
                instanceStarted: function() {
                    return D
                },
                mediaQueriesDefined: function() {
                    return W
                },
                parameterChanged: function() {
                    return G
                },
                playbackRequested: function() {
                    return w
                },
                previewRequested: function() {
                    return C
                },
                rawDataImported: function() {
                    return A
                },
                sessionInitialized: function() {
                    return R
                },
                sessionStarted: function() {
                    return L
                },
                sessionStopped: function() {
                    return N
                },
                stopRequested: function() {
                    return P
                },
                testFrameRendered: function() {
                    return U
                },
                viewportWidthChanged: function() {
                    return j
                }
            });
            let a = n(7087),
                i = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: o,
                    IX2_SESSION_INITIALIZED: r,
                    IX2_SESSION_STARTED: c,
                    IX2_SESSION_STOPPED: l,
                    IX2_PREVIEW_REQUESTED: d,
                    IX2_PLAYBACK_REQUESTED: s,
                    IX2_STOP_REQUESTED: u,
                    IX2_CLEAR_REQUESTED: f,
                    IX2_EVENT_LISTENER_ADDED: p,
                    IX2_TEST_FRAME_RENDERED: g,
                    IX2_EVENT_STATE_CHANGED: I,
                    IX2_ANIMATION_FRAME_CHANGED: E,
                    IX2_PARAMETER_CHANGED: y,
                    IX2_INSTANCE_ADDED: T,
                    IX2_INSTANCE_STARTED: m,
                    IX2_INSTANCE_REMOVED: b,
                    IX2_ELEMENT_STATE_CHANGED: O,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
                    IX2_VIEWPORT_WIDTH_CHANGED: v,
                    IX2_MEDIA_QUERIES_DEFINED: h
                } = a.IX2EngineActionTypes,
                {
                    reifyState: S
                } = i.IX2VanillaUtils,
                A = e => ({
                    type: o,
                    payload: { ...S(e)
                    }
                }),
                R = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: r,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                L = () => ({
                    type: c
                }),
                N = () => ({
                    type: l
                }),
                C = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: d,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                w = ({
                    actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: i,
                    allowEvents: o,
                    immediate: r,
                    testManual: c,
                    verbose: l,
                    rawData: d
                }) => ({
                    type: s,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: c,
                        eventId: i,
                        allowEvents: o,
                        immediate: r,
                        verbose: l,
                        rawData: d
                    }
                }),
                P = e => ({
                    type: u,
                    payload: {
                        actionListId: e
                    }
                }),
                M = () => ({
                    type: f
                }),
                V = (e, t) => ({
                    type: p,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                U = (e = 1) => ({
                    type: g,
                    payload: {
                        step: e
                    }
                }),
                F = (e, t) => ({
                    type: I,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                x = (e, t) => ({
                    type: E,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                G = (e, t) => ({
                    type: y,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                k = e => ({
                    type: T,
                    payload: { ...e
                    }
                }),
                D = (e, t) => ({
                    type: m,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                X = e => ({
                    type: b,
                    payload: {
                        instanceId: e
                    }
                }),
                B = (e, t, n, a) => ({
                    type: O,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: a
                    }
                }),
                Y = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: _,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                j = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: v,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                W = () => ({
                    type: h
                })
        },
        6011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                actions: function() {
                    return r
                },
                destroy: function() {
                    return u
                },
                init: function() {
                    return s
                },
                setEnv: function() {
                    return d
                },
                store: function() {
                    return l
                }
            });
            let a = n(9516),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(7243)),
                o = n(1970),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(3946));

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (c = function(e) {
                    return e ? n : t
                })(e)
            }
            let l = (0, a.createStore)(i.default);

            function d(e) {
                e() && (0, o.observeRequests)(l)
            }

            function s(e) {
                u(), (0, o.startEngine)({
                    store: l,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function u() {
                (0, o.stopEngine)(l)
            }
        },
        5012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                elementContains: function() {
                    return y
                },
                getChildElements: function() {
                    return m
                },
                getClosestElement: function() {
                    return O
                },
                getProperty: function() {
                    return f
                },
                getQuerySelector: function() {
                    return g
                },
                getRefType: function() {
                    return _
                },
                getSiblingElements: function() {
                    return b
                },
                getStyle: function() {
                    return u
                },
                getValidDocument: function() {
                    return I
                },
                isSiblingNode: function() {
                    return T
                },
                matchSelector: function() {
                    return p
                },
                queryDocument: function() {
                    return E
                },
                setStyle: function() {
                    return s
                }
            });
            let a = n(9468),
                i = n(7087),
                {
                    ELEMENT_MATCHES: o
                } = a.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: r,
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: l,
                    WF_PAGE: d
                } = i.IX2EngineConstants;

            function s(e, t, n) {
                e.style[t] = n
            }

            function u(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function f(e, t) {
                return e[t]
            }

            function p(e) {
                return t => t[o](e)
            }

            function g({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(r)) {
                        let n = e.split(r),
                            a = n[0];
                        if (t = n[1], a !== document.documentElement.getAttribute(d)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function I(e) {
                return null == e || e === document.documentElement.getAttribute(d) ? document : null
            }

            function E(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function y(e, t) {
                return e.contains(t)
            }

            function T(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function m(e) {
                let t = [];
                for (let n = 0, {
                        length: a
                    } = e || []; n < a; n++) {
                    let {
                        children: a
                    } = e[n], {
                        length: i
                    } = a;
                    if (!!i)
                        for (let e = 0; e < i; e++) t.push(a[e])
                }
                return t
            }

            function b(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, {
                        length: i
                    } = e; a < i; a++) {
                    let {
                        parentNode: i
                    } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let O = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[o] && n[o](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function _(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? c : l : null
            }
        },
        1970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                observeRequests: function() {
                    return $
                },
                startActionGroup: function() {
                    return ef
                },
                startEngine: function() {
                    return et
                },
                stopActionGroup: function() {
                    return eu
                },
                stopAllActionGroups: function() {
                    return es
                },
                stopEngine: function() {
                    return en
                }
            });
            let a = E(n(9777)),
                i = E(n(4738)),
                o = E(n(4659)),
                r = E(n(3452)),
                c = E(n(6633)),
                l = E(n(3729)),
                d = E(n(2397)),
                s = E(n(5082)),
                u = n(7087),
                f = n(9468),
                p = n(3946),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(5012)),
                I = E(n(8955));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (y = function(e) {
                    return e ? n : t
                })(e)
            }
            let T = Object.keys(u.QuickEffectIds),
                m = e => T.includes(e),
                {
                    COLON_DELIMITER: b,
                    BOUNDARY_SELECTOR: O,
                    HTML_ELEMENT: _,
                    RENDER_GENERAL: v,
                    W_MOD_IX: h
                } = u.IX2EngineConstants,
                {
                    getAffectedElements: S,
                    getElementId: A,
                    getDestinationValues: R,
                    observeStore: L,
                    getInstanceId: N,
                    renderHTMLElement: C,
                    clearAllStyles: w,
                    getMaxDurationItemIndex: P,
                    getComputedStyle: M,
                    getInstanceOrigin: V,
                    reduceListToGroup: U,
                    shouldNamespaceEventParameter: F,
                    getNamespacedParameterId: x,
                    shouldAllowMediaQuery: G,
                    cleanupHTMLElement: k,
                    clearObjectCache: D,
                    stringifyTarget: X,
                    mediaQueriesEqual: B,
                    shallowEqual: Y
                } = f.IX2VanillaUtils,
                {
                    isPluginType: j,
                    createPluginInstance: W,
                    getPluginDuration: Q
                } = f.IX2VanillaPlugins,
                z = navigator.userAgent,
                H = z.match(/iPad/i) || z.match(/iPhone/);

            function $(e) {
                L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: q
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: Z
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: J
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: ee
                })
            }

            function q({
                rawData: e,
                defer: t
            }, n) {
                let a = () => {
                    et({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), K()
                };
                t ? setTimeout(a, 0) : a()
            }

            function K() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function Z(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: a,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: r,
                    immediate: c,
                    testManual: l,
                    verbose: d = !0
                } = e, {
                    rawData: s
                } = e;
                if (a && i && s && c) {
                    let e = s.actionLists[a];
                    e && (s = U({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (et({
                        store: t,
                        rawData: s,
                        allowEvents: r,
                        testManual: l
                    }), a && n === u.ActionTypeConsts.GENERAL_START_ACTION || m(n)) {
                    eu({
                        store: t,
                        actionListId: a
                    }), ed({
                        store: t,
                        actionListId: a,
                        eventId: o
                    });
                    let e = ef({
                        store: t,
                        eventId: o,
                        actionListId: a,
                        immediate: c,
                        verbose: d
                    });
                    d && e && t.dispatch((0, p.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !c
                    }))
                }
            }

            function J({
                actionListId: e
            }, t) {
                e ? eu({
                    store: t,
                    actionListId: e
                }) : es({
                    store: t
                }), en(t)
            }

            function ee(e, t) {
                en(t), w({
                    store: t,
                    elementApi: g
                })
            }

            function et({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: r
            }) {
                let {
                    ixSession: c
                } = e.getState();
                if (t && e.dispatch((0, p.rawDataImported)(t)), !c.active) {
                    if (e.dispatch((0, p.sessionInitialized)({
                            hasBoundaryNodes: !!document.querySelector(O),
                            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                        })), n && (function(e) {
                            let {
                                ixData: t
                            } = e.getState(), {
                                eventTypeMap: n
                            } = t;
                            eo(e), (0, d.default)(n, (t, n) => {
                                let r = I.default[n];
                                if (!r) {
                                    console.warn(`IX2 event type not configured: ${n}`);
                                    return
                                }(function({
                                    logic: e,
                                    store: t,
                                    events: n
                                }) {
                                    (function(e) {
                                        if (!H) return;
                                        let t = {},
                                            n = "";
                                        for (let a in e) {
                                            let {
                                                eventTypeId: i,
                                                target: o
                                            } = e[a], r = g.getQuerySelector(o);
                                            if (!t[r])(i === u.EventTypeConsts.MOUSE_CLICK || i === u.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[r] = !0, n += r + "{cursor: pointer;touch-action: manipulation;}")
                                        }
                                        if (n) {
                                            let e = document.createElement("style");
                                            e.textContent = n, document.body.appendChild(e)
                                        }
                                    })(n);
                                    let {
                                        types: r,
                                        handler: c
                                    } = e, {
                                        ixData: l
                                    } = t.getState(), {
                                        actionLists: f
                                    } = l, I = er(n, el);
                                    if (!(0, o.default)(I)) return;
                                    (0, d.default)(I, (e, o) => {
                                        let r = n[o],
                                            {
                                                action: c,
                                                id: d,
                                                mediaQueries: s = l.mediaQueryKeys
                                            } = r,
                                            {
                                                actionListId: I
                                            } = c.config;
                                        !B(s, l.mediaQueryKeys) && t.dispatch((0, p.mediaQueriesDefined)()), c.actionTypeId === u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(r.config) ? r.config : [r.config]).forEach(n => {
                                            let {
                                                continuousParameterGroupId: o
                                            } = n, r = (0, i.default)(f, `${I}.continuousParameterGroups`, []), c = (0, a.default)(r, ({
                                                id: e
                                            }) => e === o), l = (n.smoothing || 0) / 100, s = (n.restingState || 0) / 100;
                                            if (!!c) e.forEach((e, a) => {
                                                ! function({
                                                    store: e,
                                                    eventStateKey: t,
                                                    eventTarget: n,
                                                    eventId: a,
                                                    eventConfig: o,
                                                    actionListId: r,
                                                    parameterGroup: c,
                                                    smoothing: l,
                                                    restingValue: d
                                                }) {
                                                    let {
                                                        ixData: s,
                                                        ixSession: f
                                                    } = e.getState(), {
                                                        events: p
                                                    } = s, I = p[a], {
                                                        eventTypeId: E
                                                    } = I, y = {}, T = {}, m = [], {
                                                        continuousActionGroups: _
                                                    } = c, {
                                                        id: v
                                                    } = c;
                                                    F(E, o) && (v = x(t, v));
                                                    let h = f.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null;
                                                    _.forEach(e => {
                                                        let {
                                                            keyframe: t,
                                                            actionItems: a
                                                        } = e;
                                                        a.forEach(e => {
                                                            let {
                                                                actionTypeId: a
                                                            } = e, {
                                                                target: i
                                                            } = e.config;
                                                            if (!i) return;
                                                            let o = i.boundaryMode ? h : null,
                                                                r = X(i) + b + a;
                                                            if (T[r] = function(e = [], t, n) {
                                                                    let a;
                                                                    let i = [...e];
                                                                    return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                                                        keyframe: t,
                                                                        actionItems: []
                                                                    })), i[a].actionItems.push(n), i
                                                                }(T[r], t, e), !y[r]) {
                                                                y[r] = !0;
                                                                let {
                                                                    config: t
                                                                } = e;
                                                                S({
                                                                    config: t,
                                                                    event: I,
                                                                    eventTarget: n,
                                                                    elementRoot: o,
                                                                    elementApi: g
                                                                }).forEach(e => {
                                                                    m.push({
                                                                        element: e,
                                                                        key: r
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    }), m.forEach(({
                                                        element: t,
                                                        key: n
                                                    }) => {
                                                        let o = T[n],
                                                            c = (0, i.default)(o, "[0].actionItems[0]", {}),
                                                            {
                                                                actionTypeId: s
                                                            } = c,
                                                            f = (s === u.ActionTypeConsts.PLUGIN_RIVE ? 0 === (c.config ? .target ? .selectorGuids || []).length : j(s)) ? W(s) ? .(t, c) : null,
                                                            p = R({
                                                                element: t,
                                                                actionItem: c,
                                                                elementApi: g
                                                            }, f);
                                                        ep({
                                                            store: e,
                                                            element: t,
                                                            eventId: a,
                                                            actionListId: r,
                                                            actionItem: c,
                                                            destination: p,
                                                            continuous: !0,
                                                            parameterId: v,
                                                            actionGroups: o,
                                                            smoothing: l,
                                                            restingValue: d,
                                                            pluginInstance: f
                                                        })
                                                    })
                                                }({
                                                    store: t,
                                                    eventStateKey: d + b + a,
                                                    eventTarget: e,
                                                    eventId: d,
                                                    eventConfig: n,
                                                    actionListId: I,
                                                    parameterGroup: c,
                                                    smoothing: l,
                                                    restingValue: s
                                                })
                                            })
                                        }), (c.actionTypeId === u.ActionTypeConsts.GENERAL_START_ACTION || m(c.actionTypeId)) && ed({
                                            store: t,
                                            actionListId: I,
                                            eventId: d
                                        })
                                    });
                                    let E = e => {
                                            let {
                                                ixSession: a
                                            } = t.getState();
                                            ec(I, (i, o, r) => {
                                                let d = n[o],
                                                    s = a.eventState[r],
                                                    {
                                                        action: f,
                                                        mediaQueries: g = l.mediaQueryKeys
                                                    } = d;
                                                if (!G(g, a.mediaQueryKey)) return;
                                                let I = (n = {}) => {
                                                    let a = c({
                                                        store: t,
                                                        element: i,
                                                        event: d,
                                                        eventConfig: n,
                                                        nativeEvent: e,
                                                        eventStateKey: r
                                                    }, s);
                                                    !Y(a, s) && t.dispatch((0, p.eventStateChanged)(r, a))
                                                };
                                                f.actionTypeId === u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(d.config) ? d.config : [d.config]).forEach(I) : I()
                                            })
                                        },
                                        y = (0, s.default)(E, 12),
                                        T = ({
                                            target: e = document,
                                            types: n,
                                            throttle: a
                                        }) => {
                                            n.split(" ").filter(Boolean).forEach(n => {
                                                let i = a ? y : E;
                                                e.addEventListener(n, i), t.dispatch((0, p.eventListenerAdded)(e, [n, i]))
                                            })
                                        };
                                    Array.isArray(r) ? r.forEach(T) : "string" == typeof r && T(e)
                                })({
                                    logic: r,
                                    store: e,
                                    events: t
                                })
                            });
                            let {
                                ixSession: r
                            } = e.getState();
                            r.eventListeners.length && function(e) {
                                let t = () => {
                                    eo(e)
                                };
                                ei.forEach(n => {
                                    window.addEventListener(n, t), e.dispatch((0, p.eventListenerAdded)(window, [n, t]))
                                }), t()
                            }(e)
                        }(e), function() {
                            let {
                                documentElement: e
                            } = document; - 1 === e.className.indexOf(h) && (e.className += ` ${h}`)
                        }(), e.getState().ixSession.hasDefinedMediaQueries)) {
                        var l;
                        L({
                            store: l = e,
                            select: ({
                                ixSession: e
                            }) => e.mediaQueryKey,
                            onChange: () => {
                                en(l), w({
                                    store: l,
                                    elementApi: g
                                }), et({
                                    store: l,
                                    allowEvents: !0
                                }), K()
                            }
                        })
                    }
                    e.dispatch((0, p.sessionStarted)()),
                        function(e, t) {
                            let n = a => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                i.active && (e.dispatch((0, p.animationFrameChanged)(a, o)), t ? ! function(e, t) {
                                    let n = L({
                                        store: e,
                                        select: ({
                                            ixSession: e
                                        }) => e.tick,
                                        onChange: e => {
                                            t(e), n()
                                        }
                                    })
                                }(e, n) : requestAnimationFrame(n))
                            };
                            n(window.performance.now())
                        }(e, r)
                }
            }

            function en(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(ea), D(), e.dispatch((0, p.sessionStopped)())
                }
            }

            function ea({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let ei = ["resize", "orientationchange"];

            function eo(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, p.viewportWidthChanged)({
                        width: a,
                        mediaQueries: t
                    }))
                }
            }
            let er = (e, t) => (0, r.default)((0, l.default)(e, t), c.default),
                ec = (e, t) => {
                    (0, d.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + b + a)
                        })
                    })
                },
                el = e => S({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: g
                });

            function ed({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: a,
                    ixSession: o
                } = e.getState(), {
                    actionLists: r,
                    events: c
                } = a, l = c[n], d = r[t];
                if (d && d.useFirstGroupAsInitialState) {
                    let r = (0, i.default)(d, "actionItemGroups[0].actionItems", []);
                    if (!G((0, i.default)(l, "mediaQueries", a.mediaQueryKeys), o.mediaQueryKey)) return;
                    r.forEach(a => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = a, r = S({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: l.target,
                                targets: l.targets
                            } : i,
                            event: l,
                            elementApi: g
                        }), c = j(o);
                        r.forEach(i => {
                            let r = c ? W(o) ? .(i, a) : null;
                            ep({
                                destination: R({
                                    element: i,
                                    actionItem: a,
                                    elementApi: g
                                }, r),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: r
                            })
                        })
                    })
                }
            }

            function es({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, d.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: a
                        } = t;
                        eg(t, e), a && e.dispatch((0, p.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eu({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: o
            }) {
                let {
                    ixInstances: r,
                    ixSession: c
                } = e.getState(), l = c.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null;
                (0, d.default)(r, n => {
                    let r = (0, i.default)(n, "actionItem.config.target.boundaryMode"),
                        c = !a || n.eventStateKey === a;
                    if (n.actionListId === o && n.eventId === t && c) {
                        if (l && r && !g.elementContains(l, n.element)) return;
                        eg(n, e), n.verbose && e.dispatch((0, p.actionListPlaybackChanged)({
                            actionListId: o,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ef({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: o,
                groupIndex: r = 0,
                immediate: c,
                verbose: l
            }) {
                let {
                    ixData: d,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = d, f = u[t] || {}, {
                    mediaQueries: p = d.mediaQueryKeys
                } = f, {
                    actionItemGroups: I,
                    useFirstGroupAsInitialState: E
                } = (0, i.default)(d, `actionLists.${o}`, {});
                if (!I || !I.length) return !1;
                r >= I.length && (0, i.default)(f, "config.loop") && (r = 0), 0 === r && E && r++;
                let y = (0 === r || 1 === r && E) && m(f.action ? .actionTypeId) ? f.config.delay : void 0,
                    T = (0, i.default)(I, [r, "actionItems"], []);
                if (!T.length || !G(p, s.mediaQueryKey)) return !1;
                let b = s.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null,
                    _ = P(T),
                    v = !1;
                return T.forEach((i, d) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = i, p = j(u), {
                        target: I
                    } = s;
                    if (!!I) S({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: I.boundaryMode ? b : null,
                        elementApi: g
                    }).forEach((s, f) => {
                        let I = p ? W(u) ? .(s, i) : null,
                            E = p ? Q(u)(s, i) : null;
                        v = !0;
                        let T = M({
                                element: s,
                                actionItem: i
                            }),
                            m = R({
                                element: s,
                                actionItem: i,
                                elementApi: g
                            }, I);
                        ep({
                            store: e,
                            element: s,
                            actionItem: i,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: o,
                            groupIndex: r,
                            isCarrier: _ === d && 0 === f,
                            computedStyle: T,
                            destination: m,
                            immediate: c,
                            verbose: l,
                            pluginInstance: I,
                            pluginDuration: E,
                            instanceDelay: y
                        })
                    })
                }), v
            }

            function ep(e) {
                let t;
                let {
                    store: n,
                    computedStyle: a,
                    ...i
                } = e, {
                    element: o,
                    actionItem: r,
                    immediate: c,
                    pluginInstance: l,
                    continuous: d,
                    restingValue: s,
                    eventId: f
                } = i, I = N(), {
                    ixElements: E,
                    ixSession: y,
                    ixData: T
                } = n.getState(), m = A(E, o), {
                    refState: b
                } = E[m] || {}, O = g.getRefType(o), _ = y.reducedMotion && u.ReducedMotionTypes[r.actionTypeId];
                if (_ && d) switch (T.events[f] ? .eventTypeId) {
                    case u.EventTypeConsts.MOUSE_MOVE:
                    case u.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let v = V(o, b, a, r, g, l);
                if (n.dispatch((0, p.instanceAdded)({
                        instanceId: I,
                        elementId: m,
                        origin: v,
                        refType: O,
                        skipMotion: _,
                        skipToValue: t,
                        ...i
                    })), eI(document.body, "ix2-animation-started", I), c) {
                    (function(e, t) {
                        let {
                            ixParameters: n
                        } = e.getState();
                        e.dispatch((0, p.instanceStarted)(t, 0)), e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
                        let {
                            ixInstances: a
                        } = e.getState();
                        eE(a[t], e)
                    })(n, I);
                    return
                }
                L({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[I],
                    onChange: eE
                }), !d && n.dispatch((0, p.instanceStarted)(I, y.tick))
            }

            function eg(e, t) {
                eI(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: a
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: r
                } = i[n] || {};
                r === _ && k(o, a, g), t.dispatch((0, p.instanceRemoved)(e.id))
            }

            function eI(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
            }

            function eE(e, t) {
                let {
                    active: n,
                    continuous: a,
                    complete: i,
                    elementId: o,
                    actionItem: r,
                    actionTypeId: c,
                    renderType: l,
                    current: d,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: I,
                    actionListId: E,
                    isCarrier: y,
                    styleProp: T,
                    verbose: m,
                    pluginInstance: b
                } = e, {
                    ixData: O,
                    ixSession: h
                } = t.getState(), {
                    events: S
                } = O, {
                    mediaQueries: A = O.mediaQueryKeys
                } = S && S[u] ? S[u] : {};
                if (!!G(A, h.mediaQueryKey)) {
                    if (a || n || i) {
                        if (d || l === v && i) {
                            t.dispatch((0, p.elementStateChanged)(o, c, d, r));
                            let {
                                ixElements: e
                            } = t.getState(), {
                                ref: n,
                                refType: a,
                                refState: i
                            } = e[o] || {}, s = i && i[c];
                            (a === _ || j(c)) && C(n, i, s, u, r, T, g, l, b)
                        }
                        if (i) {
                            if (y) {
                                let e = ef({
                                    store: t,
                                    eventId: u,
                                    eventTarget: f,
                                    eventStateKey: I,
                                    actionListId: E,
                                    groupIndex: s + 1,
                                    verbose: m
                                });
                                m && !e && t.dispatch((0, p.actionListPlaybackChanged)({
                                    actionListId: E,
                                    isPlaying: !1
                                }))
                            }
                            eg(e, t)
                        }
                    }
                }
            }
        },
        8955: function(e, t, n) {
            "use strict";
            let a, i, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return eI
                }
            });
            let r = p(n(5801)),
                c = p(n(4738)),
                l = p(n(3789)),
                d = n(7087),
                s = n(1970),
                u = n(3946),
                f = n(9468);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: g,
                MOUSE_SECOND_CLICK: I,
                MOUSE_DOWN: E,
                MOUSE_UP: y,
                MOUSE_OVER: T,
                MOUSE_OUT: m,
                DROPDOWN_CLOSE: b,
                DROPDOWN_OPEN: O,
                SLIDER_ACTIVE: _,
                SLIDER_INACTIVE: v,
                TAB_ACTIVE: h,
                TAB_INACTIVE: S,
                NAVBAR_CLOSE: A,
                NAVBAR_OPEN: R,
                MOUSE_MOVE: L,
                PAGE_SCROLL_DOWN: N,
                SCROLL_INTO_VIEW: C,
                SCROLL_OUT_OF_VIEW: w,
                PAGE_SCROLL_UP: P,
                SCROLLING_IN_VIEW: M,
                PAGE_FINISH: V,
                ECOMMERCE_CART_CLOSE: U,
                ECOMMERCE_CART_OPEN: F,
                PAGE_START: x,
                PAGE_SCROLL: G
            } = d.EventTypeConsts, k = "COMPONENT_ACTIVE", D = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: X
            } = d.IX2EngineConstants, {
                getNamespacedParameterId: B
            } = f.IX2VanillaUtils, Y = e => t => !!("object" == typeof t && e(t)) || t, j = Y(({
                element: e,
                nativeEvent: t
            }) => e === t.target), W = Y(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), Q = (0, r.default)([j, W]), z = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: a
                    } = n, i = a[t];
                    if (i && !en[i.eventTypeId]) return i
                }
                return null
            }, H = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: a
                } = n.config;
                return !!z(e, a)
            }, $ = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: a
            }, i) => {
                let {
                    action: o,
                    id: r
                } = t, {
                    actionListId: l,
                    autoStopEventId: d
                } = o.config, u = z(e, d);
                return u && (0, s.stopActionGroup)({
                    store: e,
                    eventId: d,
                    eventTarget: n,
                    eventStateKey: d + X + a.split(X)[1],
                    actionListId: (0, c.default)(u, "action.config.actionListId")
                }), (0, s.stopActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), (0, s.startActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), i
            }, q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, K = {
                handler: q(Q, $)
            }, Z = { ...K,
                types: [k, D].join(" ")
            }, J = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], ee = "mouseover mouseout", et = {
                types: J
            }, en = {
                PAGE_START: x,
                PAGE_FINISH: V
            }, ea = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, l.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), ei = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), eo = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: a,
                    relatedTarget: i
                } = t, o = e.contains(a);
                if ("mouseover" === n && o) return !0;
                let r = e.contains(i);
                return "mouseout" === n && !!o && !!r || !1
            }, er = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: a,
                    clientHeight: i
                } = ea(), o = n.scrollOffsetValue, r = n.scrollOffsetUnit, c = "PX" === r ? o : i * (o || 0) / 100;
                return ei(t.getBoundingClientRect(), {
                    left: 0,
                    top: c,
                    right: a,
                    bottom: i - c
                })
            }, ec = e => (t, n) => {
                let {
                    type: a
                } = t.nativeEvent, i = -1 !== [k, D].indexOf(a) ? a === k : n.isActive, o = { ...n,
                    isActive: i
                };
                return n && o.isActive === n.isActive ? o : e(t, o) || o
            }, el = e => (t, n) => {
                let a = {
                    elementHovered: eo(t)
                };
                return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
            }, ed = e => (t, n = {}) => {
                let a, i;
                let {
                    stiffScrollTop: o,
                    scrollHeight: r,
                    innerHeight: c
                } = ea(), {
                    event: {
                        config: l,
                        eventTypeId: d
                    }
                } = t, {
                    scrollOffsetValue: s,
                    scrollOffsetUnit: u
                } = l, f = r - c, p = Number((o / f).toFixed(2));
                if (n && n.percentTop === p) return n;
                let g = ("PX" === u ? s : c * (s || 0) / 100) / f,
                    I = 0;
                n && (a = p > n.percentTop, I = (i = n.scrollingDown !== a) ? p : n.anchorTop);
                let E = d === N ? p >= I + g : p <= I - g,
                    y = { ...n,
                        percentTop: p,
                        inBounds: E,
                        anchorTop: I,
                        scrollingDown: a
                    };
                return n && E && (i || y.inBounds !== n.inBounds) && e(t, y) || y
            }, es = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, eu = e => (t, n = {
                clickCount: 0
            }) => {
                let a = {
                    clickCount: n.clickCount % 2 + 1
                };
                return a.clickCount !== n.clickCount && e(t, a) || a
            }, ef = (e = !0) => ({ ...Z,
                handler: q(e ? Q : j, ec((e, t) => t.isActive ? K.handler(e, t) : t))
            }), ep = (e = !0) => ({ ...Z,
                handler: q(e ? Q : j, ec((e, t) => t.isActive ? t : K.handler(e, t)))
            });
            let eg = { ...et,
                handler: (a = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: a,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: r
                    } = o;
                    return !r[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === C === n ? ($(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: er(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
                })
            };
            let eI = {
                [_]: ef(),
                [v]: ep(),
                [O]: ef(),
                [b]: ep(),
                [R]: ef(!1),
                [A]: ep(!1),
                [h]: ef(),
                [S]: ep(),
                [F]: {
                    types: "ecommerce-cart-open",
                    handler: q(Q, $)
                },
                [U]: {
                    types: "ecommerce-cart-close",
                    handler: q(Q, $)
                },
                [g]: {
                    types: "click",
                    handler: q(Q, eu((e, {
                        clickCount: t
                    }) => {
                        H(e) ? 1 === t && $(e) : $(e)
                    }))
                },
                [I]: {
                    types: "click",
                    handler: q(Q, eu((e, {
                        clickCount: t
                    }) => {
                        2 === t && $(e)
                    }))
                },
                [E]: { ...K,
                    types: "mousedown"
                },
                [y]: { ...K,
                    types: "mouseup"
                },
                [T]: {
                    types: ee,
                    handler: q(Q, el((e, t) => {
                        t.elementHovered && $(e)
                    }))
                },
                [m]: {
                    types: ee,
                    handler: q(Q, el((e, t) => {
                        !t.elementHovered && $(e)
                    }))
                },
                [L]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: a,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: r,
                            selectedAxis: c,
                            continuousParameterGroupId: l,
                            reverse: s,
                            restingState: f = 0
                        } = n, {
                            clientX: p = o.clientX,
                            clientY: g = o.clientY,
                            pageX: I = o.pageX,
                            pageY: E = o.pageY
                        } = a, y = "X_AXIS" === c, T = "mouseout" === a.type, m = f / 100, b = l, O = !1;
                        switch (r) {
                            case d.EventBasedOn.VIEWPORT:
                                m = y ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                                break;
                            case d.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a
                                    } = ea();m = y ? Math.min(e + I, n) / n : Math.min(t + E, a) / a;
                                    break
                                }
                            case d.EventBasedOn.ELEMENT:
                            default:
                                {
                                    b = B(i, l);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== Q({
                                            element: t,
                                            nativeEvent: a
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: r,
                                            width: c,
                                            height: d
                                        } = n;
                                    if (!e && !es({
                                            left: p,
                                            top: g
                                        }, n)) break;O = !0,
                                    m = y ? (p - o) / c : (g - r) / d
                                }
                        }
                        return T && (m > .95 || m < .05) && (m = Math.round(m)), (r !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (m = s ? 1 - m : m, e.dispatch((0, u.parameterChanged)(b, m))), {
                            elementHovered: O,
                            clientX: p,
                            clientY: g,
                            pageX: I,
                            pageY: E
                        }
                    }
                },
                [G]: {
                    types: J,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: a
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: r
                        } = ea(), c = i / (o - r);
                        c = a ? 1 - c : c, e.dispatch((0, u.parameterChanged)(n, c))
                    }
                },
                [M]: {
                    types: J,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: a
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: r,
                            scrollWidth: c,
                            scrollHeight: l,
                            clientHeight: s
                        } = ea(), {
                            basedOn: f,
                            selectedAxis: p,
                            continuousParameterGroupId: g,
                            startsEntering: I,
                            startsExiting: E,
                            addEndOffset: y,
                            addStartOffset: T,
                            addOffsetValue: m = 0,
                            endOffsetValue: b = 0
                        } = n;
                        if (f === d.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === p ? o / c : r / l;
                            return e !== i.scrollPercent && t.dispatch((0, u.parameterChanged)(g, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = B(a, g),
                                o = e.getBoundingClientRect(),
                                r = (T ? m : 0) / 100,
                                c = (y ? b : 0) / 100;
                            r = I ? r : 1 - r, c = E ? c : 1 - c;
                            let d = o.top + Math.min(o.height * r, s),
                                f = o.top + o.height * c,
                                p = Math.min(s + (f - d), l),
                                O = Math.min(Math.max(0, s - d), p) / p;
                            return O !== i.scrollPercent && t.dispatch((0, u.parameterChanged)(n, O)), {
                                scrollPercent: O
                            }
                        }
                    }
                },
                [C]: eg,
                [w]: eg,
                [N]: { ...et,
                    handler: ed((e, t) => {
                        t.scrollingDown && $(e)
                    })
                },
                [P]: { ...et,
                    handler: ed((e, t) => {
                        !t.scrollingDown && $(e)
                    })
                },
                [V]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: q(j, (i = $, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && i(e), n
                    }))
                },
                [x]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: q(j, (o = $, (e, t) => (t || o(e), {
                        started: !0
                    })))
                }
            }
        },
        4609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a
            } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => {
                if (t.type === a) return t.payload.ixData || Object.freeze({});
                return e
            }
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let a = n(7087),
                i = n(9468),
                o = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_STOPPED: c,
                    IX2_INSTANCE_ADDED: l,
                    IX2_INSTANCE_STARTED: d,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = a.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: p,
                    createBezierEasing: g
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: I
                } = a.IX2EngineConstants,
                {
                    getItemConfigByKey: E,
                    getRenderType: y,
                    getStyleProp: T
                } = i.IX2VanillaUtils,
                m = (e, t) => {
                    let n, a, i, r;
                    let {
                        position: c,
                        parameterId: l,
                        actionGroups: d,
                        destinationKeys: s,
                        smoothing: u,
                        restingValue: g,
                        actionTypeId: I,
                        customEasingFn: y,
                        skipMotion: T,
                        skipToValue: m
                    } = e, {
                        parameters: b
                    } = t.payload, O = Math.max(1 - u, .01), _ = b[l];
                    null == _ && (O = 1, _ = g);
                    let v = f((Math.max(_, 0) || 0) - c),
                        h = T ? m : f(c + v * O),
                        S = 100 * h;
                    if (h === c && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = d; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = d[e];
                        if (0 === e && (n = o[0]), S >= t) {
                            n = o[0];
                            let c = d[e + 1],
                                l = c && S !== t;
                            a = l ? c.actionItems[0] : null, l && (i = t / 100, r = (c.keyframe - t) / 100)
                        }
                    }
                    let A = {};
                    if (n && !a)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            A[t] = E(I, t, n.config)
                        } else if (n && a && void 0 !== i && void 0 !== r) {
                            let e = (h - i) / r,
                                t = p(n.config.easing, e, y);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = E(I, i, n.config),
                                    r = (E(I, i, a.config) - o) * t + o;
                                A[i] = r
                            }
                        }
                    return (0, o.merge)(e, {
                        position: h,
                        current: A
                    })
                },
                b = (e, t) => {
                    let {
                        active: n,
                        origin: a,
                        start: i,
                        immediate: r,
                        renderType: c,
                        verbose: l,
                        actionItem: d,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: g,
                        instanceDelay: E,
                        customEasingFn: y,
                        skipMotion: T
                    } = e, m = d.config.easing, {
                        duration: b,
                        delay: O
                    } = d.config;
                    null != g && (b = g), O = null != E ? E : O, c === I ? b = 0 : (r || T) && (b = O = 0);
                    let {
                        now: _
                    } = t.payload;
                    if (n && a) {
                        let t = _ - (i + O);
                        if (l) {
                            let t = b + O,
                                n = f(Math.min(Math.max(0, (_ - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / b), 1)),
                            r = p(m, n, y),
                            c = {},
                            d = null;
                        return u.length && (d = u.reduce((e, t) => {
                            let n = s[t],
                                i = parseFloat(a[t]) || 0,
                                o = parseFloat(n) - i;
                            return e[t] = o * r + i, e
                        }, {})), c.current = d, c.position = n, 1 === n && (c.active = !1, c.complete = !0), (0, o.merge)(e, c)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case r:
                            return t.payload.ixInstances || Object.freeze({});
                        case c:
                            return Object.freeze({});
                        case l:
                            {
                                let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: l,
                                    actionListId: d,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: p,
                                    immediate: I,
                                    verbose: E,
                                    continuous: m,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: _,
                                    restingValue: v,
                                    pluginInstance: h,
                                    pluginDuration: S,
                                    instanceDelay: A,
                                    skipMotion: R,
                                    skipToValue: L
                                } = t.payload,
                                {
                                    actionTypeId: N
                                } = i,
                                C = y(N),
                                w = T(C, N),
                                P = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]),
                                {
                                    easing: M
                                } = i.config;
                                return (0, o.set)(e, n, {
                                    id: n,
                                    elementId: a,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: f,
                                    destination: p,
                                    destinationKeys: P,
                                    immediate: I,
                                    verbose: E,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: N,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: l,
                                    actionListId: d,
                                    groupIndex: s,
                                    renderType: C,
                                    isCarrier: u,
                                    styleProp: w,
                                    continuous: m,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: _,
                                    restingValue: v,
                                    pluginInstance: h,
                                    pluginDuration: S,
                                    instanceDelay: A,
                                    skipMotion: R,
                                    skipToValue: L,
                                    customEasingFn: Array.isArray(M) && 4 === M.length ? g(M) : void 0
                                })
                            }
                        case d:
                            {
                                let {
                                    instanceId: n,
                                    time: a
                                } = t.payload;
                                return (0, o.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: a
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let a = {},
                                    i = Object.keys(e),
                                    {
                                        length: o
                                    } = i;
                                for (let t = 0; t < o; t++) {
                                    let o = i[t];
                                    o !== n && (a[o] = e[o])
                                }
                                return a
                            }
                        case u:
                            {
                                let n = e,
                                    a = Object.keys(e),
                                    {
                                        length: i
                                    } = a;
                                for (let r = 0; r < i; r++) {
                                    let i = a[r],
                                        c = e[i],
                                        l = c.continuous ? m : b;
                                    n = (0, o.set)(n, i, l(c, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = n(7087).IX2EngineActionTypes, r = (e = {}, t) => {
                switch (t.type) {
                    case a:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o:
                        {
                            let {
                                key: n,
                                value: a
                            } = t.payload;
                            return e[n] = a,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(9516),
                i = n(4609),
                o = n(628),
                r = n(5862),
                c = n(9468),
                l = n(7718),
                d = n(1540),
                {
                    ixElements: s
                } = c.IX2ElementsReducer,
                u = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: r.ixSession,
                    ixElements: s,
                    ixInstances: l.ixInstances,
                    ixParameters: d.ixParameters
                })
        },
        628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: r,
                    IX2_STOP_REQUESTED: c,
                    IX2_CLEAR_REQUESTED: l
                } = a.IX2EngineActionTypes,
                d = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [r]: {
                        value: "playback"
                    },
                    [c]: {
                        value: "stop"
                    },
                    [l]: {
                        value: "clear"
                    }
                }),
                u = (e = d, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: r,
                    IX2_TEST_FRAME_RENDERED: c,
                    IX2_SESSION_STOPPED: l,
                    IX2_EVENT_LISTENER_ADDED: d,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: g
                } = a.IX2EngineActionTypes,
                I = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                E = (e = I, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                })
                            }
                        case r:
                            return (0, i.set)(e, "active", !0);
                        case c:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + n)
                            }
                        case l:
                            return I;
                        case u:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", n)
                            }
                        case d:
                            {
                                let n = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", n)
                            }
                        case s:
                            {
                                let {
                                    stateKey: n,
                                    newState: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", n], a)
                            }
                        case f:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", n], a)
                            }
                        case p:
                            {
                                let {
                                    width: n,
                                    mediaQueries: a
                                } = t.payload,
                                o = a.length,
                                r = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: o
                                    } = a[e];
                                    if (n >= i && n <= o) {
                                        r = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: r
                                })
                            }
                        case g:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return l
                },
                createPluginInstance: function() {
                    return r
                },
                getPluginConfig: function() {
                    return n
                },
                getPluginDestination: function() {
                    return o
                },
                getPluginDuration: function() {
                    return a
                },
                getPluginOrigin: function() {
                    return i
                },
                renderPlugin: function() {
                    return c
                }
            });
            let n = e => e.value,
                a = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                i = e => e || {
                    value: 0
                },
                o = e => ({
                    value: e.value
                }),
                r = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                c = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a)
                },
                l = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return f
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return d
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return l
                },
                renderPlugin: function() {
                    return u
                }
            });
            let n = "--wf-rive-fit",
                a = "--wf-rive-alignment",
                i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("rive"),
                r = (e, t) => e.value.inputs[t],
                c = () => null,
                l = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: a = {}
                        } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n
                },
                d = e => e.value.inputs ? ? {},
                s = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? i(n) : null
                },
                u = (e, {
                    PLUGIN_RIVE: t
                }, i) => {
                    let r = o();
                    if (!r) return;
                    let c = r.getInstance(e),
                        l = r.rive.StateMachineInputType,
                        {
                            name: d,
                            inputs: s = {}
                        } = i.config.value || {};

                    function u(e) {
                        if (e.loaded) i();
                        else {
                            let t = () => {
                                i(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function i() {
                            let i = e.stateMachineInputs(d);
                            if (null != i) {
                                if (!e.isPlaying && e.play(d, !1), n in s || a in s) {
                                    let t = e.layout,
                                        i = s[n] ? ? t.fit,
                                        o = s[a] ? ? t.alignment;
                                    (i !== t.fit || o !== t.alignment) && (e.layout = t.copyWith({
                                        fit: i,
                                        alignment: o
                                    }))
                                }
                                for (let e in s) {
                                    if (e === n || e === a) continue;
                                    let o = i.find(t => t.name === e);
                                    if (null != o) switch (o.type) {
                                        case l.Boolean:
                                            if (null != s[e]) {
                                                let t = !!s[e];
                                                o.value = t
                                            }
                                            break;
                                        case l.Number:
                                            {
                                                let n = t[e];null != n && (o.value = n);
                                                break
                                            }
                                        case l.Trigger:
                                            s[e] && o.fire()
                                    }
                                }
                            }
                        }
                    }
                    c ? .rive ? u(c.rive) : r.setLoadHandler(e, u)
                },
                f = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return f
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return o
                },
                getPluginDestination: function() {
                    return d
                },
                getPluginDuration: function() {
                    return r
                },
                getPluginOrigin: function() {
                    return l
                },
                renderPlugin: function() {
                    return u
                }
            });
            let n = e => document.querySelector(`[data-w-id="${e}"]`),
                a = () => window.Webflow.require("spline"),
                i = (e, t) => e.filter(e => !t.includes(e)),
                o = (e, t) => e.value[t],
                r = () => null,
                c = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                l = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = i(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = c[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = c[t], e), {})
                },
                d = e => e.value,
                s = (e, t) => {
                    let a = t ? .config ? .target ? .pluginElement;
                    return a ? n(a) : null
                },
                u = (e, t, n) => {
                    let i = a();
                    if (!i) return;
                    let o = i.getInstance(e),
                        r = n.config.target.objectId,
                        c = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = r && e.findObjectById(r);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: a
                            } = t;
                            null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
                        };
                    o ? c(o.spline) : i.setLoadHandler(e, c)
                },
                f = () => null
        },
        1407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return u
                },
                createPluginInstance: function() {
                    return l
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return s
                }
            });
            let a = n(380),
                i = (e, t) => e.value[t],
                o = () => null,
                r = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        i = t.config.target.objectId,
                        o = getComputedStyle(document.documentElement).getPropertyValue(i);
                    return null != n.size ? {
                        size: parseInt(o, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(o)
                    } : null != n.red && null != n.green && null != n.blue ? (0, a.normalizeColor)(o) : void 0
                },
                c = e => e.value,
                l = () => null,
                d = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => [e, t, n, a].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => `rgba(${e}, ${t}, ${n}, ${a})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => {
                            if ("-" === t) return e;
                            return `${e}${t}`
                        }
                    }
                },
                s = (e, t, n) => {
                    let {
                        target: {
                            objectId: a
                        },
                        value: {
                            unit: i
                        }
                    } = n.config, o = t.PLUGIN_VARIABLE, r = Object.values(d).find(e => e.match(o, i));
                    r && document.documentElement.style.setProperty(a, r.getValue(o, i))
                },
                u = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        3690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(7087),
                i = d(n(7377)),
                o = d(n(2866)),
                r = d(n(2570)),
                c = d(n(1407));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function d(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = l(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            let s = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...r
                }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return T
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return f
                },
                IX2_CLEAR_REQUESTED: function() {
                    return d
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return y
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return s
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return u
                },
                IX2_INSTANCE_ADDED: function() {
                    return g
                },
                IX2_INSTANCE_REMOVED: function() {
                    return E
                },
                IX2_INSTANCE_STARTED: function() {
                    return I
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return b
                },
                IX2_PARAMETER_CHANGED: function() {
                    return p
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return c
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return r
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return n
                },
                IX2_SESSION_INITIALIZED: function() {
                    return a
                },
                IX2_SESSION_STARTED: function() {
                    return i
                },
                IX2_SESSION_STOPPED: function() {
                    return o
                },
                IX2_STOP_REQUESTED: function() {
                    return l
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return O
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return m
                }
            });
            let n = "IX2_RAW_DATA_IMPORTED",
                a = "IX2_SESSION_INITIALIZED",
                i = "IX2_SESSION_STARTED",
                o = "IX2_SESSION_STOPPED",
                r = "IX2_PREVIEW_REQUESTED",
                c = "IX2_PLAYBACK_REQUESTED",
                l = "IX2_STOP_REQUESTED",
                d = "IX2_CLEAR_REQUESTED",
                s = "IX2_EVENT_LISTENER_ADDED",
                u = "IX2_EVENT_STATE_CHANGED",
                f = "IX2_ANIMATION_FRAME_CHANGED",
                p = "IX2_PARAMETER_CHANGED",
                g = "IX2_INSTANCE_ADDED",
                I = "IX2_INSTANCE_STARTED",
                E = "IX2_INSTANCE_REMOVED",
                y = "IX2_ELEMENT_STATE_CHANGED",
                T = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                m = "IX2_VIEWPORT_WIDTH_CHANGED",
                b = "IX2_MEDIA_QUERIES_DEFINED",
                O = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ABSTRACT_NODE: function() {
                    return J
                },
                AUTO: function() {
                    return B
                },
                BACKGROUND: function() {
                    return F
                },
                BACKGROUND_COLOR: function() {
                    return U
                },
                BAR_DELIMITER: function() {
                    return W
                },
                BORDER_COLOR: function() {
                    return x
                },
                BOUNDARY_SELECTOR: function() {
                    return r
                },
                CHILDREN: function() {
                    return Q
                },
                COLON_DELIMITER: function() {
                    return j
                },
                COLOR: function() {
                    return G
                },
                COMMA_DELIMITER: function() {
                    return Y
                },
                CONFIG_UNIT: function() {
                    return g
                },
                CONFIG_VALUE: function() {
                    return s
                },
                CONFIG_X_UNIT: function() {
                    return u
                },
                CONFIG_X_VALUE: function() {
                    return c
                },
                CONFIG_Y_UNIT: function() {
                    return f
                },
                CONFIG_Y_VALUE: function() {
                    return l
                },
                CONFIG_Z_UNIT: function() {
                    return p
                },
                CONFIG_Z_VALUE: function() {
                    return d
                },
                DISPLAY: function() {
                    return k
                },
                FILTER: function() {
                    return w
                },
                FLEX: function() {
                    return D
                },
                FONT_VARIATION_SETTINGS: function() {
                    return P
                },
                HEIGHT: function() {
                    return V
                },
                HTML_ELEMENT: function() {
                    return K
                },
                IMMEDIATE_CHILDREN: function() {
                    return z
                },
                IX2_ID_DELIMITER: function() {
                    return n
                },
                OPACITY: function() {
                    return C
                },
                PARENT: function() {
                    return $
                },
                PLAIN_OBJECT: function() {
                    return Z
                },
                PRESERVE_3D: function() {
                    return q
                },
                RENDER_GENERAL: function() {
                    return et
                },
                RENDER_PLUGIN: function() {
                    return ea
                },
                RENDER_STYLE: function() {
                    return en
                },
                RENDER_TRANSFORM: function() {
                    return ee
                },
                ROTATE_X: function() {
                    return h
                },
                ROTATE_Y: function() {
                    return S
                },
                ROTATE_Z: function() {
                    return A
                },
                SCALE_3D: function() {
                    return v
                },
                SCALE_X: function() {
                    return b
                },
                SCALE_Y: function() {
                    return O
                },
                SCALE_Z: function() {
                    return _
                },
                SIBLINGS: function() {
                    return H
                },
                SKEW: function() {
                    return R
                },
                SKEW_X: function() {
                    return L
                },
                SKEW_Y: function() {
                    return N
                },
                TRANSFORM: function() {
                    return I
                },
                TRANSLATE_3D: function() {
                    return m
                },
                TRANSLATE_X: function() {
                    return E
                },
                TRANSLATE_Y: function() {
                    return y
                },
                TRANSLATE_Z: function() {
                    return T
                },
                WF_PAGE: function() {
                    return a
                },
                WIDTH: function() {
                    return M
                },
                WILL_CHANGE: function() {
                    return X
                },
                W_MOD_IX: function() {
                    return o
                },
                W_MOD_JS: function() {
                    return i
                }
            });
            let n = "|",
                a = "data-wf-page",
                i = "w-mod-js",
                o = "w-mod-ix",
                r = ".w-dyn-item",
                c = "xValue",
                l = "yValue",
                d = "zValue",
                s = "value",
                u = "xUnit",
                f = "yUnit",
                p = "zUnit",
                g = "unit",
                I = "transform",
                E = "translateX",
                y = "translateY",
                T = "translateZ",
                m = "translate3d",
                b = "scaleX",
                O = "scaleY",
                _ = "scaleZ",
                v = "scale3d",
                h = "rotateX",
                S = "rotateY",
                A = "rotateZ",
                R = "skew",
                L = "skewX",
                N = "skewY",
                C = "opacity",
                w = "filter",
                P = "font-variation-settings",
                M = "width",
                V = "height",
                U = "backgroundColor",
                F = "background",
                x = "borderColor",
                G = "color",
                k = "display",
                D = "flex",
                X = "willChange",
                B = "AUTO",
                Y = ",",
                j = ":",
                W = "|",
                Q = "CHILDREN",
                z = "IMMEDIATE_CHILDREN",
                H = "SIBLINGS",
                $ = "PARENT",
                q = "preserve-3d",
                K = "HTML_ELEMENT",
                Z = "PLAIN_OBJECT",
                J = "ABSTRACT_NODE",
                ee = "RENDER_TRANSFORM",
                et = "RENDER_GENERAL",
                en = "RENDER_STYLE",
                ea = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ActionAppliesTo: function() {
                    return a
                },
                ActionTypeConsts: function() {
                    return n
                }
            });
            let n = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                a = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ActionTypeConsts: function() {
                    return i.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return o
                },
                IX2EngineConstants: function() {
                    return r
                },
                QuickEffectIds: function() {
                    return a.QuickEffectIds
                }
            });
            let a = c(n(1833), t),
                i = c(n(262), t);
            c(n(8704), t), c(n(3213), t);
            let o = d(n(8023)),
                r = d(n(2686));

            function c(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function d(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = l(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        3213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: a,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: r,
                STYLE_SIZE: c,
                STYLE_FILTER: l,
                STYLE_FONT_VARIATION: d
            } = n(262).ActionTypeConsts, s = {
                [a]: !0,
                [i]: !0,
                [o]: !0,
                [r]: !0,
                [c]: !0,
                [l]: !0,
                [d]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                EventAppliesTo: function() {
                    return a
                },
                EventBasedOn: function() {
                    return i
                },
                EventContinuousMouseAxes: function() {
                    return o
                },
                EventLimitAffectedElements: function() {
                    return r
                },
                EventTypeConsts: function() {
                    return n
                },
                QuickEffectDirectionConsts: function() {
                    return l
                },
                QuickEffectIds: function() {
                    return c
                }
            });
            let n = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                a = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                i = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                o = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                r = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                c = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                l = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function a(e) {
                let t, a, i;
                let o = 1,
                    r = e.replace(/\s/g, "").toLowerCase(),
                    c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
                if (c.startsWith("#")) {
                    let e = c.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (c.startsWith("rgba")) {
                    let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (c.startsWith("rgb")) {
                    let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (c.startsWith("hsla")) {
                    let e, n, r;
                    let l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(l[0]),
                        s = parseFloat(l[1].replace("%", "")) / 100,
                        u = parseFloat(l[2].replace("%", "")) / 100;
                    o = parseFloat(l[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(d / 60 % 2 - 1)),
                        g = u - f / 2;
                    d >= 0 && d < 60 ? (e = f, n = p, r = 0) : d >= 60 && d < 120 ? (e = p, n = f, r = 0) : d >= 120 && d < 180 ? (e = 0, n = f, r = p) : d >= 180 && d < 240 ? (e = 0, n = p, r = f) : d >= 240 && d < 300 ? (e = p, n = 0, r = f) : (e = f, n = 0, r = p), t = Math.round((e + g) * 255), a = Math.round((n + g) * 255), i = Math.round((r + g) * 255)
                } else if (c.startsWith("hsl")) {
                    let e, n, o;
                    let r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(r[0]),
                        d = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * d,
                        f = u * (1 - Math.abs(l / 60 % 2 - 1)),
                        p = s - u / 2;
                    l >= 0 && l < 60 ? (e = u, n = f, o = 0) : l >= 60 && l < 120 ? (e = f, n = u, o = 0) : l >= 120 && l < 180 ? (e = 0, n = u, o = f) : l >= 180 && l < 240 ? (e = 0, n = f, o = u) : l >= 240 && l < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + p) * 255), a = Math.round((n + p) * 255), i = Math.round((o + p) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: a,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                IX2BrowserSupport: function() {
                    return a
                },
                IX2EasingUtils: function() {
                    return o
                },
                IX2Easings: function() {
                    return i
                },
                IX2ElementsReducer: function() {
                    return r
                },
                IX2VanillaPlugins: function() {
                    return c
                },
                IX2VanillaUtils: function() {
                    return l
                }
            });
            let a = s(n(2662)),
                i = s(n(8686)),
                o = s(n(3767)),
                r = s(n(5861)),
                c = s(n(1799)),
                l = s(n(4124));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function s(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        2662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                ELEMENT_MATCHES: function() {
                    return r
                },
                FLEX_PREFIXED: function() {
                    return c
                },
                IS_BROWSER_ENV: function() {
                    return i
                },
                TRANSFORM_PREFIXED: function() {
                    return l
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return s
                },
                withBrowser: function() {
                    return o
                }
            });
            let a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(9777)),
                i = "undefined" != typeof window,
                o = (e, t) => i ? e() : t,
                r = o(() => (0, a.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                c = o(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                l = o(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                d = l.split("transform")[0],
                s = d ? d + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                applyEasing: function() {
                    return l
                },
                createBezierEasing: function() {
                    return c
                },
                optimizeFloat: function() {
                    return r
                }
            });
            let a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = o(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                            c && (c.get || c.set) ? Object.defineProperty(a, r, c) : a[r] = e[r]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(8686)),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1361));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (o = function(e) {
                    return e ? n : t
                })(e)
            }

            function r(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function c(e) {
                return (0, i.default)(...e)
            }

            function l(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? r(t > 0 ? n(t) : t) : r(t > 0 && e && a[e] ? a[e](t) : t)
            }
        },
        8686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                bounce: function() {
                    return k
                },
                bouncePast: function() {
                    return D
                },
                ease: function() {
                    return i
                },
                easeIn: function() {
                    return o
                },
                easeInOut: function() {
                    return c
                },
                easeOut: function() {
                    return r
                },
                inBack: function() {
                    return C
                },
                inCirc: function() {
                    return A
                },
                inCubic: function() {
                    return u
                },
                inElastic: function() {
                    return M
                },
                inExpo: function() {
                    return v
                },
                inOutBack: function() {
                    return P
                },
                inOutCirc: function() {
                    return L
                },
                inOutCubic: function() {
                    return p
                },
                inOutElastic: function() {
                    return U
                },
                inOutExpo: function() {
                    return S
                },
                inOutQuad: function() {
                    return s
                },
                inOutQuart: function() {
                    return E
                },
                inOutQuint: function() {
                    return m
                },
                inOutSine: function() {
                    return _
                },
                inQuad: function() {
                    return l
                },
                inQuart: function() {
                    return g
                },
                inQuint: function() {
                    return y
                },
                inSine: function() {
                    return b
                },
                outBack: function() {
                    return w
                },
                outBounce: function() {
                    return N
                },
                outCirc: function() {
                    return R
                },
                outCubic: function() {
                    return f
                },
                outElastic: function() {
                    return V
                },
                outExpo: function() {
                    return h
                },
                outQuad: function() {
                    return d
                },
                outQuart: function() {
                    return I
                },
                outQuint: function() {
                    return T
                },
                outSine: function() {
                    return O
                },
                swingFrom: function() {
                    return x
                },
                swingFromTo: function() {
                    return F
                },
                swingTo: function() {
                    return G
                }
            });
            let a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1361)),
                i = (0, a.default)(.25, .1, .25, 1),
                o = (0, a.default)(.42, 0, 1, 1),
                r = (0, a.default)(0, 0, .58, 1),
                c = (0, a.default)(.42, 0, .58, 1);

            function l(e) {
                return Math.pow(e, 2)
            }

            function d(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function s(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function u(e) {
                return Math.pow(e, 3)
            }

            function f(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function p(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function g(e) {
                return Math.pow(e, 4)
            }

            function I(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function E(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function y(e) {
                return Math.pow(e, 5)
            }

            function T(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function m(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function b(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function O(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function _(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function v(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function h(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function S(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function A(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function R(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function L(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function N(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
                if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
                else return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function C(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function w(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function P(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function M(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function V(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n && (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function U(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (!n && (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function F(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function x(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function G(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function k(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
                if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
                else return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function D(e) {
                if (e < 1 / 2.75) return 7.5625 * e * e;
                if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75);
                if (e < 2.5 / 2.75) return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375);
                else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return u
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return s
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return l
                },
                isPluginType: function() {
                    return o
                },
                renderPlugin: function() {
                    return f
                }
            });
            let a = n(2662),
                i = n(3690);

            function o(e) {
                return i.pluginMethodMap.has(e)
            }
            let r = e => t => {
                    if (!a.IS_BROWSER_ENV) return () => null;
                    let n = i.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let o = n[e];
                    if (!o) throw Error(`IX2 invalid plugin method: ${e}`);
                    return o
                },
                c = r("getPluginConfig"),
                l = r("getPluginOrigin"),
                d = r("getPluginDuration"),
                s = r("getPluginDestination"),
                u = r("createPluginInstance"),
                f = r("renderPlugin"),
                p = r("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                cleanupHTMLElement: function() {
                    return eY
                },
                clearAllStyles: function() {
                    return eD
                },
                clearObjectCache: function() {
                    return ed
                },
                getActionListProgress: function() {
                    return ez
                },
                getAffectedElements: function() {
                    return eT
                },
                getComputedStyle: function() {
                    return em
                },
                getDestinationValues: function() {
                    return eR
                },
                getElementId: function() {
                    return ep
                },
                getInstanceId: function() {
                    return eu
                },
                getInstanceOrigin: function() {
                    return ev
                },
                getItemConfigByKey: function() {
                    return eA
                },
                getMaxDurationItemIndex: function() {
                    return eQ
                },
                getNamespacedParameterId: function() {
                    return eq
                },
                getRenderType: function() {
                    return eL
                },
                getStyleProp: function() {
                    return eN
                },
                mediaQueriesEqual: function() {
                    return eZ
                },
                observeStore: function() {
                    return eE
                },
                reduceListToGroup: function() {
                    return eH
                },
                reifyState: function() {
                    return eg
                },
                renderHTMLElement: function() {
                    return eC
                },
                shallowEqual: function() {
                    return l.default
                },
                shouldAllowMediaQuery: function() {
                    return eK
                },
                shouldNamespaceEventParameter: function() {
                    return e$
                },
                stringifyTarget: function() {
                    return eJ
                }
            });
            let a = p(n(4075)),
                i = p(n(1455)),
                o = p(n(5720)),
                r = n(1185),
                c = n(7087),
                l = p(n(7164)),
                d = n(3767),
                s = n(380),
                u = n(1799),
                f = n(2662);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: g,
                TRANSFORM: I,
                TRANSLATE_3D: E,
                SCALE_3D: y,
                ROTATE_X: T,
                ROTATE_Y: m,
                ROTATE_Z: b,
                SKEW: O,
                PRESERVE_3D: _,
                FLEX: v,
                OPACITY: h,
                FILTER: S,
                FONT_VARIATION_SETTINGS: A,
                WIDTH: R,
                HEIGHT: L,
                BACKGROUND_COLOR: N,
                BORDER_COLOR: C,
                COLOR: w,
                CHILDREN: P,
                IMMEDIATE_CHILDREN: M,
                SIBLINGS: V,
                PARENT: U,
                DISPLAY: F,
                WILL_CHANGE: x,
                AUTO: G,
                COMMA_DELIMITER: k,
                COLON_DELIMITER: D,
                BAR_DELIMITER: X,
                RENDER_TRANSFORM: B,
                RENDER_GENERAL: Y,
                RENDER_STYLE: j,
                RENDER_PLUGIN: W
            } = c.IX2EngineConstants, {
                TRANSFORM_MOVE: Q,
                TRANSFORM_SCALE: z,
                TRANSFORM_ROTATE: H,
                TRANSFORM_SKEW: $,
                STYLE_OPACITY: q,
                STYLE_FILTER: K,
                STYLE_FONT_VARIATION: Z,
                STYLE_SIZE: J,
                STYLE_BACKGROUND_COLOR: ee,
                STYLE_BORDER: et,
                STYLE_TEXT_COLOR: en,
                GENERAL_DISPLAY: ea,
                OBJECT_VALUE: ei
            } = c.ActionTypeConsts, eo = e => e.trim(), er = Object.freeze({
                [ee]: N,
                [et]: C,
                [en]: w
            }), ec = Object.freeze({
                [f.TRANSFORM_PREFIXED]: I,
                [N]: g,
                [h]: h,
                [S]: S,
                [R]: R,
                [L]: L,
                [A]: A
            }), el = new Map;

            function ed() {
                el.clear()
            }
            let es = 1;

            function eu() {
                return "i" + es++
            }
            let ef = 1;

            function ep(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id
                }
                return "e" + ef++
            }

            function eg({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let a = (0, i.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return !e[n] && (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    o = n && n.mediaQueries,
                    r = [];
                return o ? r = o.map(e => e.key) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: a,
                        mediaQueries: o,
                        mediaQueryKeys: r
                    }
                }
            }
            let eI = (e, t) => e === t;

            function eE({
                store: e,
                select: t,
                onChange: n,
                comparator: a = eI
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, r = o(function() {
                    let o = t(i());
                    if (null == o) {
                        r();
                        return
                    }!a(o, c) && n(c = o, e)
                }), c = t(i());
                return r
            }

            function ey(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    }
                }
                return {}
            }

            function eT({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: a,
                elementApi: i
            }) {
                let o, r, l;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: d
                } = e;
                if (Array.isArray(d) && d.length > 0) return d.reduce((e, o) => e.concat(eT({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: p,
                    getChildElements: g,
                    getSiblingElements: I,
                    matchSelector: E,
                    elementContains: y,
                    isSiblingNode: T
                } = i, {
                    target: m
                } = e;
                if (!m) return [];
                let {
                    id: b,
                    objectId: O,
                    selector: _,
                    selectorGuids: v,
                    appliesTo: h,
                    useEventTarget: S
                } = ey(m);
                if (O) return [el.has(O) ? el.get(O) : el.set(O, {}).get(O)];
                if (h === c.EventAppliesTo.PAGE) {
                    let e = s(b);
                    return e ? [e] : []
                }
                let A = (t ? .action ? .config ? .affectedElements ? ? {})[b || _] || {},
                    R = !!(A.id || A.selector),
                    L = t && u(ey(t.target));
                if (R ? (o = A.limitAffectedElements, r = L, l = u(A)) : r = l = u({
                        id: b,
                        selector: _,
                        selectorGuids: v
                    }), t && S) {
                    let e = n && (l || !0 === S) ? [n] : p(L);
                    if (l) {
                        if (S === U) return p(l).filter(t => e.some(e => y(t, e)));
                        if (S === P) return p(l).filter(t => e.some(e => y(e, t)));
                        if (S === V) return p(l).filter(t => e.some(e => T(e, t)))
                    }
                    return e
                }
                if (null == r || null == l) return [];
                if (f.IS_BROWSER_ENV && a) return p(l).filter(e => a.contains(e));
                if (o === P) return p(r, l);
                if (o === M) return g(p(r)).filter(E(l));
                if (o === V) return I(p(r)).filter(E(l));
                else return p(l)
            }

            function em({
                element: e,
                actionItem: t
            }) {
                if (!f.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case J:
                    case ee:
                    case et:
                    case en:
                    case ea:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let eb = /px/,
                eO = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e), e || {}),
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eM[t.type] || t.defaultValue || 0), e), e || {});

            function ev(e, t = {}, n = {}, i, o) {
                let {
                    getStyle: r
                } = o, {
                    actionTypeId: c
                } = i;
                if ((0, u.isPluginType)(c)) return (0, u.getPluginOrigin)(c)(t[c], i);
                switch (i.actionTypeId) {
                    case Q:
                    case z:
                    case H:
                    case $:
                        return t[i.actionTypeId] || ew[i.actionTypeId];
                    case K:
                        return eO(t[i.actionTypeId], i.config.filters);
                    case Z:
                        return e_(t[i.actionTypeId], i.config.fontVariations);
                    case q:
                        return {
                            value: (0, a.default)(parseFloat(r(e, h)), 1)
                        };
                    case J:
                        {
                            let t, o;
                            let c = r(e, R),
                                l = r(e, L);
                            return t = i.config.widthUnit === G ? eb.test(c) ? parseFloat(c) : parseFloat(n.width) : (0, a.default)(parseFloat(c), parseFloat(n.width)),
                            {
                                widthValue: t,
                                heightValue: o = i.config.heightUnit === G ? eb.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, a.default)(parseFloat(l), parseFloat(n.height))
                            }
                        }
                    case ee:
                    case et:
                    case en:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: i
                        }) {
                            let o = er[t],
                                r = i(e, o),
                                c = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(ex, eF.test(r) ? r : n[o]).split(k);
                            return {
                                rValue: (0, a.default)(parseInt(c[0], 10), 255),
                                gValue: (0, a.default)(parseInt(c[1], 10), 255),
                                bValue: (0, a.default)(parseInt(c[2], 10), 255),
                                aValue: (0, a.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: i.actionTypeId,
                            computedStyle: n,
                            getStyle: r
                        });
                    case ea:
                        return {
                            value: (0, a.default)(r(e, F), n.display)
                        };
                    case ei:
                        return t[i.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eA = (e, t, n) => {
                    if ((0, u.isPluginType)(e)) return (0, u.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case K:
                            {
                                let e = (0, o.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case Z:
                            {
                                let e = (0, o.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eR({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, u.isPluginType)(t.actionTypeId)) return (0, u.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case Q:
                    case z:
                    case H:
                    case $:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            }
                        }
                    case J:
                        {
                            let {
                                getStyle: a,
                                setStyle: i,
                                getProperty: o
                            } = n,
                            {
                                widthUnit: r,
                                heightUnit: c
                            } = t.config,
                            {
                                widthValue: l,
                                heightValue: d
                            } = t.config;
                            if (!f.IS_BROWSER_ENV) return {
                                widthValue: l,
                                heightValue: d
                            };
                            if (r === G) {
                                let t = a(e, R);
                                i(e, R, ""), l = o(e, "offsetWidth"), i(e, R, t)
                            }
                            if (c === G) {
                                let t = a(e, L);
                                i(e, L, ""), d = o(e, "offsetHeight"), i(e, L, t)
                            }
                            return {
                                widthValue: l,
                                heightValue: d
                            }
                        }
                    case ee:
                    case et:
                    case en:
                        {
                            let {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r,
                                globalSwatchId: c
                            } = t.config;
                            if (c && c.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, a = t(e, c), i = (0, s.normalizeColor)(a);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r
                            }
                        }
                    case K:
                        return t.config.filters.reduce(eh, {});
                    case Z:
                        return t.config.fontVariations.reduce(eS, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eL(e) {
                return /^TRANSFORM_/.test(e) ? B : /^STYLE_/.test(e) ? j : /^GENERAL_/.test(e) ? Y : /^PLUGIN_/.test(e) ? W : void 0
            }

            function eN(e, t) {
                return e === j ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eC(e, t, n, a, o, r, c, l, d) {
                switch (l) {
                    case B:
                        return function(e, t, n, a, i) {
                            let o = eU.map(e => {
                                    let n = ew[e],
                                        {
                                            xValue: a = n.xValue,
                                            yValue: i = n.yValue,
                                            zValue: o = n.zValue,
                                            xUnit: r = "",
                                            yUnit: c = "",
                                            zUnit: l = ""
                                        } = t[e] || {};
                                    switch (e) {
                                        case Q:
                                            return `${E}(${a}${r}, ${i}${c}, ${o}${l})`;
                                        case z:
                                            return `${y}(${a}${r}, ${i}${c}, ${o}${l})`;
                                        case H:
                                            return `${T}(${a}${r}) ${m}(${i}${c}) ${b}(${o}${l})`;
                                        case $:
                                            return `${O}(${a}${r}, ${i}${c})`;
                                        default:
                                            return ""
                                    }
                                }).join(" "),
                                {
                                    setStyle: r
                                } = i;
                            eG(e, f.TRANSFORM_PREFIXED, i), r(e, f.TRANSFORM_PREFIXED, o),
                                function({
                                    actionTypeId: e
                                }, {
                                    xValue: t,
                                    yValue: n,
                                    zValue: a
                                }) {
                                    return e === Q && void 0 !== a || e === z && void 0 !== a || e === H && (void 0 !== t || void 0 !== n)
                                }(a, n) && r(e, f.TRANSFORM_STYLE_PREFIXED, _)
                        }(e, t, n, o, c);
                    case j:
                        return function(e, t, n, a, o, r) {
                            let {
                                setStyle: c
                            } = r;
                            switch (a.actionTypeId) {
                                case J:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = a.config,
                                        {
                                            widthValue: o,
                                            heightValue: l
                                        } = n;void 0 !== o && (t === G && (t = "px"), eG(e, R, r), c(e, R, o + t)),
                                        void 0 !== l && (i === G && (i = "px"), eG(e, L, r), c(e, L, l + i));
                                        break
                                    }
                                case K:
                                    ! function(e, t, n, a) {
                                        let o = (0, i.default)(t, (e, t, a) => `${e} ${a}(${t}${eV(a,n)})`, ""),
                                            {
                                                setStyle: r
                                            } = a;
                                        eG(e, S, a), r(e, S, o)
                                    }(e, n, a.config, r);
                                    break;
                                case Z:
                                    ! function(e, t, n, a) {
                                        let o = (0, i.default)(t, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                            {
                                                setStyle: r
                                            } = a;
                                        eG(e, A, a), r(e, A, o)
                                    }(e, n, a.config, r);
                                    break;
                                case ee:
                                case et:
                                case en:
                                    {
                                        let t = er[a.actionTypeId],
                                            i = Math.round(n.rValue),
                                            o = Math.round(n.gValue),
                                            l = Math.round(n.bValue),
                                            d = n.aValue;eG(e, t, r),
                                        c(e, t, d >= 1 ? `rgb(${i},${o},${l})` : `rgba(${i},${o},${l},${d})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = a.config;eG(e, o, r),
                                        c(e, o, n.value + t)
                                    }
                            }
                        }(e, t, n, o, r, c);
                    case Y:
                        return function(e, t, n) {
                            let {
                                setStyle: a
                            } = n;
                            if (t.actionTypeId === ea) {
                                let {
                                    value: n
                                } = t.config;
                                a(e, F, n === v && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                                return
                            }
                        }(e, o, c);
                    case W:
                        {
                            let {
                                actionTypeId: e
                            } = o;
                            if ((0, u.isPluginType)(e)) return (0, u.renderPlugin)(e)(d, t, o)
                        }
                }
            }
            let ew = {
                    [Q]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [z]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [H]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eP = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eM = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                eV = (e, t) => {
                    let n = (0, o.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                eU = Object.keys(ew),
                eF = /^rgb/,
                ex = RegExp("rgba?\\(([^)]+)\\)");

            function eG(e, t, n) {
                if (!f.IS_BROWSER_ENV) return;
                let a = ec[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, x);
                if (!r) {
                    o(e, x, a);
                    return
                }
                let c = r.split(k).map(eo); - 1 === c.indexOf(a) && o(e, x, c.concat(a).join(k))
            }

            function ek(e, t, n) {
                if (!f.IS_BROWSER_ENV) return;
                let a = ec[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, x);
                if (!!r && -1 !== r.indexOf(a)) o(e, x, r.split(k).map(eo).filter(e => e !== a).join(k))
            }

            function eD({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: a = {},
                    actionLists: i = {}
                } = n;
                Object.keys(a).forEach(e => {
                    let n = a[e],
                        {
                            config: o
                        } = n.action,
                        {
                            actionListId: r
                        } = o,
                        c = i[r];
                    c && eX({
                        actionList: c,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eX({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eX({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e;
                a && a.forEach(e => {
                    eB({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: a
                    } = e;
                    a.forEach(e => {
                        eB({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function eB({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: a
                } = e;
                a.forEach(e => {
                    let a;
                    let {
                        actionTypeId: i,
                        config: o
                    } = e;
                    a = (0, u.isPluginType)(i) ? t => (0, u.clearPlugin)(i)(t, e) : ej({
                        effect: eW,
                        actionTypeId: i,
                        elementApi: n
                    }), eT({
                        config: o,
                        event: t,
                        elementApi: n
                    }).forEach(a)
                })
            }

            function eY(e, t, n) {
                let {
                    setStyle: a,
                    getStyle: i
                } = n, {
                    actionTypeId: o
                } = t;
                if (o === J) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === G && a(e, R, ""), n.heightUnit === G && a(e, L, "")
                }
                i(e, x) && ej({
                    effect: ek,
                    actionTypeId: o,
                    elementApi: n
                })(e)
            }
            let ej = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => a => {
                switch (t) {
                    case Q:
                    case z:
                    case H:
                    case $:
                        e(a, f.TRANSFORM_PREFIXED, n);
                        break;
                    case K:
                        e(a, S, n);
                        break;
                    case Z:
                        e(a, A, n);
                        break;
                    case q:
                        e(a, h, n);
                        break;
                    case J:
                        e(a, R, n), e(a, L, n);
                        break;
                    case ee:
                    case et:
                    case en:
                        e(a, er[t], n);
                        break;
                    case ea:
                        e(a, F, n)
                }
            };

            function eW(e, t, n) {
                let {
                    setStyle: a
                } = n;
                ek(e, t, n), a(e, t, ""), t === f.TRANSFORM_PREFIXED && a(e, f.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eQ(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, a) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, n = a)
                }), n
            }

            function ez(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: a
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, r = 0, c = 0;
                return n.forEach((e, t) => {
                    if (a && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, l = n[eQ(n)], {
                        config: d,
                        actionTypeId: s
                    } = l;
                    i.id === l.id && (c = r + o);
                    let u = eL(s) === Y ? 0 : d.duration;
                    r += d.delay + u
                }), r > 0 ? (0, d.optimizeFloat)(c / r) : 0
            }

            function eH({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e, o = [], c = e => (o.push((0, r.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return a && a.some(({
                    actionItems: e
                }) => e.some(c)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(c))
                }), (0, r.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function e$(e, {
                basedOn: t
            }) {
                return e === c.EventTypeConsts.SCROLLING_IN_VIEW && (t === c.EventBasedOn.ELEMENT || null == t) || e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT
            }

            function eq(e, t) {
                return e + D + t
            }

            function eK(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function eZ(e, t) {
                return (0, l.default)(e && e.sort(), t && t.sort())
            }

            function eJ(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + X + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: a = ""
                } = e;
                return t + X + n + X + a
            }
        },
        7164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                createElementState: function() {
                    return O
                },
                ixElements: function() {
                    return b
                },
                mergeActionState: function() {
                    return _
                }
            });
            let a = n(1185),
                i = n(7087),
                {
                    HTML_ELEMENT: o,
                    PLAIN_OBJECT: r,
                    ABSTRACT_NODE: c,
                    CONFIG_X_VALUE: l,
                    CONFIG_Y_VALUE: d,
                    CONFIG_Z_VALUE: s,
                    CONFIG_VALUE: u,
                    CONFIG_X_UNIT: f,
                    CONFIG_Y_UNIT: p,
                    CONFIG_Z_UNIT: g,
                    CONFIG_UNIT: I
                } = i.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: E,
                    IX2_INSTANCE_ADDED: y,
                    IX2_ELEMENT_STATE_CHANGED: T
                } = i.IX2EngineActionTypes,
                m = {},
                b = (e = m, t = {}) => {
                    switch (t.type) {
                        case E:
                            return m;
                        case y:
                            {
                                let {
                                    elementId: n,
                                    element: i,
                                    origin: o,
                                    actionItem: r,
                                    refType: c
                                } = t.payload,
                                {
                                    actionTypeId: l
                                } = r,
                                d = e;
                                return (0, a.getIn)(d, [n, i]) !== i && (d = O(d, i, c, n, r)),
                                _(d, n, l, o, r)
                            }
                        case T:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: a,
                                    current: i,
                                    actionItem: o
                                } = t.payload;
                                return _(e, n, a, i, o)
                            }
                        default:
                            return e
                    }
                };

            function O(e, t, n, i, o) {
                let c = n === r ? (0, a.getIn)(o, ["config", "target", "objectId"]) : null;
                return (0, a.mergeIn)(e, [i], {
                    id: i,
                    ref: t,
                    refId: c,
                    refType: n
                })
            }

            function _(e, t, n, i, o) {
                let r = function(e) {
                    let {
                        config: t
                    } = e;
                    return v.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            o = t[a],
                            r = t[i];
                        return null != o && null != r && (e[i] = r), e
                    }, {})
                }(o);
                return (0, a.mergeIn)(e, [t, "refState", n], i, r)
            }
            let v = [
                [l, f],
                [d, p],
                [s, g],
                [u, I]
            ]
        },
        4311: function() {
            Webflow.require("ix2").init({
                events: {
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".showcase-image-link-container",
                            originalId: "5d82cb59cf90c934e34828b1|5057511c-c152-83b0-90e0-59919e703ba3",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".showcase-image-link-container",
                            originalId: "5d82cb59cf90c934e34828b1|5057511c-c152-83b0-90e0-59919e703ba3",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1775c70a3df
                    },
                    "e-16": {
                        id: "e-16",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-11"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".showcase-image-link-container",
                            originalId: "5d82cb59cf90c934e34828b1|5057511c-c152-83b0-90e0-59919e703ba3",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".showcase-image-link-container",
                            originalId: "5d82cb59cf90c934e34828b1|5057511c-c152-83b0-90e0-59919e703ba3",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1775c70a3e2
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-12",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            selector: ".project-2-container",
                            originalId: "67b0c2c1a3b03ecab8dfa696|57207102-3d9b-e662-46c5-a29e0e849567",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-2-container",
                            originalId: "67b0c2c1a3b03ecab8dfa696|57207102-3d9b-e662-46c5-a29e0e849567",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-12-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-12-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x17fba04e292
                    },
                    "e-49": {
                        id: "e-49",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-17",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".project-hero-section",
                            originalId: "67b0c2c1a3b03ecab8dfa659|dede1bd6-94c1-cbe4-0231-5c2c56a84c91",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-hero-section",
                            originalId: "67b0c2c1a3b03ecab8dfa659|dede1bd6-94c1-cbe4-0231-5c2c56a84c91",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-17-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17b28fd0b20
                    },
                    "e-81": {
                        id: "e-81",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-569"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".project-1-button",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7279",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-1-button",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7279",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16fda4647ad
                    },
                    "e-82": {
                        id: "e-82",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-578"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".project-1-button",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7279",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-1-button",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7279",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16fda4647ad
                    },
                    "e-83": {
                        id: "e-83",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-27",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".project-1-image-container",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-1-image-container",
                            originalId: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-27-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x16fd4e709c5
                    },
                    "e-148": {
                        id: "e-148",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-149"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|9cc63cc2-7c7d-3c44-28b7-18da8a1d33b8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|9cc63cc2-7c7d-3c44-28b7-18da8a1d33b8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-150": {
                        id: "e-150",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-970"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|e451c0d0-b168-7909-ded7-fe76d1ae6429",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|e451c0d0-b168-7909-ded7-fe76d1ae6429",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-152": {
                        id: "e-152",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-153"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|0e28282b-50e2-6af7-4102-7ad5abcbd006",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|0e28282b-50e2-6af7-4102-7ad5abcbd006",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-154": {
                        id: "e-154",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-155"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|edb020c2-61dc-9803-761f-d602806f8da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|edb020c2-61dc-9803-761f-d602806f8da6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-157"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|bc274b84-3b8b-78f4-15a0-7f32a59ff054",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|bc274b84-3b8b-78f4-15a0-7f32a59ff054",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-170": {
                        id: "e-170",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-171"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|57207102-3d9b-e662-46c5-a29e0e84969e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|57207102-3d9b-e662-46c5-a29e0e84969e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-178": {
                        id: "e-178",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-179"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|e19d1b95-38eb-f928-ed67-47e56aac48a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|e19d1b95-38eb-f928-ed67-47e56aac48a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-180": {
                        id: "e-180",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-181"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|074d149f-9a32-9bc6-b9d6-569bc4bcd53c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|074d149f-9a32-9bc6-b9d6-569bc4bcd53c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b25b716b9
                    },
                    "e-275": {
                        id: "e-275",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_ACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1406"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1767d60037b
                    },
                    "e-302": {
                        id: "e-302",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_INACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1405"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1767d60038e
                    },
                    "e-324": {
                        id: "e-324",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1432"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".skill-card",
                            originalId: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".skill-card",
                            originalId: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b45046664
                    },
                    "e-338": {
                        id: "e-338",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1269"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a94e0d30a
                    },
                    "e-339": {
                        id: "e-339",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-42",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1268"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a94e0d30a
                    },
                    "e-340": {
                        id: "e-340",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-979"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0d699ee9-bfec-d02b-d6ea-c3edeeae146e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0d699ee9-bfec-d02b-d6ea-c3edeeae146e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b4883bb47
                    },
                    "e-341": {
                        id: "e-341",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-340"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0d699ee9-bfec-d02b-d6ea-c3edeeae146e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0d699ee9-bfec-d02b-d6ea-c3edeeae146e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b4883bb47
                    },
                    "e-348": {
                        id: "e-348",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-349"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa67a|ccac70a0-55c0-9348-1762-24548454d772",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa67a|ccac70a0-55c0-9348-1762-24548454d772",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b4dba3a67
                    },
                    "e-406": {
                        id: "e-406",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-407"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".next-project",
                            originalId: "67b0c2c1a3b03ecab8dfa659|4b3be214-6ed9-47a0-8e61-5a12bd4f05eb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".next-project",
                            originalId: "67b0c2c1a3b03ecab8dfa659|4b3be214-6ed9-47a0-8e61-5a12bd4f05eb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d8491a930
                    },
                    "e-407": {
                        id: "e-407",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-406"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".next-project",
                            originalId: "67b0c2c1a3b03ecab8dfa659|4b3be214-6ed9-47a0-8e61-5a12bd4f05eb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".next-project",
                            originalId: "67b0c2c1a3b03ecab8dfa659|4b3be214-6ed9-47a0-8e61-5a12bd4f05eb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d8491a930
                    },
                    "e-408": {
                        id: "e-408",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1430"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".footer",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".footer",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d706c66b9
                    },
                    "e-409": {
                        id: "e-409",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1429"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".footer",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".footer",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d706c66b9
                    },
                    "e-412": {
                        id: "e-412",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-413"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".navha-hamburger-button",
                            originalId: "65fadabfdb8e806c6eaaa82b|e4b4c55d-f67a-d4ae-dc26-d77cdbec588c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navha-hamburger-button",
                            originalId: "65fadabfdb8e806c6eaaa82b|e4b4c55d-f67a-d4ae-dc26-d77cdbec588c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a93a70fad
                    },
                    "e-413": {
                        id: "e-413",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-412"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".navha-hamburger-button",
                            originalId: "65fadabfdb8e806c6eaaa82b|e4b4c55d-f67a-d4ae-dc26-d77cdbec588c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navha-hamburger-button",
                            originalId: "65fadabfdb8e806c6eaaa82b|e4b4c55d-f67a-d4ae-dc26-d77cdbec588c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a93a70fad
                    },
                    "e-429": {
                        id: "e-429",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-430"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa642|bd4ee877-ef3a-3071-5f72-700b8ee5e582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa642|bd4ee877-ef3a-3071-5f72-700b8ee5e582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d8491a930
                    },
                    "e-430": {
                        id: "e-430",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-429"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa642|bd4ee877-ef3a-3071-5f72-700b8ee5e582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa642|bd4ee877-ef3a-3071-5f72-700b8ee5e582",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d8491a930
                    },
                    "e-641": {
                        id: "e-641",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-69",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "bc9ed5d5-4657-8930-532c-fd5aa0800c74",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bc9ed5d5-4657-8930-532c-fd5aa0800c74",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-69-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19114a33ecb
                    },
                    "e-642": {
                        id: "e-642",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-68",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "bc9ed5d5-4657-8930-532c-fd5aa0800c74",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "bc9ed5d5-4657-8930-532c-fd5aa0800c74",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-68-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19114a33ecb
                    },
                    "e-647": {
                        id: "e-647",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-648"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12727",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12727",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19114a33ecb
                    },
                    "e-659": {
                        id: "e-659",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-660"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "40e063a9-af5d-fc8a-8071-1af5a561954f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "40e063a9-af5d-fc8a-8071-1af5a561954f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1911677d46f
                    },
                    "e-726": {
                        id: "e-726",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-49",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "ce70fe33-ec3e-c6b0-87f5-80267a5981bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "ce70fe33-ec3e-c6b0-87f5-80267a5981bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-49-p",
                            smoothing: 94,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1912d723208
                    },
                    "e-739": {
                        id: "e-739",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-740"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "7e6e92c1-4af6-334e-3119-f78e5b9606b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "7e6e92c1-4af6-334e-3119-f78e5b9606b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191518ed6a2
                    },
                    "e-774": {
                        id: "e-774",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-775"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12728",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12728",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191577f95ce
                    },
                    "e-776": {
                        id: "e-776",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-777"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191577fb27a
                    },
                    "e-778": {
                        id: "e-778",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-779"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191577fc64c
                    },
                    "e-780": {
                        id: "e-780",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-96",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-781"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f1272e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191577fde20
                    },
                    "e-782": {
                        id: "e-782",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-783"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12730",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12730",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191578040f6
                    },
                    "e-784": {
                        id: "e-784",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-785"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12732",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12732",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191578058af
                    },
                    "e-786": {
                        id: "e-786",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-787"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12734",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12734",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19157807b95
                    },
                    "e-788": {
                        id: "e-788",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-96",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-789"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12736",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "b42d0bd7-183a-2c4b-eaea-e429e2f12736",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19157809456
                    },
                    "e-804": {
                        id: "e-804",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1404"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".awards-links-container",
                            originalId: "67b0c2c1a3b03ecab8dfa65f|6a7c253b-afa9-1726-ecaf-62df5838a6ea",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".awards-links-container",
                            originalId: "67b0c2c1a3b03ecab8dfa65f|6a7c253b-afa9-1726-ecaf-62df5838a6ea",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191578a35bb
                    },
                    "e-966": {
                        id: "e-966",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-109",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            selector: ".project__container",
                            originalId: "ab6208ff-4a19-f041-4d97-a6f56bc3b723",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project__container",
                            originalId: "ab6208ff-4a19-f041-4d97-a6f56bc3b723",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-109-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-109-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x1674dc21593
                    },
                    "e-981": {
                        id: "e-981",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-109",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            selector: ".project__container",
                            originalId: "67b0c2c1a3b03ecab8dfa664|5a7b38f7-06dc-0a9b-58c4-cc79a326b7db",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project__container",
                            originalId: "67b0c2c1a3b03ecab8dfa664|5a7b38f7-06dc-0a9b-58c4-cc79a326b7db",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-109-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-109-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x17fba04e292
                    },
                    "e-1268": {
                        id: "e-1268",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-125",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1269"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link-2.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link-2.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a94e0d30a
                    },
                    "e-1269": {
                        id: "e-1269",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-126",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1268"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link-2.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link-2.nav-item-dropdown",
                            originalId: "64fa21e164025f5e66000030|1fd6be2f-247d-af11-af97-dbc64b706ecd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18a94e0d30a
                    },
                    "e-1270": {
                        id: "e-1270",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-128",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1271"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".templates_wrapper.templates_wrapper--3",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".templates_wrapper.templates_wrapper--3",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919b15d7b5
                    },
                    "e-1271": {
                        id: "e-1271",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-129",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1270"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".templates_wrapper.templates_wrapper--3",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".templates_wrapper.templates_wrapper--3",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919b15d7b7
                    },
                    "e-1272": {
                        id: "e-1272",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-128",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1273"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".templates_wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".templates_wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919b1c67d1
                    },
                    "e-1273": {
                        id: "e-1273",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-129",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1272"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".templates_wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".templates_wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919b1c67d2
                    },
                    "e-1276": {
                        id: "e-1276",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-132",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1277"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".line",
                            originalId: "ebd6ca7e-3c25-d850-fa66-03c87a25add9",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".line",
                            originalId: "ebd6ca7e-3c25-d850-fa66-03c87a25add9",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919c37ae89
                    },
                    "e-1278": {
                        id: "e-1278",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1279"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|75f9df8d-d740-4e46-a85f-e7fcf887d6c5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|75f9df8d-d740-4e46-a85f-e7fcf887d6c5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1280": {
                        id: "e-1280",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1281"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|d7fc3e03-6dcc-0f85-d855-59ad6933d8aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|d7fc3e03-6dcc-0f85-d855-59ad6933d8aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1282": {
                        id: "e-1282",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1283"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|0eed6af7-e400-935e-6e8e-968a9b9df5a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|0eed6af7-e400-935e-6e8e-968a9b9df5a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1284": {
                        id: "e-1284",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1285"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|93776c11-a02e-5f25-0543-b14540c2f041",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|93776c11-a02e-5f25-0543-b14540c2f041",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1286": {
                        id: "e-1286",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1287"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|f5ad4dca-13ae-cf70-40db-0f314f0816a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|f5ad4dca-13ae-cf70-40db-0f314f0816a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1288": {
                        id: "e-1288",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-49",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|51eb88db-786d-09b0-1b82-cc48d89a17bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|51eb88db-786d-09b0-1b82-cc48d89a17bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-49-p",
                            smoothing: 94,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1919eb3055c
                    },
                    "e-1289": {
                        id: "e-1289",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-49",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|18017e57-c402-7ce9-41f0-3495df10ec2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|18017e57-c402-7ce9-41f0-3495df10ec2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-49-p",
                            smoothing: 94,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1919eb3055c
                    },
                    "e-1291": {
                        id: "e-1291",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-93",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1292"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1296": {
                        id: "e-1296",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-103",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1297"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1316": {
                        id: "e-1316",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-145",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1317"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1317": {
                        id: "e-1317",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-146",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1316"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1919eb3055c
                    },
                    "e-1359": {
                        id: "e-1359",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1360"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "28321352-92e1-d95e-9827-4e946bbdf6c7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "28321352-92e1-d95e-9827-4e946bbdf6c7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191a542b094
                    },
                    "e-1369": {
                        id: "e-1369",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-141",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1370"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav_link-wrapper",
                            originalId: "3a236f56-b861-117b-a422-c26807786427",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav_link-wrapper",
                            originalId: "3a236f56-b861-117b-a422-c26807786427",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191dceee6f8
                    },
                    "e-1370": {
                        id: "e-1370",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-142",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1369"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav_link-wrapper",
                            originalId: "3a236f56-b861-117b-a422-c26807786427",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav_link-wrapper",
                            originalId: "3a236f56-b861-117b-a422-c26807786427",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191dceee6f9
                    },
                    "e-1371": {
                        id: "e-1371",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1372"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|75f9df8d-d740-4e46-a85f-e7fcf887d6c5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|75f9df8d-d740-4e46-a85f-e7fcf887d6c5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1373": {
                        id: "e-1373",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1374"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|d7fc3e03-6dcc-0f85-d855-59ad6933d8aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|d7fc3e03-6dcc-0f85-d855-59ad6933d8aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1375": {
                        id: "e-1375",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1376"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|0eed6af7-e400-935e-6e8e-968a9b9df5a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|0eed6af7-e400-935e-6e8e-968a9b9df5a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1377": {
                        id: "e-1377",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1378"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|93776c11-a02e-5f25-0543-b14540c2f041",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|93776c11-a02e-5f25-0543-b14540c2f041",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1379": {
                        id: "e-1379",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1380"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|f5ad4dca-13ae-cf70-40db-0f314f0816a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|f5ad4dca-13ae-cf70-40db-0f314f0816a6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1381": {
                        id: "e-1381",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-49",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|51eb88db-786d-09b0-1b82-cc48d89a17bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|51eb88db-786d-09b0-1b82-cc48d89a17bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-49-p",
                            smoothing: 94,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19264cd0190
                    },
                    "e-1382": {
                        id: "e-1382",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-49",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|18017e57-c402-7ce9-41f0-3495df10ec2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|18017e57-c402-7ce9-41f0-3495df10ec2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-49-p",
                            smoothing: 94,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19264cd0190
                    },
                    "e-1383": {
                        id: "e-1383",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-85",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-85-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-85-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }],
                        createdOn: 0x19264cd0190
                    },
                    "e-1388": {
                        id: "e-1388",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-100",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|f4b03645-252d-bc76-35f7-ac9c9e101da4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|f4b03645-252d-bc76-35f7-ac9c9e101da4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-100-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 96,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-100-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 96,
                            restingState: 50
                        }],
                        createdOn: 0x19264cd0190
                    },
                    "e-1395": {
                        id: "e-1395",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-145",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1396"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1396": {
                        id: "e-1396",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-146",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1395"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264cd0190
                    },
                    "e-1399": {
                        id: "e-1399",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1400"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19128c82630
                    },
                    "e-1401": {
                        id: "e-1401",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1402"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|ec5937ec-82d7-5fcb-73c8-9ad9889804ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|ec5937ec-82d7-5fcb-73c8-9ad9889804ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191518fdb33
                    },
                    "e-1403": {
                        id: "e-1403",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1404"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".awards-links-wrapper",
                            originalId: "67034576bb1e4479a4c8b515|6a7c253b-afa9-1726-ecaf-62df5838a6ea",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".awards-links-wrapper",
                            originalId: "67034576bb1e4479a4c8b515|6a7c253b-afa9-1726-ecaf-62df5838a6ea",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191578a35bb
                    },
                    "e-1405": {
                        id: "e-1405",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_ACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-147",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1406"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1767d60037b
                    },
                    "e-1406": {
                        id: "e-1406",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SLIDER_INACTIVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-148",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1405"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".quote-slide",
                            originalId: "5fde8ec630b6112c71224f07|cfe13405-9ff7-686f-6582-e7dd656a30ec",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1767d60038e
                    },
                    "e-1413": {
                        id: "e-1413",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1414"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|2803e373-3068-89a8-c069-f5216d1c5479",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|2803e373-3068-89a8-c069-f5216d1c5479",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264e0eb2e
                    },
                    "e-1415": {
                        id: "e-1415",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1416"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|eceac7d6-76ee-a515-3b6d-4fc2977862ab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|eceac7d6-76ee-a515-3b6d-4fc2977862ab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264e2a4ad
                    },
                    "e-1417": {
                        id: "e-1417",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1418"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|65bf88b5-67cd-f480-ece1-c6824dc0a836",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|65bf88b5-67cd-f480-ece1-c6824dc0a836",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264e2a578
                    },
                    "e-1421": {
                        id: "e-1421",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1422"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "09ff0c29-bc9e-9a51-1d53-9758abf334ff",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "09ff0c29-bc9e-9a51-1d53-9758abf334ff",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19264f5198c
                    },
                    "e-1423": {
                        id: "e-1423",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-96",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1424"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|f1279437-eaea-55bb-9e67-e948d1ccc646",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|f1279437-eaea-55bb-9e67-e948d1ccc646",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x191578eaabc
                    },
                    "e-1425": {
                        id: "e-1425",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-149",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1426"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x192678c66af
                    },
                    "e-1427": {
                        id: "e-1427",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1428"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa643|abd84362-5036-ea32-9d5b-86289504d94c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa643|abd84362-5036-ea32-9d5b-86289504d94c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x192679c7544
                    },
                    "e-1429": {
                        id: "e-1429",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1430"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".footer-alt",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".footer-alt",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d706c66b9
                    },
                    "e-1430": {
                        id: "e-1430",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1429"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".footer-alt",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".footer-alt",
                            originalId: "5d990ac9574a7d61df204401|b7a966d8-cf39-d520-f55e-62e1c2cf0b3f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x16d706c66b9
                    },
                    "e-1433": {
                        id: "e-1433",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1434"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".card.services",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|d9e078a3-4e43-6ea7-1d37-ee983a0fe32b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".card.services",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|d9e078a3-4e43-6ea7-1d37-ee983a0fe32b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1926847b488
                    },
                    "e-1435": {
                        id: "e-1435",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1436"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d44",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d44",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19268496f9c
                    },
                    "e-1437": {
                        id: "e-1437",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1438"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d48",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa5e8|206cfd6a-49fd-5ed6-2e3d-dad029470d48",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19268498293
                    },
                    "e-1439": {
                        id: "e-1439",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-145",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1440"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa657",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa657",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x192684ab7d1
                    },
                    "e-1440": {
                        id: "e-1440",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-146",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1439"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "67b0c2c1a3b03ecab8dfa657",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "67b0c2c1a3b03ecab8dfa657",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x192684ab7d2
                    },
                    "e-1441": {
                        id: "e-1441",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-150",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1442"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".project-link-wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-link-wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1926a3ac920
                    },
                    "e-1442": {
                        id: "e-1442",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-151",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1441"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".project-link-wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-link-wrapper",
                            originalId: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1926a3ac921
                    }
                },
                actionLists: {
                    "a-15": {
                        id: "a-15",
                        title: "Showcase Link Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1775c70b1d6
                    },
                    "a-13": {
                        id: "a-13",
                        title: "Showcase Link Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-13-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1775c70b1d6
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Project 2 Hover",
                        continuousParameterGroups: [{
                            id: "a-12-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-12-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: -12,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-12-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: 12,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-12-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-12-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 6,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-12-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -6,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1674cc1b171
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Nav homepage white animation",
                        continuousParameterGroups: [{
                            id: "a-17-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-17-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-17-n-2",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        filters: [{
                                            type: "invert",
                                            filterId: "4e54",
                                            value: 0,
                                            unit: "%"
                                        }]
                                    }
                                }, {
                                    id: "a-17-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 95,
                                actionItems: [{
                                    id: "a-17-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-17-n-5",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        filters: [{
                                            type: "invert",
                                            filterId: "4e54",
                                            value: 0,
                                            unit: "%"
                                        }]
                                    }
                                }, {
                                    id: "a-17-n-6",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-17-n-7",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 51,
                                        bValue: 51,
                                        gValue: 51,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-17-n-8",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        filters: [{
                                            type: "invert",
                                            filterId: "4e54",
                                            value: 78,
                                            unit: "%"
                                        }]
                                    }
                                }, {
                                    id: "a-17-n-9",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17b28f2e669
                    },
                    "a-25": {
                        id: "a-25",
                        title: "Project Button In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    widthValue: 76,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16fda465622
                    },
                    "a-26": {
                        id: "a-26",
                        title: "Project Button Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    widthValue: 56,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16fda465622
                    },
                    "a-27": {
                        id: "a-27",
                        title: "Project 1 Rotate",
                        continuousParameterGroups: [{
                            id: "a-27-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-27-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288"
                                        },
                                        zValue: 35,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-27-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288"
                                        },
                                        xValue: -20,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "vw",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-27-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288"
                                        },
                                        xValue: -12,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "vw",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-27-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288"
                                        },
                                        zValue: -35,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-27-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67b0c2c1a3b03ecab8dfa696|77bace88-8bd1-763a-2937-4077c44c7288"
                                        },
                                        xValue: -20,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "vw",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x16fd388ef5d
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Fade in 1",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-18-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16ec79ddb88
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Fade in 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-31-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-31-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16ec79ddb88
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Quote Slider In View",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-33-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1767d603f7f
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Quote Slider Out View",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-34-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1767d603f7f
                    },
                    "a-40": {
                        id: "a-40",
                        title: "Skill Card",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-40-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540"
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|12002675-1110-c77f-de93-9c9fa8ead540"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18b450482cc
                    },
                    "a-41": {
                        id: "a-41",
                        title: "Nav Arrow Spin Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    zValue: -180,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18a94e0e154
                    },
                    "a-42": {
                        id: "a-42",
                        title: "Nav Arrow Spin Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-42-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18a94e0e154
                    },
                    "a-43": {
                        id: "a-43",
                        title: "Navbar menu [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-43-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-middle",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1e"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-43-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-bottom",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c24"]
                                    },
                                    yValue: -8,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-top",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1f"]
                                    },
                                    yValue: 8,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-top",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1f"]
                                    },
                                    zValue: -45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-43-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-bottom",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c24"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a9f3042c6
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Navbar menu [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-bottom",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c24"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-44-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-top",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-44-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-bottom",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c24"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-44-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuint",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-top",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1f"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-44-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 400,
                                    easing: "inOutQuint",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon-line-middle",
                                        selectorGuids: ["6c752efc-c0bd-07a1-bee3-1b8f06655c1e"]
                                    },
                                    widthValue: 24,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a9f363110
                    },
                    "a-38": {
                        id: "a-38",
                        title: "Fade in 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-38-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-38-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-38-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 400,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-38-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 400,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16ec79ddb88
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Next Project Line In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-52-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next-project-line.line-inside",
                                        selectorGuids: ["330bcca4-a3e6-581e-7999-aa3c8962acb5", "330bcca4-a3e6-581e-7999-aa3c8962acb7"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next-project-line.line-inside",
                                        selectorGuids: ["330bcca4-a3e6-581e-7999-aa3c8962acb5", "330bcca4-a3e6-581e-7999-aa3c8962acb7"]
                                    },
                                    heightValue: 100,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next-project-title",
                                        selectorGuids: ["330bcca4-a3e6-581e-7999-aa3c8962acb6"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next-project-title",
                                        selectorGuids: ["330bcca4-a3e6-581e-7999-aa3c8962acb6"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16d7063699d
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Next Project Line Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next-project-line.line-inside",
                                        selectorGuids: ["330bcca4-a3e6-581e-7999-aa3c8962acb5", "330bcca4-a3e6-581e-7999-aa3c8962acb7"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16d7063699d
                    },
                    "a-54": {
                        id: "a-54",
                        title: "Nav Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16d706c74a0
                    },
                    "a-55": {
                        id: "a-55",
                        title: "Nav In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16d706c74a0
                    },
                    "a-56": {
                        id: "a-56",
                        title: "Nav Button First Click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x160686da6f8
                    },
                    "a-57": {
                        id: "a-57",
                        title: "Nav Button Second Click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-57-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-57-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x160686da6f8
                    },
                    "a-58": {
                        id: "a-58",
                        title: "nav links",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-58-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-58-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-58-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9eb384dc",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-58-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9eb384dc",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-58-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9eb384dc",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16d7075ee1b
                    },
                    "a-59": {
                        id: "a-59",
                        title: "nav links out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 0,
                                    target: {},
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: .8
                                }
                            }, {
                                id: "a-59-n-2",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9f5b84b7",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-59-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9f5b84b7",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-59-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    globalSwatchId: "9f5b84b7",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16d7075ee1b
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Process slider",
                        continuousParameterGroups: [{
                            id: "a-69-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-69-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-69-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 43,
                                actionItems: [{
                                    id: "a-69-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-69-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-12",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-16",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 53,
                                actionItems: [{
                                    id: "a-69-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-18",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-19",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-20",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-21",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-22",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-23",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 55,
                                actionItems: [{
                                    id: "a-69-n-24",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-25",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-26",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-27",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-28",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-29",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-30",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 63,
                                actionItems: [{
                                    id: "a-69-n-31",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-32",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-33",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-34",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-35",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-36",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-37",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 65,
                                actionItems: [{
                                    id: "a-69-n-38",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-39",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-40",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-69-n-41",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-42",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .35,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-43",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-69-n-44",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 73,
                                actionItems: [{
                                    id: "a-69-n-45",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x185ab7e633e
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Move nav 1",
                        continuousParameterGroups: [{
                            id: "a-68-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-68-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 28,
                                actionItems: [{
                                    id: "a-68-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: -1.5,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: .6,
                                        unit: ""
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1859d1af6cb
                    },
                    "a-76": {
                        id: "a-76",
                        title: "(Global) Slide In  from Bottom 1",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-76-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 1.5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-76-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-76-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-76-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "5df968491a855afc4d71c715|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16ec79ddb88
                    },
                    "a-49": {
                        id: "a-49",
                        title: "Hero  3 Heading Text Shift",
                        continuousParameterGroups: [{
                            id: "a-49-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-49-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-49-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-49-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-description",
                                            selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                        },
                                        xValue: 0,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-49-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -15,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-49-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 15,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-49-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-description",
                                            selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                        },
                                        xValue: -7.5,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18b1bea82be
                    },
                    "a-96": {
                        id: "a-96",
                        title: "Fade in 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-96-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-96-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-96-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 600,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-96-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa67c|032d3360-4382-55b6-a075-f4c86c95b7b2"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16ec79ddb88
                    },
                    "a-109": {
                        id: "a-109",
                        title: "project-hover",
                        continuousParameterGroups: [{
                            id: "a-109-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-109-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: -12,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-109-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: 12,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-109-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-109-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 6,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-109-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -6,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1674cc1b171
                    },
                    "a-125": {
                        id: "a-125",
                        title: "Nav Arrow Spin Open 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-125-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    zValue: -180,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18a94e0e154
                    },
                    "a-126": {
                        id: "a-126",
                        title: "Nav Arrow Spin Close 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-126-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18a94e0e154
                    },
                    "a-128": {
                        id: "a-128",
                        title: "Template Hover on",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-128-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".templates_wrapper",
                                        selectorGuids: ["16a6c1f2-4e74-fcb6-875e-72d7f506034e"]
                                    },
                                    value: .33,
                                    unit: ""
                                }
                            }, {
                                id: "a-128-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa658|9e65bb1a-bc8d-049d-41e2-5133b0b6447c"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1919b16196f
                    },
                    "a-129": {
                        id: "a-129",
                        title: "Template Hover off",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-129-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".templates_wrapper",
                                        selectorGuids: ["16a6c1f2-4e74-fcb6-875e-72d7f506034e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1919b16196f
                    },
                    "a-132": {
                        id: "a-132",
                        title: "Line load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-132-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "ebd6ca7e-3c25-d850-fa66-03c87a25add9"
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-132-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "outQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: !0,
                                        id: "ebd6ca7e-3c25-d850-fa66-03c87a25add9"
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1919c37d123
                    },
                    "a-93": {
                        id: "a-93",
                        title: "Homepage Hero Load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-93-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 800,
                                    target: {
                                        selector: ".hero-description",
                                        selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                    },
                                    xValue: 3,
                                    yValue: 2,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 800,
                                    target: {
                                        selector: ".hero-description",
                                        selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 800,
                                    target: {},
                                    xValue: null,
                                    yValue: 1,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 800,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-93-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2e3,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2e3,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2200,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        selector: ".hero-description",
                                        selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2200,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        selector: ".hero-description",
                                        selectorGuids: ["8b929be9-0a97-987c-ba02-84a8d4d65ae3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2400,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2400,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-93-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 2600,
                                    easing: "outQuad",
                                    duration: 400,
                                    target: {},
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-93-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 2600,
                                    easing: "outQuad",
                                    duration: 400,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19156ccde52
                    },
                    "a-103": {
                        id: "a-103",
                        title: "Homepage Loader",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-103-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "inSine",
                                    duration: 200,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "inSine",
                                    duration: 200,
                                    target: {},
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "em",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-103-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "inSine",
                                    duration: 200,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "inSine",
                                    duration: 200,
                                    target: {},
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "em",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-10",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {},
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-103-n-11",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 100,
                                    easing: "outQuart",
                                    duration: 900,
                                    target: {},
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-103-n-12",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 800,
                                    target: {},
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-103-n-13",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 900,
                                    target: {},
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-14",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x183e50fc22e
                    },
                    "a-145": {
                        id: "a-145",
                        title: "Nav Show",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-145-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        id: "67b0c2c1a3b03ecab8dfa5e8|0d699ee9-bfec-d02b-d6ea-c3edeeae146e"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1919037c453
                    },
                    "a-146": {
                        id: "a-146",
                        title: "Nav Hide",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-146-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        id: "67b0c2c1a3b03ecab8dfa5e8|0d699ee9-bfec-d02b-d6ea-c3edeeae146e"
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1919037c453
                    },
                    "a-141": {
                        id: "a-141",
                        title: "Nav Link Hover on",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-141-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 400,
                                    target: {},
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-141-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {},
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-141-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x191dcef0e31
                    },
                    "a-142": {
                        id: "a-142",
                        title: "Nav Link Hover off",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-142-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-142-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {},
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x191dcef0e31
                    },
                    "a-85": {
                        id: "a-85",
                        title: "Circle Button",
                        continuousParameterGroups: [{
                            id: "a-85-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-85-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -6,
                                        yValue: null,
                                        xUnit: "rem",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -1.5,
                                        yValue: null,
                                        xUnit: "rem",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -2.5,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-85-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 6,
                                        yValue: null,
                                        xUnit: "rem",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 2.5,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 1.5,
                                        yValue: null,
                                        xUnit: "rem",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-85-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-85-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: -6,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: -1,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: -2.5,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-85-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: 6,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: 2.5,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-85-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: null,
                                        yValue: 1,
                                        xUnit: "rem",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18c60d7dd75
                    },
                    "a-100": {
                        id: "a-100",
                        title: "Orb move 3",
                        continuousParameterGroups: [{
                            id: "a-100-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-100-n",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: {
                                            rotationX: null,
                                            rotationY: -1
                                        }
                                    }
                                }, {
                                    id: "a-100-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: -.5,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-100-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: 1.01,
                                        yValue: 1.01,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-100-n-4",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: {
                                            rotationX: null,
                                            rotationY: 1
                                        }
                                    }
                                }, {
                                    id: "a-100-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: .5,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-100-n-6",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: 1.01,
                                        yValue: 1.01,
                                        locked: !0
                                    }
                                }]
                            }]
                        }, {
                            id: "a-100-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-100-n-7",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: {
                                            rotationX: -.5,
                                            rotationY: null
                                        }
                                    }
                                }, {
                                    id: "a-100-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: null,
                                        yValue: -1,
                                        xUnit: "vw",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-100-n-9",
                                    actionTypeId: "PLUGIN_SPLINE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        value: {
                                            rotationX: .5,
                                            rotationY: null
                                        }
                                    }
                                }, {
                                    id: "a-100-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-background",
                                            selectorGuids: ["522945a5-6f62-6e3a-4457-210de173d2ee"]
                                        },
                                        xValue: null,
                                        yValue: 1,
                                        xUnit: "vw",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1909e0f8340
                    },
                    "a-147": {
                        id: "a-147",
                        title: "Quote Slider In View 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-147-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".quote-card",
                                        selectorGuids: ["7cbac9ff-2319-d9a6-d316-3bc2b6f7ec96"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-147-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".quote-text-wrapper",
                                        selectorGuids: ["7cbac9ff-2319-d9a6-d316-3bc2b6f7ec99"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1767d603f7f
                    },
                    "a-148": {
                        id: "a-148",
                        title: "Quote Slider Out View 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-148-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".quote-card",
                                        selectorGuids: ["7cbac9ff-2319-d9a6-d316-3bc2b6f7ec96"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-148-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".quote-text-wrapper",
                                        selectorGuids: ["7cbac9ff-2319-d9a6-d316-3bc2b6f7ec99"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1767d603f7f
                    },
                    "a-149": {
                        id: "a-149",
                        title: "Logos Loop on Load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-149-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".scrolling-logo-container",
                                        selectorGuids: ["1aeff7a4-1ad6-33f5-f12d-eaa44e8b21f9"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-149-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e4,
                                    target: {
                                        selector: ".scrolling-logo-container",
                                        selectorGuids: ["1aeff7a4-1ad6-33f5-f12d-eaa44e8b21f9"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x192678c7879
                    },
                    "a-150": {
                        id: "a-150",
                        title: "Project Card Hover On",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-150-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-heading",
                                        selectorGuids: ["94b7560f-e48b-7412-8457-6c71953fd164"]
                                    },
                                    globalSwatchId: "--theme--primary-color",
                                    rValue: 226,
                                    bValue: 118,
                                    gValue: 195,
                                    aValue: 1
                                }
                            }, {
                                id: "a-150-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6"
                                    },
                                    yValue: -.5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1926a3ad716
                    },
                    "a-151": {
                        id: "a-151",
                        title: "Project Card Hover Off",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-151-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-heading",
                                        selectorGuids: ["94b7560f-e48b-7412-8457-6c71953fd164"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-151-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67b0c2c1a3b03ecab8dfa5e8|e3b997b0-db7d-742f-bd6e-26281dcb2ea6"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1926a3ad716
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);
