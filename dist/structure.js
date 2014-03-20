/*
 * THIS FILE IS AUTO GENERATED from 'lib/structure.kep'
 * DO NOT EDIT
*/define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Functor, Monad, Monoid;
    (Functor = (function(instance, map) {
        (instance.map = map);
        (instance.prototype.map = (function(f) {
            var self = this;
            return map(self, f);
        }));
        return instance;
    }));
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
    (exports["Functor"] = Functor);
    (exports["Monad"] = Monad);
    (exports["Monoid"] = Monoid);
}));