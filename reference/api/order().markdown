---
layout: reference_md
title: order()
summary: 获取/设置表格的排序
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
categories: reference api
keywords: order,api
author: /reference/api/order()
---


## 描述(Description)

这个方提供获取DataTables的排序和控制。

以二维数组的格式储存排序信息，数据格式如下：
{% highlight javascript linenos %}
[
    [ colIdx_1, orderingDirection_1 ],
    [ colIdx_2, orderingDirection_2 ],
    ...,
    [ colIdx_n, orderingDirection_n ]
]
{% endhighlight %}

其中`colIdx_x`是排序列的索引值，`orderingDirection_n`是排序的方向（{% include href/string.html param="desc" %}(descending降序)或者{% include href/string.html param="asc" %}(ascending升序)）- 注意这些必须是小写。索引值从0开始，比如表中第一列索引值为0，第二列索引值为1。

使用这种格式，DataTables可以实现单列排序或多列排序。为了方便，该方法允许传入多个一维数组或一个二维数组来多列排序。但是获取排序信息，DataTables总是返回二维数组。

请注意，此方法只设置表的排序，实际上不执行排序，要达到最终的效果，还需要执行{% include href/api/Core.html param="draw()" %}方法，像这样
`table.order([0,'desc']).draw();`


## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **order()**

---

#### 描述(Description):
获取表格的排序信息。如果当前有多个DataTables实例对象，将返回找到的第一个实例对象的排序信息。使用{% include href/api/Tables.html param="table()" %}来获取不同表格实例。

#### 返回(Returns):
{% include href/type/Javascript.html param="array" %}

包含当前表格排序信息的二维数组。该二维数组与用来设置排序的数据格式相同（见下文）。

---
    
### _function_ **order( order [, ...] )**   

---

#### 描述(Description):
使用一维数组设置表格的排序。请注意，这并不执行排序，需要使用{% include href/api/Core.html param="draw()" %}方法来执行。
     
#### 参数(Parameters):
{% include_relative order-fun1-parameters-code.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}


DataTables API 实例对象

---
    
### _function_ **order( order )**   

---

#### 描述(Description):
使用二维数组设置表格的排序。请注意，这并不执行排序，需要使用{% include href/api/Core.html param="draw()" %}方法来执行。
     
#### 参数(Parameters):
{% include_relative order-fun2-parameters-code.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}


DataTables API 实例对象

--- 
    
## 例子(Example)

获取表格的排序信息：
{% highlight javascript linenos %}
var table = $('#example').DataTable();
var order = table.order();
 
alert( '第 '+order[0][0]+' 列是排序列' );
{% endhighlight %}

---

使用一维数组设置表格排序，第二列升序排列并且重绘：
{% highlight javascript linenos %}
var table = $('#example').DataTable();

table.order( [ 1, 'asc' ] ).draw();
{% endhighlight %}

---

使用多个一维数组设置表格排序，第二，三列升序排列并且重绘：
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.order( [ 1, 'asc' ], [ 2, 'asc' ] ).draw();
{% endhighlight %}

---

和上述例子效果一样，不同的是使用二维数组来设置表格排序：
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.order( [[ 1, 'asc' ], [ 2, 'asc' ]] ).draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Options.html param="order" %}
- {% include href/option/Features.html param="ordering" %}

