/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/cont.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Cont, Identity = require("./identity"),
        ContT = require("./trans/cont"),
        runContT = ContT["runContT"];
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
    return Cont;
}));