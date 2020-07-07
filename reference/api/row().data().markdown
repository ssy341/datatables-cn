---
layout: reference_md
title: row().data()
summary: 获取/设置选中行的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables
author: /reference/api/row().data()
---

## 描述(Description)

该方法用来获取{% include href/api/Rows.html param="row()" %}选择器选中行的数据。它可以获取行的数据，或者给行设置新的数据。

需要注意的是，当作为设置方法时，该方法设置的数据会应用到表格中，但是他不会更新表格内部数据对象缓存，除非你再调用 {% include href/api/Core.html param="draw()" %} 方法来触发触发这个操作。
比如像这样 `table.row( 0 ).data( newData ).draw();` 。 这样操作是为了使表易于优化，在重绘表之前，可以做更多的操作。



## 类型(Type)

---

### _function_ row().data()

#### 描述(Description):

获取被选中行的数据

#### 返回(Returns):

{% include href/type/Javascript.html param="array" %}，{% include href/type/Javascript.html param="object" %}

行的数据源对象。如果使用的是DOM数据源，结果将会是一个数组，如果是非DOM数据源则返回的是数组、对象、实例。

---


### _function_ row().data(d)

#### 描述(Description):

给被选中行设置新的数据

#### 参数(Parameters):

{% include_relative parameters/row.data.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}

DataTables API 实例对象，其中结果集中的数据是row选择器范围内的


---

## 例子(Example)

当点击单行的时候获取数据

{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'tr', function () {
    console.log( table.row( this ).data() );
} );
{% endhighlight %}


当点击行是，增加counter的计数

{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'tr', function () {
    var d = table.row( this ).data();
     
    d.counter++;
 
    table
        .row( this )
        .data( d )
        .draw();
} );
 
// Note that row().invalidate() could also be used for this example case

{% endhighlight %}

更新所有行的数据，等操作完成后重绘表格

{% highlight javascript linenos %}

var table = $('#example').DataTable();
 
table.rows().every( function () {
    var d = this.data();
 
    d.counter++; // update data source for the row
 
    this.invalidate(); // invalidate the data DataTables has cached for this row
} );
 
// Draw once all updates are done
table.draw();

{% endhighlight %}




## 相关属性(Related)

下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Rows.html param="rows().data()" %}
- {% include href/api/Cells.html param="cell().data()" %}