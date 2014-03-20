/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/either"], (function(require, exports, Identity, EitherT) {
    "use strict";
    var eitherT = EitherT["eitherT"],
        Either;
    (Either = EitherT(Identity));
    (Either.either = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(Identity.runIdentity, (function(m, l, r) {
        return eitherT(m, (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(Identity.of, l), (function(f, g) {
            return (function(x) {
                return f(g(x));
            });
        })(Identity.of, r));
    })));
    return Either;
}));