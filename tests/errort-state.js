var State = require('../index').state;
var ErrorT = require('../index').trans.error;

var runState = function(c, s) {
    return State.runState(
        ErrorT.runErrorT(c, function(x) {
            return State.of(x);
        },
        function(x) {
            return State.of(null);
        }),
        s);
};


var M = ErrorT(State);


exports.simple_of = function(test) {
    var c = M.of(3);
    
    test.deepEqual(
        runState(c, 's'),
        {'x': 3, 's': 's'});
    
    test.done();
};

exports.simple_chain = function(test) {
    var c = M.of(1)
        .chain(function(x) {
            return M.of(x + 1);
        });
    
    test.deepEqual(
        runState(c, 3),
        {'x': 2, 's': 3});
    
    test.done();
};
/*

exports.many_chain = function(test) {
    var c = M.of(0);
    
    for (var i = 0; i < 10000; ++i) {
        c = c.chain(function(x) {
            return M.of(x + 1);
        });
    }

    test.deepEqual(
        runState(c, 3),
        {'x': 10000, 's': 3});
    
    test.done();
};


exports.lift = function(test) {
    var c = M.lift(State.get)
        .chain(function(x) {
            return M.of(x + 1);
        });
    
    test.deepEqual(
        runState(c, 3),
        {'x': 4, 's': 3});
    
    test.done();
};
*/