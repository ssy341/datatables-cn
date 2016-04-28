---
layout: reference
title: 单元格生成以后的回调函数，这样你可以在这里改变DOM
caption: columns.createdCell
relurl: https://datatables.net/reference/option/columns.createdCell
since: DataTables 1.10
belong: 选项(option) 参考(reference)
---
## 说明（Description）
This is a callback function that is executed whenever a cell is created (Ajax source, etc) or read from a DOM source.
It can be used as a complement to {% include href/option/columns.render.dt %}
allowing modification of the cell's DOM element (add background colour for example) when the element is
 created (cells may not be immediately created on table initialisation if
 {% include href/option/deferRender.dt %}is enabled, or if rows are dynamically added using the API
 （{% include href/api/rows.add %}）

This is the counterpart callback for rows,
which use the{% include href/option/option.callbacks param='createdRow' %}

## 类型（Type）

*function* **createdCell( cell, cellData, rowData, rowIndex, colIndex )**

参数（Parameters）:

{% include_relative columns.createdCell.type.html %}
