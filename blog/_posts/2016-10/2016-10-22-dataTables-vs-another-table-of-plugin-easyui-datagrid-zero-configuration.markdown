---
layout: daily
title: DataTables表格插件和其他表格插件比较之（DataTables VS EasyUI DataGrid）零配置 博客 DataTables中文网
short: DataTables表格插件和其他表格插件比较之（DataTables VS EasyUI DataGrid）零配置
date: 2016-10-22
group: 2016-10
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,DataTables VS EasyUI DataGrid]
author: DataTable中文网
banner: http://thepunkeffect.com/wp-content/uploads/2014/05/batman-vs-superman-poster-cavill-affleck.jpg
style: >
    <link rel="stylesheet" type="text/css" href="/js/datatables/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/easyui.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/icon.css">
    <link rel="stylesheet" type="text/css" href="/assets/easyui/color.css">
script: >
    <script type="text/javascript" src="/js/datatables/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/assets/easyui/jquery.easyui.min.js"></script>
    <script>
         $(function () {
                $('#example').DataTable();
         });
    </script>
---

一直以来都想写一个 DataTables 和其他表格插件对比的文章，告诉大家该如何选取一款表格插件来解决我们实际遇到的问题。今天
终于有这个机会和大家一起谈一谈各个表格插件之间的优劣。
<!--more-->

2012年的时候接触到 DataTables，那时的版本还是 `1.8` ，现在已经 `1.10` 了，说实话 DataTables 确实是一款比较强大的表格插件，
我对她情有独钟，也在很多情况下推荐别人使用这个表格插件。

不过今天的主角不再是 DataTables 一个了，今天我还要提到 EasyUI DataGrid。说到 EasyUI，大家可能都多多少少知道她，
曾经也是风靡一时的前端解决方案，集成了多个插件，给我们开发者带了福音，开发效率快了不少。

需要注意的是，今天不是要分清楚到底是 DataTables 强大还是 EasyUI DataGrid 厉害，只是告诉大家该怎么去选择一款适合自己的表格插件。
虽然我在标题里面加入了`vs`关键字，我不加，你们会点进来看么？哈哈，允许我任性一回。

下面开始正题吧，今天分以下几个部分谈谈两款插件

1. [初级入门](#section)
2. [感悟和建议](#section-1)
3. [讨论](#section-2)

---

- ## 初级入门



拿到一个插件首先要做的就是对着手册做出实例，看到效果，然后开始下一步工作。

我分别按照文档使用了两款插件，用最简单的代码实现一个"功能丰富"的表格


现在有如下的表格：
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

平时我们在开发的时候经常会有展示数据的功能，一般我们都会选择用`table`标签来处理，在配上css想有多漂亮就有多美丽。不过这下我们
的身份是菜鸟，我不懂css，也不太会js，做不出绚丽的表格，也不会处理数据分页，什么都不会。

这时候插件就该发挥这些优势了，先看 DataTables 是怎么把上面的表格变得漂亮和强大

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
            $('#example').DataTable();
        });
    </script>
{% endhighlight %}

运气不差的话你会看到如下效果：

---

{% include_relative dataTables-vs-dataGrid-DT-code.html %}

---

下面我们看看EasyUI DataGrid怎么把上面的表格变得漂亮和强大

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
{% endhighlight %}

第二步：给表格加上class和表头配置
{% highlight html linenos %}
<table class="easyui-datagrid">
    <thead>
        <tr>
            <th field="firstname">First Name</th>
            <th field="lastname" >Last Name</th>
            <th field="phone">Phone</th>
        </tr>
    </thead>
    ……
</table>
{% endhighlight %}

同样，运气不差的话你可以看到如下效果：

---

{% include_relative dataTables-vs-dataGrid-DG-code.html %}

---


- ## 感悟和建议


从上面的实际情况来看，如果只用最简代码，我们看看他们分别帮我们解决了什么问题。

**DataTables**：

 - 分页
 - 排序
 - 过滤
 - 表格信息显示
 - 表格分页数量控制
 - 鼠标移动高亮显示

**EasyUI DataGrid**：

 - 选中效果（多选）
 - 鼠标移动高亮显示
 
虽然 EasyUI DataGrid 用最简配置给我们的效果不是很好，但是不能否定它就不行，在这一次比较中，我觉得各有优点

比如：

 - EasyUI DataGrid 可以无js代码就初始化表格，只需要在table上加上相应的属性即可打开相应的功能，比较符合大部分人的想法，配置什么有什么
 - DataTables 零配置即添加了很多实用的功能，比较便捷，适合懒一点的程序员（偷笑）
 
从本次实际使用情况，我个人不能明确说那个好那个差，也没办法给大家意见，什么时候用DataTables或者EasyUI DataGrid。

- ## 讨论

本篇文章是这个系列中的第一篇，做个引子，我会逐步深入，从简单的的例子到复杂的例子，让大家看到两个插件是如何处理我们平时
需要的功能，从而选出适合自己的插件

同时也希望大家能给予支持，对本文有好的建议欢迎在下面留言，或者右下角的按钮反馈给我，我会认真采纳小伙伴的建议，给你们提供高质量的技术文章，帮助大家答惑解疑


> 参考：

> [DataGrid基本例子](http://www.jeasyui.com/demo/main/index.php?plugin=DataGrid&theme=default&dir=ltr&pitem=)

> [DataTables入门教程](http://datatables.club/manual/install.html)
 

