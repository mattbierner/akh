/*
 * THIS FILE IS AUTO GENERATED from 'lib/trans/state.kep'
 * DO NOT EDIT
*/"use strict";
var Monad = require("../monad"),
    StateT, runStateT = (function(m, s) {
        return m.run(s);
    });
(StateT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    });
    Monad(Instance, (function(x) {
        return new(Instance)((function(s) {
            return m.of([x, s]);
        }));
    }), (function(c, f) {
        return new(Instance)((function(s) {
            return runStateT(c, s)
                .chain((function(__o) {
                    var x = __o[0],
                        ss = __o[1];
                    return runStateT(f(x), ss);
                }));
        }));
    }));
    (Instance.get = new(Instance)((function(s) {
        return m.of([s, s]);
    })));
    (Instance.put = (function(s) {
        return new(Instance)((function(_) {
            return m.of([s, s]);
        }));
    }));
    (Instance.lift = (function(t) {
        return new(Instance)((function(s) {
            return t.chain((function(x) {
                return m.of([x, s]);
            }));
        }));
    }));
    return Instance;
}));
(StateT.runStateT = runStateT);
(StateT.evalStateT = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(__o) {
    var x = __o[0];
    return x;
}), runStateT));
(StateT.execStateT = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(__o) {
    var s = __o[1];
    return s;
}), runStateT));
(module.exports = StateT);