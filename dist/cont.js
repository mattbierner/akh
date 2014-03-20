/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/cont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/cont"], (function(require, exports, Identity, ContT) {
    "use strict";
    var runContT = ContT["runContT"],
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
    return Cont;
}));