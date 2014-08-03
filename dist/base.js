/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/base.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var chain, map, ap, concat, liftM, liftM2, liftA, liftA2, compose, composer, next, sequencea, sequence;
    (chain = (function(m, f) {
        return m.chain(f);
    }));
    (map = (function(f, m) {
        return m.map(f);
    }));
    (ap = (function(f, a) {
        return f.ap(a);
    }));
    (concat = (function(a, b) {
        return a.concat(b);
    }));
    (liftM = map);
    (liftM2 = (function(f, m1, m2) {
        return m1.chain((function(x) {
            return m2.map((function(y) {
                return f(x, y);
            }));
        }));
    }));
    (liftA = (function(f, a) {
        return a.of(f)
            .ap(a);
    }));
    (liftA2 = (function(f, a1, a2) {
        return a1.of((function(x) {
            return (function(y) {
                return f(x, y);
            });
        }))
            .ap(a1)
            .ap(a2);
    }));
    (compose = (function(f, g) {
        return (function(x) {
            return f(x)
                .chain(g);
        });
    }));
    (composer = (function(x, y) {
        return (function(x0) {
            return y(x0)
                .chain(x);
        });
    }));
    (next = (function(p, q) {
        return p.chain((function() {
            return q;
        }));
    }));
    (sequencea = (function(arr) {
        return Array.prototype.reduce.call(arr, next);
    }));
    (sequence = (function(args) {
        return Array.prototype.reduce.call(args, next);
    }));
    (exports["chain"] = chain);
    (exports["map"] = map);
    (exports["ap"] = ap);
    (exports["concat"] = concat);
    (exports["liftM"] = liftM);
    (exports["liftM2"] = liftM2);
    (exports["liftA"] = liftA);
    (exports["liftA2"] = liftA2);
    (exports["compose"] = compose);
    (exports["composer"] = composer);
    (exports["next"] = next);
    (exports["sequencea"] = sequencea);
    (exports["sequence"] = sequence);
}));