'use strict';

module.exports = function clean(grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	return {
		all: [
			'public/js',
			'public/css'
		]
	};
};
