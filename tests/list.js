var List = require('../index').list;
var base = require('../index').base;

exports.simple_of = function(test) {
    var c = List.of(3);
    
    test.deepEqual(
        List.runList(c),
        [3]);
    
    test.done();
};

exports.of_array = function(test) {
    var c = List.of([3]);
    
    test.deepEqual(
        List.runList(c),
        [[3]]);
    
    test.done();
};

exports.chain_simple = function(test) {
    var c = List.of(3)
        .chain(function(x) {
            return List.of(x * 2);
        })
        .chain(function(x) {
            return List.of(x + 1);
        });

    test.deepEqual(
        List.runList(c),
        [7]);
    
    test.done();
};


exports.chain_flatten = function(test) {
    var c = List.of(3).chain(function(x) {
        return List.of([x, x * 2]);
    });

    test.deepEqual(
        List.runList(c),
        [3, 6]);
    
    test.done();
};


exports.chain_order= function(test) {
    var c = List.of(1)
        .chain(function(x) {
            return List.of([x, x + 1])
        })
        .chain(function(x) {
            return List.of([x, x * 2]);
        });

    test.deepEqual(
        List.runList(c),
        [1, 2, 2, 4]);
    
    test.done();
};

exports.chain_empty= function(test) {
    var c = List.of(1)
        .chain(function(x) {
            return List.of([])
        })
        .chain(function(x) {
            return List.of([x, x * 2]);
        });

    test.deepEqual(
        List.runList(c),
        []);
    
    test.done();
};

exports.chain_list = function(test) {
    var c = List.of(1)
        .chain(function(x) {
            return List.of([[x], [x * 2]])
        })
        .chain(function(x) {
            return List.of([x.concat(x[0] + 1)])
        });

    test.deepEqual(
        List.runList(c),
        [[1, 2], [2, 3]]);
    
    test.done();
};


exports.list_concat = function(test) {
    var c = List.zero
        .concat(List.of(1))
        .concat(List.of(2))
        .concat(List.of(3))

    test.deepEqual(
        List.runList(c),
        [1, 2, 3]);
    
    test.done();
};


exports.map = function(test) {
    var c = List.zero
        .concat(List.of(1))
        .concat(List.of(2))
        .map(function(x) { return x * x; })
        .concat(List.of(3))

    test.deepEqual(
        List.runList(c),
        [1, 4, 3]);
    
    test.done();
};


exports.ap_one = function(test) {
    var c = List.of(function(x) { return x * 2; })
        .ap(List.zero
            .concat(List.of(1))
            .concat(List.of(2))
            .concat(List.of(3)));

    test.deepEqual(
        List.runList(c),
        [2, 4, 6]);
    
    test.done();
};

exports.ap_many = function(test) {
    var c = List.of(function(x) { return x * 2; })
        .concat(List.of(function(x) { return x + 10; }))
        .concat(List.of(function(x) { return x * x; }))

            .ap(List.zero
                .concat(List.of(1))
                .concat(List.of(2))
                .concat(List.of(3)));

    test.deepEqual(
        List.runList(c),
        [2, 4, 6, 11, 12, 13, 1, 4, 9]);
    
    test.done();
};


exports.ac = function(test) {
    var c = List.of(function(x, y) { return x * y; })
        .ac(List.zero
            .concat(List.of(1))
            .concat(List.of(2)))
        .ap(List.zero
            .concat(List.of(3))
            .concat(List.of(4)));

    test.deepEqual(
        List.runList(c),
        [3, 4, 6, 8]);
    
    test.done();
};

