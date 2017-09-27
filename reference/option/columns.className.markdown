---
layout: reference_md
title: columns.className
summary: 给列中每个单元格指定一个或多个class
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.className
author: /reference/option/columns.className
---

## 描述(Description)
简单来说，这个属性就是给一列中的每个单元格指定一个class，不管表格的数据源是dom，JavaScript或者ajax。
这个对于你想给一列定义一个样式很有用。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 例子(Example)
使用{% include href/option/Columns.html param="columnDefs" %}的方式给第一列的每一个单元格指定一个 `my_class` 的样式
{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
      { className: "my_class", "targets": [ 0 ] }
    ]
} );
{% endhighlight %}

使用{% include href/option/Columns.html param="columns" %}的方式给第一了列的每一个单元格指定一个`my_class`和`my_class2`的样式
{% highlight javascript linenos %}
$('#example').DataTable( {
   "columns": [
      { className: "my_class my_class2" },
      null,
      null,
      null,
      null
    ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Columns.html param="columnDefs" %}
- {% include href/option/Columns.html param="columns" %}
