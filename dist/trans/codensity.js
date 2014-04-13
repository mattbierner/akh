/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/codensity.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../_tail", "../spec/state"], (function(require, exports, __o, __o0,
    StateMonad) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        Tail = __o0["Tail"],
        trampoline = __o0["trampoline"],
        Codensity, runCodensity = (function(m, k) {
            return new(Tail)(m.run, k);
        });
    (Codensity = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self.run = run);
        });
        Monad(Instance, (function(x) {
            return new(Instance)((function(k) {
                return k(x);
            }));
        }), (function(f) {
            var c = this;
            return new(Instance)((function(k) {
                var k0 = (function(x) {
                    var m0 = f(x);
                    return new(Tail)(m0.run, k);
                });
                return new(Tail)(c.run, k0);
            }));
        }));
        Monoid(Instance, new(Instance)((function(_) {
            return m.zero;
        })), (function(b) {
            var a = this;
            return new(Instance)((function(k) {
                return Codensity.runCodensity(a, k)
                    .concat(Codensity.runCodensity(b, k));
            }));
        }));
        Transformer(Instance, m, (function(c) {
            return new(Instance)((function(k) {
                var y;
                return c.chain(((y = trampoline), (function(x) {
                    return y(k(x));
                })));
            }));
        }));
        StateMonad.tryLiftState(Instance, m);
        return Instance;
    }));
    var y = trampoline;
    (Codensity.runCodensity = (function() {
        return y(runCodensity.apply(null, arguments));
    }));
    return Codensity;
}));