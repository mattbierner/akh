/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/error.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh.core.spec", "../spec/error", "../spec/state", "./either"], (function(require,
    exports, __o, ErrorMonad, StateMonad, EitherT) {
    "use strict";
    var ErrorT, Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        eitherT = EitherT["eitherT"];
    (ErrorT = (function(m) {
        var Instance = EitherT(m);
        ErrorMonad(Instance, Instance.left, (function(e) {
            var c = this;
            return ErrorT.runErrorT(c, c.of, e);
        }));
        StateMonad.tryLiftState(Instance, m);
        return Instance;
    }));
    (ErrorT.runErrorT = (function(m, ok, err) {
        return eitherT(m, err, ok);
    }));
    return ErrorT;
}));