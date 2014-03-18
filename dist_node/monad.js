/*
 * THIS FILE IS AUTO GENERATED from 'lib/monad.kep'
 * DO NOT EDIT
*/"use strict";
var Monad;
(Monad = (function(instance, of, chain) {
    (instance.of = of);
    (instance.prototype.of = of);
    (instance.chain = chain);
    (instance.prototype.chain = (function(f) {
        var self = this;
        return chain(self, f);
    }));
    return instance;
}));
(module.exports = Monad);