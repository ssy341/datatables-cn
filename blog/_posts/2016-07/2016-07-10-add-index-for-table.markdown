---
layout: daily
title: 给表格添加索引(Type selector-modifier 应用)  博客 DataTables中文网
short: 给表格添加索引(Type selector-modifier 应用)
date: 2016-7-10
group: 2016-7
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,不定时一讲]
author: DataTable中文网
banner: https://github.com/ssy341/datatabes_cn_example_curd_java/raw/master/images/demo1.png
---

表格上第一列加上索引，这是一个很好的用户体验，首先可以一眼知道多少条数据，也能短时间里记忆操作的地方。总的来说
加上索引已经成为一个表格的标配，但是 DataTables 没有直接提供参数或者 API 方法来添加这个索引，不过作者还是给出了他自己的
解决方案，虽然还是要写点代码，但是对于我们来说，不是更灵活了么？凡是要往好的方面想，对吧？
<!--more-->

目录

1. [客户端模式下添加行号](#section1)
2. [服务器模式下添加行号](#section2)
3. [selector-modifier选择器的应用](#section3)

---

- <h2 id="section1">客户端模式下添加行号</h2>

看下面的代码，看作者是怎么给第一列添加索引列的。
{% highlight html linenos %}
<table id="example" class="display" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Salary</th>
        </tr>
    </thead>
</table>
{% endhighlight %}

{% highlight javascript linenos %}
    $(document).ready(function() {
        var t = $('#example').DataTable({
            "columns":[
                {"data":null},
                {"data":"Name"},
                {"data":"Position"},
                {"data":"Office"},
                {"data":"Age"},
                {"data":"Salary"}
            ],
            "columnDefs": [{
                "searchable": false,
                "orderable": false,
                "targets": 0
            }],
            "order": [[1, 'asc']]
        });
        t.on('order.dt search.dt',function() {
                    t.column(0, {
                        search: 'applied',
                        order: 'applied'
                    }).nodes().each(function(cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
    });
{% endhighlight %}

### **注意：这里提醒大家，如果你要添加索引，你就得给表格多一列(html里要多写一个th，js里columns里要多配置一个data)，不然你直接使用上面的代码，会把你第一列替换掉哦，到时候你就不知道去哪里找了**

针对上面代码，我把重点拿出来讲，理解这个代码的含义

- `columnDefs` 这个里面配置的作用是，禁用第一列的搜索和排序。为什么？因为第一列是行号排序还搜索已经没有意义了
- `order` 这个配置项的作用是，设置默认的排序列为第二列。为什么？因为 DT 默认会设置第一列升序排列，既然已经是行号了那就没必要了，我们设置到第二列升序排列
- `on` 为 jQuery 里监听事件的方法，给元素绑定监听事件，这里监听了 `order.dt` 、`search.dt` 两个事件，意思是当排序和搜索后，重新生成行号
- `t.column(0,{selector}).nodes()` 这个的作用是获取第一列的 DOM 元素，接着用 `each` 方法遍历，把行号设置进去。这里 `{selector}` 为 DT 的高级应用，我下面会说到
- `draw` 最后一个重绘方法，生成序号后，重新绘制。DT 的每个操作，包括排序、过滤、翻页还是自己使用API操作这些操作或者是设置了数据都要再调用 `draw` 方法才行

通过上面这段基本的代码，在客户端模式下，行号自然就显示出来了

- <h2 id="section2">服务器模式下添加行号</h2>

服务器模式下添加行号可以从两方面着手：

- 在服务器把行号生成好，作为数据传回到前端
- 和上面类似，利用 DT 的 API 生成行号

如果你在使用 DT 之前就已经是封装好了数据，当然最好，直接用就可以了；
如果不是那我推荐第二种方案，下面就看看如果是服务器模式我们怎么实现添加行号

{% highlight javascript linenos %}
//添加序号
//不管是排序，还是分页，还是搜索最后都会重画，这里监听draw事件即可
table.on('draw.dt',function() {
            table.column(0, {
                search: 'applied',
                order: 'applied'
            }).nodes().each(function(cell, i) {
                //i 从0开始，所以这里先加1
                i = i+1;
                //服务器模式下获取分页信息，使用 DT 提供的 API 直接获取分页信息
                var page = table.page.info();
                //当前第几页，从0开始
                var pageno = page.page;
                //每页数据
                var length = page.length;
                //行号等于 页数*每页数据长度+行号
                var columnIndex = (i+pageno*length);
                cell.innerHTML = columnIndex;
            });
        });
{% endhighlight %}
{% include href/api/Core.html param='page.info()' %}打印出来如下：
{% highlight javascript linenos %}
{
    "page": 1,
    "pages": 6,
    "start": 10,
    "end": 20,
    "length": 10,
    "recordsTotal": 57,
    "serverSide": true,
    "recordsDisplay": 57
}
{% endhighlight %}

和客户端处理方式一点不同，只需要再额外获取翻页信息，即可给每页都加上行号。

看完之后是不是觉得恍然大悟？在服务器模式下添加行号也不是件难事，以后妈妈再也不用担心我不会添加行号了。

- <h2 id="section3">selector-modifier 选择器的应用</h2>

DT 在文档中提及到的数据类型，方法返回的类型在 [Types]({{ site.baseurl }}/reference/type) 有详细的说明

可能大家有看到如下几种写法：
{% highlight javascript linenos %}
var table = $('#myTable').DataTable();
table.cell( {focused:true} ).data();
{% endhighlight %}

{% highlight javascript linenos %}
var table = $('#myTable').DataTable();
table.column( 3, {order:'index'} ).data();
{% endhighlight %}

{% highlight javascript linenos %}
var table = $('#myTable').DataTable();
table.rows( {page:'current'} ).data();
{% endhighlight %}
那么这些 `{focused:true}`,`{order:'index'}`,`{page:'current'}` selector 都是什么意思呢？在我理解，我认为可以用一句话解释
**它就是选择你要操作的数据**。

这些都是 `selector-modifier` 的应用，在 DT 中这是个非常有用的属性，它有如下的值可以选择：
{% highlight javascript linenos %}
{
    // DataTables core
    order:  'current',  // 'current', 'applied', 'index',  'original'
    page:   'all',      // 'all',     'current'
    search: 'none',     // 'none',    'applied', 'removed'

    // Extension - KeyTable (v2.1+) - cells only
    focused: undefined, // true, false, undefined

    // Extension - Select (v1.0+)
    selected: undefined // true, false, undefined
}
{% endhighlight %}

- `current`（默认） - 表中当前看到的数据
- `index` - 原始数据
- `applied` - `current `的别名
- `original` - `index `的别名

看过这些解释了，那么前面三段代码大概意思也知道了吧？

- 第一个是获取有焦点的单元格（当你要获取你在表格中不同行不同列选中的单元格的数据时，你可以这么用）
- 第二个是获取第四列排序的数据（在添加索引列时，就用到了这个）
- 第三个是获取当前页的数据（当你在搜索框添加了过滤条件后，你可以用这个方法获取当前页的数据，即过滤后的数据）

现在回过头来看下面这个代码：
{% highlight javascript linenos %}
 table.column(0, {
                search: 'applied',
                order: 'applied'
            }).nodes()
{% endhighlight %}

如果不加上选择器（selector），在数据很多的情况下就会产生很多重复操作，我们需要做的是对我们看得到的数据设置行号。


>  [DataTables 服务器模式添加行号 java](https://github.com/ssy341/datatabes_cn_example_curd_java)