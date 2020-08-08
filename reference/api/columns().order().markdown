---
layout: reference_md
title: columns().order()
summary: 根据选择的多个列排序表格数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: 关键字
author: 原地址
---

## 描述(Description)
该方法提供了一个可以代替{% include href/APIs.html param="order()" %}的方法，可以使用合适的{% include href/APIs.html param="column()" %}选择器选择要排序的多个列，并指定排序的方向进行排序。

通过确保选择器匹配多个列达到多列排序（如果仅匹配一列，则执行单列排序或者使用{% include href/APIs.html param="column().order()" %}方法）。匹配列的顺序定义了优先级顺序，多列排序会按照该顺序来排序表格数据。

请注意，该方法只是把排序操作加入到处理队列中，但并不会立马应用到显示的表格中去。为了执行排序，你需要使用{% include href/APIs.html param="draw()" %}方法，比如`table.columns([0,1]).order('desc').draw();`。


## 类型(Type)
---
    
### _function_ **columns().order( direction )**   

#### 描述(Description):
通过{% include href/APIs.html param="columns()" %}选择器匹配的多个列，使用指定的方向，排序表格数据。

     
#### 参数(Parameters):
{% include_relative parameters/column.order.html %}


#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}
Datatables API 实例


--- 
    
## 例子(Example)

排序所有包含`status`类名的列，按照升序排序：

{% include runcode.html param="columns-order-example" %}
{: #columns-order-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table
    .columns( '.status' )
    .order( 'desc' )
    .draw();
{% endhighlight %}


{: #columns-order-example-body }
{% highlight html %}
  <table id="example" class="display">
        <thead>
            <tr>
                <th class="status">状态</th>
                <th class="status">状态2</th>
                <th>ip</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3</td>
                <td>192.168.0.1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>192.168.0.2</td>
            </tr>
        </tbody>
    </table>
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="order()" %}
- {% include href/APIs.html param="column().order()" %}

Options

- {% include href/Options.html param="order" %}
- {% include href/Options.html param="ordering" %}
