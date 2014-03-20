"use strict";
var Identity = require("./identity"),
    ListT = require("./trans/list"),
    runListT = ListT["runListT"],
    List;
(List = ListT(Identity));
(List.runList = (function(f, g) {
    return (function(x) {
        return f(g(x));
    });
})(Identity.runIdentity, runListT));
(module.exports = List);