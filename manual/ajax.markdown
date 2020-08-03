---
layout: manual
toc: true
title: Ajax
author: /manual/ajax
---

DataTables的数据本质上可以来自三个不同的地方：

- [HTML][theHtml] 当表已经存在并已填充数据时的理想选择
- [JavaScript数组][theJavaScript] 当你的数据存在于JavaScript数组中时使用
- **Ajax 数据源**

本手册的这一部分着眼于如何使用最后一种方式，教你可以特别方便的加载你的Ajax数据 - 例如通过HTTP API接口获取或者只是为了从HTML中分开表格数据逻辑。

使用Ajax加载的数据的另一个好处是可以启用DataTables的{% include href/option/Features.html param="deferRender" %}选项来提高性能。这个选项当它启动时，导致仅需要显示的数据会在页面上绘制DOM元素而创建DOM元素，从而减少了首次将数据插入表时的初始CPU负载。

## 加载数据（Loading data）

只需要使用 {% include href/option/Data.html param="ajax" %}选项设置获取数据的URL，即可通过DataTables加载Ajax数据。例如，以下显示使用Ajax数据源的最少配置：

```javascript
$('#myTable').DataTable( {
    ajax: '/api/myData'
} );
```

## JSON数据源（JSON data source）

当我们考虑使用Ajax加载数据给DataTables的时候，我们几乎总是指定一个**[JSON][JSON] payload**（payload意为，数据源中一系列信息中关键信息，即表格数据），比如数据从服务器返回的结构是JSON数据结构。这是因为JSON是从JavaScript派生的，因此它自然可以与JavaScript库（例如DataTables）一起很好地使用。它也是一种紧凑且易于理解的数据格式，已被证明在JavaScript世界中非常流行。

像[XML][XML]和[YAML][YAML]这样的数据格式，在使用前需要转为JavaScript对象表示法（即JSON），然后再和DataTables一起使用，通常使用{% include href/option/Data.html param="ajax.dataSrc" %}完成此操作。本文档余下部分将只讨论如何使用JSON的情况。

使用JSON数据源，我们需要注意两个关键信息：

- 表中的每行数据是否在数据源中
- 表中的列的数据点是否在行对象/数组中

## 告诉DataTables数据数组的位置(Data array location) 

DataTables需要一个数组的项目来代表表格中的数据，数组中的每个项目代表表格中的一行。该项目通常是一个对象或一个数组（更多讨论详情见下面介绍），所以，我们要做的第一件事就是告诉DataTables该数组在数据源中的位置。

例如，考虑下面给出的三种JSON数据对象，你可以看到三个结构中都包含相同的数据，但是每个数据数组在数据源中的位置都不同，下面演示他们该如何在表中显示。每个数据都是完全有效的，可以在不同的情况下使用-没有单一的“正确方法”！

{% include href/option/Data.html param="ajax.dataSrc" %}选项用来告诉DataTables在JSON结构中获取数据数组。{% include href/option/Data.html param="ajax.dataSrc" %}通常以字符串的方式给出，该字符串指示JavaScript对象表示法中的位置（只需将其设置为数组所在的属性的名称）。空字符串是一种特殊情况，它告诉DataTables需要一个数组即可（下面第一个例子展示了该情况的用法）。

分别显示这三个数据结构及其相应的DataTables初始化。

- 1)简单数组数据：

```javascript
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
}
```
如上数据结构使用如下代码初始化：

```javascript
$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: ''
    },
    columns: [ ... ]
} );
```

---

- 2)对象在`data`属性下，注意，此处有一种简写的方式和正常的配置方式，因为`data`是DataTables在数据源对象中查找的默认属性。

```javascript
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
```

如上数据结构使用如下代码初始化：

```javascript
//简写的方法，默认从数据源中的data属性去找数据数组
$('#myTable').DataTable( {
    ajax: '/api/myData',
    columns: [ ... ]
} );
 
// 或者使用标准的写法，指定在data中去找
$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: 'data'
    },
    columns: [ ... ]
} );
```
两种写法效果是一样的！

---

- 3)对象在`staff`属性下：

```javascript
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
```

如上数据结构使用如下代码初始化：

```javascript
$('#myTable').DataTable( {
    ajax: {
        url: '/api/myData',
        dataSrc: 'staff'
    },
    columns: [ ... ]
} );
```

## 告诉DataTables每一列数据点(Column data points)

现在，DataTables知道从何处获取行数据了，第二步就是告诉它从何处获取该行中每个单元格的数据。这个操作通过{% include href/option/Columns.html param="columns.data" %}选项完成。

这次，我们继续考虑三种不同的数据格式，下面三种情况下，每种情况下仅显示一行数据。（为了简洁起见，数据结构没有包装，像上面讨论的数据结构中）。

如你所见，在这三种情况下，该行使用相同的数据，但是JSON数据结构不同。我们使用{% include href/option/Columns.html param="columns.data" %}属性告诉DataTables从哪里获取每列的数据。

像上面讨论的{% include href/option/Data.html param="ajax.dataSrc" %}选项一样，{% include href/option/Columns.html param="columns.data" %}通常提供一个字符串来代表JavaScript对象表示法中所需数据的位置。它也可以其他形式给出，例如用于访问数组的索引值。

下面显示了这三个数据结构已经对应DataTables如何初始化：

- 1）数组数据，注意，数组不需要设置{% include href/option/Columns.html param="columns.data" %}选项。这是因为{% include href/option/Columns.html param="columns.data" %}的默认值就是列的索引（比如`0，1，2，3`）

```javascript
[
    "Tiger Nixon",
    "System Architect",
    "$320,800",
    "2011/04/25",
    "Edinburgh",
    "5421"
]
```

如上数据结构使用如下代码初始化：

```javascript
//简写方法
$('#myTable').DataTable( {
    ajax: ...
} );
 
// 或者是标准写法，指定数组索引
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

---

- 2）对象数据：

```javascript
{
    "name": "Tiger Nixon",
    "position": "System Architect",
    "salary": "$320,800",
    "start_date": "2011/04/25",
    "office": "Edinburgh",
    "extn": "5421"
}
```

如上数据结构使用如下代码初始化：

```javascript
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

---

- 3)嵌套对象，请注意，在这种清下，我们使用点对象表示法（例如`hr.positioin`）来访问嵌套数据。有这种功能，几乎所有JSON数据结构都可以与DataTables一起使用：

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
```

如上数据结构使用如下代码初始化：

```javascript
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

## 在线例子(Live examples)

[DataTables示例][DatatablesExamples]包含许多有关DataTables如何读取Ajax加载数据的示例。

## Ajax加载配置(Ajax configuration)

为了使我们的Ajax加载更加完整，值得指出的是，目前DataTables不支持通过Ajax进行配置。将来将对此进行考虑，但是JSON没有提供表示JavaScript函数的选项，该选项在DataTables配置中可能非常有用，因此，Ajax加载配置不能使用DataTables提供的所有选项。




[theHtml]: {{ site.baseurl }}/manual/data#DOM
[theJavaScript]: {{ site.baseurl }}/manual/data#Javascript
[JSON]: http://json.org/
[XML]: https://en.wikipedia.org/wiki/XML
[YAML]: https://en.wikipedia.org/wiki/YAML
[DatatablesExamples]: {{ site.baseurl }}/examples/ajax/