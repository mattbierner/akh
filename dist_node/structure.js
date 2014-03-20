"use strict";
var Applicative, Chain, Functor, Monad, Monoid, Semigroup;
(Applicative = (function(instance, of, ap) {
    (instance.of = (instance.prototype.of = of));
    (instance.ap = ap);
    (instance.prototype.ap = (function(b) {
        var self = this;
        return ap(self, b);
    }));
    Functor(instance, (instance.map || (function(f, m) {
        return of(f)
            .ap(m);
    })));
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
        return map(f, self);
    }));
    return instance;
}));
(Monoid = (function(instance, zero, plus) {
    (instance.zero = (instance.prototype.zero = zero));
    Semigroup(instance, plus);
    return instance;
}));
(Monad = (function(instance, of, chain) {
    (instance.of = (instance.prototype.of = of));
    Chain(instance, chain);
    Functor(instance, (function(f, m) {
        return chain(m, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(m.of, f));
    }));
    Applicative(instance, of, (function(f, m) {
        return chain(f, (function(f) {
            return m.map(f);
        }));
    }));
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