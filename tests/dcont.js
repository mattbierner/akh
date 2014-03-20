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

exports.chain = function(test) {
    var c = DCont.of(3)
        .chain(function(x) {
            return DCont.of(x + 5); 
        })
        .chain(function(x) {
            return DCont.of(x / 2);
        });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        16);
    test.done();
};

exports.single_shift_reset = function(test) {
    var c = DCont
        .reset(function(p) {
            return DCont
                .shift(p, function(k) {
                    return k(k(DCont.of(5)));
                })
                .chain(function(x) {
                    return DCont.of(x + 1);
                }); 
        })
        .chain(function(x) {
            return DCont.of(x * 2);
        });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        14 * 14);
    test.done();
};

exports.multi_shift_abort = function(test) {
    var c = DCont
        .reset(function(p) {
            return DCont
                .reset(function(p2) {
                    return DCont
                        .shift(p, function(k) {
                            return DCont.of(5);
                        })
                        .chain(function(x) { return DCont.of(1000); });
                })
                .chain(function(x) {
                    return DCont.of(x + 1);
                }); 
        })
        .chain(function(x) {
            return DCont.of(x * 2);
        });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        10 * 10);
    test.done();
};


exports.fmap = function(test) {
    var c = DCont.of(3)
        .map(function(x) { return x * x; });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        9 * 9);
    test.done();
};
