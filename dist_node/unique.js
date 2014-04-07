/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    Trampoline = require("./trampoline"),
    Unique;
(Unique = UniqueT(Trampoline));
var x = UniqueT.runUniqueT,
    y = Trampoline.run;
(Unique.runUnique = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Unique);