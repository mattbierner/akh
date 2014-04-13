/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/error.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    EitherT = require("./either"),
    eitherT = EitherT["eitherT"],
    ErrorMonad = require("../spec/error"),
    ErrorT;
(ErrorT = (function(m) {
    var Instance = EitherT(m);
    ErrorMonad(Instance, Instance.left, (function(e) {
        var c = this;
        return ErrorT.runErrorT(c, c.of, e);
    }));
    return Instance;
}));
(ErrorT.runErrorT = (function(m, ok, err) {
    return eitherT(m, err, ok);
}));
(module.exports = ErrorT);