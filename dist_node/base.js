/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/base.kep'
 * DO NOT EDIT
*/
"use strict";
var chain, map, ap, concat, liftM, liftM2, liftA, liftA2, next, sequencea, sequence;
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
(next = (function(p, q) {
    return p.chain((function() {
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
(exports["chain"] = chain);
(exports["map"] = map);
(exports["ap"] = ap);
(exports["concat"] = concat);
(exports["liftM"] = liftM);
(exports["liftM2"] = liftM2);
(exports["liftA"] = liftA);
(exports["liftA2"] = liftA2);
(exports["next"] = next);
(exports["sequencea"] = sequencea);
(exports["sequence"] = sequence);