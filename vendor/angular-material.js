/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0
 */
! function(e, t, n) {
    "use strict";
    ! function() {
        t.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.gestures", "material.core.layout", "material.core.theming.palette", "material.core.theming", "material.core.animate", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.chips", "material.components.colors", "material.components.content", "material.components.datepicker", "material.components.dialog", "material.components.divider", "material.components.fabActions", "material.components.fabShared", "material.components.fabSpeedDial", "material.components.fabToolbar", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.menu", "material.components.menuBar", "material.components.navBar", "material.components.panel", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.showHide", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.virtualRepeat", "material.components.whiteframe"])
    }(),
    function() {
        function e(e, t) {
            if (t.has("$swipe")) {
                var n = "You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";
                e.warn(n)
            }
        }

        function n(e, t) {
            e.decorator("$$rAF", ["$delegate", o]), t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")
        }

        function o(e) {
            return e.throttle = function(t) {
                var n, o, i, r;
                return function() {
                    n = arguments, r = this, i = t, o || (o = !0, e(function() {
                        i.apply(r, Array.prototype.slice.call(n)), o = !1
                    }))
                }
            }, e
        }
        t.module("material.core", ["ngAnimate", "material.core.animate", "material.core.layout", "material.core.gestures", "material.core.theming"]).config(n).run(e), e.$inject = ["$log", "$injector"], n.$inject = ["$provide", "$mdThemingProvider"], o.$inject = ["$delegate"]
    }(),
    function() {
        function e() {
            return {
                restrict: "A",
                link: n
            }
        }

        function n(e, t, n) {
            var o = n.mdAutoFocus || n.mdAutofocus || n.mdSidenavFocus;
            e.$watch(o, function(e) {
                t.toggleClass("md-autofocus", e)
            })
        }
        t.module("material.core").directive("mdAutofocus", e).directive("mdAutoFocus", e).directive("mdSidenavFocus", e)
    }(),
    function() {
        function e() {
            function e(e) {
                var t = "#" === e[0] ? e.substr(1) : e,
                    n = t.length / 3,
                    o = t.substr(0, n),
                    i = t.substr(n, n),
                    r = t.substr(2 * n);
                return 1 === n && (o += o, i += i, r += r), "rgba(" + parseInt(o, 16) + "," + parseInt(i, 16) + "," + parseInt(r, 16) + ",0.1)"
            }

            function t(e) {
                e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                var t = e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
                return t.toUpperCase()
            }

            function n(e) {
                return e.replace(")", ", 0.1)").replace("(", "a(")
            }

            function o(e) {
                return e ? e.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")") : "rgb(0,0,0)"
            }
            return {
                rgbaToHex: t,
                hexToRgba: e,
                rgbToRgba: n,
                rgbaToRgb: o
            }
        }
        t.module("material.core").factory("$mdColorUtil", e)
    }(),
    function() {
        function e(e, n, o) {
            function i(e) {
                var t = d + "-" + e,
                    n = a(t),
                    o = n.charAt(0).toLowerCase() + n.substring(1);
                return r(e) ? e : r(n) ? n : r(o) ? o : e
            }

            function r(e) {
                return t.isDefined(l.style[e])
            }

            function a(e) {
                return e.replace(c, function(e, t, n, o) {
                    return o ? n.toUpperCase() : n
                })
            }
            var d = e.vendorPrefix,
                s = /webkit/i.test(d),
                c = /([:\-_]+(.))/g,
                l = document.createElement("div"),
                m = {
                    isInputKey: function(e) {
                        return e.keyCode >= 31 && e.keyCode <= 90
                    },
                    isNumPadKey: function(e) {
                        return 3 === e.location && e.keyCode >= 97 && e.keyCode <= 105
                    },
                    isNavigationKey: function(e) {
                        var t = m.KEY_CODE,
                            n = [t.SPACE, t.ENTER, t.UP_ARROW, t.DOWN_ARROW];
                        return n.indexOf(e.keyCode) != -1
                    },
                    KEY_CODE: {
                        COMMA: 188,
                        SEMICOLON: 186,
                        ENTER: 13,
                        ESCAPE: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT_ARROW: 37,
                        UP_ARROW: 38,
                        RIGHT_ARROW: 39,
                        DOWN_ARROW: 40,
                        TAB: 9,
                        BACKSPACE: 8,
                        DELETE: 46
                    },
                    CSS: {
                        TRANSITIONEND: "transitionend" + (s ? " webkitTransitionEnd" : ""),
                        ANIMATIONEND: "animationend" + (s ? " webkitAnimationEnd" : ""),
                        TRANSFORM: i("transform"),
                        TRANSFORM_ORIGIN: i("transformOrigin"),
                        TRANSITION: i("transition"),
                        TRANSITION_DURATION: i("transitionDuration"),
                        ANIMATION_PLAY_STATE: i("animationPlayState"),
                        ANIMATION_DURATION: i("animationDuration"),
                        ANIMATION_NAME: i("animationName"),
                        ANIMATION_TIMING: i("animationTimingFunction"),
                        ANIMATION_DIRECTION: i("animationDirection")
                    },
                    MEDIA: {
                        xs: "(max-width: 599px)",
                        "gt-xs": "(min-width: 600px)",
                        sm: "(min-width: 600px) and (max-width: 959px)",
                        "gt-sm": "(min-width: 960px)",
                        md: "(min-width: 960px) and (max-width: 1279px)",
                        "gt-md": "(min-width: 1280px)",
                        lg: "(min-width: 1280px) and (max-width: 1919px)",
                        "gt-lg": "(min-width: 1920px)",
                        xl: "(min-width: 1920px)",
                        landscape: "(orientation: landscape)",
                        portrait: "(orientation: portrait)",
                        print: "print"
                    },
                    MEDIA_PRIORITY: ["xl", "gt-lg", "lg", "gt-md", "md", "gt-sm", "sm", "gt-xs", "xs", "landscape", "portrait", "print"]
                };
            return m
        }
        t.module("material.core").factory("$mdConstant", e), e.$inject = ["$sniffer", "$window", "$document"]
    }(),
    function() {
        function e(e, n) {
            function o() {
                return [].concat(v)
            }

            function i() {
                return v.length
            }

            function r(e) {
                return v.length && e > -1 && e < v.length
            }

            function a(e) {
                return !!e && r(u(e) + 1)
            }

            function d(e) {
                return !!e && r(u(e) - 1)
            }

            function s(e) {
                return r(e) ? v[e] : null
            }

            function c(e, t) {
                return v.filter(function(n) {
                    return n[e] === t
                })
            }

            function l(e, n) {
                return e ? (t.isNumber(n) || (n = v.length), v.splice(n, 0, e), u(e)) : -1
            }

            function m(e) {
                p(e) && v.splice(u(e), 1)
            }

            function u(e) {
                return v.indexOf(e)
            }

            function p(e) {
                return e && u(e) > -1
            }

            function h() {
                return v.length ? v[0] : null
            }

            function f() {
                return v.length ? v[v.length - 1] : null
            }

            function g(e, o, i, a) {
                i = i || b;
                for (var d = u(o);;) {
                    if (!r(d)) return null;
                    var s = d + (e ? -1 : 1),
                        c = null;
                    if (r(s) ? c = v[s] : n && (c = e ? f() : h(), s = u(c)), null === c || s === a) return null;
                    if (i(c)) return c;
                    t.isUndefined(a) && (a = s), d = s
                }
            }
            var b = function() {
                return !0
            };
            e && !t.isArray(e) && (e = Array.prototype.slice.call(e)), n = !!n;
            var v = e || [];
            return {
                items: o,
                count: i,
                inRange: r,
                contains: p,
                indexOf: u,
                itemAt: s,
                findBy: c,
                add: l,
                remove: m,
                first: h,
                last: f,
                next: t.bind(null, g, !1),
                previous: t.bind(null, g, !0),
                hasPrevious: d,
                hasNext: a
            }
        }
        t.module("material.core").config(["$provide", function(t) {
            t.decorator("$mdUtil", ["$delegate", function(t) {
                return t.iterator = e, t
            }])
        }])
    }(),
    function() {
        function e(e, n, o) {
            function i(e) {
                var n = u[e];
                t.isUndefined(n) && (n = u[e] = r(e));
                var o = h[n];
                return t.isUndefined(o) && (o = a(n)), o
            }

            function r(t) {
                return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
            }

            function a(e) {
                var t = p[e];
                return t || (t = p[e] = o.matchMedia(e)), t.addListener(d), h[t.media] = !!t.matches
            }

            function d(e) {
                n.$evalAsync(function() {
                    h[e.media] = !!e.matches
                })
            }

            function s(e) {
                return p[e]
            }

            function c(t, n) {
                for (var o = 0; o < e.MEDIA_PRIORITY.length; o++) {
                    var i = e.MEDIA_PRIORITY[o];
                    if (p[u[i]].matches) {
                        var r = m(t, n + "-" + i);
                        if (t[r]) return t[r]
                    }
                }
                return t[m(t, n)]
            }

            function l(n, o, i) {
                var r = [];
                return n.forEach(function(n) {
                        var a = m(o, n);
                        t.isDefined(o[a]) && r.push(o.$observe(a, t.bind(void 0, i, null)));
                        for (var d in e.MEDIA) a = m(o, n + "-" + d), t.isDefined(o[a]) && r.push(o.$observe(a, t.bind(void 0, i, d)))
                    }),
                    function() {
                        r.forEach(function(e) {
                            e()
                        })
                    }
            }

            function m(e, t) {
                return f[t] || (f[t] = e.$normalize(t))
            }
            var u = {},
                p = {},
                h = {},
                f = {};
            return i.getResponsiveAttribute = c, i.getQuery = s, i.watchResponsiveAttributes = l, i
        }
        t.module("material.core").factory("$mdMedia", e), e.$inject = ["$mdConstant", "$rootScope", "$window"]
    }(),
    function() {
        function e(e, n) {
            function o(e) {
                return e = t.isArray(e) ? e : [e], e.forEach(function(t) {
                    d.forEach(function(n) {
                        e.push(n + "-" + t)
                    })
                }), e
            }

            function i(e) {
                return e = t.isArray(e) ? e : [e], o(e).map(function(e) {
                    return "[" + e + "]"
                }).join(",")
            }

            function r(e, t) {
                e = e[0] || e;
                for (var n = o(t), i = 0; i < n.length; i++)
                    if (e.hasAttribute(n[i])) return !0;
                return !1
            }

            function a(e, t) {
                e = e[0] || e, o(t).forEach(function(t) {
                    e.removeAttribute(t)
                })
            }
            var d = ["data", "x"];
            return e ? n ? i(e) : o(e) : {
                buildList: o,
                buildSelector: i,
                hasAttribute: r,
                removeAttribute: a
            }
        }
        t.module("material.core").config(["$provide", function(t) {
            t.decorator("$mdUtil", ["$delegate", function(t) {
                return t.prefixer = e, t
            }])
        }])
    }(),
    function() {
        function o(o, r, a, d, s, c, l, m, u, p) {
            function h(e) {
                return e ? f(e) || g(e) ? e : e + "px" : "0"
            }

            function f(e) {
                return String(e).indexOf("px") > -1
            }

            function g(e) {
                return String(e).indexOf("%") > -1
            }

            function b(e) {
                return e[0] || e
            }
            var v = c.startSymbol(),
                E = c.endSymbol(),
                $ = "{{" === v && "}}" === E,
                C = function(e, n, o) {
                    var i = !1;
                    if (e && e.length) {
                        var r = u.getComputedStyle(e[0]);
                        i = t.isDefined(r[n]) && (!o || r[n] == o)
                    }
                    return i
                },
                y = {
                    dom: {},
                    now: e.performance ? t.bind(e.performance, e.performance.now) : Date.now || function() {
                        return (new Date).getTime()
                    },
                    bidi: function(e, n, i, r) {
                        var a = !("rtl" == o[0].dir || "rtl" == o[0].body.dir);
                        if (0 == arguments.length) return a ? "ltr" : "rtl";
                        var d = t.element(e);
                        a && t.isDefined(i) ? d.css(n, h(i)) : !a && t.isDefined(r) && d.css(n, h(r))
                    },
                    bidiProperty: function(e, n, i, r) {
                        var a = !("rtl" == o[0].dir || "rtl" == o[0].body.dir),
                            d = t.element(e);
                        a && t.isDefined(n) ? (d.css(n, h(r)), d.css(i, "")) : !a && t.isDefined(i) && (d.css(i, h(r)), d.css(n, ""))
                    },
                    clientRect: function(e, t, n) {
                        var o = b(e);
                        t = b(t || o.offsetParent || document.body);
                        var i = o.getBoundingClientRect(),
                            r = n ? t.getBoundingClientRect() : {
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0
                            };
                        return {
                            left: i.left - r.left,
                            top: i.top - r.top,
                            width: i.width,
                            height: i.height
                        }
                    },
                    offsetRect: function(e, t) {
                        return y.clientRect(e, t, !0)
                    },
                    nodesToArray: function(e) {
                        e = e || [];
                        for (var t = [], n = 0; n < e.length; ++n) t.push(e.item(n));
                        return t
                    },
                    scrollTop: function(e) {
                        e = t.element(e || o[0].body);
                        var i = e[0] == o[0].body ? o[0].body : n,
                            r = i ? i.scrollTop + i.parentElement.scrollTop : 0;
                        return r || Math.abs(e[0].getBoundingClientRect().top)
                    },
                    findFocusTarget: function(e, n) {
                        function o(e, n) {
                            var o, i = e[0].querySelectorAll(n);
                            return i && i.length && i.length && t.forEach(i, function(e) {
                                e = t.element(e);
                                var n = e.hasClass("md-autofocus");
                                n && (o = e)
                            }), o
                        }
                        var i, r = this.prefixer("md-autofocus", !0);
                        return i = o(e, n || r), i || n == r || (i = o(e, this.prefixer("md-auto-focus", !0)), i || (i = o(e, r))), i
                    },
                    disableScrollAround: function(e, n, i) {
                        function r(e) {
                            function n(e) {
                                e.preventDefault()
                            }
                            e = t.element(e || s);
                            var o;
                            return i && i.disableScrollMask ? o = e : (e = e[0], o = t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'), e.appendChild(o[0])), o.on("wheel", n), o.on("touchmove", n),
                                function() {
                                    o.off("wheel"), o.off("touchmove"), o[0].parentNode.removeChild(o[0]), delete y.disableScrollAround._enableScrolling
                                }
                        }

                        function a() {
                            var e = s.parentNode,
                                t = e.style.cssText || "",
                                n = s.style.cssText || "",
                                o = y.scrollTop(s),
                                i = s.clientWidth;
                            return s.scrollHeight > s.clientHeight + 1 && (d(s, {
                                    position: "fixed",
                                    width: "100%",
                                    top: -o + "px"
                                }), e.style.overflowY = "scroll"), s.clientWidth < i && d(s, {
                                    overflow: "hidden"
                                }),
                                function() {
                                    s.style.cssText = n, e.style.cssText = t, s.scrollTop = o, e.scrollTop = o
                                }
                        }

                        function d(e, t) {
                            for (var n in t) e.style[n] = t[n]
                        }
                        if (y.disableScrollAround._count = y.disableScrollAround._count || 0, ++y.disableScrollAround._count, y.disableScrollAround._enableScrolling) return y.disableScrollAround._enableScrolling;
                        var s = o[0].body,
                            c = a(),
                            l = r(n);
                        return y.disableScrollAround._enableScrolling = function() {
                            --y.disableScrollAround._count || (c(), l(), delete y.disableScrollAround._enableScrolling)
                        }
                    },
                    enableScrolling: function() {
                        var e = this.disableScrollAround._enableScrolling;
                        e && e()
                    },
                    floatingScrollbars: function() {
                        if (this.floatingScrollbars.cached === n) {
                            var e = t.element("<div><div></div></div>").css({
                                width: "100%",
                                "z-index": -1,
                                position: "absolute",
                                height: "35px",
                                "overflow-y": "scroll"
                            });
                            e.children().css("height", "60px"), o[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
                        }
                        return this.floatingScrollbars.cached
                    },
                    forceFocus: function(t) {
                        var n = t[0] || t;
                        document.addEventListener("click", function i(e) {
                            e.target === n && e.$focus && (n.focus(), e.stopImmediatePropagation(), e.preventDefault(), n.removeEventListener("click", i))
                        }, !0);
                        var o = document.createEvent("MouseEvents");
                        o.initMouseEvent("click", !1, !0, e, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.$material = !0, o.$focus = !0, n.dispatchEvent(o)
                    },
                    createBackdrop: function(e, t) {
                        return a(y.supplant('<md-backdrop class="{0}">', [t]))(e)
                    },
                    supplant: function(e, t, n) {
                        return n = n || /\{([^\{\}]*)\}/g, e.replace(n, function(e, n) {
                            var o = n.split("."),
                                i = t;
                            try {
                                for (var r in o) o.hasOwnProperty(r) && (i = i[o[r]])
                            } catch (a) {
                                i = e
                            }
                            return "string" == typeof i || "number" == typeof i ? i : e
                        })
                    },
                    fakeNgModel: function() {
                        return {
                            $fake: !0,
                            $setTouched: t.noop,
                            $setViewValue: function(e) {
                                this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function(e) {
                                    e()
                                })
                            },
                            $isEmpty: function(e) {
                                return 0 === ("" + e).length
                            },
                            $parsers: [],
                            $formatters: [],
                            $viewChangeListeners: [],
                            $render: t.noop
                        }
                    },
                    debounce: function(e, t, o, i) {
                        var a;
                        return function() {
                            var d = o,
                                s = Array.prototype.slice.call(arguments);
                            r.cancel(a), a = r(function() {
                                a = n, e.apply(d, s)
                            }, t || 10, i)
                        }
                    },
                    throttle: function(e, t) {
                        var n;
                        return function() {
                            var o = this,
                                i = arguments,
                                r = y.now();
                            (!n || r - n > t) && (e.apply(o, i), n = r)
                        }
                    },
                    time: function(e) {
                        var t = y.now();
                        return e(), y.now() - t
                    },
                    valueOnUse: function(e, t, n) {
                        var o = null,
                            i = Array.prototype.slice.call(arguments),
                            r = i.length > 3 ? i.slice(3) : [];
                        Object.defineProperty(e, t, {
                            get: function() {
                                return null === o && (o = n.apply(e, r)), o
                            }
                        })
                    },
                    nextUid: function() {
                        return "" + i++
                    },
                    disconnectScope: function(e) {
                        if (e && e.$root !== e && !e.$$destroyed) {
                            var t = e.$parent;
                            e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
                        }
                    },
                    reconnectScope: function(e) {
                        if (e && e.$root !== e && e.$$disconnected) {
                            var t = e,
                                n = t.$parent;
                            t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
                        }
                    },
                    getClosest: function(e, n, o) {
                        if (t.isString(n)) {
                            var i = n.toUpperCase();
                            n = function(e) {
                                return e.nodeName === i
                            }
                        }
                        if (e instanceof t.element && (e = e[0]), o && (e = e.parentNode), !e) return null;
                        do
                            if (n(e)) return e;
                        while (e = e.parentNode);
                        return null
                    },
                    elementContains: function(n, o) {
                        var i = e.Node && e.Node.prototype && Node.prototype.contains,
                            r = i ? t.bind(n, n.contains) : t.bind(n, function(e) {
                                return n === o || !!(16 & this.compareDocumentPosition(e))
                            });
                        return r(o)
                    },
                    extractElementByName: function(e, n, o, i) {
                        function r(e) {
                            return a(e) || (o ? d(e) : null)
                        }

                        function a(e) {
                            if (e)
                                for (var t = 0, o = e.length; t < o; t++)
                                    if (e[t].nodeName.toLowerCase() === n) return e[t];
                            return null
                        }

                        function d(e) {
                            var t;
                            if (e)
                                for (var n = 0, o = e.length; n < o; n++) {
                                    var i = e[n];
                                    if (!t)
                                        for (var a = 0, d = i.childNodes.length; a < d; a++) t = t || r([i.childNodes[a]])
                                }
                            return t
                        }
                        var s = r(e);
                        return !s && i && l.warn(y.supplant("Unable to find node '{0}' in element '{1}'.", [n, e[0].outerHTML])), t.element(s || e)
                    },
                    initOptionalProperties: function(e, n, o) {
                        o = o || {}, t.forEach(e.$$isolateBindings, function(i, r) {
                            if (i.optional && t.isUndefined(e[r])) {
                                var a = t.isDefined(n[i.attrName]);
                                e[r] = t.isDefined(o[r]) ? o[r] : a
                            }
                        })
                    },
                    nextTick: function(e, t, n) {
                        function o() {
                            var e = i.queue,
                                t = i.digest;
                            i.queue = [], i.timeout = null, i.digest = !1, e.forEach(function(e) {
                                var t = e.scope && e.scope.$$destroyed;
                                t || e.callback()
                            }), t && d.$digest()
                        }
                        var i = y.nextTick,
                            a = i.timeout,
                            s = i.queue || [];
                        return s.push({
                            scope: n,
                            callback: e
                        }), null == t && (t = !0), i.digest = i.digest || t, i.queue = s, a || (i.timeout = r(o, 0, !1))
                    },
                    processTemplate: function(e) {
                        return $ ? e : e && t.isString(e) ? e.replace(/\{\{/g, v).replace(/}}/g, E) : e
                    },
                    getParentWithPointerEvents: function(e) {
                        for (var t = e.parent(); C(t, "pointer-events", "none");) t = t.parent();
                        return t
                    },
                    getNearestContentElement: function(e) {
                        for (var t = e.parent()[0]; t && t !== m[0] && t !== document.body && "MD-CONTENT" !== t.nodeName.toUpperCase();) t = t.parentNode;
                        return t
                    },
                    checkStickySupport: function() {
                        var e, n = t.element("<div>");
                        o[0].body.appendChild(n[0]);
                        for (var i = ["sticky", "-webkit-sticky"], r = 0; r < i.length; ++r)
                            if (n.css({
                                    position: i[r],
                                    top: 0,
                                    "z-index": 2
                                }), n.css("position") == i[r]) {
                                e = i[r];
                                break
                            }
                        return n.remove(), e
                    },
                    parseAttributeBoolean: function(e, t) {
                        return "" === e || !!e && (t === !1 || "false" !== e && "0" !== e)
                    },
                    hasComputedStyle: C,
                    isParentFormSubmitted: function(e) {
                        var n = y.getClosest(e, "form"),
                            o = n ? t.element(n).controller("form") : null;
                        return !!o && o.$submitted
                    },
                    animateScrollTo: function(e, t) {
                        function n() {
                            var i = o();
                            e.scrollTop = i, (d ? i < t : i > t) && p(n)
                        }

                        function o() {
                            var e = 1e3,
                                t = y.now() - s;
                            return i(t, r, a, e)
                        }

                        function i(e, t, n, o) {
                            if (e > o) return t + n;
                            var i = (e /= o) * e,
                                r = i * e;
                            return t + n * (-2 * r + 3 * i)
                        }
                        var r = e.scrollTop,
                            a = t - r,
                            d = r < t,
                            s = y.now();
                        p(n)
                    }
                };
            return y.dom.animator = s(y), y
        }
        var i = 0;
        t.module("material.core").factory("$mdUtil", o), o.$inject = ["$document", "$timeout", "$compile", "$rootScope", "$$mdAnimate", "$interpolate", "$log", "$rootElement", "$window", "$$rAF"], t.element.prototype.focus = t.element.prototype.focus || function() {
            return this.length && this[0].focus(), this
        }, t.element.prototype.blur = t.element.prototype.blur || function() {
            return this.length && this[0].blur(), this
        }
    }(),
    function() {
        function e() {
            function e() {
                t.showWarnings = !1
            }
            var t = this;
            return t.showWarnings = !0, {
                disableWarnings: e,
                $get: ["$$rAF", "$log", "$window", "$interpolate", function(e, o, i, r) {
                    return n.apply(t, arguments)
                }]
            }
        }

        function n(e, n, o, i) {
            function r(e, o, i) {
                var r = t.element(e)[0] || e;
                !r || r.hasAttribute(o) && 0 !== r.getAttribute(o).length || l(r, o) || (i = t.isString(i) ? i.trim() : "", i.length ? e.attr(o, i) : m && n.warn('ARIA: Attribute "', o, '", required for accessibility, is missing on node:', r))
            }

            function a(t, n, o) {
                e(function() {
                    r(t, n, o())
                })
            }

            function d(e, t) {
                var n = c(e) || "",
                    o = n.indexOf(i.startSymbol()) > -1;
                o ? a(e, t, function() {
                    return c(e)
                }) : r(e, t, n)
            }

            function s(e, t) {
                var n = c(e),
                    o = n.indexOf(i.startSymbol()) > -1;
                o || n || r(e, t, n)
            }

            function c(e) {
                function t(t) {
                    for (; t.parentNode && (t = t.parentNode) !== e;)
                        if (t.getAttribute && "true" === t.getAttribute("aria-hidden")) return !0
                }
                e = e[0] || e;
                for (var n, o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = ""; n = o.nextNode();) t(n) || (i += n.textContent);
                return i.trim() || ""
            }

            function l(e, t) {
                function n(e) {
                    var t = e.currentStyle ? e.currentStyle : o.getComputedStyle(e);
                    return "none" === t.display
                }
                var i = e.hasChildNodes(),
                    r = !1;
                if (i)
                    for (var a = e.childNodes, d = 0; d < a.length; d++) {
                        var s = a[d];
                        1 === s.nodeType && s.hasAttribute(t) && (n(s) || (r = !0))
                    }
                return r
            }
            var m = this.showWarnings;
            return {
                expect: r,
                expectAsync: a,
                expectWithText: d,
                expectWithoutText: s
            }
        }
        t.module("material.core").provider("$mdAria", e), n.$inject = ["$$rAF", "$log", "$window", "$interpolate"]
    }(),
    function() {
        function e(e, n, o, i, r) {
            this.compile = function(a) {
                var d = a.templateUrl,
                    s = a.template || "",
                    c = a.controller,
                    l = a.controllerAs,
                    m = t.extend({}, a.resolve || {}),
                    u = t.extend({}, a.locals || {}),
                    p = a.transformTemplate || t.identity,
                    h = a.bindToController;
                return t.forEach(m, function(e, n) {
                    t.isString(e) ? m[n] = o.get(e) : m[n] = o.invoke(e)
                }), t.extend(m, u), d ? m.$template = n(d).then(function(e) {
                    return e
                }) : m.$template = e.when(s), e.all(m).then(function(e) {
                    var n, o = p(e.$template, a),
                        d = a.element || t.element("<div>").html(o.trim()).contents(),
                        s = i(d);
                    return n = {
                        locals: e,
                        element: d,
                        link: function(o) {
                            if (e.$scope = o, c) {
                                var i = r(c, e, !0);
                                h && t.extend(i.instance, e);
                                var a = i();
                                d.data("$ngControllerController", a), d.children().data("$ngControllerController", a), l && (o[l] = a), n.controller = a
                            }
                            return s(o)
                        }
                    }
                })
            }
        }
        t.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$templateRequest", "$injector", "$compile", "$controller"]
    }(),
    function() {
        function n() {}

        function o(n, o, i) {
            function r(e) {
                return function(t, n) {
                    n.distance < this.state.options.maxDistance && this.dispatchEvent(t, e, n)
                }
            }

            function a(e, t, n) {
                var o = h[t.replace(/^\$md./, "")];
                if (!o) throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(h).join(", "));
                return o.registerElement(e, n)
            }

            function s(e, o) {
                var i = new n(e);
                return t.extend(i, o), h[e] = i, v
            }

            function c() {
                for (var e = document.createElement("div"), n = ["", "webkit", "Moz", "MS", "ms", "o"], o = 0; o < n.length; o++) {
                    var i = n[o],
                        r = i ? i + "TouchAction" : "touchAction";
                    if (t.isDefined(e.style[r])) return r
                }
            }
            var m = navigator.userAgent || navigator.vendor || e.opera,
                u = m.match(/ipad|iphone|ipod/i),
                p = m.match(/android/i),
                g = c(),
                b = "undefined" != typeof e.jQuery && t.element === e.jQuery,
                v = {
                    handler: s,
                    register: a,
                    isIos: u,
                    isAndroid: p,
                    isHijackingClicks: (u || p) && !b && !f
                };
            if (v.isHijackingClicks) {
                var E = 6;
                v.handler("click", {
                    options: {
                        maxDistance: E
                    },
                    onEnd: r("click")
                }), v.handler("focus", {
                    options: {
                        maxDistance: E
                    },
                    onEnd: function(e, t) {
                        function n(e) {
                            var t = ["INPUT", "SELECT", "BUTTON", "TEXTAREA", "VIDEO", "AUDIO"];
                            return "-1" != e.getAttribute("tabindex") && !e.hasAttribute("DISABLED") && (e.hasAttribute("tabindex") || e.hasAttribute("href") || e.isContentEditable || t.indexOf(e.nodeName) != -1)
                        }
                        t.distance < this.state.options.maxDistance && n(e.target) && (this.dispatchEvent(e, "focus", t), e.target.focus())
                    }
                }), v.handler("mouseup", {
                    options: {
                        maxDistance: E
                    },
                    onEnd: r("mouseup")
                }), v.handler("mousedown", {
                    onStart: function(e) {
                        this.dispatchEvent(e, "mousedown")
                    }
                })
            }
            return v.handler("press", {
                onStart: function(e, t) {
                    this.dispatchEvent(e, "$md.pressdown")
                },
                onEnd: function(e, t) {
                    this.dispatchEvent(e, "$md.pressup")
                }
            }).handler("hold", {
                options: {
                    maxDistance: 6,
                    delay: 500
                },
                onCancel: function() {
                    i.cancel(this.state.timeout)
                },
                onStart: function(e, n) {
                    return this.state.registeredParent ? (this.state.pos = {
                        x: n.x,
                        y: n.y
                    }, void(this.state.timeout = i(t.bind(this, function() {
                        this.dispatchEvent(e, "$md.hold"), this.cancel()
                    }), this.state.options.delay, !1))) : this.cancel()
                },
                onMove: function(e, t) {
                    g || "touchmove" !== e.type || e.preventDefault();
                    var n = this.state.pos.x - t.x,
                        o = this.state.pos.y - t.y;
                    Math.sqrt(n * n + o * o) > this.options.maxDistance && this.cancel()
                },
                onEnd: function() {
                    this.onCancel()
                }
            }).handler("drag", {
                options: {
                    minDistance: 6,
                    horizontal: !0,
                    cancelMultiplier: 1.5
                },
                onSetup: function(e, t) {
                    g && (this.oldTouchAction = e[0].style[g], e[0].style[g] = t.horizontal === !1 ? "pan-y" : "pan-x")
                },
                onCleanup: function(e) {
                    this.oldTouchAction && (e[0].style[g] = this.oldTouchAction)
                },
                onStart: function(e) {
                    this.state.registeredParent || this.cancel()
                },
                onMove: function(e, t) {
                    var n, o;
                    g || "touchmove" !== e.type || e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, o = Math.abs(t.distanceY) > this.state.options.minDistance * this.state.options.cancelMultiplier) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, o = Math.abs(t.distanceX) > this.state.options.minDistance * this.state.options.cancelMultiplier), n ? (this.state.dragPointer = d(e), l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : o && this.cancel())
                },
                dispatchDragMove: o.throttle(function(e) {
                    this.state.isRunning && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
                }),
                onEnd: function(e, t) {
                    this.state.dragPointer && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
                }
            }).handler("swipe", {
                options: {
                    minVelocity: .65,
                    minDistance: 10
                },
                onEnd: function(e, t) {
                    var n;
                    Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance ? (n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight", this.dispatchEvent(e, n)) : Math.abs(t.velocityY) > this.state.options.minVelocity && Math.abs(t.distanceY) > this.state.options.minDistance && (n = "up" == t.directionY ? "$md.swipeup" : "$md.swipedown", this.dispatchEvent(e, n))
                }
            })
        }

        function i(e) {
            this.name = e, this.state = {}
        }

        function r() {
            function n(e, n, o) {
                o = o || u;
                var i = new t.element.Event(n);
                i.$material = !0, i.pointer = o, i.srcEvent = e, t.extend(i, {
                    clientX: o.x,
                    clientY: o.y,
                    screenX: o.x,
                    screenY: o.y,
                    pageX: o.x,
                    pageY: o.y,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    shiftKey: e.shiftKey,
                    metaKey: e.metaKey
                }), t.element(o.target).trigger(i)
            }

            function o(t, n, o) {
                o = o || u;
                var i;
                "click" === n || "mouseup" == n || "mousedown" == n ? (i = document.createEvent("MouseEvents"), i.initMouseEvent(n, !0, !0, e, t.detail, o.x, o.y, o.x, o.y, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget || null)) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(n, !0, !0, {})), i.$material = !0, i.pointer = o, i.srcEvent = t, o.target.dispatchEvent(i)
            }
            var r = "undefined" != typeof e.jQuery && t.element === e.jQuery;
            return i.prototype = {
                options: {},
                dispatchEvent: r ? n : o,
                onSetup: t.noop,
                onCleanup: t.noop,
                onStart: t.noop,
                onMove: t.noop,
                onEnd: t.noop,
                onCancel: t.noop,
                start: function(e, n) {
                    if (!this.state.isRunning) {
                        var o = this.getNearestParent(e.target),
                            i = o && o.$mdGesture[this.name] || {};
                        this.state = {
                            isRunning: !0,
                            options: t.extend({}, this.options, i),
                            registeredParent: o
                        }, this.onStart(e, n)
                    }
                },
                move: function(e, t) {
                    this.state.isRunning && this.onMove(e, t)
                },
                end: function(e, t) {
                    this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
                },
                cancel: function(e, t) {
                    this.onCancel(e, t), this.state = {}
                },
                getNearestParent: function(e) {
                    for (var t = e; t;) {
                        if ((t.$mdGesture || {})[this.name]) return t;
                        t = t.parentNode
                    }
                    return null
                },
                registerElement: function(e, t) {
                    function n() {
                        delete e[0].$mdGesture[o.name], e.off("$destroy", n), o.onCleanup(e, t || {})
                    }
                    var o = this;
                    return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), o.onSetup(e, t || {}), n
                }
            }, i
        }

        function a(e, n) {
            function o(e) {
                var t = !e.clientX && !e.clientY;
                t || e.$material || e.isIonicTap || c(e) || (e.preventDefault(), e.stopPropagation())
            }

            function i(e) {
                var t = 0 === e.clientX && 0 === e.clientY;
                t || e.$material || e.isIonicTap || c(e) ? (g = null, "label" == e.target.tagName.toLowerCase() && (g = {
                    x: e.x,
                    y: e.y
                })) : (e.preventDefault(), e.stopPropagation(), g = null)
            }

            function r(e, t) {
                var o;
                for (var i in h) o = h[i], o instanceof n && ("start" === e && o.cancel(), o[e](t, u))
            }

            function a(e) {
                if (!u) {
                    var t = +Date.now();
                    p && !s(e, p) && t - p.endTime < 1500 || (u = d(e), r("start", e))
                }
            }

            function m(e) {
                u && s(e, u) && (l(e, u), r("move", e))
            }

            function f(e) {
                u && s(e, u) && (l(e, u), u.endTime = +Date.now(), r("end", e), p = u, u = null)
            }
            document.contains || (document.contains = function(e) {
                return document.body.contains(e)
            }), !b && e.isHijackingClicks && (document.addEventListener("click", i, !0), document.addEventListener("mouseup", o, !0), document.addEventListener("mousedown", o, !0), document.addEventListener("focus", o, !0), b = !0);
            var v = "mousedown touchstart pointerdown",
                E = "mousemove touchmove pointermove",
                $ = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
            t.element(document).on(v, a).on(E, m).on($, f).on("$$mdGestureReset", function() {
                p = u = null
            })
        }

        function d(e) {
            var t = m(e),
                n = {
                    startTime: +Date.now(),
                    target: e.target,
                    type: e.type.charAt(0)
                };
            return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
        }

        function s(e, t) {
            return e && t && e.type.charAt(0) === t.type
        }

        function c(e) {
            return g && g.x == e.x && g.y == e.y
        }

        function l(e, t) {
            var n = m(e),
                o = t.x = n.pageX,
                i = t.y = n.pageY;
            t.distanceX = o - t.startX, t.distanceY = i - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "down" : t.distanceY < 0 ? "up" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
        }

        function m(e) {
            return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
        }
        var u, p, h = {},
            f = !1,
            g = null,
            b = !1;
        t.module("material.core.gestures", []).provider("$mdGesture", n).factory("$$MdGestureHandler", r).run(a), n.prototype = {
            skipClickHijack: function() {
                return f = !0
            },
            $get: ["$$MdGestureHandler", "$$rAF", "$timeout", function(e, t, n) {
                return new o(e, t, n)
            }]
        }, o.$inject = ["$$MdGestureHandler", "$$rAF", "$timeout"], a.$inject = ["$mdGesture", "$$MdGestureHandler"]
    }(),
    function() {
        function e() {
            function e(e) {
                function n(e) {
                    return s.optionsFactory = e.options, s.methods = (e.methods || []).concat(a), c
                }

                function o(e, t) {
                    return d[e] = t, c
                }

                function i(t, n) {
                    if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function() {
                            return {}
                        }, /^cancel|hide|show$/.test(t)) throw new Error("Preset '" + t + "' in " + e + " is reserved!");
                    if (n.methods.indexOf("_options") > -1) throw new Error("Method '_options' in " + e + " is reserved!");
                    return s.presets[t] = {
                        methods: n.methods.concat(a),
                        optionsFactory: n.options,
                        argOption: n.argOption
                    }, c
                }

                function r(n, o) {
                    function i(e) {
                        return e = e || {}, e._options && (e = e._options), m.show(t.extend({}, l, e))
                    }

                    function r(e) {
                        return m.destroy(e)
                    }

                    function a(t, n) {
                        var i = {};
                        return i[e] = u, o.invoke(t || function() {
                            return n
                        }, {}, i)
                    }
                    var c, l, m = n(),
                        u = {
                            hide: m.hide,
                            cancel: m.cancel,
                            show: i,
                            destroy: r
                        };
                    return c = s.methods || [], l = a(s.optionsFactory, {}), t.forEach(d, function(e, t) {
                        u[t] = e
                    }), t.forEach(s.presets, function(e, n) {
                        function o(e) {
                            this._options = t.extend({}, i, e)
                        }
                        var i = a(e.optionsFactory, {}),
                            r = (e.methods || []).concat(c);
                        if (t.extend(i, {
                                $type: n
                            }), t.forEach(r, function(e) {
                                o.prototype[e] = function(t) {
                                    return this._options[e] = t, this
                                }
                            }), e.argOption) {
                            var d = "show" + n.charAt(0).toUpperCase() + n.slice(1);
                            u[d] = function(e) {
                                var t = u[n](e);
                                return u.show(t)
                            }
                        }
                        u[n] = function(n) {
                            return arguments.length && e.argOption && !t.isObject(n) && !t.isArray(n) ? (new o)[e.argOption](n) : new o(n)
                        }
                    }), u
                }
                var a = ["onHide", "onShow", "onRemove"],
                    d = {},
                    s = {
                        presets: {}
                    },
                    c = {
                        setDefaults: n,
                        addPreset: i,
                        addMethod: o,
                        $get: r
                    };
                return c.addPreset("build", {
                    methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]
                }), r.$inject = ["$$interimElement", "$injector"], c
            }

            function o(e, o, i, r, a, d, s, c, l, m, u) {
                return function() {
                    function p(e) {
                        e = e || {};
                        var t = new b(e || {}),
                            n = !e.skipHide && $.length ? v.cancel() : o.when(!0);
                        return n["finally"](function() {
                            $.push(t), t.show()["catch"](function(e) {
                                return e
                            })
                        }), t.deferred.promise
                    }

                    function h(e, t) {
                        function i(n) {
                            return n.remove(e, !1, t || {})["catch"](function(e) {
                                return e
                            }), n.deferred.promise
                        }
                        if (!$.length) return o.when(e);
                        if (t = t || {}, t.closeAll) {
                            var r = o.all($.reverse().map(i));
                            return $ = [], r
                        }
                        if (t.closeTo !== n) return o.all($.splice(t.closeTo).map(i));
                        var a = $.pop();
                        return i(a)
                    }

                    function f(e, n) {
                        var i = $.pop();
                        return i ? (i.remove(e, !0, n || {})["catch"](function(e) {
                            return e
                        }), i.deferred.promise["catch"](t.noop)) : o.when(e)
                    }

                    function g(e) {
                        var n = e ? null : $.shift(),
                            i = t.element(e).length ? t.element(e)[0].parentNode : null;
                        if (i) {
                            var r = $.filter(function(e) {
                                var t = e.options.element[0];
                                return t === i
                            });
                            r.length > 0 && (n = r[0], $.splice($.indexOf(n), 1))
                        }
                        return n ? n.remove(E, !1, {
                            $destroy: !0
                        }) : o.when(E)
                    }

                    function b(u) {
                        function p() {
                            return o(function(e, t) {
                                function n(e) {
                                    M.deferred.reject(e), t(e)
                                }
                                u.onCompiling && u.onCompiling(u), g(u).then(function(t) {
                                    T = b(t, u), A = C(T, u, t.controller).then(e, n)
                                }, n)
                            })
                        }

                        function h(e, n, i) {
                            function r(e) {
                                M.deferred.resolve(e)
                            }

                            function a(e) {
                                M.deferred.reject(e)
                            }
                            return T ? (u = t.extend(u || {}, i || {}), u.cancelAutoHide && u.cancelAutoHide(), u.element.triggerHandler("$mdInterimElementRemove"), u.$destroy === !0 ? y(u.element, u).then(function() {
                                n && a(e) || r(e)
                            }) : (o.when(A)["finally"](function() {
                                y(u.element, u).then(function() {
                                    n && a(e) || r(e)
                                }, a)
                            }), M.deferred.promise)) : o.when(!1)
                        }

                        function f(e) {
                            return e = e || {}, e.template && (e.template = c.processTemplate(e.template)), t.extend({
                                preserveScope: !1,
                                cancelAutoHide: t.noop,
                                scope: e.scope || r.$new(e.isolateScope),
                                onShow: function(e, t, n) {
                                    return s.enter(t, n.parent)
                                },
                                onRemove: function(e, t) {
                                    return t && s.leave(t) || o.when()
                                }
                            }, e)
                        }

                        function g(e) {
                            var t = e.skipCompile ? null : l.compile(e);
                            return t || o(function(t) {
                                t({
                                    locals: {},
                                    link: function() {
                                        return e.element
                                    }
                                })
                            })
                        }

                        function b(e, n) {
                            t.extend(e.locals, n);
                            var o = e.link(n.scope);
                            return n.element = o, n.parent = E(o, n), n.themable && m(o), o
                        }

                        function E(n, o) {
                            var i = o.parent;
                            if (i = t.isFunction(i) ? i(o.scope, n, o) : t.isString(i) ? t.element(e[0].querySelector(i)) : t.element(i), !(i || {}).length) {
                                var r;
                                return d[0] && d[0].querySelector && (r = d[0].querySelector(":not(svg) > body")), r || (r = d[0]), "#comment" == r.nodeName && (r = e[0].body), t.element(r)
                            }
                            return i
                        }

                        function $() {
                            var e, o = t.noop;
                            u.hideDelay && (e = a(v.hide, u.hideDelay), o = function() {
                                a.cancel(e)
                            }), u.cancelAutoHide = function() {
                                o(), u.cancelAutoHide = n
                            }
                        }

                        function C(e, n, i) {
                            var r = n.onShowing || t.noop,
                                a = n.onComplete || t.noop;
                            return r(n.scope, e, n, i), o(function(t, r) {
                                try {
                                    o.when(n.onShow(n.scope, e, n, i)).then(function() {
                                        a(n.scope, e, n), $(), t(e)
                                    }, r)
                                } catch (d) {
                                    r(d.message)
                                }
                            })
                        }

                        function y(e, n) {
                            var o = n.onRemoving || t.noop;
                            return i(function(t, r) {
                                try {
                                    var a = i.when(n.onRemove(n.scope, e, n) || !0);
                                    o(e, a), 1 == n.$destroy ? t(e) : a.then(function() {
                                        !n.preserveScope && n.scope && n.scope.$destroy(), t(e)
                                    }, r)
                                } catch (d) {
                                    r(d)
                                }
                            })
                        }
                        var M, T, A = o.when(!0);
                        return u = f(u), M = {
                            options: u,
                            deferred: o.defer(),
                            show: p,
                            remove: h
                        }
                    }
                    var v, E = !1,
                        $ = [];
                    return v = {
                        show: p,
                        hide: h,
                        cancel: f,
                        destroy: g,
                        $injector_: u
                    }
                }
            }
            return e.$get = o, o.$inject = ["$document", "$q", "$$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$mdUtil", "$mdCompiler", "$mdTheming", "$injector"], e
        }
        t.module("material.core").provider("$$interimElement", e)
    }(),
    function() {
        ! function() {
            function e(e) {
                function d(e) {
                    return e.replace(m, "").replace(u, function(e, t, n, o) {
                        return o ? n.toUpperCase() : n
                    })
                }
                var m = /^((?:x|data)[\:\-_])/i,
                    u = /([\:\-\_]+(.))/g,
                    p = ["", "xs", "gt-xs", "sm", "gt-sm", "md", "gt-md", "lg", "gt-lg", "xl", "print"],
                    h = ["layout", "flex", "flex-order", "flex-offset", "layout-align"],
                    f = ["show", "hide", "layout-padding", "layout-margin"];
                t.forEach(p, function(n) {
                    t.forEach(h, function(t) {
                        var o = n ? t + "-" + n : t;
                        e.directive(d(o), r(o))
                    }), t.forEach(f, function(t) {
                        var o = n ? t + "-" + n : t;
                        e.directive(d(o), a(o))
                    })
                }), e.provider("$$mdLayout", function() {
                    return {
                        $get: t.noop,
                        validateAttributeValue: l,
                        validateAttributeUsage: c,
                        disableLayouts: function(e) {
                            A.enabled = e !== !0
                        }
                    }
                }).directive("mdLayoutCss", o).directive("ngCloak", i("ng-cloak")).directive("layoutWrap", a("layout-wrap")).directive("layoutNowrap", a("layout-nowrap")).directive("layoutNoWrap", a("layout-no-wrap")).directive("layoutFill", a("layout-fill")).directive("layoutLtMd", s("layout-lt-md", !0)).directive("layoutLtLg", s("layout-lt-lg", !0)).directive("flexLtMd", s("flex-lt-md", !0)).directive("flexLtLg", s("flex-lt-lg", !0)).directive("layoutAlignLtMd", s("layout-align-lt-md")).directive("layoutAlignLtLg", s("layout-align-lt-lg")).directive("flexOrderLtMd", s("flex-order-lt-md")).directive("flexOrderLtLg", s("flex-order-lt-lg")).directive("offsetLtMd", s("flex-offset-lt-md")).directive("offsetLtLg", s("flex-offset-lt-lg")).directive("hideLtMd", s("hide-lt-md")).directive("hideLtLg", s("hide-lt-lg")).directive("showLtMd", s("show-lt-md")).directive("showLtLg", s("show-lt-lg")).config(n)
            }

            function n() {
                var e = !!document.querySelector("[md-layouts-disabled]");
                A.enabled = !e
            }

            function o() {
                return A.enabled = !1, {
                    restrict: "A",
                    priority: "900"
                }
            }

            function i(e) {
                return ["$timeout", function(n) {
                    return {
                        restrict: "A",
                        priority: -10,
                        compile: function(o) {
                            return A.enabled ? (o.addClass(e), function(t, o) {
                                n(function() {
                                    o.removeClass(e)
                                }, 10, !1)
                            }) : t.noop
                        }
                    }
                }]
            }

            function r(e) {
                function n(t, n, o) {
                    var i = d(n, e, o),
                        r = o.$observe(o.$normalize(e), i);
                    i(p(e, o, "")), t.$on("$destroy", function() {
                        r()
                    })
                }
                return ["$mdUtil", "$interpolate", "$log", function(o, i, r) {
                    return g = o, b = i, v = r, {
                        restrict: "A",
                        compile: function(o, i) {
                            var r;
                            return A.enabled && (c(e, i, o, v), l(e, p(e, i, ""), m(o, e, i)), r = n), r || t.noop
                        }
                    }
                }]
            }

            function a(e) {
                function n(t, n) {
                    n.addClass(e)
                }
                return ["$mdUtil", "$interpolate", "$log", function(o, i, r) {
                    return g = o, b = i, v = r, {
                        restrict: "A",
                        compile: function(o, i) {
                            var r;
                            return A.enabled && (l(e, p(e, i, ""), m(o, e, i)), n(null, o), r = n), r || t.noop
                        }
                    }
                }]
            }

            function d(e, n) {
                var o;
                return function(i) {
                    var r = l(n, i || "");
                    t.isDefined(r) && (o && e.removeClass(o), o = r ? n + "-" + r.replace($, "-") : n, e.addClass(o))
                }
            }

            function s(e) {
                var n = e.split("-");
                return ["$log", function(o) {
                    return o.warn(e + "has been deprecated. Please use a `" + n[0] + "-gt-<xxx>` variant."), t.noop
                }]
            }

            function c(e, t, n, o) {
                var i, r, a, d = n[0].nodeName.toLowerCase();
                switch (e.replace(E, "")) {
                    case "flex":
                        "md-button" != d && "fieldset" != d || (r = "<" + d + " " + e + "></" + d + ">", a = "https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers", i = "Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.", o.warn(g.supplant(i, [r, a])))
                }
            }

            function l(e, n, o) {
                var i = n;
                if (!u(n)) {
                    switch (e.replace(E, "")) {
                        case "layout":
                            h(n, y) || (n = y[0]);
                            break;
                        case "flex":
                            h(n, C) || isNaN(n) && (n = "");
                            break;
                        case "flex-offset":
                        case "flex-order":
                            n && !isNaN(+n) || (n = "0");
                            break;
                        case "layout-align":
                            var r = f(n);
                            n = g.supplant("{main}-{cross}", r);
                            break;
                        case "layout-padding":
                        case "layout-margin":
                        case "layout-fill":
                        case "layout-wrap":
                        case "layout-nowrap":
                        case "layout-nowrap":
                            n = ""
                    }
                    n != i && (o || t.noop)(n)
                }
                return n
            }

            function m(e, t, n) {
                return function(e) {
                    u(e) || (n[n.$normalize(t)] = e)
                }
            }

            function u(e) {
                return (e || "").indexOf(b.startSymbol()) > -1
            }

            function p(e, t, n) {
                var o = t.$normalize(e);
                return t[o] ? t[o].replace($, "-") : n || null
            }

            function h(e, t, n) {
                e = n && e ? e.replace($, n) : e;
                var o = !1;
                return e && t.forEach(function(t) {
                    t = n ? t.replace($, n) : t, o = o || t === e
                }), o
            }

            function f(e) {
                var t, n = {
                    main: "start",
                    cross: "stretch"
                };
                return e = e || "", 0 != e.indexOf("-") && 0 != e.indexOf(" ") || (e = "none" + e), t = e.toLowerCase().trim().replace($, "-").split("-"), t.length && "space" === t[0] && (t = [t[0] + "-" + t[1], t[2]]), t.length > 0 && (n.main = t[0] || n.main), t.length > 1 && (n.cross = t[1] || n.cross), M.indexOf(n.main) < 0 && (n.main = "start"), T.indexOf(n.cross) < 0 && (n.cross = "stretch"), n
            }
            var g, b, v, E = /(-gt)?-(sm|md|lg|print)/g,
                $ = /\s+/g,
                C = ["grow", "initial", "auto", "none", "noshrink", "nogrow"],
                y = ["row", "column"],
                M = ["", "start", "center", "end", "stretch", "space-around", "space-between"],
                T = ["", "start", "center", "end", "stretch"],
                A = {
                    enabled: !0,
                    breakpoints: []
                };
            e(t.module("material.core.layout", ["ng"]))
        }()
    }(),
    function() {
        function e(e, o) {
            function i(e) {
                return e && "" !== e
            }
            var r, a = [],
                d = {};
            return r = {
                notFoundError: function(t, n) {
                    e.error((n || "") + "No instance found for handle", t)
                },
                getInstances: function() {
                    return a
                },
                get: function(e) {
                    if (!i(e)) return null;
                    var t, n, o;
                    for (t = 0, n = a.length; t < n; t++)
                        if (o = a[t], o.$$mdHandle === e) return o;
                    return null
                },
                register: function(e, n) {
                    function o() {
                        var t = a.indexOf(e);
                        t !== -1 && a.splice(t, 1)
                    }

                    function i() {
                        var t = d[n];
                        t && (t.forEach(function(t) {
                            t.resolve(e)
                        }), delete d[n])
                    }
                    return n ? (e.$$mdHandle = n, a.push(e), i(), o) : t.noop
                },
                when: function(e) {
                    if (i(e)) {
                        var t = o.defer(),
                            a = r.get(e);
                        return a ? t.resolve(a) : (d[e] === n && (d[e] = []), d[e].push(t)), t.promise
                    }
                    return o.reject("Invalid `md-component-id` value.")
                }
            }
        }
        t.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
    }(),
    function() {
        ! function() {
            function e(e) {
                function n(e) {
                    return e.hasClass("md-icon-button") ? {
                        isMenuItem: e.hasClass("md-menu-item"),
                        fitRipple: !0,
                        center: !0
                    } : {
                        isMenuItem: e.hasClass("md-menu-item"),
                        dimBackground: !0
                    }
                }
                return {
                    attach: function(o, i, r) {
                        return r = t.extend(n(i), r), e.attach(o, i, r)
                    }
                }
            }
            t.module("material.core").factory("$mdButtonInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(),
    function() {
        ! function() {
            function e(e) {
                function n(n, o, i) {
                    return e.attach(n, o, t.extend({
                        center: !0,
                        dimBackground: !1,
                        fitRipple: !0
                    }, i))
                }
                return {
                    attach: n
                }
            }
            t.module("material.core").factory("$mdCheckboxInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(),
    function() {
        ! function() {
            function e(e) {
                function n(n, o, i) {
                    return e.attach(n, o, t.extend({
                        center: !1,
                        dimBackground: !0,
                        outline: !1,
                        rippleSize: "full"
                    }, i))
                }
                return {
                    attach: n
                }
            }
            t.module("material.core").factory("$mdListInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(),
    function() {
        function e(e, n) {
            return {
                controller: t.noop,
                link: function(t, o, i) {
                    i.hasOwnProperty("mdInkRippleCheckbox") ? n.attach(t, o) : e.attach(t, o)
                }
            }
        }

        function n() {
            function e() {
                n = !0
            }
            var n = !1;
            return {
                disableInkRipple: e,
                $get: ["$injector", function(e) {
                    function i(i, r, a) {
                        return n || r.controller("mdNoInk") ? t.noop : e.instantiate(o, {
                            $scope: i,
                            $element: r,
                            rippleOptions: a
                        })
                    }
                    return {
                        attach: i
                    }
                }]
            }
        }

        function o(e, n, o, i, r, a, d) {
            this.$window = i, this.$timeout = r, this.$mdUtil = a, this.$mdColorUtil = d, this.$scope = e, this.$element = n, this.options = o, this.mousedown = !1, this.ripples = [], this.timeout = null, this.lastRipple = null, a.valueOnUse(this, "container", this.createContainer), this.$element.addClass("md-ink-ripple"), (n.controller("mdInkRipple") || {}).createRipple = t.bind(this, this.createRipple), (n.controller("mdInkRipple") || {}).setColor = t.bind(this, this.color), this.bindEvents()
        }

        function i(e, n) {
            (e.mousedown || e.lastRipple) && (e.mousedown = !1, e.$mdUtil.nextTick(t.bind(e, n), !1))
        }

        function r() {
            return {
                controller: t.noop
            }
        }
        t.module("material.core").provider("$mdInkRipple", n).directive("mdInkRipple", e).directive("mdNoInk", r).directive("mdNoBar", r).directive("mdNoStretch", r);
        var a = 450;
        e.$inject = ["$mdButtonInkRipple", "$mdCheckboxInkRipple"], o.$inject = ["$scope", "$element", "rippleOptions", "$window", "$timeout", "$mdUtil", "$mdColorUtil"], o.prototype.color = function(e) {
            function n() {
                var e = o.options && o.options.colorElement ? o.options.colorElement : [],
                    t = e.length ? e[0] : o.$element[0];
                return t ? o.$window.getComputedStyle(t).color : "rgb(0,0,0)"
            }
            var o = this;
            return t.isDefined(e) && (o._color = o._parseColor(e)), o._color || o._parseColor(o.inkRipple()) || o._parseColor(n())
        }, o.prototype.calculateColor = function() {
            return this.color()
        }, o.prototype._parseColor = function(e, t) {
            t = t || 1;
            var n = this.$mdColorUtil;
            if (e) return 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, (.1 * t).toString() + ")") : 0 === e.indexOf("rgb") ? n.rgbToRgba(e) : 0 === e.indexOf("#") ? n.hexToRgba(e) : void 0
        }, o.prototype.bindEvents = function() {
            this.$element.on("mousedown", t.bind(this, this.handleMousedown)), this.$element.on("mouseup touchend", t.bind(this, this.handleMouseup)), this.$element.on("mouseleave", t.bind(this, this.handleMouseup)), this.$element.on("touchmove", t.bind(this, this.handleTouchmove))
        }, o.prototype.handleMousedown = function(e) {
            if (!this.mousedown)
                if (e.hasOwnProperty("originalEvent") && (e = e.originalEvent), this.mousedown = !0, this.options.center) this.createRipple(this.container.prop("clientWidth") / 2, this.container.prop("clientWidth") / 2);
                else if (e.srcElement !== this.$element[0]) {
                var t = this.$element[0].getBoundingClientRect(),
                    n = e.clientX - t.left,
                    o = e.clientY - t.top;
                this.createRipple(n, o)
            } else this.createRipple(e.offsetX, e.offsetY)
        }, o.prototype.handleMouseup = function() {
            i(this, this.clearRipples)
        }, o.prototype.handleTouchmove = function() {
            i(this, this.deleteRipples)
        }, o.prototype.deleteRipples = function() {
            for (var e = 0; e < this.ripples.length; e++) this.ripples[e].remove()
        }, o.prototype.clearRipples = function() {
            for (var e = 0; e < this.ripples.length; e++) this.fadeInComplete(this.ripples[e])
        }, o.prototype.createContainer = function() {
            var e = t.element('<div class="md-ripple-container"></div>');
            return this.$element.append(e), e
        }, o.prototype.clearTimeout = function() {
            this.timeout && (this.$timeout.cancel(this.timeout), this.timeout = null)
        }, o.prototype.isRippleAllowed = function() {
            var e = this.$element[0];
            do {
                if (!e.tagName || "BODY" === e.tagName) break;
                if (e && t.isFunction(e.hasAttribute)) {
                    if (e.hasAttribute("disabled")) return !1;
                    if ("false" === this.inkRipple() || "0" === this.inkRipple()) return !1
                }
            } while (e = e.parentNode);
            return !0
        }, o.prototype.inkRipple = function() {
            return this.$element.attr("md-ink-ripple")
        }, o.prototype.createRipple = function(e, n) {
            function o(e, t, n) {
                return e ? Math.max(t, n) : Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2))
            }
            if (this.isRippleAllowed()) {
                var i = this,
                    r = i.$mdColorUtil,
                    d = t.element('<div class="md-ripple"></div>'),
                    s = this.$element.prop("clientWidth"),
                    c = this.$element.prop("clientHeight"),
                    l = 2 * Math.max(Math.abs(s - e), e),
                    m = 2 * Math.max(Math.abs(c - n), n),
                    u = o(this.options.fitRipple, l, m),
                    p = this.calculateColor();
                d.css({
                    left: e + "px",
                    top: n + "px",
                    background: "black",
                    width: u + "px",
                    height: u + "px",
                    backgroundColor: r.rgbaToRgb(p),
                    borderColor: r.rgbaToRgb(p)
                }), this.lastRipple = d, this.clearTimeout(), this.timeout = this.$timeout(function() {
                    i.clearTimeout(), i.mousedown || i.fadeInComplete(d)
                }, .35 * a, !1), this.options.dimBackground && this.container.css({
                    backgroundColor: p
                }), this.container.append(d), this.ripples.push(d), d.addClass("md-ripple-placed"), this.$mdUtil.nextTick(function() {
                    d.addClass("md-ripple-scaled md-ripple-active"), i.$timeout(function() {
                        i.clearRipples()
                    }, a, !1)
                }, !1)
            }
        }, o.prototype.fadeInComplete = function(e) {
            this.lastRipple === e ? this.timeout || this.mousedown || this.removeRipple(e) : this.removeRipple(e)
        }, o.prototype.removeRipple = function(e) {
            var t = this,
                n = this.ripples.indexOf(e);
            n < 0 || (this.ripples.splice(this.ripples.indexOf(e), 1), e.removeClass("md-ripple-active"), e.addClass("md-ripple-remove"), 0 === this.ripples.length && this.container.css({
                backgroundColor: ""
            }), this.$timeout(function() {
                t.fadeOutComplete(e)
            }, a, !1))
        }, o.prototype.fadeOutComplete = function(e) {
            e.remove(), this.lastRipple = null
        }
    }(),
    function() {
        ! function() {
            function e(e) {
                function n(n, o, i) {
                    return e.attach(n, o, t.extend({
                        center: !1,
                        dimBackground: !0,
                        outline: !1,
                        rippleSize: "full"
                    }, i))
                }
                return {
                    attach: n
                }
            }
            t.module("material.core").factory("$mdTabInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(),
    function() {
        t.module("material.core.theming.palette", []).constant("$mdColorPalette", {
            red: {
                50: "#ffebee",
                100: "#ffcdd2",
                200: "#ef9a9a",
                300: "#e57373",
                400: "#ef5350",
                500: "#f44336",
                600: "#e53935",
                700: "#d32f2f",
                800: "#c62828",
                900: "#b71c1c",
                A100: "#ff8a80",
                A200: "#ff5252",
                A400: "#ff1744",
                A700: "#d50000",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 A100",
                contrastStrongLightColors: "400 500 600 700 A200 A400 A700"
            },
            pink: {
                50: "#fce4ec",
                100: "#f8bbd0",
                200: "#f48fb1",
                300: "#f06292",
                400: "#ec407a",
                500: "#e91e63",
                600: "#d81b60",
                700: "#c2185b",
                800: "#ad1457",
                900: "#880e4f",
                A100: "#ff80ab",
                A200: "#ff4081",
                A400: "#f50057",
                A700: "#c51162",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "500 600 A200 A400 A700"
            },
            purple: {
                50: "#f3e5f5",
                100: "#e1bee7",
                200: "#ce93d8",
                300: "#ba68c8",
                400: "#ab47bc",
                500: "#9c27b0",
                600: "#8e24aa",
                700: "#7b1fa2",
                800: "#6a1b9a",
                900: "#4a148c",
                A100: "#ea80fc",
                A200: "#e040fb",
                A400: "#d500f9",
                A700: "#aa00ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400 A700"
            },
            "deep-purple": {
                50: "#ede7f6",
                100: "#d1c4e9",
                200: "#b39ddb",
                300: "#9575cd",
                400: "#7e57c2",
                500: "#673ab7",
                600: "#5e35b1",
                700: "#512da8",
                800: "#4527a0",
                900: "#311b92",
                A100: "#b388ff",
                A200: "#7c4dff",
                A400: "#651fff",
                A700: "#6200ea",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200"
            },
            indigo: {
                50: "#e8eaf6",
                100: "#c5cae9",
                200: "#9fa8da",
                300: "#7986cb",
                400: "#5c6bc0",
                500: "#3f51b5",
                600: "#3949ab",
                700: "#303f9f",
                800: "#283593",
                900: "#1a237e",
                A100: "#8c9eff",
                A200: "#536dfe",
                A400: "#3d5afe",
                A700: "#304ffe",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400"
            },
            blue: {
                50: "#e3f2fd",
                100: "#bbdefb",
                200: "#90caf9",
                300: "#64b5f6",
                400: "#42a5f5",
                500: "#2196f3",
                600: "#1e88e5",
                700: "#1976d2",
                800: "#1565c0",
                900: "#0d47a1",
                A100: "#82b1ff",
                A200: "#448aff",
                A400: "#2979ff",
                A700: "#2962ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100",
                contrastStrongLightColors: "500 600 700 A200 A400 A700"
            },
            "light-blue": {
                50: "#e1f5fe",
                100: "#b3e5fc",
                200: "#81d4fa",
                300: "#4fc3f7",
                400: "#29b6f6",
                500: "#03a9f4",
                600: "#039be5",
                700: "#0288d1",
                800: "#0277bd",
                900: "#01579b",
                A100: "#80d8ff",
                A200: "#40c4ff",
                A400: "#00b0ff",
                A700: "#0091ea",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900 A700",
                contrastStrongLightColors: "600 700 800 A700"
            },
            cyan: {
                50: "#e0f7fa",
                100: "#b2ebf2",
                200: "#80deea",
                300: "#4dd0e1",
                400: "#26c6da",
                500: "#00bcd4",
                600: "#00acc1",
                700: "#0097a7",
                800: "#00838f",
                900: "#006064",
                A100: "#84ffff",
                A200: "#18ffff",
                A400: "#00e5ff",
                A700: "#00b8d4",
                contrastDefaultColor: "dark",
                contrastLightColors: "700 800 900",
                contrastStrongLightColors: "700 800 900"
            },
            teal: {
                50: "#e0f2f1",
                100: "#b2dfdb",
                200: "#80cbc4",
                300: "#4db6ac",
                400: "#26a69a",
                500: "#009688",
                600: "#00897b",
                700: "#00796b",
                800: "#00695c",
                900: "#004d40",
                A100: "#a7ffeb",
                A200: "#64ffda",
                A400: "#1de9b6",
                A700: "#00bfa5",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700"
            },
            green: {
                50: "#e8f5e9",
                100: "#c8e6c9",
                200: "#a5d6a7",
                300: "#81c784",
                400: "#66bb6a",
                500: "#4caf50",
                600: "#43a047",
                700: "#388e3c",
                800: "#2e7d32",
                900: "#1b5e20",
                A100: "#b9f6ca",
                A200: "#69f0ae",
                A400: "#00e676",
                A700: "#00c853",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700"
            },
            "light-green": {
                50: "#f1f8e9",
                100: "#dcedc8",
                200: "#c5e1a5",
                300: "#aed581",
                400: "#9ccc65",
                500: "#8bc34a",
                600: "#7cb342",
                700: "#689f38",
                800: "#558b2f",
                900: "#33691e",
                A100: "#ccff90",
                A200: "#b2ff59",
                A400: "#76ff03",
                A700: "#64dd17",
                contrastDefaultColor: "dark",
                contrastLightColors: "700 800 900",
                contrastStrongLightColors: "700 800 900"
            },
            lime: {
                50: "#f9fbe7",
                100: "#f0f4c3",
                200: "#e6ee9c",
                300: "#dce775",
                400: "#d4e157",
                500: "#cddc39",
                600: "#c0ca33",
                700: "#afb42b",
                800: "#9e9d24",
                900: "#827717",
                A100: "#f4ff81",
                A200: "#eeff41",
                A400: "#c6ff00",
                A700: "#aeea00",
                contrastDefaultColor: "dark",
                contrastLightColors: "900",
                contrastStrongLightColors: "900"
            },
            yellow: {
                50: "#fffde7",
                100: "#fff9c4",
                200: "#fff59d",
                300: "#fff176",
                400: "#ffee58",
                500: "#ffeb3b",
                600: "#fdd835",
                700: "#fbc02d",
                800: "#f9a825",
                900: "#f57f17",
                A100: "#ffff8d",
                A200: "#ffff00",
                A400: "#ffea00",
                A700: "#ffd600",
                contrastDefaultColor: "dark"
            },
            amber: {
                50: "#fff8e1",
                100: "#ffecb3",
                200: "#ffe082",
                300: "#ffd54f",
                400: "#ffca28",
                500: "#ffc107",
                600: "#ffb300",
                700: "#ffa000",
                800: "#ff8f00",
                900: "#ff6f00",
                A100: "#ffe57f",
                A200: "#ffd740",
                A400: "#ffc400",
                A700: "#ffab00",
                contrastDefaultColor: "dark"
            },
            orange: {
                50: "#fff3e0",
                100: "#ffe0b2",
                200: "#ffcc80",
                300: "#ffb74d",
                400: "#ffa726",
                500: "#ff9800",
                600: "#fb8c00",
                700: "#f57c00",
                800: "#ef6c00",
                900: "#e65100",
                A100: "#ffd180",
                A200: "#ffab40",
                A400: "#ff9100",
                A700: "#ff6d00",
                contrastDefaultColor: "dark",
                contrastLightColors: "800 900",
                contrastStrongLightColors: "800 900"
            },
            "deep-orange": {
                50: "#fbe9e7",
                100: "#ffccbc",
                200: "#ffab91",
                300: "#ff8a65",
                400: "#ff7043",
                500: "#ff5722",
                600: "#f4511e",
                700: "#e64a19",
                800: "#d84315",
                900: "#bf360c",
                A100: "#ff9e80",
                A200: "#ff6e40",
                A400: "#ff3d00",
                A700: "#dd2c00",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100 A200",
                contrastStrongLightColors: "500 600 700 800 900 A400 A700"
            },
            brown: {
                50: "#efebe9",
                100: "#d7ccc8",
                200: "#bcaaa4",
                300: "#a1887f",
                400: "#8d6e63",
                500: "#795548",
                600: "#6d4c41",
                700: "#5d4037",
                800: "#4e342e",
                900: "#3e2723",
                A100: "#d7ccc8",
                A200: "#bcaaa4",
                A400: "#8d6e63",
                A700: "#5d4037",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100 A200",
                contrastStrongLightColors: "300 400"
            },
            grey: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
                A100: "#ffffff",
                A200: "#000000",
                A400: "#303030",
                A700: "#616161",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900 A200 A400 A700"
            },
            "blue-grey": {
                50: "#eceff1",
                100: "#cfd8dc",
                200: "#b0bec5",
                300: "#90a4ae",
                400: "#78909c",
                500: "#607d8b",
                600: "#546e7a",
                700: "#455a64",
                800: "#37474f",
                900: "#263238",
                A100: "#cfd8dc",
                A200: "#b0bec5",
                A400: "#78909c",
                A700: "#455a64",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 A100 A200",
                contrastStrongLightColors: "400 500 700"
            }
        })
    }(),
    function() {
        ! function(e) {
            function t(e) {
                var t = !!document.querySelector("[md-themes-disabled]");
                e.disableTheming(t)
            }

            function o(t) {
                function o(e, t) {
                    return t = t || {}, p[e] = r(e, t), m
                }

                function i(t, n) {
                    return r(t, e.extend({}, p[t] || {}, n))
                }

                function r(e, t) {
                    var n = w.filter(function(e) {
                        return !t[e]
                    });
                    if (n.length) throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
                    return t
                }

                function a(t, n) {
                    if (h[t]) return h[t];
                    n = n || "default";
                    var o = "string" == typeof n ? h[n] : n,
                        i = new s(t);
                    return o && e.forEach(o.colors, function(t, n) {
                        i.colors[n] = {
                            name: t.name,
                            hues: e.extend({}, t.hues)
                        }
                    }), h[t] = i, i
                }

                function s(t) {
                    function n(t) {
                        if (t = 0 === arguments.length || !!t, t !== o.isDark) {
                            o.isDark = t, o.foregroundPalette = o.isDark ? g : f, o.foregroundShadow = o.isDark ? b : v;
                            var n = o.isDark ? A : T,
                                i = o.isDark ? T : A;
                            return e.forEach(n, function(e, t) {
                                var n = o.colors[t],
                                    r = i[t];
                                if (n)
                                    for (var a in n.hues) n.hues[a] === r[a] && (n.hues[a] = e[a])
                            }), o
                        }
                    }
                    var o = this;
                    o.name = t, o.colors = {}, o.dark = n, n(!1), y.forEach(function(t) {
                        var n = (o.isDark ? A : T)[t];
                        o[t + "Palette"] = function(i, r) {
                            var a = o.colors[t] = {
                                name: i,
                                hues: e.extend({}, n, r)
                            };
                            return Object.keys(a.hues).forEach(function(e) {
                                if (!n[e]) throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", o.name).replace("%3", i).replace("%4", Object.keys(n).join(", ")))
                            }), Object.keys(a.hues).map(function(e) {
                                return a.hues[e]
                            }).forEach(function(e) {
                                if (w.indexOf(e) == -1) throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", e).replace("%2", o.name).replace("%3", t).replace("%4", i).replace("%5", w.join(", ")))
                            }), o
                        }, o[t + "Color"] = function() {
                            var e = Array.prototype.slice.call(arguments);
                            return console.warn("$mdThemingProviderTheme." + t + "Color() has been deprecated. Use $mdThemingProviderTheme." + t + "Palette() instead."), o[t + "Palette"].apply(o, e)
                        }
                    })
                }

                function l(t, o) {
                    function i(e) {
                        return e === n || "" === e || a.THEMES[e] !== n
                    }

                    function r(n, r) {
                        function a() {
                            return c = r.controller("mdTheme") || n.data("$mdThemeController"), c && c.$mdTheme || ("default" == $ ? "" : $)
                        }

                        function d(e) {
                            if (e) {
                                i(e) || o.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
                                var t = n.data("$mdThemeName");
                                t && n.removeClass("md-" + t + "-theme"), n.addClass("md-" + e + "-theme"), n.data("$mdThemeName", e), c && n.data("$mdThemeController", c)
                            }
                        }

                        function s() {
                            var e = r.controller("mdTheme");
                            return !!e && (n.on("$destroy", e.registerChanges(function() {
                                d(a())
                            })), !0)
                        }
                        var c = r.controller("mdTheme"),
                            l = n.attr("md-theme-watch"),
                            m = (E || e.isDefined(l)) && "false" != l;
                        d(a()), (E && !s() || !E && m) && n.on("$destroy", t.$watch(a, d))
                    }
                    var a = function(e, o) {
                        o === n && (o = e, e = n), e === n && (e = t), a.inherit(o, o)
                    };
                    return a.THEMES = e.extend({}, h), a.PALETTES = e.extend({}, p), a.inherit = r, a.registered = i, a.defaultTheme = function() {
                        return $
                    }, a.generateTheme = function(e) {
                        c(h[e], e, k.nonce)
                    }, a
                }
                p = {};
                var m, h = {},
                    E = !1,
                    $ = "default";
                return e.extend(p, t), l.$inject = ["$rootScope", "$log"], m = {
                    definePalette: o,
                    extendPalette: i,
                    theme: a,
                    configuration: function() {
                        var t = {
                            defaultTheme: $,
                            alwaysWatchTheme: E
                        };
                        return e.extend({}, config, t)
                    },
                    disableTheming: function(t) {
                        k.disableTheming = e.isUndefined(t) || !!t
                    },
                    registerStyles: function(e) {
                        k.registeredStyles.push(e)
                    },
                    setNonce: function(e) {
                        k.nonce = e
                    },
                    generateThemesOnDemand: function(e) {
                        k.generateOnDemand = e
                    },
                    setDefaultTheme: function(e) {
                        $ = e
                    },
                    alwaysWatchTheme: function(e) {
                        E = e
                    },
                    $get: l,
                    _LIGHT_DEFAULT_HUES: T,
                    _DARK_DEFAULT_HUES: A,
                    _PALETTES: p,
                    _THEMES: h,
                    _parseRules: d,
                    _rgba: u
                }
            }

            function i(t, n, o) {
                return {
                    priority: 100,
                    link: {
                        pre: function(i, r, a) {
                            var d = [],
                                s = {
                                    registerChanges: function(t, n) {
                                        return n && (t = e.bind(n, t)), d.push(t),
                                            function() {
                                                var e = d.indexOf(t);
                                                e > -1 && d.splice(e, 1)
                                            }
                                    },
                                    $setTheme: function(e) {
                                        t.registered(e) || o.warn("attempted to use unregistered theme '" + e + "'"), s.$mdTheme = e, d.forEach(function(e) {
                                            e()
                                        })
                                    }
                                };
                            r.data("$mdThemeController", s), s.$setTheme(n(a.mdTheme)(i)), a.$observe("mdTheme", s.$setTheme)
                        }
                    }
                }
            }

            function r() {
                return k.disableTheming = !0, {
                    restrict: "A",
                    priority: "900"
                }
            }

            function a(e) {
                return e
            }

            function d(t, n, o) {
                l(t, n), o = o.replace(/THEME_NAME/g, t.name);
                var i = [],
                    r = t.colors[n],
                    a = new RegExp("\\.md-" + t.name + "-theme", "g"),
                    d = new RegExp("('|\")?{{\\s*(" + n + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"),
                    s = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,
                    c = p[r.name];
                return o = o.replace(s, function(e, n, o, i, r) {
                    return "foreground" === n ? "shadow" == o ? t.foregroundShadow : t.foregroundPalette[o] || t.foregroundPalette[1] : (0 !== o.indexOf("hue") && "default" !== o || (o = t.colors[n].hues[o]), u((p[t.colors[n].name][o] || "")[r ? "contrast" : "value"], i))
                }), e.forEach(r.hues, function(e, n) {
                    var r = o.replace(d, function(t, n, o, i, r) {
                        return u(c[e]["color" === i ? "value" : "contrast"], r)
                    });
                    if ("default" !== n && (r = r.replace(a, ".md-" + t.name + "-theme.md-" + n)), "default" == t.name) {
                        var s = /((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;
                        r = r.replace(s, function(e, t, n, o) {
                            return e + ", " + t + n + o
                        })
                    }
                    i.push(r)
                }), i
            }

            function s(t, n) {
                function o(t, n) {
                    var o = t.contrastDefaultColor,
                        i = t.contrastLightColors || [],
                        r = t.contrastStrongLightColors || [],
                        a = t.contrastDarkColors || [];
                    "string" == typeof i && (i = i.split(" ")), "string" == typeof r && (r = r.split(" ")), "string" == typeof a && (a = a.split(" ")), delete t.contrastDefaultColor, delete t.contrastLightColors, delete t.contrastStrongLightColors, delete t.contrastDarkColors, e.forEach(t, function(n, d) {
                        function s() {
                            return "light" === o ? a.indexOf(d) > -1 ? E : r.indexOf(d) > -1 ? C : $ : i.indexOf(d) > -1 ? r.indexOf(d) > -1 ? C : $ : E
                        }
                        if (!e.isObject(n)) {
                            var c = m(n);
                            if (!c) throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", n).replace("%2", t.name).replace("%3", d));
                            t[d] = {
                                value: c,
                                contrast: s()
                            }
                        }
                    })
                }
                var i = document.head,
                    r = i ? i.firstElementChild : null,
                    a = !k.disableTheming && t.has("$MD_THEME_CSS") ? t.get("$MD_THEME_CSS") : "";
                if (a += k.registeredStyles.join(""), r && 0 !== a.length) {
                    e.forEach(p, o);
                    var d = a.split(/\}(?!(\}|'|"|;))/).filter(function(e) {
                            return e && e.trim().length
                        }).map(function(e) {
                            return e.trim() + "}"
                        }),
                        s = new RegExp("md-(" + y.join("|") + ")", "g");
                    y.forEach(function(e) {
                        _[e] = ""
                    }), d.forEach(function(e) {
                        for (var t, n = (e.match(s), 0); t = y[n]; n++)
                            if (e.indexOf(".md-" + t) > -1) return _[t] += e;
                        for (n = 0; t = y[n]; n++)
                            if (e.indexOf(t) > -1) return _[t] += e;
                        return _[M] += e
                    }), k.generateOnDemand || e.forEach(n.THEMES, function(e) {
                        h[e.name] || "default" !== n.defaultTheme() && "default" === e.name || c(e, e.name, k.nonce)
                    })
                }
            }

            function c(e, t, n) {
                var o = document.head,
                    i = o ? o.firstElementChild : null;
                h[t] || (y.forEach(function(t) {
                    for (var r = d(e, t, _[t]); r.length;) {
                        var a = r.shift();
                        if (a) {
                            var s = document.createElement("style");
                            s.setAttribute("md-theme-style", ""), n && s.setAttribute("nonce", n), s.appendChild(document.createTextNode(a)), o.insertBefore(s, i)
                        }
                    }
                }), h[e.name] = !0)
            }

            function l(e, t) {
                if (!p[(e.colors[t] || {}).name]) throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(p).join(", ")))
            }

            function m(t) {
                if (e.isArray(t) && 3 == t.length) return t;
                if (/^rgb/.test(t)) return t.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function(e, t) {
                    return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
                });
                if ("#" == t.charAt(0) && (t = t.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(t)) {
                    var n = t.length / 3,
                        o = t.substr(0, n),
                        i = t.substr(n, n),
                        r = t.substr(2 * n);
                    return 1 === n && (o += o, i += i, r += r), [parseInt(o, 16), parseInt(i, 16), parseInt(r, 16)]
                }
            }

            function u(t, n) {
                return t ? (4 == t.length && (t = e.copy(t), n ? t.pop() : n = t.pop()), n && ("number" == typeof n || "string" == typeof n && n.length) ? "rgba(" + t.join(",") + "," + n + ")" : "rgb(" + t.join(",") + ")") : "rgb('0,0,0')"
            }
            e.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", i).directive("mdThemable", a).directive("mdThemesDisabled", r).provider("$mdTheming", o).config(t).run(s), t.$inject = ["$mdThemingProvider"];
            var p, h = {},
                f = {
                    name: "dark",
                    1: "rgba(0,0,0,0.87)",
                    2: "rgba(0,0,0,0.54)",
                    3: "rgba(0,0,0,0.38)",
                    4: "rgba(0,0,0,0.12)"
                },
                g = {
                    name: "light",
                    1: "rgba(255,255,255,1.0)",
                    2: "rgba(255,255,255,0.7)",
                    3: "rgba(255,255,255,0.5)",
                    4: "rgba(255,255,255,0.12)"
                },
                b = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",
                v = "",
                E = m("rgba(0,0,0,0.87)"),
                $ = m("rgba(255,255,255,0.87)"),
                C = m("rgb(255,255,255)"),
                y = ["primary", "accent", "warn", "background"],
                M = "primary",
                T = {
                    accent: {
                        "default": "A200",
                        "hue-1": "A100",
                        "hue-2": "A400",
                        "hue-3": "A700"
                    },
                    background: {
                        "default": "50",
                        "hue-1": "A100",
                        "hue-2": "100",
                        "hue-3": "300"
                    }
                },
                A = {
                    background: {
                        "default": "A400",
                        "hue-1": "800",
                        "hue-2": "900",
                        "hue-3": "A200"
                    }
                };
            y.forEach(function(e) {
                var t = {
                    "default": "500",
                    "hue-1": "300",
                    "hue-2": "800",
                    "hue-3": "A100"
                };
                T[e] || (T[e] = t), A[e] || (A[e] = t)
            });
            var w = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"],
                k = {
                    disableTheming: !1,
                    generateOnDemand: !1,
                    registeredStyles: [],
                    nonce: null
                };
            o.$inject = ["$mdColorPalette"], i.$inject = ["$mdTheming", "$interpolate", "$log"], a.$inject = ["$mdTheming"];
            var _ = {};
            s.$inject = ["$injector", "$mdTheming"]
        }(e.angular)
    }(),
    function() {
        function n(n, o, i, r, a) {
            var d;
            return d = {
                translate3d: function(e, t, n, o) {
                    function i(n) {
                        return a(e, {
                            to: n || t,
                            addClass: o.transitionOutClass,
                            removeClass: o.transitionInClass
                        }).start()
                    }
                    return a(e, {
                        from: t,
                        to: n,
                        addClass: o.transitionInClass,
                        removeClass: o.transitionOutClass
                    }).start().then(function() {
                        return i
                    })
                },
                waitTransitionEnd: function(t, n) {
                    var a = 3e3;
                    return o(function(o, d) {
                        function s(e) {
                            e && e.target !== t[0] || (e && i.cancel(l), t.off(r.CSS.TRANSITIONEND, s), o())
                        }

                        function c(n) {
                            return n = n || e.getComputedStyle(t[0]), "0s" == n.transitionDuration || !n.transition && !n.transitionProperty
                        }
                        n = n || {}, c(n.cachedTransitionStyles) && (a = 0);
                        var l = i(s, n.timeout || a);
                        t.on(r.CSS.TRANSITIONEND, s)
                    })
                },
                calculateTransformValues: function(e, t) {
                    function n() {
                        var t = e ? e.parent() : null,
                            n = t ? t.parent() : null;
                        return n ? d.clientRect(n) : null
                    }
                    var o = t.element,
                        i = t.bounds;
                    if (o || i) {
                        var r = o ? d.clientRect(o) || n() : d.copyRect(i),
                            a = d.copyRect(e[0].getBoundingClientRect()),
                            s = d.centerPointFor(a),
                            c = d.centerPointFor(r);
                        return {
                            centerX: c.x - s.x,
                            centerY: c.y - s.y,
                            scaleX: Math.round(100 * Math.min(.5, r.width / a.width)) / 100,
                            scaleY: Math.round(100 * Math.min(.5, r.height / a.height)) / 100
                        }
                    }
                    return {
                        centerX: 0,
                        centerY: 0,
                        scaleX: .5,
                        scaleY: .5
                    }
                },
                calculateZoomToOrigin: function(e, o) {
                    var i = "translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",
                        r = t.bind(null, n.supplant, i);
                    return r(d.calculateTransformValues(e, o))
                },
                calculateSlideToOrigin: function(e, o) {
                    var i = "translate3d( {centerX}px, {centerY}px, 0 )",
                        r = t.bind(null, n.supplant, i);
                    return r(d.calculateTransformValues(e, o))
                },
                toCss: function(e) {
                    function n(e, n, i) {
                        t.forEach(n.split(" "), function(e) {
                            o[e] = i
                        })
                    }
                    var o = {},
                        i = "left top right bottom width height x y min-width min-height max-width max-height";
                    return t.forEach(e, function(e, a) {
                        if (!t.isUndefined(e))
                            if (i.indexOf(a) >= 0) o[a] = e + "px";
                            else switch (a) {
                                case "transition":
                                    n(a, r.CSS.TRANSITION, e);
                                    break;
                                case "transform":
                                    n(a, r.CSS.TRANSFORM, e);
                                    break;
                                case "transformOrigin":
                                    n(a, r.CSS.TRANSFORM_ORIGIN, e);
                                    break;
                                case "font-size":
                                    o["font-size"] = e
                            }
                    }), o
                },
                toTransformCss: function(e, n, o) {
                    var i = {};
                    return t.forEach(r.CSS.TRANSFORM.split(" "), function(t) {
                        i[t] = e
                    }), n && (o = o || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important", i.transition = o), i
                },
                copyRect: function(e, n) {
                    return e ? (n = n || {}, t.forEach("left top right bottom width height".split(" "), function(t) {
                        n[t] = Math.round(e[t])
                    }), n.width = n.width || n.right - n.left, n.height = n.height || n.bottom - n.top, n) : null
                },
                clientRect: function(e) {
                    var n = t.element(e)[0].getBoundingClientRect(),
                        o = function(e) {
                            return e && e.width > 0 && e.height > 0
                        };
                    return o(n) ? d.copyRect(n) : null
                },
                centerPointFor: function(e) {
                    return e ? {
                        x: Math.round(e.left + e.width / 2),
                        y: Math.round(e.top + e.height / 2)
                    } : {
                        x: 0,
                        y: 0
                    }
                }
            }
        }
        t.module("material.core").factory("$$mdAnimate", ["$q", "$timeout", "$mdConstant", "$animateCss", function(e, t, o, i) {
            return function(r) {
                return n(r, e, t, o, i)
            }
        }])
    }(),
    function() {
        t.version.minor >= 4 ? t.module("material.core.animate", []) : ! function() {
            function e(e) {
                return e.replace(/-[a-z]/g, function(e) {
                    return e.charAt(1).toUpperCase()
                })
            }
            var n = t.forEach,
                o = t.isDefined(document.documentElement.style.WebkitAppearance),
                i = o ? "-webkit-" : "",
                r = (o ? "webkitTransitionEnd " : "") + "transitionend",
                a = (o ? "webkitAnimationEnd " : "") + "animationend",
                d = ["$document", function(e) {
                    return function() {
                        return e[0].body.clientWidth + 1
                    }
                }],
                s = ["$$rAF", function(e) {
                    return function() {
                        var t = !1;
                        return e(function() {
                                t = !0
                            }),
                            function(n) {
                                t ? n() : e(n)
                            }
                    }
                }],
                c = ["$q", "$$rAFMutex", function(e, o) {
                    function i(e) {
                        this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = o(), this._state = 0
                    }
                    var r = 0,
                        a = 1,
                        d = 2;
                    return i.prototype = {
                        setHost: function(e) {
                            this.host = e || {}
                        },
                        done: function(e) {
                            this._state === d ? e() : this._doneCallbacks.push(e)
                        },
                        progress: t.noop,
                        getPromise: function() {
                            if (!this.promise) {
                                var t = this;
                                this.promise = e(function(e, n) {
                                    t.done(function(t) {
                                        t === !1 ? n() : e()
                                    })
                                })
                            }
                            return this.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        "catch": function(e) {
                            return this.getPromise()["catch"](e)
                        },
                        "finally": function(e) {
                            return this.getPromise()["finally"](e)
                        },
                        pause: function() {
                            this.host.pause && this.host.pause()
                        },
                        resume: function() {
                            this.host.resume && this.host.resume()
                        },
                        end: function() {
                            this.host.end && this.host.end(), this._resolve(!0)
                        },
                        cancel: function() {
                            this.host.cancel && this.host.cancel(), this._resolve(!1)
                        },
                        complete: function(e) {
                            var t = this;
                            t._state === r && (t._state = a, t._runInAnimationFrame(function() {
                                t._resolve(e)
                            }))
                        },
                        _resolve: function(e) {
                            this._state !== d && (n(this._doneCallbacks, function(t) {
                                t(e)
                            }), this._doneCallbacks.length = 0, this._state = d)
                        }
                    }, i.all = function(e, t) {
                        function o(n) {
                            r = r && n, ++i === e.length && t(r)
                        }
                        var i = 0,
                            r = !0;
                        n(e, function(e) {
                            e.done(o)
                        })
                    }, i
                }];
            t.module("material.core.animate", []).factory("$$forceReflow", d).factory("$$AnimateRunner", c).factory("$$rAFMutex", s).factory("$animateCss", ["$window", "$$rAF", "$$AnimateRunner", "$$forceReflow", "$$jqLite", "$timeout", "$animate", function(t, d, s, c, l, m, u) {
                function p(o, d) {
                    var c = [],
                        l = C(o),
                        p = l && u.enabled(),
                        g = !1,
                        M = !1;
                    p && (d.transitionStyle && c.push([i + "transition", d.transitionStyle]), d.keyframeStyle && c.push([i + "animation", d.keyframeStyle]), d.delay && c.push([i + "transition-delay", d.delay + "s"]), d.duration && c.push([i + "transition-duration", d.duration + "s"]), g = d.keyframeStyle || d.to && (d.duration > 0 || d.transitionStyle), M = !!d.addClass || !!d.removeClass, y(o, !0));
                    var T = p && (g || M);
                    E(o, d);
                    var A, w, k = !1;
                    return {
                        close: t.close,
                        start: function() {
                            function t() {
                                if (!k) return k = !0, A && w && o.off(A, w), h(o, d), v(o, d), n(c, function(t) {
                                    l.style[e(t[0])] = ""
                                }), u.complete(!0), u
                            }
                            var u = new s;
                            return b(function() {
                                if (y(o, !1), !T) return t();
                                n(c, function(t) {
                                    var n = t[0],
                                        o = t[1];
                                    l.style[e(n)] = o
                                }), h(o, d);
                                var s = f(o);
                                if (0 === s.duration) return t();
                                var u = [];
                                d.easing && (s.transitionDuration && u.push([i + "transition-timing-function", d.easing]), s.animationDuration && u.push([i + "animation-timing-function", d.easing])), d.delay && s.animationDelay && u.push([i + "animation-delay", d.delay + "s"]), d.duration && s.animationDuration && u.push([i + "animation-duration", d.duration + "s"]), n(u, function(t) {
                                    var n = t[0],
                                        o = t[1];
                                    l.style[e(n)] = o, c.push(t)
                                });
                                var p = s.delay,
                                    g = 1e3 * p,
                                    b = s.duration,
                                    v = 1e3 * b,
                                    E = Date.now();
                                A = [], s.transitionDuration && A.push(r), s.animationDuration && A.push(a), A = A.join(" "), w = function(e) {
                                    e.stopPropagation();
                                    var n = e.originalEvent || e,
                                        o = n.timeStamp || Date.now(),
                                        i = parseFloat(n.elapsedTime.toFixed(3));
                                    Math.max(o - E, 0) >= g && i >= b && t()
                                }, o.on(A, w), $(o, d), m(t, g + 1.5 * v, !1)
                            }), u
                        }
                    }
                }

                function h(e, t) {
                    t.addClass && (l.addClass(e, t.addClass), t.addClass = null), t.removeClass && (l.removeClass(e, t.removeClass), t.removeClass = null)
                }

                function f(e) {
                    function n(e) {
                        return o ? "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) : e
                    }
                    var i = C(e),
                        r = t.getComputedStyle(i),
                        a = g(r[n("transitionDuration")]),
                        d = g(r[n("animationDuration")]),
                        s = g(r[n("transitionDelay")]),
                        c = g(r[n("animationDelay")]);
                    d *= parseInt(r[n("animationIterationCount")], 10) || 1;
                    var l = Math.max(d, a),
                        m = Math.max(c, s);
                    return {
                        duration: l,
                        delay: m,
                        animationDuration: d,
                        transitionDuration: a,
                        animationDelay: c,
                        transitionDelay: s
                    }
                }

                function g(e) {
                    var t = 0,
                        o = (e || "").split(/\s*,\s*/);
                    return n(o, function(e) {
                        "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
                    }), t
                }

                function b(e) {
                    M && M(), T.push(e), M = d(function() {
                        M = null;
                        for (var e = c(), t = 0; t < T.length; t++) T[t](e);
                        T.length = 0
                    })
                }

                function v(e, t) {
                    E(e, t), $(e, t)
                }

                function E(e, t) {
                    t.from && (e.css(t.from), t.from = null)
                }

                function $(e, t) {
                    t.to && (e.css(t.to), t.to = null)
                }

                function C(e) {
                    for (var t = 0; t < e.length; t++)
                        if (1 === e[t].nodeType) return e[t]
                }

                function y(t, n) {
                    var o = C(t),
                        r = e(i + "transition-delay");
                    o.style[r] = n ? "-9999s" : ""
                }
                var M, T = [];
                return p
            }])
        }()
    }(),
    function() {
        t.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"])
    }(),
    function() {
        t.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", ["$mdTheming", "$mdUtil", "$animate", "$rootElement", "$window", "$log", "$$rAF", "$document", function(e, n, o, i, r, a, d, s) {
            function c(c, m, u) {
                function p() {
                    var e = parseInt(h.height, 10) + Math.abs(parseInt(h.top, 10));
                    m.css("height", e + "px")
                }
                o.pin && o.pin(m, i);
                var h;
                d(function() {
                    if (h = r.getComputedStyle(s[0].body), "fixed" === h.position) {
                        var o = n.debounce(function() {
                            h = r.getComputedStyle(s[0].body), p()
                        }, 60, null, !1);
                        p(), t.element(r).on("resize", o), c.$on("$destroy", function() {
                            t.element(r).off("resize", o)
                        })
                    }
                    var i = m.parent();
                    if (i.length) {
                        "BODY" === i[0].nodeName && m.css("position", "fixed");
                        var d = r.getComputedStyle(i[0]);
                        "static" === d.position && a.warn(l), e.inherit(m, i)
                    }
                })
            }
            var l = "<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";
            return {
                restrict: "E",
                link: c
            }
        }])
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                link: function(t, n) {
                    n.addClass("_md"), t.$on("$destroy", function() {
                        e.destroy()
                    })
                }
            }
        }

        function n(e) {
            function n(e, n, r, a, d, s, c, l) {
                function m(o, i, c, m) {
                    if (i = r.extractElementByName(i, "md-bottom-sheet"), i.attr("tabindex", "-1"), i.hasClass("ng-cloak")) {
                        var u = "$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";
                        l.warn(u, i[0])
                    }
                    c.disableBackdrop || (h = r.createBackdrop(o, "md-bottom-sheet-backdrop md-opaque"), h[0].tabIndex = -1, c.clickOutsideToClose && h.on("click", function() {
                        r.nextTick(d.cancel, !0)
                    }), a.inherit(h, c.parent), e.enter(h, c.parent, null));
                    var f = new p(i, c.parent);
                    return c.bottomSheet = f, a.inherit(f.element, c.parent), c.disableParentScroll && (c.restoreScroll = r.disableScrollAround(f.element, c.parent)), e.enter(f.element, c.parent, h).then(function() {
                        var e = r.findFocusTarget(i) || t.element(i[0].querySelector("button") || i[0].querySelector("a") || i[0].querySelector(r.prefixer("ng-click", !0))) || h;
                        c.escapeToClose && (c.rootElementKeyupCallback = function(e) {
                            e.keyCode === n.KEY_CODE.ESCAPE && r.nextTick(d.cancel, !0)
                        }, s.on("keyup", c.rootElementKeyupCallback), e && e.focus())
                    })
                }

                function u(t, n, o) {
                    var i = o.bottomSheet;
                    return o.disableBackdrop || e.leave(h), e.leave(i.element).then(function() {
                        o.disableParentScroll && (o.restoreScroll(), delete o.restoreScroll), i.cleanup()
                    })
                }

                function p(e, t) {
                    function a(t) {
                        e.css(n.CSS.TRANSITION_DURATION, "0ms")
                    }

                    function s(t) {
                        var o = t.pointer.distanceY;
                        o < 5 && (o = Math.max(-i, o / 2)), e.css(n.CSS.TRANSFORM, "translate3d(0," + (i + o) + "px,0)")
                    }

                    function l(t) {
                        if (t.pointer.distanceY > 0 && (t.pointer.distanceY > 20 || Math.abs(t.pointer.velocityY) > o)) {
                            var i = e.prop("offsetHeight") - t.pointer.distanceY,
                                a = Math.min(i / t.pointer.velocityY * .75, 500);
                            e.css(n.CSS.TRANSITION_DURATION, a + "ms"), r.nextTick(d.cancel, !0)
                        } else e.css(n.CSS.TRANSITION_DURATION, ""), e.css(n.CSS.TRANSFORM, "")
                    }
                    var m = c.register(t, "drag", {
                        horizontal: !1
                    });
                    return t.on("$md.dragstart", a).on("$md.drag", s).on("$md.dragend", l), {
                        element: e,
                        cleanup: function() {
                            m(), t.off("$md.dragstart", a), t.off("$md.drag", s), t.off("$md.dragend", l)
                        }
                    }
                }
                var h;
                return {
                    themable: !0,
                    onShow: m,
                    onRemove: u,
                    disableBackdrop: !1,
                    escapeToClose: !0,
                    clickOutsideToClose: !0,
                    disableParentScroll: !0
                }
            }
            var o = .5,
                i = 80;
            return n.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture", "$log"], e("$mdBottomSheet").setDefaults({
                methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"],
                options: n
            })
        }
        t.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", n), e.$inject = ["$mdBottomSheet"], n.$inject = ["$$interimElementProvider"]
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                link: function(t, n) {
                    e(n)
                }
            }
        }

        function n(e, n, o, i) {
            function r(e) {
                return t.isDefined(e.href) || t.isDefined(e.ngHref) || t.isDefined(e.ngLink) || t.isDefined(e.uiSref)
            }

            function a(e, t) {
                if (r(t)) return '<a class="md-button" ng-transclude></a>';
                var n = "undefined" == typeof t.type ? "button" : t.type;
                return '<button class="md-button" type="' + n + '" ng-transclude></button>'
            }

            function d(a, d, s) {
                n(d), e.attach(a, d), o.expectWithoutText(d, "aria-label"), r(s) && t.isDefined(s.ngDisabled) && a.$watch(s.ngDisabled, function(e) {
                    d.attr("tabindex", e ? -1 : 0)
                }), d.on("click", function(e) {
                    s.disabled === !0 && (e.preventDefault(), e.stopImmediatePropagation())
                }), d.hasClass("md-no-focus") || (a.mouseActive = !1, d.on("mousedown", function() {
                    a.mouseActive = !0, i(function() {
                        a.mouseActive = !1
                    }, 100)
                }).on("focus", function() {
                    a.mouseActive === !1 && d.addClass("md-focused")
                }).on("blur", function(e) {
                    d.removeClass("md-focused")
                }))
            }
            return {
                restrict: "EA",
                replace: !0,
                transclude: !0,
                template: a,
                link: d
            }
        }
        t.module("material.components.button", ["material.core"]).directive("mdButton", n).directive("a", e), e.$inject = ["$mdTheming"], n.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$timeout"]
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                link: function(t, n, o) {
                    n.addClass("_md"), e(n)
                }
            }
        }
        t.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
    }(),
    function() {
        function e(e, n, o, i, r, a) {
            function d(d, s) {
                function c(d, s, c, l) {
                    function m(e, t, n) {
                        c[e] && d.$watch(c[e], function(e) {
                            n[e] && s.attr(t, n[e])
                        })
                    }

                    function u(e) {
                        var t = e.which || e.keyCode;
                        t !== o.KEY_CODE.SPACE && t !== o.KEY_CODE.ENTER || (e.preventDefault(), s.addClass("md-focused"), p(e))
                    }

                    function p(e) {
                        s[0].hasAttribute("disabled") || d.skipToggle || d.$apply(function() {
                            var t = c.ngChecked ? c.checked : !l.$viewValue;
                            l.$setViewValue(t, e && e.type), l.$render()
                        })
                    }

                    function h() {
                        s.toggleClass("md-checked", !!l.$viewValue && !g)
                    }

                    function f(e) {
                        g = e !== !1, g && s.attr("aria-checked", "mixed"), s.toggleClass("md-indeterminate", g)
                    }
                    var g;
                    l = l || r.fakeNgModel(), i(s), s.children().on("focus", function() {
                        s.focus()
                    }), r.parseAttributeBoolean(c.mdIndeterminate) && (f(), d.$watch(c.mdIndeterminate, f)), c.ngChecked && d.$watch(d.$eval.bind(d, c.ngChecked), l.$setViewValue.bind(l)), m("ngDisabled", "tabindex", {
                        "true": "-1",
                        "false": c.tabindex
                    }), n.expectWithText(s, "aria-label"), e.link.pre(d, {
                        on: t.noop,
                        0: {}
                    }, c, [l]), d.mouseActive = !1, s.on("click", p).on("keypress", u).on("mousedown", function() {
                        d.mouseActive = !0, a(function() {
                            d.mouseActive = !1
                        }, 100)
                    }).on("focus", function() {
                        d.mouseActive === !1 && s.addClass("md-focused")
                    }).on("blur", function() {
                        s.removeClass("md-focused")
                    }), l.$render = h
                }
                return s.$set("tabindex", s.tabindex || "0"), s.$set("type", "checkbox"), s.$set("role", s.type), {
                    pre: function(e, t) {
                        t.on("click", function(e) {
                            this.hasAttribute("disabled") && e.stopImmediatePropagation()
                        })
                    },
                    post: c
                }
            }
            return e = e[0], {
                restrict: "E",
                transclude: !0,
                require: "?ngModel",
                priority: 210,
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
                compile: d
            }
        }
        t.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$timeout"]
    }(),
    function() {
        t.module("material.components.chips", ["material.core", "material.components.autocomplete"])
    }(),
    function() {
        ! function() {
            function e(e, n, o) {
                function i(e, t) {
                    try {
                        t && e.css(s(t))
                    } catch (n) {
                        o.error(n.message)
                    }
                }

                function a(e) {
                    var t = l(e);
                    return d(t)
                }

                function d(t, o) {
                    o = o || !1;
                    var i = e.PALETTES[t.palette][t.hue];
                    return i = o ? i.contrast : i.value, n.supplant("rgba({0}, {1}, {2}, {3})", [i[0], i[1], i[2], i[3] || t.opacity])
                }

                function s(e) {
                    var n = {},
                        o = e.hasOwnProperty("color");
                    return t.forEach(e, function(e, t) {
                        var i = l(e),
                            r = t.indexOf("background") > -1;
                        n[t] = d(i), r && !o && (n.color = d(i, !0))
                    }), n
                }

                function c(n) {
                    return t.isDefined(e.THEMES[n.split("-")[0]])
                }

                function l(n) {
                    var o = n.split("-"),
                        i = t.isDefined(e.THEMES[o[0]]),
                        r = i ? o.splice(0, 1)[0] : e.defaultTheme();
                    return {
                        theme: r,
                        palette: m(o, r),
                        hue: u(o, r),
                        opacity: o[2] || 1
                    }
                }

                function m(t, o) {
                    var i = t.length > 1 && r.indexOf(t[1]) !== -1,
                        a = t[0].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    if (i && (a = t[0] + "-" + t.splice(1, 1)), r.indexOf(a) === -1) {
                        var d = e.THEMES[o].colors[a];
                        if (!d) throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.", {
                            palette: a
                        }));
                        a = d.name
                    }
                    return a
                }

                function u(t, o) {
                    var i = e.THEMES[o].colors;
                    if ("hue" === t[1]) {
                        var r = parseInt(t.splice(2, 1)[0], 10);
                        if (r < 1 || r > 3) throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'", {
                            hueNumber: r
                        }));
                        if (t[1] = "hue-" + r, !(t[0] in i)) throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'", {
                            availableThemes: Object.keys(i).join(", "),
                            usedTheme: t[0]
                        }));
                        return i[t[0]].hues[t[1]]
                    }
                    return t[1] || i[t[0] in i ? t[0] : "primary"].hues["default"]
                }
                return r = r || Object.keys(e.PALETTES), {
                    applyThemeColors: i,
                    getThemeColor: a,
                    hasTheme: c
                }
            }

            function o(e, n, o, r) {
                return {
                    restrict: "A",
                    require: ["^?mdTheme"],
                    compile: function(a, d) {
                        function s() {
                            var e = d.mdColors,
                                o = e.indexOf("::") > -1,
                                r = !!o || i.test(d.mdColors);
                            d.mdColors = e.replace("::", "");
                            var a = t.isDefined(d.mdColorsWatch);
                            return !o && !r && (!a || n.parseAttributeBoolean(d.mdColorsWatch))
                        }
                        var c = s();
                        return function(n, i, a, d) {
                            var s = d[0],
                                l = {},
                                m = function(t) {
                                    "string" != typeof t && (t = ""), a.mdColors || (a.mdColors = "{}");
                                    var o = r(a.mdColors)(n);
                                    return s && Object.keys(o).forEach(function(n) {
                                        var i = o[n];
                                        e.hasTheme(i) || (o[n] = (t || s.$mdTheme) + "-" + i)
                                    }), u(o), o
                                },
                                u = function(e) {
                                    if (!t.equals(e, l)) {
                                        var n = Object.keys(l);
                                        l.background && !n.color && n.push("color"), n.forEach(function(e) {
                                            i.css(e, "")
                                        })
                                    }
                                    l = e
                                },
                                p = t.noop;
                            s && (p = s.registerChanges(function(t) {
                                e.applyThemeColors(i, m(t))
                            })), n.$on("$destroy", function() {
                                p()
                            });
                            try {
                                c ? n.$watch(m, t.bind(this, e.applyThemeColors, i), !0) : e.applyThemeColors(i, m())
                            } catch (h) {
                                o.error(h.message)
                            }
                        }
                    }
                }
            }
            var i = /^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,
                r = n;
            t.module("material.components.colors", ["material.core"]).directive("mdColors", o).service("$mdColors", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"], o.$inject = ["$mdColors", "$mdUtil", "$log", "$parse"]
        }()
    }(),
    function() {
        function e(e) {
            function t(e, t) {
                this.$scope = e, this.$element = t
            }
            return {
                restrict: "E",
                controller: ["$scope", "$element", t],
                link: function(t, o) {
                    o.addClass("_md"), e(o), t.$broadcast("$mdContentLoaded", o), n(o[0])
                }
            }
        }

        function n(e) {
            t.element(e).on("$md.pressdown", function(t) {
                "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
            })
        }
        t.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
    }(),
    function() {
        t.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"])
    }(),
    function() {
        function e(e, n, o) {
            return {
                restrict: "E",
                link: function(i, r) {
                    r.addClass("_md"), n(r), e(function() {
                        function e() {
                            r.toggleClass("md-content-overflow", a.scrollHeight > a.clientHeight)
                        }
                        var n, a = r[0].querySelector("md-dialog-content");
                        a && (n = a.getElementsByTagName("img"), e(), t.element(n).on("load", e)), i.$on("$destroy", function() {
                            o.destroy(r)
                        })
                    })
                }
            }
        }

        function o(e) {
            function o(e, t) {
                return {
                    template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">', '  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">', '    <h2 class="md-title">{{ dialog.title }}</h2>', '    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ', '        ng-bind-html="::dialog.mdHtmlContent"></div>', '    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">', "      <p>{{::dialog.mdTextContent}}</p>", "    </div>", '    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">', '      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">', "    </md-input-container>", "  </md-dialog-content>", "  <md-dialog-actions>", '    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary">', "      {{ dialog.cancel }}", "    </md-button>", '    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type===\'alert\'">', "      {{ dialog.ok }}", "    </md-button>", "  </md-dialog-actions>", "</md-dialog>"].join("").replace(/\s\s+/g, ""),
                    controller: function() {
                        var n = "prompt" == this.$type;
                        n && this.initialValue && (this.result = this.initialValue), this.hide = function() {
                            e.hide(!n || this.result)
                        }, this.abort = function() {
                            e.cancel()
                        }, this.keypress = function(n) {
                            n.keyCode === t.KEY_CODE.ENTER && e.hide(this.result)
                        }
                    },
                    controllerAs: "dialog",
                    bindToController: !0
                }
            }

            function i(e, o, i, d, s, c, l, m, u, p, h) {
                function f(e) {
                    E(e)
                }

                function g(e, t, n, o) {
                    if (o) {
                        if (o.mdHtmlContent = o.htmlContent || n.htmlContent || "", o.mdTextContent = o.textContent || n.textContent || o.content || n.content || "", o.mdHtmlContent && !p.has("$sanitize")) throw Error("The ngSanitize module must be loaded in order to use htmlContent.");
                        if (o.mdHtmlContent && o.mdTextContent) throw Error("md-dialog cannot have both `htmlContent` and `textContent`")
                    }
                }

                function b(e, n, o, r) {
                    function a() {
                        n[0].querySelector(".md-actions") && u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")
                    }

                    function d() {
                        function e() {
                            var e = n[0].querySelector(".dialog-close");
                            if (!e) {
                                var o = n[0].querySelectorAll(".md-actions button, md-dialog-actions button");
                                e = o[o.length - 1]
                            }
                            return t.element(e)
                        }
                        if (o.focusOnOpen) {
                            var r = i.findFocusTarget(n) || e();
                            r.focus()
                        }
                    }
                    if (t.element(c[0].body).addClass("md-dialog-is-showing"), o.contentElement) {
                        var s = o.contentElement;
                        t.isString(s) ? (s = document.querySelector(s), o.elementInsertionSibling = s.nextElementSibling, o.elementInsertionParent = s.parentNode) : (s = s[0] || s, document.contains(s) && (o.elementInsertionSibling = s.nextElementSibling, o.elementInsertionParent = s.parentNode)), o.elementInsertionEntry = s, n = t.element(s)
                    }
                    var l = n.find("md-dialog");
                    if (l.hasClass("ng-cloak")) {
                        var m = "$mdDialog: using `<md-dialog ng-cloak >` will affect the dialog opening animations.";
                        u.warn(m, n[0])
                    }
                    return $(o), M(l, o), y(e, n, o), C(n, o), w(n, o).then(function() {
                        T(n, o), a(), d()
                    })
                }

                function v(e, n, o) {
                    function i() {
                        return k(n, o)
                    }

                    function d() {
                        o.contentElement && (o.reverseContainerStretch(), o.elementInsertionParent ? o.elementInsertionSibling ? o.elementInsertionParent.insertBefore(o.elementInsertionEntry, o.elementInsertionSibling) : o.elementInsertionParent.appendChild(o.elementInsertionEntry) : o.elementInsertionEntry.parentNode.removeChild(o.elementInsertionEntry))
                    }

                    function s() {
                        t.element(c[0].body).removeClass("md-dialog-is-showing"), o.contentElement ? d() : n.remove(), o.$destroy || o.origin.focus()
                    }
                    return o.deactivateListeners(), o.unlockScreenReader(), o.hideBackdrop(o.$destroy), r && r.parentNode && r.parentNode.removeChild(r), a && a.parentNode && a.parentNode.removeChild(a), o.$destroy ? s() : i().then(s)
                }

                function E(e) {
                    if (!e.theme && (e.theme = h.defaultTheme(), e.targetEvent && e.targetEvent.target)) {
                        var n = t.element(e.targetEvent.target);
                        e.theme = (n.controller("mdTheme") || {}).$mdTheme || e.theme
                    }
                }

                function $(e) {
                    function o(e, o) {
                        var i = t.element(e || {});
                        if (i && i.length) {
                            var r = {
                                    top: 0,
                                    left: 0,
                                    height: 0,
                                    width: 0
                                },
                                a = t.isFunction(i[0].getBoundingClientRect);
                            return t.extend(o || {}, {
                                element: a ? i : n,
                                bounds: a ? i[0].getBoundingClientRect() : t.extend({}, r, i[0]),
                                focus: t.bind(i, i.focus)
                            })
                        }
                    }

                    function i(e, n) {
                        return t.isString(e) && (e = c[0].querySelector(e)), t.element(e || n)
                    }
                    e.origin = t.extend({
                        element: null,
                        bounds: null,
                        focus: t.noop
                    }, e.origin || {}), e.parent = i(e.parent, m), e.closeTo = o(i(e.closeTo)), e.openFrom = o(i(e.openFrom)), e.targetEvent && (e.origin = o(e.targetEvent.target, e.origin))
                }

                function C(n, o) {
                    var r = t.element(l),
                        a = i.debounce(function() {
                            A(n, o)
                        }, 60),
                        s = [],
                        c = function() {
                            var t = "alert" == o.$type ? e.hide : e.cancel;
                            i.nextTick(t, !0)
                        };
                    if (o.escapeToClose) {
                        var m = o.parent,
                            u = function(e) {
                                e.keyCode === d.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), c())
                            };
                        n.on("keydown", u), m.on("keydown", u), s.push(function() {
                            n.off("keydown", u), m.off("keydown", u)
                        })
                    }
                    if (r.on("resize", a), s.push(function() {
                            r.off("resize", a)
                        }), o.clickOutsideToClose) {
                        var p, h = n,
                            f = function(e) {
                                p = e.target
                            },
                            g = function(e) {
                                p === h[0] && e.target === h[0] && (e.stopPropagation(), e.preventDefault(), c())
                            };
                        h.on("mousedown", f), h.on("mouseup", g), s.push(function() {
                            h.off("mousedown", f), h.off("mouseup", g)
                        })
                    }
                    o.deactivateListeners = function() {
                        s.forEach(function(e) {
                            e()
                        }), o.deactivateListeners = null
                    }
                }

                function y(e, t, n) {
                    n.disableParentScroll && (n.restoreScroll = i.disableScrollAround(t, n.parent)), n.hasBackdrop && (n.backdrop = i.createBackdrop(e, "md-dialog-backdrop md-opaque"), s.enter(n.backdrop, n.parent)), n.hideBackdrop = function(e) {
                        n.backdrop && (e ? n.backdrop.remove() : s.leave(n.backdrop)), n.disableParentScroll && (n.restoreScroll(), delete n.restoreScroll), n.hideBackdrop = null
                    }
                }

                function M(e, t) {
                    var n = "alert" === t.$type ? "alertdialog" : "dialog",
                        d = e.find("md-dialog-content"),
                        s = e.attr("id"),
                        c = "dialogContent_" + (s || i.nextUid());
                    e.attr({
                        role: n,
                        tabIndex: "-1"
                    }), 0 === d.length && (d = e, s && (c = s)), d.attr("id", c), e.attr("aria-describedby", c), t.ariaLabel ? o.expect(e, "aria-label", t.ariaLabel) : o.expectAsync(e, "aria-label", function() {
                        var e = d.text().split(/\s+/);
                        return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
                    }), r = document.createElement("div"), r.classList.add("md-dialog-focus-trap"), r.tabIndex = 0, a = r.cloneNode(!1);
                    var l = function() {
                        e.focus()
                    };
                    r.addEventListener("focus", l), a.addEventListener("focus", l), e[0].parentNode.insertBefore(r, e[0]), e.after(a)
                }

                function T(e, t) {
                    function n(e) {
                        for (; e.parentNode;) {
                            if (e === document.body) return;
                            for (var t = e.parentNode.children, i = 0; i < t.length; i++) e === t[i] || _(t[i], ["SCRIPT", "STYLE"]) || t[i].setAttribute("aria-hidden", o);
                            n(e = e.parentNode)
                        }
                    }
                    var o = !0;
                    n(e[0]), t.unlockScreenReader = function() {
                        o = !1, n(e[0]), t.unlockScreenReader = null
                    }
                }

                function A(e, t) {
                    var n = "fixed" == l.getComputedStyle(c[0].body).position,
                        o = t.backdrop ? l.getComputedStyle(t.backdrop[0]) : null,
                        r = o ? Math.min(c[0].body.clientHeight, Math.ceil(Math.abs(parseInt(o.height, 10)))) : 0,
                        a = {
                            top: e.css("top"),
                            height: e.css("height")
                        };
                    return e.css({
                            top: (n ? i.scrollTop(t.parent) : 0) + "px",
                            height: r ? r + "px" : "100%"
                        }),
                        function() {
                            e.css(a)
                        }
                }

                function w(e, t) {
                    t.parent.append(e), t.reverseContainerStretch = A(e, t);
                    var n = e.find("md-dialog"),
                        o = i.dom.animator,
                        r = o.calculateZoomToOrigin,
                        a = {
                            transitionInClass: "md-transition-in",
                            transitionOutClass: "md-transition-out"
                        },
                        d = o.toTransformCss(r(n, t.openFrom || t.origin)),
                        s = o.toTransformCss("");
                    return t.fullscreen && n.addClass("md-dialog-fullscreen"), o.translate3d(n, d, s, a).then(function(e) {
                        return t.reverseAnimate = function() {
                            return delete t.reverseAnimate, t.closeTo ? (a = {
                                transitionInClass: "md-transition-out",
                                transitionOutClass: "md-transition-in"
                            }, d = s, s = o.toTransformCss(r(n, t.closeTo)), o.translate3d(n, d, s, a)) : e(s = o.toTransformCss(r(n, t.origin)))
                        }, t.clearAnimate = function() {
                            return delete t.clearAnimate, o.translate3d(n, s, o.toTransformCss(""), {})
                        }, !0
                    })
                }

                function k(e, t) {
                    return t.reverseAnimate().then(function() {
                        t.contentElement && t.clearAnimate()
                    })
                }

                function _(e, t) {
                    if (t.indexOf(e.nodeName) !== -1) return !0
                }
                return {
                    hasBackdrop: !0,
                    isolateScope: !0,
                    onCompiling: f,
                    onShow: b,
                    onShowing: g,
                    onRemove: v,
                    clickOutsideToClose: !1,
                    escapeToClose: !0,
                    targetEvent: null,
                    contentElement: null,
                    closeTo: null,
                    openFrom: null,
                    focusOnOpen: !0,
                    disableParentScroll: !0,
                    autoWrap: !0,
                    fullscreen: !1,
                    transformTemplate: function(e, t) {
                        function n(e) {
                            return t.autoWrap && !/<\/md-dialog>/g.test(e) ? "<md-dialog>" + (e || "") + "</md-dialog>" : e || ""
                        }
                        return '<div class="md-dialog-container" tabindex="-1">' + n(e) + "</div>"
                    }
                }
            }
            var r, a;
            return o.$inject = ["$mdDialog", "$mdConstant"], i.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement", "$log", "$injector", "$mdTheming"], e("$mdDialog").setDefaults({
                methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "closeTo", "openFrom", "parent", "fullscreen", "contentElement"],
                options: i
            }).addPreset("alert", {
                methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "theme", "css"],
                options: o
            }).addPreset("confirm", {
                methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "cancel", "theme", "css"],
                options: o
            }).addPreset("prompt", {
                methods: ["title", "htmlContent", "textContent", "initialValue", "content", "placeholder", "ariaLabel", "ok", "cancel", "theme", "css"],
                options: o
            })
        }
        t.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", o), e.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], o.$inject = ["$$interimElementProvider"]
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                link: e
            }
        }
        t.module("material.components.divider", ["material.core"]).directive("mdDivider", e), e.$inject = ["$mdTheming"]
    }(),
    function() {
        ! function() {
            function e(e) {
                return {
                    restrict: "E",
                    require: ["^?mdFabSpeedDial", "^?mdFabToolbar"],
                    compile: function(t, n) {
                        var o = t.children(),
                            i = e.prefixer().hasAttribute(o, "ng-repeat");
                        i ? o.addClass("md-fab-action-item") : o.wrap('<div class="md-fab-action-item">')
                    }
                }
            }
            t.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", e), e.$inject = ["$mdUtil"]
        }()
    }(),
    function() {
        ! function() {
            function e(e, n, o, i, r, a) {
                function d() {
                    S.direction = S.direction || "down", S.isOpen = S.isOpen || !1, l(), n.addClass("md-animations-waiting")
                }

                function s() {
                    var o = ["click", "focusin", "focusout"];
                    t.forEach(o, function(e) {
                        n.on(e, c)
                    }), e.$on("$destroy", function() {
                        t.forEach(o, function(e) {
                            n.off(e, c)
                        }), h()
                    })
                }

                function c(e) {
                    "click" == e.type && k(e), "focusout" != e.type || D || (D = a(function() {
                        S.close()
                    }, 100, !1)), "focusin" == e.type && D && (a.cancel(D), D = null)
                }

                function l() {
                    S.currentActionIndex = -1
                }

                function m() {
                    e.$watch("vm.direction", function(e, t) {
                        o.removeClass(n, "md-" + t), o.addClass(n, "md-" + e), l()
                    });
                    var t, i;
                    e.$watch("vm.isOpen", function(e) {
                        l(), t && i || (t = _(), i = x()), e ? p() : h();
                        var r = e ? "md-is-open" : "",
                            a = e ? "" : "md-is-open";
                        t.attr("aria-haspopup", !0), t.attr("aria-expanded", e), i.attr("aria-hidden", !e), o.setClass(n, r, a)
                    })
                }

                function u() {
                    n[0].scrollHeight > 0 ? o.addClass(n, "_md-animations-ready").then(function() {
                        n.removeClass("md-animations-waiting")
                    }) : N < 10 && (a(u, 100), N += 1)
                }

                function p() {
                    n.on("keydown", g), i.nextTick(function() {
                        t.element(document).on("click touchend", f)
                    })
                }

                function h() {
                    n.off("keydown", g), t.element(document).off("click touchend", f)
                }

                function f(e) {
                    if (e.target) {
                        var t = i.getClosest(e.target, "md-fab-trigger"),
                            n = i.getClosest(e.target, "md-fab-actions");
                        t || n || S.close()
                    }
                }

                function g(e) {
                    switch (e.which) {
                        case r.KEY_CODE.ESCAPE:
                            return S.close(), e.preventDefault(), !1;
                        case r.KEY_CODE.LEFT_ARROW:
                            return C(e), !1;
                        case r.KEY_CODE.UP_ARROW:
                            return y(e), !1;
                        case r.KEY_CODE.RIGHT_ARROW:
                            return M(e), !1;
                        case r.KEY_CODE.DOWN_ARROW:
                            return T(e), !1
                    }
                }

                function b(e) {
                    E(e, -1)
                }

                function v(e) {
                    E(e, 1)
                }

                function E(e, n) {
                    var o = $();
                    S.currentActionIndex = S.currentActionIndex + n, S.currentActionIndex = Math.min(o.length - 1, S.currentActionIndex), S.currentActionIndex = Math.max(0, S.currentActionIndex);
                    var i = t.element(o[S.currentActionIndex]).children()[0];
                    t.element(i).attr("tabindex", 0), i.focus(), e.preventDefault(), e.stopImmediatePropagation()
                }

                function $() {
                    var e = x()[0].querySelectorAll(".md-fab-action-item");
                    return t.forEach(e, function(e) {
                        t.element(t.element(e).children()[0]).attr("tabindex", -1)
                    }), e
                }

                function C(e) {
                    "left" === S.direction ? v(e) : b(e)
                }

                function y(e) {
                    "down" === S.direction ? b(e) : v(e)
                }

                function M(e) {
                    "left" === S.direction ? b(e) : v(e)
                }

                function T(e) {
                    "up" === S.direction ? b(e) : v(e)
                }

                function A(e) {
                    return i.getClosest(e, "md-fab-trigger")
                }

                function w(e) {
                    return i.getClosest(e, "md-fab-actions")
                }

                function k(e) {
                    A(e.target) && S.toggle(), w(e.target) && S.close()
                }

                function _() {
                    return n.find("md-fab-trigger")
                }

                function x() {
                    return n.find("md-fab-actions")
                }
                var S = this;
                S.open = function() {
                    e.$evalAsync("vm.isOpen = true")
                }, S.close = function() {
                    e.$evalAsync("vm.isOpen = false"), n.find("md-fab-trigger")[0].focus()
                }, S.toggle = function() {
                    e.$evalAsync("vm.isOpen = !vm.isOpen")
                }, d(), s(), m();
                var N = 0;
                u();
                var D
            }
            t.module("material.components.fabShared", ["material.core"]).controller("MdFabController", e), e.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant", "$timeout"]
        }()
    }(),
    function() {
        ! function() {
            function n() {
                function e(e, t) {
                    t.prepend('<div class="_md-css-variables"></div>')
                }
                return {
                    restrict: "E",
                    scope: {
                        direction: "@?mdDirection",
                        isOpen: "=?mdOpen"
                    },
                    bindToController: !0,
                    controller: "MdFabController",
                    controllerAs: "vm",
                    link: e
                }
            }

            function o(n) {
                function o(e) {
                    n(e, r, !1)
                }

                function i(n) {
                    if (!n.hasClass("md-animations-waiting") || n.hasClass("_md-animations-ready")) {
                        var o = n[0],
                            i = n.controller("mdFabSpeedDial"),
                            r = o.querySelectorAll(".md-fab-action-item"),
                            a = o.querySelector("md-fab-trigger"),
                            d = o.querySelector("._md-css-variables"),
                            s = parseInt(e.getComputedStyle(d).zIndex);
                        t.forEach(r, function(e, t) {
                            var n = e.style;
                            n.transform = n.webkitTransform = "", n.transitionDelay = "", n.opacity = 1, n.zIndex = r.length - t + s
                        }), a.style.zIndex = s + r.length + 1, i.isOpen || t.forEach(r, function(e, t) {
                            var n, o, r = e.style,
                                d = (a.clientHeight - e.clientHeight) / 2,
                                s = (a.clientWidth - e.clientWidth) / 2;
                            switch (i.direction) {
                                case "up":
                                    n = e.scrollHeight * (t + 1) + d, o = "Y";
                                    break;
                                case "down":
                                    n = -(e.scrollHeight * (t + 1) + d), o = "Y";
                                    break;
                                case "left":
                                    n = e.scrollWidth * (t + 1) + s, o = "X";
                                    break;
                                case "right":
                                    n = -(e.scrollWidth * (t + 1) + s), o = "X"
                            }
                            var c = "translate" + o + "(" + n + "px)";
                            r.transform = r.webkitTransform = c
                        })
                    }
                }
                return {
                    addClass: function(e, t, n) {
                        e.hasClass("md-fling") ? (i(e), o(n)) : n()
                    },
                    removeClass: function(e, t, n) {
                        i(e), o(n)
                    }
                }
            }

            function i(n) {
                function o(e) {
                    n(e, r, !1)
                }

                function i(n) {
                    var o = n[0],
                        i = n.controller("mdFabSpeedDial"),
                        r = o.querySelectorAll(".md-fab-action-item"),
                        d = o.querySelector("._md-css-variables"),
                        s = parseInt(e.getComputedStyle(d).zIndex);
                    t.forEach(r, function(e, t) {
                        var n = e.style,
                            o = t * a;
                        n.opacity = i.isOpen ? 1 : 0, n.transform = n.webkitTransform = i.isOpen ? "scale(1)" : "scale(0)", n.transitionDelay = (i.isOpen ? o : r.length - o) + "ms", n.zIndex = r.length - t + s
                    })
                }
                var a = 65;
                return {
                    addClass: function(e, t, n) {
                        i(e), o(n)
                    },
                    removeClass: function(e, t, n) {
                        i(e), o(n)
                    }
                }
            }
            var r = 300;
            t.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabSpeedDial", n).animation(".md-fling", o).animation(".md-scale", i).service("mdFabSpeedDialFlingAnimation", o).service("mdFabSpeedDialScaleAnimation", i), o.$inject = ["$timeout"], i.$inject = ["$timeout"]
        }()
    }(),
    function() {
        ! function() {
            function n() {
                function e(e, t, n) {
                    t.addClass("md-fab-toolbar"), t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')
                }
                return {
                    restrict: "E",
                    transclude: !0,
                    template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',
                    scope: {
                        direction: "@?mdDirection",
                        isOpen: "=?mdOpen"
                    },
                    bindToController: !0,
                    controller: "MdFabController",
                    controllerAs: "vm",
                    link: e
                }
            }

            function o() {
                function n(n, o, i) {
                    if (o) {
                        var r = n[0],
                            a = n.controller("mdFabToolbar"),
                            d = r.querySelector(".md-fab-toolbar-background"),
                            s = r.querySelector("md-fab-trigger button"),
                            c = r.querySelector("md-toolbar"),
                            l = r.querySelector("md-fab-trigger button md-icon"),
                            m = n.find("md-fab-actions").children();
                        if (s && d) {
                            var u = e.getComputedStyle(s).getPropertyValue("background-color"),
                                p = r.offsetWidth,
                                h = (r.offsetHeight, 2 * (p / s.offsetWidth));
                            d.style.backgroundColor = u, d.style.borderRadius = p + "px", a.isOpen ? (c.style.pointerEvents = "inherit", d.style.width = s.offsetWidth + "px", d.style.height = s.offsetHeight + "px", d.style.transform = "scale(" + h + ")", d.style.transitionDelay = "0ms", l && (l.style.transitionDelay = ".3s"), t.forEach(m, function(e, t) {
                                e.style.transitionDelay = 25 * (m.length - t) + "ms"
                            })) : (c.style.pointerEvents = "none", d.style.transform = "scale(1)", d.style.top = "0", n.hasClass("md-right") && (d.style.left = "0", d.style.right = null), n.hasClass("md-left") && (d.style.right = "0", d.style.left = null), d.style.transitionDelay = "200ms", l && (l.style.transitionDelay = "0ms"), t.forEach(m, function(e, t) {
                                e.style.transitionDelay = 200 + 25 * t + "ms"
                            }))
                        }
                    }
                }
                return {
                    addClass: function(e, t, o) {
                        n(e, t, o), o()
                    },
                    removeClass: function(e, t, o) {
                        n(e, t, o), o()
                    }
                }
            }
            t.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabToolbar", n).animation(".md-fab-toolbar", o).service("mdFabToolbarAnimation", o)
        }()
    }(),
    function() {
        function e(e, o, i, r) {
            function a(n, a, d, s) {
                function c() {
                    for (var e in o.MEDIA) r(e), r.getQuery(o.MEDIA[e]).addListener(M);
                    return r.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], d, m)
                }

                function l() {
                    s.layoutDelegate = t.noop, T();
                    for (var e in o.MEDIA) r.getQuery(o.MEDIA[e]).removeListener(M)
                }

                function m(e) {
                    null == e ? s.invalidateLayout() : r(e) && s.invalidateLayout()
                }

                function u(e) {
                    var o = g(),
                        r = {
                            tileSpans: b(o),
                            colCount: v(),
                            rowMode: C(),
                            rowHeight: $(),
                            gutter: E()
                        };
                    if (e || !t.equals(r, A)) {
                        var d = i(r.colCount, r.tileSpans, o).map(function(e, n) {
                            return {
                                grid: {
                                    element: a,
                                    style: f(r.colCount, n, r.gutter, r.rowMode, r.rowHeight)
                                },
                                tiles: e.map(function(e, i) {
                                    return {
                                        element: t.element(o[i]),
                                        style: h(e.position, e.spans, r.colCount, n, r.gutter, r.rowMode, r.rowHeight)
                                    }
                                })
                            }
                        }).reflow().performance();
                        n.mdOnLayout({
                            $event: {
                                performance: d
                            }
                        }), A = r
                    }
                }

                function p(e) {
                    return w + e + k
                }

                function h(e, t, n, o, i, r, a) {
                    var d = 1 / n * 100,
                        s = (n - 1) / n,
                        c = _({
                            share: d,
                            gutterShare: s,
                            gutter: i
                        }),
                        l = {
                            left: x({
                                unit: c,
                                offset: e.col,
                                gutter: i
                            }),
                            width: S({
                                unit: c,
                                span: t.col,
                                gutter: i
                            }),
                            paddingTop: "",
                            marginTop: "",
                            top: "",
                            height: ""
                        };
                    switch (r) {
                        case "fixed":
                            l.top = x({
                                unit: a,
                                offset: e.row,
                                gutter: i
                            }), l.height = S({
                                unit: a,
                                span: t.row,
                                gutter: i
                            });
                            break;
                        case "ratio":
                            var m = d / a,
                                u = _({
                                    share: m,
                                    gutterShare: s,
                                    gutter: i
                                });
                            l.paddingTop = S({
                                unit: u,
                                span: t.row,
                                gutter: i
                            }), l.marginTop = x({
                                unit: u,
                                offset: e.row,
                                gutter: i
                            });
                            break;
                        case "fit":
                            var p = (o - 1) / o,
                                m = 1 / o * 100,
                                u = _({
                                    share: m,
                                    gutterShare: p,
                                    gutter: i
                                });
                            l.top = x({
                                unit: u,
                                offset: e.row,
                                gutter: i
                            }), l.height = S({
                                unit: u,
                                span: t.row,
                                gutter: i
                            })
                    }
                    return l
                }

                function f(e, t, n, o, i) {
                    var r = {};
                    switch (o) {
                        case "fixed":
                            r.height = S({
                                unit: i,
                                span: t,
                                gutter: n
                            }), r.paddingBottom = "";
                            break;
                        case "ratio":
                            var a = 1 === e ? 0 : (e - 1) / e,
                                d = 1 / e * 100,
                                s = d * (1 / i),
                                c = _({
                                    share: s,
                                    gutterShare: a,
                                    gutter: n
                                });
                            r.height = "", r.paddingBottom = S({
                                unit: c,
                                span: t,
                                gutter: n
                            });
                            break;
                        case "fit":
                    }
                    return r
                }

                function g() {
                    return [].filter.call(a.children(), function(e) {
                        return "MD-GRID-TILE" == e.tagName && !e.$$mdDestroyed
                    })
                }

                function b(e) {
                    return [].map.call(e, function(e) {
                        var n = t.element(e).controller("mdGridTile");
                        return {
                            row: parseInt(r.getResponsiveAttribute(n.$attrs, "md-rowspan"), 10) || 1,
                            col: parseInt(r.getResponsiveAttribute(n.$attrs, "md-colspan"), 10) || 1
                        }
                    })
                }

                function v() {
                    var e = parseInt(r.getResponsiveAttribute(d, "md-cols"), 10);
                    if (isNaN(e)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
                    return e
                }

                function E() {
                    return y(r.getResponsiveAttribute(d, "md-gutter") || 1)
                }

                function $() {
                    var e = r.getResponsiveAttribute(d, "md-row-height");
                    if (!e) throw "md-grid-list: md-row-height attribute was not found";
                    switch (C()) {
                        case "fixed":
                            return y(e);
                        case "ratio":
                            var t = e.split(":");
                            return parseFloat(t[0]) / parseFloat(t[1]);
                        case "fit":
                            return 0
                    }
                }

                function C() {
                    var e = r.getResponsiveAttribute(d, "md-row-height");
                    if (!e) throw "md-grid-list: md-row-height attribute was not found";
                    return "fit" == e ? "fit" : e.indexOf(":") !== -1 ? "ratio" : "fixed"
                }

                function y(e) {
                    return /\D$/.test(e) ? e : e + "px"
                }
                a.addClass("_md"), a.attr("role", "list"), s.layoutDelegate = u;
                var M = t.bind(s, s.invalidateLayout),
                    T = c();
                n.$on("$destroy", l);
                var A, w = e.startSymbol(),
                    k = e.endSymbol(),
                    _ = e(p("share") + "% - (" + p("gutter") + " * " + p("gutterShare") + ")"),
                    x = e("calc((" + p("unit") + " + " + p("gutter") + ") * " + p("offset") + ")"),
                    S = e("calc((" + p("unit") + ") * " + p("span") + " + (" + p("span") + " - 1) * " + p("gutter") + ")");
            }
            return {
                restrict: "E",
                controller: n,
                scope: {
                    mdOnLayout: "&"
                },
                link: a
            }
        }

        function n(e) {
            this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = e.nextTick, this.layoutDelegate = t.noop
        }

        function o(e) {
            function n(t, n) {
                var o, a, d, s, c, l;
                return s = e.time(function() {
                    a = i(t, n)
                }), o = {
                    layoutInfo: function() {
                        return a
                    },
                    map: function(t) {
                        return c = e.time(function() {
                            var e = o.layoutInfo();
                            d = t(e.positioning, e.rowCount)
                        }), o
                    },
                    reflow: function(t) {
                        return l = e.time(function() {
                            var e = t || r;
                            e(d.grid, d.tiles)
                        }), o
                    },
                    performance: function() {
                        return {
                            tileCount: n.length,
                            layoutTime: s,
                            mapTime: c,
                            reflowTime: l,
                            totalTime: s + c + l
                        }
                    }
                }
            }

            function o(e, t) {
                e.element.css(e.style), t.forEach(function(e) {
                    e.element.css(e.style)
                })
            }

            function i(e, t) {
                function n(t, n) {
                    if (t.col > e) throw "md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
                    for (var a = 0, l = 0; l - a < t.col;) d >= e ? o() : (a = c.indexOf(0, d), a !== -1 && (l = r(a + 1)) !== -1 ? d = l + 1 : (a = l = 0, o()));
                    return i(a, t.col, t.row), d = a + t.col, {
                        col: a,
                        row: s
                    }
                }

                function o() {
                    d = 0, s++, i(0, e, -1)
                }

                function i(e, t, n) {
                    for (var o = e; o < e + t; o++) c[o] = Math.max(c[o] + n, 0)
                }

                function r(e) {
                    var t;
                    for (t = e; t < c.length; t++)
                        if (0 !== c[t]) return t;
                    if (t === c.length) return t
                }

                function a() {
                    for (var t = [], n = 0; n < e; n++) t.push(0);
                    return t
                }
                var d = 0,
                    s = 0,
                    c = a();
                return {
                    positioning: t.map(function(e, t) {
                        return {
                            spans: e,
                            position: n(e, t)
                        }
                    }),
                    rowCount: s + Math.max.apply(Math, c)
                }
            }
            var r = o;
            return n.animateWith = function(e) {
                r = t.isFunction(e) ? e : o
            }, n
        }

        function i(e) {
            function n(n, o, i, r) {
                o.attr("role", "listitem");
                var a = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], i, t.bind(r, r.invalidateLayout));
                r.invalidateTiles(), n.$on("$destroy", function() {
                    o[0].$$mdDestroyed = !0, a(), r.invalidateLayout()
                }), t.isDefined(n.$parent.$index) && n.$watch(function() {
                    return n.$parent.$index
                }, function(e, t) {
                    e !== t && r.invalidateTiles()
                })
            }
            return {
                restrict: "E",
                require: "^mdGridList",
                template: "<figure ng-transclude></figure>",
                transclude: !0,
                scope: {},
                controller: ["$attrs", function(e) {
                    this.$attrs = e
                }],
                link: n
            }
        }

        function r() {
            return {
                template: "<figcaption ng-transclude></figcaption>",
                transclude: !0
            }
        }
        t.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", i).directive("mdGridTileFooter", r).directive("mdGridTileHeader", r).factory("$mdGridLayout", o), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], n.$inject = ["$mdUtil"], n.prototype = {
            invalidateTiles: function() {
                this.tilesInvalidated = !0, this.invalidateLayout()
            },
            invalidateLayout: function() {
                this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(t.bind(this, this.layout)))
            },
            layout: function() {
                try {
                    this.layoutDelegate(this.tilesInvalidated)
                } finally {
                    this.layoutInvalidated = !1, this.tilesInvalidated = !1
                }
            }
        }, o.$inject = ["$mdUtil"], i.$inject = ["$mdMedia"]
    }(),
    function() {
        t.module("material.components.icon", ["material.core"])
    }(),
    function() {
        function n(e, t) {
            function n(t, n) {
                e(n);
                var o = n[0].querySelector(r),
                    i = n[0].querySelector(a);
                o && n.addClass("md-icon-left"), i && n.addClass("md-icon-right")
            }

            function o(e, n, o, i) {
                var r = this;
                r.isErrorGetter = o.mdIsError && t(o.mdIsError), r.delegateClick = function() {
                    r.input.focus()
                }, r.element = n, r.setFocused = function(e) {
                    n.toggleClass("md-input-focused", !!e)
                }, r.setHasValue = function(e) {
                    n.toggleClass("md-input-has-value", !!e)
                }, r.setHasPlaceholder = function(e) {
                    n.toggleClass("md-input-has-placeholder", !!e)
                }, r.setInvalid = function(e) {
                    e ? i.addClass(n, "md-input-invalid") : i.removeClass(n, "md-input-invalid")
                }, e.$watch(function() {
                    return r.label && r.input
                }, function(e) {
                    e && !r.label.attr("for") && r.label.attr("for", r.input.attr("id"))
                })
            }
            var i = ["INPUT", "TEXTAREA", "SELECT", "MD-SELECT"],
                r = i.reduce(function(e, t) {
                    return e.concat(["md-icon ~ " + t, ".md-icon ~ " + t])
                }, []).join(","),
                a = i.reduce(function(e, t) {
                    return e.concat([t + " ~ md-icon", t + " ~ .md-icon"])
                }, []).join(",");
            return o.$inject = ["$scope", "$element", "$attrs", "$animate"], {
                restrict: "E",
                link: n,
                controller: o
            }
        }

        function o() {
            return {
                restrict: "E",
                require: "^?mdInputContainer",
                link: function(e, t, n, o) {
                    !o || n.mdNoFloat || t.hasClass("md-container-ignore") || (o.label = t, e.$on("$destroy", function() {
                        o.label = null
                    }))
                }
            }
        }

        function i(e, n, o, i, r) {
            function a(a, d, s, c) {
                function l(e) {
                    return h.setHasValue(!g.$isEmpty(e)), e
                }

                function m() {
                    h.label && s.$observe("required", function(e) {
                        h.label.toggleClass("md-required", e && !E)
                    })
                }

                function u() {
                    h.setHasValue(d.val().length > 0 || (d[0].validity || {}).badInput)
                }

                function p() {
                    function o() {
                        d.attr("rows", 1).css("height", "auto").addClass("md-no-flex");
                        var e = c();
                        if (!$) {
                            var t = d[0].style.padding || "";
                            $ = d.css("padding", 0).prop("offsetHeight"), d[0].style.padding = t
                        }
                        if (b && $ && (e = Math.max(e, $ * b)), v && $) {
                            var n = $ * v;
                            n < e ? (d.attr("md-no-autogrow", ""), e = n) : d.removeAttr("md-no-autogrow")
                        }
                        $ && d.attr("rows", Math.round(e / $)), d.css("height", e + "px").removeClass("md-no-flex")
                    }

                    function c() {
                        var e = C.offsetHeight,
                            t = C.scrollHeight - e;
                        return e + Math.max(t, 0)
                    }

                    function l(t) {
                        return e.nextTick(o), t
                    }

                    function m() {
                        if (p && (p = !1, t.element(n).off("resize", o), E && E(), d.attr("md-no-autogrow", "").off("input", o), f)) {
                            var e = g.$formatters.indexOf(l);
                            e > -1 && g.$formatters.splice(e, 1)
                        }
                    }

                    function u() {
                        function n(e) {
                            e.preventDefault(), u = !0, p = e.clientY, f = parseFloat(d.css("height")) || d.prop("offsetHeight")
                        }

                        function o(e) {
                            u && (e.preventDefault(), m(), g.addClass("md-input-resized"))
                        }

                        function i(t) {
                            u && d.css("height", f + (t.pointer.y - p) - e.scrollTop() + "px")
                        }

                        function c(e) {
                            u && (u = !1, g.removeClass("md-input-resized"))
                        }
                        if (!s.hasOwnProperty("mdNoResize")) {
                            var l = t.element('<div class="md-resize-handle"></div>'),
                                u = !1,
                                p = null,
                                f = 0,
                                g = h.element,
                                b = r.register(l, "drag", {
                                    horizontal: !1
                                });
                            d.after(l), l.on("mousedown", n), g.on("$md.dragstart", o).on("$md.drag", i).on("$md.dragend", c), a.$on("$destroy", function() {
                                l.off("mousedown", n).remove(), g.off("$md.dragstart", o).off("$md.drag", i).off("$md.dragend", c), b(), l = null, g = null, b = null
                            })
                        }
                    }
                    var p = !s.hasOwnProperty("mdNoAutogrow");
                    if (u(), p) {
                        var b = s.hasOwnProperty("rows") ? parseInt(s.rows) : NaN,
                            v = s.hasOwnProperty("maxRows") ? parseInt(s.maxRows) : NaN,
                            E = a.$on("md-resize-textarea", o),
                            $ = null,
                            C = d[0];
                        if (i(function() {
                                e.nextTick(o)
                            }, 10, !1), d.on("input", o), f && g.$formatters.push(l), b || d.attr("rows", 1), t.element(n).on("resize", o), a.$on("$destroy", m), s.hasOwnProperty("mdDetectHidden")) {
                            var y = function() {
                                var e = !1;
                                return function() {
                                    var t = 0 === C.offsetHeight;
                                    t === !1 && e === !0 && o(), e = t
                                }
                            }();
                            a.$watch(function() {
                                return e.nextTick(y, !1), !0
                            })
                        }
                    }
                }
                var h = c[0],
                    f = !!c[1],
                    g = c[1] || e.fakeNgModel(),
                    b = c[2],
                    v = t.isDefined(s.readonly),
                    E = e.parseAttributeBoolean(s.mdNoAsterisk),
                    $ = d[0].tagName.toLowerCase();
                if (h) {
                    if ("hidden" === s.type) return void d.attr("aria-hidden", "true");
                    if (h.input) {
                        if (h.input[0].contains(d[0])) return;
                        throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!")
                    }
                    h.input = d, m();
                    var C = t.element('<div class="md-errors-spacer">');
                    d.after(C), h.label || o.expect(d, "aria-label", s.placeholder), d.addClass("md-input"), d.attr("id") || d.attr("id", "input_" + e.nextUid()), "input" === $ && "number" === s.type && s.min && s.max && !s.step ? d.attr("step", "any") : "textarea" === $ && p(), f || u();
                    var y = h.isErrorGetter || function() {
                        return g.$invalid && (g.$touched || b && b.$submitted)
                    };
                    a.$watch(y, h.setInvalid), s.ngValue && s.$observe("value", u), g.$parsers.push(l), g.$formatters.push(l), d.on("input", u), v || d.on("focus", function(t) {
                        e.nextTick(function() {
                            h.setFocused(!0)
                        })
                    }).on("blur", function(t) {
                        e.nextTick(function() {
                            h.setFocused(!1), u()
                        })
                    }), a.$on("$destroy", function() {
                        h.setFocused(!1), h.setHasValue(!1), h.input = null
                    })
                }
            }
            return {
                restrict: "E",
                require: ["^?mdInputContainer", "?ngModel", "?^form"],
                link: a
            }
        }

        function r(e, n) {
            function o(o, i, r, a) {
                function d(e) {
                    return c.parent ? (c.text(String(i.val() || e || "").length + " / " + s), e) : e
                }
                var s, c, l, m = a[0],
                    u = a[1];
                n.nextTick(function() {
                    l = t.element(u.element[0].querySelector(".md-errors-spacer")), c = t.element('<div class="md-char-counter">'), l.append(c), r.$set("ngTrim", "false"), m.$formatters.push(d), m.$viewChangeListeners.push(d), i.on("input keydown keyup", function() {
                        d()
                    }), o.$watch(r.mdMaxlength, function(n) {
                        s = n, t.isNumber(n) && n > 0 ? (c.parent().length || e.enter(c, l), d()) : e.leave(c)
                    }), m.$validators["md-maxlength"] = function(e, n) {
                        return !t.isNumber(s) || s < 0 || (e || i.val() || n || "").length <= s
                    }
                })
            }
            return {
                restrict: "A",
                require: ["ngModel", "^mdInputContainer"],
                link: o
            }
        }

        function a(e) {
            function n(n, o, i, r) {
                if (r) {
                    var a = r.element.find("label"),
                        d = r.element.attr("md-no-float");
                    if (a && a.length || "" === d || n.$eval(d)) return void r.setHasPlaceholder(!0);
                    if ("MD-SELECT" != o[0].nodeName) {
                        var s = t.element('<label ng-click="delegateClick()" tabindex="-1">' + i.placeholder + "</label>");
                        i.$set("placeholder", null), r.element.addClass("md-icon-float").prepend(s), e(s)(n)
                    }
                }
            }
            return {
                restrict: "A",
                require: "^^?mdInputContainer",
                priority: 200,
                link: {
                    pre: n
                }
            }
        }

        function d(e) {
            function t(t, n, o) {
                function i() {
                    a = !0, e(function() {
                        n[0].select(), a = !1
                    }, 1, !1)
                }

                function r(e) {
                    a && e.preventDefault()
                }
                if ("INPUT" === n[0].nodeName || "TEXTAREA" === n[0].nodeName) {
                    var a = !1;
                    n.on("focus", i).on("mouseup", r), t.$on("$destroy", function() {
                        n.off("focus", i).off("mouseup", r)
                    })
                }
            }
            return {
                restrict: "A",
                link: t
            }
        }

        function s() {
            function e(e, n, o, i) {
                i && (n.toggleClass("md-input-messages-animation", !0), n.toggleClass("md-auto-hide", !0), ("false" == o.mdAutoHide || t(o)) && n.toggleClass("md-auto-hide", !1))
            }

            function t(e) {
                return $.some(function(t) {
                    return e[t]
                })
            }
            return {
                restrict: "EA",
                link: e,
                require: "^^?mdInputContainer"
            }
        }

        function c(e) {
            function t(t) {
                function n() {
                    for (var e = t[0]; e = e.parentNode;)
                        if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) return !0;
                    return !1
                }

                function o(t) {
                    return !!e.getClosest(t, "md-input-container")
                }

                function i(e) {
                    e.toggleClass("md-input-message-animation", !0)
                }
                if (o(t)) i(t);
                else if (n()) return function(e, n) {
                    o(n) && i(t)
                }
            }
            return {
                restrict: "EA",
                compile: t,
                priority: 100
            }
        }

        function l(e, t, n) {
            return E(e, t, n), {
                addClass: function(e, t, n) {
                    p(e, n)
                }
            }
        }

        function m(e, t, n) {
            return E(e, t, n), {
                enter: function(e, t) {
                    p(e, t)
                },
                leave: function(e, t) {
                    h(e, t)
                },
                addClass: function(e, t, n) {
                    "ng-hide" == t ? h(e, n) : n()
                },
                removeClass: function(e, t, n) {
                    "ng-hide" == t ? p(e, n) : n()
                }
            }
        }

        function u(e, t, n) {
            return E(e, t, n), {
                enter: function(e, t) {
                    return f(e)
                },
                leave: function(e, t) {
                    return g(e)
                }
            }
        }

        function p(e, n) {
            var o, i = [],
                r = v(e);
            t.forEach(r.children(), function(e) {
                o = f(t.element(e)), i.push(o.start())
            }), C.all(i, n)
        }

        function h(e, n) {
            var o, i = [],
                r = v(e);
            t.forEach(r.children(), function(e) {
                o = g(t.element(e)), i.push(o.start())
            }), C.all(i, n)
        }

        function f(t) {
            var n = parseInt(e.getComputedStyle(t[0]).height),
                o = parseInt(e.getComputedStyle(t[0]).marginTop),
                i = v(t),
                r = b(t),
                a = o > -n;
            return a || i.hasClass("md-auto-hide") && !r.hasClass("md-input-invalid") ? y(t, {}) : y(t, {
                event: "enter",
                structural: !0,
                from: {
                    opacity: 0,
                    "margin-top": -n + "px"
                },
                to: {
                    opacity: 1,
                    "margin-top": "0"
                },
                duration: .3
            })
        }

        function g(t) {
            var n = t[0].offsetHeight,
                o = e.getComputedStyle(t[0]);
            return 0 == o.opacity ? y(t, {}) : y(t, {
                event: "leave",
                structural: !0,
                from: {
                    opacity: 1,
                    "margin-top": 0
                },
                to: {
                    opacity: 0,
                    "margin-top": -n + "px"
                },
                duration: .3
            })
        }

        function b(e) {
            var t = e.controller("mdInputContainer");
            return t.element
        }

        function v(e) {
            return e.hasClass("md-input-message-animation") ? t.element(M.getClosest(e, function(e) {
                return e.classList.contains("md-input-messages-animation")
            })) : t.element(e[0].querySelector(".md-input-messages-animation"))
        }

        function E(e, t, n) {
            C = e, y = t, M = n
        }
        t.module("material.components.input", ["material.core"]).directive("mdInputContainer", n).directive("label", o).directive("input", i).directive("textarea", i).directive("mdMaxlength", r).directive("placeholder", a).directive("ngMessages", s).directive("ngMessage", c).directive("ngMessageExp", c).directive("mdSelectOnFocus", d).animation(".md-input-invalid", l).animation(".md-input-messages-animation", m).animation(".md-input-message-animation", u).service("mdInputInvalidAnimation", l).service("mdInputMessagesAnimation", m).service("mdInputMessageAnimation", u), n.$inject = ["$mdTheming", "$parse"], i.$inject = ["$mdUtil", "$window", "$mdAria", "$timeout", "$mdGesture"], r.$inject = ["$animate", "$mdUtil"], a.$inject = ["$compile"], d.$inject = ["$timeout"];
        var $ = ["ngIf", "ngShow", "ngHide", "ngSwitchWhen", "ngSwitchDefault"];
        c.$inject = ["$mdUtil"];
        var C, y, M;
        l.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil"], m.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil"], u.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil"]
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                compile: function(t) {
                    return t[0].setAttribute("role", "list"), e
                }
            }
        }

        function n(e, n, o, i) {
            var r = ["md-checkbox", "md-switch", "md-menu"];
            return {
                restrict: "E",
                controller: "MdListController",
                compile: function(a, d) {
                    function s() {
                        for (var e, t, n = ["md-switch", "md-checkbox"], o = 0; t = n[o]; ++o)
                            if ((e = a.find(t)[0]) && !e.hasAttribute("aria-label")) {
                                var i = a.find("p")[0];
                                if (!i) return;
                                e.setAttribute("aria-label", "Toggle " + i.textContent)
                            }
                    }

                    function c() {
                        var e = t.element(E),
                            n = e.parent().hasClass("md-secondary-container") || E.parentNode.firstElementChild !== E,
                            o = "left";
                        n && (o = "right"), e.attr("md-position-mode") || e.attr("md-position-mode", o + " target");
                        var i = e.children().eq(0);
                        g(i[0]) || i.attr("ng-click", "$mdOpenMenu($event)"), i.attr("aria-label") || i.attr("aria-label", "Open List Menu")
                    }

                    function l(e) {
                        if ("div" == e) C = t.element('<div class="md-no-style md-list-item-inner">'), C.append(a.contents()), a.addClass("md-proxy-focus");
                        else {
                            C = t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');
                            var n = t.element('<md-button class="md-no-style"></md-button>');
                            n[0].setAttribute("aria-label", a[0].textContent), p(a[0], n[0]), a.hasClass("md-no-focus") && n.addClass("md-no-focus"), C.prepend(n), C.children().eq(1).append(a.contents()), a.addClass("_md-button-wrap")
                        }
                        a[0].setAttribute("tabindex", "-1"), a.append(C)
                    }

                    function m() {
                        var e = t.element('<div class="md-secondary-container">');
                        t.forEach($, function(t) {
                            u(t, e)
                        }), C.append(e)
                    }

                    function u(n, o) {
                        if (n && !f(n) && n.hasAttribute("ng-click")) {
                            e.expect(n, "aria-label");
                            var i = t.element('<md-button class="md-secondary md-icon-button">');
                            p(n, i[0], ["ng-if", "ng-hide", "ng-show"]), n.setAttribute("tabindex", "-1"), i.append(n), n = i[0]
                        }
                        n && (!g(n) || !d.ngClick && h(n)) && t.element(n).removeClass("md-secondary"), a.addClass("md-with-secondary"), o.append(n)
                    }

                    function p(e, n, i) {
                        var r = o.prefixer(["ng-if", "ng-click", "ng-dblclick", "aria-label", "ng-disabled", "ui-sref", "href", "ng-href", "target", "ng-attr-ui-sref", "ui-sref-opts"]);
                        i && (r = r.concat(o.prefixer(i))), t.forEach(r, function(t) {
                            e.hasAttribute(t) && (n.setAttribute(t, e.getAttribute(t)), e.removeAttribute(t))
                        })
                    }

                    function h(e) {
                        return r.indexOf(e.nodeName.toLowerCase()) != -1
                    }

                    function f(e) {
                        var t = e.nodeName.toUpperCase();
                        return "MD-BUTTON" == t || "BUTTON" == t
                    }

                    function g(e) {
                        for (var t = e.attributes, n = 0; n < t.length; n++)
                            if ("ngClick" === d.$normalize(t[n].name)) return !0;
                        return !1
                    }

                    function b(e, a, d, s) {
                        function c() {
                            p && p.children && !b && t.forEach(r, function(e) {
                                t.forEach(p.querySelectorAll(e + ":not(.md-secondary)"), function(e) {
                                    u.push(e)
                                })
                            })
                        }

                        function l() {
                            (1 == u.length || b) && (a.addClass("md-clickable"), b || s.attachRipple(e, t.element(a[0].querySelector(".md-no-style"))))
                        }

                        function m(e) {
                            var t = ["md-slider"];
                            if (!e.path) return t.indexOf(e.target.tagName.toLowerCase()) !== -1;
                            for (var n = e.path.indexOf(a.children()[0]), o = 0; o < n; o++)
                                if (t.indexOf(e.path[o].tagName.toLowerCase()) !== -1) return !0
                        }
                        a.addClass("_md");
                        var u = [],
                            p = a[0].firstElementChild,
                            h = a.hasClass("_md-button-wrap"),
                            f = h ? p.firstElementChild : p,
                            b = f && g(f);
                        c(), l(), a.hasClass("md-proxy-focus") && u.length && t.forEach(u, function(n) {
                            n = t.element(n), e.mouseActive = !1, n.on("mousedown", function() {
                                e.mouseActive = !0, i(function() {
                                    e.mouseActive = !1
                                }, 100)
                            }).on("focus", function() {
                                e.mouseActive === !1 && a.addClass("md-focused"), n.on("blur", function t() {
                                    a.removeClass("md-focused"), n.off("blur", t)
                                })
                            })
                        });
                        var v = function(e) {
                            if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName && !e.target.isContentEditable) {
                                var t = e.which || e.keyCode;
                                t == n.KEY_CODE.SPACE && f && (f.click(), e.preventDefault(), e.stopPropagation())
                            }
                        };
                        b || u.length || f && f.addEventListener("keypress", v), a.off("click"), a.off("keypress"), 1 == u.length && f && a.children().eq(0).on("click", function(e) {
                            if (!m(e)) {
                                var n = o.getClosest(e.target, "BUTTON");
                                !n && f.contains(e.target) && t.forEach(u, function(n) {
                                    e.target === n || n.contains(e.target) || ("MD-MENU" === n.nodeName && (n = n.children[0]), t.element(n).triggerHandler("click"))
                                })
                            }
                        }), e.$on("$destroy", function() {
                            f && f.removeEventListener("keypress", v)
                        })
                    }
                    var v, E, $ = a[0].querySelectorAll(".md-secondary"),
                        C = a;
                    if (a[0].setAttribute("role", "listitem"), d.ngClick || d.ngDblclick || d.ngHref || d.href || d.uiSref || d.ngAttrUiSref) l("button");
                    else {
                        for (var y, M = 0; y = r[M]; ++M)
                            if (E = a[0].querySelector(y)) {
                                v = !0;
                                break
                            }
                        v ? l("div") : a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)") || a.addClass("md-no-proxy")
                    }
                    return m(), s(), v && "MD-MENU" === E.nodeName && c(), b
                }
            }
        }

        function o(e, t, n) {
            function o(e, t) {
                var o = {};
                n.attach(e, t, o)
            }
            var i = this;
            i.attachRipple = o
        }
        t.module("material.components.list", ["material.core"]).controller("MdListController", o).directive("mdList", e).directive("mdListItem", n), e.$inject = ["$mdTheming"], n.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], o.$inject = ["$scope", "$element", "$mdListInkRipple"]
    }(),
    function() {
        t.module("material.components.menu", ["material.core", "material.components.backdrop"])
    }(),
    function() {
        t.module("material.components.menuBar", ["material.core", "material.components.menu"])
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                transclude: !0,
                controller: o,
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    mdSelectedNavItem: "=?",
                    navBarAriaLabel: "@?"
                },
                template: '<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-blur="ctrl.onBlur()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar></md-nav-ink-bar></div>',
                link: function(n, o, i, r) {
                    r.navBarAriaLabel || e.expectAsync(o, "aria-label", t.noop)
                }
            }
        }

        function o(e, t, n, o) {
            this._$timeout = n, this._$scope = t, this._$mdConstant = o, this.mdSelectedNavItem, this.navBarAriaLabel, this._navBarEl = e[0], this._inkbar;
            var i = this,
                r = this._$scope.$watch(function() {
                    return i._navBarEl.querySelectorAll("._md-nav-button").length
                }, function(e) {
                    e > 0 && (i._initTabs(), r())
                })
        }

        function i(e) {
            return {
                restrict: "E",
                require: ["mdNavItem", "^mdNavBar"],
                controller: r,
                bindToController: !0,
                controllerAs: "ctrl",
                replace: !0,
                transclude: !0,
                template: '<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}"><md-button ng-if="ctrl.mdNavSref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ui-sref="{{ctrl.mdNavSref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavHref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-href="{{ctrl.mdNavHref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavClick" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-click="ctrl.mdNavClick()"><span ng-transclude class="_md-nav-button-text"></span></md-button></li>',
                scope: {
                    mdNavClick: "&?",
                    mdNavHref: "@?",
                    mdNavSref: "@?",
                    name: "@"
                },
                link: function(n, o, i, r) {
                    var a = r[0],
                        d = r[1];
                    e(function() {
                        a.name || (a.name = t.element(o[0].querySelector("._md-nav-button-text")).text().trim());
                        var e = t.element(o[0].querySelector("._md-nav-button"));
                        e.on("click", function() {
                            d.mdSelectedNavItem = a.name, n.$apply()
                        })
                    })
                }
            }
        }

        function r(e) {
            this._$element = e, this.mdNavClick, this.mdNavHref, this.name, this._selected = !1, this._focused = !1;
            var t = !!e.attr("md-nav-click"),
                n = !!e.attr("md-nav-href"),
                o = !!e.attr("md-nav-sref");
            if ((t ? 1 : 0) + (n ? 1 : 0) + (o ? 1 : 0) > 1) throw Error("Must specify exactly one of md-nav-click, md-nav-href, md-nav-sref for nav-item directive")
        }
        t.module("material.components.navBar", ["material.core"]).controller("MdNavBarController", o).directive("mdNavBar", e).controller("MdNavItemController", r).directive("mdNavItem", i), e.$inject = ["$mdAria"], o.$inject = ["$element", "$scope", "$timeout", "$mdConstant"], o.prototype._initTabs = function() {
            this._inkbar = t.element(this._navBarEl.getElementsByTagName("md-nav-ink-bar")[0]);
            var e = this;
            this._$timeout(function() {
                e._updateTabs(e.mdSelectedNavItem, n)
            }), this._$scope.$watch("ctrl.mdSelectedNavItem", function(t, n) {
                e._$timeout(function() {
                    e._updateTabs(t, n)
                })
            })
        }, o.prototype._updateTabs = function(e, t) {
            var n = this,
                o = this._getTabs(),
                i = -1,
                r = -1,
                a = this._getTabByName(e),
                d = this._getTabByName(t);
            d && (d.setSelected(!1), i = o.indexOf(d)), a && (a.setSelected(!0), r = o.indexOf(a)), this._$timeout(function() {
                n._updateInkBarStyles(a, r, i)
            })
        }, o.prototype._updateInkBarStyles = function(e, t, n) {
            if (this._inkbar.toggleClass("_md-left", t < n).toggleClass("_md-right", t > n), this._inkbar.css({
                    display: t < 0 ? "none" : ""
                }), e) {
                var o = e.getButtonEl(),
                    i = o.offsetLeft;
                this._inkbar.css({
                    left: i + "px",
                    width: o.offsetWidth + "px"
                })
            }
        }, o.prototype._getTabs = function() {
            var e = Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));
            return e.map(function(e) {
                return t.element(e).controller("mdNavItem")
            })
        }, o.prototype._getTabByName = function(e) {
            return this._findTab(function(t) {
                return t.getName() == e
            })
        }, o.prototype._getSelectedTab = function() {
            return this._findTab(function(e) {
                return e.isSelected()
            })
        }, o.prototype.getFocusedTab = function() {
            return this._findTab(function(e) {
                return e.hasFocus()
            })
        }, o.prototype._findTab = function(e) {
            for (var t = this._getTabs(), n = 0; n < t.length; n++)
                if (e(t[n])) return t[n];
            return null
        }, o.prototype.onFocus = function() {
            var e = this._getSelectedTab();
            e && e.setFocused(!0)
        }, o.prototype.onBlur = function() {
            var e = this.getFocusedTab();
            e && e.setFocused(!1)
        }, o.prototype._moveFocus = function(e, t) {
            e.setFocused(!1), t.setFocused(!0)
        }, o.prototype.onKeydown = function(e) {
            var t = this._$mdConstant.KEY_CODE,
                n = this._getTabs(),
                o = this.getFocusedTab();
            if (o) {
                var i = n.indexOf(o);
                switch (e.keyCode) {
                    case t.UP_ARROW:
                    case t.LEFT_ARROW:
                        i > 0 && this._moveFocus(o, n[i - 1]);
                        break;
                    case t.DOWN_ARROW:
                    case t.RIGHT_ARROW:
                        i < n.length - 1 && this._moveFocus(o, n[i + 1]);
                        break;
                    case t.SPACE:
                    case t.ENTER:
                        this._$timeout(function() {
                            o.getButtonEl().click()
                        })
                }
            }
        }, i.$inject = ["$$rAF"], r.$inject = ["$element"], r.prototype.getNgClassMap = function() {
            return {
                "md-active": this._selected,
                "md-primary": this._selected,
                "md-unselected": !this._selected,
                "md-focused": this._focused
            }
        }, r.prototype.getName = function() {
            return this.name
        }, r.prototype.getButtonEl = function() {
            return this._$element[0].querySelector("._md-nav-button")
        }, r.prototype.setSelected = function(e) {
            this._selected = e
        }, r.prototype.isSelected = function() {
            return this._selected
        }, r.prototype.setFocused = function(e) {
            this._focused = e
        }, r.prototype.hasFocus = function() {
            return this._focused
        }
    }(),
    function() {
        function e(e, n, o, a) {
            this._defaultConfigOptions = {
                bindToController: !0,
                clickOutsideToClose: !1,
                disableParentScroll: !1,
                escapeToClose: !1,
                focusOnOpen: !0,
                fullscreen: !1,
                hasBackdrop: !1,
                propagateContainerEvents: !1,
                transformTemplate: t.bind(this, this._wrapTemplate),
                trapFocus: !1,
                zIndex: d
            }, this._config = {}, this._$rootElement = e, this._$rootScope = n, this._$injector = o, this._$window = a, this.animation = r.animation, this.xPosition = i.xPosition, this.yPosition = i.yPosition
        }

        function o(e, t) {
            this._$q = t.get("$q"), this._$mdCompiler = t.get("$mdCompiler"), this._$mdConstant = t.get("$mdConstant"), this._$mdUtil = t.get("$mdUtil"), this._$rootScope = t.get("$rootScope"), this._$animate = t.get("$animate"), this._$mdPanel = t.get("$mdPanel"), this._$log = t.get("$log"), this._$window = t.get("$window"), this._$$rAF = t.get("$$rAF"), this.id = e.id, this.config = e, this.isAttached = !1, this._panelContainer, this._panelEl, this._removeListeners = [], this._topFocusTrap, this._bottomFocusTrap, this._backdropRef, this._restoreScroll = null
        }

        function i(e) {
            this._$window = e.get("$window"), this._isRTL = "rtl" === e.get("$mdUtil").bidi(), this._absolute = !1, this._relativeToEl, this._top = "", this._bottom = "", this._left = "", this._right = "", this._translateX = [], this._translateY = [], this._positions = [], this._actualPosition
        }

        function r(e) {
            this._$mdUtil = e.get("$mdUtil"), this._openFrom, this._closeTo, this._animationClass = ""
        }

        function a(e) {
            var n = t.isString(e) ? document.querySelector(e) : e;
            return t.element(n)
        }
        t.module("material.components.panel", ["material.core", "material.components.backdrop"]).service("$mdPanel", e);
        var d = 80,
            s = "_md-panel-hidden",
            c = t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');
        e.$inject = ["$rootElement", "$rootScope", "$injector", "$window"], e.prototype.create = function(e) {
            var n = e || {};
            this._config = {
                scope: this._$rootScope.$new(!0),
                attachTo: this._$rootElement
            }, t.extend(this._config, this._defaultConfigOptions, n);
            var i = "panel_" + this._$injector.get("$mdUtil").nextUid(),
                r = t.extend({
                    id: i
                }, this._config);
            return new o(r, this._$injector)
        }, e.prototype.open = function(e) {
            var t = this.create(e);
            return t.open().then(function() {
                return t
            })
        }, e.prototype.newPanelPosition = function() {
            return new i(this._$injector)
        }, e.prototype.newPanelAnimation = function() {
            return new r(this._$injector)
        }, e.prototype._wrapTemplate = function(e) {
            var t = e || "";
            return '<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">' + t + "</div></div>"
        }, o.prototype.open = function() {
            var e = this;
            return this._$q(function(t, n) {
                var o = e._done(t, e),
                    i = e._simpleBind(e.show, e);
                e.attach().then(i).then(o)["catch"](n)
            })
        }, o.prototype.close = function() {
            var e = this;
            return this._$q(function(t, n) {
                var o = e._done(t, e),
                    i = e._simpleBind(e.detach, e);
                e.hide().then(i).then(o)["catch"](n)
            })
        }, o.prototype.attach = function() {
            if (this.isAttached && this._panelEl) return this._$q.when(this);
            var e = this;
            return this._$q(function(n, o) {
                var i = e._done(n, e),
                    r = e.config.onDomAdded || t.noop,
                    a = function(t) {
                        return e.isAttached = !0, e._addEventListeners(), t
                    };
                e._$q.all([e._createBackdrop(), e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)
            })
        }, o.prototype.detach = function() {
            if (!this.isAttached) return this._$q.when(this);
            var e = this,
                n = e.config.onDomRemoved || t.noop,
                o = function() {
                    return e._removeEventListeners(), e._topFocusTrap && e._topFocusTrap.parentNode && e._topFocusTrap.parentNode.removeChild(e._topFocusTrap), e._bottomFocusTrap && e._bottomFocusTrap.parentNode && e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap), e._panelContainer.remove(), e.isAttached = !1, e._$q.when(e)
                };
            return this._restoreScroll && (this._restoreScroll(), this._restoreScroll = null), this._$q(function(t, i) {
                var r = e._done(t, e);
                e._$q.all([o(), !e._backdropRef || e._backdropRef.detach()]).then(n).then(r)["catch"](i)
            })
        }, o.prototype.destroy = function() {
            this.config.scope.$destroy(), this.config.locals = null
        }, o.prototype.show = function() {
            if (!this._panelContainer) return this._$q(function(e, t) {
                t("Panel does not exist yet. Call open() or attach().")
            });
            if (!this._panelContainer.hasClass(s)) return this._$q.when(this);
            var e = this,
                n = function() {
                    return e.removeClass(s), e._animateOpen()
                };
            return this._$q(function(o, i) {
                var r = e._done(o, e),
                    a = e.config.onOpenComplete || t.noop;
                e._$q.all([e._backdropRef ? e._backdropRef.show() : e, n().then(function() {
                    e._focusOnOpen()
                }, i)]).then(a).then(r)["catch"](i)
            })
        }, o.prototype.hide = function() {
            if (!this._panelContainer) return this._$q(function(e, t) {
                t("Panel does not exist yet. Call open() or attach().")
            });
            if (this._panelContainer.hasClass(s)) return this._$q.when(this);
            var e = this;
            return this._$q(function(n, o) {
                var i = e._done(n, e),
                    r = e.config.onRemoving || t.noop,
                    d = function() {
                        var t = e.config.origin;
                        t && a(t).focus()
                    },
                    c = function() {
                        e.addClass(s)
                    };
                e._$q.all([e._backdropRef ? e._backdropRef.hide() : e, e._animateClose().then(r).then(c).then(d)["catch"](o)]).then(i, o)
            })
        }, o.prototype.addClass = function(e, t) {
            if (!this._panelContainer) throw new Error("Panel does not exist yet. Call open() or attach().");
            t || this._panelContainer.hasClass(e) ? t && !this._panelEl.hasClass(e) && this._panelEl.addClass(e) : this._panelContainer.addClass(e)
        }, o.prototype.removeClass = function(e, t) {
            if (!this._panelContainer) throw new Error("Panel does not exist yet. Call open() or attach().");
            !t && this._panelContainer.hasClass(e) ? this._panelContainer.removeClass(e) : t && this._panelEl.hasClass(e) && this._panelEl.removeClass(e)
        }, o.prototype.toggleClass = function(e, t) {
            if (!this._panelContainer) throw new Error("Panel does not exist yet. Call open() or attach().");
            t ? this._panelEl.toggleClass(e) : this._panelContainer.toggleClass(e)
        }, o.prototype._createPanel = function() {
            var e = this;
            return this._$q(function(n, o) {
                e.config.locals || (e.config.locals = {}), e.config.locals.mdPanelRef = e, e._$mdCompiler.compile(e.config).then(function(i) {
                    e._panelContainer = i.link(e.config.scope), a(e.config.attachTo).append(e._panelContainer), e.config.disableParentScroll && (e._restoreScroll = e._$mdUtil.disableScrollAround(null, e._panelContainer, {
                        disableScrollMask: !0
                    })), e._panelEl = t.element(e._panelContainer[0].querySelector(".md-panel")), e.config.panelClass && e._panelEl.addClass(e.config.panelClass), e.config.propagateContainerEvents && e._panelContainer.css("pointer-events", "none"), e._$animate.pin && e._$animate.pin(e._panelContainer, a(e.config.attachTo)), e._configureTrapFocus(), e._addStyles().then(function() {
                        n(e)
                    }, o)
                }, o)
            })
        }, o.prototype._addStyles = function() {
            var e = this;
            return this._$q(function(t) {
                e._panelContainer.css("z-index", e.config.zIndex), e._panelEl.css("z-index", e.config.zIndex + 1);
                var n = function() {
                    e._panelEl.css("left", ""), e._panelContainer.addClass(s), t(e)
                };
                if (e.config.fullscreen) return e._panelEl.addClass("_md-panel-fullscreen"), void n();
                var o = e.config.position;
                return o ? void e._$rootScope.$$postDigest(function() {
                    e._updatePosition(!0), t(e)
                }) : void n()
            })
        }, o.prototype.updatePosition = function(e) {
            if (!this._panelContainer) throw new Error("Panel does not exist yet. Call open() or attach().");
            this.config.position = e, this._updatePosition()
        }, o.prototype._updatePosition = function(e) {
            var t = this.config.position;
            if (t) {
                t._setPanelPosition(this._panelEl), e && this._panelContainer.addClass(s), this._panelEl.css(i.absPosition.TOP, t.getTop()), this._panelEl.css(i.absPosition.BOTTOM, t.getBottom()), this._panelEl.css(i.absPosition.LEFT, t.getLeft()), this._panelEl.css(i.absPosition.RIGHT, t.getRight());
                var n = this._$mdConstant.CSS.TRANSFORM;
                this._panelEl.css(n, t.getTransform())
            }
        }, o.prototype._focusOnOpen = function() {
            if (this.config.focusOnOpen) {
                var e = this;
                this._$rootScope.$$postDigest(function() {
                    var t = e._$mdUtil.findFocusTarget(e._panelEl) || e._panelEl;
                    t.focus()
                })
            }
        }, o.prototype._createBackdrop = function() {
            if (this.config.hasBackdrop) {
                if (!this._backdropRef) {
                    var e = this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({
                            open: "_md-opaque-enter",
                            close: "_md-opaque-leave"
                        }),
                        t = {
                            animation: e,
                            attachTo: this.config.attachTo,
                            focusOnOpen: !1,
                            panelClass: "_md-panel-backdrop",
                            zIndex: this.config.zIndex - 1
                        };
                    this._backdropRef = this._$mdPanel.create(t)
                }
                if (!this._backdropRef.isAttached) return this._backdropRef.attach()
            }
        }, o.prototype._addEventListeners = function() {
            this._configureEscapeToClose(), this._configureClickOutsideToClose(), this._configureScrollListener()
        }, o.prototype._removeEventListeners = function() {
            this._removeListeners && this._removeListeners.forEach(function(e) {
                e()
            }), this._removeListeners = []
        }, o.prototype._configureEscapeToClose = function() {
            if (this.config.escapeToClose) {
                var e = a(this.config.attachTo),
                    t = this,
                    n = function(e) {
                        e.keyCode === t._$mdConstant.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), t.close())
                    };
                this._panelContainer.on("keydown", n), e.on("keydown", n), this._removeListeners.push(function() {
                    t._panelContainer.off("keydown", n), e.off("keydown", n)
                })
            }
        }, o.prototype._configureClickOutsideToClose = function() {
            if (this.config.clickOutsideToClose) {
                var e, t = this._panelContainer,
                    n = function(t) {
                        e = t.target
                    },
                    o = this,
                    i = function(n) {
                        e === t[0] && n.target === t[0] && (n.stopPropagation(), n.preventDefault(), o.close())
                    };
                t.on("mousedown", n), t.on("mouseup", i), this._removeListeners.push(function() {
                    t.off("mousedown", n), t.off("mouseup", i)
                })
            }
        }, o.prototype._configureScrollListener = function() {
            var e = t.bind(this, this._updatePosition),
                n = this._$$rAF.throttle(e),
                o = this,
                i = function() {
                    o.config.disableParentScroll || n()
                };
            this._$window.addEventListener("scroll", i, !0), this._removeListeners.push(function() {
                o._$window.removeEventListener("scroll", i, !0)
            })
        }, o.prototype._configureTrapFocus = function() {
            if (this._panelEl.attr("tabIndex", "-1"), this.config.trapFocus) {
                var e = this._panelEl;
                this._topFocusTrap = c.clone()[0], this._bottomFocusTrap = c.clone()[0];
                var t = function() {
                    e.focus()
                };
                this._topFocusTrap.addEventListener("focus", t), this._bottomFocusTrap.addEventListener("focus", t), this._removeListeners.push(this._simpleBind(function() {
                    this._topFocusTrap.removeEventListener("focus", t), this._bottomFocusTrap.removeEventListener("focus", t)
                }, this)), e[0].parentNode.insertBefore(this._topFocusTrap, e[0]), e.after(this._bottomFocusTrap)
            }
        }, o.prototype._animateOpen = function() {
            this.addClass("md-panel-is-showing");
            var e = this.config.animation;
            if (!e) return this.addClass("_md-panel-shown"),
                this._$q.when(this);
            var t = this;
            return this._$q(function(n) {
                var o = t._done(n, t),
                    i = function() {
                        t._$log.warn("MdPanel Animations failed. Showing panel without animating."), o()
                    };
                e.animateOpen(t._panelEl).then(o, i)
            })
        }, o.prototype._animateClose = function() {
            var e = this.config.animation;
            if (!e) return this.removeClass("md-panel-is-showing"), this.removeClass("_md-panel-shown"), this._$q.when(this);
            var t = this;
            return this._$q(function(n) {
                var o = function() {
                        t.removeClass("md-panel-is-showing"), n(t)
                    },
                    i = function() {
                        t._$log.warn("MdPanel Animations failed. Hiding panel without animating."), o()
                    };
                e.animateClose(t._panelEl).then(o, i)
            })
        }, o.prototype._simpleBind = function(e, t) {
            return function(n) {
                return e.apply(t, n)
            }
        }, o.prototype._done = function(e, t) {
            return function() {
                e(t)
            }
        }, i.xPosition = {
            CENTER: "center",
            ALIGN_START: "align-start",
            ALIGN_END: "align-end",
            OFFSET_START: "offset-start",
            OFFSET_END: "offset-end"
        }, i.yPosition = {
            CENTER: "center",
            ALIGN_TOPS: "align-tops",
            ALIGN_BOTTOMS: "align-bottoms",
            ABOVE: "above",
            BELOW: "below"
        }, i.absPosition = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, i.prototype.absolute = function() {
            return this._absolute = !0, this
        }, i.prototype._setPosition = function(e, n) {
            if (e === i.absPosition.RIGHT || e === i.absPosition.LEFT) this._left = this._right = "";
            else {
                if (e !== i.absPosition.BOTTOM && e !== i.absPosition.TOP) {
                    var o = Object.keys(i.absPosition).join().toLowerCase();
                    throw new Error("Position must be one of " + o + ".")
                }
                this._top = this._bottom = ""
            }
            return this["_" + e] = t.isString(n) ? n : "0", this
        }, i.prototype.top = function(e) {
            return this._setPosition(i.absPosition.TOP, e)
        }, i.prototype.bottom = function(e) {
            return this._setPosition(i.absPosition.BOTTOM, e)
        }, i.prototype.start = function(e) {
            var t = this._isRTL ? i.absPosition.RIGHT : i.absPosition.LEFT;
            return this._setPosition(t, e)
        }, i.prototype.end = function(e) {
            var t = this._isRTL ? i.absPosition.LEFT : i.absPosition.RIGHT;
            return this._setPosition(t, e)
        }, i.prototype.left = function(e) {
            return this._setPosition(i.absPosition.LEFT, e)
        }, i.prototype.right = function(e) {
            return this._setPosition(i.absPosition.RIGHT, e)
        }, i.prototype.centerHorizontally = function() {
            return this._left = "50%", this._right = "", this._translateX = ["-50%"], this
        }, i.prototype.centerVertically = function() {
            return this._top = "50%", this._bottom = "", this._translateY = ["-50%"], this
        }, i.prototype.center = function() {
            return this.centerHorizontally().centerVertically()
        }, i.prototype.relativeTo = function(e) {
            return this._absolute = !1, this._relativeToEl = a(e), this
        }, i.prototype.addPanelPosition = function(e, t) {
            if (!this._relativeToEl) throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");
            return this._validateXPosition(e), this._validateYPosition(t), this._positions.push({
                x: e,
                y: t
            }), this
        }, i.prototype._validateYPosition = function(e) {
            if (null != e) {
                for (var t, n = Object.keys(i.yPosition), o = [], r = 0; t = n[r]; r++) {
                    var a = i.yPosition[t];
                    if (o.push(a), a === e) return
                }
                throw new Error("Panel y position only accepts the following values:\n" + o.join(" | "))
            }
        }, i.prototype._validateXPosition = function(e) {
            if (null != e) {
                for (var t, n = Object.keys(i.xPosition), o = [], r = 0; t = n[r]; r++) {
                    var a = i.xPosition[t];
                    if (o.push(a), a === e) return
                }
                throw new Error("Panel x Position only accepts the following values:\n" + o.join(" | "))
            }
        }, i.prototype.withOffsetX = function(e) {
            return this._translateX.push(e), this
        }, i.prototype.withOffsetY = function(e) {
            return this._translateY.push(e), this
        }, i.prototype.getTop = function() {
            return this._top
        }, i.prototype.getBottom = function() {
            return this._bottom
        }, i.prototype.getLeft = function() {
            return this._left
        }, i.prototype.getRight = function() {
            return this._right
        }, i.prototype.getTransform = function() {
            var e = this._reduceTranslateValues("translateX", this._translateX),
                t = this._reduceTranslateValues("translateY", this._translateY);
            return (e + " " + t).trim()
        }, i.prototype._isOnscreen = function(e) {
            var t = parseInt(this.getLeft()),
                n = parseInt(this.getTop()),
                o = t + e[0].offsetWidth,
                i = n + e[0].offsetHeight;
            return t >= 0 && n >= 0 && i <= this._$window.innerHeight && o <= this._$window.innerWidth
        }, i.prototype.getActualPosition = function() {
            return this._actualPosition
        }, i.prototype._reduceTranslateValues = function(e, t) {
            return t.map(function(t) {
                return e + "(" + t + ")"
            }).join(" ")
        }, i.prototype._setPanelPosition = function(e) {
            if (!this._absolute) {
                if (this._actualPosition) return void this._calculatePanelPosition(e, this._actualPosition);
                for (var t = 0; t < this._positions.length && (this._actualPosition = this._positions[t], this._calculatePanelPosition(e, this._actualPosition), !this._isOnscreen(e)); t++);
            }
        }, i.prototype._reverseXPosition = function(e) {
            if (e !== i.xPosition.CENTER) {
                var t = "start",
                    n = "end";
                return e.indexOf(t) > -1 ? e.replace(t, n) : e.replace(n, t)
            }
        }, i.prototype._bidi = function(e) {
            return this._isRTL ? this._reverseXPosition(e) : e
        }, i.prototype._calculatePanelPosition = function(e, t) {
            var n = e[0].getBoundingClientRect(),
                o = n.width,
                r = n.height,
                a = this._relativeToEl[0].getBoundingClientRect(),
                d = a.left,
                s = a.right,
                c = a.width;
            switch (this._bidi(t.x)) {
                case i.xPosition.OFFSET_START:
                    this._left = d - o + "px";
                    break;
                case i.xPosition.ALIGN_END:
                    this._left = s - o + "px";
                    break;
                case i.xPosition.CENTER:
                    var l = d + .5 * c - .5 * o;
                    this._left = l + "px";
                    break;
                case i.xPosition.ALIGN_START:
                    this._left = d + "px";
                    break;
                case i.xPosition.OFFSET_END:
                    this._left = s + "px"
            }
            var m = a.top,
                u = a.bottom,
                p = a.height;
            switch (t.y) {
                case i.yPosition.ABOVE:
                    this._top = m - r + "px";
                    break;
                case i.yPosition.ALIGN_BOTTOMS:
                    this._top = u - r + "px";
                    break;
                case i.yPosition.CENTER:
                    var h = m + .5 * p - .5 * r;
                    this._top = h + "px";
                    break;
                case i.yPosition.ALIGN_TOPS:
                    this._top = m + "px";
                    break;
                case i.yPosition.BELOW:
                    this._top = u + "px"
            }
        }, r.animation = {
            SLIDE: "md-panel-animate-slide",
            SCALE: "md-panel-animate-scale",
            FADE: "md-panel-animate-fade"
        }, r.prototype.openFrom = function(e) {
            return e = e.target ? e.target : e, this._openFrom = this._getPanelAnimationTarget(e), this._closeTo || (this._closeTo = this._openFrom), this
        }, r.prototype.closeTo = function(e) {
            return this._closeTo = this._getPanelAnimationTarget(e), this
        }, r.prototype._getPanelAnimationTarget = function(e) {
            return t.isDefined(e.top) || t.isDefined(e.left) ? {
                element: n,
                bounds: {
                    top: e.top || 0,
                    left: e.left || 0
                }
            } : this._getBoundingClientRect(a(e))
        }, r.prototype.withAnimation = function(e) {
            return this._animationClass = e, this
        }, r.prototype.animateOpen = function(e) {
            var n = this._$mdUtil.dom.animator;
            this._fixBounds(e);
            var o = {},
                i = e[0].style.transform || "",
                a = n.toTransformCss(i),
                d = n.toTransformCss(i);
            switch (this._animationClass) {
                case r.animation.SLIDE:
                    e.css("opacity", "1"), o = {
                        transitionInClass: "_md-panel-animate-enter"
                    };
                    var s = n.calculateSlideToOrigin(e, this._openFrom) || "";
                    a = n.toTransformCss(s + " " + i);
                    break;
                case r.animation.SCALE:
                    o = {
                        transitionInClass: "_md-panel-animate-enter"
                    };
                    var c = n.calculateZoomToOrigin(e, this._openFrom) || "";
                    a = n.toTransformCss(c + " " + i);
                    break;
                case r.animation.FADE:
                    o = {
                        transitionInClass: "_md-panel-animate-enter"
                    };
                    break;
                default:
                    o = t.isString(this._animationClass) ? {
                        transitionInClass: this._animationClass
                    } : {
                        transitionInClass: this._animationClass.open,
                        transitionOutClass: this._animationClass.close
                    }
            }
            return n.translate3d(e, a, d, o)
        }, r.prototype.animateClose = function(e) {
            var n = this._$mdUtil.dom.animator,
                o = {},
                i = e[0].style.transform || "",
                a = n.toTransformCss(i),
                d = n.toTransformCss(i);
            switch (this._animationClass) {
                case r.animation.SLIDE:
                    e.css("opacity", "1"), o = {
                        transitionInClass: "_md-panel-animate-leave"
                    };
                    var s = n.calculateSlideToOrigin(e, this._closeTo) || "";
                    d = n.toTransformCss(s + " " + i);
                    break;
                case r.animation.SCALE:
                    o = {
                        transitionInClass: "_md-panel-animate-scale-out _md-panel-animate-leave"
                    };
                    var c = n.calculateZoomToOrigin(e, this._closeTo) || "";
                    d = n.toTransformCss(c + " " + i);
                    break;
                case r.animation.FADE:
                    o = {
                        transitionInClass: "_md-panel-animate-fade-out _md-panel-animate-leave"
                    };
                    break;
                default:
                    o = t.isString(this._animationClass) ? {
                        transitionOutClass: this._animationClass
                    } : {
                        transitionInClass: this._animationClass.close,
                        transitionOutClass: this._animationClass.open
                    }
            }
            return n.translate3d(e, a, d, o)
        }, r.prototype._fixBounds = function(e) {
            var t = e[0].offsetWidth,
                n = e[0].offsetHeight;
            this._openFrom && null == this._openFrom.bounds.height && (this._openFrom.bounds.height = n), this._openFrom && null == this._openFrom.bounds.width && (this._openFrom.bounds.width = t), this._closeTo && null == this._closeTo.bounds.height && (this._closeTo.bounds.height = n), this._closeTo && null == this._closeTo.bounds.width && (this._closeTo.bounds.width = t)
        }, r.prototype._getBoundingClientRect = function(e) {
            if (e instanceof t.element) return {
                element: e,
                bounds: e[0].getBoundingClientRect()
            }
        }
    }(),
    function() {
        t.module("material.components.progressCircular", ["material.core"])
    }(),
    function() {
        function e(e, n, o) {
            function i(e, t, n) {
                return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), r
            }

            function r(o, i, r) {
                function u() {
                    r.$observe("value", function(e) {
                        var t = a(e);
                        i.attr("aria-valuenow", t), h() != l && f($, t)
                    }), r.$observe("mdBufferValue", function(e) {
                        f(E, a(e))
                    }), r.$observe("disabled", function(e) {
                        b = e === !0 || e === !1 ? !!e : t.isDefined(e), i.toggleClass(m, b), C.toggleClass(g, !b)
                    }), r.$observe("mdMode", function(e) {
                        switch (g && C.removeClass(g), e) {
                            case l:
                            case c:
                            case d:
                            case s:
                                C.addClass(g = "md-mode-" + e);
                                break;
                            default:
                                C.addClass(g = "md-mode-" + s)
                        }
                    })
                }

                function p() {
                    if (t.isUndefined(r.mdMode)) {
                        var e = t.isDefined(r.value),
                            n = e ? d : s;
                        i.attr("md-mode", n), r.mdMode = n
                    }
                }

                function h() {
                    var e = (r.mdMode || "").trim();
                    if (e) switch (e) {
                        case d:
                        case s:
                        case c:
                        case l:
                            break;
                        default:
                            e = s
                    }
                    return e
                }

                function f(e, o) {
                    if (!b && h()) {
                        var i = n.supplant("translateX({0}%) scale({1},1)", [(o - 100) / 2, o / 100]),
                            r = v({
                                transform: i
                            });
                        t.element(e).css(r)
                    }
                }
                e(i);
                var g, b = r.hasOwnProperty("disabled"),
                    v = n.dom.animator.toCss,
                    E = t.element(i[0].querySelector(".md-bar1")),
                    $ = t.element(i[0].querySelector(".md-bar2")),
                    C = t.element(i[0].querySelector(".md-container"));
                i.attr("md-mode", h()).toggleClass(m, b), p(), u()
            }

            function a(e) {
                return Math.max(0, Math.min(e || 0, 100))
            }
            var d = "determinate",
                s = "indeterminate",
                c = "buffer",
                l = "query",
                m = "_md-progress-linear-disabled";
            return {
                restrict: "E",
                template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
                compile: i
            }
        }
        t.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"]
    }(),
    function() {
        function e(e, n, o, i) {
            function r(r, a, d, s) {
                function c() {
                    a.hasClass("md-focused") || a.addClass("md-focused")
                }

                function l(o) {
                    var i = o.which || o.keyCode;
                    if (i == n.KEY_CODE.ENTER || o.currentTarget == o.target) switch (i) {
                        case n.KEY_CODE.LEFT_ARROW:
                        case n.KEY_CODE.UP_ARROW:
                            o.preventDefault(), m.selectPrevious(), c();
                            break;
                        case n.KEY_CODE.RIGHT_ARROW:
                        case n.KEY_CODE.DOWN_ARROW:
                            o.preventDefault(), m.selectNext(), c();
                            break;
                        case n.KEY_CODE.ENTER:
                            var r = t.element(e.getClosest(a[0], "form"));
                            r.length > 0 && r.triggerHandler("submit")
                    }
                }
                a.addClass("_md"), o(a);
                var m = s[0],
                    u = s[1] || e.fakeNgModel();
                m.init(u), r.mouseActive = !1, a.attr({
                    role: "radiogroup",
                    tabIndex: a.attr("tabindex") || "0"
                }).on("keydown", l).on("mousedown", function(e) {
                    r.mouseActive = !0, i(function() {
                        r.mouseActive = !1
                    }, 100)
                }).on("focus", function() {
                    r.mouseActive === !1 && m.$element.addClass("md-focused")
                }).on("blur", function() {
                    m.$element.removeClass("md-focused")
                })
            }

            function a(e) {
                this._radioButtonRenderFns = [], this.$element = e
            }

            function d() {
                return {
                    init: function(e) {
                        this._ngModelCtrl = e, this._ngModelCtrl.$render = t.bind(this, this.render)
                    },
                    add: function(e) {
                        this._radioButtonRenderFns.push(e)
                    },
                    remove: function(e) {
                        var t = this._radioButtonRenderFns.indexOf(e);
                        t !== -1 && this._radioButtonRenderFns.splice(t, 1)
                    },
                    render: function() {
                        this._radioButtonRenderFns.forEach(function(e) {
                            e()
                        })
                    },
                    setViewValue: function(e, t) {
                        this._ngModelCtrl.$setViewValue(e, t), this.render()
                    },
                    getViewValue: function() {
                        return this._ngModelCtrl.$viewValue
                    },
                    selectNext: function() {
                        return s(this.$element, 1)
                    },
                    selectPrevious: function() {
                        return s(this.$element, -1)
                    },
                    setActiveDescendant: function(e) {
                        this.$element.attr("aria-activedescendant", e)
                    },
                    isDisabled: function() {
                        return this.$element[0].hasAttribute("disabled")
                    }
                }
            }

            function s(n, o) {
                var i = e.iterator(n[0].querySelectorAll("md-radio-button"), !0);
                if (i.count()) {
                    var r = function(e) {
                            return !t.element(e).attr("disabled")
                        },
                        a = n[0].querySelector("md-radio-button.md-checked"),
                        d = i[o < 0 ? "previous" : "next"](a, r) || i.first();
                    t.element(d).triggerHandler("click")
                }
            }
            return a.prototype = d(), {
                restrict: "E",
                controller: ["$element", a],
                require: ["mdRadioGroup", "?ngModel"],
                link: {
                    pre: r
                }
            }
        }

        function n(e, t, n) {
            function o(o, r, a, d) {
                function s() {
                    if (!d) throw "RadioButton: No RadioGroupController could be found.";
                    d.add(l), a.$observe("value", l), r.on("click", c).on("$destroy", function() {
                        d.remove(l)
                    })
                }

                function c(e) {
                    r[0].hasAttribute("disabled") || d.isDisabled() || o.$apply(function() {
                        d.setViewValue(a.value, e && e.type)
                    })
                }

                function l() {
                    function e(e) {
                        "MD-RADIO-GROUP" != r.parent()[0].nodeName && r.parent()[e ? "addClass" : "removeClass"](i)
                    }
                    var t = d.getViewValue() == a.value;
                    t !== u && (u = t, r.attr("aria-checked", t), t ? (e(!0), r.addClass(i), d.setActiveDescendant(r.attr("id"))) : (e(!1), r.removeClass(i)))
                }

                function m(n, o) {
                    function i() {
                        return a.id || "radio_" + t.nextUid()
                    }
                    o.ariaId = i(), n.attr({
                        id: o.ariaId,
                        role: "radio",
                        "aria-checked": "false"
                    }), e.expectWithText(n, "aria-label")
                }
                var u;
                n(r), m(r, o), s()
            }
            var i = "md-checked";
            return {
                restrict: "E",
                require: "^mdRadioGroup",
                transclude: !0,
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
                link: o
            }
        }
        t.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", n), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], n.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
    }(),
    function() {
        function o(e, o, i, r, a, d, s) {
            function c(d, c) {
                var l = t.element("<md-select-value><span></span></md-select-value>");
                if (l.append('<span class="md-select-icon" aria-hidden="true"></span>'), l.addClass("md-select-value"), l[0].hasAttribute("id") || l.attr("id", "select_value_label_" + o.nextUid()), d.find("md-content").length || d.append(t.element("<md-content>").append(d.contents())), c.mdOnOpen && (d.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')), d.find("md-option").attr("ng-show", "$$loadingAsyncDone")), c.name) {
                    var m = t.element('<select class="md-visually-hidden">');
                    m.attr({
                        name: c.name,
                        "aria-hidden": "true",
                        tabindex: "-1"
                    });
                    var u = d.find("md-option");
                    t.forEach(u, function(e) {
                        var n = t.element("<option>" + e.innerHTML + "</option>");
                        e.hasAttribute("ng-value") ? n.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && n.attr("value", e.getAttribute("value")), m.append(n)
                    }), m.append('<option ng-value="' + c.ngModel + '" selected></option>'), d.parent().append(m)
                }
                var p = o.parseAttributeBoolean(c.multiple),
                    h = p ? "multiple" : "",
                    f = '<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';
                return f = o.supplant(f, [h, d.html()]), d.empty().append(l), d.append(f), c.tabindex || c.$set("tabindex", 0),
                    function(d, c, l, m) {
                        function u() {
                            var e = c.attr("aria-label") || c.attr("placeholder");
                            !e && M && M.label && (e = M.label.text()), C = e, a.expect(c, "aria-label", e)
                        }

                        function h() {
                            N && (H = H || N.find("md-select-menu").controller("mdSelectMenu"), T.setLabelText(H.selectedLabels()))
                        }

                        function f() {
                            if (C) {
                                var e = H.selectedLabels({
                                    mode: "aria"
                                });
                                c.attr("aria-label", e.length ? C + ": " + e : C)
                            }
                        }

                        function g() {
                            M && M.setHasValue(H.selectedLabels().length > 0 || (c[0].validity || {}).badInput)
                        }

                        function b() {
                            if (N = t.element(c[0].querySelector(".md-select-menu-container")), D = d, l.mdContainerClass) {
                                var e = N[0].getAttribute("class") + " " + l.mdContainerClass;
                                N[0].setAttribute("class", e)
                            }
                            H = N.find("md-select-menu").controller("mdSelectMenu"), H.init(A, l.ngModel), c.on("$destroy", function() {
                                N.remove()
                            })
                        }

                        function v(e) {
                            if (i.isNavigationKey(e)) e.preventDefault(), E(e);
                            else if (i.isInputKey(e) || i.isNumPadKey(e)) {
                                e.preventDefault();
                                var n = H.optNodeForKeyboardSearch(e);
                                if (!n || n.hasAttribute("disabled")) return;
                                var o = t.element(n).controller("mdOption");
                                H.isMultiple || H.deselect(Object.keys(H.selected)[0]), H.select(o.hashKey, o.value), H.refreshViewValue()
                            }
                        }

                        function E() {
                            D._mdSelectIsOpen = !0, c.attr("aria-expanded", "true"), e.show({
                                scope: D,
                                preserveScope: !0,
                                skipCompile: !0,
                                element: N,
                                target: c[0],
                                selectCtrl: T,
                                preserveElement: !0,
                                hasBackdrop: !0,
                                loadingAsync: !!l.mdOnOpen && (d.$eval(l.mdOnOpen) || !0)
                            })["finally"](function() {
                                D._mdSelectIsOpen = !1, c.focus(), c.attr("aria-expanded", "false"), A.$setTouched()
                            })
                        }
                        var $, C, y = !0,
                            M = m[0],
                            T = m[1],
                            A = m[2],
                            w = m[3],
                            k = c.find("md-select-value"),
                            _ = t.isDefined(l.readonly),
                            x = o.parseAttributeBoolean(l.mdNoAsterisk);
                        if (M) {
                            var S = M.isErrorGetter || function() {
                                return A.$invalid && (A.$touched || w && w.$submitted)
                            };
                            if (M.input && c.find("md-select-header").find("input")[0] !== M.input[0]) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");
                            M.input = c, M.label || a.expect(c, "aria-label", c.attr("placeholder")), d.$watch(S, M.setInvalid)
                        }
                        var N, D, H;
                        b(), r(c), w && t.isDefined(l.multiple) && o.nextTick(function() {
                            var e = A.$modelValue || A.$viewValue;
                            e && w.$setPristine()
                        });
                        var I = A.$render;
                        A.$render = function() {
                            I(), h(), f(), g()
                        }, l.$observe("placeholder", A.$render), M && M.label && l.$observe("required", function(e) {
                            M.label.toggleClass("md-required", e && !x)
                        }), T.setLabelText = function(e) {
                            if (T.setIsPlaceholder(!e), l.mdSelectedText) e = s(l.mdSelectedText)(d);
                            else {
                                var t = l.placeholder || (M && M.label ? M.label.text() : "");
                                e = e || t || ""
                            }
                            var n = k.children().eq(0);
                            n.html(e)
                        }, T.setIsPlaceholder = function(e) {
                            e ? (k.addClass("md-select-placeholder"), M && M.label && M.label.addClass("md-placeholder")) : (k.removeClass("md-select-placeholder"), M && M.label && M.label.removeClass("md-placeholder"))
                        }, _ || (c.on("focus", function(e) {
                            M && M.setFocused(!0)
                        }), c.on("blur", function(e) {
                            y && (y = !1, D._mdSelectIsOpen && e.stopImmediatePropagation()), D._mdSelectIsOpen || (M && M.setFocused(!1), g())
                        })), T.triggerClose = function() {
                            s(l.mdOnClose)(d)
                        }, d.$$postDigest(function() {
                            u(), h(), f()
                        }), d.$watch(function() {
                            return H.selectedLabels()
                        }, h);
                        var O;
                        l.$observe("ngMultiple", function(e) {
                            O && O();
                            var t = s(e);
                            O = d.$watch(function() {
                                return t(d)
                            }, function(e, t) {
                                e === n && t === n || (e ? c.attr("multiple", "multiple") : c.removeAttr("multiple"), c.attr("aria-multiselectable", e ? "true" : "false"), N && (H.setMultiple(e), I = A.$render, A.$render = function() {
                                    I(), h(), f(), g()
                                }, A.$render()))
                            })
                        }), l.$observe("disabled", function(e) {
                            t.isString(e) && (e = !0), $ !== n && $ === e || ($ = e, e ? c.attr({
                                "aria-disabled": "true"
                            }).removeAttr("tabindex").off("click", E).off("keydown", v) : c.attr({
                                tabindex: l.tabindex,
                                "aria-disabled": "false"
                            }).on("click", E).on("keydown", v))
                        }), l.hasOwnProperty("disabled") || l.hasOwnProperty("ngDisabled") || (c.attr({
                            "aria-disabled": "false"
                        }), c.on("click", E), c.on("keydown", v));
                        var R = {
                            role: "listbox",
                            "aria-expanded": "false",
                            "aria-multiselectable": p && !l.ngMultiple ? "true" : "false"
                        };
                        c[0].hasAttribute("id") || (R.id = "select_" + o.nextUid());
                        var L = "select_container_" + o.nextUid();
                        N.attr("id", L), R["aria-owns"] = L, c.attr(R), d.$on("$destroy", function() {
                            e.destroy()["finally"](function() {
                                M && (M.setFocused(!1), M.setHasValue(!1), M.input = null), A.$setTouched()
                            })
                        })
                    }
            }
            var l = i.KEY_CODE;
            [l.SPACE, l.ENTER, l.UP_ARROW, l.DOWN_ARROW];
            return {
                restrict: "E",
                require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"],
                compile: c,
                controller: function() {}
            }
        }

        function i(e, o, i, r) {
            function a(e, n, i, a) {
                function d(e) {
                    13 != e.keyCode && 32 != e.keyCode || s(e)
                }

                function s(n) {
                    var i = o.getClosest(n.target, "md-option"),
                        r = i && t.element(i).data("$mdOptionController");
                    if (i && r) {
                        if (i.hasAttribute("disabled")) return n.stopImmediatePropagation(), !1;
                        var a = c.hashGetter(r.value),
                            d = t.isDefined(c.selected[a]);
                        e.$apply(function() {
                            c.isMultiple ? d ? c.deselect(a) : c.select(a, r.value) : d || (c.deselect(Object.keys(c.selected)[0]), c.select(a, r.value)), c.refreshViewValue()
                        })
                    }
                }
                var c = a[0];
                n.addClass("_md"), r(n), n.on("click", s), n.on("keypress", d)
            }

            function d(r, a, d) {
                function s() {
                    var e = m.ngModel.$modelValue || m.ngModel.$viewValue || [];
                    if (t.isArray(e)) {
                        var n = Object.keys(m.selected),
                            o = e.map(m.hashGetter),
                            i = n.filter(function(e) {
                                return o.indexOf(e) === -1
                            });
                        i.forEach(m.deselect), o.forEach(function(t, n) {
                            m.select(t, e[n])
                        })
                    }
                }

                function c() {
                    var e = m.ngModel.$viewValue || m.ngModel.$modelValue;
                    Object.keys(m.selected).forEach(m.deselect), m.select(m.hashGetter(e), e)
                }
                var m = this;
                m.isMultiple = t.isDefined(a.multiple), m.selected = {}, m.options = {}, r.$watchCollection(function() {
                    return m.options
                }, function() {
                    m.ngModel.$render()
                });
                var u, p;
                m.setMultiple = function(e) {
                    function n(e, n) {
                        return t.isArray(e || n || [])
                    }
                    var o = m.ngModel;
                    p = p || o.$isEmpty, m.isMultiple = e, u && u(), m.isMultiple ? (o.$validators["md-multiple"] = n, o.$render = s, r.$watchCollection(m.modelBinding, function(e) {
                        n(e) && s(e), m.ngModel.$setPristine()
                    }), o.$isEmpty = function(e) {
                        return !e || 0 === e.length
                    }) : (delete o.$validators["md-multiple"], o.$render = c)
                };
                var h, f, g, b = "",
                    v = 300;
                m.optNodeForKeyboardSearch = function(e) {
                    h && clearTimeout(h), h = setTimeout(function() {
                        h = n, b = "", g = n, f = n
                    }, v);
                    var o = e.keyCode - (i.isNumPadKey(e) ? 48 : 0);
                    b += String.fromCharCode(o);
                    var r = new RegExp("^" + b, "i");
                    f || (f = d.find("md-option"), g = new Array(f.length), t.forEach(f, function(e, t) {
                        g[t] = e.textContent.trim()
                    }));
                    for (var a = 0; a < g.length; ++a)
                        if (r.test(g[a])) return f[a]
                }, m.init = function(n, o) {
                    if (m.ngModel = n, m.modelBinding = o, m.ngModel.$isEmpty = function(e) {
                            return !m.options[m.hashGetter(e)]
                        }, n.$options && n.$options.trackBy) {
                        var i = {},
                            a = e(n.$options.trackBy);
                        m.hashGetter = function(e, t) {
                            return i.$value = e, a(t || r, i)
                        }
                    } else m.hashGetter = function(e) {
                        return t.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++l)) : e
                    };
                    m.setMultiple(m.isMultiple)
                }, m.selectedLabels = function(e) {
                    e = e || {};
                    var t = e.mode || "html",
                        n = o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));
                    if (n.length) {
                        var i;
                        return "html" == t ? i = function(e) {
                            if (e.hasAttribute("md-option-empty")) return "";
                            var t = e.innerHTML,
                                n = e.querySelector(".md-ripple-container");
                            n && (t = t.replace(n.outerHTML, ""));
                            var o = e.querySelector(".md-container");
                            return o && (t = t.replace(o.outerHTML, "")), t
                        } : "aria" == t && (i = function(e) {
                            return e.hasAttribute("aria-label") ? e.getAttribute("aria-label") : e.textContent
                        }), n.map(i).join(", ")
                    }
                    return ""
                }, m.select = function(e, t) {
                    var n = m.options[e];
                    n && n.setSelected(!0), m.selected[e] = t
                }, m.deselect = function(e) {
                    var t = m.options[e];
                    t && t.setSelected(!1), delete m.selected[e]
                }, m.addOption = function(e, n) {
                    if (t.isDefined(m.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + n.value + '" found.');
                    m.options[e] = n, t.isDefined(m.selected[e]) && (m.select(e, n.value), t.isDefined(m.ngModel.$modelValue) && m.hashGetter(m.ngModel.$modelValue) === e && m.ngModel.$validate(), m.refreshViewValue())
                }, m.removeOption = function(e) {
                    delete m.options[e]
                }, m.refreshViewValue = function() {
                    var e, n = [];
                    for (var o in m.selected)(e = m.options[o]) ? n.push(e.value) : n.push(m.selected[o]);
                    var i = m.ngModel.$options && m.ngModel.$options.trackBy,
                        r = m.isMultiple ? n : n[0],
                        a = m.ngModel.$modelValue;
                    (i ? t.equals(a, r) : a == r) || (m.ngModel.$setViewValue(r), m.ngModel.$render())
                }
            }
            return d.$inject = ["$scope", "$attrs", "$element"], {
                restrict: "E",
                require: ["mdSelectMenu"],
                scope: !1,
                controller: d,
                link: {
                    pre: a
                }
            }
        }

        function r(e, n) {
            function o(e, n) {
                return e.append(t.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", n.tabindex || "0"), i(n) || e.attr("md-option-empty", ""), r
            }

            function i(e) {
                var t = e.value,
                    n = e.ngValue;
                return t || n
            }

            function r(o, i, r, a) {
                function d(e, t, n) {
                    if (!l.hashGetter) return void(n || o.$$postDigest(function() {
                        d(e, t, !0)
                    }));
                    var i = l.hashGetter(t, o),
                        r = l.hashGetter(e, o);
                    c.hashKey = r, c.value = e, l.removeOption(i, c), l.addOption(r, c)
                }

                function s() {
                    var e = {
                        role: "option",
                        "aria-selected": "false"
                    };
                    i[0].hasAttribute("id") || (e.id = "select_option_" + n.nextUid()), i.attr(e)
                }
                var c = a[0],
                    l = a[1];
                l.isMultiple && (i.addClass("md-checkbox-enabled"), i.prepend(m.clone())), t.isDefined(r.ngValue) ? o.$watch(r.ngValue, d) : t.isDefined(r.value) ? d(r.value) : o.$watch(function() {
                    return i.text().trim()
                }, d), r.$observe("disabled", function(e) {
                    e ? i.attr("tabindex", "-1") : i.attr("tabindex", "0")
                }), o.$$postDigest(function() {
                    r.$observe("selected", function(e) {
                        t.isDefined(e) && ("string" == typeof e && (e = !0), e ? (l.isMultiple || l.deselect(Object.keys(l.selected)[0]), l.select(c.hashKey, c.value)) : l.deselect(c.hashKey), l.refreshViewValue())
                    })
                }), e.attach(o, i), s(), o.$on("$destroy", function() {
                    l.removeOption(c.hashKey, c)
                })
            }

            function a(e) {
                this.selected = !1, this.setSelected = function(t) {
                    t && !this.selected ? e.attr({
                        selected: "selected",
                        "aria-selected": "true"
                    }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
                }
            }
            return a.$inject = ["$element"], {
                restrict: "E",
                require: ["mdOption", "^^mdSelectMenu"],
                controller: a,
                compile: o
            }
        }

        function a() {
            function e(e, n) {
                function o() {
                    return e.parent().find("md-select-header").length
                }

                function i() {
                    var o = e.find("label");
                    o.length || (o = t.element("<label>"), e.prepend(o)), o.addClass("md-container-ignore"), n.label && o.text(n.label)
                }
                o() || i()
            }
            return {
                restrict: "E",
                compile: e
            }
        }

        function d() {
            return {
                restrict: "E"
            }
        }

        function s(o) {
            function i(o, i, l, m, u, p, h, f, g) {
                function b(e, t, n) {
                    function o() {
                        return h(t, {
                            addClass: "md-leave"
                        }).start()
                    }

                    function i() {
                        t.removeClass("md-active"), t.attr("aria-hidden", "true"), t[0].style.display = "none", E(n), !n.$destroy && n.restoreFocus && n.target.focus()
                    }
                    return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? i() : o().then(i)
                }

                function v(e, r, a) {
                    function d(e, t, n) {
                        return n.parent.append(t), u(function(e, n) {
                            try {
                                h(t, {
                                    removeClass: "md-leave",
                                    duration: 0
                                }).start().then(s).then(e)
                            } catch (o) {
                                n(o)
                            }
                        })
                    }

                    function s() {
                        return u(function(t) {
                            if (a.isRemoved) return u.reject(!1);
                            var n = $(e, r, a);
                            n.container.element.css(y.toCss(n.container.styles)), n.dropDown.element.css(y.toCss(n.dropDown.styles)), p(function() {
                                r.addClass("md-active"), n.dropDown.element.css(y.toCss({
                                    transform: ""
                                })), b(a.focusedNode), t()
                            })
                        })
                    }

                    function c(e, t, n) {
                        return n.disableParentScroll && !l.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = l.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = l.createBackdrop(e, "md-select-backdrop md-click-catcher"), f.enter(n.backdrop, g[0].body, null, {
                                duration: 0
                            })),
                            function() {
                                n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll
                            }
                    }

                    function b(e) {
                        e && !e.hasAttribute("disabled") && e.focus()
                    }

                    function v(e, n) {
                        var o = r.find("md-select-menu");
                        if (!n.target) throw new Error(l.supplant(C, [n.target]));
                        t.extend(n, {
                            isRemoved: !1,
                            target: t.element(n.target),
                            parent: t.element(n.parent),
                            selectEl: o,
                            contentEl: r.find("md-content"),
                            optionNodes: o[0].getElementsByTagName("md-option")
                        })
                    }

                    function E() {
                        var n = function(e, t, n) {
                                return function() {
                                    if (!n.isRemoved) {
                                        var o = $(e, t, n),
                                            i = o.container,
                                            r = o.dropDown;
                                        i.element.css(y.toCss(i.styles)), r.element.css(y.toCss(r.styles))
                                    }
                                }
                            }(e, r, a),
                            o = t.element(m);
                        return o.on("resize", n), o.on("orientationchange", n),
                            function() {
                                o.off("resize", n), o.off("orientationchange", n)
                            }
                    }

                    function T() {
                        a.loadingAsync && !a.isRemoved && (e.$$loadingAsyncDone = !1, u.when(a.loadingAsync).then(function() {
                            e.$$loadingAsyncDone = !0, delete a.loadingAsync
                        }).then(function() {
                            p(s)
                        }))
                    }

                    function A() {
                        function e(e) {
                            e.preventDefault(), e.stopPropagation(), a.restoreFocus = !1, l.nextTick(o.hide, !0)
                        }

                        function t(e) {
                            switch (e.preventDefault(), e.stopPropagation(), e.keyCode) {
                                case M.UP_ARROW:
                                    return c();
                                case M.DOWN_ARROW:
                                    return s();
                                case M.SPACE:
                                case M.ENTER:
                                    var t = l.getClosest(e.target, "md-option");
                                    t && (u.triggerHandler({
                                        type: "click",
                                        target: t
                                    }), e.preventDefault()), m(e);
                                    break;
                                case M.TAB:
                                case M.ESCAPE:
                                    e.stopPropagation(), e.preventDefault(), a.restoreFocus = !0, l.nextTick(o.hide, !0);
                                    break;
                                default:
                                    if (i.isInputKey(e) || i.isNumPadKey(e)) {
                                        var n = u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);
                                        a.focusedNode = n || a.focusedNode, n && n.focus()
                                    }
                            }
                        }

                        function d(e) {
                            var t, o = l.nodesToArray(a.optionNodes),
                                i = o.indexOf(a.focusedNode);
                            do i === -1 ? i = 0 : "next" === e && i < o.length - 1 ? i++ : "prev" === e && i > 0 && i--, t = o[i], t.hasAttribute("disabled") && (t = n); while (!t && i < o.length - 1 && i > 0);
                            t && t.focus(), a.focusedNode = t
                        }

                        function s() {
                            d("next")
                        }

                        function c() {
                            d("prev")
                        }

                        function m(e) {
                            function t() {
                                var t = !1;
                                if (e && e.currentTarget.children.length > 0) {
                                    var n = e.currentTarget.children[0],
                                        o = n.scrollHeight > n.clientHeight;
                                    if (o && n.children.length > 0) {
                                        var i = e.pageX - e.currentTarget.getBoundingClientRect().left;
                                        i > n.querySelector("md-option").offsetWidth && (t = !0)
                                    }
                                }
                                return t
                            }
                            if (!(e && "click" == e.type && e.currentTarget != u[0] || t())) {
                                var n = l.getClosest(e.target, "md-option");
                                n && n.hasAttribute && !n.hasAttribute("disabled") && (e.preventDefault(), e.stopPropagation(), p.isMultiple || (a.restoreFocus = !0, l.nextTick(function() {
                                    o.hide(p.ngModel.$viewValue)
                                }, !0)))
                            }
                        }
                        if (!a.isRemoved) {
                            var u = a.selectEl,
                                p = u.controller("mdSelectMenu") || {};
                            return r.addClass("md-clickable"), a.backdrop && a.backdrop.on("click", e), u.on("keydown", t), u.on("click", m),
                                function() {
                                    a.backdrop && a.backdrop.off("click", e), u.off("keydown", t), u.off("click", m), r.removeClass("md-clickable"), a.isRemoved = !0
                                }
                        }
                    }
                    return T(), v(e, a), a.hideBackdrop = c(e, r, a), d(e, r, a).then(function(e) {
                        return r.attr("aria-hidden", "false"), a.alreadyOpen = !0, a.cleanupInteraction = A(), a.cleanupResizing = E(), e
                    }, a.hideBackdrop)
                }

                function E(e) {
                    var t = e.selectCtrl;
                    if (t) {
                        var n = e.selectEl.controller("mdSelectMenu");
                        t.setLabelText(n ? n.selectedLabels() : ""), t.triggerClose()
                    }
                }

                function $(n, o, i) {
                    var u, p = o[0],
                        h = i.target[0].children[0],
                        f = g[0].body,
                        b = i.selectEl[0],
                        v = i.contentEl[0],
                        E = f.getBoundingClientRect(),
                        $ = h.getBoundingClientRect(),
                        C = !1,
                        y = {
                            left: E.left + c,
                            top: c,
                            bottom: E.height - c,
                            right: E.width - c - (l.floatingScrollbars() ? 16 : 0)
                        },
                        M = {
                            top: $.top - y.top,
                            left: $.left - y.left,
                            right: y.right - ($.left + $.width),
                            bottom: y.bottom - ($.top + $.height)
                        },
                        T = E.width - 2 * c,
                        A = b.querySelector("md-option[selected]"),
                        w = b.getElementsByTagName("md-option"),
                        k = b.getElementsByTagName("md-optgroup"),
                        _ = s(o, v),
                        x = r(i.loadingAsync);
                    u = x ? v.firstElementChild || v : A ? A : k.length ? k[0] : w.length ? w[0] : v.firstElementChild || v, v.offsetWidth > T ? v.style["max-width"] = T + "px" : v.style.maxWidth = null, C && (v.style["min-width"] = $.width + "px"), _ && b.classList.add("md-overflow");
                    var S = u;
                    "MD-OPTGROUP" === (S.tagName || "").toUpperCase() && (S = w[0] || v.firstElementChild || v, u = S), i.focusedNode = S, p.style.display = "block";
                    var N = b.getBoundingClientRect(),
                        D = d(u);
                    if (u) {
                        var H = m.getComputedStyle(u);
                        D.paddingLeft = parseInt(H.paddingLeft, 10) || 0, D.paddingRight = parseInt(H.paddingRight, 10) || 0
                    }
                    if (_) {
                        var I = v.offsetHeight / 2;
                        v.scrollTop = D.top + D.height / 2 - I, M.top < I ? v.scrollTop = Math.min(D.top, v.scrollTop + I - M.top) : M.bottom < I && (v.scrollTop = Math.max(D.top + D.height - N.height, v.scrollTop - I + M.bottom))
                    }
                    var O, R, L, P, F;
                    C ? (O = $.left, R = $.top + $.height, L = "50% 0", R + N.height > y.bottom && (R = $.top - N.height, L = "50% 100%")) : (O = $.left + D.left - D.paddingLeft + 2, R = Math.floor($.top + $.height / 2 - D.height / 2 - D.top + v.scrollTop) + 2, L = D.left + $.width / 2 + "px " + (D.top + D.height / 2 - v.scrollTop) + "px 0px", P = Math.min($.width + D.paddingLeft + D.paddingRight, T), F = e.getComputedStyle(h)["font-size"]);
                    var B = p.getBoundingClientRect(),
                        U = Math.round(100 * Math.min($.width / N.width, 1)) / 100,
                        j = Math.round(100 * Math.min($.height / N.height, 1)) / 100;
                    return {
                        container: {
                            element: t.element(p),
                            styles: {
                                left: Math.floor(a(y.left, O, y.right - B.width)),
                                top: Math.floor(a(y.top, R, y.bottom - B.height)),
                                "min-width": P,
                                "font-size": F
                            }
                        },
                        dropDown: {
                            element: t.element(b),
                            styles: {
                                transformOrigin: L,
                                transform: i.alreadyOpen ? "" : l.supplant("scale({0},{1})", [U, j])
                            }
                        }
                    }
                }
                var C = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
                    y = l.dom.animator,
                    M = i.KEY_CODE;
                return {
                    parent: "body",
                    themable: !0,
                    onShow: v,
                    onRemove: b,
                    hasBackdrop: !0,
                    disableParentScroll: !0
                }
            }

            function r(e) {
                return e && t.isFunction(e.then)
            }

            function a(e, t, n) {
                return Math.max(e, Math.min(t, n))
            }

            function d(e) {
                return e ? {
                    left: e.offsetLeft,
                    top: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                } : {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }
            }

            function s(e, t) {
                var n = !1;
                try {
                    var o = e[0].style.display;
                    e[0].style.display = "block", n = t.scrollHeight > t.offsetHeight, e[0].style.display = o
                } finally {}
                return n
            }
            return i.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$document"], o("$mdSelect").setDefaults({
                methods: ["target"],
                options: i
            })
        }
        var c = 8,
            l = 0,
            m = t.element('<div class="md-container"><div class="md-icon"></div></div>');
        t.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", o).directive("mdSelectMenu", i).directive("mdOption", r).directive("mdOptgroup", a).directive("mdSelectHeader", d).provider("$mdSelect", s), o.$inject = ["$mdSelect", "$mdUtil", "$mdConstant", "$mdTheming", "$mdAria", "$compile", "$parse"], i.$inject = ["$parse", "$mdUtil", "$mdConstant", "$mdTheming"], r.$inject = ["$mdButtonInkRipple", "$mdUtil"], s.$inject = ["$$interimElementProvider"]
    }(),
    function() {
        function e(e, t) {
            return ["$mdUtil", "$window", function(n, o) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(i, r, a) {
                        var d = i.$on("$md-resize-enable", function() {
                            d();
                            var s = r[0],
                                c = s.nodeType === o.Node.ELEMENT_NODE ? o.getComputedStyle(s) : {};
                            i.$watch(a[e], function(e) {
                                if (!!e === t) {
                                    n.nextTick(function() {
                                        i.$broadcast("$md-resize")
                                    });
                                    var o = {
                                        cachedTransitionStyles: c
                                    };
                                    n.dom.animator.waitTransitionEnd(r, o).then(function() {
                                        i.$broadcast("$md-resize")
                                    })
                                }
                            })
                        })
                    }
                }
            }]
        }
        t.module("material.components.showHide", ["material.core"]).directive("ngShow", e("ngShow", !0)).directive("ngHide", e("ngHide", !1))
    }(),
    function() {
        function e(e, o, i, r) {
            function a(e, n) {
                var r = function() {
                        return !1
                    },
                    a = function() {
                        return i.when(o.supplant(c, [n || ""]))
                    };
                return t.extend({
                    isLockedOpen: r,
                    isOpen: r,
                    toggle: a,
                    open: a,
                    close: a,
                    onClose: t.noop,
                    then: function(e) {
                        return s(n).then(e || t.noop)
                    }
                }, e)
            }

            function d(t, i) {
                var a = e.get(t);
                return a || i ? a : (r.error(o.supplant(c, [t || ""])), n)
            }

            function s(t) {
                return e.when(t)["catch"](r.error)
            }
            var c = "SideNav '{0}' is not available! Did you use md-component-id='{0}'?",
                l = {
                    find: d,
                    waitFor: s
                };
            return function(e, n) {
                if (t.isUndefined(e)) return l;
                var o = n === !0,
                    i = l.find(e, o);
                return !i && o ? l.waitFor(e) : !i && t.isUndefined(n) ? a(l, e) : i
            }
        }

        function o() {
            return {
                restrict: "A",
                require: "^mdSidenav",
                link: function(e, t, n, o) {}
            }
        }

        function i(e, o, i, r, a, d, s, c, l, m) {
            function u(d, u, p, h) {
                function f(e, t) {
                    d.isLockedOpen = e, e === t ? u.toggleClass("md-locked-open", !!e) : a[e ? "addClass" : "removeClass"](u, "md-locked-open"), M && M.toggleClass("md-locked-open", !!e)
                }

                function g(e) {
                    var t = o.findFocusTarget(u) || o.findFocusTarget(u, "[md-sidenav-focus]") || u,
                        n = u.parent();
                    n[e ? "on" : "off"]("keydown", $), M && M[e ? "on" : "off"]("click", C);
                    var i = b(n, e);
                    return e && (A = m[0].activeElement), v(e), w = l.all([e && M ? a.enter(M, n) : M ? a.leave(M) : l.when(!0), a[e ? "removeClass" : "addClass"](u, "md-closed")]).then(function() {
                        d.isOpen && t && t.focus(), i && i()
                    })
                }

                function b(e, t) {
                    var n = u[0],
                        o = e[0].scrollTop;
                    if (t && o) {
                        T = {
                            top: n.style.top,
                            bottom: n.style.bottom,
                            height: n.style.height
                        };
                        var i = {
                            top: o + "px",
                            bottom: "auto",
                            height: e[0].clientHeight + "px"
                        };
                        u.css(i), M.css(i)
                    }
                    if (!t && T) return function() {
                        n.style.top = T.top, n.style.bottom = T.bottom, n.style.height = T.height, M[0].style.top = null, M[0].style.bottom = null, M[0].style.height = null, T = null
                    }
                }

                function v(e) {
                    var o = u.parent();
                    e && !y ? (y = o.css("overflow"), o.css("overflow", "hidden")) : t.isDefined(y) && (o.css("overflow", y), y = n)
                }

                function E(e) {
                    return d.isOpen == e ? l.when(!0) : (d.isOpen && h.onCloseCb && h.onCloseCb(), l(function(t) {
                        d.isOpen = e, o.nextTick(function() {
                            w.then(function(e) {
                                d.isOpen || (A && A.focus(), A = null), t(e)
                            })
                        })
                    }))
                }

                function $(e) {
                    var t = e.keyCode === i.KEY_CODE.ESCAPE;
                    return t ? C(e) : l.when(!0)
                }

                function C(e) {
                    return e.preventDefault(), h.close()
                }
                var y, M, T, A = null,
                    w = l.when(!0),
                    k = s(p.mdIsLockedOpen),
                    _ = function() {
                        return k(d.$parent, {
                            $media: function(t) {
                                return c.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(t)
                            },
                            $mdMedia: e
                        })
                    };
                t.isDefined(p.mdDisableBackdrop) || (M = o.createBackdrop(d, "md-sidenav-backdrop md-opaque ng-enter")), u.addClass("_md"), r(u), M && r.inherit(M, u), u.on("$destroy", function() {
                    M && M.remove(), h.destroy()
                }), d.$on("$destroy", function() {
                    M && M.remove()
                }), d.$watch(_, f), d.$watch("isOpen", g), h.$toggleOpen = E
            }
            return {
                restrict: "E",
                scope: {
                    isOpen: "=?mdIsOpen"
                },
                controller: "$mdSidenavController",
                compile: function(e) {
                    return e.addClass("md-closed"), e.attr("tabIndex", "-1"), u
                }
            }
        }

        function r(e, t, n, o, i) {
            var r = this;
            r.isOpen = function() {
                return !!e.isOpen
            }, r.isLockedOpen = function() {
                return !!e.isLockedOpen
            }, r.onClose = function(e) {
                return r.onCloseCb = e, r
            }, r.open = function() {
                return r.$toggleOpen(!0)
            }, r.close = function() {
                return r.$toggleOpen(!1)
            }, r.toggle = function() {
                return r.$toggleOpen(!e.isOpen)
            }, r.$toggleOpen = function(t) {
                return i.when(e.isOpen = t)
            }, r.destroy = o.register(r, n.mdComponentId)
        }
        t.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", i).directive("mdSidenavFocus", o).controller("$mdSidenavController", r), e.$inject = ["$mdComponentRegistry", "$mdUtil", "$q", "$log"], i.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$animate", "$compile", "$parse", "$log", "$q", "$document"], r.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
    }(),
    function() {
        function e() {
            return {
                controller: function() {},
                compile: function(e) {
                    var o = e.find("md-slider");
                    if (o) {
                        var i = o.attr("md-vertical");
                        return i !== n && e.attr("md-vertical", ""), o.attr("flex") || o.attr("flex", ""),
                            function(e, n, o, i) {
                                function r(e) {
                                    n.children().attr("disabled", e), n.find("input").attr("disabled", e)
                                }
                                n.addClass("_md");
                                var a = t.noop;
                                o.disabled ? r(!0) : o.ngDisabled && (a = e.$watch(o.ngDisabled, function(e) {
                                    r(e)
                                })), e.$on("$destroy", function() {
                                    a()
                                });
                                var d;
                                i.fitInputWidthToTextLength = function(e) {
                                    var t = n[0].querySelector("md-input-container");
                                    if (t) {
                                        var o = getComputedStyle(t),
                                            i = parseInt(o.minWidth),
                                            r = 2 * parseInt(o.padding);
                                        d = d || parseInt(o.maxWidth);
                                        var a = Math.max(d, i + r + i / 2 * e);
                                        t.style.maxWidth = a + "px"
                                    }
                                }
                            }
                    }
                }
            }
        }

        function o(e, n, o, i, r, a, d, s, c, l) {
            function m(e, n) {
                var i = t.element(e[0].getElementsByClassName("md-slider-wrapper")),
                    r = n.tabindex || 0;
                return i.attr("tabindex", r), (n.disabled || n.ngDisabled) && i.attr("tabindex", -1), i.attr("role", "slider"), o.expect(e, "aria-label"), u
            }

            function u(o, m, u, p) {
                function h() {
                    y(), x()
                }

                function f(e) {
                    se = parseFloat(e), m.attr("aria-valuemin", e), h()
                }

                function g(e) {
                    ce = parseFloat(e), m.attr("aria-valuemax", e), h()
                }

                function b(e) {
                    le = parseFloat(e)
                }

                function v(e) {
                    me = S(parseInt(e), 0, 6)
                }

                function E() {
                    m.attr("aria-disabled", !!Y())
                }

                function $() {
                    if (ie && !Y() && !t.isUndefined(le)) {
                        if (le <= 0) {
                            var e = "Slider step value must be greater than zero when in discrete mode";
                            throw c.error(e), new Error(e)
                        }
                        var o = Math.floor((ce - se) / le);
                        ue || (ue = t.element("<canvas>").css("position", "absolute"), J.append(ue), pe = ue[0].getContext("2d"));
                        var i = M();
                        !i || i.height || i.width || (y(), i = he), ue[0].width = i.width, ue[0].height = i.height;
                        for (var r, a = 0; a <= o; a++) {
                            var d = n.getComputedStyle(J[0]);
                            pe.fillStyle = d.color || "black", r = Math.floor((oe ? i.height : i.width) * (a / o)), pe.fillRect(oe ? 0 : r - 1, oe ? r - 1 : 0, oe ? i.width : 2, oe ? 2 : i.height)
                        }
                    }
                }

                function C() {
                    if (ue && pe) {
                        var e = M();
                        pe.clearRect(0, 0, e.width, e.height)
                    }
                }

                function y() {
                    he = Q[0].getBoundingClientRect()
                }

                function M() {
                    return te(), he
                }

                function T(e) {
                    if (!Y()) {
                        var t;
                        (oe ? e.keyCode === r.KEY_CODE.DOWN_ARROW : e.keyCode === r.KEY_CODE.LEFT_ARROW) ? t = -le: (oe ? e.keyCode === r.KEY_CODE.UP_ARROW : e.keyCode === r.KEY_CODE.RIGHT_ARROW) && (t = le), t = re ? -t : t, t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), o.$evalAsync(function() {
                            _(W.$viewValue + t)
                        }))
                    }
                }

                function A() {
                    $(), o.mouseActive = !0, ee.removeClass("md-focused"), l(function() {
                        o.mouseActive = !1
                    }, 100)
                }

                function w() {
                    o.mouseActive === !1 && ee.addClass("md-focused")
                }

                function k() {
                    ee.removeClass("md-focused"), m.removeClass("md-active"), C()
                }

                function _(e) {
                    W.$setViewValue(S(N(e)))
                }

                function x() {
                    isNaN(W.$viewValue) && (W.$viewValue = W.$modelValue), W.$viewValue = S(W.$viewValue);
                    var e = z(W.$viewValue);
                    o.modelValue = W.$viewValue, m.attr("aria-valuenow", W.$viewValue), D(e), G.text(W.$viewValue)
                }

                function S(e, n, o) {
                    if (t.isNumber(e)) return n = t.isNumber(n) ? n : se, o = t.isNumber(o) ? o : ce, Math.max(n, Math.min(o, e))
                }

                function N(e) {
                    if (t.isNumber(e)) {
                        var n = Math.round((e - se) / le) * le + se;
                        return n = Math.round(n * Math.pow(10, me)) / Math.pow(10, me), V && V.fitInputWidthToTextLength && i.debounce(function() {
                            V.fitInputWidthToTextLength(n.toString().length)
                        }, 100)(), n
                    }
                }

                function D(e) {
                    e = U(e);
                    var t = 100 * e + "%",
                        n = re ? 100 * (1 - e) + "%" : t;
                    oe ? X.css("bottom", t) : i.bidiProperty(X, "left", "right", t), Z.css(oe ? "height" : "width", n), m.toggleClass(re ? "md-max" : "md-min", 0 === e), m.toggleClass(re ? "md-min" : "md-max", 1 === e)
                }

                function H(e) {
                    if (!Y()) {
                        m.addClass("md-active"), m[0].focus(), y();
                        var t = q(j(oe ? e.pointer.y : e.pointer.x)),
                            n = S(N(t));
                        o.$apply(function() {
                            _(n), D(z(n))
                        })
                    }
                }

                function I(e) {
                    if (!Y()) {
                        m.removeClass("md-dragging");
                        var t = q(j(oe ? e.pointer.y : e.pointer.x)),
                            n = S(N(t));
                        o.$apply(function() {
                            _(n), x()
                        })
                    }
                }

                function O(e) {
                    Y() || (fe = !0, e.stopPropagation(), m.addClass("md-dragging"), P(e))
                }

                function R(e) {
                    fe && (e.stopPropagation(), P(e))
                }

                function L(e) {
                    fe && (e.stopPropagation(), fe = !1)
                }

                function P(e) {
                    ie ? B(oe ? e.pointer.y : e.pointer.x) : F(oe ? e.pointer.y : e.pointer.x)
                }

                function F(e) {
                    o.$evalAsync(function() {
                        _(q(j(e)))
                    })
                }

                function B(e) {
                    var t = q(j(e)),
                        n = S(N(t));
                    D(j(e)), G.text(n)
                }

                function U(e) {
                    return Math.max(0, Math.min(e || 0, 1))
                }

                function j(e) {
                    var t = oe ? he.top : he.left,
                        n = oe ? he.height : he.width,
                        o = (e - t) / n;
                    return oe || "rtl" !== i.bidi() || (o = 1 - o), Math.max(0, Math.min(1, oe ? 1 - o : o))
                }

                function q(e) {
                    var t = re ? 1 - e : e;
                    return se + t * (ce - se)
                }

                function z(e) {
                    var t = (e - se) / (ce - se);
                    return re ? 1 - t : t
                }
                a(m);
                var W = p[0] || {
                        $setViewValue: function(e) {
                            this.$viewValue = e, this.$viewChangeListeners.forEach(function(e) {
                                e()
                            })
                        },
                        $parsers: [],
                        $formatters: [],
                        $viewChangeListeners: []
                    },
                    V = p[1],
                    Y = (t.element(i.getClosest(m, "_md-slider-container", !0)), u.ngDisabled ? t.bind(null, s(u.ngDisabled), o.$parent) : function() {
                        return m[0].hasAttribute("disabled")
                    }),
                    K = t.element(m[0].querySelector(".md-thumb")),
                    G = t.element(m[0].querySelector(".md-thumb-text")),
                    X = K.parent(),
                    Q = t.element(m[0].querySelector(".md-track-container")),
                    Z = t.element(m[0].querySelector(".md-track-fill")),
                    J = t.element(m[0].querySelector(".md-track-ticks")),
                    ee = t.element(m[0].getElementsByClassName("md-slider-wrapper")),
                    te = (t.element(m[0].getElementsByClassName("md-slider-content")), i.throttle(y, 5e3)),
                    ne = 3,
                    oe = t.isDefined(u.mdVertical),
                    ie = t.isDefined(u.mdDiscrete),
                    re = t.isDefined(u.mdInvert);
                t.isDefined(u.min) ? u.$observe("min", f) : f(0), t.isDefined(u.max) ? u.$observe("max", g) : g(100), t.isDefined(u.step) ? u.$observe("step", b) : b(1), t.isDefined(u.round) ? u.$observe("round", v) : v(ne);
                var ae = t.noop;
                u.ngDisabled && (ae = o.$parent.$watch(u.ngDisabled, E)), d.register(ee, "drag", {
                    horizontal: !oe
                }), o.mouseActive = !1, ee.on("keydown", T).on("mousedown", A).on("focus", w).on("blur", k).on("$md.pressdown", H).on("$md.pressup", I).on("$md.dragstart", O).on("$md.drag", R).on("$md.dragend", L), setTimeout(h, 0);
                var de = e.throttle(h);
                t.element(n).on("resize", de), o.$on("$destroy", function() {
                    t.element(n).off("resize", de)
                }), W.$render = x, W.$viewChangeListeners.push(x), W.$formatters.push(S), W.$formatters.push(N);
                var se, ce, le, me, ue, pe, he = {};
                y();
                var fe = !1
            }
            return {
                scope: {},
                require: ["?ngModel", "?^mdSliderContainer"],
                template: '<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',
                compile: m
            }
        }
        t.module("material.components.slider", ["material.core"]).directive("mdSlider", o).directive("mdSliderContainer", e), o.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log", "$timeout"]
    }(),
    function() {
        function e(e, t, o, i) {
            function r(i) {
                function r(e, t) {
                    t.addClass("md-sticky-clone");
                    var n = {
                        element: e,
                        clone: t
                    };
                    return f.items.push(n), o.nextTick(function() {
                            p.prepend(n.clone)
                        }), h(),
                        function() {
                            f.items.forEach(function(t, n) {
                                t.element[0] === e[0] && (f.items.splice(n, 1), t.clone.remove())
                            }), h()
                        }
                }

                function d() {
                    f.items.forEach(s), f.items = f.items.sort(function(e, t) {
                        return e.top < t.top ? -1 : 1
                    });
                    for (var e, t = p.prop("scrollTop"), n = f.items.length - 1; n >= 0; n--)
                        if (t > f.items[n].top) {
                            e = f.items[n];
                            break
                        }
                    l(e)
                }

                function s(e) {
                    var t = e.element[0];
                    for (e.top = 0, e.left = 0, e.right = 0; t && t !== p[0];) e.top += t.offsetTop, e.left += t.offsetLeft, t.offsetParent && (e.right += t.offsetParent.offsetWidth - t.offsetWidth - t.offsetLeft), t = t.offsetParent;
                    e.height = e.element.prop("offsetHeight");
                    var i = o.floatingScrollbars() ? "0" : n;
                    o.bidi(e.clone, "margin-left", e.left, i), o.bidi(e.clone, "margin-right", i, e.right)
                }

                function c() {
                    var e = p.prop("scrollTop"),
                        t = e > (c.prevScrollTop || 0);
                    if (c.prevScrollTop = e, 0 === e) return void l(null);
                    if (t) {
                        if (f.next && f.next.top <= e) return void l(f.next);
                        if (f.current && f.next && f.next.top - e <= f.next.height) return void u(f.current, e + (f.next.top - f.next.height - e))
                    }
                    if (!t) {
                        if (f.current && f.prev && e < f.current.top) return void l(f.prev);
                        if (f.next && f.current && e >= f.next.top - f.current.height) return void u(f.current, e + (f.next.top - e - f.current.height))
                    }
                    f.current && u(f.current, e)
                }

                function l(e) {
                    if (f.current !== e) {
                        f.current && (u(f.current, null), m(f.current, null)), e && m(e, "active"), f.current = e;
                        var t = f.items.indexOf(e);
                        f.next = f.items[t + 1], f.prev = f.items[t - 1], m(f.next, "next"), m(f.prev, "prev")
                    }
                }

                function m(e, t) {
                    e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
                }

                function u(t, i) {
                    t && (null === i || i === n ? t.translateY && (t.translateY = null, t.clone.css(e.CSS.TRANSFORM, "")) : (t.translateY = i, o.bidi(t.clone, e.CSS.TRANSFORM, "translate3d(" + t.left + "px," + i + "px,0)", "translateY(" + i + "px)")))
                }
                var p = i.$element,
                    h = t.throttle(d);
                a(p), p.on("$scrollstart", h), p.on("$scroll", c);
                var f;
                return f = {
                    prev: null,
                    current: null,
                    next: null,
                    items: [],
                    add: r,
                    refreshElements: d
                }
            }

            function a(e) {
                function n() {
                    +o.now() - r > a ? (i = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), t.throttle(n))
                }
                var i, r, a = 200;
                e.on("scroll touchmove", function() {
                    i || (i = !0, t.throttle(n), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), r = +o.now()
                })
            }
            var d = o.checkStickySupport();
            return function(e, t, n) {
                var o = t.controller("mdContent");
                if (o)
                    if (d) t.css({
                        position: d,
                        top: 0,
                        "z-index": 2
                    });
                    else {
                        var a = o.$element.data("$$sticky");
                        a || (a = r(o), o.$element.data("$$sticky", a));
                        var s = n || i(t.clone())(e),
                            c = a.add(t, s);
                        e.$on("$destroy", c)
                    }
            }
        }
        t.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$mdConstant", "$$rAF", "$mdUtil", "$compile"]
    }(),
    function() {
        function e(e, n, o, i) {
            return {
                restrict: "E",
                replace: !0,
                transclude: !0,
                template: '<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',
                link: function(r, a, d, s, c) {
                    function l(e) {
                        return t.element(e[0].querySelector(".md-subheader-content"))
                    }
                    o(a), a.addClass("_md"), i.prefixer().removeAttribute(a, "ng-repeat");
                    var m = a[0].outerHTML;
                    c(r, function(e) {
                        l(a).append(e)
                    }), a.hasClass("md-no-sticky") || c(r, function(t) {
                        var o = n('<div class="md-subheader-wrapper">' + m + "</div>")(r);
                        i.nextTick(function() {
                            l(o).append(t)
                        }), e(r, a, o)
                    })
                }
            }
        }
        t.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil"]
    }(),
    function() {
        function e(e) {
            function t(e) {
                function t(t, i, r) {
                    var a = e(r[n]);
                    i.on(o, function(e) {
                        t.$applyAsync(function() {
                            a(t, {
                                $event: e
                            })
                        })
                    })
                }
                return {
                    restrict: "A",
                    link: t
                }
            }
            var n = "md" + e,
                o = "$md." + e.toLowerCase();
            return t.$inject = ["$parse"], t
        }
        t.module("material.components.swipe", ["material.core"]).directive("mdSwipeLeft", e("SwipeLeft")).directive("mdSwipeRight", e("SwipeRight")).directive("mdSwipeUp", e("SwipeUp")).directive("mdSwipeDown", e("SwipeDown"))
    }(),
    function() {
        function e(e, n, o, i, r, a, d) {
            function s(e, s) {
                var l = c.compile(e, s).post;
                return e.addClass("md-dragging"),
                    function(e, s, c, m) {
                        function u(t) {
                            g && g(e) || (t.stopPropagation(), s.addClass("md-dragging"), E = {
                                width: b.prop("offsetWidth")
                            })
                        }

                        function p(e) {
                            if (E) {
                                e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
                                var t = e.pointer.distanceX / E.width,
                                    n = m.$viewValue ? 1 + t : t;
                                n = Math.max(0, Math.min(1, n)), b.css(o.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), E.translate = n
                            }
                        }

                        function h(t) {
                            if (E) {
                                t.stopPropagation(), s.removeClass("md-dragging"), b.css(o.CSS.TRANSFORM, "");
                                var n = m.$viewValue ? E.translate < .5 : E.translate > .5;
                                n && f(!m.$viewValue), E = null, e.skipToggle = !0, d(function() {
                                    e.skipToggle = !1
                                }, 1)
                            }
                        }

                        function f(t) {
                            e.$apply(function() {
                                m.$setViewValue(t), m.$render()
                            })
                        }
                        m = m || n.fakeNgModel();
                        var g = null;
                        null != c.disabled ? g = function() {
                            return !0
                        } : c.ngDisabled && (g = i(c.ngDisabled));
                        var b = t.element(s[0].querySelector(".md-thumb-container")),
                            v = t.element(s[0].querySelector(".md-container"));
                        r(function() {
                            s.removeClass("md-dragging")
                        }), l(e, s, c, m), g && e.$watch(g, function(e) {
                            s.attr("tabindex", e ? -1 : 0)
                        }), a.register(v, "drag"), v.on("$md.dragstart", u).on("$md.drag", p).on("$md.dragend", h);
                        var E
                    }
            }
            var c = e[0];
            return {
                restrict: "E",
                priority: 210,
                transclude: !0,
                template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
                require: "?ngModel",
                compile: s
            }
        }
        t.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture", "$timeout"]
    }(),
    function() {
        t.module("material.components.tabs", ["material.core", "material.components.icon"])
    }(),
    function() {
        function e(e) {
            return {
                restrict: "E",
                link: function(t, n) {
                    n.addClass("_md"), t.$on("$destroy", function() {
                        e.destroy()
                    })
                }
            }
        }

        function n(e) {
            function n(e) {
                i = e
            }

            function o(e, n, o, r) {
                function a(t, a, d) {
                    i = d.textContent || d.content;
                    var l = !r("gt-sm");
                    return a = o.extractElementByName(a, "md-toast", !0), d.element = a, d.onSwipe = function(e, t) {
                        var i = e.type.replace("$md.", ""),
                            r = i.replace("swipe", "");
                        "down" === r && d.position.indexOf("top") != -1 && !l || "up" === r && (d.position.indexOf("bottom") != -1 || l) || ("left" !== r && "right" !== r || !l) && (a.addClass("md-" + i), o.nextTick(n.cancel))
                    }, d.openClass = s(d.position), a.addClass(d.toastClass), d.parent.addClass(d.openClass), o.hasComputedStyle(d.parent, "position", "static") && d.parent.css("position", "relative"), a.on(c, d.onSwipe), a.addClass(l ? "md-bottom" : d.position.split(" ").map(function(e) {
                        return "md-" + e
                    }).join(" ")), d.parent && d.parent.addClass("md-toast-animating"), e.enter(a, d.parent).then(function() {
                        d.parent && d.parent.removeClass("md-toast-animating")
                    })
                }

                function d(t, n, i) {
                    return n.off(c, i.onSwipe), i.parent && i.parent.addClass("md-toast-animating"), i.openClass && i.parent.removeClass(i.openClass), (1 == i.$destroy ? n.remove() : e.leave(n)).then(function() {
                        i.parent && i.parent.removeClass("md-toast-animating"), o.hasComputedStyle(i.parent, "position", "static") && i.parent.css("position", "")
                    })
                }

                function s(e) {
                    return r("gt-xs") ? "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom") : "md-toast-open-bottom"
                }
                var c = "$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";
                return {
                    onShow: a,
                    onRemove: d,
                    toastClass: "",
                    position: "bottom left",
                    themable: !0,
                    hideDelay: 3e3,
                    autoWrap: !0,
                    transformTemplate: function(e, n) {
                        var o = n.autoWrap && e && !/md-toast-content/g.test(e);
                        if (o) {
                            var i = document.createElement("md-template");
                            i.innerHTML = e;
                            for (var r = 0; r < i.children.length; r++)
                                if ("MD-TOAST" === i.children[r].nodeName) {
                                    var a = t.element('<div class="md-toast-content">');
                                    a.append(t.element(i.children[r].childNodes)), i.children[r].appendChild(a[0])
                                }
                            return i.innerHTML
                        }
                        return e || ""
                    }
                }
            }
            var i, r = "ok",
                a = e("$mdToast").setDefaults({
                    methods: ["position", "hideDelay", "capsule", "parent", "position", "toastClass"],
                    options: o
                }).addPreset("simple", {
                    argOption: "textContent",
                    methods: ["textContent", "content", "action", "highlightAction", "highlightClass", "theme", "parent"],
                    options: ["$mdToast", "$mdTheming", function(e, t) {
                        return {
                            template: '<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',
                            controller: ["$scope", function(t) {
                                var n = this;
                                n.highlightAction && (t.highlightClasses = ["md-highlight", n.highlightClass]), t.$watch(function() {
                                    return i
                                }, function() {
                                    n.content = i
                                }), this.resolve = function() {
                                    e.hide(r)
                                }
                            }],
                            theme: t.defaultTheme(),
                            controllerAs: "toast",
                            bindToController: !0
                        }
                    }]
                }).addMethod("updateTextContent", n).addMethod("updateContent", n);
            return o.$inject = ["$animate", "$mdToast", "$mdUtil", "$mdMedia"], a
        }
        t.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", n), e.$inject = ["$mdToast"], n.$inject = ["$$interimElementProvider"]
    }(),
    function() {
        function e(e, n, o, i, r) {
            var a = t.bind(null, o.supplant, "translate3d(0,{0}px,0)");
            return {
                template: "",
                restrict: "E",
                link: function(d, s, c) {
                    function l() {
                        function i(e) {
                            var t = s.parent().find("md-content");
                            !f && t.length && l(null, t), e = d.$eval(e), e === !1 ? g() : g = u()
                        }

                        function l(e, t) {
                            t && s.parent()[0] === t.parent()[0] && (f && f.off("scroll", $), f = t, g = u())
                        }

                        function m(e) {
                            var t = e ? e.target.scrollTop : v;
                            C(), b = Math.min(h / E, Math.max(0, b + t - v)), s.css(n.CSS.TRANSFORM, a([-b * E])), f.css(n.CSS.TRANSFORM, a([(h - b) * E])), v = t, o.nextTick(function() {
                                var e = s.hasClass("md-whiteframe-z1");
                                e && !b ? r.removeClass(s, "md-whiteframe-z1") : !e && b && r.addClass(s, "md-whiteframe-z1")
                            })
                        }

                        function u() {
                            return f ? (f.on("scroll", $), f.attr("scroll-shrink", "true"), o.nextTick(p, !1), function() {
                                f.off("scroll", $), f.attr("scroll-shrink", "false"), p()
                            }) : t.noop
                        }

                        function p() {
                            h = s.prop("offsetHeight");
                            var e = -h * E + "px";
                            f.css({
                                "margin-top": e,
                                "margin-bottom": e
                            }), m()
                        }
                        var h, f, g = t.noop,
                            b = 0,
                            v = 0,
                            E = c.mdShrinkSpeedFactor || .5,
                            $ = e.throttle(m),
                            C = o.debounce(p, 5e3);
                        d.$on("$mdContentLoaded", l), c.$observe("mdScrollShrink", i), c.ngShow && d.$watch(c.ngShow, p), c.ngHide && d.$watch(c.ngHide, p), d.$on("$destroy", g)
                    }
                    s.addClass("_md"), i(s), o.nextTick(function() {
                        s.addClass("_md-toolbar-transitions")
                    }, !1), t.isDefined(c.mdScrollShrink) && l()
                }
            }
        }
        t.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"]
    }(),
    function() {
        function e(e, n, o, i, r, a, d, s, c, l) {
            function m(d, c, m) {
                function b() {
                    d.delay = d.delay || f
                }

                function v() {
                    var e = "center top";
                    switch (d.direction) {
                        case "left":
                            e = "right center";
                            break;
                        case "right":
                            e = "left center";
                            break;
                        case "top":
                            e = "center bottom";
                            break;
                        case "bottom":
                            e = "center top"
                    }
                    S.css("transform-origin", e)
                }

                function E(e) {
                    e ? A() : w()
                }

                function $() {
                    if (c[0] && "MutationObserver" in n) {
                        var e = new MutationObserver(function(e) {
                            e.forEach(function(e) {
                                "md-visible" === e.attributeName && (d.visibleWatcher || (d.visibleWatcher = d.$watch("visible", E))), "md-direction" === e.attributeName && k(d.direction)
                            })
                        });
                        e.observe(c[0], {
                            attributes: !0
                        }), m.hasOwnProperty("mdVisible") && (d.visibleWatcher = d.$watch("visible", E))
                    } else d.visibleWatcher = d.$watch("visible", E), d.$watch("direction", k);
                    var t = function() {
                        d.$destroy()
                    };
                    c.one("$destroy", t), x.one("$destroy", t), d.$on("$destroy", function() {
                        T(!1), c.remove(), e && e.disconnect()
                    }), c.text().indexOf(l.startSymbol()) > -1 && d.$watch(function() {
                        return c.text().trim()
                    }, C)
                }

                function C(e) {
                    if ((e || !x.attr("aria-label")) && !x.text().trim()) {
                        var t = e || c.text().trim(),
                            n = l(t)(x.scope());
                        x.attr("aria-label", n)
                    }
                }

                function y() {
                    c.detach(), c.attr("role", "tooltip")
                }

                function M() {
                    function o() {
                        T(!1)
                    }
                    var a = !1;
                    if (x[0] && "MutationObserver" in n) {
                        var s = new MutationObserver(function(e) {
                            e.some(function(e) {
                                return "disabled" === e.attributeName && x[0].disabled
                            }) && r.nextTick(function() {
                                T(!1)
                            })
                        });
                        s.observe(x[0], {
                            attributes: !0
                        })
                    }
                    var c = function() {
                            l = document.activeElement === x[0]
                        },
                        l = !1;
                    t.element(n).on("blur", c).on("resize", H), document.addEventListener("scroll", o, !0), d.$on("$destroy", function() {
                        t.element(n).off("blur", c).off("resize", H), x.off(u, h).off(p, f).off("mousedown", g), f(), document.removeEventListener("scroll", o, !0), s && s.disconnect()
                    });
                    var h = function(e) {
                            "focus" === e.type && l ? l = !1 : d.visible || (x.on(p, f), T(!0), "touchstart" === e.type && x.one("touchend", function() {
                                r.nextTick(function() {
                                    i.one("touchend", f)
                                }, !1)
                            }))
                        },
                        f = function() {
                            var t = d.hasOwnProperty("autohide") ? d.autohide : m.hasOwnProperty("mdAutohide");
                            (t || a || i[0].activeElement !== x[0]) && (D && (e.cancel(D), T.queued = !1, D = null), x.off(p, f), x.triggerHandler("blur"), T(!1)), a = !1
                        },
                        g = function() {
                            a = !0
                        };
                    x.on("mousedown", g), x.on(u, h)
                }

                function T(t) {
                    T.queued && T.value === !!t || !T.queued && d.visible === !!t || (T.value = !!t, T.queued || (t ? (T.queued = !0, D = e(function() {
                        d.visible = T.value, T.queued = !1, D = null, d.visibleWatcher || E(d.visible)
                    }, d.delay)) : r.nextTick(function() {
                        d.visible = !1, d.visibleWatcher || E(!1)
                    })))
                }

                function A() {
                    if (c[0].textContent.trim()) {
                        if (c.css({
                                top: 0,
                                left: 0
                            }), N.append(c), r.hasComputedStyle(c, "display", "none")) return d.visible = !1, void c.detach();
                        k(), s.addClass(S, h).then(function() {
                            c.addClass(h)
                        })
                    }
                }

                function w() {
                    s.removeClass(S, h).then(function() {
                        c.removeClass(h), d.visible || c.detach()
                    })
                }

                function k() {
                    d.visible && (v(), _())
                }

                function _() {
                    function e(e) {
                        var t = {
                            left: e.left,
                            top: e.top
                        };
                        return t.left = Math.min(t.left, N.prop("scrollWidth") - n.width - g), t.left = Math.max(t.left, g), t.top = Math.min(t.top, N.prop("scrollHeight") - n.height - g), t.top = Math.max(t.top, g), t
                    }

                    function t(e) {
                        return "left" === e ? {
                            left: o.left - n.width - g,
                            top: o.top + o.height / 2 - n.height / 2
                        } : "right" === e ? {
                            left: o.left + o.width + g,
                            top: o.top + o.height / 2 - n.height / 2
                        } : "top" === e ? {
                            left: o.left + o.width / 2 - n.width / 2,
                            top: o.top - n.height - g
                        } : {
                            left: o.left + o.width / 2 - n.width / 2,
                            top: o.top + o.height + g
                        }
                    }
                    var n = r.offsetRect(c, N),
                        o = r.offsetRect(x, N),
                        i = t(d.direction),
                        a = c.prop("offsetParent");
                    d.direction ? i = e(i) : a && i.top > a.scrollHeight - n.height - g && (i = e(t("top"))), c.css({
                        left: i.left + "px",
                        top: i.top + "px"
                    })
                }
                a(c);
                var x = r.getParentWithPointerEvents(c),
                    S = t.element(c[0].getElementsByClassName("md-content")[0]),
                    N = t.element(document.body),
                    D = null,
                    H = o.throttle(function() {
                        k()
                    });
                s.pin && s.pin(c, x), b(), y(), M(), v(), $(), C()
            }
            var u = "focus touchstart mouseenter",
                p = "blur touchcancel mouseleave",
                h = "md-show",
                f = 0,
                g = 8;
            return {
                restrict: "E",
                transclude: !0,
                priority: 210,
                template: '<div class="md-content _md" ng-transclude></div>',
                scope: {
                    delay: "=?mdDelay",
                    visible: "=?mdVisible",
                    autohide: "=?mdAutohide",
                    direction: "@?mdDirection"
                },
                compile: function(e, t) {
                    return t.mdDirection || t.$set("mdDirection", "bottom"), m
                }
            }
        }
        t.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q", "$interpolate"]
    }(),
    function() {
        function e() {
            return {
                controller: o,
                template: n,
                compile: function(e, t) {
                    e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical")
                }
            }
        }

        function n(e) {
            return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + e[0].innerHTML + "</div></div>"
        }

        function o(e, n, o, i, r, a, d, s) {
            this.$rootScope = i, this.$scope = a, this.$element = d, this.$attrs = s, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.oldElementSize = null, this.$attrs.mdTopIndex ? (this.bindTopIndex = o(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), t.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, t.bind(this, function(e) {
                e !== this.topIndex && this.scrollToIndex(e)
            }))) : this.topIndex = 0, this.scroller = d[0].querySelector(".md-virtual-repeat-scroller"), this.sizer = this.scroller.querySelector(".md-virtual-repeat-sizer"), this.offsetter = this.scroller.querySelector(".md-virtual-repeat-offsetter");
            var c = t.bind(this, this.updateSize);
            e(t.bind(this, function() {
                c();
                var e = n.debounce(c, 10, null, !1),
                    o = t.element(r);
                this.size || e(), o.on("resize", e), a.$on("$destroy", function() {
                    o.off("resize", e)
                }), a.$emit("$md-resize-enable"), a.$on("$md-resize", c)
            }))
        }

        function i(e) {
            return {
                controller: r,
                priority: 1e3,
                require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"],
                restrict: "A",
                terminal: !0,
                transclude: "element",
                compile: function(t, n) {
                    var o = n.mdVirtualRepeat,
                        i = o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
                        r = i[1],
                        a = e(i[2]),
                        d = n.mdExtraName && e(n.mdExtraName);
                    return function(e, t, n, o, i) {
                        o[0].link_(o[1], i, r, a, d)
                    }
                }
            }
        }

        function r(e, n, o, i, r, a, d, s) {
            this.$scope = e, this.$element = n, this.$attrs = o, this.$browser = i, this.$document = r, this.$rootScope = a, this.$$rAF = d, this.onDemand = s.parseAttributeBoolean(o.mdOnDemand), this.browserCheckUrlChange = i.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = e.$eval(o.mdItemSize) || null, this.isFirstRender = !0, this.isVirtualRepeatUpdating_ = !1, this.itemsLength = 0, this.unwatchItemSize_ = t.noop, this.blocks = {}, this.pooledBlocks = [], e.$on("$destroy", t.bind(this, this.cleanupBlocks_))
        }

        function a(e) {
            if (!t.isFunction(e.getItemAtIndex) || !t.isFunction(e.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");
            this.model = e
        }
        t.module("material.components.virtualRepeat", ["material.core", "material.components.showHide"]).directive("mdVirtualRepeatContainer", e).directive("mdVirtualRepeat", i);
        var d = 1533917,
            s = 3;
        o.$inject = ["$$rAF", "$mdUtil", "$parse", "$rootScope", "$window", "$scope", "$element", "$attrs"], o.prototype.register = function(e) {
            this.repeater = e, t.element(this.scroller).on("scroll wheel touchmove touchend", t.bind(this, this.handleScroll_))
        }, o.prototype.isHorizontal = function() {
            return this.horizontal
        }, o.prototype.getSize = function() {
            return this.size
        }, o.prototype.setSize_ = function(e) {
            var t = this.getDimensionName_();
            this.size = e, this.$element[0].style[t] = e + "px"
        }, o.prototype.unsetSize_ = function() {
            this.$element[0].style[this.getDimensionName_()] = this.oldElementSize, this.oldElementSize = null
        }, o.prototype.updateSize = function() {
            this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.handleScroll_(), this.repeater && this.repeater.containerUpdated())
        }, o.prototype.getScrollSize = function() {
            return this.scrollSize
        }, o.prototype.getDimensionName_ = function() {
            return this.isHorizontal() ? "width" : "height"
        }, o.prototype.sizeScroller_ = function(e) {
            var t = this.getDimensionName_(),
                n = this.isHorizontal() ? "height" : "width";
            if (this.sizer.innerHTML = "", e < d) this.sizer.style[t] = e + "px";
            else {
                this.sizer.style[t] = "auto", this.sizer.style[n] = "auto";
                var o = Math.floor(e / d),
                    i = document.createElement("div");
                i.style[t] = "1533917px", i.style[n] = "1px";
                for (var r = 0; r < o; r++) this.sizer.appendChild(i.cloneNode(!1));
                i.style[t] = e - o * d + "px", this.sizer.appendChild(i)
            }
        }, o.prototype.autoShrink_ = function(e) {
            var t = Math.max(e, this.autoShrinkMin * this.repeater.getItemSize());
            if (this.autoShrink && t !== this.size) {
                null === this.oldElementSize && (this.oldElementSize = this.$element[0].style[this.getDimensionName_()]);
                var n = this.originalSize || this.size;
                if (!n || t < n) this.originalSize || (this.originalSize = this.size), this.setSize_(t);
                else if (null !== this.originalSize) {
                    this.unsetSize_();
                    var o = this.originalSize;
                    this.originalSize = null, o || this.updateSize(), this.setSize_(o || this.size)
                }
                this.repeater.containerUpdated()
            }
        }, o.prototype.setScrollSize = function(e) {
            var t = e + this.offsetSize;
            this.scrollSize !== t && (this.sizeScroller_(t), this.autoShrink_(t), this.scrollSize = t)
        }, o.prototype.getScrollOffset = function() {
            return this.scrollOffset
        }, o.prototype.scrollTo = function(e) {
            this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = e, this.handleScroll_()
        }, o.prototype.scrollToIndex = function(e) {
            var t = this.repeater.getItemSize(),
                n = this.repeater.itemsLength;
            e > n && (e = n - 1), this.scrollTo(t * e)
        }, o.prototype.resetScroll = function() {
            this.scrollTo(0)
        }, o.prototype.handleScroll_ = function() {
            var e = t.element(document)[0],
                n = "rtl" != e.dir && "rtl" != e.body.dir;
            n || this.maxSize || (this.scroller.scrollLeft = this.scrollSize, this.maxSize = this.scroller.scrollLeft);
            var o = this.isHorizontal() ? n ? this.scroller.scrollLeft : this.maxSize - this.scroller.scrollLeft : this.scroller.scrollTop;
            if (!(o === this.scrollOffset || o > this.scrollSize - this.size)) {
                var i = this.repeater.getItemSize();
                if (i) {
                    var r = Math.max(0, Math.floor(o / i) - s),
                        a = (this.isHorizontal() ? "translateX(" : "translateY(") + (!this.isHorizontal() || n ? r * i : -(r * i)) + "px)";
                    if (this.scrollOffset = o, this.offsetter.style.webkitTransform = a, this.offsetter.style.transform = a, this.bindTopIndex) {
                        var d = Math.floor(o / i);
                        d !== this.topIndex && d < this.repeater.getItemCount() && (this.topIndex = d, this.bindTopIndex.assign(this.$scope, d), this.$rootScope.$$phase || this.$scope.$digest())
                    }
                    this.repeater.containerUpdated()
                }
            }
        }, i.$inject = ["$parse"], r.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$rootScope", "$$rAF", "$mdUtil"], r.Block, r.prototype.link_ = function(e, n, o, i, r) {
            this.container = e, this.transclude = n, this.repeatName = o, this.rawRepeatListExpression = i, this.extraName = r, this.sized = !1,
                this.repeatListExpression = t.bind(this, this.repeatListExpression_), this.container.register(this)
        }, r.prototype.cleanupBlocks_ = function() {
            t.forEach(this.pooledBlocks, function(e) {
                e.element.remove()
            })
        }, r.prototype.readItemSize_ = function() {
            if (!this.itemSize) {
                this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;
                var e = this.getBlock_(0);
                e.element[0].parentNode || this.parentNode.appendChild(e.element[0]), this.itemSize = e.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = e, this.poolBlock_(0), this.itemSize && this.containerUpdated()
            }
        }, r.prototype.repeatListExpression_ = function(e) {
            var t = this.rawRepeatListExpression(e);
            if (this.onDemand && t) {
                var n = new a(t);
                return n.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), n
            }
            return t
        }, r.prototype.containerUpdated = function() {
            return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function(e, t) {
                this.isVirtualRepeatUpdating_ || this.virtualRepeatUpdate_(e, t)
            }))), this.updateIndexes_(), void((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof a && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ && this.unwatchItemSize_ !== t.noop && this.unwatchItemSize_(), this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function(e) {
                e && e.length && this.readItemSize_()
            })), void(this.$rootScope.$$phase || this.$scope.$digest()))
        }, r.prototype.getItemSize = function() {
            return this.itemSize
        }, r.prototype.getItemCount = function() {
            return this.itemsLength
        }, r.prototype.virtualRepeatUpdate_ = function(e, n) {
            this.isVirtualRepeatUpdating_ = !0;
            var o = e && e.length || 0,
                i = !1;
            if (this.items && o < this.items.length && 0 !== this.container.getScrollOffset()) {
                this.items = e;
                var r = this.container.getScrollOffset();
                return this.container.resetScroll(), void this.container.scrollTo(r)
            }
            if (o !== this.itemsLength && (i = !0, this.itemsLength = o), this.items = e, (e !== n || i) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, i && this.container.setScrollSize(o * this.itemSize), this.isFirstRender) {
                this.isFirstRender = !1;
                var a = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex;
                this.container.scrollToIndex(a)
            }
            Object.keys(this.blocks).forEach(function(e) {
                var t = parseInt(e, 10);
                (t < this.newStartIndex || t >= this.newEndIndex) && this.poolBlock_(t)
            }, this), this.$browser.$$checkUrlChange = t.noop;
            var d, s, c = [],
                l = [];
            for (d = this.newStartIndex; d < this.newEndIndex && null == this.blocks[d]; d++) s = this.getBlock_(d), this.updateBlock_(s, d), c.push(s);
            for (; null != this.blocks[d]; d++) this.updateBlock_(this.blocks[d], d);
            for (var m = d - 1; d < this.newEndIndex; d++) s = this.getBlock_(d), this.updateBlock_(s, d), l.push(s);
            c.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(c), this.$element[0].nextSibling), l.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(l), this.blocks[m] && this.blocks[m].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex, this.isVirtualRepeatUpdating_ = !1
        }, r.prototype.getBlock_ = function(e) {
            if (this.pooledBlocks.length) return this.pooledBlocks.pop();
            var n;
            return this.transclude(t.bind(this, function(t, o) {
                n = {
                    element: t,
                    "new": !0,
                    scope: o
                }, this.updateScope_(o, e), this.parentNode.appendChild(t[0])
            })), n
        }, r.prototype.updateBlock_ = function(e, t) {
            this.blocks[t] = e, (e["new"] || e.scope.$index !== t || e.scope[this.repeatName] !== this.items[t]) && (e["new"] = !1, this.updateScope_(e.scope, t), this.$rootScope.$$phase || e.scope.$digest())
        }, r.prototype.updateScope_ = function(e, t) {
            e.$index = t, e[this.repeatName] = this.items && this.items[t], this.extraName && (e[this.extraName(this.$scope)] = this.items[t])
        }, r.prototype.poolBlock_ = function(e) {
            this.pooledBlocks.push(this.blocks[e]), this.parentNode.removeChild(this.blocks[e].element[0]), delete this.blocks[e]
        }, r.prototype.domFragmentFromBlocks_ = function(e) {
            var t = this.$document[0].createDocumentFragment();
            return e.forEach(function(e) {
                t.appendChild(e.element[0])
            }), t
        }, r.prototype.updateIndexes_ = function() {
            var e = this.items ? this.items.length : 0,
                t = Math.ceil(this.container.getSize() / this.itemSize);
            this.newStartIndex = Math.max(0, Math.min(e - t, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + t + s, this.newEndIndex = Math.min(e, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - s)
        }, a.prototype.$$includeIndexes = function(e, t) {
            for (var n = e; n < t; n++) this.hasOwnProperty(n) || (this[n] = this.model.getItemAtIndex(n));
            this.length = this.model.getLength()
        }
    }(),
    function() {
        function e(e) {
            function t(t, a, d) {
                var s = "";
                d.$observe("mdWhiteframe", function(t) {
                    t = parseInt(t, 10) || r, t != n && (t > i || t < o) && (e.warn("md-whiteframe attribute value is invalid. It should be a number between " + o + " and " + i, a[0]), t = r);
                    var c = t == n ? "" : "md-whiteframe-" + t + "dp";
                    d.$updateClass(c, s), s = c
                })
            }
            var n = -1,
                o = 1,
                i = 24,
                r = 4;
            return {
                link: t
            }
        }
        t.module("material.components.whiteframe", ["material.core"]).directive("mdWhiteframe", e), e.$inject = ["$log"]
    }(),
    function() {
        function e(e, o, d, s, c, l, m, u, p, h, f) {
            function g() {
                d.initOptionalProperties(e, p, {
                    searchText: "",
                    selectedItem: null
                }), c(o), C(), d.nextTick(function() {
                    M(), E(), $(), o.on("focus", $)
                })
            }

            function b() {
                e.requireMatch && _e && _e.$setValidity("md-require-match", !!e.selectedItem)
            }

            function v() {
                function t() {
                    var e = 0,
                        t = o.find("md-input-container");
                    if (t.length) {
                        var n = t.find("input");
                        e = t.prop("offsetHeight"), e -= n.prop("offsetTop"), e -= n.prop("offsetHeight"), e += t.prop("offsetTop")
                    }
                    return e
                }

                function n() {
                    var e = $e.scrollContainer.getBoundingClientRect(),
                        t = {};
                    e.right > m.right - r && (t.left = c.right - e.width + "px"), $e.$.scrollContainer.css(t)
                }
                if (!$e) return d.nextTick(v, !1, e);
                var s, c = $e.wrap.getBoundingClientRect(),
                    l = $e.snap.getBoundingClientRect(),
                    m = $e.root.getBoundingClientRect(),
                    u = l.bottom - m.top,
                    h = m.bottom - l.top,
                    f = c.left - m.left,
                    g = c.width,
                    b = t();
                p.mdFloatingLabel && (f += a, g -= 2 * a), s = {
                    left: f + "px",
                    minWidth: g + "px",
                    maxWidth: Math.max(c.right - m.left, m.right - c.left) - r + "px"
                }, u > h && m.height - c.bottom - r < i ? (s.top = "auto", s.bottom = h + "px", s.maxHeight = Math.min(i, c.top - m.top - r) + "px") : (s.top = u - b + "px", s.bottom = "auto", s.maxHeight = Math.min(i, m.bottom + d.scrollTop() - c.bottom - r) + "px"), $e.$.scrollContainer.css(s), d.nextTick(n, !1)
            }

            function E() {
                $e.$.root.length && (c($e.$.scrollContainer), $e.$.scrollContainer.detach(), $e.$.root.append($e.$.scrollContainer), m.pin && m.pin($e.$.scrollContainer, u))
            }

            function $() {
                e.autofocus && $e.input.focus()
            }

            function C() {
                var n = parseInt(e.delay, 10) || 0;
                p.$observe("disabled", function(e) {
                    be.isDisabled = d.parseAttributeBoolean(e, !1)
                }), p.$observe("required", function(e) {
                    be.isRequired = d.parseAttributeBoolean(e, !1)
                }), p.$observe("readonly", function(e) {
                    be.isReadonly = d.parseAttributeBoolean(e, !1)
                }), e.$watch("searchText", n ? d.debounce(L, n) : L), e.$watch("selectedItem", N), t.element(l).on("resize", v), e.$on("$destroy", y)
            }

            function y() {
                if (be.hidden || d.enableScrolling(), t.element(l).off("resize", v), $e) {
                    var e = ["ul", "scroller", "scrollContainer", "input"];
                    t.forEach(e, function(e) {
                        $e.$[e].remove()
                    })
                }
            }

            function M() {
                $e = {
                    main: o[0],
                    scrollContainer: o[0].querySelector(".md-virtual-repeat-container"),
                    scroller: o[0].querySelector(".md-virtual-repeat-scroller"),
                    ul: o.find("ul")[0],
                    input: o.find("input")[0],
                    wrap: o.find("md-autocomplete-wrap")[0],
                    root: document.body
                }, $e.li = $e.ul.getElementsByTagName("li"), $e.snap = T(), $e.$ = A($e), _e = $e.$.input.controller("ngModel")
            }

            function T() {
                for (var e = o; e.length; e = e.parent())
                    if (t.isDefined(e.attr("md-autocomplete-snap"))) return e[0];
                return $e.wrap
            }

            function A(e) {
                var n = {};
                for (var o in e) e.hasOwnProperty(o) && (n[o] = t.element(e[o]));
                return n
            }

            function w(n, o) {
                !n && o ? (v(), $e && d.nextTick(function() {
                    d.disableScrollAround($e.ul), ke = k(t.element($e.wrap))
                }, !1, e)) : n && !o && d.nextTick(function() {
                    d.enableScrolling(), ke && (ke(), ke = null)
                }, !1, e)
            }

            function k(e) {
                function t(e) {
                    e.preventDefault()
                }
                return e.on("wheel", t), e.on("touchmove", t),
                    function() {
                        e.off("wheel", t), e.off("touchmove", t)
                    }
            }

            function _() {
                ye = !0
            }

            function x() {
                Te || be.hidden || $e.input.focus(), ye = !1, be.hidden = Y()
            }

            function S() {
                $e.input.focus()
            }

            function N(t, n) {
                b(), t ? q(t).then(function(o) {
                    e.searchText = o, I(t, n)
                }) : n && e.searchText && q(n).then(function(t) {
                    t.toString().toLowerCase() === e.searchText.toLowerCase() && (e.searchText = "")
                }), t !== n && D()
            }

            function D() {
                t.isFunction(e.itemChange) && e.itemChange(z(e.selectedItem))
            }

            function H() {
                t.isFunction(e.textChange) && e.textChange()
            }

            function I(e, t) {
                Me.forEach(function(n) {
                    n(e, t)
                })
            }

            function O(e) {
                Me.indexOf(e) == -1 && Me.push(e)
            }

            function R(e) {
                var t = Me.indexOf(e);
                t != -1 && Me.splice(t, 1)
            }

            function L(t, n) {
                be.index = W(), t !== n && (b(), q(e.selectedItem).then(function(o) {
                    t !== o && (e.selectedItem = null, t !== n && H(), te() ? he() : (be.matches = [], V(!1), se()))
                }))
            }

            function P() {
                Te = !1, ye || (be.hidden = Y())
            }

            function F(e) {
                e && (ye = !1, Te = !1), $e.input.blur()
            }

            function B(n) {
                Te = !0, t.isString(e.searchText) || (e.searchText = ""), be.hidden = Y(), be.hidden || he()
            }

            function U(t) {
                switch (t.keyCode) {
                    case s.KEY_CODE.DOWN_ARROW:
                        if (be.loading) return;
                        t.stopPropagation(), t.preventDefault(), be.index = Math.min(be.index + 1, be.matches.length - 1), le(), se();
                        break;
                    case s.KEY_CODE.UP_ARROW:
                        if (be.loading) return;
                        t.stopPropagation(), t.preventDefault(), be.index = be.index < 0 ? be.matches.length - 1 : Math.max(0, be.index - 1), le(), se();
                        break;
                    case s.KEY_CODE.TAB:
                        if (x(), be.hidden || be.loading || be.index < 0 || be.matches.length < 1) return;
                        oe(be.index);
                        break;
                    case s.KEY_CODE.ENTER:
                        if (be.hidden || be.loading || be.index < 0 || be.matches.length < 1) return;
                        if (Z()) return;
                        t.stopPropagation(), t.preventDefault(), oe(be.index);
                        break;
                    case s.KEY_CODE.ESCAPE:
                        if (t.preventDefault(), !K()) return;
                        t.stopPropagation(), re(), e.searchText && G("clear") && ae(), be.hidden = !0, G("blur") && F(!0)
                }
            }

            function j() {
                return t.isNumber(e.minLength) ? e.minLength : 1
            }

            function q(n) {
                function o(t) {
                    return t && e.itemText ? e.itemText(z(t)) : null
                }
                return h.when(o(n) || n).then(function(e) {
                    return e && !t.isString(e) && f.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."), e
                })
            }

            function z(e) {
                if (!e) return n;
                var t = {};
                return be.itemName && (t[be.itemName] = e), t
            }

            function W() {
                return e.autoselect ? 0 : -1
            }

            function V(e) {
                be.loading != e && (be.loading = e), be.hidden = Y()
            }

            function Y() {
                return !(!be.loading || Q()) || (!!Z() || (!Te || !X()))
            }

            function K() {
                return G("blur") || !be.hidden || be.loading || G("clear") && e.searchText
            }

            function G(t) {
                return !e.escapeOptions || e.escapeOptions.toLowerCase().indexOf(t) !== -1
            }

            function X() {
                return te() && Q() || pe()
            }

            function Q() {
                return !!be.matches.length
            }

            function Z() {
                return !!be.scope.selectedItem
            }

            function J() {
                return be.loading && !Z()
            }

            function ee() {
                return q(be.matches[be.index])
            }

            function te() {
                return (e.searchText || "").length >= j()
            }

            function ne(e, t, n) {
                Object.defineProperty(be, e, {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        var o = n;
                        n = e, t(e, o)
                    }
                })
            }

            function oe(t) {
                d.nextTick(function() {
                    q(be.matches[t]).then(function(e) {
                        var t = $e.$.input.controller("ngModel");
                        t.$setViewValue(e), t.$render()
                    })["finally"](function() {
                        e.selectedItem = be.matches[t], V(!1)
                    })
                }, !1)
            }

            function ie() {
                re(), ae()
            }

            function re() {
                be.index = 0, be.matches = []
            }

            function ae() {
                V(!0), e.searchText = "";
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("change", !0, !0, {
                    value: ""
                }), $e.input.dispatchEvent(t), $e.input.blur(), e.searchText = "", $e.input.focus()
            }

            function de(n) {
                function o(t) {
                    t && (t = h.when(t), we++, V(!0), d.nextTick(function() {
                        t.then(i)["finally"](function() {
                            0 === --we && V(!1)
                        })
                    }, !0, e))
                }

                function i(t) {
                    Ce[a] = t, (n || "") === (e.searchText || "") && fe(t)
                }
                var r = e.$parent.$eval(Ee),
                    a = n.toLowerCase(),
                    s = t.isArray(r),
                    c = !!r.then;
                s ? i(r) : c && o(r)
            }

            function se() {
                ee().then(function(e) {
                    be.messages = [ce(), e]
                })
            }

            function ce() {
                if (Ae === be.matches.length) return "";
                switch (Ae = be.matches.length, be.matches.length) {
                    case 0:
                        return "There are no matches available.";
                    case 1:
                        return "There is 1 match available.";
                    default:
                        return "There are " + be.matches.length + " matches available."
                }
            }

            function le() {
                if ($e.li[0]) {
                    var e = $e.li[0].offsetHeight,
                        t = e * be.index,
                        n = t + e,
                        o = $e.scroller.clientHeight,
                        i = $e.scroller.scrollTop;
                    t < i ? ue(t) : n > i + o && ue(n - o)
                }
            }

            function me() {
                return 0 !== we
            }

            function ue(e) {
                $e.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)
            }

            function pe() {
                var e = (be.scope.searchText || "").length;
                return be.hasNotFound && !Q() && (!be.loading || me()) && e >= j() && (Te || ye) && !Z()
            }

            function he() {
                var t = e.searchText || "",
                    n = t.toLowerCase();
                !e.noCache && Ce[n] ? fe(Ce[n]) : de(t), be.hidden = Y()
            }

            function fe(t) {
                be.matches = t, be.hidden = Y(), be.loading && V(!1), e.selectOnMatch && ge(), se(), v()
            }

            function ge() {
                var t = e.searchText,
                    n = be.matches,
                    o = n[0];
                1 === n.length && q(o).then(function(n) {
                    var o = t == n;
                    e.matchInsensitive && !o && (o = t.toLowerCase() == n.toLowerCase()), o && oe(0)
                })
            }
            var be = this,
                ve = e.itemsExpr.split(/ in /i),
                Ee = ve[1],
                $e = null,
                Ce = {},
                ye = !1,
                Me = [],
                Te = !1,
                Ae = 0,
                we = 0,
                ke = null,
                _e = null;
            return ne("hidden", w, !0), be.scope = e, be.parent = e.$parent, be.itemName = ve[0], be.matches = [], be.loading = !1, be.hidden = !0, be.index = null, be.messages = [], be.id = d.nextUid(), be.isDisabled = null, be.isRequired = null, be.isReadonly = null, be.hasNotFound = !1, be.keydown = U, be.blur = P, be.focus = B, be.clear = ie, be.select = oe, be.listEnter = _, be.listLeave = x, be.mouseUp = S, be.getCurrentDisplayValue = ee, be.registerSelectedItemWatcher = O, be.unregisterSelectedItemWatcher = R, be.notFoundVisible = pe, be.loadingIsVisible = J, be.positionDropdown = v, g()
        }
        t.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e);
        var o = 41,
            i = 5.5 * o,
            r = 8,
            a = 2;
        e.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q", "$log"]
    }(),
    function() {
        function e(e) {
            return {
                controller: "MdAutocompleteCtrl",
                controllerAs: "$mdAutocompleteCtrl",
                scope: {
                    inputName: "@mdInputName",
                    inputMinlength: "@mdInputMinlength",
                    inputMaxlength: "@mdInputMaxlength",
                    searchText: "=?mdSearchText",
                    selectedItem: "=?mdSelectedItem",
                    itemsExpr: "@mdItems",
                    itemText: "&mdItemText",
                    placeholder: "@placeholder",
                    noCache: "=?mdNoCache",
                    requireMatch: "=?mdRequireMatch",
                    selectOnMatch: "=?mdSelectOnMatch",
                    matchInsensitive: "=?mdMatchCaseInsensitive",
                    itemChange: "&?mdSelectedItemChange",
                    textChange: "&?mdSearchTextChange",
                    minLength: "=?mdMinLength",
                    delay: "=?mdDelay",
                    autofocus: "=?mdAutofocus",
                    floatingLabel: "@?mdFloatingLabel",
                    autoselect: "=?mdAutoselect",
                    menuClass: "@?mdMenuClass",
                    inputId: "@?mdInputId",
                    escapeOptions: "@?mdEscapeOptions"
                },
                link: function(e, t, n, o) {
                    o.hasNotFound = !!t.attr("md-has-not-found")
                },
                template: function(t, n) {
                    function o() {
                        var e = t.find("md-item-template").detach(),
                            n = e.length ? e.html() : t.html();
                        return e.length || t.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>"
                    }

                    function i() {
                        var e = t.find("md-not-found").detach(),
                            n = e.length ? e.html() : "";
                        return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : ""
                    }

                    function r() {
                        return n.mdFloatingLabel ? '            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != c ? 'tabindex="' + c + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ' + (null != n.mdNoAsterisk ? 'md-no-asterisk="' + n.mdNoAsterisk + '"' : "") + '                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  ' + (null != n.mdSelectOnFocus ? 'md-select-on-focus=""' : "") + '                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + s + "</div>            </md-input-container>" : '            <input type="search"                ' + (null != c ? 'tabindex="' + c + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                ' + (null != n.mdSelectOnFocus ? 'md-select-on-focus=""' : "") + '                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear($event)">              <md-icon md-svg-src="' + e.mdClose + '"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '
                    }
                    var a = i(),
                        d = o(),
                        s = t.html(),
                        c = n.tabindex;
                    return a && t.attr("md-has-not-found", !0), t.attr("tabindex", "-1"), "        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          " + r() + '          <md-progress-linear              class="' + (n.mdFloatingLabel ? "md-inline" : "") + '"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + d + "                  </li>" + a + '            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'
                }
            }
        }
        t.module("material.components.autocomplete").directive("mdAutocomplete", e), e.$inject = ["$$mdSvgRegistry"]
    }(),
    function() {
        function e(e, t) {
            function n(e, n, o) {
                return function(e, n, i) {
                    function r(n, o) {
                        s[o] = e[n], e.$watch(n, function(e) {
                            t.nextTick(function() {
                                s[o] = e
                            })
                        })
                    }

                    function a() {
                        var t = !1,
                            n = !1;
                        e.$watch(function() {
                            n || t || (t = !0, e.$$postDigest(function() {
                                n || s.$digest(), t = n = !1
                            }))
                        }), s.$watch(function() {
                            n = !0
                        })
                    }
                    var d = e.$mdAutocompleteCtrl,
                        s = d.parent.$new(),
                        c = d.itemName;
                    r("$index", "$index"), r("item", c), a(), o(s, function(e) {
                        n.after(e)
                    })
                }
            }
            return {
                restrict: "AE",
                compile: n,
                terminal: !0,
                transclude: "element"
            }
        }
        t.module("material.components.autocomplete").directive("mdAutocompleteParentScope", e), e.$inject = ["$compile", "$mdUtil"]
    }(),
    function() {
        function e(e, n, o) {
            function i(i, r) {
                var d = null,
                    s = null,
                    c = o.mdHighlightFlags || "",
                    l = e.$watch(function(e) {
                        return {
                            term: i(e),
                            unsafeText: r(e)
                        }
                    }, function(e, o) {
                        null !== d && e.unsafeText === o.unsafeText || (d = t.element("<div>").text(e.unsafeText).html()), null !== s && e.term === o.term || (s = a(e.term, c)), n.html(d.replace(s, '<span class="highlight">$&</span>'))
                    }, !0);
                n.on("$destroy", l)
            }

            function r(e) {
                return e && e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&")
            }

            function a(e, t) {
                var n = "",
                    o = "";
                return t.indexOf("^") >= 0 && (n = "^"), t.indexOf("$") >= 0 && (o = "$"), new RegExp(n + r(e) + o, t.replace(/[\$\^]/g, ""))
            }
            this.init = i
        }
        t.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$attrs"]
    }(),
    function() {
        function e(e, t) {
            return {
                terminal: !0,
                controller: "MdHighlightCtrl",
                compile: function(n, o) {
                    var i = t(o.mdHighlightText),
                        r = e(n.html());
                    return function(e, t, n, o) {
                        o.init(i, r)
                    }
                }
            }
        }
        t.module("material.components.autocomplete").directive("mdHighlightText", e), e.$inject = ["$interpolate", "$parse"]
    }(),
    function() {
        function o(e, t, o, i, r) {
            this.$scope = e, this.$element = t, this.$mdConstant = o, this.$timeout = i, this.$mdUtil = r, this.isEditting = !1, this.parentController = n, this.enableChipEdit = !1
        }
        t.module("material.components.chips").controller("MdChipCtrl", o), o.$inject = ["$scope", "$element", "$mdConstant", "$timeout", "$mdUtil"], o.prototype.init = function(e) {
            this.parentController = e, this.enableChipEdit = this.parentController.enableChipEdit, this.enableChipEdit && (this.$element.on("keydown", this.chipKeyDown.bind(this)), this.$element.on("mousedown", this.chipMouseDown.bind(this)), this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))
        }, o.prototype.getChipContent = function() {
            var e = this.$element[0].getElementsByClassName("md-chip-content");
            return t.element(e[0])
        }, o.prototype.getContentElement = function() {
            return t.element(this.getChipContent().children()[0])
        }, o.prototype.getChipIndex = function() {
            return parseInt(this.$element.attr("index"))
        }, o.prototype.goOutOfEditMode = function() {
            if (this.isEditting) {
                this.isEditting = !1, this.$element.removeClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "false";
                var e = this.getChipIndex(),
                    t = this.getContentElement().text();
                t ? (this.parentController.updateChipContents(e, this.getContentElement().text()), this.$mdUtil.nextTick(function() {
                    this.parentController.selectedChip === e && this.parentController.focusChip(e)
                }.bind(this))) : this.parentController.removeChipAndFocusInput(e)
            }
        }, o.prototype.selectNodeContents = function(t) {
            var n, o;
            document.body.createTextRange ? (n = document.body.createTextRange(), n.moveToElementText(t), n.select()) : e.getSelection && (o = e.getSelection(), n = document.createRange(), n.selectNodeContents(t), o.removeAllRanges(), o.addRange(n))
        }, o.prototype.goInEditMode = function() {
            this.isEditting = !0, this.$element.addClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "true", this.getChipContent().on("blur", function() {
                this.goOutOfEditMode()
            }.bind(this)), this.selectNodeContents(this.getChipContent()[0])
        }, o.prototype.chipKeyDown = function(e) {
            this.isEditting || e.keyCode !== this.$mdConstant.KEY_CODE.ENTER && e.keyCode !== this.$mdConstant.KEY_CODE.SPACE ? this.isEditting && e.keyCode === this.$mdConstant.KEY_CODE.ENTER && (e.preventDefault(), this.goOutOfEditMode()) : (e.preventDefault(), this.goInEditMode())
        }, o.prototype.chipMouseDown = function() {
            this.getChipIndex() == this.parentController.selectedChip && this.enableChipEdit && !this.isEditting && this.goInEditMode()
        }
    }(),
    function() {
        function e(e, o) {
            function i(n, i) {
                return n.append(o.processTemplate(r)),
                    function(n, o, i, r) {
                        var a = r.shift(),
                            d = r.shift();
                        e(o), a && (d.init(a), t.element(o[0].querySelector(".md-chip-content")).on("blur", function() {
                            a.resetSelectedChip(), a.$scope.$applyAsync()
                        }))
                    }
            }
            var r = o.processTemplate(n);
            return {
                restrict: "E",
                require: ["^?mdChips", "mdChip"],
                compile: i,
                controller: "MdChipCtrl"
            }
        }
        t.module("material.components.chips").directive("mdChip", e);
        var n = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';
        e.$inject = ["$mdTheming", "$mdUtil"]
    }(),
    function() {
        function e(e) {
            function t(t, n, o, i) {
                n.on("click", function(e) {
                    t.$apply(function() {
                        i.removeChip(t.$$replacedScope.$index)
                    })
                }), e(function() {
                    n.attr({
                        tabindex: -1,
                        "aria-hidden": !0
                    }), n.find("button").attr("tabindex", "-1")
                })
            }
            return {
                restrict: "A",
                require: "^mdChips",
                scope: !1,
                link: t
            }
        }
        t.module("material.components.chips").directive("mdChipRemove", e), e.$inject = ["$timeout"]
    }(),
    function() {
        function e(e) {
            function t(t, n, o) {
                var i = t.$parent.$mdChipsCtrl,
                    r = i.parent.$new(!1, i.parent);
                r.$$replacedScope = t, r.$chip = t.$chip, r.$index = t.$index, r.$mdChipsCtrl = i;
                var a = i.$scope.$eval(o.mdChipTransclude);
                n.html(a), e(n.contents())(r)
            }
            return {
                restrict: "EA",
                terminal: !0,
                link: t,
                scope: !1
            }
        }
        t.module("material.components.chips").directive("mdChipTransclude", e), e.$inject = ["$compile"]
    }(),
    function() {
        function e(e, t, n, o, i, r) {
            this.$timeout = i, this.$mdConstant = t, this.$scope = e, this.parent = e.$parent, this.$log = n, this.$element = o, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.hasAutocomplete = !1, this.enableChipEdit = r.parseAttributeBoolean(this.mdEnableChipEdit), this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useTransformChip = !1, this.useOnAdd = !1, this.useOnRemove = !1
        }
        t.module("material.components.chips").controller("MdChipsCtrl", e), e.$inject = ["$scope", "$mdConstant", "$log", "$element", "$timeout", "$mdUtil"], e.prototype.inputKeydown = function(e) {
            var t = this.getChipBuffer();
            if (!(this.hasAutocomplete && e.isDefaultPrevented && e.isDefaultPrevented())) {
                if (e.keyCode === this.$mdConstant.KEY_CODE.BACKSPACE) {
                    if (0 !== this.getCursorPosition(e.target)) return;
                    return e.preventDefault(), e.stopPropagation(), void(this.items.length && this.selectAndFocusChipSafe(this.items.length - 1))
                }
                if ((!this.separatorKeys || this.separatorKeys.length < 1) && (this.separatorKeys = [this.$mdConstant.KEY_CODE.ENTER]), this.separatorKeys.indexOf(e.keyCode) !== -1) {
                    if (this.hasAutocomplete && this.requireMatch || !t) return;
                    if (e.preventDefault(), this.hasMaxChipsReached()) return;
                    this.appendChip(t.trim()), this.resetChipBuffer()
                }
            }
        }, e.prototype.getCursorPosition = function(e) {
            try {
                if (e.selectionStart === e.selectionEnd) return e.selectionStart
            } catch (t) {
                if (!e.value) return 0
            }
        }, e.prototype.updateChipContents = function(e, t) {
            e >= 0 && e < this.items.length && (this.items[e] = t, this.ngModelCtrl.$setDirty())
        }, e.prototype.isEditingChip = function() {
            return !!this.$element[0].getElementsByClassName("_md-chip-editing").length
        }, e.prototype.isRemovable = function() {
            return !!this.ngModelCtrl && (this.readonly ? this.removable : !t.isDefined(this.removable) || this.removable)
        }, e.prototype.chipKeydown = function(e) {
            if (!this.getChipBuffer() && !this.isEditingChip()) switch (e.keyCode) {
                case this.$mdConstant.KEY_CODE.BACKSPACE:
                case this.$mdConstant.KEY_CODE.DELETE:
                    if (this.selectedChip < 0) return;
                    if (e.preventDefault(), !this.isRemovable()) return;
                    this.removeAndSelectAdjacentChip(this.selectedChip);
                    break;
                case this.$mdConstant.KEY_CODE.LEFT_ARROW:
                    e.preventDefault(), this.selectedChip < 0 && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);
                    break;
                case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
                    e.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);
                    break;
                case this.$mdConstant.KEY_CODE.ESCAPE:
                case this.$mdConstant.KEY_CODE.TAB:
                    if (this.selectedChip < 0) return;
                    e.preventDefault(), this.onFocus()
            }
        }, e.prototype.getPlaceholder = function() {
            var e = this.items && this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder);
            return e ? this.secondaryPlaceholder : this.placeholder
        }, e.prototype.removeAndSelectAdjacentChip = function(e) {
            var n = this.getAdjacentChipIndex(e);
            this.removeChip(e), this.$timeout(t.bind(this, function() {
                this.selectAndFocusChipSafe(n)
            }))
        }, e.prototype.resetSelectedChip = function() {
            this.selectedChip = -1
        }, e.prototype.getAdjacentChipIndex = function(e) {
            var t = this.items.length - 1;
            return 0 == t ? -1 : e == t ? e - 1 : e
        }, e.prototype.appendChip = function(e) {
            if (this.useTransformChip && this.transformChip) {
                var n = this.transformChip({
                    $chip: e
                });
                t.isDefined(n) && (e = n)
            }
            if (t.isObject(e)) {
                var o = this.items.some(function(n) {
                    return t.equals(e, n)
                });
                if (o) return
            }
            if (!(null == e || this.items.indexOf(e) + 1)) {
                var i = this.items.push(e);
                this.ngModelCtrl.$setDirty(), this.validateModel(), this.useOnAdd && this.onAdd && this.onAdd({
                    $chip: e,
                    $index: i
                })
            }
        }, e.prototype.useTransformChipExpression = function() {
            this.useTransformChip = !0
        }, e.prototype.useOnAddExpression = function() {
            this.useOnAdd = !0
        }, e.prototype.useOnRemoveExpression = function() {
            this.useOnRemove = !0
        }, e.prototype.useOnSelectExpression = function() {
            this.useOnSelect = !0
        }, e.prototype.getChipBuffer = function() {
            return this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer
        }, e.prototype.resetChipBuffer = function() {
            this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = ""
        }, e.prototype.hasMaxChipsReached = function() {
            return t.isString(this.maxChips) && (this.maxChips = parseInt(this.maxChips, 10) || 0), this.maxChips > 0 && this.items.length >= this.maxChips
        }, e.prototype.validateModel = function() {
            this.ngModelCtrl.$setValidity("md-max-chips", !this.hasMaxChipsReached())
        }, e.prototype.removeChip = function(e) {
            var t = this.items.splice(e, 1);
            this.ngModelCtrl.$setDirty(), this.validateModel(), t && t.length && this.useOnRemove && this.onRemove && this.onRemove({
                $chip: t[0],
                $index: e
            })
        }, e.prototype.removeChipAndFocusInput = function(e) {
            this.removeChip(e), this.onFocus()
        }, e.prototype.selectAndFocusChipSafe = function(e) {
            return this.items.length ? e === this.items.length ? this.onFocus() : (e = Math.max(e, 0), e = Math.min(e, this.items.length - 1), this.selectChip(e), void this.focusChip(e)) : (this.selectChip(-1), void this.onFocus())
        }, e.prototype.selectChip = function(e) {
            e >= -1 && e <= this.items.length ? (this.selectedChip = e, this.useOnSelect && this.onSelect && this.onSelect({
                $chip: this.items[this.selectedChip]
            })) : this.$log.warn("Selected Chip index out of bounds; ignoring.")
        }, e.prototype.selectAndFocusChip = function(e) {
            this.selectChip(e), e != -1 && this.focusChip(e)
        }, e.prototype.focusChip = function(e) {
            this.$element[0].querySelector('md-chip[index="' + e + '"] .md-chip-content').focus()
        }, e.prototype.configureNgModel = function(e) {
            this.ngModelCtrl = e;
            var t = this;
            e.$render = function() {
                t.items = t.ngModelCtrl.$viewValue
            }
        }, e.prototype.onFocus = function() {
            var e = this.$element[0].querySelector("input");
            e && e.focus(), this.resetSelectedChip()
        }, e.prototype.onInputFocus = function() {
            this.inputHasFocus = !0, this.resetSelectedChip()
        }, e.prototype.onInputBlur = function() {
            this.inputHasFocus = !1
        }, e.prototype.configureUserInput = function(e) {
            this.userInputElement = e;
            var n = e.controller("ngModel");
            n != this.ngModelCtrl && (this.userInputNgModelCtrl = n);
            var o = this.$scope,
                i = this,
                r = function(e, n) {
                    o.$evalAsync(t.bind(i, n, e))
                };
            e.attr({
                tabindex: 0
            }).on("keydown", function(e) {
                r(e, i.inputKeydown)
            }).on("focus", function(e) {
                r(e, i.onInputFocus)
            }).on("blur", function(e) {
                r(e, i.onInputBlur)
            })
        }, e.prototype.configureAutocomplete = function(e) {
            e && (this.hasAutocomplete = !0, e.registerSelectedItemWatcher(t.bind(this, function(e) {
                if (e) {
                    if (this.hasMaxChipsReached()) return;
                    this.appendChip(e), this.resetChipBuffer()
                }
            })), this.$element.find("input").on("focus", t.bind(this, this.onInputFocus)).on("blur", t.bind(this, this.onInputBlur)))
        }, e.prototype.hasFocus = function() {
            return this.inputHasFocus || this.selectedChip >= 0
        }
    }(),
    function() {
        function e(e, t, a, d, s, c) {
            function l(n, o) {
                function i(e) {
                    if (o.ngModel) {
                        var t = r[0].querySelector(e);
                        return t && t.outerHTML
                    }
                }
                var r = o.$mdUserTemplate;
                o.$mdUserTemplate = null;
                var l = i("md-chips>md-chip-template"),
                    m = t.prefixer().buildList("md-chip-remove").map(function(e) {
                        return "md-chips>*[" + e + "]"
                    }).join(","),
                    p = i(m) || u.remove,
                    h = l || u["default"],
                    f = i("md-chips>md-autocomplete") || i("md-chips>input") || u.input,
                    g = r.find("md-chip");
                return r[0].querySelector("md-chip-template>*[md-chip-remove]") && d.warn("invalid placement of md-chip-remove within md-chip-template."),
                    function(n, i, r, d) {
                        t.initOptionalProperties(n, o), e(i);
                        var m = d[0];
                        if (l && (m.enableChipEdit = !1), m.chipContentsTemplate = h, m.chipRemoveTemplate = p, m.chipInputTemplate = f, m.mdCloseIcon = c.mdClose, i.attr({
                                "aria-hidden": !0,
                                tabindex: -1
                            }).on("focus", function() {
                                m.onFocus()
                            }), o.ngModel && (m.configureNgModel(i.controller("ngModel")), r.mdTransformChip && m.useTransformChipExpression(), r.mdOnAppend && m.useOnAppendExpression(), r.mdOnAdd && m.useOnAddExpression(), r.mdOnRemove && m.useOnRemoveExpression(), r.mdOnSelect && m.useOnSelectExpression(), f != u.input && n.$watch("$mdChipsCtrl.readonly", function(e) {
                                e || t.nextTick(function() {
                                    0 === f.indexOf("<md-autocomplete") && m.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")), m.configureUserInput(i.find("input"))
                                })
                            }), t.nextTick(function() {
                                var e = i.find("input");
                                e && e.toggleClass("md-input", !0)
                            })), g.length > 0) {
                            var b = a(g.clone())(n.$parent);
                            s(function() {
                                i.find("md-chips-wrap").prepend(b)
                            })
                        }
                    }
            }

            function m() {
                return {
                    chips: t.processTemplate(n),
                    input: t.processTemplate(o),
                    "default": t.processTemplate(i),
                    remove: t.processTemplate(r)
                }
            }
            var u = m();
            return {
                template: function(e, t) {
                    return t.$mdUserTemplate = e.clone(), u.chips
                },
                require: ["mdChips"],
                restrict: "E",
                controller: "MdChipsCtrl",
                controllerAs: "$mdChipsCtrl",
                bindToController: !0,
                compile: l,
                scope: {
                    readonly: "=readonly",
                    removable: "=mdRemovable",
                    placeholder: "@",
                    mdEnableChipEdit: "@",
                    secondaryPlaceholder: "@",
                    maxChips: "@mdMaxChips",
                    transformChip: "&mdTransformChip",
                    onAppend: "&mdOnAppend",
                    onAdd: "&mdOnAdd",
                    onRemove: "&mdOnRemove",
                    onSelect: "&mdOnSelect",
                    deleteHint: "@",
                    deleteButtonLabel: "@",
                    separatorKeys: "=?mdSeparatorKeys",
                    requireMatch: "=?mdRequireMatch"
                }
            }
        }
        t.module("material.components.chips").directive("mdChips", e);
        var n = '      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',
            o = '        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',
            i = "      <span>{{$chip}}</span>",
            r = '      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';
        e.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout", "$$mdSvgRegistry"]
    }(),
    function() {
        function e() {
            this.selectedItem = null, this.searchText = ""
        }
        t.module("material.components.chips").controller("MdContactChipsCtrl", e), e.prototype.queryContact = function(e) {
            var n = this.contactQuery({
                $query: e
            });
            return this.filterSelected ? n.filter(t.bind(this, this.filterSelectedContacts)) : n
        }, e.prototype.itemName = function(e) {
            return e[this.contactName]
        }, e.prototype.filterSelectedContacts = function(e) {
            return this.contacts.indexOf(e) == -1
        }
    }(),
    function() {
        function e(e, t) {
            function o(n, o) {
                return function(n, i, r, a) {
                    t.initOptionalProperties(n, o), e(i), i.attr("tabindex", "-1")
                }
            }
            return {
                template: function(e, t) {
                    return n
                },
                restrict: "E",
                controller: "MdContactChipsCtrl",
                controllerAs: "$mdContactChipsCtrl",
                bindToController: !0,
                compile: o,
                scope: {
                    contactQuery: "&mdContacts",
                    placeholder: "@",
                    secondaryPlaceholder: "@",
                    contactName: "@mdContactName",
                    contactImage: "@mdContactImage",
                    contactEmail: "@mdContactEmail",
                    contacts: "=ngModel",
                    requireMatch: "=?mdRequireMatch",
                    highlightFlags: "@?mdHighlightFlags"
                }
            }
        }
        t.module("material.components.chips").directive("mdContactChips", e);
        var n = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
        e.$inject = ["$mdTheming", "$mdUtil"]
    }(),
    function() {
        ! function() {
            function e() {
                return {
                    template: function(e, t) {
                        var n = t.hasOwnProperty("ngIf") ? "" : 'ng-if="calendarCtrl.isInitialized"',
                            o = '<div ng-switch="calendarCtrl.currentView" ' + n + '><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';
                        return o
                    },
                    scope: {
                        minDate: "=mdMinDate",
                        maxDate: "=mdMaxDate",
                        dateFilter: "=mdDateFilter",
                        _currentView: "@mdCurrentView"
                    },
                    require: ["ngModel", "mdCalendar"],
                    controller: n,
                    controllerAs: "calendarCtrl",
                    bindToController: !0,
                    link: function(e, t, n, o) {
                        var i = o[0],
                            r = o[1];
                        r.configureNgModel(i)
                    }
                }
            }

            function n(e, n, o, r, a, d, s, c) {
                d(e), this.$element = e, this.$scope = n, this.dateUtil = o, this.$mdUtil = r, this.keyCode = a.KEY_CODE, this.$$rAF = s, this.today = this.dateUtil.createDateAtMidnight(), this.ngModelCtrl = null, this.currentView = this._currentView || "month", this.SELECTED_DATE_CLASS = "md-calendar-selected-date", this.TODAY_CLASS = "md-calendar-date-today", this.FOCUSED_DATE_CLASS = "md-focus", this.id = i++, this.displayDate = null, this.selectedDate = null, this.isInitialized = !1, this.width = 0, this.scrollbarWidth = 0, c.tabindex || e.attr("tabindex", "-1"), e.on("keydown", t.bind(this, this.handleKeyEvent))
            }
            t.module("material.components.datepicker").directive("mdCalendar", e);
            var o = 340,
                i = 0;
            n.$inject = ["$element", "$scope", "$$mdDateUtil", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$attrs"], n.prototype.configureNgModel = function(e) {
                var t = this;
                t.ngModelCtrl = e, t.$mdUtil.nextTick(function() {
                    t.isInitialized = !0
                }), e.$render = function() {
                    var e = this.$viewValue;
                    t.$scope.$broadcast("md-calendar-parent-changed", e), t.selectedDate || (t.selectedDate = e), t.displayDate || (t.displayDate = t.selectedDate || t.today)
                }
            }, n.prototype.setNgModelValue = function(e) {
                var t = this.dateUtil.createDateAtMidnight(e);
                return this.focus(t), this.$scope.$emit("md-calendar-change", t), this.ngModelCtrl.$setViewValue(t), this.ngModelCtrl.$render(), t
            }, n.prototype.setCurrentView = function(e, n) {
                var o = this;
                o.$mdUtil.nextTick(function() {
                    o.currentView = e, n && (o.displayDate = t.isDate(n) ? n : new Date(n))
                })
            }, n.prototype.focus = function(e) {
                if (this.dateUtil.isValidDate(e)) {
                    var t = this.$element[0].querySelector(".md-focus");
                    t && t.classList.remove(this.FOCUSED_DATE_CLASS);
                    var n = this.getDateId(e, this.currentView),
                        o = document.getElementById(n);
                    o && (o.classList.add(this.FOCUSED_DATE_CLASS), o.focus(), this.displayDate = e)
                } else {
                    var i = this.$element[0].querySelector("[ng-switch]");
                    i && i.focus()
                }
            }, n.prototype.getActionFromKeyEvent = function(e) {
                var t = this.keyCode;
                switch (e.which) {
                    case t.ENTER:
                        return "select";
                    case t.RIGHT_ARROW:
                        return "move-right";
                    case t.LEFT_ARROW:
                        return "move-left";
                    case t.DOWN_ARROW:
                        return e.metaKey ? "move-page-down" : "move-row-down";
                    case t.UP_ARROW:
                        return e.metaKey ? "move-page-up" : "move-row-up";
                    case t.PAGE_DOWN:
                        return "move-page-down";
                    case t.PAGE_UP:
                        return "move-page-up";
                    case t.HOME:
                        return "start";
                    case t.END:
                        return "end";
                    default:
                        return null
                }
            }, n.prototype.handleKeyEvent = function(e) {
                var t = this;
                this.$scope.$apply(function() {
                    if (e.which == t.keyCode.ESCAPE || e.which == t.keyCode.TAB) return t.$scope.$emit("md-calendar-close"), void(e.which == t.keyCode.TAB && e.preventDefault());
                    var n = t.getActionFromKeyEvent(e);
                    n && (e.preventDefault(), e.stopPropagation(), t.$scope.$broadcast("md-calendar-parent-action", n))
                })
            }, n.prototype.hideVerticalScrollbar = function(e) {
                function t() {
                    var t = n.width || o,
                        i = n.scrollbarWidth,
                        a = e.calendarScroller;
                    r.style.width = t + "px", a.style.width = t + i + "px", a.style.paddingRight = i + "px"
                }
                var n = this,
                    i = e.$element[0],
                    r = i.querySelector(".md-calendar-scroll-mask");
                n.width > 0 ? t() : n.$$rAF(function() {
                    var o = e.calendarScroller;
                    n.scrollbarWidth = o.offsetWidth - o.clientWidth, n.width = i.querySelector("table").offsetWidth, t()
                })
            }, n.prototype.getDateId = function(e, t) {
                if (!t) throw new Error("A namespace for the date id has to be specified.");
                return ["md", this.id, t, e.getFullYear(), e.getMonth(), e.getDate()].join("-")
            }, n.prototype.updateVirtualRepeat = function() {
                var e = this.$scope,
                    t = e.$on("$md-resize-enable", function() {
                        e.$$phase || e.$apply(), t()
                    })
            }
        }()
    }(),
    function() {
        ! function() {
            function e() {
                return {
                    template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (i - o) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="' + o + '"></tbody></table></md-virtual-repeat-container></div>',
                    require: ["^^mdCalendar", "mdCalendarMonth"],
                    controller: n,
                    controllerAs: "monthCtrl",
                    bindToController: !0,
                    link: function(e, t, n, o) {
                        var i = o[0],
                            r = o[1];
                        r.initialize(i)
                    }
                }
            }

            function n(e, t, n, o, i, r) {
                this.$element = e, this.$scope = t, this.$animate = n, this.$q = o, this.dateUtil = i, this.dateLocale = r, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.firstRenderableDate = null, this.isInitialized = !1, this.isMonthTransitionInProgress = !1;
                var a = this;
                this.cellClickHandler = function() {
                    var e = i.getTimestampFromNode(this);
                    a.$scope.$apply(function() {
                        a.calendarCtrl.setNgModelValue(e)
                    })
                }, this.headerClickHandler = function() {
                    a.calendarCtrl.setCurrentView("year", i.getTimestampFromNode(this))
                }
            }
            t.module("material.components.datepicker").directive("mdCalendarMonth", e);
            var o = 265,
                i = 45;
            n.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil", "$mdDateLocale"], n.prototype.initialize = function(e) {
                var t = e.minDate,
                    n = e.maxDate;
                if (this.calendarCtrl = e, this.items = {
                        length: 2e3
                    }, n && t) {
                    var o = this.dateUtil.getMonthDistance(t, n) + 1;
                    o = Math.max(o, 1), o += 1, this.items.length = o
                }
                if (this.firstRenderableDate = this.dateUtil.incrementMonths(e.today, -this.items.length / 2), t && t > this.firstRenderableDate) this.firstRenderableDate = t;
                else if (n) {
                    this.items.length - 2;
                    this.firstRenderableDate = this.dateUtil.incrementMonths(n, -(this.items.length - 2))
                }
                this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render()
            }, n.prototype.getSelectedMonthIndex = function() {
                var e = this.calendarCtrl;
                return this.dateUtil.getMonthDistance(this.firstRenderableDate, e.displayDate || e.selectedDate || e.today)
            }, n.prototype.changeSelectedDate = function(e) {
                var t = this,
                    n = t.calendarCtrl,
                    o = n.selectedDate;
                n.selectedDate = e, this.changeDisplayDate(e).then(function() {
                    var t = n.SELECTED_DATE_CLASS,
                        i = "month";
                    if (o) {
                        var r = document.getElementById(n.getDateId(o, i));
                        r && (r.classList.remove(t), r.setAttribute("aria-selected", "false"))
                    }
                    if (e) {
                        var a = document.getElementById(n.getDateId(e, i));
                        a && (a.classList.add(t), a.setAttribute("aria-selected", "true"))
                    }
                })
            }, n.prototype.changeDisplayDate = function(e) {
                if (!this.isInitialized) return this.buildWeekHeader(), this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();
                if (!this.dateUtil.isValidDate(e) || this.isMonthTransitionInProgress) return this.$q.when();
                this.isMonthTransitionInProgress = !0;
                var t = this.animateDateChange(e);
                this.calendarCtrl.displayDate = e;
                var n = this;
                return t.then(function() {
                    n.isMonthTransitionInProgress = !1
                }), t
            }, n.prototype.animateDateChange = function(e) {
                if (this.dateUtil.isValidDate(e)) {
                    var t = this.dateUtil.getMonthDistance(this.firstRenderableDate, e);
                    this.calendarScroller.scrollTop = t * o
                }
                return this.$q.when()
            }, n.prototype.buildWeekHeader = function() {
                for (var e = this.dateLocale.firstDayOfWeek, t = this.dateLocale.shortDays, n = document.createElement("tr"), o = 0; o < 7; o++) {
                    var i = document.createElement("th");
                    i.textContent = t[(o + e) % 7], n.appendChild(i)
                }
                this.$element.find("thead").append(n)
            }, n.prototype.attachScopeListeners = function() {
                var e = this;
                e.$scope.$on("md-calendar-parent-changed", function(t, n) {
                    e.changeSelectedDate(n)
                }), e.$scope.$on("md-calendar-parent-action", t.bind(this, this.handleKeyEvent))
            }, n.prototype.handleKeyEvent = function(e, t) {
                var n = this.calendarCtrl,
                    o = n.displayDate;
                if ("select" === t) n.setNgModelValue(o);
                else {
                    var i = null,
                        r = this.dateUtil;
                    switch (t) {
                        case "move-right":
                            i = r.incrementDays(o, 1);
                            break;
                        case "move-left":
                            i = r.incrementDays(o, -1);
                            break;
                        case "move-page-down":
                            i = r.incrementMonths(o, 1);
                            break;
                        case "move-page-up":
                            i = r.incrementMonths(o, -1);
                            break;
                        case "move-row-down":
                            i = r.incrementDays(o, 7);
                            break;
                        case "move-row-up":
                            i = r.incrementDays(o, -7);
                            break;
                        case "start":
                            i = r.getFirstDateOfMonth(o);
                            break;
                        case "end":
                            i = r.getLastDateOfMonth(o)
                    }
                    i && (i = this.dateUtil.clampDate(i, n.minDate, n.maxDate), this.changeDisplayDate(i).then(function() {
                        n.focus(i)
                    }))
                }
            }
        }()
    }(),
    function() {
        ! function() {
            function e(e, t) {
                var o = e('<md-icon md-svg-src="' + t.mdTabsArrow + '"></md-icon>')({})[0];
                return {
                    require: ["^^mdCalendar", "^^mdCalendarMonth", "mdCalendarMonthBody"],
                    scope: {
                        offset: "=mdMonthOffset"
                    },
                    controller: n,
                    controllerAs: "mdMonthBodyCtrl",
                    bindToController: !0,
                    link: function(e, t, n, i) {
                        var r = i[0],
                            a = i[1],
                            d = i[2];
                        d.calendarCtrl = r, d.monthCtrl = a, d.arrowIcon = o.cloneNode(!0), d.generateContent(), e.$watch(function() {
                            return d.offset
                        }, function(e, t) {
                            e !== t && d.generateContent()
                        })
                    }
                }
            }

            function n(e, t, n) {
                this.$element = e, this.dateUtil = t, this.dateLocale = n, this.monthCtrl = null, this.calendarCtrl = null, this.offset = null, this.focusAfterAppend = null
            }
            t.module("material.components.datepicker").directive("mdCalendarMonthBody", e), e.$inject = ["$compile", "$$mdSvgRegistry"], n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], n.prototype.generateContent = function() {
                var e = this.dateUtil.incrementMonths(this.monthCtrl.firstRenderableDate, this.offset);
                this.$element.empty(), this.$element.append(this.buildCalendarForMonth(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null)
            }, n.prototype.buildDateCell = function(e) {
                var t = this.monthCtrl,
                    n = this.calendarCtrl,
                    o = document.createElement("td");
                if (o.tabIndex = -1, o.classList.add("md-calendar-date"), o.setAttribute("role", "gridcell"), e) {
                    o.setAttribute("tabindex", "-1"), o.setAttribute("aria-label", this.dateLocale.longDateFormatter(e)), o.id = n.getDateId(e, "month"), o.setAttribute("data-timestamp", e.getTime()), this.dateUtil.isSameDay(e, n.today) && o.classList.add(n.TODAY_CLASS), this.dateUtil.isValidDate(n.selectedDate) && this.dateUtil.isSameDay(e, n.selectedDate) && (o.classList.add(n.SELECTED_DATE_CLASS), o.setAttribute("aria-selected", "true"));
                    var i = this.dateLocale.dates[e.getDate()];
                    if (this.isDateEnabled(e)) {
                        var r = document.createElement("span");
                        r.classList.add("md-calendar-date-selection-indicator"), r.textContent = i, o.appendChild(r), o.addEventListener("click", t.cellClickHandler), n.displayDate && this.dateUtil.isSameDay(e, n.displayDate) && (this.focusAfterAppend = o)
                    } else o.classList.add("md-calendar-date-disabled"), o.textContent = i
                }
                return o
            }, n.prototype.isDateEnabled = function(e) {
                return this.dateUtil.isDateWithinRange(e, this.calendarCtrl.minDate, this.calendarCtrl.maxDate) && (!t.isFunction(this.calendarCtrl.dateFilter) || this.calendarCtrl.dateFilter(e))
            }, n.prototype.buildDateRow = function(e) {
                var t = document.createElement("tr");
                return t.setAttribute("role", "row"), t.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(e)), t
            }, n.prototype.buildCalendarForMonth = function(e) {
                var t = this.dateUtil.isValidDate(e) ? e : new Date,
                    n = this.dateUtil.getFirstDateOfMonth(t),
                    o = this.getLocaleDay_(n),
                    i = this.dateUtil.getNumberOfDaysInMonth(t),
                    r = document.createDocumentFragment(),
                    a = 1,
                    d = this.buildDateRow(a);
                r.appendChild(d);
                var s = this.offset === this.monthCtrl.items.length - 1,
                    c = 0,
                    l = document.createElement("td"),
                    m = document.createElement("span");
                if (m.textContent = this.dateLocale.monthHeaderFormatter(t), l.appendChild(m), l.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && n > this.calendarCtrl.maxDate ? l.classList.add("md-calendar-month-label-disabled") : (l.addEventListener("click", this.monthCtrl.headerClickHandler), l.setAttribute("data-timestamp", n.getTime()), l.setAttribute("aria-label", this.dateLocale.monthFormatter(t)), l.appendChild(this.arrowIcon.cloneNode(!0))), o <= 2) {
                    l.setAttribute("colspan", "7");
                    var u = this.buildDateRow();
                    if (u.appendChild(l), r.insertBefore(u, d), s) return r
                } else c = 3, l.setAttribute("colspan", "3"), d.appendChild(l);
                for (var p = c; p < o; p++) d.appendChild(this.buildDateCell());
                for (var h = o, f = n, g = 1; g <= i; g++) {
                    if (7 === h) {
                        if (s) return r;
                        h = 0, a++, d = this.buildDateRow(a), r.appendChild(d)
                    }
                    f.setDate(g);
                    var b = this.buildDateCell(f);
                    d.appendChild(b), h++
                }
                for (; d.childNodes.length < 7;) d.appendChild(this.buildDateCell());
                for (; r.childNodes.length < 6;) {
                    for (var v = this.buildDateRow(), E = 0; E < 7; E++) v.appendChild(this.buildDateCell());
                    r.appendChild(v)
                }
                return r
            }, n.prototype.getLocaleDay_ = function(e) {
                return (e.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7
            }
        }()
    }(),
    function() {
        ! function() {
            function e() {
                return {
                    template: '<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="' + o + '"></tbody></table></md-virtual-repeat-container></div>',
                    require: ["^^mdCalendar", "mdCalendarYear"],
                    controller: n,
                    controllerAs: "yearCtrl",
                    bindToController: !0,
                    link: function(e, t, n, o) {
                        var i = o[0],
                            r = o[1];
                        r.initialize(i)
                    }
                }
            }

            function n(e, t, n, o, i) {
                this.$element = e, this.$scope = t, this.$animate = n, this.$q = o, this.dateUtil = i, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.firstRenderableDate = null, this.isInitialized = !1, this.isMonthTransitionInProgress = !1;
                var r = this;
                this.cellClickHandler = function() {
                    r.calendarCtrl.setCurrentView("month", i.getTimestampFromNode(this))
                }
            }
            t.module("material.components.datepicker").directive("mdCalendarYear", e);
            var o = 88;
            n.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil"], n.prototype.initialize = function(e) {
                var t = e.minDate,
                    n = e.maxDate;
                if (this.calendarCtrl = e, this.items = {
                        length: 400
                    }, this.firstRenderableDate = this.dateUtil.incrementYears(e.today, -(this.items.length / 2)), t && t > this.firstRenderableDate ? this.firstRenderableDate = t : n && (this.firstRenderableDate = this.dateUtil.incrementMonths(n, -(this.items.length - 1))), n && t) {
                    var o = this.dateUtil.getYearDistance(this.firstRenderableDate, n) + 1;
                    this.items.length = Math.max(o, 1)
                }
                this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render()
            }, n.prototype.getFocusedYearIndex = function() {
                var e = this.calendarCtrl;
                return this.dateUtil.getYearDistance(this.firstRenderableDate, e.displayDate || e.selectedDate || e.today)
            }, n.prototype.changeDate = function(e) {
                if (!this.isInitialized) return this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();
                if (this.dateUtil.isValidDate(e) && !this.isMonthTransitionInProgress) {
                    var t = this,
                        n = this.animateDateChange(e);
                    return t.isMonthTransitionInProgress = !0, t.calendarCtrl.displayDate = e, n.then(function() {
                        t.isMonthTransitionInProgress = !1
                    })
                }
            }, n.prototype.animateDateChange = function(e) {
                if (this.dateUtil.isValidDate(e)) {
                    var t = this.dateUtil.getYearDistance(this.firstRenderableDate, e);
                    this.calendarScroller.scrollTop = t * o
                }
                return this.$q.when()
            }, n.prototype.handleKeyEvent = function(e, t) {
                var n = this.calendarCtrl,
                    o = n.displayDate;
                if ("select" === t) this.changeDate(o).then(function() {
                    n.setCurrentView("month", o), n.focus(o)
                });
                else {
                    var i = null,
                        r = this.dateUtil;
                    switch (t) {
                        case "move-right":
                            i = r.incrementMonths(o, 1);
                            break;
                        case "move-left":
                            i = r.incrementMonths(o, -1);
                            break;
                        case "move-row-down":
                            i = r.incrementMonths(o, 6);
                            break;
                        case "move-row-up":
                            i = r.incrementMonths(o, -6)
                    }
                    if (i) {
                        var a = n.minDate ? r.incrementMonths(r.getFirstDateOfMonth(n.minDate), 1) : null,
                            d = n.maxDate ? r.getFirstDateOfMonth(n.maxDate) : null;
                        i = r.getFirstDateOfMonth(this.dateUtil.clampDate(i, a, d)), this.changeDate(i).then(function() {
                            n.focus(i)
                        })
                    }
                }
            }, n.prototype.attachScopeListeners = function() {
                var e = this;
                e.$scope.$on("md-calendar-parent-changed", function(t, n) {
                    e.changeDate(n)
                }), e.$scope.$on("md-calendar-parent-action", t.bind(e, e.handleKeyEvent))
            }
        }()
    }(),
    function() {
        ! function() {
            function e() {
                return {
                    require: ["^^mdCalendar", "^^mdCalendarYear", "mdCalendarYearBody"],
                    scope: {
                        offset: "=mdYearOffset"
                    },
                    controller: n,
                    controllerAs: "mdYearBodyCtrl",
                    bindToController: !0,
                    link: function(e, t, n, o) {
                        var i = o[0],
                            r = o[1],
                            a = o[2];
                        a.calendarCtrl = i, a.yearCtrl = r, a.generateContent(), e.$watch(function() {
                            return a.offset
                        }, function(e, t) {
                            e != t && a.generateContent()
                        })
                    }
                }
            }

            function n(e, t, n) {
                this.$element = e, this.dateUtil = t, this.dateLocale = n, this.calendarCtrl = null, this.yearCtrl = null, this.offset = null, this.focusAfterAppend = null
            }
            t.module("material.components.datepicker").directive("mdCalendarYearBody", e), n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], n.prototype.generateContent = function() {
                var e = this.dateUtil.incrementYears(this.yearCtrl.firstRenderableDate, this.offset);
                this.$element.empty(), this.$element.append(this.buildCalendarForYear(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null)
            }, n.prototype.buildMonthCell = function(e, t) {
                var n = this.calendarCtrl,
                    o = this.yearCtrl,
                    i = this.buildBlankCell(),
                    r = new Date(e, t, 1);
                i.setAttribute("aria-label", this.dateLocale.monthFormatter(r)), i.id = n.getDateId(r, "year"), i.setAttribute("data-timestamp", r.getTime()), this.dateUtil.isSameMonthAndYear(r, n.today) && i.classList.add(n.TODAY_CLASS), this.dateUtil.isValidDate(n.selectedDate) && this.dateUtil.isSameMonthAndYear(r, n.selectedDate) && (i.classList.add(n.SELECTED_DATE_CLASS), i.setAttribute("aria-selected", "true"));
                var a = this.dateLocale.shortMonths[t];
                if (this.dateUtil.isMonthWithinRange(r, n.minDate, n.maxDate)) {
                    var d = document.createElement("span");
                    d.classList.add("md-calendar-date-selection-indicator"), d.textContent = a, i.appendChild(d), i.addEventListener("click", o.cellClickHandler), n.displayDate && this.dateUtil.isSameMonthAndYear(r, n.displayDate) && (this.focusAfterAppend = i)
                } else i.classList.add("md-calendar-date-disabled"), i.textContent = a;
                return i
            }, n.prototype.buildBlankCell = function() {
                var e = document.createElement("td");
                return e.tabIndex = -1, e.classList.add("md-calendar-date"), e.setAttribute("role", "gridcell"), e.setAttribute("tabindex", "-1"), e
            }, n.prototype.buildCalendarForYear = function(e) {
                var t, n = e.getFullYear(),
                    o = document.createDocumentFragment(),
                    i = document.createElement("tr"),
                    r = document.createElement("td");
                for (r.className = "md-calendar-month-label", r.textContent = n, i.appendChild(r), t = 0; t < 6; t++) i.appendChild(this.buildMonthCell(n, t));
                o.appendChild(i);
                var a = document.createElement("tr");
                for (a.appendChild(this.buildBlankCell()), t = 6; t < 12; t++) a.appendChild(this.buildMonthCell(n, t));
                return o.appendChild(a), o
            }
        }()
    }(),
    function() {
        ! function() {
            t.module("material.components.datepicker").config(["$provide", function(e) {
                function t() {
                    this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = ""
                }
                t.prototype.$get = function(e, t) {
                    function n(e) {
                        if (!e) return "";
                        var n = e.toLocaleTimeString(),
                            o = e;
                        return 0 != e.getHours() || n.indexOf("11:") === -1 && n.indexOf("23:") === -1 || (o = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 1, 0, 0)), t("date")(o, "M/d/yyyy")
                    }

                    function o(e) {
                        return new Date(e)
                    }

                    function i(e) {
                        e = e.trim();
                        var t = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;
                        return t.test(e)
                    }

                    function r(e) {
                        return h.shortMonths[e.getMonth()] + " " + e.getFullYear()
                    }

                    function a(e) {
                        return h.months[e.getMonth()] + " " + e.getFullYear()
                    }

                    function d(e) {
                        return "Week " + e
                    }

                    function s(e) {
                        return [h.days[e.getDay()], h.months[e.getMonth()], h.dates[e.getDate()], e.getFullYear()].join(" ")
                    }
                    for (var c = e.DATETIME_FORMATS.SHORTDAY.map(function(e) {
                            return e.substring(0, 1)
                        }), l = Array(32), m = 1; m <= 31; m++) l[m] = m;
                    var u = "Calendar",
                        p = "Open calendar",
                        h = {
                            months: this.months || e.DATETIME_FORMATS.MONTH,
                            shortMonths: this.shortMonths || e.DATETIME_FORMATS.SHORTMONTH,
                            days: this.days || e.DATETIME_FORMATS.DAY,
                            shortDays: this.shortDays || c,
                            dates: this.dates || l,
                            firstDayOfWeek: this.firstDayOfWeek || 0,
                            formatDate: this.formatDate || n,
                            parseDate: this.parseDate || o,
                            isDateComplete: this.isDateComplete || i,
                            monthHeaderFormatter: this.monthHeaderFormatter || r,
                            monthFormatter: this.monthFormatter || a,
                            weekNumberFormatter: this.weekNumberFormatter || d,
                            longDateFormatter: this.longDateFormatter || s,
                            msgCalendar: this.msgCalendar || u,
                            msgOpenCalendar: this.msgOpenCalendar || p
                        };
                    return h
                }, t.prototype.$get.$inject = ["$locale", "$filter"], e.provider("$mdDateLocale", new t)
            }])
        }()
    }(),
    function() {
        ! function() {
            t.module("material.components.datepicker").factory("$$mdDateUtil", function() {
                function e(e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                }

                function n(e) {
                    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
                }

                function o(e) {
                    return new Date(e.getFullYear(), e.getMonth() + 1, 1)
                }

                function i(e) {
                    return new Date(e.getFullYear(), e.getMonth() - 1, 1)
                }

                function r(e, t) {
                    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
                }

                function a(e, t) {
                    return e.getDate() == t.getDate() && r(e, t)
                }

                function d(e, t) {
                    var n = o(e);
                    return r(n, t)
                }

                function s(e, t) {
                    var n = i(e);
                    return r(t, n)
                }

                function c(e, t) {
                    return b((e.getTime() + t.getTime()) / 2)
                }

                function l(t) {
                    var n = e(t);
                    return Math.floor((n.getDay() + t.getDate() - 1) / 7)
                }

                function m(e, t) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
                }

                function u(e, t) {
                    var o = new Date(e.getFullYear(), e.getMonth() + t, 1),
                        i = n(o);
                    return i < e.getDate() ? o.setDate(i) : o.setDate(e.getDate()), o
                }

                function p(e, t) {
                    return 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth())
                }

                function h(e) {
                    return new Date(e.getFullYear(), e.getMonth(), n(e))
                }

                function f(e) {
                    return null != e && e.getTime && !isNaN(e.getTime())
                }

                function g(e) {
                    f(e) && e.setHours(0, 0, 0, 0)
                }

                function b(e) {
                    var n;
                    return n = t.isUndefined(e) ? new Date : new Date(e), g(n), n
                }

                function v(e, t, n) {
                    var o = b(e),
                        i = f(t) ? b(t) : null,
                        r = f(n) ? b(n) : null;
                    return (!i || i <= o) && (!r || r >= o)
                }

                function E(e, t) {
                    return u(e, 12 * t)
                }

                function $(e, t) {
                    return t.getFullYear() - e.getFullYear()
                }

                function C(e, t, n) {
                    var o = e;
                    return t && e < t && (o = new Date(t.getTime())), n && e > n && (o = new Date(n.getTime())), o
                }

                function y(e) {
                    if (e && e.hasAttribute("data-timestamp")) return Number(e.getAttribute("data-timestamp"))
                }

                function M(e, t, n) {
                    var o = e.getMonth(),
                        i = e.getFullYear();
                    return (!t || t.getFullYear() < i || t.getMonth() <= o) && (!n || n.getFullYear() > i || n.getMonth() >= o)
                }
                return {
                    getFirstDateOfMonth: e,
                    getNumberOfDaysInMonth: n,
                    getDateInNextMonth: o,
                    getDateInPreviousMonth: i,
                    isInNextMonth: d,
                    isInPreviousMonth: s,
                    getDateMidpoint: c,
                    isSameMonthAndYear: r,
                    getWeekOfMonth: l,
                    incrementDays: m,
                    incrementMonths: u,
                    getLastDateOfMonth: h,
                    isSameDay: a,
                    getMonthDistance: p,
                    isValidDate: f,
                    setDateTimeToMidnight: g,
                    createDateAtMidnight: b,
                    isDateWithinRange: v,
                    incrementYears: E,
                    getYearDistance: $,
                    clampDate: C,
                    getTimestampFromNode: y,
                    isMonthWithinRange: M
                }
            })
        }()
    }(),
    function() {
        ! function() {
            function n(e, n, i) {
                return {
                    template: function(t, n) {
                        var o = n.mdHideIcons,
                            i = "all" === o || "calendar" === o ? "" : '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="' + e.mdCalendar + '"></md-icon></md-button>',
                            r = "all" === o || "triangle" === o ? "" : '<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>';
                        return "" + i + '<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)">' + r + '</div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'
                    },
                    require: ["ngModel", "mdDatepicker", "?^mdInputContainer", "?^form"],
                    scope: {
                        minDate: "=mdMinDate",
                        maxDate: "=mdMaxDate",
                        placeholder: "@mdPlaceholder",
                        currentView: "@mdCurrentView",
                        dateFilter: "=mdDateFilter",
                        isOpen: "=?mdIsOpen",
                        debounceInterval: "=mdDebounceInterval"
                    },
                    controller: o,
                    controllerAs: "ctrl",
                    bindToController: !0,
                    link: function(e, o, r, a) {
                        var c = a[0],
                            l = a[1],
                            m = a[2],
                            u = a[3],
                            p = n.parseAttributeBoolean(r.mdNoAsterisk);
                        if (l.configureNgModel(c, m), m) {
                            var h = o[0].querySelector(".md-errors-spacer");
                            h && o.after(t.element("<div>").append(h)), m.setHasPlaceholder(r.mdPlaceholder), m.input = o, m.element.addClass(d).toggleClass(s, "calendar" !== r.mdHideIcons && "all" !== r.mdHideIcons), m.label ? p || r.$observe("required", function(e) {
                                m.label.toggleClass("md-required", !!e)
                            }) : i.expect(o, "aria-label", r.mdPlaceholder), e.$watch(m.isErrorGetter || function() {
                                return c.$invalid && (c.$touched || u && u.$submitted)
                            }, m.setInvalid)
                        } else if (u) var f = e.$watch(function() {
                            return u.$submitted;
                        }, function(e) {
                            e && (l.updateErrorState(), f())
                        })
                    }
                }
            }

            function o(e, n, o, i, r, a, d, s, c, l, m) {
                this.$window = i, this.dateLocale = s, this.dateUtil = c, this.$mdConstant = r, this.$mdUtil = d, this.$$rAF = l, this.documentElement = t.element(document.documentElement), this.ngModelCtrl = null, this.inputElement = n[0].querySelector("input"), this.ngInputElement = t.element(this.inputElement), this.inputContainer = n[0].querySelector(".md-datepicker-input-container"), this.calendarPane = n[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = n[0].querySelector(".md-datepicker-button"), this.inputMask = n[0].querySelector(".md-datepicker-input-mask-opaque"), this.$element = n, this.$attrs = o, this.$scope = e, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(n[0].disabled || t.isString(o.disabled)), this.isCalendarOpen = !1, this.openOnFocus = o.hasOwnProperty("mdOpenOnFocus"), this.mdInputContainer = null, this.calendarPaneOpenedFrom = null, this.calendarPane.id = "md-date-pane" + d.nextUid(), this.bodyClickHandler = t.bind(this, this.handleBodyClick), this.windowEventName = m.isIos || m.isAndroid ? "orientationchange" : "resize", this.windowEventHandler = d.debounce(t.bind(this, this.closeCalendarPane), 100), this.windowBlurHandler = t.bind(this, this.handleWindowBlur), o.tabindex || n.attr("tabindex", "-1"), a(n), a(t.element(this.calendarPane)), this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
                var u = this;
                e.$on("$destroy", function() {
                    u.detachCalendarPane()
                }), o.mdIsOpen && e.$watch("ctrl.isOpen", function(e) {
                    e ? u.openCalendarPane({
                        target: u.inputElement
                    }) : u.closeCalendarPane()
                })
            }
            t.module("material.components.datepicker").directive("mdDatepicker", n), n.$inject = ["$$mdSvgRegistry", "$mdUtil", "$mdAria"];
            var i = 3,
                r = "md-datepicker-invalid",
                a = "md-datepicker-open",
                d = "_md-datepicker-floating-label",
                s = "_md-datepicker-has-calendar-icon",
                c = 500,
                l = 368,
                m = 360;
            o.$inject = ["$scope", "$element", "$attrs", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF", "$mdGesture"], o.prototype.configureNgModel = function(e, n) {
                this.ngModelCtrl = e, this.mdInputContainer = n;
                var o = this;
                e.$render = function() {
                    var e = o.ngModelCtrl.$viewValue;
                    if (e && !(e instanceof Date)) throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: " + typeof e);
                    o.date = e, o.inputElement.value = o.dateLocale.formatDate(e), o.mdInputContainer && o.mdInputContainer.setHasValue(!!e), o.resizeInputElement(), o.updateErrorState()
                }, e.$viewChangeListeners.unshift(t.bind(this, this.updateErrorState))
            }, o.prototype.attachChangeListeners = function() {
                var e = this;
                e.$scope.$on("md-calendar-change", function(t, n) {
                    e.ngModelCtrl.$setViewValue(n), e.date = n, e.inputElement.value = e.dateLocale.formatDate(n), e.mdInputContainer && e.mdInputContainer.setHasValue(!!n), e.closeCalendarPane(), e.resizeInputElement(), e.updateErrorState()
                }), e.ngInputElement.on("input", t.bind(e, e.resizeInputElement));
                var n = t.isDefined(this.debounceInterval) ? this.debounceInterval : c;
                e.ngInputElement.on("input", e.$mdUtil.debounce(e.handleInputEvent, n, e))
            }, o.prototype.attachInteractionListeners = function() {
                var e = this,
                    n = this.$scope,
                    o = this.$mdConstant.KEY_CODE;
                e.ngInputElement.on("keydown", function(t) {
                    t.altKey && t.keyCode == o.DOWN_ARROW && (e.openCalendarPane(t), n.$digest())
                }), e.openOnFocus && (e.ngInputElement.on("focus", t.bind(e, e.openCalendarPane)), t.element(e.$window).on("blur", e.windowBlurHandler), n.$on("$destroy", function() {
                    t.element(e.$window).off("blur", e.windowBlurHandler)
                })), n.$on("md-calendar-close", function() {
                    e.closeCalendarPane()
                })
            }, o.prototype.installPropertyInterceptors = function() {
                var e = this;
                if (this.$attrs.ngDisabled) {
                    var t = this.$scope.$parent;
                    t && t.$watch(this.$attrs.ngDisabled, function(t) {
                        e.setDisabled(t)
                    })
                }
                Object.defineProperty(this, "placeholder", {
                    get: function() {
                        return e.inputElement.placeholder
                    },
                    set: function(t) {
                        e.inputElement.placeholder = t || ""
                    }
                })
            }, o.prototype.setDisabled = function(e) {
                this.isDisabled = e, this.inputElement.disabled = e, this.calendarButton && (this.calendarButton.disabled = e)
            }, o.prototype.updateErrorState = function(e) {
                var n = e || this.date;
                if (this.clearErrorState(), this.dateUtil.isValidDate(n)) {
                    if (n = this.dateUtil.createDateAtMidnight(n), this.dateUtil.isValidDate(this.minDate)) {
                        var o = this.dateUtil.createDateAtMidnight(this.minDate);
                        this.ngModelCtrl.$setValidity("mindate", n >= o)
                    }
                    if (this.dateUtil.isValidDate(this.maxDate)) {
                        var i = this.dateUtil.createDateAtMidnight(this.maxDate);
                        this.ngModelCtrl.$setValidity("maxdate", n <= i)
                    }
                    t.isFunction(this.dateFilter) && this.ngModelCtrl.$setValidity("filtered", this.dateFilter(n))
                } else this.ngModelCtrl.$setValidity("valid", null == n);
                this.ngModelCtrl.$valid || this.inputContainer.classList.add(r)
            }, o.prototype.clearErrorState = function() {
                this.inputContainer.classList.remove(r), ["mindate", "maxdate", "filtered", "valid"].forEach(function(e) {
                    this.ngModelCtrl.$setValidity(e, !0)
                }, this)
            }, o.prototype.resizeInputElement = function() {
                this.inputElement.size = this.inputElement.value.length + i
            }, o.prototype.handleInputEvent = function() {
                var e = this.inputElement.value,
                    t = e ? this.dateLocale.parseDate(e) : null;
                this.dateUtil.setDateTimeToMidnight(t);
                var n = "" == e || this.dateUtil.isValidDate(t) && this.dateLocale.isDateComplete(e) && this.isDateEnabled(t);
                n && (this.ngModelCtrl.$setViewValue(t), this.date = t), this.updateErrorState(t)
            }, o.prototype.isDateEnabled = function(e) {
                return this.dateUtil.isDateWithinRange(e, this.minDate, this.maxDate) && (!t.isFunction(this.dateFilter) || this.dateFilter(e))
            }, o.prototype.attachCalendarPane = function() {
                var e = this.calendarPane,
                    n = document.body;
                e.style.transform = "", this.$element.addClass(a), this.mdInputContainer && this.mdInputContainer.element.addClass(a), t.element(n).addClass("md-datepicker-is-showing");
                var o = this.inputContainer.getBoundingClientRect(),
                    i = n.getBoundingClientRect(),
                    r = o.top - i.top,
                    d = o.left - i.left,
                    s = i.top < 0 && 0 == document.body.scrollTop ? -i.top : document.body.scrollTop,
                    c = i.left < 0 && 0 == document.body.scrollLeft ? -i.left : document.body.scrollLeft,
                    u = s + this.$window.innerHeight,
                    p = c + this.$window.innerWidth;
                if (d + m > p) {
                    if (p - m > 0) d = p - m;
                    else {
                        d = c;
                        var h = this.$window.innerWidth / m;
                        e.style.transform = "scale(" + h + ")"
                    }
                    e.classList.add("md-datepicker-pos-adjusted")
                }
                r + l > u && u - l > s && (r = u - l, e.classList.add("md-datepicker-pos-adjusted")), e.style.left = d + "px", e.style.top = r + "px", document.body.appendChild(e), this.inputMask.style.left = o.width + "px", this.$$rAF(function() {
                    e.classList.add("md-pane-open")
                })
            }, o.prototype.detachCalendarPane = function() {
                this.$element.removeClass(a), this.mdInputContainer && this.mdInputContainer.element.removeClass(a), t.element(document.body).removeClass("md-datepicker-is-showing"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.isCalendarOpen && this.$mdUtil.enableScrolling(), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane)
            }, o.prototype.openCalendarPane = function(t) {
                if (!this.isCalendarOpen && !this.isDisabled && !this.inputFocusedOnWindowBlur) {
                    this.isCalendarOpen = this.isOpen = !0, this.calendarPaneOpenedFrom = t.target, this.$mdUtil.disableScrollAround(this.calendarPane), this.attachCalendarPane(), this.focusCalendar(), this.evalAttr("ngFocus");
                    var n = this;
                    this.$mdUtil.nextTick(function() {
                        n.documentElement.on("click touchstart", n.bodyClickHandler)
                    }, !1), e.addEventListener(this.windowEventName, this.windowEventHandler)
                }
            }, o.prototype.closeCalendarPane = function() {
                function t() {
                    n.isCalendarOpen = n.isOpen = !1
                }
                if (this.isCalendarOpen) {
                    var n = this;
                    n.detachCalendarPane(), n.ngModelCtrl.$setTouched(), n.evalAttr("ngBlur"), n.documentElement.off("click touchstart", n.bodyClickHandler), e.removeEventListener(n.windowEventName, n.windowEventHandler), n.calendarPaneOpenedFrom.focus(), n.calendarPaneOpenedFrom = null, n.openOnFocus ? n.$mdUtil.nextTick(t) : t()
                }
            }, o.prototype.getCalendarCtrl = function() {
                return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")
            }, o.prototype.focusCalendar = function() {
                var e = this;
                this.$mdUtil.nextTick(function() {
                    e.getCalendarCtrl().focus()
                }, !1)
            }, o.prototype.setFocused = function(e) {
                e || this.ngModelCtrl.$setTouched(), this.openOnFocus || this.evalAttr(e ? "ngFocus" : "ngBlur"), this.isFocused = e
            }, o.prototype.handleBodyClick = function(e) {
                if (this.isCalendarOpen) {
                    var t = this.$mdUtil.getClosest(e.target, "md-calendar");
                    t || this.closeCalendarPane(), this.$scope.$digest()
                }
            }, o.prototype.handleWindowBlur = function() {
                this.inputFocusedOnWindowBlur = document.activeElement === this.inputElement
            }, o.prototype.evalAttr = function(e) {
                this.$attrs[e] && this.$scope.$parent.$eval(this.$attrs[e])
            }
        }()
    }(),
    function() {
        function e(e, t, n, o) {
            function i(o, i, r) {
                function a() {
                    var e = i.parent();
                    return !(!e.attr("aria-label") && !e.text()) || !(!e.parent().attr("aria-label") && !e.parent().text())
                }

                function d() {
                    r.mdSvgIcon || r.mdSvgSrc || (r.mdFontIcon && i.addClass("md-font " + r.mdFontIcon), i.addClass(l))
                }

                function s() {
                    if (!r.mdSvgIcon && !r.mdSvgSrc) {
                        r.mdFontIcon && (i.removeClass(c), i.addClass(r.mdFontIcon), c = r.mdFontIcon);
                        var t = e.fontSet(r.mdFontSet);
                        l !== t && (i.removeClass(l), i.addClass(t), l = t)
                    }
                }
                t(i);
                var c = r.mdFontIcon,
                    l = e.fontSet(r.mdFontSet);
                d(), r.$observe("mdFontIcon", s), r.$observe("mdFontSet", s);
                var m = (i[0].getAttribute(r.$attr.mdSvgSrc), r.alt || r.mdFontIcon || r.mdSvgIcon || i.text()),
                    u = r.$normalize(r.$attr.mdSvgIcon || r.$attr.mdSvgSrc || "");
                r["aria-label"] || ("" === m || a() ? i.text() || n.expect(i, "aria-hidden", "true") : (n.expect(i, "aria-label", m), n.expect(i, "role", "img"))), u && r.$observe(u, function(t) {
                    i.empty(), t && e(t).then(function(e) {
                        i.empty(), i.append(e)
                    })
                })
            }
            return {
                restrict: "E",
                link: i
            }
        }
        t.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", "$sce", e])
    }(),
    function() {
        function n() {}

        function o(e, t) {
            this.url = e, this.viewBoxSize = t || r.defaultViewBoxSize
        }

        function i(n, o, i, r, a, d) {
            function s(e) {
                if (e = e || "", t.isString(e) || (e = d.getTrustedUrl(e)), E[e]) return i.when(l(E[e]));
                if (C.test(e) || y.test(e)) return h(e).then(m(e));
                e.indexOf(":") == -1 && (e = "$default:" + e);
                var o = n[e] ? u : p;
                return o(e).then(m(e))
            }

            function c(e) {
                var o = t.isUndefined(e) || !(e && e.length);
                if (o) return n.defaultFontSet;
                var i = e;
                return t.forEach(n.fontSets, function(t) {
                    t.alias == e && (i = t.fontSet || i)
                }), i
            }

            function l(e) {
                var n = e.clone(),
                    o = "_cache" + a.nextUid();
                return n.id && (n.id += o), t.forEach(n.querySelectorAll("[id]"), function(e) {
                    e.id += o
                }), n
            }

            function m(e) {
                return function(t) {
                    return E[e] = f(t) ? t : new g(t, n[e]), E[e].clone()
                }
            }

            function u(e) {
                var t = n[e];
                return h(t.url).then(function(e) {
                    return new g(e, t)
                })
            }

            function p(e) {
                function t(t) {
                    var n = e.slice(e.lastIndexOf(":") + 1),
                        i = t.querySelector("#" + n);
                    return i ? new g(i, d) : o(e)
                }

                function o(e) {
                    var t = "icon " + e + " not found";
                    return r.warn(t), i.reject(t || e)
                }
                var a = e.substring(0, e.lastIndexOf(":")) || "$default",
                    d = n[a];
                return d ? h(d.url).then(t) : o(e)
            }

            function h(n) {
                function a(n) {
                    var o = y.exec(n),
                        r = /base64/i.test(n),
                        a = r ? e.atob(o[2]) : o[2];
                    return i.when(t.element(a)[0])
                }

                function d(e) {
                    return i(function(n, i) {
                        var a = function(e) {
                                var n = t.isString(e) ? e : e.message || e.data || e.statusText;
                                r.warn(n), i(e)
                            },
                            d = function(o) {
                                $[e] || ($[e] = t.element("<div>").append(o)[0].querySelector("svg")), n($[e])
                            };
                        o(e, !0).then(d, a)
                    })
                }
                return y.test(n) ? a(n) : d(n)
            }

            function f(e) {
                return t.isDefined(e.element) && t.isDefined(e.config)
            }

            function g(e, n) {
                e && "svg" != e.tagName && (e = t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]), e.getAttribute("xmlns") || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = n, this.prepare()
            }

            function b() {
                var e = this.config ? this.config.viewBoxSize : n.defaultViewBoxSize;
                t.forEach({
                    fit: "",
                    height: "100%",
                    width: "100%",
                    preserveAspectRatio: "xMidYMid meet",
                    viewBox: this.element.getAttribute("viewBox") || "0 0 " + e + " " + e,
                    focusable: !1
                }, function(e, t) {
                    this.element.setAttribute(t, e)
                }, this)
            }

            function v() {
                return this.element.cloneNode(!0)
            }
            var E = {},
                $ = {},
                C = /[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,
                y = /^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;
            return g.prototype = {
                clone: v,
                prepare: b
            }, s.fontSet = c, s
        }
        t.module("material.components.icon").constant("$$mdSvgRegistry", {
            mdTabsArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",
            mdClose: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",
            mdCancel: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",
            mdMenu: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",
            mdToggleArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",
            mdCalendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg=="
        }).provider("$mdIcon", n);
        var r = {
            defaultViewBoxSize: 24,
            defaultFontSet: "material-icons",
            fontSets: []
        };
        n.prototype = {
            icon: function(e, t, n) {
                return e.indexOf(":") == -1 && (e = "$default:" + e), r[e] = new o(t, n), this
            },
            iconSet: function(e, t, n) {
                return r[e] = new o(t, n), this
            },
            defaultIconSet: function(e, t) {
                var n = "$default";
                return r[n] || (r[n] = new o(e, t)), r[n].viewBoxSize = t || r.defaultViewBoxSize, this
            },
            defaultViewBoxSize: function(e) {
                return r.defaultViewBoxSize = e, this
            },
            fontSet: function(e, t) {
                return r.fontSets.push({
                    alias: e,
                    fontSet: t || e
                }), this
            },
            defaultFontSet: function(e) {
                return r.defaultFontSet = e ? e : "", this
            },
            defaultIconSize: function(e) {
                return r.defaultIconSize = e, this
            },
            $get: ["$templateRequest", "$q", "$log", "$mdUtil", "$sce", function(e, t, n, o, a) {
                return i(r, e, t, n, o, a)
            }]
        }, i.$inject = ["config", "$templateRequest", "$q", "$log", "$mdUtil", "$sce"]
    }(),
    function() {
        function e(e, o, i, r, a, d, s, c) {
            var l, m, u = a.prefixer(),
                p = this;
            this.nestLevel = parseInt(o.mdNestLevel, 10) || 0, this.init = function(n, o) {
                o = o || {}, l = n, m = i[0].querySelector(u.buildSelector(["ng-click", "ng-mouseenter"])), m.setAttribute("aria-expanded", "false"), this.isInMenuBar = o.isInMenuBar, this.nestedMenus = a.nodesToArray(l[0].querySelectorAll(".md-nested-menu")), l.on("$mdInterimElementRemove", function() {
                    p.isOpen = !1, a.nextTick(function() {
                        p.onIsOpenChanged(p.isOpen)
                    })
                }), a.nextTick(function() {
                    p.onIsOpenChanged(p.isOpen)
                });
                var d = "menu_container_" + a.nextUid();
                l.attr("id", d), t.element(m).attr({
                    "aria-owns": d,
                    "aria-haspopup": "true"
                }), r.$on("$destroy", t.bind(this, function() {
                    this.disableHoverListener(), e.destroy()
                })), l.on("$destroy", function() {
                    e.destroy()
                })
            };
            var h, f, g = [];
            this.enableHoverListener = function() {
                g.push(s.$on("$mdMenuOpen", function(e, t) {
                    l[0].contains(t[0]) && (p.currentlyOpenMenu = t.controller("mdMenu"), p.isAlreadyOpening = !1, p.currentlyOpenMenu.registerContainerProxy(p.triggerContainerProxy.bind(p)))
                })), g.push(s.$on("$mdMenuClose", function(e, t) {
                    l[0].contains(t[0]) && (p.currentlyOpenMenu = n)
                })), f = t.element(a.nodesToArray(l[0].children[0].children)), f.on("mouseenter", p.handleMenuItemHover), f.on("mouseleave", p.handleMenuItemMouseLeave)
            }, this.disableHoverListener = function() {
                for (; g.length;) g.shift()();
                f && f.off("mouseenter", p.handleMenuItemHover), f && f.off("mouseleave", p.handleMenuItemMouseLeave)
            }, this.handleMenuItemHover = function(e) {
                if (!p.isAlreadyOpening) {
                    var n = e.target.querySelector("md-menu") || a.getClosest(e.target, "MD-MENU");
                    h = d(function() {
                        if (n && (n = t.element(n).controller("mdMenu")), p.currentlyOpenMenu && p.currentlyOpenMenu != n) {
                            var e = p.nestLevel + 1;
                            p.currentlyOpenMenu.close(!0, {
                                closeTo: e
                            }), p.isAlreadyOpening = !!n, n && n.open()
                        } else n && !n.isOpen && n.open && (p.isAlreadyOpening = !!n, n && n.open())
                    }, n ? 100 : 250);
                    var o = e.currentTarget.querySelector(".md-button:not([disabled])");
                    o && o.focus()
                }
            }, this.handleMenuItemMouseLeave = function() {
                h && (d.cancel(h), h = n)
            }, this.open = function(t) {
                t && t.stopPropagation(), t && t.preventDefault(), p.isOpen || (p.enableHoverListener(), p.isOpen = !0, a.nextTick(function() {
                    p.onIsOpenChanged(p.isOpen)
                }), m = m || (t ? t.target : i[0]), m.setAttribute("aria-expanded", "true"), r.$emit("$mdMenuOpen", i), e.show({
                    scope: r,
                    mdMenuCtrl: p,
                    nestLevel: p.nestLevel,
                    element: l,
                    target: m,
                    preserveElement: !0,
                    parent: "body"
                })["finally"](function() {
                    m.setAttribute("aria-expanded", "false"), p.disableHoverListener()
                }))
            }, r.$mdOpenMenu = this.open, this.onIsOpenChanged = function(e) {
                e ? (l.attr("aria-hidden", "false"), i[0].classList.add("md-open"), t.forEach(p.nestedMenus, function(e) {
                    e.classList.remove("md-open")
                })) : (l.attr("aria-hidden", "true"), i[0].classList.remove("md-open")), r.$mdMenuIsOpen = p.isOpen
            }, this.focusMenuContainer = function() {
                var e = l[0].querySelector(u.buildSelector(["md-menu-focus-target", "md-autofocus"]));
                e || (e = l[0].querySelector(".md-button")), e.focus()
            }, this.registerContainerProxy = function(e) {
                this.containerProxy = e
            }, this.triggerContainerProxy = function(e) {
                this.containerProxy && this.containerProxy(e)
            }, this.destroy = function() {
                return p.isOpen ? e.destroy() : c.when(!1)
            }, this.close = function(n, o) {
                if (p.isOpen) {
                    p.isOpen = !1, a.nextTick(function() {
                        p.onIsOpenChanged(p.isOpen)
                    });
                    var d = t.extend({}, o, {
                        skipFocus: n
                    });
                    if (r.$emit("$mdMenuClose", i, d), e.hide(null, o), !n) {
                        var s = p.restoreFocusTo || i.find("button")[0];
                        s instanceof t.element && (s = s[0]), s && s.focus()
                    }
                }
            }, this.positionMode = function() {
                var e = (o.mdPositionMode || "target").split(" ");
                return 1 == e.length && e.push(e[0]), {
                    left: e[0],
                    top: e[1]
                }
            }, this.offsets = function() {
                var e = (o.mdOffset || "0 0").split(" ").map(parseFloat);
                if (2 == e.length) return {
                    left: e[0],
                    top: e[1]
                };
                if (1 == e.length) return {
                    top: e[0],
                    left: e[0]
                };
                throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")
            }
        }
        t.module("material.components.menu").controller("mdMenuCtrl", e), e.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout", "$rootScope", "$q"]
    }(),
    function() {
        function e(e) {
            function o(n) {
                n.addClass("md-menu");
                var o = n.children()[0],
                    a = e.prefixer();
                if (a.hasAttribute(o, "ng-click") || (o = o.querySelector(a.buildSelector(["ng-click", "ng-mouseenter"])) || o), !o || "MD-BUTTON" != o.nodeName && "BUTTON" != o.nodeName || o.hasAttribute("type") || o.setAttribute("type", "button"), 2 != n.children().length) throw Error(r + "Expected two children elements.");
                o && o.setAttribute("aria-haspopup", "true");
                var d = n[0].querySelectorAll("md-menu"),
                    s = parseInt(n[0].getAttribute("md-nest-level"), 10) || 0;
                return d && t.forEach(e.nodesToArray(d), function(e) {
                    e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("_md-nested-menu"), e.setAttribute("md-nest-level", s + 1)
                }), i
            }

            function i(e, o, i, r) {
                var a = r[0],
                    d = r[1] != n,
                    s = t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),
                    c = o.children()[1];
                o.addClass("_md"), c.hasAttribute("role") || c.setAttribute("role", "menu"), s.append(c), o.on("$destroy", function() {
                    s.remove()
                }), o.append(s), s[0].style.display = "none", a.init(s, {
                    isInMenuBar: d
                })
            }
            var r = "Invalid HTML for md-menu: ";
            return {
                restrict: "E",
                require: ["mdMenu", "?^mdMenuBar"],
                controller: "mdMenuCtrl",
                scope: !0,
                compile: o
            }
        }
        t.module("material.components.menu").directive("mdMenu", e), e.$inject = ["$mdUtil"]
    }(),
    function() {
        function e(e) {
            function o(e, o, a, d, s, c, l, m, u) {
                function p(n, o, i) {
                    return i.nestLevel ? t.noop : (i.disableParentScroll && !e.getClosest(i.target, "MD-DIALOG") ? i.restoreScroll = e.disableScrollAround(i.element, i.parent) : i.disableParentScroll = !1, i.hasBackdrop && (i.backdrop = e.createBackdrop(n, "md-menu-backdrop md-click-catcher"), u.enter(i.backdrop, d[0].body)), function() {
                        i.backdrop && i.backdrop.remove(), i.disableParentScroll && i.restoreScroll()
                    })
                }

                function h(e, t, n) {
                    function o() {
                        return m(t, {
                            addClass: "md-leave"
                        }).start()
                    }

                    function i() {
                        t.removeClass("md-active"), v(t, n), n.alreadyOpen = !1
                    }
                    return n.cleanupInteraction && n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? i() : o().then(i)
                }

                function f(n, i, r) {
                    function d() {
                        return r.parent.append(i), i[0].style.display = "", c(function(e) {
                            var t = E(i, r);
                            i.removeClass("md-leave"), m(i, {
                                addClass: "md-active",
                                from: C.toCss(t),
                                to: C.toCss({
                                    transform: ""
                                })
                            }).start().then(e)
                        })
                    }

                    function u() {
                        if (!r.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");
                        t.extend(r, {
                            alreadyOpen: !1,
                            isRemoved: !1,
                            target: t.element(r.target),
                            parent: t.element(r.parent),
                            menuContentEl: t.element(i[0].querySelector("md-menu-content"))
                        })
                    }

                    function h() {
                        var e = function(e, t) {
                            return l.throttle(function() {
                                if (!r.isRemoved) {
                                    var n = E(e, t);
                                    e.css(C.toCss(n))
                                }
                            })
                        }(i, r);
                        return s.addEventListener("resize", e), s.addEventListener("orientationchange", e),
                            function() {
                                s.removeEventListener("resize", e), s.removeEventListener("orientationchange", e)
                            }
                    }

                    function f() {
                        function t(t) {
                            var n;
                            switch (t.keyCode) {
                                case a.KEY_CODE.ESCAPE:
                                    r.mdMenuCtrl.close(!1, {
                                        closeAll: !0
                                    }), n = !0;
                                    break;
                                case a.KEY_CODE.UP_ARROW:
                                    g(t, r.menuContentEl, r, -1) || r.nestLevel || r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.DOWN_ARROW:
                                    g(t, r.menuContentEl, r, 1) || r.nestLevel || r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.LEFT_ARROW:
                                    r.nestLevel ? r.mdMenuCtrl.close() : r.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.RIGHT_ARROW:
                                    var o = e.getClosest(t.target, "MD-MENU");
                                    o && o != r.parent[0] ? t.target.click() : r.mdMenuCtrl.triggerContainerProxy(t), n = !0
                            }
                            n && (t.preventDefault(), t.stopImmediatePropagation())
                        }

                        function o(e) {
                            e.preventDefault(), e.stopPropagation(), n.$apply(function() {
                                r.mdMenuCtrl.close(!0, {
                                    closeAll: !0
                                })
                            })
                        }

                        function d(t) {
                            function o() {
                                n.$apply(function() {
                                    r.mdMenuCtrl.close(!0, {
                                        closeAll: !0
                                    })
                                })
                            }

                            function i(e, t) {
                                if (!e) return !1;
                                for (var n, o = 0; n = t[o]; ++o)
                                    if ($.hasAttribute(e, n)) return !0;
                                return !1
                            }
                            var a = t.target;
                            do {
                                if (a == r.menuContentEl[0]) return;
                                if ((i(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) && !i(a, ["md-prevent-menu-close"])) {
                                    var d = e.getClosest(a, "MD-MENU");
                                    a.hasAttribute("disabled") || d && d != r.parent[0] || o();
                                    break
                                }
                            } while (a = a.parentNode)
                        }
                        i.addClass("md-clickable"), r.backdrop && r.backdrop.on("click", o), r.menuContentEl.on("keydown", t), r.menuContentEl[0].addEventListener("click", d, !0);
                        var s = r.menuContentEl[0].querySelector($.buildSelector(["md-menu-focus-target", "md-autofocus"]));
                        if (!s) {
                            var c = r.menuContentEl[0].firstElementChild;
                            s = c && (c.querySelector(".md-button:not([disabled])") || c.firstElementChild)
                        }
                        return s && s.focus(),
                            function() {
                                i.removeClass("md-clickable"), r.backdrop && r.backdrop.off("click", o), r.menuContentEl.off("keydown", t), r.menuContentEl[0].removeEventListener("click", d, !0)
                            }
                    }
                    return u(r), o.inherit(r.menuContentEl, r.target), r.cleanupResizing = h(), r.hideBackdrop = p(n, i, r), d().then(function(e) {
                        return r.alreadyOpen = !0, r.cleanupInteraction = f(), e
                    })
                }

                function g(t, n, o, i) {
                    for (var r, a = e.getClosest(t.target, "MD-MENU-ITEM"), d = e.nodesToArray(n[0].children), s = d.indexOf(a), c = s + i; c >= 0 && c < d.length; c += i) {
                        var l = d[c].querySelector(".md-button");
                        if (r = b(l)) break
                    }
                    return r
                }

                function b(e) {
                    if (e && e.getAttribute("tabindex") != -1) return e.focus(), d[0].activeElement == e
                }

                function v(e, t) {
                    t.preserveElement ? i(e).style.display = "none" : i(e).parentNode === i(t.parent) && i(t.parent).removeChild(i(e))
                }

                function E(t, o) {
                    function i(e) {
                        e.top = Math.max(Math.min(e.top, v.bottom - l.offsetHeight), v.top), e.left = Math.max(Math.min(e.left, v.right - l.offsetWidth), v.left)
                    }

                    function a() {
                        for (var e = 0; e < m.children.length; ++e)
                            if ("none" != s.getComputedStyle(m.children[e]).display) return m.children[e]
                    }
                    var c, l = t[0],
                        m = t[0].firstElementChild,
                        u = m.getBoundingClientRect(),
                        p = d[0].body,
                        h = p.getBoundingClientRect(),
                        f = s.getComputedStyle(m),
                        g = o.target[0].querySelector($.buildSelector("md-menu-origin")) || o.target[0],
                        b = g.getBoundingClientRect(),
                        v = {
                            left: h.left + r,
                            top: Math.max(h.top, 0) + r,
                            bottom: Math.max(h.bottom, Math.max(h.top, 0) + h.height) - r,
                            right: h.right - r
                        },
                        E = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        C = {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        y = o.mdMenuCtrl.positionMode();
                    "target" != y.top && "target" != y.left && "target-right" != y.left || (c = a(), c && (c = c.firstElementChild || c, c = c.querySelector($.buildSelector("md-menu-align-target")) || c, E = c.getBoundingClientRect(), C = {
                        top: parseFloat(l.style.top || 0),
                        left: parseFloat(l.style.left || 0)
                    }));
                    var M = {},
                        T = "top ";
                    switch (y.top) {
                        case "target":
                            M.top = C.top + b.top - E.top;
                            break;
                        case "cascade":
                            M.top = b.top - parseFloat(f.paddingTop) - g.style.top;
                            break;
                        case "bottom":
                            M.top = b.top + b.height;
                            break;
                        default:
                            throw new Error('Invalid target mode "' + y.top + '" specified for md-menu on Y axis.')
                    }
                    var A = "rtl" == e.bidi();
                    switch (y.left) {
                        case "target":
                            M.left = C.left + b.left - E.left, T += A ? "right" : "left";
                            break;
                        case "target-left":
                            M.left = b.left, T += "left";
                            break;
                        case "target-right":
                            M.left = b.right - u.width + (u.right - E.right), T += "right";
                            break;
                        case "cascade":
                            var w = A ? b.left - u.width < v.left : b.right + u.width < v.right;
                            M.left = w ? b.right - g.style.left : b.left - g.style.left - u.width, T += w ? "left" : "right";
                            break;
                        case "right":
                            A ? (M.left = b.right - b.width, T += "left") : (M.left = b.right - u.width, T += "right");
                            break;
                        case "left":
                            A ? (M.left = b.right - u.width, T += "right") : (M.left = b.left, T += "left");
                            break;
                        default:
                            throw new Error('Invalid target mode "' + y.left + '" specified for md-menu on X axis.')
                    }
                    var k = o.mdMenuCtrl.offsets();
                    M.top += k.top, M.left += k.left, i(M);
                    var _ = Math.round(100 * Math.min(b.width / l.offsetWidth, 1)) / 100,
                        x = Math.round(100 * Math.min(b.height / l.offsetHeight, 1)) / 100;
                    return {
                        top: Math.round(M.top),
                        left: Math.round(M.left),
                        transform: o.alreadyOpen ? n : e.supplant("scale({0},{1})", [_, x]),
                        transformOrigin: T
                    }
                }
                var $ = e.prefixer(),
                    C = e.dom.animator;
                return {
                    parent: "body",
                    onShow: f,
                    onRemove: h,
                    hasBackdrop: !0,
                    disableParentScroll: !0,
                    skipCompile: !0,
                    preserveScope: !0,
                    skipHide: !0,
                    themable: !0
                }
            }

            function i(e) {
                return e instanceof t.element && (e = e[0]), e
            }
            var r = 8;
            return o.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"], e("$mdMenu").setDefaults({
                methods: ["target"],
                options: o
            })
        }
        t.module("material.components.menu").provider("$mdMenu", e), e.$inject = ["$$interimElementProvider"]
    }(),
    function() {
        function e(e, n, i, r, a, d, s, c) {
            this.$element = i, this.$attrs = r, this.$mdConstant = a, this.$mdUtil = s, this.$document = d, this.$scope = e, this.$rootScope = n, this.$timeout = c;
            var l = this;
            t.forEach(o, function(e) {
                l[e] = t.bind(l, l[e])
            })
        }
        t.module("material.components.menuBar").controller("MenuBarController", e);
        var o = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];
        e.$inject = ["$scope", "$rootScope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], e.prototype.init = function() {
            var e = this.$element,
                t = this.$mdUtil,
                o = this.$scope,
                i = this,
                r = [];
            e.on("keydown", this.handleKeyDown), this.parentToolbar = t.getClosest(e, "MD-TOOLBAR"), r.push(this.$rootScope.$on("$mdMenuOpen", function(t, n) {
                i.getMenus().indexOf(n[0]) != -1 && (e[0].classList.add("md-open"), n[0].classList.add("md-open"), i.currentlyOpenMenu = n.controller("mdMenu"), i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown), i.enableOpenOnHover())
            })), r.push(this.$rootScope.$on("$mdMenuClose", function(o, r, a) {
                var d = i.getMenus();
                if (d.indexOf(r[0]) != -1 && (e[0].classList.remove("md-open"), r[0].classList.remove("md-open")), e[0].contains(r[0])) {
                    for (var s = r[0]; s && d.indexOf(s) == -1;) s = t.getClosest(s, "MD-MENU", !0);
                    s && (a.skipFocus || s.querySelector("button:not([disabled])").focus(), i.currentlyOpenMenu = n, i.disableOpenOnHover(), i.setKeyboardMode(!0))
                }
            })), o.$on("$destroy", function() {
                for (; r.length;) r.shift()()
            }), this.setKeyboardMode(!0)
        }, e.prototype.setKeyboardMode = function(e) {
            e ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode")
        }, e.prototype.enableOpenOnHover = function() {
            if (!this.openOnHoverEnabled) {
                this.openOnHoverEnabled = !0;
                var e;
                (e = this.parentToolbar) && (e.dataset.mdRestoreStyle = e.getAttribute("style"), e.style.position = "relative", e.style.zIndex = 100), t.element(this.getMenus()).on("mouseenter", this.handleMenuHover)
            }
        }, e.prototype.handleMenuHover = function(e) {
            this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(e)
        }, e.prototype.disableOpenOnHover = function() {
            if (this.openOnHoverEnabled) {
                this.openOnHoverEnabled = !1;
                var e;
                (e = this.parentToolbar) && (e.style.cssText = e.dataset.mdRestoreStyle || ""), t.element(this.getMenus()).off("mouseenter", this.handleMenuHover)
            }
        }, e.prototype.scheduleOpenHoveredMenu = function(e) {
            var n = t.element(e.currentTarget),
                o = n.controller("mdMenu");
            this.setKeyboardMode(!1), this.scheduleOpenMenu(o)
        }, e.prototype.scheduleOpenMenu = function(e) {
            var t = this,
                o = this.$timeout;
            e != t.currentlyOpenMenu && (o.cancel(t.pendingMenuOpen), t.pendingMenuOpen = o(function() {
                t.pendingMenuOpen = n, t.currentlyOpenMenu && t.currentlyOpenMenu.close(!0, {
                    closeAll: !0
                }), e.open()
            }, 200, !1))
        }, e.prototype.handleKeyDown = function(e) {
            var n = this.$mdConstant.KEY_CODE,
                o = this.currentlyOpenMenu,
                i = o && o.isOpen;
            this.setKeyboardMode(!0);
            var r, a, d;
            switch (e.keyCode) {
                case n.DOWN_ARROW:
                    o ? o.focusMenuContainer() : this.openFocusedMenu(), r = !0;
                    break;
                case n.UP_ARROW:
                    o && o.close(), r = !0;
                    break;
                case n.LEFT_ARROW:
                    a = this.focusMenu(-1), i && (d = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(d)), r = !0;
                    break;
                case n.RIGHT_ARROW:
                    a = this.focusMenu(1), i && (d = t.element(a).controller("mdMenu"), this.scheduleOpenMenu(d)), r = !0
            }
            r && (e && e.preventDefault && e.preventDefault(), e && e.stopImmediatePropagation && e.stopImmediatePropagation())
        }, e.prototype.focusMenu = function(e) {
            var t = this.getMenus(),
                n = this.getFocusedMenuIndex();
            n == -1 && (n = this.getOpenMenuIndex());
            var o = !1;
            if (n == -1 ? (n = 0, o = !0) : (e < 0 && n > 0 || e > 0 && n < t.length - e) && (n += e, o = !0), o) return t[n].querySelector("button").focus(), t[n]
        }, e.prototype.openFocusedMenu = function() {
            var e = this.getFocusedMenu();
            e && t.element(e).controller("mdMenu").open()
        }, e.prototype.getMenus = function() {
            var e = this.$element;
            return this.$mdUtil.nodesToArray(e[0].children).filter(function(e) {
                return "MD-MENU" == e.nodeName
            })
        }, e.prototype.getFocusedMenu = function() {
            return this.getMenus()[this.getFocusedMenuIndex()]
        }, e.prototype.getFocusedMenuIndex = function() {
            var e = this.$mdUtil,
                t = e.getClosest(this.$document[0].activeElement, "MD-MENU");
            if (!t) return -1;
            var n = this.getMenus().indexOf(t);
            return n
        }, e.prototype.getOpenMenuIndex = function() {
            for (var e = this.getMenus(), t = 0; t < e.length; ++t)
                if (e[t].classList.contains("md-open")) return t;
            return -1
        }
    }(),
    function() {
        function e(e, n) {
            return {
                restrict: "E",
                require: "mdMenuBar",
                controller: "MenuBarController",
                compile: function(o, i) {
                    return i.ariaRole || o[0].setAttribute("role", "menubar"), t.forEach(o[0].children, function(n) {
                            if ("MD-MENU" == n.nodeName) {
                                n.hasAttribute("md-position-mode") || (n.setAttribute("md-position-mode", "left bottom"), n.querySelector("button, a, md-button").setAttribute("role", "menuitem"));
                                var o = e.nodesToArray(n.querySelectorAll("md-menu-content"));
                                t.forEach(o, function(e) {
                                    e.classList.add("md-menu-bar-menu"), e.classList.add("md-dense"), e.hasAttribute("width") || e.setAttribute("width", 5)
                                })
                            }
                        }), o.find("md-menu-item").addClass("md-in-menu-bar"),
                        function(e, t, o, i) {
                            t.addClass("_md"), n(e, t), i.init()
                        }
                }
            }
        }
        t.module("material.components.menuBar").directive("mdMenuBar", e), e.$inject = ["$mdUtil", "$mdTheming"]
    }(),
    function() {
        function e() {
            return {
                restrict: "E",
                compile: function(e, t) {
                    t.role || e[0].setAttribute("role", "separator")
                }
            }
        }
        t.module("material.components.menuBar").directive("mdMenuDivider", e)
    }(),
    function() {
        function e(e, t, n) {
            this.$element = t, this.$attrs = n, this.$scope = e
        }
        t.module("material.components.menuBar").controller("MenuItemController", e), e.$inject = ["$scope", "$element", "$attrs"], e.prototype.init = function(e) {
            var t = this.$element,
                n = this.$attrs;
            this.ngModel = e, "checkbox" != n.type && "radio" != n.type || (this.mode = n.type, this.iconEl = t[0].children[0], this.buttonEl = t[0].children[1], e && this.initClickListeners())
        }, e.prototype.clearNgAria = function() {
            var e = this.$element[0],
                n = ["role", "tabindex", "aria-invalid", "aria-checked"];
            t.forEach(n, function(t) {
                e.removeAttribute(t)
            })
        }, e.prototype.initClickListeners = function() {
            function e() {
                if ("radio" == d) {
                    var e = a.ngValue ? r.$eval(a.ngValue) : a.value;
                    return i.$modelValue == e;
                }
                return i.$modelValue
            }

            function n(e) {
                e ? c.off("click", l) : c.on("click", l)
            }
            var o = this,
                i = this.ngModel,
                r = this.$scope,
                a = this.$attrs,
                d = (this.$element, this.mode);
            this.handleClick = t.bind(this, this.handleClick);
            var s = this.iconEl,
                c = t.element(this.buttonEl),
                l = this.handleClick;
            a.$observe("disabled", n), n(a.disabled), i.$render = function() {
                o.clearNgAria(), e() ? (s.style.display = "", c.attr("aria-checked", "true")) : (s.style.display = "none", c.attr("aria-checked", "false"))
            }, r.$$postDigest(i.$render)
        }, e.prototype.handleClick = function(e) {
            var t, n = this.mode,
                o = this.ngModel,
                i = this.$attrs;
            "checkbox" == n ? t = !o.$modelValue : "radio" == n && (t = i.ngValue ? this.$scope.$eval(i.ngValue) : i.value), o.$setViewValue(t), o.$render()
        }
    }(),
    function() {
        function e(e) {
            return {
                controller: "MenuItemController",
                require: ["mdMenuItem", "?ngModel"],
                priority: 210,
                compile: function(n, o) {
                    function i(e, o, i) {
                        i = i || n, i instanceof t.element && (i = i[0]), i.hasAttribute(e) || i.setAttribute(e, o)
                    }

                    function r(o) {
                        var i = e.prefixer(o);
                        t.forEach(i, function(e) {
                            if (n[0].hasAttribute(e)) {
                                var t = n[0].getAttribute(e);
                                c[0].setAttribute(e, t), n[0].removeAttribute(e)
                            }
                        })
                    }
                    var a = o.type,
                        d = "md-in-menu-bar";
                    if ("checkbox" != a && "radio" != a || !n.hasClass(d)) i("role", "menuitem", n[0].querySelector("md-button, button, a"));
                    else {
                        var s = n[0].textContent,
                            c = t.element('<md-button type="button"></md-button>');
                        c.html(s), c.attr("tabindex", "0"), n.html(""), n.append(t.element('<md-icon md-svg-icon="check"></md-icon>')), n.append(c), n.addClass("md-indent").removeClass(d), i("role", "checkbox" == a ? "menuitemcheckbox" : "menuitemradio", c), r("ng-disabled")
                    }
                    return function(e, t, n, o) {
                        var i = o[0],
                            r = o[1];
                        i.init(r)
                    }
                }
            }
        }
        t.module("material.components.menuBar").directive("mdMenuItem", e), e.$inject = ["$mdUtil"]
    }(),
    function() {
        function e(e, n, o, i, r, a) {
            function d(a, d, c) {
                function f(t, o, r, d, c) {
                    var l = ++N,
                        h = i.now(),
                        f = o - t,
                        g = m(a.mdDiameter),
                        b = g - u(g),
                        v = r || n.easeFn,
                        E = d || n.duration;
                    o === t ? k.attr("d", s(o, g, b, c)) : M = p(function $(n) {
                        var o = e.Math.max(0, e.Math.min((n || i.now()) - h, E));
                        k.attr("d", s(v(o, t, f, E), g, b, c)), l === N && o < E && (M = p($))
                    })
                }

                function $() {
                    f(_, x, n.easeFnIndeterminate, n.durationIndeterminate, S), S = (S + x) % 100;
                    var e = _;
                    _ = -x, x = -e
                }

                function C() {
                    T || (T = r($, n.durationIndeterminate + 50, 0, !1), $(), d.addClass(E).removeAttr("aria-valuenow"))
                }

                function y() {
                    T && (r.cancel(T), T = null, d.removeClass(E))
                }
                var M, T, A = d[0],
                    w = t.element(A.querySelector("svg")),
                    k = t.element(A.querySelector("path")),
                    _ = n.startIndeterminate,
                    x = n.endIndeterminate,
                    S = 0,
                    N = 0;
                o(d), d.toggleClass(v, c.hasOwnProperty("disabled")), a.mdMode === b && C(), a.$on("$destroy", function() {
                    y(), M && h(M)
                }), a.$watchGroup(["value", "mdMode", function() {
                    var e = A.disabled;
                    return e === !0 || e === !1 ? e : t.isDefined(d.attr("disabled"))
                }], function(e, t) {
                    var n = e[1],
                        o = e[2],
                        i = t[2];
                    if (o !== i && d.toggleClass(v, !!o), o) y();
                    else if (n !== g && n !== b && (n = b, c.$set("mdMode", n)), n === b) C();
                    else {
                        var r = l(e[0]);
                        y(), d.attr("aria-valuenow", r), f(l(t[0]), r)
                    }
                }), a.$watch("mdDiameter", function(e) {
                    var t = m(e),
                        n = u(t),
                        o = t / 2 + "px",
                        i = {
                            width: t + "px",
                            height: t + "px"
                        };
                    w[0].setAttribute("viewBox", "0 0 " + t + " " + t), w.css(i).css("transform-origin", o + " " + o + " " + o), d.css(i), k.css("stroke-width", n + "px")
                })
            }

            function s(e, t, n, o) {
                var i, r = 3.5999,
                    a = o || 0,
                    d = t / 2,
                    s = n / 2,
                    l = a * r,
                    m = e * r,
                    u = c(d, s, l),
                    p = c(d, s, m + l),
                    h = m < 0 ? 0 : 1;
                return i = m < 0 ? m >= -180 ? 0 : 1 : m <= 180 ? 0 : 1, "M" + u + "A" + s + "," + s + " 0 " + i + "," + h + " " + p
            }

            function c(t, n, o) {
                var i = (o - 90) * f;
                return t + n * e.Math.cos(i) + "," + (t + n * e.Math.sin(i))
            }

            function l(t) {
                return e.Math.max(0, e.Math.min(t || 0, 100))
            }

            function m(e) {
                var t = n.progressSize;
                if (e) {
                    var o = parseFloat(e);
                    return e.lastIndexOf("%") === e.length - 1 && (o = o / 100 * t), o
                }
                return t
            }

            function u(e) {
                return n.strokeWidth / 100 * e
            }
            var p = e.requestAnimationFrame || t.noop,
                h = e.cancelAnimationFrame || t.noop,
                f = e.Math.PI / 180,
                g = "determinate",
                b = "indeterminate",
                v = "_md-progress-circular-disabled",
                E = "md-mode-indeterminate";
            return {
                restrict: "E",
                scope: {
                    value: "@",
                    mdDiameter: "@",
                    mdMode: "@"
                },
                template: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',
                compile: function(e, n) {
                    if (e.attr({
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            role: "progressbar"
                        }), t.isUndefined(n.mdMode)) {
                        var o = t.isDefined(n.value),
                            i = o ? g : b;
                        n.$set("mdMode", i)
                    } else n.$set("mdMode", n.mdMode.trim());
                    return d
                }
            }
        }
        t.module("material.components.progressCircular").directive("mdProgressCircular", e), e.$inject = ["$window", "$mdProgressCircular", "$mdTheming", "$mdUtil", "$interval", "$log"]
    }(),
    function() {
        function e() {
            function e(e, t, n, o) {
                return n * e / o + t
            }

            function n(e, t, n, o) {
                var i = (e /= o) * e,
                    r = i * e;
                return t + n * (6 * r * i + -15 * i * i + 10 * r)
            }
            var o = {
                progressSize: 50,
                strokeWidth: 10,
                duration: 100,
                easeFn: e,
                durationIndeterminate: 500,
                startIndeterminate: 3,
                endIndeterminate: 80,
                easeFnIndeterminate: n,
                easingPresets: {
                    linearEase: e,
                    materialEase: n
                }
            };
            return {
                configure: function(e) {
                    return o = t.extend(o, e || {})
                },
                $get: function() {
                    return o
                }
            }
        }
        t.module("material.components.progressCircular").provider("$mdProgressCircular", e)
    }(),
    function() {
        function e() {
            function e(e, o, i, r) {
                if (r) {
                    var a = r.getTabElementIndex(o),
                        d = n(o, "md-tab-body").remove(),
                        s = n(o, "md-tab-label").remove(),
                        c = r.insertTab({
                            scope: e,
                            parent: e.$parent,
                            index: a,
                            element: o,
                            template: d.html(),
                            label: s.html()
                        }, a);
                    e.select = e.select || t.noop, e.deselect = e.deselect || t.noop, e.$watch("active", function(e) {
                        e && r.select(c.getIndex(), !0)
                    }), e.$watch("disabled", function() {
                        r.refreshIndex()
                    }), e.$watch(function() {
                        return r.getTabElementIndex(o)
                    }, function(e) {
                        c.index = e, r.updateTabOrder()
                    }), e.$on("$destroy", function() {
                        r.removeTab(c)
                    })
                }
            }

            function n(e, n) {
                for (var o = e[0].children, i = 0, r = o.length; i < r; i++) {
                    var a = o[i];
                    if (a.tagName === n.toUpperCase()) return t.element(a)
                }
                return t.element()
            }
            return {
                require: "^?mdTabs",
                terminal: !0,
                compile: function(o, i) {
                    var r = n(o, "md-tab-label"),
                        a = n(o, "md-tab-body");
                    if (0 == r.length && (r = t.element("<md-tab-label></md-tab-label>"), i.label ? r.text(i.label) : r.append(o.contents()), 0 == a.length)) {
                        var d = o.contents().detach();
                        a = t.element("<md-tab-body></md-tab-body>"), a.append(d)
                    }
                    return o.append(r), a.html() && o.append(a), e
                },
                scope: {
                    active: "=?mdActive",
                    disabled: "=?ngDisabled",
                    select: "&?mdOnSelect",
                    deselect: "&?mdOnDeselect"
                }
            }
        }
        t.module("material.components.tabs").directive("mdTab", e)
    }(),
    function() {
        function e() {
            return {
                require: "^?mdTabs",
                link: function(e, t, n, o) {
                    o && o.attachRipple(e, t)
                }
            }
        }
        t.module("material.components.tabs").directive("mdTabItem", e)
    }(),
    function() {
        function e() {
            return {
                terminal: !0
            }
        }
        t.module("material.components.tabs").directive("mdTabLabel", e)
    }(),
    function() {
        function e(e) {
            return {
                restrict: "A",
                compile: function(t, n) {
                    var o = e(n.mdTabScroll, null, !0);
                    return function(e, t) {
                        t.on("mousewheel", function(t) {
                            e.$apply(function() {
                                o(e, {
                                    $event: t
                                })
                            })
                        })
                    }
                }
            }
        }
        t.module("material.components.tabs").directive("mdTabScroll", e), e.$inject = ["$parse"]
    }(),
    function() {
        function e(e, o, i, r, a, d, s, c, l, m) {
            function u() {
                le.selectedIndex = le.selectedIndex || 0, p(), f(), h(), m(o), d.nextTick(function() {
                    ue = F(), re(), te(), ae(), le.tabs[le.selectedIndex] && le.tabs[le.selectedIndex].scope.select(), fe = !0, Y()
                })
            }

            function p() {
                var e = c.$mdTabsTemplate,
                    n = t.element(o[0].querySelector("md-tab-data"));
                n.html(e), l(n.contents())(le.parent), delete c.$mdTabsTemplate
            }

            function h() {
                t.element(i).on("resize", I), e.$on("$destroy", v)
            }

            function f() {
                e.$watch("$mdTabsCtrl.selectedIndex", w)
            }

            function g(e, t) {
                var n = c.$normalize("md-" + e);
                t && V(e, t), c.$observe(n, function(t) {
                    le[e] = t
                })
            }

            function b(e, t) {
                function n(t) {
                    le[e] = "false" !== t
                }
                var o = c.$normalize("md-" + e);
                t && V(e, t), c.hasOwnProperty(o) && n(c[o]), c.$observe(o, n)
            }

            function v() {
                he = !0, t.element(i).off("resize", I)
            }

            function E(e) {
                var n = F();
                t.element(n.wrapper).toggleClass("md-stretch-tabs", j()), ae()
            }

            function $(e) {
                le.shouldCenterTabs = q()
            }

            function C(e, n) {
                if (e !== n) {
                    var o = F();
                    t.forEach(o.tabs, function(t) {
                        t.style.maxWidth = e + "px"
                    }), d.nextTick(le.updateInkBarStyles)
                }
            }

            function y(e, t) {
                e !== t && (le.maxTabWidth = Q(), le.shouldCenterTabs = q(), d.nextTick(function() {
                    le.maxTabWidth = Q(), te(le.selectedIndex)
                }))
            }

            function M(e) {
                o[e ? "removeClass" : "addClass"]("md-no-tab-content")
            }

            function T(n) {
                var o = F(),
                    i = le.shouldCenterTabs ? "" : "-" + n + "px";
                t.element(o.paging).css(r.CSS.TRANSFORM, "translate3d(" + i + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged")
            }

            function A(e, t) {
                e !== t && F().tabs[e] && (te(), ee())
            }

            function w(t, n) {
                t !== n && (le.selectedIndex = W(t), le.lastSelectedIndex = n, le.updateInkBarStyles(), re(), te(t), e.$broadcast("$mdTabsChanged"), le.tabs[n] && le.tabs[n].scope.deselect(), le.tabs[t] && le.tabs[t].scope.select())
            }

            function k(e) {
                var t = o[0].getElementsByTagName("md-tab");
                return Array.prototype.indexOf.call(t, e[0])
            }

            function _() {
                _.watcher || (_.watcher = e.$watch(function() {
                    d.nextTick(function() {
                        _.watcher && o.prop("offsetParent") && (_.watcher(), _.watcher = null, I())
                    }, !1)
                }))
            }

            function x(e) {
                switch (e.keyCode) {
                    case r.KEY_CODE.LEFT_ARROW:
                        e.preventDefault(), J(-1, !0);
                        break;
                    case r.KEY_CODE.RIGHT_ARROW:
                        e.preventDefault(), J(1, !0);
                        break;
                    case r.KEY_CODE.SPACE:
                    case r.KEY_CODE.ENTER:
                        e.preventDefault(), me || S(le.focusIndex)
                }
                le.lastClick = !1
            }

            function S(e, t) {
                me || (le.focusIndex = le.selectedIndex = e), le.lastClick = !0, t && le.noSelectClick || d.nextTick(function() {
                    le.tabs[e].element.triggerHandler("click")
                }, !1)
            }

            function N(e) {
                le.shouldPaginate && (e.preventDefault(), le.offsetLeft = se(le.offsetLeft - e.wheelDelta))
            }

            function D() {
                var e, t, n = F(),
                    o = n.canvas.clientWidth,
                    i = o + le.offsetLeft;
                for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth > i)); e++);
                le.offsetLeft = se(t.offsetLeft)
            }

            function H() {
                var e, t, n = F();
                for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth >= le.offsetLeft)); e++);
                le.offsetLeft = se(t.offsetLeft + t.offsetWidth - n.canvas.clientWidth)
            }

            function I() {
                le.lastSelectedIndex = le.selectedIndex, le.offsetLeft = se(le.offsetLeft), d.nextTick(function() {
                    le.updateInkBarStyles(), Y()
                })
            }

            function O(e) {
                t.element(F().inkBar).toggleClass("ng-hide", e)
            }

            function R(e) {
                o.toggleClass("md-dynamic-height", e)
            }

            function L(e) {
                if (!he) {
                    var t = le.selectedIndex,
                        n = le.tabs.splice(e.getIndex(), 1)[0];
                    ie(), le.selectedIndex === t && (n.scope.deselect(), le.tabs[le.selectedIndex] && le.tabs[le.selectedIndex].scope.select()), d.nextTick(function() {
                        Y(), le.offsetLeft = se(le.offsetLeft)
                    })
                }
            }

            function P(e, n) {
                var o = fe,
                    i = {
                        getIndex: function() {
                            return le.tabs.indexOf(r)
                        },
                        isActive: function() {
                            return this.getIndex() === le.selectedIndex
                        },
                        isLeft: function() {
                            return this.getIndex() < le.selectedIndex
                        },
                        isRight: function() {
                            return this.getIndex() > le.selectedIndex
                        },
                        shouldRender: function() {
                            return !le.noDisconnect || this.isActive()
                        },
                        hasFocus: function() {
                            return !le.lastClick && le.hasFocus && this.getIndex() === le.focusIndex
                        },
                        id: d.nextUid()
                    },
                    r = t.extend(i, e);
                return t.isDefined(n) ? le.tabs.splice(n, 0, r) : le.tabs.push(r), ne(), oe(), d.nextTick(function() {
                    Y(), o && le.autoselect && d.nextTick(function() {
                        d.nextTick(function() {
                            S(le.tabs.indexOf(r))
                        })
                    })
                }), r
            }

            function F() {
                var e = {},
                    t = o[0];
                return e.wrapper = t.querySelector("md-tabs-wrapper"), e.canvas = e.wrapper.querySelector("md-tabs-canvas"), e.paging = e.canvas.querySelector("md-pagination-wrapper"), e.inkBar = e.paging.querySelector("md-ink-bar"), e.contents = t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"), e.tabs = e.paging.querySelectorAll("md-tab-item"), e.dummies = e.canvas.querySelectorAll("md-dummy-tab"), e
            }

            function B() {
                return le.offsetLeft > 0
            }

            function U() {
                var e = F(),
                    t = e.tabs[e.tabs.length - 1];
                return t && t.offsetLeft + t.offsetWidth > e.canvas.clientWidth + le.offsetLeft
            }

            function j() {
                switch (le.stretchTabs) {
                    case "always":
                        return !0;
                    case "never":
                        return !1;
                    default:
                        return !le.shouldPaginate && i.matchMedia("(max-width: 600px)").matches
                }
            }

            function q() {
                return le.centerTabs && !le.shouldPaginate
            }

            function z() {
                if (le.noPagination || !fe) return !1;
                var e = o.prop("clientWidth");
                return t.forEach(F().dummies, function(t) {
                    e -= t.offsetWidth
                }), e < 0
            }

            function W(e) {
                if (e === -1) return -1;
                var t, n, o = Math.max(le.tabs.length - e, e);
                for (t = 0; t <= o; t++) {
                    if (n = le.tabs[e + t], n && n.scope.disabled !== !0) return n.getIndex();
                    if (n = le.tabs[e - t], n && n.scope.disabled !== !0) return n.getIndex()
                }
                return e
            }

            function V(e, t, n) {
                Object.defineProperty(le, e, {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        var o = n;
                        n = e, t && t(e, o)
                    }
                })
            }

            function Y() {
                K(), le.maxTabWidth = Q(), le.shouldPaginate = z()
            }

            function K() {
                var e = F();
                j() ? t.element(e.paging).css("width", "") : t.element(e.paging).css("width", G() + "px")
            }

            function G() {
                return X(F().dummies)
            }

            function X(e) {
                var n = 0;
                return t.forEach(e, function(e) {
                    n += Math.max(e.offsetWidth, e.getBoundingClientRect().width)
                }), Math.ceil(n)
            }

            function Q() {
                return o.prop("clientWidth")
            }

            function Z() {
                var e = le.tabs[le.selectedIndex],
                    t = le.tabs[le.focusIndex];
                le.tabs = le.tabs.sort(function(e, t) {
                    return e.index - t.index
                }), le.selectedIndex = le.tabs.indexOf(e), le.focusIndex = le.tabs.indexOf(t)
            }

            function J(e, t) {
                var n, o = t ? "focusIndex" : "selectedIndex",
                    i = le[o];
                for (n = i + e; le.tabs[n] && le.tabs[n].scope.disabled; n += e);
                le.tabs[n] && (le[o] = n)
            }

            function ee() {
                F().dummies[le.focusIndex].focus()
            }

            function te(e) {
                var t = F();
                if (null == e && (e = le.focusIndex), t.tabs[e] && !le.shouldCenterTabs) {
                    var n = t.tabs[e],
                        o = n.offsetLeft,
                        i = n.offsetWidth + o;
                    le.offsetLeft = Math.max(le.offsetLeft, se(i - t.canvas.clientWidth + 64)), le.offsetLeft = Math.min(le.offsetLeft, se(o))
                }
            }

            function ne() {
                pe.forEach(function(e) {
                    d.nextTick(e)
                }), pe = []
            }

            function oe() {
                var e = !1;
                t.forEach(le.tabs, function(t) {
                    t.template && (e = !0)
                }), le.hasContent = e
            }

            function ie() {
                le.selectedIndex = W(le.selectedIndex), le.focusIndex = W(le.focusIndex)
            }

            function re() {
                if (!le.dynamicHeight) return o.css("height", "");
                if (!le.tabs.length) return pe.push(re);
                var e = F(),
                    t = e.contents[le.selectedIndex],
                    i = t ? t.offsetHeight : 0,
                    r = e.wrapper.offsetHeight,
                    a = i + r,
                    c = o.prop("clientHeight");
                if (c !== a) {
                    "bottom" === o.attr("md-align-tabs") && (c -= r, a -= r, o.attr("md-border-bottom") !== n && ++c), me = !0;
                    var l = {
                            height: c + "px"
                        },
                        m = {
                            height: a + "px"
                        };
                    o.css(l), s(o, {
                        from: l,
                        to: m,
                        easing: "cubic-bezier(0.35, 0, 0.25, 1)",
                        duration: .5
                    }).start().done(function() {
                        o.css({
                            transition: "none",
                            height: ""
                        }), d.nextTick(function() {
                            o.css("transition", "")
                        }), me = !1
                    })
                }
            }

            function ae() {
                var e = F();
                if (!e.tabs[le.selectedIndex]) return void t.element(e.inkBar).css({
                    left: "auto",
                    right: "auto"
                });
                if (!le.tabs.length) return pe.push(le.updateInkBarStyles);
                if (!o.prop("offsetParent")) return _();
                var n = le.selectedIndex,
                    i = e.paging.offsetWidth,
                    r = e.tabs[n],
                    a = r.offsetLeft,
                    s = i - a - r.offsetWidth;
                if (le.shouldCenterTabs) {
                    var c = X(e.tabs);
                    i > c && d.nextTick(ae, !1)
                }
                de(), t.element(e.inkBar).css({
                    left: a + "px",
                    right: s + "px"
                })
            }

            function de() {
                var e = F(),
                    n = le.selectedIndex,
                    o = le.lastSelectedIndex,
                    i = t.element(e.inkBar);
                t.isNumber(o) && i.toggleClass("md-left", n < o).toggleClass("md-right", n > o)
            }

            function se(e) {
                var t = F();
                if (!t.tabs.length || !le.shouldPaginate) return 0;
                var n = t.tabs[t.tabs.length - 1],
                    o = n.offsetLeft + n.offsetWidth;
                return e = Math.max(0, e), e = Math.min(o - t.canvas.clientWidth, e)
            }

            function ce(e, n) {
                var o = F(),
                    i = {
                        colorElement: t.element(o.inkBar)
                    };
                a.attach(e, n, i)
            }
            var le = this,
                me = !1,
                ue = F(),
                pe = [],
                he = !1,
                fe = !1;
            g("stretchTabs", E), V("focusIndex", A, le.selectedIndex || 0), V("offsetLeft", T, 0), V("hasContent", M, !1), V("maxTabWidth", C, Q()), V("shouldPaginate", y, !1), b("noInkBar", O), b("dynamicHeight", R), b("noPagination"), b("swipeContent"), b("noDisconnect"), b("autoselect"), b("noSelectClick"), b("centerTabs", $, !1), b("enableDisconnect"), le.scope = e, le.parent = e.$parent, le.tabs = [], le.lastSelectedIndex = null, le.hasFocus = !1, le.lastClick = !0, le.shouldCenterTabs = q(), le.updatePagination = d.debounce(Y, 100), le.redirectFocus = ee, le.attachRipple = ce, le.insertTab = P, le.removeTab = L, le.select = S, le.scroll = N, le.nextPage = D, le.previousPage = H, le.keydown = x, le.canPageForward = U, le.canPageBack = B, le.refreshIndex = ie, le.incrementIndex = J, le.getTabElementIndex = k, le.updateInkBarStyles = d.debounce(ae, 100), le.updateTabOrder = d.debounce(Z, 100), u()
        }
        t.module("material.components.tabs").controller("MdTabsController", e), e.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming"]
    }(),
    function() {
        function e(e) {
            return {
                scope: {
                    selectedIndex: "=?mdSelected"
                },
                template: function(t, n) {
                    return n.$mdTabsTemplate = t.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="tab-content-{{::tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'
                },
                controller: "MdTabsController",
                controllerAs: "$mdTabsCtrl",
                bindToController: !0
            }
        }
        t.module("material.components.tabs").directive("mdTabs", e), e.$inject = ["$$mdSvgRegistry"]
    }(),
    function() {
        function e(e) {
            return {
                require: "^?mdTabs",
                link: function(e, t, n, o) {
                    if (o) {
                        var i = new MutationObserver(function(e) {
                                o.updatePagination(), o.updateInkBarStyles()
                            }),
                            r = {
                                childList: !0,
                                subtree: !0,
                                characterData: !0
                            };
                        i.observe(t[0], r), e.$on("$destroy", function() {
                            i && i.disconnect()
                        })
                    }
                }
            }
        }
        t.module("material.components.tabs").directive("mdTabsDummyWrapper", e), e.$inject = ["$mdUtil"]
    }(),
    function() {
        function e(e, t) {
            function n(n, o, i, r) {
                function a() {
                    n.$watch("connected", function(e) {
                        e === !1 ? d() : s()
                    }), n.$on("$destroy", s)
                }

                function d() {
                    r.enableDisconnect && t.disconnectScope(c)
                }

                function s() {
                    r.enableDisconnect && t.reconnectScope(c)
                }
                if (r) {
                    var c = r.enableDisconnect ? n.compileScope.$new() : n.compileScope;
                    return o.html(n.template), e(o.contents())(c), t.nextTick(a)
                }
            }
            return {
                restrict: "A",
                link: n,
                scope: {
                    template: "=mdTabsTemplate",
                    connected: "=?mdConnectedIf",
                    compileScope: "=mdScope"
                },
                require: "^?mdTabs"
            }
        }
        t.module("material.components.tabs").directive("mdTabsTemplate", e), e.$inject = ["$compile", "$mdUtil"]
    }(),
    function() {
        t.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]) {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-600}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-600}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-600}}'; }  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-A700}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: default; }  .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }.md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }._md a.md-THEME_NAME-theme:not(.md-button).md-primary {  color: '{{primary-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover {    color: '{{primary-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-A700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-warn {  color: '{{warn-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover {    color: '{{warn-700}}'; }md-card.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-hue-1}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-A700}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{foreground-4}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }  md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input {    color: '{{foreground-1}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme md-chip md-icon {    color: '{{background-700}}'; }  md-chips.md-THEME_NAME-theme md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }  md-chips.md-THEME_NAME-theme md-chip._md-chip-editing {    background: transparent;    color: '{{background-800}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-default}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  background: '{{background-A100}}';  color: '{{background-A200-0.87}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-300}}';  color: '{{background-A200-0.87}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-300}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{background-A200-0.435}}'; }/** Theme styles for mdDatepicker. */.md-THEME_NAME-theme .md-datepicker-input {  color: '{{foreground-1}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{foreground-4}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-color}}'; }    .md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{accent-color}}'; }    .md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{warn-A700}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{primary-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon, .md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{accent-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon, .md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-calendar {  background: '{{background-A100}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-1}}';  color: '{{foreground-1}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme,.layout-xs-row > md-divider.md-THEME_NAME-theme, .layout-gt-xs-row > md-divider.md-THEME_NAME-theme,.layout-sm-row > md-divider.md-THEME_NAME-theme, .layout-gt-sm-row > md-divider.md-THEME_NAME-theme,.layout-md-row > md-divider.md-THEME_NAME-theme, .layout-gt-md-row > md-divider.md-THEME_NAME-theme,.layout-lg-row > md-divider.md-THEME_NAME-theme, .layout-gt-lg-row > md-divider.md-THEME_NAME-theme,.layout-xl-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label.md-required:after {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme .md-input-messages-animation, md-input-container.md-THEME_NAME-theme .md-input-message-animation {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter, md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input, md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input {  border-color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon {  color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],[disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-A100}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-item {    color: '{{background-A200-0.87}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item md-icon {      color: '{{background-A200-0.54}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] {      color: '{{background-A200-0.25}}'; }      md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon {        color: '{{background-A200-0.25}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{background-A200-0.11}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{background-A200-0.54}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-A100}}';  color: '{{background-A200}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{background-A100-0.87}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{background-A100-0.87}}'; }md-nav-bar.md-THEME_NAME-theme .md-nav-bar {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected {  color: '{{foreground-2}}'; }md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme path {  stroke: '{{primary-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-warn path {  stroke: '{{warn-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-accent path {  stroke: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-A700}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{warn-A700}}'; }md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{foreground-3}}'; }md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value {  color: '{{primary-color}}'; }  md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{primary-color}}'; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {    color: '{{warn-A700}}'; }md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-content {  background: '{{background-A100}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-optgroup {    color: '{{background-600-0.87}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-option {    color: '{{background-900-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text {      color: '{{background-400-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus, md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover {      background: '{{background-200}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[selected] {      color: '{{primary-500}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus {        color: '{{primary-600}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent {        color: '{{accent-color}}'; }        md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus {          color: '{{accent-A700}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon {  background-color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-hue-1}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  color: '{{background-contrast}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-A200-0.2}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}';  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}';  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-focus-ring {  background-color: '{{foreground-3-0.38}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after {  background-color: '{{background-contrast}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after, md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after {  background-color: '{{foreground-3}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb {  border-color: transparent;  background-color: transparent; }md-slider-container[disabled] > *:first-child:not(md-slider),md-slider-container[disabled] > *:last-child:not(md-slider) {  color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-default}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-A100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{accent-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary {        color: '{{primary-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-color}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}';    fill: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon {    color: '{{primary-contrast-0.26}}';    fill: '{{primary-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple {      color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon {      color: '{{accent-contrast}}';      fill: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {      color: '{{accent-contrast-0.26}}';      fill: '{{accent-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{foreground-2}}'; }/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }");
    }()
}(window, window.angular), window.ngMaterial = {
    version: {
        full: "1.1.0"
    }
};