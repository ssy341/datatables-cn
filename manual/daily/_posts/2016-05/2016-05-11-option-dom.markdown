---
layout: daily
title: option dom 自定义布局表格 《不定时一讲》 DataTables中文网
short: option dom 自定义布局表格
date: 2016-5-11
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse4.mm.bing.net/th?id=OIP.M5ba0bc29fe755dec3d3ba5bbb35380f0o0&w=179&h=141&c=7&rs=1&qlt=90&o=4&pid=1.1
---
参数详解连接{% include href/option/options/option.options param="dom" %}

相关例子 [视频讲解]({{ site.baseurl }}/example/vedio/season1/dom/)，
[示例讲解1]({{ site.baseurl }}/example/basic_init/dom.html) 和
[示例讲解2]({{ site.baseurl }}/example/advanced_init/dom_toolbar.html)

前几天在搬家，所以没时间去更新了，今天搬完了，终于解放了。搬一次家感觉一辈子都不想再搬了……
<!--more-->

说到搬家，我联想到布局，这也是今天所要讲的主题，关键字 **DOM**，总有些东西放在哪里不是你期望的，也总有些东西你不希望看到。
我们弄清楚下面几个问题，你基本可以任意妄为了。

+ 首先，什么是 DOM( Document Object Model )？

    DOM 是 W3C（万维网联盟）的标准。
    DOM 定义了访问 HTML 和 XML 文档的标准：
    “W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。”

    W3C DOM 标准被分为 3 个不同的部分：

    1. 核心 DOM - 针对任何结构化文档的标准模型
    2. XML DOM - 针对 XML 文档的标准模型
    3. HTML DOM - 针对 HTML 文档的标准模型

我们需要了解的是 HTML DOM，什么是 HTML DOM？

    HTML DOM 是：

    1. HTML 的标准对象模型
    2. HTML 的标准编程接口
    3. W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。
换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。

+ 其次，Datatables里所谓的DOM是什么？

{% include href/option/options/option.options param="dom" %}也是指 html 元素。

用过Datatables的朋友应该都知道，默认情况下，表格都会有左上角的 *改变每页显示条数*、右上角的 *搜索框*、
左下角的 *表格信息* ，右下角的 *分页信息* 、表格中部 *数据加载等待框* 以及 *表格* 本身，这都是Datatables所谓的
DOM。它们实际上就是一个 `div` 包裹起来的 `select`、`input`或者其他 HTML 标签。

那么Datatables有以下的定义：

    1. `l` 代表 length，左上角的改变每页显示条数控件
    2. `f` 代表 filtering，右上角的过滤搜索框控件
    3. `t` 代表 table，表格本身
    4. `i` 代表 info，左下角的表格信息显示控件
    5. `p` 代表 pagination，右下角的分页控件
    6. `r` 代表 processing，表格中间的数据加载等待提示框控件
    7. `B` 代表 button，Datatables可以提供的按钮控件，默认显示在左上角

既然都是 html 元素，那么他们的位置，是否显示这些都是可以控制的，我们管这个叫 **DOM定位**

+ 最后，我们怎么摆放这些控件的位置，或者我不想看到她？

因为{% include href/option/options/option.options param="dom" %}的默认值是 `lfrtip` ,所以表格初始化后都是
左上角是长度控制，右上角是过滤框，中间是表格和数据加载等待，左下角是表格信息展示，右下角是分页控件。

上面的 `lfrtip` 被Datatables处理后的代码如下：
{% highlight HTML linenos %}
<!-- 我是显示在左上角的，控制每页显示数据的条数 -->
<div>
    <select>
        <option>10</option>
    </select>
</div>

<!-- 我是显示在右上角的，可以过滤数据的输入框 -->
<div>
    <input type="text">
</div>

<!-- 我是等待加载提示，默认是不可以看到的哦 -->
<div><span>加载中...</span></div>

<!-- 我就是表格啊，在中间，最重要的位置 -->
<div>
    <table></table>
</div>

<!-- 我显示在左下角，用来告诉大家表格的信息 -->
<div>
    显示第 1 至 9 项结果，共 9 项
</div>

<!-- 我显示在右下角，用来控制表格的分页 -->
<div>
    <a>首页</a>
    <a>1</a>
    <a>2</a>
    <a>...</a>
    <a>尾页</a>
</div>
{% endhighlight %}
当然上面的标签，和实际的可能会有些不一样，但是大致的布局就是这样，我想大家应该能够看明白了。

下面再介绍三个标签，是Datatables自己定义的，通过这三个标签，Datatables就可以任你摆布了

    1. < > - 这个尖括号就代表 html标签里的  <div></div>
    2. <"className" > - 代表添加了class的div  <div class="className"></div>
    3. <"#id" > - 代表添加了id的div <div id="id"></div>

认识了上面三个标签后，我们看看下面的代码（以Bootstrap css框架为例）：
{% highlight javascript linenos %}
    var table = $("#example").DataTable({
        "dom": "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                  "<'row'<'col-sm-12'tr>>" +
                  "<'row'<'col-sm-5'i><'col-sm-7'p>>"
    });
{% endhighlight %}

