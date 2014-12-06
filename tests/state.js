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

exports.chain_order = function(test) {
    var c = State.of(3)
        .chain(function(x) {
            return State.of(x + 5);
        })
        .chain(function(x) {
            return State.of(x / 2);
        });
    
    test.deepEqual(
        State.runState(c, 's'),
        {'x': 4, 's': 's'});
    test.done();
};

exports.get = function(test) {
    var c = State.of(3)
        .chain(function(x) {
            return State.get;
        })
        .chain(function(x) {
            return State.of(x + 'abc');
        });
    
    test.deepEqual(
        State.evalState(c, 's'),
        'sabc');
    test.done();
};

exports.put = function(test) {
    var c = State.of(3)
        .chain(function(x) {
            return State.put(x);
        });
    
    test.deepEqual(
        State.execState(c, 's'),
        3);
    test.done();
};

exports.modify = function(test) {
    var c = State.of(3)
        .chain(function(x) {
            return State.modify(function(y) { return x * y});
        });
    
    test.deepEqual(
        State.execState(c, 4),
        12);
    test.done();
};

exports.many_chain = function(test) {
    var c = State.of(0);
    
    for (var i = 0; i < 100000; ++i) {
        c = c.map(function(x) {
            return x + 1;
        });
    }
    
    test.deepEqual(
        State.runState(c, 's'),
        {'x': 100000, 's': 's'});
    test.done();
};

exports.many_chain_inner = function(test) {
    var f = function(x) {
        if (x > 10000) return State.of(x);
        return State.of(x + 1).chain(f);
    }
    
    test.deepEqual(
        State.runState(f(0), 0),
        {'x': 10001, 's': 0});
    
    test.done();
};