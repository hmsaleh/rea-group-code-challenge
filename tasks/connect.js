'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    return {
        server: {
            options: {
                livereload: true,
                port: 9009,
                hostname: '0.0.0.0',
                base: 'public',
                LIVERELOAD_PORT: LIVERELOAD_PORT
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        }
    };
};
