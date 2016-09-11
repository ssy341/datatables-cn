---
layout: daily
title: option columns.render 渲染列(2) 添加自定义按钮 《不定时一讲》 DataTables中文网
short: option columns.render 渲染列(2) 添加自定义按钮
date: 2016-4-26
group: 2016-4
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.Md8cd419f998bdfd2a75da5f04f4d8a4bo0&w=300&h=187&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/columns.render.dt %}

昨天暂且列出了7个问题，今天讲第二个，怎么在表格的最后一列，添加自定义的按钮，比如说【删除】
<!--more-->

同样是如下的数据：
{% highlight javascript linenos %}
{
    data:[
        {"name":"DataTables中文网","age":2,"id":1},
        {"name":"DataTables中文网2","age":3,"id":2}
    ]
}
{% endhighlight %}
如果要删除一条数据，我们一般是根据id来操作，因为他是唯一的

js部分代码：
{% highlight javascript linenos %}
var table = $("#tableid").DataTable({
    ajax: {
        url: "data.json",
        type: "POST"
    },
    columns: [{
        data: "name"
    },
    {
        data: "age"
    },
    {
        data: null
    }],
    columnDefs: [{
        //   指定第最后一列
        targets: 2,
        render: function(data, type, row, meta) {
            return '<a type="button"  href="#" onclick="del("' + row.id + '","' + row.name + '")" >删除</a>';
        }
    }]
});

//删除方法
function del(id, name) {
    $.ajax({
        url: "del.action",
        //在后台接受id这个参数
        data: {
            id: id
        },
        success: function(data) {
            if (data.flag) {
                //如果后台删除成功，则刷新表格，并提示用户删除成功
                //保留分页信息
                table.ajax.reload(null, false);
                alert(name + data.msg);
            }
        }
    })
}
{% endhighlight %}
假设上面url：del.action?id=1成功的返回数据如下：
{% highlight javascript linenos %}
{
    flag:true,
    msg:"删除成功"
}
{% endhighlight %}
html代码：
{% highlight HTML linenos %}
<table id="tableid">
       <thead>
            <th>姓名</th>
            <th>年龄</th>
                <th>操作</th>
        </thead>
</table>
{% endhighlight %}
其实写了两个关于render的使用方法了，应该可以举一反三了，render是不是也没那么难呢？