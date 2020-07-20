---
layout: reference_md
title: columns().search()
summary: 在所选多个列中搜索数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,search
author: /reference/api/columns().search()
---

## 描述(Description)
虽然 {% include href/api/Core.html param="search()" %}方法提供了在整个表中进行全局搜索的功能，但是此方法以及复数形式提供了搜索特定列上数据的功能。

因为可以使用多种不同的方式来搜索特定列数据，所以Datatables没有内置任何搜索控件，但是使用这种方法添加自定义列搜索控件变得非常容易。下面的例子显示了如何使用它。

Datatables具有称为“smart”搜索的内置搜索算法，旨在使搜索表数据变得容易，让最终用户操作起来更简单。“smart”搜索使用正则表达式执行，因此如果您使用正则表达式搜索，则必须考虑此方法的第二个参数。有关Datatables中“smart”搜索的完整说明，请参阅{% include href/api/Core.html param="search()" %}文档。

请注意，Datatables中的这种搜索功能实际上是一种过滤器，它是减法操作。之所以称为搜索，以避免与过滤器辅助方法 {% include href/api/Utility.html param="filter()" %}重名。


请注意，此方法只是在内部执行过滤，并没有把数据显示到表中。为了执行搜索并显示结果，还需用{% include href/api/Core.html param="draw()" %}方法。使用链式操作，比如这样`table.column( [0,1] ).search( 'Fred' ).draw();`，这是为了能够执行绘制之前将多个更改排入队列。

## 类型(Types)
---
    
### _function_ **columns().search()**   

#### 描述(Description):
获取当前列搜索应用的搜索词。

#### 返回(Returns):
{% include href/type/DataTables.html param="DateTables.Api" %}
Datatables API 实例，结果集中包含被选择列应用的搜索词。

--- 

 
### _function_ **columns().search( input [, regex[ , smart[ , caseInsen ]]] )**   

#### 描述(Description):

在选择器匹配到的多个列设置列的搜索词。注意，这实际并不执行搜索，而是将其操作加入到队列中，使用{% include href/api/Core.html param="draw()" %}执行搜索并显示结果。
     
#### 参数(Parameters):
{% include_relative parameters/columns.search.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DateTables.Api" %}

Datatables API 实例

---
    
## 例子(Example)

将关键字应用到多个列：

{% include runcode.html param="columns-search-example1" %}
{: #columns-search-example1-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table
    .columns( '.status' )
    .search( 'Important' )
    .draw();
{% endhighlight %}


{: #columns-search-example1-html }
{% highlight html %}
<table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Status</th>
            </tr>
        </thead>
 
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Status</th>
            </tr>
        </tfoot>
 
        <tbody>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>Important</td>
            </tr>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>Normal</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>Important</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>Normal</td>
            </tr>
        </tbody>
</table>
{% endhighlight %}

---


给每一列构建一个搜索文本框，注意该例子执行部分单词匹配和“smart”搜索：
{% include runcode.html param="columns-search-example2" %}
{: #columns-search-example2-js }
{% highlight javascript %}
// Setup - add a text input to each footer cell
$('#example tfoot th').each( function () {
    var title = $('#example thead th').eq( $(this).index() ).text();
    $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
} );
 
// DataTable
var table = $('#example').DataTable();
 
// Apply the filter
table.columns().every( function () {
    var column = this;
 
    $( 'input', this.footer() ).on( 'keyup change', function () {
        column
            .search( this.value )
            .draw();
    } );
} );
{% endhighlight %}


---


给具有`.select-filter`类名的列构建一个下拉搜索框：
{% include runcode.html param="columns-search-example3" %}
{: #columns-search-example3-js }
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

- {% include href/api/Core.html param="search()" %}
- {% include href/api/Columns.html param="column().search()" %}
- {% include href/api/Static.html param="$.fn.dataTable.util.escapeRegex()" %}


Options

- {% include href/option/Features.html param="searching" %}
- {% include href/option/Columns.html param="columns.searchable" %}
