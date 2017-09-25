---
layout: daily
title: option rowCallback 行绘制回调函数 《不定时一讲》 DataTables中文网
short: option rowCallback 行绘制回调函数
date: 2016-9-4
group: 2016-9
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://www.movierulz25.com/wp-content/uploads/2016/06/independence_day_resurgence_ver14_xlg-1200x558.jpg
---
参数详解连接{% include href/option/Callbacks.html param="rowCallback" %}

这个回调一般用来给行添加 class 名称，或者直接操作 `TR` 元素，但请注意，初始化操作中，{% include href/option/Callbacks.html param="createdRow" %}操作行的效率要更高
<!--more-->

基本语法：
{% highlight javascript linenos %}
//高亮显示单元格值为A的（对象类型数据源）
$('#example').DataTable( {
  "rowCallback": function( row, data, index ) {
    if ( data.grade == "A" ) {
      $('td:eq(4)', row).html( '<b>A</b>' );
    }
  }
} );

//高亮显示单元格值为A的（数组类型数据源）
$('#example').DataTable( {
  "rowCallback": function( row, data, index ) {
    if ( data[4] == "A" ) {
      $('td:eq(4)', row).html( '<b>A</b>' );
    }
  }
} );

{% endhighlight %}
