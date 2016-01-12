var path = require('path');
var bone = require('bone');
bone.setup(path.join(__dirname, './raw'));
var htmllayout = bone.require('bone-act-htmllayout');


console.log(htmllayout);