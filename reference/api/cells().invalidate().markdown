---
layout: reference_md
title: cells().invalidate()
summary: 失效被选中的多个单元格保持在DataTables内部数据中的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cells,invalidate
author: /reference/api/cells().invalidate()
---

## 描述(Description)
DataTables为了提高表格某些操作，比如排序和搜索，把单元格的数据进行缓存。但如果你想修改一个单元格的内容（表格为DOM数据源）或者数组、对象的值（表格为AJAX/JS数组数据源），
DataTables 是不会知道你做了修改。这个方法就是用来告诉DataTables重新从数据源读取数据。

{% include href/api/Cells.html param="cell().data()" %}，{% include href/api/Rows.html param="row().data()" %}两个方法可以修改单元格数据，相比下这两个方法比`invalidate`
更好，写更少的代码。但是`invalidate`方法最出色的是当表格的数据源是外部对象的时候，就可以用对象自己的方法来更新数据。

在之前，这个方法实际上会使所选单元格的整行的数据失效，但现在，这个方法只会让选中的单元格失效。


## 类型(Type)

---

### _function_ cells().invalidate( [ source ] )

#### 描述(Description):
使选定的多个单元格的数据失效

#### 参数(Parameters):
{% include_relative parameters/cell.invalidate.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
被选中单元格的Datatables API实例结果集

---

## 例子(Example)

使用jQuery修改单元格的内容，然后使DataTables保留的内部数据失效以保持一致
{% highlight javascript linenos %}
var table = $('#example').DataTable();
var td = $('#example tbody td:eq(0)');
 
td.html( 'Updated' );
table.cell( td ).invalidate().draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().data()" %}
- {% include href/api/Cells.html param="cells().render()" %}
- {% include href/api/Cells.html param="cell().data()" %}
- {% include href/api/Cells.html param="cell().invalidate()" %}
- {% include href/api/Cells.html param="cell().render()" %}
- {% include href/api/Rows.html param="rows().invalidate()" %}


