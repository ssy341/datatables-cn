---
layout: daily
title: 高亮显示搜索结果 博客 DataTables中文网
short: 高亮显示搜索结果
date: 2014-10-22
group: 2014-10
caption: DataTables 中文网博客
categories: blog
tags: [博客,官方博客]
author: DataTables中文网
banner: /assets/blog/2014-10/2014-10-22-search-result-highlighting.png
---

使用搜索引擎得到结果后，关键字都会被高亮，便于我们快速找到自己想要的结果。

DataTables也可以利用 [jQuery plug-in for highlighting text](http://bartaz.github.io/sandbox.js/jquery.highlight.js)
插件实现搜索结果高亮显示，效果如下图
<!--more-->

![搜索结果高亮]({{page.banner}})

Highlight 插件有两个基本操作

    $().highlight() //高亮
    $().unhighlight() //取消高亮

那么只要监听DT的重绘方法（DT在执行排序，搜索之后都会执行重绘操作），即可实现高亮搜索结果

    $(document).ready( function () {
        //DT 实例化
        var table = $('#myTable').DataTable();

        // 监听 DT 的重绘事件
        table.on( 'draw', function () {
            //获得需要高亮的容器部分
            var body = $( table.table().body() );
            //如果之前有高亮把高亮部分去掉
            body.unhighlight();
            //根据搜索框里的关键字 高亮显示
            body.highlight( table.search() );
        } );
    } );


> 原文链接：[search-result-highlighting](https://datatables.net/blog/2014-10-22)
