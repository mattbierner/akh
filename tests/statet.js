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
        runState(c, 's'),
        [{'x': 3, 's': 's'}]);
    
    test.done();
};

exports.simple_chain = function(test) {
    var c = M.get
        .chain(function(x) {
            return M.of(x + 1);
        });
    
    test.deepEqual(
        runState(c, 3),
        [{'x': 4, 's': 3}]);
    
    test.done();
};


exports.concat = function(test) {
    var c = M.of(3)
        .concat(M.of(5))
        .concat(M.put('x').chain(function(x) { return M.of(10); }))
        .concat(M.of(4));
    
    test.deepEqual(
        runState(c, 's'),
        [
         {x:3, s:'s'},
         {x:5, s:'s'},
         {x:10, s:'x'},
         {x:4, s:'s'}]);
    test.done();
};


exports.concat = function(test) {
    var c = M.of(3)
        .concat(M.of(5))
        .concat(M.put('x').chain(function(x) { return M.of(10); }))
        .concat(M.of(4))
        .map(function(x) { return x * 10; });
    
    test.deepEqual(
        runState(c, 's'),
        [
         {x:30, s:'s'},
         {x:50, s:'s'},
         {x:100, s:'x'},
         {x:40, s:'s'}]);
    test.done();
};


exports.many_chain = function(test) {
    var c = M.of(0);
    
    for (var i = 0; i < 100000; ++i) {
        c = c.map(function(x) {
            return x + 1;
        });
    }
    
    test.deepEqual(
        runState(c, 's'),
        [{'x': 100000, 's': 's'}]);
    test.done();
};

exports.many_chain_inner = function(test) {
    var f = function(x) {
        if (x > 10000) return M.of(x);
        return M.of(x + 1).chain(f);
    }
    
    test.deepEqual(
        runState(f(0), 0),
        [{'x': 10001, 's': 0}]);
    
    test.done();
};
