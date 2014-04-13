/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/state.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/state"], (function(require, exports, Identity, StateT) {
    "use strict";
    var State;
    (State = StateT(Identity));
    var x = StateT.runStateT,
        y = Identity.runIdentity;
    (State.runState = (function() {
        return y(x.apply(null, arguments));
    }));
    var x0 = StateT.evalStateT,
        y0 = Identity.runIdentity;
    (State.evalState = (function() {
        return y0(x0.apply(null, arguments));
    }));
    var x1 = StateT.execStateT,
        y1 = Identity.runIdentity;
    (State.execState = (function() {
        return y1(x1.apply(null, arguments));
    }));
    return State;
}));