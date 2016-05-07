---
layout: daily
title: option formatNumber 数字格式化 《不定时一讲》 DataTable中文网
short: option formatNumber 数字格式化
date: 2016-5-3
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/formatNumber.option %}

在实际使用过程中，可能遇到需要显示大数据的情况，比如： **9874029144**

但是这个不直观，一下子不能识别这个数是多大

DataTable提供一个回调函数{% include href/option/formatNumber.option %}来渲染这些数字

假设用千分符来分隔，看起来就不一样了，如 **9'874'029'144**

下面看个基本的用法：

如果是大数字，使用 `'` 分隔
{% highlight javascript linenos %}
$('#example').DataTable( {
  "formatNumber": function ( toFormat ) {
     //使用正则表达式匹配，替换数字
    return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  };
} );
{% endhighlight %}
