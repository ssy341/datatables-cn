---
layout: daily
title: option stateLoaded 状态读取回调函数 《不定时一讲》 DataTables中文网
short: option stateLoaded 状态读取回调函数
date: 2016-9-11
group: 2016-9
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://media.comicbook.com/2016/02/tmnt2posters-170417.jpg
---
参数详解连接{% include href/option/Callbacks.html param="stateLoaded" %}

当{% include href/option/Callbacks.html param="stateLoadCallback" %}执行完毕后或者保存的数据被操作即触发这个回调函数。
<!--more-->
这个回调函数用来了解到数据是否已经存储或者保存了。比如，你可以用它来填充过滤框实现自定义过滤

基本语法：
{% highlight javascript linenos %}
//弹出全局的过滤条件
$('#example').DataTable( {
  "stateSave": true,
  "stateLoaded": function (settings, data) {
    alert( 'Saved filter was: '+data.search.search );
  }
} );
{% endhighlight %}
