var DContT = require('../index').trans.dcont;
var State = require('../index').state;

var run = function(c, s, k) {
    return State.evalState(
        DContT.runDContT(
            c,
            k),
        s);
};

var id = function(x) { return x; }

var sqr = function(x) { return x * x; }

var M = DContT(State);


exports.simple_of = function(test) {
    var c = M.of(3);
    
    test.deepEqual(
        run(c, 's', sqr),
        9);
    
    test.done();
};


exports.lift = function(test) {
    var c = M.of(3)
        .chain(function(x) {
            return M.lift(State.modify(function(s) { return s + x * 2; }));
        })
       .chain(function(x) {
            return M.lift(State.get);
        });
    
    test.deepEqual(
        run(c, 1, id),
        7);
    
    test.done();
};

