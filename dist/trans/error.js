/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/error.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "./either"], (function(require, exports, __o, EitherT) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        eitherT = EitherT["eitherT"],
        ErrorT;
    (ErrorT = (function(m) {
        var Instance = EitherT(m);
        (Instance.prototype.fail = Instance.left);
        (Instance.fail = Instance.prototype.fail);
        (Instance.handle = (function(m0, e) {
            return ErrorT.runErrorT(m0, m0.of, e);
        }));
        (Instance.prototype.handle = (function(e) {
            var m0 = this;
            return Instance.handle(m0, e);
        }));
        return Instance;
    }));
    (ErrorT.runErrorT = (function(m, ok, err) {
        return eitherT(m, err, ok);
    }));
    return ErrorT;
}));