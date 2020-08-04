---
layout: reference_md
title: column().order()
summary: 根据选择的单个列排序表格数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,order
author: /reference/api/column().order()
---

## 描述(Description)

该方法提供了一个可以代替{% include href/api/Core.html param="order()" %}的方法，可以使用合适的{% include href/APIs.html param="column()" %}选择器选择要排序的单个列，并指定排序的方向进行排序。

注意，如果{% include href/APIs.html param="column()" %}选择器匹配到多列，结果将会被截断，默认返回第一个匹配的结果。为了操作多列的排序，请使用{% include href/APIs.html param="columns().order()" %}或者{% include href/api/Core.html param="order()" %}方法。

请注意，该方法只是把排序操作加入到处理队列中，但并不会立马应用到显示的表格中去。为了执行排序，你需要使用{% include href/api/Core.html param="draw()" %}方法，比如`table.column(0).order('desc').draw();`。



## 类型(Type)
---
### _function_ **column().order( direction )**   

#### 描述(Description):
通过{% include href/APIs.html param="column()" %}选择器匹配的单个列，使用指定的方向，排序表格数据。


#### 参数(Parameters):
{% include_relative parameters/column.order.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}
Datatables API 实例


--- 
    
## 例子(Example)

对可见的第一列升序排序：


{% include runcode.html param="column-order-example" %}
{: #column-order-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table
    .column( '0:visible' )
    .order( 'asc' )
    .draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="order()" %}
- {% include href/APIs.html param="columns().order()" %}

Options

- {% include href/option/Options.html param="order" %}
- {% include href/option/Features.html param="ordering" %}

不定时一讲

- [order]({{ site.wlan_url }}/manual/daily/2016/05/05/option-order.html)