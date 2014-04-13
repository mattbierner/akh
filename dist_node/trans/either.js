/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../structure"),
    Monad = __o["Monad"],
    Monoid = __o["Monoid"],
    Transformer = __o["Transformer"],
    EitherMonad = require("../spec/either"),
    StateMonad = require("../spec/state"),
    EitherT;
(EitherT = (function(m) {
    var x, x0, x1, Instance = (function(run) {
            var self = this;
            (self.run = run);
        });
    Monad(Instance, ((x = m.of), (function(x0) {
        var x1 = ({
            right: true,
            x: x0
        }),
            y = x(x1);
        return new(Instance)(y);
    })), (function(f) {
        var c = this;
        return new(Instance)(c.run.chain((function(__o0) {
            var x1, right = __o0["right"],
                x0 = __o0["x"];
            return (right ? ((x1 = f(x0)), x1.run) : m.of(({
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
        return new(Instance)(a.run.chain((function(__o0) {
            var right = __o0["right"],
                x1 = __o0["x"];
            return (right ? m.of(({
                right: true,
                x: x1
            })) : b.run);
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
    EitherMonad(Instance, ((x1 = m.of), (function(x2) {
        var x3 = ({
            right: false,
            x: x2
        }),
            y = x1(x3);
        return new(Instance)(y);
    })), Instance.of);
    StateMonad.tryLiftState(Instance, m);
    return Instance;
}));
(EitherT.eitherT = (function(m, l, r) {
    return m.run.chain((function(__o0) {
        var right = __o0["right"],
            x = __o0["x"];
        return (right ? r(x) : l(x));
    }));
}));
(module.exports = EitherT);