---
layout: reference_md
title: columns.orderData
summary: 定义多个列的排序作为一列的默认顺序
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.orderData
author: /reference/option/columns.orderData
---

## 描述(Description)
允许定义多个列的数据同时作为一列的排序的条件（多数情况下是隐藏列）。

这里有一个例子，表格中有一列是图片，你最终显示的数据是不能直接排序的，但是你可以使用元数据对其进行排序（比如文件名）。
关于orthogonal data（数据和显示分离）参考[这里](https://datatables.net/manual/data/orthogonal-data)

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="integer" %}
单列索引去排序

- {% include href/type/Javascript.html param="array" %}
多列索引来定义多列排序

## 默认值(Default)
自动获取列的索引值


## 例子(Example)
使用 {% include href/option/Columns.html param="columnDefs" %} 配置


- 第一列按照第一列和第二列排序作为默认排序
- 第二列按照第一列来排序作为默认排序
- 第三列按照第三，四，五列来排序作为默认排序

{% highlight javascript linenos %}
$('#example').DataTable( {
    "columnDefs": [
          { "orderData": [ 0, 1 ],    "targets": 0 },
          { "orderData": 0,           "targets": 1 },
          { "orderData": [ 2, 3, 4 ], "targets": 2 }
        ]
} );
{% endhighlight %}

使用 {% include href/option/Columns.html param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
      "columns": [
         { "orderData": [ 0, 1 ] },
         { "orderData": 0, },
         { "orderData": [ 2, 3, 4 ] },
         null,
         null
       ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="order()" %}
- {% include href/api/Columns.html param="column().order()" %}
- {% include href/api/Columns.html param="columns().order()" %}

Options

- {% include href/option/options.html param="order" %}
- {% include href/option/features.html param="ordering" %}



