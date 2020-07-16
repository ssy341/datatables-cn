---
layout: daily
title: option stateLoadCallback 状态读取回调函数 《不定时一讲》 DataTables中文网
short: option stateLoadCallback 状态读取回调函数
date: 2016-9-10
group: 2016-9
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/09/10/option-stateLoadCallback.html
---
参数详解连接{% include href/option/Callbacks.html param="stateLoadCallback" %}

这个回调函数定义了保存状态应该怎样、从哪里被读取。默认情况下 DT 从`localStorage`读取，但是也许你也会从服务器或者`cookies`中获取这些状态。
<!--more-->

关于储存的个数据格式，参考 {% include href/option/Callbacks.html param="stateSaveCallback" %}

注意，这个回调函数需要和 `stateSaveCallback` 配合使用。一个是如何读取，一个是如何存储。

基本语法：
{% highlight javascript linenos %}
//从服务器读取状态
$('#example').DataTable( {
  "stateSave": true,
  "stateLoadCallback": function (settings) {
    var o;
 
    // Send an Ajax request to the server to get the data. Note that
    // 发送一个ajax请求到服务器获取数据，注意
    // this is a synchronous request since the data is expected back from the
    // 这是一个同步的请求，直到数据返回
    // function
    $.ajax( {
      "url": "/state_load",
      //同步
      "async": false,
      "dataType": "json",
      "success": function (json) {
        o = json;
      }
    } );
 
    return o;
  }
} );

{% endhighlight %}
