---
layout: daily
title: DataTables VS EasyUI DataGrid 基础应用  博客 DataTables中文网
short: DataTables VS EasyUI DataGrid 基础应用
date: 2016-11-11
group: 2016-11
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,DataTables VS EasyUI DataGrid]
author: DataTable中文网
banner: http://media.comicbook.com/2016/04/doctor-strange-city-bending-179855.jpeg
style: >
    <link rel="stylesheet" type="text/css" href="/js/datatables/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/easyui.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/icon.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/color.css">
    <style>
        /*可以隐藏的广告css样式*/
        .adsense_fixed {
            width: 100%;
            z-index: 999999999999;
        }
        
        .adsense_content {
            width: 720px;
            margin: 0 auto;
            position: relative;
            background: #fff;
        }
        
        .adsense_btn_close, .adsense_btn_info {
            font-size: 12px;
            color: #fff;
            height: 20px;
            width: 20px;
            vertical-align: middle;
            text-align: center;
            background: #000;
            top: 4px;
            left: 4px;
            position: absolute;
            z-index: 99999999;
            font-family: Georgia;
            cursor: pointer;
            line-height: 18px
        }
        
        .adsense_btn_info {
            left: 26px;
            font-family: Georgia;
            font-style: italic
        }
        
        .adsense_info_content {
            display: none;
            width: 260px;
            height: 220px;
            position: absolute;
            top: -270px;
            background: rgba(255, 255, 255, .9);
            font-size: 14px;
            padding: 20px;
            font-family: Arial;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 26px -2px rgba(0, 0, 0, .3);
            -moz-box-shadow: 0 1px 26px -2px rgba(0, 0, 0, .3);
            box-shadow: 0 1px 26px -2px rgba(0, 0, 0, .3)
        }
        
        .adsense_info_content:after {
            content: '';
            position: absolute;
            left: 25px;
            top: 100%;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #fff;
            clear: both
        }
        
        .adsense_info_content .adsense_h3 {
            color: #000;
            margin: 0;
            font-size: 18px !important;
            font-family: 'Arial' !important;
            margin-bottom: 20px !important;
        }
        
        .adsense_info_content .adsense_p {
            color: #888;
            font-size: 13px !important;
            line-height: 20px;
            font-family: 'Arial' !important;
            margin-bottom: 20px !important;
        }
        
        .adsense_fh5co-team {
            color: #000;
            font-style: italic;
        }
    </style>
script: >
    <script type="text/javascript" src="/js/datatables/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/assets/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/assets/easyui/datagrid-filter.js"></script>
    <script>
         //广告显示/隐藏
         $(function () {
             $('.adsense_btn_close').click(function () {
                 $(this).closest('.adsense_fixed').css('display', 'none');
             });
     
             $('.adsense_btn_info').click(function () {
                 var addDiv = $(this).parent().find("div.adsense_info_content");
                 if (addDiv.is(':visible')) {
                     addDiv.css('display', 'none');
                 } else {
                     addDiv.css('display', 'block');
                 }
             });
         });
         $(function () {
             $('#example').DataTable({
                 columns:[
                     {data:"firstname"},
                     {data:"lastname"},
                     {data:"phone"}
                 ]
             });
         
         
                var dg = $('#dataGrid').datagrid({
                     //开启分页
                     pagination: true,
                     //默认是服务器排序，这里需要手动关闭，切换为客户端排序
                     remoteSort: false,
                     //单条选择模式
                     singleSelect: true,
                     //配置
                     columns: [[
                         {field: 'firstname', title: "first_name", sortable: true},
                         {field: 'lastname', title: "last_name", sortable: true},
                         {field: 'phone', title: "phone", sortable: true}
                     ]]
                 });
         
                 //开启过滤
                 dg.datagrid('enableFilter');
           });
    </script>
---


DataTables中文网推出了
[第一篇]({{site.wlan_url}}/blog/2016/10/22/dataTables-vs-another-table-of-plugin-easyui-datagrid-zero-configuration.html)
关于DataTables和其他表格插件比较后，为了把让这个比较更有意义，更能帮助到大家，DataTables中文网
做了问卷调查，根据小伙伴们的填写我归纳了一下，一个表格插件关注点在以下三个部分基础、高级的和进阶：
<!--more-->

- 基础
  - 排序 
  - 分页 
  - 搜索
  - 美观
  - 合理的配置 

- 高级
  - 单击和双击行事
  - 选择高亮显示
  - 增删改查
  - 列宽拖动
  - 数据导出
  - 添加序号

- 进阶
   - 支持的数据类型
   - 行内编辑
   - 合并单元格
   - 自定义表头
   - 高扩展性
   - 易用的API
   - 模块化


所以根据以上列出的这些功能点，DataTables中文网至少还会推出三篇文章来讲DataTables和DataGrid之间的“优劣”，
从而帮助大家选出适合自己的表格插件。

由于我也是初次使用DataGrid，所以在某些方面可能还不能描述的很好，
如发现文章有说得不对或者可以改进的地方，希望您还能在阅读完文章后在下方或者通过右下角的反馈发表下自己的看法。
如果觉得本系列文章能帮助到小伙伴们，
希望小伙伴能多多支持本站，多给DataTables中文网提建议，多宣传DataTables中文网。

说之前插播一个广告

{% include ad/hiddenable.html %}

好了，我们进入正题吧。


前面一篇讲到了分别使用最简配置，使表格变得更强大，今天我们要讲的就是基础部分，
对照API，Demo分别实现排序，分页，搜索，这三个基本功能。

