---
title: Ajax
keywords: 手册 Ajax
sidebar: mydoc_sidebar
permalink: manual/ajax.html
reference: https://datatables.net/manual/ajax
---

DataTables可以通过三种方式获取数据：

- [HTML DOM](https://datatables.net/manual/data#DOM)
- [Javascript数组](https://datatables.net/manual/data#Javascript)
- Ajax获取数据

本篇介绍第三种方式，它可以很方便加载数据。例如，通过http api获取数据，将逻辑从HTML分离出来

使用Ajax预加载数据额外的好处就是你可以使用DataTables的{% include option.html name="deferRender" %}选项提高性能，
此选项能够在页面需要显示DOM元素才创建DOM元素，从而减少数据首次插入到表中时的初始化CPU负载。


## 加载数据（Loading data）

只需要给属性 {% include option.html name="ajax" %} 配置加载数据的URL地址，DataTables就会去加载数据。例如下面的代码，使用Ajax数据源的
最简配置：

```javascript
$('#myTable').DataTable( {
    ajax: '/api/myData'
} );
```

## JSON数据源（JSON data source）

当我们考虑使用Ajax加载数据时，我们认为的是一个[JSON](https://json.org/)数据，比如从服务器获取的数据是要满足JSON格式的数据。
因为JSON是由Javascript派生出来，自然Javascript库（比如DataTables）使用JSON无疑是最好的选择。而且JSON也是一个紧凑且易于理解的
的数据格式，在Javascript届是非常流行的。

当然除了JSON，还可以使用 [XML](https://en.wikipedia.org/wiki/XML) 和 [YAML](https://en.wikipedia.org/wiki/YAML) 这些格式，
尽管这些格式在使用之前还是需要转换为Javascript对象（JSON）表示，这项工作是通过 {% include option.html name="ajax.dataSrc" %} 选项完成。
本文的剩下部分仅仅指讨论使用JSON的情况。

使用JSON数据需要关注以下两个关键信息：

- 表格中每行的数据的数组在对象中
- 每列的数据点在行对象/数组中

## 数据排列位置（Data array location）

DataTables需要一个数组来表示表格的数据，其中数组中的每一个项都是一行。这个项通常来讲是一个对象或者是一个数组（详细的在下面讨论）- 
所以使用DataTables第一件事就是告诉它该数组在数据源中的位置。

下面列举三种常见的JSON数据格式，每个数据都具有相同的数据格式，但是所在的位置是不一样的。每一种JSON格式都是有效的，在不同的环境使用，
没有单一的“正确方法”！

{% include option.html name="ajax.dataSrc" %}选项用于告诉DataTables所需要用到的数据在JSON的那个位置。
{% include option.html name="ajax.dataSrc" %}通常以字符串的形式给出，表示Javascript对象表示法中的位置。
比如只需要告诉数组的所在的属性名称即可！空字符串是一个特殊情况，它告诉DataTables接受的是一个数组（下面第一个例子）

下面显示三种数据结构该如何初始化：

1) 简单数组数据：

```javascript
//接口/api/myData返回如下格式
[
    {
        "name": "Tiger Nixon",
        "position": "System Architect",
        "salary": "$320,800",
        "start_date": "2011/04/25",
        "office": "Edinburgh",
        "extn": "5421"
    },
    ...
]

$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: ''
    },
    columns: [ ... ]
} );

```

2) 对象中包含 `data` 属性，注意 `data` 属性是DataTables默认使用的属性，所以下面的数据有两种方式初始化：

```javascript
//接口/api/myData返回如下格式
{
    "data": [
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$320,800",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        ...
    ]
}

//默认读取data属性
$('#myTable').DataTable( {
    ajax: '/api/myData',
    columns: [ ... ]
} );


//指定读取data属性
$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: 'data'
    },
    columns: [ ... ]
} );

```

3) 对象中包含 `staff` 属性：

```javascript
//接口/api/myData返回如下格式
{
    "staff": [
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$320,800",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        ...
    ]
}

$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: 'staff'
    },
    columns: [ ... ]
} );
```

## 列数据点（Column data points）

现在DataTables知道从哪里获取数据，我们还要告诉DataTables该行每个单元格的数据从哪里获取。这个操作由 
{% include option.html name="columns.data" %}选项完成。

我们再用三种常见的JSON格式来作为示例讲解，每种情况只显示一行数据。

接下来你看到的，在这三种情况下，数据都可以应用到行中，但每种情况JSON的结构不一样。
使用{% include option.html name="columns.data" %}选项告诉DataTables每列的数据从哪里获取。

像上面 {% include option.html name="ajax.dataSrc" %} 选项一样，
{% include option.html name="columns.data" %} 通常以字符串的形式给出，该字符串表示Javascript对象数据的位置。
它也可以数组下标的方式给出。

下面显示三种数据结构该如何初始化：

1) 数组数据 - 注意数组格式是不需要设置{% include option.html name="columns.data" %}选项，因为默认情况下就是采用的数组方式，
这里是为了说明不同的格式的初始化方式

```javascript
[
    "Tiger Nixon",
    "System Architect",
    "$320,800",
    "2011/04/25",
    "Edinburgh",
    "5421"
]

//默认情况直接使用如下代码初始化
$('#myTable').DataTable( {
    ajax: ...
} );

//或者以下初始化方法
$('#myTable').DataTable( {
    ajax: ...,
    columns: [
        { data: 0 },
        { data: 1 },
        { data: 2 },
        { data: 3 },
        { data: 4 },
        { data: 5 }
    ]
} );

```

2) 对象数据

```javascript
{
    "name": "Tiger Nixon",
    "position": "System Architect",
    "salary": "$320,800",
    "start_date": "2011/04/25",
    "office": "Edinburgh",
    "extn": "5421"
}

$('#myTable').DataTable( {
    ajax: ...,
    columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'state_date' },
        { data: 'office' },
        { data: 'extn' }
    ]
} );
```

3) 嵌套对象 - 在这种情况下，我们可以使用诸如`hr.position`之类的对象点属性的的符号来访问嵌套数据

```javascript
{
    "name": "Tiger Nixon",
    "hr": {
        "position": "System Architect",
        "salary": "$320,800",
        "start_date": "2011/04/25"
    },
    "contact": {
        "office": "Edinburgh",
        "extn": "5421"
    }
}

$('#myTable').DataTable( {
    ajax: ...,
    columns: [
        { data: 'name' },
        { data: 'hr.position' },
        { data: 'hr.salary' },
        { data: 'hr.state_date' },
        { data: 'contact.office' },
        { data: 'contact.extn' }
    ]
} );
```

## 在线例子（Live examples）

 [这里](https://datatables.net/examples/ajax/) 包含了许多怎么使用Ajax获取数据的例子
 
## Ajax配置（Ajax configuration）

值得提出的是，目前DataTables不支持通过Ajax进行配置，这将是未来需要考虑的内容。


