---
layout: daily
title: option stateSaveCallback 定义表格状态怎样、在哪里存储 《不定时一讲》 DataTables中文网
short: option stateSaveCallback 定义表格状态怎样、在哪里存储
date: 2016-9-23
group: 2016-9
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/09/23/option-stateSaveCallback.html
---
参数详解连接{% include href/option/Callbacks.html param="stateSaveCallback" %}

当{% include href/option/Callbacks.html param="stateSave" %}为`true`，代表 DataTables 能存储表格的状态（过滤，排序，分页等等）
默认情况使用 `localStorage` 进行存储。这个回调函数允许你更改怎样储存或在哪里储存表格状态数据，比如是从服务器上
<!--more-->

基本语法：

保存状态到服务器上
{% highlight javascript linenos %}
$('#example').DataTable( {
  "stateSave": true,
  "stateSaveCallback": function (settings, data) {
    // Send an Ajax request to the server with the state object
    // 发送一个请求把数据存到服务器
    $.ajax( {
      "url": "/state_save",
      "data": data,
      "dataType": "json",
      "type": "POST",
      "success": function () {}
    } );
  }
} );
{% endhighlight %}
