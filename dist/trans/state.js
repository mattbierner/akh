/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "./codensity", "../base", "../spec/state"], (function(require, exports,
    __o, Codensity, __o0, StateMonad) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        LiftInner = __o["LiftInner"],
        map = __o0["map"],
        StateT;
    (StateT = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self.run = run);
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
                return c.run(s)
                    .chain((function(__o1) {
                        var x = __o1["x"],
                            s0 = __o1["s"],
                            m0 = f(x);
                        return m0.run(s0);
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(b) {
            var a = this;
            return new(Instance)((function(s) {
                return a.run(s)
                    .concat(b.run(s));
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
        var X = Codensity(Instance),
            x = X.lift,
            y = Instance.lift;
        (X.prototype.lift = (function(x0) {
            return x(y(x0));
        }));
        (X.lift = X.prototype.lift);
        (X.inner = m);
        LiftInner(X, m, X.lift);
        return X;
    }));
    (StateT.runStateT = (function(m, s) {
        var m0 = Codensity.runCodensity(m, (function(c) {
            return m.inner.of(c);
        }));
        return m0.run(s);
    }));
    var x = StateT.runStateT,
        y = map.bind(null, (function(__o1) {
            var x0 = __o1["x"];
            return x0;
        }));
    (StateT.evalStateT = (function() {
        return y(x.apply(null, arguments));
    }));
    var x0 = StateT.runStateT,
        y0 = map.bind(null, (function(__o1) {
            var s = __o1["s"];
            return s;
        }));
    (StateT.execStateT = (function() {
        return y0(x0.apply(null, arguments));
    }));
    return StateT;
}));