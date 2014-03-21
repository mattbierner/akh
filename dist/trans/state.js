/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        StateT, Pair = (function(x, s) {
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
                return runStateT(c, s)
                    .chain((function(__o) {
                        var x = __o["x"],
                            s = __o["s"];
                        return runStateT(f(x), s);
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(a, b) {
            return new(Instance)((function(s) {
                return runStateT(a, s)
                    .concat(runStateT(b, s));
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
    (StateT.runStateT = runStateT);
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