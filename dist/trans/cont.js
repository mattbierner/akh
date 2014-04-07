/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../_tail"], (function(require, exports, __o, __o0) {
    "use strict";
    var Monad = __o["Monad"],
        Transformer = __o["Transformer"],
        Tail = __o0["Tail"],
        trampoline = __o0["trampoline"],
        ContT, ContMonat = (function(instance, callcc) {
            (instance.prototype.callcc = callcc);
            (instance.callcc = instance.prototype.callcc);
            return instance;
        }),
        runContT = (function(m, k) {
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
                return runContT(c, (function(x) {
                    return runContT(f(x), k);
                }));
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
        ContMonat(Instance, (function(f) {
            return new(Instance)((function(k) {
                return runContT(f((function(x) {
                    return new(Instance)((function(_) {
                        return k(x);
                    }));
                })), k);
            }));
        }));
        return Instance;
    }));
    var x = (function(m, k) {
        return new(Tail)(m.run, k);
    }),
        y = trampoline;
    (ContT.runContT = (function() {
        return y(x.apply(null, arguments));
    }));
    return ContT;
}));