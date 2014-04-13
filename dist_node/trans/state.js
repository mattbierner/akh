/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    LiftInner = __o["LiftInner"],
    __o0 = require("../base"),
    map = __o0["map"],
    Codensity = require("./codensity"),
    StateI = require("./statei"),
    StateT, CodensityProxy = (function(Instance, m) {
        var X = Codensity(Instance),
            x = X.lift,
            y = Instance.lift;
        (X.prototype.lift = (function(x0) {
            return x(y(x0));
        }));
        (X.lift = X.prototype.lift);
        (X.inner = m);
        LiftInner(X, m, X.lift);
        return X;
    });
(StateT = (function(m) {
    return CodensityProxy(StateI(m), m);
}));
(StateT.runStateT = (function(m, s) {
    return StateI.runStateT(Codensity.runCodensity(m, m.inner.of), s);
}));
var x = StateT.runStateT,
    y = map.bind(null, (function(__o1) {
        var x0 = __o1["x"];
        return x0;
    }));
(StateT.evalStateT = (function() {
    return y(x.apply(null, arguments));
}));
var x0 = StateT.runStateT,
    y0 = map.bind(null, (function(__o1) {
        var s = __o1["s"];
        return s;
    }));
(StateT.execStateT = (function() {
    return y0(x0.apply(null, arguments));
}));
(module.exports = StateT);