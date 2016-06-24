'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    return {
			lib: {
				options: {
					transform: [
						["babelify", {"presets": ["es2015"]}]
					],
				},
				files: {
					'public/js/app.js': ['src/app.js']
				},
			}
    };
};
