---
layout: reference_md
title: columns.name
summary: 给列设置一个描述名称
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.name
author: /reference/option/columns.name
---

## 描述(Description)
当时使用 DataTables API 时，你也许希望能够处理各个列（比如总计一列的数字总和），DataTables 有
两种基本的方法来标记列：

- 列索引（当表格初始化的时候索引会自动分配）
- 使用名称标记（当你使用 `columns.name` 参数的时候)

使用 `columns.name` 配置，可以使 API 操作列变得非常方便。比如访问一列的数据，你可以这样使用 
`table.column( 'location:name' ).data()` 这里有两个关键点：

- `location` 是标准前缀，用来告诉DataTables使用名称来操作列而不是索引
- `:name` 追加冒号和具体的名称表明DataTables应该使用 `name` 去做选择器操作
 
更多关于列选择器操作的文档请参考 {% include href/APIs.html param="columns()" %}文档
 

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}


## 例子(Example)
使用 {% include href/Options.html param="columnDefs" %} 配置`columns.name` 
给1,2,3,4,5 列分别指定engine，browser，platform，version，grade名称
{% highlight javascript linenos %}
$('#example').DataTable( {
    "columnDefs": [
       { "name": "engine",   "targets": 0 },
       { "name": "browser",  "targets": 1 },
       { "name": "platform", "targets": 2 },
       { "name": "version",  "targets": 3 },
       { "name": "grade",    "targets": 4 }
     ]
} );
{% endhighlight %}

使用 {% include href/Options.html param="columns" %} 配置 `columns.name` 
{% highlight javascript linenos %}
$('#example').DataTable( {
     "columns": [
        { "name": "engine" },
        { "name": "browser" },
        { "name": "platform" },
        { "name": "version" },
        { "name": "grade" }
      ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column()" %}
- {% include href/APIs.html param="columns()" %}
- {% include href/APIs.html param="column().index()" %}
- {% include href/APIs.html param="columns().indexes()" %}
