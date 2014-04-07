/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var UniqueT, StateT = require("./state");
    (UniqueT = (function(m) {
        var Instance = StateT(m);
        (Instance.prototype.unique = Instance.get.chain((function(x) {
            return Instance.put((x + 1))
                .chain((function() {
                    return Instance.of(x);
                }));
        })));
        (Instance.unique = Instance.prototype.unique);
        return Instance;
    }));
    (UniqueT.runUniqueT = (function(m, seed) {
        return StateT.evalStateT(m, (isNaN(seed) ? 1 : seed));
    }));
    return UniqueT;
}));