---
layout: daily
title: 关于 DataTables 本地储存那点事，又爱又恨 (stateSave参数应用)  博客 DataTables中文网
short: 关于 DataTables 本地储存那点事，又爱又恨 (stateSave参数应用)
date: 2016-9-30
group: 2016-9
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,不定时一讲]
author: DataTable中文网
banner: http://www.bhmpics.com/download/the_boxtrolls_movie_poster-1920x1080.jpg
---

这是一个{% include href/option/features.html param="stateSave" %}参数引发的一系列“惨案”。

为什么说又爱又恨？这要从很久很久以前说起……
<!--more-->

目录

1. [爱在哪里？](#section1)
2. [恨在哪里？](#section2)
3. [什么时候该使用这个参数？](#section3)
4. [示例讲解](#section4)
5. [总结](#section5)

---

- <h2 id="section">爱在哪里？</h2>

说实在的`stateSave` 这个还是 DataTables 一个比较好的功能，保存上次分页状态，数据上次排列顺序，上次条件过滤的结果……，
这些对于某些开发者来说无疑是非常棒的，所以能不爱吗？无法抗拒啊

{% highlight javascript linenos %}
    $(document).ready(function() {
        var t = $('#example').DataTable({
            "stateSave": true
        });
    });
{% endhighlight %}

在初始化的时候如上述代码，即可打开本地状态保存的功能。

- <h2 id="section2">恨在哪里？</h2>

正是因为他功能如此之强大，导致了其他“灵异事件”。
    
 - 怎么刷新了还是之前的结果？
 - 为什么我的过滤条件不起作用？
 - 这个排序怎么没效果？
 - ……
    
类似的问题有很多，看到这样的问题我第一眼需要看的就是你代码里有没有加这个参数，如果你无意间加了这个参数，那么问题很简单，按照以下两步走：
    
 - 第一：去掉 `stateSave` 或者值赋值为 `false`
 - 第二：清空本地缓存

这样操作后，上面提到的问题就能解决。一般来说超过99%的类似问题都是因为不理解`stateSave`参数导致的。

从上面这些也反应了一个问题：

**知其然不知其所以然**，大家确实查询了资料、看了文档，但是只是照搬，没有弄清楚真正的意思，这样肯定会给自己带来不少麻烦。

### 这里告诉大家一个技巧，一般插件都有默认值、无参数的初始化方法，这是最基本的需求，而不是自己还要去加这样或那样的参数。比如如下代码：

{% highlight javascript linenos %}
    $(document).ready(function() {
        var t = $('#example').DataTable();
    });
{% endhighlight %}

只要这样，DataTables 就可以渲染你的表格，给你的表格加上分页，排序，过滤。你如果还需要其他功能，通过查询文档再相应加上相关的属性。
我极力推荐这种做法，一是自己的代码很简洁，二是不会给自己添麻烦，三是遇到问题后，代码贴出去问题也能很快的被解决。

PS：我推荐大家把 [DataTables参数配置模板]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-features.html) 仔细看一遍，这样对DT的参数有个整体的把握，用起来会更得心应手



- <h2 id="section3">什么时候该使用这个参数？</h2>

知其然，还得知其所以然。弄清你需要到达什么样的目的，你就会去使用他。不过在使用之前，你得知道 `stateSave` 是什么意思？

**很简单，你可以简单理解为缓存。他可以缓存DT的所有状态。**

比如说有以下应用：
 - 保持翻页，比如当前翻到第4页，下次再打开的时候任然是第4页
 - 保持排列顺序，比如第二列是降序排列，下次再打开第二列仍是降序排列
 - 保持过滤条件，比如前一次输入的过滤条件是【DataTables中文网】，再次打开任然是按照此关键字来过滤数据
 - ……
当然不止我上面所提到的这些，大家可以天马行空，发挥自己的想象，没有做不到，只有想不到，做到做不到，试试就知道


- <h2 id="section4">示例讲解</h2>
下面通过具体的例子告诉大家 DT 究竟是怎么保存状态的

一个简单的例子演示了几个回调函数之间是怎么执行的，执行顺序如何？
{% highlight javascript linenos %}
$("#example").DataTable({
    //开启本地保存功能
    stateSave: true,
    //保存状态操作
    "stateSaveParams": function (settings, data) {
        console.log("stateSaveParams");
        
        //这里可以操作保存的数据，写上自己特定的逻辑
        //data.search.search = "";
    },
    "stateSaveCallback": function (settings, data) {
        console.log("stateSaveCallback");
        
        //DT默认保存的key值为DataTables_+表格id+页面名称
        localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data));

        // 你可以把这些数据保存在服务器上，上面的代码标识使用本地储存来存储这些数据
        /**$.ajax( {
                "url": "/state_save",
                "data": data,
                "dataType": "json",
                "type": "POST",
                "success": function () {}
            } );
         **/


    },

    //读取状态操作
    "stateLoadParams": function (settings, data) {
        console.log("stateSaveParams");

        //在读取数据的时候可以改变数据，根据自己逻辑来处理
        //data.search.search = "";

        //或者你可以直接禁用从缓存里读取数据，只要直接返回false即可
        //return false;
    },
    "stateLoadCallback": function (settings) {
        console.log("stateLoadCallback");
        return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance));

        //同样你还可以从服务器取数，采用同步的方式获取到保存在服务器里的数据
        /**var o;
         $.ajax( {
            "url": "/state_load",
            "async": false,
            "dataType": "json",
            "success": function (json) {
                o = json;
            }
        } );
         return o;**/

    },
    //状态加载完后执行的回调函数
    "stateLoaded": function (settings, data) {
        console.log("stateLoaded");

        //在这里你可以打印出保存的缓存数据
        //alert( 'Saved filter was: '+data.search.search );

    },
    "ajax": {
        "url": "/objects.txt"
    },
    "columns": [
        {"data": "name"},
        {"data": "position"},
        {"data": "salary"},
        {"data": "start_date"},
        {"data": "office"},
        {"data": "extn"}
    ],
    "language": {
        "lengthMenu": "每页_MENU_ 条记录",
        "zeroRecords": "没有找到记录",
        "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
        "infoEmpty": "无记录",
        "search": "搜索：",
        "infoFiltered": "(从 _MAX_ 条记录过滤)",
        "paginate": {
            "previous": "上一页",
            "next": "下一页"
        }
    },
    "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-4'><'col-xs-6'f>r>" +
    "t" +
    "<'row'<'col-xs-6'i><'col-xs-6'p>>"
});
{% endhighlight %}

