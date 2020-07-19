---
layout: manual
toc: true
title: 渲染器 Renderers
author: /manual/data/renderers
navcategory: data
---


在使用表格展示数据的情况下，表中行的数据源有时不包含您希望直接显示在表中的显示的值。您可能希望将其转换为其他表现形式（将时间戳转换为可读格式），合并数据点（名字和姓氏）或对该值进行一些计算（根据营业额和费用值计算保证金）。

将原始数据转换为将在Datatables中显示的值的过程在Datatables的属于称为**渲染**，并使用{% include href/option/Columns.html param="columns.render" %}选项执行。

## 数据渲染 Data rendering

在Datatables中使用数据渲染器的主要优点是您可以修改输出数据而无需修改原始数据。{% include href/option/Columns.html param="columns.data" %}方法可以用于获取和设置数据，但是设置操作会增加复杂性，因此建议{% include href/option/Columns.html param="columns.data" %}选项仅用于指向数据的原始数据，只读，而{% include href/option/Columns.html param="columns.render" %}选项作为渲染器转换数据。

{% include href/option/Columns.html param="columns.render" %}可以以多种不同的方式使用：

- 作为一个**方法**来转换数据
- 作为一个**字符串**从一个对象里选择数据

### 方法 Functions

使用{% include href/option/Columns.html param="columns.render" %}是最常见的方法，因为它可以绝对控制将显示给最终用户的数据（这是常规的Javascript函数，因此您可以几乎可以对数据做任何操作）。

该函数传递三个参数：

- 1，{% include href/option/Columns.html param="columns.data" %}指定的数据。如果{% include href/option/Columns.html param="columns.data" %}是`null`，那这里也会返回`null`。
- 2，Datatables请求的数据类型，这允许该功能支持[正交数据][orthogonal-data]
- 3，该行的原始和完整数据对象或数组。

函数的返回值是Datatables将用于请求的数据（显示，排序，搜索等）。


例如，有如下结构的数据，数据集中的某一行：

```javascript
{
    "product": "Toy car",
    "creator": {
        "firstName": "Fiona",
        "lastName": "White"
    },
    "created": "2015-11-01",
    "price": 19.99,
    "cost": 12.53
}
```

#### 附加处理 Adding formatting

在我们的Datatables中，如果我们希望有一个显示价格的列，通常希望在其前面加上货币符号。在这种情况下，我们是用人民币符号（另参见下面的内置数字渲染器，他提供了高级格式设置选项）：

```javascript
columns:[
    {
        data: 'price',
        render: function ( data, type, row ) {
            return '￥'+ data;
        }
    }
    //其他列配置
]
```

#### 连接字符串 Joining strings

在我们Datatables中，如果我们希望有一个显示创建者全名的列，我们可以使用如下方式来连接字符串（特别注意，作为第一个参数传递，`creator`对象如何通过使用{% include href/option/Columns.html param="columns.data" %}选项进行分配）

```javascript
columns:[
    {
        data: 'creator',
        render: function ( data, type, row ) {
            return data.firstName +' '+ data.lastName;
        }
    }
    //其他列配置
]
```

#### 转换数据 Transforming data

对于另一列，我们希望显示`created`的值，但是需要使用美国标准的`MM-DD-YYYY`格式进行格式化。只需拆分字符串并重新排列组成即可完成此操作。同时，我们还希望日期是可以排序的，而Datatables内置了对ISO8601格式字符串（原始格式）的支持，这样即便更改了格式还是可以正常的排序（我们希望仅对显示{% include href/string.html param="display" %}和过滤{% include href/string.html param="filter" %}数据类型执行转换，更多信息参考[正交数据][orthogonal-data]）：

```javascript
columns:[
    {
        data: 'created',
        render: function ( data, type, row ) {
            var dateSplit = data.split('-');
            return type === "display" || type === "filter" ?
                dateSplit[1] +'-'+ dateSplit[2] +'-'+ dateSplit[0] :
                data;
        }
    }
    //其他列配置
]
```

#### 计算值 Computing values

最后，要从`price`和`cost`字段创建保证金列，我们可以使用函数来计算所需要的值，请注意，在这种情况下，{% include href/option/Columns.html param="columns.data" %}为`null`，所以传递给{% include href/option/Columns.html param="columns.render" %}方法的第一个参数也为`null`，但是第三个参数提供对原始数据源对象的访问，因此我们可以从第三个参数里继续使用数据：

```javascript
columns:[
    {
        data: null,
        render: function ( data, type, row ) {
            return Math.round( ( row.price - row.cost ) / row.price * 100 )+'%';
        }
    }
    //其他列配置
]
```

以上四种操作即对该行数据做了渲染处理，完整的配置如下所示：

```javascript
columns:[
    {
        data: 'price',
        render: function ( data, type, row ) {
            return '￥'+ data;
        }
    },
    {
        data: 'creator',
        render: function ( data, type, row ) {
            return data.firstName +' '+ data.lastName;
        }
    },
    {
        data: 'created',
        render: function ( data, type, row ) {
            var dateSplit = data.split('-');
            return type === "display" || type === "filter" ?
                dateSplit[1] +'-'+ dateSplit[2] +'-'+ dateSplit[0] :
                data;
        }
    },
    {
        data: null,
        render: function ( data, type, row ) {
            return Math.round( ( row.price - row.cost ) / row.price * 100 )+'%';
        }
    }
]
```

