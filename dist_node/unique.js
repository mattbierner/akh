/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    Identity = require("./identity"),
    Unique;
(Unique = UniqueT(Identity));
var x = UniqueT.runUniqueT,
    y = Identity.runIdentity;
(Unique.runUnique = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Unique);