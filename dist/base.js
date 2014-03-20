/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/base.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var liftM, liftM2, next, sequencea, sequence, mapM, foldM, flip = (function(f) {
            return (function(x, y) {
                return f(y, x);
            });
        }),
        reducer = (function(f, a) {
            return Array.prototype.reduceRight.call(a, f);
        }),
        foldr = (function(f, z, a) {
            return Array.prototype.reduceRight.call(a, f, z);
        }),
        map = (function(f, a) {
            return Array.prototype.map.call(a, f);
        }),
        concat = Function.prototype.call.bind(Array.prototype.concat),
        flatten = Function.prototype.apply.bind(Array.prototype.concat, []),
        cons = (function(x, xs) {
            return [x].concat(xs);
        });
    (liftM = (function(f, m) {
        return m.chain((function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(m.of, f));
    }));
    (liftM2 = (function(f, m1, m2) {
        return m1.chain((function(x) {
            return m2.chain((function(y) {
                return m1.of(f(x, y));
            }));
        }));
    }));
    (next = (function(p, q) {
        return p.chain((function(_) {
            return q;
        }));
    }));
    (sequencea = (function(arr) {
        return Array.prototype.reduce.call(arr, next);
    }));
    (sequence = (function() {
        var args = arguments;
        return sequencea(args);
    }));
    (exports["liftM"] = liftM);
    (exports["liftM2"] = liftM2);
    (exports["next"] = next);
    (exports["sequencea"] = sequencea);
    (exports["sequence"] = sequence);
    (exports["mapM"] = mapM);
    (exports["foldM"] = foldM);
}));