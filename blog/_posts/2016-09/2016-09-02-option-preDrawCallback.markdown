---
layout: daily
title: option preDrawCallback 重绘前回调函数 《不定时一讲》 DataTables中文网
short: option preDrawCallback 重绘前回调函数
date: 2016-9-2
group: 2016-9
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/09/02/option-preDrawCallback.html
---
参数详解连接{% include href/option/Callbacks.html param="preDrawCallback" %}

与这个回调类似的还有{% include href/option/Callbacks.html param="drawCallback" %}回调，他们俩区别在于执行的先后顺序不同
<!--more-->

`preDrawCallback`在重绘表格前执行，你可以用来显示之前做更新或者清除操作，比如移除事件。这个回调函数还可以用来取消重绘操作，当方法返回 `false` 时

基本语法：
{% highlight javascript linenos %}
//重绘前移除每个单元格的点击事件
$('#example').DataTable( {
  "preDrawCallback": function( settings ) {
    $('#example tbody').off( 'click', 'td' );
  }
} );

//当#test的值为1的时候，取消重绘操作
$('#example').DataTable( {
  "preDrawCallback": function( settings ) {
    if ( $('#test').val() == 1 ) {
      return false;
    }
  }
} );

{% endhighlight %}
