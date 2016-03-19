var cheerio = require('cheerio');
var path = require('path');

module.exports.act = function(buffer, encoding, callback) {
    var options = this.options({decodeEntities: false});
    var fs = this.fs;
    var content = buffer.toString();
    var dir = this.sourceParsed.dir;
    var _ = this.bone.utils._;

    this.cacheable();
    
    if(!content.match(/<layout.*?>/)) {
        return callback(null, buffer);
    }

    var $ = cheerio.load(content);
    var index = 0;
    
    var wrap = function(callback) {
        var layout = $('layout').eq(index);

        if(layout.length) {
            var src = layout.attr('src');

            if(!src) {
                index++;
                bone.log.warn('bone-act-htmllayout', 'src are empty.');
                return wrap(callback);
            }

            var innerHtml = layout.html();
            var data = layout.data();
            
            src = fs.pathResolve(src, dir);

            if(fs.existFile(src)) {
                fs.readFile(src, function(error, buffer) {
                    var layoutTemplate = _.template(buffer.toString())({
                        html: innerHtml,
                        data: data
                    });

                    layout.replaceWith(layoutTemplate);
                    wrap(callback);
                });
            } else {
                index++;
                bone.log.warn('bone-act-htmllayout', src+' not found');
                wrap(callback);
            }
        } else {
            callback();
        }
    }

    wrap(function() {
        callback(null, $.html(options));
    });
};

module.exports.filter = {
    ext: ['.html', '.htm']
};
