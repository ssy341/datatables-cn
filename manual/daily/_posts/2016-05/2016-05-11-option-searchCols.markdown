---
layout: daily
title: option searchCols 给单独的列定义初始化过滤条件 《不定时一讲》 DataTable中文网
short: option searchCols 给单独的列定义初始化过滤条件
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/option.options param="searchCols" %}

和{% include href/option/option.options param="search.search" %} 类似，只是这个不是全局的，
而是针对于某个列，这个参数接受一个对象数组，对象里有两个属性 `search ` 和 `escapeRegex`。
`search ` 代表过滤的条件，`escapeRegex` 代表是否支持正则，这个参数是可选的。

需要注意的是，这个对象数组需要和列数匹配。
<!--more-->

总共4列的表格，给第二列和第四列设置初始化过滤条件
{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "searchCols": [
        null,
        //第二列初始化过滤条件为 My filter
        { "search": "My filter" },
        null,
         //第四列初始化过滤条件为 使用正则表达是 ^[0-9] 来过滤
        { "search": "^[0-9]", "escapeRegex": false }
      ]
    } );
{% endhighlight %}
