/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueT = require("./trans/unique"),
    Trampoline = require("./trampoline"),
    Unique;
(Unique = UniqueT(Trampoline));
(Unique.runUnique = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Trampoline.run, UniqueT.runUniqueT));
(module.exports = Unique);