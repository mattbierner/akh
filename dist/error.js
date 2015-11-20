/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/error.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/error"], (function(require, exports, Identity, ErrorT) {
    "use strict";
    var Error, runErrorT = ErrorT["runErrorT"],
        id = (function(x) {
            return x;
        });
    (Error = ErrorT(Identity));
    var x = (function(m, ok, err) {
        var y, y0;
        return runErrorT(m, ((y = Identity.of), (function(z) {
            return y(ok(z));
        })), ((y0 = Identity.of), (function(z) {
            return y0(err(z));
        })));
    }),
        y = Identity.runIdentity;
    (Error.runError = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    (Error.tryError = (function(m, e) {
        return Error.runError(m, id, e);
    }));
    (Error.attemptError = (function(m, def) {
        return Error.tryError(m, (function() {
            return def;
        }));
    }));
    return Error;
}));