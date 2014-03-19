/*
 * THIS FILE IS AUTO GENERATED from 'lib/base.kep'
 * DO NOT EDIT
*/"use strict";
var liftM, liftM2, next, seqa, seq;
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
(seqa = (function(arr) {
    return Array.prototype.reduce.call(arr, next);
}));
(seq = (function() {
    var args = arguments;
    return seqa(args);
}));
(exports["liftM"] = liftM);
(exports["liftM2"] = liftM2);
(exports["next"] = next);
(exports["seqa"] = seqa);
(exports["seq"] = seq);