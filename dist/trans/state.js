/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../trampoline"], (function(require, exports, __o, Trampoline) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        thunk = Trampoline["thunk"],
        run = Trampoline["run"],
        StateT, StateMonad = (function(instance, get, put) {
            (instance.prototype.get = get);
            (instance.get = instance.prototype.get);
            (instance.prototype.put = put);
            (instance.put = instance.prototype.put);
            (instance.prototype.modify = (function(f) {
                return get.chain((function(x) {
                    return put(f(x));
                }));
            }));
            (instance.modify = instance.prototype.modify);
        }),
        runStateT = (function(m, s) {
            return m.run(s);
        });
    (StateT = (function(m) {
        var Instance = (function(run0) {
            var self = this;
            (self.run = run0);
        });
        Monad(Instance, (function(x) {
            return new(Instance)((function(s) {
                return Trampoline.of(m.of(({
                    x: x,
                    s: s
                })));
            }));
        }), (function(f) {
            var c = this;
            return new(Instance)((function(s) {
                return thunk(c.run, s)
                    .chain((function(t) {
                        return Trampoline.of(t.chain((function(__o0) {
                            var m0, x = __o0["x"],
                                s0 = __o0["s"];
                            return run(((m0 = f(x)), m0.run(s0)));
                        })));
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return Trampoline.of(m.zero);
        })), (function(b) {
            var a = this;
            return new(Instance)((function(s) {
                return thunk(a.run, s)
                    .chain((function(t) {
                        return b.run(s)
                            .chain((function(k) {
                                return Trampoline.of(t.concat(k));
                            }));
                    }));
            }));
        }));
        Transformer(Instance, m, (function(t) {
            return new(Instance)((function(s) {
                return Trampoline.of(t.chain((function(x) {
                    return m.of(({
                        x: x,
                        s: s
                    }));
                })));
            }));
        }));
        StateMonad(Instance, new(Instance)((function(s) {
            return Trampoline.of(m.of(({
                x: s,
                s: s
            })));
        })), (function(s) {
            return new(Instance)((function(_) {
                return Trampoline.of(m.of(({
                    x: s,
                    s: s
                })));
            }));
        }));
        return Instance;
    }));
    var y = run;
    (StateT.runStateT = (function() {
        return y(runStateT.apply(null, arguments));
    }));
    var x = StateT.runStateT;
    (StateT.evalStateT = (function() {
        var n = x.apply(null, arguments);
        return n.chain((function(__o0) {
            var x0 = __o0["x"];
            return n.of(x0);
        }));
    }));
    var x0 = StateT.runStateT;
    (StateT.execStateT = (function() {
        var n = x0.apply(null, arguments);
        return n.chain((function(__o0) {
            var s = __o0["s"];
            return n.of(s);
        }));
    }));
    return StateT;
}));