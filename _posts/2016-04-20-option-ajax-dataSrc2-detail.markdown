---
layout: daily_detail
title: option ajax dataSrc （下） 《不定时一讲》 DataTable中文网
short: option ajax dataSrc （下）
date: 2016-4-20
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/ajax.dataSrc.dt %}

接着昨天的dataSrc作为function时能处理什么复杂的情况呢？
在这里可以把dataSrc和jQuery的ajax的success方法一起看，或者对于Datatables来说dataSrc是success的扩展、加强
{% highlight javascript linenos %}
$.ajax({
    url:"data.json",
    success:function(result){
        //result其实就是data.json的数据，那么当服务器返回的数据格式不是Datatables所支持的格式怎么办？这个时候就可以用到dataSrc来处理这个情况
    }
})
{% endhighlight %}
先假设data.json的数据格式如下：
{% highlight javascript linenos %}
{
    msg:"成功返回数据",
    listdata:{
        treeData:[
            {id:1,pid:0,name:"节点一"},
            {id:2,pid:1,name:"节点二"}
        ],
        tableData:{
            page:1,
            size:58,
            data:[
                {name:"中文网",age:2},
                {name:"datatables",age:3}
            ]
        }
    },
    status:true
}
{% endhighlight %}
相信很多小伙伴的数据格式比这个还要复杂，各种嵌套，各种包含，那么这里注意一点，认清Datatables所支持的格式，绿色部分标记，把这点弄明白，实际上就不难了，看下面代码，怎么使用上面所示格式的数据交给Datatables去处理
{% highlight javascript linenos %}
var table = $("#tableid").DataTable({
    ajax:{
        url:"data.json",
        dataSrc:function(result){
            //这里result和上面jquery的ajax的代码类似，也是可以得到data.json的数据，但是这样的格式，Datatables不能直接使用，这时候需要在这里处理一下
            //直接返回Datatables需要的那部分数据即可，看到这里，大家或许又懂了些什么看到了他的强大和灵活
            return result.listdata.tableData.data;
        }
    },
    columns:[
        {data:"name"},
        {data:"age"}
    ]
});
{% endhighlight %}