---
layout: reference_md
title: columns.visible
summary: 允许或者禁止列的显示
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.visible
author: /reference/option/columns.visible
---

## 描述(Description)
DataTables通过 {% include href/api/Columns.html param="column().visible()" %}/ {% include href/api/Columns.html param="columns().visible()" %}
方法动态显示和隐藏列。此选项用来获取列的初始状态可见性，API方法取得该状态稍后更改列的状态。

这个选项可能会特别有用，在你的表中包含大量的列，并且希望用户能够控制他们可以看到那些列，或者表中的数据最终不能被看到的时候。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="boolean" %}


## 默认值(Default)
- Value ：`true`


## 例子(Example)
使用 {% include href/option/option.columns param="columnDefs" %} 设置第一列隐藏

{% highlight javascript linenos %}
$('#example').DataTable( {
    "columnDefs": [
        { "visible": false, "targets": 0 }
      ]
} );
{% endhighlight %}

使用 {% include href/option/option.columns param="columns" %} 配置
{% highlight javascript linenos %}
$('#example').DataTable( {
 "columns": [
     { "visible": false },
     null,
     null,
     null,
     null
   ] 
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="column().visible()" %}
- {% include href/api/Columns.html param="columns().visible()" %}

Options

- {% include href/option/options/option.features param="scrollX" %}
