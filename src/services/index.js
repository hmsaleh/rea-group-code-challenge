'use strict';
var app = require('angular').module('ReaGroup');

app.factory('Properties', ['$http', require('./get-properties')]);