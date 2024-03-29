/*
 AngularJS v1.5.5
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t, p) {
    'use strict';
    var b = "BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),
        l = function(a, c) {
            if (-1 !== c.indexOf(a[0].nodeName)) return !0
        };
    p.module("ngAria", ["ng"]).provider("$aria", function() {
        function a(a, b, m, h) {
            return function(d, f, e) {
                var q = e.$normalize(b);
                !c[q] || l(f, m) || e[q] || d.$watch(e[a], function(a) {
                    a = h ? !a : !!a;
                    f.attr(b, a)
                })
            }
        }
        var c = {
            ariaHidden: !0,
            ariaChecked: !0,
            ariaReadonly: !0,
            ariaDisabled: !0,
            ariaRequired: !0,
            ariaInvalid: !0,
            ariaValue: !0,
            tabindex: !0,
            bindKeypress: !0,
            bindRoleForClick: !0
        };
        this.config = function(a) {
            c = p.extend(c, a)
        };
        this.$get = function() {
            return {
                config: function(a) {
                    return c[a]
                },
                $$watchExpr: a
            }
        }
    }).directive("ngShow", ["$aria", function(a) {
        return a.$$watchExpr("ngShow", "aria-hidden", [], !0)
    }]).directive("ngHide", ["$aria", function(a) {
        return a.$$watchExpr("ngHide", "aria-hidden", [], !1)
    }]).directive("ngValue", ["$aria", function(a) {
        return a.$$watchExpr("ngValue", "aria-checked", b, !1)
    }]).directive("ngChecked", ["$aria", function(a) {
        return a.$$watchExpr("ngChecked", "aria-checked", b, !1)
    }]).directive("ngReadonly", ["$aria", function(a) {
        return a.$$watchExpr("ngReadonly", "aria-readonly", b, !1)
    }]).directive("ngRequired", ["$aria", function(a) {
        return a.$$watchExpr("ngRequired", "aria-required", b, !1)
    }]).directive("ngModel", ["$aria", function(a) {
        function c(c, h, d, f) {
            return a.config(h) && !d.attr(c) && (f || !l(d, b))
        }

        function g(a, c) {
            return !c.attr("role") && c.attr("type") === a && "INPUT" !== c[0].nodeName
        }

        function k(a, c) {
            var d = a.type,
                f = a.role;
            return "checkbox" === (d || f) || "menuitemcheckbox" === f ? "checkbox" : "radio" === (d || f) || "menuitemradio" ===
                f ? "radio" : "range" === d || "progressbar" === f || "slider" === f ? "range" : ""
        }
        return {
            restrict: "A",
            require: "ngModel",
            priority: 200,
            compile: function(b, h) {
                var d = k(h, b);
                return {
                    pre: function(a, e, c, b) {
                        "checkbox" === d && (b.$isEmpty = function(a) {
                            return !1 === a
                        })
                    },
                    post: function(f, e, b, n) {
                        function h() {
                            return n.$modelValue
                        }

                        function k(a) {
                            e.attr("aria-checked", b.value == n.$viewValue)
                        }

                        function l() {
                            e.attr("aria-checked", !n.$isEmpty(n.$viewValue))
                        }
                        var m = c("tabindex", "tabindex", e, !1);
                        switch (d) {
                            case "radio":
                            case "checkbox":
                                g(d, e) && e.attr("role",
                                    d);
                                c("aria-checked", "ariaChecked", e, !1) && f.$watch(h, "radio" === d ? k : l);
                                m && e.attr("tabindex", 0);
                                break;
                            case "range":
                                g(d, e) && e.attr("role", "slider");
                                if (a.config("ariaValue")) {
                                    var p = !e.attr("aria-valuemin") && (b.hasOwnProperty("min") || b.hasOwnProperty("ngMin")),
                                        r = !e.attr("aria-valuemax") && (b.hasOwnProperty("max") || b.hasOwnProperty("ngMax")),
                                        s = !e.attr("aria-valuenow");
                                    p && b.$observe("min", function(a) {
                                        e.attr("aria-valuemin", a)
                                    });
                                    r && b.$observe("max", function(a) {
                                        e.attr("aria-valuemax", a)
                                    });
                                    s && f.$watch(h, function(a) {
                                        e.attr("aria-valuenow",
                                            a)
                                    })
                                }
                                m && e.attr("tabindex", 0)
                        }!b.hasOwnProperty("ngRequired") && n.$validators.required && c("aria-required", "ariaRequired", e, !1) && b.$observe("required", function() {
                            e.attr("aria-required", !!b.required)
                        });
                        c("aria-invalid", "ariaInvalid", e, !0) && f.$watch(function() {
                            return n.$invalid
                        }, function(a) {
                            e.attr("aria-invalid", !!a)
                        })
                    }
                }
            }
        }
    }]).directive("ngDisabled", ["$aria", function(a) {
        return a.$$watchExpr("ngDisabled", "aria-disabled", b, !1)
    }]).directive("ngMessages", function() {
        return {
            restrict: "A",
            require: "?ngMessages",
            link: function(a, b, g, k) {
                b.attr("aria-live") || b.attr("aria-live", "assertive")
            }
        }
    }).directive("ngClick", ["$aria", "$parse", function(a, c) {
        return {
            restrict: "A",
            compile: function(g, k) {
                var m = c(k.ngClick, null, !0);
                return function(c, d, f) {
                    if (!l(d, b) && (a.config("bindRoleForClick") && !d.attr("role") && d.attr("role", "button"), a.config("tabindex") && !d.attr("tabindex") && d.attr("tabindex", 0), a.config("bindKeypress") && !f.ngKeypress)) d.on("keypress", function(a) {
                        function b() {
                            m(c, {
                                $event: a
                            })
                        }
                        var d = a.which || a.keyCode;
                        32 !== d &&
                            13 !== d || c.$apply(b)
                    })
                }
            }
        }
    }]).directive("ngDblclick", ["$aria", function(a) {
        return function(c, g, k) {
            !a.config("tabindex") || g.attr("tabindex") || l(g, b) || g.attr("tabindex", 0)
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-aria.min.js.map