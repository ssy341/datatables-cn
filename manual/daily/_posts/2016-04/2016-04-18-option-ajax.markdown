---
layout: daily
title: option ajax 异步取数 《不定时一讲》 DataTables中文网
short: option ajax 异步取数
date: 2016-4-18
group: 2016-4
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.Mcd6f269812716d3748a8eebb96ff94bao0&w=256&h=199&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/data.html param="ajax" %}

今天讲的参数是ajax，相信大家不陌生，用过jQuery的人对这个应该很熟悉。dt是基于jquery做的表格插件，所以dt在读取数据时也用了jquery的ajax，虽然是类似，但是有加强，下面看ajax的用法吧。
<!--more-->
基本语法：
{% highlight javascript linenos %}
$("#tableid").DataTable({
    ajax:"dada.json",
    columns:[
        {data:"name"},
        {data:"age"}
    ]
});
{% endhighlight %}
data.json - 是一个url或者资源文件，数据格式是这样的
{% highlight javascript linenos %}
{
    data:[
        {name:"DataTables中文网",age:2},
        {name:"DataTables中文网2",age:3}
    ]
}
{% endhighlight %}
你还可以使用数组格式，如下
{% highlight javascript linenos %}
{
    data:[
        ["DataTables中文网",2],["DataTables中文网2",3]
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