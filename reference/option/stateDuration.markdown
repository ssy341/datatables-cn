---
layout: reference_md
title: stateDuration
summary: 状态保存有效期
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,stateDuration
author: /reference/option/stateDuration
---

## 描述(Description)
在有效期时间内，状态一直有效，过了这个时间之后，恢复到默认状态。

这个选项还可以用来指明是使用`localStorage`还是`sessionStorage`，当为-1的时候使用`sessionStorage`，当为0或者更大的数字的时候使用
`localStorage`。

这两个存储API的区别在于，`sessionStorage`仅保留当前会话的数据（ie.当前的浏览器窗口）。更多关于的信息，参考 
[Mozilla Storage documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage)

请注意，该值以秒为单位。0 是一个特殊的值，表示可以无限期的储存和检索已经存在的对象。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="integer" %}

## 默认值(Default)
- Value ：`7200`
 
## 例子(Example)
设置有效期时间为1天
{% highlight javascript linenos %}
$('#example').DataTable( {
   "stateSave": true,
    "stateDuration": 60 * 60 * 24
 } );
{% endhighlight %}

使用`sessionStorage`
{% highlight javascript linenos %}
$('#example').DataTable( {
   "stateSave": true,
     "stateDuration": -1
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/features.html param="stateSave" %}
