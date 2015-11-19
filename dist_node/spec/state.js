/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/state.kep'
 * DO NOT EDIT
*/
"use strict";
var StateMonad;
(StateMonad = (function(Instance, get, put) {
    (Instance.prototype.get = get);
    (Instance.get = Instance.prototype.get);
    (Instance.prototype.put = put);
    (Instance.put = Instance.prototype.put);
    (Instance.prototype.modify = (function(f) {
        return get.chain((function(z) {
            return put(f(z));
        }));
    }));
    (Instance.modify = Instance.prototype.modify);
}));
(StateMonad.tryLiftState = (function(Instance, m) {
    var x, y;
    if ((m.get && m.put)) StateMonad(Instance, Instance.lift(m.get), ((x = Instance.lift), (y = m.put), (
        function(z) {
            return x(y(z));
        })));
}));
(module.exports = StateMonad);