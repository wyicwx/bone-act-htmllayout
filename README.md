# bone-act-layout
> bone的layout处理器，为静态文件提供layout功能

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-layout 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var layout = require('bone-act-layout');

bone.dest('dist')
	.src('~/src/content.html')
	.act(less({
		layout: '~/src/layout.html'
	}))
	.rename('index.html');
```

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)
