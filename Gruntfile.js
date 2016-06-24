'use strict';

module.exports = function (grunt) {

	require('grunt-config-dir')(grunt, {
		configDir: require('path').resolve('tasks')
	});

	var tasks = [
		'clean:all',
		'jshint',
		'less',
        'browserify'
	];

	grunt.registerTask('build', 'Build for development', function () {
		grunt.task.run(tasks);
	});

	grunt.registerTask('release', 'Release for production', function () {
        tasks.push('uglify');
		grunt.task.run(tasks);
	});

	grunt.registerTask('serve', 'Start web server and watch for changes', function () {
		grunt.task.run([
			'build',
			'connect',
			'watch'
		]);
	});
};
