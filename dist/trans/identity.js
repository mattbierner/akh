/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/identity.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Identity;
    (Identity = (function(m) {
        var Instance = (function(x) {
            var self = this;
            (self.value = x);
        });
        Monad(Instance, (function(x) {
            return new(Instance)(m.of(x));
        }), (function(c, f) {
            return new(Instance)(c.chain(f));
        }));
        Monoid(Instance, new(Instance)(m.zero), (function(a, b) {
            return new(Instance)(a.concat(b));
        }));
        (Instance.lift = (Instance.prototype.lift = (function(t) {
            return new(Instance)(t);
        })));
        return Instance;
    }));
    (Identity.runIdentityT = (function(c) {
        return c.value;
    }));
    return Identity;
}));