---

### 字符串 Strings

格式化不那么常见的选择是作为一个字符串，它仅指向表中应使用的数据。这个操作与使用{% include href/option/Columns.html param="columns.data" %}的方式类似，但是请记住，这样渲染只能访问到{% include href/option/Columns.html param="columns.data" %}指向的数据，而不能访问整行的数据。

从上面的JSON数据结构示例，我们需要有一列显示创建者的名字的列：
```javascript
columns:[
    {
        data: 'creator',
        render: 'firstName'
    }
    //其他列配置
]
```
这里只是简单的使用对象的数据，感觉有些多次一举，没有什么实用价值，在此例子中可以直接使用`data:'creator.firstName`来达到目的，但是，如果您的数据源对象中包含具有正交数据的复杂数据，这时候就会很有用了。

---

## 内置辅助函数 Built-in helpers

Datatables具有两个内置的渲染器辅助函数，可以用于轻松格式化数据，可以使用插件添加更多功能（请参见下文）：

- `number` 为了格式化数字
- `text` 安全地显示来自潜在不安全来源的文本（HTML实体被转义）

内置的渲染器辅助函数可以在`$.fn.dataTable.render`对象下访问。它们是函数（允许将选项传递给它们），应立即执行并将其结果分配给{% include href/option/Columns.html param="columns.render" %}方法。这听起来可能有些复杂，但这意味着您将使用以下内容：

```javascript
columns:[
    {
        data: 'price',
        render: $.fn.dataTable.render.number( ... )
    }
    //其他列配置
]
```

---

### 数字辅助函数 Number helper

`number`辅助函数提供了轻松格式化数字的功能。处理数字时，您可能经常希望添加格式，前缀和后缀字符（比如货币标示符），使用千位分隔符并制定数字的精度。使用`number`辅助函数可以做到这些。

辅助函数最多包含五个可选参数：

- 1，千位分隔符（必须）
- 2，小数点分隔符（必须）
- 3，浮点精度，`0`代表整数，`1`代表1位小数，等等（可选）
- 4，前缀字符串（可选）
- 5，后缀字符串（可选）

举个例子，以`￥19.99`的格式显示`price`数据，我们将使用：

```javascript
columns:[
    {
        data: 'price',
        render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
    }
    //其他列配置
]
```
这个例子不需要千位分隔符，但是对于较大的值（例如`1000`），他们的格式因为`￥1,000.00`。

注意，如果`number`辅助函数遇到的值不是有效数字（{% include href/type/DataTables.html param="number" %}或者是包含数字的 {% include href/type/DataTables.html param="string" %}）转义其中的HTML实体后，返回该值（帮助防止潜在的安全攻击）。

---

### 文本辅助函数 Text helper

`text`辅助函数将通过转义HTML实体来确保不会执行源数据中任何潜在危险的HTML。如果正在加载的数据可能来自潜在的不受信任的数据源，并且可以帮助缓解[XSS攻击][xss]，这是很有帮助的。

`text`辅助函数不接受任何参数，使用非常简单：

```javascript
columns:[
    {
        data: 'product',
        render: $.fn.dataTable.render.text()
    }
    //其他列配置
]
```

---

## 自定义辅助函数 Custom helpers

渲染器辅助函数只是附加到`$.fn.dataTable.render`的函数，使它可以从一个位置轻松访问。这些函数必须返回将与{% include href/option/Columns.html param="columns.render" %}方法一起操作的函数。

例如下面一个简单的插件，该插件将在给定数量的字符后截断文本，如果字符串比允许的字符数长，则显示省略号：

```javascript
$.fn.dataTable.render.ellipsis = function ( cutoff ) {
    return function ( data, type, row ) {
        if ( type === 'display' ) {
            var str = data.toString(); // cast numbers
 
            return str.length < cutoff ?
                str :
                str.substr(0, cutoff-1) +'&#8230;';
        }
 
        // Search, order and type can use the original data
        return data;
    };
};
```
然后，我们可以在Datatables列定义中使用它：
```javascript
columns:[
    {
        data: 'description',
        render: $.fn.dataTable.render.ellipsis( 10 )
    }
    //其他列配置
]
```
[Datatables插件仓库][dataRender]中提供了更全面的省略号渲染辅助函数，并带有分行符和HTML转义控件。


---

### 贡献 Contributing

如果您编写了要与Datatables社区共享的渲染辅助函数，首先，谢谢！可以将渲染器辅助函数提交到[插件仓库][dataRender]，并且非常欢迎pull requests。另外，如果您还没有Github账户，也可以在[Datatables论坛][forums]发布代码。


---



[orthogonal-data]:  {{ site.baseurl }}/manual/data/orthogonal-data.html

[xss]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)

[dataRender]: https://github.com/DataTables/Plugins/tree/master/dataRender


[forums]: https://datatables.net/forums
