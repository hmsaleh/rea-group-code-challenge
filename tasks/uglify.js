'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    return {
        all: {
            files: [{
                expand: true,
                cwd: 'public/js',
                src: '*.js',
                dest: 'public/js'
            }]
        }
    };
};
