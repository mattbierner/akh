/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trans/unique", "akh.identity"], (function(require, exports, UniqueT, __o) {
    "use strict";
    var Unique, Identity = __o["Identity"];
    (Unique = UniqueT(Identity));
    var x = UniqueT.runUniqueT,
        y = Identity.runIdentity;
    (Unique.runUnique = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    return Unique;
}));