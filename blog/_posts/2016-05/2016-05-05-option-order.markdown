---
layout: daily
title: option order 设置排序列(去掉第一列的排序和小图标) 《不定时一讲》 DataTables中文网
short: option order 设置排序列(去掉第一列的排序和小图标)
date: 2016-5-5
group: 2016-5
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/05/05/option-order.html
---
参数详解连接{% include href/Options.html param="order" %}

第一列的排序去不掉，这个问题在群里出现的频率很高，这里讲下为什么去不掉

* 禁用排序
<!--more-->

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ordering": false
} );
{% endhighlight %}

当然这个处理方式不得行，所有列都不能排序了，我要的是第一列不排序

* 设置第一列不排序

{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
    { "orderable": false, "targets": 0 }
  ]
} );

$('#example').DataTable( {
  "columns": [
    { "orderable": false },
    null,
    null,
    null,
    null
  ]
} );
{% endhighlight %}

这下会可以了吧？

……

为什么有个小三角还在那里？WK…… 怎么去掉？

不卖关子了，这里出现这个的 *原因* 在于 {% include href/Options.html param="order" %}的默认值是
`[[0, 'asc']]`，给第一列设置了升序排列，感觉像一个小小的bug，不知道新版的有没有解决

正因为这个默认值导致了这一系列的 *问题* ，所以下面给出解决办法

* 取代默认的值

{% highlight javascript linenos %}
$('#example').DataTable( {
    "order": []
} );
{% endhighlight %}

不设置默认排序

* 把默认的排序列设置其他列

{% highlight javascript linenos %}
$('#example').DataTable( {
    "order": [[ 1, 'asc' ]]
} );
{% endhighlight %}

设置第二列为升序

到这里，问题应该是解决了，不说了，洗洗睡了……

