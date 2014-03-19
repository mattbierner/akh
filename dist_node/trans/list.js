/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/list.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("../base"),
    liftM = __o["liftM"],
    liftM2 = __o["liftM2"],
    __o0 = require("../structure"),
    Monoid = __o0["Monoid"],
    Monad = __o0["Monad"],
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
    cons = (function(x, xs) {
        return [x].concat(xs);
    }),
    foldM = (function(f, z, l) {
        return foldr(liftM2.bind(null, f), z, l);
    });
(ListT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    }),
        sequence = foldM.bind(null, flip(concat), m.of([])),
        mapM = (function(f, g) {
            return (function() {
                return f(g.apply(null, arguments));
            });
        })(sequence, map),
        append = flip(foldM.bind(null, concat));
    Monoid(Instance, new(Instance)((function() {
        return m.of([]);
    })), (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(liftM.bind(null, flatten), append));
    Monad(Instance, (function(x) {
        return new(Instance)((function() {
            return m.of([x]);
        }));
    }), (function(c, f) {
        return new(Instance)((function() {
            return liftM(flatten, ListT.runListT(c)
                .chain(mapM.bind(null, (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(ListT.runListT, f))));
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function() {
            return liftM((function(x) {
                return [x];
            }), t);
        }));
    }));
    return Instance;
}));
(ListT.runListT = (function(m, s) {
    return m.run(s);
}));
(module.exports = ListT);