/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("akh.identity"),
    ContT = require("./trans/cont"),
    Cont, Identity = __o["Identity"],
    runContT = ContT["runContT"];
(Cont = ContT(Identity));
var x = (function(m, k) {
    var y;
    return runContT(m, ((y = Identity.of), (function(z) {
        return y(k(z));
    })));
}),
    y = Identity.runIdentity;
(Cont.runCont = (function() {
    var args = arguments;
    return y(x.apply(null, args));
}));
(module.exports = Cont);