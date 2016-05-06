---
layout: daily_detail
title: option lengthMenu 《不定时一讲》 DataTable中文网
short: option lengthMenu 改变每页显示数据的条数
date: 2016-5-6
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/option.options param="lengthMenu" %}

这个参数可以设置左上角那个下拉框（默认在左上角），默认值为 `[ 10, 25, 50, 100 ]`

它接受一维数组或者是二维数组，根据自己的需要可以自行设置

* 一维数组

{% highlight javascript linenos %}
$('#example').DataTable( {
  "lengthMenu": [ 20, 30, 40, 50, 100 ]
} );
{% endhighlight %}

代表你可以把表格设置为每页 20/30/40/50/100 条数据显示

* 二维数组

{% highlight javascript linenos %}
$('#example').DataTable( {
  "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "所有"] ]
 } );
{% endhighlight %}

第一个数组是具体的值，理解为 `<option value=""></option>`  `value` 对应的值

第二个数组是用来显示的文字，理解为 `<option value="">显示的文字</option>`

这里需要提的是，数字要 `>0` ，但是有个特殊值 `-1` 它代表显示全部数据