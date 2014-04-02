/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/structure.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./base"], (function(require, exports, base) {
    "use strict";
    var Applicative, Chain, Functor, Monad, Monoid, Semigroup, Transformer;
    (Applicative = (function(Instance, of, ap) {
        (Instance.prototype.of = of);
        (Instance.of = Instance.prototype.of);
        (Instance.ap = base.ap);
        (Instance.prototype.ap = ap);
        Functor(Instance, (Instance.map || (function(f, m) {
            return of(f)
                .ap(m);
        })));
        return Instance;
    }));
    (Chain = (function(Instance, chain) {
        (Instance.chain = base.chain);
        (Instance.prototype.chain = chain);
        return Instance;
    }));
    (Functor = (function(Instance, map) {
        (Instance.map = map);
        (Instance.prototype.map = (function(f) {
            var self = this;
            return map(f, self);
        }));
        return Instance;
    }));
    (Monoid = (function(Instance, zero, plus) {
        (Instance.prototype.zero = zero);
        (Instance.zero = Instance.prototype.zero);
        Semigroup(Instance, plus);
        return Instance;
    }));
    (Monad = (function(Instance, of, chain) {
        (Instance.prototype.of = of);
        (Instance.of = Instance.prototype.of);
        Chain(Instance, chain);
        Functor(Instance, (Instance.prototype.map || (function(f, m) {
            var x, y;
            return m.chain(((x = f), (y = m.of), (function(x0) {
                return y(x(x0));
            })));
        })));
        Applicative(Instance, of, (Instance.prototype.ap || (function(f, m) {
            return f.chain((function(f0) {
                return m.map(f0);
            }));
        })));
        return Instance;
    }));
    (Semigroup = (function(Instance, plus) {
        (Instance.concat = base.concat);
        (Instance.prototype.concat = plus);
        return Instance;
    }));
    var liftInner = (function(lift, outer, inner) {
        if (inner.liftInner) {
            var x, y;
            (outer.liftInner = liftInner(lift, ((x = lift), (y = inner.liftInner), (function(x0) {
                return x(y(x0));
            })), inner.liftInner));
        }
        return outer;
    });
    (Transformer = (function(Instance, m, lift) {
        (Instance.prototype.inner = m);
        (Instance.inner = Instance.prototype.inner);
        (Instance.prototype.lift = lift);
        (Instance.lift = Instance.prototype.lift);
        if (m.lift) {
            var x, y;
            (Instance.prototype.liftInner = liftInner(lift, ((x = lift), (y = m.lift), (function(x0) {
                return x(y(x0));
            })), m));
            (Instance.liftInner = Instance.prototype.liftInner);
        }
        return Instance;
    }));
    (exports["Applicative"] = Applicative);
    (exports["Chain"] = Chain);
    (exports["Functor"] = Functor);
    (exports["Monad"] = Monad);
    (exports["Monoid"] = Monoid);
    (exports["Semigroup"] = Semigroup);
    (exports["Transformer"] = Transformer);
}));