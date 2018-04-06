---
title: 选项 Options
keywords: 手册 选项 option
sidebar: mydoc_sidebar
permalink: manual/options.html
reference: https://datatables.net/manual/options
---

DataTables大量的 [选项](https://datatables.net/reference/option) 可以帮助开发者定制向用户最终展示的界面和
可用的功能。这是通过配置选项完成的，这些选项在初始化的时候设置。

[DataTables扩展](https://datatables.net/extensions)也提供了各自的选项，可以在DataTables配置对象中进行设置。
 

## 设置选项（Setting options）

DataTables的配置是通过将所需要的选项作为对象传递给DataTables构造函数来完成的，比如：

```javascript
$('#example').DataTable( {
    paging: false
} );
``` 
使用 {% include option.html name="paging" %} 选项来禁用表格的分页。

假设你想在表格中启动滚动条 - 你会使用 {% include option.html name="scrollY" %} 选项：

```javascript
$('#example').DataTable( {
    scrollY: 400
} );
```

扩展上面的功能，你可能将多个选项组合到一个对象中，在这个情况下，我们启动滚动条同时禁用分页：

```javascript
$('#example').DataTable( {
    paging: false,
    scrollY: 400
} );
```

传入的对象是一个标准的Javascript对象，你根据自己的需要添加相应的选项即可！

有关DataTables全部的可用配置项，参考本站 [选项](https://datatables.net/reference/option) 部分。

### HTML 5 data 属性（HTML 5 data attributes）

从`1.10.5`开始，DataTables也可以使用从HTML 5 `data-*` 属性中读取初始化选项。这提供了一种直接在HTML中
设置选项的机制，而不是使用Javascript的方式（上面的例子所示），如何使用 `data-*` 属性提供初始化选项，参考如下
代码：

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
当DataTables在此表格上初始化时，它将 {% include option.html name="pageLength" %} 选项设置为25，默认升序排序第二列数据，
并给最后一列设置类名（{% include option.html name="columns.className" %}）

使用 `data-*` 属性作为初始化选项时需要考虑两点：

- jQuery会自动将从虚线字符串转换为DataTables使用的驼峰大小写符号（比如，使用 `data-page-length` 设置{% include option.html name="pageLength" %}）
- 如果在属性中要使用字符串，**必须**使用双引号（整个属性用单引号包起来），这是jQuery处理JSON数据的另一个要求。

## 普通选项（Common options）

你可能会发现的一些选项特别有用：

- {% include option.html name="ajax" %}：ajax数据源配置
- {% include option.html name="data" %}：Javascript数据源配置
- {% include option.html name="serverSide" %}：开启服务器处理
- {% include option.html name="columns.data" %}：列数据源选项
- {% include option.html name="scorllX" %}：水平滚动条
- {% include option.html name="scorllY" %}：垂直滚动条

[完整的选项列表](https://datatables.net/reference/option)


## 设置默认值（Setting defaults）

在使用多个DataTables时，将初始化默认值设置为常用值通常很有用（例如，你可能希望将{% include option.html name="dom" %}选项设置为一个常用值，
以便所有的表格都具有相同的布局），这个操作由 `$.fn.dataTable.defaults` 对象完成。该对象采用与DataTables初始化对象相同的参数，在这种情况下，
你将为DataTables的所有选项设置默认值。

在这个例子中，我们默认禁用了DataTables的搜索和排序功能，但当表格初始化时，开启排序（覆盖默认值）：

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

## 扩展（Extensions）

许多[DataTables Extensions](https://datatables.net/extensions)也可以通过DataTables配置对象进行配置，初始化扩展并根据需要对其进行配置。
可用的属性取决与所使用的 Extensions 的名称，并且必须加载扩展相关的Javascript才可以操作这些选项。

比如，[选择扩展插件](https://datatables.net/extensions/select)，它可以为最终用户提供动态选择表中的行，列和单元格的能力。它提供了
设置 {% include option.html name="select" %} 为 `true` 来启用该扩展插件。

```javascript
$('#myTable').DataTable( {
    select: true
} );
```

{% include option.html name="select" %}选项也可以一个对象去配置，以更细粒度的控制，也可以和其他DataTables选项结合使用。

DataTables完整的可用选项和Extensions相关的选项更多参考[这里](https://datatables.net/reference/option)
