'use strict';
var app = require('angular').module('ReaGroup');

app.controller('PropertiesController', ['$scope', 'Properties', require('./properties')]);