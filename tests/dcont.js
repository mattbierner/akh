var DCont = require('../index').dcont;
var base = require('../index').base;

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


exports.many_chain = function(test) {
    var c = DCont.of(0);
    
    for (var i = 0; i < 10000; ++i) {
        c = c.chain(function(x) {
            return DCont.of(x + 1);
        });
    }
    
    try {
        DCont.runDCont(c, sqr);
    } catch (e) {
        console.log('x', e);
    }

    test.deepEqual(
        DCont.runDCont(c, sqr),
        10000 * 10000);
    test.done();
};

exports.many_inner_chain = function(test) {
    var f = function(x) {
        if (x > 10000) return DCont.of(x);
        return DCont.of(x + 1).chain(f);
    }
    
    test.deepEqual(
        DCont.runDCont(f(0), sqr),
        10001 * 10001);
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

exports.multi_shift_in_reset = function(test) {
    var add = function(x, y) { return x + y };
    var enumeration = base.liftM2.bind(null, function(x, y) { return [x, y]; });
    
    var c = DCont.reset(function(p) {
        return base.liftM2(add,
            DCont.shift(p, function(k) {
                return enumeration(k(DCont.of(1)), k(DCont.of(2)));
            }),
            DCont.shift(p, function(k) {
                return enumeration(k(DCont.of(10)), k(DCont.of(20)));
            }));
    });
        
    test.deepEqual(
        DCont.runDCont(c, function(x) { return x; }),
        [[11, 21], [12, 22]]);
    test.done();
};



exports.fmap = function(test) {
    var c = DCont.of(3)
        .map(function(x) { return x * x; })
        .chain(function(x) {
            return DCont.of(x + 1);
        });
    
    test.deepEqual(
        DCont.runDCont(c, sqr),
        10 * 10);
    test.done();
};
