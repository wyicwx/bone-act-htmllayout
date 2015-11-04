var bone = require('bone');

module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option;
	var fs = this.fs;

	if(option.layout) {
		fs.readFile(option.layout, function(err, function(err, content) {
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
});
