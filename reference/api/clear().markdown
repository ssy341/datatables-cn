---
layout: reference_md
title: clear()
summary: 清除表格的所有数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: clear,api
author: /reference/api/clear()
---


## 描述(Description)
该方法简单地从DataTables删除所有行，导致数据集长度为0。然后可以使用{% include href/api/Rows.html param="rows.add()" %}方法添加新的数据。

请注意，此方法不会自动重绘，因此你需要在清空数据之后调用{% include href/api/Core.html param="draw()" %}方法重绘表格，比如
`table.clear().draw()`;当你希望立即向表中添加新行的时候，完成操作后，你将只需要调用一次{% include href/api/Core.html param="draw()" %}方法，
这将有助于提高性能。

当使用了{% include href/option/Features.html param="serverSide" %}参数，即服务器模式的时候，不应该使用该方法。使用服务器处理
时，因该从数据库里删除数据（即向服务器发送Ajax请求），然后调用{% include href/api/Core.html param="draw()" %}方法。如果在服务器模式下，
删除客户端的数据将不会起作用，因为数据并没有从服务器中删除，那么数据在下一次重绘之后，仍然显示在表格上。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **clear**   

#### 描述(Description):
简单的移除表格的所有的数据

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}


DataTables API 实例对象

--- 
    
## 例子(Example)

清除表格所有数据（客户端）
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.clear().draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="data()" %}
- {% include href/api/Rows.html param="row.add()" %}
- {% include href/api/Rows.html param="rows.add()" %}

