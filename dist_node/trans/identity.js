/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Identity, Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
    runIdentityT = (function(x) {
        return x.value;
    });
(Identity = (function(m) {
    var y, Instance = (function(x) {
            var self = this;
            (self.value = x);
        });
    Monad(Instance, ((y = m.of), (function(z) {
        var y0 = y(z);
        return new(Instance)(y0);
    })), (function(f) {
        var c = this;
        return new(Instance)(c.value.chain((function(z) {
            var x = f(z);
            return x.value;
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