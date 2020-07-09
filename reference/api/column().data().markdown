---
layout: reference_md
title: column().data()
summary: 获取被选择单个列的单元格数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,data
author: /reference/api/column().data()
toc: true
---

## 描述(Description)
此方法用于从DataTables获取与选择器匹配的列中的单元格所使用的数据。

请注意，数据的顺序以及获取的行数据（过滤的行，显示的行等等）是由{% include href/api/Columns.html param="column()" %}选择器的{% include href/type/DataTables.html param="selector-modifier" %}选项决定。

另外，如果选择器在{% include href/api/Columns.html param="column()" %}方法里匹配到不止一列，结果会被截断，只会返回一条数据，即匹配到的第一条数据。




## 类型(Type)

---
    
### _function_ **column().data()**   

#### 描述(Description):

根据选择器获取列的数据

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api" %}
DataTables API实例，结果集中包含别选择列的单元格数据。是一个一维数组，每个条目都是所选列中单元格的数据。

--- 
    
## 例子(Example)


合计第4列数据的总和：

{% include runcode.html param="column-data-example" %}
{: #column-data-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();

alert( 'Column 3 sum: '+
    table
        .column( 3 )
        .data()
        .reduce( function (a,b) {
            return a + b;
        } );
);
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="columns().data()" %}

