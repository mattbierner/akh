/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/cont.kep'
 * DO NOT EDIT
*/"use strict";
var Monad = require("../monad"),
    ContT;
(ContT = (function(m) {
    var Instance = (function(run) {
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
    (Instance.callcc = (function(f) {
        return new(Instance)((function(k) {
            return ContT.runContT(f((function(x) {
                return new(Instance)((function(_) {
                    return k(x);
                }));
            })), k);
        }));
    }));
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