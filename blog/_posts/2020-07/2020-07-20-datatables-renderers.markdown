---
layout: daily
title: DataTables使用入门-渲染器 Renderers 博客 DataTables中文网
short: DataTables使用入门-渲染器 Renderers
date: 2020-07-20
group: 2020-7
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,第二季视频]
author: DataTable中文网
---

本节为Datatables入门第二期 —— [《使用Datatables"武装"你的html表格》][index]的第四章，主要讲数据[渲染器][renderers]。

## 课程简介

在使用表格展示数据的时候，总有一些数据并不直接包含在数据源里，可能是需要做一些处理，又或许是需要几个字段拼接，又或者是通过几列数据计算得出一个总的结果。那么在Datatables里，把原始数据进行一些列的处理和转换这么一个过程叫做**渲染**。
<!--more-->

本节课程通过以下几个方面进行讲述：

- 渲染的方式
- Datatables内置的渲染辅助函数
- 自定义渲染辅助函数

学完本节课程可以解决哪些疑惑？

- 时间戳转变为可读
- 图片url显示出来
- 多列合并到一列显示
- 添加按钮
- 等等

正交在手，天下我有，配上渲染，所向披靡

## 课程视频

由于源码托管在github上，不方便传大文件，观看视频请加群20779435，视频在群文件里可以查阅，或者查看我的[Youtube频道][youtube]、[bilibili频道][bilibili]和[微博][weibo]在线播放

<iframe flag="bilibili" src="//player.bilibili.com/player.html?aid=626467464&bvid=BV1bt4y1X7JV&cid=214884319&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 课程代码

课程中所有代码都已经放在github上了，[点我查看][github]

最后，谢谢大家的支持，如有错误的地方还望指出，如果您还有其他的建议或要求，欢迎在下方留言


[youtube]: https://www.youtube.com/playlist?list=PLfl1Raz12t6s43Fb--qDoIsBPKHEme7FO
[bilibili]: https://space.bilibili.com/618644465/channel/detail?cid=133983
[github]: https://github.com/ssy341/datatables-season2/tree/master/example01
[index]: {{ site.baseurl }}/blog/2020/06/21/how-to-make-your-table-stronger.html
[weibo]: https://weibo.com/2957561617/profile?topnav=1&wvr=6&is_all=1
[renderers]: {{ site.baseurl }}/manual/data/renderers