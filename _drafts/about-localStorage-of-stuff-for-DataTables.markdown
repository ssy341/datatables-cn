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
banner: 
---

这是一个 {% include href/option/option.callbacks param="stateSave" %} 参数引发的一系列“惨案”。

为什么说又爱又恨？这要从很久很久以前说起……
<!--more-->

目录

1. [爱在哪里？](#section)
2. [恨在哪里？](#section-1)
3. [什么时候该使用这个参数？](#selector-modifier-)
4. [示例讲解](#)

---

- ## 爱在哪里？

说实在的，`stateSave` 这个还是 DataTables 一个比较好的功能，保存上次分页状态，数据上次排列顺序，上次条件过滤的结果……，
这些对于某些开发者来说无疑是非常棒的，所以能不爱吗？无法抗拒啊

{% highlight javascript linenos %}
    $(document).ready(function() {
        var t = $('#example').DataTable({
            "stateSave": true
        });
    });
{% endhighlight %}

在初始化的时候如上述代码，即可打开本地状态保存的功能。

- ## 恨在哪里？ 

正是因为他功能如此之强大，导致了其他“灵异事件”。
    
    - 怎么刷新了还是之前的结果？
    - 为什么我的过滤条件不起作用？
    - 这个排序怎么没效果？
    
类似的问题有很多，看到这样的问题我第一眼需要看的就是你代码里有没有加这个参数，如果你无意间加了这个参数，那么问题很简单，按照以下两步走：
    
    - 第一：去掉 `stateSave` 或者值赋值为 `false`
    - 第二：清空本地缓存

这样操作后，上面提到的问题就能解决。一般来说超过99%的类似问题都是因为不理解`stateSave`参数导致的。

从上面这些也反应了一个问题：
**知其然不知其所以然**，大家确实查询了资料、看了文档，但是只是照搬，没有弄清楚真正的意思，这样肯定会给自己带来不少麻烦。

### 这里告诉大家一个技巧，一般插件都有默认值、无参数的初始化方法，这是最基本的需求，而不是自己还要去加这样那样的参数。比如如下代码：

{% highlight javascript linenos %}
    $(document).ready(function() {
        var t = $('#example').DataTable();
    });
{% endhighlight %}

只要这样，DataTables 就可以渲染你的表格，给你的表格加上分页，排序，过滤。你如果还需要其他功能，通过查询文档再相应加上相关的属性。
我极力推荐以上做法，一是自己的代码很简洁，二是不会给自己添麻烦，三是遇到问题代码贴出去问题也能很快的解决。

PS：我还推荐大家把 [DataTables参数配置模板]({{site.url}}{% post_url 2016-05-12-all-options-of-features %}) 仔细看一遍



- ## 什么时候该使用这个参数？


- ## selector-modifier 选择器的应用
