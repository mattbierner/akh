/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/dcont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "nu-stream/stream", "./unique", "akh.core.spec", "../spec/dcont", "../_tail"], (function(
    require, exports, __o, UniqueT, __o0, DContMonad, __o1) {
    "use strict";
    var DContT, append = __o["append"],
        cons = __o["cons"],
        first = __o["first"],
        rest = __o["rest"],
        isEmpty = __o["isEmpty"],
        NIL = __o["NIL"],
        Monad = __o0["Monad"],
        Transformer = __o0["Transformer"],
        Tail = __o1["Tail"],
        trampoline = __o1["trampoline"],
        y, Seg = (function(f) {
            var self = this;
            (self.frame = f);
        }),
        P = (function(t) {
            var self = this;
            (self.prompt = t);
        }),
        pushP = (function(t, k) {
            return cons(new(P)(t), k);
        }),
        pushSeg = (function(f, k) {
            return cons(new(Seg)(f), k);
        }),
        splitSeq = (function(t, k) {
            if (isEmpty(k)) return [NIL, NIL];
            var x = first(k),
                xs = rest(k);
            if (((x instanceof P) && (x.prompt === t))) return [NIL, xs];
            var __o2 = splitSeq(t, xs),
                a = __o2[0],
                b = __o2[1];
            return [cons(x, a), b];
        }),
        unDContT = (function(m, k) {
            return new(Tail)(m._run, k);
        }),
        runDContT = ((y = UniqueT.runUniqueT), (function() {
            var args = arguments,
                z = unDContT.apply(null, args);
            return y(trampoline(z));
        }));
    (DContT = (function(m) {
        var M = UniqueT(m),
            Instance = (function(run) {
                var self = this;
                (self._run = run);
            }),
            appk = (function(k, x) {
                var c = k;
                do {
                    if (((typeof c) === "function")) return M.of(c(x));
                    var top = first(c);
                    if ((top instanceof Seg)) {
                        var m0 = top.frame(x),
                            k0 = rest(c);
                        return new(Tail)(m0._run, k0);
                    }
                    (c = ((top instanceof P) ? rest(c) : top));
                }
                while (true);
            });
        Monad(Instance, (function(x) {
            return new(Instance)((function(k) {
                return appk(k, x);
            }));
        }), (function(f) {
            var c = this;
            return new(Instance)((function(k) {
                var k0 = cons(new(Seg)(f), k);
                return new(Tail)(c._run, k0);
            }));
        }));
        Transformer(Instance, m, (function(t) {
            return new(Instance)((function(k) {
                var x;
                return M.lift(t.map(trampoline))
                    .chain(((x = appk.bind(null, k)), (function(z) {
                        return trampoline(x(z));
                    })));
            }));
        }));
        DContMonad(Instance, new(Instance)((function(k) {
            var x;
            return M.unique.chain(((x = appk.bind(null, k)), (function(z) {
                return trampoline(x(z));
            })));
        })), (function(prompt, c) {
            return new(Instance)((function(k) {
                var k0 = cons(new(P)(prompt), k);
                return new(Tail)(c._run, k0);
            }));
        }), (function(prompt, f) {
            return new(Instance)((function(k) {
                var __o2 = splitSeq(prompt, k),
                    x = __o2[0],
                    xs = __o2[1],
                    m0 = f(x);
                return new(Tail)(m0._run, xs);
            }));
        }), (function(subk, c) {
            return new(Instance)((function(k) {
                var k0 = append(subk, k);
                return new(Tail)(c._run, k0);
            }));
        }));
        return Instance;
    }));
    (DContT.runDContT = (function(m, k) {
        return runDContT(m, cons(k, NIL));
    }));
    return DContT;
}));