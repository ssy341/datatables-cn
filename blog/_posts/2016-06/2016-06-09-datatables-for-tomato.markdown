---
layout: daily
title: 番茄工作法（简单易行的时间管理方法）- DataTables实现(介绍篇) 博客 DataTables中文网
short: 番茄工作法（简单易行的时间管理方法）- DataTables实现(介绍篇)
date: 2016-6-9
group: 2016-6
caption: DataTables 中文网博客
categories: blog
tags: [博客,番茄工作法]
author: DataTables中文网
banner: http://i1.sinaimg.cn/edu/cr/2014/0228/3213211257.jpg
style: >
    <link rel="stylesheet" href="/js/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="/js/datatables/buttons.dataTables.min.css">
script: >
    <script src="/js/datatables/jquery.dataTables.min.js"></script>
    <script src="/js/datatables/dataTables.buttons.min.js"></script>
    <script src="/js/datatables/jszip.min.js"></script>
    <script src="/js/datatables/pdfmake.min.js"></script>
    <script src="/js/datatables/vfs_fonts.js"></script>
    <script src="/js/datatables/buttons.html5.min.js"></script>
    <script src="/js/datatables/buttons.print.min.js"></script>
    <script src="/js/datatables/buttons.flash.min.js"></script>
    <script src="/js/datatables/buttons.colVis.min.js"></script>
    <script src="/blog/js/tomato.js"></script>
---

![番茄工作法](http://i1.sinaimg.cn/edu/cr/2014/0228/3213211257.jpg)

> 谁不想活得轻松？谁不想妙计百出？谁不想与时俱进？谁不想享受假期？但要怎么实现呢？
频繁的中断、重复的活动、迫近的期限，常常使我们力不从心。
而这些压力又是最害人的：它们带来更多的压力、被迫行为、难以为继；
同时妨碍了我们自觉、专注、清醒的思考。
结果是心智游走在过去未来之间，只为找某个人、某件事来顶罪，掩盖我们虚构中的无能。 - 摘自《番茄工作法图解》

<!--more-->

发现自己总是拖拖拉拉，患有严重的拖延症，但我想改变这个状态，于是买了《番茄工作法图解》这本书，闲暇期间看看。

书内容不是很多，看完之后觉得还是有些帮助，至少会有意识的去告诉自己。

独乐乐不如众乐乐，做了一个 **番茄工作法DT版** (DTFT - DataTables For Tomato)

- 一是想把这个好的工作方法介绍给大家，帮助大家提高自己、改善自己。这个方法适合所有志在提高工作效率的人员，尤其是软件工作人员和办公人员
- 二是想顺便展示 DataTables 的功能 ，想说的是这个表格插件还是很给力的

下面这个例子我从5月18日开始已经放到首页，大家可能已经熟悉了，但是可能不知道具体用来做什么？下面就让我来揭开她的庐山真面目

---

{% include_relative datatables-for-tomato-code.html %}

---

先简单介绍下什么叫 **番茄工作法**

番茄工作法是一套简单的工具和流程，用以提升你个人和所在团队的生产力，从而做到：

- 减轻时间焦虑
- 提升集中力和注意力，减少中断
- 增强决策意识
- 唤醒激励和持久激励
- 巩固达成目标的决心
- 完善预估流程，精确地保质保量
- 改进工作学习流程
- 强化决断力，快刀斩乱麻

我自己实践了快一个月了，这个 DTFT 就是在这样的背景下完成的，虽然功能不多，也不复杂，
但是让我体会到番茄工作法的优越性。

我来说说具体怎么使用这个 DTFT :

- 首先把自己需要办的事情都添加到表格中，点击【添加事项】
    - 第一列：可选，事项重要程度
    - 第二列：事项名称，不用写很复杂，自己能看懂即可，推荐第一个词代表活动的主题类型，第二个词表达想要实现什么，比如：找个女朋友
    - 第三列：预计需要几个番茄钟（一个番茄钟=25分钟），如果暂时确定不了，可以先不填
    - 第四列：事项的类型，有 _今日待办_ _活动清单_ _杂项_ 三个选项
    - 第五列：背景颜色，类似记号笔的作用，用来强调这个事项的重要程度
    - 第六列：创建时间，自动生成
    - 第七列：操作按钮
    - ps：添加到活动清单的事项不一定是今天就要去做的，想到什么写什么
- 其次就把活动清单里的活动转变为今日待办，点击【编辑】图标，把类型改为今日待办，并预估需要多少个番茄钟。通常这个
  活动需要在一天开始工作之前完成这个今日待办，也就是早上完成这个事情。
- 最后就是一个一个消灭任务，领任务打怪了。点击【番茄】图标（其实是一个苹果，我没找到合适的，抱歉），开始进入工作状态，直到浏览器提示你

这里需要注意的是最后一个步骤，领任务打怪，看似简单的操作，对自己的 **自控力** 要求高，你只需要记住一点:“**一次只做一件事情**”。
在你点击番茄的那刻，接下来的25分钟里你需要专心致志去完成你写下的任务，然后时间到了，不管这个任务有没有完成都要停下来奖励自己。比如
站起来走动，去倒杯茶，看看窗外等等。

毕竟书的内容不是一两句话就能概括的，所以我只能说些大概，鉴于篇幅有限，这里就不多说了。

这里的 DTFT 实际只是引子，如果真正要实践**番茄工作法**只要一支笔和两张纸就可以，反倒不必用软件的方式，把一项本来简单的事情变得复杂。
如果你对这个也感兴趣，你可以购买这本书进行更加深入的学习，也欢迎在下方留言，讨论学习

下面是书样：

![番茄工作法图解-简单易行的时间管理方法](https://img3.doubanio.com/lpic/s4599081.jpg)

# Enjoy it！

