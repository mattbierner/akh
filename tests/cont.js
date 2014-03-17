var Cont = require('../index').monad.cont;

var sqr = function(x) { return x * x; };


exports.simple_of = function(test) {
    var c = Cont.of(3);
    
    test.deepEqual(
        Cont.runCont(c, sqr),
        9);
    
    test.done();
};

exports.simple_bind = function(test) {
    var c = Cont.of(3).chain(function(x) {
        return Cont.of(x + 5); 
    });
    
    test.deepEqual(
        Cont.runCont(c, sqr),
        64);
    test.done();
};
