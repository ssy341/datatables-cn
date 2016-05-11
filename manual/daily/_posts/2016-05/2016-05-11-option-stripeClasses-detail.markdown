---
layout: daily_detail
title: option stripeClasses 给表格行设置条纹样式 《不定时一讲》 DataTable中文网
short: option stripeClasses 给表格行设置条纹样式
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/option.options param="stripeClasses" %}

默认情况下，Datatables就已经把行和行区分开了，使用的是 `$.fn.dataTable.ext.classes.stripe*` 选项，值为 `odd` 和 `even`

{% include href/option/option.options param="stripeClasses" %}接受的是一个数组

定义三个不同的样式
{% highlight javascript linenos %}
var table = $('#example').DataTable( {
  "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
} );
{% endhighlight %}
`stripeClasses` 可以是任意长度的数组，你设置2个，那么就1 2 ， 1 2 ， 1 2 这么循环，如果设置3个就是 1 2 3， 1 2 3， 1 2 3，这么循环
