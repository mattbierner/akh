/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/either.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    EitherT = require("./trans/either"),
    eitherT = EitherT["eitherT"],
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
(module.exports = Either);