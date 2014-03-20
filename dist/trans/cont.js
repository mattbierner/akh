define(["require", "exports", "../structure"], (function(require, exports, __o) {
    "use strict";
    var Functor = __o["Functor"],
        Monad = __o["Monad"],
        ContT;
    (ContT = (function(m) {
        var reify, Instance = (function(run) {
                var self = this;
                (self.run = run);
            });
        Functor(Instance, (function(c, f) {
            return new(Instance)((function(k) {
                return ContT.runCont(c, (function(f, g) {
                    return (function(x) {
                        return f(g(x));
                    });
                })(k, f));
            }));
        }));
        Monad(Instance, (function(x) {
            return new(Instance)((function(k) {
                return k(x);
            }));
        }), (function(c, f) {
            return new(Instance)((function(k) {
                return ContT.runContT(c, (function(x) {
                    return ContT.runContT(f(x), k);
                }));
            }));
        }));
        (Instance.callcc = (Instance.prototype.callcc = ((reify = (function(k) {
            return (function(x) {
                return new(Instance)((function(_) {
                    return k(x);
                }));
            });
        })), (function(f) {
            return new(Instance)((function(k) {
                return ContT.runContT(f(reify(k)), k);
            }));
        }))));
        (Instance.lift = (function(t) {
            return new(Instance)((function(k) {
                return t.chain(k);
            }));
        }));
        return Instance;
    }));
    (ContT.runContT = (function(m, k) {
        return m.run(k);
    }));
    return ContT;
}));