---
layout: daily
title: option columns.width 定义列宽 《不定时一讲》 DataTable中文网
short: option columns.width 定义列宽
date: 2016-5-4
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTable中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M703c1a1d6852c9144f59cdd2ed8d7b9do2&w=297&h=248&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/columns.width.dt %}

DataTable会根据列内容自动计算列宽，通过设置{% include href/option/autoWidth.dt %}属性控制是否开启这个功能
<!--more-->

同样我们也可以自定义列宽，看下面代码：
{% highlight javascript linenos %}
//使用 columnDefs 给列设置宽度
$('#example').DataTable( {
  "columnDefs": [
    //给第一列指定宽度为表格整个宽度的20%
    { "width": "20%", "targets": 0 }
  ]
} );

//使用 columns 给列设置宽度
$('#example').DataTable( {
  "columns": [
  //给第一列指定宽度为表格整个宽度的20%
    { "width": "20%" },
    null,
    null,
    null,
    null
  ]
} );
{% endhighlight %}

除了百分比，{% include href/option/columns.width.dt %}还接受任何 css 值，比如 3em, 20px 等等

{% highlight javascript linenos %}
$('#example').DataTable( {
  "columnDefs": [
    //给第一列指定宽度为表格整个宽度的 10px
    { "width": "10px", "targets": 0 }
  ]
} );
{% endhighlight %}
由于table本身还有样式，比如td有margin，或者padding这些样式，以及td里本身的内容的限制

最终的宽度值和设置的值会有不匹配，设置的是 10px  实际要大于10px ，大家注意下


