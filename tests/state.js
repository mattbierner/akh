var State = require('../index').state;

exports.simple_of = function(test) {
    var c = State.of(3);

    test.deepEqual(
        State.evalState(c, 's'),
        3);
    
    test.deepEqual(
        State.execState(c, 's'),
        's');
    
    test.done();
};

exports.simple_bind = function(test) {
    var c = State.of(3).chain(function(x) {
        return State.of(x + 5);
    });
    
    test.deepEqual(
        State.runState(c, 's'),
        {'x': 8, 's': 's'});
    test.done();
};

exports.get = function(test) {
    var c = State.of(3).chain(function(x) {
        return State.get;
    });
    
    test.deepEqual(
        State.evalState(c, 's'),
        's');
    test.done();
};

exports.put = function(test) {
    var c = State.of(3).chain(function(x) {
        return State.put(x);
    })
    
    test.deepEqual(
        State.execState(c, 's'),
        3);
    test.done();
};

exports.many_chain = function(test) {
    var c = State.of(0);
    
    for (var i = 0; i < 10000; ++i) {
        c = c.chain(function(x) {
            return State.of(x + 1);
        });
    }
    
    test.deepEqual(
        State.runState(c, 's'),
        {'x': 10000, 's': 's'});
    test.done();
};