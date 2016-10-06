---
layout: daily
title: option search.regex 支持正则表达式搜索 《不定时一讲》 DataTables中文网
short: option search.regex 支持正则表达式搜索
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M6684c25bb904a6493b47fde5ee19822co0&w=300&h=203&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/options/option.options param="search.regex" %}

Datatables是支持正则表达式搜索的，这个对于高级点的应用来说还是能派上用场

不过默认是关闭的，如果要打开支持正则搜索，参考如下代码：
<!--more-->

{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
          "search": {
            //开启正则支持
            "regex": true
          }
    } );
{% endhighlight %}
