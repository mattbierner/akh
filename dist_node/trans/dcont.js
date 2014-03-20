/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/dcont.kep'
 * DO NOT EDIT
*/"use strict";
var stream = require("nu-stream")["stream"],
    first = stream["first"],
    rest = stream["rest"],
    isEmpty = stream["isEmpty"],
    State = require("../state"),
    __o = require("../structure"),
    Monad = __o["Monad"],
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
        var x = first(k),
            xs = rest(k);
        if (((x instanceof P) && (x.prompt === t))) return [empty, xs];
        var sub = splitSeq(t, xs);
        return [push(x, sub[0]), sub[1]];
    }),
    unDContT = (function(m, k) {
        return m.run(k);
    }),
    runDContT = (function(m, k) {
        return State.evalState(unDContT(m, k), 1);
    }),
    appk = (function(k, x) {
        var c = k;
        do {
            if (((typeof c) === "function")) return c(x);
            var top = first(c);
            if ((top instanceof Seg)) return unDContT(top.frame(x), rest(c));
            (c = ((top instanceof P) ? rest(c) : top));
        }
        while (true);
    }),
    createPrompt = State.get.chain((function(x) {
        return State.put((x + 1))
            .chain((function() {
                return State.of(x);
            }));
    }));
(DContT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    });
    Monad(Instance, (function(x) {
        return new(Instance)((function(k) {
            return State.of(appk(k, x));
        }));
    }), (function(c, f) {
        return new(Instance)((function(k) {
            return runDContT(c, pushSeg(f, k));
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function(k) {
            return t.chain(appk)
                .lift(k);
        }));
    }));
    var newPrompt = new(Instance)((function(k) {
        return createPrompt.chain(appk.bind(null, k));
    })),
        pushPrompt = (function(prompt, c) {
            return new(Instance)((function(k) {
                return unDContT(c, pushP(prompt, k));
            }));
        }),
        withSubCont = (function(prompt, f) {
            return new(Instance)((function(k) {
                var sub = splitSeq(prompt, k);
                return unDContT(f(sub[0]), sub[1]);
            }));
        }),
        pushSubCont = (function(subk, c) {
            return new(Instance)((function(k) {
                return unDContT(c, pushSeq(subk, k));
            }));
        });
    (Instance.reset = (function(f) {
        return newPrompt.chain((function(p) {
            return pushPrompt(p, f(p));
        }));
    }));
    (Instance.shift = (function(p, f) {
        return withSubCont(p, (function(k) {
            return pushPrompt(p, f((function(c) {
                return pushPrompt(p, pushSubCont(k, c));
            })));
        }));
    }));
    return Instance;
}));
(DContT.runDContT = (function(m, k) {
    return runDContT(m, push(k, empty));
}));
(module.exports = DContT);