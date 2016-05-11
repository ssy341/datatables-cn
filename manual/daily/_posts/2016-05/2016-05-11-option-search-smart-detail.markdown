---
layout: daily_detail
title: option search.smart 关于Datatables的智能搜索 《不定时一讲》 DataTable中文网
short: option search.smart 关于Datatables的智能搜索
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/option.options param="search.smart" %}

Datatables 在默认情况下是有一个智能搜索，实际上就是所谓的keyup事件，输入一个字符进行匹配，
但作者提到了，不简单只是字符串的比较。但是如果你使用
{% include href/option/option.options param="search.regex" %}参数，可能需要关掉这个智能搜索，
如果一个自定义的正则表达式还没有输入完整，可能体验不会很好，那么关闭智能搜索即可

禁用智能过滤
{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "search": {
        "smart": false
      }
    } );
{% endhighlight %}
