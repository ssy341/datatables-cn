---
layout: reference_md
title: column().cache()
summary: 获取被选单择列的DataTables缓存的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,cache
author: /reference/api/column().cache()
---

## 描述(Description)
Datatables缓存数据为了进行搜索和排序，以使这些操作在需要时尽快的完成。有时候获取Datatables缓存用于这些操作的数据很有用，比如在创建一个`select`列表的筛选器时。

不能保证缓存的数据在任何特定时候都可用。如果Datatables尚未请求数据，则不会对其进行缓存。当使用{% include href/string.html param="order" %}选项并且尚未对列进行排序时，这一点尤其明显。数据无效还会将导致缓存被删除。

应当指出，此方法是必须的，因为Datatables能够将不同的数据用于其不同的操作（比如，搜索，排序，显示等），参考{% include href/Options.html param="columns.data" %}和{% include href/Options.html param="columns.render" %}获取更多信息。{% include href/APIs.html param="columns().data()" %}方法提供访问原始数据的功能。如果您没有将正交数据用于Datatables的不同操作，则此方法使用有限。

请注意，返回数组中的数据的顺序以及从中获取数据的行（搜索的行，可见行等）由用于获取选定列的{% include href/APIs.html param="column()" %}选择器的{% include href/Types.html param="selector-modifier" %}选项控制。

另外，如果{% include href/APIs.html param="column()" %}中使用的选择器与多个列匹配，则结果集将被截断为单个列，默认返回匹配到的第一个列。

请注意，此方法主要针对需要访问Datatables已存储的内部数据的插件开发人员。


## 类型(Type)
---
    
### _function_ **column().cache([type])**   

#### 描述(Description):
获取被选择单列的DataTables缓存的数据

     
#### 参数(Parameters):
{% include_relative parameters/column.cache.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}
DataTables API 实例，结果集包含被选择列缓存的数据。是一个一维数组，每个条目即为被选择列每个单元格Datatables缓存的数据。

--- 
    
## 例子(Example)

为第一列创建一个`select`，给最终用户提供搜索表格的功能：
{% highlight javascript %}
var table = $('#example').DataTable();

// Create the select list and search operation
var select = $('<select />')
	.appendTo(
		table.column( 0 ).footer()
	)
	.on( 'change', function () {
		table
			.column( 0 )
			.search( $(this).val() )
			.draw();
	} );

// Get the search data for the first column and add to the select list
table
	.column( 0 )
	.cache( 'search' )
	.sort()
	.unique()
	.each( function ( d ) {
		select.append( $('<option value="'+d+'">'+d+'</option>') );
	} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().cache()" %}

