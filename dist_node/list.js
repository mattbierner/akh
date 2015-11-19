/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/list.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    ListT = require("./trans/list"),
    List, runListT = ListT["runListT"];
(List = ListT(Identity));
var y = Identity.runIdentity;
(List.runList = (function(z) {
    return y(runListT(z));
}));
(module.exports = List);