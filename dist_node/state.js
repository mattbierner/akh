/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/state.kep'
 * DO NOT EDIT
*/
"use strict";
var Trampoline = require("./trampoline"),
    StateT = require("./trans/state"),
    State;
(State = StateT(Trampoline));
(State.runState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Trampoline.run, StateT.runStateT));
(State.evalState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Trampoline.run, StateT.evalStateT));
(State.execState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Trampoline.run, StateT.execStateT));
(module.exports = State);