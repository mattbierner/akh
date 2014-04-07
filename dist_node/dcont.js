/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/dcont.kep'
 * DO NOT EDIT
*/
"use strict";
var DCont, Identity = require("./identity"),
    DContT = require("./trans/dcont"),
    runDContT = DContT["runDContT"];
(DCont = DContT(Identity));
var x = runDContT,
    y = Identity.runIdentity;
(DCont.runDCont = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = DCont);