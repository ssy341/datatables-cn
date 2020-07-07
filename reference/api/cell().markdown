---
layout: reference_md
title: cell()
summary: 从表格中获取一个单个的单元格
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: cell,api
author: /reference/api/cell()
---

## 描述(Description)

从DataTables中获取需要使用的单个单元格，其链式方法提供了设置/获取单元格中的数据，还可以直接操作节点或者执行其他操作。

注意，此方法选择单个单元格。如果提供的选择器匹配到多个单元格，则最终的结果为找到的第一个单元格。如果你需要操作多个单元格，你可以使用相对应的方法{% include href/api/Cells.html param="cells" %}。

这个方法有两种形式：

- Cell selector （单元格选择器）
- Cross product between row and column selectors （行和列之间的叉集选择器）


## 类型(Types)
---

### _function_ **cell( [ modifier ] )**

#### 描述(Description):

选择一个与修饰符匹配的单元格

#### 参数(Parameters):
{% include_relative parameters/cell.fun1.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格


---
    
### _function_ **cell( cellSelector, [ modifier ] )**   

#### 描述(Description):
选择由单元选择器找到的单元格
     
#### 参数(Parameters):
{% include_relative parameters/cell.fun2.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格

---
    
### _function_ **cell( rowSelector, columnSelector, [ modifier ] )**   

#### 描述(Description):
选择由从行和列选择器共同找到的单元格
     
#### 参数(Parameters):
{% include_relative parameters/cell.fun3.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格

--- 


## 例子(Example)


打印指定样式单元格内容(表格数据里有两个单元格的class为specialCell，在不同的页数，通过使用 {% include href/type/DataTables.html param="selector-modifier" %}参数指定当前页，即第一页，所以打印的结果为Airi Satou)

{% include runcode.html param="cell-example1" %}
{: #cell-example1-js }
{% highlight javascript %}

/**
打印的结果为Airi Satou
**/
var table = $('#example').DataTable();
alert("类名为specialCell的单元格内容是" + table.cell(".specialCell",{page:'current'}).data());

{% endhighlight %}


---


打印第一行和第二列交叉的单元格内容(最终打印的结果为Accountant)

{% include runcode.html param="cell-example2" %}
{: #cell-example2-js }
{% highlight javascript %}

/**
打印的结果为Accountant
**/
var table = $('#example').DataTable();
alert("第一行和第二列交叉的单元格的内容是" + table.cell("#row-1","#column-2").data());

{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells()" %}



