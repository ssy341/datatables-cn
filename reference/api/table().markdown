---
layout: reference_md
title: table()
summary: 根据选择器从API上下文获取表格
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: table,api
author: /reference/api/table()
---

## 描述(Description)

这个DataTables API可以同时操作多个表格（存在上下文中的）。有个简单的例子 `$('.dataTable').DataTable().search('Fred').draw();`这个代码会在所有表格里找class名为`.datatble`的表格去做相应的操作。

API实例的上下文定义了API将在那些DataTables表格上进行操作，并且此方法提供了一种控制该上下文表的方式。

如果你在一个页面上有多个表，那么这个方法对这种情况特别有用，但是你可能还希望减少表格里API上下文，以便仅操作一个表或其他表格的子集上。

如果你只是操作单个表格的API实例，这个方法对您的使用是有限的！实际上这个方法只对多个表格的操作才是合适的。另外，需要注意的是，没有选择器可以直接在DOM上使用jQuery来选择表代替选择器。这样做主要是为了方便和完整地提供API。

请注意，如果使用的选择器在API的上下文中匹配出多个表，则返回的API实例的上下文将被默认为第一个匹配的表。


## 类型(Type)

### _function_ table( selector )

#### 描述(Description):

根据给出的选择器选择表格

#### 参数(Parameters):

{% include_relative table-parameters-code.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DateTables.Api" %}

在上下文中包含被选择的表的DataTables API实例


--- 
    
## 例子(Example)

在API的上下文中，应用一个排序操作给匹配的第二个表格


{% highlight javascript linenos %}

var tables = $('.dataTable').DataTable();
 
tables.table( 1 ).order( [ 3, 'asc' ] ).draw();

{% endhighlight %}


从API实例中找到id为admin的表格，应用一个全局的搜索操作

{% highlight javascript linenos %}

//获取所有class名为dataTable的API实例
var tables = $('.dataTable').DataTable();
 
//操作这个集合实例中表格ID为admin的实例应用全局搜索操作
tables.table('#admin').search( 'Important' ).draw();
 
//注意：直接选取id为admin的表格操作也是同样的效果
// Note that: 
//   $('#admin').DataTable().search('Important').draw();
// would also have achieved the same effect

{% endhighlight %}


## 相关属性(Related)

下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Tables.html param="tables()" %}