/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trampoline", "./trans/state"], (function(require, exports, Trampoline, StateT) {
    "use strict";
    var State;
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
    return State;
}));