/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/list.kep'
 * DO NOT EDIT
*/"use strict";
var Monad = require("../monad"),
    ListT, foldr = (function(f, z, a) {
        return Array.prototype.reduceRight.call(a, f, z);
    }),
    flatten = Function.prototype.apply.bind(Array.prototype.concat, []);
(ListT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    }),
        sequence = foldr.bind(null, (function(p, c) {
            return c.chain((function(x) {
                return p.chain((function(y) {
                    return m.of(x.concat(y));
                }));
            }));
        }), m.of([])),
        map = (function(f, x) {
            return sequence(x.map(f));
        });
    Monad(Instance, (function(x) {
        return new(Instance)((function() {
            return m.of([x]);
        }));
    }), (function(c, f) {
        return new(Instance)((function() {
            return ListT.runListT(c)
                .chain(map.bind(null, (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(ListT.runListT, f)))
                .chain((function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(m.of, flatten));
        }));
    }));
    return Instance;
}));
(ListT.runListT = (function(m, s) {
    return m.run(s);
}));
(module.exports = ListT);