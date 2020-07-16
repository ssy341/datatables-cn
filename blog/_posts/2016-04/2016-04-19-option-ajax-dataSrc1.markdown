---
layout: daily
title: option ajax dataSrc （上） 改变默认的data属性取值 《不定时一讲》 DataTables中文网
short: option ajax dataSrc （上） 改变默认的data属性取值
date: 2016-4-19
group: 2016-4
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/04/19/option-ajax-dataSrc1.html
---

参数详解连接{% include href/option/data.html param="ajax.dataSrc" %}

今天讲的参数dataSrc是属于ajax下的一个属性，他类似于jQuery ajax的success方法，废话少说看下面的代码
<!--more-->
基本用法：
{% highlight javascript linenos %}
$("#tableid").DataTable({
    ajax:{
        url:"data.json",
        dataSrc:"tabledata"
    },
    columns:[
        {data:"name"},
        {data:"age"}
    ]
});
{% endhighlight %}
一般来说我们在定义一个接口的返回json数据格式（假设下面的数据为data.json的数据），会有msg（反馈信息），status（返回状态），data（返回数据）等等，具体看下面的数据格式
{% highlight javascript linenos %}
{
    msg:"查询成功",
    status:true,
    data:[
        {name:"datatables中文网",age:2},
        {name:"datatatble不定时一说",age:0}
    ]
}
{% endhighlight %}
对于上面的格式可能不太陌生，当然不是每一个人都会这么去做，那么数据格式的多样性就会让很多一开始接触Datatables的小伙伴无从下手，不知道怎么封装数据，或者和dt支持的数据格式不匹配，那么下面告诉大家dataSrc参数的用处，他可以接受一个字符串，也可以接受一个function。
作为字符串的时候： <code>dataSrc:"tabledata"</code> 这个tabledata是什么意思，下面看一段代码
{% highlight javascript linenos %}
$.ajax({
    url:"data.json",
    success:function(result){
        //在这个简单的ajax中，我们要使用返回的数据，直接就用result即可，那么我们要用上面数据中data的数据怎么办？
        //很简单，result.data 即可以取到我们要的数据，那么tabledata的意思就在这里
    }
})
{% endhighlight %}
如果我们的数据是如下格式，可以看到这里只是把【data】换成了【tabledata】，是不是稍微懂些了？
{% highlight javascript linenos %}
{
    msg:"查询成功",
    status:true,
    tabledata:[
        {name:"datatables中文网",age:2},
        {name:"datatatble不定时一说",age:0}
    ]
}
{% endhighlight %}
在返回去看最上面的那段代码，dataSrc:"tabledata" 这个的意思就是相当于dt自己封装了result.tabledata,    取到数据后循环生成tr和td，
只是dt默认的这个属性是data，但是平时项目中这个可能已经被定义了，没办法修改了，那么就在dt初始化的时候配置上，告诉dt我用的是那个属性

看完上面的说明，对dataSrc是否有一定的了解呢?当然这个可能还是无法满足实际的要求，那么就等明天介绍当他接受一个function的时候，怎么处理更复杂的情况
