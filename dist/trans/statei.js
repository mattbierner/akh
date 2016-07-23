/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/statei.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh.core.spec", "../base", "../spec/state"], (function(require, exports, __o, __o0,
    StateMonad) {
    "use strict";
    var StateT, Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        map = __o0["map"],
        Pair = (function(x, s) {
            return ({
                x: x,
                s: s
            });
        }),
        runStateT = (function(m, s) {
            return m._run(s);
        });
    (StateT = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self._run = run);
        });
        Monad(Instance, (function(x) {
            return new(Instance)((function(s) {
                return m.of(({
                    x: x,
                    s: s
                }));
            }));
        }), (function(f) {
            var c = this;
            return new(Instance)((function(s) {
                return c._run(s)
                    .chain((function(__o1) {
                        var x = __o1["x"],
                            s0 = __o1["s"],
                            m0 = f(x);
                        return m0._run(s0);
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(b) {
            var a = this;
            return new(Instance)((function(s) {
                return a._run(s)
                    .concat(b._run(s));
            }));
        }));
        Transformer(Instance, m, (function(t) {
            return new(Instance)((function(s) {
                return t.chain((function(x) {
                    return m.of(({
                        x: x,
                        s: s
                    }));
                }));
            }));
        }));
        StateMonad(Instance, new(Instance)((function(s) {
            return m.of(({
                x: s,
                s: s
            }));
        })), (function(s) {
            return new(Instance)((function(_) {
                return m.of(({
                    x: s,
                    s: s
                }));
            }));
        }));
        return Instance;
    }));
    (StateT.runStateT = runStateT);
    var x = StateT.runStateT,
        y = map.bind(null, (function(x0) {
            return x0.x;
        }));
    (StateT.evalStateT = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    var x0 = StateT.runStateT,
        y0 = map.bind(null, (function(x1) {
            return x1.s;
        }));
    (StateT.execStateT = (function() {
        var args = arguments;
        return y0(x0.apply(null, args));
    }));
    return StateT;
}));