"use strict";
var __o = require("./structure"),
    Functor = __o["Functor"],
    Monad = __o["Monad"],
    Identity;
(Identity = (function(x) {
    var self = this;
    (self.value = x);
}));
Monad(Identity, (function(x) {
    return new(Identity)(x);
}), (function(c, f) {
    return f(Identity.runIdentity(c));
}));
(Identity.runIdentity = (function(c) {
    return c.value;
}));
(module.exports = Identity);