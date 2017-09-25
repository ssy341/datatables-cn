---
layout: daily
title: option stateLoadParams 状态读取数据操作回调函数 《不定时一讲》 DataTables中文网
short: option stateLoadParams 状态读取数据操作回调函数
date: 2016-9-22
group: 2016-9
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://utbgeek.com/home/bradu25/public_html/utbgeek/wp-content/uploads/2016/03/central-intelligence-movie-poster.jpg
---
参数详解连接{% include href/option/Callbacks.html param="stateLoadParams" %}

回调允许在加载状态之前修改保存在状态里的数据
<!--more-->

基本语法：

去掉保存在状态里过滤条件，意味保存在状态里的搜索条件永远不会被读取到
{% highlight javascript linenos %}
$('#example').DataTable( {
  "stateSave": true,
  "stateLoadParams": function (settings, data) {
    data.search.search = "";
  }
} );
{% endhighlight %}

通过返回 false 不允许使用保存在状态里的数据
{% highlight javascript linenos %}
$('#example').DataTable( {
  "stateSave": true,
  "stateLoadParams": function (settings, data) {
    return false;
  }
} );
{% endhighlight %}
