/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./trans/unique", "./identity"], (function(require, exports, UniqueT, Identity) {
    "use strict";
    var Unique;
    (Unique = UniqueT(Identity));
    (Unique.runUnique = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.runIdentity, UniqueT.runUniqueT));
    return Unique;
}));