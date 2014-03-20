/*
 * THIS FILE IS AUTO GENERATED from lib/structure.kep
 * DO NOT EDIT
*/
"use strict";
var Applicative, Chain, Functor, Monad, Monoid, Semigroup;
(Applicative = (function(instance, of, ap) {
    (instance.of = (instance.prototype.of = of));
    (instance.ap = ap);
    (instance.prototype.ap = (function(b) {
        var self = this;
        return ap(self, b);
    }));
    (instance.prototype.map = (function(f) {
        var self = this;
        return self.of(f)
            .ap(self);
    }));
    return instance;
}));
(Chain = (function(instance, chain) {
    (instance.chain = chain);
    (instance.prototype.chain = (function(f) {
        var self = this;
        return chain(self, f);
    }));
    return instance;
}));
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
    (instance.ap = (instance.prototype.ap = (function(m) {
        var self = this;
        return chain(self, (function(f) {
            return m.map(f);
        }));
    })));
    (instance.map = (instance.prototype.map = (function(f) {
        var m = this;
        return chain(m, (function(x) {
            return m.of(f(x));
        }));
    })));
    return instance;
}));
(Semigroup = (function(instance, plus) {
    (instance.concat = plus);
    (instance.prototype.concat = (function(c) {
        var self = this;
        return plus(self, c);
    }));
    return instance;
}));
(exports["Applicative"] = Applicative);
(exports["Chain"] = Chain);
(exports["Functor"] = Functor);
(exports["Monad"] = Monad);
(exports["Monoid"] = Monoid);
(exports["Semigroup"] = Semigroup);