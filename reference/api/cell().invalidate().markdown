---
layout: reference_md
title: cell().invalidate()
summary: 失效被选中单个单元格保持在DataTables内部数据中的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cell,invalidate
author: /reference/api/cell().invalidate()
---

## 描述(Description)
DataTables为了提高表格某些操作，比如排序和搜索，把单元格的数据进行缓存。但如果你想修改一个单元格的内容（表格为DOM数据源）或者数组、对象的值（表格为AJAX/JS数组数据源），
DataTables 是不会知道你做了修改。这个方法就是用来告诉DataTables重新从数据源读取数据。

{% include href/api/Cells.html param="cell().data()" %}，{% include href/api/Rows.html param="row().data()" %}两个方法可以修改单元格数据，相比下这两个方法比`invalidate`
更好，写更少的代码。但是`invalidate`方法最出色的是当表格的数据源是外部对象的时候，就可以用对象自己的方法来更新数据。

在`DataTables 1.10.4`版本之前，这个方法会使整行失效，在`1.10.4`版本之后，这个方法只会让单元格失效。


## 类型(Type)

---

### _function_ cell().invalidate( [ source ] )

#### 描述(Description):
使选定单个单元格的数据失效

#### 参数(Parameters):
{% include_relative parameters/cell.invalidate.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
被选中单元格的Datatables API实例结果集

---

## 例子(Example)
使一个单元格里的内容+1然后使缓存的数据失效，然后重绘
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    this.innerHTML = parseInt( this.innerHTML ) + 1;
    table.cell( this ).invalidate().draw();
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().cache()" %}
- {% include href/api/Cells.html param="cells().data()" %}
- {% include href/api/Cells.html param="cells().render()" %}
- {% include href/api/Cells.html param="cells().invalidate()" %}
- {% include href/api/Cells.html param="cell().cache()" %}
- {% include href/api/Cells.html param="cell().data()" %}
- {% include href/api/Cells.html param="cell().render()" %}
- {% include href/api/Rows.html param="row().invalidate()" %}


