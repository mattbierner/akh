/*
 * THIS FILE IS AUTO GENERATED from 'lib/list.kep'
 * DO NOT EDIT
*/"use strict";
var Identity = require("./identity"),
    ListT = require("./trans/list"),
    runListT = ListT["runListT"],
    List;
(List = ListT(Identity));
(List.runList = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, runListT));
(module.exports = List);