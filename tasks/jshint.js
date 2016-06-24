'use strict';

module.exports = function jshint(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	return {
		files: [
            'src/*.js',
            'src/**/*.js'
        ],
		options: {
		    jshintrc: '.jshintrc'
		}
	};
};
