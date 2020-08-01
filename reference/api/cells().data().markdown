---
layout: reference_md
title: cells().data()
summary: 获取所选单元格的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cells,data
author: /reference/api/cells().data()
---

## 描述(Description)
此方法用于从{% include href/api/Cells.html param="cells()" %}方法的调用中使用的选择器获取的单元格中的数据。

注意，他与{% include href/api/Cells.html param="cell().data()" %}方法不一样，这个方法没有设置的功能，只能获取数据。


## 类型(Type)
---

### _function_ **cells().data()**   

#### 描述(Description):
获取所选单元格的数据

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api"%}

Datatables API 实例，在结果集里包含被选择的单元格的数据

--- 
    
## 例子(Example)

获取所有具有`info`类的单元格的数据：
{% highlight javascript %}
var table = $('#example').DataTable();
 
var data = table
    .cells( ".info" )
    .data();
 
console.log( data );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cell().data()" %}
- {% include href/api/Cells.html param="cells().render()" %}
