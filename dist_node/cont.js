/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/cont.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    ContT = require("./trans/cont"),
    runContT = ContT["runContT"],
    Cont;
(Cont = ContT(Identity));
(Cont.runCont = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, (function(m, k) {
    return runContT(m, (function(x) {
        return new(Identity)(k(x));
    }));
})));
(module.exports = Cont);