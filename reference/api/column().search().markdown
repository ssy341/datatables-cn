---
layout: reference_md
title: column().search()
summary: 在所选单个列中搜索数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,search
author: /reference/api/column().search()
---

## 描述(Description)
虽然 {% include href/APIs.html param="search()" %}方法提供了在整个表中进行全局搜索的功能，但是此方法以及复数形式提供了搜索特定列上数据的功能。

因为可以使用多种不同的方式来搜索特定列数据，所以Datatables没有内置任何搜索控件，但是使用这种方法添加自定义列搜索控件变得非常容易。下面的例子显示了如何使用它。

请注意，Datatables中的这种搜索功能实际上是一种过滤器，它是减法操作。之所以称为搜索，以避免与过滤器辅助方法 {% include href/APIs.html param="filter()" %}重名。

请注意，此方法只是在内部执行过滤，并没有把数据显示到表中。为了执行搜索并显示结果，还需用{% include href/APIs.html param="draw()" %}方法。使用链式操作，比如这样`table.column( 0 ).search( 'Fred' ).draw();`，这是为了能够执行绘制之前将多个更改排入队列。


## 类型(Types)

---
    
### _function_ **column().search()**   

#### 描述(Description):

获取当前列搜索应用的搜索词。

#### 返回(Returns):
{% include href/Types.html param="string" %}

当前应用于该列的搜索词，如果未应用搜索项，则该字符串为空。

---
    
### _function_ **column().search( input [, regex[ , smart[ , caseInsen ]]] )**   

#### 描述(Description):

在选择器匹配到的单个列设置列的搜索词。注意，这实际并不执行搜索，而是将其操作加入到队列中，使用{% include href/APIs.html param="draw()" %}执行搜索并显示结果。
     
#### 参数(Parameters):
{% include_relative parameters/column.search.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}

Datatables API 实例


--- 
    
## 例子(Example)

单个列搜索：

{% include runcode.html param="column-search-example1" %}
{: #column-search-example1-js }
{% highlight javascript %}
var table = $('#example').DataTable({
    dom:"<'#toolbox'><lftip>",
    initComplete:function(){
        $("#toolbox").append("第四列过滤：<input type='text' id='column3_search'>");
    }

});
 
// #column3_search is a <input type="text"> element
$('#column3_search').on( 'keyup', function () {
    table
        .columns( 3 )
        .search( this.value )
        .draw();
} );
{% endhighlight %}

---

给具有`.select-filter`类名的列构建一个下拉搜索框：

{% include runcode.html param="column-search-example2" %}
{: #column-search-example2-js }
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

- {% include href/APIs.html param="search()" %}
- {% include href/APIs.html param="columns().search()" %}
- {% include href/APIs.html param="$.fn.dataTable.util.escapeRegex()" %}


Options

- {% include href/Options.html param="searching" %}
- {% include href/Options.html param="columns.searchable" %}
