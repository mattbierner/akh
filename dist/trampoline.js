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
        if ((!(((c instanceof Chain) || (c instanceof Thunk)) || (c instanceof Done)))) debugger;
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
    Monad(Trampoline, (function(x) {
        return new(Done)(x);
    }), (function(c, f) {
        return (((c instanceof Chain) && false) ? new(Chain)(c.c, (function(x) {
            return c.f(x)
                .chain(f);
        })) : new(Chain)(c, f));
    }));
    (Trampoline.thunk = (function(k, x) {
        return new(Thunk)(k, x);
    }));
    (Trampoline.run = (function(cont) {
        var k = cont;
        while (true) {
            if ((k instanceof Done)) return k.x;
            else if ((k instanceof Thunk))(k = k.k(k.x));
            else if ((k instanceof Chain)) {
                var __o = k,
                    c = __o["c"],
                    f = __o["f"];
                if ((c instanceof Done))(k = appk(f, c.x));
                else if ((c instanceof Thunk))(k = c.k(c.x)
                    .chain(f));
                else if ((c instanceof Chain))(k = c.c.chain(new(Ap)(c.f, k.f)));
            }
        }
    }));
    return Trampoline;
}));