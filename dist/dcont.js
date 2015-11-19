/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/dcont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/dcont"], (function(require, exports, Identity, DContT) {
    "use strict";
    var DCont, runDContT = DContT["runDContT"];
    (DCont = DContT(Identity));
    var y = Identity.runIdentity;
    (DCont.runDCont = (function() {
        var args = arguments;
        return y(runDContT.apply(null, args));
    }));
    return DCont;
}));