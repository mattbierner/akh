/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/error.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Monoid = __o["Monoid"],
        ErrorT, Right = (function(x) {
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
        runErrorT = (function(m) {
            return m.run();
        });
    (ErrorT = (function(m) {
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
                return runErrorT(c)
                    .chain((function(__o) {
                        var right = __o["right"],
                            x = __o["x"];
                        return (right ? runErrorT(f(x)) : m.of(Left(x)));
                    }));
            }));
        }));
        Monoid(Instance, new(Instance)((function() {
            return m.of(Left(m.zero));
        })), (function(a, b) {
            return new(Instance)((function() {
                return runErrorT(a)
                    .chain((function(__o) {
                        var right = __o["right"],
                            x = __o["x"];
                        return (right ? m.of(Right(x)) : runErrorT(b));
                    }));
            }));
        }));
        (Instance.fail = (Instance.prototype.fail = (function(x) {
            return new(Instance)((function() {
                return m.of(Left(x));
            }));
        })));
        (Instance.handle = (function(m, e) {
            return new(Instance)((function() {
                return Instance.runErrorT(m, e, m.of);
            }));
        }));
        (Instance.prototype.handle = (function(e) {
            var m = this;
            return Instance.handle(m, e);
        }));
        (Instance.lift = (function(t) {
            return new(Instance)((function() {
                return t.map(Right);
            }));
        }));
        return Instance;
    }));
    (ErrorT.runErrorT = (function(m, ok, err) {
        return runErrorT(m)
            .chain((function(__o) {
                var right = __o["right"],
                    x = __o["x"];
                return (right ? ok(x) : err(x));
            }));
    }));
    return ErrorT;
}));