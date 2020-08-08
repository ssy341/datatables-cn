---
layout: reference_md
title: order.listener()
summary: 在一个元素上为一个给定列添加一个排序监听
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: order.listener,api
author: /reference/api/order.listener()
---




## 描述(Description)
此方法提供了将排序监听附加到页面上任何一个DOM元素的功能。这与DataTables在内部用于为每个列附加到`thead`的排序监听器使用的方法相同。（比如，点击排序，按住shift多列排序）

虽然不是常用方法，但是可以从外部触发表排序操作（equally {% include href/APIs.html param="order()" %} and its columns counterparts could also be used）

注意，与 {% include href/APIs.html param="order()" %} 和 {% include href/APIs.html param="columns().order()" %} 不同，当通过此功能附加的监听器被激活时，
它将导致表格自动重绘，也就是它不需要额外调用{% include href/APIs.html param="draw()" %}方法来重绘表格。




## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **order.listener( node, column, callback )** 

---
    

#### 描述(Description):

将排序监听附加到指定的元素
     
#### 参数(Parameters):
{% include_relative parameters/order.listener.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

包含当前排序的结果集的DataTables API实例

--- 
    
## 例子(Example)

当 `#sorter` 元素被点击时，排序第一列
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.order.listener( '#sorter', 1 );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="order()" %}
- {% include href/APIs.html param="column().order()" %}
- {% include href/APIs.html param="columns().order()" %}


Options

- {% include href/Options.html param="order" %}
- {% include href/Options.html param="ordering" %}
