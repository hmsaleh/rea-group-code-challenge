'use strict';

module.exports = function surround(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	return {
		livereload: {
			files: [
				'src/*.js',
				'src/**/*.js',
				'src/**/*.less',
				'public/*.html'
			],
			tasks: ['build'],
			options: {
				livereload: grunt.config.data.connect.server.options.LIVERELOAD_PORT
			}
		}
	};
};
