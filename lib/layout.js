var htmlparser = require("htmlparser2");

module.exports.act = function(buffer, encoding, callback) {
	var options = this.options();
	var fs = this.fs;

	if(option.layout) {
		fs.readFile(option.layout, function(err, content) {
			var ctx = buffer.toString();

			content = content.toString();

			if(err) {
				return callback(err);
			} else {
				var combine = _.template(content, {
					content: ctx
				});

				callback(null, content);
			}
		}));
	} else {
		callback(null, buffer);
	}
};

module.exports.filter = {
	ext: '.html'
};
