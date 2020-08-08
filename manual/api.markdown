---
layout: manual
toc: true
title: API 接口
author: /manual/api
navcategory: data
---

Datatables和扩展功能都具有许多易于操作表格的API接口，可以用来访问表格中包含的数据，可以在表格初始化之后对表格做一系列操作。Datatables的API的设计在于反应表中的数据结构，以及你通常希望与表进行交互的方式。因此，API由用于处理表及其数据6个关键区域组成：

- Tables 操作表格
- Columns 操作列
- Rows 操作行
- Cells 操作单元格
- Core 核心方法
- Utilities 工具方法

[扩展功能][ext]和[插件][plugins]还可以向API中添加其他方法，以显示它们添加到Datatables的功能。


有关API中可用方法的完整列表，请参考[API参考][api]部分。

## 术语（Terminology）

为了使API的文档简洁明了，使用了许多术语来描述或引用API的各个方面。这些在这里定义：

- 实例，API的实例是单个对象的实例，它对应一组特定的Datatables表（`new Api()`的结果）
- 结果集，API实例保存的数据。Datatables API实例与数组类似，因为它们以与普通JavaScript数组（因此可以使用数组`[]`表示法进行访问）相同的方式保存数据，并有许多相同的方法可用（比如{% include href/APIs.html param="sort()" %}和{% include href/APIs.html param="push()" %}）。这和jQuery本质上是一个数组一样。
- 上下文，API实例的上下文描述是Datatables和API实例之间的联系，每个API实例可以关联一个或多个Datatables表，并能够对这些表进行操作（有关信息，请参考下面的详细描述）。

## 访问API（Accessing the API）

可以通过三种不同的方式为一个或多个表获取一个新的Datatables API实例：

- `$( selector ).DataTable();`
- `$( selector ).dataTable().api();`
- `new $.fn.dataTable.Api( selector );`

每种方式的结果都是Datatables API对象的一个实例，该实例具有选择器在其上下文中找到的表。

请务必注意`$( selector ).DataTable();`和`$( selector ).dataTable();`之间的区别。前者返回Datatables API实例，而后者返回 {% include href/Types.html param="jQuery" %}对象。使用`api()`方法添加到jQuery对象，你也可以轻松访问API，但是jQuery对象对于操作表节点可能很有用，就像处理其他jQuery实例一样（比如使用`addClass()`等等）。

> 更新日志：
> 在`v1.9`版本中使用`$().dataTable().method()`方式访问早起版本中的Datatables API方法。这是通过使用Datatables API方法扩展jQuery对象来完成的。
> 为了向后兼容，[旧的API][legacy]在Datatables 1.10中任可以用，但是首选新的API（参见上面描述的三种方式），因为它具有更大的灵活性和改进的功能。

## 链式调用（Chaining）

与jQuery一样，Datatables API可以使用链式调用，许多但不是全部Datatables方法返回了API实例本身，因此你可以立即调用另一个API方法。例如下面代码：

```javascript
var table = $('#example').DataTable();
 
table.search( 'Fiona' ).draw();
```

上面代码使用了两个不同的API方法，{% include href/APIs.html param="search()" %}和{% include href/APIs.html param="draw()" %}在同一行中。它等同于下面的写法：

```javascript
var table = $('#example').DataTable();
 
table.search( 'Fiona' );
table.draw();
```

在这种情况下，功能是相同的，但是链式写法可以让代码更简洁和更具表现力。

Datatables API和jQuery的链式方法不同的地方是Datatables使用嵌套的方法和属性。例如{% include href/APIs.html param="ajax.json()" %}方法使你可以通过Datatables获取当前请求ajax获取的最新的JSON数据。在这个情况下，`json()`方法是`ajax`属性的子级。同样，{% include href/APIs.html param="columns()" %}方法（和其他数据操作方法）也提供了自己的链式子方法。比如{% include href/APIs.html param="columns().visible()" %}。这使API在访问数据方面具有与以前调用过的方法有关的非常好的表达方式。

在API的所有嵌套层中，API的所有顶级方法将始终可用。举个例子，{% include href/APIs.html param="draw()" %}是一个顶级方法，但是它可以从表中删除一行后调用它：`table.row( selector ).remove().draw();`。

