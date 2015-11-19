/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/dcont.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    DContT = require("./trans/dcont"),
    DCont, runDContT = DContT["runDContT"];
(DCont = DContT(Identity));
var y = Identity.runIdentity;
(DCont.runDCont = (function() {
    var args = arguments;
    return y(runDContT.apply(null, args));
}));
(module.exports = DCont);