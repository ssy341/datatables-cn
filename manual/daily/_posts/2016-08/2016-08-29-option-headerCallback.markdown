---
layout: daily
title: option headerCallback 表头回调函数 《不定时一讲》 DataTable中文网
short: option headerCallback 表头回调函数
date: 2016-8-28
group: 2016-8
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTable中文网
banner: http://img.goldposter.com/2015/12/Ice-Age-5_poster_goldposter_com_4.jpg
---
参数详解连接{% include href/option/option.callbacks param="headerCallback" %}

一个标准的表格分为thead，tbody和tfoot，一般我们可能只使用了thead和tbody，在开发过程中偶尔也会在表头做一些特殊处理，DataTables 提供了表头的回调处理
<!--more-->
基本语法：
{% highlight javascript linenos %}
$('#example').dataTable( {
  "headerCallback": function( thead, data, start, end, display ) {
    //可以分别打印 thead, data, start, end, display 看看究竟是什么
    $(thead).find('th').eq(0).html( '显示 '+(end-start)+' 条记录' );
  }
} );
{% endhighlight %}
