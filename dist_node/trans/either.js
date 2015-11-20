/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    EitherMonad = require("../spec/either"),
    StateMonad = require("../spec/state"),
    EitherT, Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
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
            value: z
        }),
            y = x(z0);
        return new(Instance)(y);
    })), (function(f) {
        var c = this;
        return new(Instance)(c._run.chain((function(__o0) {
            var right = __o0["right"],
                value = __o0["value"],
                x0;
            return (right ? ((x0 = f(value)), x0._run) : m.of(({
                left: true,
                value: value
            })));
        })));
    }));
    Monoid(Instance, new(Instance)(m.of(((x0 = m.zero), ({
        left: true,
        value: x0
    })))), (function(b) {
        var a = this;
        return new(Instance)(a._run.chain((function(__o0) {
            var right = __o0["right"],
                value = __o0["value"];
            return (right ? m.of(({
                right: true,
                value: value
            })) : b._run);
        })));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)(t.chain((function(x1) {
            return m.of(({
                right: true,
                value: x1
            }));
        })));
    }));
    EitherMonad(Instance, ((x1 = m.of), (function(z) {
        var z0 = ({
            left: true,
            value: z
        }),
            y = x1(z0);
        return new(Instance)(y);
    })), Instance.of);
    StateMonad.tryLiftState(Instance, m);
    return Instance;
}));
(EitherT.runEitherT = runEitherT);
(EitherT.eitherT = (function(m, l, r) {
    return m._run.chain((function(__o0) {
        var right = __o0["right"],
            value = __o0["value"];
        return (right ? r(value) : l(value));
    }));
}));
(module.exports = EitherT);