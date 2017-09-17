---
layout: reference_md
title: orderCellsTop
summary: 控制表头(colspan rowspan 表头)的哪一个单元格可以应用于该列的排序响应
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.10
navcategory: option
keywords: option,orderCellsTop
author: /reference/option/orderCellsTop
---

## 描述(Description)
允许控制 DataTables 是否应该使用上面（true）或者下面（false - default）唯一的单元格来找到单个的列附加默认的排序监听器。
这个在复杂表头的应用中非常有用。

考虑下面 Html 表格头部的代码：
{% highlight html linenos %}
<thead>
    <tr>
        <td rowspan="2">1</td>
        <td>2.1</td>
    </tr>
    <tr>
        <td>2.2</td>
    </tr>
</thead>
{% endhighlight %}

在这个情况下，当 {% include href/option/options/option.options param="orderCellsTop" %} 是 `false`(默认)，单元格 
`1` 和 `2.2` 将会被监听排序事件。如果{% include href/option/options/option.options param="orderCellsTop" %}是
`true` 那么 `1` 和 `2.1` 将会被监听排序事件


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="boolean" %}

## 默认值(Default)
 - `false`
 
## 例子(Example)
在复杂表头中使用上面的单元格来监听排序事件
{% highlight javascript linenos %}
$('#example').DataTable( {
  "orderCellsTop": true
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/options/option.options param="order" %}
- {% include href/option/options/option.features param="ordering" %}

API

- {% include href/api/Core.html param="order()" %}
