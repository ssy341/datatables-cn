---
layout: reference_md
title: cell().node()
summary: 得到被选择的单个单元格的DOM元素
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: api,cell,node,DataTables
author: /reference/api/cell().node()
---

## 描述(Description)

此方法与{% include href/api/Cells.html param="cell" %}结合使用（因此可以使用各种选择器形式），获得所选单个单元格的DOM节点，对其进行直接操作。

## 类型(Type)


---

### _function_ **cell().node()**

#### 描述(Description):
得到被选择的单个单元格的DOM元素


#### 返回(Returns):
{% include href/type/DataTables.html param="node" %}

选择器获得到的{% include href/tags.html param="td" %}/{% include href/tags.html param="th" %}单元格


--- 
    
## 例子(Example)

使用jQuery ID选择器选择一个单元格并给其添加一个样式

{% include runcode.html param="cell-node-example" %}
{: #cell-node-example }
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
var cell = table
    .cell( "#importantCell" )
    .node();
 
$( cell ).addClass( 'warning' );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().nodes()" %}

