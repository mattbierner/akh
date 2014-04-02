/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/list.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../base"),
    liftM = __o["liftM"],
    liftM2 = __o["liftM2"],
    __o0 = require("../structure"),
    Functor = __o0["Functor"],
    Monoid = __o0["Monoid"],
    Monad = __o0["Monad"],
    Transformer = __o0["Transformer"],
    ListT, foldr = (function(f, z, a) {
        return Array.prototype.reduceRight.call(a, f, z);
    }),
    map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    }),
    concat = Function.prototype.call.bind(Array.prototype.concat),
    flatten = Function.prototype.apply.bind(Array.prototype.concat, []),
    flip = (function(f) {
        return (function(x, y) {
            return f(y, x);
        });
    }),
    flattenM = liftM.bind(null, flatten);
(ListT = (function(m) {
    var f, z, f0, x, y, Instance = (function(run) {
            var self = this;
            (self.run = run);
        }),
        sequence = ((f = liftM2.bind(null, ((f0 = concat), (function(x, y) {
            return f0(y, x);
        })))), (z = m.of([])), (function(a) {
            return Array.prototype.reduceRight.call(a, f, z);
        })),
        mapM = ((x = map), (y = sequence), (function() {
            return y(map.apply(null, arguments));
        }));
    Monoid(Instance, new(Instance)(m.of([])), (function(b) {
        var a = this;
        return new(Instance)(liftM2(concat, ListT.runListT(a), ListT.runListT(b)));
    }));
    Monad(Instance, (function(x0) {
        return new(Instance)(m.of([x0]));
    }), (function(f1) {
        var x0, y0, c = this;
        return new(Instance)(flattenM(ListT.runListT(c)
            .chain(mapM.bind(null, ((x0 = f1), (y0 = ListT.runListT), (function(x1) {
                return y0(x0(x1));
            }))))));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)(liftM((function(x0) {
            return [x0];
        }), t));
    }));
    return Instance;
}));
(ListT.runListT = (function(m) {
    return m.run;
}));
(module.exports = ListT);