/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
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
(module.exports = List);