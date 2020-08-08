---
layout: reference_md
title: pageLength
summary: 改变初始化页长度（每页多少条数据）
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,pageLength
author: /reference/option/pageLength
---

## 描述(Description)
使用分页时，单页显示的数据条数

如果该参数是开启的，那么用户可以通过弹出（{% include href/Options.html param="lengthMenu" %}）的菜单设置每页显示的数据条数

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="integer" %}

## 默认值(Default)
- Value ：`10`
 
## 例子(Example)
默认每页显示50条数据
{% highlight javascript linenos %}
$$('#example').DataTable( {
   "pageLength": 50
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="lengthChange" %}
- {% include href/Options.html param="lengthMenu" %}
- {% include href/Options.html param="paging" %}

API

- {% include href/APIs.html param="page()" %}
- {% include href/APIs.html param="page.info()" %}
- {% include href/APIs.html param="page.len()" %}
