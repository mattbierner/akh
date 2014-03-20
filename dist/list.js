define(["require", "exports", "./identity", "./trans/list"], (function(require, exports, Identity, ListT) {
    "use strict";
    var runListT = ListT["runListT"],
        List;
    (List = ListT(Identity));
    (List.runList = (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.runIdentity, runListT));
    return List;
}));