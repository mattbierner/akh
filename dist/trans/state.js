/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../trampoline", "../base"], (function(require, exports, __o, Trampoline,
    __o0) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        thunk = Trampoline["thunk"],
        run = Trampoline["run"],
        concat = __o0["concat"],
        chain = __o0["chain"],
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
                return Trampoline.of(m.of(Pair(x, s)));
            }));
        }), (function(c, f) {
            return new(Instance)((function(s) {
                return thunk(c.run, s)
                    .chain((function(t) {
                        return Trampoline.of(t.chain((function(__o) {
                            var x = __o["x"],
                                s = __o["s"];
                            return run(runStateT(f(x), s));
                        })));
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(a, b) {
            return new(Instance)((function(s) {
                return thunk(a.run, s)
                    .chain((function(t) {
                        return runStateT(b, s)
                            .chain((function(k) {
                                return Trampoline.of(t.concat(k));
                            }));
                    }));
            }));
        }));
        Transformer(Instance, (function(t) {
            return new(Instance)((function(s) {
                return Trampoline.of(t.chain((function(x) {
                    return m.of(Pair(x, s));
                })));
            }));
        }));
        (Instance.get = (Instance.prototype.get = new(Instance)((function(s) {
            return Trampoline.of(m.of(Pair(s, s)));
        }))));
        (Instance.put = (Instance.prototype.put = (function(s) {
            return new(Instance)((function(_) {
                return Trampoline.of(m.of(Pair(s, s)));
            }));
        })));
        (Instance.modify = (Instance.prototype.modify = (function(f) {
            return Instance.get.chain((function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(Instance.put, f));
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