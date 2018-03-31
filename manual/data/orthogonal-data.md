---
title: 正交数据 Orthogonal data
keywords: 手册 数据 Orthogonal data
sidebar: mydoc_sidebar
permalink: manual/data/orthogonal-data.html
reference: https://datatables.net/manual/data/orthogonal-data
---

数据是很复杂的。你的表格中显示的数据是有规则的，每个数据点和其他数据点都是有对应关系的，数据点本身是可以有多种形式。
有如下情况-货币数据，显示这些数据可能会带有货币的符号和千位分隔符，但是排序应该以数字形式，而数据的搜索需要接受任意
一种形式。

在DataTables中，管以上这种情况叫做正交数据（Orthogonal data）。通俗的讲，用户看到的数据，和程序处理的数据是不一样的
，是独立的。

DataTables有4种内置数据操作，每个操作都使用独立的数据源。这四个操作是：

- {% include string.html name='display' %} 用来显示的数据
- {% include string.html name='sort' %} 用来排序的数据
- {% include string.html name='filter' %} 用来搜索的数据
- {% include string.html name='type' %} 用来类型检测的数据

默认情况下，DataTables的四个操作使用的是相同的数据，但可以使用 {% include option.html name='data' %} 和 
{% include option.html name='columns.render' %} 选项或者使用 HTML5 `data-*` 属性来改变。


## 数据源（Data source）

可以通过数组、对象数据源给表提供正交数据（注意，对象更容易处理，因为你不需要记住数组下标）作为预定义值（通常这是用
{% include option.html name="ajax" %} 加载的数据或者是Javascript提供的数据完成的），或者在需要的时候再计算出需要的值。

### 预定义值（Predefined values）

如果你的数据源已经包含你希望现实的正交数据，DataTables可以通过 {% include option.html name="columns.data" %} 或者
{% include option.html name="columns.render" %} 选项配置直接使用。

比方说有下面的数据格式，注意其中 `start_date` 对象里包含了两个属性：`display` 和`timestamp` 。这种情况下很有用，
`display` 用于显示，但是不能用于排序，不过 `timestamp` 这个时候就可以发挥作用了。

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

要在表格中使用诸如上面的数据格式，我们可以使用 {% include option.html name="columns.data" %} 或者 
{% include option.html name="columns.render" %} 来告诉DataTables怎么读取：

```javascript
{
    data: 'start_date',
    render: {
        _: 'display',
        sort: 'timestamp'
    }
}
```

{% capture desc1 %}
使用{% include option.html name="columns.data" %} 或者 
  {% include option.html name="columns.render" %} 时，<b>必须</b>定义 _ 属性。
  如果{% include option.html name="columns.data" %} 没有被定义， _ 属性是后备方案（
  参考这个 <a href="https://datatables.net/examples/ajax/orthogonal-data">例子</a>中的数据就就没有 display 属性）
{% endcapture %}

{% include note.html content=desc1 %}


### 计算值（Computed values）

如果你的数据源不包含预格式化的正交数据，则可以将
{% include option.html name="columns.data" %} 和
  {% include option.html name="columns.render" %} 选项作为函数，函数的返回值提供最终显示的数据。
  
例如，看下面数据结构：

```javascript
{
    "name":       "Tiger Nixon",
    "position":   "System Architect",
    "start_date": "1303682400",
    "office":     "Edinburgh"
}
```
虽然时间戳对于计算机来说是很友好的，但是对于最终用户来说却不友好。
为了解决这个问题，我们可以使用 {% include option.html name="columns.render" %} 函数来实时计算要显示的值。
{% include option.html name="columns.data" %} 来告诉DataTables要使用的是数据源的那个属性：

```javascript
{
    data: 'start_date',
    render: function ( data, type, row ) {
        // If display or filter data is requested, format the date
        // 如果是 display 或者 filter 数据处理，则格式化数据，否则直接用时间戳，即排序使用时间戳排序
        if ( type === 'display' || type === 'filter' ) {
            var d = new Date( data * 1000 );
            // 01-01-2018
            return d.getDate() +'-'+ (d.getMonth()+1) +'-'+ d.getFullYear();
        }
 
        // Otherwise the data type requested (`type`) is type detection or
        // sorting data, for which we want to use the integer, so just return
        // that, unaltered
        return data;
    }
}
```

有关使用渲染器更多的信息，请参阅手册 [渲染器](https://datatables.net/manual/data/renderers) 部分和 
 {% include option.html name="columns.render" %} 选项。

## HTML5

如果你是通过使用 {% include option.html name="ajax" %} 选项获取的数据，上述方法非常方便，但如果对于已经存在html的数据，
它就没有用了。对于这种情况，DataTables支持 HTML5 `data-*` 属性，这些信息可以隐藏到DOM中，但是用户是看不到的。

DataTables会自动检测HTML单元格的以下属性：

- `data-sort` 和 `data-order` : 用来排序数据
- `data-filter` 和 `data-search` : 用来搜索数据

例如，有下面格式的HTML：

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
分析：

- 第一列有 `data-search` 属性，允许进行全名搜索，而显示为缩写的方式
- 第五列的日期不能直接排序，因此使用 `data-order` 属性提供时间戳的形式用来排序
- 第六列也用了 `data-order` 属性，为了提供格式数字字符串的数字格式来排序

为了使用HTMl5 `data-*` 能够被检测并正常工作，单元格的属性必须具有上面列出的相同的属性，如果不是，DataTables会给出警告。
更详细的例子参考[这里](https://datatables.net/examples/advanced_init/html5-data-attributes.html)