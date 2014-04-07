/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity, __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"];
(Identity = (function(m) {
    var x, y, x0, Instance = (function(x) {
            var self = this;
            (self.value = x);
        });
    Monad(Instance, ((x = Instance), (y = m.of), (function(x0) {
        var y0 = y(x0);
        return new(x)(y0);
    })), (function(f) {
        var y0, c = this;
        return new(Instance)(Identity.runIdentityT(c)
            .chain(((y0 = Identity.runIdentityT), (function(x0) {
                return y0(f(x0));
            }))));
    }));
    Monoid(Instance, new(Instance)(m.zero), (function(b) {
        var a = this;
        return new(Instance)(Identity.runIdentityT(a)
            .concat(Identity.runIdentityT(b)));
    }));
    Transformer(Instance, m, ((x0 = Instance), (function(y0) {
        return new(x0)(y0);
    })));
    return Instance;
}));
(Identity.runIdentityT = (function(c) {
    return c.value;
}));
(module.exports = Identity);