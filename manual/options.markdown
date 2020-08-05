---
layout: manual
toc: true
title: Options 选项
author: /manual/options
---

DataTables有许多[选项][options]可用于自定义向最终用户展示其界面和可用功能的方式。这个可以通过在初始化时设置的配置选项来完成。

DataTables[扩展][ext]还各自提供可以在DataTables配置对象中设置自己的选项。

## 设置选项（Setting options）

通过将要定义的选项作为对象传递到DataTables构造函数中，可以完成DataTables的配置，比如：

```javascript
$('#example').DataTable( {
    paging: false
} );
```
这是使用 {% include href/Options.html param="paging" %} 选项来禁用表格的分页功能。

再假设你希望开启表格的滚动条，你需要使用 {% include href/Options.html param="scrollY" %}选项。

```javascript
$('#example').DataTable( {
    scrollY: 400
} );
```

扩展一下，你可以将多个选项组合到一个对象中去，在这个情况下，DataTables将禁用分页和开启滚动条：

```javascript
$('#example').DataTable( {
    paging: false,
    scrollY: 400
} );
```

传入的对象是一个标准的JavaScript对象，你可以添加任意数量的选项来达到你的目的。

有关DataTables可用的所有配置选项的完整信息，请参考此网站的文档的[选项][options]部分。

## HTML5数据属性（HTML 5 data attributes）

从`v1.10.5`版本开始，DataTables还可以使用从Html 5 data-*属性读取初始化选项。这提供了一种直接在HTML中设置选项的机制，而不是使用JavaScript（上述讨论的）。例如有如下表格：

```html
<table data-order='[[ 1, "asc" ]]' data-page-length='25'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th data-class-name="priority">Salary</th>
        </tr>
    </thead>
</table>
```

当DataTables初始化此表时，会将{% include href/Options.html param="pageLength" %}设置为25，自动按第二列排序（{% include href/Options.html param="order" %}），并在表的最后一列设置类名称（{% include href/Options.html param="columns.className" %}）

使用data-*属性作为初始化选项时，需要考虑两个重要点：

- jQuery会自动把带杠的字符串转换为DataTables使用的驼峰表示法（比如data-page-length会对应{% include href/Options.html param="pageLength" %}）
- 如果在属性内使用字符串，则必须用双引号引起来（因此，该属性作为一个整体用单引号引起来），由于处理JSON数据，这是jQuery的另一个要求。

## 常用选项（Common options）

你会发现一些特别有用的选项：

- {% include href/Options.html param="ajax" %} Ajax数据源配置
- {% include href/Options.html param="data" %} JavaScript数据源配置
- {% include href/Options.html param="serverSide" %} 开启服务器处理
- {% include href/Options.html param="columns.data" %}  列数据源选项
- {% include href/Options.html param="scrollX" %}  水平滚动条
- {% include href/Options.html param="scrollY" %}  垂直滚动条
- [完整的选项列表][options]


## 默认设置（Setting defaults）

在使用多个DataTables的项目上，将初始化默认值设置为通用值是很有用的（例如，你可能需要将{% include href/Options.html param="dom" %}选项设置为一个公共值，以便所有表都具有相同的布局）。这个可以使用`$.fn.dataTable.defaults`对象来完成这个操作。该对象采用与DataTables初始化对象相同的结构，一旦使用这个配置，该配置都将为DataTables初始化设置默认值。

在此示例中，默认情况下我们禁用DataTables的搜索和排序功能，但在初始化表时，将会启用排序功能（覆盖默认值）。

```javascript
// Disable search and ordering by default
$.extend( $.fn.dataTable.defaults, {
    searching: false,
    ordering:  false
} );
 
// For this specific table we are going to enable ordering
// (searching is still disabled)
$('#example').DataTable( {
    ordering: true
} );
```

## 扩展功能（Extensions）

DataTables还有许多[扩展][ext]的功能，同样也可以在配置对象里设置这些扩展功能。可用的属性取决于你用的扩展功能，并且必须加载扩展所需要的js，这些选项才会起作用。

例如，[选择][select]这个扩展功能，该扩展功能给最终用户提供了动态选择表中的行，列和单元格的能力。它提供{% include href/Options.html param="select" %}选项，将其设置为`true`以启用这个功能：

```javascript
$('#myTable').DataTable( {
    select: true
} );
```
{% include href/Options.html param="select" %}选项也可以作为对象提供，以对该扩展功能配置更详细的控制，当然也可以和DataTables的其他选项结合使用。

[选项文档][options]提供了DataTables和扩展功能的所有可选选项列表。


[options]: {{site.baseurl}}/reference/option
[ext]: https://datatables.net/extensions
[select]: https://datatables.net/extensions/select
