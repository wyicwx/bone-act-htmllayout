'use strict';
var assert = require('assert');
var path = require('path');
var bone = require('bone');


bone.setup(path.join(__dirname, './raw'));
require('./bone/bonefile.js');
bone.run();

var FileSystem = require('bone/lib/fs.js');
var bonefs = FileSystem.fs;

bone.status.test = true;
bone.log.log('test start.');

var logInfo = require('bone/lib/data.js').logInfo;

describe('htmllayout', function() {
    it('layout correct', function(done) {
        bonefs.readFile('~/dist/content.html', function(error, buffer) {
            var content = buffer.toString();

            if(content.indexOf('<link rel="stylesheet" type="text/css" href="http://www.qq.com">') == -1) {
                done(false);
            }

            if(content.indexOf('<script type="text/javascript" src="http://www.baidu.com"></script>') == -1) {
                done(false);
            }

            done();
        });
    });

    it('layout with empty src, show warn log', function(done) {
        bonefs.readFile('~/dist/content_empty.html', function(error, buffer) {
            var content = buffer.toString();

            if(content.indexOf('\<layout\>') == 0 && content.indexOf('\<\/layout\>') != -1) {
                if(logInfo.pop().indexOf('src are empty.')) {
                    return done();
                }
            }

            done(false);
        });
    });

    it('layout mixin layout', function(done) {
        bonefs.readFile('~/dist/content_mixin.html', function(error, buffer) {
            var content = buffer.toString();

            if(content.indexOf('<!doctype html>') == -1) {
                return done(false);
            }

            if(content.indexOf('<div class="wrapper">') == -1) {
                return done(false);
            }

            done();
        });
    });

    it('layout side by side', function(done) {
        bonefs.readFile('~/dist/content_mixin.html', function(error, buffer) {
            var content = buffer.toString();

            if(content.indexOf('<!doctype html>') == -1) {
                return done(false);
            }

            if(content.indexOf('<div class="wrapper">') == -1) {
                return done(false);
            }

            done();
        });
    });


    it('layout not exits', function(done) {
        bonefs.readFile('~/dist/content_notfound.html', function(error, buffer) {
            var content = buffer.toString();

            if(content.indexOf('<layout') == -1) {
                return done(false);
            }

            if(logInfo.pop().indexOf('not_found.html') == -1) {
                return done(false);
            }

            done();
        });
    });

});