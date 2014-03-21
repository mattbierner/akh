/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/base.kep'
 * DO NOT EDIT
*/
"use strict";
var chain, map, ap, concat, liftM, liftM2, next, sequencea, sequence, mapM, foldM;
(chain = (function(c, f) {
    return c.chain(f);
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
(exports["chain"] = chain);
(exports["map"] = map);
(exports["ap"] = ap);
(exports["concat"] = concat);
(exports["liftM"] = liftM);
(exports["liftM2"] = liftM2);
(exports["next"] = next);
(exports["sequencea"] = sequencea);
(exports["sequence"] = sequence);
(exports["mapM"] = mapM);
(exports["foldM"] = foldM);