---
layout: reference_md
title: columns().cache()
summary: 获取被选择多列的DataTables缓存的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,cache
author: /reference/api/columns().cache()
---

## 描述(Description)
Datatables缓存数据为了进行搜索和排序，以使这些操作在需要时尽快的完成。有时候获取Datatables缓存用于这些操作的数据很有用，比如在创建一个`select`列表的筛选器时。

不能保证缓存的数据在任何特定时候都可用。如果Datatables尚未请求数据，则不会对其进行缓存。当使用{% include href/string.html param="order" %}选项并且尚未对列进行排序时，这一点尤其明显。数据无效还会将导致缓存被删除。

应当指出，此方法是必须的，因为Datatables能够将不同的数据用于其不同的操作（比如，搜索，排序，显示等），参考{% include href/option/Columns.html param="columns.data" %}和{% include href/option/Columns.html param="columns.render" %}获取更多信息。{% include href/APIs.html param="columns().data()" %}方法提供访问原始数据的功能。如果您没有将正交数据用于Datatables的不同操作，则此方法使用有限。

请注意，返回数组中的数据的顺序以及从中获取数据的行（搜索的行，可见行等）由用于获取选定列的{% include href/APIs.html param="column()" %}选择器的{% include href/Types.html param="selector-modifier" %}选项控制。

请注意，此方法主要针对需要访问Datatables已存储的内部数据的插件开发人员。


## 类型(Type)
---
    
### _function_ **columns().cache([type])**   

#### 描述(Description):
获取被选择多列的DataTables缓存的数据

     
#### 参数(Parameters):
{% include_relative parameters/column.cache.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}
DataTables API 实例，结果集包含被选择列缓存的数据。这是一个二维数组，顶级条目数据均为{% include href/APIs.html param="columns()" %}选择器匹配到的列的单元格缓存数据。

--- 
    
## 例子(Example)

给每一列包含`.select-filter`类名的构建一个搜索列表
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.columns( '.select-filter' ).every( function () {
    var that = this;
 
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
            this.footer()
        )
        .on( 'change', function () {
            that
                .search( $(this).val() )
                .draw();
        } );
 
    // Get the search data for the first column and add to the select list
    this
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
            select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().cache()" %}

