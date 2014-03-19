var StateT = require('../index').trans.state;
var List = require('../index').list;

var runState = function(c, s) {
    return List.runList(StateT.runStateT(c, s));
};


var evalState = function(c, s) {
    return List.runList(StateT.evalStateT(c, s));
};

var execState = function(c, s) {
    return List.runList(StateT.execStateT(c, s));
};


var M = StateT(List);

exports.simple_of = function(test) {
    var c = M.of(3);
    
    test.deepEqual(
        evalState(c, 's'),
        [3]);
    
    test.deepEqual(
        execState(c, 's'),
        ['s']);
    
    test.done();
};


exports.lift = function(test) {
    var c = M.get
        .chain(function(x) {
            return M.lift(List.of([x, x * 2]));
        });
    
    test.deepEqual(
        evalState(c, 3),
        [3, 6]);
    
    test.done();
};


/*
exports.simple_bind = function(test) {
    var c = State.of(3).chain(function(x) {
        return State.of(x + 5);
    });
    
    test.deepEqual(
        State.runState(c, 's'),
        [8, 's']);
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

*/