---
title: autoWidth
keywords: 文档 Option autoWidth
sidebar: mydoc_sidebar
permalink: reference/option/autoWidth.html
reference: http://datatables.net/reference/option/autoWidth
summary: DataTalbes特性控制，智能列宽控制 <div style='float:right;color:#ac5900;'>从DataTables 1.10版开始支持</div>
---

### Description

启用或者禁止自动列宽的计算。如果已经定义了列宽，禁止这个选项可以实现最优的性能（因为这个选项会耗费一点的时间去计算列宽）。
{% include option.html name="columns.width" %}


### Type

这个选项用下列的数据类型赋值。

- {% include type.html name="boolean" %}

### Default

- Value: `ture`

### Example

禁止智能列宽计算:

```javascript
$('#example').DataTable( {
  "autoWidth": false
} );
```

### 相关 （Related）

下面的选项是直接相关的，也可能是对您开发应用程序非常有用的。

API

- {% include api.html name="columns.adjust()" %}


Events

- {% include event.html name="column-sizing" %}


Options

- {% include option.html name="columns.width" %}


