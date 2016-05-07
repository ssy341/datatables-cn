---
layout: daily
title: option ajax data 《不定时一讲》 DataTable中文网
short: option ajax data 根据参数查询表格数据
date: 2016-4-21
group: 2016-4
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/ajax.data.dt %}

这连续几天讲的都是关于dt怎么取数，今天讲讲怎么传参数给服务器。平时我们都有这样的应用场景，比如根据时间，或者input框的值作为查询条件显示表格数据
基本用法：
{% highlight javascript linenos %}
var table = $("#tableid").DataTable({
    ajax:{
        url:"data.action",
        type:"POST",
       data:{
            beginDate:"2016-04-18",
            endDate:"2016-04-21"
        }
    },
    columns:[
        {data:"name"},
        {data:"age"}
    ]
});
{% endhighlight %}
看到上面的代码，我不得不又把jQuery的ajax又拿出来说，应为这个可以说就是jQuery的ajax，基本是一样的用法，下面看看jQuery的ajax
{% highlight javascript linenos %}
$.ajax({
    url:"data.action",
    type:"POST",
   data:{
        args1:"123",
        args2:"456"
    },
    success:function(result){
        console.log(result);
    }
});
{% endhighlight %}
是不是发现是基本一模一样的？不用对比了，其实就是一样的，那么这两段代码的含义就是带上了两个参数，这样在服务器就可以接收到

比如服务器语言是java，那么你可以这么接受

<code>request.getParameter("beginDate");</code>//获取到起始时间，截止时间类同

如果你是php，那么你可以这么接受

<code>$_POST['beginDate'];</code>

这样你就可以根据页面传来的参数对数据进行处理，达到根据条件改变表格里的数据的效果。不过上面的代码都是传静态的值，
平时应用更多的是从一个时间控件或者input取值，那么就这样做
{% highlight javascript linenos %}
var table = $("#tableid").DataTable({
    ajax:{
        url:"data.action",
        type:"POST",
        data:{
            beginDate:$("#beginDate").val(),
            endDate:$("#endDate").val()
        }
    },
     columns:[
         {data:"name"},
         {data:"age"}
     ]
});
{% endhighlight %}