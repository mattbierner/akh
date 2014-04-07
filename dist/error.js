/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/error.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/error"], (function(require, exports, Identity, ErrorT) {
    "use strict";
    var runErrorT = ErrorT["runErrorT"],
        Error, id = (function(x) {
            return x;
        });
    (Error = ErrorT(Identity));
    var x = (function(m, ok, err) {
        var y, y0;
        return runErrorT(m, ((y = Identity.of), (function(x0) {
            return y(ok(x0));
        })), ((y0 = Identity.of), (function(x0) {
            return y0(err(x0));
        })));
    }),
        y = Identity.runIdentity;
    (Error.runError = (function() {
        return y(x.apply(null, arguments));
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