var Either = require('../index').either;

var l = function(x) { return [false, x]; }
var r = function(x) { return [true, x]; }

exports.simple_of = function(test) {
    var c = Either.of(3);
    
    test.deepEqual(
        Either.either(c, l, r),
        [true, 3]);
    
    test.done();
};

exports.left = function(test) {
    var c = Either.left(3);
    
    test.deepEqual(
        Either.either(c, l, r),
        [false, 3]);
    
    test.done();
};

exports.simple_chain = function(test) {
    var c = Either.of(3)
        .chain(function(x) {
            return Either.of(x * 2);
        });

    test.deepEqual(
        Either.either(c, l, r),
        [true, 6]);
    
    test.done();
};

exports.chain_order= function(test) {
    var c = Either.of(1)
        .chain(function(x) {
            return Either.of(x + 1)
        })
        .chain(function(x) {
            return Either.of(x * 2);
        });

    test.deepEqual(
        Either.either(c, l, r),
        [true, 4]);
    
    test.done();
};

exports.chain_many = function(test) {
    var c = Either.of(0);
    
    for (var i = 0; i < 100000; ++i)
        c = c.chain(function(x) {
            return Either.of(x + 1);
        });

    
    test.deepEqual(
        Either.either(c, l, r),
        [true, 100000]);

    test.done();
};

exports.chain_left = function(test) {
    var c = Either.of(1)
        .chain(function(x) {
            return Either.left(x + 1)
        })
        .chain(function(x) {
            return Either.of(x * 2);
        })
        .chain(function(x) {
            return Either.of(x + 10);
        });

    test.deepEqual(
        Either.either(c, l, r),
        [false, 2]);
    
    test.done();
};


exports.map_right = function(test) {
    var c = Either.of(3)
        .map(function(x) { return x * 2; })
        .chain(function(x) {
            return Either.of(x / 3);
        });;
    
    test.deepEqual(
        Either.either(c, l, r),
        [true, 2]);
    
    test.done();
};

exports.map_left = function(test) {
    var c = Either.left(3)
        .map(function(x) { return x * 2; })
        .chain(function(x) {
            return Either.of(x / 3);
        });
    
    test.deepEqual(
        Either.either(c, l, r),
        [false, 3]);
    
    test.done();
};