执行顺序如下：

 保存
  - `stateSaveParams`
  - `stateSaveCallback`
  
 读取
  - `stateLoadParams`
  - `stateLoadCallback`
  - `stateLoaded`

PS：如果对此还有疑问的，大家可以clone下面提到的完整工程，自己试验最终的结果

下面的 JSON 数据为 DT 定义的格式，按照此要求来存储和读取表格的状态，达到缓存的效果。

{% highlight javascript linenos %}
{
    "time":   {number}               // 时间戳，状态创创建、修改的时间
    "start":  {number}               // 显示起始位置
    "length": {number}               // 每页显示的条数
    "order":  {array}                // 二维数组，用来描述那些列按照什么要求排序
    "search": {
        "search":          {string}  // 搜索条件
        "regex":           {boolean} // 是否支持正则表达式
        "smart":           {boolean} // 是否开启了智能搜索
        "caseInsensitive": {boolean} // 不区分大小写
    },
    "columns" [
        {
            "visible": {boolean}     // 列是否隐藏显示
            "search":  {             // 包含每列的单独搜索条件，格式和上面的一致
                "search":          {string}  // 搜索条件
                "regex":           {boolean} // 是否支持正则表达式
                "smart":           {boolean} // 是否开启了智能搜索
                "caseInsensitive": {boolean} // 不区分大小写
            }           
        },
        ……
    ]
}
{% endhighlight %}

再贴上一个实例的真实数据样例，完整的工程[点我](https://github.com/ssy341/datatabes_cn_example_curd_java)
{% highlight javascript linenos %}
{
  "time": 1475739393071,
  "start": 0,
  "length": 10,
  "order": [
    [
      5,
      "asc"
    ]
  ],
  "search": {
    "search": "Developer",
    "smart": true,
    "regex": false,
    "caseInsensitive": true
  },
  "columns": [
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    },
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    },
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    },
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    },
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    },
    {
      "visible": true,
      "search": {
        "search": "",
        "smart": true,
        "regex": false,
        "caseInsensitive": true
      }
    }
  ]
}
{% endhighlight %}
上面的数据表示当你下次重新刷新页面后，表格将显示如下描述所示：

 - 从第一条数据显示，每页显示10条数据
 - 第6列升序排列
 - 全局过滤条件为"Developer"，不支持正则，支持智能搜索，区分大小写
 - 六列都显示，没有单独的过滤条件
 
PS:在实际操作过程中，如果是多列同时排序 `order` 保存的数据如下：`[[5,"asc",0],[4,"desc",0]]` , 由于作者没有文档说明第三个
数字代表什么，我猜测这是用来确定排序优先级的参数，具体大家可以查看源码，作者是怎么解析第三个数字的

- <h2 id="section5">总结</h2>

说了这么多，大家可能终于明白了 `stateSave` 究竟是什么意思了。看完了这篇文章，大家同意这篇文章的标题里说的【又爱又恨】吗？