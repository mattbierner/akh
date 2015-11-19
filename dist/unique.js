/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trans/unique", "./identity"], (function(require, exports, UniqueT, Identity) {
    "use strict";
    var Unique;
    (Unique = UniqueT(Identity));
    var x = UniqueT.runUniqueT,
        y = Identity.runIdentity;
    (Unique.runUnique = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    return Unique;
}));