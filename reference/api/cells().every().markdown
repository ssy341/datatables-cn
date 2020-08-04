---
layout: reference_md
title: cells().every()
summary: 遍历每个选定的单元格，并且每个单元格应用传入方法里的处理
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.6
navcategory: api
keywords: jQuery,DataTables,api,cells,every
author: /reference/api/cells().every()
---

## 描述(Description)

Datatables API经常使用的操作是对单元格集合执行操作，比如在每个单元格上执行一个通用的操作，像添加事件处理，更新数据等。可以在Datatables中使用以多种方式进行单元格的迭代，每种方式有自己的优点：

- {% include href/APIs.html param="cells().every()" %}
- {% include href/api/Utility.html param="iterator()" %}
- {% include href/api/Utility.html param="each()" %}

{% include href/APIs.html param="cells().every()" %}方法可能在众多情况下是最有用的，将回调函数的上下文设置为相关单元格的{% include href/APIs.html param="cell()" %}实例（通常，DataTables API中的回调将其上下文设置为顶级API层次结构）。简单来说，这意味着你可以在指定给此方法的回调中使用诸如{% include href/APIs.html param="cell().data()" %}之类的方法作为`this.data()`。

看下面这个例子，使用{% include href/api/Utility.html param="each()" %}，该示例遍历已选择的单元格索引，我们需要为每个单元格获取{% include href/APIs.html param="cell()" %}，以便能够直接使用它：

```javascript
table.cells().eq(0).each( function ( index ) {
    var cell = table.cell( index );
 
    var data = cell.data();
    // ... do something with data(), or cell.node(), etc
} );
```

使用{% include href/APIs.html param="cells().every()" %}方法，上面的代码可以改成如下样子：

```javascript
table.cells().every( function () {
    var data = this.data();
    // ... do something with data(), or this.node(), etc
} );
```

Although a relatively simple optimisation in terms of code presentation, it can make the code much more readable and intuitive.

The other advantage is that the table context is automatically handled - in the first example above where {% include href/api/Utility.html param="each()" %} is used, the {% include href/api/Utility.html param="eq()" %} method is used to select the information from the first table in the API's context only, introducing complexity if multiple tables are used. In {% include href/APIs.html param="cells().every()" %} the table context is automatically set to the appropriate table for each cell that has been selected.

## 类型(Type)
---
    
### _function_ **cells().every( fn )**   

#### 描述(Description):
遍历每一个被选择的单元格
     
#### 参数(Parameters):
{% include_relative parameters/cells.every.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api"%}
Datatables API 实例，包含被选中的单元格。


--- 
    
## 例子(Example)

给满足条件的数据添加样式
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.cells().every( function () {
    if ( this.data() > 50 ) {
        $(this.node()).addClass( 'warning' );
    }
    else {
        $(this.node()).removeClass( 'warning' );
    }
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().every()" %}
- {% include href/api/Utility.html param="each()" %}
- {% include href/api/Utility.html param="iterator()" %}
- {% include href/APIs.html param="rows().every()" %}

