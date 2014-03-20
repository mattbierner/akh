define(["require", "exports", "./identity", "./trans/state"], (function(require, exports, Identity, StateT) {
    "use strict";
    var State;
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
    return State;
}));