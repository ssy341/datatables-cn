---
layout: reference_md
title: cells().nodes()
summary: 得到被选择的多个单元格的DOM元素
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: api,cells,nodes,DataTables
author: /reference/api/cells().nodes()
---

## 描述(Description)

此方法与{% include href/api/Cells.html param="cells" %}结合使用（因此可以使用各种选择器形式），获得所选多个单元格的DOM节点，对其进行直接操作。

## 类型(Type)


---

### _function_ **cells().nodes()**

#### 描述(Description):
得到被选择的多个单元格的DOM元素


#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}

DataTables API 实例，集合中包含选择器获得到的{% include href/tags.html param="td" %}/{% include href/tags.html param="th" %}多个单元格元素


--- 
    
## 例子(Example)

使用jQuery contains选择器选择包含内容Accountant单元格并给其添加一个样式

{% include runcode.html param="cells-nodes-example" %}
{: #cells-nodes-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
var cells = table
    .cells( ":contains('Accountant')" )
    .nodes();
 
$( cells ).addClass( 'warning' );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cell().node()" %}

