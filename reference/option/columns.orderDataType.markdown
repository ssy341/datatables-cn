---
layout: reference_md
title: columns.orderDataType
summary: 给列分配实时DOM排序类型
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.orderDataType
author: /reference/option/columns.orderDataType
---

## 描述(Description)
DataTables主要的排序功能（{% include href/option/features.html param="ordering" %}特性）是利用已经缓存在内存中的
数据，而不是每次读取DOM的数据来排序，考虑到从DOM读取本来就很慢。然后有时候又不得不从DOM中读取数据，比如表格中有表单元素，
这势必也会影响到性能。提供这个属性是为了插件在DataTables能提供此功能。

请注意，DataTables没有内置这个插件，他必须单独引用。查看 [DataTables 排序插件页面](https://datatables.net/plug-ins/sorting)获取更多信息。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 例子(Example)
使用 {% include href/option/Columns.html param="columnDefs" %} 设置实时排序类型
下面给出了一个表格包含了form表单元素的排序例子

- 第3,4列按照text排序
- 第4列按照数字排序
- 第5列按照select排序
- 第六列按照checkbox排序

{% highlight javascript linenos %}
$('#example').DataTable( {
   "columnDefs": [
       { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
       { "type": "numeric", "targets": 3 },
       { "orderDataType": "dom-select", "targets": 4 },
       { "orderDataType": "dom-checkbox", "targets": 5 }
     ]
} );
{% endhighlight %}

使用 {% include href/option/Columns.html param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
     "columns": [
        null,
        null,
        { "orderDataType": "dom-text" },
        { "orderDataType": "dom-text", "type": "numeric" },
        { "orderDataType": "dom-select" },
        { "orderDataType": "dom-checkbox" }
      ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/features.html param="ordering" %}
- {% include href/option/Columns.html param="columns.type" %}



