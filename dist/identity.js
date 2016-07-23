/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/identity.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh.core.spec"], (function(require, exports, __o) {
    "use strict";
    var Identity, Functor = __o["Functor"],
        Monad = __o["Monad"];
    (Identity = (function(x) {
        var self = this;
        (self.value = x);
    }));
    Monad(Identity, (function(y) {
        return new(Identity)(y);
    }), (function(f) {
        var c = this;
        return f(Identity.runIdentity(c));
    }));
    (Identity.runIdentity = (function(x) {
        return x.value;
    }));
    return Identity;
}));