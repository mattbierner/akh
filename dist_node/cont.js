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
var x = (function(m, k) {
    var y;
    return runContT(m, ((y = Identity.of), (function(x0) {
        return y(k(x0));
    })));
}),
    y = Identity.runIdentity;
(Cont.runCont = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Cont);