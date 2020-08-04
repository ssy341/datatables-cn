---
layout: reference_md
title: column().dataSrc()
summary: 获取被选择单个列数据源的属性名称
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.3
navcategory: api
keywords: column,dataSrc
author: /reference/api/column().dataSrc()
---

## 描述(Description)
通过使用{% include href/option/Columns.html param="column.data" %}选项，DataTables能够从各种复杂的数据源中读取数据。此方法提供了基于列选择器（参考{% include href/Types.html param="column-selector" %}）初始化后检索该设置的功能。

此方法将返回初始化期间设置的{% include href/option/Columns.html param="column.data" %}的值（包括列索引整数的默认值），包括函数（不会执行）。需要注意的是，如何设置{% include href/option/Columns.html param="columns.render" %}对该方法的返回值没有影响，该方法仅用于检索{% include href/option/Columns.html param="column.data" %}的值。

目前无法将此方法用作设置方法-初始化后无法更改列的数据源。

## 类型(Type)
---
    
### _function_ **column().dataSrc()**   

#### 描述(Description):
获取被选择列数据源的属性名称

#### 返回(Returns):
{% include href/type/Javascript.html param="integer" %}，{% include href/type/Javascript.html param="string" %}，{% include href/type/Javascript.html param="function" %}

{% include href/option/Columns.html param="column.data" %}配置的数据源属性。


--- 
    
## 例子(Example)

点击列获取列的数据源
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example').on( 'click', 'tbody td', function () {
    var idx = table.cell(this).index().column;
    alert( 'Data source: '+table.column( idx ).dataSrc() );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().data()" %}
- {% include href/APIs.html param="columns().dataSrc()" %}
- {% include href/APIs.html param="column().data()" %}

