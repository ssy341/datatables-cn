---
layout: daily
title: DataTables使用入门-服务端处理 ServerSide Processing 博客 DataTables中文网
short: DataTables使用入门-服务端处理 ServerSide Processing
date: 2020-09-07
group: 2020-9
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验,第二季视频]
author: DataTable中文网
hot: 1
---

本节为Datatables入门第二期 —— [《使用Datatables"武装"你的html表格》][index]的第十章，主要讲Datatables的[服务端处理][serverside]，即Datatables如何处理大数据量表格数据。

## 课程简介
---

大量数据的表格在日常开发中也是很常见的。对于海量数据的显示，我们不能直接使用一次性加载所有数据到前端的方式，这样不仅需要很长的等待时间，对服务器和浏览器也会造成很大的压力，而且用户体验及其不友善。为了解决海量数据的加载，提高用户体验，我们需要使用物理分页，数据分批读取到前端。

<!--more-->

Datatables提供了对大量数据读取的方案，每一页数据可以单独去请求服务器，包括排序，过滤这些全部移交到服务器处理，而不是像客户端模式那样，所有的数据操作都在浏览器完成。

本节课程通过以下几个方面进行讲述：

- 什么是客户端模式？
- 什么是服务器模式？
- 如何使用服务模式？
- 需要请求那些参数？
- 返回数据以及必要的属性

学完本节课程可以解决哪些疑惑？

- 如何处理海量的表格数据交给前端显示

## 课程视频
---

由于源码托管在GitHub上，不方便传大文件，观看视频请加群20779435，视频在群文件里可以查阅，或者查看我的[bilibili频道][bilibili]、[Youtube频道][youtube]和[微博视频][weibo]在线播放

<iframe flag="bilibili" src="//player.bilibili.com/player.html?aid=712053760&bvid=BV13D4y1o7tk&cid=233537029&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


## 课程代码
---

课程中所有代码都已经放在GitHub上了，[点我查看][github]

最后，谢谢大家的支持，如有错误的地方还望指出，如果您还有其他的建议或要求，欢迎在下方留言


[youtube]: https://www.youtube.com/playlist?list=PLfl1Raz12t6s43Fb--qDoIsBPKHEme7FO
[bilibili]: https://space.bilibili.com/618644465/channel/detail?cid=133983
[github]: https://github.com/ssy341/datatables-serverside-java-spring-boot
[index]: {{ site.baseurl }}/blog/2020/06/21/how-to-make-your-table-stronger.html
[weibo]: https://weibo.com/2957561617/profile?topnav=1&wvr=6&is_all=1
[serverside]: {{ site.baseurl }}/manual/server-side