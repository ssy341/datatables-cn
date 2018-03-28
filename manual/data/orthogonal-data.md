---
title: 正交数据 Orthogonal data
keywords: 手册 安装 Orthogonal data
sidebar: mydoc_sidebar
permalink: manual/data/orthogonal-data.html
---

数据很复杂。您的表格中显示的数据不仅具有与每个数据点与您表格中的其他数据点相对应的规则，而且每个数据点本身可以​​具有多种形式
考虑货币数据;用于显示，可能会显示带有货币符号和千位分隔符的格式，而排序应该以数字形式发生，并且对数据的搜索将接受任一形式。


在DataTables中，我们称这个正交数据。

DataTables有四个内置数据操作，每个操作都可能使用正交（独立）数据源。这四个操作是：

- display - Display data
- sort - Data used for ordering
- filter - Data used for searching
- type - Type detection data


默认情况下，DataTables将对所有四个操作使用相同的数据，但可以使用数据和columns.render初始化选项或HTML 5数据属性轻松修改

## Data source

可以通过数据源数组/对象提供表的正交数据（请注意，对象更容易处理，因为你不需要记住数组索引！）作为预定义的值（通常这是用Ajax加载的数据或Javascript提供的数据源完成的），
或者可以在需要时即时计算它们。

### Predefined values

如果您的数据源具有您希望显示的正交数据，DataTables可以通过将columns.data和/或columns.render选项作为对象直接使用。


例如考虑以下日期结构 - 请注意，start_date对象具有格式良好的显示属性，该属性将用于显示表中的数据，同时还包含timestamp属性。
在这种情况下这很有用，因为为日期显示选择的格式不容易排序：

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

要在表格中以这种格式使用数据，我们可以使用以下选项作为列或columnDefs列描述： 使用Javascript

```
{
    data: 'start_date',
    render: {
        _: 'display',
        sort: 'timestamp'
    }
}
```

请注意，使用columns.data或columns.render作为对象时，必须定义_属性。如果尚未定义数据选项（例如，上述对象中没有显示选项），_属性就是'后备'。


