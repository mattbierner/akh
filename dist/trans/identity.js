/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var __new = (function(x, y) {
        return new(x)(y);
    }),
        Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        Identity;
    (Identity = (function(m) {
        var x, x0, y, x1, Instance = (function(x) {
                var self = this;
                (self.value = x);
            });
        Monad(Instance, ((x = Instance), (x0 = (function(y) {
            return new(x)(y);
        })), (y = m.of), (function(x1) {
            var y0 = y(x1);
            return new(x)(y0);
        })), (function(f) {
            var x1, y0, c = this;
            return new(Instance)(Identity.runIdentityT(c)
                .chain(((x1 = f), (y0 = Identity.runIdentityT), (function(x2) {
                    return y0(x1(x2));
                }))));
        }));
        Monoid(Instance, new(Instance)(m.zero), (function(b) {
            var a = this;
            return new(Instance)(Identity.runIdentityT(a)
                .concat(Identity.runIdentityT(b)));
        }));
        Transformer(Instance, m, ((x1 = Instance), (function(y0) {
            return new(x1)(y0);
        })));
        return Instance;
    }));
    (Identity.runIdentityT = (function(c) {
        return c.value;
    }));
    return Identity;
}));