---
layout: reference_md
title: column().header()
summary: 获取选择单个列的表头节点
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,header
author: reference/api/column().header()
---

## 描述(Description)
此方法可以获取（并因此修改）用于单个列的标题单元格。这个可能是{% include href/tags.html param="td" %}或者是{% include href/tags.html param="th" %}，具体取决于表的HTML。

返回的一个单元格是Datatables用来添加点击监听事件来排序操作。如果有多个单元格在表头（比如有多行），Datatables会用主要的表头单元格，这个由{% include href/Options.html param="orderCellsTop" %}来定义。

另外，如果{% include href/APIs.html param="column()" %}中使用的选择器与多个列匹配，则结果集将被截断为单个列，默认返回匹配到的第一个列。



## 类型(Type)
---
    
### _function_ **column().header()**   

#### 描述(Description):
获取单个列的表头{% include href/tags.html param="td" %}或者是{% include href/tags.html param="th" %}单元格。

#### 返回(Returns):
{% include href/type/Javascript.html param="node" %}
被选择列表头单元格


--- 
    
## 例子(Example)

点击表头弹框显示表头的名称：

{% include runcode.html param="column-header-example" %}
{: #column-header-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    var idx = table.cell( this ).index().column;
    var title = table.column( idx ).header();
 
    alert( 'Column title clicked on: '+$(title).html() );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().header()" %}

