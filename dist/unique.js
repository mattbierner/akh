/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trans/unique", "./trampoline"], (function(require, exports, UniqueT, Trampoline) {
    "use strict";
    var Unique;
    (Unique = UniqueT(Trampoline));
    var x = UniqueT.runUniqueT,
        y = Trampoline.run;
    (Unique.runUnique = (function() {
        return y(x.apply(null, arguments));
    }));
    return Unique;
}));