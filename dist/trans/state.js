define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Functor = __o["Functor"],
        Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        StateT, Pair = (function(x, s) {
            return ({
                "x": x,
                "s": s
            });
        });
    (StateT = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self.run = run);
        });
        Functor(Instance, (function(c, f) {
            return new(Instance)((function(s) {
                return StateT.runStateT(c, s)
                    .map((function(__o) {
                        var x = __o["x"],
                            s = __o["s"];
                        return Pair(f(x), s);
                    }));
            }));
        }));
        Monad(Instance, (function(x) {
            return new(Instance)((function(s) {
                return m.of(Pair(x, s));
            }));
        }), (function(c, f) {
            return new(Instance)((function(s) {
                return StateT.runStateT(c, s)
                    .chain((function(__o) {
                        var x = __o["x"],
                            s = __o["s"];
                        return StateT.runStateT(f(x), s);
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(a, b) {
            return new(Instance)((function(s) {
                return StateT.runStateT(a, s)
                    .concat(StateT.runStateT(b, s));
            }));
        }));
        (Instance.get = new(Instance)((function(s) {
            return m.of(Pair(s, s));
        })));
        (Instance.put = (function(s) {
            return new(Instance)((function(_) {
                return m.of(Pair(s, s));
            }));
        }));
        (Instance.lift = (function(t) {
            return new(Instance)((function(s) {
                return t.chain((function(x) {
                    return m.of(Pair(x, s));
                }));
            }));
        }));
        return Instance;
    }));
    (StateT.runStateT = (function(m, s) {
        return m.run(s);
    }));
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