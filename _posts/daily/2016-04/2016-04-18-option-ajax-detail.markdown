---
layout: daily_detail
title: option ajax 《不定时一讲》 DataTable中文网
short: option ajax
date: 2016-4-18
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/ajax.dt %}

今天讲的参数是ajax，相信大家不陌生，用过jQuery的人对这个应该很熟悉。dt是基于jquery做的表格插件，所以dt在读取数据时也用了jquery的ajax，虽然是类似，但是有加强，下面看ajax的用法吧。
基本语法：
{% highlight javascript linenos %}
$("#tableid").DataTable({
    ajax:"dada.json",
    colunms:[
        {data:"name"},
        {data:"age"}
    ]
});
{% endhighlight %}
data.json - 是一个url或者资源文件，数据格式是这样的
{% highlight javascript linenos %}
{
    data:[
        {name:"datatable中文网",age:2},
        {name:"datatable中文网2",age:3}
    ]
}
{% endhighlight %}
你还可以使用数组格式，如下
{% highlight javascript linenos %}
{
    data:[
        ["datatable中文网",2],["datatable中文网2",3]
    ]
}
{% endhighlight %}
如果数据格式为上面的，那么初始化代码可以简化下：
{% highlight javascript linenos %}
$("#tableid").DataTable({
    ajax:"dada.json"
});
{% endhighlight %}
之所以能不写columns是因为dt默认可以处理数组格式的数据,按照数组的顺序0,1，2……对应第一列，第二列