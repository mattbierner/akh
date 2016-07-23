/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    __o = require("akh.identity"),
    Unique, Identity = __o["Identity"];
(Unique = UniqueT(Identity));
var x = UniqueT.runUniqueT,
    y = Identity.runIdentity;
(Unique.runUnique = (function() {
    var args = arguments;
    return y(x.apply(null, args));
}));
(module.exports = Unique);