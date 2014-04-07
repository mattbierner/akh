/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
"use strict";
var EitherT, __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
    Right = (function(x) {
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
        return m.run;
    });
(EitherT = (function(m) {
    var Instance = (function(run) {
        var self = this;
        (self.run = run);
    });
    Monad(Instance, (function(x) {
        return new(Instance)(m.of(Right(x)));
    }), (function(f) {
        var c = this;
        return new(Instance)(runEitherT(c)
            .chain((function(__o0) {
                var right = __o0["right"],
                    x = __o0["x"];
                return (right ? runEitherT(f(x)) : m.of(Left(x)));
            })));
    }));
    Monoid(Instance, new(Instance)(m.of(Left(m.zero))), (function(b) {
        var a = this;
        return new(Instance)(runEitherT(a)
            .chain((function(__o0) {
                var right = __o0["right"],
                    x = __o0["x"];
                return (right ? m.of(Right(x)) : runEitherT(b));
            })));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)(t.chain((function(x) {
            return m.of(Right(x));
        })));
    }));
    (Instance.prototype.right = Instance.of);
    (Instance.right = Instance.prototype.right);
    (Instance.prototype.left = (function(x) {
        return new(Instance)(m.of(Left(x)));
    }));
    (Instance.left = Instance.prototype.left);
    return Instance;
}));
(EitherT.eitherT = (function(m, l, r) {
    return runEitherT(m)
        .chain((function(__o0) {
            var right = __o0["right"],
                x = __o0["x"];
            return (right ? r(x) : l(x));
        }));
}));
(module.exports = EitherT);