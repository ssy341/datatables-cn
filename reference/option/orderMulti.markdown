---
layout: reference_md
title: orderMulti
summary: 多列排序控制
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,orderMulti
author: /reference/option/orderMulti
---

## 描述(Description)
当排序功能（{% include href/Options.html param="ordering" %} 为true
）打开的时候，DataTables 默认是允许用户按住shift点击表头，多列排序。
虽然这个操作对用户来说是比较有用的，但同时也增加了表格处理数据的时间。因此，可以通过此选项来关闭多列排序的功能。

需要注意的是，即使禁用了多列排序，但是开发人员任然可以使用 
{% include href/Options.html param="columns.orderData" %}，
{% include href/Options.html param="order" %}和{% include href/api/Core.html param="order()" %}在代码里
实现多列排序，次禁用只是不允许用户来操作多列排序。



## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="boolean" %}

## 默认值(Default)
`true`
 
## 例子(Example)
禁用多列排序
{% highlight javascript linenos %}
$('#example').DataTable( {
  "orderMulti": false
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="order" %}
- {% include href/Options.html param="ordering" %}
- {% include href/Options.html param="columns.orderable" %}
- {% include href/Options.html param="columns.orderData" %}
- {% include href/Options.html param="orderFixed" %}

API

- {% include href/api/Core.html param="order()" %}
- {% include href/APIs.html param="column().order()" %}
- {% include href/APIs.html param="columns().order()" %}
