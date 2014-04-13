/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
    Identity, runIdentityT = (function(x) {
        return x.value;
    });
(Identity = (function(m) {
    var y, Instance = (function(x) {
            var self = this;
            (self.value = x);
        });
    Monad(Instance, ((y = m.of), (function(x) {
        var y0 = y(x);
        return new(Instance)(y0);
    })), (function(f) {
        var c = this;
        return new(Instance)(c.value.chain((function(x) {
            var x0 = f(x);
            return x0.value;
        })));
    }));
    Monoid(Instance, new(Instance)(m.zero), (function(b) {
        var a = this;
        return new(Instance)(a.value.concat(b.value));
    }));
    Transformer(Instance, m, (function(y0) {
        return new(Instance)(y0);
    }));
    return Instance;
}));
(Identity.runIdentityT = runIdentityT);
(module.exports = Identity);