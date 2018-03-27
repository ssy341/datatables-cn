---
title: "安装 Installation | 手册 Manual DataTables中文网"
keywords: 手册 安装
sidebar: mydoc_sidebar
permalink: manual/installation.html
csss: [
    assets/datatables/1.10.16/datatables.min.css
]
scripts: [
    assets/datatables/1.10.16/datatables.min.js
]
---

# 安装

DataTables是一个强大Javascript库，用于给HTML表格添加交互功能，虽然简单是
整个项目的核心的，但是入门并不简单。但是，在网站上运行DataTables实际上是非常
简单，只需要引入两个文件即可:

- DataTables Javascript 文件
- DataTables CSS 文件

还有其他可用的文件，比如[Editor](https://editor.datatables.net/)是为了添加编辑功能，还有[其他插件](https://datatables.net/extras)是为了扩展DataTables
功能，但基本上，你只需要引入这两个文件就可以开始使用了！

## 要求
在我们开始之前，我们需要考虑DataTables操作需求。


### 依赖
DataTables只有一个库需要依赖-[jQuery](https://jquery.com/)。
作为一款jQuery插件，DataTables利用了jQuery体用的特性，跟其他[jQuery插件](https://plugins.jquery.com/)
相同的方式挂载到jQuery插件系统中。

### HTML
为了使DataTables能够增强HTML表格，该表格必须是有效的，标准的HTML，一个头部
(`thead`)和一个表体(`tbody`)。表脚(`tfoot`)可以根据需要使用。

```html
<table id="table_id" class="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
</table>
```
如果你使用服务器端程序（例如php，ruby，c#，java或其他任何软件）生成HTML，
输出像上面代码示例一样即可。这正是对你表格的格式提出要求，即使`thead`和`tbody`不是
被经常使用到（他们会告诉DataTables什么应该用于列标题和点击排序控件）

需要注意的是，这是针对的是纯HTML来说，如果你使用的是Ajax数据源，DataTables
是会帮你生成`thead`，`tbody`和所有行和列。关于DataTables使用不同数据源，更多
信息参考手册的[数据源](https://datatables.net/manual/data)部分


## 安装Javascript/CSS

使用DataTables的关键点在于你需要在页面上引入DataTables所需要的文件。即引入
Javascript和CSS文件。CSS文件实际上是可选的，引入它是为了给表格提供默认的样式，
以至于表格看起来很好。如果你要自定义默认样式，参考[样式主题创建器](https://datatables.net/manual/styling/theme-creator)

所需要的文件可以以不同的方式引入：

- 使用DataTables[官网CDN](https://cdn.datatables.net/)
- 本地引入
- 使用[NPM](https://www.npmjs.com/)或者[Bower](http://bower.io/)等包管理器

### CDN

CDN是一种[内容分发网络(Content Delivery Network)](https://en.wikipedia.org/wiki/Content_delivery_network)，它具有极快的服务器，用于为浏览器提供延迟非常低的资源文件，
并且当用户从CDN接受文件时，浏览器将缓存该文件以便重复使用。这就意味着不同的站点使用
相同的Javascript库，可大大提升性能，因为浏览器无需从每个站点的不同服务器下载相同的文件。

DataTables CDN由CloudFlare提供支持，CloudFlare在世界各地都有服务器，
可确保访问者的浏览器尽可能快的加载DataTables的Javascript和CSS。

为了引入DataTables到你的页面上，引入下面的HTML（记得要先引入[jQuery](https://jquery.com/)）

```html
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/{{site.dtversion}}/css/jquery.dataTables.css">

<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/{{site.dtversion}}/js/jquery.dataTables.js"></script>
```

### 本地引入

如果你不想使用CDN，而是将文件托管在自己的服务器上，或者你已经修改了源文件，这样
也很简单。

只需要使用[下载构建器](https://datatables.net/download)即可下载最新版本的DataTables，其中你可以根据自己的需要
选择其他插件和样式打包下载。然后解压放到你的网络服务上。解压之后你可以得到一个
名为 `DataTables` 的目录，然后使用以下HTML在你的页面上添加DataTales。


{% include note.html content="
[下载构建器](https://datatables.net/download)可以为你创建一个定制的软件包，基于你所需要的功能和样式，生成的文件在CDN或者下载到本地。
" %}



```html
<link rel="stylesheet" type="text/css" href="/DataTables/datatables.css">

<script type="text/javascript" charset="utf8" src="/DataTables/datatables.js"></script>
```

### NPM

DataTables及其扩展可用作[NPM](https://www.npmjs.com/)软件包。
包名是 `datatables.net` ，扩展和样式集成选项可作为单独的程序包提供 -
请参阅[NPM安装指南](https://datatables.net/download/npm)获得有关可用程序包的完整详细信息。

例如，以下内容可用于安装DataTables及默认样式：

```npm
npm install datatables.net    # Core library
npm install datatables.net-dt # Styling
```

使用 `window` 和 jQuery 对象可以使用DataTables构造器 - 再次参考[NPM安装指南](https://datatables.net/download/npm)
获得这些参数的详细信息。当你使用 [Browserify](http://browserify.org/)你可以简单的执行方法而不需要任何参数，比如：

```javascript
var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();
```

### Bower
DataTables及其扩展也可用作[Bower](http://bower.io/)软件包。
包的名字和NPM软件包相同，都是 `datatables.net`。通过以下代码安装DataTables及
默认样式：

```npm
bower install --save datatables.net
bower install --save datatables.net-dt
```

## 初始化DataTables

万事俱备只欠东风。在页面上已经有了我们想要的增强的HTML表格，并且具备了
DataTables执行的库和样式。现在只需要下面一行代码，DataTables即可魔术般的把
表格变得强大。

```javascript
$(document).ready( function () {
    $('#table_id').DataTable();
} );
```

完成上面所有的步骤，你可以看到下面效果：

<table id="table_id" class="display">
    <thead>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Row 1 Data 1</td>
        <td>Row 1 Data 2</td>
    </tr>
    <tr>
        <td>Row 2 Data 1</td>
        <td>Row 2 Data 2</td>
    </tr>
    </tbody>
</table>

<script>
$(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>

如果你之前使用过jQuery，你会很熟悉脚本的形式。跟着文档，参考你想要的功能，执行DataTables方法在HTML表格上，就能得到你想要的。

这样，DataTables会默认添加排序，搜索，分页和表格信息概览到你的表格，让用户能够尽快的找到他想要的数据。

如果你要定制DataTable，可以通过传递JSON参数给  `Datatable()` 函数完成定制化。有关如何使用这些配置参数的信息，参考手册
[选项](https://datatables.net/manual/options)部分。



{% include note.html note="更新提示" content="
如果你是从1.9.x甚至更早的版本升级过来，你也许注意到这是初始化方法是大写 `D` 。 
`$().DataTable()` 返回一个 [DataTables API 实例](https://datatables.net/reference/type/DataTables.Api)，
`$().dataTable()` 也可以实例化一个DataTable，但是返回的是一个 [jQuery 对象](https://datatables.net/reference/type/jQuery)。
参考手册 [API](https://datatables.net/manual/api) 部分获得更多信息。
" %}



## 下一步

有了以上这些基础知识，可以实现一个带有排序，搜索，分页和表格信息概要的表格。但如果你想更方便使用，你可能还需要探索一些
其他的选项来进一步增强你的表格：

- [自定义DataTables选项](https://datatables.net/manual/options)来适配你的需要
- 使用 [API](https://datatables.net/manual/api) 以编程的方式访问和控制你的表格
- [设计表格样式](https://datatables.net/manual/styling/theme-creator)来适配你网站的风格
- 浏览 [DataTables示例](https://datatables.net/examples) 
- 在 [论坛](https://datatables.net/forums) 或者 [Github issue](https://github.com/ssy341/datatables-cn/issues) 浏览更多讨论话题，或者发表一个提问、回答问题、提出建议或者简单的打招呼。
