/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
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
            return m.run;
        });
    (EitherT = (function(m) {
        var Instance = (function(run) {
            var self = this;
            (self.run = run);
        });
        Monad(Instance, (function(x) {
            return new(Instance)(m.of(Right(x)));
        }), (function(c, f) {
            return new(Instance)(runEitherT(c)
                .chain((function(__o) {
                    var right = __o["right"],
                        x = __o["x"];
                    return (right ? runEitherT(f(x)) : m.of(Left(x)));
                })));
        }));
        Monoid(Instance, new(Instance)(m.of(Left(m.zero))), (function(a, b) {
            return new(Instance)(runEitherT(a)
                .chain((function(__o) {
                    var right = __o["right"],
                        x = __o["x"];
                    return (right ? m.of(Right(x)) : runEitherT(b));
                })));
        }));
        Transformer(Instance, (function(t) {
            return new(Instance)(t.chain((function(x) {
                return m.of(Right(x));
            })));
        }));
        (Instance.right = (Instance.prototype.right = Instance.of));
        (Instance.left = (Instance.prototype.left = (function(x) {
            return new(Instance)(m.of(Left(x)));
        })));
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
    return EitherT;
}));