1. [DataTables实现排序，分页，搜索](#datatables)
2. [DataGrid实现排序，分页，搜索](#datagrid)
3. [讨论](#section)

---

- <h2 id="datatables">DataTables实现排序，分页，搜索</h2>

对于DataTables，其实之前的例子中已经做完了这个步骤，因为默认就开启了这部分功能，还是直接看代码吧

和之前一样，有如下表格：
{% highlight html linenos %}
<table>
       <thead>
           <tr>
               <th>Code</th>
               <th>Name</th>
               <th>Price</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>001</td><td>name1</td><td>2323</td>
           </tr>
           <tr>
               <td>002</td><td>name2</td><td>4612</td>
           </tr>
           <tr>
               <td>003</td><td>name3</td><td>4612</td>
           </tr>
           <tr>
               <td>004</td><td>name4</td><td>4612</td>
           </tr>
           <tr>
               <td>005</td><td>name5</td><td>4612</td>
           </tr>
           <tr>
               <td>006</td><td>name6</td><td>4612</td>
           </tr>
           <tr>
               <td>007</td><td>name7</td><td>4612</td>
           </tr>
           <tr>
               <td>008</td><td>name8</td><td>4612</td>
           </tr>
           <tr>
               <td>009</td><td>name9</td><td>4612</td>
           </tr>
           <tr>
               <td>010</td><td>name10</td><td>4612</td>
           </tr>
           <tr>
               <td>011</td><td>name11</td><td>4612</td>
           </tr>
       </tbody>
</table>
{% endhighlight %}

第一步：引入 DataTables 的js和css
{% highlight html linenos %}
 <!--样式文件-->
 <link rel="stylesheet" type="text/css" href="plugin/datatables/jquery.dataTables.min.css">
 <!--jquery js-->
 <script src="plugin/datatables/jquery.js"></script>
 <!--DataTables 核心 js-->
 <script src="plugin/datatables/jquery.dataTables.min.js"></script>
{% endhighlight %}

第二步：给表格加上id
{% highlight html linenos %}
<table id="example" class="display">
     ……
</table>
{% endhighlight %}

第三步：初始化
{% highlight javascript linenos %}
<script>
    $(function () {
        $('#example').DataTable({
            columns:[
                {data:"firstname"},
                {data:"lastname"},
                {data:"phone"}
            ]
        });
    });
</script>
{% endhighlight %}

只需简单的一行代码，DataTables就会帮你把表格配备上排序，翻页，快速过滤。这次的代码比之前的要多了列配置，本次先卖个关子，
后面再告诉大家为什么要这样配置？

---

{% include_relative dataTables-vs-dataGrid-round2-DT-code.html %}

---

- <h2 id="datagrid">DataGrid实现排序，分页，搜索</h2>

不多说，还是来看看DataGrid是怎么实现的。在做DataGrid的时候我花了些时间，用起来不那么熟练，遇到了许多问题，不过通过在网上搜索
最终解决了问题，只是翻页还是有点小bug，需要点击下排序之后，翻页才正常，如果小伙伴你知道怎么解决希望您能告诉我

第一步：引入 EasyUI DataGrid 的js和css
{% highlight html linenos %}
 <!--核心样式文件-->
 <link rel="stylesheet" type="text/css" href="/assets/easyui/easyui.css">
 <!--图标css-->
 <link rel="stylesheet" type="text/css" href="/assets/easyui/icon.css">
 <!--颜色样式-->
 <link rel="stylesheet" type="text/css" href="/assets/easyui/color.css">
 <!--核心js-->
 <script type="text/javascript" src="/assets/easyui/jquery.easyui.min.js"></script>
 <!--开启过滤需要引入的js-->
 <script type="text/javascript" src="/assets/easyui/datagrid-filter.js"></script>
{% endhighlight %}

第二步：使用js代码初始化DataGrid
{% highlight javascript linenos %}
var dg = $('#dataGrid').datagrid({
    /**开启分页*/
    pagination: true,
     /**默认是服务器排序，这里需要手动关闭，切换为客户端排序*/
    remoteSort: false,
     /**单条选择模式*/
    singleSelect: true,
     /**配置*/
    columns: [[
        /**sortable：true 开启排序*/
        {field: 'firstname', title: "first_name", sortable: true},
        {field: 'lastname', title: "last_name", sortable: true},
        {field: 'phone', title: "phone", sortable: true}
    ]]
});

 /**开启过滤*/
dg.datagrid('enableFilter');
{% endhighlight %}

效果如下：

---

{% include_relative dataTables-vs-dataGrid-round2-DG-code.html %}

---

- <h2 id="section">讨论</h2>

可能我是初接触DataGrid，所以在做这个例子的时候显的有些费力，虽然不是难的功能，作为初学者我觉得DataGrid还是比较难入手。
但回过头来想想，我最开始使用DataTables的时候不也是这样费力么？开玩笑了，大家不要当真。

说说我对这篇文章的感谢，总的来说两款表格插件表现都不错，功能都能实现，只要对着文档，还是能够做出来。同时也分享下一个经验，
我觉得实用于所有的插件：

- 首先，学习或者说使用一个插件首先去查看Demo，我的做法是把作者提供的所有Demo浏览一遍，知道这个插件他能做什么
- 其次，根据自己的情况，结合Demo做出属于自己的示例
- 再次，查阅API文档，弄清楚各个参数的含义及用法
- 最后，应用到项目中去

> 参考：

> [DataGrid服务器排序列子](http://www.jeasyui.com/tutorial/datagrid/datagrid8.php)

> [DataGrid内容过滤](http://www.jeasyui.com/extension/datagrid_filter.php)

> [DataGrid增加分页](http://www.jeasyui.com/tutorial/datagrid/datagrid2.php)
 

