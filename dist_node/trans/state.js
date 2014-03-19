/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/state.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    StateT, Pair = (function(x, s) {
        return ({
            "x": x,
            "s": s
        });
    });
(StateT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    });
    Monad(Instance, (function(x) {
        return new(Instance)((function(s) {
            return m.of(Pair(x, s));
        }));
    }), (function(c, f) {
        return new(Instance)((function(s) {
            return StateT.runStateT(c, s)
                .chain((function(__o) {
                    var x = __o["x"],
                        s = __o["s"];
                    return StateT.runStateT(f(x), s);
                }));
        }));
    }));
    (Instance.get = new(Instance)((function(s) {
        return m.of(Pair(s, s));
    })));
    (Instance.put = (function(s) {
        return new(Instance)((function(_) {
            return m.of(Pair(s, s));
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function(s) {
            return t.chain((function(x) {
                return m.of(Pair(x, s));
            }));
        }));
    }));
    return Instance;
}));
(StateT.runStateT = (function(m, s) {
    return m.run(s);
}));
(StateT.evalStateT = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(n) {
    return n.chain((function(__o) {
        var x = __o["x"];
        return n.of(x);
    }));
}), StateT.runStateT));
(StateT.execStateT = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(n) {
    return n.chain((function(__o) {
        var s = __o["s"];
        return n.of(s);
    }));
}), StateT.runStateT));
(module.exports = StateT);