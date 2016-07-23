/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh.identity", "./trans/list"], (function(require, exports, __o, ListT) {
    "use strict";
    var List, Identity = __o["Identity"],
        runListT = ListT["runListT"];
    (List = ListT(Identity));
    var y = Identity.runIdentity;
    (List.runList = (function(z) {
        return y(runListT(z));
    }));
    return List;
}));