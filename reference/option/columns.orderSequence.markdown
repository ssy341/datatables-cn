---
layout: reference_md
title: columns.orderSequence
summary: 定义列排序的方向
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.orderSequence
author: /reference/option/columns.orderSequence
---

## 描述(Description)
你可以使用这个参数来控制默认的排序方向，甚至改变排序处理的行为（比如仅允许升序排列）

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="array" %}

## 默认值(Default)

- Value: `[ 'asc', 'desc' ]`

## 例子(Example)
使用 {% include href/Options.html param="columnDefs" %} 设置 `orderSequence`

- 设置第1列第一次升序排列
- 设置第3列第一次降序，第二次升序，第三次升序，依次循环
- 设置第4列第一次降序排列

{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
      { "orderSequence": [ "asc" ], "targets": [ 1 ] },
      { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
      { "orderSequence": [ "desc" ], "targets": [ 3 ] }
    ]
} );
{% endhighlight %}

使用 {% include href/Options.html param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
    "columns": [
        null,
        { "orderSequence": [ "asc" ] },
        { "orderSequence": [ "desc", "asc", "asc" ] },
        { "orderSequence": [ "desc" ] },
        null
      ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="order()" %}
- {% include href/APIs.html param="column().order()" %}
- {% include href/APIs.html param="columns().order()" %}

Options

- {% include href/Options.html param="ordering" %}
- {% include href/Options.html param="order" %}



