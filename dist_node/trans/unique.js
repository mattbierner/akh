/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var StateT = require("./state"),
    UniqueT;
(UniqueT = (function(m) {
    var Instance = StateT(m);
    (Instance.unique = (Instance.prototype.unique = Instance.get.chain((function(x) {
        return Instance.put((x + 1))
            .chain((function() {
                return Instance.of(x);
            }));
    }))));
    return Instance;
}));
(UniqueT.runUniqueT = (function(m) {
    return StateT.evalStateT(m, 1);
}));
(module.exports = UniqueT);