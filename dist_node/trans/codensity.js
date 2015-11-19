/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/codensity.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    __o0 = require("../_tail"),
    StateMonad = require("../spec/state"),
    Codensity, Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
    Tail = __o0["Tail"],
    trampoline = __o0["trampoline"],
    runCodensity = (function(m, k) {
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
            return c.chain((function(z) {
                return trampoline(k(z));
            }));
        }));
    }));
    StateMonad.tryLiftState(Instance, m);
    return Instance;
}));
(Codensity.runCodensity = (function() {
    var args = arguments;
    return trampoline(runCodensity.apply(null, args));
}));
(module.exports = Codensity);