---
layout: reference_md
title: columns.title
summary: 设置列的标题
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.title
author: /reference/option/columns.title
---

## 描述(Description)
列的标题一般是从DOM中读取（ `thead` 中的单元格），你也可以使用 `title` 覆写列标题。
你还可以使用这个属性为表格创建列标题（可以在 `table` 标签下不创建 `th` 标签 ）。

请注意，该属性只能创建标简单的表头（单个单元格），复杂的表头（带有 `colspan` ,`rowspan` 属性 ）不能通过此属性配置，
只能事先在 `table` 标签下创建好，或者使用标准的dom/jQuery方法去构造。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 默认值(Default)

- 从列的表头单元格获取数据

## 例子(Example)
使用 {% include href/Options.html param="columnDefs" %} 设置 `title`

设置第一列的标题

{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
      { "title": "My column title", "targets": 0 }
    ]
} );
{% endhighlight %}

使用 {% include href/Options.html param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
  "columns": [
      { "title": "My column title" },
      null,
      null,
      null,
      null
    ]
} );
{% endhighlight %}
