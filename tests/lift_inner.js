var StateT = require('../index').trans.state;
var Identity = require('../index').identity;

var run = function(c) {
    return Identity.runIdentity(
        StateT.evalStateT(
            StateT.evalStateT(
                StateT.evalStateT(
                    StateT.evalStateT(c, 1),
                2),
            3),
        4));
};


var M = StateT(StateT(StateT(StateT(Identity))));

exports.top_level = function(test) {
    var c = M.get;
    
    test.deepEqual(
        run(c),
        1);
    
    test.done();
};


exports.liftOne = function(test) {
    var c = M.lift(M.inner.get);
    
    test.deepEqual(
        run(c),
        2);
    
    test.done();
};


exports.liftInner = function(test) {
    var c = M.liftInner(M.inner.inner.get);
    
    test.deepEqual(
        run(c),
        3);
    
    test.done();
};

exports.liftInner2 = function(test) {
    var c = M.liftInner.liftInner(M.inner.inner.inner.get);
    
    test.deepEqual(
        run(c),
        4);
    
    test.done();
};
