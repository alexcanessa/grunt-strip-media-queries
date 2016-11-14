/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        strip_media_queries: {
            mobile: {
                options: {
                    width: 400
                },
                files: {
                    src: './demo/**.css',
                    dest: './demo/mobile-queries.css'
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // plugin's task(s), then test the result.
    grunt.registerTask('mobile', ['strip_media_queries']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['strip_media_queries']);
};

