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
    ErrorT;
(ErrorT = (function(m) {
    var Instance = EitherT(m);
    (Instance.fail = (Instance.prototype.fail = Instance.left));
    (Instance.handle = (function(m, e) {
        return ErrorT.runErrorT(m, m.of, e);
    }));
    (Instance.prototype.handle = (function(e) {
        var m = this;
        return Instance.handle(m, e);
    }));
    return Instance;
}));
(ErrorT.runErrorT = (function(m, ok, err) {
    return eitherT(m, err, ok);
}));
(module.exports = ErrorT);