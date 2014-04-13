/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../_tail", "../structure", "../spec/cont"], (function(require, exports, __o, __o0,
    ContMonad) {
    "use strict";
    var Tail = __o["Tail"],
        trampoline = __o["trampoline"],
        Monad = __o0["Monad"],
        Transformer = __o0["Transformer"],
        ContT, runContT = (function(m, k) {
            return new(Tail)(m.run, k);
        });
    (ContT = (function(m) {
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
        Transformer(Instance, m, (function(t) {
            return new(Instance)((function(k) {
                var y;
                return t.chain(((y = trampoline), (function(x) {
                    return y(k(x));
                })));
            }));
        }));
        ContMonad(Instance, (function(f) {
            return new(Instance)((function(k) {
                var m0 = f((function(x) {
                    return new(Instance)((function(_) {
                        return k(x);
                    }));
                }));
                return new(Tail)(m0.run, k);
            }));
        }));
        return Instance;
    }));
    var y = trampoline;
    (ContT.runContT = (function() {
        return y(runContT.apply(null, arguments));
    }));
    return ContT;
}));