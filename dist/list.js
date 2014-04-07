/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var List, Identity = require("./identity"),
        ListT = require("./trans/list"),
        runListT = ListT["runListT"];
    (List = ListT(Identity));
    var x = runListT,
        y = Identity.runIdentity;
    (List.runList = (function(x0) {
        return y(x(x0));
    }));
    return List;
}));