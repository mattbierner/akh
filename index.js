var requireDirectory = require('require-directory');
var path = require('path');

module.exports = requireDirectory(module, path.join(__dirname, 'dist_node'));
