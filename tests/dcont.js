var DCont = require('../index').dcont;

var sqr = function(x) { return x * x; };


exports.simple_of = function(test) {
    var c = DCont.of(3);
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        9);
    
    test.done();
};

exports.simple_bind = function(test) {
    var c = DCont.of(3).chain(function(x) {
        return DCont.of(x + 5); 
    });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        64);
    test.done();
};