下面是最终的 html 代码：
{% highlight HTML linenos %}
 <div id="example_wrapper" class="dataTables_wrapper form-inline">
     <div class="row">
         <div class="col-sm-6">
             <div class="dataTables_length" id="example_length">
                 <label><select name="example_length" aria-controls="example" class="form-control input-sm">
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                 </select> records per page</label>
             </div>
         </div>
         <div class="col-sm-6">
             <div id="example_filter" class="dataTables_filter">
                 <label>Search:<input type="search" class="form-control input-sm" placeholder=""
                                      aria-controls="example"/></label>
             </div>
         </div>
     </div>
     <div class="row">
         <div class="col-sm-12">
             <table id="example" class="table table-striped table-bordered dataTable" role="grid"
                    aria-describedby="example_info" style="width: 1304px;">
                 <thead>
                 <tr role="row">
                     <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                         aria-label=": activate to sort column descending" aria-sort="ascending"
                         style="width: 27px;"></th>
                     <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                         aria-label="序号: activate to sort column ascending" style="width: 77px;">序号
                     </th>
                     <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                         aria-label="标题: activate to sort column ascending" style="width: 570px;">标题
                     </th>
                     <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                         aria-label="连接: activate to sort column ascending" style="width: 481px;">连接
                     </th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr role="row" class="odd">
                     <td class="sorting_1">1</td>
                     <td>1</td>
                     <td><a href="Online Program knowledge share and study platform" target="_blank">Online Program
                         knowledge share and study platform</a></td>
                     <td>http://www.gbtags.com/gb/index.htm</td>
                 </tr>
                 <tr role="row" class="even">
                     <td class="sorting_1">2</td>
                     <td>2</td>
                     <td><a href="Share Code Gbtags" target="_blank">Share Code Gbtags</a></td>
                     <td>http://www.gbtags.com/gb/listcodereplay.htm</td>
                 </tr>
                 <tr role="row" class="odd">
                     <td class="sorting_1">3</td>
                     <td>3</td>
                     <td><a href="Online live Gbtags" target="_blank">Online live Gbtags</a></td>
                     <td>http://www.gbtags.com/gb/gbliveclass.htm</td>
                 </tr>
                 </tbody>
                 <tfoot>
                 <tr>
                     <th rowspan="1" colspan="1"></th>
                     <th rowspan="1" colspan="1">序号</th>
                     <th rowspan="1" colspan="1">标题</th>
                     <th rowspan="1" colspan="1">连接</th>
                 </tr>
                 </tfoot>
             </table>
         </div>
     </div>
     <div class="row">
         <div class="col-sm-5">
             <div class="dataTables_info" id="example_info" role="status" aria-live="polite">
                 Showing 1 to 3 of 4 entries
             </div>
         </div>
         <div class="col-sm-7">
             <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
                 <ul class="pagination">
                     <li class="paginate_button previous disabled" aria-controls="example" tabindex="0"
                         id="example_previous"><a href="#">Previous</a></li>
                     <li class="paginate_button active" aria-controls="example" tabindex="0"><a href="#">1</a></li>
                     <li class="paginate_button " aria-controls="example" tabindex="0"><a href="#">2</a></li>
                     <li class="paginate_button next" aria-controls="example" tabindex="0" id="example_next"><a
                             href="#">Next</a></li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
{% endhighlight %}
哎呀，懵逼了，这么多，tm看不懂~~
我能理解，下面讲个简单点的。说之前需要让大家知道的是，不要想的很复杂，这真是一个简单的问题。

{% highlight javascript linenos %}
   var table = $('#example').DataTable( {
     "dom": '<"wrapper"flipt>'
   } );
{% endhighlight %}

这个应该很简单，起码 dom 指定的值只有一行，上面那个居然有三个，看着就晕，那么这个初始化代码被Datatables处理后是这样的：

{% highlight HTML linenos %}
  <div class="wrapper">
      {filter}
      {length}
      {information}
      {pagination}
      {table}
    </div>
{% endhighlight %}

这里就没有把具体的 html 都贴出了 ，`{filter}` 就是指的 具体的 html 代码 ，为了直观的演示，用这个代替表示

再看几个：

{% highlight javascript linenos %}
   var table = $('#example').DataTable( {
     "dom": '<lf<t>ip>'
   } );
{% endhighlight %}

处理后是这样的：

{% highlight HTML linenos %}
 <div>
      {length}
      {filter}
      <div>
        {table}
      </div>
      {information}
      {pagination}
 </div>
{% endhighlight %}

再来一个：

{% highlight javascript linenos %}
    var table = $('#example').DataTable( {
      "dom": '<"top"i>rt<"bottom"flp><"clear">'
    } );
{% endhighlight %}

结果如下：
{% highlight HTML linenos %}
  <div class="top">
      {information}
    </div>
    {processing}
    {table}
    <div class="bottom">
      {filter}
      {length}
      {pagination}
    </div>
    <div class="clear"></div>
{% endhighlight %}

看完这么多，我觉得应该是明白了，如果还不明白，我就只能回去重修语文课了（看不明白的一定要给我发邮件，不能眼睁睁看我的语文如此之差啊）

