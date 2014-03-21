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
    return runDContT(m, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.of, k));
})));
(module.exports = DCont);