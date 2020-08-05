---
layout: reference_md
title: columns().dataSrc()
summary: 获取被选择多个列数据源的属性名称
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.3
navcategory: api
keywords: columns,dataSrc
author: /reference/api/columns().dataSrc()
---

## 描述(Description)
通过使用{% include href/Options.html param="column.data" %}选项，DataTables能够从各种复杂的数据源中读取数据。此方法提供了基于列选择器（参考{% include href/Types.html param="column-selector" %}）初始化后为多个列检索该设置的功能。

此方法将返回初始化期间设置的{% include href/Options.html param="column.data" %}的值（包括列索引整数的默认值），包括函数（不会执行）。需要注意的是，如何设置{% include href/Options.html param="columns.render" %}对该方法的返回值没有影响，该方法仅用于检索{% include href/Options.html param="column.data" %}的值。

通常，此方法的单数表示{% include href/APIs.html param="column().dataSrc()" %}对于开发人员来说更有用。此方法为了完整起见，包含在API中。



## 类型(Type)

---
### _function_ **columns().dataSrc()**   

#### 描述(Description):
获取被选择多列数据源的属性名称

#### 返回(Returns):
{% include href/Types.html param="DateTables.Api" %}

DataTables API实例，结果包含被由{% include href/Options.html param="column.data" %}选项配置的所选列的数据源参数。

--- 
    
## 例子(Example)

获取第0列和第1列的数据源参数：
{% highlight javascript %}
var table = $('#example').DataTable();
 
alert( 'Data source: '+table.columns( [0, 1] ).dataSrc().join(' ') );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().data()" %}
- {% include href/APIs.html param="column().data()" %}
- {% include href/APIs.html param="column().dataSrc()" %}
