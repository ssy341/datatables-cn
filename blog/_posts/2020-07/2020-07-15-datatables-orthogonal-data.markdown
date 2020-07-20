---
layout: daily
title: DataTables使用入门-正交数据 Orthogonal data 博客 DataTables中文网
short: DataTables使用入门-正交数据 Orthogonal data
date: 2020-07-15
group: 2020-7
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,第二季视频]
author: DataTable中文网
hot: 1
---

本节为Datatables入门第二期 —— [《使用Datatables"武装"你的html表格》][index]的第三章，主要讲数据处理。

## 课程简介

数据是复杂的，数据表格的主要目的就是为了更好的呈现数据的展示。可以说数据如何展示，怎样看得懂，是我们的终极目标。<!--more-->比如一个货币数据，在数据库里可能就是`123456789`这样的数据，对于计算机来说这样的数据她很利于理解，可对于我们人的眼睛来说，如果加上一个千分位的分隔符是不是要更好一点呢？例如`123,456,789`，是不是就看着舒服些了？又如`￥123,456,789`，在数字前加上一个钱的符号，这样是不是又更加直观了呢？

其实在方便显示的同时，数据处理上就增加了一下复杂度。比如对于上面的数据，我们如何排序呢？又或者如何过滤呢？好在我们需要担心这个问题之前，作者就已经想到了，既要方便显示，又要方便处理，**正交数据**能解决我们今天要讨论的问题。

本节课将会介绍以下内容：

- 什么是正交数据
- 如何利用正交数据
    - 通过预定义的值
    - 通过函数处理
- HTML5`data-*`特性与正交数据的关系


学完本节课程，数据处理得心应手，数据显示锦上添花，敢问还有什么数据是你不能处理的？


## 课程视频

由于源码托管在github上，不方便传大文件，观看视频请加群20779435，视频在群文件里可以查阅，或者查看我的[Youtube频道][youtube]、[bilibili频道][bilibili]和[微博][weibo]在线播放

## 课程代码

课程中所有代码都已经放在github上了，[点我查看][github]

最后，谢谢大家的支持，如有错误的地方还望指出，如果您还有其他的建议或要求，欢迎在下方留言


[youtube]: https://www.youtube.com/playlist?list=PLfl1Raz12t6s43Fb--qDoIsBPKHEme7FO
[bilibili]: https://space.bilibili.com/618644465/channel/detail?cid=133983
[github]: https://github.com/ssy341/datatables-season2/tree/master/example01
[index]: {{ site.baseurl }}/blog/2020/06/21/how-to-make-your-table-stronger.html
[weibo]: https://weibo.com/2957561617/profile?topnav=1&wvr=6&is_all=1