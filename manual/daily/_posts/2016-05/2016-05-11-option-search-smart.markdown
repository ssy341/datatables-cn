---
layout: daily
title: option search.smart 关于Datatables的智能搜索 《不定时一讲》 DataTable中文网
short: option search.smart 关于Datatables的智能搜索
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTable中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M63e8468cd4a98bd0f6b4c80f8cb5a794o0&w=300&h=183&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/option.options param="search.smart" %}

Datatables 在默认情况下是有一个智能搜索，实际上就是所谓的keyup事件，输入一个字符进行匹配，
但作者提到了，不只是简单的进行字符串比较。但是如果你使用
{% include href/option/option.options param="search.regex" %}参数，可能需要关掉这个智能搜索，
如果一个自定义的正则表达式还没有输入完整，可能体验不会很好，那么关闭智能搜索即可
<!--more-->

禁用智能过滤
{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "search": {
        "smart": false
      }
    } );
{% endhighlight %}
