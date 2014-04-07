/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/dcont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/dcont"], (function(require, exports, Identity, DContT) {
    "use strict";
    var runDContT = DContT["runDContT"],
        DCont;
    (DCont = DContT(Identity));
    var x = runDContT,
        y = Identity.runIdentity;
    (DCont.runDCont = (function() {
        return y(x.apply(null, arguments));
    }));
    return DCont;
}));