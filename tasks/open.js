'use strict';

module.exports = function surround(grunt) {
	grunt.loadNpmTasks('grunt-open');
	return {
		server: {
			url: 'http://localhost:<%= connect.options.port %>'
		}
	};
};
