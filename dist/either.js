/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/either"], (function(require, exports, Identity, EitherT) {
    "use strict";
    var Either, eitherT = EitherT["eitherT"];
    (Either = EitherT(Identity));
    var x = (function(m, l, r) {
        var y, y0;
        return eitherT(m, ((y = Identity.of), (function(z) {
            return y(l(z));
        })), ((y0 = Identity.of), (function(z) {
            return y0(r(z));
        })));
    }),
        y = Identity.runIdentity;
    (Either.either = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    return Either;
}));