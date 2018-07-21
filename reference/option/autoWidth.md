---
title: autoWidth
keywords: 文档 Option autoWidth
sidebar: mydoc_sidebar
permalink: reference/option/autoWidth.html
reference: http://datatables.net/reference/option/autoWidth
---

## 自动宽度（autoWidth）

控制DataTables列宽的智能控制


### 说明（Description）

启用或者禁止自动列宽的计算。如果已经定义了列宽，禁止这个选项可以实现最优的性能（因为这个选项会耗费一点的时间去计算列宽）。
{% include option.html name="columns.width" %}


### 数据类型（Type）

这个选项用下列的数据类型赋值。

- {% include type.html name="boolean" %}

### 默认值（Default）

- Value: `ture`

### 示例

禁止自动计算列宽:

```javascript
$('#example').DataTable( {
  "autoWidth": false
} );
```

### 相关 （Related）

下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include api.html name="columns.adjust()" %}


Events

- {% include event.html name="column-sizing" %}


Options

- {% include option.html name="columns.width" %}


