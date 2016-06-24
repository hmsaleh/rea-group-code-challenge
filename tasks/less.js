'use strict';

module.exports = function less(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    return {
        build: {
            options: {
                cleancss: true
            },
            files: [{
                expand: true,
                cwd: 'src/styles',
                src: ['*.less'],
                dest: 'public/css',
                ext: '.css'
            }]
        }
    };
};
