var Error = require('../index').error;

var l = function(x) { return [false, x]; }
var r = function(x) { return [true, x]; }


exports.simple_of = function(test) {
    var c = Error.of(3);
    
    test.deepEqual(
        Error.attemptError(c, null),
        3);
    
    test.done();
};

exports.simple_chain = function(test) {
    var c = Error.of(3)
        .chain(function(x) {
            return Error.of(x * 2);
        });

    test.deepEqual(
        Error.attemptError(c, null),
        6);
    
    test.done();
};

exports.chain_order= function(test) {
    var c = Error.of(1)
        .chain(function(x) {
            return Error.of(x + 1)
        })
        .chain(function(x) {
            return Error.of(x * 2);
        });

    test.deepEqual(
        Error.attemptError(c, null),
        4);
    
    test.done();
};

exports.chain_fail = function(test) {
    var c = Error.of(1)
        .chain(function(x) {
            return Error.fail(x + 1)
        })
        .chain(function(x) {
            return Error.of(x * 2);
        })
        .chain(function(x) {
            return Error.of(x + 10);
        });

    test.deepEqual(
        Error.tryError(c, function(x) { return x; }),
        2);
    
    test.done();
};

exports.chain_fail_handle = function(test) {
    var c = Error.of(1)
        .chain(function(x) {
            return Error.fail(x + 1)
        })
        .chain(function(x) {
            return Error.of(x * 2);
        })
        .handle(function(e) {
            return Error.of(1000);
        })
        .chain(function(x) {
            return Error.of(x + 10);
        });

    test.deepEqual(
        Error.tryError(c, function(x) { return x; }),
        1010);
    
    test.done();
};



exports.map_right = function(test) {
    var c = Error.of(3)
        .map(function(x) { return x * 2; })
        .chain(function(x) {
            return Error.of(x / 3);
        });;
    
    test.deepEqual(
        Error.attemptError(c, null),
        2);
    
    test.done();
};

exports.map_left = function(test) {
    var c = Error.fail(3)
        .map(function(x) { return x * 2; })
        .chain(function(x) {
            return Error.of(x / 3);
        });
    
    test.deepEqual(
        Error.tryError(c, function(x) { return x; }),
        3);
    
    test.done();
};