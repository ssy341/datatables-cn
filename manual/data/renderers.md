---
title: 渲染器 Renderers
keywords: 手册 渲染器 Renderers
sidebar: mydoc_sidebar
permalink: manual/data/renderers.html
reference: https://datatables.net/manual/data/renderers
---

有些情况下使用表格时，表中的数据源不包含你希望直接显示在表格中的值。
你可能希望转换为其它显示方式（比如时间戳转为可读的日期格式），多个数据组合（姓氏和名字组合）或者
对某些值进行计算（商品打折优惠金额）。

将原始数据转换为要在DataTables显示的值的这种转换在DataTables术语里叫渲染，并使用 
{% include option.html name='columns.render' %} 选项来执行这个转换操作。

## 数据渲染（Data rendering）

在DataTables中使用数据渲染器的主要优点是可以在不修改原始数据的情况下输出数据。
{% include option.html name='columns.data' %} 方法可以用于获取和设置数据，
但是设置操作会大大增加复杂性，建议仅使用 {% include option.html name='columns.data' %}选项
来读取数据，{% include option.html name='columns.render' %}来转换数据。

{% include option.html name='columns.render' %}有以下两种方式可以使用：

- 作为一个函数来转换数据
- 作为一个从对象中选择数据的字符串

### 函数（Functions）

使用 {% include option.html name='columns.render' %} 是最常用的方法，因为他可以绝对控制将什么样的数据呈现给最终用户
（他是一个Javascript函数，所以你可以获得数据之后做任何事情）。

该方法传递三个参数：

