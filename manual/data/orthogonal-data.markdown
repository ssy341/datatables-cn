---
layout: manual
toc: true
title: 正交数据 Orthogonal data
author: /manual/data/orthogonal-data
navcategory: data
---

数据是复杂的。Not only will the data displayed in your tables have rules relating to how each data point corresponds to the others in your table, but also each data point itself can take multiple forms. 例如考虑货币数据，为了进行显示，它可能显示为带货币符号和千位分隔符的格式，而排序应以数字形式进行，并且对数据的搜索将接受任何一种形式。

在DataTables中，我们称之为正交数据。

DataTables有4种内置数据操作，每一个都可能使用正交（独立）数据源。这四种操作是：

- {% include href/string.html param="display" %} 显示的数据
- {% include href/string.html param="sort" %} 用于排序的数据
- {% include href/string.html param="filter" %} 用于过滤的数据
- {% include href/string.html param="type" %} 类型检测数据

默认情况下，DataTables将对四个操作使用相同的数据，但这可以使用{% include href/option/Columns.html param="column.data" %}和{% include href/option/Columns.html param="columns.render" %}初始化选项进行修改，或者使用HTML 5 `data-*`属性。

## 数据源（Data source）

可以通过数组/对象（注意，对象更容易使用，因为你不需要记住数组的索引）数据源将表的正交数据作为预定义值（通常，这是通过{% include href/option/Data.html param="ajax" %}加载的数据或JavaScript提供的数据源完成的）提供，也可以根据需要即使对其进行计算。

### 预定义值（Predefined values）

如果您的数据源中已经包含希望显示的正交数据，DataTables可以通过{% include href/option/Columns.html param="column.data" %}或者{% include href/option/Columns.html param="columns.render" %}选项配置。

例如，有如下数据结构，`start_date`对象具有`display`属性，该属性将用于显示表中的数据，同时还具有`timestamp`属性，该属性将用于排序。这种格式的数据非常有用，因为日期显示的格式不容易进行排序：

```javascript
{
    "name":       "Tiger Nixon",
    "position":   "System Architect",
    "start_date": {
        "display": "Mon 25th Apr 11",
        "timestamp": "1303682400"
    },
    "office":     "Edinburgh"
}
```

要在表中使用这种格式的数据，我们可以用 {% include href/option/Columns.html param="columns" %}或者{% include href/option/Columns.html param="columnDefs" %}选项进行配置：

```javascript
columns:[
    {
        data: 'start_date',
        render: {
            _: 'display',
            sort: 'timestamp'
        }
    }
    ...
    //其他列配置
]
```

注意，当{% include href/option/Columns.html param="columns.data" %}或{% include href/option/Columns.html param="columns.render" %}用做对象，必须定义`_`属性。如果数据选项没有被定义，则`_`属性为”后备“（例如，上述对象中没有`display`选项）

实际操作参考这个[例子](https://datatables.net/examples/ajax/orthogonal-data)

### 计算值（Computed values）

如果你的数据源不包含预格式化的正交数据，则可以将
{% include href/option/Columns.html param="columns.data" %}和{% include href/option/Columns.html param="columns.render" %}作为函数提供。这些函数将用于计算显示需要的数据。

举个例子，有如下结构的数据：
```javascript
{
    "name":       "Tiger Nixon",
    "position":   "System Architect",
    "start_date": "1303682400",
    "office":     "Edinburgh"
}
```

尽管时间戳的格式对于计算机来说很友好，但是对于最终用户来说实际是没有用的。为了解决这个问题，我们可以使用{% include href/option/Columns.html param="columns.render" %}作为函数来计算要显示的值，{% include href/option/Columns.html param="columns.data" %}选项告诉渲染器使用什么数据：

```javascript
columns:[
    {
        data: 'start_date',
        render: function ( data, type, row ) {
            // If display or filter data is requested, format the date
            if ( type === 'display' || type === 'filter' ) {
                var d = new Date( data * 1000 );
                return d.getDate() +'-'+ (d.getMonth()+1) +'-'+ d.getFullYear();
            }
    
            // Otherwise the data type requested (`type`) is type detection or
            // sorting data, for which we want to use the integer, so just return
            // that, unaltered
            return data;
        }
    }
    ...
    //其他列配置
]
```

有关将渲染器与DataTables一起使用的更多信息，请参考[渲染器](https://datatables.net/manual/data/renderers)的指导手册和{% include href/option/Columns.html param="columns.render" %}参考文档。

## HTML 5

如果要用{% include href/option/Data.html param="ajax" %}加载数据，则上述使用数据源正交数据的方法非常有用，但是如果您的表已经存在于HTML中，它就没那么有用了。对于此，DataTables支持[`data-*`属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#data-*)，可用于保存DOM中可见的信息，但是对最终用户是不可见的。

DataTables将自动检测下面这些属性在HTML的单元格上：

- `data-sort` 或者 `data-order` 用于排序数据
- `data-filter` 或者 `data-search` 用于过滤数据

举个例子，有如下结构的HTML表格行：
```html
<tr>
    <td data-search="Tiger Nixon">T. Nixon</td>
    <td>System Architect</td>
    <td>Edinburgh</td>
    <td>61</td>
    <td data-order="1303682400">Mon 25th Apr 11</td>
    <td data-order="3120">$3,120/m</td>
</tr>
```

注意：
- 第一列有`data-search`属性，在这种情况下，允许搜索姓名全称，而显示在按照缩写形式。
- 第五列有时间，显然它不能直接排序，所以`data-order`用来提供时间戳进行排序。
- 第六列也有`data-order`属性，在这个情况下，提供格式化数字的数字形式进行排序。

为了正确检测和处理HTML `data-*`属性，列中的所有单元格必须具有可以用的相同属性，如果没有，DataTables将会给出一个警告。

实际操作参考这个[例子](https://datatables.net/examples/advanced_init/html5-data-attributes.html)

### API 接口

当DataTables从HTML表中读取数据时，默认情况下，它将把每一行中的数据读入数组（你也可以使用{% include href/option/Columns.html param="columns.data" %}进行[自定义](https://datatables.net/manual/data/#Objects)）。当DataTables检测到正交HTML5属性时，它将信息读入一个对象，从而允许每个单元有多个数据点（如果需要）。

如果某个单元格存在正交数据，则该单元格的内容（即用户看到的内容）将被复制到`display`属性中。将HTML5属性复制到具有与属性相同名称但带有`@`前缀的属性中。

如上面的html代码，它将会被读取为下面的数据格式：

```javascript
{
    "0": {
        "display": "T. Nixon",
        "@data-search": "Tiger Nixon"
    },
    "1": "System Architect",
    "2": "Edinburgh",
    "3": "61",
    "4": {
        "display": "Mon 25th Apr 11",
        "@data-order": "1303682400"
    },
    "5": {
        "display": "$3,120/m",
        "@data-order": "3120"
    }
}
```

如果你不使用DataTables API操作表格中的数据，那么也也不需要知道这个数据结构。然而，如果你需要读取数据（比如使用{% include href/api/Rows.html param="row().data()" %}）或者添加一行新的数据（{% include href/api/Rows.html param="row.add()" %}，注意需要**1.10.20+**版本才支持），您需要确保使用与DataTables读取数据相同的数据结构，如果没有，你会得到[ Requested unknown parameter ](https://datatables.net/tn/4)错误。

要检查DataTables用于行的数据结构，可以使用`console.log(myTable.row(':eq(0)').data() )`以显示表中第一行的数据。