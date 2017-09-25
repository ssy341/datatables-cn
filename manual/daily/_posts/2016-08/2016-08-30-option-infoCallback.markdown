---
layout: daily
title: option infoCallback 表格概要信息显示回调 《不定时一讲》 DataTables中文网
short: option infoCallback 表格概要信息显示回调
date: 2016-8-30
group: 2016-8
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://cdn-static.denofgeek.com/sites/denofgeek/files/2016/05/x-men-apocalypse-launch-quad-poster.jpg
---
参数详解连接{% include href/option/Callbacks.html param="infoCallback" %}

表格通常有一个描述信息，用来显示当前表格总共多少记录，当前显示的是多少条到多少条记录，或者其他自定义的信息，如果你需要自定义这些，这个回调函数会帮你处理这个问题
<!--more-->
基本语法：
{% highlight javascript linenos %}
//首页右下角表格效果
$('#example').dataTable( {
  "infoCallback": function( settings, start, end, max, total, pre ) {
    return start +"-"+ end+"(共"+total+"个热心网友 )<a class='button button-success' href='/about/index.html#donate'>我也要赞一个 &gt;&gt;</a>";
  }
} );

//使用api获取分页信息
$('#example').dataTable( {
  "infoCallback": function( settings, start, end, max, total, pre ) {
    var api = this.api();
    var pageInfo = api.page.info();
    return 'Page '+ (pageInfo.page+1) +' of '+ pageInfo.pages;
  }
} );

{% endhighlight %}
