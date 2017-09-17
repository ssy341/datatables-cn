---
layout: reference_md
title: orderFixed
summary: 排序始终作用于表格
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,orderFixed
author: /reference/option/orderFixed
---

## 描述(Description)
这个参数和{% include href/option/options/option.options param="order" %}参数同时生效，两者都是来初始化DataTables的排序操作，
然后用户可以通过点击表头来修改，而这个选择指定的顺序总是应用到表格中不管用户的操作。

这个固定的排序可以应用在用户标准排序的前面`pre` 和`post`之后，通过下面2中不同的形式（array or object）来描述。

用于描述排序条件的值以两个元素数组的形式给出：

- 列的索引，表示在那一列上排序
- 排序的方式，`asc` 升序排列，`desc`  降序排列

当然还可以在数组里嵌套数组来实现同时多列排序。

当你的列是隐藏的，而这列又必须首先排序（索引列，优先级列）或者是分组显示的列等一些情况，这个特性是非常有用的。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="array" %}
在排序之前加上。
当给定的是一个数组的时候，此参数给定的排序将会作用于标准排序之前，格式参考下面的例子

- {% include href/type.html param="object" %}
在排序之前或者之后加上。
当给定的一个对象，可以分别使用pre/post表示在标准排序之前还是之后。选项不是必选，因此你可以指定你仅需要的选项。
 
## 例子(Example)
第一列将会始终按照升序
{% highlight javascript linenos %}
$('#example').DataTable( {
    "orderFixed": [ 0, 'asc' ]
} );
{% endhighlight %}

和上面一样，换做对象的方式指定
{% highlight javascript linenos %}
$('#example').DataTable( {
    "orderFixed": {
        "pre": [ 0, 'asc' ]
    }
} );
{% endhighlight %}

第一列和第二列在标准排序后，始终按照升序排列
{% highlight javascript linenos %}
$('#example').DataTable( {
    "orderFixed": {
        "post": [[ 0, 'asc' ], [ 1, 'asc' ]]
    }
} );
{% endhighlight %}

同时指定 pre 和 post，在标准排序前，第一列始终按照升序排列，在标准排序后，第二列始终按照升序排列
{% highlight javascript linenos %}
$('#example').DataTable( {
    "orderFixed": {
        "pre": [ 0, 'asc' ],
        "post": [ 1, 'asc' ]
    }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/options/option.options param="order" %}
- {% include href/option/options/option.features param="ordering" %}
- {% include href/option/option.columns param="columns.orderable" %}
- {% include href/option/option.columns param="columns.orderData" %}

API

- {% include href/api/Core.html param="order()" %}
- {% include href/api/Core.html param="order.fixed()" %}