请注意，并非所有的方法都会返回用于链式写法的API实例。在某些情况下，返回API实例是不合适的，比如{% include href/APIs.html param="cell().node()" %}方法用来获取{% include href/HtmlTags.html param="td" %}/{% include href/HtmlTags.html param="th" %}元素。[API参考][api]文档包含每种方法及其返回结果的完整详细信息。

## 多个表（Multiple tables）

Datatables API实例可以在其上下文中关联多个表。API将上下文中的每个表视为相同的。例如：
```javascript
var tables = $('.dataTable').DataTable();
 
tables.page( 'next' ).draw( false );
```
此代码将选择document中所有带有`dataTable`类名的表格，并将它们全部往后翻一页。

同样，如果需要，API实例可以只关联单个表，只需要更改用于创建API实例的jQuery选择器即可：`$('#myTable').DataTable();`，这样在上下文创建的API实例只关联单个表。

## 复数/单数（Plural / Singular）

在使用API时，你会注意到这些方法都分单数和复数形式。尽管这在API中相对来说不常见，但这样做是为了反映你访问表中数据的方式，比如{% include href/APIs.html param="rows().data()" %}方法将返回一个API实例，其结果集中有选定多行的数据（即数组），而{% include href/APIs.html param="row().data()" %}方法仅返回单行的数据。这使使用API更加直观，因为你将始终获得期望的结果。

明确这点：

- 单数 ==== 1
- 复数 > 1

因此，如果要使用选择器选择多个项目，请使用该方法的复数形式，如果要选择单个特定项目，请使用单数形式。


## 示例 - 列过滤

[API参考][api]文档包含每个API方法的示例，并详细说明其功能，返回的内容以及可以接受的参数；但是让我们将上述概念形成一个详细的示例，逐行说明如何使用Datatables API。在这个情况下，我们在表中每一列的页脚单元格创建一个{% include href/HtmlTags.html param="select" %}元素，其中包含该列中的数据，并将用于搜索表。

{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.columns().flatten().each( function ( colIdx ) {
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
            table.column(colIdx).footer()
        )
        .on( 'change', function () {
            table
                .column( colIdx )
                .search( $(this).val() )
                .draw();
        } );
 
    // Get the search data for the first column and add to the select list
    table
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
            select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
} );
{% endhighlight %}

- 第1行，在上下文中获取表格的Datatables API实例
- 第3行，使用{% include href/APIs.html param="columns()" %}方法选择表中所有列。{% include href/APIs.html param="flatten()" %}方法用于把{% include href/APIs.html param="columns()" %}方法返回的二维数组转为一维数组的列索引，通用的方法{% include href/APIs.html param="each()" %}用于对每个选定的列执行操作。
- 第5行，创建列过滤的{% include href/HtmlTags.html param="select" %}元素
- 第7行，使用{% include href/APIs.html param="column().footer()" %}方法获取要在其中插入select元素的页脚单元格元素。
- 第9行，使用[jQuery on()][jquery]方法监听当{% include href/HtmlTags.html param="select" %}元素的值发生改变时执行的操作。
- 第10-13行，使用{% include href/APIs.html param="column().search()" %}方法加入到处理队列中，并执行{% include href/APIs.html param="draw()" %}方法，将结果以更行到表格中显示。
- 第17-19行，使用{% include href/APIs.html param="column().cache()" %}方法从Datatables用于搜索表的列中获取数据。
- 第20-21行，通用的方法{% include href/APIs.html param="sort()" %}和{% include href/APIs.html param="unique()" %}将数据进行排序，并进行数据去重供最终用户选择使用。
- 第22-24行，搜索词选项已经添加到我们的{% include href/HtmlTags.html param="select" %}元素中，等待使用。

正如你所见，Datatables API非常灵活，并提供了访问和操作表的多种选择。请参阅[API参考][api]文档以获取可用方法的完整列表。此外，插件如[Editor][editor]可以用自定义扩展API方法,如`row().edit()`和`cell().edit()`等选项。




[jquery]: https://api.jquery.com/on/
[editor]: https://editor.datatables.net/
[api]: {{ site.baseurl }}/reference/api
[ext]: https://datatables.net/extensions
[plugins]: https://datatables.net/manual/plug-ins/api
[legacy]: https://legacy.datatables.net/api
