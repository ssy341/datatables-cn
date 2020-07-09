---
layout: reference_md
title: columns().data()
summary: 获取被选择多个列的单元格数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,data
author: /reference/api/columns().data()
toc: true
---

## 描述(Description)
此方法用于从DataTables获取与选择器匹配的列中的单元格所使用的数据。

请注意，数据的顺序以及获取的行数据（过滤的行，显示的行等等）是由{% include href/api/Columns.html param="columns()" %}选择器的{% include href/type/DataTables.html param="selector-modifier" %}选项决定。


## 类型(Type)

---
    
### _function_ **columns().data()**   

#### 描述(Description):
根据选择器获取列的数据

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api" %}
DataTables API实例，结果集中包含别选择列的单元格数据。这是一个二维数组，其中每个列的顶级数组均由{% include href/api/Columns.html param="columns()" %}选择器匹配。


--- 
    
## 例子(Example)

从单个列中获取排序的唯一数据列表：

{% include runcode.html param="columns-data-example1" %}
{: #columns-data-example1-js }
{% highlight javascript %}
var table = $('#example').DataTable({
    dom:"<"#listData"><lftip>"
});
 
$('#listData').html(
    table
        .columns( 0 )
        .data()
        .eq( 0 )      // Reduce the 2D array into a 1D array of data
        .sort()       // Sort data alphabetically
        .unique()     // Reduce to unique values
        .join( '<br>' )
);
{% endhighlight %}

---

检查是否在列数据中有包含类名为.check的数据
{% highlight javascript %}
var table = $('#example').DataTable();
 
var idx = table
    .columns( '.check' )
    .data()
    .eq( 0 ) // Reduce the 2D array into a 1D array of data
    .indexOf( 'Yes' );
 
if ( idx === -1 ) {
    alert( 'Yes not found' );
}
else {
    alert( 'Yes was found' );
}
{% endhighlight %}




## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="column().data()" %}

