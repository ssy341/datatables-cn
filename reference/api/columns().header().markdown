---
layout: reference_md
title: columns().header()
summary: 获取选择多个列的表头节点
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,header
author: /reference/api/columns().header()
---

## 描述(Description)

此方法可以获取（并因此修改）用于多个列的标题单元格。这个可能是{% include href/tags.html param="td" %}或者是{% include href/tags.html param="th" %}，具体取决于表的HTML。

返回的单元格是Datatables用来添加点击监听事件来排序操作，即与选择匹配的每一列都有一个单元格。如果有多个单元格在表头（比如有多行），Datatables会用主要的表头单元格，这个由{% include href/option/Options.html param="orderCellsTop" %}选项来定义。


## 类型(Type)

---
    
### _function_ **columns().header()**   

#### 描述(Description):
获取多个列的表头{% include href/tags.html param="td" %}或者是{% include href/tags.html param="th" %}单元格。

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}
Datatables API 实例，结果集包含被选择列表头的单元格


--- 
    
## 例子(Example)

从具有该类的多个列中移除该样式
{% highlight javascript %}
var table = $('#example').DataTable();
 
table
    .columns( '.highlight' )
    .header()
    .to$()
    .removeClass( 'highlight' );
{% endhighlight %}


点击表头弹框显示表头的名称：
{% include runcode.html param="columns-header-example" %}
{: #columns-header-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    var idx = table.cell( this ).index().column;
    var title = table.columns( idx ).header();
 
    alert( 'Column title clicked on: '+$(title).html() );
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().header()" %}

