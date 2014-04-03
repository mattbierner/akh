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


exports.ac = function(test) {
    var c = Either.of(function(x, y){return x / y;})
        .ac(Either.of(10))
        .ap(Either.of(5))
    
    test.deepEqual(
        Either.either(c, l, r),
        [true, 2]);
    
    test.done();
};

exports.acn = function(test) {
    var c = Either.of([].concat.bind([]))
        .ac(Either.of(1))
        .ac(Either.of(2))
        .ac(Either.of(3))
        .ac(Either.of(4))
        .ac(Either.of(5))
        .ap(Either.of(6))
    
    test.deepEqual(
        Either.either(c, l, r),
        [true, [1,2, 3, 4, 5, 6]]);
    
    test.done();
};

exports.ac_no_apply = function(test) {
    var c = Either.of([].concat.bind([]))
        .ac(Either.of(1))
        .ac(Either.of(2))
        .ac(Either.of(3))
        .ac(Either.of(4))
        .ac(Either.of(5))
        .ac(Either.of(6))
    
    var result = Either.either(c, l, r);
    test.deepEqual(
        result[1](7),
        [1,2, 3, 4, 5, 6, 7]);
    
    test.done();
};


exports.ac_too_many = function(test) {
    var c = Either.of(function(x, y) {return x + y; })
        .ac(Either.of(1))
        .ac(Either.of(2))
        .ac(Either.of(3))
        .ac(Either.of(4))
        .ac(Either.of(5))
        .ap(Either.of(6))

    test.deepEqual(
        Either.either(c, l, r),
        [true, 3]);
    
    test.done();
};