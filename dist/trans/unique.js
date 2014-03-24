/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./state"], (function(require, exports, StateT) {
    "use strict";
    var UniqueT;
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
    (UniqueT.runUniqueT = (function(m, seed) {
        return StateT.evalStateT(m, (isNaN(seed) ? 1 : seed));
    }));
    return UniqueT;
}));