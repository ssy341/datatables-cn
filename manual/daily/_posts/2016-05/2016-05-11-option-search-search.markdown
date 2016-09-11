---
layout: daily
title: option search.search 设置一个初始化过滤条件 《不定时一讲》 DataTables中文网
short: option search.search 设置一个初始化过滤条件
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M09f9a776731d5a4be58a9f9c5800be8co0&w=300&h=225&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/option.options param="search.search" %}

Datatables 在初始化的时候可以设置一个默认的条件进行过滤，这在某些应用场景是可以用到的
<!--more-->

表格初始化时，默认搜索包含 `Fred` 的数据
{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "search": {
        "search": "Fred"
      }
    } );
{% endhighlight %}