- 1, {% include option.html name='columns.data' %}指定的值，如果{% include option.html name='columns.data' %}指定的
`null`,则这里给出的值也是`null`
- 2, 数据的类型，即 display，filter，sort和type，详细参考 [正交数据](https://datatables.net/manual/data/orthogonal-data)
- 3, 这一行原始的数据

从函数返回的值是DataTables将用于处理的数据（显示，排序或者搜索等）。

例如有如下格式的一行数据：

```javascript
{
    "product": "Toy car",
    "description":"a miniature nonfunctioning replica of a car, esp one that children play with",
    "creator": {
        "firstName": "Fiona",
        "lastName": "White"
    },
    "created": "2015-11-01",
    "price": 19.99,
    "pay": 12.53
}
```

#### 添加格式化（Adding formatting）

现在假设，我们要在一列中显示价格，那么希望用货币符号作为前缀是比较常见的。
在这种情况下，我们使用人民币符号：

```javascript
{
    data: 'price',
    render: function ( data, type, row ) {
        return '￥'+ data;
    }
}
```

#### 添加字符串（Joining strings）

我们要在一列显示名字，这里以外国的名字作为例子，外国人的姓和名是分开的，现在我们要把它一次显示在一列中,
我们使用{% include option.html name='columns.render' %} 来连接两个字符串：

```javascript
{
    data: 'creator',
    render: function ( data, type, row ) {
        return data.firstName +' '+ data.lastName;
    }
}
```

#### 转换数据（Transforming data）

对于另一列，我们希望显示被创建的时间，使用标准的美国 MM-DD-YYYY 格式进行格式化。这个可以通过拆分字符串并重新组合来完成。
但我们任希望日期能够排序，并且DataTables已经对ISO8601格式字符串（原始格式）排序提供支持。
我们希望仅对 {% include string.html name="display" %}- 显示和{% include string.html name="filter" %} - 过滤这两个数据类型进行转换，
详细的参考 [正交数据](https://datatables.net/manual/data/orthogonal-data) 获得更多信息。

```javascript
{
    data: 'created',
    render: function ( data, type, row ) {
        var dateSplit = data.split('-');
        return type === "display" || type === "filter" ?
            dateSplit[1] +'-'+ dateSplit[2] +'-'+ dateSplit[0] :
            data;
    }
}
```

#### 计算值（Computing values）

最后我们要计算商品的优惠价格，我们可以使用函数来计算所需要的值。
注意，{% include option.html name='columns.data' %} 指定的是 `null` ,在{% include option.html name='columns.render' %} 
第一个参数里获得也是 `null`，但我们任可以通过第三个参数来获取这一行的原始数据：

```javascript
{
    data: null,
    render: function ( data, type, row ) {
        return Math.round( row.price - row.pay );
    }
}
```

### 字符串（Strings）

{% include option.html name='columns.render' %} 一个不太常见的情况就是作为选择数据的字符串来使用，它可以
简单指向表中应该使用的数据。这个用法类型于 {% include option.html name='columns.data' %} 的方式，但需要注意的是
渲染器只能通过{% include option.html name='columns.data' %} 指定的属性去访问数据而不是整行数据。  

继续使用上面的JSON数据示例，我们直接显示 `creator` 对象里的 `firstname` 属性:

```javascript
{
    data: 'creator',
    render: 'firstName'
}
```

对于上面的用法，DataTables还有更简单的用法，使用{% include option.html name='columns.data' %} 选项直接指定 
`data:'creator.firstname'` ， 但如果你的数据可能比本页给出JSON示例要复杂，使用这种上面的方式可能会更加方便。



## 辅助构建（Built-in helpers）

DataTables有两个内置的渲染器，可以轻松格式化数据 - 也有额外的插件可以渲染文字：

- 数字（Number）：用来格式化数字
- 文本（text）：用来格式化文字（HTML会被转义）

内置的渲染器通过 `$.fn.dataTable.render` 对象访问。它们是函数（允许传递参数给它们），立即执行并把结果返回给
{% include option.html name='columns.render' %} 方法。下面是使用的示例代码：

```javascript
{
    data: 'price',
    render: $.fn.dataTable.render.number( ... )
}
```

### 数字渲染器(Number helper)

数字渲染器提供了轻松格式化数字的能力。在处理数字的时候（比如金额），你可能希望添加货币符号，或者大数字用千分位分隔符来让数字更加
容易看懂。这些都可以由数字渲染器来完成。

数字渲染器总共有5个参数：

- 千分位分隔符（必须）
- 小数分隔符（必须）
- 浮点精度 - 0 表示整数，1表示小数点后一位，以此类推（可选）
- 前缀（可选）
- 后缀（可选）

例如，要以 ￥19.99 的格式显示，我们将使用：
```javascript
{
    data: 'price',
    render: $.fn.dataTable.render.number( ',', '.', 2, '￥' )
}
```
此示例金额比较小，不需要千分位分隔符但对于较大的值（如1000），它将被格式化为 ￥1,000.00。

注意，如果数字渲染器格式的值不是一个有效的数字（数字 {% include type.html name="number"%} 或者包含数字的字符串{% include type.html name="string"%} ），它会转义HTML后返回（帮助防范潜在的安全攻击）。


### 文字辅助（Text helper）

文本渲染器将确保源数据中任何潜在危险的HTML不会通过转义HTML来执行。
如果加载的数据是不可信的数据源，可以帮助缓解 [XSS攻击](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))

文本渲染器不像数字渲染器，不接受任何参数，直接使用即可，如下所示：

```javascript
{
    data: 'product',
    render: $.fn.dataTable.render.text()
}
```

## 自定义（Custom helpers）

渲染器只是附加到 `$.fn.dataTable.render` 的函数，方便你在任何地方使用。
这些方法必须返回一个方法用于{% include option.html name='columns.render' %} 方法使用。

例如，下面实现的一个简单的插件，该插件在给定数量的字符后截断文本，并在字符串长度超过允许的字符数时添加省略号：

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

在DataTables代码里我们可以这样使用上面的插件：

```javascript
{
    data: 'description',
    render: $.fn.dataTable.render.ellipsis( 10 )
}
```

结果显示被格式化为： a miniature... ，超过10的，将省略不显示，由...代替。

[DataTables 插件库](https://github.com/DataTables/Plugins/tree/master/dataRender) 还提供了更全面的省略号渲染器，带有分词和HTML转移控制。



### 贡献（Contributing）

如果你已经编写了想要与DataTables社区共享的渲染器，首先，谢谢！你可以将插件提交给 [插件库](https://github.com/DataTables/Plugins/tree/master/dataRender)，非常欢迎。
如果你没有Github账号，你也可以在[论坛](https://datatables.net/forums)里发布你的代码。