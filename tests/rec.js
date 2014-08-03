var nu = require('../index');
var stream = nu.stream;

var loop = function(x) {
    return stream.rec(function(self) {
        return stream.stream(x, self);
    });
};

exports.simple = function(test) {
    var s = loop('a');
    test.deepEqual(
        stream.first(s),
        'a');
    test.deepEqual(
        stream.first(stream.rest(s)),
        'a');
    test.done();
};


exports.simple = function(test) {
    var fib = stream.rec(function(self) {
        return stream.cons(0, stream.stream(1, function() {
            return stream.zipWith(
                function(x, y) { return x + y; },
                self(),
                stream.rest(self()));
        }));
    });
    try{
    test.deepEqual(
        stream.first(fib),
        0);
    test.deepEqual(
        stream.first(stream.rest(fib)),
        1);
    test.deepEqual(
        stream.first(stream.rest(stream.rest(fib))),
        1);
    } catch(e) {
        console.log(e);
    }
    test.done();
};
