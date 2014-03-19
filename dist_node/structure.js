/*
 * THIS FILE IS AUTO GENERATED from 'lib/structure.kep'
 * DO NOT EDIT
*/"use strict";
var Monad, Monoid;
(Monoid = (function(instance, zero, plus) {
    (instance.zero = (instance.prototype.zero = zero));
    (instance.concat = plus);
    (instance.prototype.concat = (function(c) {
        var self = this;
        return plus(self, c);
    }));
    return instance;
}));
(Monad = (function(instance, of, chain) {
    (instance.of = (instance.prototype.of = of));
    (instance.chain = chain);
    (instance.prototype.chain = (function(f) {
        var self = this;
        return chain(self, f);
    }));
    return instance;
}));
(exports["Monad"] = Monad);
(exports["Monoid"] = Monoid);