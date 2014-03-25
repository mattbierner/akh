/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        Identity;
    (Identity = (function(m) {
        var x, x0, Instance = (function(x) {
                var self = this;
                (self.value = x);
            });
        Monad(Instance, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(((x = Instance), (function(y) {
            return new(x)(y);
        })), m.of), (function(c, f) {
            return new(Instance)(Identity.runIdentityT(c)
                .chain((function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(Identity.runIdentityT, f)));
        }));
        Monoid(Instance, new(Instance)(m.zero), (function(a, b) {
            return new(Instance)(Identity.runIdentityT(a)
                .concat(Identity.runIdentityT(b)));
        }));
        Transformer(Instance, m, ((x0 = Instance), (function(y) {
            return new(x0)(y);
        })));
        return Instance;
    }));
    (Identity.runIdentityT = (function(c) {
        return c.value;
    }));
    return Identity;
}));