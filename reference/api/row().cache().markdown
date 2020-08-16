---
layout: reference_md
title: row().cache()
summary: 获取所选单个行的Datatables缓存数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,cache,api,获取所选单个行的Datatables缓存数据
author: /reference/api/row().cache()
---

## 描述(Description)

Datatables缓存数据用来进行排序和搜索，以使这些操作在需要的时候尽快运行。

不能保证缓存数据在任何特定时刻都是可用的。如果Datatables尚未请求数据，则不会对其进行缓存。当使用{% include href/string.html param="order" %}选项，并且尚未进行排序时，就能看出这一点。数据无效还将导致缓存被删除。

需要指出，该方法是必须的，因为Datatables能够将不同的数据用于其不同操作（搜索，排序，显示等），参考{% include href/Options.html param="columns.data" %}和{% include href/Options.html param="columns.render" %}获得更多信息。如果你不希望缓存数据，则可以使用{% include href/APIs.html param="row().data()" %}获取由Datatables创建的原始数据数组/对象。如果你没有将正交数据用于不同的操作，则此方法的使用将会收到限制。

请注意，此方法主要针对需要访问Datatables已存储的内部数据的插件开发人员。



## 类型(Type)
---
### _function_ **row().cache( [ type ] )**   
---
#### 描述(Description):
根据选择器选择的单个行获取数据

     
#### 参数(Parameters):
{% include_relative parameters/row.cache.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API 实例，结果集中包含被选择的行的缓存数据。是一个一维数组，数组的每个项目对应选定的单个行的每一个单元格。


--- 
    
## 例子(Example)

打印缓存数据：
{% include runcode.html param="row-cache-example" %}
{: #row-cache-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    alert( table.cell( this ).cache( 'order' ) );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row()" %}
- {% include href/APIs.html param="rows().cache()" %}

