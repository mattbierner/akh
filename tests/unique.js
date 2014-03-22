var Unique = require('../index').unique;

exports.simple_of = function(test) {
    var c = Unique.of(3);

    test.deepEqual(
        Unique.runUnique(c),
        3);

    test.done();
};

exports.simple_bind = function(test) {
    var c = Unique.of(3)
        .chain(function(x) {
            return Unique.of(x + 5);
        });
    
    test.deepEqual(
        Unique.runUnique(c),
        8);
    
    test.done();
};

exports.getting_uniques = function(test) {
    var c = Unique.unique
        .chain(function(x) {
            return Unique.unique
                .map(function(y) {
                    return [x, y];
                });
        });
    
    var r = Unique.runUnique(c);
    
    test.ok(r[0] !== r[1]);
    
    test.done();
};
