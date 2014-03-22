/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../base"], (function(require, exports, __o, __o0) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        concat = __o0["concat"],
        chain = __o0["chain"],
        StateT, K = (function(k) {
            var self = this;
            (self.k = k);
        }),
        Chain = (function(c, f) {
            var self = this;
            (self.c = c);
            (self.f = f);
        }),
        Ap = (function(c, k) {
            var self = this;
            (self.c = c);
            (self.k = k);
        }),
        appk = (function(k, x) {
            return ((k instanceof Ap) ? new(Chain)(k.c(x), k.k) : k(x));
        }),
        run = (function(cont) {
            var k = cont;
            while (true) {
                if ((k instanceof K))(k = k.k());
                else if ((k instanceof Chain)) {
                    var __o = k,
                        c = __o["c"];
                    if ((c instanceof K))(k = new(Chain)(c.k(), k.f));
                    else if ((c instanceof Chain))(k = new(Chain)(c.c, new(Ap)(c.f, k.f)));
                    else(k = appk(k.f, k.c));
                } else return k;
            }
        }),
        Pair = (function(x, s) {
            return ({
                "x": x,
                "s": s
            });
        }),
        runStateT = (function(m, s) {
            return m.run(s);
        });
    (StateT = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self.run = run);
        });
        Monad(Instance, (function(x) {
            return new(Instance)((function(s) {
                return m.of(Pair(x, s));
            }));
        }), (function(c, f) {
            return new(Instance)((function(s) {
                return new(Chain)(new(K)((function() {
                    return runStateT(c, s);
                })), (function(t) {
                    return t.chain((function(__o) {
                        var x = __o["x"],
                            s = __o["s"];
                        return run(runStateT(f(x), s));
                    }));
                }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(a, b) {
            return new(Instance)((function(s) {
                return new(Chain)(runStateT(a, s), (function(t) {
                    return new(Chain)(runStateT(b, s), (function(k) {
                        return t.concat(k);
                    }));
                }));
            }));
        }));
        (Instance.get = (Instance.prototype.get = new(Instance)((function(s) {
            return m.of(Pair(s, s));
        }))));
        (Instance.put = (Instance.prototype.put = (function(s) {
            return new(Instance)((function(_) {
                return m.of(Pair(s, s));
            }));
        })));
        (Instance.modify = (Instance.prototype.modify = (function(f) {
            return Instance.get.chain((function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(Instance.put, f));
        })));
        (Instance.lift = (Instance.prototype.lift = (function(t) {
            return new(Instance)((function(s) {
                return t.chain((function(x) {
                    return m.of(Pair(x, s));
                }));
            }));
        })));
        return Instance;
    }));
    (StateT.runStateT = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(run, runStateT));
    (StateT.evalStateT = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })((function(n) {
        return n.chain((function(__o) {
            var x = __o["x"];
            return n.of(x);
        }));
    }), StateT.runStateT));
    (StateT.execStateT = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })((function(n) {
        return n.chain((function(__o) {
            var s = __o["s"];
            return n.of(s);
        }));
    }), StateT.runStateT));
    return StateT;
}));