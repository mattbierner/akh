/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/error.kep'
 * DO NOT EDIT
*/
"use strict";
var ErrorMonad;
(ErrorMonad = (function(Instance, fail, handle) {
    (Instance.prototype.fail = fail);
    (Instance.fail = Instance.prototype.fail);
    (Instance.prototype.handle = handle);
    (Instance.handle = (function(m, e) {
        return m.handle(e);
    }));
}));
(module.exports = ErrorMonad);