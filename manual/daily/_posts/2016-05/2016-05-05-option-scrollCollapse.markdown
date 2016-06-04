---
layout: daily
title: option scrollCollapse 当显示更少的记录时，是否允许表格减少高度 《不定时一讲》 DataTable中文网
short: option scrollCollapse 当显示更少的记录时，是否允许表格减少高度
date: 2016-5-5
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTable中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M807a0971d5980a06a98498f2f900412eo0&w=300&h=240&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/option.options param="scrollCollapse" %}

每个插件都不是完美的，但是作者也是尽可能考虑到使用者的感受，对于表格的高度，一些人希望随着数据的变化而变化，
另一些人则希望固定高度，这个参数正是这个用处
<!--more-->

{% highlight javascript linenos %}
$('#example').DataTable( {
    //不管表格中有没有数据都固定300的高度，具体是啥单位，大家自己试试啊 ：）
  scrollY: 300,
  scrollCollapse: true
} );
{% endhighlight %}

如果没有使用{% include href/option/scrollY.dt %}属性，表示和表格数据同步，表格数据减少时，表格的高度也跟着减少
