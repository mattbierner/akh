"use strict";
var Identity = require("./identity"),
    ContT = require("./trans/cont"),
    runContT = ContT["runContT"],
    Cont;
(Cont = ContT(Identity));
(Cont.runCont = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, (function(m, k) {
    return runContT(m, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.of, k));
})));
(module.exports = Cont);