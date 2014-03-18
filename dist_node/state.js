/*
 * THIS FILE IS AUTO GENERATED from 'lib/state.kep'
 * DO NOT EDIT
*/"use strict";
var Identity = require("./identity"),
    StateT = require("./trans/state"),
    runStateT = StateT["runStateT"],
    State;
(State = StateT(Identity));
(State.runState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, runStateT));
(State.evalState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(__o) {
    var x = __o[0];
    return x;
}), State.runState));
(State.execState = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})((function(__o) {
    var s = __o[1];
    return s;
}), State.runState));
(module.exports = State);