/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        Transformer = __o["Transformer"],
        EitherT;
    (EitherT = (function(m) {
        var x, Instance = (function(run) {
                var self = this;
                (self.run = run);
            });
        Monad(Instance, (function(x) {
            return new(Instance)(m.of(({
                right: true,
                x: x
            })));
        }), (function(f) {
            var c = this;
            return new(Instance)(c.run.chain((function(__o0) {
                var x0, right = __o0["right"],
                    x = __o0["x"];
                return (right ? ((x0 = f(x)), x0.run) : m.of(({
                    right: false,
                    x: x
                })));
            })));
        }));
        Monoid(Instance, new(Instance)(m.of(((x = m.zero), ({
            right: false,
            x: x
        })))), (function(b) {
            var a = this;
            return new(Instance)(a.run.chain((function(__o0) {
                var right = __o0["right"],
                    x0 = __o0["x"];
                return (right ? m.of(({
                    right: true,
                    x: x0
                })) : b.run);
            })));
        }));
        Transformer(Instance, m, (function(t) {
            return new(Instance)(t.chain((function(x0) {
                return m.of(({
                    right: true,
                    x: x0
                }));
            })));
        }));
        (Instance.prototype.right = Instance.of);
        (Instance.right = Instance.prototype.right);
        (Instance.prototype.left = (function(x0) {
            return new(Instance)(m.of(({
                right: false,
                x: x0
            })));
        }));
        (Instance.left = Instance.prototype.left);
        return Instance;
    }));
    (EitherT.eitherT = (function(m, l, r) {
        return m.run.chain((function(__o0) {
            var right = __o0["right"],
                x = __o0["x"];
            return (right ? r(x) : l(x));
        }));
    }));
    return EitherT;
}));