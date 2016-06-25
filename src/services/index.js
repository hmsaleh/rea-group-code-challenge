'use strict';
var app = require('angular').module('ReaGroup');

app.factory('Properties', ['$http', require('./get-properties')]);
app.factory('ValidateProperty', [require('./validate-property')]);
app.factory('PreloadImage', ['$q', require('./preload-image')]);