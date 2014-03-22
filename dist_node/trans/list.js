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
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    }),
        sequence = foldr.bind(null, liftM2.bind(null, flip(concat)), m.of([])),
        mapM = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(sequence, map);
    Monoid(Instance, new(Instance)((function() {
        return m.of([]);
    })), (function(a, b) {
        return new(Instance)((function() {
            return liftM2(concat, ListT.runListT(a), ListT.runListT(b));
        }));
    }));
    Monad(Instance, (function(x) {
        return new(Instance)((function() {
            return m.of([x]);
        }));
    }), (function(c, f) {
        return new(Instance)((function() {
            return flattenM(ListT.runListT(c)
                .chain(mapM.bind(null, (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(ListT.runListT, f))));
        }));
    }));
    Transformer(Instance, (function(t) {
        return new(Instance)((function() {
            return liftM((function(x) {
                return [x];
            }), t);
        }));
    }));
    return Instance;
}));
(ListT.runListT = (function(m) {
    return m.run();
}));
(module.exports = ListT);