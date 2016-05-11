---
layout: daily_detail
title: option search.caseInsensitive 过滤框是否区分大小写 《不定时一讲》 DataTable中文网
short: option search.caseInsensitive 过滤框是否区分大小写
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/option.options param="search.caseInsensitive" %}

这个参数很简单，在只有英文的情况下使用这个参数可以设置这个参数，Datatables过滤的时候是否区分大小写

默认是区分大小写的，所以如果你不想区分大小写，参考如下代码：

{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "search": {
        //关掉区分大小写过滤
        "caseInsensitive": false
      }
    } );
{% endhighlight %}
