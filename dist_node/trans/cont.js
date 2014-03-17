/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/cont.kep'
 * DO NOT EDIT
*/"use strict";
var ContT, runContT = (function(m, k) {
        return m.run(k);
    });
(ContT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    }),
        of = (function(x) {
            return new(Instance)((function(k) {
                return k(x);
            }));
        });
    (Instance.prototype.of = of);
    (Instance.of = of);
    (Instance.prototype.chain = (function(f) {
        var self = this;
        return new(Instance)((function(k) {
            return runContT(self, (function(x) {
                return runContT(f(x), k);
            }));
        }));
    }));
    (Instance.prototype.callcc = (function(f) {
        var self = this;
        return new(Instance)((function(k) {
            return runContT(f((function(x) {
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
(ContT.runContT = runContT);
(module.exports = ContT);