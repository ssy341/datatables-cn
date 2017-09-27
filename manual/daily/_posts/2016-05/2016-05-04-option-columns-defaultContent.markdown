---
layout: daily
title: option columns.defaultContent 给单元格默认内容 《不定时一讲》 DataTables中文网
short: option columns.defaultContent 给单元格默认内容
date: 2016-5-4
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M7eca6f0b9c77bd207d13b5eb4fec49e3o0&w=299&h=224&c=0&pid=1.9&rs=0&p=0
---
参数详解连接{% include href/option/Columns.html param="columns.defaultContent" %}

给单元格设置静态默认内容，这个属性不得不说是非常有用的，提到这个大家还可以看看
{% include href/option/Columns.html param="columns.render" %}属性，想要弄得更复杂点，全靠它了

我们返回的数据不能保证都是正常的，可能包含 `null` ，显然这个对于最终用户来说是不友好的，那么我们可以这么处理
<!--more-->

先有如下数据格式：
{% highlight javascript linenos %}
//示例数据
{
    data:[
        {"id":1,"email":"thxopen@datatables.club","office":"Chengdu","first_name":null}
    ]
}

$('#example').DataTable( {
  "columns": [
    null,
    null,
    null,
    {
      "data": "first_name",
      // 为 null 或者 undefined 给出友好的提示， 还没有设置
      "defaultContent": "<i>还没有设置</i>"
    }
  ]
} );
{% endhighlight %}

或者更简单，粗暴的处理：

{% highlight javascript linenos %}
$('#example').DataTable( {
  "columns": [
    null,
    null,
    null,
    {
      "data": "office",
      // 如果上面数居中office对于的值为 null 或者 undefined 则直接显示为空字符串
      "defaultContent": ""
    }
  ]
} );
{% endhighlight %}

当然 `defaulContent` 的用法还可以再强大点，比如给最后一列添加编辑按钮

{% highlight javascript linenos %}
//使用 columnDefs 指定
$('#example').DataTable( {
  "columnDefs": [
    {
      "data": null,
      "defaultContent": "<button>编辑</button>",
      "targets": -1  // 这里 -1 代表最后一列
    }
  ]
} );

// 使用 columns 指定
$('#example').dataTable( {
  "columns": [
    null,
    null,
    null,
    {
      "data": null,
      "defaultContent": "<button>编辑</button>"
    }
  ]
} );
{% endhighlight %}