/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/_tail.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Tail, trampoline;
    (Tail = (function(f, x) {
        var self = this;
        (self.f = f);
        (self.x = x);
    }));
    (trampoline = (function(f) {
        var value = f;
        while ((value instanceof Tail)) {
            (value = value.f(value.x));
        }
        return value;
    }));
    (exports["Tail"] = Tail);
    (exports["trampoline"] = trampoline);
}));