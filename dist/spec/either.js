/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/either.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var EitherMonad;
    (EitherMonad = (function(Instance, left, right) {
        (Instance.prototype.right = right);
        (Instance.right = Instance.prototype.right);
        (Instance.prototype.left = left);
        (Instance.left = Instance.prototype.left);
    }));
    return EitherMonad;
}));