/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Functor = __o["Functor"],
    Monad = __o["Monad"],
    ContT;
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
            return ContT.runContT(c, (function(x) {
                return ContT.runContT(f(x), k);
            }));
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
            return ContT.runContT(f(reify(k)), k);
        }));
    }))));
    (Instance.lift = (function(t) {
        return new(Instance)((function(k) {
            return t.chain(k);
        }));
    }));
    return Instance;
}));
(ContT.runContT = (function(m, k) {
    return m.run(k);
}));
(module.exports = ContT);