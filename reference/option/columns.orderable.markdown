---
layout: reference_md
title: columns.orderable
summary: 开启/禁用这列是否排序
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.orderable
author: /reference/option/columns.orderable
---

## 描述(Description)
使用这个参数可以控制用户是否能够操作该列排序。对于有些生成的列你并不想让用户对其排序，比如索引列，或者操作列（删除，编辑按钮）。

注意，这个参数只是不允许用户进行列的排序操作，作为开发人员，你任然可以使用 
{% include href/Options.html param="order" %} 或者 {% include href/APIs.html param="order()" %} 对列进行排序。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="boolean" %}

## 默认值(Default)
- Value ：`true`


## 例子(Example)
使用 {% include href/Options.html param="columnDefs" %} 配置第一列不允许排序
{% highlight javascript linenos %}
$('#example').DataTable( {
   "columnDefs": [
       { "orderable": false, "targets": 0 }
     ]
} );
{% endhighlight %}

使用 {% include href/Options.html param="columns" %} 配置第一列不允许排序
{% highlight javascript linenos %}
$('#example').DataTable( {
    "columns": [
        { "orderable": false },
        null,
        null,
        null,
        null
      ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="order()" %}
- {% include href/APIs.html param="column().order()" %}
- {% include href/APIs.html param="columns().order()" %}

Options

- {% include href/Options.html param="order" %}
- {% include href/Options.html param="ordering" %}



