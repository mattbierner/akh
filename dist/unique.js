/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Unique, UniqueT = require("./trans/unique"),
        Trampoline = require("./trampoline");
    (Unique = UniqueT(Trampoline));
    var x = UniqueT.runUniqueT,
        y = Trampoline.run;
    (Unique.runUnique = (function() {
        return y(x.apply(null, arguments));
    }));
    return Unique;
}));