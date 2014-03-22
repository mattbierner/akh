/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trampoline.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./structure"], (function(require, exports, __o) {
    "use strict";
    var Monad = __o["Monad"],
        Trampoline;
    (Trampoline = (function() {}));
    var Done = (function(x) {
        var self = this;
        (self.x = x);
    });
    (Done.prototype = new(Trampoline)());
    var Thunk = (function(k) {
        var self = this;
        (self.k = k);
    });
    (Thunk.prototype = new(Trampoline)());
    var Chain = (function(c, f) {
        var self = this;
        (self.c = c);
        (self.f = f);
    });
    (Chain.prototype = new(Trampoline)());
    Monad(Trampoline, (function(x) {
        return new(Done)(x);
    }), (function(c, f) {
        return new(Chain)(c, f);
    }));
    (Trampoline.thunk = (function(k) {
        return new(Thunk)(k);
    }));
    var Ap = (function(c, k) {
        var self = this;
        (self.c = c);
        (self.k = k);
    }),
        appk = (function(f, x) {
            return ((f instanceof Ap) ? new(Chain)(f.c(x), f.k) : f(x));
        });
    (Trampoline.run = (function(cont) {
        var k = cont;
        while (true) {
            if ((k instanceof Done)) return k.x;
            else if ((k instanceof Thunk))(k = k.k());
            else if ((k instanceof Chain)) {
                var __o = k,
                    c = __o["c"];
                if ((c instanceof Done))(k = appk(k.f, c.x));
                else if ((c instanceof Thunk))(k = new(Chain)(c.k(), k.f));
                else if ((c instanceof Chain))(k = new(Chain)(c.c, new(Ap)(c.f, k.f)));
            }
        }
    }));
    return Trampoline;
}));