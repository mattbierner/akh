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

exports.chain_left = function(test) {
    var c = Either.of(1)
        .chain(function(x) {
            return Either.left(x + 1)
        })
        .chain(function(x) {
            return Either.of(x * 2);
        });

    test.deepEqual(
        Either.either(c, l, r),
        [true, 2]);
    
    test.done();
};

/*
exports.chain_empty= function(test) {
    var c = Either.of(1)
        .chain(function(x) {
            return Either.of([])
        })
        .chain(function(x) {
            return Either.of([x, x * 2]);
        });

    test.deepEqual(
        Either.either(c, l, r),
        []);
    
    test.done();
};

exports.chain_list = function(test) {
    var c = Either.of(1)
        .chain(function(x) {
            return Either.of([[x], [x * 2]])
        })
        .chain(function(x) {
            return Either.of([x.concat(x[0] + 1)])
        });

    test.deepEqual(
        Either.either(c, l, r),
        [[1, 2], [2, 3]]);
    
    test.done();
};


exports.list_concat = function(test) {
    var c = Either.zero
        .concat(Either.of(1))
        .concat(Either.of(2))
        .concat(Either.of(3))

    test.deepEqual(
        Either.either(c, l, r),
        [1, 2, 3]);
    
    test.done();
};


exports.map = function(test) {
    var c = Either.zero
        .concat(Either.of(1))
        .concat(Either.of(2))
        .map(function(x) { return x * x; })
        .concat(Either.of(3))

    test.deepEqual(
        Either.either(c, l, r),
        [1, 4, 3]);
    
    test.done();
};*/