---
layout: daily
title: option rowId 给每行（tr）自动绑定上唯一id 《不定时一讲》 DataTables中文网
short: option rowId 给每行（tr）自动绑定上唯一id
date: 2016-5-6
group: 2016-5
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/05/06/option-rowId.html
---
参数详解连接{% include href/Options.html param="rowId" %}

 **注意：需使用 1.10.8 版本以上才可以**

大部分的表格都会带出id，用来做唯一标示，修改，删除都会用到id

Datatables给大家提供一个内部实现，让绑定id不需要再写其他代码，配置上属性即可
<!--more-->

{% highlight javascript linenos %}
//数据示例
//这里id只要是唯一的，都是可以的，不管是数字还是字母
{
    data:[
        {"id":341,"name":"Datatables中文网","DT_RowId":341},
        {"id":"a","name":"不定时一讲","DT_RowId":"a"}
    ]
}

$('#myTable').DataTable( {
    ajax: '/api/staff'
} );
{% endhighlight %}

只要是上面的数据格式，Datatables就会默认给处理，在每个tr上加上id

{% highlight Html linenos %}
<tr id="341">
    <td>341</td>
    <td>Datatables中文网</td>
</tr>
<tr id="a">
    <td>a</td>
    <td>不定时一讲</td>
</tr>
{% endhighlight %}

按照他规定的属性名 `DT_RowId` 组装好返回，Datatables就自动处理，那如果不是这样的，就不行了么？

作者还是考虑到了，这就是 {% include href/Options.html param="rowId" %} 的作用

{% highlight javascript linenos %}
//数据示例
{
    data:[
        {"name":"Datatables中文网","info":{"id":"341","age":2}}
    ]
}

$('#myTable').DataTable( {
    ajax: '/api/staff'
    rowId: 'info.id'
} );

//数据示例
{
    data:[
        {"name":"Datatables中文网","id":"341","age":2}
    ]
}

$('#myTable').DataTable( {
    ajax: '/api/staff'
    rowId: 'id'
} );
{% endhighlight %}

最后的表格是下面的样子

{% highlight Html linenos %}
<tr id="341">
    <td>341</td>
    <td>Datatables中文网</td>
</tr>
{% endhighlight %}

这样还不够，作者还提供取数的方法，看下面代码

{% highlight javascript linenos %}
var table = $('#myTable').DataTable();

$('#myTable').on( 'click', 'tr', function () {
    var id = table.row( this ).id();
    alert( '被点击行的id是 '+id );
} );
{% endhighlight %}