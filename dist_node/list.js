/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("akh.identity"),
    ListT = require("./trans/list"),
    List, Identity = __o["Identity"],
    runListT = ListT["runListT"];
(List = ListT(Identity));
var y = Identity.runIdentity;
(List.runList = (function(z) {
    return y(runListT(z));
}));
(module.exports = List);