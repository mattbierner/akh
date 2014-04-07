/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trampoline.kep'
 * DO NOT EDIT
*/
"use strict";
var Trampoline, x, __o = require("./structure"),
    Monad = __o["Monad"];
(Trampoline = (function() {}));
var Done = (function(x) {
    var self = this;
    (self.x = x);
});
(Done.prototype = new(Trampoline)());
var Thunk = (function(k, x) {
    var self = this;
    (self.k = k);
    (self.x = x);
});
(Thunk.prototype = new(Trampoline)());
var Chain = (function(c, f) {
    var self = this;
    (self.c = c);
    (self.f = f);
});
(Chain.prototype = new(Trampoline)());
var Ap = (function(c, f) {
    var self = this;
    (self.c = c);
    (self.f = f);
}),
    appk = (function(f, x) {
        return ((f instanceof Ap) ? new(Chain)(f.c(x), f.f) : f(x));
    });
Monad(Trampoline, ((x = Done), (function(y) {
    return new(x)(y);
})), (function(f) {
    var c = this;
    return new(Chain)(c, f);
}));
(Trampoline.thunk = (function(k, x0) {
    return new(Thunk)(k, x0);
}));
(Trampoline.run = (function(cont) {
    var k = cont;
    while (true) {
        if ((k instanceof Done)) return k.x;
        else if ((k instanceof Thunk)) {
            (k = k.k(k.x));
        } else if ((k instanceof Chain)) {
            var __o0 = k,
                c = __o0["c"],
                f = __o0["f"];
            if ((c instanceof Done)) {
                (k = appk(f, c.x));
            } else if ((c instanceof Thunk)) {
                (k = c.k(c.x)
                    .chain(f));
            } else if ((c instanceof Chain)) {
                (k = c.c.chain(new(Ap)(c.f, k.f)));
            }
        }
    }
}));
(module.exports = Trampoline);