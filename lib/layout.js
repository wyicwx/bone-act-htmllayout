var htmlparser = require("htmlparser2");
var through = require("through2");

module.exports.act = function(buffer, encoding, callback) {
    var options = this.options();
    var fs = this.fs;
    var content = buffer.toString();

    this.cacheable();

    var result = htmlparser.parseDOM(buffer.toString());
    console.dir(result);


    callback(null, buffer);
    return;

    var parser = new htmlparser.Parser({
        onopentag: function(name) {
            console.log(name);
        },
        ontext: function() {

        },
        onclosetag: function() {

        },
        onend: function() {
            
        }
    }, {decodeEntities: true});

    parser.pipe(through(function(buffer, encoding, callback) {
        console.log(arguments);
        callback(null, buffer);
    }));
    // parser.on('data', function() {
    //     console.log(123);
    //     console.log(arguments);
    //     callback(null, buffer);
    // });

    // parser.on('end', function() {
    //     console.log(arguments);
    //     callback(null, buffer);
    // });

    parser.parseComplete(buffer.toString());

   


    // if(option.layout) {
    //     fs.readFile(option.layout, function(err, content) {
    //        var ctx = buffer.toString();

    //        content = content.toString();

    //        if(err) {
    //          return callback(err);
    //        } else {
    //          var combine = _.template(content, {
    //           content: ctx
    //          });

    //          callback(null, content);
    //        }
    //     }));
    // } else {
    //     callback(null, buffer);
    // }
};

module.exports.filter = {
    ext: '.html'
};
