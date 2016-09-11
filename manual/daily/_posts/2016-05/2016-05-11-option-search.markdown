---
layout: daily
title: option search 设置一个初始化过滤条件并且或者配置过滤选项 《不定时一讲》 DataTables中文网
short: option search 设置一个初始化过滤条件并且或者配置过滤选项
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M0161c998dec039639e471a8522ff125fo0&w=299&h=202&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/option.options param="search" %}

{% include href/option/option.options param="search" %}可以接受一个字符串或者一个对象

作为字符串的时候就是设置初始化过滤条件

作为对象的时候，可以配置下面过滤选项：
{% include href/option/option.options param="search.search" %}、
{% include href/option/option.options param="search.smart" %}、
{% include href/option/option.options param="search.regex" %}和
{% include href/option/option.options param="search.caseInsensitive" %}
<!--more-->

看下面两段代码是一样的效果，给全局设置初始化过滤选项
{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "search": {
        "search": "Fred"
      }
    } );

    var table = $('#example').DataTable( {
      "search":  "Fred"
    } );
{% endhighlight %}
