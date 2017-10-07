---
layout: reference_md
title: lengthMenu
summary: 更改页面显示条数的下拉框选项
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: lengthMenu,option
author: /reference/option/lengthMenu
---

## 描述(Description)
此选项能够指定显示分页长度`select`元素的下拉选项，它可以是：

- 整数值的一维数组，用于显示的选项和显示长度的值
- 二维数组，第一个数组用来作为长度的值，第二个数组用来作为显示的选项。这是很有用的，比如当你想显示“所有”选项

分页长度值必须的大于`0`，当为`-1`的时候，代表告诉DataTablse禁用分页（比如，显示所有数据）

注意{% include href/option/Options.html param="pageLength" %}属性将会自动设置为这个数组的第一个值


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="array" %}

## 默认值(Default)
`[ 10, 25, 50, 100 ]`


## 例子(Example)

显示选项10,25,50,75,100
{% highlight javascript linenos %}
$('#example').DataTable( {
  "lengthMenu": [ 10, 25, 50, 75, 100 ]
} );
{% endhighlight %}


显示选项10,25,50,所有
{% highlight javascript linenos %}
$('#example').DataTable( {
  "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "所有"] ]
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="page()" %}
- {% include href/api/Core.html param="page.info()" %}
- {% include href/api/Core.html param="page.len()" %}

Options

- {% include href/option/Features.html param="paging" %}
- {% include href/option/Features.html param="lengthChange" %}
- {% include href/option/Options.html param="pageLength" %}

