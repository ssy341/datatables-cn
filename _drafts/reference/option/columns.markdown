---
layout: reference_md
title: columns
summary: Set column specific initialisation properties.
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,columns
author: /reference/option/columns
---

## 描述(Description)

The columns option in the initialisation parameter allows you to define details about the way individual columns behave. For a full list of column options that can be set, please see the related parameters below.

Note that if you use columns to define your columns, you must have an entry in the array for every single column that you have in your table (these can be null if you don't wish to specify any options).


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="array" %}


## 默认值(Default)
- Value ：`,`

 
## 例子(Example)

Disable filtering on the first column:
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

- {% include href/api/Columns.html param="column()" %}
- {% include href/api/Columns.html param="columns()" %}

Options

- {% include href/option/option.columns param="columnDefs" %}
- {% include href/option/option.columns param="columns.cellType" %}
- {% include href/option/option.columns param="columns.className" %}
- {% include href/option/option.columns param="columns.contentPadding" %}
- {% include href/option/option.columns param="columns.createdCell" %}
- {% include href/option/option.columns param="columns.data" %}
- {% include href/option/option.columns param="columns.defaultContent" %}
- {% include href/option/option.columns param="columns.name" %}
- {% include href/option/option.columns param="columns.orderable" %}
- {% include href/option/option.columns param="columns.orderData" %}
- {% include href/option/option.columns param="columns.orderDataType" %}
- {% include href/option/option.columns param="columns.render" %}
- {% include href/option/option.columns param="columns.searchable" %}
- {% include href/option/option.columns param="columns.title" %}
- {% include href/option/option.columns param="columns.type" %}
- {% include href/option/option.columns param="columns.visible" %}
- {% include href/option/option.columns param="columns.width" %}