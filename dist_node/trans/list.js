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
    ListT, map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    }),
    concat = Function.prototype.call.bind(Array.prototype.concat),
    flatten = Function.prototype.apply.bind(Array.prototype.concat, []),
    flattenM = liftM.bind(null, flatten);
(ListT = (function(m) {
    var f, z, Instance = (function(run) {
            var self = this;
            (self.run = run);
        }),
        sequence = ((f = liftM2.bind(null, (function(x, y) {
            return concat(y, x);
        }))), (z = m.of([])), (function(a) {
            return Array.prototype.reduceRight.call(a, f, z);
        })),
        mapM = (function() {
            return sequence(map.apply(null, arguments));
        });
    Monoid(Instance, new(Instance)(m.of([])), (function(b) {
        var a = this;
        return new(Instance)(liftM2(concat, ListT.runListT(a), ListT.runListT(b)));
    }));
    Monad(Instance, (function(x) {
        return new(Instance)(m.of([x]));
    }), (function(f0) {
        var y, c = this;
        return new(Instance)(flattenM(ListT.runListT(c)
            .chain(mapM.bind(null, ((y = ListT.runListT), (function(x) {
                return y(f0(x));
            }))))));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)(liftM((function(x) {
            return [x];
        }), t));
    }));
    return Instance;
}));
(ListT.runListT = (function(x) {
    return x.run;
}));
(module.exports = ListT);