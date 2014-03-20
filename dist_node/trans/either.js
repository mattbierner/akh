/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../base"),
    liftM = __o["liftM"],
    __o0 = require("../structure"),
    Monad = __o0["Monad"],
    Monoid = __o0["Monoid"],
    EitherT, Right = (function(x) {
        return ({
            "right": true,
            "x": x
        });
    }),
    Left = (function(x) {
        return ({
            "right": false,
            "x": x
        });
    }),
    runEitherT = (function(m) {
        return m.run();
    });
(EitherT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    });
    Monad(Instance, (function(x) {
        return new(Instance)((function() {
            return m.of(Right(x));
        }));
    }), (function(c, f) {
        return new(Instance)((function() {
            return runEitherT(c)
                .chain((function(__o) {
                    var right = __o["right"],
                        x = __o["x"];
                    return (right ? runEitherT(f(x)) : m.of(Right(x)));
                }));
        }));
    }));
    Monoid(Instance, new(Instance)((function() {
        return m.of(Left(m.zero));
    })), (function(a, b) {
        return new(Instance)((function() {
            return runEitherT(a)
                .chain((function(__o) {
                    var right = __o["right"],
                        x = __o["x"];
                    return (right ? m.of(Right(x)) : runEitherT(b));
                }));
        }));
    }));
    (Instance.right = (Instance.prototype.right = Instance.of));
    (Instance.left = (Instance.prototype.left = (function(x) {
        return new(Instance)((function() {
            return m.of(Left(x));
        }));
    })));
    (Instance.lift = (function(t) {
        return new(Instance)((function() {
            return liftM(Right, t);
        }));
    }));
    return Instance;
}));
(EitherT.eitherT = (function(m, l, r) {
    return runEitherT(m)
        .chain((function(__o) {
            var right = __o["right"],
                x = __o["x"];
            return (right ? r(x) : l(x));
        }));
}));
(module.exports = EitherT);