/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh.identity", "./trans/either"], (function(require, exports, __o, EitherT) {
    "use strict";
    var Either, Identity = __o["Identity"];
    (Either = EitherT(Identity));
    var x = EitherT.runEitherT,
        y = Identity.runIdentity;
    (Either.runEither = (function(z) {
        return y(x(z));
    }));
    var x0 = (function(m, l, r) {
        var y0, y1;
        return EitherT.eitherT(m, ((y0 = Identity.of), (function(z) {
            return y0(l(z));
        })), ((y1 = Identity.of), (function(z) {
            return y1(r(z));
        })));
    }),
        y0 = Identity.runIdentity;
    (Either.either = (function() {
        var args = arguments;
        return y0(x0.apply(null, args));
    }));
    return Either;
}));