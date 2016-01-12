'use strict';
var assert = require('assert');
var path = require('path');
var bone = require('bone');

bone.setup(path.join(__dirname, './raw'));
require('./bone/bonefile.js');
bone.run();

var FileSystem = require('bone/lib/fs.js');
var bonefs = FileSystem.fs;

describe('bone.dest', function() {
    it('test', function(done) {
        bonefs.readFile('~/dist/content.html', function(error, buffer) {
            console.log(buffer.toString());
            done();
        });
    });
});