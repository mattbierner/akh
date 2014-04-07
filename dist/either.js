/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Either, Identity = require("./identity"),
        EitherT = require("./trans/either"),
        eitherT = EitherT["eitherT"];
    (Either = EitherT(Identity));
    var x = (function(m, l, r) {
        var y, y0;
        return eitherT(m, ((y = Identity.of), (function(x0) {
            return y(l(x0));
        })), ((y0 = Identity.of), (function(x0) {
            return y0(r(x0));
        })));
    }),
        y = Identity.runIdentity;
    (Either.either = (function() {
        return y(x.apply(null, arguments));
    }));
    return Either;
}));