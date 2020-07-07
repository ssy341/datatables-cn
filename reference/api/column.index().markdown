---
layout: reference_md
title: column().index()
summary: 获取被选择的单列的列索引
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,index
author: /reference/api/column().index()
---

## 描述(Description)
Datatables把行和列的数据存储在内部的索引中，为了快速排序，过滤等操作。有时候知道这些索引是有用的，因为他们可以用于{% include href/api/Rows.html param="row()" %},{% include href/api/Columns.html param="column()" %}和其他使用选择器的API方法中的有效选择器。

此方法用于检索所选列的索引。默认情况下，它将返回列数据索引（即不考虑列可见性），但如果将{% include href/string.html param="visible" %}作为第一个参数传入到方法，返回的索引将是可见列的索引（例如，如果隐藏了第一列，则随后的所有列的可见列索引都将移动1）

## 类型(Type)

---
    
### _function_ **column().index( [type] )**   

#### 描述(Description):
获取被选择的单列的列索引
     
#### 参数(Parameters):
{% include_relative parameters/column.index.html %}

#### 返回(Returns):
{% include href/type/Javascript.html param="integer" %}
被选则的单列的列索引

--- 
    
## 例子(Example)

隐藏第一列后，获取可见列的第一列的索引


{% include runcode.html param="column-index-example" %}
{: #column-index-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.column( 0 ).visible( false );
 
var idx = table.column( 1 ).index( 'visible' );
alert( idx ); // will show 0
{% endhighlight %}

---


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="columns().indexes()" %}

