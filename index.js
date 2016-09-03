"use strict";
const assign = require('object.assign').getPolyfill();

const merge = function(o1, o2) {
    var self = assign({}, o1, o2);
    ['spec', 'trans', 'type'].forEach(function(key) {
        self[key] = assign({}, o1[key], o2[key]);
    });
    return self;
}


// Combine sub-libraries into exports
module.exports = function akh(self) {
    return assign(function(/*...*/) {
        return akh([].reduce.call(arguments, merge, self));
    }, self);
}(
    require('akh.core')
)(
    require('akh.codensity'),
    require('akh.cont'),
    require('akh.dcont'),
    require('akh.either'),
    require('akh.error'),
    require('akh.list'),
    require('akh.identity'),
    require('akh.state'),
    require('akh.unique')
)
