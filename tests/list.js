var List = require('../index').list;

exports.simple_of = function(test) {
    var c = List.of(3);
    
    test.deepEqual(
        List.runList(c),
        [3]);
    
    test.done();
};

exports.simple_chain = function(test) {
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
