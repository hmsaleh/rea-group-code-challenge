'use strict';
var app = require('angular').module('ReaGroup');

app.controller('PropertiesController', ['$scope', '$q', 'Properties', 'ValidateProperty', 'PreloadImage', require('./properties')]);