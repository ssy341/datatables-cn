---
layout: reference_md
title: orderClasses
summary: 高亮显示表格中排序的列
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,orderClasses
author: /reference/option/orderClasses
---

## 描述(Description)
DataTables高亮被排序的列，是通给该列的所有单元格加上一个class。分别是 `sorting_1` ，`sorting_2` 和`sorting_3` 。
整数表示多列排序时给不同的列分别标记上，如果超过了3列被排序，则重复`sorting_3` 这个。

需要注意的是，特别是在低版本的浏览器下，一页显示很多数据，然后需要操作大批量的dom元素，这个特性会影响性能。
因此，当你使用的是低版本的浏览器或者有大量数据的时候，你可以使用这个选项来关闭此特性。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="boolean" %}

## 默认值(Default)
 true
 
## 例子(Example)
禁用列排序类
{% highlight javascript linenos %}
$$('#example').DataTable( {
   "orderClasses": false
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Options.html param="order" %}
- {% include href/option/Features.html param="ordering" %}

API

- {% include href/api/Core.html param="order()" %}