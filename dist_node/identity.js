/*
 * THIS FILE IS AUTO GENERATED from 'lib/identity.kep'
 * DO NOT EDIT
*/"use strict";
var Monad = require("./monad"),
    Identity;
(Identity = (function(x) {
    var self = this;
    (self.value = x);
}));
(Identity.runIdentity = (function(c) {
    return c.value;
}));
Monad(Identity, (function(x) {
    return new(Identity)(x);
}), (function(c, f) {
    return f(Identity.runIdentity(c));
}));
(module.exports = Identity);