# vue-music

> App音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 一、以下是对脚手架工具初始化项目后的一些改动和添加

> 1、脚手架工具初始化项目，我们使用stylus 需要安装2个依赖包 "stylus": "^0.54.5", "stylus-loader": "^3.0.1",

> 2、修改下 .eslintrc.js 在 rules 规则下加入以下2项

  ``` bash
	'eol-last': 0, //检测文件末尾是否有空行
	'space-before-function-paren': 0 //在一个function左括号前面是否要加space空格
  ```

> 3、使用绝对路径(import 'common/stylus/index.styl'), 就需要做别名配置, 修改 build 目录下webpack.base.conf.js 中别名配置

  ``` bash
	alias: {
		'src': resolve('src'),
		'common': resolve('src/common')
	}
  ```

> 4、在 index.html 设置移动端都不标签

```
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```


> 5、在安装2个依赖包

``` bash
# 对一些es语法做一些转义
babel-runtime

# 解决移动端点击触发300ms毫秒的延迟问题
fastclick

# 对一些ES6的api，比如像promise做个转义
babel-polyfill

# 在mail.js 入口文件中引入以下2个包
import 'babel-polyfill'
import fastclick from 'fastclick'

# 配置下写入DOM节点中去
fastclick.attach(document.body)
```

> 6、安装jsonp，做一个jsonp封装

``` bash
#指定版本安装jsonp
"jsonp": "0.2.1"
```


#
调用数据接口都封装再api目录下
抽象出的组件都放在base目录下

