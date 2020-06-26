---
layout: reference_md
title: data()
summary: 获取表格的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: data,api
author: /reference/api/data()
---


## 描述(Description)
该方法提供获取当前API上下文每行的原始数据。结果集包含原始数据（无论是数组还是对象），每行由API结果集中的条目定义。行的顺序就是行数据索引（即数据最初读入表的顺序）。

如果你要修改的数据包含在返回的数组中，确保你使用了{% include href/api/Rows.html param="rows().invalidate()" %},{% include href/api/Rows.html param="row().invalidate()" %}或者任何其他失效的方法来让DataTables注意到更改并且重新读取数据源。

请注意{% include href/api/Rows.html param="rows().data()" %}方法可以完全访问该数据，为了更灵活的获取数据，还可以通过{% include href/type/DataTables.html param="selector-modifier" %}选项对对象结果集进行排序，分页和搜索修改。例如`rows({'order':'index'}).data()`和`rows().data()`完全相同-两者都是数据索引顺序，然而`rows().data()`
将会返回全部的结果集，而`rows({'order':'index'}).data()`取决于当前显示顺序（由{% include href/api/Core.html param="order()" %}定义）

## 类型(Type)
这个选项能够接受以下类型的参数：

---
### _function_ **data()**   
---

#### 描述(Description):
以行索引顺序检索整个表的数据

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}

包含表格中每行的数据的结果集的DataTables API实例

--- 
    
## 例子(Example)

显示多少条数据在表格中
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
alert( '有'+table.data().length+' 条数据在表格中' );
{% endhighlight %}

修改数据，然后使数据失效，再重绘表格
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
//在每一行增加一个计数器
table.data().each( function (d) {
    d.counter++;
} );
 
// 失效所有行并且重绘
table.rows().invalidate().draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="clear()" %}
- {% include href/api/Rows.html param="row.add()" %}
- {% include href/api/Rows.html param="rows.add()" %}

