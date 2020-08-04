---
layout: daily
title: 如何添加新行到表格的最上面（困扰了许多人的一个梗） 《不定时一讲》 DataTables中文网
short: 如何添加新行到表格的最上面（困扰了许多人的一个梗）
date: 2016-5-28
group: 2016-5
caption: 《不定时一讲》
categories: blog
tags: [博客,DataTables使用经验]
author: DataTables中文网
redirect_from: /manual/daily/2016/05/28/how-to-add-row-to-top-of-table.html
---

这个还要从很久很久之前说起……

首先要说的是 Datatables 提供了两个 api 来添加新的行，一个是{% include href/APIs.html param="row.add()" %},一个是{% include href/APIs.html param="rows.add()" %}

前者是单行添加，后者是多行添加，那么先看下面的代码，看看我们是怎么添加一行到表格中的
<!--more-->
下面是表格初始化代码
{% highlight javascript linenos %}
var oTable02 = $('#inlineEditDataTable').DataTable({
    "columnDefs": [
        {'title': "Priority", 'targets': 0},
        {'title': "Item", 'targets': 1},
        {'title': "Type", 'targets': 2},
        {'title': "Background-color", 'targets': 3}
    ],
    "order": [[0, "des"]],
    "columns": [
        {"data": "priority"},
        {"data": "name"},
        {"data": "type"},
        {"data": "color"}
    ],
     "ajax":"json.json"
});
{% endhighlight %}
往表格里添加一行或者多行
{% highlight javascript linenos %}
//单独添加一行
var singlerow = {
    "id": 1,
    "name": "DataTables 中文网",
    "type": 1,
    "color": "white",
    "priority": 1
};
oTable02.row.add(singlerow);

//同时添加多行
var rows = [{
    "id": 1,
    "name": "DataTables 中文网 api",
    "type": 1,
    "color": "white",
    "priority": 2
},
{
    "id": 1,
    "name": "DataTables 中文网 不定时一讲",
    "type": 1,
    "color": "white",
    "priority": 3
}];
oTable02.rows.add(rows);
{% endhighlight %}
这个时候大家遇到的问题就是，怎么都往后面追加了，要是有2页的话，不翻页还不知道这行已经添加进去了

先别急，我们先看看这个例子 [添加行 API 示例 Datatables中文网]({{site.baseurl}}/example/api/add_row.html)

不用怀疑，如果你操作了这个例子，你心中肯定想的是，添加新行就是往后追加的

不！我一开始也是这么认为的，直到我写首页的例子后，发现有时候添加的新行居然在表格中间，我暗自笑了笑，“哈哈居然还有bug”

但是后面我发现不对，于是我开始查询资料，皇天不负有心人，终于让我知道是怎么回事了。

作者在论坛里说到

> Datatables 的数据位置是由 sort 控制的，如果你希望新加入的行在表格最上面，那么你的数据排序（升序）就必须要在最上面

看到这句话的时候，我大概明白了，我马上去用代码做了实验证明自己的想法。

“实践是检验真理的唯一标准”这话一点都不假，如果光有想法不实践，只做而又不去思考都是不行的，咦？不对，我是不是跑题了？
好我们说正事，那么根据我上面说的屁话，可以知道如果要想新加入的行在表格的最上方，只要在数据上稍作处理即可。

看下面代码

{% highlight javascript linenos %}

var oTable02 = $('#inlineEditDataTable').DataTable({
    "columnDefs": [
        {'title': "Priority", 'targets': 0},
        {'title': "Item", 'targets': 1},
        {'title': "Type", 'targets': 2},
        {'title': "Background-color", 'targets': 3}
    ],
    //这里之所以写出来，是大家需要注意的，因为dt的的默认值为[[0, 'asc']]
    //所以上面提到的 添加行的例子 操作的结果是在后面追加
    //因为默认第一列升序排列，所以根据代码，新加的行第一列是累加的，那么越来越大，升序的话当然往后面排啊
    "order": [[0, "des"]],
    "columns": [
        {"data": "priority"},
        {"data": "name"},
        {"data": "type"},
        {"data": "color"}
    ],
     "ajax":"json.json"
});

//针对这个代码示例，先假设表格中已经有一行数据【  0  中文网  1  white 】，我新加的行要在他上面，代码这样写
var singlerow = {
    "id": 1,
    "name": "我在最上面",
    "type": 1,
    "color": "white",
    "priority": 1
};
oTable02.row.add(singlerow);
{% endhighlight %}
这里需要注意的地方就是，我给出的代码示例设置了第一列降序排列，第一列是 `priority`， 那么只要新加行  `priority` 比已有行  `priority` 要大 即可。

### 总结：添加的新行的位置是根据某列的排序位置来确定的，大家明白了么？
