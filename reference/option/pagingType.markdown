---
layout: reference_md
title: pagingType
summary: 分页按钮显示选项
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,pagingType
author: /reference/option/pagingType
---

## 描述(Description)
DataTables默认情况下会在表格下面显示一个分页控件（可以使用dom选项和额外的css更改其位置），用户可以使用这个导航按钮来操作表格翻页。

分页控件中显示的按钮由此处给出的选项定义。DataTables有6个内置的分页按钮布局：

- `numbers`  只显示数字 （1.10.8版本）
- `simple`  只有上一页和下一页两个按钮
- `simple_numbers`  上一页和下一页两个按钮，加上页数按钮
- `full`  首页，尾页，上一页和下一页四个按钮
- `full_numbers`  首页，尾页，上一页和下一页四个按钮,加上数字按钮
- `first_last_numbers`  首页，尾页两个按钮,加上数字按钮

可以使用插件添加更多的布局和特性。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 默认值(Default)
- Value ：`simple_numbers`
 
## 例子(Example)
显示首页，尾页，上一页和下一页四个按钮,加上数字按钮
{% highlight javascript linenos %}
$$('#example').DataTable( {
  "pagingType": "full_numbers"
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="dom" %}
- {% include href/Options.html param="paging" %}

API

- {% include href/APIs.html param="page()" %}
