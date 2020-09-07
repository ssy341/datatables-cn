---
layout: manual
toc: true
title: Server-side processing 服务端处理
author: /manual/server-side
style: >
    <style>
        tbody td {
            border-top: 1px solid #ddd;
        }
        tbody tr.odd {
            background-color: #f9f9f9;
        }
        tbody tr.even {
            background-color: #fff;
        }
        thead th {
            padding: 10px 18px;
            border-bottom: 1px solid #111;
            font-weight: bold;
        }
        tbody td {
            padding: 8px 10px;
        }
        table.dataTable.no-footer {
            border-bottom: 1px solid #111;
        }
    </style>
---

在处理成千上万数据的时候，从DOM获取数据会变的太慢或者不方便。为了解决这个问题，Datatables的服务端处理功能提供了一种方法，可以让服务器端的数据库引擎完成所有“繁重的工作”，然后Datatables只需要拿到处理好的数据绘制到浏览器上即可。因此，你可以轻松显示包含数百万数据的表。

使用服务端处理时，Datatables将向服务器发出Ajax请求，以获取页面上的信息，绘制表格（比如，分页，排序，搜索等）。Datatables将向服务器发送许多变量，以使其能够执行所需的处理，然后以Datatables所需的格式返回数据。

通过使用{% include href/Options.html param="serverSide" %}选项开启服务端处理，并使用{% include href/Options.html param="ajax" %}对其进行配置。关于配置的详细信息，参考下文。

## 请求参数（Sent parameters）
---

使用服务端处理向服务器发出请求时，Datatables将发送以下数据，让服务器知道需要哪些数据：

{% include_relative sentparameters.html %}



`order[i]`和`columns[i]`参数发送到服务器的数组信息：

- `order[i]`是一个数组，定义要排序的列。即如果数组的长度为1，则执行单列排序，否则执行多列排序。
- `columns[i]`是定义表中所有列的数组。

在上面两个情况下，`i`是一个整数，它会有变化以指示数组值。这些数据将会自动以数组的形式提供到后端。

## 返回数据（Returned data）
---

一旦Datatables发出了请求，并将上述的参数发送到服务端，它期望返回JSON数据，并设置以下的参数：


{% include_relative returneddata.html %}

除了上述控制整个表的参数外，Datatables还可以在每行数据源对象上使用以下可选参数，自动给绑定上：


{% include_relative returneddata-ext.html %}

下面的示例数据，显示了使用这些选项的数据格式。

## 配置（Configuration）
---

通过使用{% include href/Options.html param="serverSide" %}选项开启Datatables的服务端处理。只需要将其设置为`true`，Datatables就可以在服务端模式下运行。你还需要使用{% include href/Options.html param="ajax" %}选项来指定URL，Datatables将从该URL中获取需要显示的数据。因此，最简单的的服务端处理初始化代码如下：
```javascript
$('#example').DataTable( {
    serverSide: true,
    ajax: '/data-source'
} );
```

在上面的例子中，我们将其用作字符串，它指示Datatables使用其默认的设置来发出Ajax请求。但是，你可以通过将{% include href/Options.html param="ajax" %}选项作为对象来指定一些设置。作为对象，{% include href/Options.html param="ajax" %}选项直接映射到<a href="//api.jquery.com/jQuery.ajax/">jQuery <code>ajax</code></a>配置对象，因此可以在jQuery请求中使用的任何选项，也可以与Datatables一起使用！比如，我要发送一个POST的请求：

```javascript
$('#example').DataTable( {
    serverSide: true,
    ajax: {
        url: '/data-source',
        type: 'POST'
    }
} );
```
有关Datatables中可用的Ajax选项的更多信息，请参考{% include href/Options.html param="ajax" %}文档。

## 旧版（Legacy）
---

旧版本（1.9-）使用一组不同的参数请求服务器和接收。因此，为`Datatables 1.10+`编写的代码将无法与`Datatables 1.9-`一起使用。但是，`Datatables 1.10+`确实具有针对`Datatables1.9-`编写的兼容模式。通过使用旧的`sAjaxSource`参数（而不是使用新版的{% include href/Options.html param="ajax" %}参数）触发此兼容模式，或者通过设置`$.fn.dataTable.ext.legacy.ajax = true;`也可以触发此兼容模式。

`1.9-`版本，服务端处理文档请参考[这里][legacy]

## 样例数据（Example data）
---

使用数组作为表的数据源的服务端处理返回示例( [完整例子][serverside] )：

```json
{
    "draw": 1,
    "recordsTotal": 57,
    "recordsFiltered": 57,
    "data": [
        [
            "Angelica",
            "Ramos",
            "System Architect",
            "London",
            "9th Oct 09",
            "$2,875"
        ],
        [
            "Ashton",
            "Cox",
            "Technical Author",
            "San Francisco",
            "12th Jan 09",
            "$4,800"
        ],
        ...
    ]
}
```

使用数组作为表的数据源的服务端处理返回示例，其中还包含`DT_RowId`和`DT_RowData`作为表的数据源([完整例子][serverside-object-data])：

```json
{
    "draw": 1,
    "recordsTotal": 57,
    "recordsFiltered": 57,
    "data": [
        {
            "DT_RowId": "row_3",
            "DT_RowData": {
                "pkey": 3
            },
            "first_name": "Angelica",
            "last_name": "Ramos",
            "position": "System Architect",
            "office": "London",
            "start_date": "9th Oct 09",
            "salary": "$2,875"
        },
        {
            "DT_RowId": "row_17",
            "DT_RowData": {
                "pkey": 17
            },
            "first_name": "Ashton",
            "last_name": "Cox",
            "position": "Technical Author",
            "office": "San Francisco",
            "start_date": "12th Jan 09",
            "salary": "$4,800"
        },
        ...
    ]
}
```

[这里][serverside-example]还有更多关于服务端处理的例子。

[serverside]: https://datatables.net/examples/server_side/simple.html
[serverside-object-data]: https://datatables.net/examples/server_side/object_data.html
[serverside-example]: https://datatables.net/examples/server_side/
[legacy]: http://legacy.datatables.net/usage/server-side