/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/dcont.kep'
 * DO NOT EDIT
*/
"use strict";
var DContMonad;
(DContMonad = (function(instance, newPrompt, pushPrompt, withSubCont, pushSubCont) {
    (instance.prototype.newPrompt = newPrompt);
    (instance.newPrompt = instance.prototype.newPrompt);
    (instance.prototype.pushPrompt = pushPrompt);
    (instance.pushPrompt = instance.prototype.pushPrompt);
    (instance.prototype.withSubCont = withSubCont);
    (instance.withSubCont = instance.prototype.withSubCont);
    (instance.prototype.pushSubCont = pushSubCont);
    (instance.pushSubCont = instance.prototype.pushSubCont);
    (instance.prototype.reset = (function(f) {
        return newPrompt.chain((function(p) {
            return pushPrompt(p, f(p));
        }));
    }));
    (instance.reset = instance.prototype.reset);
    (instance.prototype.shift = (function(p, f) {
        var t = this;
        return withSubCont(p, (function(k) {
            return pushPrompt(p, f((function(c) {
                return pushPrompt(p, pushSubCont(k, c));
            })));
        }));
    }));
    (instance.shift = instance.prototype.shift);
    return instance;
}));
(module.exports = DContMonad);