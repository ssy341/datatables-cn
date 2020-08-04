---
layout: reference_md
title: columns().visible()
summary: 获取/设置选择列的可见性
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,visible,api
author: /reference/api/columns().visible()
---

## 描述(Description)

在DataTables中显示和隐藏列非常方便，特别是当列比较多的大表格时。此方法允许即时改变多个列的可见性，或者获取多个列的可见性状态。

## 类型(Types)

### _function_ columns().visible()

#### 描述(Description):

获取选择列的可见性

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

API实例，结果里是根据选择器匹配的每一列列数据并且每个数据包含一个布尔值，这个布尔值为`true`表示列是可见的，`false`表示不可见


---


### _function_ columns().visible( show [, redrawCalculations ] )

#### 描述(Description):

设置选择列的可见性

#### 参数(Parameters):

{% include_relative parameters/column.visible.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

DataTables API 实例，包含被选择的列在结果集中。


--- 
    
## 例子(Example)

设置两列的可见性


{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
// Hide two columns
table.columns( [1,2] ).visible( false );
 
alert( 'Table\'s column visibility are set to: '+table.columns().visible().join(', ') );


{% endhighlight %}


隐藏所有包含class名为`detail`的列

{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
table.columns( '.detail' ).visible( false );

{% endhighlight %}


隐藏多列，使用`redrawCalculations`来提高性能

{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
table.columns( [ 0, 1, 2, 3 ] ).visible( false, false );
table.columns.adjust().draw( false ); // adjust column sizing and redraw

{% endhighlight %}



## 相关属性(Related)

下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().visible()" %}