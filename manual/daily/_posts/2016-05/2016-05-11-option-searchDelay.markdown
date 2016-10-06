---
layout: daily
title: option searchDelay 设置搜索延迟时间 《不定时一讲》 DataTables中文网
short: option searchDelay 设置搜索延迟时间
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?id=OIP.Mac9f5885beecadf31d6405478c6681a0o0&w=185&h=143&c=7&rs=1&qlt=90&o=4&pid=1.1
---
参数详解连接{% include href/option/options/option.options param="searchDelay" %}

Datatables的客户端搜索和服务器搜索默认的延迟时间是400ms，所以当按下键后就立马开始搜索，
这样处理只是符合大多数情况，但是有些时候这样处理太消耗资源，降低了用户体验：

    1. 电脑比较旧了，性能更不上，那么需要调整下这个延迟时间
    2. 服务器端数据太多了，减少请求次数，这是优化服务器性能
    3. 减少重绘次数
    4. 当然，你还可以设置为0，来获得更快的速度，只要你愿意

{% include href/option/options/option.options param="searchDelay" %}接受的参数是以 `ms` 为单位
<!--more-->

提一点，这个延迟参数只针对全局搜索有效，如果是
{% include href/api/api.Core param="search" %},{% include href/api/api.columns param="column().search()" %} 方法则此参数不会生效，需要使用
{% include href/api/fn.dataTable.util.throttle.dt %}来处理

{% include href/option/options/option.options param="searchDelay" %}默认值为 `null` ，
他会自己判断如果是客户端模式，值为 `Instant` （及时），如果是服务器模式，值为 `400ms`

设置延时时间为350ms
{% highlight javascript linenos %}
 var table = $('#example').DataTable( {
   searchDelay: 350
 } );
{% endhighlight %}
