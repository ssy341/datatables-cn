---
layout: daily
title: DataTables表格插件和其他表格插件比较之（DataTables VS EasyUI DataGrid）高级应用  博客 DataTables中文网
short: DataTables表格插件和其他表格插件比较之（DataTables VS EasyUI DataGrid）高级应用
date: 2016-11-11
group: 2016-11
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验]
author: DataTable中文网
banner: 
---

DataTables中文网推出了
[第一篇]({{site.url}}/blog/2016/10/22/dataTables-vs-another-table-of-plugin-easyui-datagrid-zero-configuration.html)
关于DataTables和其他表格插件比较后，为了把让这个比较更有意义，更能帮助到大家，DataTables中文网
做了问卷调查，根据小伙伴们的填写我归纳了一下，一个表格插件关注点再以下三个部分基础、高级的和进阶三类：

基础
排序 分页 搜索 美观 合理的配置 

高级
单击和双击行事 选择高亮显示 增删改查 列宽拖动 导出 序号

进阶
支持的数据类型 行内编辑 合并单元格 自定义表头 高扩展性 易用的API 模块化

所以根据以上列出的这些功能点，DataTables中文网至少还会推出三篇文章来讲DataTables和DataGrid之间的“优劣”，从而选出适合自己的表格插件

由于我也是初次使用DataGrid，所以在某些方面可能还不能描述的很好，
如发现文章有说得不对或者可以改进的地方，希望您还能在文章下方或者通过右下角的反馈发表下自己的看法。如果本系列文章能帮助到小伙伴，
希望小伙伴能多多支持本站，多给DataTables中文网提建议，多宣传DataTables中文网。好了，我们进入正题吧。

前面一篇讲到了分别使用最简配置，使表格变得更强大，今天我们要讲的就是基础部分，对照API，Demo分别实现排序，分页，搜索，这三个基本功能。


