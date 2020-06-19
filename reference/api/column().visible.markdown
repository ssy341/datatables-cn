---
layout: reference_md
title: column().visible
summary: 获取/设置选择列的可见性
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,visible,api
author: /reference/api/column().visible
---

## 描述(Description)

在DataTables中显示和隐藏列非常方便，特别是当列比较多的大表格时。此方法允许即时改变单个列的可见性，或者获取列的可见性状态。

## 类型(Type)

### _function_ column().visible()

#### 描述(Description):

获取选择列的可见性

#### 返回(Returns):

{% include href/type/Javascripts.html param="boolean" %}

`true`表示列是可见的，`false`表示不可见


---


### _function_ column().visible( show [, redrawCalculations ] )

#### 描述(Description):

设置选择列的可见性

#### 参数(Parameters):

{% include_relative column-visible-parameters-code.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DateTables.Api" %}

DataTables API 实例，包含被选择的列在结果集中。


--- 
    
## 例子(Example)

获取序号为0的列的可见性


{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
alert( 'Column index 0 is '+
    (table.column( 0 ).visible() === true ? 'visible' : 'not visible')
);

{% endhighlight %}


隐藏表格的第一列

{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
table.column( 0 ).visible( false );

{% endhighlight %}

隐藏多列，使用`redrawCalculations`来提高性能

{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
for ( var i=0 ; i<4 ; i++ ) {
    table.column( i ).visible( false, false );
}
table.columns.adjust().draw( false ); // adjust column sizing and redraw

{% endhighlight %}



## 相关属性(Related)

下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="columns().visible()" %}