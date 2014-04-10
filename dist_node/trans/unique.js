/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var StateT = require("./state"),
    UniqueT;
(UniqueT = (function(m) {
    var Instance = StateT(m);
    (Instance.prototype.unique = Instance.modify((function(y) {
        return (1 + y);
    })));
    (Instance.unique = Instance.prototype.unique);
    return Instance;
}));
(UniqueT.runUniqueT = (function(m, seed) {
    return StateT.evalStateT(m, (isNaN(seed) ? 1 : seed));
}));
(module.exports = UniqueT);