/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/identity.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity, __o = require("./structure"),
    Functor = __o["Functor"],
    Monad = __o["Monad"];
(Identity = (function(x) {
    var self = this;
    (self.value = x);
}));
Monad(Identity, (function(x) {
    return new(Identity)(x);
}), (function(f) {
    var c = this;
    return f(Identity.runIdentity(c));
}));
(Identity.runIdentity = (function(c) {
    return c.value;
}));
(module.exports = Identity);