/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/state.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    __o0 = require("../base"),
    Codensity = require("./codensity"),
    StateI = require("./statei"),
    StateT, LiftInner = __o["LiftInner"],
    map = __o0["map"],
    CodensityProxy = (function(Instance, m) {
        var X = Codensity(Instance),
            x = X.lift,
            y = Instance.lift;
        (X.prototype.lift = (function(z) {
            return x(y(z));
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
    y = map.bind(null, (function(x0) {
        return x0.x;
    }));
(StateT.evalStateT = (function() {
    var args = arguments;
    return y(x.apply(null, args));
}));
var x0 = StateT.runStateT,
    y0 = map.bind(null, (function(x1) {
        return x1.s;
    }));
(StateT.execStateT = (function() {
    var args = arguments;
    return y0(x0.apply(null, args));
}));
(module.exports = StateT);