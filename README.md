# bone-act-htmllayout
> bone的layout处理器，为html文件提供layout功能

[![NPM version](https://img.shields.io/npm/v/bone-act-htmllayout.svg?style=flat)](https://npmjs.org/package/bone-act-htmllayout) [![NPM version](https://img.shields.io/npm/dm/bone-act-htmllayout.svg?style=flat)](https://npmjs.org/package/bone-act-htmllayout) [![travis](https://api.travis-ci.org/wyicwx/bone-act-htmllayout.png)](https://travis-ci.org/wyicwx/bone-act-htmllayout) 
[![Coverage Status](https://coveralls.io/repos/wyicwx/bone-act-htmllayout/badge.png?branch=master)](https://coveralls.io/r/wyicwx/bone-act-htmllayout?branch=master)

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-htmllayout 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var layout = bone.require('bone-act-layout');

bone.dest('dist')
	.src('~/src/index.html')
	.act(layout);
```

index.html文件内容
```html
<layout src="./layout.html" data-script="http://www.qq.com/ping.js" data-link="http://www.qq.com/style.css">
    <div>
        inner html code.
    </div>
</layout>
```

layout.html文件内容
```html
<!doctype html>
<html lang="cn">
<head>
    <title></title>
    <% if(data.link) { 
        var links = data.link.split(',');
        for(var i in links) { 
    %>
    <link rel="stylesheet" type="text/css" href="<%= links[i] %>">
    <%  }} %>
    <% if(data.script) { 
        var scripts = data.script.split(',');
        for(var i in scripts) {
    %>
    <script type="text/javascript" src="<%= scripts[i] %>"></script>
    <% }} %>
</head>
<body>
    <%= html %>
</body>
</html>
```

处理后
```html
<html lang="cn">
<head>
    <title></title>

    <link rel="stylesheet" type="text/css" href="http://www.qq.com/style.css">
   
    <script type="text/javascript" src="http://www.qq.com/ping.js"></script>
</head>
<body>
    <div>
        inner html code.
    </div>
</body>
</html>
```

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)
