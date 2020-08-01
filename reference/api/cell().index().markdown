---
layout: reference_md
title: cell().index()
summary: 获取被选择的单元格的索引信息
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cell,index
author: /reference/api/cell().index()
---

## 描述(Description)
DataTables 把行列的数据储存在内部索引里面，这个可以用来快速的执行排序和搜索等操作。当你使用{% include href/api/Rows.html param="row()" %}，{% include href/api/Columns.html param="column()" %}或者其他方法时，这个索引是很有用的。

并且这个方法提供了列数据索引还有可见列索引，同时还可以动态从DOM中添加和删除列。

使用 {% include href/api/Cells.html param="cell()" %} 方法获取的单元格返回的数据结构如下
{% highlight javascript linenos %}
{
    "row":           integer, // Row index
    "column":        integer, // Column data index
    "columnVisible": integer  // Column visible index
}
{% endhighlight %}


## 类型(Type)

---

### _function_ cell().index()

#### 描述(Description):
获取行、列、可见列索引信息

#### 返回(Returns):

{% include href/type/Javascript.html param="object"%}
被选中单元格索引信息数据，参考上面的数据格式

---

## 例子(Example)
点击单元格时，alert显示列索引
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    alert( 'Clicked on cell in visible column: '+table.cell( this ).index().columnVisible );
} );
{% endhighlight %}

点击单元格，使用行的索引添加样式
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    var rowIdx = table
        .cell( this )
        .index().row;
 
    table
        .rows( rowIdx )
        .nodes()
        .to$()
        .addClass( 'clicked' );
} );
{% endhighlight %}





## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().indexes()" %}
- {% include href/api/Rows.html param="row().index()" %}
- {% include href/api/Columns.html param="column().index()" %}
- {% include href/api/Columns.html param="column.index()" %}


