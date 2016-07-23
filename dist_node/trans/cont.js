/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../_tail"),
    __o0 = require("akh.core.spec"),
    ContMonad = require("../spec/cont"),
    ContT, Tail = __o["Tail"],
    trampoline = __o["trampoline"],
    Monad = __o0["Monad"],
    Transformer = __o0["Transformer"],
    runContT = (function(m, k) {
        return new(Tail)(m._run, k);
    });
(ContT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self._run = run);
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
                return new(Tail)(m0._run, k);
            });
            return new(Tail)(c._run, k0);
        }));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)((function(k) {
            return t.chain((function(z) {
                return trampoline(k(z));
            }));
        }));
    }));
    ContMonad(Instance, (function(f) {
        return new(Instance)((function(k) {
            var m0 = f((function(x) {
                return new(Instance)((function(_) {
                    return k(x);
                }));
            }));
            return new(Tail)(m0._run, k);
        }));
    }));
    return Instance;
}));
(ContT.runContT = (function() {
    var args = arguments;
    return trampoline(runContT.apply(null, args));
}));
(module.exports = ContT);