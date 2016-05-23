---
layout: daily
title: Markdown语法介绍（针对DataTables中文网） 《不定时一讲》 DataTable中文网
short: Markdown语法介绍（针对DataTables中文网）
date: 2016-5-23
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---

> [Markdown语法说明](http://wowubuntu.com/markdown/)

今天讲 Markdown 的语法，希望通过这个让更多人了解到这个方便的工具，更好的为自己服务；
同时也希望更多志愿者愿意帮助 DataTables 中文网
越来越好，内容越来越精致，越来越充实，能真真切切的帮助到大家。

关于DataTables中文网里之前由于框架没有搭好，导致文档更新迟迟不能全部完成，一个是自己一个人确实时间有限，但又因为这个只能自己做，
所以就一直拖着。但是还是很感谢大家一直以来的支持，没有你们我也坚持不了。因该要早点是用 Markdown 来的，这样能减少很多事情，可以只关注内容，不需要关注其他的。

那么下面我就用 Markdown 这个引子给大家讲几个 DataTables 中文网上用到的语法

- 超链接
- 标题
- 引用
- 代码块

## 超链接

{% highlight javascript linenos %}
    这是一个 [an example](http://example.com/ "Title") 行内连接
    [This link](http://example.net/) 没有title属性
{% endhighlight %}

比较常用到的，写文章还是什么都可能会引用外部连接，上面的代码被解析后就变成下面的 html 代码：

     <p>这是一个<a href="http://example.com/" title="Title">an example</a> 行内连接</p>
     <p><a href="http://example.net/">This link</a> 没有title属性</p>

## 标题

html 里有6个等级的标题，对于爬虫来说，h1的权重最大，一般当做文章的主题，但是我们平时使用 h2 作为文章标题即可 ，毕竟h1还是太大了点
使用 Markdown 语法可以很方便的写出标题：
{% highlight javascript linenos %}
    # 这是 H1

    ## 这是 H2

    ###### 这是 H6
{% endhighlight %}
上面的代码解析为 html 后是下面这样的：

    <h1>这是 H1</h1>
    <h2>这是 H2</h2>
    <h6>这是 H6</h6>

可以看出有多个个#号就代表是那个标题

## 引用

在写文章的时候偶尔会引用别人的话，Markdown 利用一个很简单的符号即可完成

{% highlight javascript linenos %}
    > 我是引用内容
{% endhighlight %}

解析为 html 后是这样的：

    <blockquote>我是引用内容</blockquote>

## 代码块

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，或者用下面两个符号包起来也是可以的
{% highlight html linenos %}
`$("#example").DataTable({……});`
{% endhighlight %}

下面即为本篇文章的content部分，看着是不是很清爽，是不是比较简单？

{% highlight html %}

> [Markdown语法说明](http://wowubuntu.com/markdown/)

今天讲 Markdown 的语法，希望通过这个让更多人了解到这个方便的工具，更好的为自己服务；
同时也希望更多志愿者愿意帮助 DataTables 中文网
越来越好，内容越来越精致，越来越充实，能真真切切的帮助到大家。

关于DataTables中文网里之前由于框架没有搭好，导致文档更新迟迟不能全部完成，一个是自己一个人确实时间有限，但又因为这个只能自己做，
所以就一直拖着。但是还是很感谢大家一直以来的支持，没有你们我也坚持不了。因该要早点是用 Markdown 来的，这样能减少很多事情，可以只关注内容，不需要关注其他的。

那么下面我就用 Markdown 这个引子给大家讲几个 DataTables 中文网上用到的语法

- 超链接
- 标题
- 引用
- 代码块

## 超链接

    这是一个 [an example](http://example.com/ "Title") 行内连接
    [This link](http://example.net/) 没有title属性

比较常用到的，写文章还是什么都可能会引用外部连接，上面的代码被解析后就变成下面的 html 代码：

     <p>这是一个<a href="http://example.com/" title="Title">an example</a> 行内连接</p>
     <p><a href="http://example.net/">This link</a> 没有title属性</p>

## 标题

html 里有6个等级的标题，对于爬虫来说，h1的权重最大，一般当做文章的主题，但是我们平时使用 h2 作为文章标题即可 ，毕竟h1还是太大了点
使用 Markdown 语法可以很方便的写出标题：

    # 这是 H1

    ## 这是 H2

    ###### 这是 H6

上面的代码解析为 html 后是下面这样的：

    <h1>这是 H1</h1>
    <h2>这是 H2</h2>
    <h6>这是 H6</h6>

可以看出有多个个#号就代表是那个标题

## 引用

在写文章的时候偶尔会引用别人的话，Markdown 利用一个很简单的符号即可完成

    > 我是引用内容

解析为 html 后是这样的：

    <blockquote>我是引用内容</blockquote>

{% endhighlight %}

PS:由于中文网还使用了 [Jekyll](http://jekyllrb.com/ "Jekyll") 的代码高亮,所以代码块最终的显示可能和 Markdown 的会有所区别

