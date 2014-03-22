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
        ContT, runContT = (function(m, k) {
            return new(Tail)(m.run, k);
        });
    (ContT = (function(m) {
        var reify, Instance = (function(run) {
                var self = this;
                (self.run = run);
            });
        Monad(Instance, (function(x) {
            return new(Instance)((function(k) {
                return k(x);
            }));
        }), (function(c, f) {
            return new(Instance)((function(k) {
                return runContT(c, (function(x) {
                    return runContT(f(x), k);
                }));
            }));
        }));
        Transformer(Instance, (function(t) {
            return new(Instance)((function(k) {
                return t.chain((function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(trampoline, k));
            }));
        }));
        (Instance.callcc = (Instance.prototype.callcc = ((reify = (function(k) {
            return (function(x) {
                return new(Instance)((function(_) {
                    return k(x);
                }));
            });
        })), (function(f) {
            return new(Instance)((function(k) {
                return runContT(f(reify(k)), k);
            }));
        }))));
        return Instance;
    }));
    (ContT.runContT = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(trampoline, runContT));
    return ContT;
}));