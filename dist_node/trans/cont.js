/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    Transformer = __o["Transformer"],
    __o0 = require("../_tail"),
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
    var reify, Instance = (function(run) {
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
            var x, y;
            return t.chain(((x = k), (y = trampoline), (function(x0) {
                return y(x(x0));
            })));
        }));
    }));
    ContMonat(Instance, ((reify = (function(k) {
        return (function(x) {
            return new(Instance)((function(_) {
                return k(x);
            }));
        });
    })), (function(f) {
        return new(Instance)((function(k) {
            var k0;
            return runContT(f(((k0 = k), (function(x) {
                return new(Instance)((function(_) {
                    return k0(x);
                }));
            }))), k);
        }));
    })));
    return Instance;
}));
var x = (function(m, k) {
    return new(Tail)(m.run, k);
}),
    y = trampoline;
(ContT.runContT = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = ContT);