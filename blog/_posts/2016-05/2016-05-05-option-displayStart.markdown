---
layout: daily
title: option displayStart 初始化起始页 《不定时一讲》 DataTables中文网
short: option displayStart 初始化起始页
date: 2016-5-5
group: 2016-5
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/05/05/option-displayStart.html
---
参数详解连接{% include href/option/Options.html param="displayStart" %}

定义表格初始化时显示的页数，使用这个参数的前提是得开启分页特性 `paging:true`，默认情况下是打开分页了，但是如果你把
{% include href/option/Features.html param="paging" %}属性置为 `false` 那肯定就没用了哦！
<!--more-->

{% highlight javascript linenos %}
$('#example').DataTable( {
  "displayStart": 20
} );
{% endhighlight %}

上面的示例表示，如果你是每页显示10条数据，希望表格初始化的时候显示的是第三页的数据，你应该设置为 20