---
title: API
keywords: 手册 API
sidebar: mydoc_sidebar
permalink: manual/api.html
reference: https://datatables.net/manual/api
---

DataTables及其扩展都提供了许多API方便操作数据，并在表格初始化后操作表。DataTables API设计是为了反映表中的
数据的结构，以及你通常希望与表交互的方式。该API分为6个部分：

- Tables 操作表格本身
- Columns 操作列
- Rows 操作行
- Cells 操作单元格
- Core 核心方法
- Utilities 工具类

[扩展](https://datatables.net/extensions) 和 [插件](https://datatables.net/manual/plug-ins/api) 还可能向API添加其他方法，来暴露它们添加到DataTables的功能。

关于API完整的列表，参考[这里](https://datatables.net/reference/api)。

## 术语（Terminology）

为了保持API文档文档简洁，在这里对术语进行描述，文档中不再详细描述或引用：

- 实例（Instance） - API的一个实例是一个对象实例，包含了一组特定的表（比如，`new API()` 的返回结果）
- 结果集（Result set） - API实例包含的数据。DataTables API实例就像一个数组一样，因为它跟Javascript数组相同的方式保存数据（可以使用数组`[]`方式访问 ）并且有许多跟数组相同的方法可以使用（比如{% include api.html name="sort()" %}和{% include api.html name="push()" %}）。这与jQuery本质上的数组类似。
- 上下文（Context）- 一个API实例的上下文描述的是DataTables和API之间的关系，每个API实例可以关联一个或多个DataTables表，并具有对这些表进行操作的能力。

## 访问API（Accessing the API）

一个新的DataTables API实例可以通过三种不同的方式获得一个或多个表格：

- `$( selector ).DataTable();`
- `$( selector ).dataTable().api();`
- `new $.fn.dataTable.Api( selector );`

每种方式的结果都是DataTables API对象的一个实例，它具有关联到选择器对应表。

{% include note.html note="升级说明" content="
在1.9版本以及之前的是通过 $( selector ).dataTable().method() 访问DataTables API。
这是通过使用DataTables API方法扩展jQuery对象完成的。
<br>
为了兼容之前的版本，在1.10.+中仍可以使用
<a href='https://legacy.datatables.net/api' target='_blank'>1.9的API</a>，
但新的API更友好，它提供了更大的灵活性以及改进的功能。
" %}

注意 `$( selector ).dataTable();` 和 `$( selector ).DataTable();` 之间的区别是很重要的。小写的d实例化返回的是
{% include type.html name="jQuery" %}对象，大写的D实例化返回的是DataTables API实例。`api()`方法被添加到jQuery
对象中，方便访问DataTables API。但是jQuery对象可以用于操作表节点，像 `addClass()` 这样的方法使用。


## 链式写法（Chaining）

像jQuery一样，DataTables API也支持链式写法，其中很多（但不是全部）DataTables方法返回API实例本身，因此你可以立即调用另一个API方法，例如：

```javascript
var table = $('#example').DataTable();
 
table.search( 'Fiona' ).draw();
```
上面使用了两个不同的API方法 {% include api.html name="search()" %} 和 {% include api.html name="draw()" %}在一行代码。
上面代码还可以使用下面的方式：

```javascript
var table = $('#example').DataTable();
 
table.search( 'Fiona' );
table.draw();
```
在这种情况下，达到的效果是一样的，但链式写法可以使代码更简洁和更好的表达代码的意思。

DataTables API与jQuery的链式写法不同的地方在于DataTables利用了嵌套的方法和属性。例如， {% include api.html name="ajax.json()" %}
方法可以让你访问DataTables通过ajax调用的最新JSON数据，这种情况，`json()` 方法是 `ajax` 属性的子元素。
同样， {% include api.html name="columns" %} （其他数据操作的方法）提供了自己的链式字方法。比如
{% include api.html name="columns().visible()" %}。这使得API访问数据的方式具有表现力，其方法的前缀就能代表你操作的是什么。

在API链式的每个级别上，API所有顶级方法在任何一个节点都可用。比如 {% include api.html name="draw()" %} 是一个顶级方法，
它可以在从表格中删除一行后调用它：`table.row( selector ).remove().draw();`

请注意，并非所有方法都会返回一个用于链式调用的API实例，在某些情况下，返回API实例是不合适的，比如 
{% include api.html name="cell().node()" %} 方法得到 {% include tag.html name="td" %}/{% include tag.html name="th" %}元素。

[API文档](https://datatables.net/reference/api)包含了全部细节，每个方法需要的参数和返回的值的类型。

## 多表格（Multiple tables）

DataTables API实例可以同时关联多个表格。API将一个上下文中的每个表格视为相同。比如下面代码：

```javascript
var tables = $('.dataTable').DataTable();
 
tables.page( 'next' ).draw( false );
```
上面代码讲使用类名`dataTable`获取页面上的表格，并将它们都请求下一页（使用 {% include api.html name="page()" %}）

同样，如果需要，API实例可以只关联单个表格，只需要更改用于创建API实例的jQuery选择器即可：`$('#myTable').DataTable();`
在当前页面中创建一个只包含一个表格的API实例。

## 复数/单数（Plural/Singular）

在使用API时，你可能会注意到有些方法使用了单数和复数。尽管这在API中不常见，但它的作用反映了你访问表中数据的方式，比如
{% include api.html name="rows().data()" %}方法将返回一个带有选定行的数据集的API实例（类似于一个数组），
而{% include api.html name="row().data()" %}只会返回该行的数据。这使得使用API更直观，能够始终获得你期望的结果。

使用单数复数，我们要弄清楚：

- 单数（Singular） === 1
- 复数（Plural）> 1

因此，如果你想使用其中一种选择器方法来选择多个项目，请使用该方法的复数形式，如果你想选择一个特定的项目，请使用单数形式。

## 例子 - 列过滤器（Example - column filter）

[API文档](https://datatables.net/reference/api) 的每个方法都包含了一个示例，对该方法功能的详细描述，返回什么样的值或者接受什么参数；
但让我们将上述概念形成一个详细的示例，介绍该如何使用DataTables API。
下面的例子在表格中每列的 `footer` 单元格中创建一个 {% include tag.html name="select" %} 元素，该元素包含来自该列的数据并将用于表格的搜索。

```javascript
var table = $('#example').DataTable();                 // line 1
 
table.columns().flatten().each( function ( colIdx ) {  // line 3
    // Create the select list and search operation
    var select = $('<select />')                       // line 5
        .appendTo(
            table.column(colIdx).footer()              // line 7
        )
        .on( 'change', function () {                   // line 9
            table                                      // line 10
                .column( colIdx )                      // line 11
                .search( $(this).val() )               // line 12
                .draw();                               // line 13
        } );
 
    // Get the search data for the first column and add to the select list
    table                                              // line 17
        .column( colIdx )                              // line 18
        .cache( 'search' )                             // line 19
        .sort()                                        // line 20
        .unique()                                      // line 21
        .each( function ( d ) {                        // line 22
            select.append( $('<option value="'+d+'">'+d+'</option>') ); // line 23
        } );                                                            // line 24
} );
```

- 第1行 - 在页面的单个表格获取DataTables API的实例
- 第3行 - 使用{% include api.html name="columns()" %}方法选择表中中所有列。{% include api.html name="flatten()" %}方法用于将 {% include api.html name="columns()" %} 的二维数组变成列索引的一维数组，方法{% include api.html name="each()" %}用来遍历每个列来执行操作。 
- 第5行 - 在列的过滤中创建 {% include tag.html name="select" %} 元素
- 第7行 - 使用 {% include api.html name="column().footer()" %} 方法将 `select` 元素放入到 `tfoot` 单元格中
- 第9行 - 使用 [jQuery on](https://api.jquery.com/on/) 方法为{% include tag.html name="select" %} 绑定 `change` 事件 ，当改变select的值，用选择的值搜索表格
- 第10 - 13 行 - 使用 {% include api.html name="column().search()" %} 方法搜索，{% include api.html name="draw()" %}方法来更新搜索到的结果到表格
- 第17 - 19 行 - 使用 {% include api.html name="column().cache()" %} 方法获得列的数据进行搜索
- 第20 - 21 行 - 使用 {% include api.html name="sort()" %} 和 {% include api.html name="unique()" %} 方法将数据排序，去重最终显示给最终用户。
- 第22 - 24 行 - 搜索的值已经添加到 {% include tag.html name="select" %} 中，随时可供使用。

正如你所看到的，DataTables API非常灵活，提供了许多访问和操作表的选项和方法。参考[API文档](https://datatables.net/reference/api)
获取DataTables可用的所有方法的详细说明。此外，[Editor](https://editor.datatables.net/)插件可以使用自定义方法，比如 `row().edit()` 和 `cell().edit()`等其它API