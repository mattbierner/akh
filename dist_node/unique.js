/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    Identity = require("./identity"),
    Unique;
(Unique = UniqueT(Identity));
(Unique.runUnique = (function(m) {
    return Identity.runIdentity(UniqueT.runUniqueT(m));
}));
(module.exports = Unique);