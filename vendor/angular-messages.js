/*
 AngularJS v1.5.5
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A, d) {
    'use strict';

    function p() {
        return ["$animate", function(w) {
            return {
                restrict: "AE",
                transclude: "element",
                priority: 1,
                terminal: !0,
                require: "^^ngMessages",
                link: function(n, l, a, c, m) {
                    var k = l[0],
                        f, q = a.ngMessage || a.when;
                    a = a.ngMessageExp || a.whenExp;
                    var d = function(a) {
                        f = a ? x(a) ? a : a.split(/[\s,]+/) : null;
                        c.reRender()
                    };
                    a ? (d(n.$eval(a)), n.$watchCollection(a, d)) : d(q);
                    var e, r;
                    c.register(k, r = {
                        test: function(a) {
                            var g = f;
                            a = g ? x(g) ? 0 <= g.indexOf(a) : g.hasOwnProperty(a) : void 0;
                            return a
                        },
                        attach: function() {
                            e || m(n, function(a) {
                                w.enter(a,
                                    null, l);
                                e = a;
                                var g = e.$$attachId = c.getAttachId();
                                e.on("$destroy", function() {
                                    e && e.$$attachId === g && (c.deregister(k), r.detach())
                                })
                            })
                        },
                        detach: function() {
                            if (e) {
                                var a = e;
                                e = null;
                                w.leave(a)
                            }
                        }
                    })
                }
            }
        }]
    }
    var x = d.isArray,
        t = d.forEach,
        y = d.isString,
        z = d.element;
    d.module("ngMessages", []).directive("ngMessages", ["$animate", function(d) {
        function n(a, c) {
            return y(c) && 0 === c.length || l(a.$eval(c))
        }

        function l(a) {
            return y(a) ? a.length : !!a
        }
        return {
            require: "ngMessages",
            restrict: "AE",
            controller: ["$element", "$scope", "$attrs", function(a,
                c, m) {
                function k(a, c) {
                    for (var b = c, f = []; b && b !== a;) {
                        var h = b.$$ngMessageNode;
                        if (h && h.length) return e[h];
                        b.childNodes.length && -1 == f.indexOf(b) ? (f.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, f.push(b))
                    }
                }
                var f = this,
                    q = 0,
                    p = 0;
                this.getAttachId = function() {
                    return p++
                };
                var e = this.messages = {},
                    r, s;
                this.render = function(g) {
                    g = g || {};
                    r = !1;
                    s = g;
                    for (var e = n(c, m.ngMessagesMultiple) || n(c, m.multiple), b = [], q = {}, h = f.head, k = !1, p = 0; null != h;) {
                        p++;
                        var u = h.message,
                            v = !1;
                        k || t(g,
                            function(a, b) {
                                !v && l(a) && u.test(b) && !q[b] && (v = q[b] = !0, u.attach())
                            });
                        v ? k = !e : b.push(u);
                        h = h.next
                    }
                    t(b, function(a) {
                        a.detach()
                    });
                    b.length !== p ? d.setClass(a, "ng-active", "ng-inactive") : d.setClass(a, "ng-inactive", "ng-active")
                };
                c.$watchCollection(m.ngMessages || m["for"], f.render);
                a.on("$destroy", function() {
                    t(e, function(a) {
                        a.message.detach()
                    })
                });
                this.reRender = function() {
                    r || (r = !0, c.$evalAsync(function() {
                        r && s && f.render(s)
                    }))
                };
                this.register = function(g, c) {
                    var b = q.toString();
                    e[b] = {
                        message: c
                    };
                    var d = a[0],
                        h = e[b];
                    f.head ?
                        (d = k(d, g)) ? (h.next = d.next, d.next = h) : (h.next = f.head, f.head = h) : f.head = h;
                    g.$$ngMessageNode = b;
                    q++;
                    f.reRender()
                };
                this.deregister = function(c) {
                    var d = c.$$ngMessageNode;
                    delete c.$$ngMessageNode;
                    var b = e[d];
                    (c = k(a[0], c)) ? c.next = b.next: f.head = b.next;
                    delete e[d];
                    f.reRender()
                }
            }]
        }
    }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(d, n, l) {
        return {
            restrict: "AE",
            require: "^^ngMessages",
            link: function(a, c, m) {
                var k = m.ngMessagesInclude || m.src;
                d(k).then(function(d) {
                    l(d)(a, function(a) {
                        c.after(a);
                        a = l.$$createComment ? l.$$createComment("ngMessagesInclude", k) : n[0].createComment(" ngMessagesInclude: " + k + " ");
                        a = z(a);
                        c.after(a);
                        c.remove()
                    })
                })
            }
        }
    }]).directive("ngMessage", p()).directive("ngMessageExp", p())
})(window, window.angular);
//# sourceMappingURL=angular-messages.min.js.map