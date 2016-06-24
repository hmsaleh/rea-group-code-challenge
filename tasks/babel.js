'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-babel');
    return {
        options: {
            sourceMap: true,
            presets: ["es2015"]
        },
        dist: {
            files: [
                {
                    expand: true,
                    cwd: 'public/js',
                    src: ['*.js'],
                    dest: 'public/js'
                }
            ]
        }
    };
};
