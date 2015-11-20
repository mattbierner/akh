/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure", "../spec/either", "../spec/state"], (function(require, exports, __o,
    EitherMonad, StateMonad) {
    "use strict";
    var EitherT, Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        Right = (function(x) {
            return ({
                right: true,
                x: x
            });
        }),
        Left = (function(x) {
            return ({
                right: false,
                x: x
            });
        }),
        runEitherT = (function(x) {
            return x._run;
        });
    (EitherT = (function(m) {
        var x, x0, x1, Instance = (function(run) {
                var self = this;
                (self._run = run);
            });
        Monad(Instance, ((x = m.of), (function(z) {
            var z0 = ({
                right: true,
                x: z
            }),
                y = x(z0);
            return new(Instance)(y);
        })), (function(f) {
            var c = this;
            return new(Instance)(c._run.chain((function(__o0) {
                var right = __o0["right"],
                    x0 = __o0["x"],
                    x1;
                return (right ? ((x1 = f(x0)), x1._run) : m.of(({
                    right: false,
                    x: x0
                })));
            })));
        }));
        Monoid(Instance, new(Instance)(m.of(((x0 = m.zero), ({
            right: false,
            x: x0
        })))), (function(b) {
            var a = this;
            return new(Instance)(a._run.chain((function(__o0) {
                var right = __o0["right"],
                    x1 = __o0["x"];
                return (right ? m.of(({
                    right: true,
                    x: x1
                })) : b._run);
            })));
        }));
        Transformer(Instance, m, (function(t) {
            return new(Instance)(t.chain((function(x1) {
                return m.of(({
                    right: true,
                    x: x1
                }));
            })));
        }));
        EitherMonad(Instance, ((x1 = m.of), (function(z) {
            var z0 = ({
                right: false,
                x: z
            }),
                y = x1(z0);
            return new(Instance)(y);
        })), Instance.of);
        StateMonad.tryLiftState(Instance, m);
        return Instance;
    }));
    (EitherT.eitherT = (function(m, l, r) {
        return m._run.chain((function(__o0) {
            var right = __o0["right"],
                x = __o0["x"];
            return (right ? r(x) : l(x));
        }));
    }));
    return EitherT;
}));