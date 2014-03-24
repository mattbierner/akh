/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trans/unique", "./trampoline"], (function(require, exports, UniqueT, Trampoline) {
    "use strict";
    var Unique;
    (Unique = UniqueT(Trampoline));
    (Unique.runUnique = (function(f, g) {
        return (function() {
            return f(g.apply(null, arguments));
        });
    })(Trampoline.run, UniqueT.runUniqueT));
    return Unique;
}));