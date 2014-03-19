/*
 * THIS FILE IS AUTO GENERATED from 'lib/state.kep'
 * DO NOT EDIT
*/"use strict";
var Identity = require("./identity"),
    StateT = require("./trans/state"),
    State;
(State = StateT(Identity));
(State.runState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, StateT.runStateT));
(State.evalState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, StateT.evalStateT));
(State.execState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, StateT.execStateT));
(module.exports = State);