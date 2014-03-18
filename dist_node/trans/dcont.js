/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/dcont.kep'
 * DO NOT EDIT
*/"use strict";
var stream = require("nu-stream")["stream"],
    first = stream["first"],
    rest = stream["rest"],
    isEmpty = stream["isEmpty"],
    Monad = require("../monad"),
    DContT, Seg = (function(f) {
        var self = this;
        (self.frame = f);
    }),
    P = (function(t) {
        var self = this;
        (self.prompt = t);
    }),
    empty = stream.NIL,
    push = stream.cons,
    pushSeq = stream.append,
    pushP = (function(t, k) {
        return push(new(P)(t), k);
    }),
    pushSeg = (function(f, k) {
        return push(new(Seg)(f), k);
    }),
    splitSeq = (function(t, k) {
        if (isEmpty(k)) return [empty, empty];
        var top = first(k),
            rest = rest(k);
        if (((top instanceof P) && (top.prompt === t))) return [empty, rest];
        var sub = splitSeq(t, rest);
        return [push(top, sub([0])), sub([1])];
    }),
    runDContT = (function(m, k) {
        return m.run(k);
    }),
    appk = (function(k, x) {
        var c = k;
        do {
            if (((typeof c) === "function")) return c(x);
            var top = first(c);
            if ((top instanceof Seg)) return runDContT(top.frame(x), rest(c));
            (c = ((top instanceof P) ? rest(c) : top));
        }
        while (true);
    });
(DContT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    }),
        of = (function(x) {
            return new(Instance)((function(k) {
                return appk(k, x);
            }));
        });
    (Instance.prototype.of = of);
    (Instance.of = of);
    (Instance.prototype.chain = (function(f) {
        var self = this;
        return new(Instance)((function(k) {
            return runDContT(self, pushSeg(f, k));
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function(k) {
            return t.chain(appk)
                .lift(k);
        }));
    }));
    return Instance;
}));
(DContT.runDContT = runDContT);
(module.exports = DContT);