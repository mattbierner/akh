var ContT = require('../index').trans.cont;
var List = require('../index').list;

var run = function(c, k) {
    return List.runList(
        ContT.runContT(
            c,
            function(x) { return List.of(k(x))}));
};

var id = function(x) { return x; }

var sqr = function(x) { return x * x; }

var M = ContT(List);


exports.simple_of = function(test) {
    var c = M.of(3);
    
    test.deepEqual(
        run(c, sqr),
        [9]);
    
    
    test.done();
};


exports.lift = function(test) {
    var c = M.of(1)
        .chain(function(x) {
            return M.lift(List.of([x, x * 2]));
        });
    
    test.deepEqual(
        run(c, id),
        [1, 2]);
    
    test.done();
};

