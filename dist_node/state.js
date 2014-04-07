/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/state.kep'
 * DO NOT EDIT
*/
"use strict";
var State, Trampoline = require("./trampoline"),
    StateT = require("./trans/state");
(State = StateT(Trampoline));
var x = StateT.runStateT,
    y = Trampoline.run;
(State.runState = (function() {
    return y(x.apply(null, arguments));
}));
var x0 = StateT.evalStateT,
    y0 = Trampoline.run;
(State.evalState = (function() {
    return y0(x0.apply(null, arguments));
}));
var x1 = StateT.execStateT,
    y1 = Trampoline.run;
(State.execState = (function() {
    return y1(x1.apply(null, arguments));
}));
(module.exports = State);