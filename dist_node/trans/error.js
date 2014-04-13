/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/error.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    ErrorMonad = require("../spec/error"),
    StateMonad = require("../spec/state"),
    EitherT = require("./either"),
    eitherT = EitherT["eitherT"],
    ErrorT;
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
(module.exports = ErrorT);