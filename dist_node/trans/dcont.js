"use strict";
var stream = require("nu-stream")["stream"],
    first = stream["first"],
    rest = stream["rest"],
    isEmpty = stream["isEmpty"],
    State = require("../state"),
    __o = require("../structure"),
    Functor = __o["Functor"],
    Monad = __o["Monad"],
    DContT, Seg = (function(f) {
        var self = this;
        (self.frame = f);
    }),
    FSeg = (function(f) {
        var self = this;
        (self.frame = f);
    });
(FSeg.prototype = new(Seg)());
var MSeg = (function(f) {
    var self = this;
    (self.frame = f);
});
(MSeg.prototype = new(Seg)());
var P = (function(t) {
    var self = this;
    (self.prompt = t);
}),
    empty = stream.NIL,
    push = stream.cons,
    pushSeq = stream.append,
    pushP = (function(t, k) {
        return push(new(P)(t), k);
    }),
    pushFSeg = (function(f, k) {
        return push(new(FSeg)(f), k);
    }),
    pushMSeg = (function(f, k) {
        return push(new(MSeg)(f), k);
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
            if (((typeof c) === "function")) return State.of(c(x));
            var top = first(c);
            if ((top instanceof MSeg)) return unDContT(top.frame(x), rest(c));
            else if ((top instanceof FSeg)) return appk(rest(c), top.frame(x));
            else(c = ((top instanceof P) ? rest(c) : top));
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
            return appk(k, x);
        }));
    }), (function(c, f) {
        return new(Instance)((function(k) {
            return unDContT(c, pushMSeg(f, k));
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function(k) {
            return State.of(t.chain(appk.bind(null, k)));
        }));
    }));
    (Instance.newPrompt = (Instance.prototype.newPrompt = new(Instance)((function(k) {
        return createPrompt.chain(appk.bind(null, k));
    }))));
    (Instance.pushPrompt = (Instance.prototype.pushPrompt = (function(prompt, c) {
        return new(Instance)((function(k) {
            return unDContT(c, pushP(prompt, k));
        }));
    })));
    (Instance.withSubCont = (Instance.prototype.withSubCont = (function(prompt, f) {
        return new(Instance)((function(k) {
            var sub = splitSeq(prompt, k);
            return unDContT(f(sub[0]), sub[1]);
        }));
    })));
    (Instance.pushSubCont = (Instance.prototype.pushSubCont = (function(subk, c) {
        return new(Instance)((function(k) {
            return unDContT(c, pushSeq(subk, k));
        }));
    })));
    (Instance.reset = (Instance.prototype.reset = (function(f) {
        return Instance.newPrompt.chain((function(p) {
            return Instance.pushPrompt(p, f(p));
        }));
    })));
    (Instance.shift = (Instance.prototype.shift = (function(p, f) {
        return Instance.withSubCont(p, (function(k) {
            return Instance.pushPrompt(p, f((function(c) {
                return Instance.pushPrompt(p, Instance.pushSubCont(k, c));
            })));
        }));
    })));
    return Instance;
}));
(DContT.runDContT = (function(m, k) {
    return runDContT(m, push(k, empty));
}));
(module.exports = DContT);