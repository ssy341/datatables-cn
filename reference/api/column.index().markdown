---
layout: reference_md
title: column.index()
summary: 在两种索引形式中转换
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,index
author: /reference/api/column.index()
toc: true
---

## 描述(Description)
当使用DOM数据源，通常会使用列的可见索引，因为这是DOM本来的信息（当一列通过DataTables隐藏时，它会完全从DOM移除，如果需要再次通过{% include href/APIs.html param="column().visible()" %}变得可见，可以重新插入）。然而，在处理表的原始数据时，通常需要使用列数据索引。这个方法就提供在两种索引形式之间的转换。


## 类型(Type)

---
    
### _function_ **column.index( type, index )**   

#### 描述(Description):
根据输入的列索引类型获取指定类型的列索引
     
#### 参数(Parameters):
{% include_relative parameters/column.index.type.html %}

#### 返回(Returns):
{% include href/Types.html param="integer" %}

已经计算的列索引


--- 
    
## 例子(Example)

点击列时，显示列索引信息

{% include runcode.html param="column-index-type-example" %}
{: #column-index-type-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.column( 0 ).visible( false );
 
$('#example tbody').on( 'click', 'td', function () {
    var visIdx = $(this).index();
    var dataIdx = table.column.index( 'fromVisible', visIdx );
 
    alert( 'Column data index: '+dataIdx+', and visible index: '+visIdx );
} );
{% endhighlight %}

---