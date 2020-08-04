---
layout: reference_md
title: cells().indexes()
summary: 获取被选单元格的索引信息
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cells,indexes
author: /reference/api/cells().indexes()
---

## 描述(Description)

Datatables把row和列的数据存储在内部索引中，这样能快速执行排序，搜索等操作。有的时候了解这些索引是有用的，就像他能够被用来执行高效的选择器在{% include href/APIs.html param="rows()" %}，{% include href/APIs.html param="columns()" %}和其他使用选择器的API方法。

有用的是，此方法可还可以提供可见列的索引以及列数据索引，因此可以动态添加和删除document中的列。

从{% include href/APIs.html param="cells()" %}选择方法的结果里，每个单元格返回的数据结构如下：

```javascript
{
    "row":           integer, // Row index  行索引
    "column":        integer, // Column data index 列数据索引
    "columnVisible": integer  // Column visible index 列可见索引
}
```



## 类型(Type)

---
    
### _function_ **cells().indexes()**   

#### 描述(Description):
得到行，列和可见列索引信息

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api"%}
Datatables API 实例，结果集包含被选择单元格的索引信息

--- 
    
## 例子(Example)

获取单元格包含值`21`的所有单元格的索引

{% highlight javascript %}
var table = $('#example').DataTable();
 
var columns = table
    .cells( ':contains("21")' )
    .indexes()
    .pluck( 'column' )
    .sort()
    .unique();
 
alert( 'Columns containing 21: '+columns.join(', ') );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="cell().index()" %}
- {% include href/APIs.html param="rows().indexes()" %}
- {% include href/APIs.html param="columns().indexes()" %}
- {% include href/APIs.html param="column().index()" %}

