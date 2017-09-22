---
layout: reference_md
title: deferLoading
summary: 延迟服务器加载数据直到第二次绘制
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.10
navcategory: option
keywords: option,deferLoading
author: /reference/option/deferLoading
---

## 描述(Description)
当你使用服务器模式处理的时候，默认的操作模式是简单的抹掉表格中已经存在的数据然后请求服务器获取第一页的
数据显示在表格中。这对于一个空的表格来说，没有什么问题，但是如果你已经有第一页数据显示在表格中，这样操作
比较浪费资源，因此，这个选项的存在是为了允许你告诉DT不去做出初始化的请求，而是使用页面上已经有的数据
（排序等操作不会被应用）

{% include href/option/options.html param="deferLoading" %}用于表示需要延迟加载，他也用来告诉DT
全表有多少条记录（让信息显示控件-左下角和分页插件-右下角正确地显示）。在初始化过滤的情况下，接受一个数组，
其中第一个元素是过滤后的记录数，第二个元素是总的记录数。

注意：这个选项仅在开启了 {% include href/option/features.html param="serverSide" %} 才会起作用。在客户端模式下
该参数无效。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="integer" %}
当给定一个整数，表示延迟加载，并且告诉DT有多少条数据在完整的结果集里。

- {% include href/type/Javascript.html param="array" %}
当给定一个数组，也表示延迟加载，第一个元素表示告诉DT多有少过滤后的记录数，第二个元素表示告诉DT总共有多少记录

## 默认值(Default)
 - value: {% include href/type/Javascript.html param="null" %} 
 
## 例子(Example)
表格中总共显示57条记录，无过滤操作 [示例](https://datatables.net/examples/server_side/defer_loading.html)
{% highlight javascript linenos %}
$('#example').DataTable( {
  "serverSide": true,
  "ajax": "scripts/server_processing.php",
  "deferLoading": 57
} );
{% endhighlight %}


过滤后57条记录，100条不过滤（一个初始化过滤操作，过滤和my_filter字符串匹配的记录）
{% highlight javascript linenos %}
$('#example').dataTable( {
  "serverSide": true,
  "ajax": "scripts/server_processing.php",
  "deferLoading": [ 57, 100 ],
  "search": {
    "search": "my_filter"
  }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/data.html param="ajax" %}
- {% include href/option/features.html param="serverSide" %}
