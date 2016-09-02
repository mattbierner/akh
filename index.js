"use strict";

var requireDirectory = require('require-directory');
var assign = require('object.assign').getPolyfill();

var path = require('path');

const merge = function(o1, o2) {
    var self = assign({}, o1, o2);
    ['spec', 'trans', 'type'].forEach(function(key) {
        self[key] = assign({}, o1[key], o2[key]);
    });
    return self;
}

module.exports = function akh(self) {
    return assign(function(/*...*/) {
        return akh([].reduce.call(arguments, merge, self));
    }, self);
}(
    requireDirectory(module, path.join(__dirname, 'dist_node'))
)(
    require('akh.codensity'),
    require('akh.cont'),
    require('akh.identity'),
    require('akh.state')
);

module.exports.base = require('akh.core');

