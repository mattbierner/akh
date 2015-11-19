/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/list"], (function(require, exports, Identity, ListT) {
    "use strict";
    var List, runListT = ListT["runListT"];
    (List = ListT(Identity));
    var y = Identity.runIdentity;
    (List.runList = (function(z) {
        return y(runListT(z));
    }));
    return List;
}));