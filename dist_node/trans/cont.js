/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../_tail"),
    Tail = __o["Tail"],
    trampoline = __o["trampoline"],
    __o0 = require("../structure"),
    Monad = __o0["Monad"],
    Transformer = __o0["Transformer"],
    ContMonad = require("../spec/cont"),
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
(module.exports = ContT);