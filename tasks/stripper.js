/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

var Stripper = require('strip-media-queries/src/stripper.js');

module.exports = function(grunt) {

  grunt.registerMultiTask('strip_media_queries', 'Grunt plugin for the npm strip-media-queries', function() {
    var options = this.options({
        files: this.files[0].src,
        outputFile: this.files[1].orig.src[0]
    });
    var done = this.async();
    var stripper = new Stripper(options);

    stripper.launch()
        .then(() => {
            console.log(`\n${chalk.green('All done!')}`);
            done();
        });
  });
};
