---
layout: reference_md
title: columns.searchable
summary: 开启或者关闭此列中数据过滤
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.searchable
author: /reference/option/columns.searchable
---

## 描述(Description)
使用此参数，你可以定义DataTables是否在表中的过滤数据包含此列。或许你可以用这个参数来禁止操作列不被包含（比如编辑，删除按钮操作列）

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="boolean" %}

## 默认值(Default)

- Value: `true`

## 例子(Example)
使用 {% include href/Options.html param="columnDefs" %} 设置第一列不参与过滤
{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
      { "searchable": false, "targets": 0 }
    ]
} );
{% endhighlight %}

使用 {% include href/Options.html param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
   "columns": [
       { "searchable": false },
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

- {% include href/api/Core.html param="search()" %}
- {% include href/APIs.html param="column().search()" %}
- {% include href/APIs.html param="columns().search()" %}

Options

- {% include href/Options.html param="search" %}



