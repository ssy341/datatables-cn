---
layout: reference_md
title: row.add()
summary: 给表格添加一条新的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,add,api,给表格添加一条新的数据
author: /reference/api/row.add()
---

## 描述(Description)

向表中添加新数据是能够动态控制Datatables内容的核心概念，并且此方法提供了执行此操作的能力。它将一次添加一行-如果要添加多行，请多次调用此方法，或者使用此方法的复数形式：{% include href/APIs.html param="rows.add()" %}。

添加的行要遵循应用于表的排序和搜索条件，这将确定新行在表中的位置和可见性。

此方法将在内部将数据添加到表中，但不会立马更新到表中可见表示是新添加的数据。为了更新表格显示，请使用{% include href/APIs.html param="draw()" %}方法，通过{% include href/APIs.html param="row.add()" %}方法返回的对象，链式操作即可，像这样`table.row.add( [ 1, 2, 3, 4 ] ).draw();`。这样做是为了使操作表格易于优化，可以在重绘之前添加多行数据。


## 类型(Type)
---
### _function_ **row.add( data )**   
---
#### 描述(Description):
向表中添加给定的数据

#### 参数(Parameters):
{% include_relative parameters/row.add.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API 实例，结果集中包含新添加的行

--- 
    
## 例子(Example)

添加一行新数据，然后重绘表格
{% include runcode.html param="row-add-example1" %}
{: #row-add-example1-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.row.add(["Datatables中文网","System Architect","Edinburgh", "21","2011/04/25","$3,120"]).draw();

table.search("Datatables中文网").draw();
{% endhighlight %}

---

添加一行新的数据，并获取新行数据的node节点，添加高亮显示
{% include runcode.html param="row-add-example2" %}
{: #row-add-example2-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
var rowNode = table
    .row.add(["Datatables中文网","System Architect","Edinburgh", "21","2011/04/25","$3,120"])
    .draw()
    .node();
 
$( rowNode )
    .css( 'color', 'red' )
    .animate( { color: 'black' } );
{% endhighlight %}

---

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="rows.add" %}

