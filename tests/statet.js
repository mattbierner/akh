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
