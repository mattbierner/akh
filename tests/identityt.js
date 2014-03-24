var IdentityT = require('../index').trans.identity;
var List = require('../index').list;

var M = IdentityT(List);

var run = function(m) {
    return List.runList(
        IdentityT.runIdentityT(m));
};

exports.simple_of = function(test) {
    var c = M.of(3);
    
    test.deepEqual(
        run(c),
        [3]);
    
    test.done();
};

exports.of_array = function(test) {
    var c = M.of([3]);
    
    test.deepEqual(
        run(c),
        [[3]]);
    
    test.done();
};

exports.chain_simple = function(test) {
    var c = M.of(3)
        .chain(function(x) {
            return M.of(x * 2);
        })
        .chain(function(x) {
            return M.of(x + 1);
        });

    test.deepEqual(
        run(c),
        [7]);
    
    test.done();
};


exports.chain_flatten = function(test) {
    var c = M.of(3).chain(function(x) {
        return M.of([x, x * 2]);
    });

    test.deepEqual(
        run(c),
        [3, 6]);
    
    test.done();
};


exports.chain_order= function(test) {
    var c = M.of(1)
        .chain(function(x) {
            return M.of([x, x + 1])
        })
        .chain(function(x) {
            return M.of([x, x * 2]);
        });

    test.deepEqual(
        run(c),
        [1, 2, 2, 4]);
    
    test.done();
};

exports.chain_empty= function(test) {
    var c = M.of(1)
        .chain(function(x) {
            return M.of([])
        })
        .chain(function(x) {
            return M.of([x, x * 2]);
        });

    test.deepEqual(
        run(c),
        []);
    
    test.done();
};

exports.chain_list = function(test) {
    var c = M.of(1)
        .chain(function(x) {
            return M.of([[x], [x * 2]])
        })
        .chain(function(x) {
            return M.of([x.concat(x[0] + 1)])
        });

    test.deepEqual(
        run(c),
        [[1, 2], [2, 3]]);
    
    test.done();
};


exports.list_concat = function(test) {
    var c = M.zero
        .concat(M.of(1))
        .concat(M.of(2))
        .concat(M.of(3))

    test.deepEqual(
        run(c),
        [1, 2, 3]);
    
    test.done();
};


exports.map = function(test) {
    var c = M.zero
        .concat(M.of(1))
        .concat(M.of(2))
        .map(function(x) { return x * x; })
        .concat(M.of(3))

    test.deepEqual(
        run(c),
        [1, 4, 3]);
    
    test.done();
};