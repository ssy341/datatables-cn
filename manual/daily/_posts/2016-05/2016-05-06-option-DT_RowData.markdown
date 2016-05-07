---
layout: daily
title: option DT_RowData 使用jQuery.data()方法给每行（tr）绑定数据 《不定时一讲》 DataTable中文网
short: option DT_RowData 使用jQuery.data()方法给每行（tr）绑定数据
date: 2016-5-6
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
详解连接{% include href/localTarget/serverSide.local %}

说到 `DT_RowData` 不得不再提起 `columns.render`， 在前面几期有专门讲到 `columns.render`。

我们通常使用`columns.render`来添加自定义的按钮，比如修改，删除或者其他的操作，这里就会涉及到取数的问题

先看看 `columns.render` 是怎么处理的

{% highlight javascript linenos %}
//数据实例
{
    "data":[
        {"id":341,"name":"Datatables中文网","content":"Datatables是一个基于jQuery的表格插件"}
    ]
}

//初始化代码
var table = $("#example").DataTable({
    "ajax":"data.json",
    "columns":[
        {"data":"name",title:"姓名"},
        {"data":"content",title:"描述"},
        {"data":null,title:"操作"}
    ],
    "columnDefs":[
        {
            "targets":2,
            "render":function(data,type,row,meta){
                return '<a href="javascript:void(0)" '+
                    'onclick="show("'+row.name+'","'+row.content+'")" >查看详情</a>';
            }
        },{
            "targets":1,
            "render":function(data,type,row,meta){
                return data.length > 10 ? data.substr(0,10)+"..." : data;
            }
        }
    ]
});

//显示行详情
function show(name,content){
    //用alert模拟弹框的效果
    alert(name+" "+content);
}

{% endhighlight %}

上面的代码 show 方法的处理，如果你想多传几个参数，那是想想都脑壳痛，确实不优雅

如果只是一个id，或许还可以接受，或者使用js模板的方式也可以优雅的解决

但是这下要讲的是Datatables提供的解决办法，使用 `DT_RowData`  ，他不是一个配置项也不是方法，只是在返回数据的时候
稍稍改动下，上面的效果就可以简单的实现

需要稍微改动返回的数据

{% highlight javascript linenos %}
//数据实例
{
    "data":[
        {
            "id":341,
            "name":"Datatables中文网",
            "content":"Datatables是一个基于jQuery的表格插件",
            "DT_RowData":{
                "id":341,
                "name":"Datatables中文网",
                "content":"Datatables是一个基于jQuery的表格插件"
            }
        }
    ]
}


//初始化代码
var table = $("#example").DataTable({
    "ajax":"data.json",
    "columns":[
        {"data":"name",title:"姓名"},
        {"data":"content",title:"描述"},
        {"data":null,title:"操作"}
    ],
    "columnDefs":[
        {
            "targets":2,
            "defaultContent":'<a href="javascript:void(0)" class="view-detail">查看详情</a>'
        },{
            "targets":1,
            "render":function(data,type,row,meta){
                return data.length > 10 ? data.substr(0,10)+"..." : data;
            }
        }
    ]
});

$('#example').on( 'click', 'a', function () {
    //如果有多个按钮，根据class名称区分
    if($(this).hasClass("view-detail")){
        // a标签在td，td 在tr
        // 这里要获取tr的对象，所以是 a标签的父级的父级
        var trObjData = $(this).parent().parent().data("DT_RowData");
        var id = trObjData.id;
        var name = trObjData.name;
        var content = trObjData.content;
        show(name,content);
    }
} );

//显示行详情
function show(name,content){
    //用alert模拟弹框的效果
    alert(name+" "+content);
}
{% endhighlight %}

这种处理是Datatables在内部自己实现，所以在返回的数据里加上 `DT_RowData` Datatables会使用jQuery.data自动处理

关于 jQuery.data 的用法相见
[jQuery.data()](http://www.w3school.com.cn/jquery/data_jquery_data.asp)