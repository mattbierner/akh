/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/dcont.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    DContT = require("./trans/dcont"),
    runDContT = DContT["runDContT"],
    DCont;
(DCont = DContT(Identity));
(DCont.runDCont = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, (function(m, k) {
    return runDContT(m, (function(x) {
        return new(Identity)(k(x));
    }));
})));
(module.exports = DCont);