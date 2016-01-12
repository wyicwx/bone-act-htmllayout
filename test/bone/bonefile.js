var bone = require('bone');
var htmllayout = bone.require('../../');

var dist = bone.dest('dist').cwd('~/');


dist.src('!(layout.html)')
    .act(htmllayout);