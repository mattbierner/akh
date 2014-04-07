/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/list"], (function(require, exports, Identity, ListT) {
    "use strict";
    var runListT = ListT["runListT"],
        List;
    (List = ListT(Identity));
    var x = runListT,
        y = Identity.runIdentity;
    (List.runList = (function(x0) {
        return y(x(x0));
    }));
    return List;
}));