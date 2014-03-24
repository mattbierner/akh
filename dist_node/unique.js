/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    Identity = require("./identity"),
    Unique;
(Unique = UniqueT(Identity));
(Unique.runUnique = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, UniqueT.runUniqueT));
(module.exports = Unique);