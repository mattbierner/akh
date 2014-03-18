/*
 * THIS FILE IS AUTO GENERATED from 'lib/identity.kep'
 * DO NOT EDIT
*/"use strict";
var Identity;
(Identity = (function(x) {
    var self = this;
    (self.value = x);
}));
(Identity.runIdentity = (function(c) {
    return c.value;
}));
var of = (function(x) {
    return new(Identity)(x);
});
(Identity.of = of);
(Identity.prototype.of = of);
var chain = (function(c, f) {
    return f(Identity.runIdentity(c));
});
(Identity.chain = chain);
(Identity.prototype.chain = (function(f) {
    var self = this;
    return chain(self, f);
}));
(module.exports = Identity);